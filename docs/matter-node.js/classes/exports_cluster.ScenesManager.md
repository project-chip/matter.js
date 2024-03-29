[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / ScenesManager

# Class: ScenesManager

[exports/cluster](../modules/exports_cluster.md).ScenesManager

## Table of contents

### Constructors

- [constructor](exports_cluster.ScenesManager.md#constructor)

### Methods

- [getAllScenes](exports_cluster.ScenesManager.md#getallscenes)
- [getEndpointScenes](exports_cluster.ScenesManager.md#getendpointscenes)
- [getSceneEntry](exports_cluster.ScenesManager.md#getsceneentry)
- [removeAllNonGlobalScenesForEndpoint](exports_cluster.ScenesManager.md#removeallnonglobalscenesforendpoint)
- [removeAllScenesForGroup](exports_cluster.ScenesManager.md#removeallscenesforgroup)
- [removeScene](exports_cluster.ScenesManager.md#removescene)
- [setEndpointScenes](exports_cluster.ScenesManager.md#setendpointscenes)
- [setScenes](exports_cluster.ScenesManager.md#setscenes)

## Constructors

### constructor

• **new ScenesManager**(): [`ScenesManager`](exports_cluster.ScenesManager.md)

#### Returns

[`ScenesManager`](exports_cluster.ScenesManager.md)

## Methods

### getAllScenes

▸ **getAllScenes**(`fabric`, `endpointId`, `groupId`): [`scenesTableEntry`](../interfaces/exports_cluster._internal_.scenesTableEntry.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](../modules/exports_datatype.md#groupid) |

#### Returns

[`scenesTableEntry`](../interfaces/exports_cluster._internal_.scenesTableEntry.md)[]

#### Defined in

packages/matter.js/dist/esm/cluster/server/ScenesServer.d.ts:34

___

### getEndpointScenes

▸ **getEndpointScenes**(`fabric`, `endpointId`): `undefined` \| `Map`\<`number`, `Map`\<`number`, [`scenesTableEntry`](../interfaces/exports_cluster._internal_.scenesTableEntry.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `endpointId` | `number` |

#### Returns

`undefined` \| `Map`\<`number`, `Map`\<`number`, [`scenesTableEntry`](../interfaces/exports_cluster._internal_.scenesTableEntry.md)\>\>

#### Defined in

packages/matter.js/dist/esm/cluster/server/ScenesServer.d.ts:30

___

### getSceneEntry

▸ **getSceneEntry**(`fabric`, `endpointId`, `groupId`, `sceneId`): `undefined` \| [`scenesTableEntry`](../interfaces/exports_cluster._internal_.scenesTableEntry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](../modules/exports_datatype.md#groupid) |
| `sceneId` | `number` |

#### Returns

`undefined` \| [`scenesTableEntry`](../interfaces/exports_cluster._internal_.scenesTableEntry.md)

#### Defined in

packages/matter.js/dist/esm/cluster/server/ScenesServer.d.ts:33

___

### removeAllNonGlobalScenesForEndpoint

▸ **removeAllNonGlobalScenesForEndpoint**(`fabric`, `endpointId`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `endpointId` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/cluster/server/ScenesServer.d.ts:37

___

### removeAllScenesForGroup

▸ **removeAllScenesForGroup**(`fabric`, `endpointId`, `groupId`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `endpointId` | `number` |
| `groupId` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/cluster/server/ScenesServer.d.ts:36

___

### removeScene

▸ **removeScene**(`fabric`, `endpointId`, `groupId`, `sceneId`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](../modules/exports_datatype.md#groupid) |
| `sceneId` | `number` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

packages/matter.js/dist/esm/cluster/server/ScenesServer.d.ts:35

___

### setEndpointScenes

▸ **setEndpointScenes**(`fabric`, `endpointId`, `endpointScenes`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `endpointId` | `number` |
| `endpointScenes` | `Map`\<`number`, `Map`\<`number`, [`scenesTableEntry`](../interfaces/exports_cluster._internal_.scenesTableEntry.md)\>\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/cluster/server/ScenesServer.d.ts:31

___

### setScenes

▸ **setScenes**(`fabric`, `endpointId`, `sceneEntries`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `endpointId` | `number` |
| `sceneEntries` | [`scenesTableEntry`](../interfaces/exports_cluster._internal_.scenesTableEntry.md)[] |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/cluster/server/ScenesServer.d.ts:32
