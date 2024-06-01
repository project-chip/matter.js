[**@project-chip/matter.js**](../../README.md) • **Docs**

***

[@project-chip/matter.js](../../modules.md) / [model](../README.md) / BaseElement

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

[packages/matter.js/src/model/elements/BaseElement.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/BaseElement.ts#L55)

***

### description?

> `optional` **description**: `string`

A short summary of the element.

#### Source

[packages/matter.js/src/model/elements/BaseElement.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/BaseElement.ts#L40)

***

### details?

> `optional` **details**: `string`

A paragraph summary of the element.

#### Source

[packages/matter.js/src/model/elements/BaseElement.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/BaseElement.ts#L45)

***

### global?

> `optional` **global**: `boolean`

Is this a global element?  Global elements are defined in Globals.ts
and are available in-scope for every cluster.

#### Source

[packages/matter.js/src/model/elements/BaseElement.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/BaseElement.ts#L61)

***

### id?

> `optional` **id**: `number`

The ID of the element per Matter specification, either global or
context-specific.  A "machine appropriate" semantic differentiator.

#### Source

[packages/matter.js/src/model/elements/BaseElement.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/BaseElement.ts#L23)

***

### name

> **name**: `string`

The key used for storing this element.  A "human appropriate" semantic
differentiator.

#### Source

[packages/matter.js/src/model/elements/BaseElement.ts:29](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/BaseElement.ts#L29)

***

### type?

> `optional` **type**: `string`

If an element derives from another element, the name of the parent
element goes here.

#### Source

[packages/matter.js/src/model/elements/BaseElement.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/BaseElement.ts#L35)

***

### xref?

> `optional` **xref**: [`CrossReference`](../namespaces/Specification/README.md#crossreference)

Reference to Matter specification document.

#### Source

[packages/matter.js/src/model/elements/BaseElement.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/BaseElement.ts#L50)
