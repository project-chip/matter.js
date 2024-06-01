[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/common](../README.md) / TransportInterface

# Interface: TransportInterface

A TransportInterface is a generic interface for sending and receiving data on an established incoming connection.
It can not open new connections.

## Extended by

- [`NetInterface`](../../../net/export/interfaces/NetInterface.md)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/common/TransportInterface.d.ts:17

***

### onData()

> **onData**(`listener`): [`Listener`](Listener.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `listener` | (`socket`, `data`) => `void` |

#### Returns

[`Listener`](Listener.md)

#### Source

packages/matter.js/dist/esm/common/TransportInterface.d.ts:16
