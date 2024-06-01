[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [model](../../README.md) / Model

# Namespace: Model

## Index

### Classes

- [CrossReference](classes/CrossReference.md)

## Type Aliases

### LookupPredicate\<T\>

> **LookupPredicate**\<`T`\>: [`Type`](README.md#typet)\<`T`\> \| `object`

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Model`](../../classes/Model.md) |

#### Source

[packages/matter.js/src/model/models/Model.ts:452](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L452)

***

### PropertyValidation

> **PropertyValidation**: `object`

#### Type declaration

##### name

> **name**: `string`

##### nullable?

> `optional` **nullable**: `boolean`

##### required?

> `optional` **required**: `boolean`

##### type

> **type**: `string` \| (...`args`) => `any` \| `object` \| `undefined`

##### values?

> `optional` **values**: `object`

###### Index signature

 \[`name`: `string`\]: `any`

#### Source

[packages/matter.js/src/model/models/Model.ts:454](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L454)

***

### Type()\<T\>

> **Type**\<`T`\>: (...`args`) => `T`

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`Model`](../../classes/Model.md) | [`Model`](../../classes/Model.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | `any` |

#### Returns

`T`

#### Source

[packages/matter.js/src/model/models/Model.ts:450](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L450)
