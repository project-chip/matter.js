[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster](../modules/cluster.md) / ScenesManager

# Class: ScenesManager

[cluster](../modules/cluster.md).ScenesManager

## Table of contents

### Constructors

- [constructor](cluster.ScenesManager.md#constructor)

### Methods

- [getAllScenes](cluster.ScenesManager.md#getallscenes)
- [getEndpointScenes](cluster.ScenesManager.md#getendpointscenes)
- [getSceneEntry](cluster.ScenesManager.md#getsceneentry)
- [removeAllNonGlobalScenesForEndpoint](cluster.ScenesManager.md#removeallnonglobalscenesforendpoint)
- [removeAllScenesForGroup](cluster.ScenesManager.md#removeallscenesforgroup)
- [removeScene](cluster.ScenesManager.md#removescene)
- [setEndpointScenes](cluster.ScenesManager.md#setendpointscenes)
- [setScenes](cluster.ScenesManager.md#setscenes)

## Constructors

### constructor

• **new ScenesManager**()

## Methods

### getAllScenes

▸ `Static` **getAllScenes**(`fabric`, `endpointId`, `groupId`): [`scenesTableEntry`](../interfaces/index._internal_.scenesTableEntry.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric.Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](datatype.GroupId.md) |

#### Returns

[`scenesTableEntry`](../interfaces/index._internal_.scenesTableEntry.md)[]

#### Defined in

[packages/matter.js/src/cluster/server/ScenesServer.ts:86](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ScenesServer.ts#L86)

___

### getEndpointScenes

▸ `Static` **getEndpointScenes**(`fabric`, `endpointId`): `undefined` \| `Map`<`number`, `Map`<`number`, [`scenesTableEntry`](../interfaces/index._internal_.scenesTableEntry.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric.Fabric.md) |
| `endpointId` | `number` |

#### Returns

`undefined` \| `Map`<`number`, `Map`<`number`, [`scenesTableEntry`](../interfaces/index._internal_.scenesTableEntry.md)\>\>

#### Defined in

[packages/matter.js/src/cluster/server/ScenesServer.ts:54](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ScenesServer.ts#L54)

___

### getSceneEntry

▸ `Static` **getSceneEntry**(`fabric`, `endpointId`, `groupId`, `sceneId`): `undefined` \| [`scenesTableEntry`](../interfaces/index._internal_.scenesTableEntry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric.Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](datatype.GroupId.md) |
| `sceneId` | `number` |

#### Returns

`undefined` \| [`scenesTableEntry`](../interfaces/index._internal_.scenesTableEntry.md)

#### Defined in

[packages/matter.js/src/cluster/server/ScenesServer.ts:82](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ScenesServer.ts#L82)

___

### removeAllNonGlobalScenesForEndpoint

▸ `Static` **removeAllNonGlobalScenesForEndpoint**(`fabric`, `endpointId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric.Fabric.md) |
| `endpointId` | `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/server/ScenesServer.ts:115](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ScenesServer.ts#L115)

___

### removeAllScenesForGroup

▸ `Static` **removeAllScenesForGroup**(`fabric`, `endpointId`, `groupId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric.Fabric.md) |
| `endpointId` | `number` |
| `groupId` | `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/server/ScenesServer.ts:106](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ScenesServer.ts#L106)

___

### removeScene

▸ `Static` **removeScene**(`fabric`, `endpointId`, `groupId`, `sceneId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric.Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](datatype.GroupId.md) |
| `sceneId` | `number` |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/cluster/server/ScenesServer.ts:92](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ScenesServer.ts#L92)

___

### setEndpointScenes

▸ `Static` **setEndpointScenes**(`fabric`, `endpointId`, `endpointScenes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric.Fabric.md) |
| `endpointId` | `number` |
| `endpointScenes` | `Map`<`number`, `Map`<`number`, [`scenesTableEntry`](../interfaces/index._internal_.scenesTableEntry.md)\>\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/server/ScenesServer.ts:58](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ScenesServer.ts#L58)

___

### setScenes

▸ `Static` **setScenes**(`fabric`, `endpointId`, `sceneEntries`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric.Fabric.md) |
| `endpointId` | `number` |
| `sceneEntries` | [`scenesTableEntry`](../interfaces/index._internal_.scenesTableEntry.md)[] |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/server/ScenesServer.ts:62](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ScenesServer.ts#L62)
