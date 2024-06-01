[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / UdpChannel

# Interface: UdpChannel

## Accessors

### port

> `get` **port**(): `number`

#### Returns

`number`

#### Source

matter.js/dist/esm/net/UdpChannel.d.ts:19

## Methods

### close()

> **close**(): `void`

#### Returns

`void`

#### Source

matter.js/dist/esm/net/UdpChannel.d.ts:18

***

### onData()

> **onData**(`listener`): [`Listener`](Listener.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `listener` | (`netInterface`, `peerAddress`, `peerPort`, `data`) => `void` |

#### Returns

[`Listener`](Listener.md)

#### Source

matter.js/dist/esm/net/UdpChannel.d.ts:16

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

#### Source

matter.js/dist/esm/net/UdpChannel.d.ts:17
