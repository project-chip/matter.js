[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [fabric/export](../modules/fabric_export.md) / FabricBuilder

# Class: FabricBuilder

[fabric/export](../modules/fabric_export.md).FabricBuilder

## Table of contents

### Constructors

- [constructor](fabric_export.FabricBuilder.md#constructor)

### Properties

- [fabricId](fabric_export.FabricBuilder.md#fabricid)
- [fabricIndex](fabric_export.FabricBuilder.md#fabricindex)
- [identityProtectionKey](fabric_export.FabricBuilder.md#identityprotectionkey)
- [intermediateCACert](fabric_export.FabricBuilder.md#intermediatecacert)
- [keyPair](fabric_export.FabricBuilder.md#keypair)
- [nodeId](fabric_export.FabricBuilder.md#nodeid)
- [operationalCert](fabric_export.FabricBuilder.md#operationalcert)
- [rootCert](fabric_export.FabricBuilder.md#rootcert)
- [rootNodeId](fabric_export.FabricBuilder.md#rootnodeid)
- [rootPublicKey](fabric_export.FabricBuilder.md#rootpublickey)
- [rootVendorId](fabric_export.FabricBuilder.md#rootvendorid)

### Methods

- [build](fabric_export.FabricBuilder.md#build)
- [createCertificateSigningRequest](fabric_export.FabricBuilder.md#createcertificatesigningrequest)
- [getPublicKey](fabric_export.FabricBuilder.md#getpublickey)
- [setIdentityProtectionKey](fabric_export.FabricBuilder.md#setidentityprotectionkey)
- [setIntermediateCACert](fabric_export.FabricBuilder.md#setintermediatecacert)
- [setOperationalCert](fabric_export.FabricBuilder.md#setoperationalcert)
- [setRootCert](fabric_export.FabricBuilder.md#setrootcert)
- [setRootNodeId](fabric_export.FabricBuilder.md#setrootnodeid)
- [setRootVendorId](fabric_export.FabricBuilder.md#setrootvendorid)

## Constructors

### constructor

• **new FabricBuilder**(`fabricIndex`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/datatype_export.md#fabricindex) |

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:233](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/fabric/Fabric.ts#L233)

## Properties

### fabricId

• `Private` `Optional` **fabricId**: [`FabricId`](../modules/datatype_export.md#fabricid)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:227](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/fabric/Fabric.ts#L227)

___

### fabricIndex

• `Private` `Readonly` **fabricIndex**: [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:233](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/fabric/Fabric.ts#L233)

___

### identityProtectionKey

• `Private` `Optional` **identityProtectionKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:231](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/fabric/Fabric.ts#L231)

___

### intermediateCACert

• `Private` `Optional` **intermediateCACert**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:225](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/fabric/Fabric.ts#L225)

___

### keyPair

• `Private` **keyPair**: [`PrivateKey`](../modules/crypto_export.md#privatekey)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:222](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/fabric/Fabric.ts#L222)

___

### nodeId

• `Private` `Optional` **nodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:228](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/fabric/Fabric.ts#L228)

___

### operationalCert

• `Private` `Optional` **operationalCert**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:226](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/fabric/Fabric.ts#L226)

___

### rootCert

• `Private` `Optional` **rootCert**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:224](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/fabric/Fabric.ts#L224)

___

### rootNodeId

• `Private` `Optional` **rootNodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:229](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/fabric/Fabric.ts#L229)

___

### rootPublicKey

• `Private` `Optional` **rootPublicKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:230](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/fabric/Fabric.ts#L230)

___

### rootVendorId

• `Private` `Optional` **rootVendorId**: [`VendorId`](../modules/datatype_export.md#vendorid)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:223](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/fabric/Fabric.ts#L223)

## Methods

### build

▸ **build**(): `Promise`<[`Fabric`](fabric_export.Fabric.md)\>

#### Returns

`Promise`<[`Fabric`](fabric_export.Fabric.md)\>

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:279](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/fabric/Fabric.ts#L279)

___

### createCertificateSigningRequest

▸ **createCertificateSigningRequest**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:239](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/fabric/Fabric.ts#L239)

___

### getPublicKey

▸ **getPublicKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:235](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/fabric/Fabric.ts#L235)

___

### setIdentityProtectionKey

▸ **setIdentityProtectionKey**(`key`): [`FabricBuilder`](fabric_export.FabricBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Uint8Array` |

#### Returns

[`FabricBuilder`](fabric_export.FabricBuilder.md)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:274](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/fabric/Fabric.ts#L274)

___

### setIntermediateCACert

▸ **setIntermediateCACert**(`certificate`): [`FabricBuilder`](fabric_export.FabricBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `certificate` | `Uint8Array` |

#### Returns

[`FabricBuilder`](fabric_export.FabricBuilder.md)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:259](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/fabric/Fabric.ts#L259)

___

### setOperationalCert

▸ **setOperationalCert**(`operationalCert`): [`FabricBuilder`](fabric_export.FabricBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `operationalCert` | `Uint8Array` |

#### Returns

[`FabricBuilder`](fabric_export.FabricBuilder.md)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:249](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/fabric/Fabric.ts#L249)

___

### setRootCert

▸ **setRootCert**(`rootCert`): [`FabricBuilder`](fabric_export.FabricBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootCert` | `Uint8Array` |

#### Returns

[`FabricBuilder`](fabric_export.FabricBuilder.md)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:243](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/fabric/Fabric.ts#L243)

___

### setRootNodeId

▸ **setRootNodeId**(`rootNodeId`): [`FabricBuilder`](fabric_export.FabricBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

[`FabricBuilder`](fabric_export.FabricBuilder.md)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:269](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/fabric/Fabric.ts#L269)

___

### setRootVendorId

▸ **setRootVendorId**(`rootVendorId`): [`FabricBuilder`](fabric_export.FabricBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootVendorId` | [`VendorId`](../modules/datatype_export.md#vendorid) |

#### Returns

[`FabricBuilder`](fabric_export.FabricBuilder.md)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:264](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/fabric/Fabric.ts#L264)
