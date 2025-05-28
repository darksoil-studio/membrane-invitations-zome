import { createContext } from '@lit/context';

import { MembraneInvitationsStore } from './membrane-invitations-store.js';

export const membraneInvitationsStoreContext =
	createContext<MembraneInvitationsStore>('membrane_invitations/store');
