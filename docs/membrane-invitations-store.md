# MembraneInvitationsStore

The `MembraneInvitationsStore` is a typescript class that contains [async signals](https://www.npmjs.com/package/async-signals), which you can watch to get reactive updates in your elements.

```js
import { MembraneInvitationsStore, MembraneInvitationsClient } from "@darksoil-studio/membrane-invitations-zome";
const store = new MembraneInvitationsStore(new MembraneInvitationsClient(appClient, 'my-role-name'));
```

> Learn how to setup the `AppClient` object [here](https://www.npmjs.com/package/@holochain/client).

Learn more about the stores and how to integrate them in different frameworks [here](https://darksoil.studio/tnesh-stack).
