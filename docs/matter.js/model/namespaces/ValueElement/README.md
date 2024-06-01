[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [model](../../README.md) / ValueElement

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

[packages/matter.js/src/model/elements/ValueElement.ts:103](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/ValueElement.ts#L103)

***

### Datatypes

> **Datatypes**: `object`

A pool of datatype definitions indexed by name.

#### Index signature

 \[`name`: `string`\]: [`ValueElement`](../../README.md#valueelement)

#### Source

[packages/matter.js/src/model/elements/ValueElement.ts:92](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/ValueElement.ts#L92)

***

### Properties

> **Properties**: [`Properties`](../BaseElement/README.md#propertiest)\<[`ValueElement`](../../README.md#valueelement) & `object`\>

#### Source

[packages/matter.js/src/model/elements/ValueElement.ts:79](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/ValueElement.ts#L79)

***

### Size

> **Size**: `1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7` \| `8`

Valid sizes for ints.

#### Source

[packages/matter.js/src/model/elements/ValueElement.ts:97](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/ValueElement.ts#L97)
