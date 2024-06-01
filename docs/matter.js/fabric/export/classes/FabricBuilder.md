[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [fabric/export](../README.md) / FabricBuilder

# Class: FabricBuilder

## Constructors

### new FabricBuilder()

> **new FabricBuilder**(): [`FabricBuilder`](FabricBuilder.md)

#### Returns

[`FabricBuilder`](FabricBuilder.md)

## Properties

### #caseAuthenticatedTags

> `private` **#caseAuthenticatedTags**: [`CaseAuthenticatedTag`](../../../datatype/export/README.md#caseauthenticatedtag)[]

#### Source

[packages/matter.js/src/fabric/Fabric.ts:368](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L368)

***

### #fabricId?

> `private` `optional` **#fabricId**: [`FabricId`](../../../datatype/export/README.md#fabricid)

#### Source

[packages/matter.js/src/fabric/Fabric.ts:361](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L361)

***

### #fabricIndex?

> `private` `optional` **#fabricIndex**: [`FabricIndex`](../../../datatype/export/README.md#fabricindex)

#### Source

[packages/matter.js/src/fabric/Fabric.ts:366](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L366)

***

### #identityProtectionKey?

> `private` `optional` **#identityProtectionKey**: `Uint8Array`

#### Source

[packages/matter.js/src/fabric/Fabric.ts:365](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L365)

***

### #intermediateCACert?

> `private` `optional` **#intermediateCACert**: `Uint8Array`

#### Source

[packages/matter.js/src/fabric/Fabric.ts:359](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L359)

***

### #keyPair

> `private` **#keyPair**: [`PrivateKey`](../../../crypto/export/interfaces/PrivateKey.md)

#### Source

[packages/matter.js/src/fabric/Fabric.ts:356](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L356)

***

### #label

> `private` **#label**: `string` = `""`

#### Source

[packages/matter.js/src/fabric/Fabric.ts:367](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L367)

***

### #nodeId?

> `private` `optional` **#nodeId**: [`NodeId`](../../../datatype/export/README.md#nodeid)

#### Source

[packages/matter.js/src/fabric/Fabric.ts:362](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L362)

***

### #operationalCert?

> `private` `optional` **#operationalCert**: `Uint8Array`

#### Source

[packages/matter.js/src/fabric/Fabric.ts:360](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L360)

***

### #rootCert?

> `private` `optional` **#rootCert**: `Uint8Array`

#### Source

[packages/matter.js/src/fabric/Fabric.ts:358](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L358)

***

### #rootNodeId?

> `private` `optional` **#rootNodeId**: [`NodeId`](../../../datatype/export/README.md#nodeid)

#### Source

[packages/matter.js/src/fabric/Fabric.ts:363](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L363)

***

### #rootPublicKey?

> `private` `optional` **#rootPublicKey**: `Uint8Array`

#### Source

[packages/matter.js/src/fabric/Fabric.ts:364](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L364)

***

### #rootVendorId?

> `private` `optional` **#rootVendorId**: [`VendorId`](../../../datatype/export/README.md#vendorid)

#### Source

[packages/matter.js/src/fabric/Fabric.ts:357](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L357)

## Accessors

### fabricId

> `get` **fabricId**(): `undefined` \| [`FabricId`](../../../datatype/export/README.md#fabricid)

#### Returns

`undefined` \| [`FabricId`](../../../datatype/export/README.md#fabricid)

#### Source

[packages/matter.js/src/fabric/Fabric.ts:476](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L476)

***

### fabricIndex

> `get` **fabricIndex**(): `undefined` \| [`FabricIndex`](../../../datatype/export/README.md#fabricindex)

#### Returns

`undefined` \| [`FabricIndex`](../../../datatype/export/README.md#fabricindex)

#### Source

[packages/matter.js/src/fabric/Fabric.ts:374](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L374)

***

### keyPair

> `get` **keyPair**(): [`PrivateKey`](../../../crypto/export/interfaces/PrivateKey.md)

#### Returns

[`PrivateKey`](../../../crypto/export/interfaces/PrivateKey.md)

#### Source

[packages/matter.js/src/fabric/Fabric.ts:480](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L480)

***

### nodeId

> `get` **nodeId**(): `undefined` \| [`NodeId`](../../../datatype/export/README.md#nodeid)

#### Returns

`undefined` \| [`NodeId`](../../../datatype/export/README.md#nodeid)

#### Source

[packages/matter.js/src/fabric/Fabric.ts:472](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L472)

***

### publicKey

> `get` **publicKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/fabric/Fabric.ts:370](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L370)

## Methods

### build()

> **build**(`fabricIndex`): `Promise`\<[`Fabric`](Fabric.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../../../datatype/export/README.md#fabricindex) |

#### Returns

`Promise`\<[`Fabric`](Fabric.md)\>

#### Source

[packages/matter.js/src/fabric/Fabric.ts:484](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L484)

***

### createCertificateSigningRequest()

> **createCertificateSigningRequest**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/fabric/Fabric.ts:378](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L378)

***

### hasRootCert()

> **hasRootCert**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter.js/src/fabric/Fabric.ts:389](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L389)

***

### initializeFromFabricForUpdate()

> **initializeFromFabricForUpdate**(`fabric`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](Fabric.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/fabric/Fabric.ts:456](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L456)

***

### matchesToFabric()

> **matchesToFabric**(`fabric`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](Fabric.md) |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/fabric/Fabric.ts:465](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L465)

***

### setIdentityProtectionKey()

> **setIdentityProtectionKey**(`key`): [`FabricBuilder`](FabricBuilder.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `Uint8Array` |

#### Returns

[`FabricBuilder`](FabricBuilder.md)

#### Source

[packages/matter.js/src/fabric/Fabric.ts:451](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L451)

***

### setOperationalCert()

> **setOperationalCert**(`operationalCert`, `intermediateCACert`?): [`FabricBuilder`](FabricBuilder.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `operationalCert` | `Uint8Array` |
| `intermediateCACert`? | `Uint8Array` |

#### Returns

[`FabricBuilder`](FabricBuilder.md)

#### Source

[packages/matter.js/src/fabric/Fabric.ts:393](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L393)

***

### setRootCert()

> **setRootCert**(`rootCert`): [`FabricBuilder`](FabricBuilder.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `rootCert` | `Uint8Array` |

#### Returns

[`FabricBuilder`](FabricBuilder.md)

#### Source

[packages/matter.js/src/fabric/Fabric.ts:382](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L382)

***

### setRootNodeId()

> **setRootNodeId**(`rootNodeId`): [`FabricBuilder`](FabricBuilder.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `rootNodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |

#### Returns

[`FabricBuilder`](FabricBuilder.md)

#### Source

[packages/matter.js/src/fabric/Fabric.ts:446](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L446)

***

### setRootVendorId()

> **setRootVendorId**(`rootVendorId`): [`FabricBuilder`](FabricBuilder.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `rootVendorId` | [`VendorId`](../../../datatype/export/README.md#vendorid) |

#### Returns

[`FabricBuilder`](FabricBuilder.md)

#### Source

[packages/matter.js/src/fabric/Fabric.ts:441](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L441)
