import { toPromise, watch } from '@darksoil-studio/holochain-signals';
import { EntryRecord } from '@darksoil-studio/holochain-utils';
import { DnaModifiers, encodeHashToBase64 } from '@holochain/client';
import { dhtSync, pause, runScenario } from '@holochain/tryorama';
import { decode, encode } from '@msgpack/msgpack';
import { assert, expect, test } from 'vitest';

import { setup } from './setup.js';

test('send invite', async () => {
	await runScenario(async scenario => {
		const [alice, bob] = await setup(scenario);

		const modifiers: DnaModifiers = {
			network_seed: 'hey',
			properties: encode({}),
		};
		const cloneCell = await alice.player.appWs.createCloneCell({
			modifiers: {
				...modifiers,
				properties: decode(modifiers.properties),
			},
			role_name: 'membrane_invitations_test',
		});
		alice.player.appWs.cachedAppInfo = undefined;
		await alice.player.appWs.appInfo();

		await alice.store.client.sendInvitation(
			[bob.player.agentPubKey],
			'membrane_invitations_test',
			modifiers,
			undefined,
		);

		await pause(2000);

		const privateEvents = await toPromise(bob.store.privateEvents);
		assert.equal(Object.keys(privateEvents).length, 1);
	});
});
