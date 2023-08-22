[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [certificate/export](../modules/certificate_export.md) / RootCertificateManager

# Class: RootCertificateManager

[certificate/export](../modules/certificate_export.md).RootCertificateManager

## Table of contents

### Constructors

- [constructor](certificate_export.RootCertificateManager.md#constructor)

### Properties

- [nextCertificateId](certificate_export.RootCertificateManager.md#nextcertificateid)
- [rootCertBytes](certificate_export.RootCertificateManager.md#rootcertbytes)
- [rootCertId](certificate_export.RootCertificateManager.md#rootcertid)
- [rootKeyIdentifier](certificate_export.RootCertificateManager.md#rootkeyidentifier)
- [rootKeyPair](certificate_export.RootCertificateManager.md#rootkeypair)

### Methods

- [generateNoc](certificate_export.RootCertificateManager.md#generatenoc)
- [generateRootCert](certificate_export.RootCertificateManager.md#generaterootcert)
- [getRootCert](certificate_export.RootCertificateManager.md#getrootcert)

## Constructors

### constructor

• **new RootCertificateManager**(`storageContext`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storageContext` | [`StorageContext`](storage_export.StorageContext.md) |

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:28](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/RootCertificateManager.ts#L28)

## Properties

### nextCertificateId

• `Private` **nextCertificateId**: `number` = `1`

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:26](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/RootCertificateManager.ts#L26)

___

### rootCertBytes

• `Private` **rootCertBytes**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:25](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/RootCertificateManager.ts#L25)

___

### rootCertId

• `Private` **rootCertId**: `bigint`

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:22](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/RootCertificateManager.ts#L22)

___

### rootKeyIdentifier

• `Private` **rootKeyIdentifier**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:24](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/RootCertificateManager.ts#L24)

___

### rootKeyPair

• `Private` **rootKeyPair**: [`PrivateKey`](../modules/crypto_export.md#privatekey)

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:23](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/RootCertificateManager.ts#L23)

## Methods

### generateNoc

▸ **generateNoc**(`publicKey`, `fabricId`, `nodeId`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `Uint8Array` |
| `fabricId` | [`FabricId`](../modules/datatype_export.md#fabricid) |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:85](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/RootCertificateManager.ts#L85)

___

### generateRootCert

▸ `Private` **generateRootCert**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:62](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/RootCertificateManager.ts#L62)

___

### getRootCert

▸ **getRootCert**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:58](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/certificate/RootCertificateManager.ts#L58)
