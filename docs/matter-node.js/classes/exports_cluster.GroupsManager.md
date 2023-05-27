[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / GroupsManager

# Class: GroupsManager

[exports/cluster](../modules/exports_cluster.md).GroupsManager

## Table of contents

### Constructors

- [constructor](exports_cluster.GroupsManager.md#constructor)

### Methods

- [getGroupName](exports_cluster.GroupsManager.md#getgroupname)
- [getGroups](exports_cluster.GroupsManager.md#getgroups)
- [hasGroup](exports_cluster.GroupsManager.md#hasgroup)
- [removeAllGroups](exports_cluster.GroupsManager.md#removeallgroups)
- [removeGroup](exports_cluster.GroupsManager.md#removegroup)
- [setGroup](exports_cluster.GroupsManager.md#setgroup)

## Constructors

### constructor

• **new GroupsManager**()

## Methods

### getGroupName

▸ `Static` **getGroupName**(`fabric`, `endpointId`, `groupId`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](exports_datatype.GroupId.md) |

#### Returns

`undefined` \| `string`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/GroupsServer.d.ts:13

___

### getGroups

▸ `Static` **getGroups**(`fabric`, `endpointId`): `Map`<`number`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `endpointId` | `number` |

#### Returns

`Map`<`number`, `string`\>

#### Defined in

packages/matter.js/dist/cjs/cluster/server/GroupsServer.d.ts:15

___

### hasGroup

▸ `Static` **hasGroup**(`fabric`, `endpointId`, `groupId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](exports_datatype.GroupId.md) |

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/GroupsServer.d.ts:14

___

### removeAllGroups

▸ `Static` **removeAllGroups**(`fabric`, `endpointId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `endpointId` | `number` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/GroupsServer.d.ts:17

___

### removeGroup

▸ `Static` **removeGroup**(`fabric`, `endpointId`, `groupId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](exports_datatype.GroupId.md) |

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/GroupsServer.d.ts:16

___

### setGroup

▸ `Static` **setGroup**(`fabric`, `endpointId`, `groupId`, `groupName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](exports_datatype.GroupId.md) |
| `groupName` | `string` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/GroupsServer.d.ts:12
