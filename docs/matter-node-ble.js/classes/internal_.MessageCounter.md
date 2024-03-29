[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / MessageCounter

# Class: MessageCounter

[\<internal\>](../modules/internal_.md).MessageCounter

Represents a message counter which gets randomly initialized and then incremented for each message.
Rollover can be allowed or forbidden and a callback can be provided to be notified before a rollover would happen.

## Table of contents

### Constructors

- [constructor](internal_.MessageCounter.md#constructor)

### Properties

- [aboutToRolloverCallback](internal_.MessageCounter.md#abouttorollovercallback)
- [messageCounter](internal_.MessageCounter.md#messagecounter)
- [rolloverInfoDifference](internal_.MessageCounter.md#rolloverinfodifference)

### Methods

- [getIncrementedCounter](internal_.MessageCounter.md#getincrementedcounter)

## Constructors

### constructor

• **new MessageCounter**(`aboutToRolloverCallback?`, `rolloverInfoDifference?`): [`MessageCounter`](internal_.MessageCounter.md)

Creates a new message counter with a random start value. If a aboutToRolloverCallback is provided this
counter is not allowed to rollover and the callback is called before a rollover would happen. Optionally provide
a number of messages before the rollover callback is called (Default 1000).

#### Parameters

| Name | Type |
| :------ | :------ |
| `aboutToRolloverCallback?` | () => `void` |
| `rolloverInfoDifference?` | `number` |

#### Returns

[`MessageCounter`](internal_.MessageCounter.md)

#### Defined in

matter.js/dist/esm/protocol/MessageCounter.d.ts:45

## Properties

### aboutToRolloverCallback

• `Protected` `Optional` `Readonly` **aboutToRolloverCallback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

matter.js/dist/esm/protocol/MessageCounter.d.ts:37

___

### messageCounter

• `Protected` **messageCounter**: `number`

#### Defined in

matter.js/dist/esm/protocol/MessageCounter.d.ts:39

___

### rolloverInfoDifference

• `Protected` `Readonly` **rolloverInfoDifference**: `number`

#### Defined in

matter.js/dist/esm/protocol/MessageCounter.d.ts:38

## Methods

### getIncrementedCounter

▸ **getIncrementedCounter**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

matter.js/dist/esm/protocol/MessageCounter.d.ts:46
