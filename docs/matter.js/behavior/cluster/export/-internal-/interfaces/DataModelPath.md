[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/cluster/export](../../README.md) / [\<internal\>](../README.md) / DataModelPath

# Interface: DataModelPath

Utility for tracking location in the Matter data model used for diagnostics.

The path consists of a sequence of IDs, optionally with type information.

## Constructors

## Properties

### id

> **id**: `string` \| `number`

#### Source

[packages/matter.js/src/endpoint/DataModelPath.ts:15](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/DataModelPath.ts#L15)

***

### parent?

> `optional` **parent**: [`DataModelPath`](DataModelPath.md)

#### Source

[packages/matter.js/src/endpoint/DataModelPath.ts:13](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/DataModelPath.ts#L13)

***

### type?

> `optional` **type**: `string`

#### Source

[packages/matter.js/src/endpoint/DataModelPath.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/DataModelPath.ts#L17)

## Methods

### at()

> **at**(`name`, `type`?): [`DataModelPath`](DataModelPath.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` \| `number` |
| `type`? | `string` |

#### Returns

[`DataModelPath`](DataModelPath.md)

#### Source

[packages/matter.js/src/endpoint/DataModelPath.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/DataModelPath.ts#L19)

***

### toArray()

> **toArray**(): (`string` \| `number`)[]

#### Returns

(`string` \| `number`)[]

#### Source

[packages/matter.js/src/endpoint/DataModelPath.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/DataModelPath.ts#L23)

***

### toString()

> **toString**(`includeType`?): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `includeType`? | `boolean` |

#### Returns

`string`

#### Source

[packages/matter.js/src/endpoint/DataModelPath.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/DataModelPath.ts#L21)
