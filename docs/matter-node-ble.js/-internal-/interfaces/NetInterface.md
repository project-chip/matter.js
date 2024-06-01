[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / NetInterface

# Interface: NetInterface

A Network interface enhances a TransportInterface with the ability to open a channel to a remote server.

## Extends

- [`TransportInterface`](TransportInterface.md)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`TransportInterface`](TransportInterface.md).[`close`](TransportInterface.md#close)

#### Source

matter.js/dist/esm/common/TransportInterface.d.ts:17

***

### onData()

> **onData**(`listener`): [`Listener`](Listener.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `listener` | (`socket`, `data`) => `void` |

#### Returns

[`Listener`](Listener.md)

#### Inherited from

[`TransportInterface`](TransportInterface.md).[`onData`](TransportInterface.md#ondata)

#### Source

matter.js/dist/esm/common/TransportInterface.d.ts:16

***

### openChannel()

> **openChannel**(`address`): `Promise`\<[`Channel`](Channel.md)\<`Uint8Array`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `address` | [`ServerAddress`](../README.md#serveraddress) |

#### Returns

`Promise`\<[`Channel`](Channel.md)\<`Uint8Array`\>\>

#### Source

matter.js/dist/esm/net/NetInterface.d.ts:14
