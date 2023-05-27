[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster](../modules/cluster.md) / GroupsManager

# Class: GroupsManager

[cluster](../modules/cluster.md).GroupsManager

## Table of contents

### Constructors

- [constructor](cluster.GroupsManager.md#constructor)

### Methods

- [getGroupName](cluster.GroupsManager.md#getgroupname)
- [getGroups](cluster.GroupsManager.md#getgroups)
- [hasGroup](cluster.GroupsManager.md#hasgroup)
- [removeAllGroups](cluster.GroupsManager.md#removeallgroups)
- [removeGroup](cluster.GroupsManager.md#removegroup)
- [setGroup](cluster.GroupsManager.md#setgroup)

## Constructors

### constructor

• **new GroupsManager**()

## Methods

### getGroupName

▸ `Static` **getGroupName**(`fabric`, `endpointId`, `groupId`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric.Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](datatype.GroupId.md) |

#### Returns

`undefined` \| `string`

#### Defined in

[packages/matter.js/src/cluster/server/GroupsServer.ts:44](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/GroupsServer.ts#L44)

___

### getGroups

▸ `Static` **getGroups**(`fabric`, `endpointId`): `Map`<`number`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric.Fabric.md) |
| `endpointId` | `number` |

#### Returns

`Map`<`number`, `string`\>

#### Defined in

[packages/matter.js/src/cluster/server/GroupsServer.ts:54](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/GroupsServer.ts#L54)

___

### hasGroup

▸ `Static` **hasGroup**(`fabric`, `endpointId`, `groupId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric.Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](datatype.GroupId.md) |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/cluster/server/GroupsServer.ts:49](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/GroupsServer.ts#L49)

___

### removeAllGroups

▸ `Static` **removeAllGroups**(`fabric`, `endpointId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric.Fabric.md) |
| `endpointId` | `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/server/GroupsServer.ts:69](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/GroupsServer.ts#L69)

___

### removeGroup

▸ `Static` **removeGroup**(`fabric`, `endpointId`, `groupId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric.Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](datatype.GroupId.md) |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/cluster/server/GroupsServer.ts:58](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/GroupsServer.ts#L58)

___

### setGroup

▸ `Static` **setGroup**(`fabric`, `endpointId`, `groupId`, `groupName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric.Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](datatype.GroupId.md) |
| `groupName` | `string` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/server/GroupsServer.ts:34](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/GroupsServer.ts#L34)
