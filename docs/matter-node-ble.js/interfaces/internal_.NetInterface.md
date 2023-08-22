[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / NetInterface

# Interface: NetInterface

[<internal>](../modules/internal_.md).NetInterface

A Network interface enhances a TransportInterface with the ability to open a channel to a remote server.

## Hierarchy

- [`TransportInterface`](internal_.TransportInterface.md)

  ↳ **`NetInterface`**

## Table of contents

### Methods

- [close](internal_.NetInterface.md#close)
- [onData](internal_.NetInterface.md#ondata)
- [openChannel](internal_.NetInterface.md#openchannel)

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[TransportInterface](internal_.TransportInterface.md).[close](internal_.TransportInterface.md#close)

#### Defined in

matter.js/dist/cjs/common/TransportInterface.d.ts:17

___

### onData

▸ **onData**(`listener`): [`Listener`](internal_.Listener.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`socket`: [`Channel`](internal_.Channel.md)<`Uint8Array`\>, `data`: `Uint8Array`) => `void` |

#### Returns

[`Listener`](internal_.Listener.md)

#### Inherited from

[TransportInterface](internal_.TransportInterface.md).[onData](internal_.TransportInterface.md#ondata)

#### Defined in

matter.js/dist/cjs/common/TransportInterface.d.ts:16

___

### openChannel

▸ **openChannel**(`address`): `Promise`<[`Channel`](internal_.Channel.md)<`Uint8Array`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | [`ServerAddress`](../modules/internal_.md#serveraddress) |

#### Returns

`Promise`<[`Channel`](internal_.Channel.md)<`Uint8Array`\>\>

#### Defined in

matter.js/dist/cjs/net/NetInterface.d.ts:14
