[**@project-chip/matter.js**](../../README.md) • **Docs**

***

[@project-chip/matter.js](../../modules.md) / [model](../README.md) / DatatypeElement

# Interface: DatatypeElement

A datatype represents a named, standalone type definition.

## Extends

- [`ValueElement`](../README.md#valueelement)

## Constructors

## Properties

### access?

> `optional` **access**: [`Definition`](../namespaces/Access/README.md#definition)

Authorization limits.

#### Inherited from

`ValueElement.access`

#### Source

[packages/matter.js/src/model/elements/ValueElement.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/ValueElement.ts#L38)

***

### byteSize?

> `optional` **byteSize**: [`Size`](../namespaces/ValueElement/README.md#size)

Applies to numeric types.

#### Inherited from

`ValueElement.byteSize`

#### Source

[packages/matter.js/src/model/elements/ValueElement.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/ValueElement.ts#L48)

***

### children?

> `optional` **children**: [`FieldElement`](FieldElement.md)[]

#### Overrides

`ValueElement.children`

#### Source

[packages/matter.js/src/model/elements/DatatypeElement.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/DatatypeElement.ts#L31)

***

### conformance?

> `optional` **conformance**: [`Definition`](../namespaces/Conformance/README.md#definition)

Optionality control.

#### Inherited from

`ValueElement.conformance`

#### Source

[packages/matter.js/src/model/elements/ValueElement.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/ValueElement.ts#L33)

***

### constraint?

> `optional` **constraint**: [`Definition`](../namespaces/Constraint/README.md#definition)

Limits on values.

#### Inherited from

`ValueElement.constraint`

#### Source

[packages/matter.js/src/model/elements/ValueElement.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/ValueElement.ts#L28)

***

### default?

> `optional` **default**: [`FieldValue`](../README.md#fieldvalue)

The default value for the element.

#### Inherited from

`ValueElement.default`

#### Source

[packages/matter.js/src/model/elements/ValueElement.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/ValueElement.ts#L53)

***

### description?

> `optional` **description**: `string`

A short summary of the element.

#### Inherited from

`ValueElement.description`

#### Source

[packages/matter.js/src/model/elements/BaseElement.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/BaseElement.ts#L40)

***

### details?

> `optional` **details**: `string`

A paragraph summary of the element.

#### Inherited from

`ValueElement.details`

#### Source

[packages/matter.js/src/model/elements/BaseElement.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/BaseElement.ts#L45)

***

### global?

> `optional` **global**: `boolean`

Is this a global element?  Global elements are defined in Globals.ts
and are available in-scope for every cluster.

#### Inherited from

`ValueElement.global`

#### Source

[packages/matter.js/src/model/elements/BaseElement.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/BaseElement.ts#L61)

***

### id?

> `optional` **id**: `undefined`

You can only reference a datatype by name.  It does not have an ID.

#### Overrides

`ValueElement.id`

#### Source

[packages/matter.js/src/model/elements/DatatypeElement.ts:29](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/DatatypeElement.ts#L29)

***

### metatype?

> `optional` **metatype**: `"string"` \| `"boolean"` \| `"object"` \| `"bytes"` \| `"float"` \| `"integer"` \| `"array"` \| `"any"` \| `"bitmap"` \| `"enum"` \| `"date"`

A "metatype" provides enough semantics for us to translate a value into
a native datatype.  Metatype is only required on global datatypes, and
only when the datatype should map directly to a specific native (JS)
type.

#### Source

[packages/matter.js/src/model/elements/DatatypeElement.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/DatatypeElement.ts#L24)

***

### name

> **name**: `string`

The key used for storing this element.  A "human appropriate" semantic
differentiator.

#### Inherited from

`ValueElement.name`

#### Source

[packages/matter.js/src/model/elements/BaseElement.ts:29](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/BaseElement.ts#L29)

***

### quality?

> `optional` **quality**: [`Definition`](../namespaces/Quality/README.md#definition)

Other qualities not covered by conformance or access.

#### Inherited from

`ValueElement.quality`

#### Source

[packages/matter.js/src/model/elements/ValueElement.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/ValueElement.ts#L43)

***

### tag

> **tag**: `"datatype"`

#### Source

[packages/matter.js/src/model/elements/DatatypeElement.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/DatatypeElement.ts#L16)

***

### type?

> `optional` **type**: `string`

If an element derives from another element, the name of the parent
element goes here.

#### Inherited from

`ValueElement.type`

#### Source

[packages/matter.js/src/model/elements/BaseElement.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/BaseElement.ts#L35)

***

### xref?

> `optional` **xref**: [`CrossReference`](../namespaces/Specification/README.md#crossreference)

Reference to Matter specification document.

#### Inherited from

`ValueElement.xref`

#### Source

[packages/matter.js/src/model/elements/BaseElement.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/BaseElement.ts#L50)
