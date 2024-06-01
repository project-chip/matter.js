[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/cluster](../README.md) / GroupsManager

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
| `fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](../../datatype/README.md#groupid) |

#### Returns

`undefined` \| `string`

#### Source

packages/matter.js/dist/esm/cluster/server/GroupsServer.d.ts:12

***

### getGroups()

> `static` **getGroups**(`fabric`, `endpointId`): `Map`\<[`GroupId`](../../datatype/README.md#groupid), `string`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |
| `endpointId` | `number` |

#### Returns

`Map`\<[`GroupId`](../../datatype/README.md#groupid), `string`\>

#### Source

packages/matter.js/dist/esm/cluster/server/GroupsServer.d.ts:14

***

### hasGroup()

> `static` **hasGroup**(`fabric`, `endpointId`, `groupId`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](../../datatype/README.md#groupid) |

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/cluster/server/GroupsServer.d.ts:13

***

### removeAllGroups()

> `static` **removeAllGroups**(`fabric`, `endpointId`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |
| `endpointId` | `number` |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/cluster/server/GroupsServer.d.ts:16

***

### removeGroup()

> `static` **removeGroup**(`fabric`, `endpointId`, `groupId`): `Promise`\<`boolean`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](../../datatype/README.md#groupid) |

#### Returns

`Promise`\<`boolean`\>

#### Source

packages/matter.js/dist/esm/cluster/server/GroupsServer.d.ts:15

***

### setGroup()

> `static` **setGroup**(`fabric`, `endpointId`, `groupId`, `groupName`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |
| `endpointId` | `number` |
| `groupId` | [`GroupId`](../../datatype/README.md#groupid) |
| `groupName` | `string` |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/cluster/server/GroupsServer.d.ts:11
