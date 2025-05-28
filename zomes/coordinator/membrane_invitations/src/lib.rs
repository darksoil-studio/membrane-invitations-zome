use std::collections::BTreeMap;

use hdk::prelude::*;
use private_event_sourcing::*;

#[private_event]
pub enum MembraneInvitationsEvent {
    Invite {
        recipients: BTreeSet<AgentPubKey>,
        role_name_to_clone: RoleName,
        dna_modifiers: DnaModifiers,
        membrane_proof: Option<MembraneProof>,
    },
}

impl PrivateEvent for MembraneInvitationsEvent {
    fn validate(
        &self,
        _event_hash: EntryHash,
        _author: AgentPubKey,
        _timestamp: Timestamp,
    ) -> ExternResult<ValidateCallbackResult> {
        Ok(ValidateCallbackResult::Valid)
    }

    fn recipients(
        &self,
        _event_hash: EntryHash,
        _author: AgentPubKey,
        _timestamp: Timestamp,
    ) -> ExternResult<BTreeSet<AgentPubKey>> {
        match self {
            MembraneInvitationsEvent::Invite { recipients, .. } => Ok(recipients.clone()),
        }
    }
}

#[derive(Serialize, Deserialize, Debug)]
pub struct SendInvitationInput {
    recipients: BTreeSet<AgentPubKey>,
    role_name_to_clone: RoleName,
    dna_modifiers: DnaModifiers,
    membrane_proof: Option<MembraneProof>,
}

#[hdk_extern]
pub fn send_invitation(input: SendInvitationInput) -> ExternResult<EntryHash> {
    create_private_event(MembraneInvitationsEvent::Invite {
        recipients: input.recipients,
        role_name_to_clone: input.role_name_to_clone,
        dna_modifiers: input.dna_modifiers,
        membrane_proof: input.membrane_proof,
    })
}

pub fn query_membrane_invitations_events(
) -> ExternResult<BTreeMap<EntryHashB64, SignedEvent<MembraneInvitationsEvent>>> {
    query_private_events()
}

#[hdk_extern]
pub fn recv_remote_signal(signal_bytes: SerializedBytes) -> ExternResult<()> {
    if let Ok(private_event_sourcing_remote_signal) =
        PrivateEventSourcingRemoteSignal::try_from(signal_bytes)
    {
        recv_private_events_remote_signal::<MembraneInvitationsEvent>(
            private_event_sourcing_remote_signal,
        )
    } else {
        Ok(())
    }
}
