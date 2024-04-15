[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](model.md) / ValueElement

# Namespace: ValueElement

[model](model.md).ValueElement

## Table of contents

### Enumerations

- [Metatype](../enums/model.ValueElement.Metatype.md)

### Type Aliases

- [BitmapSize](model.ValueElement.md#bitmapsize)
- [Datatypes](model.ValueElement.md#datatypes)
- [Properties](model.ValueElement.md#properties)
- [Size](model.ValueElement.md#size)

## Type Aliases

### BitmapSize

Ƭ **BitmapSize**: ``1`` \| ``2`` \| ``4`` \| ``8``

Legal bitmap sizes.  The Matter specification defines enums as
extensions of int8 or in16 so the size information is not used for
actual enums, just for bitmaps, which are used (somewhat inconsistently)
as base types.

#### Defined in

[packages/matter.js/src/model/elements/ValueElement.ts:105](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/ValueElement.ts#L105)

___

### Datatypes

Ƭ **Datatypes**: `Object`

A pool of datatype definitions indexed by name.

#### Index signature

▪ [name: `string`]: [`ValueElement`](model.md#valueelement)

#### Defined in

[packages/matter.js/src/model/elements/ValueElement.ts:92](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/ValueElement.ts#L92)

___

### Properties

Ƭ **Properties**: [`Properties`](model.BaseElement.md#properties)\<[`ValueElement`](model.md#valueelement) & \{ `tag`: \`$\{ElementTag}\`  }\>

#### Defined in

[packages/matter.js/src/model/elements/ValueElement.ts:79](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/ValueElement.ts#L79)

___

### Size

Ƭ **Size**: ``1`` \| ``2`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` \| ``7`` \| ``8``

Valid sizes for ints.

#### Defined in

[packages/matter.js/src/model/elements/ValueElement.ts:97](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/ValueElement.ts#L97)
