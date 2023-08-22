[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [common/export](../modules/common_export.md) / TransportInterface

# Interface: TransportInterface

[common/export](../modules/common_export.md).TransportInterface

A TransportInterface is a generic interface for sending and receiving data on an established incoming connection.
It can not open new connections.

## Hierarchy

- **`TransportInterface`**

  ↳ [`NetInterface`](net_export.NetInterface.md)

## Table of contents

### Methods

- [close](common_export.TransportInterface.md#close)
- [onData](common_export.TransportInterface.md#ondata)

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

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

#### Defined in

[packages/matter.js/src/common/TransportInterface.ts:19](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/common/TransportInterface.ts#L19)
