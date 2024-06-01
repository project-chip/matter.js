[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [behavior/export](../../README.md) / [\<internal\>](../README.md) / Transaction

# Interface: Transaction

By default, Matter.js state is transactional.

Transactions are either shared (for reads) or exclusive (for writes). Exclusive transactions do not block shared
transactions but state updates will not be visible until the transaction completes.

Writes do block other writes.  Transactions start automatically when a write occurs.  Since this usually happens
synchronously, the best Matter.js can do is throw an error if two write transactions would conflict.  However, you
can avoid this by using [begin](Transaction.md#begin) which will wait for other transactions to complete before acquiring resource
locks.

Persistence is implemented by a list of participants.  Commits are two phase.  If an error is thrown in phase one all
participants roll back. An error in phase 2 could result in data inconsistency as we don't have any form of retry as
of yet.

TODO - does prevent deadlock but we should probably add a timeout for resource locking

## Properties

### participants

> `readonly` **participants**: `Set`\<[`Participant`](Participant.md)\>

Transaction participants.

#### Source

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L44)

***

### resources

> `readonly` **resources**: `Set`\<[`Resource`](Resource.md)\>

Resources addressed by the participants.

#### Source

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L49)

***

### status

> `readonly` **status**: [`Status`](../enumerations/Status.md)

The status of the transaction.

#### Source

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L39)

***

### via

> `readonly` **via**: `string`

Diagnostic description of the transaction's source.

#### Source

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L34)

***

### waitingOn

> `readonly` **waitingOn**: `undefined` \| `Iterable`\<[`Transaction`](Transaction.md)\>

The transactions currently blocking this transaction, if any.

#### Source

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L54)

## Methods

### addParticipants()

> **addParticipants**(...`participants`): `void`

Add [ParticipantType](../README.md#participanttype)s to the transaction.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`participants` | [`Participant`](Participant.md)[] |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:115](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L115)

***

### addResources()

> **addResources**(...`resources`): `Promise`\<`void`\>

Add Resources to the transaction.

If the transaction is exclusive (writing) the transaction will acquire the lock on each [ResourceType](../README.md#resourcetype),
waiting for other writers to finish if necessary.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`resources` | [`Resource`](Resource.md)[] |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:72](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L72)

***

### addResourcesSync()

> **addResourcesSync**(...`resources`): `void`

Add [ResourceType](../README.md#resourcetype)s to the transaction synchronously.

Unlike [addResources](Transaction.md#addresources), this method will throw an error if the
transaction is exclusive and the resources cannot be locked.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`resources` | [`Resource`](Resource.md)[] |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L80)

***

### begin()

> **begin**(): `Promise`\<`void`\>

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

#### Source

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:102](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L102)

***

### beginSync()

> **beginSync**(): `void`

Begin an exclusive transaction in a synchronous context.

Unlike [begin](Transaction.md#begin), this method will throw an error if any participant has already joined an exclusive
transaction.

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:110](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L110)

***

### commit()

> **commit**(): [`MaybePromise`](../../../../util/export/README.md#maybepromiset)

Commit the transaction.

Matter.js commits automatically when an interaction completes.  You may commit manually to publish your changes
mid-interaction.

After commit an exclusive transaction becomes shared and data references refresh to the most recent value.

#### Returns

[`MaybePromise`](../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:130](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L130)

***

### getParticipant()

> **getParticipant**(`role`): `undefined` \| [`Participant`](Participant.md)

Retrieve a participant with a specific role.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `role` | `object` |

#### Returns

`undefined` \| [`Participant`](Participant.md)

#### Source

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:120](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L120)

***

### onClose()

> **onClose**(`actor`): `void`

Listen for [Transaction.status](Transaction.md#status) close.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `actor` | () => `void` |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:64](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L64)

***

### onShared()

> **onShared**(`actor`, `once`?): `void`

Listen for transaction commit or roll back.  This may occur more than once for a given.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `actor` | () => `void` |
| `once`? | `boolean` |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:59](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L59)

***

### rollback()

> **rollback**(): [`MaybePromise`](../../../../util/export/README.md#maybepromiset)

Roll back the transaction.

Matter.js rolls back automatically when an interaction fails.  You may roll back manually to undo your changes
mid-interaction.

After rollback an exclusive transaction becomes shared and data references refresh to the most recent value.

#### Returns

[`MaybePromise`](../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:140](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L140)

***

### waitFor()

> **waitFor**(`others`): `Promise`\<`void`\>

Wait for a set of transactions to complete.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `others` | `Set`\<[`Transaction`](Transaction.md)\> | the set of transactions to await; cleared on return |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:147](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L147)
