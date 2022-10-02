---
id: transfer
title: transfer
keywords: 
- 'plasma client, erc20, transfer, fandora, sdk'
description: 'Transfer erc20 plasma tokens.'
---

`transfer` method can be used to transfer amount from one address to another address.

```
const erc20Token = plasmaClient.erc20(<token address>);

const result = await erc20Token.transfer(<amount>,<to>);

const txHash = await result.getTransactionHash();

const txReceipt = await result.getReceipt();

```

## Transfer FANDORA token

FANDORA is native token on fandora. So we support transfer of matic tokens without any token address.

```
// initialize token with null means use FANDORA tokens
const erc20Token = plasmaClient.erc20(null);

const result = await erc20Token.transfer(<amount>,<to>);

const txHash = await result.getTransactionHash();

const txReceipt = await result.getReceipt();
```
