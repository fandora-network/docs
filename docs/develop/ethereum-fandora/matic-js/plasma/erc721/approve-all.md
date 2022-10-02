---
id: approve-all
title: approveAll
keywords: 
- 'plasma client, erc721, approveAll, fandora, sdk'
description: 'Approve all tokens.'
---

`approveAll` method can be used to approve all tokens.

```
const erc721RootToken = plasmaClient.erc721(<root token address>, true);

const approveResult = await erc721RootToken.approveAll();

const txHash = await approveResult.getTransactionHash();

const txReceipt = await approveResult.getReceipt();

```
