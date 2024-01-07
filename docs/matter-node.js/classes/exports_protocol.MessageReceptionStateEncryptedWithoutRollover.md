[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/protocol](../modules/exports_protocol.md) / MessageReceptionStateEncryptedWithoutRollover

# Class: MessageReceptionStateEncryptedWithoutRollover

[exports/protocol](../modules/exports_protocol.md).MessageReceptionStateEncryptedWithoutRollover

Implements a message reception state for encrypted messages without rollover.
A counter in the range [(max_message_counter + 1) to (232 - 1)] SHALL be considered new, and cause the
max_message_counter value to be updated.
Message counters within the range of the bitmap SHALL be considered duplicate if the corresponding bit
offset is set to true. All other message counters SHALL be considered duplicate.

## Hierarchy

- **`MessageReceptionStateEncryptedWithoutRollover`**

  ↳ [`MessageReceptionStateEncryptedWithRollover`](exports_protocol.MessageReceptionStateEncryptedWithRollover.md)

  ↳ [`MessageReceptionStateUnencryptedWithRollover`](exports_protocol.MessageReceptionStateUnencryptedWithRollover.md)

## Table of contents

### Constructors

- [constructor](exports_protocol.MessageReceptionStateEncryptedWithoutRollover.md#constructor)

### Properties

- [calculateMessageCounterBitmap](exports_protocol.MessageReceptionStateEncryptedWithoutRollover.md#calculatemessagecounterbitmap)
- [initialize](exports_protocol.MessageReceptionStateEncryptedWithoutRollover.md#initialize)
- [isCounterKnownInBitmap](exports_protocol.MessageReceptionStateEncryptedWithoutRollover.md#iscounterknowninbitmap)
- [maximumMessageCounter](exports_protocol.MessageReceptionStateEncryptedWithoutRollover.md#maximummessagecounter)
- [messageCounterBitmap](exports_protocol.MessageReceptionStateEncryptedWithoutRollover.md#messagecounterbitmap)
- [updateMessageCounterAndBitmap](exports_protocol.MessageReceptionStateEncryptedWithoutRollover.md#updatemessagecounterandbitmap)

### Methods

- [calculateDiff](exports_protocol.MessageReceptionStateEncryptedWithoutRollover.md#calculatediff)
- [updateMessageCounter](exports_protocol.MessageReceptionStateEncryptedWithoutRollover.md#updatemessagecounter)

## Constructors

### constructor

• **new MessageReceptionStateEncryptedWithoutRollover**(`messageCounter?`): [`MessageReceptionStateEncryptedWithoutRollover`](exports_protocol.MessageReceptionStateEncryptedWithoutRollover.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageCounter?` | `number` |

#### Returns

[`MessageReceptionStateEncryptedWithoutRollover`](exports_protocol.MessageReceptionStateEncryptedWithoutRollover.md)

#### Defined in

packages/matter.js/dist/esm/protocol/MessageReceptionState.d.ts:19

## Properties

### calculateMessageCounterBitmap

• `Private` **calculateMessageCounterBitmap**: `any`

Update or move the message counter window.

#### Defined in

packages/matter.js/dist/esm/protocol/MessageReceptionState.d.ts:32

___

### initialize

• `Private` **initialize**: `any`

Initialize the message counter state.

#### Defined in

packages/matter.js/dist/esm/protocol/MessageReceptionState.d.ts:21

___

### isCounterKnownInBitmap

• `Private` **isCounterKnownInBitmap**: `any`

Check if the message counter is known in the bitmap.

#### Defined in

packages/matter.js/dist/esm/protocol/MessageReceptionState.d.ts:36

___

### maximumMessageCounter

• `Protected` **maximumMessageCounter**: `undefined` \| `number`

#### Defined in

packages/matter.js/dist/esm/protocol/MessageReceptionState.d.ts:17

___

### messageCounterBitmap

• `Private` **messageCounterBitmap**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/MessageReceptionState.d.ts:18

___

### updateMessageCounterAndBitmap

• `Private` **updateMessageCounterAndBitmap**: `any`

Update the message counter and window.

#### Defined in

packages/matter.js/dist/esm/protocol/MessageReceptionState.d.ts:34

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

packages/matter.js/dist/esm/protocol/MessageReceptionState.d.ts:30

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

packages/matter.js/dist/esm/protocol/MessageReceptionState.d.ts:40
