[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [net](../modules/net.md) / UdpMulticastServer

# Class: UdpMulticastServer

[net](../modules/net.md).UdpMulticastServer

## Table of contents

### Constructors

- [constructor](net.UdpMulticastServer.md#constructor)

### Properties

- [broadcastAddressIpv4](net.UdpMulticastServer.md#broadcastaddressipv4)
- [broadcastAddressIpv6](net.UdpMulticastServer.md#broadcastaddressipv6)
- [broadcastChannels](net.UdpMulticastServer.md#broadcastchannels)
- [broadcastPort](net.UdpMulticastServer.md#broadcastport)
- [netInterface](net.UdpMulticastServer.md#netinterface)
- [network](net.UdpMulticastServer.md#network)
- [serverIpv4](net.UdpMulticastServer.md#serveripv4)
- [serverIpv6](net.UdpMulticastServer.md#serveripv6)

### Methods

- [close](net.UdpMulticastServer.md#close)
- [createBroadcastChannel](net.UdpMulticastServer.md#createbroadcastchannel)
- [onMessage](net.UdpMulticastServer.md#onmessage)
- [send](net.UdpMulticastServer.md#send)
- [create](net.UdpMulticastServer.md#create)

## Constructors

### constructor

• `Private` **new UdpMulticastServer**(`network`, `broadcastAddressIpv4`, `broadcastAddressIpv6`, `broadcastPort`, `serverIpv4`, `serverIpv6`, `netInterface`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`Network`](net.Network.md) |
| `broadcastAddressIpv4` | `string` |
| `broadcastAddressIpv6` | `string` |
| `broadcastPort` | `number` |
| `serverIpv4` | [`UdpChannel`](../interfaces/net.UdpChannel.md) |
| `serverIpv6` | [`UdpChannel`](../interfaces/net.UdpChannel.md) |
| `netInterface` | `undefined` \| `string` |

#### Defined in

[packages/matter.js/src/net/UdpMulticastServer.ts:39](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/UdpMulticastServer.ts#L39)

## Properties

### broadcastAddressIpv4

• `Private` `Readonly` **broadcastAddressIpv4**: `string`

#### Defined in

[packages/matter.js/src/net/UdpMulticastServer.ts:41](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/UdpMulticastServer.ts#L41)

___

### broadcastAddressIpv6

• `Private` `Readonly` **broadcastAddressIpv6**: `string`

#### Defined in

[packages/matter.js/src/net/UdpMulticastServer.ts:42](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/UdpMulticastServer.ts#L42)

___

### broadcastChannels

• `Private` `Readonly` **broadcastChannels**: [`Cache`](util.Cache.md)<`Promise`<[`UdpChannel`](../interfaces/net.UdpChannel.md)\>\>

#### Defined in

[packages/matter.js/src/net/UdpMulticastServer.ts:37](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/UdpMulticastServer.ts#L37)

___

### broadcastPort

• `Private` `Readonly` **broadcastPort**: `number`

#### Defined in

[packages/matter.js/src/net/UdpMulticastServer.ts:43](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/UdpMulticastServer.ts#L43)

___

### netInterface

• `Private` `Readonly` **netInterface**: `undefined` \| `string`

#### Defined in

[packages/matter.js/src/net/UdpMulticastServer.ts:46](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/UdpMulticastServer.ts#L46)

___

### network

• `Private` `Readonly` **network**: [`Network`](net.Network.md)

#### Defined in

[packages/matter.js/src/net/UdpMulticastServer.ts:40](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/UdpMulticastServer.ts#L40)

___

### serverIpv4

• `Private` `Readonly` **serverIpv4**: [`UdpChannel`](../interfaces/net.UdpChannel.md)

#### Defined in

[packages/matter.js/src/net/UdpMulticastServer.ts:44](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/UdpMulticastServer.ts#L44)

___

### serverIpv6

• `Private` `Readonly` **serverIpv6**: [`UdpChannel`](../interfaces/net.UdpChannel.md)

#### Defined in

[packages/matter.js/src/net/UdpMulticastServer.ts:45](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/UdpMulticastServer.ts#L45)

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/net/UdpMulticastServer.ts:74](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/UdpMulticastServer.ts#L74)

___

### createBroadcastChannel

▸ `Private` **createBroadcastChannel**(`netInterface`, `iPv4`): `Promise`<[`UdpChannel`](../interfaces/net.UdpChannel.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface` | `string` |
| `iPv4` | `string` |

#### Returns

`Promise`<[`UdpChannel`](../interfaces/net.UdpChannel.md)\>

#### Defined in

[packages/matter.js/src/net/UdpMulticastServer.ts:70](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/UdpMulticastServer.ts#L70)

___

### onMessage

▸ **onMessage**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`message`: `Uint8Array`, `peerAddress`: `string`, `netInterface`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/net/UdpMulticastServer.ts:49](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/UdpMulticastServer.ts#L49)

___

### send

▸ **send**(`message`, `netInterface?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Uint8Array` |
| `netInterface?` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/net/UdpMulticastServer.ts:54](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/UdpMulticastServer.ts#L54)

___

### create

▸ `Static` **create**(`«destructured»`): `Promise`<[`UdpMulticastServer`](net.UdpMulticastServer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`UdpMulticastServerOptions`](../interfaces/net.UdpMulticastServerOptions.md) |

#### Returns

`Promise`<[`UdpMulticastServer`](net.UdpMulticastServer.md)\>

#### Defined in

[packages/matter.js/src/net/UdpMulticastServer.ts:24](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/UdpMulticastServer.ts#L24)
