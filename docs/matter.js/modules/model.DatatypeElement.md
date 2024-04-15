[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](model.md) / DatatypeElement

# Namespace: DatatypeElement

[model](model.md).DatatypeElement

## Table of contents

### Type Aliases

- [ListValues](model.DatatypeElement.md#listvalues)
- [Properties](model.DatatypeElement.md#properties)
- [Tag](model.DatatypeElement.md#tag)
- [ValueMap](model.DatatypeElement.md#valuemap)

### Variables

- [Tag](model.DatatypeElement.md#tag-1)

### Functions

- [ListValues](model.DatatypeElement.md#listvalues-1)

## Type Aliases

### ListValues

Ƭ **ListValues**: [`FieldElement`](../interfaces/model.FieldElement-1.md)[]

We express enum values as IntElements as this gives us conformance
and other metadata.

#### Defined in

[packages/matter.js/src/model/elements/DatatypeElement.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/DatatypeElement.ts#L50)

[packages/matter.js/src/model/elements/DatatypeElement.ts:73](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/DatatypeElement.ts#L73)

___

### Properties

Ƭ **Properties**: [`Properties`](model.BaseElement.md#properties)\<[`DatatypeElement`](../interfaces/model.DatatypeElement-1.md)\>

#### Defined in

[packages/matter.js/src/model/elements/DatatypeElement.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/DatatypeElement.ts#L41)

___

### Tag

Ƭ **Tag**: typeof [`Datatype`](../enums/model.ElementTag.md#datatype)

#### Defined in

[packages/matter.js/src/model/elements/DatatypeElement.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/DatatypeElement.ts#L39)

[packages/matter.js/src/model/elements/DatatypeElement.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/DatatypeElement.ts#L40)

___

### ValueMap

Ƭ **ValueMap**: `Object`

Per the Matter specification, enums are named integers.  The following
allows TypeScript enums to be supplied for translation into Matter
enums.  To do so, we must accept both numeric and string values.  For
generating the Matter enum we ignore the string keys.

#### Index signature

▪ [name: `string`]: `number` \| `string`

#### Defined in

[packages/matter.js/src/model/elements/DatatypeElement.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/DatatypeElement.ts#L81)

## Variables

### Tag

• `Const` **Tag**: [`Datatype`](../enums/model.ElementTag.md#datatype) = `ElementTag.Datatype`

#### Defined in

[packages/matter.js/src/model/elements/DatatypeElement.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/DatatypeElement.ts#L39)

[packages/matter.js/src/model/elements/DatatypeElement.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/DatatypeElement.ts#L40)

## Functions

### ListValues

▸ **ListValues**(`values`): [`ListValues`](model.DatatypeElement.md#listvalues)

Convert a TypeScript enum to Matter enum values.

Matter enums include conformance and other metadata.  They may also have
multiple definitions of the same value selectable by conformance.  So
we can't use a TypeScript enum directly.

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`ValueMap`](model.DatatypeElement.md#valuemap) |

#### Returns

[`ListValues`](model.DatatypeElement.md#listvalues)

#### Defined in

[packages/matter.js/src/model/elements/DatatypeElement.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/DatatypeElement.ts#L50)
