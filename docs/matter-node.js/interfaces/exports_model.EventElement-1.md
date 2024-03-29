[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](../modules/exports_model.md) / EventElement

# Interface: EventElement

[exports/model](../modules/exports_model.md).EventElement

An event is triggered by endpoints.

## Hierarchy

- [`ValueElement`](../modules/exports_model.md#valueelement)

  ↳ **`EventElement`**

## Implemented by

- [`EventModel`](../classes/exports_model.EventModel.md)

## Table of contents

### Constructors

- [constructor](exports_model.EventElement-1.md#constructor)

### Properties

- [access](exports_model.EventElement-1.md#access)
- [byteSize](exports_model.EventElement-1.md#bytesize)
- [children](exports_model.EventElement-1.md#children)
- [conformance](exports_model.EventElement-1.md#conformance)
- [constraint](exports_model.EventElement-1.md#constraint)
- [default](exports_model.EventElement-1.md#default)
- [description](exports_model.EventElement-1.md#description)
- [details](exports_model.EventElement-1.md#details)
- [global](exports_model.EventElement-1.md#global)
- [id](exports_model.EventElement-1.md#id)
- [name](exports_model.EventElement-1.md#name)
- [priority](exports_model.EventElement-1.md#priority)
- [quality](exports_model.EventElement-1.md#quality)
- [tag](exports_model.EventElement-1.md#tag)
- [type](exports_model.EventElement-1.md#type)
- [xref](exports_model.EventElement-1.md#xref)

## Constructors

### constructor

• **constructor**: `Object`

#### Inherited from

ValueElement.constructor

## Properties

### access

• `Optional` **access**: [`Definition`](../modules/exports_model.Access.md#definition)

Authorization limits.

#### Inherited from

ValueElement.access

#### Defined in

packages/matter.js/dist/esm/model/elements/ValueElement.d.ts:33

___

### byteSize

• `Optional` **byteSize**: [`Size`](../modules/exports_model.ValueElement.md#size)

Applies to numeric types.

#### Inherited from

ValueElement.byteSize

#### Defined in

packages/matter.js/dist/esm/model/elements/ValueElement.d.ts:41

___

### children

• `Optional` **children**: [`AnyElement`](../modules/exports_model.md#anyelement)[] & [`AnyValueElement`](../modules/exports_model.md#anyvalueelement)[]

Child elements.

#### Inherited from

ValueElement.children

#### Defined in

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:47

packages/matter.js/dist/esm/model/elements/ValueElement.d.ts:50

___

### conformance

• `Optional` **conformance**: [`Definition`](../modules/exports_model.Conformance.md#definition)

Optionality control.

#### Inherited from

ValueElement.conformance

#### Defined in

packages/matter.js/dist/esm/model/elements/ValueElement.d.ts:29

___

### constraint

• `Optional` **constraint**: [`Definition`](../modules/exports_model.Constraint.md#definition)

Limits on values.

#### Inherited from

ValueElement.constraint

#### Defined in

packages/matter.js/dist/esm/model/elements/ValueElement.d.ts:25

___

### default

• `Optional` **default**: [`FieldValue`](../modules/exports_model.md#fieldvalue)

The default value for the element.

#### Inherited from

ValueElement.default

#### Defined in

packages/matter.js/dist/esm/model/elements/ValueElement.d.ts:45

___

### description

• `Optional` **description**: `string`

A short summary of the element.

#### Inherited from

ValueElement.description

#### Defined in

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:35

___

### details

• `Optional` **details**: `string`

A paragraph summary of the element.

#### Inherited from

ValueElement.details

#### Defined in

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:39

___

### global

• `Optional` **global**: `boolean`

Is this a global element?  Global elements are defined in Globals.ts
and are available in-scope for every cluster.

#### Inherited from

ValueElement.global

#### Defined in

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:52

___

### id

• **id**: `number`

#### Overrides

ValueElement.id

#### Defined in

packages/matter.js/dist/esm/model/elements/EventElement.d.ts:13

___

### name

• **name**: `string`

The key used for storing this element.  A "human appropriate" semantic
differentiator.

#### Inherited from

ValueElement.name

#### Defined in

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:26

___

### priority

• `Optional` **priority**: ``"debug"`` \| ``"info"`` \| ``"critical"``

#### Defined in

packages/matter.js/dist/esm/model/elements/EventElement.d.ts:15

___

### quality

• `Optional` **quality**: [`Definition`](../modules/exports_model.Quality.md#definition)

Other qualities not covered by conformance or access.

#### Inherited from

ValueElement.quality

#### Defined in

packages/matter.js/dist/esm/model/elements/ValueElement.d.ts:37

___

### tag

• **tag**: ``"event"``

#### Defined in

packages/matter.js/dist/esm/model/elements/EventElement.d.ts:14

___

### type

• `Optional` **type**: `string`

If an element derives from another element, the name of the parent
element goes here.

#### Inherited from

ValueElement.type

#### Defined in

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:31

packages/matter.js/dist/esm/model/elements/ValueElement.d.ts:21

___

### xref

• `Optional` **xref**: [`CrossReference`](../modules/exports_model.Specification.md#crossreference)

Reference to Matter specification document.

#### Inherited from

ValueElement.xref

#### Defined in

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:43
