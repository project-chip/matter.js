[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/protocol](../modules/exports_protocol.md) / MessageReceptionStateUnencryptedWithRollover

# Class: MessageReceptionStateUnencryptedWithRollover

[exports/protocol](../modules/exports_protocol.md).MessageReceptionStateUnencryptedWithRollover

Implements a message reception state for unencrypted messages without rollover.
Any message counter equal to max_message_counter or within the message counter window, where the corresponding bit
is set to true SHALL be considered duplicate. All other message counters, whether behind the window or ahead of
max_message_counter, are considered new and SHALL update max_message_counter and shift the window accordingly.
Messages with a counter behind the window are likely caused by a node rebooting and are thus processed as rolling
back the window to the current location.

## Hierarchy

- [`MessageReceptionStateEncryptedWithoutRollover`](exports_protocol.MessageReceptionStateEncryptedWithoutRollover.md)

  ↳ **`MessageReceptionStateUnencryptedWithRollover`**

## Table of contents

### Constructors

- [constructor](exports_protocol.MessageReceptionStateUnencryptedWithRollover.md#constructor)

### Properties

- [maximumMessageCounter](exports_protocol.MessageReceptionStateUnencryptedWithRollover.md#maximummessagecounter)

### Methods

- [calculateDiff](exports_protocol.MessageReceptionStateUnencryptedWithRollover.md#calculatediff)
- [updateMessageCounter](exports_protocol.MessageReceptionStateUnencryptedWithRollover.md#updatemessagecounter)

## Constructors

### constructor

• **new MessageReceptionStateUnencryptedWithRollover**(`messageCounter?`): [`MessageReceptionStateUnencryptedWithRollover`](exports_protocol.MessageReceptionStateUnencryptedWithRollover.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageCounter?` | `number` |

#### Returns

[`MessageReceptionStateUnencryptedWithRollover`](exports_protocol.MessageReceptionStateUnencryptedWithRollover.md)

#### Inherited from

[MessageReceptionStateEncryptedWithoutRollover](exports_protocol.MessageReceptionStateEncryptedWithoutRollover.md).[constructor](exports_protocol.MessageReceptionStateEncryptedWithoutRollover.md#constructor)

#### Defined in

packages/matter.js/dist/esm/protocol/MessageReceptionState.d.ts:22

## Properties

### maximumMessageCounter

• `Protected` **maximumMessageCounter**: `undefined` \| `number`

#### Inherited from

[MessageReceptionStateEncryptedWithoutRollover](exports_protocol.MessageReceptionStateEncryptedWithoutRollover.md).[maximumMessageCounter](exports_protocol.MessageReceptionStateEncryptedWithoutRollover.md#maximummessagecounter)

#### Defined in

packages/matter.js/dist/esm/protocol/MessageReceptionState.d.ts:20

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

[MessageReceptionStateEncryptedWithoutRollover](exports_protocol.MessageReceptionStateEncryptedWithoutRollover.md).[calculateDiff](exports_protocol.MessageReceptionStateEncryptedWithoutRollover.md#calculatediff)

#### Defined in

packages/matter.js/dist/esm/protocol/MessageReceptionState.d.ts:63

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

[MessageReceptionStateEncryptedWithoutRollover](exports_protocol.MessageReceptionStateEncryptedWithoutRollover.md).[updateMessageCounter](exports_protocol.MessageReceptionStateEncryptedWithoutRollover.md#updatemessagecounter)

#### Defined in

packages/matter.js/dist/esm/protocol/MessageReceptionState.d.ts:43
