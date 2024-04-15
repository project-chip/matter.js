[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / GroupsManager

# Class: GroupsManager

[cluster/export](../modules/cluster_export.md).GroupsManager

## Table of contents

### Constructors

- [constructor](cluster_export.GroupsManager.md#constructor)

### Methods

- [getGroupName](cluster_export.GroupsManager.md#getgroupname)
- [getGroups](cluster_export.GroupsManager.md#getgroups)
- [hasGroup](cluster_export.GroupsManager.md#hasgroup)
- [removeAllGroups](cluster_export.GroupsManager.md#removeallgroups)
- [removeGroup](cluster_export.GroupsManager.md#removegroup)
- [setGroup](cluster_export.GroupsManager.md#setgroup)

## Constructors

### constructor

• **new GroupsManager**(): [`GroupsManager`](cluster_export.GroupsManager.md)

#### Returns

[`GroupsManager`](cluster_export.GroupsManager.md)

## Methods

### getGroupName

▸ **getGroupName**(`fabric`, `endpointId`, `groupId`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](../modules/datatype_export.md#groupid) |

#### Returns

`undefined` \| `string`

#### Defined in

[packages/matter.js/src/cluster/server/GroupsServer.ts:37](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/GroupsServer.ts#L37)

___

### getGroups

▸ **getGroups**(`fabric`, `endpointId`): `Map`\<[`GroupId`](../modules/datatype_export.md#groupid), `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `endpointId` | `number` |

#### Returns

`Map`\<[`GroupId`](../modules/datatype_export.md#groupid), `string`\>

#### Defined in

[packages/matter.js/src/cluster/server/GroupsServer.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/GroupsServer.ts#L53)

___

### hasGroup

▸ **hasGroup**(`fabric`, `endpointId`, `groupId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](../modules/datatype_export.md#groupid) |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/cluster/server/GroupsServer.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/GroupsServer.ts#L45)

___

### removeAllGroups

▸ **removeAllGroups**(`fabric`, `endpointId`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `endpointId` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/cluster/server/GroupsServer.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/GroupsServer.ts#L74)

___

### removeGroup

▸ **removeGroup**(`fabric`, `endpointId`, `groupId`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](../modules/datatype_export.md#groupid) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[packages/matter.js/src/cluster/server/GroupsServer.ts:60](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/GroupsServer.ts#L60)

___

### setGroup

▸ **setGroup**(`fabric`, `endpointId`, `groupId`, `groupName`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](../modules/datatype_export.md#groupid) |
| `groupName` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/cluster/server/GroupsServer.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/GroupsServer.ts#L24)
