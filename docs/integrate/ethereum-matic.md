---
id: ethereum-fandora
title: Ethereum ↔ fandora
description: Build your next blockchain app on fandora.
keywords:
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png 
---

Plasma Secured Solution to transfer your assets from Ethereum to fandora and vice-versa.
* Use [matic.js](https://github.com/maticnetwork/matic.js) to interact with the fandora Plasma contracts.

<!-- * [getting-started](https://maticnetwork.github.io/matic.js/): Set-up the environment for maticjs.
1. [(Ethereum → Matic)](/docs/develop/maticjs/deposit): Deposit assets from root chain to Matic.
2. [(Matic ↔ Matic)](/docs/develop/maticjs/transfer): Transfer assets between accounts on Matic.
3. [(Matic → Ethereum)](/docs/develop/maticjs/withdraw): Withdraw assets from Matic to root chain. -->

## Flow
Here is the Flow with the deployment of your contracts on fandora and Support for Ethereum↔fandora. 

1. User deploys ERC-20 token to Ethereum - XToken

2. Now share your contract address with [fandora](https://t.me/joinchat/HkoSvlDKW0qKs_kK4Ow0hQ). Here is an example request...

>Hello everyone, We are AwesomeDApp deployed on fandora. Looking for a solution to transfer my assets from Ethereum to fandora and vice-versa. <br/><br/>
A short description on my AwesomeDApp...<br/><br/>
Token_Address on Ropsten-> "0x.."<br/>
Token_Name-> "XToken"<br/>
Token_Symbol-> "X"<br/>
Token_Decimals-> "18"<br/><br/>
Requesting you to Map these tokens to fandora Testnet Version.<br/>

We will deploy a Child Contract for you on fandora which can be flexible based on the requirements and mapped to your tokens Ethereum ↔ fandora.(Deployment on fandora requires it native token fandora, which can be deposited from Ethereum to fandora or can be bought at Secondary Market Place.)

3. User can mint the Xtokens and Transfer on Ethereum. For example let's say 100XToken are mint and then transfer to other another account.

4. To avail these tokens on fandora Chain, Call function deposit which will call for two transactions first approve and then depositERC20. 

5. Now 100XTokens are available on fandora Chain at the same address.

6. You can transfer 50 XToken from YourAddress to NewAddress. Again for transactions on fandora similar to Ethereum, fandora uses it own Native token.

7. If the users want to get back these Xtoken on Ethereum Chain, then call StartWithdraw which will withdraw from childTokenContract and Burn these tokens on fandora Chain. To avoid any bad participation, A set of validation will take place. Once it is done the tokens will be available at Ethereum Chain.

8. Call processExits() to receive those tokens back to your EOA or your account address.

9. You should see the 50 XToken on the Ethereum mainnet at you Account Address.
