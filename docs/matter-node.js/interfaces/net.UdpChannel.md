[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [net](../modules/net.md) / UdpChannel

# Interface: UdpChannel

[net](../modules/net.md).UdpChannel

## Implemented by

- [`UdpChannelFake`](../classes/net.UdpChannelFake.md)
- [`UdpChannelNode`](../classes/net.UdpChannelNode.md)

## Table of contents

### Methods

- [close](net.UdpChannel.md#close)
- [onData](net.UdpChannel.md#ondata)
- [send](net.UdpChannel.md#send)

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/net/UdpChannel.d.ts:17

___

### onData

▸ **onData**(`listener`): [`NetListener`](net.NetListener.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`netInterface`: `string`, `peerAddress`: `string`, `peerPort`: `number`, `data`: `Uint8Array`) => `void` |

#### Returns

[`NetListener`](net.NetListener.md)

#### Defined in

packages/matter.js/dist/cjs/net/UdpChannel.d.ts:15

___

### send

▸ **send**(`address`, `port`, `data`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `port` | `number` |
| `data` | `Uint8Array` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/net/UdpChannel.d.ts:16
