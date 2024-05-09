[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / MatterServer

# Class: MatterServer

[export](../modules/export.md).MatterServer

Main Matter server class that represents the process on the host allowing to commission and pair multiple devices
by reusing MDNS scanner and broadcaster

## Table of contents

### Constructors

- [constructor](export.MatterServer.md#constructor)

### Properties

- [formerlyUsedPorts](export.MatterServer.md#formerlyusedports)
- [mdnsBroadcaster](export.MatterServer.md#mdnsbroadcaster)
- [mdnsScanner](export.MatterServer.md#mdnsscanner)
- [nodes](export.MatterServer.md#nodes)
- [options](export.MatterServer.md#options)
- [started](export.MatterServer.md#started)
- [storageManager](export.MatterServer.md#storagemanager)

### Accessors

- [ipv4Disabled](export.MatterServer.md#ipv4disabled)

### Methods

- [addCommissioningController](export.MatterServer.md#addcommissioningcontroller)
- [addCommissioningServer](export.MatterServer.md#addcommissioningserver)
- [close](export.MatterServer.md#close)
- [getNextMatterPort](export.MatterServer.md#getnextmatterport)
- [prepareNode](export.MatterServer.md#preparenode)
- [removeCommissioningController](export.MatterServer.md#removecommissioningcontroller)
- [removeCommissioningServer](export.MatterServer.md#removecommissioningserver)
- [start](export.MatterServer.md#start)

## Constructors

### constructor

• **new MatterServer**(`storageManager`, `options?`): [`MatterServer`](export.MatterServer.md)

Create a new Matter server instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `storageManager` | [`StorageManager`](storage_export.StorageManager.md)\<[`SyncStorage`](storage_export.SyncStorage.md)\> | Storage manager instance to use for all nodes |
| `options?` | [`MatterServerOptions`](../modules/export.md#matterserveroptions) | Optional MatterServer options |

#### Returns

[`MatterServer`](export.MatterServer.md)

#### Defined in

[packages/matter.js/src/MatterServer.ts:69](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterServer.ts#L69)

## Properties

### formerlyUsedPorts

• `Private` `Readonly` **formerlyUsedPorts**: `number`[]

#### Defined in

[packages/matter.js/src/MatterServer.ts:61](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterServer.ts#L61)

___

### mdnsBroadcaster

• `Private` `Optional` **mdnsBroadcaster**: [`MdnsBroadcaster`](mdns_export.MdnsBroadcaster.md)

#### Defined in

[packages/matter.js/src/MatterServer.ts:59](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterServer.ts#L59)

___

### mdnsScanner

• `Private` `Optional` **mdnsScanner**: [`MdnsScanner`](mdns_export.MdnsScanner.md)

#### Defined in

[packages/matter.js/src/MatterServer.ts:58](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterServer.ts#L58)

___

### nodes

• `Private` `Readonly` **nodes**: `Map`\<`string`, [`MatterNode`](export.MatterNode.md)\>

#### Defined in

[packages/matter.js/src/MatterServer.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterServer.ts#L56)

___

### options

• `Private` `Optional` `Readonly` **options**: [`MatterServerOptions`](../modules/export.md#matterserveroptions)

Optional MatterServer options

#### Defined in

[packages/matter.js/src/MatterServer.ts:71](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterServer.ts#L71)

___

### started

• `Private` **started**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/MatterServer.ts:55](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterServer.ts#L55)

___

### storageManager

• `Private` `Readonly` **storageManager**: [`StorageManager`](storage_export.StorageManager.md)\<[`SyncStorage`](storage_export.SyncStorage.md)\>

Storage manager instance to use for all nodes

#### Defined in

[packages/matter.js/src/MatterServer.ts:70](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterServer.ts#L70)

## Accessors

### ipv4Disabled

• `get` **ipv4Disabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/MatterServer.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterServer.ts#L74)

## Methods

### addCommissioningController

▸ **addCommissioningController**(`commissioningController`, `nodeOptions?`): `Promise`\<`void`\>

Add a Controller node to the server

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commissioningController` | [`CommissioningController`](export.CommissioningController.md) | Controller node to add |
| `nodeOptions?` | [`NodeOptions`](../modules/export.md#nodeoptions) | Optional options for the node (e.g. unique node id) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterServer.ts:178](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterServer.ts#L178)

___

### addCommissioningServer

▸ **addCommissioningServer**(`commissioningServer`, `nodeOptions?`): `Promise`\<`void`\>

Add a CommissioningServer node to the server

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commissioningServer` | [`CommissioningServer`](export.CommissioningServer.md) | CommissioningServer node to add |
| `nodeOptions?` | [`NodeOptions`](../modules/export.md#nodeoptions) | Optional options for the node (e.g. unique node id) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterServer.ts:127](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterServer.ts#L127)

___

### close

▸ **close**(): `Promise`\<`void`\>

Close the server and all nodes

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterServer.ts:266](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterServer.ts#L266)

___

### getNextMatterPort

▸ **getNextMatterPort**(`desiredPort?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `desiredPort?` | `number` |

#### Returns

`number`

#### Defined in

[packages/matter.js/src/MatterServer.ts:78](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterServer.ts#L78)

___

### prepareNode

▸ **prepareNode**(`node`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`MatterNode`](export.MatterNode.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterServer.ts:250](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterServer.ts#L250)

___

### removeCommissioningController

▸ **removeCommissioningController**(`commissioningController`, `destroyStorage?`): `Promise`\<`void`\>

Remove a Controller node from the server, close the Controller and optionally destroy the storage context.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `commissioningController` | [`CommissioningController`](export.CommissioningController.md) | `undefined` | Controller node to remove |
| `destroyStorage` | `boolean` | `false` | If true the storage context will be destroyed |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterServer.ts:202](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterServer.ts#L202)

___

### removeCommissioningServer

▸ **removeCommissioningServer**(`commissioningServer`, `destroyStorage?`): `Promise`\<`void`\>

Remove a CommissioningServer node from the server, close the CommissioningServer and optionally destroy the
storage context.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `commissioningServer` | [`CommissioningServer`](export.CommissioningServer.md) | `undefined` | CommissioningServer node to remove |
| `destroyStorage` | `boolean` | `false` | If true the storage context will be destroyed |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterServer.ts:146](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterServer.ts#L146)

___

### start

▸ **start**(): `Promise`\<`void`\>

Start the server and all nodes. If the nodes do not have specified a delayed announcement or pairing they will
be announced/paired immediately.

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterServer.ts:226](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterServer.ts#L226)
