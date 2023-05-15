[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / MatterServer

# Class: MatterServer

[index](../modules/index.md).MatterServer

Main Matter server class that represents the process on the host allowing to commission and pair multiple devices
by reusing MDNS scanner and Broadcaster

## Table of contents

### Constructors

- [constructor](index.MatterServer.md#constructor)

### Properties

- [mdnsAnnounceInterface](index.MatterServer.md#mdnsannounceinterface)
- [nodes](index.MatterServer.md#nodes)
- [storageManager](index.MatterServer.md#storagemanager)

### Methods

- [addCommissioningController](index.MatterServer.md#addcommissioningcontroller)
- [addCommissioningServer](index.MatterServer.md#addcommissioningserver)
- [close](index.MatterServer.md#close)
- [start](index.MatterServer.md#start)

## Constructors

### constructor

• **new MatterServer**(`storageManager`, `mdnsAnnounceInterface?`)

Create a new Matter server instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `storageManager` | [`StorageManager`](storage.StorageManager.md) | Storage manager instance to use for all nodes |
| `mdnsAnnounceInterface?` | `string` | Optional interface to use for MDNS announcements. If not provided announcements will be sent from all network interfaces |

#### Defined in

[packages/matter.js/src/MatterServer.ts:30](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterServer.ts#L30)

## Properties

### mdnsAnnounceInterface

• `Private` `Optional` **mdnsAnnounceInterface**: `string`

Optional interface to use for MDNS announcements. If not provided announcements will
                             be sent from all network interfaces

#### Defined in

[packages/matter.js/src/MatterServer.ts:32](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterServer.ts#L32)

___

### nodes

• `Private` `Readonly` **nodes**: [`MatterNode`](index.MatterNode.md)[] = `[]`

#### Defined in

[packages/matter.js/src/MatterServer.ts:21](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterServer.ts#L21)

___

### storageManager

• `Private` **storageManager**: [`StorageManager`](storage.StorageManager.md)

Storage manager instance to use for all nodes

#### Defined in

[packages/matter.js/src/MatterServer.ts:31](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterServer.ts#L31)

## Methods

### addCommissioningController

▸ **addCommissioningController**(`commissioningController`): `void`

Add a Controller node to the server

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commissioningController` | [`CommissioningController`](index.CommissioningController.md) | Controller node to add |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/MatterServer.ts:64](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterServer.ts#L64)

___

### addCommissioningServer

▸ **addCommissioningServer**(`commisioningServer`): `void`

Add a CommissioningServer node to the server

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commisioningServer` | [`CommissioningServer`](index.CommissioningServer.md) | CommissioningServer node to add |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/MatterServer.ts:40](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterServer.ts#L40)

___

### close

▸ **close**(): `Promise`<`void`\>

Close the server and all nodes

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/MatterServer.ts:98](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterServer.ts#L98)

___

### start

▸ **start**(): `Promise`<`void`\>

Start the server and all nodes. If the nodes do not have specified a delayed announcement or pairing they will
be announced/paired immediately.

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/MatterServer.ts:77](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterServer.ts#L77)
