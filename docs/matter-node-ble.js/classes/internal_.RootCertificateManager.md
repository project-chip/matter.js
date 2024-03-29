[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / RootCertificateManager

# Class: RootCertificateManager

[\<internal\>](../modules/internal_.md).RootCertificateManager

## Table of contents

### Constructors

- [constructor](internal_.RootCertificateManager.md#constructor)

### Properties

- [generateRootCert](internal_.RootCertificateManager.md#generaterootcert)
- [nextCertificateId](internal_.RootCertificateManager.md#nextcertificateid)
- [rootCertBytes](internal_.RootCertificateManager.md#rootcertbytes)
- [rootCertId](internal_.RootCertificateManager.md#rootcertid)
- [rootKeyIdentifier](internal_.RootCertificateManager.md#rootkeyidentifier)
- [rootKeyPair](internal_.RootCertificateManager.md#rootkeypair)

### Methods

- [generateNoc](internal_.RootCertificateManager.md#generatenoc)
- [getRootCert](internal_.RootCertificateManager.md#getrootcert)

## Constructors

### constructor

• **new RootCertificateManager**(`storageContext`): [`RootCertificateManager`](internal_.RootCertificateManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storageContext` | [`StorageContext`](internal_.StorageContext.md) |

#### Returns

[`RootCertificateManager`](internal_.RootCertificateManager.md)

#### Defined in

matter.js/dist/esm/certificate/RootCertificateManager.d.ts:17

## Properties

### generateRootCert

• `Private` **generateRootCert**: `any`

#### Defined in

matter.js/dist/esm/certificate/RootCertificateManager.d.ts:19

___

### nextCertificateId

• `Private` **nextCertificateId**: `any`

#### Defined in

matter.js/dist/esm/certificate/RootCertificateManager.d.ts:16

___

### rootCertBytes

• `Private` **rootCertBytes**: `any`

#### Defined in

matter.js/dist/esm/certificate/RootCertificateManager.d.ts:15

___

### rootCertId

• `Private` **rootCertId**: `any`

#### Defined in

matter.js/dist/esm/certificate/RootCertificateManager.d.ts:12

___

### rootKeyIdentifier

• `Private` **rootKeyIdentifier**: `any`

#### Defined in

matter.js/dist/esm/certificate/RootCertificateManager.d.ts:14

___

### rootKeyPair

• `Private` **rootKeyPair**: `any`

#### Defined in

matter.js/dist/esm/certificate/RootCertificateManager.d.ts:13

## Methods

### generateNoc

▸ **generateNoc**(`publicKey`, `fabricId`, `nodeId`, `caseAuthenticatedTags?`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `Uint8Array` |
| `fabricId` | [`FabricId`](../modules/internal_.md#fabricid) |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `caseAuthenticatedTags?` | [`CaseAuthenticatedTag`](../modules/internal_.md#caseauthenticatedtag)[] |

#### Returns

`Uint8Array`

#### Defined in

matter.js/dist/esm/certificate/RootCertificateManager.d.ts:20

___

### getRootCert

▸ **getRootCert**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

matter.js/dist/esm/certificate/RootCertificateManager.d.ts:18
