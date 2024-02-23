[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / FabricBuilder

# Class: FabricBuilder

[\<internal\>](../modules/internal_.md).FabricBuilder

## Table of contents

### Constructors

- [constructor](internal_.FabricBuilder.md#constructor)

### Properties

- [caseAuthenticatedTags](internal_.FabricBuilder.md#caseauthenticatedtags)
- [fabricId](internal_.FabricBuilder.md#fabricid)
- [fabricIndex](internal_.FabricBuilder.md#fabricindex)
- [identityProtectionKey](internal_.FabricBuilder.md#identityprotectionkey)
- [intermediateCACert](internal_.FabricBuilder.md#intermediatecacert)
- [keyPair](internal_.FabricBuilder.md#keypair)
- [label](internal_.FabricBuilder.md#label)
- [nodeId](internal_.FabricBuilder.md#nodeid)
- [operationalCert](internal_.FabricBuilder.md#operationalcert)
- [rootCert](internal_.FabricBuilder.md#rootcert)
- [rootNodeId](internal_.FabricBuilder.md#rootnodeid)
- [rootPublicKey](internal_.FabricBuilder.md#rootpublickey)
- [rootVendorId](internal_.FabricBuilder.md#rootvendorid)

### Methods

- [build](internal_.FabricBuilder.md#build)
- [createCertificateSigningRequest](internal_.FabricBuilder.md#createcertificatesigningrequest)
- [getFabricId](internal_.FabricBuilder.md#getfabricid)
- [getFabricIndex](internal_.FabricBuilder.md#getfabricindex)
- [getNodeId](internal_.FabricBuilder.md#getnodeid)
- [getPublicKey](internal_.FabricBuilder.md#getpublickey)
- [hasRootCert](internal_.FabricBuilder.md#hasrootcert)
- [initializeFromFabricForUpdate](internal_.FabricBuilder.md#initializefromfabricforupdate)
- [matchesToFabric](internal_.FabricBuilder.md#matchestofabric)
- [setIdentityProtectionKey](internal_.FabricBuilder.md#setidentityprotectionkey)
- [setIntermediateCACert](internal_.FabricBuilder.md#setintermediatecacert)
- [setOperationalCert](internal_.FabricBuilder.md#setoperationalcert)
- [setRootCert](internal_.FabricBuilder.md#setrootcert)
- [setRootNodeId](internal_.FabricBuilder.md#setrootnodeid)
- [setRootVendorId](internal_.FabricBuilder.md#setrootvendorid)

## Constructors

### constructor

• **new FabricBuilder**(): [`FabricBuilder`](internal_.FabricBuilder.md)

#### Returns

[`FabricBuilder`](internal_.FabricBuilder.md)

## Properties

### caseAuthenticatedTags

• `Private` **caseAuthenticatedTags**: `any`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:98

___

### fabricId

• `Private` `Optional` **fabricId**: `any`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:91

___

### fabricIndex

• `Private` `Optional` **fabricIndex**: `any`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:96

___

### identityProtectionKey

• `Private` `Optional` **identityProtectionKey**: `any`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:95

___

### intermediateCACert

• `Private` `Optional` **intermediateCACert**: `any`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:89

___

### keyPair

• `Private` **keyPair**: `any`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:86

___

### label

• `Private` **label**: `any`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:97

___

### nodeId

• `Private` `Optional` **nodeId**: `any`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:92

___

### operationalCert

• `Private` `Optional` **operationalCert**: `any`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:90

___

### rootCert

• `Private` `Optional` **rootCert**: `any`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:88

___

### rootNodeId

• `Private` `Optional` **rootNodeId**: `any`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:93

___

### rootPublicKey

• `Private` `Optional` **rootPublicKey**: `any`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:94

___

### rootVendorId

• `Private` `Optional` **rootVendorId**: `any`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:87

## Methods

### build

▸ **build**(`fabricIndex`): `Promise`\<[`Fabric`](internal_.Fabric.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/internal_.md#fabricindex) |

#### Returns

`Promise`\<[`Fabric`](internal_.Fabric.md)\>

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:113

___

### createCertificateSigningRequest

▸ **createCertificateSigningRequest**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:101

___

### getFabricId

▸ **getFabricId**(): `undefined` \| [`FabricId`](../modules/internal_.md#fabricid)

#### Returns

`undefined` \| [`FabricId`](../modules/internal_.md#fabricid)

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:112

___

### getFabricIndex

▸ **getFabricIndex**(): `undefined` \| [`FabricIndex`](../modules/internal_.md#fabricindex)

#### Returns

`undefined` \| [`FabricIndex`](../modules/internal_.md#fabricindex)

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:100

___

### getNodeId

▸ **getNodeId**(): `undefined` \| [`NodeId`](../modules/internal_.md#nodeid)

#### Returns

`undefined` \| [`NodeId`](../modules/internal_.md#nodeid)

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:111

___

### getPublicKey

▸ **getPublicKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:99

___

### hasRootCert

▸ **hasRootCert**(): `boolean`

#### Returns

`boolean`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:103

___

### initializeFromFabricForUpdate

▸ **initializeFromFabricForUpdate**(`fabric`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](internal_.Fabric.md) |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:109

___

### matchesToFabric

▸ **matchesToFabric**(`fabric`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](internal_.Fabric.md) |

#### Returns

`boolean`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:110

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

matter.js/dist/esm/fabric/Fabric.d.ts:108

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

matter.js/dist/esm/fabric/Fabric.d.ts:105

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

matter.js/dist/esm/fabric/Fabric.d.ts:104

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

matter.js/dist/esm/fabric/Fabric.d.ts:102

___

### setRootNodeId

▸ **setRootNodeId**(`rootNodeId`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootNodeId` | [`NodeId`](../modules/internal_.md#nodeid) |

#### Returns

`this`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:107

___

### setRootVendorId

▸ **setRootVendorId**(`rootVendorId`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootVendorId` | [`VendorId`](../modules/internal_.md#vendorid) |

#### Returns

`this`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:106
