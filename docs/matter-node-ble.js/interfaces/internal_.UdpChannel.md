[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / UdpChannel

# Interface: UdpChannel

[\<internal\>](../modules/internal_.md).UdpChannel

## Table of contents

### Accessors

- [port](internal_.UdpChannel.md#port)

### Methods

- [close](internal_.UdpChannel.md#close)
- [onData](internal_.UdpChannel.md#ondata)
- [send](internal_.UdpChannel.md#send)

## Accessors

### port

• `get` **port**(): `number`

#### Returns

`number`

#### Defined in

matter.js/dist/esm/net/UdpChannel.d.ts:19

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

matter.js/dist/esm/net/UdpChannel.d.ts:18

___

### onData

▸ **onData**(`listener`): [`Listener`](internal_.Listener.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`netInterface`: `string`, `peerAddress`: `string`, `peerPort`: `number`, `data`: `Uint8Array`) => `void` |

#### Returns

[`Listener`](internal_.Listener.md)

#### Defined in

matter.js/dist/esm/net/UdpChannel.d.ts:16

___

### send

▸ **send**(`host`, `port`, `data`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `string` |
| `port` | `number` |
| `data` | `Uint8Array` |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/net/UdpChannel.d.ts:17
