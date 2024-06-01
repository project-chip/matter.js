[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [protocol/export](../README.md) / MessageCounter

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

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `aboutToRolloverCallback`? | () => `void` | `undefined` |
| `rolloverInfoDifference`? | `number` | `ROLLOVER_INFO_DIFFERENCE` |

#### Returns

[`MessageCounter`](MessageCounter.md)

#### Source

[packages/matter.js/src/protocol/MessageCounter.ts:56](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageCounter.ts#L56)

## Properties

### aboutToRolloverCallback()?

> `protected` `optional` `readonly` **aboutToRolloverCallback**: () => `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/MessageCounter.ts:57](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageCounter.ts#L57)

***

### messageCounter

> `protected` **messageCounter**: `number`

#### Source

[packages/matter.js/src/protocol/MessageCounter.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageCounter.ts#L49)

***

### rolloverInfoDifference

> `protected` `readonly` **rolloverInfoDifference**: `number` = `ROLLOVER_INFO_DIFFERENCE`

#### Source

[packages/matter.js/src/protocol/MessageCounter.ts:58](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageCounter.ts#L58)

## Methods

### getIncrementedCounter()

> **getIncrementedCounter**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Source

[packages/matter.js/src/protocol/MessageCounter.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageCounter.ts#L61)
