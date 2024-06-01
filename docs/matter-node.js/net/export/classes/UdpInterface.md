[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [net/export](../README.md) / UdpInterface

# Class: UdpInterface

A Network interface enhances a TransportInterface with the ability to open a channel to a remote server.

## Implements

- [`NetInterface`](../interfaces/NetInterface.md)

## Constructors

### new UdpInterface()

> **new UdpInterface**(`server`): [`UdpInterface`](UdpInterface.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `server` | [`UdpChannel`](../interfaces/UdpChannel.md) |

#### Returns

[`UdpInterface`](UdpInterface.md)

#### Source

packages/matter.js/dist/esm/net/UdpInterface.d.ts:16

## Properties

### server

> `private` `readonly` **server**: `any`

#### Source

packages/matter.js/dist/esm/net/UdpInterface.d.ts:14

## Accessors

### port

> `get` **port**(): `number`

#### Returns

`number`

#### Source

packages/matter.js/dist/esm/net/UdpInterface.d.ts:19

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`NetInterface`](../interfaces/NetInterface.md).[`close`](../interfaces/NetInterface.md#close)

#### Source

packages/matter.js/dist/esm/net/UdpInterface.d.ts:20

***

### onData()

> **onData**(`listener`): [`Listener`](../../../exports/common/interfaces/Listener.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `listener` | (`channel`, `messageBytes`) => `void` |

#### Returns

[`Listener`](../../../exports/common/interfaces/Listener.md)

#### Implementation of

[`NetInterface`](../interfaces/NetInterface.md).[`onData`](../interfaces/NetInterface.md#ondata)

#### Source

packages/matter.js/dist/esm/net/UdpInterface.d.ts:18

***

### openChannel()

> **openChannel**(`address`): `Promise`\<[`UdpConnection`](../-internal-/classes/UdpConnection.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `address` | [`ServerAddress`](../../../exports/common/README.md#serveraddress) |

#### Returns

`Promise`\<[`UdpConnection`](../-internal-/classes/UdpConnection.md)\>

#### Implementation of

[`NetInterface`](../interfaces/NetInterface.md).[`openChannel`](../interfaces/NetInterface.md#openchannel)

#### Source

packages/matter.js/dist/esm/net/UdpInterface.d.ts:17

***

### create()

> `static` **create**(`network`, `type`, `port`?, `host`?, `netInterface`?): `Promise`\<[`UdpInterface`](UdpInterface.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `network` | [`Network`](Network.md) |
| `type` | `"udp4"` \| `"udp6"` |
| `port`? | `number` |
| `host`? | `string` |
| `netInterface`? | `string` |

#### Returns

`Promise`\<[`UdpInterface`](UdpInterface.md)\>

#### Source

packages/matter.js/dist/esm/net/UdpInterface.d.ts:15
