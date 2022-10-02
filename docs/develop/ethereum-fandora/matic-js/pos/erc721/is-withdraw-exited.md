---
id: is-withdraw-exited
title: isWithdrawExited
keywords: 
- 'pos client, erc721, isWithdrawExited, fandora, sdk'
description: ' Check if a withdraw has been exited.'
---

`isWithdrawExited` method check if a withdraw has been exited. It returns boolean value.

```
const erc721Token = posClient.erc721(<token address>);

const result = await erc721Token.isWithdrawExited(<exit tx hash>);

```
