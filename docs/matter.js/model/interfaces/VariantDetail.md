[**@project-chip/matter.js**](../../README.md) • **Docs**

***

[@project-chip/matter.js](../../modules.md) / [model](../README.md) / VariantDetail

# Interface: VariantDetail

Supplies operational information about a set of variants.

## Properties

### id?

> `optional` **id**: `number`

The highest priority ID across all variants, if any variant has an ID.

#### Source

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L39)

***

### map

> **map**: [`VariantMap`](../README.md#variantmap)

The actual variants.

#### Source

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L49)

***

### name

> **name**: `string`

The canonical name to use for the variants.

#### Source

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L44)

***

### tag

> **tag**: [`ElementTag`](../enumerations/ElementTag.md)

The shared tag across all variants.

#### Source

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L34)
