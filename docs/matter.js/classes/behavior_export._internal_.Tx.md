[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/export](../modules/behavior_export.md) / [\<internal\>](../modules/behavior_export._internal_.md) / Tx

# Class: Tx

[behavior/export](../modules/behavior_export.md).[\<internal\>](../modules/behavior_export._internal_.md).Tx

The concrete implementation of the Transaction interface.

## Implements

- [`Transaction`](../interfaces/behavior_export._internal_.Transaction-1.md)

## Table of contents

### Constructors

- [constructor](behavior_export._internal_.Tx.md#constructor)

### Properties

- [#closed](behavior_export._internal_.Tx.md##closed)
- [#participants](behavior_export._internal_.Tx.md##participants)
- [#resources](behavior_export._internal_.Tx.md##resources)
- [#roles](behavior_export._internal_.Tx.md##roles)
- [#shared](behavior_export._internal_.Tx.md##shared)
- [#status](behavior_export._internal_.Tx.md##status)
- [#via](behavior_export._internal_.Tx.md##via)
- [#waitingOn](behavior_export._internal_.Tx.md##waitingon)

### Accessors

- [participants](behavior_export._internal_.Tx.md#participants)
- [resources](behavior_export._internal_.Tx.md#resources)
- [status](behavior_export._internal_.Tx.md#status)
- [via](behavior_export._internal_.Tx.md#via)
- [waitingOn](behavior_export._internal_.Tx.md#waitingon)

### Methods

- [#assertAvailable](behavior_export._internal_.Tx.md##assertavailable)
- [#executeCommit](behavior_export._internal_.Tx.md##executecommit)
- [#executeCommit1](behavior_export._internal_.Tx.md##executecommit1)
- [#executeCommit2](behavior_export._internal_.Tx.md##executecommit2)
- [#executePostCommit](behavior_export._internal_.Tx.md##executepostcommit)
- [#executeRollback](behavior_export._internal_.Tx.md##executerollback)
- [#finalize](behavior_export._internal_.Tx.md##finalize)
- [#locksChanged](behavior_export._internal_.Tx.md##lockschanged)
- [#log](behavior_export._internal_.Tx.md##log)
- [addParticipants](behavior_export._internal_.Tx.md#addparticipants)
- [addResources](behavior_export._internal_.Tx.md#addresources)
- [addResourcesSync](behavior_export._internal_.Tx.md#addresourcessync)
- [begin](behavior_export._internal_.Tx.md#begin)
- [beginSync](behavior_export._internal_.Tx.md#beginsync)
- [close](behavior_export._internal_.Tx.md#close)
- [commit](behavior_export._internal_.Tx.md#commit)
- [getParticipant](behavior_export._internal_.Tx.md#getparticipant)
- [onClose](behavior_export._internal_.Tx.md#onclose)
- [onShared](behavior_export._internal_.Tx.md#onshared)
- [rollback](behavior_export._internal_.Tx.md#rollback)
- [toString](behavior_export._internal_.Tx.md#tostring)
- [waitFor](behavior_export._internal_.Tx.md#waitfor)

## Constructors

### constructor

• **new Tx**(`via`, `readonly?`): [`Tx`](behavior_export._internal_.Tx.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `via` | `string` | `undefined` |
| `readonly` | `boolean` | `false` |

#### Returns

[`Tx`](behavior_export._internal_.Tx.md)

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Tx.ts:137](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Tx.ts#L137)

## Properties

### #closed

• `Private` `Optional` **#closed**: [`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Tx.ts:135](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Tx.ts#L135)

___

### #participants

• `Private` **#participants**: `Set`\<[`Participant`](../interfaces/behavior_export._internal_.Participant.md)\>

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Tx.ts:128](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Tx.ts#L128)

___

### #resources

• `Private` **#resources**: `Set`\<[`Resource`](../interfaces/behavior_export._internal_.Resource-1.md)\>

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Tx.ts:130](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Tx.ts#L130)

___

### #roles

• `Private` **#roles**: `Map`\<{}, [`Participant`](../interfaces/behavior_export._internal_.Participant.md)\>

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Tx.ts:129](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Tx.ts#L129)

___

### #shared

• `Private` `Optional` **#shared**: [`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Tx.ts:134](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Tx.ts#L134)

___

### #status

• `Private` **#status**: [`Status`](../enums/behavior_export._internal_.Status-1.md)

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Tx.ts:131](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Tx.ts#L131)

___

### #via

• `Private` **#via**: `string`

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Tx.ts:133](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Tx.ts#L133)

___

### #waitingOn

• `Private` `Optional` **#waitingOn**: `Iterable`\<[`Transaction`](../interfaces/behavior_export._internal_.Transaction-1.md)\>

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Tx.ts:132](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Tx.ts#L132)

## Accessors

### participants

• `get` **participants**(): `Set`\<[`Participant`](../interfaces/behavior_export._internal_.Participant.md)\>

Transaction participants.

#### Returns

`Set`\<[`Participant`](../interfaces/behavior_export._internal_.Participant.md)\>

#### Implementation of

[Transaction](../interfaces/behavior_export._internal_.Transaction-1.md).[participants](../interfaces/behavior_export._internal_.Transaction-1.md#participants)

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Tx.ts:162](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Tx.ts#L162)

___

### resources

• `get` **resources**(): `Set`\<[`Resource`](../interfaces/behavior_export._internal_.Resource-1.md)\>

Resources addressed by the participants.

#### Returns

`Set`\<[`Resource`](../interfaces/behavior_export._internal_.Resource-1.md)\>

#### Implementation of

[Transaction](../interfaces/behavior_export._internal_.Transaction-1.md).[resources](../interfaces/behavior_export._internal_.Transaction-1.md#resources)

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Tx.ts:166](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Tx.ts#L166)

___

### status

• `get` **status**(): [`Status`](../enums/behavior_export._internal_.Status-1.md)

The status of the transaction.

#### Returns

[`Status`](../enums/behavior_export._internal_.Status-1.md)

#### Implementation of

[Transaction](../interfaces/behavior_export._internal_.Transaction-1.md).[status](../interfaces/behavior_export._internal_.Transaction-1.md#status)

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Tx.ts:158](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Tx.ts#L158)

___

### via

• `get` **via**(): `string`

Diagnostic description of the transaction's source.

#### Returns

`string`

#### Implementation of

[Transaction](../interfaces/behavior_export._internal_.Transaction-1.md).[via](../interfaces/behavior_export._internal_.Transaction-1.md#via)

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Tx.ts:154](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Tx.ts#L154)

___

### waitingOn

• `get` **waitingOn**(): `undefined` \| `Iterable`\<[`Transaction`](../interfaces/behavior_export._internal_.Transaction-1.md)\>

The transactions currently blocking this transaction, if any.

#### Returns

`undefined` \| `Iterable`\<[`Transaction`](../interfaces/behavior_export._internal_.Transaction-1.md)\>

#### Implementation of

[Transaction](../interfaces/behavior_export._internal_.Transaction-1.md).[waitingOn](../interfaces/behavior_export._internal_.Transaction-1.md#waitingon)

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Tx.ts:170](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Tx.ts#L170)

## Methods

### #assertAvailable

▸ **#assertAvailable**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Tx.ts:586](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Tx.ts#L586)

___

### #executeCommit

▸ **#executeCommit**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Commit logic passed to #finish.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Tx.ts:397](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Tx.ts#L397)

___

### #executeCommit1

▸ **#executeCommit1**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Tx.ts:406](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Tx.ts#L406)

___

### #executeCommit2

▸ **#executeCommit2**(): `undefined` \| `Promise`\<`void`\>

#### Returns

`undefined` \| `Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Tx.ts:452](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Tx.ts#L452)

___

### #executePostCommit

▸ **#executePostCommit**(`participants`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `participants` | [`Participant`](../interfaces/behavior_export._internal_.Participant.md)[] |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Tx.ts:493](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Tx.ts#L493)

___

### #executeRollback

▸ **#executeRollback**(): `undefined` \| `Promise`\<`void`\>

Rollback logic passed to #finish.

#### Returns

`undefined` \| `Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Tx.ts:520](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Tx.ts#L520)

___

### #finalize

▸ **#finalize**(`status`, `why`, `finalizer`): `undefined` \| `Promise`\<`void`\>

Shared implementation for commit and rollback.

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`Status`](../enums/behavior_export._internal_.Status-1.md) |
| `why` | `string` |
| `finalizer` | () => [`MaybePromise`](../modules/util_export.md#maybepromise) |

#### Returns

`undefined` \| `Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Tx.ts:353](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Tx.ts#L353)

___

### #locksChanged

▸ **#locksChanged**(`resources`, `how?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `resources` | `Set`\<[`Resource`](../interfaces/behavior_export._internal_.Resource-1.md)\> | `undefined` |
| `how` | `string` | `"locked"` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Tx.ts:572](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Tx.ts#L572)

___

### #log

▸ **#log**(`...message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...message` | `unknown`[] |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Tx.ts:568](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Tx.ts#L568)

___

### addParticipants

▸ **addParticipants**(`...participants`): `void`

Add [ParticipantType](../modules/behavior_export._internal_.md#participanttype)s to the transaction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...participants` | [`Participant`](../interfaces/behavior_export._internal_.Participant.md)[] |

#### Returns

`void`

#### Implementation of

[Transaction](../interfaces/behavior_export._internal_.Transaction-1.md).[addParticipants](../interfaces/behavior_export._internal_.Transaction-1.md#addparticipants)

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Tx.ts:263](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Tx.ts#L263)

___

### addResources

▸ **addResources**(`...resources`): `Promise`\<`void`\>

Add Resources to the transaction.

If the transaction is exclusive (writing) the transaction will acquire the lock on each [ResourceType](../modules/behavior_export._internal_.md#resourcetype),
waiting for other writers to finish if necessary.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...resources` | [`Resource`](../interfaces/behavior_export._internal_.Resource-1.md)[] |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Transaction](../interfaces/behavior_export._internal_.Transaction-1.md).[addResources](../interfaces/behavior_export._internal_.Transaction-1.md#addresources)

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Tx.ts:192](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Tx.ts#L192)

___

### addResourcesSync

▸ **addResourcesSync**(`...resources`): `void`

Add [ResourceType](../modules/behavior_export._internal_.md#resourcetype)s to the transaction synchronously.

Unlike [addResources](../interfaces/behavior_export._internal_.Transaction-1.md#addresources), this method will throw an error if the
transaction is exclusive and the resources cannot be locked.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...resources` | [`Resource`](../interfaces/behavior_export._internal_.Resource-1.md)[] |

#### Returns

`void`

#### Implementation of

[Transaction](../interfaces/behavior_export._internal_.Transaction-1.md).[addResourcesSync](../interfaces/behavior_export._internal_.Transaction-1.md#addresourcessync)

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Tx.ts:204](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Tx.ts#L204)

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

#### Implementation of

[Transaction](../interfaces/behavior_export._internal_.Transaction-1.md).[begin](../interfaces/behavior_export._internal_.Transaction-1.md#begin)

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Tx.ts:220](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Tx.ts#L220)

___

### beginSync

▸ **beginSync**(): `void`

Begin an exclusive transaction in a synchronous context.

Unlike [begin](../interfaces/behavior_export._internal_.Transaction-1.md#begin), this method will throw an error if any participant has already joined an exclusive
transaction.

#### Returns

`void`

#### Implementation of

[Transaction](../interfaces/behavior_export._internal_.Transaction-1.md).[beginSync](../interfaces/behavior_export._internal_.Transaction-1.md#beginsync)

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Tx.ts:242](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Tx.ts#L242)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Tx.ts:146](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Tx.ts#L146)

___

### commit

▸ **commit**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Commit the transaction.

Matter.js commits automatically when an interaction completes.  You may commit manually to publish your changes
mid-interaction.

After commit an exclusive transaction becomes shared and data references refresh to the most recent value.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Implementation of

[Transaction](../interfaces/behavior_export._internal_.Transaction-1.md).[commit](../interfaces/behavior_export._internal_.Transaction-1.md#commit)

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Tx.ts:294](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Tx.ts#L294)

___

### getParticipant

▸ **getParticipant**(`role`): `undefined` \| [`Participant`](../interfaces/behavior_export._internal_.Participant.md)

Retrieve a participant with a specific role.

#### Parameters

| Name | Type |
| :------ | :------ |
| `role` | `Object` |

#### Returns

`undefined` \| [`Participant`](../interfaces/behavior_export._internal_.Participant.md)

#### Implementation of

[Transaction](../interfaces/behavior_export._internal_.Transaction-1.md).[getParticipant](../interfaces/behavior_export._internal_.Transaction-1.md#getparticipant)

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Tx.ts:288](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Tx.ts#L288)

___

### onClose

▸ **onClose**(`listener`): `void`

Listen for [Transaction.status](../interfaces/behavior_export._internal_.Transaction-1.md#status) close.

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | () => `void` |

#### Returns

`void`

#### Implementation of

[Transaction](../interfaces/behavior_export._internal_.Transaction-1.md).[onClose](../interfaces/behavior_export._internal_.Transaction-1.md#onclose)

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Tx.ts:182](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Tx.ts#L182)

___

### onShared

▸ **onShared**(`listener`, `once?`): `void`

Listen for transaction commit or roll back.  This may occur more than once for a given.

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | () => `void` |
| `once?` | `boolean` |

#### Returns

`void`

#### Implementation of

[Transaction](../interfaces/behavior_export._internal_.Transaction-1.md).[onShared](../interfaces/behavior_export._internal_.Transaction-1.md#onshared)

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Tx.ts:174](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Tx.ts#L174)

___

### rollback

▸ **rollback**(): `undefined` \| `Promise`\<`void`\>

Roll back the transaction.

Matter.js rolls back automatically when an interaction fails.  You may roll back manually to undo your changes
mid-interaction.

After rollback an exclusive transaction becomes shared and data references refresh to the most recent value.

#### Returns

`undefined` \| `Promise`\<`void`\>

#### Implementation of

[Transaction](../interfaces/behavior_export._internal_.Transaction-1.md).[rollback](../interfaces/behavior_export._internal_.Transaction-1.md#rollback)

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Tx.ts:312](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Tx.ts#L312)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Tx.ts:346](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Tx.ts#L346)

___

### waitFor

▸ **waitFor**(`others`): `Promise`\<`void`\>

Wait for a set of transactions to complete.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `others` | `Set`\<[`Transaction`](../interfaces/behavior_export._internal_.Transaction-1.md)\> | the set of transactions to await; cleared on return |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Transaction](../interfaces/behavior_export._internal_.Transaction-1.md).[waitFor](../interfaces/behavior_export._internal_.Transaction-1.md#waitfor)

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Tx.ts:318](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Tx.ts#L318)
