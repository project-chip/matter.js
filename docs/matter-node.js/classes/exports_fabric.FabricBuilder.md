[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/fabric](../modules/exports_fabric.md) / FabricBuilder

# Class: FabricBuilder

[exports/fabric](../modules/exports_fabric.md).FabricBuilder

## Table of contents

### Constructors

- [constructor](exports_fabric.FabricBuilder.md#constructor)

### Properties

- [#private](exports_fabric.FabricBuilder.md##private)

### Accessors

- [fabricId](exports_fabric.FabricBuilder.md#fabricid)
- [fabricIndex](exports_fabric.FabricBuilder.md#fabricindex)
- [keyPair](exports_fabric.FabricBuilder.md#keypair)
- [nodeId](exports_fabric.FabricBuilder.md#nodeid)
- [publicKey](exports_fabric.FabricBuilder.md#publickey)
- [rootCert](exports_fabric.FabricBuilder.md#rootcert)

### Methods

- [build](exports_fabric.FabricBuilder.md#build)
- [createCertificateSigningRequest](exports_fabric.FabricBuilder.md#createcertificatesigningrequest)
- [hasRootCert](exports_fabric.FabricBuilder.md#hasrootcert)
- [initializeFromFabricForUpdate](exports_fabric.FabricBuilder.md#initializefromfabricforupdate)
- [matchesToFabric](exports_fabric.FabricBuilder.md#matchestofabric)
- [setIdentityProtectionKey](exports_fabric.FabricBuilder.md#setidentityprotectionkey)
- [setOperationalCert](exports_fabric.FabricBuilder.md#setoperationalcert)
- [setRootCert](exports_fabric.FabricBuilder.md#setrootcert)
- [setRootNodeId](exports_fabric.FabricBuilder.md#setrootnodeid)
- [setRootVendorId](exports_fabric.FabricBuilder.md#setrootvendorid)

## Constructors

### constructor

• **new FabricBuilder**(): [`FabricBuilder`](exports_fabric.FabricBuilder.md)

#### Returns

[`FabricBuilder`](exports_fabric.FabricBuilder.md)

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:112

## Accessors

### fabricId

• `get` **fabricId**(): `undefined` \| [`FabricId`](../modules/exports_datatype.md#fabricid)

#### Returns

`undefined` \| [`FabricId`](../modules/exports_datatype.md#fabricid)

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:126

___

### fabricIndex

• `get` **fabricIndex**(): `undefined` \| [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Returns

`undefined` \| [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:114

___

### keyPair

• `get` **keyPair**(): [`PrivateKey`](../interfaces/crypto_export.PrivateKey.md)

#### Returns

[`PrivateKey`](../interfaces/crypto_export.PrivateKey.md)

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:127

___

### nodeId

• `get` **nodeId**(): `undefined` \| [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Returns

`undefined` \| [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:125

___

### publicKey

• `get` **publicKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:113

___

### rootCert

• `get` **rootCert**(): `undefined` \| `Uint8Array`

#### Returns

`undefined` \| `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:117

## Methods

### build

▸ **build**(`fabricIndex`): `Promise`\<[`Fabric`](exports_fabric.Fabric.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/exports_datatype.md#fabricindex) |

#### Returns

`Promise`\<[`Fabric`](exports_fabric.Fabric.md)\>

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:128

___

### createCertificateSigningRequest

▸ **createCertificateSigningRequest**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:115

___

### hasRootCert

▸ **hasRootCert**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:118

___

### initializeFromFabricForUpdate

▸ **initializeFromFabricForUpdate**(`fabric`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:123

___

### matchesToFabric

▸ **matchesToFabric**(`fabric`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:124

___

### setIdentityProtectionKey

▸ **setIdentityProtectionKey**(`key`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Uint8Array` |

#### Returns

`this`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:122

___

### setOperationalCert

▸ **setOperationalCert**(`operationalCert`, `intermediateCACert?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `operationalCert` | `Uint8Array` |
| `intermediateCACert?` | `Uint8Array` |

#### Returns

`this`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:119

___

### setRootCert

▸ **setRootCert**(`rootCert`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootCert` | `Uint8Array` |

#### Returns

`this`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:116

___

### setRootNodeId

▸ **setRootNodeId**(`rootNodeId`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootNodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |

#### Returns

`this`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:121

___

### setRootVendorId

▸ **setRootVendorId**(`rootVendorId`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootVendorId` | [`VendorId`](../modules/exports_datatype.md#vendorid) |

#### Returns

`this`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:120
