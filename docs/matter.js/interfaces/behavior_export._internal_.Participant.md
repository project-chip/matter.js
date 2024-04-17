[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/export](../modules/behavior_export.md) / [\<internal\>](../modules/behavior_export._internal_.md) / Participant

# Interface: Participant

[behavior/export](../modules/behavior_export.md).[\<internal\>](../modules/behavior_export._internal_.md).Participant

Components with support for transactionality implement this interface.

## Table of contents

### Properties

- [postCommit](behavior_export._internal_.Participant.md#postcommit)
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

[packages/matter.js/src/behavior/state/transaction/Participant.ts:37](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Participant.ts#L37)

___

### role

• `Optional` **role**: `Object`

The "role" of a participant is an optional key you may use to retrieve
a participant from the transaction.

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Participant.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Participant.ts#L22)

## Methods

### commit1

▸ **commit1**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Commit phase one.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Participant.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Participant.ts#L27)

___

### commit2

▸ **commit2**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Commit phase two.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Participant.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Participant.ts#L32)

___

### rollback

▸ **rollback**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Drop isolated writes and revert to original canonical source.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Participant.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Participant.ts#L42)

___

### toString

▸ **toString**(): `string`

Description used in error messages.

#### Returns

`string`

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Participant.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Participant.ts#L16)
