[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / MatterServer

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
- [storageManager](export.MatterServer.md#storagemanager)

### Methods

- [addCommissioningController](export.MatterServer.md#addcommissioningcontroller)
- [addCommissioningServer](export.MatterServer.md#addcommissioningserver)
- [close](export.MatterServer.md#close)
- [prepareNode](export.MatterServer.md#preparenode)
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

[packages/matter.js/src/MatterServer.ts:42](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterServer.ts#L42)

## Properties

### mdnsAnnounceInterface

• `Private` `Optional` **mdnsAnnounceInterface**: `string`

Optional interface to use for MDNS announcements. If not provided announcements will
                             be sent from all network interfaces

#### Defined in

[packages/matter.js/src/MatterServer.ts:44](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterServer.ts#L44)

___

### mdnsBroadcaster

• `Private` `Optional` **mdnsBroadcaster**: [`MdnsBroadcaster`](mdns_export.MdnsBroadcaster.md)

#### Defined in

[packages/matter.js/src/MatterServer.ts:33](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterServer.ts#L33)

___

### mdnsScanner

• `Private` `Optional` **mdnsScanner**: [`MdnsScanner`](mdns_export.MdnsScanner.md)

#### Defined in

[packages/matter.js/src/MatterServer.ts:32](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterServer.ts#L32)

___

### nodes

• `Private` `Readonly` **nodes**: [`MatterNode`](export.MatterNode.md)[] = `[]`

#### Defined in

[packages/matter.js/src/MatterServer.ts:30](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterServer.ts#L30)

___

### storageManager

• `Private` **storageManager**: [`StorageManager`](storage_export.StorageManager.md)

Storage manager instance to use for all nodes

#### Defined in

[packages/matter.js/src/MatterServer.ts:43](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterServer.ts#L43)

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

[packages/matter.js/src/MatterServer.ts:77](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterServer.ts#L77)

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

[packages/matter.js/src/MatterServer.ts:53](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterServer.ts#L53)

___

### close

▸ **close**(): `Promise`<`void`\>

Close the server and all nodes

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/MatterServer.ts:115](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterServer.ts#L115)

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

[packages/matter.js/src/MatterServer.ts:103](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterServer.ts#L103)

___

### start

▸ **start**(): `Promise`<`void`\>

Start the server and all nodes. If the nodes do not have specified a delayed announcement or pairing they will
be announced/paired immediately.

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/MatterServer.ts:89](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterServer.ts#L89)
