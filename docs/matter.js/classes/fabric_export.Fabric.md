[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [fabric/export](../modules/fabric_export.md) / Fabric

# Class: Fabric

[fabric/export](../modules/fabric_export.md).Fabric

## Table of contents

### Constructors

- [constructor](fabric_export.Fabric.md#constructor)

### Properties

- [caseAuthenticatedTags](fabric_export.Fabric.md#caseauthenticatedtags)
- [fabricId](fabric_export.Fabric.md#fabricid)
- [fabricIndex](fabric_export.Fabric.md#fabricindex)
- [identityProtectionKey](fabric_export.Fabric.md#identityprotectionkey)
- [intermediateCACert](fabric_export.Fabric.md#intermediatecacert)
- [keyPair](fabric_export.Fabric.md#keypair)
- [label](fabric_export.Fabric.md#label)
- [nodeId](fabric_export.Fabric.md#nodeid)
- [operationalCert](fabric_export.Fabric.md#operationalcert)
- [operationalId](fabric_export.Fabric.md#operationalid)
- [operationalIdentityProtectionKey](fabric_export.Fabric.md#operationalidentityprotectionkey)
- [persistCallback](fabric_export.Fabric.md#persistcallback)
- [removeCallbacks](fabric_export.Fabric.md#removecallbacks)
- [rootCert](fabric_export.Fabric.md#rootcert)
- [rootNodeId](fabric_export.Fabric.md#rootnodeid)
- [rootPublicKey](fabric_export.Fabric.md#rootpublickey)
- [rootVendorId](fabric_export.Fabric.md#rootvendorid)
- [scopedClusterData](fabric_export.Fabric.md#scopedclusterdata)
- [sessions](fabric_export.Fabric.md#sessions)

### Accessors

- [externalInformation](fabric_export.Fabric.md#externalinformation)

### Methods

- [addRemoveCallback](fabric_export.Fabric.md#addremovecallback)
- [addSession](fabric_export.Fabric.md#addsession)
- [deleteRemoveCallback](fabric_export.Fabric.md#deleteremovecallback)
- [deleteScopedClusterData](fabric_export.Fabric.md#deletescopedclusterdata)
- [deleteScopedClusterDataValue](fabric_export.Fabric.md#deletescopedclusterdatavalue)
- [getDestinationId](fabric_export.Fabric.md#getdestinationid)
- [getPublicKey](fabric_export.Fabric.md#getpublickey)
- [getScopedClusterDataKeys](fabric_export.Fabric.md#getscopedclusterdatakeys)
- [getScopedClusterDataValue](fabric_export.Fabric.md#getscopedclusterdatavalue)
- [hasScopedClusterDataValue](fabric_export.Fabric.md#hasscopedclusterdatavalue)
- [matchesFabricIdAndRootPublicKey](fabric_export.Fabric.md#matchesfabricidandrootpublickey)
- [persist](fabric_export.Fabric.md#persist)
- [remove](fabric_export.Fabric.md#remove)
- [removeSession](fabric_export.Fabric.md#removesession)
- [setLabel](fabric_export.Fabric.md#setlabel)
- [setPersistCallback](fabric_export.Fabric.md#setpersistcallback)
- [setScopedClusterDataValue](fabric_export.Fabric.md#setscopedclusterdatavalue)
- [sign](fabric_export.Fabric.md#sign)
- [toStorageObject](fabric_export.Fabric.md#tostorageobject)
- [verifyCredentials](fabric_export.Fabric.md#verifycredentials)
- [createFromStorageObject](fabric_export.Fabric.md#createfromstorageobject)

## Constructors

### constructor

• **new Fabric**(`fabricIndex`, `fabricId`, `nodeId`, `rootNodeId`, `operationalId`, `rootPublicKey`, `keyPair`, `rootVendorId`, `rootCert`, `identityProtectionKey`, `operationalIdentityProtectionKey`, `intermediateCACert`, `operationalCert`, `label`, `caseAuthenticatedTags?`, `scopedClusterData?`): [`Fabric`](fabric_export.Fabric.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/datatype_export.md#fabricindex) |
| `fabricId` | [`FabricId`](../modules/datatype_export.md#fabricid) |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `rootNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `operationalId` | `Uint8Array` |
| `rootPublicKey` | `Uint8Array` |
| `keyPair` | [`Key`](../interfaces/crypto_export.Key.md) |
| `rootVendorId` | [`VendorId`](../modules/datatype_export.md#vendorid) |
| `rootCert` | `Uint8Array` |
| `identityProtectionKey` | `Uint8Array` |
| `operationalIdentityProtectionKey` | `Uint8Array` |
| `intermediateCACert` | `undefined` \| `Uint8Array` |
| `operationalCert` | `Uint8Array` |
| `label` | `string` |
| `caseAuthenticatedTags` | [`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag)[] |
| `scopedClusterData?` | `Map`\<`number`, `Map`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\>\> |

#### Returns

[`Fabric`](fabric_export.Fabric.md)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:69](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L69)

## Properties

### caseAuthenticatedTags

• `Readonly` **caseAuthenticatedTags**: [`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag)[]

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L84)

___

### fabricId

• `Readonly` **fabricId**: [`FabricId`](../modules/datatype_export.md#fabricid)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:71](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L71)

___

### fabricIndex

• `Readonly` **fabricIndex**: [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:70](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L70)

___

### identityProtectionKey

• `Readonly` **identityProtectionKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:79](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L79)

___

### intermediateCACert

• `Readonly` **intermediateCACert**: `undefined` \| `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L81)

___

### keyPair

• `Private` `Readonly` **keyPair**: [`Key`](../interfaces/crypto_export.Key.md)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:76](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L76)

___

### label

• **label**: `string`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:83](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L83)

___

### nodeId

• `Readonly` **nodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:72](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L72)

___

### operationalCert

• `Readonly` **operationalCert**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L82)

___

### operationalId

• `Readonly` **operationalId**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L74)

___

### operationalIdentityProtectionKey

• `Readonly` **operationalIdentityProtectionKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L80)

___

### persistCallback

• `Private` **persistCallback**: `undefined` \| (`isUpdate?`: `boolean`) => [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L67)

___

### removeCallbacks

• `Private` **removeCallbacks**: () => [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>[]

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:66](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L66)

___

### rootCert

• `Readonly` **rootCert**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:78](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L78)

___

### rootNodeId

• `Readonly` **rootNodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:73](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L73)

___

### rootPublicKey

• `Readonly` **rootPublicKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:75](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L75)

___

### rootVendorId

• `Readonly` **rootVendorId**: [`VendorId`](../modules/datatype_export.md#vendorid)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:77](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L77)

___

### scopedClusterData

• `Private` `Readonly` **scopedClusterData**: `Map`\<`number`, `any`\>

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:64](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L64)

___

### sessions

• `Private` `Readonly` **sessions**: [`SecureSession`](session_export.SecureSession.md)\<`any`\>[]

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:62](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L62)

## Accessors

### externalInformation

• `get` **externalInformation**(): [`ExposedFabricInformation`](../modules/fabric_export.md#exposedfabricinformation)

#### Returns

[`ExposedFabricInformation`](../modules/fabric_export.md#exposedfabricinformation)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:243](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L243)

## Methods

### addRemoveCallback

▸ **addRemoveCallback**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:174](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L174)

___

### addSession

▸ **addSession**(`session`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`SecureSession`](session_export.SecureSession.md)\<`any`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:163](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L163)

___

### deleteRemoveCallback

▸ **deleteRemoveCallback**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:178](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L178)

___

### deleteScopedClusterData

▸ **deleteScopedClusterData**(`cluster`): `undefined` \| [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/cluster_export.Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |

#### Returns

`undefined` \| [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:231](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L231)

___

### deleteScopedClusterDataValue

▸ **deleteScopedClusterDataValue**(`cluster`, `clusterDataKey`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/cluster_export.Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:219](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L219)

___

### getDestinationId

▸ **getDestinationId**(`nodeId`, `random`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `random` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:154](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L154)

___

### getPublicKey

▸ **getPublicKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:137](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L137)

___

### getScopedClusterDataKeys

▸ **getScopedClusterDataKeys**(`cluster`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/cluster_export.Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |

#### Returns

`string`[]

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:236](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L236)

___

### getScopedClusterDataValue

▸ **getScopedClusterDataValue**\<`T`\>(`cluster`, `clusterDataKey`): `undefined` \| `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/cluster_export.Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |

#### Returns

`undefined` \| `T`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:203](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L203)

___

### hasScopedClusterDataValue

▸ **hasScopedClusterDataValue**(`cluster`, `clusterDataKey`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/cluster_export.Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |

#### Returns

`any`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:227](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L227)

___

### matchesFabricIdAndRootPublicKey

▸ **matchesFabricIdAndRootPublicKey**(`fabricId`, `rootPublicKey`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricId` | [`FabricId`](../modules/datatype_export.md#fabricid) |
| `rootPublicKey` | `Uint8Array` |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:150](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L150)

___

### persist

▸ **persist**(`isUpdate?`): `undefined` \| [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `isUpdate` | `boolean` | `true` |

#### Returns

`undefined` \| [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:199](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L199)

___

### remove

▸ **remove**(`currentSessionId?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `currentSessionId?` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:190](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L190)

___

### removeSession

▸ **removeSession**(`session`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`SecureSession`](session_export.SecureSession.md)\<`any`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:167](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L167)

___

### setLabel

▸ **setLabel**(`label`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:132](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L132)

___

### setPersistCallback

▸ **setPersistCallback**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`isUpdate?`: `boolean`) => [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:185](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L185)

___

### setScopedClusterDataValue

▸ **setScopedClusterDataValue**\<`T`\>(`cluster`, `clusterDataKey`, `value`): `undefined` \| [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/cluster_export.Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |
| `value` | `T` |

#### Returns

`undefined` \| [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:211](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L211)

___

### sign

▸ **sign**(`data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:141](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L141)

___

### toStorageObject

▸ **toStorageObject**(): [`FabricJsonObject`](../modules/fabric_export.md#fabricjsonobject)

#### Returns

[`FabricJsonObject`](../modules/fabric_export.md#fabricjsonobject)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:90](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L90)

___

### verifyCredentials

▸ **verifyCredentials**(`_operationalCert`, `_intermediateCACert`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_operationalCert` | `Uint8Array` |
| `_intermediateCACert` | `undefined` \| `Uint8Array` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:145](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L145)

___

### createFromStorageObject

▸ **createFromStorageObject**(`fabricObject`): [`Fabric`](fabric_export.Fabric.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricObject` | [`FabricJsonObject`](../modules/fabric_export.md#fabricjsonobject) |

#### Returns

[`Fabric`](fabric_export.Fabric.md)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:111](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/Fabric.ts#L111)
