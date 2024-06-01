[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / TransportInterface

# Interface: TransportInterface

A TransportInterface is a generic interface for sending and receiving data on an established incoming connection.
It can not open new connections.

## Extended by

- [`NetInterface`](NetInterface.md)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/common/TransportInterface.d.ts:17

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

matter.js/dist/esm/common/TransportInterface.d.ts:16
