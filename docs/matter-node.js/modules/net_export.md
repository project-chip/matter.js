[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / net/export

# Module: net/export

## Table of contents

### Classes

- [Network](../classes/net_export.Network.md)
- [NetworkError](../classes/net_export.NetworkError.md)
- [NetworkFake](../classes/net_export.NetworkFake.md)
- [NetworkNode](../classes/net_export.NetworkNode.md)
- [SimulatedNetwork](../classes/net_export.SimulatedNetwork.md)
- [UdpChannelFake](../classes/net_export.UdpChannelFake.md)
- [UdpChannelNode](../classes/net_export.UdpChannelNode.md)
- [UdpInterface](../classes/net_export.UdpInterface.md)
- [UdpMulticastServer](../classes/net_export.UdpMulticastServer.md)

### Interfaces

- [NetInterface](../interfaces/net_export.NetInterface.md)
- [UdpChannel](../interfaces/net_export.UdpChannel.md)
- [UdpChannelOptions](../interfaces/net_export.UdpChannelOptions.md)
- [UdpMulticastServerOptions](../interfaces/net_export.UdpMulticastServerOptions.md)

### Type Aliases

- [ListenerFunc](net_export.md#listenerfunc)

### Variables

- [FAKE\_INTERFACE\_NAME](net_export.md#fake_interface_name)

### Functions

- [isNetworkInterface](net_export.md#isnetworkinterface)

## Type Aliases

### ListenerFunc

Ƭ **ListenerFunc**: (`netInterface`: `string`, `peerAddress`: `string`, `peerPort`: `number`, `data`: [`ByteArray`](util_export.md#bytearray-1)) => `void`

#### Type declaration

▸ (`netInterface`, `peerAddress`, `peerPort`, `data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface` | `string` |
| `peerAddress` | `string` |
| `peerPort` | `number` |
| `data` | [`ByteArray`](util_export.md#bytearray-1) |

##### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/net/fake/SimulatedNetwork.d.ts:8

## Variables

### FAKE\_INTERFACE\_NAME

• `Const` **FAKE\_INTERFACE\_NAME**: ``"fakeInterface"``

#### Defined in

packages/matter.js/dist/cjs/net/fake/SimulatedNetwork.d.ts:9

## Functions

### isNetworkInterface

▸ **isNetworkInterface**(`obj`): obj is NetInterface

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`TransportInterface`](../interfaces/exports_common.TransportInterface.md) \| [`NetInterface`](../interfaces/net_export.NetInterface.md) |

#### Returns

obj is NetInterface

#### Defined in

packages/matter.js/dist/cjs/net/NetInterface.d.ts:16
