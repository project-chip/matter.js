[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [certificate/export](../README.md) / RootCertificateManager

# Class: RootCertificateManager

## Constructors

### new RootCertificateManager()

> **new RootCertificateManager**(`storage`): [`RootCertificateManager`](RootCertificateManager.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `storage` | [`StorageContext`](../../../storage/export/classes/StorageContext.md)\<`any`\> |

#### Returns

[`RootCertificateManager`](RootCertificateManager.md)

#### Source

[packages/matter.js/src/certificate/RootCertificateManager.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/RootCertificateManager.ts#L46)

## Properties

### #construction

> `private` **#construction**: [`AsyncConstruction`](../../../behavior/cluster/export/-internal-/interfaces/AsyncConstruction.md)\<[`RootCertificateManager`](RootCertificateManager.md)\>

#### Source

[packages/matter.js/src/certificate/RootCertificateManager.ts:36](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/RootCertificateManager.ts#L36)

***

### nextCertificateId

> `private` **nextCertificateId**: `bigint`

#### Source

[packages/matter.js/src/certificate/RootCertificateManager.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/RootCertificateManager.ts#L35)

***

### rootCertBytes

> `private` **rootCertBytes**: `Uint8Array`

#### Source

[packages/matter.js/src/certificate/RootCertificateManager.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/RootCertificateManager.ts#L34)

***

### rootCertId

> `private` **rootCertId**: `bigint`

#### Source

[packages/matter.js/src/certificate/RootCertificateManager.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/RootCertificateManager.ts#L31)

***

### rootKeyIdentifier

> `private` **rootKeyIdentifier**: `Uint8Array`

#### Source

[packages/matter.js/src/certificate/RootCertificateManager.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/RootCertificateManager.ts#L33)

***

### rootKeyPair

> `private` **rootKeyPair**: [`PrivateKey`](../../../crypto/export/interfaces/PrivateKey.md)

#### Source

[packages/matter.js/src/certificate/RootCertificateManager.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/RootCertificateManager.ts#L32)

## Accessors

### construction

> `get` **construction**(): [`AsyncConstruction`](../../../behavior/cluster/export/-internal-/interfaces/AsyncConstruction.md)\<[`RootCertificateManager`](RootCertificateManager.md)\>

#### Returns

[`AsyncConstruction`](../../../behavior/cluster/export/-internal-/interfaces/AsyncConstruction.md)\<[`RootCertificateManager`](RootCertificateManager.md)\>

#### Source

[packages/matter.js/src/certificate/RootCertificateManager.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/RootCertificateManager.ts#L38)

## Methods

### generateNoc()

> **generateNoc**(`publicKey`, `fabricId`, `nodeId`, `caseAuthenticatedTags`?): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `publicKey` | `Uint8Array` |
| `fabricId` | [`FabricId`](../../../datatype/export/README.md#fabricid) |
| `nodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |
| `caseAuthenticatedTags`? | [`CaseAuthenticatedTag`](../../../datatype/export/README.md#caseauthenticatedtag)[] |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/certificate/RootCertificateManager.ts:106](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/RootCertificateManager.ts#L106)

***

### generateRootCert()

> `private` **generateRootCert**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/certificate/RootCertificateManager.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/RootCertificateManager.ts#L80)

***

### getRootCert()

> **getRootCert**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/certificate/RootCertificateManager.ts:76](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/RootCertificateManager.ts#L76)

***

### create()

> `static` **create**(`storage`): `Promise`\<[`RootCertificateManager`](RootCertificateManager.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `storage` | [`StorageContext`](../../../storage/export/classes/StorageContext.md)\<`any`\> |

#### Returns

`Promise`\<[`RootCertificateManager`](RootCertificateManager.md)\>

#### Source

[packages/matter.js/src/certificate/RootCertificateManager.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/certificate/RootCertificateManager.ts#L42)
