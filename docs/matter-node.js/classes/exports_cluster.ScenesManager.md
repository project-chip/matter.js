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

• **new ScenesManager**()

## Methods

### getAllScenes

▸ `Static` **getAllScenes**(`fabric`, `endpointId`, `groupId`): [`scenesTableEntry`](../interfaces/index._internal_.scenesTableEntry.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](exports_datatype.GroupId.md) |

#### Returns

[`scenesTableEntry`](../interfaces/index._internal_.scenesTableEntry.md)[]

#### Defined in

packages/matter.js/dist/cjs/cluster/server/ScenesServer.d.ts:36

___

### getEndpointScenes

▸ `Static` **getEndpointScenes**(`fabric`, `endpointId`): `undefined` \| `Map`<`number`, `Map`<`number`, [`scenesTableEntry`](../interfaces/index._internal_.scenesTableEntry.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `endpointId` | `number` |

#### Returns

`undefined` \| `Map`<`number`, `Map`<`number`, [`scenesTableEntry`](../interfaces/index._internal_.scenesTableEntry.md)\>\>

#### Defined in

packages/matter.js/dist/cjs/cluster/server/ScenesServer.d.ts:32

___

### getSceneEntry

▸ `Static` **getSceneEntry**(`fabric`, `endpointId`, `groupId`, `sceneId`): `undefined` \| [`scenesTableEntry`](../interfaces/index._internal_.scenesTableEntry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](exports_datatype.GroupId.md) |
| `sceneId` | `number` |

#### Returns

`undefined` \| [`scenesTableEntry`](../interfaces/index._internal_.scenesTableEntry.md)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/ScenesServer.d.ts:35

___

### removeAllNonGlobalScenesForEndpoint

▸ `Static` **removeAllNonGlobalScenesForEndpoint**(`fabric`, `endpointId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `endpointId` | `number` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/ScenesServer.d.ts:39

___

### removeAllScenesForGroup

▸ `Static` **removeAllScenesForGroup**(`fabric`, `endpointId`, `groupId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `endpointId` | `number` |
| `groupId` | `number` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/ScenesServer.d.ts:38

___

### removeScene

▸ `Static` **removeScene**(`fabric`, `endpointId`, `groupId`, `sceneId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](exports_datatype.GroupId.md) |
| `sceneId` | `number` |

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/ScenesServer.d.ts:37

___

### setEndpointScenes

▸ `Static` **setEndpointScenes**(`fabric`, `endpointId`, `endpointScenes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `endpointId` | `number` |
| `endpointScenes` | `Map`<`number`, `Map`<`number`, [`scenesTableEntry`](../interfaces/index._internal_.scenesTableEntry.md)\>\> |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/ScenesServer.d.ts:33

___

### setScenes

▸ `Static` **setScenes**(`fabric`, `endpointId`, `sceneEntries`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `endpointId` | `number` |
| `sceneEntries` | [`scenesTableEntry`](../interfaces/index._internal_.scenesTableEntry.md)[] |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/ScenesServer.d.ts:34
