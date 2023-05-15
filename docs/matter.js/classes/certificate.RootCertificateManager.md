[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [certificate](../modules/certificate.md) / RootCertificateManager

# Class: RootCertificateManager

[certificate](../modules/certificate.md).RootCertificateManager

## Table of contents

### Constructors

- [constructor](certificate.RootCertificateManager.md#constructor)

### Properties

- [nextCertificateId](certificate.RootCertificateManager.md#nextcertificateid)
- [rootCertBytes](certificate.RootCertificateManager.md#rootcertbytes)
- [rootCertId](certificate.RootCertificateManager.md#rootcertid)
- [rootKeyIdentifier](certificate.RootCertificateManager.md#rootkeyidentifier)
- [rootKeyPair](certificate.RootCertificateManager.md#rootkeypair)

### Methods

- [generateNoc](certificate.RootCertificateManager.md#generatenoc)
- [generateRootCert](certificate.RootCertificateManager.md#generaterootcert)
- [getRootCert](certificate.RootCertificateManager.md#getrootcert)

## Constructors

### constructor

• **new RootCertificateManager**(`storageManager`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storageManager` | [`StorageManager`](storage.StorageManager.md) |

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:21](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/RootCertificateManager.ts#L21)

## Properties

### nextCertificateId

• `Private` **nextCertificateId**: `number` = `1`

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:19](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/RootCertificateManager.ts#L19)

___

### rootCertBytes

• `Private` **rootCertBytes**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:18](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/RootCertificateManager.ts#L18)

___

### rootCertId

• `Private` **rootCertId**: `bigint`

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:15](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/RootCertificateManager.ts#L15)

___

### rootKeyIdentifier

• `Private` **rootKeyIdentifier**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:17](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/RootCertificateManager.ts#L17)

___

### rootKeyPair

• `Private` **rootKeyPair**: [`KeyPair`](../modules/crypto.md#keypair)

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:16](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/RootCertificateManager.ts#L16)

## Methods

### generateNoc

▸ **generateNoc**(`publicKey`, `fabricId`, `nodeId`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `Uint8Array` |
| `fabricId` | `bigint` |
| `nodeId` | [`NodeId`](datatype.NodeId.md) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:78](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/RootCertificateManager.ts#L78)

___

### generateRootCert

▸ `Private` **generateRootCert**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:55](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/RootCertificateManager.ts#L55)

___

### getRootCert

▸ **getRootCert**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:51](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/RootCertificateManager.ts#L51)
