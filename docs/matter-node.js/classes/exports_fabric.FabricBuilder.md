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
| `fabricIndex` | [`FabricIndex`](../modules/exports_datatype.md#fabricindex) |

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:91

## Properties

### fabricId

• `Private` `Optional` **fabricId**: `any`

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:86

___

### fabricIndex

• `Private` `Readonly` **fabricIndex**: `any`

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:80

___

### identityProtectionKey

• `Private` `Optional` **identityProtectionKey**: `any`

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:90

___

### intermediateCACert

• `Private` `Optional` **intermediateCACert**: `any`

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:84

___

### keyPair

• `Private` **keyPair**: `any`

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:81

___

### nodeId

• `Private` `Optional` **nodeId**: `any`

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:87

___

### operationalCert

• `Private` `Optional` **operationalCert**: `any`

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:85

___

### rootCert

• `Private` `Optional` **rootCert**: `any`

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:83

___

### rootNodeId

• `Private` `Optional` **rootNodeId**: `any`

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:88

___

### rootPublicKey

• `Private` `Optional` **rootPublicKey**: `any`

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:89

___

### rootVendorId

• `Private` `Optional` **rootVendorId**: `any`

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:82

## Methods

### build

▸ **build**(): `Promise`<[`Fabric`](exports_fabric.Fabric.md)\>

#### Returns

`Promise`<[`Fabric`](exports_fabric.Fabric.md)\>

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:100

___

### createCertificateSigningRequest

▸ **createCertificateSigningRequest**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:93

___

### getPublicKey

▸ **getPublicKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:92

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

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:99

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

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:96

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

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:95

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

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:94

___

### setRootNodeId

▸ **setRootNodeId**(`rootNodeId`): [`FabricBuilder`](exports_fabric.FabricBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootNodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |

#### Returns

[`FabricBuilder`](exports_fabric.FabricBuilder.md)

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:98

___

### setRootVendorId

▸ **setRootVendorId**(`rootVendorId`): [`FabricBuilder`](exports_fabric.FabricBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootVendorId` | [`VendorId`](../modules/exports_datatype.md#vendorid) |

#### Returns

[`FabricBuilder`](exports_fabric.FabricBuilder.md)

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:97
