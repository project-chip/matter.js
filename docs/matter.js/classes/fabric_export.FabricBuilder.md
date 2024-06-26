[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [fabric/export](../modules/fabric_export.md) / FabricBuilder

# Class: FabricBuilder

[fabric/export](../modules/fabric_export.md).FabricBuilder

## Table of contents

### Constructors

- [constructor](fabric_export.FabricBuilder.md#constructor)

### Properties

- [#caseAuthenticatedTags](fabric_export.FabricBuilder.md##caseauthenticatedtags)
- [#fabricId](fabric_export.FabricBuilder.md##fabricid)
- [#fabricIndex](fabric_export.FabricBuilder.md##fabricindex)
- [#identityProtectionKey](fabric_export.FabricBuilder.md##identityprotectionkey)
- [#intermediateCACert](fabric_export.FabricBuilder.md##intermediatecacert)
- [#keyPair](fabric_export.FabricBuilder.md##keypair)
- [#label](fabric_export.FabricBuilder.md##label)
- [#nodeId](fabric_export.FabricBuilder.md##nodeid)
- [#operationalCert](fabric_export.FabricBuilder.md##operationalcert)
- [#rootCert](fabric_export.FabricBuilder.md##rootcert)
- [#rootNodeId](fabric_export.FabricBuilder.md##rootnodeid)
- [#rootPublicKey](fabric_export.FabricBuilder.md##rootpublickey)
- [#rootVendorId](fabric_export.FabricBuilder.md##rootvendorid)

### Accessors

- [fabricId](fabric_export.FabricBuilder.md#fabricid)
- [fabricIndex](fabric_export.FabricBuilder.md#fabricindex)
- [keyPair](fabric_export.FabricBuilder.md#keypair)
- [nodeId](fabric_export.FabricBuilder.md#nodeid)
- [publicKey](fabric_export.FabricBuilder.md#publickey)

### Methods

- [build](fabric_export.FabricBuilder.md#build)
- [createCertificateSigningRequest](fabric_export.FabricBuilder.md#createcertificatesigningrequest)
- [hasRootCert](fabric_export.FabricBuilder.md#hasrootcert)
- [initializeFromFabricForUpdate](fabric_export.FabricBuilder.md#initializefromfabricforupdate)
- [matchesToFabric](fabric_export.FabricBuilder.md#matchestofabric)
- [setIdentityProtectionKey](fabric_export.FabricBuilder.md#setidentityprotectionkey)
- [setOperationalCert](fabric_export.FabricBuilder.md#setoperationalcert)
- [setRootCert](fabric_export.FabricBuilder.md#setrootcert)
- [setRootNodeId](fabric_export.FabricBuilder.md#setrootnodeid)
- [setRootVendorId](fabric_export.FabricBuilder.md#setrootvendorid)

## Constructors

### constructor

• **new FabricBuilder**(): [`FabricBuilder`](fabric_export.FabricBuilder.md)

#### Returns

[`FabricBuilder`](fabric_export.FabricBuilder.md)

## Properties

### #caseAuthenticatedTags

• `Private` **#caseAuthenticatedTags**: [`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag)[]

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:368](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/fabric/Fabric.ts#L368)

___

### #fabricId

• `Private` `Optional` **#fabricId**: [`FabricId`](../modules/datatype_export.md#fabricid)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:361](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/fabric/Fabric.ts#L361)

___

### #fabricIndex

• `Private` `Optional` **#fabricIndex**: [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:366](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/fabric/Fabric.ts#L366)

___

### #identityProtectionKey

• `Private` `Optional` **#identityProtectionKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:365](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/fabric/Fabric.ts#L365)

___

### #intermediateCACert

• `Private` `Optional` **#intermediateCACert**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:359](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/fabric/Fabric.ts#L359)

___

### #keyPair

• `Private` **#keyPair**: [`PrivateKey`](../interfaces/crypto_export.PrivateKey.md)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:356](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/fabric/Fabric.ts#L356)

___

### #label

• `Private` **#label**: `string` = `""`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:367](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/fabric/Fabric.ts#L367)

___

### #nodeId

• `Private` `Optional` **#nodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:362](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/fabric/Fabric.ts#L362)

___

### #operationalCert

• `Private` `Optional` **#operationalCert**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:360](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/fabric/Fabric.ts#L360)

___

### #rootCert

• `Private` `Optional` **#rootCert**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:358](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/fabric/Fabric.ts#L358)

___

### #rootNodeId

• `Private` `Optional` **#rootNodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:363](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/fabric/Fabric.ts#L363)

___

### #rootPublicKey

• `Private` `Optional` **#rootPublicKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:364](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/fabric/Fabric.ts#L364)

___

### #rootVendorId

• `Private` `Optional` **#rootVendorId**: [`VendorId`](../modules/datatype_export.md#vendorid)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:357](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/fabric/Fabric.ts#L357)

## Accessors

### fabricId

• `get` **fabricId**(): `undefined` \| [`FabricId`](../modules/datatype_export.md#fabricid)

#### Returns

`undefined` \| [`FabricId`](../modules/datatype_export.md#fabricid)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:476](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/fabric/Fabric.ts#L476)

___

### fabricIndex

• `get` **fabricIndex**(): `undefined` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Returns

`undefined` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:374](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/fabric/Fabric.ts#L374)

___

### keyPair

• `get` **keyPair**(): [`PrivateKey`](../interfaces/crypto_export.PrivateKey.md)

#### Returns

[`PrivateKey`](../interfaces/crypto_export.PrivateKey.md)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:480](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/fabric/Fabric.ts#L480)

___

### nodeId

• `get` **nodeId**(): `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid)

#### Returns

`undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:472](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/fabric/Fabric.ts#L472)

___

### publicKey

• `get` **publicKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:370](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/fabric/Fabric.ts#L370)

## Methods

### build

▸ **build**(`fabricIndex`): `Promise`\<[`Fabric`](fabric_export.Fabric.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/datatype_export.md#fabricindex) |

#### Returns

`Promise`\<[`Fabric`](fabric_export.Fabric.md)\>

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:484](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/fabric/Fabric.ts#L484)

___

### createCertificateSigningRequest

▸ **createCertificateSigningRequest**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:378](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/fabric/Fabric.ts#L378)

___

### hasRootCert

▸ **hasRootCert**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:389](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/fabric/Fabric.ts#L389)

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

[packages/matter.js/src/fabric/Fabric.ts:456](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/fabric/Fabric.ts#L456)

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

[packages/matter.js/src/fabric/Fabric.ts:465](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/fabric/Fabric.ts#L465)

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

[packages/matter.js/src/fabric/Fabric.ts:451](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/fabric/Fabric.ts#L451)

___

### setOperationalCert

▸ **setOperationalCert**(`operationalCert`, `intermediateCACert?`): [`FabricBuilder`](fabric_export.FabricBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `operationalCert` | `Uint8Array` |
| `intermediateCACert?` | `Uint8Array` |

#### Returns

[`FabricBuilder`](fabric_export.FabricBuilder.md)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:393](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/fabric/Fabric.ts#L393)

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

[packages/matter.js/src/fabric/Fabric.ts:382](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/fabric/Fabric.ts#L382)

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

[packages/matter.js/src/fabric/Fabric.ts:446](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/fabric/Fabric.ts#L446)

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

[packages/matter.js/src/fabric/Fabric.ts:441](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/fabric/Fabric.ts#L441)
