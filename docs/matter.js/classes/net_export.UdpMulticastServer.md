[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [net/export](../modules/net_export.md) / UdpMulticastServer

# Class: UdpMulticastServer

[net/export](../modules/net_export.md).UdpMulticastServer

## Table of contents

### Constructors

- [constructor](net_export.UdpMulticastServer.md#constructor)

### Properties

- [broadcastAddressIpv4](net_export.UdpMulticastServer.md#broadcastaddressipv4)
- [broadcastAddressIpv6](net_export.UdpMulticastServer.md#broadcastaddressipv6)
- [broadcastChannels](net_export.UdpMulticastServer.md#broadcastchannels)
- [broadcastPort](net_export.UdpMulticastServer.md#broadcastport)
- [netInterface](net_export.UdpMulticastServer.md#netinterface)
- [network](net_export.UdpMulticastServer.md#network)
- [serverIpv4](net_export.UdpMulticastServer.md#serveripv4)
- [serverIpv6](net_export.UdpMulticastServer.md#serveripv6)

### Methods

- [close](net_export.UdpMulticastServer.md#close)
- [createBroadcastChannel](net_export.UdpMulticastServer.md#createbroadcastchannel)
- [onMessage](net_export.UdpMulticastServer.md#onmessage)
- [send](net_export.UdpMulticastServer.md#send)
- [create](net_export.UdpMulticastServer.md#create)

## Constructors

### constructor

• `Private` **new UdpMulticastServer**(`network`, `broadcastAddressIpv4`, `broadcastAddressIpv6`, `broadcastPort`, `serverIpv4`, `serverIpv6`, `netInterface`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`Network`](net_export.Network.md) |
| `broadcastAddressIpv4` | `string` |
| `broadcastAddressIpv6` | `string` |
| `broadcastPort` | `number` |
| `serverIpv4` | [`UdpChannel`](../interfaces/net_export.UdpChannel.md) |
| `serverIpv6` | [`UdpChannel`](../interfaces/net_export.UdpChannel.md) |
| `netInterface` | `undefined` \| `string` |

#### Defined in

[packages/matter.js/src/net/UdpMulticastServer.ts:48](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/UdpMulticastServer.ts#L48)

## Properties

### broadcastAddressIpv4

• `Private` `Readonly` **broadcastAddressIpv4**: `string`

#### Defined in

[packages/matter.js/src/net/UdpMulticastServer.ts:50](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/UdpMulticastServer.ts#L50)

___

### broadcastAddressIpv6

• `Private` `Readonly` **broadcastAddressIpv6**: `string`

#### Defined in

[packages/matter.js/src/net/UdpMulticastServer.ts:51](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/UdpMulticastServer.ts#L51)

___

### broadcastChannels

• `Private` `Readonly` **broadcastChannels**: [`Cache`](util_export.Cache.md)<`Promise`<[`UdpChannel`](../interfaces/net_export.UdpChannel.md)\>\>

#### Defined in

[packages/matter.js/src/net/UdpMulticastServer.ts:42](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/UdpMulticastServer.ts#L42)

___

### broadcastPort

• `Private` `Readonly` **broadcastPort**: `number`

#### Defined in

[packages/matter.js/src/net/UdpMulticastServer.ts:52](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/UdpMulticastServer.ts#L52)

___

### netInterface

• `Private` `Readonly` **netInterface**: `undefined` \| `string`

#### Defined in

[packages/matter.js/src/net/UdpMulticastServer.ts:55](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/UdpMulticastServer.ts#L55)

___

### network

• `Private` `Readonly` **network**: [`Network`](net_export.Network.md)

#### Defined in

[packages/matter.js/src/net/UdpMulticastServer.ts:49](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/UdpMulticastServer.ts#L49)

___

### serverIpv4

• `Private` `Readonly` **serverIpv4**: [`UdpChannel`](../interfaces/net_export.UdpChannel.md)

#### Defined in

[packages/matter.js/src/net/UdpMulticastServer.ts:53](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/UdpMulticastServer.ts#L53)

___

### serverIpv6

• `Private` `Readonly` **serverIpv6**: [`UdpChannel`](../interfaces/net_export.UdpChannel.md)

#### Defined in

[packages/matter.js/src/net/UdpMulticastServer.ts:54](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/UdpMulticastServer.ts#L54)

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/net/UdpMulticastServer.ts:101](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/UdpMulticastServer.ts#L101)

___

### createBroadcastChannel

▸ `Private` **createBroadcastChannel**(`netInterface`, `iPv4`): `Promise`<[`UdpChannel`](../interfaces/net_export.UdpChannel.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface` | `string` |
| `iPv4` | `string` |

#### Returns

`Promise`<[`UdpChannel`](../interfaces/net_export.UdpChannel.md)\>

#### Defined in

[packages/matter.js/src/net/UdpMulticastServer.ts:93](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/UdpMulticastServer.ts#L93)

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

[packages/matter.js/src/net/UdpMulticastServer.ts:58](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/UdpMulticastServer.ts#L58)

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

[packages/matter.js/src/net/UdpMulticastServer.ts:67](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/UdpMulticastServer.ts#L67)

___

### create

▸ `Static` **create**(`«destructured»`): `Promise`<[`UdpMulticastServer`](net_export.UdpMulticastServer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`UdpMulticastServerOptions`](../interfaces/net_export.UdpMulticastServerOptions.md) |

#### Returns

`Promise`<[`UdpMulticastServer`](net_export.UdpMulticastServer.md)\>

#### Defined in

[packages/matter.js/src/net/UdpMulticastServer.ts:24](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/UdpMulticastServer.ts#L24)
