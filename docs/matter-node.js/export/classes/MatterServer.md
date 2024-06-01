[**@project-chip/matter-node.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../modules.md) / [export](../README.md) / MatterServer

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

packages/matter.js/dist/esm/MatterServer.d.ts:53

## Properties

### formerlyUsedPorts

> `private` `readonly` **formerlyUsedPorts**: `any`

#### Source

packages/matter.js/dist/esm/MatterServer.d.ts:46

***

### getNextMatterPort

> `private` **getNextMatterPort**: `any`

#### Source

packages/matter.js/dist/esm/MatterServer.d.ts:55

***

### mdnsBroadcaster?

> `private` `optional` **mdnsBroadcaster**: `any`

#### Source

packages/matter.js/dist/esm/MatterServer.d.ts:45

***

### mdnsScanner?

> `private` `optional` **mdnsScanner**: `any`

#### Source

packages/matter.js/dist/esm/MatterServer.d.ts:44

***

### nodes

> `private` `readonly` **nodes**: `any`

#### Source

packages/matter.js/dist/esm/MatterServer.d.ts:43

***

### options?

> `private` `optional` `readonly` **options**: `any`

#### Source

packages/matter.js/dist/esm/MatterServer.d.ts:41

***

### prepareNode

> `private` **prepareNode**: `any`

#### Source

packages/matter.js/dist/esm/MatterServer.d.ts:90

***

### started

> `private` **started**: `any`

#### Source

packages/matter.js/dist/esm/MatterServer.d.ts:42

***

### storageManager

> `private` `readonly` **storageManager**: `any`

#### Source

packages/matter.js/dist/esm/MatterServer.d.ts:40

## Accessors

### ipv4Disabled

> `get` **ipv4Disabled**(): `boolean`

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/MatterServer.d.ts:54

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

packages/matter.js/dist/esm/MatterServer.d.ts:77

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

packages/matter.js/dist/esm/MatterServer.d.ts:62

***

### close()

> **close**(): `Promise`\<`void`\>

Close the server and all nodes

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/MatterServer.d.ts:94

***

### removeCommissioningController()

> **removeCommissioningController**(`commissioningController`, `destroyStorage`?): `Promise`\<`void`\>

Remove a Controller node from the server, close the Controller and optionally destroy the storage context.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `commissioningController` | [`CommissioningController`](CommissioningController.md) | Controller node to remove |
| `destroyStorage`? | `boolean` | If true the storage context will be destroyed |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/MatterServer.d.ts:84

***

### removeCommissioningServer()

> **removeCommissioningServer**(`commissioningServer`, `destroyStorage`?): `Promise`\<`void`\>

Remove a CommissioningServer node from the server, close the CommissioningServer and optionally destroy the
storage context.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `commissioningServer` | [`CommissioningServer`](CommissioningServer.md) | CommissioningServer node to remove |
| `destroyStorage`? | `boolean` | If true the storage context will be destroyed |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/MatterServer.d.ts:70

***

### start()

> **start**(): `Promise`\<`void`\>

Start the server and all nodes. If the nodes do not have specified a delayed announcement or pairing they will
be announced/paired immediately.

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/MatterServer.d.ts:89
