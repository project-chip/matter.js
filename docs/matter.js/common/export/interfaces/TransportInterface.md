[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [common/export](../README.md) / TransportInterface

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

[packages/matter.js/src/common/TransportInterface.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/TransportInterface.ts#L20)

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

[packages/matter.js/src/common/TransportInterface.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/TransportInterface.ts#L19)
