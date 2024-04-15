[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/export](../modules/protocol_export.md) / MessageCounter

# Class: MessageCounter

[protocol/export](../modules/protocol_export.md).MessageCounter

Represents a message counter which gets randomly initialized and then incremented for each message.
Rollover can be allowed or forbidden and a callback can be provided to be notified before a rollover would happen.

## Hierarchy

- **`MessageCounter`**

  ↳ [`PersistedMessageCounter`](protocol_export.PersistedMessageCounter.md)

## Table of contents

### Constructors

- [constructor](protocol_export.MessageCounter.md#constructor)

### Properties

- [aboutToRolloverCallback](protocol_export.MessageCounter.md#abouttorollovercallback)
- [messageCounter](protocol_export.MessageCounter.md#messagecounter)
- [rolloverInfoDifference](protocol_export.MessageCounter.md#rolloverinfodifference)

### Methods

- [getIncrementedCounter](protocol_export.MessageCounter.md#getincrementedcounter)

## Constructors

### constructor

• **new MessageCounter**(`aboutToRolloverCallback?`, `rolloverInfoDifference?`): [`MessageCounter`](protocol_export.MessageCounter.md)

Creates a new message counter with a random start value. If a aboutToRolloverCallback is provided this
counter is not allowed to rollover and the callback is called before a rollover would happen. Optionally provide
a number of messages before the rollover callback is called (Default 1000).

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `aboutToRolloverCallback?` | () => `void` | `undefined` |
| `rolloverInfoDifference` | `number` | `ROLLOVER_INFO_DIFFERENCE` |

#### Returns

[`MessageCounter`](protocol_export.MessageCounter.md)

#### Defined in

[packages/matter.js/src/protocol/MessageCounter.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageCounter.ts#L56)

## Properties

### aboutToRolloverCallback

• `Protected` `Optional` `Readonly` **aboutToRolloverCallback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/MessageCounter.ts:57](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageCounter.ts#L57)

___

### messageCounter

• `Protected` **messageCounter**: `number`

#### Defined in

[packages/matter.js/src/protocol/MessageCounter.ts:49](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageCounter.ts#L49)

___

### rolloverInfoDifference

• `Protected` `Readonly` **rolloverInfoDifference**: `number` = `ROLLOVER_INFO_DIFFERENCE`

#### Defined in

[packages/matter.js/src/protocol/MessageCounter.ts:58](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageCounter.ts#L58)

## Methods

### getIncrementedCounter

▸ **getIncrementedCounter**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

[packages/matter.js/src/protocol/MessageCounter.ts:61](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageCounter.ts#L61)
