[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [fabric](../modules/fabric.md) / Fabric

# Class: Fabric

[fabric](../modules/fabric.md).Fabric

## Table of contents

### Constructors

- [constructor](fabric.Fabric.md#constructor)

### Properties

- [fabricId](fabric.Fabric.md#fabricid)
- [fabricIndex](fabric.Fabric.md#fabricindex)
- [identityProtectionKey](fabric.Fabric.md#identityprotectionkey)
- [intermediateCACert](fabric.Fabric.md#intermediatecacert)
- [keyPair](fabric.Fabric.md#keypair)
- [label](fabric.Fabric.md#label)
- [nodeId](fabric.Fabric.md#nodeid)
- [operationalCert](fabric.Fabric.md#operationalcert)
- [operationalId](fabric.Fabric.md#operationalid)
- [operationalIdentityProtectionKey](fabric.Fabric.md#operationalidentityprotectionkey)
- [persistCallback](fabric.Fabric.md#persistcallback)
- [removeCallback](fabric.Fabric.md#removecallback)
- [rootCert](fabric.Fabric.md#rootcert)
- [rootNodeId](fabric.Fabric.md#rootnodeid)
- [rootPublicKey](fabric.Fabric.md#rootpublickey)
- [rootVendorId](fabric.Fabric.md#rootvendorid)
- [scopedClusterData](fabric.Fabric.md#scopedclusterdata)
- [sessions](fabric.Fabric.md#sessions)

### Methods

- [addSession](fabric.Fabric.md#addsession)
- [deleteScopedClusterData](fabric.Fabric.md#deletescopedclusterdata)
- [deleteScopedClusterDataValue](fabric.Fabric.md#deletescopedclusterdatavalue)
- [getDestinationId](fabric.Fabric.md#getdestinationid)
- [getPublicKey](fabric.Fabric.md#getpublickey)
- [getScopedClusterDataKeys](fabric.Fabric.md#getscopedclusterdatakeys)
- [getScopedClusterDataValue](fabric.Fabric.md#getscopedclusterdatavalue)
- [hasScopedClusterDataValue](fabric.Fabric.md#hasscopedclusterdatavalue)
- [persist](fabric.Fabric.md#persist)
- [remove](fabric.Fabric.md#remove)
- [removeSession](fabric.Fabric.md#removesession)
- [setLabel](fabric.Fabric.md#setlabel)
- [setPersistCallback](fabric.Fabric.md#setpersistcallback)
- [setRemoveCallback](fabric.Fabric.md#setremovecallback)
- [setScopedClusterDataValue](fabric.Fabric.md#setscopedclusterdatavalue)
- [sign](fabric.Fabric.md#sign)
- [toStorageObject](fabric.Fabric.md#tostorageobject)
- [verifyCredentials](fabric.Fabric.md#verifycredentials)
- [createFromStorageObject](fabric.Fabric.md#createfromstorageobject)

## Constructors

### constructor

• **new Fabric**(`fabricIndex`, `fabricId`, `nodeId`, `rootNodeId`, `operationalId`, `rootPublicKey`, `keyPair`, `rootVendorId`, `rootCert`, `identityProtectionKey`, `operationalIdentityProtectionKey`, `intermediateCACert`, `operationalCert`, `label`, `scopedClusterData?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](datatype.FabricIndex.md) |
| `fabricId` | [`FabricId`](datatype.FabricId.md) |
| `nodeId` | [`NodeId`](datatype.NodeId.md) |
| `rootNodeId` | [`NodeId`](datatype.NodeId.md) |
| `operationalId` | `Uint8Array` |
| `rootPublicKey` | `Uint8Array` |
| `keyPair` | [`KeyPair`](../modules/crypto.md#keypair) |
| `rootVendorId` | [`VendorId`](datatype.VendorId.md) |
| `rootCert` | `Uint8Array` |
| `identityProtectionKey` | `Uint8Array` |
| `operationalIdentityProtectionKey` | `Uint8Array` |
| `intermediateCACert` | `undefined` \| `Uint8Array` |
| `operationalCert` | `Uint8Array` |
| `label` | `string` |
| `scopedClusterData?` | `Map`<`number`, `Map`<`string`, [`SupportedStorageTypes`](../modules/storage.md#supportedstoragetypes)\>\> |

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:50](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L50)

## Properties

### fabricId

• `Readonly` **fabricId**: [`FabricId`](datatype.FabricId.md)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:52](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L52)

___

### fabricIndex

• `Readonly` **fabricIndex**: [`FabricIndex`](datatype.FabricIndex.md)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:51](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L51)

___

### identityProtectionKey

• `Readonly` **identityProtectionKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:60](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L60)

___

### intermediateCACert

• `Readonly` **intermediateCACert**: `undefined` \| `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:62](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L62)

___

### keyPair

• `Private` `Readonly` **keyPair**: [`KeyPair`](../modules/crypto.md#keypair)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:57](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L57)

___

### label

• **label**: `string`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:64](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L64)

___

### nodeId

• `Readonly` **nodeId**: [`NodeId`](datatype.NodeId.md)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:53](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L53)

___

### operationalCert

• `Readonly` **operationalCert**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:63](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L63)

___

### operationalId

• `Readonly` **operationalId**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:55](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L55)

___

### operationalIdentityProtectionKey

• `Readonly` **operationalIdentityProtectionKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:61](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L61)

___

### persistCallback

• `Private` **persistCallback**: `undefined` \| () => `void`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:48](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L48)

___

### removeCallback

• `Private` **removeCallback**: `undefined` \| () => `void`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:47](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L47)

___

### rootCert

• `Private` `Readonly` **rootCert**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:59](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L59)

___

### rootNodeId

• `Readonly` **rootNodeId**: [`NodeId`](datatype.NodeId.md)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:54](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L54)

___

### rootPublicKey

• `Readonly` **rootPublicKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:56](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L56)

___

### rootVendorId

• `Readonly` **rootVendorId**: [`VendorId`](datatype.VendorId.md)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:58](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L58)

___

### scopedClusterData

• `Private` `Readonly` **scopedClusterData**: `Map`<`number`, `any`\>

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:45](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L45)

___

### sessions

• `Private` `Readonly` **sessions**: [`SecureSession`](session.SecureSession.md)<`any`\>[]

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:43](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L43)

## Methods

### addSession

▸ **addSession**(`session`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`SecureSession`](session.SecureSession.md)<`any`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:137](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L137)

___

### deleteScopedClusterData

▸ **deleteScopedClusterData**(`cluster`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster.md#cluster)<`any`, `any`, `any`, `any`, `any`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:193](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L193)

___

### deleteScopedClusterDataValue

▸ **deleteScopedClusterDataValue**(`cluster`, `clusterDataKey`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster.md#cluster)<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:181](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L181)

___

### getDestinationId

▸ **getDestinationId**(`nodeId`, `random`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](datatype.NodeId.md) |
| `random` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:128](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L128)

___

### getPublicKey

▸ **getPublicKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:115](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L115)

___

### getScopedClusterDataKeys

▸ **getScopedClusterDataKeys**(`cluster`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster.md#cluster)<`any`, `any`, `any`, `any`, `any`\> |

#### Returns

`string`[]

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:198](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L198)

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
| `cluster` | [`Cluster`](../modules/cluster.md#cluster)<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |

#### Returns

`undefined` \| `T`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:165](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L165)

___

### hasScopedClusterDataValue

▸ **hasScopedClusterDataValue**(`cluster`, `clusterDataKey`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster.md#cluster)<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |

#### Returns

`any`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:189](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L189)

___

### persist

▸ **persist**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:161](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L161)

___

### remove

▸ **remove**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:156](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L156)

___

### removeSession

▸ **removeSession**(`session`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`SecureSession`](session.SecureSession.md)<`any`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:141](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L141)

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

[packages/matter.js/src/fabric/Fabric.ts:110](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L110)

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

[packages/matter.js/src/fabric/Fabric.ts:152](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L152)

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

[packages/matter.js/src/fabric/Fabric.ts:148](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L148)

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
| `cluster` | [`Cluster`](../modules/cluster.md#cluster)<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |
| `value` | `T` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:173](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L173)

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

[packages/matter.js/src/fabric/Fabric.ts:119](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L119)

___

### toStorageObject

▸ **toStorageObject**(): [`FabricJsonObject`](../modules/fabric.md#fabricjsonobject)

#### Returns

[`FabricJsonObject`](../modules/fabric.md#fabricjsonobject)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:71](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L71)

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

[packages/matter.js/src/fabric/Fabric.ts:123](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L123)

___

### createFromStorageObject

▸ `Static` **createFromStorageObject**(`fabricObject`): [`Fabric`](fabric.Fabric.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricObject` | [`FabricJsonObject`](../modules/fabric.md#fabricjsonobject) |

#### Returns

[`Fabric`](fabric.Fabric.md)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:91](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L91)
