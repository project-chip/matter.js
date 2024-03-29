[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/fabric](../modules/exports_fabric.md) / Fabric

# Class: Fabric

[exports/fabric](../modules/exports_fabric.md).Fabric

## Table of contents

### Constructors

- [constructor](exports_fabric.Fabric.md#constructor)

### Properties

- [caseAuthenticatedTags](exports_fabric.Fabric.md#caseauthenticatedtags)
- [fabricId](exports_fabric.Fabric.md#fabricid)
- [fabricIndex](exports_fabric.Fabric.md#fabricindex)
- [identityProtectionKey](exports_fabric.Fabric.md#identityprotectionkey)
- [intermediateCACert](exports_fabric.Fabric.md#intermediatecacert)
- [keyPair](exports_fabric.Fabric.md#keypair)
- [label](exports_fabric.Fabric.md#label)
- [nodeId](exports_fabric.Fabric.md#nodeid)
- [operationalCert](exports_fabric.Fabric.md#operationalcert)
- [operationalId](exports_fabric.Fabric.md#operationalid)
- [operationalIdentityProtectionKey](exports_fabric.Fabric.md#operationalidentityprotectionkey)
- [persistCallback](exports_fabric.Fabric.md#persistcallback)
- [removeCallbacks](exports_fabric.Fabric.md#removecallbacks)
- [rootCert](exports_fabric.Fabric.md#rootcert)
- [rootNodeId](exports_fabric.Fabric.md#rootnodeid)
- [rootPublicKey](exports_fabric.Fabric.md#rootpublickey)
- [rootVendorId](exports_fabric.Fabric.md#rootvendorid)
- [scopedClusterData](exports_fabric.Fabric.md#scopedclusterdata)
- [sessions](exports_fabric.Fabric.md#sessions)

### Accessors

- [externalInformation](exports_fabric.Fabric.md#externalinformation)

### Methods

- [addRemoveCallback](exports_fabric.Fabric.md#addremovecallback)
- [addSession](exports_fabric.Fabric.md#addsession)
- [deleteRemoveCallback](exports_fabric.Fabric.md#deleteremovecallback)
- [deleteScopedClusterData](exports_fabric.Fabric.md#deletescopedclusterdata)
- [deleteScopedClusterDataValue](exports_fabric.Fabric.md#deletescopedclusterdatavalue)
- [getDestinationId](exports_fabric.Fabric.md#getdestinationid)
- [getPublicKey](exports_fabric.Fabric.md#getpublickey)
- [getScopedClusterDataKeys](exports_fabric.Fabric.md#getscopedclusterdatakeys)
- [getScopedClusterDataValue](exports_fabric.Fabric.md#getscopedclusterdatavalue)
- [hasScopedClusterDataValue](exports_fabric.Fabric.md#hasscopedclusterdatavalue)
- [matchesFabricIdAndRootPublicKey](exports_fabric.Fabric.md#matchesfabricidandrootpublickey)
- [persist](exports_fabric.Fabric.md#persist)
- [remove](exports_fabric.Fabric.md#remove)
- [removeSession](exports_fabric.Fabric.md#removesession)
- [setLabel](exports_fabric.Fabric.md#setlabel)
- [setPersistCallback](exports_fabric.Fabric.md#setpersistcallback)
- [setScopedClusterDataValue](exports_fabric.Fabric.md#setscopedclusterdatavalue)
- [sign](exports_fabric.Fabric.md#sign)
- [toStorageObject](exports_fabric.Fabric.md#tostorageobject)
- [verifyCredentials](exports_fabric.Fabric.md#verifycredentials)
- [createFromStorageObject](exports_fabric.Fabric.md#createfromstorageobject)

## Constructors

### constructor

• **new Fabric**(`fabricIndex`, `fabricId`, `nodeId`, `rootNodeId`, `operationalId`, `rootPublicKey`, `keyPair`, `rootVendorId`, `rootCert`, `identityProtectionKey`, `operationalIdentityProtectionKey`, `intermediateCACert`, `operationalCert`, `label`, `caseAuthenticatedTags?`, `scopedClusterData?`): [`Fabric`](exports_fabric.Fabric.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/exports_datatype.md#fabricindex) |
| `fabricId` | [`FabricId`](../modules/exports_datatype.md#fabricid) |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `rootNodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `operationalId` | `Uint8Array` |
| `rootPublicKey` | `Uint8Array` |
| `keyPair` | [`Key`](../interfaces/crypto_export.Key.md) |
| `rootVendorId` | [`VendorId`](../modules/exports_datatype.md#vendorid) |
| `rootCert` | `Uint8Array` |
| `identityProtectionKey` | `Uint8Array` |
| `operationalIdentityProtectionKey` | `Uint8Array` |
| `intermediateCACert` | `undefined` \| `Uint8Array` |
| `operationalCert` | `Uint8Array` |
| `label` | `string` |
| `caseAuthenticatedTags?` | [`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag)[] |
| `scopedClusterData?` | `Map`\<`number`, `Map`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\>\> |

#### Returns

[`Fabric`](exports_fabric.Fabric.md)

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:63

## Properties

### caseAuthenticatedTags

• `Readonly` **caseAuthenticatedTags**: [`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag)[]

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:58

___

### fabricId

• `Readonly` **fabricId**: [`FabricId`](../modules/exports_datatype.md#fabricid)

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:45

___

### fabricIndex

• `Readonly` **fabricIndex**: [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:44

___

### identityProtectionKey

• `Readonly` **identityProtectionKey**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:53

___

### intermediateCACert

• `Readonly` **intermediateCACert**: `undefined` \| `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:55

___

### keyPair

• `Private` `Readonly` **keyPair**: `any`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:50

___

### label

• **label**: `string`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:57

___

### nodeId

• `Readonly` **nodeId**: [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:46

___

### operationalCert

• `Readonly` **operationalCert**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:56

___

### operationalId

• `Readonly` **operationalId**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:48

___

### operationalIdentityProtectionKey

• `Readonly` **operationalIdentityProtectionKey**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:54

___

### persistCallback

• `Private` **persistCallback**: `any`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:62

___

### removeCallbacks

• `Private` **removeCallbacks**: `any`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:61

___

### rootCert

• `Readonly` **rootCert**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:52

___

### rootNodeId

• `Readonly` **rootNodeId**: [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:47

___

### rootPublicKey

• `Readonly` **rootPublicKey**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:49

___

### rootVendorId

• `Readonly` **rootVendorId**: [`VendorId`](../modules/exports_datatype.md#vendorid)

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:51

___

### scopedClusterData

• `Private` `Readonly` **scopedClusterData**: `any`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:60

___

### sessions

• `Private` `Readonly` **sessions**: `any`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:59

## Accessors

### externalInformation

• `get` **externalInformation**(): [`ExposedFabricInformation`](../modules/exports_fabric.md#exposedfabricinformation)

#### Returns

[`ExposedFabricInformation`](../modules/exports_fabric.md#exposedfabricinformation)

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:85

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

packages/matter.js/dist/esm/fabric/Fabric.d.ts:74

___

### addSession

▸ **addSession**(`session`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`SecureSession`](exports_session.SecureSession.md)\<`any`\> |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:72

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

packages/matter.js/dist/esm/fabric/Fabric.d.ts:75

___

### deleteScopedClusterData

▸ **deleteScopedClusterData**(`cluster`): `undefined` \| [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/exports_cluster.Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |

#### Returns

`undefined` \| [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:83

___

### deleteScopedClusterDataValue

▸ **deleteScopedClusterDataValue**(`cluster`, `clusterDataKey`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/exports_cluster.Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:81

___

### getDestinationId

▸ **getDestinationId**(`nodeId`, `random`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `random` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:71

___

### getPublicKey

▸ **getPublicKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:67

___

### getScopedClusterDataKeys

▸ **getScopedClusterDataKeys**(`cluster`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/exports_cluster.Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |

#### Returns

`string`[]

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:84

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
| `cluster` | [`Cluster`](../interfaces/exports_cluster.Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |

#### Returns

`undefined` \| `T`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:79

___

### hasScopedClusterDataValue

▸ **hasScopedClusterDataValue**(`cluster`, `clusterDataKey`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/exports_cluster.Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |

#### Returns

`any`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:82

___

### matchesFabricIdAndRootPublicKey

▸ **matchesFabricIdAndRootPublicKey**(`fabricId`, `rootPublicKey`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricId` | [`FabricId`](../modules/exports_datatype.md#fabricid) |
| `rootPublicKey` | `Uint8Array` |

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:70

___

### persist

▸ **persist**(`isUpdate?`): `undefined` \| [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isUpdate?` | `boolean` |

#### Returns

`undefined` \| [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:78

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

packages/matter.js/dist/esm/fabric/Fabric.d.ts:77

___

### removeSession

▸ **removeSession**(`session`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`SecureSession`](exports_session.SecureSession.md)\<`any`\> |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:73

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

packages/matter.js/dist/esm/fabric/Fabric.d.ts:66

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

packages/matter.js/dist/esm/fabric/Fabric.d.ts:76

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
| `cluster` | [`Cluster`](../interfaces/exports_cluster.Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |
| `value` | `T` |

#### Returns

`undefined` \| [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:80

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

packages/matter.js/dist/esm/fabric/Fabric.d.ts:68

___

### toStorageObject

▸ **toStorageObject**(): [`FabricJsonObject`](../modules/exports_fabric.md#fabricjsonobject)

#### Returns

[`FabricJsonObject`](../modules/exports_fabric.md#fabricjsonobject)

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:64

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

packages/matter.js/dist/esm/fabric/Fabric.d.ts:69

___

### createFromStorageObject

▸ **createFromStorageObject**(`fabricObject`): [`Fabric`](exports_fabric.Fabric.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricObject` | [`FabricJsonObject`](../modules/exports_fabric.md#fabricjsonobject) |

#### Returns

[`Fabric`](exports_fabric.Fabric.md)

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:65
