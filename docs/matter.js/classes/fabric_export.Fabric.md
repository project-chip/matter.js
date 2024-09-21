[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [fabric/export](../modules/fabric_export.md) / Fabric

# Class: Fabric

[fabric/export](../modules/fabric_export.md).Fabric

## Table of contents

### Constructors

- [constructor](fabric_export.Fabric.md#constructor)

### Properties

- [#keyPair](fabric_export.Fabric.md##keypair)
- [#persistCallback](fabric_export.Fabric.md##persistcallback)
- [#removeCallbacks](fabric_export.Fabric.md##removecallbacks)
- [#scopedClusterData](fabric_export.Fabric.md##scopedclusterdata)
- [#sessions](fabric_export.Fabric.md##sessions)
- [caseAuthenticatedTags](fabric_export.Fabric.md#caseauthenticatedtags)
- [fabricId](fabric_export.Fabric.md#fabricid)
- [fabricIndex](fabric_export.Fabric.md#fabricindex)
- [identityProtectionKey](fabric_export.Fabric.md#identityprotectionkey)
- [intermediateCACert](fabric_export.Fabric.md#intermediatecacert)
- [label](fabric_export.Fabric.md#label)
- [nodeId](fabric_export.Fabric.md#nodeid)
- [operationalCert](fabric_export.Fabric.md#operationalcert)
- [operationalId](fabric_export.Fabric.md#operationalid)
- [operationalIdentityProtectionKey](fabric_export.Fabric.md#operationalidentityprotectionkey)
- [rootCert](fabric_export.Fabric.md#rootcert)
- [rootNodeId](fabric_export.Fabric.md#rootnodeid)
- [rootPublicKey](fabric_export.Fabric.md#rootpublickey)
- [rootVendorId](fabric_export.Fabric.md#rootvendorid)

### Accessors

- [externalInformation](fabric_export.Fabric.md#externalinformation)
- [persistCallback](fabric_export.Fabric.md#persistcallback)
- [publicKey](fabric_export.Fabric.md#publickey)

### Methods

- [addRemoveCallback](fabric_export.Fabric.md#addremovecallback)
- [addSession](fabric_export.Fabric.md#addsession)
- [deleteRemoveCallback](fabric_export.Fabric.md#deleteremovecallback)
- [deleteScopedClusterData](fabric_export.Fabric.md#deletescopedclusterdata)
- [deleteScopedClusterDataValue](fabric_export.Fabric.md#deletescopedclusterdatavalue)
- [getAllGroupKeySets](fabric_export.Fabric.md#getallgroupkeysets)
- [getDestinationId](fabric_export.Fabric.md#getdestinationid)
- [getGroupKeySet](fabric_export.Fabric.md#getgroupkeyset)
- [getGroupSetForIpk](fabric_export.Fabric.md#getgroupsetforipk)
- [getScopedClusterDataKeys](fabric_export.Fabric.md#getscopedclusterdatakeys)
- [getScopedClusterDataValue](fabric_export.Fabric.md#getscopedclusterdatavalue)
- [hasScopedClusterDataValue](fabric_export.Fabric.md#hasscopedclusterdatavalue)
- [matchesFabricIdAndRootPublicKey](fabric_export.Fabric.md#matchesfabricidandrootpublickey)
- [matchesKeyPair](fabric_export.Fabric.md#matcheskeypair)
- [persist](fabric_export.Fabric.md#persist)
- [remove](fabric_export.Fabric.md#remove)
- [removeSession](fabric_export.Fabric.md#removesession)
- [setLabel](fabric_export.Fabric.md#setlabel)
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

[packages/matter.js/src/fabric/Fabric.ts:113](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L113)

## Properties

### #keyPair

• `Private` `Readonly` **#keyPair**: [`Key`](../interfaces/crypto_export.Key.md)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:108](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L108)

___

### #persistCallback

• `Private` **#persistCallback**: `undefined` \| (`isUpdate?`: `boolean`) => [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:111](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L111)

___

### #removeCallbacks

• `Private` **#removeCallbacks**: () => [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>[]

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:110](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L110)

___

### #scopedClusterData

• `Private` `Readonly` **#scopedClusterData**: `Map`\<`number`, `any`\>

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:106](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L106)

___

### #sessions

• `Private` `Readonly` **#sessions**: [`SecureSession`](session_export.SecureSession.md)\<`any`\>[]

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:105](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L105)

___

### caseAuthenticatedTags

• `Readonly` **caseAuthenticatedTags**: [`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag)[]

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:128](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L128)

___

### fabricId

• `Readonly` **fabricId**: [`FabricId`](../modules/datatype_export.md#fabricid)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:115](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L115)

___

### fabricIndex

• `Readonly` **fabricIndex**: [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:114](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L114)

___

### identityProtectionKey

• `Readonly` **identityProtectionKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:123](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L123)

___

### intermediateCACert

• `Readonly` **intermediateCACert**: `undefined` \| `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:125](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L125)

___

### label

• **label**: `string`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:127](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L127)

___

### nodeId

• `Readonly` **nodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:116](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L116)

___

### operationalCert

• `Readonly` **operationalCert**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:126](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L126)

___

### operationalId

• `Readonly` **operationalId**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:118](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L118)

___

### operationalIdentityProtectionKey

• `Readonly` **operationalIdentityProtectionKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:124](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L124)

___

### rootCert

• `Readonly` **rootCert**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:122](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L122)

___

### rootNodeId

• `Readonly` **rootNodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:117](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L117)

___

### rootPublicKey

• `Readonly` **rootPublicKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:119](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L119)

___

### rootVendorId

• `Readonly` **rootVendorId**: [`VendorId`](../modules/datatype_export.md#vendorid)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:121](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L121)

## Accessors

### externalInformation

• `get` **externalInformation**(): [`ExposedFabricInformation`](../modules/fabric_export.md#exposedfabricinformation)

#### Returns

[`ExposedFabricInformation`](../modules/fabric_export.md#exposedfabricinformation)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:343](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L343)

___

### persistCallback

• `set` **persistCallback**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`isUpdate?`: `boolean`) => [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:252](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L252)

___

### publicKey

• `get` **publicKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:182](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L182)

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

[packages/matter.js/src/fabric/Fabric.ts:241](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L241)

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

[packages/matter.js/src/fabric/Fabric.ts:230](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L230)

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

[packages/matter.js/src/fabric/Fabric.ts:245](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L245)

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

[packages/matter.js/src/fabric/Fabric.ts:298](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L298)

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

[packages/matter.js/src/fabric/Fabric.ts:286](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L286)

___

### getAllGroupKeySets

▸ **getAllGroupKeySets**(): [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochStartTime0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `groupKeyMulticastPolicy`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`GroupKeyMulticastPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeyMulticastPolicy.md)\> ; `groupKeySecurityPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupKeySecurityPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeySecurityPolicy.md)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>[]

#### Returns

[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochStartTime0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `groupKeyMulticastPolicy`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`GroupKeyMulticastPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeyMulticastPolicy.md)\> ; `groupKeySecurityPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupKeySecurityPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeySecurityPolicy.md)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>[]

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:338](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L338)

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

[packages/matter.js/src/fabric/Fabric.ts:221](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L221)

___

### getGroupKeySet

▸ **getGroupKeySet**(`groupKeySetId`): `undefined` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochStartTime0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `groupKeyMulticastPolicy`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`GroupKeyMulticastPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeyMulticastPolicy.md)\> ; `groupKeySecurityPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupKeySecurityPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeySecurityPolicy.md)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupKeySetId` | `number` |

#### Returns

`undefined` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochStartTime0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `groupKeyMulticastPolicy`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`GroupKeyMulticastPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeyMulticastPolicy.md)\> ; `groupKeySecurityPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupKeySecurityPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeySecurityPolicy.md)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:310](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L310)

___

### getGroupSetForIpk

▸ **getGroupSetForIpk**(): [`OperationalGroupKeySet`](../modules/fabric_export._internal_.md#operationalgroupkeyset)

#### Returns

[`OperationalGroupKeySet`](../modules/fabric_export._internal_.md#operationalgroupkeyset)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:318](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L318)

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

[packages/matter.js/src/fabric/Fabric.ts:303](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L303)

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

[packages/matter.js/src/fabric/Fabric.ts:270](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L270)

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

[packages/matter.js/src/fabric/Fabric.ts:294](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L294)

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

[packages/matter.js/src/fabric/Fabric.ts:213](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L213)

___

### matchesKeyPair

▸ **matchesKeyPair**(`keyPair`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyPair` | [`Key`](../interfaces/crypto_export.Key.md) |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:217](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L217)

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

[packages/matter.js/src/fabric/Fabric.ts:266](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L266)

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

[packages/matter.js/src/fabric/Fabric.ts:257](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L257)

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

[packages/matter.js/src/fabric/Fabric.ts:234](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L234)

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

[packages/matter.js/src/fabric/Fabric.ts:177](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L177)

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

[packages/matter.js/src/fabric/Fabric.ts:278](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L278)

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

[packages/matter.js/src/fabric/Fabric.ts:186](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L186)

___

### toStorageObject

▸ **toStorageObject**(): [`FabricJsonObject`](../modules/fabric_export.md#fabricjsonobject)

#### Returns

[`FabricJsonObject`](../modules/fabric_export.md#fabricjsonobject)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:135](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L135)

___

### verifyCredentials

▸ **verifyCredentials**(`operationalCert`, `intermediateCACert?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `operationalCert` | `Uint8Array` |
| `intermediateCACert?` | `Uint8Array` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:190](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L190)

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

[packages/matter.js/src/fabric/Fabric.ts:156](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/Fabric.ts#L156)
