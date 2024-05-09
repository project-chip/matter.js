[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [net/export](../modules/net_export.md) / UdpChannel

# Interface: UdpChannel

[net/export](../modules/net_export.md).UdpChannel

## Implemented by

- [`UdpChannelFake`](../classes/net_export.UdpChannelFake.md)

## Table of contents

### Accessors

- [port](net_export.UdpChannel.md#port)

### Methods

- [close](net_export.UdpChannel.md#close)
- [onData](net_export.UdpChannel.md#ondata)
- [send](net_export.UdpChannel.md#send)

## Accessors

### port

• `get` **port**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/net/UdpChannel.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/net/UdpChannel.ts#L22)

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/net/UdpChannel.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/net/UdpChannel.ts#L21)

___

### onData

▸ **onData**(`listener`): [`Listener`](common_export.Listener.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`netInterface`: `string`, `peerAddress`: `string`, `peerPort`: `number`, `data`: `Uint8Array`) => `void` |

#### Returns

[`Listener`](common_export.Listener.md)

#### Defined in

[packages/matter.js/src/net/UdpChannel.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/net/UdpChannel.ts#L19)

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

[packages/matter.js/src/net/UdpChannel.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/net/UdpChannel.ts#L20)
