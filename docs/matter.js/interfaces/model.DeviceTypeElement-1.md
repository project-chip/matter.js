[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](../modules/model.md) / DeviceTypeElement

# Interface: DeviceTypeElement

[model](../modules/model.md).DeviceTypeElement

Details on a specific device as defined in the Matter specification.

TODO - extract/merge DeviceTypes.ts?

## Hierarchy

- [`BaseElement`](model.BaseElement-1.md)

  ↳ **`DeviceTypeElement`**

## Implemented by

- [`DeviceTypeModel`](../classes/model.DeviceTypeModel.md)

## Table of contents

### Constructors

- [constructor](model.DeviceTypeElement-1.md#constructor)

### Properties

- [category](model.DeviceTypeElement-1.md#category)
- [children](model.DeviceTypeElement-1.md#children)
- [classification](model.DeviceTypeElement-1.md#classification)
- [description](model.DeviceTypeElement-1.md#description)
- [details](model.DeviceTypeElement-1.md#details)
- [global](model.DeviceTypeElement-1.md#global)
- [id](model.DeviceTypeElement-1.md#id)
- [name](model.DeviceTypeElement-1.md#name)
- [tag](model.DeviceTypeElement-1.md#tag)
- [type](model.DeviceTypeElement-1.md#type)
- [xref](model.DeviceTypeElement-1.md#xref)

## Constructors

### constructor

• **constructor**: `Object`

#### Inherited from

[BaseElement](model.BaseElement-1.md).[constructor](model.BaseElement-1.md#constructor)

## Properties

### category

• `Optional` **category**: `string`

#### Defined in

[packages/matter.js/src/model/elements/DeviceTypeElement.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/DeviceTypeElement.ts#L21)

___

### children

• `Optional` **children**: ([`FieldElement`](model.FieldElement-1.md) \| [`RequirementElement`](../modules/model.md#requirementelement))[]

Child elements.

#### Overrides

[BaseElement](model.BaseElement-1.md).[children](model.BaseElement-1.md#children)

#### Defined in

[packages/matter.js/src/model/elements/DeviceTypeElement.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/DeviceTypeElement.ts#L22)

___

### classification

• **classification**: ``"base"`` \| ``"node"`` \| ``"utility"`` \| ``"simple"`` \| ``"dynamic"``

#### Defined in

[packages/matter.js/src/model/elements/DeviceTypeElement.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/DeviceTypeElement.ts#L20)

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

• `Optional` **id**: `number`

The ID of the element per Matter specification, either global or
context-specific.  A "machine appropriate" semantic differentiator.

#### Overrides

[BaseElement](model.BaseElement-1.md).[id](model.BaseElement-1.md#id)

#### Defined in

[packages/matter.js/src/model/elements/DeviceTypeElement.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/DeviceTypeElement.ts#L18)

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

• **tag**: ``"deviceType"``

#### Defined in

[packages/matter.js/src/model/elements/DeviceTypeElement.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/DeviceTypeElement.ts#L19)

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
