[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / net/export

# Module: net/export

## Table of contents

### Modules

- [\<internal\>](net_export._internal_.md)

### Enumerations

- [InterfaceType](../enums/net_export.InterfaceType.md)

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
- [NetworkInterface](net_export.md#networkinterface)
- [NetworkInterfaceDetailed](net_export.md#networkinterfacedetailed)
- [NetworkInterfaceDetails](net_export.md#networkinterfacedetails)

### Variables

- [FAKE\_INTERFACE\_NAME](net_export.md#fake_interface_name)

### Functions

- [isNetworkInterface](net_export.md#isnetworkinterface)

## Type Aliases

### ListenerFunc

Ƭ **ListenerFunc**: (`netInterface`: `string`, `peerAddress`: `string`, `peerPort`: `number`, `data`: [`ByteArray`](util_export.md#bytearray)) => `void`

#### Type declaration

▸ (`netInterface`, `peerAddress`, `peerPort`, `data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface` | `string` |
| `peerAddress` | `string` |
| `peerPort` | `number` |
| `data` | [`ByteArray`](util_export.md#bytearray) |

##### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/net/fake/SimulatedNetwork.d.ts:8

___

### NetworkInterface

Ƭ **NetworkInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `type?` | [`InterfaceType`](../enums/net_export.InterfaceType.md) |

#### Defined in

packages/matter.js/dist/esm/net/Network.d.ts:36

___

### NetworkInterfaceDetailed

Ƭ **NetworkInterfaceDetailed**: [`NetworkInterface`](net_export.md#networkinterface) & [`NetworkInterfaceDetails`](net_export.md#networkinterfacedetails)

#### Defined in

packages/matter.js/dist/esm/net/Network.d.ts:45

___

### NetworkInterfaceDetails

Ƭ **NetworkInterfaceDetails**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ipV4` | `string`[] |
| `ipV6` | `string`[] |
| `mac` | `string` |

#### Defined in

packages/matter.js/dist/esm/net/Network.d.ts:40

## Variables

### FAKE\_INTERFACE\_NAME

• `Const` **FAKE\_INTERFACE\_NAME**: ``"fakeInterface"``

#### Defined in

packages/matter.js/dist/esm/net/fake/SimulatedNetwork.d.ts:9

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

packages/matter.js/dist/esm/net/NetInterface.d.ts:16
