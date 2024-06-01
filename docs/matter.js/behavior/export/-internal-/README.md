[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [behavior/export](../README.md) / \<internal\>

# \<internal\>

## Index

### Namespaces

- [Resource](namespaces/Resource/README.md)
- [Status](namespaces/Status/README.md)
- [Transaction](namespaces/Transaction/README.md)

### Enumerations

- [Status](enumerations/Status.md)

### Classes

- [Tx](classes/Tx.md)

### Interfaces

- [Participant](interfaces/Participant.md)
- [Resource](interfaces/Resource.md)
- [Transaction](interfaces/Transaction.md)

## Type Aliases

### ParticipantType

> **ParticipantType**: [`Participant`](interfaces/Participant.md)

#### Source

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:153](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L153)

***

### ResourceType

> **ResourceType**: [`Resource`](interfaces/Resource.md)

#### Source

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:152](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L152)

***

### StatusType

> **StatusType**: [`Status`](enumerations/Status.md)

#### Source

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:150](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L150)

## Variables

### Transaction

> **Transaction**: `object`

#### Type declaration

##### ReadOnly

> **ReadOnly**: [`Tx`](classes/Tx.md) = `ReadOnlyTransaction`

A read-only transaction you may use without context.

##### Status

> **Status**: *typeof* [`Status`](namespaces/Status/README.md) = `StatusEnum`

##### \[toStringTag\]

> **\[toStringTag\]**: `string` = `"Transaction"`

##### act()

Perform a transactional operation.  This is the only way to obtain a read/write transaction.

The transaction will commit automatically if it is exclusive (write mode) after the actor returns.

The transaction is destroyed when [act](README.md#act) returns.  You will receive an error if you access it after it is
destroyed.

###### Type parameters

| Type parameter |
| :------ |
| `T` |

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `via` | `string` |
| `actor` | (`transaction`) => [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`T`\> |

###### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`T`\>

#### Source

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L30)
