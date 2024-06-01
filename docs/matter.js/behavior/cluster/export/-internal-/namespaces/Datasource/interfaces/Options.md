[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/cluster/export](../../../../README.md) / [\<internal\>](../../../README.md) / [Datasource](../README.md) / Options

# Interface: Options\<T\>

Datasource configuration options.

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`StateType`](../../../interfaces/StateType.md) | [`StateType`](../../../interfaces/StateType.md) |

## Properties

### cluster?

> `optional` **cluster**: [`ClusterId`](../../../../../../../datatype/export/README.md#clusterid)

The cluster used for access control checks.

#### Source

[packages/matter.js/src/behavior/state/managed/Datasource.ts:154](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/managed/Datasource.ts#L154)

***

### defaults?

> `optional` **defaults**: [`Struct`](../../../README.md#struct)

Default values.  These defaults override default properties in the state class but not values persisted in
the store.

#### Source

[packages/matter.js/src/behavior/state/managed/Datasource.ts:144](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/managed/Datasource.ts#L144)

***

### events?

> `optional` **events**: [`Events`](Events.md)

Events triggered automatically.

Events named "fieldName$Changing", if present, emit before changes commit.  Events named "fieldName$Changed",
if present, emit after field changes commit.

#### Source

[packages/matter.js/src/behavior/state/managed/Datasource.ts:138](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/managed/Datasource.ts#L138)

***

### owner?

> `optional` **owner**: `any`

The object that owns the datasource.  This is passed as the "owner" parameter to [Val.Dynamic](../../Val/interfaces/Dynamic.md).

#### Source

[packages/matter.js/src/behavior/state/managed/Datasource.ts:159](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/managed/Datasource.ts#L159)

***

### path

> **path**: [`DataModelPath`](../../../interfaces/DataModelPath.md)

Path used in diagnostic messages.

#### Source

[packages/matter.js/src/behavior/state/managed/Datasource.ts:130](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/managed/Datasource.ts#L130)

***

### store?

> `optional` **store**: [`Store`](Store.md)

Optional storage for non-volatile values.

#### Source

[packages/matter.js/src/behavior/state/managed/Datasource.ts:149](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/managed/Datasource.ts#L149)

***

### supervisor

> **supervisor**: [`RootSupervisor`](../../../classes/RootSupervisor.md)

The manager used to manage and validate values.

#### Source

[packages/matter.js/src/behavior/state/managed/Datasource.ts:125](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/managed/Datasource.ts#L125)

***

### type

> **type**: `T`

The JS class for the root value.

#### Source

[packages/matter.js/src/behavior/state/managed/Datasource.ts:120](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/managed/Datasource.ts#L120)
