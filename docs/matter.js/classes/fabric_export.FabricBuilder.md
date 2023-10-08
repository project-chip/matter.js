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
- [label](fabric_export.FabricBuilder.md#label)
- [nodeId](fabric_export.FabricBuilder.md#nodeid)
- [operationalCert](fabric_export.FabricBuilder.md#operationalcert)
- [rootCert](fabric_export.FabricBuilder.md#rootcert)
- [rootNodeId](fabric_export.FabricBuilder.md#rootnodeid)
- [rootPublicKey](fabric_export.FabricBuilder.md#rootpublickey)
- [rootVendorId](fabric_export.FabricBuilder.md#rootvendorid)

### Methods

- [build](fabric_export.FabricBuilder.md#build)
- [createCertificateSigningRequest](fabric_export.FabricBuilder.md#createcertificatesigningrequest)
- [getFabricId](fabric_export.FabricBuilder.md#getfabricid)
- [getFabricIndex](fabric_export.FabricBuilder.md#getfabricindex)
- [getNodeId](fabric_export.FabricBuilder.md#getnodeid)
- [getPublicKey](fabric_export.FabricBuilder.md#getpublickey)
- [hasRootCert](fabric_export.FabricBuilder.md#hasrootcert)
- [initializeFromFabricForUpdate](fabric_export.FabricBuilder.md#initializefromfabricforupdate)
- [matchesToFabric](fabric_export.FabricBuilder.md#matchestofabric)
- [setIdentityProtectionKey](fabric_export.FabricBuilder.md#setidentityprotectionkey)
- [setIntermediateCACert](fabric_export.FabricBuilder.md#setintermediatecacert)
- [setOperationalCert](fabric_export.FabricBuilder.md#setoperationalcert)
- [setRootCert](fabric_export.FabricBuilder.md#setrootcert)
- [setRootNodeId](fabric_export.FabricBuilder.md#setrootnodeid)
- [setRootVendorId](fabric_export.FabricBuilder.md#setrootvendorid)

## Constructors

### constructor

• **new FabricBuilder**()

## Properties

### fabricId

• `Private` `Optional` **fabricId**: [`FabricId`](../modules/datatype_export.md#fabricid)

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:241

___

### fabricIndex

• `Private` `Optional` **fabricIndex**: [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:246

___

### identityProtectionKey

• `Private` `Optional` **identityProtectionKey**: `Uint8Array`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:245

___

### intermediateCACert

• `Private` `Optional` **intermediateCACert**: `Uint8Array`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:239

___

### keyPair

• `Private` **keyPair**: [`PrivateKey`](../modules/crypto_export.md#privatekey)

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:236

___

### label

• `Private` **label**: `string` = `""`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:247

___

### nodeId

• `Private` `Optional` **nodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:242

___

### operationalCert

• `Private` `Optional` **operationalCert**: `Uint8Array`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:240

___

### rootCert

• `Private` `Optional` **rootCert**: `Uint8Array`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:238

___

### rootNodeId

• `Private` `Optional` **rootNodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:243

___

### rootPublicKey

• `Private` `Optional` **rootPublicKey**: `Uint8Array`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:244

___

### rootVendorId

• `Private` `Optional` **rootVendorId**: [`VendorId`](../modules/datatype_export.md#vendorid)

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:237

## Methods

### build

▸ **build**(`fabricIndex`): `Promise`<[`Fabric`](fabric_export.Fabric.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/datatype_export.md#fabricindex) |

#### Returns

`Promise`<[`Fabric`](fabric_export.Fabric.md)\>

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:326

___

### createCertificateSigningRequest

▸ **createCertificateSigningRequest**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:257

___

### getFabricId

▸ **getFabricId**(): `undefined` \| [`FabricId`](../modules/datatype_export.md#fabricid)

#### Returns

`undefined` \| [`FabricId`](../modules/datatype_export.md#fabricid)

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:322

___

### getFabricIndex

▸ **getFabricIndex**(): `undefined` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Returns

`undefined` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:253

___

### getNodeId

▸ **getNodeId**(): `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid)

#### Returns

`undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:318

___

### getPublicKey

▸ **getPublicKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:249

___

### hasRootCert

▸ **hasRootCert**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:267

___

### initializeFromFabricForUpdate

▸ **initializeFromFabricForUpdate**(`fabric`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:302

___

### matchesToFabric

▸ **matchesToFabric**(`fabric`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |

#### Returns

`boolean`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:311

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

packages/matter.js/src/fabric/Fabric.ts:297

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

packages/matter.js/src/fabric/Fabric.ts:282

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

packages/matter.js/src/fabric/Fabric.ts:271

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

packages/matter.js/src/fabric/Fabric.ts:261

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

packages/matter.js/src/fabric/Fabric.ts:292

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

packages/matter.js/src/fabric/Fabric.ts:287
