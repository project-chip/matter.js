[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/protocol](../modules/exports_protocol.md) / MessageReceptionStateEncryptedWithRollover

# Class: MessageReceptionStateEncryptedWithRollover

[exports/protocol](../modules/exports_protocol.md).MessageReceptionStateEncryptedWithRollover

Implements a message reception state for encrypted messages with rollover.
A message counter with rollover is a free running message counter that monotonically increases, but rolls
over to zero when it exceeds the maximum value of the counter (32-bits). If the difference is below 2^31 then it is
considered a rollover and not a smaller value

## Hierarchy

- [`MessageReceptionStateEncryptedWithoutRollover`](exports_protocol.MessageReceptionStateEncryptedWithoutRollover.md)

  ↳ **`MessageReceptionStateEncryptedWithRollover`**

## Table of contents

### Constructors

- [constructor](exports_protocol.MessageReceptionStateEncryptedWithRollover.md#constructor)

### Properties

- [maximumMessageCounter](exports_protocol.MessageReceptionStateEncryptedWithRollover.md#maximummessagecounter)

### Methods

- [calculateDiff](exports_protocol.MessageReceptionStateEncryptedWithRollover.md#calculatediff)
- [updateMessageCounter](exports_protocol.MessageReceptionStateEncryptedWithRollover.md#updatemessagecounter)

## Constructors

### constructor

• **new MessageReceptionStateEncryptedWithRollover**(`messageCounter?`): [`MessageReceptionStateEncryptedWithRollover`](exports_protocol.MessageReceptionStateEncryptedWithRollover.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageCounter?` | `number` |

#### Returns

[`MessageReceptionStateEncryptedWithRollover`](exports_protocol.MessageReceptionStateEncryptedWithRollover.md)

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

packages/matter.js/dist/esm/protocol/MessageReceptionState.d.ts:52

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
