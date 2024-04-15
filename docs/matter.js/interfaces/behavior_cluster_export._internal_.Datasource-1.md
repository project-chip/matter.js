[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/cluster/export](../modules/behavior_cluster_export.md) / [\<internal\>](../modules/behavior_cluster_export._internal_.md) / Datasource

# Interface: Datasource\<T\>

[behavior/cluster/export](../modules/behavior_cluster_export.md).[\<internal\>](../modules/behavior_cluster_export._internal_.md).Datasource

Datasource manages the canonical root of a state tree.  The "state" property of a Behavior is a reference to a
Datasource.

Datasources maintain a version number and triggers change events.  If modified in a transaction they compute changes
and persist values as necessary.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`StateType`](behavior_cluster_export._internal_.StateType.md) = [`StateType`](behavior_cluster_export._internal_.StateType.md) |

## Hierarchy

- [`Resource`](behavior_export._internal_.Resource-1.md)

  ↳ **`Datasource`**

## Table of contents

### Constructors

- [constructor](behavior_cluster_export._internal_.Datasource-1.md#constructor)

### Properties

- [[reference]](behavior_cluster_export._internal_.Datasource-1.md#[reference])
- [lockedBy](behavior_cluster_export._internal_.Datasource-1.md#lockedby)
- [version](behavior_cluster_export._internal_.Datasource-1.md#version)
- [view](behavior_cluster_export._internal_.Datasource-1.md#view)

### Methods

- [reference](behavior_cluster_export._internal_.Datasource-1.md#reference)
- [toString](behavior_cluster_export._internal_.Datasource-1.md#tostring)
- [validate](behavior_cluster_export._internal_.Datasource-1.md#validate)

## Constructors

### constructor

• **constructor**: `Object`

#### Inherited from

Resource.constructor

## Properties

### [reference]

• `Optional` **[reference]**: [`Resource`](behavior_export._internal_.Resource-1.md)

Inform [Transaction](../modules/behavior_export._internal_.md#transaction) this resource is a standin for another resource.

#### Inherited from

[Resource](behavior_export._internal_.Resource-1.md).[[reference]](behavior_export._internal_.Resource-1.md#[reference])

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Resource.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Resource.ts#L27)

___

### lockedBy

• `Optional` **lockedBy**: [`Transaction`](behavior_export._internal_.Transaction-1.md)

Locking transaction, maintained by [Transaction](../modules/behavior_export._internal_.md#transaction).

#### Inherited from

[Resource](behavior_export._internal_.Resource-1.md).[lockedBy](behavior_export._internal_.Resource-1.md#lockedby)

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Resource.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Resource.ts#L22)

___

### version

• `Readonly` **version**: `number`

The data's version.

#### Defined in

[packages/matter.js/src/behavior/state/managed/Datasource.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/managed/Datasource.ts#L43)

___

### view

• `Readonly` **view**: `InstanceType`\<`T`\>

Obtain a read-only view of values.

#### Defined in

[packages/matter.js/src/behavior/state/managed/Datasource.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/managed/Datasource.ts#L53)

## Methods

### reference

▸ **reference**(`session`): `InstanceType`\<`T`\>

Create a managed version of the source data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](behavior_cluster_export._internal_.Session.md) |

#### Returns

`InstanceType`\<`T`\>

#### Defined in

[packages/matter.js/src/behavior/state/managed/Datasource.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/managed/Datasource.ts#L38)

___

### toString

▸ **toString**(): `string`

Textual description of the resource used in error messages.

#### Returns

`string`

#### Inherited from

[Resource](behavior_export._internal_.Resource-1.md).[toString](behavior_export._internal_.Resource-1.md#tostring)

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Resource.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Resource.ts#L17)

___

### validate

▸ **validate**(`session`, `values?`): `void`

Validate values against the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](behavior_cluster_export._internal_.Session.md) |
| `values?` | [`Struct`](../modules/behavior_cluster_export._internal_.md#struct) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/state/managed/Datasource.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/managed/Datasource.ts#L48)
