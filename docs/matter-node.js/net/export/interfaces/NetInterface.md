[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [net/export](../README.md) / NetInterface

# Interface: NetInterface

A Network interface enhances a TransportInterface with the ability to open a channel to a remote server.

## Extends

- [`TransportInterface`](../../../exports/common/interfaces/TransportInterface.md)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`TransportInterface`](../../../exports/common/interfaces/TransportInterface.md).[`close`](../../../exports/common/interfaces/TransportInterface.md#close)

#### Source

packages/matter.js/dist/esm/common/TransportInterface.d.ts:17

***

### onData()

> **onData**(`listener`): [`Listener`](../../../exports/common/interfaces/Listener.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `listener` | (`socket`, `data`) => `void` |

#### Returns

[`Listener`](../../../exports/common/interfaces/Listener.md)

#### Inherited from

[`TransportInterface`](../../../exports/common/interfaces/TransportInterface.md).[`onData`](../../../exports/common/interfaces/TransportInterface.md#ondata)

#### Source

packages/matter.js/dist/esm/common/TransportInterface.d.ts:16

***

### openChannel()

> **openChannel**(`address`): `Promise`\<[`Channel`](../../../exports/common/interfaces/Channel.md)\<`Uint8Array`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `address` | [`ServerAddress`](../../../exports/common/README.md#serveraddress) |

#### Returns

`Promise`\<[`Channel`](../../../exports/common/interfaces/Channel.md)\<`Uint8Array`\>\>

#### Source

packages/matter.js/dist/esm/net/NetInterface.d.ts:14
