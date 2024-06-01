[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [net/export](../README.md) / UdpInterface

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

[packages/matter.js/src/net/UdpInterface.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/UdpInterface.ts#L22)

## Properties

### server

> `private` `readonly` **server**: [`UdpChannel`](../interfaces/UdpChannel.md)

#### Source

[packages/matter.js/src/net/UdpInterface.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/UdpInterface.ts#L22)

## Accessors

### port

> `get` **port**(): `number`

#### Returns

`number`

#### Source

[packages/matter.js/src/net/UdpInterface.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/UdpInterface.ts#L38)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`NetInterface`](../interfaces/NetInterface.md).[`close`](../interfaces/NetInterface.md#close)

#### Source

[packages/matter.js/src/net/UdpInterface.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/UdpInterface.ts#L42)

***

### onData()

> **onData**(`listener`): [`Listener`](../../../common/export/interfaces/Listener.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `listener` | (`channel`, `messageBytes`) => `void` |

#### Returns

[`Listener`](../../../common/export/interfaces/Listener.md)

#### Implementation of

[`NetInterface`](../interfaces/NetInterface.md).[`onData`](../interfaces/NetInterface.md#ondata)

#### Source

[packages/matter.js/src/net/UdpInterface.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/UdpInterface.ts#L32)

***

### openChannel()

> **openChannel**(`address`): `Promise`\<[`UdpConnection`](../-internal-/classes/UdpConnection.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `address` | [`ServerAddress`](../../../common/export/README.md#serveraddress) |

#### Returns

`Promise`\<[`UdpConnection`](../-internal-/classes/UdpConnection.md)\>

#### Implementation of

[`NetInterface`](../interfaces/NetInterface.md).[`openChannel`](../interfaces/NetInterface.md#openchannel)

#### Source

[packages/matter.js/src/net/UdpInterface.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/UdpInterface.ts#L24)

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

[packages/matter.js/src/net/UdpInterface.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/UdpInterface.ts#L16)
