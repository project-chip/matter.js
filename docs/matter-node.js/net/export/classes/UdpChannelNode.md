[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [net/export](../README.md) / UdpChannelNode

# Class: UdpChannelNode

## Implements

- [`UdpChannel`](../interfaces/UdpChannel.md)

## Constructors

### new UdpChannelNode()

> **new UdpChannelNode**(`socket`, `netInterface`?): [`UdpChannelNode`](UdpChannelNode.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `socket` | `Socket` |
| `netInterface`? | `string` |

#### Returns

[`UdpChannelNode`](UdpChannelNode.md)

#### Source

[packages/matter-node.js/src/net/UdpChannelNode.ts:101](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/net/UdpChannelNode.ts#L101)

## Properties

### netInterface?

> `private` `optional` `readonly` **netInterface**: `string`

#### Source

[packages/matter-node.js/src/net/UdpChannelNode.ts:103](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/net/UdpChannelNode.ts#L103)

***

### socket

> `private` `readonly` **socket**: `Socket`

#### Source

[packages/matter-node.js/src/net/UdpChannelNode.ts:102](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/net/UdpChannelNode.ts#L102)

## Accessors

### port

> `get` **port**(): `number`

#### Returns

`number`

#### Source

[packages/matter-node.js/src/net/UdpChannelNode.ts:143](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/net/UdpChannelNode.ts#L143)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`UdpChannel`](../interfaces/UdpChannel.md).[`close`](../interfaces/UdpChannel.md#close)

#### Source

[packages/matter-node.js/src/net/UdpChannelNode.ts:135](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/net/UdpChannelNode.ts#L135)

***

### onData()

> **onData**(`listener`): `object`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `listener` | (`netInterface`, `peerAddress`, `peerPort`, `data`) => `void` |

#### Returns

`object`

##### close()

> **close**: () => `Promise`\<`void`\>

###### Returns

`Promise`\<`void`\>

#### Implementation of

[`UdpChannel`](../interfaces/UdpChannel.md).[`onData`](../interfaces/UdpChannel.md#ondata)

#### Source

[packages/matter-node.js/src/net/UdpChannelNode.ts:106](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/net/UdpChannelNode.ts#L106)

***

### send()

> **send**(`host`, `port`, `data`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `host` | `string` |
| `port` | `number` |
| `data` | `Uint8Array` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`UdpChannel`](../interfaces/UdpChannel.md).[`send`](../interfaces/UdpChannel.md#send)

#### Source

[packages/matter-node.js/src/net/UdpChannelNode.ts:121](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/net/UdpChannelNode.ts#L121)

***

### create()

> `static` **create**(`__namedParameters`): `Promise`\<[`UdpChannelNode`](UdpChannelNode.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`UdpChannelOptions`](../interfaces/UdpChannelOptions.md) |

#### Returns

`Promise`\<[`UdpChannelNode`](UdpChannelNode.md)\>

#### Source

[packages/matter-node.js/src/net/UdpChannelNode.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/net/UdpChannelNode.ts#L44)
