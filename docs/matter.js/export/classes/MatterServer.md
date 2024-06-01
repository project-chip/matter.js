[**@project-chip/matter.js**](../../README.md) • **Docs**

***

[@project-chip/matter.js](../../modules.md) / [export](../README.md) / MatterServer

# Class: MatterServer

Main Matter server class that represents the process on the host allowing to commission and pair multiple devices
by reusing MDNS scanner and broadcaster

## Constructors

### new MatterServer()

> **new MatterServer**(`storageManager`, `options`?): [`MatterServer`](MatterServer.md)

Create a new Matter server instance

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `storageManager` | [`StorageManager`](../../storage/export/classes/StorageManager.md)\<[`SyncStorage`](../../storage/export/classes/SyncStorage.md)\> | Storage manager instance to use for all nodes |
| `options`? | [`MatterServerOptions`](../README.md#matterserveroptions) | Optional MatterServer options |

#### Returns

[`MatterServer`](MatterServer.md)

#### Source

[packages/matter.js/src/MatterServer.ts:69](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterServer.ts#L69)

## Properties

### formerlyUsedPorts

> `private` `readonly` **formerlyUsedPorts**: `number`[]

#### Source

[packages/matter.js/src/MatterServer.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterServer.ts#L61)

***

### mdnsBroadcaster?

> `private` `optional` **mdnsBroadcaster**: [`MdnsBroadcaster`](../../mdns/export/classes/MdnsBroadcaster.md)

#### Source

[packages/matter.js/src/MatterServer.ts:59](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterServer.ts#L59)

***

### mdnsScanner?

> `private` `optional` **mdnsScanner**: [`MdnsScanner`](../../mdns/export/classes/MdnsScanner.md)

#### Source

[packages/matter.js/src/MatterServer.ts:58](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterServer.ts#L58)

***

### nodes

> `private` `readonly` **nodes**: `Map`\<`string`, [`MatterNode`](MatterNode.md)\>

#### Source

[packages/matter.js/src/MatterServer.ts:56](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterServer.ts#L56)

***

### options?

> `private` `optional` `readonly` **options**: [`MatterServerOptions`](../README.md#matterserveroptions)

Optional MatterServer options

#### Source

[packages/matter.js/src/MatterServer.ts:71](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterServer.ts#L71)

***

### started

> `private` **started**: `boolean` = `false`

#### Source

[packages/matter.js/src/MatterServer.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterServer.ts#L55)

***

### storageManager

> `private` `readonly` **storageManager**: [`StorageManager`](../../storage/export/classes/StorageManager.md)\<[`SyncStorage`](../../storage/export/classes/SyncStorage.md)\>

Storage manager instance to use for all nodes

#### Source

[packages/matter.js/src/MatterServer.ts:70](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterServer.ts#L70)

## Accessors

### ipv4Disabled

> `get` **ipv4Disabled**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter.js/src/MatterServer.ts:74](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterServer.ts#L74)

## Methods

### addCommissioningController()

> **addCommissioningController**(`commissioningController`, `nodeOptions`?): `Promise`\<`void`\>

Add a Controller node to the server

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `commissioningController` | [`CommissioningController`](CommissioningController.md) | Controller node to add |
| `nodeOptions`? | [`NodeOptions`](../README.md#nodeoptions) | Optional options for the node (e.g. unique node id) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/MatterServer.ts:178](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterServer.ts#L178)

***

### addCommissioningServer()

> **addCommissioningServer**(`commissioningServer`, `nodeOptions`?): `Promise`\<`void`\>

Add a CommissioningServer node to the server

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `commissioningServer` | [`CommissioningServer`](CommissioningServer.md) | CommissioningServer node to add |
| `nodeOptions`? | [`NodeOptions`](../README.md#nodeoptions) | Optional options for the node (e.g. unique node id) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/MatterServer.ts:127](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterServer.ts#L127)

***

### close()

> **close**(): `Promise`\<`void`\>

Close the server and all nodes

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/MatterServer.ts:266](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterServer.ts#L266)

***

### getNextMatterPort()

> `private` **getNextMatterPort**(`desiredPort`?): `number`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `desiredPort`? | `number` |

#### Returns

`number`

#### Source

[packages/matter.js/src/MatterServer.ts:78](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterServer.ts#L78)

***

### prepareNode()

> `private` **prepareNode**(`node`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `node` | [`MatterNode`](MatterNode.md) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/MatterServer.ts:250](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterServer.ts#L250)

***

### removeCommissioningController()

> **removeCommissioningController**(`commissioningController`, `destroyStorage`): `Promise`\<`void`\>

Remove a Controller node from the server, close the Controller and optionally destroy the storage context.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `commissioningController` | [`CommissioningController`](CommissioningController.md) | `undefined` | Controller node to remove |
| `destroyStorage` | `boolean` | `false` | If true the storage context will be destroyed |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/MatterServer.ts:202](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterServer.ts#L202)

***

### removeCommissioningServer()

> **removeCommissioningServer**(`commissioningServer`, `destroyStorage`): `Promise`\<`void`\>

Remove a CommissioningServer node from the server, close the CommissioningServer and optionally destroy the
storage context.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `commissioningServer` | [`CommissioningServer`](CommissioningServer.md) | `undefined` | CommissioningServer node to remove |
| `destroyStorage` | `boolean` | `false` | If true the storage context will be destroyed |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/MatterServer.ts:146](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterServer.ts#L146)

***

### start()

> **start**(): `Promise`\<`void`\>

Start the server and all nodes. If the nodes do not have specified a delayed announcement or pairing they will
be announced/paired immediately.

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/MatterServer.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterServer.ts#L226)
