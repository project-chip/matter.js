[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / MatterServer

# Class: MatterServer

[export](../modules/export.md).MatterServer

Main Matter server class that represents the process on the host allowing to commission and pair multiple devices
by reusing MDNS scanner and broadcaster

## Table of contents

### Constructors

- [constructor](export.MatterServer.md#constructor)

### Properties

- [mdnsAnnounceInterface](export.MatterServer.md#mdnsannounceinterface)
- [mdnsBroadcaster](export.MatterServer.md#mdnsbroadcaster)
- [mdnsScanner](export.MatterServer.md#mdnsscanner)
- [nodes](export.MatterServer.md#nodes)
- [prepareNode](export.MatterServer.md#preparenode)
- [storageManager](export.MatterServer.md#storagemanager)

### Methods

- [addCommissioningController](export.MatterServer.md#addcommissioningcontroller)
- [addCommissioningServer](export.MatterServer.md#addcommissioningserver)
- [close](export.MatterServer.md#close)
- [start](export.MatterServer.md#start)

## Constructors

### constructor

• **new MatterServer**(`storageManager`, `mdnsAnnounceInterface?`)

Create a new Matter server instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `storageManager` | [`StorageManager`](storage_export.StorageManager.md) | Storage manager instance to use for all nodes |
| `mdnsAnnounceInterface?` | `string` | Optional interface to use for MDNS announcements. If not provided announcements will be sent from all network interfaces |

#### Defined in

packages/matter.js/dist/cjs/MatterServer.d.ts:30

## Properties

### mdnsAnnounceInterface

• `Private` `Optional` **mdnsAnnounceInterface**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterServer.d.ts:19

___

### mdnsBroadcaster

• `Private` `Optional` **mdnsBroadcaster**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterServer.d.ts:22

___

### mdnsScanner

• `Private` `Optional` **mdnsScanner**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterServer.d.ts:21

___

### nodes

• `Private` `Readonly` **nodes**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterServer.d.ts:20

___

### prepareNode

• `Private` **prepareNode**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterServer.d.ts:50

___

### storageManager

• `Private` **storageManager**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterServer.d.ts:18

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

packages/matter.js/dist/cjs/MatterServer.d.ts:44

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

packages/matter.js/dist/cjs/MatterServer.d.ts:37

___

### close

▸ **close**(): `Promise`<`void`\>

Close the server and all nodes

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/MatterServer.d.ts:54

___

### start

▸ **start**(): `Promise`<`void`\>

Start the server and all nodes. If the nodes do not have specified a delayed announcement or pairing they will
be announced/paired immediately.

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/MatterServer.d.ts:49
