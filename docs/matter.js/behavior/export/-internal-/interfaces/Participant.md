[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [behavior/export](../../README.md) / [\<internal\>](../README.md) / Participant

# Interface: Participant

Components with support for transactionality implement this interface.

## Properties

### postCommit()?

> `optional` **postCommit**: () => [`MaybePromise`](../../../../util/export/README.md#maybepromiset)

Post-commit logic.

#### Returns

[`MaybePromise`](../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/state/transaction/Participant.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Participant.ts#L48)

***

### preCommit()?

> `optional` **preCommit**: () => [`MaybePromise`](../../../../util/export/README.md#maybepromiset)\<`boolean`\>

Pre-commit logic.

Pre-commit logic returns a boolean indicating whether it performed an action that affects state.  The transaction
will cycle through participants continuously until all participants return false.

Thus `preCommit` implementations must be stateful and expect to be invoked more than once for a single
transaction.

#### Returns

[`MaybePromise`](../../../../util/export/README.md#maybepromiset)\<`boolean`\>

#### Source

[packages/matter.js/src/behavior/state/transaction/Participant.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Participant.ts#L33)

***

### role?

> `optional` **role**: `object`

The "role" of a participant is an optional key you may use to retrieve
a participant from the transaction.

#### Source

[packages/matter.js/src/behavior/state/transaction/Participant.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Participant.ts#L22)

## Methods

### commit1()

> **commit1**(): [`MaybePromise`](../../../../util/export/README.md#maybepromiset)

Commit phase one.

#### Returns

[`MaybePromise`](../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/state/transaction/Participant.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Participant.ts#L38)

***

### commit2()

> **commit2**(): [`MaybePromise`](../../../../util/export/README.md#maybepromiset)

Commit phase two.

#### Returns

[`MaybePromise`](../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/state/transaction/Participant.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Participant.ts#L43)

***

### rollback()

> **rollback**(): [`MaybePromise`](../../../../util/export/README.md#maybepromiset)

Drop isolated writes and revert to original canonical source.

#### Returns

[`MaybePromise`](../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/state/transaction/Participant.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Participant.ts#L53)

***

### toString()

> **toString**(): `string`

Description used in error messages.

#### Returns

`string`

#### Source

[packages/matter.js/src/behavior/state/transaction/Participant.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Participant.ts#L16)
