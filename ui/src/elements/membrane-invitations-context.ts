import { appClientContext } from '@darksoil-studio/holochain-elements';
import { AppClient } from '@holochain/client';
import { consume, provide } from '@lit/context';
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { membraneInvitationsStoreContext } from '../context.js';
import { MembraneInvitationsClient } from '../membrane-invitations-client.js';
import { MembraneInvitationsStore } from '../membrane-invitations-store.js';

/**
 * @element membrane-invitations-context
 */
@customElement('membrane-invitations-context')
export class MembraneInvitationsContext extends LitElement {
	@consume({ context: appClientContext })
	private client!: AppClient;

	@provide({ context: membraneInvitationsStoreContext })
	@property({ type: Object })
	store!: MembraneInvitationsStore;

	@property()
	role!: string;

	@property()
	zome = 'membrane_invitations';

	connectedCallback() {
		super.connectedCallback();
		if (this.store) return;
		if (!this.role) {
			throw new Error(
				`<membrane-invitations-context> must have a role="YOUR_DNA_ROLE" property, eg: <membrane-invitations-context role="role1">`,
			);
		}
		if (!this.client) {
			throw new Error(`<membrane-invitations-context> must either:
        a) be placed inside <app-client-context>
          or 
        b) receive an AppClient property (eg. <membrane-invitations-context .client=\${client}>) 
          or 
        c) receive a store property (eg. <membrane-invitations-context .store=\${store}>)
      `);
		}

		this.store = new MembraneInvitationsStore(
			new MembraneInvitationsClient(this.client, this.role, this.zome),
		);
	}

	render() {
		return html`<slot></slot>`;
	}

	static styles = css`
		:host {
			display: contents;
		}
	`;
}
