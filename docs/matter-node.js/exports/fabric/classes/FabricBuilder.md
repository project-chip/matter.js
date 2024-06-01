[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/fabric](../README.md) / FabricBuilder

# Class: FabricBuilder

## Constructors

### new FabricBuilder()

> **new FabricBuilder**(): [`FabricBuilder`](FabricBuilder.md)

#### Returns

[`FabricBuilder`](FabricBuilder.md)

## Properties

### #private

> `private` **#private**: `any`

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:112

## Accessors

### fabricId

> `get` **fabricId**(): `undefined` \| [`FabricId`](../../datatype/README.md#fabricid)

#### Returns

`undefined` \| [`FabricId`](../../datatype/README.md#fabricid)

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:125

***

### fabricIndex

> `get` **fabricIndex**(): `undefined` \| [`FabricIndex`](../../datatype/README.md#fabricindex)

#### Returns

`undefined` \| [`FabricIndex`](../../datatype/README.md#fabricindex)

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:114

***

### keyPair

> `get` **keyPair**(): [`PrivateKey`](../../../crypto/export/interfaces/PrivateKey.md)

#### Returns

[`PrivateKey`](../../../crypto/export/interfaces/PrivateKey.md)

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:126

***

### nodeId

> `get` **nodeId**(): `undefined` \| [`NodeId`](../../datatype/README.md#nodeid)

#### Returns

`undefined` \| [`NodeId`](../../datatype/README.md#nodeid)

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:124

***

### publicKey

> `get` **publicKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:113

## Methods

### build()

> **build**(`fabricIndex`): `Promise`\<[`Fabric`](Fabric.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../../datatype/README.md#fabricindex) |

#### Returns

`Promise`\<[`Fabric`](Fabric.md)\>

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:127

***

### createCertificateSigningRequest()

> **createCertificateSigningRequest**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:115

***

### hasRootCert()

> **hasRootCert**(): `boolean`

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:117

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

packages/matter.js/dist/esm/fabric/Fabric.d.ts:122

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

packages/matter.js/dist/esm/fabric/Fabric.d.ts:123

***

### setIdentityProtectionKey()

> **setIdentityProtectionKey**(`key`): `this`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `Uint8Array` |

#### Returns

`this`

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:121

***

### setOperationalCert()

> **setOperationalCert**(`operationalCert`, `intermediateCACert`?): `this`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `operationalCert` | `Uint8Array` |
| `intermediateCACert`? | `Uint8Array` |

#### Returns

`this`

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:118

***

### setRootCert()

> **setRootCert**(`rootCert`): `this`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `rootCert` | `Uint8Array` |

#### Returns

`this`

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:116

***

### setRootNodeId()

> **setRootNodeId**(`rootNodeId`): `this`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `rootNodeId` | [`NodeId`](../../datatype/README.md#nodeid) |

#### Returns

`this`

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:120

***

### setRootVendorId()

> **setRootVendorId**(`rootVendorId`): `this`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `rootVendorId` | [`VendorId`](../../datatype/README.md#vendorid) |

#### Returns

`this`

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:119
