[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / MatterServer

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
- [prepareNode](export.MatterServer.md#preparenode)
- [storageManager](export.MatterServer.md#storagemanager)

### Accessors

- [ipv4Disabled](export.MatterServer.md#ipv4disabled)

### Methods

- [addCommissioningController](export.MatterServer.md#addcommissioningcontroller)
- [addCommissioningServer](export.MatterServer.md#addcommissioningserver)
- [close](export.MatterServer.md#close)
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

packages/matter.js/dist/esm/MatterServer.d.ts:37

## Properties

### mdnsBroadcaster

• `Private` `Optional` **mdnsBroadcaster**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterServer.d.ts:30

___

### mdnsScanner

• `Private` `Optional` **mdnsScanner**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterServer.d.ts:29

___

### nodes

• `Private` `Readonly` **nodes**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterServer.d.ts:28

___

### options

• `Private` `Optional` `Readonly` **options**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterServer.d.ts:27

___

### prepareNode

• `Private` **prepareNode**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterServer.d.ts:58

___

### storageManager

• `Private` `Readonly` **storageManager**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterServer.d.ts:26

## Accessors

### ipv4Disabled

• `get` **ipv4Disabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/MatterServer.d.ts:38

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

packages/matter.js/dist/esm/MatterServer.d.ts:52

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

packages/matter.js/dist/esm/MatterServer.d.ts:45

___

### close

▸ **close**(): `Promise`<`void`\>

Close the server and all nodes

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterServer.d.ts:62

___

### start

▸ **start**(): `Promise`<`void`\>

Start the server and all nodes. If the nodes do not have specified a delayed announcement or pairing they will
be announced/paired immediately.

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterServer.d.ts:57
