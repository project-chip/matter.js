[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/common](../modules/exports_common.md) / TransportInterface

# Interface: TransportInterface

[exports/common](../modules/exports_common.md).TransportInterface

A TransportInterface is a generic interface for sending and receiving data on an established incoming connection.
It can not open new connections.

## Hierarchy

- **`TransportInterface`**

  ↳ [`NetInterface`](net_export.NetInterface.md)

## Table of contents

### Methods

- [close](exports_common.TransportInterface.md#close)
- [onData](exports_common.TransportInterface.md#ondata)

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

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

#### Defined in

packages/matter.js/dist/cjs/common/TransportInterface.d.ts:16
