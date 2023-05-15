[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / net

# Module: net

## Table of contents

### Classes

- [Network](../classes/net.Network.md)
- [NetworkFake](../classes/net.NetworkFake.md)
- [NetworkNode](../classes/net.NetworkNode.md)
- [SimulatedNetwork](../classes/net.SimulatedNetwork.md)
- [UdpChannelFake](../classes/net.UdpChannelFake.md)
- [UdpChannelNode](../classes/net.UdpChannelNode.md)
- [UdpInterface](../classes/net.UdpInterface.md)
- [UdpMulticastServer](../classes/net.UdpMulticastServer.md)

### Interfaces

- [Channel](../interfaces/net.Channel.md)
- [NetInterface](../interfaces/net.NetInterface.md)
- [NetListener](../interfaces/net.NetListener.md)
- [UdpChannel](../interfaces/net.UdpChannel.md)
- [UdpChannelOptions](../interfaces/net.UdpChannelOptions.md)
- [UdpMulticastServerOptions](../interfaces/net.UdpMulticastServerOptions.md)

### Type Aliases

- [Listener](net.md#listener)

### Variables

- [FAKE\_INTERFACE\_NAME](net.md#fake_interface_name)

## Type Aliases

### Listener

Ƭ **Listener**: (`netInterface`: `string`, `peerAddress`: `string`, `peerPort`: `number`, `data`: [`ByteArray`](util.md#bytearray-1)) => `void`

#### Type declaration

▸ (`netInterface`, `peerAddress`, `peerPort`, `data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface` | `string` |
| `peerAddress` | `string` |
| `peerPort` | `number` |
| `data` | [`ByteArray`](util.md#bytearray-1) |

##### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/net/fake/SimulatedNetwork.d.ts:8

## Variables

### FAKE\_INTERFACE\_NAME

• `Const` **FAKE\_INTERFACE\_NAME**: ``"fakeInterface"``

#### Defined in

packages/matter.js/dist/cjs/net/fake/SimulatedNetwork.d.ts:9
