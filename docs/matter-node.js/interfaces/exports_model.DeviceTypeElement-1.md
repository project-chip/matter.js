[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](../modules/exports_model.md) / DeviceTypeElement

# Interface: DeviceTypeElement

[exports/model](../modules/exports_model.md).DeviceTypeElement

Details on a specific device as defined in the Matter specification.

TODO - extract/merge DeviceTypes.ts?

## Hierarchy

- [`BaseElement`](exports_model.BaseElement-1.md)

  ↳ **`DeviceTypeElement`**

## Implemented by

- [`DeviceTypeModel`](../classes/exports_model.DeviceTypeModel.md)

## Table of contents

### Constructors

- [constructor](exports_model.DeviceTypeElement-1.md#constructor)

### Properties

- [category](exports_model.DeviceTypeElement-1.md#category)
- [children](exports_model.DeviceTypeElement-1.md#children)
- [classification](exports_model.DeviceTypeElement-1.md#classification)
- [description](exports_model.DeviceTypeElement-1.md#description)
- [details](exports_model.DeviceTypeElement-1.md#details)
- [global](exports_model.DeviceTypeElement-1.md#global)
- [id](exports_model.DeviceTypeElement-1.md#id)
- [name](exports_model.DeviceTypeElement-1.md#name)
- [tag](exports_model.DeviceTypeElement-1.md#tag)
- [type](exports_model.DeviceTypeElement-1.md#type)
- [xref](exports_model.DeviceTypeElement-1.md#xref)

## Constructors

### constructor

• **constructor**: `Object`

#### Inherited from

[BaseElement](exports_model.BaseElement-1.md).[constructor](exports_model.BaseElement-1.md#constructor)

## Properties

### category

• `Optional` **category**: `string`

#### Defined in

packages/matter.js/dist/esm/model/elements/DeviceTypeElement.d.ts:19

___

### children

• `Optional` **children**: ([`FieldElement`](exports_model.FieldElement-1.md) \| [`RequirementElement`](../modules/exports_model.md#requirementelement))[]

Child elements.

#### Overrides

[BaseElement](exports_model.BaseElement-1.md).[children](exports_model.BaseElement-1.md#children)

#### Defined in

packages/matter.js/dist/esm/model/elements/DeviceTypeElement.d.ts:20

___

### classification

• **classification**: ``"base"`` \| ``"node"`` \| ``"utility"`` \| ``"simple"`` \| ``"dynamic"``

#### Defined in

packages/matter.js/dist/esm/model/elements/DeviceTypeElement.d.ts:18

___

### description

• `Optional` **description**: `string`

A short summary of the element.

#### Inherited from

[BaseElement](exports_model.BaseElement-1.md).[description](exports_model.BaseElement-1.md#description)

#### Defined in

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:35

___

### details

• `Optional` **details**: `string`

A paragraph summary of the element.

#### Inherited from

[BaseElement](exports_model.BaseElement-1.md).[details](exports_model.BaseElement-1.md#details)

#### Defined in

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:39

___

### global

• `Optional` **global**: `boolean`

Is this a global element?  Global elements are defined in Globals.ts
and are available in-scope for every cluster.

#### Inherited from

[BaseElement](exports_model.BaseElement-1.md).[global](exports_model.BaseElement-1.md#global)

#### Defined in

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:52

___

### id

• `Optional` **id**: `number`

The ID of the element per Matter specification, either global or
context-specific.  A "machine appropriate" semantic differentiator.

#### Overrides

[BaseElement](exports_model.BaseElement-1.md).[id](exports_model.BaseElement-1.md#id)

#### Defined in

packages/matter.js/dist/esm/model/elements/DeviceTypeElement.d.ts:16

___

### name

• **name**: `string`

The key used for storing this element.  A "human appropriate" semantic
differentiator.

#### Inherited from

[BaseElement](exports_model.BaseElement-1.md).[name](exports_model.BaseElement-1.md#name)

#### Defined in

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:26

___

### tag

• **tag**: ``"deviceType"``

#### Defined in

packages/matter.js/dist/esm/model/elements/DeviceTypeElement.d.ts:17

___

### type

• `Optional` **type**: `string`

If an element derives from another element, the name of the parent
element goes here.

#### Inherited from

[BaseElement](exports_model.BaseElement-1.md).[type](exports_model.BaseElement-1.md#type)

#### Defined in

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:31

___

### xref

• `Optional` **xref**: [`CrossReference`](../modules/exports_model.Specification.md#crossreference)

Reference to Matter specification document.

#### Inherited from

[BaseElement](exports_model.BaseElement-1.md).[xref](exports_model.BaseElement-1.md#xref)

#### Defined in

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:43
