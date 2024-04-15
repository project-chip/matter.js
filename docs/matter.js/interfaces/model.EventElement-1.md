[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](../modules/model.md) / EventElement

# Interface: EventElement

[model](../modules/model.md).EventElement

An event is triggered by endpoints.

## Hierarchy

- [`ValueElement`](../modules/model.md#valueelement)

  ↳ **`EventElement`**

## Implemented by

- [`EventModel`](../classes/model.EventModel.md)

## Table of contents

### Constructors

- [constructor](model.EventElement-1.md#constructor)

### Properties

- [access](model.EventElement-1.md#access)
- [byteSize](model.EventElement-1.md#bytesize)
- [children](model.EventElement-1.md#children)
- [conformance](model.EventElement-1.md#conformance)
- [constraint](model.EventElement-1.md#constraint)
- [default](model.EventElement-1.md#default)
- [description](model.EventElement-1.md#description)
- [details](model.EventElement-1.md#details)
- [global](model.EventElement-1.md#global)
- [id](model.EventElement-1.md#id)
- [name](model.EventElement-1.md#name)
- [priority](model.EventElement-1.md#priority)
- [quality](model.EventElement-1.md#quality)
- [tag](model.EventElement-1.md#tag)
- [type](model.EventElement-1.md#type)
- [xref](model.EventElement-1.md#xref)

## Constructors

### constructor

• **constructor**: `Object`

#### Inherited from

ValueElement.constructor

## Properties

### access

• `Optional` **access**: [`Definition`](../modules/model.Access.md#definition)

Authorization limits.

#### Inherited from

ValueElement.access

#### Defined in

[packages/matter.js/src/model/elements/ValueElement.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/ValueElement.ts#L38)

___

### byteSize

• `Optional` **byteSize**: [`Size`](../modules/model.ValueElement.md#size)

Applies to numeric types.

#### Inherited from

ValueElement.byteSize

#### Defined in

[packages/matter.js/src/model/elements/ValueElement.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/ValueElement.ts#L48)

___

### children

• `Optional` **children**: [`AnyElement`](../modules/model.md#anyelement)[] & [`AnyValueElement`](../modules/model.md#anyvalueelement)[]

Child elements.

#### Inherited from

ValueElement.children

#### Defined in

[packages/matter.js/src/model/elements/BaseElement.ts:55](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/BaseElement.ts#L55)

[packages/matter.js/src/model/elements/ValueElement.ts:59](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/ValueElement.ts#L59)

___

### conformance

• `Optional` **conformance**: [`Definition`](../modules/model.Conformance.md#definition)

Optionality control.

#### Inherited from

ValueElement.conformance

#### Defined in

[packages/matter.js/src/model/elements/ValueElement.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/ValueElement.ts#L33)

___

### constraint

• `Optional` **constraint**: [`Definition`](../modules/model.Constraint.md#definition)

Limits on values.

#### Inherited from

ValueElement.constraint

#### Defined in

[packages/matter.js/src/model/elements/ValueElement.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/ValueElement.ts#L28)

___

### default

• `Optional` **default**: [`FieldValue`](../modules/model.md#fieldvalue)

The default value for the element.

#### Inherited from

ValueElement.default

#### Defined in

[packages/matter.js/src/model/elements/ValueElement.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/ValueElement.ts#L53)

___

### description

• `Optional` **description**: `string`

A short summary of the element.

#### Inherited from

ValueElement.description

#### Defined in

[packages/matter.js/src/model/elements/BaseElement.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/BaseElement.ts#L40)

___

### details

• `Optional` **details**: `string`

A paragraph summary of the element.

#### Inherited from

ValueElement.details

#### Defined in

[packages/matter.js/src/model/elements/BaseElement.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/BaseElement.ts#L45)

___

### global

• `Optional` **global**: `boolean`

Is this a global element?  Global elements are defined in Globals.ts
and are available in-scope for every cluster.

#### Inherited from

ValueElement.global

#### Defined in

[packages/matter.js/src/model/elements/BaseElement.ts:61](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/BaseElement.ts#L61)

___

### id

• **id**: `number`

#### Overrides

ValueElement.id

#### Defined in

[packages/matter.js/src/model/elements/EventElement.ts:15](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/EventElement.ts#L15)

___

### name

• **name**: `string`

The key used for storing this element.  A "human appropriate" semantic
differentiator.

#### Inherited from

ValueElement.name

#### Defined in

[packages/matter.js/src/model/elements/BaseElement.ts:29](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/BaseElement.ts#L29)

___

### priority

• `Optional` **priority**: ``"debug"`` \| ``"info"`` \| ``"critical"``

#### Defined in

[packages/matter.js/src/model/elements/EventElement.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/EventElement.ts#L19)

___

### quality

• `Optional` **quality**: [`Definition`](../modules/model.Quality.md#definition)

Other qualities not covered by conformance or access.

#### Inherited from

ValueElement.quality

#### Defined in

[packages/matter.js/src/model/elements/ValueElement.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/ValueElement.ts#L43)

___

### tag

• **tag**: ``"event"``

#### Defined in

[packages/matter.js/src/model/elements/EventElement.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/EventElement.ts#L16)

___

### type

• `Optional` **type**: `string`

If an element derives from another element, the name of the parent
element goes here.

#### Inherited from

ValueElement.type

#### Defined in

[packages/matter.js/src/model/elements/BaseElement.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/BaseElement.ts#L35)

[packages/matter.js/src/model/elements/ValueElement.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/ValueElement.ts#L23)

___

### xref

• `Optional` **xref**: [`CrossReference`](../modules/model.Specification.md#crossreference)

Reference to Matter specification document.

#### Inherited from

ValueElement.xref

#### Defined in

[packages/matter.js/src/model/elements/BaseElement.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/BaseElement.ts#L50)
