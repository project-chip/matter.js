[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / MatterServer

# Class: MatterServer

[export](../modules/export.md).MatterServer

Main Matter server class that represents the process on the host allowing to commission and pair multiple devices
by reusing MDNS scanner and broadcaster

## Table of contents

### Constructors

- [constructor](export.MatterServer.md#constructor)

### Properties

- [mdnsBroadcaster](export.MatterServer.md#mdnsbroadcaster)
- [mdnsScanner](export.MatterServer.md#mdnsscanner)
- [nodes](export.MatterServer.md#nodes)
- [options](export.MatterServer.md#options)
- [storageManager](export.MatterServer.md#storagemanager)

### Accessors

- [ipv4Disabled](export.MatterServer.md#ipv4disabled)

### Methods

- [addCommissioningController](export.MatterServer.md#addcommissioningcontroller)
- [addCommissioningServer](export.MatterServer.md#addcommissioningserver)
- [close](export.MatterServer.md#close)
- [prepareNode](export.MatterServer.md#preparenode)
- [start](export.MatterServer.md#start)

## Constructors

### constructor

• **new MatterServer**(`storageManager`, `options?`)

Create a new Matter server instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `storageManager` | [`StorageManager`](storage_export.StorageManager.md) | Storage manager instance to use for all nodes |
| `options?` | [`MatterServerOptions`](../modules/export.md#matterserveroptions) | Optional MatterServer options |

#### Defined in

packages/matter.js/src/MatterServer.ts:51

## Properties

### mdnsBroadcaster

• `Private` `Optional` **mdnsBroadcaster**: [`MdnsBroadcaster`](mdns_export.MdnsBroadcaster.md)

#### Defined in

packages/matter.js/src/MatterServer.ts:43

___

### mdnsScanner

• `Private` `Optional` **mdnsScanner**: [`MdnsScanner`](mdns_export.MdnsScanner.md)

#### Defined in

packages/matter.js/src/MatterServer.ts:42

___

### nodes

• `Private` `Readonly` **nodes**: [`MatterNode`](export.MatterNode.md)[] = `[]`

#### Defined in

packages/matter.js/src/MatterServer.ts:40

___

### options

• `Private` `Optional` `Readonly` **options**: [`MatterServerOptions`](../modules/export.md#matterserveroptions)

Optional MatterServer options

#### Defined in

packages/matter.js/src/MatterServer.ts:53

___

### storageManager

• `Private` `Readonly` **storageManager**: [`StorageManager`](storage_export.StorageManager.md)

Storage manager instance to use for all nodes

#### Defined in

packages/matter.js/src/MatterServer.ts:52

## Accessors

### ipv4Disabled

• `get` **ipv4Disabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/src/MatterServer.ts:56

## Methods

### addCommissioningController

▸ **addCommissioningController**(`commissioningController`, `nodeOptions?`): `void`

Add a Controller node to the server

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commissioningController` | [`CommissioningController`](export.CommissioningController.md) | Controller node to add |
| `nodeOptions?` | [`NodeOptions`](../modules/export.md#nodeoptions) | Optional options for the node (e.g. unique node id) |

#### Returns

`void`

#### Defined in

packages/matter.js/src/MatterServer.ts:90

___

### addCommissioningServer

▸ **addCommissioningServer**(`commissioningServer`, `nodeOptions?`): `void`

Add a CommissioningServer node to the server

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commissioningServer` | [`CommissioningServer`](export.CommissioningServer.md) | CommissioningServer node to add |
| `nodeOptions?` | [`NodeOptions`](../modules/export.md#nodeoptions) | Optional options for the node (e.g. unique node id) |

#### Returns

`void`

#### Defined in

packages/matter.js/src/MatterServer.ts:66

___

### close

▸ **close**(): `Promise`<`void`\>

Close the server and all nodes

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/MatterServer.ts:132

___

### prepareNode

▸ `Private` **prepareNode**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`MatterNode`](export.MatterNode.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/src/MatterServer.ts:119

___

### start

▸ **start**(): `Promise`<`void`\>

Start the server and all nodes. If the nodes do not have specified a delayed announcement or pairing they will
be announced/paired immediately.

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/MatterServer.ts:102
