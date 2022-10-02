---
id: withdraw-confirm-faster
title: withdraw challenge faster
keywords: 
- 'pos client, erc20, withdrawConfirmFaster, fandora, sdk'
description: 'Confirm withdraw generating proof in the backend.'
---

`withdrawConfirmFaster` method is the second step in the plasma withdraw process. In this step, proof of your burn transaction (first transaction) is submitted and an erc721 token of equivalent value is created.

After this process is successful, challenge period is started and upon completion of the the challenge period, user can get back the withdrawn amount to their account on the root chain.

The challenge period is 7 days for mainnet.

It is fast because it generates proof in the backend. You need to configure [setProofAPI](/docs/develop/ethereum-fandora/matic-js/set-proof-api).

**Note**- withdrawStart transaction must be checkpointed in order to challenge the withdraw.

```
import { setProofApi } from '@maticnetwork/maticjs'

setProofApi("https://apis.matic.network/");

const erc20Token = plasmaClient.erc20(<token address>, true);

// start withdraw process for 100 amount
const result = await erc20Token.withdrawConfirmFaster(<burn tx hash>);

const txHash = await result.getTransactionHash();

const txReceipt = await result.getReceipt();

```

Once challenge period is completed, `withdrawExit` can be called to exit the withdraw process and get back the withdrawn amount.
