[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/model](../README.md) / DatatypeElement

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

packages/matter.js/dist/esm/model/elements/ValueElement.d.ts:33

***

### byteSize?

> `optional` **byteSize**: [`Size`](../namespaces/ValueElement/README.md#size)

Applies to numeric types.

#### Inherited from

`ValueElement.byteSize`

#### Source

packages/matter.js/dist/esm/model/elements/ValueElement.d.ts:41

***

### children?

> `optional` **children**: [`FieldElement`](FieldElement.md)[]

#### Overrides

`ValueElement.children`

#### Source

packages/matter.js/dist/esm/model/elements/DatatypeElement.d.ts:26

***

### conformance?

> `optional` **conformance**: [`Definition`](../namespaces/Conformance/README.md#definition)

Optionality control.

#### Inherited from

`ValueElement.conformance`

#### Source

packages/matter.js/dist/esm/model/elements/ValueElement.d.ts:29

***

### constraint?

> `optional` **constraint**: [`Definition`](../namespaces/Constraint/README.md#definition)

Limits on values.

#### Inherited from

`ValueElement.constraint`

#### Source

packages/matter.js/dist/esm/model/elements/ValueElement.d.ts:25

***

### default?

> `optional` **default**: [`FieldValue`](../README.md#fieldvalue)

The default value for the element.

#### Inherited from

`ValueElement.default`

#### Source

packages/matter.js/dist/esm/model/elements/ValueElement.d.ts:45

***

### description?

> `optional` **description**: `string`

A short summary of the element.

#### Inherited from

`ValueElement.description`

#### Source

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:35

***

### details?

> `optional` **details**: `string`

A paragraph summary of the element.

#### Inherited from

`ValueElement.details`

#### Source

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:39

***

### global?

> `optional` **global**: `boolean`

Is this a global element?  Global elements are defined in Globals.ts
and are available in-scope for every cluster.

#### Inherited from

`ValueElement.global`

#### Source

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:52

***

### id?

> `optional` **id**: `undefined`

You can only reference a datatype by name.  It does not have an ID.

#### Overrides

`ValueElement.id`

#### Source

packages/matter.js/dist/esm/model/elements/DatatypeElement.d.ts:25

***

### metatype?

> `optional` **metatype**: `"string"` \| `"boolean"` \| `"object"` \| `"bytes"` \| `"float"` \| `"integer"` \| `"array"` \| `"date"` \| `"any"` \| `"bitmap"` \| `"enum"`

A "metatype" provides enough semantics for us to translate a value into
a native datatype.  Metatype is only required on global datatypes, and
only when the datatype should map directly to a specific native (JS)
type.

#### Source

packages/matter.js/dist/esm/model/elements/DatatypeElement.d.ts:21

***

### name

> **name**: `string`

The key used for storing this element.  A "human appropriate" semantic
differentiator.

#### Inherited from

`ValueElement.name`

#### Source

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:26

***

### quality?

> `optional` **quality**: [`Definition`](../namespaces/Quality/README.md#definition)

Other qualities not covered by conformance or access.

#### Inherited from

`ValueElement.quality`

#### Source

packages/matter.js/dist/esm/model/elements/ValueElement.d.ts:37

***

### tag

> **tag**: `"datatype"`

#### Source

packages/matter.js/dist/esm/model/elements/DatatypeElement.d.ts:14

***

### type?

> `optional` **type**: `string`

If an element derives from another element, the name of the parent
element goes here.

#### Inherited from

`ValueElement.type`

#### Source

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:31

***

### xref?

> `optional` **xref**: [`CrossReference`](../namespaces/Specification/README.md#crossreference)

Reference to Matter specification document.

#### Inherited from

`ValueElement.xref`

#### Source

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:43
