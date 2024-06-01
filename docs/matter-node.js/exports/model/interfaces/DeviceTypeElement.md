[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/model](../README.md) / DeviceTypeElement

# Interface: DeviceTypeElement

Details on a specific device as defined in the Matter specification.

TODO - extract/merge DeviceTypes.ts?

## Extends

- [`BaseElement`](BaseElement.md)

## Constructors

## Properties

### category?

> `optional` **category**: `string`

#### Source

packages/matter.js/dist/esm/model/elements/DeviceTypeElement.d.ts:20

***

### children?

> `optional` **children**: ([`FieldElement`](FieldElement.md) \| [`RequirementElement`](../README.md#requirementelement))[]

Child elements.

#### Overrides

[`BaseElement`](BaseElement.md).[`children`](BaseElement.md#children)

#### Source

packages/matter.js/dist/esm/model/elements/DeviceTypeElement.d.ts:21

***

### classification

> **classification**: `"base"` \| `"node"` \| `"utility"` \| `"simple"` \| `"dynamic"`

#### Source

packages/matter.js/dist/esm/model/elements/DeviceTypeElement.d.ts:19

***

### description?

> `optional` **description**: `string`

A short summary of the element.

#### Inherited from

[`BaseElement`](BaseElement.md).[`description`](BaseElement.md#description)

#### Source

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:35

***

### details?

> `optional` **details**: `string`

A paragraph summary of the element.

#### Inherited from

[`BaseElement`](BaseElement.md).[`details`](BaseElement.md#details)

#### Source

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:39

***

### global?

> `optional` **global**: `boolean`

Is this a global element?  Global elements are defined in Globals.ts
and are available in-scope for every cluster.

#### Inherited from

[`BaseElement`](BaseElement.md).[`global`](BaseElement.md#global)

#### Source

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:52

***

### id?

> `optional` **id**: `number`

The ID of the element per Matter specification, either global or
context-specific.  A "machine appropriate" semantic differentiator.

#### Overrides

[`BaseElement`](BaseElement.md).[`id`](BaseElement.md#id)

#### Source

packages/matter.js/dist/esm/model/elements/DeviceTypeElement.d.ts:17

***

### name

> **name**: `string`

The key used for storing this element.  A "human appropriate" semantic
differentiator.

#### Inherited from

[`BaseElement`](BaseElement.md).[`name`](BaseElement.md#name)

#### Source

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:26

***

### tag

> **tag**: `"deviceType"`

#### Source

packages/matter.js/dist/esm/model/elements/DeviceTypeElement.d.ts:18

***

### type?

> `optional` **type**: `string`

If an element derives from another element, the name of the parent
element goes here.

#### Inherited from

[`BaseElement`](BaseElement.md).[`type`](BaseElement.md#type)

#### Source

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:31

***

### xref?

> `optional` **xref**: [`CrossReference`](../namespaces/Specification/README.md#crossreference)

Reference to Matter specification document.

#### Inherited from

[`BaseElement`](BaseElement.md).[`xref`](BaseElement.md#xref)

#### Source

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:43
