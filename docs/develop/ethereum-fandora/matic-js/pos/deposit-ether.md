---
id: deposit-ether
title: deposit ether
keywords: 
- 'pos client, depositEther, fandora, sdk'
description: 'Deposit a required amount of ether from ethereum to fandora.'
---

`depositEther` method can be used to deposit required amount of **ether** from ethereum to fandora.

```
const result = await posClient.depositEther(<amount>, <userAddress>);

const txHash = await result.getTransactionHash();

const txReceipt = await result.getReceipt();

```
