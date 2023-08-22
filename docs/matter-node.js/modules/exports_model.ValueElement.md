[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](exports_model.md) / ValueElement

# Namespace: ValueElement

[exports/model](exports_model.md).ValueElement

## Table of contents

### Enumerations

- [Metatype](../enums/exports_model.ValueElement.Metatype.md)

### Type Aliases

- [BitmapSize](exports_model.ValueElement.md#bitmapsize)
- [Datatypes](exports_model.ValueElement.md#datatypes)
- [Properties](exports_model.ValueElement.md#properties)
- [Size](exports_model.ValueElement.md#size)

## Type Aliases

### BitmapSize

Ƭ **BitmapSize**: ``1`` \| ``2`` \| ``4`` \| ``8``

Legal bitmap sizes.  The Matter specification defines enums as
extensions of int8 or in16 so the size information is not used for
actual enums, just for bitmaps, which are used (somewhat inconsistently)
as base types.

#### Defined in

packages/matter.js/dist/cjs/model/elements/ValueElement.d.ts:80

___

### Datatypes

Ƭ **Datatypes**: `Object`

A pool of datatype definitions indexed by name.

#### Index signature

▪ [name: `string`]: [`ValueElement`](exports_model.md#valueelement)

#### Defined in

packages/matter.js/dist/cjs/model/elements/ValueElement.d.ts:67

___

### Properties

Ƭ **Properties**: [`Properties`](exports_model.BaseElement.md#properties)<[`ValueElement`](exports_model.md#valueelement) & { `tag`: \`${ElementTag}\`  }\>

#### Defined in

packages/matter.js/dist/cjs/model/elements/ValueElement.d.ts:54

___

### Size

Ƭ **Size**: ``1`` \| ``2`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` \| ``7`` \| ``8``

Valid sizes for ints.

#### Defined in

packages/matter.js/dist/cjs/model/elements/ValueElement.d.ts:73
