[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/export](../modules/protocol_export.md) / MessageReceptionStateUnencryptedWithRollover

# Class: MessageReceptionStateUnencryptedWithRollover

[protocol/export](../modules/protocol_export.md).MessageReceptionStateUnencryptedWithRollover

Implements a message reception state for unencrypted messages without rollover.
Any message counter equal to max_message_counter or within the message counter window, where the corresponding bit
is set to true SHALL be considered duplicate. All other message counters, whether behind the window or ahead of
max_message_counter, are considered new and SHALL update max_message_counter and shift the window accordingly.
Messages with a counter behind the window are likely caused by a node rebooting and are thus processed as rolling
back the window to the current location.

## Hierarchy

- [`MessageReceptionStateEncryptedWithoutRollover`](protocol_export.MessageReceptionStateEncryptedWithoutRollover.md)

  ↳ **`MessageReceptionStateUnencryptedWithRollover`**

## Table of contents

### Constructors

- [constructor](protocol_export.MessageReceptionStateUnencryptedWithRollover.md#constructor)

### Properties

- [maximumMessageCounter](protocol_export.MessageReceptionStateUnencryptedWithRollover.md#maximummessagecounter)

### Methods

- [calculateDiff](protocol_export.MessageReceptionStateUnencryptedWithRollover.md#calculatediff)
- [updateMessageCounter](protocol_export.MessageReceptionStateUnencryptedWithRollover.md#updatemessagecounter)

## Constructors

### constructor

• **new MessageReceptionStateUnencryptedWithRollover**(`messageCounter?`): [`MessageReceptionStateUnencryptedWithRollover`](protocol_export.MessageReceptionStateUnencryptedWithRollover.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageCounter?` | `number` |

#### Returns

[`MessageReceptionStateUnencryptedWithRollover`](protocol_export.MessageReceptionStateUnencryptedWithRollover.md)

#### Inherited from

[MessageReceptionStateEncryptedWithoutRollover](protocol_export.MessageReceptionStateEncryptedWithoutRollover.md).[constructor](protocol_export.MessageReceptionStateEncryptedWithoutRollover.md#constructor)

#### Defined in

[packages/matter.js/src/protocol/MessageReceptionState.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageReceptionState.ts#L33)

## Properties

### maximumMessageCounter

• `Protected` **maximumMessageCounter**: `undefined` \| `number`

#### Inherited from

[MessageReceptionStateEncryptedWithoutRollover](protocol_export.MessageReceptionStateEncryptedWithoutRollover.md).[maximumMessageCounter](protocol_export.MessageReceptionStateEncryptedWithoutRollover.md#maximummessagecounter)

#### Defined in

[packages/matter.js/src/protocol/MessageReceptionState.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageReceptionState.ts#L30)

## Methods

### calculateDiff

▸ **calculateDiff**(`messageCounter`): `number`

Calculate plain diff without rollover.
This method is mainly overridden for other counter types and follow the following semantic
Return number is:
* negative if the new message counter is smaller than the current maximum. Smaller values within the Window size
  are check separately within the window. Other smaller values are considered DUPLICATE
* positive if the new message counter is larger than the current maximum and are always NEW

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageCounter` | `number` |

#### Returns

`number`

#### Overrides

[MessageReceptionStateEncryptedWithoutRollover](protocol_export.MessageReceptionStateEncryptedWithoutRollover.md).[calculateDiff](protocol_export.MessageReceptionStateEncryptedWithoutRollover.md#calculatediff)

#### Defined in

[packages/matter.js/src/protocol/MessageReceptionState.ts:181](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageReceptionState.ts#L181)

___

### updateMessageCounter

▸ **updateMessageCounter**(`messageCounter`): `void`

Returns true if the message counter is a duplicate.

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageCounter` | `number` |

#### Returns

`void`

#### Inherited from

[MessageReceptionStateEncryptedWithoutRollover](protocol_export.MessageReceptionStateEncryptedWithoutRollover.md).[updateMessageCounter](protocol_export.MessageReceptionStateEncryptedWithoutRollover.md#updatemessagecounter)

#### Defined in

[packages/matter.js/src/protocol/MessageReceptionState.ts:111](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageReceptionState.ts#L111)
