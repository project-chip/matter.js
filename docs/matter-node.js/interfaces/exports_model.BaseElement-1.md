[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](../modules/exports_model.md) / BaseElement

# Interface: BaseElement

[exports/model](../modules/exports_model.md).BaseElement

Per the Matter specification, an element is a data construct that supports
an instance of data.  So, a class.

Elements as defined by this package are a static data structure.  Each
element has a corresponding "Model" that is a proper class with runtime
functionality related to the element.

## Hierarchy

- **`BaseElement`**

  ↳ [`ClusterElement`](exports_model.ClusterElement-1.md)

  ↳ [`DeviceTypeElement`](exports_model.DeviceTypeElement-1.md)

  ↳ [`EndpointElement`](exports_model.EndpointElement-1.md)

  ↳ [`FabricElement`](exports_model.FabricElement-1.md)

## Table of contents

### Constructors

- [constructor](exports_model.BaseElement-1.md#constructor)

### Properties

- [children](exports_model.BaseElement-1.md#children)
- [description](exports_model.BaseElement-1.md#description)
- [details](exports_model.BaseElement-1.md#details)
- [global](exports_model.BaseElement-1.md#global)
- [id](exports_model.BaseElement-1.md#id)
- [name](exports_model.BaseElement-1.md#name)
- [type](exports_model.BaseElement-1.md#type)
- [xref](exports_model.BaseElement-1.md#xref)

## Constructors

### constructor

• **constructor**: `Object`

## Properties

### children

• `Optional` **children**: [`AnyElement`](../modules/exports_model.md#anyelement)[]

Child elements.

#### Defined in

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:47

___

### description

• `Optional` **description**: `string`

A short summary of the element.

#### Defined in

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:35

___

### details

• `Optional` **details**: `string`

A paragraph summary of the element.

#### Defined in

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:39

___

### global

• `Optional` **global**: `boolean`

Is this a global element?  Global elements are defined in Globals.ts
and are available in-scope for every cluster.

#### Defined in

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:52

___

### id

• `Optional` **id**: `number`

The ID of the element per Matter specification, either global or
context-specific.  A "machine appropriate" semantic differentiator.

#### Defined in

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:21

___

### name

• **name**: `string`

The key used for storing this element.  A "human appropriate" semantic
differentiator.

#### Defined in

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:26

___

### type

• `Optional` **type**: `string`

If an element derives from another element, the name of the parent
element goes here.

#### Defined in

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:31

___

### xref

• `Optional` **xref**: [`CrossReference`](../modules/exports_model.Specification.md#crossreference)

Reference to Matter specification document.

#### Defined in

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:43
