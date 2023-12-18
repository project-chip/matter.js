[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/certificate](../modules/exports_certificate.md) / RootCertificateManager

# Class: RootCertificateManager

[exports/certificate](../modules/exports_certificate.md).RootCertificateManager

## Table of contents

### Constructors

- [constructor](exports_certificate.RootCertificateManager.md#constructor)

### Properties

- [generateRootCert](exports_certificate.RootCertificateManager.md#generaterootcert)
- [nextCertificateId](exports_certificate.RootCertificateManager.md#nextcertificateid)
- [rootCertBytes](exports_certificate.RootCertificateManager.md#rootcertbytes)
- [rootCertId](exports_certificate.RootCertificateManager.md#rootcertid)
- [rootKeyIdentifier](exports_certificate.RootCertificateManager.md#rootkeyidentifier)
- [rootKeyPair](exports_certificate.RootCertificateManager.md#rootkeypair)

### Methods

- [generateNoc](exports_certificate.RootCertificateManager.md#generatenoc)
- [getRootCert](exports_certificate.RootCertificateManager.md#getrootcert)

## Constructors

### constructor

• **new RootCertificateManager**(`storageContext`): [`RootCertificateManager`](exports_certificate.RootCertificateManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storageContext` | [`StorageContext`](storage_export.StorageContext.md) |

#### Returns

[`RootCertificateManager`](exports_certificate.RootCertificateManager.md)

#### Defined in

packages/matter.js/dist/esm/certificate/RootCertificateManager.d.ts:17

## Properties

### generateRootCert

• `Private` **generateRootCert**: `any`

#### Defined in

packages/matter.js/dist/esm/certificate/RootCertificateManager.d.ts:19

___

### nextCertificateId

• `Private` **nextCertificateId**: `any`

#### Defined in

packages/matter.js/dist/esm/certificate/RootCertificateManager.d.ts:16

___

### rootCertBytes

• `Private` **rootCertBytes**: `any`

#### Defined in

packages/matter.js/dist/esm/certificate/RootCertificateManager.d.ts:15

___

### rootCertId

• `Private` **rootCertId**: `any`

#### Defined in

packages/matter.js/dist/esm/certificate/RootCertificateManager.d.ts:12

___

### rootKeyIdentifier

• `Private` **rootKeyIdentifier**: `any`

#### Defined in

packages/matter.js/dist/esm/certificate/RootCertificateManager.d.ts:14

___

### rootKeyPair

• `Private` **rootKeyPair**: `any`

#### Defined in

packages/matter.js/dist/esm/certificate/RootCertificateManager.d.ts:13

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

packages/matter.js/dist/esm/certificate/RootCertificateManager.d.ts:20

___

### getRootCert

▸ **getRootCert**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/esm/certificate/RootCertificateManager.d.ts:18
