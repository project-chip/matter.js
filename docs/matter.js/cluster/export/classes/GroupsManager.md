[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [cluster/export](../README.md) / GroupsManager

# Class: GroupsManager

## Constructors

### new GroupsManager()

> **new GroupsManager**(): [`GroupsManager`](GroupsManager.md)

#### Returns

[`GroupsManager`](GroupsManager.md)

## Methods

### getGroupName()

> `static` **getGroupName**(`fabric`, `endpointId`, `groupId`): `undefined` \| `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](../../../datatype/export/README.md#groupid) |

#### Returns

`undefined` \| `string`

#### Source

[packages/matter.js/src/cluster/server/GroupsServer.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/GroupsServer.ts#L37)

***

### getGroups()

> `static` **getGroups**(`fabric`, `endpointId`): `Map`\<[`GroupId`](../../../datatype/export/README.md#groupid), `string`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |
| `endpointId` | `number` |

#### Returns

`Map`\<[`GroupId`](../../../datatype/export/README.md#groupid), `string`\>

#### Source

[packages/matter.js/src/cluster/server/GroupsServer.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/GroupsServer.ts#L53)

***

### hasGroup()

> `static` **hasGroup**(`fabric`, `endpointId`, `groupId`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](../../../datatype/export/README.md#groupid) |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/cluster/server/GroupsServer.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/GroupsServer.ts#L45)

***

### removeAllGroups()

> `static` **removeAllGroups**(`fabric`, `endpointId`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |
| `endpointId` | `number` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/cluster/server/GroupsServer.ts:74](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/GroupsServer.ts#L74)

***

### removeGroup()

> `static` **removeGroup**(`fabric`, `endpointId`, `groupId`): `Promise`\<`boolean`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](../../../datatype/export/README.md#groupid) |

#### Returns

`Promise`\<`boolean`\>

#### Source

[packages/matter.js/src/cluster/server/GroupsServer.ts:60](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/GroupsServer.ts#L60)

***

### setGroup()

> `static` **setGroup**(`fabric`, `endpointId`, `groupId`, `groupName`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](../../../datatype/export/README.md#groupid) |
| `groupName` | `string` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/cluster/server/GroupsServer.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/GroupsServer.ts#L24)
