[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](../modules/exports_model.md) / VariantDetail

# Interface: VariantDetail

[exports/model](../modules/exports_model.md).VariantDetail

Supplies operational information about a set of variants.

## Table of contents

### Properties

- [id](exports_model.VariantDetail.md#id)
- [map](exports_model.VariantDetail.md#map)
- [name](exports_model.VariantDetail.md#name)
- [tag](exports_model.VariantDetail.md#tag)

## Properties

### id

• `Optional` **id**: `number`

The highest priority ID across all variants, if any variant has an
ID.

#### Defined in

packages/matter.js/dist/cjs/model/logic/ModelVariantTraversal.d.ts:35

___

### map

• **map**: [`VariantMap`](../modules/exports_model.md#variantmap)

The actual variants.

#### Defined in

packages/matter.js/dist/cjs/model/logic/ModelVariantTraversal.d.ts:43

___

### name

• **name**: `string`

The canonical name to use for the variants.

#### Defined in

packages/matter.js/dist/cjs/model/logic/ModelVariantTraversal.d.ts:39

___

### tag

• **tag**: [`ElementTag`](../enums/exports_model.ElementTag.md)

The shared tag across all variants.

#### Defined in

packages/matter.js/dist/cjs/model/logic/ModelVariantTraversal.d.ts:30
