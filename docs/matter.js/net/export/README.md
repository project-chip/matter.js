[**@project-chip/matter.js**](../../README.md) • **Docs**

***

[@project-chip/matter.js](../../modules.md) / net/export

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
- [SimulatedNetwork](classes/SimulatedNetwork.md)
- [UdpChannelFake](classes/UdpChannelFake.md)
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

[packages/matter.js/src/net/fake/SimulatedNetwork.ts:12](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/fake/SimulatedNetwork.ts#L12)

***

### NetworkInterface

> **NetworkInterface**: `object`

#### Type declaration

##### name

> **name**: `string`

##### type?

> `optional` **type**: [`InterfaceType`](enumerations/InterfaceType.md)

#### Source

[packages/matter.js/src/net/Network.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/Network.ts#L43)

***

### NetworkInterfaceDetailed

> **NetworkInterfaceDetailed**: [`NetworkInterface`](README.md#networkinterface) & [`NetworkInterfaceDetails`](README.md#networkinterfacedetails)

#### Source

[packages/matter.js/src/net/Network.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/Network.ts#L54)

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

[packages/matter.js/src/net/Network.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/Network.ts#L48)

## Variables

### FAKE\_INTERFACE\_NAME

> `const` **FAKE\_INTERFACE\_NAME**: `"fakeInterface"` = `"fakeInterface"`

#### Source

[packages/matter.js/src/net/fake/SimulatedNetwork.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/fake/SimulatedNetwork.ts#L16)

## Functions

### isNetworkInterface()

> **isNetworkInterface**(`obj`): `obj is NetInterface`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `obj` | [`TransportInterface`](../../common/export/interfaces/TransportInterface.md) \| [`NetInterface`](interfaces/NetInterface.md) |

#### Returns

`obj is NetInterface`

#### Source

[packages/matter.js/src/net/NetInterface.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/NetInterface.ts#L19)
