[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [behavior/export](../../README.md) / [\<internal\>](../README.md) / Resource

# Interface: Resource

A transaction resource is the target a [Participant](Participant.md) is mutating. The Coordinator tracks the state of
resources to ensure only a single transaction ever has exclusive access.

## Extended by

- [`Datasource`](../../../cluster/export/-internal-/interfaces/Datasource.md)

## Properties

### \[reference\]?

> `optional` **\[reference\]**: [`Resource`](Resource.md)

Inform [Transaction](../README.md#transaction) this resource is a standin for another resource.

#### Source

[packages/matter.js/src/behavior/state/transaction/Resource.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Resource.ts#L27)

***

### lockedBy?

> `optional` **lockedBy**: [`Transaction`](Transaction.md)

Locking transaction, maintained by [Transaction](../README.md#transaction).

#### Source

[packages/matter.js/src/behavior/state/transaction/Resource.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Resource.ts#L22)

## Methods

### toString()

> **toString**(): `string`

Textual description of the resource used in error messages.

#### Returns

`string`

#### Source

[packages/matter.js/src/behavior/state/transaction/Resource.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Resource.ts#L17)
