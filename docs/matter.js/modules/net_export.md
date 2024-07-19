[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / net/export

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
- [SimulatedNetwork](../classes/net_export.SimulatedNetwork.md)
- [UdpChannelFake](../classes/net_export.UdpChannelFake.md)
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

[packages/matter.js/src/net/fake/SimulatedNetwork.ts:12](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/net/fake/SimulatedNetwork.ts#L12)

___

### NetworkInterface

Ƭ **NetworkInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `type?` | [`InterfaceType`](../enums/net_export.InterfaceType.md) |

#### Defined in

[packages/matter.js/src/net/Network.ts:43](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/net/Network.ts#L43)

___

### NetworkInterfaceDetailed

Ƭ **NetworkInterfaceDetailed**: [`NetworkInterface`](net_export.md#networkinterface) & [`NetworkInterfaceDetails`](net_export.md#networkinterfacedetails)

#### Defined in

[packages/matter.js/src/net/Network.ts:54](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/net/Network.ts#L54)

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

[packages/matter.js/src/net/Network.ts:48](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/net/Network.ts#L48)

## Variables

### FAKE\_INTERFACE\_NAME

• `Const` **FAKE\_INTERFACE\_NAME**: ``"fakeInterface"``

#### Defined in

[packages/matter.js/src/net/fake/SimulatedNetwork.ts:16](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/net/fake/SimulatedNetwork.ts#L16)

## Functions

### isNetworkInterface

▸ **isNetworkInterface**(`obj`): obj is NetInterface

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`TransportInterface`](../interfaces/common_export.TransportInterface.md) \| [`NetInterface`](../interfaces/net_export.NetInterface.md) |

#### Returns

obj is NetInterface

#### Defined in

[packages/matter.js/src/net/NetInterface.ts:19](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/net/NetInterface.ts#L19)
