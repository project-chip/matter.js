[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/cluster/export](../../README.md) / [\<internal\>](../README.md) / Datasource

# Interface: Datasource\<T\>

Datasource manages the canonical root of a state tree.  The "state" property of a Behavior is a reference to a
Datasource.

Datasources maintain a version number and triggers change events.  If modified in a transaction they compute changes
and persist values as necessary.

## Extends

- [`Resource`](../../../../export/-internal-/interfaces/Resource.md)

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`StateType`](StateType.md) | [`StateType`](StateType.md) |

## Constructors

## Properties

### \[reference\]?

> `optional` **\[reference\]**: [`Resource`](../../../../export/-internal-/interfaces/Resource.md)

Inform [Transaction](../../../../export/-internal-/README.md#transaction) this resource is a standin for another resource.

#### Inherited from

[`Resource`](../../../../export/-internal-/interfaces/Resource.md).[`[reference]`](../../../../export/-internal-/interfaces/Resource.md#%5Breference%5D)

#### Source

[packages/matter.js/src/behavior/state/transaction/Resource.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Resource.ts#L27)

***

### lockedBy?

> `optional` **lockedBy**: [`Transaction`](../../../../export/-internal-/interfaces/Transaction.md)

Locking transaction, maintained by [Transaction](../../../../export/-internal-/README.md#transaction).

#### Inherited from

[`Resource`](../../../../export/-internal-/interfaces/Resource.md).[`lockedBy`](../../../../export/-internal-/interfaces/Resource.md#lockedby)

#### Source

[packages/matter.js/src/behavior/state/transaction/Resource.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Resource.ts#L22)

***

### version

> `readonly` **version**: `number`

The data's version.

#### Source

[packages/matter.js/src/behavior/state/managed/Datasource.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/managed/Datasource.ts#L45)

***

### view

> `readonly` **view**: `InstanceType`\<`T`\>

Obtain a read-only view of values.

#### Source

[packages/matter.js/src/behavior/state/managed/Datasource.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/managed/Datasource.ts#L55)

## Methods

### reference()

> **reference**(`session`): `InstanceType`\<`T`\>

Create a managed version of the source data.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`Session`](Session.md) |

#### Returns

`InstanceType`\<`T`\>

#### Source

[packages/matter.js/src/behavior/state/managed/Datasource.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/managed/Datasource.ts#L40)

***

### toString()

> **toString**(): `string`

Textual description of the resource used in error messages.

#### Returns

`string`

#### Inherited from

[`Resource`](../../../../export/-internal-/interfaces/Resource.md).[`toString`](../../../../export/-internal-/interfaces/Resource.md#tostring)

#### Source

[packages/matter.js/src/behavior/state/transaction/Resource.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Resource.ts#L17)

***

### validate()

> **validate**(`session`, `values`?): `void`

Validate values against the schema.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`Session`](Session.md) |
| `values`? | [`Struct`](../README.md#struct) |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/state/managed/Datasource.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/managed/Datasource.ts#L50)
