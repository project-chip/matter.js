[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/protocol](../README.md) / MessageReceptionStateUnencryptedWithRollover

# Class: MessageReceptionStateUnencryptedWithRollover

Implements a message reception state for unencrypted messages without rollover.
Any message counter equal to max_message_counter or within the message counter window, where the corresponding bit
is set to true SHALL be considered duplicate. All other message counters, whether behind the window or ahead of
max_message_counter, are considered new and SHALL update max_message_counter and shift the window accordingly.
Messages with a counter behind the window are likely caused by a node rebooting and are thus processed as rolling
back the window to the current location.

## Extends

- [`MessageReceptionStateEncryptedWithoutRollover`](MessageReceptionStateEncryptedWithoutRollover.md)

## Constructors

### new MessageReceptionStateUnencryptedWithRollover()

> **new MessageReceptionStateUnencryptedWithRollover**(`messageCounter`?): [`MessageReceptionStateUnencryptedWithRollover`](MessageReceptionStateUnencryptedWithRollover.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `messageCounter`? | `number` |

#### Returns

[`MessageReceptionStateUnencryptedWithRollover`](MessageReceptionStateUnencryptedWithRollover.md)

#### Inherited from

[`MessageReceptionStateEncryptedWithoutRollover`](MessageReceptionStateEncryptedWithoutRollover.md).[`constructor`](MessageReceptionStateEncryptedWithoutRollover.md#constructors)

#### Source

packages/matter.js/dist/esm/protocol/MessageReceptionState.d.ts:22

## Properties

### maximumMessageCounter

> `protected` **maximumMessageCounter**: `undefined` \| `number`

#### Inherited from

[`MessageReceptionStateEncryptedWithoutRollover`](MessageReceptionStateEncryptedWithoutRollover.md).[`maximumMessageCounter`](MessageReceptionStateEncryptedWithoutRollover.md#maximummessagecounter)

#### Source

packages/matter.js/dist/esm/protocol/MessageReceptionState.d.ts:20

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

#### Overrides

[`MessageReceptionStateEncryptedWithoutRollover`](MessageReceptionStateEncryptedWithoutRollover.md).[`calculateDiff`](MessageReceptionStateEncryptedWithoutRollover.md#calculatediff)

#### Source

packages/matter.js/dist/esm/protocol/MessageReceptionState.d.ts:63

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

#### Inherited from

[`MessageReceptionStateEncryptedWithoutRollover`](MessageReceptionStateEncryptedWithoutRollover.md).[`updateMessageCounter`](MessageReceptionStateEncryptedWithoutRollover.md#updatemessagecounter)

#### Source

packages/matter.js/dist/esm/protocol/MessageReceptionState.d.ts:43
