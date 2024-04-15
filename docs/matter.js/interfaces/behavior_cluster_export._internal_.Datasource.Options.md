[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/cluster/export](../modules/behavior_cluster_export.md) / [\<internal\>](../modules/behavior_cluster_export._internal_.md) / [Datasource](../modules/behavior_cluster_export._internal_.Datasource.md) / Options

# Interface: Options\<T\>

[\<internal\>](../modules/behavior_cluster_export._internal_.md).[Datasource](../modules/behavior_cluster_export._internal_.Datasource.md).Options

Datasource configuration options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`StateType`](behavior_cluster_export._internal_.StateType.md) = [`StateType`](behavior_cluster_export._internal_.StateType.md) |

## Table of contents

### Properties

- [cluster](behavior_cluster_export._internal_.Datasource.Options.md#cluster)
- [defaults](behavior_cluster_export._internal_.Datasource.Options.md#defaults)
- [events](behavior_cluster_export._internal_.Datasource.Options.md#events)
- [owner](behavior_cluster_export._internal_.Datasource.Options.md#owner)
- [path](behavior_cluster_export._internal_.Datasource.Options.md#path)
- [store](behavior_cluster_export._internal_.Datasource.Options.md#store)
- [supervisor](behavior_cluster_export._internal_.Datasource.Options.md#supervisor)
- [type](behavior_cluster_export._internal_.Datasource.Options.md#type)

## Properties

### cluster

• `Optional` **cluster**: [`ClusterId`](../modules/datatype_export.md#clusterid)

The cluster used for access control checks.

#### Defined in

[packages/matter.js/src/behavior/state/managed/Datasource.ts:148](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/managed/Datasource.ts#L148)

___

### defaults

• `Optional` **defaults**: [`Struct`](../modules/behavior_cluster_export._internal_.md#struct)

Default values.  These defaults override default properties in the state class but not values persisted in
the store.

#### Defined in

[packages/matter.js/src/behavior/state/managed/Datasource.ts:138](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/managed/Datasource.ts#L138)

___

### events

• `Optional` **events**: [`Events`](behavior_cluster_export._internal_.Datasource.Events.md)

Events of the form "fieldName$Change", if present, emit after field changes commit.

#### Defined in

[packages/matter.js/src/behavior/state/managed/Datasource.ts:132](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/managed/Datasource.ts#L132)

___

### owner

• `Optional` **owner**: `any`

The object that owns the datasource.  This is passed as the "owner" parameter to [Val.Dynamic](behavior_cluster_export._internal_.Val.Dynamic.md).

#### Defined in

[packages/matter.js/src/behavior/state/managed/Datasource.ts:153](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/managed/Datasource.ts#L153)

___

### path

• **path**: [`DataModelPath`](behavior_cluster_export._internal_.DataModelPath.md)

Path used in diagnostic messages.

#### Defined in

[packages/matter.js/src/behavior/state/managed/Datasource.ts:127](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/managed/Datasource.ts#L127)

___

### store

• `Optional` **store**: [`Store`](behavior_cluster_export._internal_.Datasource.Store.md)

Optional storage for non-volatile values.

#### Defined in

[packages/matter.js/src/behavior/state/managed/Datasource.ts:143](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/managed/Datasource.ts#L143)

___

### supervisor

• **supervisor**: [`RootSupervisor`](../classes/behavior_cluster_export._internal_.RootSupervisor.md)

The manager used to manage and validate values.

#### Defined in

[packages/matter.js/src/behavior/state/managed/Datasource.ts:122](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/managed/Datasource.ts#L122)

___

### type

• **type**: `T`

The JS class for the root value.

#### Defined in

[packages/matter.js/src/behavior/state/managed/Datasource.ts:117](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/managed/Datasource.ts#L117)
