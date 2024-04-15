[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](../modules/model.md) / DatatypeElement

# Interface: DatatypeElement

[model](../modules/model.md).DatatypeElement

A datatype represents a named, standalone type definition.

## Hierarchy

- [`ValueElement`](../modules/model.md#valueelement)

  ↳ **`DatatypeElement`**

## Implemented by

- [`DatatypeModel`](../classes/model.DatatypeModel.md)

## Table of contents

### Constructors

- [constructor](model.DatatypeElement-1.md#constructor)

### Properties

- [access](model.DatatypeElement-1.md#access)
- [byteSize](model.DatatypeElement-1.md#bytesize)
- [children](model.DatatypeElement-1.md#children)
- [conformance](model.DatatypeElement-1.md#conformance)
- [constraint](model.DatatypeElement-1.md#constraint)
- [default](model.DatatypeElement-1.md#default)
- [description](model.DatatypeElement-1.md#description)
- [details](model.DatatypeElement-1.md#details)
- [global](model.DatatypeElement-1.md#global)
- [id](model.DatatypeElement-1.md#id)
- [metatype](model.DatatypeElement-1.md#metatype)
- [name](model.DatatypeElement-1.md#name)
- [quality](model.DatatypeElement-1.md#quality)
- [tag](model.DatatypeElement-1.md#tag)
- [type](model.DatatypeElement-1.md#type)
- [xref](model.DatatypeElement-1.md#xref)

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

• `Optional` **children**: [`FieldElement`](model.FieldElement-1.md)[]

#### Overrides

ValueElement.children

#### Defined in

[packages/matter.js/src/model/elements/DatatypeElement.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/DatatypeElement.ts#L31)

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

• `Optional` **id**: `undefined`

You can only reference a datatype by name.  It does not have an ID.

#### Overrides

ValueElement.id

#### Defined in

[packages/matter.js/src/model/elements/DatatypeElement.ts:29](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/DatatypeElement.ts#L29)

___

### metatype

• `Optional` **metatype**: ``"string"`` \| ``"boolean"`` \| ``"object"`` \| ``"bytes"`` \| ``"float"`` \| ``"integer"`` \| ``"array"`` \| ``"any"`` \| ``"bitmap"`` \| ``"enum"`` \| ``"date"``

A "metatype" provides enough semantics for us to translate a value into
a native datatype.  Metatype is only required on global datatypes, and
only when the datatype should map directly to a specific native (JS)
type.

#### Defined in

[packages/matter.js/src/model/elements/DatatypeElement.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/DatatypeElement.ts#L24)

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

### quality

• `Optional` **quality**: [`Definition`](../modules/model.Quality.md#definition)

Other qualities not covered by conformance or access.

#### Inherited from

ValueElement.quality

#### Defined in

[packages/matter.js/src/model/elements/ValueElement.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/ValueElement.ts#L43)

___

### tag

• **tag**: ``"datatype"``

#### Defined in

[packages/matter.js/src/model/elements/DatatypeElement.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/DatatypeElement.ts#L16)

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
