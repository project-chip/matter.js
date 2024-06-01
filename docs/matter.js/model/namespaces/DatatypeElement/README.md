[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [model](../../README.md) / DatatypeElement

# Namespace: DatatypeElement

## Type Aliases

### ListValues

> **ListValues**: [`FieldElement`](../../interfaces/FieldElement.md)[]

We express enum values as IntElements as this gives us conformance
and other metadata.

#### Source

[packages/matter.js/src/model/elements/DatatypeElement.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/DatatypeElement.ts#L50)

***

### Properties

> **Properties**: [`Properties`](../BaseElement/README.md#propertiest)\<[`DatatypeElement`](../../interfaces/DatatypeElement.md)\>

#### Source

[packages/matter.js/src/model/elements/DatatypeElement.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/DatatypeElement.ts#L41)

***

### Tag

> **Tag**: *typeof* [`Datatype`](../../enumerations/ElementTag.md#datatype)

#### Source

[packages/matter.js/src/model/elements/DatatypeElement.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/DatatypeElement.ts#L39)

***

### ValueMap

> **ValueMap**: `object`

Per the Matter specification, enums are named integers.  The following
allows TypeScript enums to be supplied for translation into Matter
enums.  To do so, we must accept both numeric and string values.  For
generating the Matter enum we ignore the string keys.

#### Index signature

 \[`name`: `string`\]: `number` \| `string`

#### Source

[packages/matter.js/src/model/elements/DatatypeElement.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/DatatypeElement.ts#L81)

## Variables

### Tag

> `const` **Tag**: [`Datatype`](../../enumerations/ElementTag.md#datatype) = `ElementTag.Datatype`

#### Source

[packages/matter.js/src/model/elements/DatatypeElement.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/DatatypeElement.ts#L39)

## Functions

### ListValues()

> **ListValues**(`values`): [`ListValues`](README.md#listvalues)

Convert a TypeScript enum to Matter enum values.

Matter enums include conformance and other metadata.  They may also have
multiple definitions of the same value selectable by conformance.  So
we can't use a TypeScript enum directly.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `values` | [`ValueMap`](README.md#valuemap) |

#### Returns

[`ListValues`](README.md#listvalues)

#### Source

[packages/matter.js/src/model/elements/DatatypeElement.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/DatatypeElement.ts#L50)
