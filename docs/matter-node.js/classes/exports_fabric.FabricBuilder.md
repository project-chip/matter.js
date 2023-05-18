[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/fabric](../modules/exports_fabric.md) / FabricBuilder

# Class: FabricBuilder

[exports/fabric](../modules/exports_fabric.md).FabricBuilder

## Table of contents

### Constructors

- [constructor](exports_fabric.FabricBuilder.md#constructor)

### Properties

- [fabricId](exports_fabric.FabricBuilder.md#fabricid)
- [fabricIndex](exports_fabric.FabricBuilder.md#fabricindex)
- [identityProtectionKey](exports_fabric.FabricBuilder.md#identityprotectionkey)
- [intermediateCACert](exports_fabric.FabricBuilder.md#intermediatecacert)
- [keyPair](exports_fabric.FabricBuilder.md#keypair)
- [nodeId](exports_fabric.FabricBuilder.md#nodeid)
- [operationalCert](exports_fabric.FabricBuilder.md#operationalcert)
- [rootCert](exports_fabric.FabricBuilder.md#rootcert)
- [rootNodeId](exports_fabric.FabricBuilder.md#rootnodeid)
- [rootPublicKey](exports_fabric.FabricBuilder.md#rootpublickey)
- [rootVendorId](exports_fabric.FabricBuilder.md#rootvendorid)

### Methods

- [build](exports_fabric.FabricBuilder.md#build)
- [createCertificateSigningRequest](exports_fabric.FabricBuilder.md#createcertificatesigningrequest)
- [getPublicKey](exports_fabric.FabricBuilder.md#getpublickey)
- [setIdentityProtectionKey](exports_fabric.FabricBuilder.md#setidentityprotectionkey)
- [setIntermediateCACert](exports_fabric.FabricBuilder.md#setintermediatecacert)
- [setOperationalCert](exports_fabric.FabricBuilder.md#setoperationalcert)
- [setRootCert](exports_fabric.FabricBuilder.md#setrootcert)
- [setRootNodeId](exports_fabric.FabricBuilder.md#setrootnodeid)
- [setRootVendorId](exports_fabric.FabricBuilder.md#setrootvendorid)

## Constructors

### constructor

• **new FabricBuilder**(`fabricIndex`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](exports_datatype.FabricIndex.md) |

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:84

## Properties

### fabricId

• `Private` `Optional` **fabricId**: `any`

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:79

___

### fabricIndex

• `Private` `Readonly` **fabricIndex**: `any`

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:73

___

### identityProtectionKey

• `Private` `Optional` **identityProtectionKey**: `any`

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:83

___

### intermediateCACert

• `Private` `Optional` **intermediateCACert**: `any`

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:77

___

### keyPair

• `Private` **keyPair**: `any`

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:74

___

### nodeId

• `Private` `Optional` **nodeId**: `any`

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:80

___

### operationalCert

• `Private` `Optional` **operationalCert**: `any`

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:78

___

### rootCert

• `Private` `Optional` **rootCert**: `any`

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:76

___

### rootNodeId

• `Private` `Optional` **rootNodeId**: `any`

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:81

___

### rootPublicKey

• `Private` `Optional` **rootPublicKey**: `any`

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:82

___

### rootVendorId

• `Private` `Optional` **rootVendorId**: `any`

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:75

## Methods

### build

▸ **build**(): `Promise`<[`Fabric`](exports_fabric.Fabric.md)\>

#### Returns

`Promise`<[`Fabric`](exports_fabric.Fabric.md)\>

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:93

___

### createCertificateSigningRequest

▸ **createCertificateSigningRequest**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:86

___

### getPublicKey

▸ **getPublicKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:85

___

### setIdentityProtectionKey

▸ **setIdentityProtectionKey**(`key`): [`FabricBuilder`](exports_fabric.FabricBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Uint8Array` |

#### Returns

[`FabricBuilder`](exports_fabric.FabricBuilder.md)

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:92

___

### setIntermediateCACert

▸ **setIntermediateCACert**(`certificate`): [`FabricBuilder`](exports_fabric.FabricBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `certificate` | `Uint8Array` |

#### Returns

[`FabricBuilder`](exports_fabric.FabricBuilder.md)

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:89

___

### setOperationalCert

▸ **setOperationalCert**(`operationalCert`): [`FabricBuilder`](exports_fabric.FabricBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `operationalCert` | `Uint8Array` |

#### Returns

[`FabricBuilder`](exports_fabric.FabricBuilder.md)

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:88

___

### setRootCert

▸ **setRootCert**(`rootCert`): [`FabricBuilder`](exports_fabric.FabricBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootCert` | `Uint8Array` |

#### Returns

[`FabricBuilder`](exports_fabric.FabricBuilder.md)

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:87

___

### setRootNodeId

▸ **setRootNodeId**(`rootNodeId`): [`FabricBuilder`](exports_fabric.FabricBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootNodeId` | [`NodeId`](exports_datatype.NodeId.md) |

#### Returns

[`FabricBuilder`](exports_fabric.FabricBuilder.md)

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:91

___

### setRootVendorId

▸ **setRootVendorId**(`rootVendorId`): [`FabricBuilder`](exports_fabric.FabricBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootVendorId` | [`VendorId`](exports_datatype.VendorId.md) |

#### Returns

[`FabricBuilder`](exports_fabric.FabricBuilder.md)

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:90
