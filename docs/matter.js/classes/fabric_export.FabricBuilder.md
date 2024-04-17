[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [fabric/export](../modules/fabric_export.md) / FabricBuilder

# Class: FabricBuilder

[fabric/export](../modules/fabric_export.md).FabricBuilder

## Table of contents

### Constructors

- [constructor](fabric_export.FabricBuilder.md#constructor)

### Properties

- [caseAuthenticatedTags](fabric_export.FabricBuilder.md#caseauthenticatedtags)
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

• **new FabricBuilder**(): [`FabricBuilder`](fabric_export.FabricBuilder.md)

#### Returns

[`FabricBuilder`](fabric_export.FabricBuilder.md)

## Properties

### caseAuthenticatedTags

• `Private` **caseAuthenticatedTags**: [`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag)[]

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:268](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L268)

___

### fabricId

• `Private` `Optional` **fabricId**: [`FabricId`](../modules/datatype_export.md#fabricid)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:261](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L261)

___

### fabricIndex

• `Private` `Optional` **fabricIndex**: [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:266](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L266)

___

### identityProtectionKey

• `Private` `Optional` **identityProtectionKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:265](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L265)

___

### intermediateCACert

• `Private` `Optional` **intermediateCACert**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:259](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L259)

___

### keyPair

• `Private` **keyPair**: [`PrivateKey`](../interfaces/crypto_export.PrivateKey.md)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:256](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L256)

___

### label

• `Private` **label**: `string` = `""`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:267](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L267)

___

### nodeId

• `Private` `Optional` **nodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:262](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L262)

___

### operationalCert

• `Private` `Optional` **operationalCert**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:260](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L260)

___

### rootCert

• `Private` `Optional` **rootCert**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:258](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L258)

___

### rootNodeId

• `Private` `Optional` **rootNodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:263](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L263)

___

### rootPublicKey

• `Private` `Optional` **rootPublicKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:264](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L264)

___

### rootVendorId

• `Private` `Optional` **rootVendorId**: [`VendorId`](../modules/datatype_export.md#vendorid)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:257](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L257)

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

[packages/matter.js/src/fabric/Fabric.ts:351](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L351)

___

### createCertificateSigningRequest

▸ **createCertificateSigningRequest**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:278](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L278)

___

### getFabricId

▸ **getFabricId**(): `undefined` \| [`FabricId`](../modules/datatype_export.md#fabricid)

#### Returns

`undefined` \| [`FabricId`](../modules/datatype_export.md#fabricid)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:347](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L347)

___

### getFabricIndex

▸ **getFabricIndex**(): `undefined` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Returns

`undefined` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L274)

___

### getNodeId

▸ **getNodeId**(): `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid)

#### Returns

`undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:343](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L343)

___

### getPublicKey

▸ **getPublicKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:270](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L270)

___

### hasRootCert

▸ **hasRootCert**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:288](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L288)

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

[packages/matter.js/src/fabric/Fabric.ts:327](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L327)

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

[packages/matter.js/src/fabric/Fabric.ts:336](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L336)

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

[packages/matter.js/src/fabric/Fabric.ts:322](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L322)

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

[packages/matter.js/src/fabric/Fabric.ts:307](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L307)

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

[packages/matter.js/src/fabric/Fabric.ts:292](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L292)

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

[packages/matter.js/src/fabric/Fabric.ts:282](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L282)

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

[packages/matter.js/src/fabric/Fabric.ts:317](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L317)

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

[packages/matter.js/src/fabric/Fabric.ts:312](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L312)
