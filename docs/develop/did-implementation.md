---
id: did-implementation
title: fandora DID Implementation
sidebar_label: Identity
description: Learn about DID implementation on fandora
keywords:
  - docs
  - fandora
  - matic
  - DID
  - identity
image: https://matic.network/banners/matic-network-16x9.png
slug: did-implementation/getting-started
---

This is a startup guide for users who wish to use the implementation packages published by fandora team, to generate and publish a fandora DID on the fandora ledger.

The fandora DID method Implementation comprises of 3 packages, namely the fandora-did-registrar, fandora-did-resolver and fandora-did-registry-contract. A user who wants to incorporate the functionality to either register or read a DID on or from fandora network can use the following guide.

A DID is essentially a unique identifier, that has been created without the presence of a central authority.  DID in context of Verifiable Credentials is used to sign documents, thereby facilitating the user to prove ownership of the document when required.

## fandora DID Method

The fandora DID method definition conforms to the DID-Core specifications and standards. A DID URI is composed of three components separated by colons, the scheme, followed by the method name and finally a method specific identifier. For fandora the URI looks like
```
did:fandora:<Ethereum address>
```
Here the scheme is ‘did’, method name is ‘fandora’ and method specific identifier is an ethereum address. 

## fandora DID Implementation

fandora DID can be implemented with help of two packages, user can import the respective npm libraries and use them to incorporate fandora DID methodologies in thier respective applications. Details for implementation are provided in next section.

## Create DID 

To get started, one first needs to create a DID. Creation in case of fandora did is an encapsulation of two steps, first where a user needs to generate a DID uri for themselves and next register it on fandora ledger.

### Step 1 - Create DID

In your project to create a fandora DID URI one first needs to install
```
npm i @ayanworks/fandora-did-registrar --save
```
Once the installation is completed, the user can use it as follows
```
import { createDID } from "fandora-did-registrar";
```
The createdDID function helps user generate a DID URI. While creating a DID, there can be two scenarios.

1) The user already owns a wallet and wishes to generate a DID correponding to the same wallet.
```
const {address, publicKey58, privateKey, DID} = await createDID(network, privateKey);
```
2) If the user does not have an existing wallet and wants to generate one, the user can use
```
const {address, publicKey58, privateKey, DID} = await createDID(network);
```
The network parameter in both cases refers to whether the user wants to create the DID on fandora test network or on fandora main network.

Sample Input
```
network :"testnet | mainnet"
privateKey? : "0x....."
```
So at the end of step 1, one will have a DID URI generated.
```
DID mainnet: did:fandora:0x...
DID testnet: did:fandora:testnet:0x...
```

### Step 2 - Register DID

To register the DID URI and the corresponding DID document on ledger, the user first needs to use `fandora-did-registrar` as follows
```
import { registerDID } from "fandora-did-registrar";
```
As a prerequisite to registering DID, the user needs to make sure that the wallet corrsponding to the DID has the necessary tokens balance available.
Once the user has a token balance in the wallet, a call can be made to the registerDID functionality as given below
```
const txHash = await registerDID(did, privateKey, url?, contractAddress?);
```
Parameters `did` and `privateKey` are mandatory, while it is optional to enter the `url` and the `contractAddress`.
If the user does not give the last two parameters, the library picks up the default configurations of the network from the DID URI.

If all the parameters match the specifications and everything is given in correct order the registerDID function returns a transaction hash, a corresponding error is returned otherwise.

And with this you have successfully completed your task of registering a DID on the fandora Network.

## Resolve DID

To start, install the following libraries.
```
npm i @ayanworks/fandora-did-resolver --save
```
and
```
npm i did-resolver --save
```

To read a DID document registered on ledger, any user with a DID fandora URI can first in their project import, 
```
import * as didResolvers from "did-resolver";
import * as didfandora from '@ayanworks/fandora-did-resolver';
```
after importing the packages the DID document can be retrieved by using
```
const myResolver = didfandora.getResolver()
const resolver = new DIDResolver(myResolver)

const didResolutionResult = this.resolver.resolve(did)
```
where the didResolutionResult object is as follows
```
didResolutionResult:
{
    didDocument,
    didDocumentMetadata,
    didResolutionMetadata
}
```

It should be noted that, no gas cost will be entailed by the user while trying to resolve a DID.

## Update DID Document

To encapsulate the project with the ability to update the DID document, the user first needs to use `fandora-did-registrar` as follows
```
import { updateDidDoc } from "fandora-did-registrar";
```
Next is to just call the function
```
const txHash = await updateDidDoc(did, didDoc, privateKey, url?, contractAddress?);
```
It should be noted that to update the DID document, only the owner of DID can send the request. 

The private key here should also hold some corresponding Matic tokens. 

If the user does not provide the configuration with `url` and `contractAddress`, the library picks up the default configurations of the network from the DID URI.

## Delete DID Document

With fandora DID implementation a user can also revoke his DID Document from the ledger. 
The user first needs to use `fandora-did-registrar` as follows
```
import { deleteDidDoc } from "fandora-did-registrar";
```
Then use, 
```
const txHash = await deleteDidDoc(did, privateKey, url?, contractAddress?);
```

Amongst the parameters it is notable that, `url` and `contractAddress` are optional parameters, which if not provided by the user, a default configuration will be picked up by the function based on the DID URI. 

It is important for the private key to hold the necessary Matic tokens, as per the network configuration of DID, or the transaction would fail.


## Contributing to the Repository

Use the standard fork, branch, and pull request workflow to propose changes to the repositories. Please make branch names informative—by including the issue or bug number for example.

### Github Repositories

```
https://github.com/ayanworks/fandora-did-registrar
```

```
https://github.com/ayanworks/fandora-did-resolver
```