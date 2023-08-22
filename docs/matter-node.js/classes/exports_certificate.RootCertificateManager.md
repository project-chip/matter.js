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

• **new RootCertificateManager**(`storageContext`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storageContext` | [`StorageContext`](storage_export.StorageContext.md) |

#### Defined in

packages/matter.js/dist/cjs/certificate/RootCertificateManager.d.ts:16

## Properties

### generateRootCert

• `Private` **generateRootCert**: `any`

#### Defined in

packages/matter.js/dist/cjs/certificate/RootCertificateManager.d.ts:18

___

### nextCertificateId

• `Private` **nextCertificateId**: `any`

#### Defined in

packages/matter.js/dist/cjs/certificate/RootCertificateManager.d.ts:15

___

### rootCertBytes

• `Private` **rootCertBytes**: `any`

#### Defined in

packages/matter.js/dist/cjs/certificate/RootCertificateManager.d.ts:14

___

### rootCertId

• `Private` **rootCertId**: `any`

#### Defined in

packages/matter.js/dist/cjs/certificate/RootCertificateManager.d.ts:11

___

### rootKeyIdentifier

• `Private` **rootKeyIdentifier**: `any`

#### Defined in

packages/matter.js/dist/cjs/certificate/RootCertificateManager.d.ts:13

___

### rootKeyPair

• `Private` **rootKeyPair**: `any`

#### Defined in

packages/matter.js/dist/cjs/certificate/RootCertificateManager.d.ts:12

## Methods

### generateNoc

▸ **generateNoc**(`publicKey`, `fabricId`, `nodeId`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `Uint8Array` |
| `fabricId` | [`FabricId`](../modules/exports_datatype.md#fabricid) |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/certificate/RootCertificateManager.d.ts:19

___

### getRootCert

▸ **getRootCert**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/certificate/RootCertificateManager.d.ts:17
