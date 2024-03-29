[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / MatterServer

# Class: MatterServer

[export](../modules/export.md).MatterServer

Main Matter server class that represents the process on the host allowing to commission and pair multiple devices
by reusing MDNS scanner and broadcaster

## Table of contents

### Constructors

- [constructor](export.MatterServer.md#constructor)

### Properties

- [formerlyUsedPorts](export.MatterServer.md#formerlyusedports)
- [getNextMatterPort](export.MatterServer.md#getnextmatterport)
- [mdnsBroadcaster](export.MatterServer.md#mdnsbroadcaster)
- [mdnsScanner](export.MatterServer.md#mdnsscanner)
- [nodes](export.MatterServer.md#nodes)
- [options](export.MatterServer.md#options)
- [prepareNode](export.MatterServer.md#preparenode)
- [started](export.MatterServer.md#started)
- [storageManager](export.MatterServer.md#storagemanager)

### Accessors

- [ipv4Disabled](export.MatterServer.md#ipv4disabled)

### Methods

- [addCommissioningController](export.MatterServer.md#addcommissioningcontroller)
- [addCommissioningServer](export.MatterServer.md#addcommissioningserver)
- [close](export.MatterServer.md#close)
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

packages/matter.js/dist/esm/MatterServer.d.ts:53

## Properties

### formerlyUsedPorts

• `Private` `Readonly` **formerlyUsedPorts**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterServer.d.ts:46

___

### getNextMatterPort

• `Private` **getNextMatterPort**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterServer.d.ts:55

___

### mdnsBroadcaster

• `Private` `Optional` **mdnsBroadcaster**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterServer.d.ts:45

___

### mdnsScanner

• `Private` `Optional` **mdnsScanner**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterServer.d.ts:44

___

### nodes

• `Private` `Readonly` **nodes**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterServer.d.ts:43

___

### options

• `Private` `Optional` `Readonly` **options**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterServer.d.ts:41

___

### prepareNode

• `Private` **prepareNode**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterServer.d.ts:90

___

### started

• `Private` **started**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterServer.d.ts:42

___

### storageManager

• `Private` `Readonly` **storageManager**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterServer.d.ts:40

## Accessors

### ipv4Disabled

• `get` **ipv4Disabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/MatterServer.d.ts:54

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

packages/matter.js/dist/esm/MatterServer.d.ts:77

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

packages/matter.js/dist/esm/MatterServer.d.ts:62

___

### close

▸ **close**(): `Promise`\<`void`\>

Close the server and all nodes

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterServer.d.ts:94

___

### removeCommissioningController

▸ **removeCommissioningController**(`commissioningController`, `destroyStorage?`): `Promise`\<`void`\>

Remove a Controller node from the server, close the Controller and optionally destroy the storage context.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commissioningController` | [`CommissioningController`](export.CommissioningController.md) | Controller node to remove |
| `destroyStorage?` | `boolean` | If true the storage context will be destroyed |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterServer.d.ts:84

___

### removeCommissioningServer

▸ **removeCommissioningServer**(`commissioningServer`, `destroyStorage?`): `Promise`\<`void`\>

Remove a CommissioningServer node from the server, close the CommissioningServer and optionally destroy the
storage context.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commissioningServer` | [`CommissioningServer`](export.CommissioningServer.md) | CommissioningServer node to remove |
| `destroyStorage?` | `boolean` | If true the storage context will be destroyed |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterServer.d.ts:70

___

### start

▸ **start**(): `Promise`\<`void`\>

Start the server and all nodes. If the nodes do not have specified a delayed announcement or pairing they will
be announced/paired immediately.

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterServer.d.ts:89
