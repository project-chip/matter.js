[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/protocol](../README.md) / MessageReceptionStateEncryptedWithoutRollover

# Class: MessageReceptionStateEncryptedWithoutRollover

Implements a message reception state for encrypted messages without rollover.
A counter in the range [(max_message_counter + 1) to (232 - 1)] SHALL be considered new, and cause the
max_message_counter value to be updated.
Message counters within the range of the bitmap SHALL be considered duplicate if the corresponding bit
offset is set to true. All other message counters SHALL be considered duplicate.

## Extends

- [`MessageReceptionState`](MessageReceptionState.md)

## Extended by

- [`MessageReceptionStateEncryptedWithRollover`](MessageReceptionStateEncryptedWithRollover.md)
- [`MessageReceptionStateUnencryptedWithRollover`](MessageReceptionStateUnencryptedWithRollover.md)

## Constructors

### new MessageReceptionStateEncryptedWithoutRollover()

> **new MessageReceptionStateEncryptedWithoutRollover**(`messageCounter`?): [`MessageReceptionStateEncryptedWithoutRollover`](MessageReceptionStateEncryptedWithoutRollover.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `messageCounter`? | `number` |

#### Returns

[`MessageReceptionStateEncryptedWithoutRollover`](MessageReceptionStateEncryptedWithoutRollover.md)

#### Overrides

[`MessageReceptionState`](MessageReceptionState.md).[`constructor`](MessageReceptionState.md#constructors)

#### Source

packages/matter.js/dist/esm/protocol/MessageReceptionState.d.ts:22

## Properties

### calculateMessageCounterBitmap

> `private` **calculateMessageCounterBitmap**: `any`

Update or move the message counter window.

#### Source

packages/matter.js/dist/esm/protocol/MessageReceptionState.d.ts:35

***

### initialize

> `private` **initialize**: `any`

Initialize the message counter state.

#### Source

packages/matter.js/dist/esm/protocol/MessageReceptionState.d.ts:24

***

### isCounterKnownInBitmap

> `private` **isCounterKnownInBitmap**: `any`

Check if the message counter is known in the bitmap.

#### Source

packages/matter.js/dist/esm/protocol/MessageReceptionState.d.ts:39

***

### maximumMessageCounter

> `protected` **maximumMessageCounter**: `undefined` \| `number`

#### Source

packages/matter.js/dist/esm/protocol/MessageReceptionState.d.ts:20

***

### messageCounterBitmap

> `private` **messageCounterBitmap**: `any`

#### Source

packages/matter.js/dist/esm/protocol/MessageReceptionState.d.ts:21

***

### updateMessageCounterAndBitmap

> `private` **updateMessageCounterAndBitmap**: `any`

Update the message counter and window.

#### Source

packages/matter.js/dist/esm/protocol/MessageReceptionState.d.ts:37

## Methods

### calculateDiff()

> `protected` **calculateDiff**(`messageCounter`): `number`

Calculate plain diff without rollover.
This method is mainly overridden for other counter types and follow the following semantic
Return number is:
* negative if the new message counter is smaller than the current maximum. Smaller values within the Window size
  are check separately within the window. Other smaller values are considered DUPLICATE
* positive if the new message counter is larger than the current maximum and are always NEW

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `messageCounter` | `number` |

#### Returns

`number`

#### Source

packages/matter.js/dist/esm/protocol/MessageReceptionState.d.ts:33

***

### updateMessageCounter()

> **updateMessageCounter**(`messageCounter`): `void`

Returns true if the message counter is a duplicate.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `messageCounter` | `number` |

#### Returns

`void`

#### Overrides

[`MessageReceptionState`](MessageReceptionState.md).[`updateMessageCounter`](MessageReceptionState.md#updatemessagecounter)

#### Source

packages/matter.js/dist/esm/protocol/MessageReceptionState.d.ts:43
