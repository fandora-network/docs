---
id: index
title: 'POSClient'
keywords: 
- 'maticjs, pos client, contract, fandora, sdk'
description: 'POSClient allows you to interact with POS Bridge.'
---

`maticjs` provides `POSClient` to interact with **POS** Bridge.

```
import { POSClient,use } from "@maticnetwork/maticjs"

const posClient = new POSClient();

await posClient.init({
    network: <network name>,  // 'testnet' or 'mainnet'
    version: <network version>, // 'mumbai' or 'v1'
    parent: {
      provider: <parent provider>,
      defaultConfig: {
            from: <from address>
      }
    },
    child: {
      provider: <child provider>,
      defaultConfig: {
            from: <from address>
      }
    }
});

```

Once `POSClient` is initiated, you can interact with all available APIS.
