[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/fabric](../README.md) / Fabric

# Class: Fabric

## Constructors

### new Fabric()

> **new Fabric**(`fabricIndex`, `fabricId`, `nodeId`, `rootNodeId`, `operationalId`, `rootPublicKey`, `keyPair`, `rootVendorId`, `rootCert`, `identityProtectionKey`, `operationalIdentityProtectionKey`, `intermediateCACert`, `operationalCert`, `label`, `caseAuthenticatedTags`?, `scopedClusterData`?): [`Fabric`](Fabric.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../../datatype/README.md#fabricindex) |
| `fabricId` | [`FabricId`](../../datatype/README.md#fabricid) |
| `nodeId` | [`NodeId`](../../datatype/README.md#nodeid) |
| `rootNodeId` | [`NodeId`](../../datatype/README.md#nodeid) |
| `operationalId` | `Uint8Array` |
| `rootPublicKey` | `Uint8Array` |
| `keyPair` | [`Key`](../../../crypto/export/interfaces/Key.md) |
| `rootVendorId` | [`VendorId`](../../datatype/README.md#vendorid) |
| `rootCert` | `Uint8Array` |
| `identityProtectionKey` | `Uint8Array` |
| `operationalIdentityProtectionKey` | `Uint8Array` |
| `intermediateCACert` | `undefined` \| `Uint8Array` |
| `operationalCert` | `Uint8Array` |
| `label` | `string` |
| `caseAuthenticatedTags`? | [`CaseAuthenticatedTag`](../../datatype/README.md#caseauthenticatedtag)[] |
| `scopedClusterData`? | `Map`\<`number`, `Map`\<`string`, [`SupportedStorageTypes`](../../../storage/export/README.md#supportedstoragetypes)\>\> |

#### Returns

[`Fabric`](Fabric.md)

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:63

## Properties

### #private

> `private` **#private**: `any`

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:48

***

### caseAuthenticatedTags

> `readonly` **caseAuthenticatedTags**: [`CaseAuthenticatedTag`](../../datatype/README.md#caseauthenticatedtag)[]

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:62

***

### fabricId

> `readonly` **fabricId**: [`FabricId`](../../datatype/README.md#fabricid)

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:50

***

### fabricIndex

> `readonly` **fabricIndex**: [`FabricIndex`](../../datatype/README.md#fabricindex)

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:49

***

### getGroupSetForIpk

> `private` **getGroupSetForIpk**: `any`

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:97

***

### identityProtectionKey

> `readonly` **identityProtectionKey**: `Uint8Array`

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:57

***

### intermediateCACert

> `readonly` **intermediateCACert**: `undefined` \| `Uint8Array`

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:59

***

### label

> **label**: `string`

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:61

***

### nodeId

> `readonly` **nodeId**: [`NodeId`](../../datatype/README.md#nodeid)

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:51

***

### operationalCert

> `readonly` **operationalCert**: `Uint8Array`

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:60

***

### operationalId

> `readonly` **operationalId**: `Uint8Array`

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:53

***

### operationalIdentityProtectionKey

> `readonly` **operationalIdentityProtectionKey**: `Uint8Array`

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:58

***

### rootCert

> `readonly` **rootCert**: `Uint8Array`

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:56

***

### rootNodeId

> `readonly` **rootNodeId**: [`NodeId`](../../datatype/README.md#nodeid)

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:52

***

### rootPublicKey

> `readonly` **rootPublicKey**: `Uint8Array`

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:54

***

### rootVendorId

> `readonly` **rootVendorId**: [`VendorId`](../../datatype/README.md#vendorid)

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:55

## Accessors

### externalInformation

> `get` **externalInformation**(): [`ExposedFabricInformation`](../README.md#exposedfabricinformation)

#### Returns

[`ExposedFabricInformation`](../README.md#exposedfabricinformation)

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:109

***

### persistCallback

> `set` **persistCallback**(`callback`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `callback` | (`isUpdate`?) => [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\> |

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:77

***

### publicKey

> `get` **publicKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:67

## Methods

### addRemoveCallback()

> **addRemoveCallback**(`callback`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `callback` | () => [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\> |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:75

***

### addSession()

> **addSession**(`session`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`SecureSession`](../../session/classes/SecureSession.md)\<`any`\> |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:73

***

### deleteRemoveCallback()

> **deleteRemoveCallback**(`callback`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `callback` | () => [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\> |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:76

***

### deleteScopedClusterData()

> **deleteScopedClusterData**(`cluster`): `undefined` \| [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../../cluster/interfaces/Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |

#### Returns

`undefined` \| [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:84

***

### deleteScopedClusterDataValue()

> **deleteScopedClusterDataValue**(`cluster`, `clusterDataKey`): [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../../cluster/interfaces/Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |

#### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:82

***

### getAllGroupKeySets()

> **getAllGroupKeySets**(): [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>[]

#### Returns

[`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>[]

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:98

***

### getDestinationId()

> **getDestinationId**(`nodeId`, `random`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../../datatype/README.md#nodeid) |
| `random` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:72

***

### getGroupKeySet()

> **getGroupKeySet**(`groupKeySetId`): `undefined` \| [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `groupKeySetId` | `number` |

#### Returns

`undefined` \| [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:86

***

### getScopedClusterDataKeys()

> **getScopedClusterDataKeys**(`cluster`): `string`[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../../cluster/interfaces/Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |

#### Returns

`string`[]

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:85

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
| `cluster` | [`Cluster`](../../cluster/interfaces/Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |

#### Returns

`undefined` \| `T`

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:80

***

### hasScopedClusterDataValue()

> **hasScopedClusterDataValue**(`cluster`, `clusterDataKey`): `any`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../../cluster/interfaces/Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |

#### Returns

`any`

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:83

***

### matchesFabricIdAndRootPublicKey()

> **matchesFabricIdAndRootPublicKey**(`fabricId`, `rootPublicKey`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabricId` | [`FabricId`](../../datatype/README.md#fabricid) |
| `rootPublicKey` | `Uint8Array` |

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:70

***

### matchesKeyPair()

> **matchesKeyPair**(`keyPair`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `keyPair` | [`Key`](../../../crypto/export/interfaces/Key.md) |

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:71

***

### persist()

> **persist**(`isUpdate`?): `undefined` \| [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `isUpdate`? | `boolean` |

#### Returns

`undefined` \| [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:79

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

packages/matter.js/dist/esm/fabric/Fabric.d.ts:78

***

### removeSession()

> **removeSession**(`session`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`SecureSession`](../../session/classes/SecureSession.md)\<`any`\> |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:74

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

packages/matter.js/dist/esm/fabric/Fabric.d.ts:66

***

### setScopedClusterDataValue()

> **setScopedClusterDataValue**\<`T`\>(`cluster`, `clusterDataKey`, `value`): `undefined` \| [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../../cluster/interfaces/Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |
| `value` | `T` |

#### Returns

`undefined` \| [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:81

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

packages/matter.js/dist/esm/fabric/Fabric.d.ts:68

***

### toStorageObject()

> **toStorageObject**(): [`FabricJsonObject`](../README.md#fabricjsonobject)

#### Returns

[`FabricJsonObject`](../README.md#fabricjsonobject)

#### Source

packages/matter.js/dist/esm/fabric/Fabric.d.ts:64

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

packages/matter.js/dist/esm/fabric/Fabric.d.ts:69

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

packages/matter.js/dist/esm/fabric/Fabric.d.ts:65
