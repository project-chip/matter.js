[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [protocol/export](../README.md) / MessageReceptionStateEncryptedWithoutRollover

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

[packages/matter.js/src/protocol/MessageReceptionState.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageReceptionState.ts#L33)

## Properties

### maximumMessageCounter

> `protected` **maximumMessageCounter**: `undefined` \| `number`

#### Source

[packages/matter.js/src/protocol/MessageReceptionState.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageReceptionState.ts#L30)

***

### messageCounterBitmap

> `private` **messageCounterBitmap**: `number` = `0xffffffff`

#### Source

[packages/matter.js/src/protocol/MessageReceptionState.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageReceptionState.ts#L31)

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

[packages/matter.js/src/protocol/MessageReceptionState.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageReceptionState.ts#L54)

***

### calculateMessageCounterBitmap()

> `private` **calculateMessageCounterBitmap**(`messageCounterBitmap`, `diff`): `number`

Update or move the message counter window.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `messageCounterBitmap` | `number` |
| `diff` | `number` |

#### Returns

`number`

#### Source

[packages/matter.js/src/protocol/MessageReceptionState.ts:62](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageReceptionState.ts#L62)

***

### initialize()

> `private` **initialize**(`messageCounter`): `void`

Initialize the message counter state.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `messageCounter` | `number` |

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/MessageReceptionState.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageReceptionState.ts#L41)

***

### isCounterKnownInBitmap()

> `private` **isCounterKnownInBitmap**(`diff`): `boolean`

Check if the message counter is known in the bitmap.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `diff` | `number` |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/protocol/MessageReceptionState.ts:100](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageReceptionState.ts#L100)

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

[packages/matter.js/src/protocol/MessageReceptionState.ts:111](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageReceptionState.ts#L111)

***

### updateMessageCounterAndBitmap()

> `private` **updateMessageCounterAndBitmap**(`messageCounter`, `diff`): `void`

Update the message counter and window.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `messageCounter` | `number` |
| `diff` | `number` |

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/MessageReceptionState.ts:86](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageReceptionState.ts#L86)
