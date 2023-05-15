[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [net](../modules/net.md) / UdpChannel

# Interface: UdpChannel

[net](../modules/net.md).UdpChannel

## Implemented by

- [`UdpChannelFake`](../classes/net.UdpChannelFake.md)

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

[packages/matter.js/src/net/UdpChannel.ts:20](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/UdpChannel.ts#L20)

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

[packages/matter.js/src/net/UdpChannel.ts:18](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/UdpChannel.ts#L18)

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

[packages/matter.js/src/net/UdpChannel.ts:19](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/UdpChannel.ts#L19)
