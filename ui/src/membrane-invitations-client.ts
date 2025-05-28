import { 
  SignedActionHashed,
  CreateLink,
  Link,
  DeleteLink,
  Delete,
  AppClient, 
  Record, 
  ActionHash, 
  EntryHash, 
  AgentPubKey,
} from '@holochain/client';
import { EntryRecord, ZomeClient } from '@darksoil-studio/holochain-utils';

import { MembraneInvitationsSignal } from './types.js';

export class MembraneInvitationsClient extends ZomeClient<MembraneInvitationsSignal> {

  constructor(public client: AppClient, public roleName: string, public zomeName = 'membrane_invitations') {
    super(client, roleName, zomeName);
  }
}
