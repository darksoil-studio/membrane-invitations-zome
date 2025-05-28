import { EntryRecord, ZomeClient } from '@darksoil-studio/holochain-utils';
import { PrivateEventSourcingClient } from '@darksoil-studio/private-event-sourcing-zome';
import {
	ActionHash,
	AgentPubKey,
	AppClient,
	CreateLink,
	Delete,
	DeleteLink,
	DnaModifiers,
	EntryHash,
	Link,
	MembraneProof,
	Record,
	SignedActionHashed,
} from '@holochain/client';
import { decode } from '@msgpack/msgpack';

import { MembraneInvitationsSignal } from './types.js';

export class MembraneInvitationsClient extends PrivateEventSourcingClient<MembraneInvitationsSignal> {
	constructor(
		public client: AppClient,
		public roleName: string,
		public zomeName = 'membrane_invitations',
	) {
		super(client, roleName, zomeName);
	}

	sendInvitation(
		recipients: AgentPubKey[],
		role_name_to_clone: string,
		dna_modifiers: DnaModifiers,
		membrane_proof: MembraneProof | undefined,
	): Promise<EntryHash> {
		return this.callZome('send_invitation', {
			recipients,
			role_name_to_clone,
			dna_modifiers,
			membrane_proof,
		});
	}
}
