[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/certificate](../modules/exports_certificate.md) / RootCertificateManager

# Class: RootCertificateManager

[exports/certificate](../modules/exports_certificate.md).RootCertificateManager

## Table of contents

### Constructors

- [constructor](exports_certificate.RootCertificateManager.md#constructor)

### Properties

- [#private](exports_certificate.RootCertificateManager.md##private)
- [generateRootCert](exports_certificate.RootCertificateManager.md#generaterootcert)
- [nextCertificateId](exports_certificate.RootCertificateManager.md#nextcertificateid)
- [rootCertBytes](exports_certificate.RootCertificateManager.md#rootcertbytes)
- [rootCertId](exports_certificate.RootCertificateManager.md#rootcertid)
- [rootKeyIdentifier](exports_certificate.RootCertificateManager.md#rootkeyidentifier)
- [rootKeyPair](exports_certificate.RootCertificateManager.md#rootkeypair)

### Accessors

- [construction](exports_certificate.RootCertificateManager.md#construction)

### Methods

- [generateNoc](exports_certificate.RootCertificateManager.md#generatenoc)
- [getRootCert](exports_certificate.RootCertificateManager.md#getrootcert)
- [create](exports_certificate.RootCertificateManager.md#create)

## Constructors

### constructor

• **new RootCertificateManager**(`storage`): [`RootCertificateManager`](exports_certificate.RootCertificateManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storage` | [`StorageContext`](storage_export.StorageContext.md)\<`any`\> |

#### Returns

[`RootCertificateManager`](exports_certificate.RootCertificateManager.md)

#### Defined in

packages/matter.js/dist/esm/certificate/RootCertificateManager.d.ts:21

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

packages/matter.js/dist/esm/certificate/RootCertificateManager.d.ts:13

___

### generateRootCert

• `Private` **generateRootCert**: `any`

#### Defined in

packages/matter.js/dist/esm/certificate/RootCertificateManager.d.ts:23

___

### nextCertificateId

• `Private` **nextCertificateId**: `any`

#### Defined in

packages/matter.js/dist/esm/certificate/RootCertificateManager.d.ts:18

___

### rootCertBytes

• `Private` **rootCertBytes**: `any`

#### Defined in

packages/matter.js/dist/esm/certificate/RootCertificateManager.d.ts:17

___

### rootCertId

• `Private` **rootCertId**: `any`

#### Defined in

packages/matter.js/dist/esm/certificate/RootCertificateManager.d.ts:14

___

### rootKeyIdentifier

• `Private` **rootKeyIdentifier**: `any`

#### Defined in

packages/matter.js/dist/esm/certificate/RootCertificateManager.d.ts:16

___

### rootKeyPair

• `Private` **rootKeyPair**: `any`

#### Defined in

packages/matter.js/dist/esm/certificate/RootCertificateManager.d.ts:15

## Accessors

### construction

• `get` **construction**(): [`AsyncConstruction`](../interfaces/exports_cluster._internal_.AsyncConstruction-1.md)\<[`RootCertificateManager`](exports_certificate.RootCertificateManager.md)\>

#### Returns

[`AsyncConstruction`](../interfaces/exports_cluster._internal_.AsyncConstruction-1.md)\<[`RootCertificateManager`](exports_certificate.RootCertificateManager.md)\>

#### Defined in

packages/matter.js/dist/esm/certificate/RootCertificateManager.d.ts:19

## Methods

### generateNoc

▸ **generateNoc**(`publicKey`, `fabricId`, `nodeId`, `caseAuthenticatedTags?`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `Uint8Array` |
| `fabricId` | [`FabricId`](../modules/exports_datatype.md#fabricid) |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `caseAuthenticatedTags?` | [`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag)[] |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/esm/certificate/RootCertificateManager.d.ts:24

___

### getRootCert

▸ **getRootCert**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/esm/certificate/RootCertificateManager.d.ts:22

___

### create

▸ **create**(`storage`): `Promise`\<[`RootCertificateManager`](exports_certificate.RootCertificateManager.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `storage` | [`StorageContext`](storage_export.StorageContext.md)\<`any`\> |

#### Returns

`Promise`\<[`RootCertificateManager`](exports_certificate.RootCertificateManager.md)\>

#### Defined in

packages/matter.js/dist/esm/certificate/RootCertificateManager.d.ts:20
