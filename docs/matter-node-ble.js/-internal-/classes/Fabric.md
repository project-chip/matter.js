[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / Fabric

# Class: Fabric

## Constructors

### new Fabric()

> **new Fabric**(`fabricIndex`, `fabricId`, `nodeId`, `rootNodeId`, `operationalId`, `rootPublicKey`, `keyPair`, `rootVendorId`, `rootCert`, `identityProtectionKey`, `operationalIdentityProtectionKey`, `intermediateCACert`, `operationalCert`, `label`, `caseAuthenticatedTags`?, `scopedClusterData`?): [`Fabric`](Fabric.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../README.md#fabricindex-1) |
| `fabricId` | [`FabricId`](../README.md#fabricid-1) |
| `nodeId` | [`NodeId`](../README.md#nodeid-5) |
| `rootNodeId` | [`NodeId`](../README.md#nodeid-5) |
| `operationalId` | `Uint8Array` |
| `rootPublicKey` | `Uint8Array` |
| `keyPair` | [`Key`](../interfaces/Key.md) |
| `rootVendorId` | [`VendorId`](../README.md#vendorid-1) |
| `rootCert` | `Uint8Array` |
| `identityProtectionKey` | `Uint8Array` |
| `operationalIdentityProtectionKey` | `Uint8Array` |
| `intermediateCACert` | `undefined` \| `Uint8Array` |
| `operationalCert` | `Uint8Array` |
| `label` | `string` |
| `caseAuthenticatedTags`? | [`CaseAuthenticatedTag`](../README.md#caseauthenticatedtag)[] |
| `scopedClusterData`? | `Map`\<`number`, `Map`\<`string`, [`SupportedStorageTypes`](../README.md#supportedstoragetypes)\>\> |

#### Returns

[`Fabric`](Fabric.md)

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:63

## Properties

### #private

> `private` **#private**: `any`

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:48

***

### caseAuthenticatedTags

> `readonly` **caseAuthenticatedTags**: [`CaseAuthenticatedTag`](../README.md#caseauthenticatedtag)[]

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:62

***

### fabricId

> `readonly` **fabricId**: [`FabricId`](../README.md#fabricid-1)

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:50

***

### fabricIndex

> `readonly` **fabricIndex**: [`FabricIndex`](../README.md#fabricindex-1)

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:49

***

### getGroupSetForIpk

> `private` **getGroupSetForIpk**: `any`

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:97

***

### identityProtectionKey

> `readonly` **identityProtectionKey**: `Uint8Array`

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:57

***

### intermediateCACert

> `readonly` **intermediateCACert**: `undefined` \| `Uint8Array`

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:59

***

### label

> **label**: `string`

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:61

***

### nodeId

> `readonly` **nodeId**: [`NodeId`](../README.md#nodeid-5)

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:51

***

### operationalCert

> `readonly` **operationalCert**: `Uint8Array`

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:60

***

### operationalId

> `readonly` **operationalId**: `Uint8Array`

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:53

***

### operationalIdentityProtectionKey

> `readonly` **operationalIdentityProtectionKey**: `Uint8Array`

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:58

***

### rootCert

> `readonly` **rootCert**: `Uint8Array`

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:56

***

### rootNodeId

> `readonly` **rootNodeId**: [`NodeId`](../README.md#nodeid-5)

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:52

***

### rootPublicKey

> `readonly` **rootPublicKey**: `Uint8Array`

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:54

***

### rootVendorId

> `readonly` **rootVendorId**: [`VendorId`](../README.md#vendorid-1)

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:55

## Accessors

### externalInformation

> `get` **externalInformation**(): [`ExposedFabricInformation`](../README.md#exposedfabricinformation)

#### Returns

[`ExposedFabricInformation`](../README.md#exposedfabricinformation)

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:109

***

### persistCallback

> `set` **persistCallback**(`callback`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `callback` | (`isUpdate`?) => [`MaybePromise`](../README.md#maybepromiset)\<`void`\> |

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:77

***

### publicKey

> `get` **publicKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:67

## Methods

### addRemoveCallback()

> **addRemoveCallback**(`callback`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `callback` | () => [`MaybePromise`](../README.md#maybepromiset)\<`void`\> |

#### Returns

`void`

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:75

***

### addSession()

> **addSession**(`session`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`SecureSession`](SecureSession.md)\<`any`\> |

#### Returns

`void`

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:73

***

### deleteRemoveCallback()

> **deleteRemoveCallback**(`callback`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `callback` | () => [`MaybePromise`](../README.md#maybepromiset)\<`void`\> |

#### Returns

`void`

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:76

***

### deleteScopedClusterData()

> **deleteScopedClusterData**(`cluster`): `undefined` \| [`MaybePromise`](../README.md#maybepromiset)\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |

#### Returns

`undefined` \| [`MaybePromise`](../README.md#maybepromiset)\<`void`\>

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:84

***

### deleteScopedClusterDataValue()

> **deleteScopedClusterDataValue**(`cluster`, `clusterDataKey`): [`MaybePromise`](../README.md#maybepromiset)\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |

#### Returns

[`MaybePromise`](../README.md#maybepromiset)\<`void`\>

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:82

***

### getAllGroupKeySets()

> **getAllGroupKeySets**(): [`TypeFromFields`](../README.md#typefromfieldsf)\<`object`\>[]

#### Returns

[`TypeFromFields`](../README.md#typefromfieldsf)\<`object`\>[]

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:98

***

### getDestinationId()

> **getDestinationId**(`nodeId`, `random`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../README.md#nodeid-5) |
| `random` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:72

***

### getGroupKeySet()

> **getGroupKeySet**(`groupKeySetId`): `undefined` \| [`TypeFromFields`](../README.md#typefromfieldsf)\<`object`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `groupKeySetId` | `number` |

#### Returns

`undefined` \| [`TypeFromFields`](../README.md#typefromfieldsf)\<`object`\>

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:86

***

### getScopedClusterDataKeys()

> **getScopedClusterDataKeys**(`cluster`): `string`[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |

#### Returns

`string`[]

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:85

***

### getScopedClusterDataValue()

> **getScopedClusterDataValue**\<`T`\>(`cluster`, `clusterDataKey`): `undefined` \| `T`

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |

#### Returns

`undefined` \| `T`

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:80

***

### hasScopedClusterDataValue()

> **hasScopedClusterDataValue**(`cluster`, `clusterDataKey`): `any`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |

#### Returns

`any`

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:83

***

### matchesFabricIdAndRootPublicKey()

> **matchesFabricIdAndRootPublicKey**(`fabricId`, `rootPublicKey`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabricId` | [`FabricId`](../README.md#fabricid-1) |
| `rootPublicKey` | `Uint8Array` |

#### Returns

`boolean`

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:70

***

### matchesKeyPair()

> **matchesKeyPair**(`keyPair`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `keyPair` | [`Key`](../interfaces/Key.md) |

#### Returns

`boolean`

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:71

***

### persist()

> **persist**(`isUpdate`?): `undefined` \| [`MaybePromise`](../README.md#maybepromiset)\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `isUpdate`? | `boolean` |

#### Returns

`undefined` \| [`MaybePromise`](../README.md#maybepromiset)\<`void`\>

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:79

***

### remove()

> **remove**(`currentSessionId`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `currentSessionId`? | `number` |

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:78

***

### removeSession()

> **removeSession**(`session`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`SecureSession`](SecureSession.md)\<`any`\> |

#### Returns

`void`

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:74

***

### setLabel()

> **setLabel**(`label`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:66

***

### setScopedClusterDataValue()

> **setScopedClusterDataValue**\<`T`\>(`cluster`, `clusterDataKey`, `value`): `undefined` \| [`MaybePromise`](../README.md#maybepromiset)\<`void`\>

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |
| `value` | `T` |

#### Returns

`undefined` \| [`MaybePromise`](../README.md#maybepromiset)\<`void`\>

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:81

***

### sign()

> **sign**(`data`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:68

***

### toStorageObject()

> **toStorageObject**(): [`FabricJsonObject`](../README.md#fabricjsonobject)

#### Returns

[`FabricJsonObject`](../README.md#fabricjsonobject)

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:64

***

### verifyCredentials()

> **verifyCredentials**(`operationalCert`, `intermediateCACert`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `operationalCert` | `Uint8Array` |
| `intermediateCACert`? | `Uint8Array` |

#### Returns

`void`

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:69

***

### createFromStorageObject()

> `static` **createFromStorageObject**(`fabricObject`): [`Fabric`](Fabric.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabricObject` | [`FabricJsonObject`](../README.md#fabricjsonobject) |

#### Returns

[`Fabric`](Fabric.md)

#### Source

matter.js/dist/esm/fabric/Fabric.d.ts:65
