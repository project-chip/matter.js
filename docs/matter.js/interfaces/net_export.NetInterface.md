[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [net/export](../modules/net_export.md) / NetInterface

# Interface: NetInterface

[net/export](../modules/net_export.md).NetInterface

A Network interface enhances a TransportInterface with the ability to open a channel to a remote server.

## Hierarchy

- [`TransportInterface`](common_export.TransportInterface.md)

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

[TransportInterface](common_export.TransportInterface.md).[close](common_export.TransportInterface.md#close)

#### Defined in

[packages/matter.js/src/common/TransportInterface.ts:20](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/common/TransportInterface.ts#L20)

___

### onData

▸ **onData**(`listener`): [`Listener`](common_export.Listener.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`socket`: [`Channel`](common_export.Channel.md)<`Uint8Array`\>, `data`: `Uint8Array`) => `void` |

#### Returns

[`Listener`](common_export.Listener.md)

#### Inherited from

[TransportInterface](common_export.TransportInterface.md).[onData](common_export.TransportInterface.md#ondata)

#### Defined in

[packages/matter.js/src/common/TransportInterface.ts:19](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/common/TransportInterface.ts#L19)

___

### openChannel

▸ **openChannel**(`address`): `Promise`<[`Channel`](common_export.Channel.md)<`Uint8Array`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | [`ServerAddress`](../modules/common_export.md#serveraddress) |

#### Returns

`Promise`<[`Channel`](common_export.Channel.md)<`Uint8Array`\>\>

#### Defined in

[packages/matter.js/src/net/NetInterface.ts:16](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/NetInterface.ts#L16)
