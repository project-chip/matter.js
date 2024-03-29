[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / UdpMulticastServer

# Class: UdpMulticastServer

[\<internal\>](../modules/internal_.md).UdpMulticastServer

## Table of contents

### Constructors

- [constructor](internal_.UdpMulticastServer.md#constructor)

### Properties

- [broadcastAddressIpv4](internal_.UdpMulticastServer.md#broadcastaddressipv4)
- [broadcastAddressIpv6](internal_.UdpMulticastServer.md#broadcastaddressipv6)
- [broadcastChannels](internal_.UdpMulticastServer.md#broadcastchannels)
- [broadcastPort](internal_.UdpMulticastServer.md#broadcastport)
- [createBroadcastChannel](internal_.UdpMulticastServer.md#createbroadcastchannel)
- [netInterface](internal_.UdpMulticastServer.md#netinterface)
- [network](internal_.UdpMulticastServer.md#network)
- [serverIpv4](internal_.UdpMulticastServer.md#serveripv4)
- [serverIpv6](internal_.UdpMulticastServer.md#serveripv6)

### Methods

- [close](internal_.UdpMulticastServer.md#close)
- [onMessage](internal_.UdpMulticastServer.md#onmessage)
- [send](internal_.UdpMulticastServer.md#send)
- [create](internal_.UdpMulticastServer.md#create)

## Constructors

### constructor

• **new UdpMulticastServer**(): [`UdpMulticastServer`](internal_.UdpMulticastServer.md)

#### Returns

[`UdpMulticastServer`](internal_.UdpMulticastServer.md)

#### Defined in

matter.js/dist/esm/net/UdpMulticastServer.d.ts:25

## Properties

### broadcastAddressIpv4

• `Private` `Readonly` **broadcastAddressIpv4**: `any`

#### Defined in

matter.js/dist/esm/net/UdpMulticastServer.d.ts:17

___

### broadcastAddressIpv6

• `Private` `Readonly` **broadcastAddressIpv6**: `any`

#### Defined in

matter.js/dist/esm/net/UdpMulticastServer.d.ts:18

___

### broadcastChannels

• `Private` `Readonly` **broadcastChannels**: `any`

#### Defined in

matter.js/dist/esm/net/UdpMulticastServer.d.ts:24

___

### broadcastPort

• `Private` `Readonly` **broadcastPort**: `any`

#### Defined in

matter.js/dist/esm/net/UdpMulticastServer.d.ts:19

___

### createBroadcastChannel

• `Private` **createBroadcastChannel**: `any`

#### Defined in

matter.js/dist/esm/net/UdpMulticastServer.d.ts:28

___

### netInterface

• `Private` `Readonly` **netInterface**: `any`

#### Defined in

matter.js/dist/esm/net/UdpMulticastServer.d.ts:22

___

### network

• `Private` `Readonly` **network**: `any`

#### Defined in

matter.js/dist/esm/net/UdpMulticastServer.d.ts:16

___

### serverIpv4

• `Private` `Readonly` **serverIpv4**: `any`

#### Defined in

matter.js/dist/esm/net/UdpMulticastServer.d.ts:20

___

### serverIpv6

• `Private` `Readonly` **serverIpv6**: `any`

#### Defined in

matter.js/dist/esm/net/UdpMulticastServer.d.ts:21

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/net/UdpMulticastServer.d.ts:29

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

matter.js/dist/esm/net/UdpMulticastServer.d.ts:26

___

### send

▸ **send**(`message`, `netInterface?`, `uniCastTarget?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Uint8Array` |
| `netInterface?` | `string` |
| `uniCastTarget?` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/net/UdpMulticastServer.d.ts:27

___

### create

▸ **create**(`«destructured»`): `Promise`\<[`UdpMulticastServer`](internal_.UdpMulticastServer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`UdpMulticastServerOptions`](../interfaces/internal_.UdpMulticastServerOptions.md) |

#### Returns

`Promise`\<[`UdpMulticastServer`](internal_.UdpMulticastServer.md)\>

#### Defined in

matter.js/dist/esm/net/UdpMulticastServer.d.ts:23
