[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](../modules/model.md) / EndpointElement

# Interface: EndpointElement

[model](../modules/model.md).EndpointElement

Runtime representation of an endpoint.

## Hierarchy

- [`BaseElement`](model.BaseElement-1.md)

  ↳ **`EndpointElement`**

## Implemented by

- [`EndpointModel`](../classes/model.EndpointModel.md)

## Table of contents

### Constructors

- [constructor](model.EndpointElement-1.md#constructor)

### Properties

- [children](model.EndpointElement-1.md#children)
- [description](model.EndpointElement-1.md#description)
- [details](model.EndpointElement-1.md#details)
- [global](model.EndpointElement-1.md#global)
- [id](model.EndpointElement-1.md#id)
- [name](model.EndpointElement-1.md#name)
- [tag](model.EndpointElement-1.md#tag)
- [type](model.EndpointElement-1.md#type)
- [xref](model.EndpointElement-1.md#xref)

## Constructors

### constructor

• **constructor**: `Object`

#### Inherited from

[BaseElement](model.BaseElement-1.md).[constructor](model.BaseElement-1.md#constructor)

## Properties

### children

• **children**: [`DeviceTypeElement`](model.DeviceTypeElement-1.md)[]

Child elements.

#### Overrides

[BaseElement](model.BaseElement-1.md).[children](model.BaseElement-1.md#children)

#### Defined in

[packages/matter.js/src/model/elements/EndpointElement.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/EndpointElement.ts#L17)

___

### description

• `Optional` **description**: `string`

A short summary of the element.

#### Inherited from

[BaseElement](model.BaseElement-1.md).[description](model.BaseElement-1.md#description)

#### Defined in

[packages/matter.js/src/model/elements/BaseElement.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/BaseElement.ts#L40)

___

### details

• `Optional` **details**: `string`

A paragraph summary of the element.

#### Inherited from

[BaseElement](model.BaseElement-1.md).[details](model.BaseElement-1.md#details)

#### Defined in

[packages/matter.js/src/model/elements/BaseElement.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/BaseElement.ts#L45)

___

### global

• `Optional` **global**: `boolean`

Is this a global element?  Global elements are defined in Globals.ts
and are available in-scope for every cluster.

#### Inherited from

[BaseElement](model.BaseElement-1.md).[global](model.BaseElement-1.md#global)

#### Defined in

[packages/matter.js/src/model/elements/BaseElement.ts:61](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/BaseElement.ts#L61)

___

### id

• **id**: `number`

The ID of the element per Matter specification, either global or
context-specific.  A "machine appropriate" semantic differentiator.

#### Overrides

[BaseElement](model.BaseElement-1.md).[id](model.BaseElement-1.md#id)

#### Defined in

[packages/matter.js/src/model/elements/EndpointElement.ts:15](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/EndpointElement.ts#L15)

___

### name

• **name**: `string`

The key used for storing this element.  A "human appropriate" semantic
differentiator.

#### Inherited from

[BaseElement](model.BaseElement-1.md).[name](model.BaseElement-1.md#name)

#### Defined in

[packages/matter.js/src/model/elements/BaseElement.ts:29](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/BaseElement.ts#L29)

___

### tag

• **tag**: ``"endpoint"``

#### Defined in

[packages/matter.js/src/model/elements/EndpointElement.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/EndpointElement.ts#L16)

___

### type

• `Optional` **type**: `string`

If an element derives from another element, the name of the parent
element goes here.

#### Inherited from

[BaseElement](model.BaseElement-1.md).[type](model.BaseElement-1.md#type)

#### Defined in

[packages/matter.js/src/model/elements/BaseElement.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/BaseElement.ts#L35)

___

### xref

• `Optional` **xref**: [`CrossReference`](../modules/model.Specification.md#crossreference)

Reference to Matter specification document.

#### Inherited from

[BaseElement](model.BaseElement-1.md).[xref](model.BaseElement-1.md#xref)

#### Defined in

[packages/matter.js/src/model/elements/BaseElement.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/BaseElement.ts#L50)
