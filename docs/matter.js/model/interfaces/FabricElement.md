[**@project-chip/matter.js**](../../README.md) • **Docs**

***

[@project-chip/matter.js](../../modules.md) / [model](../README.md) / FabricElement

# Interface: FabricElement

Runtime representation of a fabric.

## Extends

- [`BaseElement`](BaseElement.md)

## Constructors

## Properties

### children

> **children**: [`NodeElement`](../README.md#nodeelement)[]

Child elements.

#### Overrides

[`BaseElement`](BaseElement.md).[`children`](BaseElement.md#children)

#### Source

[packages/matter.js/src/model/elements/FabricElement.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/FabricElement.ts#L17)

***

### description?

> `optional` **description**: `string`

A short summary of the element.

#### Inherited from

[`BaseElement`](BaseElement.md).[`description`](BaseElement.md#description)

#### Source

[packages/matter.js/src/model/elements/BaseElement.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/BaseElement.ts#L40)

***

### details?

> `optional` **details**: `string`

A paragraph summary of the element.

#### Inherited from

[`BaseElement`](BaseElement.md).[`details`](BaseElement.md#details)

#### Source

[packages/matter.js/src/model/elements/BaseElement.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/BaseElement.ts#L45)

***

### global?

> `optional` **global**: `boolean`

Is this a global element?  Global elements are defined in Globals.ts
and are available in-scope for every cluster.

#### Inherited from

[`BaseElement`](BaseElement.md).[`global`](BaseElement.md#global)

#### Source

[packages/matter.js/src/model/elements/BaseElement.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/BaseElement.ts#L61)

***

### id

> **id**: `number`

The ID of the element per Matter specification, either global or
context-specific.  A "machine appropriate" semantic differentiator.

#### Overrides

[`BaseElement`](BaseElement.md).[`id`](BaseElement.md#id)

#### Source

[packages/matter.js/src/model/elements/FabricElement.ts:15](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/FabricElement.ts#L15)

***

### name

> **name**: `string`

The key used for storing this element.  A "human appropriate" semantic
differentiator.

#### Inherited from

[`BaseElement`](BaseElement.md).[`name`](BaseElement.md#name)

#### Source

[packages/matter.js/src/model/elements/BaseElement.ts:29](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/BaseElement.ts#L29)

***

### tag

> **tag**: `"fabric"`

#### Source

[packages/matter.js/src/model/elements/FabricElement.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/FabricElement.ts#L16)

***

### type?

> `optional` **type**: `string`

If an element derives from another element, the name of the parent
element goes here.

#### Inherited from

[`BaseElement`](BaseElement.md).[`type`](BaseElement.md#type)

#### Source

[packages/matter.js/src/model/elements/BaseElement.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/BaseElement.ts#L35)

***

### xref?

> `optional` **xref**: [`CrossReference`](../namespaces/Specification/README.md#crossreference)

Reference to Matter specification document.

#### Inherited from

[`BaseElement`](BaseElement.md).[`xref`](BaseElement.md#xref)

#### Source

[packages/matter.js/src/model/elements/BaseElement.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/BaseElement.ts#L50)
