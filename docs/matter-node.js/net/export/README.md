[**@project-chip/matter-node.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../modules.md) / net/export

# net/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Enumerations

- [InterfaceType](enumerations/InterfaceType.md)

### Classes

- [Network](classes/Network.md)
- [NetworkError](classes/NetworkError.md)
- [NetworkFake](classes/NetworkFake.md)
- [NetworkNode](classes/NetworkNode.md)
- [SimulatedNetwork](classes/SimulatedNetwork.md)
- [UdpChannelFake](classes/UdpChannelFake.md)
- [UdpChannelNode](classes/UdpChannelNode.md)
- [UdpInterface](classes/UdpInterface.md)
- [UdpMulticastServer](classes/UdpMulticastServer.md)

### Interfaces

- [NetInterface](interfaces/NetInterface.md)
- [UdpChannel](interfaces/UdpChannel.md)
- [UdpChannelOptions](interfaces/UdpChannelOptions.md)
- [UdpMulticastServerOptions](interfaces/UdpMulticastServerOptions.md)

## Type Aliases

### ListenerFunc()

> **ListenerFunc**: (`netInterface`, `peerAddress`, `peerPort`, `data`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `netInterface` | `string` |
| `peerAddress` | `string` |
| `peerPort` | `number` |
| `data` | [`ByteArray`](../../util/export/README.md#bytearray) |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/net/fake/SimulatedNetwork.d.ts:8

***

### NetworkInterface

> **NetworkInterface**: `object`

#### Type declaration

##### name

> **name**: `string`

##### type?

> `optional` **type**: [`InterfaceType`](enumerations/InterfaceType.md)

#### Source

packages/matter.js/dist/esm/net/Network.d.ts:36

***

### NetworkInterfaceDetailed

> **NetworkInterfaceDetailed**: [`NetworkInterface`](README.md#networkinterface) & [`NetworkInterfaceDetails`](README.md#networkinterfacedetails)

#### Source

packages/matter.js/dist/esm/net/Network.d.ts:45

***

### NetworkInterfaceDetails

> **NetworkInterfaceDetails**: `object`

#### Type declaration

##### ipV4

> **ipV4**: `string`[]

##### ipV6

> **ipV6**: `string`[]

##### mac

> **mac**: `string`

#### Source

packages/matter.js/dist/esm/net/Network.d.ts:40

## Variables

### FAKE\_INTERFACE\_NAME

> `const` **FAKE\_INTERFACE\_NAME**: `"fakeInterface"` = `"fakeInterface"`

#### Source

packages/matter.js/dist/esm/net/fake/SimulatedNetwork.d.ts:9

## Functions

### isNetworkInterface()

> **isNetworkInterface**(`obj`): `obj is NetInterface`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `obj` | [`TransportInterface`](../../exports/common/interfaces/TransportInterface.md) \| [`NetInterface`](interfaces/NetInterface.md) |

#### Returns

`obj is NetInterface`

#### Source

packages/matter.js/dist/esm/net/NetInterface.d.ts:16
