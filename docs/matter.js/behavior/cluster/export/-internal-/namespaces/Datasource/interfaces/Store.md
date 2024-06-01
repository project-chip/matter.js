[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/cluster/export](../../../../README.md) / [\<internal\>](../../../README.md) / [Datasource](../README.md) / Store

# Interface: Store

The interface [Datasource](../../../README.md#datasource) uses to read and write non-volatile
values.

## Properties

### initialValues?

> `optional` **initialValues**: [`Struct`](../../../README.md#struct)

Initial values must be loaded beforehand.  That allows the behavior to initialize synchronously.

#### Source

[packages/matter.js/src/behavior/state/managed/Datasource.ts:170](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/managed/Datasource.ts#L170)

## Methods

### set()

> **set**(`transaction`, `values`): `Promise`\<`void`\>

Updates the values.

This is a patch operation.  Only properties present are modified. Properties that are present but set to
undefined are deleted.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `transaction` | [`Transaction`](../../../../../../export/-internal-/interfaces/Transaction.md) |
| `values` | [`Struct`](../../../README.md#struct) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/behavior/state/managed/Datasource.ts:178](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/managed/Datasource.ts#L178)
