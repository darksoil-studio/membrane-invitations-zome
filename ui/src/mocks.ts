import {
	AgentPubKeyMap,
	HashType,
	HoloHashMap,
	ZomeMock,
	decodeEntry,
	fakeCreateAction,
	fakeDeleteEntry,
	fakeEntry,
	fakeRecord,
	fakeUpdateEntry,
	hash,
	pickBy,
} from '@darksoil-studio/holochain-utils';
import {
	ActionHash,
	AgentPubKey,
	AppClient,
	Delete,
	EntryHash,
	Link,
	NewEntryAction,
	Record,
	SignedActionHashed,
	decodeHashFromBase64,
	fakeActionHash,
	fakeAgentPubKey,
	fakeDnaHash,
	fakeEntryHash,
} from '@holochain/client';

import { MembraneInvitationsClient } from './membrane-invitations-client.js';

export class MembraneInvitationsZomeMock extends ZomeMock implements AppClient {
	constructor(myPubKey?: AgentPubKey) {
		super(
			'membrane_invitations_test',
			'membrane_invitations',
			'membrane_invitations_test_app',
			myPubKey,
		);
	}
}
