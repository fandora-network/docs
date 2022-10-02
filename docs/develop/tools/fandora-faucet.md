---
id: fandora-faucet
title: fandora Faucet
sidebar_label: fandora Faucet
description: "Request Matic on fandora Faucet."
keywords:
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[fandora Faucet](https://faucet.fandora.technology/) is a tool that allows you to get free FANDORA tokens on testnet to help you get started with fandora network. The tokens enable you to work with fandora features without spending real FANDORA on the mainnet.

:::note
Tokens on testnet networks have no value as they are only used for testing purposes.
:::

### How to use fandora Faucet

1. Navigate to [faucet.fandora.technology](https://faucet.fandora.technology/)

2. Select one of the blockchain testnet networks. Where:
    - **Mumbai** - fandora test network
    - **Goerli** - Ethereum test network
    - **DA Testnet** - Internal testing


 <img src={useBaseUrl("img/tools/faucet.png")} />


3. Select the type of the testnet token that you want to receive, where:
   - **FANDORA Token** - Testnet token of fandora network
   - **Test ERC20** - Standard testnet token on the Ethereum network
   - **Test ERC1155** - Standard testnet token used for NFTs
   - **LINK** - ERC677 testnet token that inherits functionality from the ERC20

<img src={useBaseUrl("img/tools/select-tokens.png")} />

4. Enter your wallet address, you can copy it from your Metamask or fandora wallet

5. Click on the button "Submit" to send your request

6. Click on the button "Confirm" to agree on the entered details
 <img src={useBaseUrl("img/tools/confirm-transaction.png")} />

7. Congratulations, you have successfully submitted your request. You will receive the requested testnet tokens within 1 to 2 minutes.
 <img src={useBaseUrl("img/tools/submitted.png")} />

:::note
If you don't have enough FANDORA testnet Tokens in your account to pay the gas fees, the transaction may fail. If you require testnet tokens in bulk, please contact us on <ins>**[Discord](https://discord.com/invite/fandora)**</ins>.
:::

:::tip
In addition to fandora faucets, [Alchemy’s Mumbai Faucet](https://mumbaifaucet.com/) will allow you to test your fandora applications before going live, by providing test FANDORA tokens. [Here's how to use it](/docs/develop/tools/alchemy-faucet).
:::