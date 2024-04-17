[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [certificate/export](../modules/certificate_export.md) / RootCertificateManager

# Class: RootCertificateManager

[certificate/export](../modules/certificate_export.md).RootCertificateManager

## Table of contents

### Constructors

- [constructor](certificate_export.RootCertificateManager.md#constructor)

### Properties

- [#construction](certificate_export.RootCertificateManager.md##construction)
- [nextCertificateId](certificate_export.RootCertificateManager.md#nextcertificateid)
- [rootCertBytes](certificate_export.RootCertificateManager.md#rootcertbytes)
- [rootCertId](certificate_export.RootCertificateManager.md#rootcertid)
- [rootKeyIdentifier](certificate_export.RootCertificateManager.md#rootkeyidentifier)
- [rootKeyPair](certificate_export.RootCertificateManager.md#rootkeypair)

### Accessors

- [construction](certificate_export.RootCertificateManager.md#construction)

### Methods

- [generateNoc](certificate_export.RootCertificateManager.md#generatenoc)
- [generateRootCert](certificate_export.RootCertificateManager.md#generaterootcert)
- [getRootCert](certificate_export.RootCertificateManager.md#getrootcert)
- [create](certificate_export.RootCertificateManager.md#create)

## Constructors

### constructor

• **new RootCertificateManager**(`storage`): [`RootCertificateManager`](certificate_export.RootCertificateManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storage` | [`StorageContext`](storage_export.StorageContext.md)\<`any`\> |

#### Returns

[`RootCertificateManager`](certificate_export.RootCertificateManager.md)

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/certificate/RootCertificateManager.ts#L39)

## Properties

### #construction

• `Private` **#construction**: [`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`RootCertificateManager`](certificate_export.RootCertificateManager.md)\>

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:29](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/certificate/RootCertificateManager.ts#L29)

___

### nextCertificateId

• `Private` **nextCertificateId**: `number` = `1`

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/certificate/RootCertificateManager.ts#L28)

___

### rootCertBytes

• `Private` **rootCertBytes**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/certificate/RootCertificateManager.ts#L27)

___

### rootCertId

• `Private` **rootCertId**: `bigint`

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/certificate/RootCertificateManager.ts#L24)

___

### rootKeyIdentifier

• `Private` **rootKeyIdentifier**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/certificate/RootCertificateManager.ts#L26)

___

### rootKeyPair

• `Private` **rootKeyPair**: [`PrivateKey`](../interfaces/crypto_export.PrivateKey.md)

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/certificate/RootCertificateManager.ts#L25)

## Accessors

### construction

• `get` **construction**(): [`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`RootCertificateManager`](certificate_export.RootCertificateManager.md)\>

#### Returns

[`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`RootCertificateManager`](certificate_export.RootCertificateManager.md)\>

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/certificate/RootCertificateManager.ts#L31)

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

[packages/matter.js/src/certificate/RootCertificateManager.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/certificate/RootCertificateManager.ts#L94)

___

### generateRootCert

▸ **generateRootCert**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:71](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/certificate/RootCertificateManager.ts#L71)

___

### getRootCert

▸ **getRootCert**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/certificate/RootCertificateManager.ts#L67)

___

### create

▸ **create**(`storage`): `Promise`\<[`RootCertificateManager`](certificate_export.RootCertificateManager.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `storage` | [`StorageContext`](storage_export.StorageContext.md)\<`any`\> |

#### Returns

`Promise`\<[`RootCertificateManager`](certificate_export.RootCertificateManager.md)\>

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/certificate/RootCertificateManager.ts#L35)
