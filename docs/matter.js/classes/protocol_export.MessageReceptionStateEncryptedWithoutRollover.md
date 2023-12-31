[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/export](../modules/protocol_export.md) / MessageReceptionStateEncryptedWithoutRollover

# Class: MessageReceptionStateEncryptedWithoutRollover

[protocol/export](../modules/protocol_export.md).MessageReceptionStateEncryptedWithoutRollover

Implements a message reception state for encrypted messages without rollover.
A counter in the range [(max_message_counter + 1) to (232 - 1)] SHALL be considered new, and cause the
max_message_counter value to be updated.
Message counters within the range of the bitmap SHALL be considered duplicate if the corresponding bit
offset is set to true. All other message counters SHALL be considered duplicate.

## Hierarchy

- **`MessageReceptionStateEncryptedWithoutRollover`**

  ↳ [`MessageReceptionStateEncryptedWithRollover`](protocol_export.MessageReceptionStateEncryptedWithRollover.md)

  ↳ [`MessageReceptionStateUnencryptedWithRollover`](protocol_export.MessageReceptionStateUnencryptedWithRollover.md)

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

#### Defined in

[packages/matter.js/src/protocol/MessageReceptionState.ts:29](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/protocol/MessageReceptionState.ts#L29)

## Properties

### maximumMessageCounter

• `Protected` **maximumMessageCounter**: `undefined` \| `number`

#### Defined in

[packages/matter.js/src/protocol/MessageReceptionState.ts:26](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/protocol/MessageReceptionState.ts#L26)

___

### messageCounterBitmap

• `Private` **messageCounterBitmap**: `number` = `0xffffffff`

#### Defined in

[packages/matter.js/src/protocol/MessageReceptionState.ts:27](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/protocol/MessageReceptionState.ts#L27)

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

[packages/matter.js/src/protocol/MessageReceptionState.ts:49](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/protocol/MessageReceptionState.ts#L49)

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

[packages/matter.js/src/protocol/MessageReceptionState.ts:57](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/protocol/MessageReceptionState.ts#L57)

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

[packages/matter.js/src/protocol/MessageReceptionState.ts:36](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/protocol/MessageReceptionState.ts#L36)

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

[packages/matter.js/src/protocol/MessageReceptionState.ts:95](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/protocol/MessageReceptionState.ts#L95)

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

#### Defined in

[packages/matter.js/src/protocol/MessageReceptionState.ts:106](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/protocol/MessageReceptionState.ts#L106)

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

[packages/matter.js/src/protocol/MessageReceptionState.ts:81](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/protocol/MessageReceptionState.ts#L81)
