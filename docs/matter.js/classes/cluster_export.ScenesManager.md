[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / ScenesManager

# Class: ScenesManager

[cluster/export](../modules/cluster_export.md).ScenesManager

## Table of contents

### Constructors

- [constructor](cluster_export.ScenesManager.md#constructor)

### Methods

- [getAllScenes](cluster_export.ScenesManager.md#getallscenes)
- [getEndpointScenes](cluster_export.ScenesManager.md#getendpointscenes)
- [getSceneEntry](cluster_export.ScenesManager.md#getsceneentry)
- [removeAllNonGlobalScenesForEndpoint](cluster_export.ScenesManager.md#removeallnonglobalscenesforendpoint)
- [removeAllScenesForGroup](cluster_export.ScenesManager.md#removeallscenesforgroup)
- [removeScene](cluster_export.ScenesManager.md#removescene)
- [setEndpointScenes](cluster_export.ScenesManager.md#setendpointscenes)
- [setScenes](cluster_export.ScenesManager.md#setscenes)

## Constructors

### constructor

• **new ScenesManager**()

## Methods

### getAllScenes

▸ `Static` **getAllScenes**(`fabric`, `endpointId`, `groupId`): [`scenesTableEntry`](../interfaces/export._internal_.scenesTableEntry.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](../modules/datatype_export.md#groupid) |

#### Returns

[`scenesTableEntry`](../interfaces/export._internal_.scenesTableEntry.md)[]

#### Defined in

packages/matter.js/src/cluster/server/ScenesServer.ts:91

___

### getEndpointScenes

▸ `Static` **getEndpointScenes**(`fabric`, `endpointId`): `undefined` \| `Map`<`number`, `Map`<`number`, [`scenesTableEntry`](../interfaces/export._internal_.scenesTableEntry.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `endpointId` | `number` |

#### Returns

`undefined` \| `Map`<`number`, `Map`<`number`, [`scenesTableEntry`](../interfaces/export._internal_.scenesTableEntry.md)\>\>

#### Defined in

packages/matter.js/src/cluster/server/ScenesServer.ts:44

___

### getSceneEntry

▸ `Static` **getSceneEntry**(`fabric`, `endpointId`, `groupId`, `sceneId`): `undefined` \| [`scenesTableEntry`](../interfaces/export._internal_.scenesTableEntry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](../modules/datatype_export.md#groupid) |
| `sceneId` | `number` |

#### Returns

`undefined` \| [`scenesTableEntry`](../interfaces/export._internal_.scenesTableEntry.md)

#### Defined in

packages/matter.js/src/cluster/server/ScenesServer.ts:82

___

### removeAllNonGlobalScenesForEndpoint

▸ `Static` **removeAllNonGlobalScenesForEndpoint**(`fabric`, `endpointId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `endpointId` | `number` |

#### Returns

`void`

#### Defined in

packages/matter.js/src/cluster/server/ScenesServer.ts:120

___

### removeAllScenesForGroup

▸ `Static` **removeAllScenesForGroup**(`fabric`, `endpointId`, `groupId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `endpointId` | `number` |
| `groupId` | `number` |

#### Returns

`void`

#### Defined in

packages/matter.js/src/cluster/server/ScenesServer.ts:111

___

### removeScene

▸ `Static` **removeScene**(`fabric`, `endpointId`, `groupId`, `sceneId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](../modules/datatype_export.md#groupid) |
| `sceneId` | `number` |

#### Returns

`boolean`

#### Defined in

packages/matter.js/src/cluster/server/ScenesServer.ts:97

___

### setEndpointScenes

▸ `Static` **setEndpointScenes**(`fabric`, `endpointId`, `endpointScenes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `endpointId` | `number` |
| `endpointScenes` | `Map`<`number`, `Map`<`number`, [`scenesTableEntry`](../interfaces/export._internal_.scenesTableEntry.md)\>\> |

#### Returns

`void`

#### Defined in

packages/matter.js/src/cluster/server/ScenesServer.ts:54

___

### setScenes

▸ `Static` **setScenes**(`fabric`, `endpointId`, `sceneEntries`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `endpointId` | `number` |
| `sceneEntries` | [`scenesTableEntry`](../interfaces/export._internal_.scenesTableEntry.md)[] |

#### Returns

`void`

#### Defined in

packages/matter.js/src/cluster/server/ScenesServer.ts:62
