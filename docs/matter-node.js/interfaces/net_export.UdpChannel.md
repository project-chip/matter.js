[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [net/export](../modules/net_export.md) / UdpChannel

# Interface: UdpChannel

[net/export](../modules/net_export.md).UdpChannel

## Implemented by

- [`UdpChannelFake`](../classes/net_export.UdpChannelFake.md)
- [`UdpChannelNode`](../classes/net_export.UdpChannelNode.md)

## Table of contents

### Methods

- [close](net_export.UdpChannel.md#close)
- [onData](net_export.UdpChannel.md#ondata)
- [send](net_export.UdpChannel.md#send)

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/net/UdpChannel.d.ts:17

___

### onData

▸ **onData**(`listener`): [`Listener`](exports_common.Listener.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`netInterface`: `string`, `peerAddress`: `string`, `peerPort`: `number`, `data`: `Uint8Array`) => `void` |

#### Returns

[`Listener`](exports_common.Listener.md)

#### Defined in

packages/matter.js/dist/cjs/net/UdpChannel.d.ts:15

___

### send

▸ **send**(`host`, `port`, `data`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `string` |
| `port` | `number` |
| `data` | `Uint8Array` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/net/UdpChannel.d.ts:16
