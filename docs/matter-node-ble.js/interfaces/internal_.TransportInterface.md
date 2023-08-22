[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / TransportInterface

# Interface: TransportInterface

[<internal>](../modules/internal_.md).TransportInterface

A TransportInterface is a generic interface for sending and receiving data on an established incoming connection.
It can not open new connections.

## Hierarchy

- **`TransportInterface`**

  ↳ [`NetInterface`](internal_.NetInterface.md)

## Table of contents

### Methods

- [close](internal_.TransportInterface.md#close)
- [onData](internal_.TransportInterface.md#ondata)

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

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

#### Defined in

matter.js/dist/cjs/common/TransportInterface.d.ts:16
