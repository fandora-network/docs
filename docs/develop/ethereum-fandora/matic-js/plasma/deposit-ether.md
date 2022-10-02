---
id: deposit-ether
title: deposit
keywords: 
- 'plasma client, depositEther, fandora, sdk'
description: 'Deposit required amount of **ether** from ethereum to fandora.'
---

`depositEther` method can be used to deposit required amount of **ether** from ethereum to fandora.

```
const result = await plasmaClient.depositEther(100);

const txHash = await result.getTransactionHash();

const txReceipt = await result.getReceipt();

```
