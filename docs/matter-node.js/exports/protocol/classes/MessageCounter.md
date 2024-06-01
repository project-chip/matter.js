[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/protocol](../README.md) / MessageCounter

# Class: MessageCounter

Represents a message counter which gets randomly initialized and then incremented for each message.
Rollover can be allowed or forbidden and a callback can be provided to be notified before a rollover would happen.

## Extended by

- [`PersistedMessageCounter`](PersistedMessageCounter.md)

## Constructors

### new MessageCounter()

> **new MessageCounter**(`aboutToRolloverCallback`?, `rolloverInfoDifference`?): [`MessageCounter`](MessageCounter.md)

Creates a new message counter with a random start value. If a aboutToRolloverCallback is provided this
counter is not allowed to rollover and the callback is called before a rollover would happen. Optionally provide
a number of messages before the rollover callback is called (Default 1000).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `aboutToRolloverCallback`? | () => `void` |
| `rolloverInfoDifference`? | `number` |

#### Returns

[`MessageCounter`](MessageCounter.md)

#### Source

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:45

## Properties

### aboutToRolloverCallback()?

> `protected` `optional` `readonly` **aboutToRolloverCallback**: () => `void`

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:37

***

### messageCounter

> `protected` **messageCounter**: `number`

#### Source

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:39

***

### rolloverInfoDifference

> `protected` `readonly` **rolloverInfoDifference**: `number`

#### Source

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:38

## Methods

### getIncrementedCounter()

> **getIncrementedCounter**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Source

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:46
