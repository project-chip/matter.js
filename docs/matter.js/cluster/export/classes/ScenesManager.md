[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [cluster/export](../README.md) / ScenesManager

# Class: ScenesManager

## Constructors

### new ScenesManager()

> **new ScenesManager**(): [`ScenesManager`](ScenesManager.md)

#### Returns

[`ScenesManager`](ScenesManager.md)

## Methods

### getAllScenes()

> `static` **getAllScenes**(`fabric`, `endpointId`, `groupId`): [`scenesTableEntry`](../-internal-/interfaces/scenesTableEntry.md)[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](../../../datatype/export/README.md#groupid) |

#### Returns

[`scenesTableEntry`](../-internal-/interfaces/scenesTableEntry.md)[]

#### Source

[packages/matter.js/src/cluster/server/ScenesServer.ts:90](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ScenesServer.ts#L90)

***

### getEndpointScenes()

> `static` **getEndpointScenes**(`fabric`, `endpointId`): `undefined` \| `Map`\<`number`, `Map`\<`number`, [`scenesTableEntry`](../-internal-/interfaces/scenesTableEntry.md)\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |
| `endpointId` | `number` |

#### Returns

`undefined` \| `Map`\<`number`, `Map`\<`number`, [`scenesTableEntry`](../-internal-/interfaces/scenesTableEntry.md)\>\>

#### Source

[packages/matter.js/src/cluster/server/ScenesServer.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ScenesServer.ts#L43)

***

### getSceneEntry()

> `static` **getSceneEntry**(`fabric`, `endpointId`, `groupId`, `sceneId`): `undefined` \| [`scenesTableEntry`](../-internal-/interfaces/scenesTableEntry.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](../../../datatype/export/README.md#groupid) |
| `sceneId` | `number` |

#### Returns

`undefined` \| [`scenesTableEntry`](../-internal-/interfaces/scenesTableEntry.md)

#### Source

[packages/matter.js/src/cluster/server/ScenesServer.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ScenesServer.ts#L81)

***

### removeAllNonGlobalScenesForEndpoint()

> `static` **removeAllNonGlobalScenesForEndpoint**(`fabric`, `endpointId`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |
| `endpointId` | `number` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/cluster/server/ScenesServer.ts:119](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ScenesServer.ts#L119)

***

### removeAllScenesForGroup()

> `static` **removeAllScenesForGroup**(`fabric`, `endpointId`, `groupId`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |
| `endpointId` | `number` |
| `groupId` | `number` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/cluster/server/ScenesServer.ts:110](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ScenesServer.ts#L110)

***

### removeScene()

> `static` **removeScene**(`fabric`, `endpointId`, `groupId`, `sceneId`): `Promise`\<`boolean`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](../../../datatype/export/README.md#groupid) |
| `sceneId` | `number` |

#### Returns

`Promise`\<`boolean`\>

#### Source

[packages/matter.js/src/cluster/server/ScenesServer.ts:96](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ScenesServer.ts#L96)

***

### setEndpointScenes()

> `static` **setEndpointScenes**(`fabric`, `endpointId`, `endpointScenes`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |
| `endpointId` | `number` |
| `endpointScenes` | `Map`\<`number`, `Map`\<`number`, [`scenesTableEntry`](../-internal-/interfaces/scenesTableEntry.md)\>\> |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/cluster/server/ScenesServer.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ScenesServer.ts#L53)

***

### setScenes()

> `static` **setScenes**(`fabric`, `endpointId`, `sceneEntries`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |
| `endpointId` | `number` |
| `sceneEntries` | [`scenesTableEntry`](../-internal-/interfaces/scenesTableEntry.md)[] |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/cluster/server/ScenesServer.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ScenesServer.ts#L61)
