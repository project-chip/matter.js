[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / Fabric

# Class: Fabric

[\<internal\>](../modules/internal_.md).Fabric

## Table of contents

### Constructors

- [constructor](internal_.Fabric.md#constructor)

### Properties

- [caseAuthenticatedTags](internal_.Fabric.md#caseauthenticatedtags)
- [fabricId](internal_.Fabric.md#fabricid)
- [fabricIndex](internal_.Fabric.md#fabricindex)
- [identityProtectionKey](internal_.Fabric.md#identityprotectionkey)
- [intermediateCACert](internal_.Fabric.md#intermediatecacert)
- [keyPair](internal_.Fabric.md#keypair)
- [label](internal_.Fabric.md#label)
- [nodeId](internal_.Fabric.md#nodeid)
- [operationalCert](internal_.Fabric.md#operationalcert)
- [operationalId](internal_.Fabric.md#operationalid)
- [operationalIdentityProtectionKey](internal_.Fabric.md#operationalidentityprotectionkey)
- [persistCallback](internal_.Fabric.md#persistcallback)
- [removeCallbacks](internal_.Fabric.md#removecallbacks)
- [rootCert](internal_.Fabric.md#rootcert)
- [rootNodeId](internal_.Fabric.md#rootnodeid)
- [rootPublicKey](internal_.Fabric.md#rootpublickey)
- [rootVendorId](internal_.Fabric.md#rootvendorid)
- [scopedClusterData](internal_.Fabric.md#scopedclusterdata)
- [sessions](internal_.Fabric.md#sessions)

### Accessors

- [externalInformation](internal_.Fabric.md#externalinformation)

### Methods

- [addRemoveCallback](internal_.Fabric.md#addremovecallback)
- [addSession](internal_.Fabric.md#addsession)
- [deleteRemoveCallback](internal_.Fabric.md#deleteremovecallback)
- [deleteScopedClusterData](internal_.Fabric.md#deletescopedclusterdata)
- [deleteScopedClusterDataValue](internal_.Fabric.md#deletescopedclusterdatavalue)
- [getDestinationId](internal_.Fabric.md#getdestinationid)
- [getPublicKey](internal_.Fabric.md#getpublickey)
- [getScopedClusterDataKeys](internal_.Fabric.md#getscopedclusterdatakeys)
- [getScopedClusterDataValue](internal_.Fabric.md#getscopedclusterdatavalue)
- [hasScopedClusterDataValue](internal_.Fabric.md#hasscopedclusterdatavalue)
- [matchesFabricIdAndRootPublicKey](internal_.Fabric.md#matchesfabricidandrootpublickey)
- [persist](internal_.Fabric.md#persist)
- [remove](internal_.Fabric.md#remove)
- [removeSession](internal_.Fabric.md#removesession)
- [setLabel](internal_.Fabric.md#setlabel)
- [setPersistCallback](internal_.Fabric.md#setpersistcallback)
- [setScopedClusterDataValue](internal_.Fabric.md#setscopedclusterdatavalue)
- [sign](internal_.Fabric.md#sign)
- [toStorageObject](internal_.Fabric.md#tostorageobject)
- [verifyCredentials](internal_.Fabric.md#verifycredentials)
- [createFromStorageObject](internal_.Fabric.md#createfromstorageobject)

## Constructors

### constructor

• **new Fabric**(`fabricIndex`, `fabricId`, `nodeId`, `rootNodeId`, `operationalId`, `rootPublicKey`, `keyPair`, `rootVendorId`, `rootCert`, `identityProtectionKey`, `operationalIdentityProtectionKey`, `intermediateCACert`, `operationalCert`, `label`, `caseAuthenticatedTags?`, `scopedClusterData?`): [`Fabric`](internal_.Fabric.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/internal_.md#fabricindex) |
| `fabricId` | [`FabricId`](../modules/internal_.md#fabricid) |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `rootNodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `operationalId` | `Uint8Array` |
| `rootPublicKey` | `Uint8Array` |
| `keyPair` | [`Key`](../interfaces/internal_.Key.md) |
| `rootVendorId` | [`VendorId`](../modules/internal_.md#vendorid) |
| `rootCert` | `Uint8Array` |
| `identityProtectionKey` | `Uint8Array` |
| `operationalIdentityProtectionKey` | `Uint8Array` |
| `intermediateCACert` | `undefined` \| `Uint8Array` |
| `operationalCert` | `Uint8Array` |
| `label` | `string` |
| `caseAuthenticatedTags?` | [`CaseAuthenticatedTag`](../modules/internal_.md#caseauthenticatedtag)[] |
| `scopedClusterData?` | `Map`\<`number`, `Map`\<`string`, [`SupportedStorageTypes`](../modules/internal_.md#supportedstoragetypes)\>\> |

#### Returns

[`Fabric`](internal_.Fabric.md)

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:63

## Properties

### caseAuthenticatedTags

• `Readonly` **caseAuthenticatedTags**: [`CaseAuthenticatedTag`](../modules/internal_.md#caseauthenticatedtag)[]

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:58

___

### fabricId

• `Readonly` **fabricId**: [`FabricId`](../modules/internal_.md#fabricid)

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:45

___

### fabricIndex

• `Readonly` **fabricIndex**: [`FabricIndex`](../modules/internal_.md#fabricindex)

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:44

___

### identityProtectionKey

• `Readonly` **identityProtectionKey**: `Uint8Array`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:53

___

### intermediateCACert

• `Readonly` **intermediateCACert**: `undefined` \| `Uint8Array`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:55

___

### keyPair

• `Private` `Readonly` **keyPair**: `any`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:50

___

### label

• **label**: `string`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:57

___

### nodeId

• `Readonly` **nodeId**: [`NodeId`](../modules/internal_.md#nodeid)

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:46

___

### operationalCert

• `Readonly` **operationalCert**: `Uint8Array`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:56

___

### operationalId

• `Readonly` **operationalId**: `Uint8Array`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:48

___

### operationalIdentityProtectionKey

• `Readonly` **operationalIdentityProtectionKey**: `Uint8Array`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:54

___

### persistCallback

• `Private` **persistCallback**: `any`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:62

___

### removeCallbacks

• `Private` **removeCallbacks**: `any`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:61

___

### rootCert

• `Readonly` **rootCert**: `Uint8Array`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:52

___

### rootNodeId

• `Readonly` **rootNodeId**: [`NodeId`](../modules/internal_.md#nodeid)

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:47

___

### rootPublicKey

• `Readonly` **rootPublicKey**: `Uint8Array`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:49

___

### rootVendorId

• `Readonly` **rootVendorId**: [`VendorId`](../modules/internal_.md#vendorid)

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:51

___

### scopedClusterData

• `Private` `Readonly` **scopedClusterData**: `any`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:60

___

### sessions

• `Private` `Readonly` **sessions**: `any`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:59

## Accessors

### externalInformation

• `get` **externalInformation**(): [`ExposedFabricInformation`](../modules/internal_.md#exposedfabricinformation)

#### Returns

[`ExposedFabricInformation`](../modules/internal_.md#exposedfabricinformation)

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:85

## Methods

### addRemoveCallback

▸ **addRemoveCallback**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => [`MaybePromise`](../modules/internal_.md#maybepromise)\<`void`\> |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:74

___

### addSession

▸ **addSession**(`session`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`SecureSession`](internal_.SecureSession.md)\<`any`\> |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:72

___

### deleteRemoveCallback

▸ **deleteRemoveCallback**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => [`MaybePromise`](../modules/internal_.md#maybepromise)\<`void`\> |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:75

___

### deleteScopedClusterData

▸ **deleteScopedClusterData**(`cluster`): `undefined` \| [`MaybePromise`](../modules/internal_.md#maybepromise)\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/internal_.Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |

#### Returns

`undefined` \| [`MaybePromise`](../modules/internal_.md#maybepromise)\<`void`\>

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:83

___

### deleteScopedClusterDataValue

▸ **deleteScopedClusterDataValue**(`cluster`, `clusterDataKey`): [`MaybePromise`](../modules/internal_.md#maybepromise)\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/internal_.Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |

#### Returns

[`MaybePromise`](../modules/internal_.md#maybepromise)\<`void`\>

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:81

___

### getDestinationId

▸ **getDestinationId**(`nodeId`, `random`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `random` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:71

___

### getPublicKey

▸ **getPublicKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:67

___

### getScopedClusterDataKeys

▸ **getScopedClusterDataKeys**(`cluster`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/internal_.Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |

#### Returns

`string`[]

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:84

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
| `cluster` | [`Cluster`](../interfaces/internal_.Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |

#### Returns

`undefined` \| `T`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:79

___

### hasScopedClusterDataValue

▸ **hasScopedClusterDataValue**(`cluster`, `clusterDataKey`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/internal_.Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |

#### Returns

`any`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:82

___

### matchesFabricIdAndRootPublicKey

▸ **matchesFabricIdAndRootPublicKey**(`fabricId`, `rootPublicKey`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricId` | [`FabricId`](../modules/internal_.md#fabricid) |
| `rootPublicKey` | `Uint8Array` |

#### Returns

`boolean`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:70

___

### persist

▸ **persist**(`isUpdate?`): `undefined` \| [`MaybePromise`](../modules/internal_.md#maybepromise)\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isUpdate?` | `boolean` |

#### Returns

`undefined` \| [`MaybePromise`](../modules/internal_.md#maybepromise)\<`void`\>

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:78

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

matter.js/dist/esm/fabric/Fabric.d.ts:77

___

### removeSession

▸ **removeSession**(`session`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`SecureSession`](internal_.SecureSession.md)\<`any`\> |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:73

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

matter.js/dist/esm/fabric/Fabric.d.ts:66

___

### setPersistCallback

▸ **setPersistCallback**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`isUpdate?`: `boolean`) => [`MaybePromise`](../modules/internal_.md#maybepromise)\<`void`\> |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:76

___

### setScopedClusterDataValue

▸ **setScopedClusterDataValue**\<`T`\>(`cluster`, `clusterDataKey`, `value`): `undefined` \| [`MaybePromise`](../modules/internal_.md#maybepromise)\<`void`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/internal_.Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |
| `value` | `T` |

#### Returns

`undefined` \| [`MaybePromise`](../modules/internal_.md#maybepromise)\<`void`\>

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:80

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

matter.js/dist/esm/fabric/Fabric.d.ts:68

___

### toStorageObject

▸ **toStorageObject**(): [`FabricJsonObject`](../modules/internal_.md#fabricjsonobject)

#### Returns

[`FabricJsonObject`](../modules/internal_.md#fabricjsonobject)

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:64

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

matter.js/dist/esm/fabric/Fabric.d.ts:69

___

### createFromStorageObject

▸ **createFromStorageObject**(`fabricObject`): [`Fabric`](internal_.Fabric.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricObject` | [`FabricJsonObject`](../modules/internal_.md#fabricjsonobject) |

#### Returns

[`Fabric`](internal_.Fabric.md)

#### Defined in

matter.js/dist/esm/fabric/Fabric.d.ts:65
