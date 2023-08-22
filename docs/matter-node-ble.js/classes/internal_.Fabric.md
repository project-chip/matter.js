[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Fabric

# Class: Fabric

[<internal>](../modules/internal_.md).Fabric

## Table of contents

### Constructors

- [constructor](internal_.Fabric.md#constructor)

### Properties

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
- [removeCallback](internal_.Fabric.md#removecallback)
- [rootCert](internal_.Fabric.md#rootcert)
- [rootNodeId](internal_.Fabric.md#rootnodeid)
- [rootPublicKey](internal_.Fabric.md#rootpublickey)
- [rootVendorId](internal_.Fabric.md#rootvendorid)
- [scopedClusterData](internal_.Fabric.md#scopedclusterdata)
- [sessions](internal_.Fabric.md#sessions)

### Methods

- [addSession](internal_.Fabric.md#addsession)
- [deleteScopedClusterData](internal_.Fabric.md#deletescopedclusterdata)
- [deleteScopedClusterDataValue](internal_.Fabric.md#deletescopedclusterdatavalue)
- [getDestinationId](internal_.Fabric.md#getdestinationid)
- [getExternalInformation](internal_.Fabric.md#getexternalinformation)
- [getPublicKey](internal_.Fabric.md#getpublickey)
- [getScopedClusterDataKeys](internal_.Fabric.md#getscopedclusterdatakeys)
- [getScopedClusterDataValue](internal_.Fabric.md#getscopedclusterdatavalue)
- [hasScopedClusterDataValue](internal_.Fabric.md#hasscopedclusterdatavalue)
- [persist](internal_.Fabric.md#persist)
- [remove](internal_.Fabric.md#remove)
- [removeSession](internal_.Fabric.md#removesession)
- [setLabel](internal_.Fabric.md#setlabel)
- [setPersistCallback](internal_.Fabric.md#setpersistcallback)
- [setRemoveCallback](internal_.Fabric.md#setremovecallback)
- [setScopedClusterDataValue](internal_.Fabric.md#setscopedclusterdatavalue)
- [sign](internal_.Fabric.md#sign)
- [toStorageObject](internal_.Fabric.md#tostorageobject)
- [verifyCredentials](internal_.Fabric.md#verifycredentials)
- [createFromStorageObject](internal_.Fabric.md#createfromstorageobject)

## Constructors

### constructor

• **new Fabric**(`fabricIndex`, `fabricId`, `nodeId`, `rootNodeId`, `operationalId`, `rootPublicKey`, `keyPair`, `rootVendorId`, `rootCert`, `identityProtectionKey`, `operationalIdentityProtectionKey`, `intermediateCACert`, `operationalCert`, `label`, `scopedClusterData?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/internal_.md#fabricindex) |
| `fabricId` | [`FabricId`](../modules/internal_.md#fabricid) |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `rootNodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `operationalId` | `Uint8Array` |
| `rootPublicKey` | `Uint8Array` |
| `keyPair` | [`Key`](../modules/internal_.md#key) |
| `rootVendorId` | [`VendorId`](../modules/internal_.md#vendorid) |
| `rootCert` | `Uint8Array` |
| `identityProtectionKey` | `Uint8Array` |
| `operationalIdentityProtectionKey` | `Uint8Array` |
| `intermediateCACert` | `undefined` \| `Uint8Array` |
| `operationalCert` | `Uint8Array` |
| `label` | `string` |
| `scopedClusterData?` | `Map`<`number`, `Map`<`string`, [`SupportedStorageTypes`](../modules/internal_.md#supportedstoragetypes)\>\> |

#### Defined in

matter.js/dist/cjs/fabric/Fabric.d.ts:51

## Properties

### fabricId

• `Readonly` **fabricId**: [`FabricId`](../modules/internal_.md#fabricid)

#### Defined in

matter.js/dist/cjs/fabric/Fabric.d.ts:34

___

### fabricIndex

• `Readonly` **fabricIndex**: [`FabricIndex`](../modules/internal_.md#fabricindex)

#### Defined in

matter.js/dist/cjs/fabric/Fabric.d.ts:33

___

### identityProtectionKey

• `Readonly` **identityProtectionKey**: `Uint8Array`

#### Defined in

matter.js/dist/cjs/fabric/Fabric.d.ts:42

___

### intermediateCACert

• `Readonly` **intermediateCACert**: `undefined` \| `Uint8Array`

#### Defined in

matter.js/dist/cjs/fabric/Fabric.d.ts:44

___

### keyPair

• `Private` `Readonly` **keyPair**: `any`

#### Defined in

matter.js/dist/cjs/fabric/Fabric.d.ts:39

___

### label

• **label**: `string`

#### Defined in

matter.js/dist/cjs/fabric/Fabric.d.ts:46

___

### nodeId

• `Readonly` **nodeId**: [`NodeId`](../modules/internal_.md#nodeid)

#### Defined in

matter.js/dist/cjs/fabric/Fabric.d.ts:35

___

### operationalCert

• `Readonly` **operationalCert**: `Uint8Array`

#### Defined in

matter.js/dist/cjs/fabric/Fabric.d.ts:45

___

### operationalId

• `Readonly` **operationalId**: `Uint8Array`

#### Defined in

matter.js/dist/cjs/fabric/Fabric.d.ts:37

___

### operationalIdentityProtectionKey

• `Readonly` **operationalIdentityProtectionKey**: `Uint8Array`

#### Defined in

matter.js/dist/cjs/fabric/Fabric.d.ts:43

___

### persistCallback

• `Private` **persistCallback**: `any`

#### Defined in

matter.js/dist/cjs/fabric/Fabric.d.ts:50

___

### removeCallback

• `Private` **removeCallback**: `any`

#### Defined in

matter.js/dist/cjs/fabric/Fabric.d.ts:49

___

### rootCert

• `Readonly` **rootCert**: `Uint8Array`

#### Defined in

matter.js/dist/cjs/fabric/Fabric.d.ts:41

___

### rootNodeId

• `Readonly` **rootNodeId**: [`NodeId`](../modules/internal_.md#nodeid)

#### Defined in

matter.js/dist/cjs/fabric/Fabric.d.ts:36

___

### rootPublicKey

• `Readonly` **rootPublicKey**: `Uint8Array`

#### Defined in

matter.js/dist/cjs/fabric/Fabric.d.ts:38

___

### rootVendorId

• `Readonly` **rootVendorId**: [`VendorId`](../modules/internal_.md#vendorid)

#### Defined in

matter.js/dist/cjs/fabric/Fabric.d.ts:40

___

### scopedClusterData

• `Private` `Readonly` **scopedClusterData**: `any`

#### Defined in

matter.js/dist/cjs/fabric/Fabric.d.ts:48

___

### sessions

• `Private` `Readonly` **sessions**: `any`

#### Defined in

matter.js/dist/cjs/fabric/Fabric.d.ts:47

## Methods

### addSession

▸ **addSession**(`session`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`SecureSession`](internal_.SecureSession.md)<`any`\> |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/fabric/Fabric.d.ts:59

___

### deleteScopedClusterData

▸ **deleteScopedClusterData**(`cluster`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/internal_.md#cluster)<`any`, `any`, `any`, `any`, `any`\> |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/fabric/Fabric.d.ts:69

___

### deleteScopedClusterDataValue

▸ **deleteScopedClusterDataValue**(`cluster`, `clusterDataKey`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/internal_.md#cluster)<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/fabric/Fabric.d.ts:67

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

matter.js/dist/cjs/fabric/Fabric.d.ts:58

___

### getExternalInformation

▸ **getExternalInformation**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fabricId` | [`FabricId`](../modules/internal_.md#fabricid) |
| `label` | `string` |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `rootNodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `rootVendorId` | [`VendorId`](../modules/internal_.md#vendorid) |

#### Defined in

matter.js/dist/cjs/fabric/Fabric.d.ts:71

___

### getPublicKey

▸ **getPublicKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

matter.js/dist/cjs/fabric/Fabric.d.ts:55

___

### getScopedClusterDataKeys

▸ **getScopedClusterDataKeys**(`cluster`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/internal_.md#cluster)<`any`, `any`, `any`, `any`, `any`\> |

#### Returns

`string`[]

#### Defined in

matter.js/dist/cjs/fabric/Fabric.d.ts:70

___

### getScopedClusterDataValue

▸ **getScopedClusterDataValue**<`T`\>(`cluster`, `clusterDataKey`): `undefined` \| `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/internal_.md#cluster)<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |

#### Returns

`undefined` \| `T`

#### Defined in

matter.js/dist/cjs/fabric/Fabric.d.ts:65

___

### hasScopedClusterDataValue

▸ **hasScopedClusterDataValue**(`cluster`, `clusterDataKey`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/internal_.md#cluster)<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |

#### Returns

`any`

#### Defined in

matter.js/dist/cjs/fabric/Fabric.d.ts:68

___

### persist

▸ **persist**(): `void`

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/fabric/Fabric.d.ts:64

___

### remove

▸ **remove**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/fabric/Fabric.d.ts:63

___

### removeSession

▸ **removeSession**(`session`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`SecureSession`](internal_.SecureSession.md)<`any`\> |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/fabric/Fabric.d.ts:60

___

### setLabel

▸ **setLabel**(`label`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/fabric/Fabric.d.ts:54

___

### setPersistCallback

▸ **setPersistCallback**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/fabric/Fabric.d.ts:62

___

### setRemoveCallback

▸ **setRemoveCallback**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/fabric/Fabric.d.ts:61

___

### setScopedClusterDataValue

▸ **setScopedClusterDataValue**<`T`\>(`cluster`, `clusterDataKey`, `value`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/internal_.md#cluster)<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |
| `value` | `T` |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/fabric/Fabric.d.ts:66

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

matter.js/dist/cjs/fabric/Fabric.d.ts:56

___

### toStorageObject

▸ **toStorageObject**(): [`FabricJsonObject`](../modules/internal_.md#fabricjsonobject)

#### Returns

[`FabricJsonObject`](../modules/internal_.md#fabricjsonobject)

#### Defined in

matter.js/dist/cjs/fabric/Fabric.d.ts:52

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

matter.js/dist/cjs/fabric/Fabric.d.ts:57

___

### createFromStorageObject

▸ `Static` **createFromStorageObject**(`fabricObject`): [`Fabric`](internal_.Fabric.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricObject` | [`FabricJsonObject`](../modules/internal_.md#fabricjsonobject) |

#### Returns

[`Fabric`](internal_.Fabric.md)

#### Defined in

matter.js/dist/cjs/fabric/Fabric.d.ts:53
