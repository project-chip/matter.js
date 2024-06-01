[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/model](../../README.md) / Model

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

packages/matter.js/dist/esm/model/models/Model.d.ts:165

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

packages/matter.js/dist/esm/model/models/Model.d.ts:169

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

packages/matter.js/dist/esm/model/models/Model.d.ts:164
