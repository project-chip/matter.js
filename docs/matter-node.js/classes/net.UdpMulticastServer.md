[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [net](../modules/net.md) / UdpMulticastServer

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
- [createBroadcastChannel](net.UdpMulticastServer.md#createbroadcastchannel)
- [netInterface](net.UdpMulticastServer.md#netinterface)
- [network](net.UdpMulticastServer.md#network)
- [serverIpv4](net.UdpMulticastServer.md#serveripv4)
- [serverIpv6](net.UdpMulticastServer.md#serveripv6)

### Methods

- [close](net.UdpMulticastServer.md#close)
- [onMessage](net.UdpMulticastServer.md#onmessage)
- [send](net.UdpMulticastServer.md#send)
- [create](net.UdpMulticastServer.md#create)

## Constructors

### constructor

• `Private` **new UdpMulticastServer**()

#### Defined in

packages/matter.js/dist/cjs/net/UdpMulticastServer.d.ts:23

## Properties

### broadcastAddressIpv4

• `Private` `Readonly` **broadcastAddressIpv4**: `any`

#### Defined in

packages/matter.js/dist/cjs/net/UdpMulticastServer.d.ts:15

___

### broadcastAddressIpv6

• `Private` `Readonly` **broadcastAddressIpv6**: `any`

#### Defined in

packages/matter.js/dist/cjs/net/UdpMulticastServer.d.ts:16

___

### broadcastChannels

• `Private` `Readonly` **broadcastChannels**: `any`

#### Defined in

packages/matter.js/dist/cjs/net/UdpMulticastServer.d.ts:22

___

### broadcastPort

• `Private` `Readonly` **broadcastPort**: `any`

#### Defined in

packages/matter.js/dist/cjs/net/UdpMulticastServer.d.ts:17

___

### createBroadcastChannel

• `Private` **createBroadcastChannel**: `any`

#### Defined in

packages/matter.js/dist/cjs/net/UdpMulticastServer.d.ts:26

___

### netInterface

• `Private` `Readonly` **netInterface**: `any`

#### Defined in

packages/matter.js/dist/cjs/net/UdpMulticastServer.d.ts:20

___

### network

• `Private` `Readonly` **network**: `any`

#### Defined in

packages/matter.js/dist/cjs/net/UdpMulticastServer.d.ts:14

___

### serverIpv4

• `Private` `Readonly` **serverIpv4**: `any`

#### Defined in

packages/matter.js/dist/cjs/net/UdpMulticastServer.d.ts:18

___

### serverIpv6

• `Private` `Readonly` **serverIpv6**: `any`

#### Defined in

packages/matter.js/dist/cjs/net/UdpMulticastServer.d.ts:19

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/net/UdpMulticastServer.d.ts:27

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

packages/matter.js/dist/cjs/net/UdpMulticastServer.d.ts:24

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

packages/matter.js/dist/cjs/net/UdpMulticastServer.d.ts:25

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

packages/matter.js/dist/cjs/net/UdpMulticastServer.d.ts:21
