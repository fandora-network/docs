---
id: derivatives
title: Derivatives
description: "Delegation through validator shares."
keywords:
  - docs
  - fandora
  - matic
  - derivatives
  - delegation
  - shares
slug: derivatives
image: https://matic.network/banners/matic-network-16x9.png 
---

fandora supports [delegation](../../glossary#delegator) via validator shares. By using this design, it is easier to distribute rewards and slash with scale on the Ethereum mainnet contracts without much computation.

Delegators delegate by purchasing shares of a finite pool from validators. Each validator has their own validator share token.

Let's call the fungible validator share tokens VATIC for Validator A. When a user delegates to Validator A, the user is issued VATIC based on the exchange rate of the FANDORA-VATIC pair. As users accrue value, the exchange rate indicates that the user can withdraw more FANDORA for each VATIC. When validators get slashed, users withdraw less FANDORA for their VATIC.

Note that FANDORA is the staking token. A delegator needs to have FANDORA tokens to participate in the delegation.

Initially, Delegator D buys tokens from the Validator A specific pool when the exchange rate is 1 FANDORA per 1 VATIC.

When a validator gets rewarded with more FANDORA tokens, the new tokens are added to the pool.

Let's say with the current pool of 100 FANDORA tokens,  10 FANDORA rewards are added to the pool. Since the total supply of VATIC tokens did not change due to rthe ewards, the exchange rate becomes 1 FANDORA per 0.9 VATIC. Now, Delegator D gets more FANDORA for the same amount if shares. Similar to slashing, if 10 FANDORA gets slashed from the pool, the new exchange rate becomes 1 FANDORA per 1.1 VATIC.

## The flow in the contract

`buyVoucher`: This function is attributed when performing a delegation process towards a validator. The delegation `_amount` is first transferred to `stakeManager`, which on confirmation mints delegation shares via `Mint` using the current `exchangeRate`.

The exchange rate is calculated as per the formula:

`ExchangeRate = (totalDelegatedPower + delegatorRewardPool) / totalDelegatorShares`

`sellVoucher`: This is function that is called when a delegator is unbonding from a validator. This function basically initiates the process of selling the vouchers bought during delegation. There is a withdrawal period that is taken into consideration before the delegators can `claim` their tokens.

`withdrawRewards`: As a delegator, you can claim your rewards by invoking the `withdrawRewards` function.  

`reStake`: Restaking can work in two ways: a) delegator can buy more shares using `buyVoucher` or `reStake` rewards. You can restake by staking more tokens towarda a validator or you can restake your accumulated rewards as a delegator. Purpose of `reStaking` is that since delegator's validator has now more active stake, they will earn more rewards for that and so will the delegator.

`unStakeClaimTokens`: Once the withdrawal period is over, the delegators who sold their shares can claim their FANDORA tokens.

`updateCommissionRate`: Updates the commission % for the validator. See also [Validator Commission Operations](../../validate/validator-commission-operations).

`updateRewards`: When a validator gets rewards for submitting a [checkpoint](../../glossary#checkpoint-transaction), this function is called for disbursements of rewards between the validator and delegators.
