[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/cluster](../README.md) / ScenesManager

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
| `fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](../../datatype/README.md#groupid) |

#### Returns

[`scenesTableEntry`](../-internal-/interfaces/scenesTableEntry.md)[]

#### Source

packages/matter.js/dist/esm/cluster/server/ScenesServer.d.ts:34

***

### getEndpointScenes()

> `static` **getEndpointScenes**(`fabric`, `endpointId`): `undefined` \| `Map`\<`number`, `Map`\<`number`, [`scenesTableEntry`](../-internal-/interfaces/scenesTableEntry.md)\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |
| `endpointId` | `number` |

#### Returns

`undefined` \| `Map`\<`number`, `Map`\<`number`, [`scenesTableEntry`](../-internal-/interfaces/scenesTableEntry.md)\>\>

#### Source

packages/matter.js/dist/esm/cluster/server/ScenesServer.d.ts:30

***

### getSceneEntry()

> `static` **getSceneEntry**(`fabric`, `endpointId`, `groupId`, `sceneId`): `undefined` \| [`scenesTableEntry`](../-internal-/interfaces/scenesTableEntry.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](../../datatype/README.md#groupid) |
| `sceneId` | `number` |

#### Returns

`undefined` \| [`scenesTableEntry`](../-internal-/interfaces/scenesTableEntry.md)

#### Source

packages/matter.js/dist/esm/cluster/server/ScenesServer.d.ts:33

***

### removeAllNonGlobalScenesForEndpoint()

> `static` **removeAllNonGlobalScenesForEndpoint**(`fabric`, `endpointId`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |
| `endpointId` | `number` |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/cluster/server/ScenesServer.d.ts:37

***

### removeAllScenesForGroup()

> `static` **removeAllScenesForGroup**(`fabric`, `endpointId`, `groupId`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |
| `endpointId` | `number` |
| `groupId` | `number` |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/cluster/server/ScenesServer.d.ts:36

***

### removeScene()

> `static` **removeScene**(`fabric`, `endpointId`, `groupId`, `sceneId`): `Promise`\<`boolean`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](../../datatype/README.md#groupid) |
| `sceneId` | `number` |

#### Returns

`Promise`\<`boolean`\>

#### Source

packages/matter.js/dist/esm/cluster/server/ScenesServer.d.ts:35

***

### setEndpointScenes()

> `static` **setEndpointScenes**(`fabric`, `endpointId`, `endpointScenes`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |
| `endpointId` | `number` |
| `endpointScenes` | `Map`\<`number`, `Map`\<`number`, [`scenesTableEntry`](../-internal-/interfaces/scenesTableEntry.md)\>\> |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/cluster/server/ScenesServer.d.ts:31

***

### setScenes()

> `static` **setScenes**(`fabric`, `endpointId`, `sceneEntries`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |
| `endpointId` | `number` |
| `sceneEntries` | [`scenesTableEntry`](../-internal-/interfaces/scenesTableEntry.md)[] |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/cluster/server/ScenesServer.d.ts:32
