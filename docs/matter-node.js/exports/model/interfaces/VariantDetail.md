[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/model](../README.md) / VariantDetail

# Interface: VariantDetail

Supplies operational information about a set of variants.

## Properties

### id?

> `optional` **id**: `number`

The highest priority ID across all variants, if any variant has an ID.

#### Source

packages/matter.js/dist/esm/model/logic/ModelVariantTraversal.d.ts:33

***

### map

> **map**: [`VariantMap`](../README.md#variantmap)

The actual variants.

#### Source

packages/matter.js/dist/esm/model/logic/ModelVariantTraversal.d.ts:41

***

### name

> **name**: `string`

The canonical name to use for the variants.

#### Source

packages/matter.js/dist/esm/model/logic/ModelVariantTraversal.d.ts:37

***

### tag

> **tag**: [`ElementTag`](../enumerations/ElementTag.md)

The shared tag across all variants.

#### Source

packages/matter.js/dist/esm/model/logic/ModelVariantTraversal.d.ts:29
