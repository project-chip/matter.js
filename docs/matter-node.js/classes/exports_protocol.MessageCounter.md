[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/protocol](../modules/exports_protocol.md) / MessageCounter

# Class: MessageCounter

[exports/protocol](../modules/exports_protocol.md).MessageCounter

Represents a message counter which gets randomly initialized and then incremented for each message.
Rollover can be allowed or forbidden and a callback can be provided to be notified before a rollover would happen.

## Hierarchy

- **`MessageCounter`**

  ↳ [`PersistedMessageCounter`](exports_protocol.PersistedMessageCounter.md)

## Table of contents

### Constructors

- [constructor](exports_protocol.MessageCounter.md#constructor)

### Properties

- [aboutToRolloverCallback](exports_protocol.MessageCounter.md#abouttorollovercallback)
- [messageCounter](exports_protocol.MessageCounter.md#messagecounter)
- [rolloverInfoDifference](exports_protocol.MessageCounter.md#rolloverinfodifference)

### Methods

- [getIncrementedCounter](exports_protocol.MessageCounter.md#getincrementedcounter)

## Constructors

### constructor

• **new MessageCounter**(`aboutToRolloverCallback?`, `rolloverInfoDifference?`): [`MessageCounter`](exports_protocol.MessageCounter.md)

Creates a new message counter with a random start value. If a aboutToRolloverCallback is provided this
counter is not allowed to rollover and the callback is called before a rollover would happen. Optionally provide
a number of messages before the rollover callback is called (Default 1000).

#### Parameters

| Name | Type |
| :------ | :------ |
| `aboutToRolloverCallback?` | () => `void` |
| `rolloverInfoDifference?` | `number` |

#### Returns

[`MessageCounter`](exports_protocol.MessageCounter.md)

#### Defined in

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:45

## Properties

### aboutToRolloverCallback

• `Protected` `Optional` `Readonly` **aboutToRolloverCallback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:37

___

### messageCounter

• `Protected` **messageCounter**: `number`

#### Defined in

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:39

___

### rolloverInfoDifference

• `Protected` `Readonly` **rolloverInfoDifference**: `number`

#### Defined in

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:38

## Methods

### getIncrementedCounter

▸ **getIncrementedCounter**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:46
