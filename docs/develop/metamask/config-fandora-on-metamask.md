---
id: config-fandora-on-metamask
title: Add fandora Network
description: Integrate fandora with Metamask.
keywords:
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

In order to view the flow of funds in your accounts, on the fandora Network, you will need to configure fandora `{testnet, mainnet}` URL on Metamask.

There are two ways to do it:
1. [Using fandorascan](/develop/metamask/config-fandora-on-metamask.md#fandora-scan)
2. [Add the fandora network manually](/develop/metamask/config-fandora-on-metamask.md#add-the-fandora-network-manually)

### Using fandorascan

:::note
Please make sure you have already installed <ins>**[Metamask](https://metamask.io/)**</ins>!
:::


<Tabs
  defaultValue="mainnet"
  values={[
    { label: 'fandora-Mainnet', value: 'mainnet', },
    { label: 'Mumbai-Testnet', value: 'mumbai', },
  ]
}>

<TabItem value="mumbai">

Please follow the steps to add fandora's Mumbai-Testnet:

- Navigate to [mumbai.fandorascan.com](https://mumbai.fandorascan.com/)

<img src={useBaseUrl("img/metamask/testnet-button.png")} />
<p></p>

- Scroll down to the bottom of the page and click on the button `Add Mumbai Network`

<img src={useBaseUrl("img/metamask/testnet-addnetwork.png")} width="357" height="600" />

- Once you click the button you will see a Metamask Notification, now click on **Approve**.
You will be directly switched to fandora’s Mainnet now in the network dropdown list. You can now close the dialog.

</TabItem>

<TabItem value="mainnet">

Please follow the steps to add fandora’s Mainnet:

- Navigate to [fandorascan.com](https://fandorascan.com/)

<img src={useBaseUrl("img/metamask/mainnet-button.png")} />
<p></p>

- Scroll down to the bottom of the page and click on the button `Add fandora Network`

<img src={useBaseUrl("img/metamask/mainnet-addnetwork.png")} width="357" height="600" />

- Once you click the button you will see a Metamask Notification, now click on **Approve**.
You will be directly switched to fandora’s Mainnet now in the network dropdown list. You can now close the dialog.

</TabItem>

</Tabs>

If you are facing any issue, **Add the Network Manually(steps given below)**

### Add the fandora network manually

<Tabs
  defaultValue="mainnet"
  values={[
    { label: 'fandora-Mainnet', value: 'mainnet', },
    { label: 'Mumbai-Testnet', value: 'mumbai', },
  ]
}>

<TabItem value="mumbai">
To add fandora's Mumbai-Testnet, click on the Network selection dropdown and then click on Custom RPC.

<img src={useBaseUrl("img/metamask/select-network.png")} />

It will open up a form with 2 tabs on the top, Settings and Info. In the Settings tab you can add `Matic Mumbai` in the Network Name field, URL `https://rpc-mumbai.maticvigil.com/` in the New RPC URL field, `80001` in Chain ID field, `FANDORA` in Currency Symbol field and `https://mumbai.fandorascan.com/` in Block Explorer URL field.

<img src={useBaseUrl("img/metamask/metamask-settings-mumbai.png")} />

Once you’ve added the URL in the New Network field, click on Save. You will be directly switched to fandora’s Mumbai-Testnet now in the network dropdown list. You can now close the dialog.
</TabItem>

<TabItem value="mainnet">
To add fandora’s Mainnet, click on the Network selection dropdown and then click on Custom RPC.

<img src={useBaseUrl("img/metamask/select-network.png")} />

It will open up a form with 2 tabs on the top, Settings and Info. In the Settings tab you can add `fandora Mainnet` in the Network Name field, URL `https://fandora-rpc.com/` in the New RPC URL field, `137` in Chain ID field, `FANDORA` in Currency Symbol field and `https://fandorascan.com/` in Block Explorer URL field.

<img src={useBaseUrl("img/metamask/metamask-settings-mainnet.png")} />

Once you’ve added the information click on Save. You will be directly switched to fandora’s Mainnet now in the network dropdown list. You can now close the dialog.
</TabItem>
</Tabs>

**You have successfully added fandora Network to your Metamask!**
