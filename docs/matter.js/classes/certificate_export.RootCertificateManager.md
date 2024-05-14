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

[packages/matter.js/src/certificate/RootCertificateManager.ts:46](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/certificate/RootCertificateManager.ts#L46)

## Properties

### #construction

• `Private` **#construction**: [`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`RootCertificateManager`](certificate_export.RootCertificateManager.md)\>

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:36](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/certificate/RootCertificateManager.ts#L36)

___

### nextCertificateId

• `Private` **nextCertificateId**: `bigint`

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:35](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/certificate/RootCertificateManager.ts#L35)

___

### rootCertBytes

• `Private` **rootCertBytes**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:34](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/certificate/RootCertificateManager.ts#L34)

___

### rootCertId

• `Private` **rootCertId**: `bigint`

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:31](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/certificate/RootCertificateManager.ts#L31)

___

### rootKeyIdentifier

• `Private` **rootKeyIdentifier**: `Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:33](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/certificate/RootCertificateManager.ts#L33)

___

### rootKeyPair

• `Private` **rootKeyPair**: [`PrivateKey`](../interfaces/crypto_export.PrivateKey.md)

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:32](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/certificate/RootCertificateManager.ts#L32)

## Accessors

### construction

• `get` **construction**(): [`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`RootCertificateManager`](certificate_export.RootCertificateManager.md)\>

#### Returns

[`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`RootCertificateManager`](certificate_export.RootCertificateManager.md)\>

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:38](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/certificate/RootCertificateManager.ts#L38)

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

[packages/matter.js/src/certificate/RootCertificateManager.ts:106](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/certificate/RootCertificateManager.ts#L106)

___

### generateRootCert

▸ **generateRootCert**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:80](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/certificate/RootCertificateManager.ts#L80)

___

### getRootCert

▸ **getRootCert**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/RootCertificateManager.ts:76](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/certificate/RootCertificateManager.ts#L76)

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

[packages/matter.js/src/certificate/RootCertificateManager.ts:42](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/certificate/RootCertificateManager.ts#L42)
