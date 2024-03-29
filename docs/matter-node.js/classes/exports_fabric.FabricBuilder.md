[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/fabric](../modules/exports_fabric.md) / FabricBuilder

# Class: FabricBuilder

[exports/fabric](../modules/exports_fabric.md).FabricBuilder

## Table of contents

### Constructors

- [constructor](exports_fabric.FabricBuilder.md#constructor)

### Properties

- [caseAuthenticatedTags](exports_fabric.FabricBuilder.md#caseauthenticatedtags)
- [fabricId](exports_fabric.FabricBuilder.md#fabricid)
- [fabricIndex](exports_fabric.FabricBuilder.md#fabricindex)
- [identityProtectionKey](exports_fabric.FabricBuilder.md#identityprotectionkey)
- [intermediateCACert](exports_fabric.FabricBuilder.md#intermediatecacert)
- [keyPair](exports_fabric.FabricBuilder.md#keypair)
- [label](exports_fabric.FabricBuilder.md#label)
- [nodeId](exports_fabric.FabricBuilder.md#nodeid)
- [operationalCert](exports_fabric.FabricBuilder.md#operationalcert)
- [rootCert](exports_fabric.FabricBuilder.md#rootcert)
- [rootNodeId](exports_fabric.FabricBuilder.md#rootnodeid)
- [rootPublicKey](exports_fabric.FabricBuilder.md#rootpublickey)
- [rootVendorId](exports_fabric.FabricBuilder.md#rootvendorid)

### Methods

- [build](exports_fabric.FabricBuilder.md#build)
- [createCertificateSigningRequest](exports_fabric.FabricBuilder.md#createcertificatesigningrequest)
- [getFabricId](exports_fabric.FabricBuilder.md#getfabricid)
- [getFabricIndex](exports_fabric.FabricBuilder.md#getfabricindex)
- [getNodeId](exports_fabric.FabricBuilder.md#getnodeid)
- [getPublicKey](exports_fabric.FabricBuilder.md#getpublickey)
- [hasRootCert](exports_fabric.FabricBuilder.md#hasrootcert)
- [initializeFromFabricForUpdate](exports_fabric.FabricBuilder.md#initializefromfabricforupdate)
- [matchesToFabric](exports_fabric.FabricBuilder.md#matchestofabric)
- [setIdentityProtectionKey](exports_fabric.FabricBuilder.md#setidentityprotectionkey)
- [setIntermediateCACert](exports_fabric.FabricBuilder.md#setintermediatecacert)
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

### caseAuthenticatedTags

• `Private` **caseAuthenticatedTags**: `any`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:100

___

### fabricId

• `Private` `Optional` **fabricId**: `any`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:93

___

### fabricIndex

• `Private` `Optional` **fabricIndex**: `any`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:98

___

### identityProtectionKey

• `Private` `Optional` **identityProtectionKey**: `any`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:97

___

### intermediateCACert

• `Private` `Optional` **intermediateCACert**: `any`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:91

___

### keyPair

• `Private` **keyPair**: `any`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:88

___

### label

• `Private` **label**: `any`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:99

___

### nodeId

• `Private` `Optional` **nodeId**: `any`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:94

___

### operationalCert

• `Private` `Optional` **operationalCert**: `any`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:92

___

### rootCert

• `Private` `Optional` **rootCert**: `any`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:90

___

### rootNodeId

• `Private` `Optional` **rootNodeId**: `any`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:95

___

### rootPublicKey

• `Private` `Optional` **rootPublicKey**: `any`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:96

___

### rootVendorId

• `Private` `Optional` **rootVendorId**: `any`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:89

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

packages/matter.js/dist/esm/fabric/Fabric.d.ts:115

___

### createCertificateSigningRequest

▸ **createCertificateSigningRequest**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:103

___

### getFabricId

▸ **getFabricId**(): `undefined` \| [`FabricId`](../modules/exports_datatype.md#fabricid)

#### Returns

`undefined` \| [`FabricId`](../modules/exports_datatype.md#fabricid)

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:114

___

### getFabricIndex

▸ **getFabricIndex**(): `undefined` \| [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Returns

`undefined` \| [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:102

___

### getNodeId

▸ **getNodeId**(): `undefined` \| [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Returns

`undefined` \| [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:113

___

### getPublicKey

▸ **getPublicKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:101

___

### hasRootCert

▸ **hasRootCert**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:105

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

packages/matter.js/dist/esm/fabric/Fabric.d.ts:111

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

packages/matter.js/dist/esm/fabric/Fabric.d.ts:112

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

packages/matter.js/dist/esm/fabric/Fabric.d.ts:110

___

### setIntermediateCACert

▸ **setIntermediateCACert**(`certificate`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `certificate` | `Uint8Array` |

#### Returns

`this`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:107

___

### setOperationalCert

▸ **setOperationalCert**(`operationalCert`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `operationalCert` | `Uint8Array` |

#### Returns

`this`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:106

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

packages/matter.js/dist/esm/fabric/Fabric.d.ts:104

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

packages/matter.js/dist/esm/fabric/Fabric.d.ts:109

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

packages/matter.js/dist/esm/fabric/Fabric.d.ts:108
