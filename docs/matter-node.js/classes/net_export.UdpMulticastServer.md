[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [net/export](../modules/net_export.md) / UdpMulticastServer

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
- [createBroadcastChannel](net_export.UdpMulticastServer.md#createbroadcastchannel)
- [netInterface](net_export.UdpMulticastServer.md#netinterface)
- [network](net_export.UdpMulticastServer.md#network)
- [serverIpv4](net_export.UdpMulticastServer.md#serveripv4)
- [serverIpv6](net_export.UdpMulticastServer.md#serveripv6)

### Methods

- [close](net_export.UdpMulticastServer.md#close)
- [onMessage](net_export.UdpMulticastServer.md#onmessage)
- [send](net_export.UdpMulticastServer.md#send)
- [create](net_export.UdpMulticastServer.md#create)

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

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

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

▸ `Static` **create**(`«destructured»`): `Promise`<[`UdpMulticastServer`](net_export.UdpMulticastServer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`UdpMulticastServerOptions`](../interfaces/net_export.UdpMulticastServerOptions.md) |

#### Returns

`Promise`<[`UdpMulticastServer`](net_export.UdpMulticastServer.md)\>

#### Defined in

packages/matter.js/dist/cjs/net/UdpMulticastServer.d.ts:21
