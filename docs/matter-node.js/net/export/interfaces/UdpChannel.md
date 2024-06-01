[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [net/export](../README.md) / UdpChannel

# Interface: UdpChannel

## Accessors

### port

> `get` **port**(): `number`

#### Returns

`number`

#### Source

packages/matter.js/dist/esm/net/UdpChannel.d.ts:19

## Methods

### close()

> **close**(): `void`

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/net/UdpChannel.d.ts:18

***

### onData()

> **onData**(`listener`): [`Listener`](../../../exports/common/interfaces/Listener.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `listener` | (`netInterface`, `peerAddress`, `peerPort`, `data`) => `void` |

#### Returns

[`Listener`](../../../exports/common/interfaces/Listener.md)

#### Source

packages/matter.js/dist/esm/net/UdpChannel.d.ts:16

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

packages/matter.js/dist/esm/net/UdpChannel.d.ts:17
