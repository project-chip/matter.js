[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [fabric](../modules/fabric.md) / FabricBuilder

# Class: FabricBuilder

[fabric](../modules/fabric.md).FabricBuilder

## Table of contents

### Constructors

- [constructor](fabric.FabricBuilder.md#constructor)

### Properties

- [fabricId](fabric.FabricBuilder.md#fabricid)
- [fabricIndex](fabric.FabricBuilder.md#fabricindex)
- [identityProtectionKey](fabric.FabricBuilder.md#identityprotectionkey)
- [intermediateCACert](fabric.FabricBuilder.md#intermediatecacert)
- [keyPair](fabric.FabricBuilder.md#keypair)
- [nodeId](fabric.FabricBuilder.md#nodeid)
- [operationalCert](fabric.FabricBuilder.md#operationalcert)
- [rootCert](fabric.FabricBuilder.md#rootcert)
- [rootNodeId](fabric.FabricBuilder.md#rootnodeid)
- [rootPublicKey](fabric.FabricBuilder.md#rootpublickey)
- [rootVendorId](fabric.FabricBuilder.md#rootvendorid)

### Methods

- [build](fabric.FabricBuilder.md#build)
- [createCertificateSigningRequest](fabric.FabricBuilder.md#createcertificatesigningrequest)
- [getPublicKey](fabric.FabricBuilder.md#getpublickey)
- [setIdentityProtectionKey](fabric.FabricBuilder.md#setidentityprotectionkey)
- [setIntermediateCACert](fabric.FabricBuilder.md#setintermediatecacert)
- [setOperationalCert](fabric.FabricBuilder.md#setoperationalcert)
- [setRootCert](fabric.FabricBuilder.md#setrootcert)
- [setRootNodeId](fabric.FabricBuilder.md#setrootnodeid)
- [setRootVendorId](fabric.FabricBuilder.md#setrootvendorid)

## Constructors

### constructor

• **new FabricBuilder**(`fabricIndex`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](datatype.FabricIndex.md) |

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:218](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L218)

## Properties

### fabricId

• `Private` `Optional` **fabricId**: [`FabricId`](datatype.FabricId.md)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:212](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L212)

___

### fabricIndex

• `Private` `Readonly` **fabricIndex**: [`FabricIndex`](datatype.FabricIndex.md)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:219](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L219)

___

### identityProtectionKey

• `Private` `Optional` **identityProtectionKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:216](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L216)

___

### intermediateCACert

• `Private` `Optional` **intermediateCACert**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:210](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L210)

___

### keyPair

• `Private` **keyPair**: [`KeyPair`](../modules/crypto.md#keypair)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:207](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L207)

___

### nodeId

• `Private` `Optional` **nodeId**: [`NodeId`](datatype.NodeId.md)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:213](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L213)

___

### operationalCert

• `Private` `Optional` **operationalCert**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:211](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L211)

___

### rootCert

• `Private` `Optional` **rootCert**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:209](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L209)

___

### rootNodeId

• `Private` `Optional` **rootNodeId**: [`NodeId`](datatype.NodeId.md)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:214](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L214)

___

### rootPublicKey

• `Private` `Optional` **rootPublicKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:215](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L215)

___

### rootVendorId

• `Private` `Optional` **rootVendorId**: [`VendorId`](datatype.VendorId.md)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:208](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L208)

## Methods

### build

▸ **build**(): `Promise`<[`Fabric`](fabric.Fabric.md)\>

#### Returns

`Promise`<[`Fabric`](fabric.Fabric.md)\>

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:264](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L264)

___

### createCertificateSigningRequest

▸ **createCertificateSigningRequest**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:226](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L226)

___

### getPublicKey

▸ **getPublicKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:222](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L222)

___

### setIdentityProtectionKey

▸ **setIdentityProtectionKey**(`key`): [`FabricBuilder`](fabric.FabricBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Uint8Array` |

#### Returns

[`FabricBuilder`](fabric.FabricBuilder.md)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:259](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L259)

___

### setIntermediateCACert

▸ **setIntermediateCACert**(`certificate`): [`FabricBuilder`](fabric.FabricBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `certificate` | `Uint8Array` |

#### Returns

[`FabricBuilder`](fabric.FabricBuilder.md)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:244](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L244)

___

### setOperationalCert

▸ **setOperationalCert**(`operationalCert`): [`FabricBuilder`](fabric.FabricBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `operationalCert` | `Uint8Array` |

#### Returns

[`FabricBuilder`](fabric.FabricBuilder.md)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:236](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L236)

___

### setRootCert

▸ **setRootCert**(`rootCert`): [`FabricBuilder`](fabric.FabricBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootCert` | `Uint8Array` |

#### Returns

[`FabricBuilder`](fabric.FabricBuilder.md)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:230](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L230)

___

### setRootNodeId

▸ **setRootNodeId**(`rootNodeId`): [`FabricBuilder`](fabric.FabricBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootNodeId` | [`NodeId`](datatype.NodeId.md) |

#### Returns

[`FabricBuilder`](fabric.FabricBuilder.md)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:254](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L254)

___

### setRootVendorId

▸ **setRootVendorId**(`rootVendorId`): [`FabricBuilder`](fabric.FabricBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootVendorId` | [`VendorId`](datatype.VendorId.md) |

#### Returns

[`FabricBuilder`](fabric.FabricBuilder.md)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:249](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L249)
