import { 
  collectionSignal, 
  liveLinksSignal, 
  deletedLinksSignal, 
  allRevisionsOfEntrySignal,
  latestVersionOfEntrySignal, 
  immutableEntrySignal, 
  deletesForEntrySignal, 
  AsyncComputed,
  pipe,
} from "@darksoil-studio/holochain-signals";
import { slice, HashType, retype, EntryRecord, MemoHoloHashMap } from "@darksoil-studio/holochain-utils";
import { NewEntryAction, ExternalHash, Record, ActionHash, EntryHash, AgentPubKey } from '@holochain/client';

import { MembraneInvitationsClient } from './membrane-invitations-client.js';

export class MembraneInvitationsStore {

  constructor(public client: MembraneInvitationsClient) {}
  
}
