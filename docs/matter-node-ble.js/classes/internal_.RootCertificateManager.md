[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / RootCertificateManager

# Class: RootCertificateManager

[\<internal\>](../modules/internal_.md).RootCertificateManager

## Table of contents

### Constructors

- [constructor](internal_.RootCertificateManager.md#constructor)

### Properties

- [#private](internal_.RootCertificateManager.md##private)
- [generateRootCert](internal_.RootCertificateManager.md#generaterootcert)
- [nextCertificateId](internal_.RootCertificateManager.md#nextcertificateid)
- [rootCertBytes](internal_.RootCertificateManager.md#rootcertbytes)
- [rootCertId](internal_.RootCertificateManager.md#rootcertid)
- [rootKeyIdentifier](internal_.RootCertificateManager.md#rootkeyidentifier)
- [rootKeyPair](internal_.RootCertificateManager.md#rootkeypair)

### Accessors

- [construction](internal_.RootCertificateManager.md#construction)

### Methods

- [generateNoc](internal_.RootCertificateManager.md#generatenoc)
- [getRootCert](internal_.RootCertificateManager.md#getrootcert)
- [create](internal_.RootCertificateManager.md#create)

## Constructors

### constructor

• **new RootCertificateManager**(`storage`): [`RootCertificateManager`](internal_.RootCertificateManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storage` | [`StorageContext`](internal_.StorageContext.md)\<`any`\> |

#### Returns

[`RootCertificateManager`](internal_.RootCertificateManager.md)

#### Defined in

matter.js/dist/esm/certificate/RootCertificateManager.d.ts:21

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

matter.js/dist/esm/certificate/RootCertificateManager.d.ts:13

___

### generateRootCert

• `Private` **generateRootCert**: `any`

#### Defined in

matter.js/dist/esm/certificate/RootCertificateManager.d.ts:23

___

### nextCertificateId

• `Private` **nextCertificateId**: `any`

#### Defined in

matter.js/dist/esm/certificate/RootCertificateManager.d.ts:18

___

### rootCertBytes

• `Private` **rootCertBytes**: `any`

#### Defined in

matter.js/dist/esm/certificate/RootCertificateManager.d.ts:17

___

### rootCertId

• `Private` **rootCertId**: `any`

#### Defined in

matter.js/dist/esm/certificate/RootCertificateManager.d.ts:14

___

### rootKeyIdentifier

• `Private` **rootKeyIdentifier**: `any`

#### Defined in

matter.js/dist/esm/certificate/RootCertificateManager.d.ts:16

___

### rootKeyPair

• `Private` **rootKeyPair**: `any`

#### Defined in

matter.js/dist/esm/certificate/RootCertificateManager.d.ts:15

## Accessors

### construction

• `get` **construction**(): [`AsyncConstruction`](../interfaces/internal_.AsyncConstruction-1.md)\<[`RootCertificateManager`](internal_.RootCertificateManager.md)\>

#### Returns

[`AsyncConstruction`](../interfaces/internal_.AsyncConstruction-1.md)\<[`RootCertificateManager`](internal_.RootCertificateManager.md)\>

#### Defined in

matter.js/dist/esm/certificate/RootCertificateManager.d.ts:19

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

matter.js/dist/esm/certificate/RootCertificateManager.d.ts:24

___

### getRootCert

▸ **getRootCert**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

matter.js/dist/esm/certificate/RootCertificateManager.d.ts:22

___

### create

▸ **create**(`storage`): `Promise`\<[`RootCertificateManager`](internal_.RootCertificateManager.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `storage` | [`StorageContext`](internal_.StorageContext.md)\<`any`\> |

#### Returns

`Promise`\<[`RootCertificateManager`](internal_.RootCertificateManager.md)\>

#### Defined in

matter.js/dist/esm/certificate/RootCertificateManager.d.ts:20
