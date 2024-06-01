[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [behavior/export](../../README.md) / [\<internal\>](../README.md) / Tx

# Class: Tx

The concrete implementation of the Transaction interface.

## Implements

- [`Transaction`](../interfaces/Transaction.md)

## Constructors

### new Tx()

> **new Tx**(`via`, `readonly`): [`Tx`](Tx.md)

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `via` | `string` | `undefined` |
| `readonly` | `boolean` | `false` |

#### Returns

[`Tx`](Tx.md)

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:142](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L142)

## Properties

### #closed?

> `private` `optional` **#closed**: [`Observable`](../../../../util/export/interfaces/Observable.md)\<[], `void`\>

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:140](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L140)

***

### #participants

> `private` **#participants**: `Set`\<[`Participant`](../interfaces/Participant.md)\>

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:133](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L133)

***

### #resources

> `private` **#resources**: `Set`\<[`Resource`](../interfaces/Resource.md)\>

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:135](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L135)

***

### #roles

> `private` **#roles**: `Map`\<`object`, [`Participant`](../interfaces/Participant.md)\>

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:134](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L134)

***

### #shared?

> `private` `optional` **#shared**: [`Observable`](../../../../util/export/interfaces/Observable.md)\<[], `void`\>

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:139](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L139)

***

### #status

> `private` **#status**: [`Status`](../enumerations/Status.md)

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:136](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L136)

***

### #via

> `private` **#via**: `string`

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:138](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L138)

***

### #waitingOn?

> `private` `optional` **#waitingOn**: `Iterable`\<[`Transaction`](../interfaces/Transaction.md)\>

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:137](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L137)

## Accessors

### participants

> `get` **participants**(): `Set`\<[`Participant`](../interfaces/Participant.md)\>

Transaction participants.

#### Returns

`Set`\<[`Participant`](../interfaces/Participant.md)\>

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:167](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L167)

***

### resources

> `get` **resources**(): `Set`\<[`Resource`](../interfaces/Resource.md)\>

Resources addressed by the participants.

#### Returns

`Set`\<[`Resource`](../interfaces/Resource.md)\>

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:171](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L171)

***

### status

> `get` **status**(): [`Status`](../enumerations/Status.md)

The status of the transaction.

#### Returns

[`Status`](../enumerations/Status.md)

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:163](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L163)

***

### via

> `get` **via**(): `string`

Diagnostic description of the transaction's source.

#### Returns

`string`

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:159](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L159)

***

### waitingOn

> `get` **waitingOn**(): `undefined` \| `Iterable`\<[`Transaction`](../interfaces/Transaction.md)\>

The transactions currently blocking this transaction, if any.

#### Returns

`undefined` \| `Iterable`\<[`Transaction`](../interfaces/Transaction.md)\>

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:175](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L175)

## Methods

### #assertAvailable()

> `private` **#assertAvailable**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:699](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L699)

***

### #executeCommit()

> `private` **#executeCommit**(): [`MaybePromise`](../../../../util/export/README.md#maybepromiset)

Commit logic passed to #finalize.

#### Returns

[`MaybePromise`](../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:510](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L510)

***

### #executeCommit1()

> `private` **#executeCommit1**(): [`MaybePromise`](../../../../util/export/README.md#maybepromiset)

#### Returns

[`MaybePromise`](../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:519](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L519)

***

### #executeCommit2()

> `private` **#executeCommit2**(): `undefined` \| `Promise`\<`void`\>

#### Returns

`undefined` \| `Promise`\<`void`\>

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:565](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L565)

***

### #executePostCommit()

> `private` **#executePostCommit**(`participants`): [`MaybePromise`](../../../../util/export/README.md#maybepromiset)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `participants` | [`Participant`](../interfaces/Participant.md)[] |

#### Returns

[`MaybePromise`](../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:606](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L606)

***

### #executePreCommit()

> `private` **#executePreCommit**(): [`MaybePromise`](../../../../util/export/README.md#maybepromiset)\<`void`\>

Iteratively execute pre-commit until all participants "settle" and report no possible mutation.

#### Returns

[`MaybePromise`](../../../../util/export/README.md#maybepromiset)\<`void`\>

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:409](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L409)

***

### #executeRollback()

> `private` **#executeRollback**(): `undefined` \| `Promise`\<`void`\>

Rollback logic passed to #finish.

#### Returns

`undefined` \| `Promise`\<`void`\>

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:633](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L633)

***

### #finalize()

> `private` **#finalize**(`status`, `why`, `finalizer`): `undefined` \| `Promise`\<`void`\>

Shared implementation for commit and rollback.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `status` | [`Status`](../enumerations/Status.md) |
| `why` | `string` |
| `finalizer` | () => [`MaybePromise`](../../../../util/export/README.md#maybepromiset) |

#### Returns

`undefined` \| `Promise`\<`void`\>

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:365](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L365)

***

### #locksChanged()

> `private` **#locksChanged**(`resources`, `how`): `void`

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `resources` | `Set`\<[`Resource`](../interfaces/Resource.md)\> | `undefined` |
| `how` | `string` | `"locked"` |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:685](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L685)

***

### #log()

> `private` **#log**(...`message`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`message` | `unknown`[] |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:681](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L681)

***

### addParticipants()

> **addParticipants**(...`participants`): `void`

Add [ParticipantType](../README.md#participanttype)s to the transaction.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`participants` | [`Participant`](../interfaces/Participant.md)[] |

#### Returns

`void`

#### Implementation of

[`Transaction`](../interfaces/Transaction.md).[`addParticipants`](../interfaces/Transaction.md#addparticipants)

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:268](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L268)

***

### addResources()

> **addResources**(...`resources`): `Promise`\<`void`\>

Add Resources to the transaction.

If the transaction is exclusive (writing) the transaction will acquire the lock on each [ResourceType](../README.md#resourcetype),
waiting for other writers to finish if necessary.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`resources` | [`Resource`](../interfaces/Resource.md)[] |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Transaction`](../interfaces/Transaction.md).[`addResources`](../interfaces/Transaction.md#addresources)

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:197](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L197)

***

### addResourcesSync()

> **addResourcesSync**(...`resources`): `void`

Add [ResourceType](../README.md#resourcetype)s to the transaction synchronously.

Unlike [addResources](../interfaces/Transaction.md#addresources), this method will throw an error if the
transaction is exclusive and the resources cannot be locked.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`resources` | [`Resource`](../interfaces/Resource.md)[] |

#### Returns

`void`

#### Implementation of

[`Transaction`](../interfaces/Transaction.md).[`addResourcesSync`](../interfaces/Transaction.md#addresourcessync)

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:209](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L209)

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

#### Implementation of

[`Transaction`](../interfaces/Transaction.md).[`begin`](../interfaces/Transaction.md#begin)

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:225](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L225)

***

### beginSync()

> **beginSync**(): `void`

Begin an exclusive transaction in a synchronous context.

Unlike [begin](../interfaces/Transaction.md#begin), this method will throw an error if any participant has already joined an exclusive
transaction.

#### Returns

`void`

#### Implementation of

[`Transaction`](../interfaces/Transaction.md).[`beginSync`](../interfaces/Transaction.md#beginsync)

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:247](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L247)

***

### close()

> **close**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:151](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L151)

***

### commit()

> **commit**(): [`MaybePromise`](../../../../util/export/README.md#maybepromiset)

Commit the transaction.

Matter.js commits automatically when an interaction completes.  You may commit manually to publish your changes
mid-interaction.

After commit an exclusive transaction becomes shared and data references refresh to the most recent value.

#### Returns

[`MaybePromise`](../../../../util/export/README.md#maybepromiset)

#### Implementation of

[`Transaction`](../interfaces/Transaction.md).[`commit`](../interfaces/Transaction.md#commit)

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:299](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L299)

***

### getParticipant()

> **getParticipant**(`role`): `undefined` \| [`Participant`](../interfaces/Participant.md)

Retrieve a participant with a specific role.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `role` | `object` |

#### Returns

`undefined` \| [`Participant`](../interfaces/Participant.md)

#### Implementation of

[`Transaction`](../interfaces/Transaction.md).[`getParticipant`](../interfaces/Transaction.md#getparticipant)

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:293](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L293)

***

### onClose()

> **onClose**(`listener`): `void`

Listen for [Transaction.status](../interfaces/Transaction.md#status) close.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `listener` | () => `void` |

#### Returns

`void`

#### Implementation of

[`Transaction`](../interfaces/Transaction.md).[`onClose`](../interfaces/Transaction.md#onclose)

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:187](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L187)

***

### onShared()

> **onShared**(`listener`, `once`?): `void`

Listen for transaction commit or roll back.  This may occur more than once for a given.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `listener` | () => `void` |
| `once`? | `boolean` |

#### Returns

`void`

#### Implementation of

[`Transaction`](../interfaces/Transaction.md).[`onShared`](../interfaces/Transaction.md#onshared)

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:179](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L179)

***

### rollback()

> **rollback**(): `undefined` \| `Promise`\<`void`\>

Roll back the transaction.

Matter.js rolls back automatically when an interaction fails.  You may roll back manually to undo your changes
mid-interaction.

After rollback an exclusive transaction becomes shared and data references refresh to the most recent value.

#### Returns

`undefined` \| `Promise`\<`void`\>

#### Implementation of

[`Transaction`](../interfaces/Transaction.md).[`rollback`](../interfaces/Transaction.md#rollback)

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:324](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L324)

***

### toString()

> **toString**(): `string`

#### Returns

`string`

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:358](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L358)

***

### waitFor()

> **waitFor**(`others`): `Promise`\<`void`\>

Wait for a set of transactions to complete.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `others` | `Set`\<[`Transaction`](../interfaces/Transaction.md)\> | the set of transactions to await; cleared on return |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Transaction`](../interfaces/Transaction.md).[`waitFor`](../interfaces/Transaction.md#waitfor)

#### Source

[packages/matter.js/src/behavior/state/transaction/Tx.ts:330](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Tx.ts#L330)
