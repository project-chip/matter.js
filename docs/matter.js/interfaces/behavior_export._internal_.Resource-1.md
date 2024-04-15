[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/export](../modules/behavior_export.md) / [\<internal\>](../modules/behavior_export._internal_.md) / Resource

# Interface: Resource

[behavior/export](../modules/behavior_export.md).[\<internal\>](../modules/behavior_export._internal_.md).Resource

A transaction resource is the target a [Participant](behavior_export._internal_.Participant.md) is mutating. The Coordinator tracks the state of
resources to ensure only a single transaction ever has exclusive access.

## Hierarchy

- **`Resource`**

  ↳ [`Datasource`](behavior_cluster_export._internal_.Datasource-1.md)

## Table of contents

### Properties

- [[reference]](behavior_export._internal_.Resource-1.md#[reference])
- [lockedBy](behavior_export._internal_.Resource-1.md#lockedby)

### Methods

- [toString](behavior_export._internal_.Resource-1.md#tostring)

## Properties

### [reference]

• `Optional` **[reference]**: [`Resource`](behavior_export._internal_.Resource-1.md)

Inform [Transaction](../modules/behavior_export._internal_.md#transaction) this resource is a standin for another resource.

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Resource.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Resource.ts#L27)

___

### lockedBy

• `Optional` **lockedBy**: [`Transaction`](behavior_export._internal_.Transaction-1.md)

Locking transaction, maintained by [Transaction](../modules/behavior_export._internal_.md#transaction).

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Resource.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Resource.ts#L22)

## Methods

### toString

▸ **toString**(): `string`

Textual description of the resource used in error messages.

#### Returns

`string`

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Resource.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Resource.ts#L17)
