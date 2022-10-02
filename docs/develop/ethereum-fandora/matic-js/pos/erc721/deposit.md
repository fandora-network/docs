---
id: deposit
title: deposit
keywords: 
- 'pos client, erc721, deposit, fandora, sdk'
description: 'Deposit a token from ethereum to fandora chain.'
---

`deposit` method can be used to deposit a token from ethereum to fandora chain.

```
const erc721RootToken = posClient.erc721(<root token address>, true);

const result = await erc721RootToken.deposit(<token id>, <user address>);

const txHash = await result.getTransactionHash();

const txReceipt = await result.getReceipt();

```
