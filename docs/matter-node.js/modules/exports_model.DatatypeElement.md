[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](exports_model.md) / DatatypeElement

# Namespace: DatatypeElement

[exports/model](exports_model.md).DatatypeElement

## Table of contents

### Type Aliases

- [ListValues](exports_model.DatatypeElement.md#listvalues)
- [Properties](exports_model.DatatypeElement.md#properties)
- [Tag](exports_model.DatatypeElement.md#tag)
- [ValueMap](exports_model.DatatypeElement.md#valuemap)

### Variables

- [Tag](exports_model.DatatypeElement.md#tag-1)

### Functions

- [ListValues](exports_model.DatatypeElement.md#listvalues-1)

## Type Aliases

### ListValues

Ƭ **ListValues**: [`DatatypeElement`](exports_model.md#datatypeelement)[]

We express enum values as IntElements as this gives us conformance
and other metadata.

#### Defined in

packages/matter.js/dist/cjs/model/elements/DatatypeElement.d.ts:40

packages/matter.js/dist/cjs/model/elements/DatatypeElement.d.ts:45

___

### Properties

Ƭ **Properties**: [`Properties`](exports_model.BaseElement.md#properties)<[`DatatypeElement`](exports_model.md#datatypeelement)\>

#### Defined in

packages/matter.js/dist/cjs/model/elements/DatatypeElement.d.ts:32

___

### Tag

Ƭ **Tag**: [`Datatype`](../enums/exports_model.ElementTag.md#datatype)

#### Defined in

packages/matter.js/dist/cjs/model/elements/DatatypeElement.d.ts:30

packages/matter.js/dist/cjs/model/elements/DatatypeElement.d.ts:31

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

packages/matter.js/dist/cjs/model/elements/DatatypeElement.d.ts:52

## Variables

### Tag

• **Tag**: [`Datatype`](../enums/exports_model.ElementTag.md#datatype)

#### Defined in

packages/matter.js/dist/cjs/model/elements/DatatypeElement.d.ts:30

packages/matter.js/dist/cjs/model/elements/DatatypeElement.d.ts:31

## Functions

### ListValues

▸ **ListValues**(`values`): [`ListValues`](exports_model.DatatypeElement.md#listvalues)

Convert a TypeScript enum to Matter enum values.

Matter enums include conformance and other metadata.  They may also have
multiple definitions of the same value selectable by conformance.  So
we can't use a TypeScript enum directly.

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`ValueMap`](exports_model.DatatypeElement.md#valuemap) |

#### Returns

[`ListValues`](exports_model.DatatypeElement.md#listvalues)

#### Defined in

packages/matter.js/dist/cjs/model/elements/DatatypeElement.d.ts:40
