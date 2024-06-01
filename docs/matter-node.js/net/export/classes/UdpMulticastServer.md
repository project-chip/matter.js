[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [net/export](../README.md) / UdpMulticastServer

# Class: UdpMulticastServer

## Constructors

### new UdpMulticastServer()

> `private` **new UdpMulticastServer**(): [`UdpMulticastServer`](UdpMulticastServer.md)

#### Returns

[`UdpMulticastServer`](UdpMulticastServer.md)

#### Source

packages/matter.js/dist/esm/net/UdpMulticastServer.d.ts:25

## Properties

### broadcastAddressIpv4

> `private` `readonly` **broadcastAddressIpv4**: `any`

#### Source

packages/matter.js/dist/esm/net/UdpMulticastServer.d.ts:17

***

### broadcastAddressIpv6

> `private` `readonly` **broadcastAddressIpv6**: `any`

#### Source

packages/matter.js/dist/esm/net/UdpMulticastServer.d.ts:18

***

### broadcastChannels

> `private` `readonly` **broadcastChannels**: `any`

#### Source

packages/matter.js/dist/esm/net/UdpMulticastServer.d.ts:24

***

### broadcastPort

> `private` `readonly` **broadcastPort**: `any`

#### Source

packages/matter.js/dist/esm/net/UdpMulticastServer.d.ts:19

***

### createBroadcastChannel

> `private` **createBroadcastChannel**: `any`

#### Source

packages/matter.js/dist/esm/net/UdpMulticastServer.d.ts:28

***

### netInterface

> `private` `readonly` **netInterface**: `any`

#### Source

packages/matter.js/dist/esm/net/UdpMulticastServer.d.ts:22

***

### network

> `private` `readonly` **network**: `any`

#### Source

packages/matter.js/dist/esm/net/UdpMulticastServer.d.ts:16

***

### serverIpv4

> `private` `readonly` **serverIpv4**: `any`

#### Source

packages/matter.js/dist/esm/net/UdpMulticastServer.d.ts:20

***

### serverIpv6

> `private` `readonly` **serverIpv6**: `any`

#### Source

packages/matter.js/dist/esm/net/UdpMulticastServer.d.ts:21

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/net/UdpMulticastServer.d.ts:29

***

### onMessage()

> **onMessage**(`listener`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `listener` | (`message`, `peerAddress`, `netInterface`) => `void` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/net/UdpMulticastServer.d.ts:26

***

### send()

> **send**(`message`, `netInterface`?, `uniCastTarget`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | `Uint8Array` |
| `netInterface`? | `string` |
| `uniCastTarget`? | `string` |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/net/UdpMulticastServer.d.ts:27

***

### create()

> `static` **create**(`__namedParameters`): `Promise`\<[`UdpMulticastServer`](UdpMulticastServer.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`UdpMulticastServerOptions`](../interfaces/UdpMulticastServerOptions.md) |

#### Returns

`Promise`\<[`UdpMulticastServer`](UdpMulticastServer.md)\>

#### Source

packages/matter.js/dist/esm/net/UdpMulticastServer.d.ts:23
