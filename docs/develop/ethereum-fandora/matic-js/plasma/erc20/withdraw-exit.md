---
id: withdraw-exit
title: withdraw exit
keywords: 
- 'pos client, erc20, withdrawExit, fandora, sdk'
description: 'Exit the withdraw process.'
---

`withdrawExit` method can be used to exit the withdraw process once challenge period has been completed.

```
const erc20RootToken = plasmaClient.erc20(<root token address>, true);

const result = await erc20Token.withdrawExit();

const txHash = await result.getTransactionHash();

const txReceipt = await result.getReceipt();

```
