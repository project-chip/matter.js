[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [net/export](../modules/net_export.md) / NetInterface

# Interface: NetInterface

[net/export](../modules/net_export.md).NetInterface

A Network interface enhances a TransportInterface with the ability to open a channel to a remote server.

## Hierarchy

- [`TransportInterface`](exports_common.TransportInterface.md)

  ↳ **`NetInterface`**

## Implemented by

- [`UdpInterface`](../classes/net_export.UdpInterface.md)

## Table of contents

### Methods

- [close](net_export.NetInterface.md#close)
- [onData](net_export.NetInterface.md#ondata)
- [openChannel](net_export.NetInterface.md#openchannel)

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[TransportInterface](exports_common.TransportInterface.md).[close](exports_common.TransportInterface.md#close)

#### Defined in

packages/matter.js/dist/cjs/common/TransportInterface.d.ts:17

___

### onData

▸ **onData**(`listener`): [`Listener`](exports_common.Listener.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`socket`: [`Channel`](exports_common.Channel.md)<`Uint8Array`\>, `data`: `Uint8Array`) => `void` |

#### Returns

[`Listener`](exports_common.Listener.md)

#### Inherited from

[TransportInterface](exports_common.TransportInterface.md).[onData](exports_common.TransportInterface.md#ondata)

#### Defined in

packages/matter.js/dist/cjs/common/TransportInterface.d.ts:16

___

### openChannel

▸ **openChannel**(`address`): `Promise`<[`Channel`](exports_common.Channel.md)<`Uint8Array`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | [`ServerAddress`](../modules/exports_common.md#serveraddress) |

#### Returns

`Promise`<[`Channel`](exports_common.Channel.md)<`Uint8Array`\>\>

#### Defined in

packages/matter.js/dist/cjs/net/NetInterface.d.ts:14
