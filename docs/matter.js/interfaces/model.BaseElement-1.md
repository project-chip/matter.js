[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](../modules/model.md) / BaseElement

# Interface: BaseElement

[model](../modules/model.md).BaseElement

Per the Matter specification, an element is a data construct that supports
an instance of data.  So, a class.

Elements as defined by this package are a static data structure.  Each
element has a corresponding "Model" that is a proper class with runtime
functionality related to the element.

## Hierarchy

- **`BaseElement`**

  ↳ [`ClusterElement`](model.ClusterElement-1.md)

  ↳ [`DeviceTypeElement`](model.DeviceTypeElement-1.md)

  ↳ [`EndpointElement`](model.EndpointElement-1.md)

  ↳ [`FabricElement`](model.FabricElement-1.md)

## Table of contents

### Constructors

- [constructor](model.BaseElement-1.md#constructor)

### Properties

- [children](model.BaseElement-1.md#children)
- [description](model.BaseElement-1.md#description)
- [details](model.BaseElement-1.md#details)
- [global](model.BaseElement-1.md#global)
- [id](model.BaseElement-1.md#id)
- [name](model.BaseElement-1.md#name)
- [type](model.BaseElement-1.md#type)
- [xref](model.BaseElement-1.md#xref)

## Constructors

### constructor

• **constructor**: `Object`

## Properties

### children

• `Optional` **children**: [`AnyElement`](../modules/model.md#anyelement)[]

Child elements.

#### Defined in

[packages/matter.js/src/model/elements/BaseElement.ts:55](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/BaseElement.ts#L55)

___

### description

• `Optional` **description**: `string`

A short summary of the element.

#### Defined in

[packages/matter.js/src/model/elements/BaseElement.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/BaseElement.ts#L40)

___

### details

• `Optional` **details**: `string`

A paragraph summary of the element.

#### Defined in

[packages/matter.js/src/model/elements/BaseElement.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/BaseElement.ts#L45)

___

### global

• `Optional` **global**: `boolean`

Is this a global element?  Global elements are defined in Globals.ts
and are available in-scope for every cluster.

#### Defined in

[packages/matter.js/src/model/elements/BaseElement.ts:61](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/BaseElement.ts#L61)

___

### id

• `Optional` **id**: `number`

The ID of the element per Matter specification, either global or
context-specific.  A "machine appropriate" semantic differentiator.

#### Defined in

[packages/matter.js/src/model/elements/BaseElement.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/BaseElement.ts#L23)

___

### name

• **name**: `string`

The key used for storing this element.  A "human appropriate" semantic
differentiator.

#### Defined in

[packages/matter.js/src/model/elements/BaseElement.ts:29](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/BaseElement.ts#L29)

___

### type

• `Optional` **type**: `string`

If an element derives from another element, the name of the parent
element goes here.

#### Defined in

[packages/matter.js/src/model/elements/BaseElement.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/BaseElement.ts#L35)

___

### xref

• `Optional` **xref**: [`CrossReference`](../modules/model.Specification.md#crossreference)

Reference to Matter specification document.

#### Defined in

[packages/matter.js/src/model/elements/BaseElement.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/BaseElement.ts#L50)
