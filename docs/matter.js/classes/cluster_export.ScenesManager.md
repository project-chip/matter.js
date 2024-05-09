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

• **new ScenesManager**(): [`ScenesManager`](cluster_export.ScenesManager.md)

#### Returns

[`ScenesManager`](cluster_export.ScenesManager.md)

## Methods

### getAllScenes

▸ **getAllScenes**(`fabric`, `endpointId`, `groupId`): [`scenesTableEntry`](../interfaces/cluster_export._internal_.scenesTableEntry.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](../modules/datatype_export.md#groupid) |

#### Returns

[`scenesTableEntry`](../interfaces/cluster_export._internal_.scenesTableEntry.md)[]

#### Defined in

[packages/matter.js/src/cluster/server/ScenesServer.ts:90](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/ScenesServer.ts#L90)

___

### getEndpointScenes

▸ **getEndpointScenes**(`fabric`, `endpointId`): `undefined` \| `Map`\<`number`, `Map`\<`number`, [`scenesTableEntry`](../interfaces/cluster_export._internal_.scenesTableEntry.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `endpointId` | `number` |

#### Returns

`undefined` \| `Map`\<`number`, `Map`\<`number`, [`scenesTableEntry`](../interfaces/cluster_export._internal_.scenesTableEntry.md)\>\>

#### Defined in

[packages/matter.js/src/cluster/server/ScenesServer.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/ScenesServer.ts#L43)

___

### getSceneEntry

▸ **getSceneEntry**(`fabric`, `endpointId`, `groupId`, `sceneId`): `undefined` \| [`scenesTableEntry`](../interfaces/cluster_export._internal_.scenesTableEntry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](../modules/datatype_export.md#groupid) |
| `sceneId` | `number` |

#### Returns

`undefined` \| [`scenesTableEntry`](../interfaces/cluster_export._internal_.scenesTableEntry.md)

#### Defined in

[packages/matter.js/src/cluster/server/ScenesServer.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/ScenesServer.ts#L81)

___

### removeAllNonGlobalScenesForEndpoint

▸ **removeAllNonGlobalScenesForEndpoint**(`fabric`, `endpointId`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `endpointId` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/cluster/server/ScenesServer.ts:119](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/ScenesServer.ts#L119)

___

### removeAllScenesForGroup

▸ **removeAllScenesForGroup**(`fabric`, `endpointId`, `groupId`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `endpointId` | `number` |
| `groupId` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/cluster/server/ScenesServer.ts:110](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/ScenesServer.ts#L110)

___

### removeScene

▸ **removeScene**(`fabric`, `endpointId`, `groupId`, `sceneId`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](../modules/datatype_export.md#groupid) |
| `sceneId` | `number` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[packages/matter.js/src/cluster/server/ScenesServer.ts:96](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/ScenesServer.ts#L96)

___

### setEndpointScenes

▸ **setEndpointScenes**(`fabric`, `endpointId`, `endpointScenes`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `endpointId` | `number` |
| `endpointScenes` | `Map`\<`number`, `Map`\<`number`, [`scenesTableEntry`](../interfaces/cluster_export._internal_.scenesTableEntry.md)\>\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/cluster/server/ScenesServer.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/ScenesServer.ts#L53)

___

### setScenes

▸ **setScenes**(`fabric`, `endpointId`, `sceneEntries`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `endpointId` | `number` |
| `sceneEntries` | [`scenesTableEntry`](../interfaces/cluster_export._internal_.scenesTableEntry.md)[] |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/cluster/server/ScenesServer.ts:61](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/ScenesServer.ts#L61)
