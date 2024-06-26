[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/export](../modules/behavior_export.md) / [\<internal\>](../modules/behavior_export._internal_.md) / Participant

# Interface: Participant

[behavior/export](../modules/behavior_export.md).[\<internal\>](../modules/behavior_export._internal_.md).Participant

Components with support for transactionality implement this interface.

## Table of contents

### Properties

- [postCommit](behavior_export._internal_.Participant.md#postcommit)
- [preCommit](behavior_export._internal_.Participant.md#precommit)
- [role](behavior_export._internal_.Participant.md#role)

### Methods

- [commit1](behavior_export._internal_.Participant.md#commit1)
- [commit2](behavior_export._internal_.Participant.md#commit2)
- [rollback](behavior_export._internal_.Participant.md#rollback)
- [toString](behavior_export._internal_.Participant.md#tostring)

## Properties

### postCommit

• `Optional` **postCommit**: () => [`MaybePromise`](../modules/util_export.md#maybepromise)

Post-commit logic.

#### Type declaration

▸ (): [`MaybePromise`](../modules/util_export.md#maybepromise)

##### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Participant.ts:48](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/state/transaction/Participant.ts#L48)

___

### preCommit

• `Optional` **preCommit**: () => [`MaybePromise`](../modules/util_export.md#maybepromise)\<`boolean`\>

Pre-commit logic.

Pre-commit logic returns a boolean indicating whether it performed an action that affects state.  The transaction
will cycle through participants continuously until all participants return false.

Thus `preCommit` implementations must be stateful and expect to be invoked more than once for a single
transaction.

#### Type declaration

▸ (): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`boolean`\>

##### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`boolean`\>

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Participant.ts:33](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/state/transaction/Participant.ts#L33)

___

### role

• `Optional` **role**: `Object`

The "role" of a participant is an optional key you may use to retrieve
a participant from the transaction.

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Participant.ts:22](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/state/transaction/Participant.ts#L22)

## Methods

### commit1

▸ **commit1**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Commit phase one.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Participant.ts:38](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/state/transaction/Participant.ts#L38)

___

### commit2

▸ **commit2**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Commit phase two.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Participant.ts:43](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/state/transaction/Participant.ts#L43)

___

### rollback

▸ **rollback**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Drop isolated writes and revert to original canonical source.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Participant.ts:53](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/state/transaction/Participant.ts#L53)

___

### toString

▸ **toString**(): `string`

Description used in error messages.

#### Returns

`string`

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Participant.ts:16](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/state/transaction/Participant.ts#L16)
