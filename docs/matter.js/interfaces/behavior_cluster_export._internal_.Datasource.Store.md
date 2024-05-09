[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/cluster/export](../modules/behavior_cluster_export.md) / [\<internal\>](../modules/behavior_cluster_export._internal_.md) / [Datasource](../modules/behavior_cluster_export._internal_.Datasource.md) / Store

# Interface: Store

[\<internal\>](../modules/behavior_cluster_export._internal_.md).[Datasource](../modules/behavior_cluster_export._internal_.Datasource.md).Store

The interface [Datasource](../modules/behavior_cluster_export._internal_.md#datasource) uses to read and write non-volatile
values.

## Table of contents

### Properties

- [initialValues](behavior_cluster_export._internal_.Datasource.Store.md#initialvalues)

### Methods

- [set](behavior_cluster_export._internal_.Datasource.Store.md#set)

## Properties

### initialValues

• `Optional` **initialValues**: [`Struct`](../modules/behavior_cluster_export._internal_.md#struct)

Initial values must be loaded beforehand.  That allows the behavior to initialize synchronously.

#### Defined in

[packages/matter.js/src/behavior/state/managed/Datasource.ts:164](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/managed/Datasource.ts#L164)

## Methods

### set

▸ **set**(`transaction`, `values`): `Promise`\<`void`\>

Updates the values.

This is a patch operation.  Only properties present are modified. Properties that are present but set to
undefined are deleted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Transaction`](behavior_export._internal_.Transaction-1.md) |
| `values` | [`Struct`](../modules/behavior_cluster_export._internal_.md#struct) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/state/managed/Datasource.ts:172](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/managed/Datasource.ts#L172)
