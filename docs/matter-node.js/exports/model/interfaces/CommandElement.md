[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/model](../README.md) / CommandElement

# Interface: CommandElement

A command describes a remote procedure call.

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

> `optional` **children**: [`AnyElement`](../README.md#anyelement)[] & [`AnyValueElement`](../README.md#anyvalueelement)[]

Child elements.

#### Inherited from

`ValueElement.children`

#### Source

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:47

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

### direction?

> `optional` **direction**: `"request"` \| `"response"`

#### Source

packages/matter.js/dist/esm/model/elements/CommandElement.d.ts:16

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

### id

> **id**: `number`

#### Overrides

`ValueElement.id`

#### Source

packages/matter.js/dist/esm/model/elements/CommandElement.d.ts:14

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

### response?

> `optional` **response**: `string`

#### Source

packages/matter.js/dist/esm/model/elements/CommandElement.d.ts:17

***

### tag

> **tag**: `"command"`

#### Source

packages/matter.js/dist/esm/model/elements/CommandElement.d.ts:15

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
