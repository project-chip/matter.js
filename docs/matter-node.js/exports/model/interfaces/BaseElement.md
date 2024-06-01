[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/model](../README.md) / BaseElement

# Interface: BaseElement

Per the Matter specification, an element is a data construct that supports
an instance of data.  So, a class.

Elements as defined by this package are a static data structure.  Each
element has a corresponding "Model" that is a proper class with runtime
functionality related to the element.

## Extended by

- [`ClusterElement`](ClusterElement.md)
- [`DeviceTypeElement`](DeviceTypeElement.md)
- [`EndpointElement`](EndpointElement.md)
- [`FabricElement`](FabricElement.md)

## Constructors

## Properties

### children?

> `optional` **children**: [`AnyElement`](../README.md#anyelement)[]

Child elements.

#### Source

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:47

***

### description?

> `optional` **description**: `string`

A short summary of the element.

#### Source

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:35

***

### details?

> `optional` **details**: `string`

A paragraph summary of the element.

#### Source

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:39

***

### global?

> `optional` **global**: `boolean`

Is this a global element?  Global elements are defined in Globals.ts
and are available in-scope for every cluster.

#### Source

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:52

***

### id?

> `optional` **id**: `number`

The ID of the element per Matter specification, either global or
context-specific.  A "machine appropriate" semantic differentiator.

#### Source

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:21

***

### name

> **name**: `string`

The key used for storing this element.  A "human appropriate" semantic
differentiator.

#### Source

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:26

***

### type?

> `optional` **type**: `string`

If an element derives from another element, the name of the parent
element goes here.

#### Source

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:31

***

### xref?

> `optional` **xref**: [`CrossReference`](../namespaces/Specification/README.md#crossreference)

Reference to Matter specification document.

#### Source

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:43
