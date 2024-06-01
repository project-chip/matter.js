[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/model](../../README.md) / ValueElement

# Namespace: ValueElement

## Index

### Enumerations

- [Metatype](enumerations/Metatype.md)

## Type Aliases

### BitmapSize

> **BitmapSize**: `1` \| `2` \| `4` \| `8`

Legal bitmap sizes.  The Matter specification defines enums as extensions of int8 or in16 so the size information
is not used for actual enums, just for bitmaps, which are used (somewhat inconsistently) as base types.

#### Source

packages/matter.js/dist/esm/model/elements/ValueElement.d.ts:78

***

### Datatypes

> **Datatypes**: `object`

A pool of datatype definitions indexed by name.

#### Index signature

 \[`name`: `string`\]: [`ValueElement`](../../README.md#valueelement)

#### Source

packages/matter.js/dist/esm/model/elements/ValueElement.d.ts:67

***

### Properties

> **Properties**: [`Properties`](../BaseElement/README.md#propertiest)\<[`ValueElement`](../../README.md#valueelement) & `object`\>

#### Source

packages/matter.js/dist/esm/model/elements/ValueElement.d.ts:54

***

### Size

> **Size**: `1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7` \| `8`

Valid sizes for ints.

#### Source

packages/matter.js/dist/esm/model/elements/ValueElement.d.ts:73
