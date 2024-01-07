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

### Methods

- [addRemoveCallback](fabric_export.Fabric.md#addremovecallback)
- [addSession](fabric_export.Fabric.md#addsession)
- [deleteRemoveCallback](fabric_export.Fabric.md#deleteremovecallback)
- [deleteScopedClusterData](fabric_export.Fabric.md#deletescopedclusterdata)
- [deleteScopedClusterDataValue](fabric_export.Fabric.md#deletescopedclusterdatavalue)
- [getDestinationId](fabric_export.Fabric.md#getdestinationid)
- [getExternalInformation](fabric_export.Fabric.md#getexternalinformation)
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
| `keyPair` | [`Key`](../modules/crypto_export.md#key) |
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

[packages/matter.js/src/fabric/Fabric.ts:59](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L59)

## Properties

### caseAuthenticatedTags

• `Readonly` **caseAuthenticatedTags**: [`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag)[]

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:74](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L74)

___

### fabricId

• `Readonly` **fabricId**: [`FabricId`](../modules/datatype_export.md#fabricid)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:61](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L61)

___

### fabricIndex

• `Readonly` **fabricIndex**: [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:60](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L60)

___

### identityProtectionKey

• `Readonly` **identityProtectionKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:69](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L69)

___

### intermediateCACert

• `Readonly` **intermediateCACert**: `undefined` \| `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:71](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L71)

___

### keyPair

• `Private` `Readonly` **keyPair**: [`Key`](../modules/crypto_export.md#key)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:66](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L66)

___

### label

• **label**: `string`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:73](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L73)

___

### nodeId

• `Readonly` **nodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:62](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L62)

___

### operationalCert

• `Readonly` **operationalCert**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:72](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L72)

___

### operationalId

• `Readonly` **operationalId**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:64](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L64)

___

### operationalIdentityProtectionKey

• `Readonly` **operationalIdentityProtectionKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:70](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L70)

___

### persistCallback

• `Private` **persistCallback**: `undefined` \| () => `void`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:57](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L57)

___

### removeCallbacks

• `Private` **removeCallbacks**: () => `void`[]

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:56](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L56)

___

### rootCert

• `Readonly` **rootCert**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:68](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L68)

___

### rootNodeId

• `Readonly` **rootNodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:63](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L63)

___

### rootPublicKey

• `Readonly` **rootPublicKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:65](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L65)

___

### rootVendorId

• `Readonly` **rootVendorId**: [`VendorId`](../modules/datatype_export.md#vendorid)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:67](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L67)

___

### scopedClusterData

• `Private` `Readonly` **scopedClusterData**: `Map`\<`number`, `any`\>

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:54](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L54)

___

### sessions

• `Private` `Readonly` **sessions**: [`SecureSession`](session_export.SecureSession.md)\<`any`\>[]

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:52](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L52)

## Methods

### addRemoveCallback

▸ **addRemoveCallback**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:164](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L164)

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

[packages/matter.js/src/fabric/Fabric.ts:153](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L153)

___

### deleteRemoveCallback

▸ **deleteRemoveCallback**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:168](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L168)

___

### deleteScopedClusterData

▸ **deleteScopedClusterData**(`cluster`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster_export.md#cluster)\<`any`, `any`, `any`, `any`, `any`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:218](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L218)

___

### deleteScopedClusterDataValue

▸ **deleteScopedClusterDataValue**(`cluster`, `clusterDataKey`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster_export.md#cluster)\<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:206](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L206)

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

[packages/matter.js/src/fabric/Fabric.ts:144](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L144)

___

### getExternalInformation

▸ **getExternalInformation**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fabricId` | [`FabricId`](../modules/datatype_export.md#fabricid) |
| `fabricIndex` | [`FabricIndex`](../modules/datatype_export.md#fabricindex) |
| `label` | `string` |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `rootNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `rootVendorId` | [`VendorId`](../modules/datatype_export.md#vendorid) |

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:230](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L230)

___

### getPublicKey

▸ **getPublicKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:127](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L127)

___

### getScopedClusterDataKeys

▸ **getScopedClusterDataKeys**(`cluster`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster_export.md#cluster)\<`any`, `any`, `any`, `any`, `any`\> |

#### Returns

`string`[]

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:223](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L223)

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
| `cluster` | [`Cluster`](../modules/cluster_export.md#cluster)\<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |

#### Returns

`undefined` \| `T`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:190](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L190)

___

### hasScopedClusterDataValue

▸ **hasScopedClusterDataValue**(`cluster`, `clusterDataKey`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster_export.md#cluster)\<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |

#### Returns

`any`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:214](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L214)

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

[packages/matter.js/src/fabric/Fabric.ts:140](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L140)

___

### persist

▸ **persist**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:186](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L186)

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

[packages/matter.js/src/fabric/Fabric.ts:179](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L179)

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

[packages/matter.js/src/fabric/Fabric.ts:157](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L157)

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

[packages/matter.js/src/fabric/Fabric.ts:122](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L122)

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

[packages/matter.js/src/fabric/Fabric.ts:175](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L175)

___

### setScopedClusterDataValue

▸ **setScopedClusterDataValue**\<`T`\>(`cluster`, `clusterDataKey`, `value`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster_export.md#cluster)\<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |
| `value` | `T` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:198](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L198)

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

[packages/matter.js/src/fabric/Fabric.ts:131](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L131)

___

### toStorageObject

▸ **toStorageObject**(): [`FabricJsonObject`](../modules/fabric_export.md#fabricjsonobject)

#### Returns

[`FabricJsonObject`](../modules/fabric_export.md#fabricjsonobject)

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:80](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L80)

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

[packages/matter.js/src/fabric/Fabric.ts:135](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L135)

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

[packages/matter.js/src/fabric/Fabric.ts:101](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/fabric/Fabric.ts#L101)
