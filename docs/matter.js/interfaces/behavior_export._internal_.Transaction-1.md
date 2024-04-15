[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/export](../modules/behavior_export.md) / [\<internal\>](../modules/behavior_export._internal_.md) / Transaction

# Interface: Transaction

[behavior/export](../modules/behavior_export.md).[\<internal\>](../modules/behavior_export._internal_.md).Transaction

By default, Matter.js state is transactional.

Transactions are either shared (for reads) or exclusive (for writes). Exclusive transactions do not block shared
transactions but state updates will not be visible until the transaction completes.

Writes do block other writes.  Transactions start automatically when a write occurs.  Since this usually happens
synchronously, the best Matter.js can do is throw an error if two write transactions would conflict.  However, you
can avoid this by using [begin](behavior_export._internal_.Transaction-1.md#begin) which will wait for other transactions to complete before acquiring resource
locks.

Persistence is implemented by a list of participants.  Commits are two phase.  If an error is thrown in phase one all
participants roll back. An error in phase 2 could result in data inconsistency as we don't have any form of retry as
of yet.

TODO - does prevent deadlock but we should probably add a timeout for resource locking

## Implemented by

- [`Tx`](../classes/behavior_export._internal_.Tx.md)

## Table of contents

### Properties

- [participants](behavior_export._internal_.Transaction-1.md#participants)
- [resources](behavior_export._internal_.Transaction-1.md#resources)
- [status](behavior_export._internal_.Transaction-1.md#status)
- [via](behavior_export._internal_.Transaction-1.md#via)
- [waitingOn](behavior_export._internal_.Transaction-1.md#waitingon)

### Methods

- [addParticipants](behavior_export._internal_.Transaction-1.md#addparticipants)
- [addResources](behavior_export._internal_.Transaction-1.md#addresources)
- [addResourcesSync](behavior_export._internal_.Transaction-1.md#addresourcessync)
- [begin](behavior_export._internal_.Transaction-1.md#begin)
- [beginSync](behavior_export._internal_.Transaction-1.md#beginsync)
- [commit](behavior_export._internal_.Transaction-1.md#commit)
- [getParticipant](behavior_export._internal_.Transaction-1.md#getparticipant)
- [onClose](behavior_export._internal_.Transaction-1.md#onclose)
- [onShared](behavior_export._internal_.Transaction-1.md#onshared)
- [rollback](behavior_export._internal_.Transaction-1.md#rollback)
- [waitFor](behavior_export._internal_.Transaction-1.md#waitfor)

## Properties

### participants

• `Readonly` **participants**: `Set`\<[`Participant`](behavior_export._internal_.Participant.md)\>

Transaction participants.

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:44](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L44)

___

### resources

• `Readonly` **resources**: `Set`\<[`Resource`](behavior_export._internal_.Resource-1.md)\>

Resources addressed by the participants.

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:49](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L49)

___

### status

• `Readonly` **status**: [`Status`](../enums/behavior_export._internal_.Status-1.md)

The status of the transaction.

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L39)

___

### via

• `Readonly` **via**: `string`

Diagnostic description of the transaction's source.

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:34](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L34)

___

### waitingOn

• `Readonly` **waitingOn**: `undefined` \| `Iterable`\<[`Transaction`](behavior_export._internal_.Transaction-1.md)\>

The transactions currently blocking this transaction, if any.

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L54)

## Methods

### addParticipants

▸ **addParticipants**(`...participants`): `void`

Add [ParticipantType](../modules/behavior_export._internal_.md#participanttype)s to the transaction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...participants` | [`Participant`](behavior_export._internal_.Participant.md)[] |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:115](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L115)

___

### addResources

▸ **addResources**(`...resources`): `Promise`\<`void`\>

Add Resources to the transaction.

If the transaction is exclusive (writing) the transaction will acquire the lock on each [ResourceType](../modules/behavior_export._internal_.md#resourcetype),
waiting for other writers to finish if necessary.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...resources` | [`Resource`](behavior_export._internal_.Resource-1.md)[] |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:72](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L72)

___

### addResourcesSync

▸ **addResourcesSync**(`...resources`): `void`

Add [ResourceType](../modules/behavior_export._internal_.md#resourcetype)s to the transaction synchronously.

Unlike [addResources](behavior_export._internal_.Transaction-1.md#addresources), this method will throw an error if the
transaction is exclusive and the resources cannot be locked.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...resources` | [`Resource`](behavior_export._internal_.Resource-1.md)[] |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L80)

___

### begin

▸ **begin**(): `Promise`\<`void`\>

Begin an exclusive transaction.

Transactions begin automatically on write but there are a few reasons you may want to use this method to start an
exclusive transaction explicitly:

  1. Automatic transactions are started in a synchronous context so conflicting transactions will throw an error.
     If you start a transaction, your code will await any transaction that would otherwise throw an error.

  2. Transaction isolation means your view of data may become stale if a write occurs in another transaction.
     Once you start a transaction you block other writers so can be assured you're dealing with newest state.

  3. Say transaction A has an exclusive lock on resource 1 and awaits resource 2.  Transaction B has an exclusive
     lock on resource 2. Transaction B cannot then await resource 1 without causing a deadlock.  Matter.js will
     detect the deadlock and throw an error. One way to prevent this is to begin a transaction and acquire locks
     in a specific order.

None of the issues above are likely and are probably not a concern for your application.  If you do encounter
these issues the error message will suggest solutions.

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:102](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L102)

___

### beginSync

▸ **beginSync**(): `void`

Begin an exclusive transaction in a synchronous context.

Unlike [begin](behavior_export._internal_.Transaction-1.md#begin), this method will throw an error if any participant has already joined an exclusive
transaction.

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:110](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L110)

___

### commit

▸ **commit**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Commit the transaction.

Matter.js commits automatically when an interaction completes.  You may commit manually to publish your changes
mid-interaction.

After commit an exclusive transaction becomes shared and data references refresh to the most recent value.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:130](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L130)

___

### getParticipant

▸ **getParticipant**(`role`): `undefined` \| [`Participant`](behavior_export._internal_.Participant.md)

Retrieve a participant with a specific role.

#### Parameters

| Name | Type |
| :------ | :------ |
| `role` | `Object` |

#### Returns

`undefined` \| [`Participant`](behavior_export._internal_.Participant.md)

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:120](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L120)

___

### onClose

▸ **onClose**(`actor`): `void`

Listen for [Transaction.status](behavior_export._internal_.Transaction-1.md#status) close.

#### Parameters

| Name | Type |
| :------ | :------ |
| `actor` | () => `void` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:64](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L64)

___

### onShared

▸ **onShared**(`actor`, `once?`): `void`

Listen for transaction commit or roll back.  This may occur more than once for a given.

#### Parameters

| Name | Type |
| :------ | :------ |
| `actor` | () => `void` |
| `once?` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:59](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L59)

___

### rollback

▸ **rollback**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Roll back the transaction.

Matter.js rolls back automatically when an interaction fails.  You may roll back manually to undo your changes
mid-interaction.

After rollback an exclusive transaction becomes shared and data references refresh to the most recent value.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:140](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L140)

___

### waitFor

▸ **waitFor**(`others`): `Promise`\<`void`\>

Wait for a set of transactions to complete.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `others` | `Set`\<[`Transaction`](behavior_export._internal_.Transaction-1.md)\> | the set of transactions to await; cleared on return |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:147](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L147)
