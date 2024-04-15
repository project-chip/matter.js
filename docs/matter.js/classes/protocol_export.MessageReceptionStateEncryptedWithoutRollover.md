[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/export](../modules/protocol_export.md) / MessageReceptionStateEncryptedWithoutRollover

# Class: MessageReceptionStateEncryptedWithoutRollover

[protocol/export](../modules/protocol_export.md).MessageReceptionStateEncryptedWithoutRollover

Implements a message reception state for encrypted messages without rollover.
A counter in the range [(max_message_counter + 1) to (232 - 1)] SHALL be considered new, and cause the
max_message_counter value to be updated.
Message counters within the range of the bitmap SHALL be considered duplicate if the corresponding bit
offset is set to true. All other message counters SHALL be considered duplicate.

## Hierarchy

- [`MessageReceptionState`](protocol_export.MessageReceptionState.md)

  ↳ **`MessageReceptionStateEncryptedWithoutRollover`**

  ↳↳ [`MessageReceptionStateEncryptedWithRollover`](protocol_export.MessageReceptionStateEncryptedWithRollover.md)

  ↳↳ [`MessageReceptionStateUnencryptedWithRollover`](protocol_export.MessageReceptionStateUnencryptedWithRollover.md)

## Table of contents

### Constructors

- [constructor](protocol_export.MessageReceptionStateEncryptedWithoutRollover.md#constructor)

### Properties

- [maximumMessageCounter](protocol_export.MessageReceptionStateEncryptedWithoutRollover.md#maximummessagecounter)
- [messageCounterBitmap](protocol_export.MessageReceptionStateEncryptedWithoutRollover.md#messagecounterbitmap)

### Methods

- [calculateDiff](protocol_export.MessageReceptionStateEncryptedWithoutRollover.md#calculatediff)
- [calculateMessageCounterBitmap](protocol_export.MessageReceptionStateEncryptedWithoutRollover.md#calculatemessagecounterbitmap)
- [initialize](protocol_export.MessageReceptionStateEncryptedWithoutRollover.md#initialize)
- [isCounterKnownInBitmap](protocol_export.MessageReceptionStateEncryptedWithoutRollover.md#iscounterknowninbitmap)
- [updateMessageCounter](protocol_export.MessageReceptionStateEncryptedWithoutRollover.md#updatemessagecounter)
- [updateMessageCounterAndBitmap](protocol_export.MessageReceptionStateEncryptedWithoutRollover.md#updatemessagecounterandbitmap)

## Constructors

### constructor

• **new MessageReceptionStateEncryptedWithoutRollover**(`messageCounter?`): [`MessageReceptionStateEncryptedWithoutRollover`](protocol_export.MessageReceptionStateEncryptedWithoutRollover.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageCounter?` | `number` |

#### Returns

[`MessageReceptionStateEncryptedWithoutRollover`](protocol_export.MessageReceptionStateEncryptedWithoutRollover.md)

#### Overrides

[MessageReceptionState](protocol_export.MessageReceptionState.md).[constructor](protocol_export.MessageReceptionState.md#constructor)

#### Defined in

[packages/matter.js/src/protocol/MessageReceptionState.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageReceptionState.ts#L33)

## Properties

### maximumMessageCounter

• `Protected` **maximumMessageCounter**: `undefined` \| `number`

#### Defined in

[packages/matter.js/src/protocol/MessageReceptionState.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageReceptionState.ts#L30)

___

### messageCounterBitmap

• `Private` **messageCounterBitmap**: `number` = `0xffffffff`

#### Defined in

[packages/matter.js/src/protocol/MessageReceptionState.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageReceptionState.ts#L31)

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

#### Defined in

[packages/matter.js/src/protocol/MessageReceptionState.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageReceptionState.ts#L54)

___

### calculateMessageCounterBitmap

▸ **calculateMessageCounterBitmap**(`messageCounterBitmap`, `diff`): `number`

Update or move the message counter window.

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageCounterBitmap` | `number` |
| `diff` | `number` |

#### Returns

`number`

#### Defined in

[packages/matter.js/src/protocol/MessageReceptionState.ts:62](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageReceptionState.ts#L62)

___

### initialize

▸ **initialize**(`messageCounter`): `void`

Initialize the message counter state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageCounter` | `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/MessageReceptionState.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageReceptionState.ts#L41)

___

### isCounterKnownInBitmap

▸ **isCounterKnownInBitmap**(`diff`): `boolean`

Check if the message counter is known in the bitmap.

#### Parameters

| Name | Type |
| :------ | :------ |
| `diff` | `number` |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/protocol/MessageReceptionState.ts:100](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageReceptionState.ts#L100)

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

#### Overrides

[MessageReceptionState](protocol_export.MessageReceptionState.md).[updateMessageCounter](protocol_export.MessageReceptionState.md#updatemessagecounter)

#### Defined in

[packages/matter.js/src/protocol/MessageReceptionState.ts:111](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageReceptionState.ts#L111)

___

### updateMessageCounterAndBitmap

▸ **updateMessageCounterAndBitmap**(`messageCounter`, `diff`): `void`

Update the message counter and window.

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageCounter` | `number` |
| `diff` | `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/MessageReceptionState.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageReceptionState.ts#L86)
