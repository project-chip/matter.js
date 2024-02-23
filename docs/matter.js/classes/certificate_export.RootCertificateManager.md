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

• **new RootCertificateManager**(`storageContext`): [`RootCertificateManager`](certificate_export.RootCertificateManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storageContext` | [`StorageContext`](storage_export.StorageContext.md) |

#### Returns

[`RootCertificateManager`](certificate_export.RootCertificateManager.md)

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:29](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/certificate/RootCertificateManager.ts#L29)

## Properties

### nextCertificateId

• `Private` **nextCertificateId**: `number` = `1`

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:27](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/certificate/RootCertificateManager.ts#L27)

___

### rootCertBytes

• `Private` **rootCertBytes**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:26](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/certificate/RootCertificateManager.ts#L26)

___

### rootCertId

• `Private` **rootCertId**: `bigint`

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:23](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/certificate/RootCertificateManager.ts#L23)

___

### rootKeyIdentifier

• `Private` **rootKeyIdentifier**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:25](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/certificate/RootCertificateManager.ts#L25)

___

### rootKeyPair

• `Private` **rootKeyPair**: [`PrivateKey`](../interfaces/crypto_export.PrivateKey.md)

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:24](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/certificate/RootCertificateManager.ts#L24)

## Methods

### generateNoc

▸ **generateNoc**(`publicKey`, `fabricId`, `nodeId`, `caseAuthenticatedTags?`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `Uint8Array` |
| `fabricId` | [`FabricId`](../modules/datatype_export.md#fabricid) |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `caseAuthenticatedTags?` | [`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag)[] |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:86](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/certificate/RootCertificateManager.ts#L86)

___

### generateRootCert

▸ **generateRootCert**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:63](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/certificate/RootCertificateManager.ts#L63)

___

### getRootCert

▸ **getRootCert**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:59](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/certificate/RootCertificateManager.ts#L59)
