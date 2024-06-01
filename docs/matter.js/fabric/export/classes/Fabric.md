[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [fabric/export](../README.md) / Fabric

# Class: Fabric

## Constructors

### new Fabric()

> **new Fabric**(`fabricIndex`, `fabricId`, `nodeId`, `rootNodeId`, `operationalId`, `rootPublicKey`, `keyPair`, `rootVendorId`, `rootCert`, `identityProtectionKey`, `operationalIdentityProtectionKey`, `intermediateCACert`, `operationalCert`, `label`, `caseAuthenticatedTags`, `scopedClusterData`?): [`Fabric`](Fabric.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../../../datatype/export/README.md#fabricindex) |
| `fabricId` | [`FabricId`](../../../datatype/export/README.md#fabricid) |
| `nodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |
| `rootNodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |
| `operationalId` | `Uint8Array` |
| `rootPublicKey` | `Uint8Array` |
| `keyPair` | [`Key`](../../../crypto/export/interfaces/Key.md) |
| `rootVendorId` | [`VendorId`](../../../datatype/export/README.md#vendorid) |
| `rootCert` | `Uint8Array` |
| `identityProtectionKey` | `Uint8Array` |
| `operationalIdentityProtectionKey` | `Uint8Array` |
| `intermediateCACert` | `undefined` \| `Uint8Array` |
| `operationalCert` | `Uint8Array` |
| `label` | `string` |
| `caseAuthenticatedTags` | [`CaseAuthenticatedTag`](../../../datatype/export/README.md#caseauthenticatedtag)[] |
| `scopedClusterData`? | `Map`\<`number`, `Map`\<`string`, [`SupportedStorageTypes`](../../../storage/export/README.md#supportedstoragetypes)\>\> |

#### Returns

[`Fabric`](Fabric.md)

#### Source

[packages/matter.js/src/fabric/Fabric.ts:113](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L113)

## Properties

### #keyPair

> `private` `readonly` **#keyPair**: [`Key`](../../../crypto/export/interfaces/Key.md)

#### Source

[packages/matter.js/src/fabric/Fabric.ts:108](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L108)

***

### #persistCallback

> `private` **#persistCallback**: `undefined` \| (`isUpdate`?) => [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Source

[packages/matter.js/src/fabric/Fabric.ts:111](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L111)

***

### #removeCallbacks

> `private` **#removeCallbacks**: () => [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>[]

#### Source

[packages/matter.js/src/fabric/Fabric.ts:110](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L110)

***

### #scopedClusterData

> `private` `readonly` **#scopedClusterData**: `Map`\<`number`, `any`\>

#### Source

[packages/matter.js/src/fabric/Fabric.ts:106](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L106)

***

### #sessions

> `private` `readonly` **#sessions**: [`SecureSession`](../../../session/export/classes/SecureSession.md)\<`any`\>[]

#### Source

[packages/matter.js/src/fabric/Fabric.ts:105](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L105)

***

### caseAuthenticatedTags

> `readonly` **caseAuthenticatedTags**: [`CaseAuthenticatedTag`](../../../datatype/export/README.md#caseauthenticatedtag)[]

#### Source

[packages/matter.js/src/fabric/Fabric.ts:128](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L128)

***

### fabricId

> `readonly` **fabricId**: [`FabricId`](../../../datatype/export/README.md#fabricid)

#### Source

[packages/matter.js/src/fabric/Fabric.ts:115](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L115)

***

### fabricIndex

> `readonly` **fabricIndex**: [`FabricIndex`](../../../datatype/export/README.md#fabricindex)

#### Source

[packages/matter.js/src/fabric/Fabric.ts:114](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L114)

***

### identityProtectionKey

> `readonly` **identityProtectionKey**: `Uint8Array`

#### Source

[packages/matter.js/src/fabric/Fabric.ts:123](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L123)

***

### intermediateCACert

> `readonly` **intermediateCACert**: `undefined` \| `Uint8Array`

#### Source

[packages/matter.js/src/fabric/Fabric.ts:125](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L125)

***

### label

> **label**: `string`

#### Source

[packages/matter.js/src/fabric/Fabric.ts:127](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L127)

***

### nodeId

> `readonly` **nodeId**: [`NodeId`](../../../datatype/export/README.md#nodeid)

#### Source

[packages/matter.js/src/fabric/Fabric.ts:116](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L116)

***

### operationalCert

> `readonly` **operationalCert**: `Uint8Array`

#### Source

[packages/matter.js/src/fabric/Fabric.ts:126](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L126)

***

### operationalId

> `readonly` **operationalId**: `Uint8Array`

#### Source

[packages/matter.js/src/fabric/Fabric.ts:118](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L118)

***

### operationalIdentityProtectionKey

> `readonly` **operationalIdentityProtectionKey**: `Uint8Array`

#### Source

[packages/matter.js/src/fabric/Fabric.ts:124](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L124)

***

### rootCert

> `readonly` **rootCert**: `Uint8Array`

#### Source

[packages/matter.js/src/fabric/Fabric.ts:122](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L122)

***

### rootNodeId

> `readonly` **rootNodeId**: [`NodeId`](../../../datatype/export/README.md#nodeid)

#### Source

[packages/matter.js/src/fabric/Fabric.ts:117](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L117)

***

### rootPublicKey

> `readonly` **rootPublicKey**: `Uint8Array`

#### Source

[packages/matter.js/src/fabric/Fabric.ts:119](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L119)

***

### rootVendorId

> `readonly` **rootVendorId**: [`VendorId`](../../../datatype/export/README.md#vendorid)

#### Source

[packages/matter.js/src/fabric/Fabric.ts:121](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L121)

## Accessors

### externalInformation

> `get` **externalInformation**(): [`ExposedFabricInformation`](../README.md#exposedfabricinformation)

#### Returns

[`ExposedFabricInformation`](../README.md#exposedfabricinformation)

#### Source

[packages/matter.js/src/fabric/Fabric.ts:343](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L343)

***

### persistCallback

> `set` **persistCallback**(`callback`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `callback` | (`isUpdate`?) => [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\> |

#### Source

[packages/matter.js/src/fabric/Fabric.ts:252](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L252)

***

### publicKey

> `get` **publicKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/fabric/Fabric.ts:182](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L182)

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

[packages/matter.js/src/fabric/Fabric.ts:241](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L241)

***

### addSession()

> **addSession**(`session`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`SecureSession`](../../../session/export/classes/SecureSession.md)\<`any`\> |

#### Returns

`void`

#### Source

[packages/matter.js/src/fabric/Fabric.ts:230](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L230)

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

[packages/matter.js/src/fabric/Fabric.ts:245](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L245)

***

### deleteScopedClusterData()

> **deleteScopedClusterData**(`cluster`): `undefined` \| [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../../../cluster/export/interfaces/Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |

#### Returns

`undefined` \| [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Source

[packages/matter.js/src/fabric/Fabric.ts:298](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L298)

***

### deleteScopedClusterDataValue()

> **deleteScopedClusterDataValue**(`cluster`, `clusterDataKey`): [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../../../cluster/export/interfaces/Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |

#### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Source

[packages/matter.js/src/fabric/Fabric.ts:286](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L286)

***

### getAllGroupKeySets()

> **getAllGroupKeySets**(): [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

#### Returns

[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

#### Source

[packages/matter.js/src/fabric/Fabric.ts:338](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L338)

***

### getDestinationId()

> **getDestinationId**(`nodeId`, `random`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |
| `random` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/fabric/Fabric.ts:221](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L221)

***

### getGroupKeySet()

> **getGroupKeySet**(`groupKeySetId`): `undefined` \| [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `groupKeySetId` | `number` |

#### Returns

`undefined` \| [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>

#### Source

[packages/matter.js/src/fabric/Fabric.ts:310](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L310)

***

### getGroupSetForIpk()

> `private` **getGroupSetForIpk**(): [`OperationalGroupKeySet`](../-internal-/README.md#operationalgroupkeyset)

#### Returns

[`OperationalGroupKeySet`](../-internal-/README.md#operationalgroupkeyset)

#### Source

[packages/matter.js/src/fabric/Fabric.ts:318](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L318)

***

### getScopedClusterDataKeys()

> **getScopedClusterDataKeys**(`cluster`): `string`[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../../../cluster/export/interfaces/Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |

#### Returns

`string`[]

#### Source

[packages/matter.js/src/fabric/Fabric.ts:303](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L303)

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
| `cluster` | [`Cluster`](../../../cluster/export/interfaces/Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |

#### Returns

`undefined` \| `T`

#### Source

[packages/matter.js/src/fabric/Fabric.ts:270](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L270)

***

### hasScopedClusterDataValue()

> **hasScopedClusterDataValue**(`cluster`, `clusterDataKey`): `any`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../../../cluster/export/interfaces/Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |

#### Returns

`any`

#### Source

[packages/matter.js/src/fabric/Fabric.ts:294](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L294)

***

### matchesFabricIdAndRootPublicKey()

> **matchesFabricIdAndRootPublicKey**(`fabricId`, `rootPublicKey`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabricId` | [`FabricId`](../../../datatype/export/README.md#fabricid) |
| `rootPublicKey` | `Uint8Array` |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/fabric/Fabric.ts:213](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L213)

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

[packages/matter.js/src/fabric/Fabric.ts:217](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L217)

***

### persist()

> **persist**(`isUpdate`): `undefined` \| [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `isUpdate` | `boolean` | `true` |

#### Returns

`undefined` \| [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Source

[packages/matter.js/src/fabric/Fabric.ts:266](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L266)

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

[packages/matter.js/src/fabric/Fabric.ts:257](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L257)

***

### removeSession()

> **removeSession**(`session`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`SecureSession`](../../../session/export/classes/SecureSession.md)\<`any`\> |

#### Returns

`void`

#### Source

[packages/matter.js/src/fabric/Fabric.ts:234](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L234)

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

[packages/matter.js/src/fabric/Fabric.ts:177](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L177)

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
| `cluster` | [`Cluster`](../../../cluster/export/interfaces/Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |
| `value` | `T` |

#### Returns

`undefined` \| [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Source

[packages/matter.js/src/fabric/Fabric.ts:278](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L278)

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

[packages/matter.js/src/fabric/Fabric.ts:186](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L186)

***

### toStorageObject()

> **toStorageObject**(): [`FabricJsonObject`](../README.md#fabricjsonobject)

#### Returns

[`FabricJsonObject`](../README.md#fabricjsonobject)

#### Source

[packages/matter.js/src/fabric/Fabric.ts:135](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L135)

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

[packages/matter.js/src/fabric/Fabric.ts:190](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L190)

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

[packages/matter.js/src/fabric/Fabric.ts:156](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L156)
