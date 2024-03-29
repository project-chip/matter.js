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

• **new GroupsManager**(): [`GroupsManager`](exports_cluster.GroupsManager.md)

#### Returns

[`GroupsManager`](exports_cluster.GroupsManager.md)

## Methods

### getGroupName

▸ **getGroupName**(`fabric`, `endpointId`, `groupId`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](../modules/exports_datatype.md#groupid) |

#### Returns

`undefined` \| `string`

#### Defined in

packages/matter.js/dist/esm/cluster/server/GroupsServer.d.ts:12

___

### getGroups

▸ **getGroups**(`fabric`, `endpointId`): `Map`\<[`GroupId`](../modules/exports_datatype.md#groupid), `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `endpointId` | `number` |

#### Returns

`Map`\<[`GroupId`](../modules/exports_datatype.md#groupid), `string`\>

#### Defined in

packages/matter.js/dist/esm/cluster/server/GroupsServer.d.ts:14

___

### hasGroup

▸ **hasGroup**(`fabric`, `endpointId`, `groupId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](../modules/exports_datatype.md#groupid) |

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/cluster/server/GroupsServer.d.ts:13

___

### removeAllGroups

▸ **removeAllGroups**(`fabric`, `endpointId`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `endpointId` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/cluster/server/GroupsServer.d.ts:16

___

### removeGroup

▸ **removeGroup**(`fabric`, `endpointId`, `groupId`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](../modules/exports_datatype.md#groupid) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

packages/matter.js/dist/esm/cluster/server/GroupsServer.d.ts:15

___

### setGroup

▸ **setGroup**(`fabric`, `endpointId`, `groupId`, `groupName`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](../modules/exports_datatype.md#groupid) |
| `groupName` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/cluster/server/GroupsServer.d.ts:11
