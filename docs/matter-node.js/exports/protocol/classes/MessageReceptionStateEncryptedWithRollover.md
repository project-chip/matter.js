[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/protocol](../README.md) / MessageReceptionStateEncryptedWithRollover

# Class: MessageReceptionStateEncryptedWithRollover

Implements a message reception state for encrypted messages with rollover.
A message counter with rollover is a free running message counter that monotonically increases, but rolls
over to zero when it exceeds the maximum value of the counter (32-bits). If the difference is below 2^31 then it is
considered a rollover and not a smaller value

## Extends

- [`MessageReceptionStateEncryptedWithoutRollover`](MessageReceptionStateEncryptedWithoutRollover.md)

## Constructors

### new MessageReceptionStateEncryptedWithRollover()

> **new MessageReceptionStateEncryptedWithRollover**(`messageCounter`?): [`MessageReceptionStateEncryptedWithRollover`](MessageReceptionStateEncryptedWithRollover.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `messageCounter`? | `number` |

#### Returns

[`MessageReceptionStateEncryptedWithRollover`](MessageReceptionStateEncryptedWithRollover.md)

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

packages/matter.js/dist/esm/protocol/MessageReceptionState.d.ts:52

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
