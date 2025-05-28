import { ActionCommittedSignal } from '@darksoil-studio/holochain-utils';
import {
	ActionHash,
	AgentPubKey,
	Create,
	CreateLink,
	Delete,
	DeleteLink,
	DnaHash,
	DnaModifiers,
	EntryHash,
	MembraneProof,
	Record,
	RoleName,
	SignedActionHashed,
	Update,
} from '@holochain/client';

export type MembraneInvitationsSignal = ActionCommittedSignal<
	EntryTypes,
	LinkTypes
>;

export type MembraneInvitationsEvent = {
	type: 'Invite';
	recipients: Array<AgentPubKey>;
	role_name_to_clone: RoleName;
	dna_modifiers: DnaModifiers;
	membrane_proof: MembraneProof | undefined;
};

export type EntryTypes = never;

export type LinkTypes = string;
