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

[packages/matter.js/src/fabric/Fabric.ts:255](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/fabric/Fabric.ts#L255)

___

### fabricId

• `Private` `Optional` **fabricId**: [`FabricId`](../modules/datatype_export.md#fabricid)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:248](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/fabric/Fabric.ts#L248)

___

### fabricIndex

• `Private` `Optional` **fabricIndex**: [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:253](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/fabric/Fabric.ts#L253)

___

### identityProtectionKey

• `Private` `Optional` **identityProtectionKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:252](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/fabric/Fabric.ts#L252)

___

### intermediateCACert

• `Private` `Optional` **intermediateCACert**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:246](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/fabric/Fabric.ts#L246)

___

### keyPair

• `Private` **keyPair**: [`PrivateKey`](../modules/crypto_export.md#privatekey)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:243](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/fabric/Fabric.ts#L243)

___

### label

• `Private` **label**: `string` = `""`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:254](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/fabric/Fabric.ts#L254)

___

### nodeId

• `Private` `Optional` **nodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:249](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/fabric/Fabric.ts#L249)

___

### operationalCert

• `Private` `Optional` **operationalCert**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:247](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/fabric/Fabric.ts#L247)

___

### rootCert

• `Private` `Optional` **rootCert**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:245](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/fabric/Fabric.ts#L245)

___

### rootNodeId

• `Private` `Optional` **rootNodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:250](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/fabric/Fabric.ts#L250)

___

### rootPublicKey

• `Private` `Optional` **rootPublicKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:251](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/fabric/Fabric.ts#L251)

___

### rootVendorId

• `Private` `Optional` **rootVendorId**: [`VendorId`](../modules/datatype_export.md#vendorid)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:244](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/fabric/Fabric.ts#L244)

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

[packages/matter.js/src/fabric/Fabric.ts:338](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/fabric/Fabric.ts#L338)

___

### createCertificateSigningRequest

▸ **createCertificateSigningRequest**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:265](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/fabric/Fabric.ts#L265)

___

### getFabricId

▸ **getFabricId**(): `undefined` \| [`FabricId`](../modules/datatype_export.md#fabricid)

#### Returns

`undefined` \| [`FabricId`](../modules/datatype_export.md#fabricid)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:334](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/fabric/Fabric.ts#L334)

___

### getFabricIndex

▸ **getFabricIndex**(): `undefined` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Returns

`undefined` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:261](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/fabric/Fabric.ts#L261)

___

### getNodeId

▸ **getNodeId**(): `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid)

#### Returns

`undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:330](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/fabric/Fabric.ts#L330)

___

### getPublicKey

▸ **getPublicKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:257](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/fabric/Fabric.ts#L257)

___

### hasRootCert

▸ **hasRootCert**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:275](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/fabric/Fabric.ts#L275)

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

[packages/matter.js/src/fabric/Fabric.ts:314](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/fabric/Fabric.ts#L314)

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

[packages/matter.js/src/fabric/Fabric.ts:323](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/fabric/Fabric.ts#L323)

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

[packages/matter.js/src/fabric/Fabric.ts:309](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/fabric/Fabric.ts#L309)

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

[packages/matter.js/src/fabric/Fabric.ts:294](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/fabric/Fabric.ts#L294)

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

[packages/matter.js/src/fabric/Fabric.ts:279](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/fabric/Fabric.ts#L279)

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

[packages/matter.js/src/fabric/Fabric.ts:269](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/fabric/Fabric.ts#L269)

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

[packages/matter.js/src/fabric/Fabric.ts:304](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/fabric/Fabric.ts#L304)

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

[packages/matter.js/src/fabric/Fabric.ts:299](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/fabric/Fabric.ts#L299)
