[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/export](behavior_export.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Namespaces

- [Resource](behavior_export._internal_.Resource.md)
- [Status](behavior_export._internal_.Status.md)
- [Transaction](behavior_export._internal_.Transaction.md)

### Enumerations

- [Status](../enums/behavior_export._internal_.Status-1.md)

### Classes

- [Tx](../classes/behavior_export._internal_.Tx.md)

### Interfaces

- [Participant](../interfaces/behavior_export._internal_.Participant.md)
- [Resource](../interfaces/behavior_export._internal_.Resource-1.md)
- [Transaction](../interfaces/behavior_export._internal_.Transaction-1.md)

### Type Aliases

- [ParticipantType](behavior_export._internal_.md#participanttype)
- [ResourceType](behavior_export._internal_.md#resourcetype)
- [StatusType](behavior_export._internal_.md#statustype)

### Variables

- [Transaction](behavior_export._internal_.md#transaction)

## Type Aliases

### ParticipantType

Ƭ **ParticipantType**: [`Participant`](../interfaces/behavior_export._internal_.Participant.md)

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:153](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L153)

___

### ResourceType

Ƭ **ResourceType**: [`Resource`](../interfaces/behavior_export._internal_.Resource-1.md)

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:152](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L152)

___

### StatusType

Ƭ **StatusType**: [`Status`](../enums/behavior_export._internal_.Status-1.md)

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:150](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L150)

## Variables

### Transaction

• **Transaction**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `ReadOnly` | [`Tx`](../classes/behavior_export._internal_.Tx.md) | A read-only transaction you may use without context. |
| `Status` | typeof [`Status`](behavior_export._internal_.Status.md) | - |
| `[toStringTag]` | `string` | - |
| `act` | \<T\>(`via`: `string`, `actor`: (`transaction`: [`Transaction`](../interfaces/behavior_export._internal_.Transaction-1.md)) => [`MaybePromise`](util_export.md#maybepromise)\<`T`\>) => [`MaybePromise`](util_export.md#maybepromise)\<`T`\> | Perform a transactional operation. This is the only way to obtain a read/write transaction. The transaction will commit automatically if it is exclusive (write mode) after the actor returns. The transaction is destroyed when [act](behavior_export._internal_.md#act) returns. You will receive an error if you access it after it is destroyed. |

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L30)

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:155](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L155)

[packages/matter.js/src/behavior/state/transaction/Transaction.ts:182](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Transaction.ts#L182)
