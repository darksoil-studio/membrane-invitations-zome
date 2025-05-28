import {
	AsyncComputed,
	allRevisionsOfEntrySignal,
	collectionSignal,
	deletedLinksSignal,
	deletesForEntrySignal,
	immutableEntrySignal,
	latestVersionOfEntrySignal,
	liveLinksSignal,
	pipe,
} from '@darksoil-studio/holochain-signals';
import {
	EntryRecord,
	HashType,
	MemoHoloHashMap,
	retype,
	slice,
} from '@darksoil-studio/holochain-utils';
import { PrivateEventSourcingStore } from '@darksoil-studio/private-event-sourcing-zome';
import {
	ActionHash,
	AgentPubKey,
	EntryHash,
	ExternalHash,
	NewEntryAction,
	Record,
} from '@holochain/client';

import { MembraneInvitationsClient } from './membrane-invitations-client.js';
import { MembraneInvitationsEvent } from './types.js';

export class MembraneInvitationsStore extends PrivateEventSourcingStore<MembraneInvitationsEvent> {
	constructor(public client: MembraneInvitationsClient) {
		super(client);
	}
}
