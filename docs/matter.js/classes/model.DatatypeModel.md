[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](../modules/model.md) / DatatypeModel

# Class: DatatypeModel

[model](../modules/model.md).DatatypeModel

A datatype represents a named, standalone type definition.

## Hierarchy

- [`ValueModel`](model.ValueModel.md)

  ↳ **`DatatypeModel`**

## Implements

- [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md)

## Table of contents

### Constructors

- [constructor](model.DatatypeModel.md#constructor)

### Properties

- [#children](model.DatatypeModel.md##children)
- [#id](model.DatatypeModel.md##id)
- [#name](model.DatatypeModel.md##name)
- [#parent](model.DatatypeModel.md##parent)
- [byteSize](model.DatatypeModel.md#bytesize)
- [default](model.DatatypeModel.md#default)
- [description](model.DatatypeModel.md#description)
- [details](model.DatatypeModel.md#details)
- [errors](model.DatatypeModel.md#errors)
- [global](model.DatatypeModel.md#global)
- [id](model.DatatypeModel.md#id)
- [isType](model.DatatypeModel.md#istype)
- [isTypeScope](model.DatatypeModel.md#istypescope)
- [metatype](model.DatatypeModel.md#metatype)
- [name](model.DatatypeModel.md#name)
- [tag](model.DatatypeModel.md#tag)
- [type](model.DatatypeModel.md#type)
- [xref](model.DatatypeModel.md#xref)
- [types](model.DatatypeModel.md#types)

### Accessors

- [access](model.DatatypeModel.md#access)
- [allowedBaseTags](model.DatatypeModel.md#allowedbasetags)
- [base](model.DatatypeModel.md#base)
- [children](model.DatatypeModel.md#children)
- [conformance](model.DatatypeModel.md#conformance)
- [constraint](model.DatatypeModel.md#constraint)
- [definingModel](model.DatatypeModel.md#definingmodel)
- [deprecated](model.DatatypeModel.md#deprecated)
- [directMetatype](model.DatatypeModel.md#directmetatype)
- [disallowed](model.DatatypeModel.md#disallowed)
- [discriminator](model.DatatypeModel.md#discriminator)
- [effectiveAccess](model.DatatypeModel.md#effectiveaccess)
- [effectiveConformance](model.DatatypeModel.md#effectiveconformance)
- [effectiveConstraint](model.DatatypeModel.md#effectiveconstraint)
- [effectiveDefault](model.DatatypeModel.md#effectivedefault)
- [effectiveId](model.DatatypeModel.md#effectiveid)
- [effectiveMetatype](model.DatatypeModel.md#effectivemetatype)
- [effectiveQuality](model.DatatypeModel.md#effectivequality)
- [effectiveType](model.DatatypeModel.md#effectivetype)
- [effectiveXref](model.DatatypeModel.md#effectivexref)
- [elements](model.DatatypeModel.md#elements)
- [globalBase](model.DatatypeModel.md#globalbase)
- [key](model.DatatypeModel.md#key)
- [listEntry](model.DatatypeModel.md#listentry)
- [mandatory](model.DatatypeModel.md#mandatory)
- [members](model.DatatypeModel.md#members)
- [metabase](model.DatatypeModel.md#metabase)
- [nullable](model.DatatypeModel.md#nullable)
- [overridesShadow](model.DatatypeModel.md#overridesshadow)
- [parent](model.DatatypeModel.md#parent)
- [path](model.DatatypeModel.md#path)
- [primitiveBase](model.DatatypeModel.md#primitivebase)
- [quality](model.DatatypeModel.md#quality)
- [shadow](model.DatatypeModel.md#shadow)
- [valid](model.DatatypeModel.md#valid)
- [validationAspects](model.DatatypeModel.md#validationaspects)

### Methods

- [add](model.DatatypeModel.md#add)
- [all](model.DatatypeModel.md#all)
- [bitDefinition](model.DatatypeModel.md#bitdefinition)
- [clone](model.DatatypeModel.md#clone)
- [error](model.DatatypeModel.md#error)
- [get](model.DatatypeModel.md#get)
- [instanceOf](model.DatatypeModel.md#instanceof)
- [member](model.DatatypeModel.md#member)
- [owner](model.DatatypeModel.md#owner)
- [references](model.DatatypeModel.md#references)
- [toJSON](model.DatatypeModel.md#tojson)
- [valueOf](model.DatatypeModel.md#valueof)
- [visit](model.DatatypeModel.md#visit)
- [create](model.DatatypeModel.md#create)

## Constructors

### constructor

• **new DatatypeModel**(`definition`): [`DatatypeModel`](model.DatatypeModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](../modules/model.ValueElement.md#properties) |

#### Returns

[`DatatypeModel`](model.DatatypeModel.md)

#### Inherited from

[ValueModel](model.ValueModel.md).[constructor](model.ValueModel.md#constructor)

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:295](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L295)

## Properties

### #children

• `Private` `Optional` **#children**: [`Children`](../interfaces/model._internal_.Children-1.md)\<[`Model`](model.Model-1.md), [`AnyElement`](../modules/model.md#anyelement)\>

#### Inherited from

[ValueModel](model.ValueModel.md).[#children](model.ValueModel.md##children)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L45)

___

### #id

• `Private` `Optional` **#id**: `number` = `undefined`

#### Inherited from

[ValueModel](model.ValueModel.md).[#id](model.ValueModel.md##id)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L27)

___

### #name

• `Private` **#name**: `string`

#### Inherited from

[ValueModel](model.ValueModel.md).[#name](model.ValueModel.md##name)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L28)

___

### #parent

• `Private` `Optional` **#parent**: [`Model`](model.Model-1.md)

#### Inherited from

[ValueModel](model.ValueModel.md).[#parent](model.ValueModel.md##parent)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:46](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L46)

___

### byteSize

• `Optional` **byteSize**: [`Size`](../modules/model.ValueElement.md#size)

Applies to numeric types.

#### Implementation of

[DatatypeElement](../interfaces/model.DatatypeElement-1.md).[byteSize](../interfaces/model.DatatypeElement-1.md#bytesize)

#### Inherited from

[ValueModel](model.ValueModel.md).[byteSize](model.ValueModel.md#bytesize)

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L31)

___

### default

• `Optional` **default**: [`FieldValue`](../modules/model.md#fieldvalue)

The default value for the element.

#### Implementation of

[DatatypeElement](../interfaces/model.DatatypeElement-1.md).[default](../interfaces/model.DatatypeElement-1.md#default)

#### Inherited from

[ValueModel](model.ValueModel.md).[default](model.ValueModel.md#default)

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L32)

___

### description

• `Optional` **description**: `string`

A short summary of the element.

#### Implementation of

[DatatypeElement](../interfaces/model.DatatypeElement-1.md).[description](../interfaces/model.DatatypeElement-1.md#description)

#### Inherited from

[ValueModel](model.ValueModel.md).[description](model.ValueModel.md#description)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L20)

___

### details

• `Optional` **details**: `string`

A paragraph summary of the element.

#### Implementation of

[DatatypeElement](../interfaces/model.DatatypeElement-1.md).[details](../interfaces/model.DatatypeElement-1.md#details)

#### Inherited from

[ValueModel](model.ValueModel.md).[details](model.ValueModel.md#details)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L21)

___

### errors

• `Optional` **errors**: [`DefinitionError`](../modules/model.md#definitionerror)[]

#### Inherited from

[ValueModel](model.ValueModel.md).[errors](model.ValueModel.md#errors)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L23)

___

### global

• `Optional` **global**: `boolean`

Flag set on elements loaded from Globals.

#### Implementation of

[DatatypeElement](../interfaces/model.DatatypeElement-1.md).[global](../interfaces/model.DatatypeElement-1.md#global)

#### Inherited from

[ValueModel](model.ValueModel.md).[global](model.ValueModel.md#global)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L33)

___

### id

• `Optional` **id**: `undefined`

You can only reference a datatype by name.  It does not have an ID.

#### Implementation of

[DatatypeElement](../interfaces/model.DatatypeElement-1.md).[id](../interfaces/model.DatatypeElement-1.md#id)

#### Overrides

[ValueModel](model.ValueModel.md).[id](model.ValueModel.md#id)

#### Defined in

[packages/matter.js/src/model/models/DatatypeModel.ts:13](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/DatatypeModel.ts#L13)

___

### isType

• `Optional` **isType**: `boolean` = `true`

Indicates that an element defines a datatype.

#### Inherited from

[ValueModel](model.ValueModel.md).[isType](model.ValueModel.md#istype)

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:34](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L34)

___

### isTypeScope

• `Optional` **isTypeScope**: `boolean`

Indicates that an element may have type definitions as children.

#### Inherited from

[ValueModel](model.ValueModel.md).[isTypeScope](model.ValueModel.md#istypescope)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L38)

___

### metatype

• `Optional` **metatype**: [`Metatype`](../enums/model.Metatype-1.md)

A "metatype" provides enough semantics for us to translate a value into
a native datatype.  Metatype is only required on global datatypes, and
only when the datatype should map directly to a specific native (JS)
type.

#### Implementation of

[DatatypeElement](../interfaces/model.DatatypeElement-1.md).[metatype](../interfaces/model.DatatypeElement-1.md#metatype)

#### Inherited from

[ValueModel](model.ValueModel.md).[metatype](model.ValueModel.md#metatype)

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L33)

___

### name

• **name**: `string`

The key used for storing this element.  A "human appropriate" semantic
differentiator.

#### Implementation of

[DatatypeElement](../interfaces/model.DatatypeElement-1.md).[name](../interfaces/model.DatatypeElement-1.md#name)

#### Inherited from

[ValueModel](model.ValueModel.md).[name](model.ValueModel.md#name)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L25)

___

### tag

• **tag**: [`Datatype`](../enums/model.ElementTag.md#datatype) = `DatatypeElement.Tag`

#### Implementation of

[DatatypeElement](../interfaces/model.DatatypeElement-1.md).[tag](../interfaces/model.DatatypeElement-1.md#tag)

#### Overrides

[ValueModel](model.ValueModel.md).[tag](model.ValueModel.md#tag)

#### Defined in

[packages/matter.js/src/model/models/DatatypeModel.ts:12](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/DatatypeModel.ts#L12)

___

### type

• `Optional` **type**: `string`

If an element derives from another element, the name of the parent
element goes here.

#### Implementation of

[DatatypeElement](../interfaces/model.DatatypeElement-1.md).[type](../interfaces/model.DatatypeElement-1.md#type)

#### Inherited from

[ValueModel](model.ValueModel.md).[type](model.ValueModel.md#type)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L19)

___

### xref

• `Optional` **xref**: [`CrossReference`](model.Model.CrossReference.md)

Reference to Matter specification document.

#### Implementation of

[DatatypeElement](../interfaces/model.DatatypeElement-1.md).[xref](../interfaces/model.DatatypeElement-1.md#xref)

#### Inherited from

[ValueModel](model.ValueModel.md).[xref](model.ValueModel.md#xref)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L22)

___

### types

▪ `Static` **types**: `Object`

Factory support.  Populated by derivatives upon definition.

#### Index signature

▪ [type: `string`]: (`definition`: `any`) => [`Model`](model.Model-1.md)

#### Inherited from

[ValueModel](model.ValueModel.md).[types](model.ValueModel.md#types)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:199](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L199)

## Accessors

### access

• `get` **access**(): [`Access`](model.Access-1.md)

Authorization limits.

#### Returns

[`Access`](model.Access-1.md)

#### Implementation of

[DatatypeElement](../interfaces/model.DatatypeElement-1.md).[access](../interfaces/model.DatatypeElement-1.md#access)

#### Inherited from

ValueModel.access

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:64](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L64)

• `set` **access**(`definition`): `void`

Authorization limits.

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Access`](model.Access-1.md) \| [`Definition`](../modules/model.Access.md#definition) |

#### Returns

`void`

#### Implementation of

[DatatypeElement](../interfaces/model.DatatypeElement-1.md).[access](../interfaces/model.DatatypeElement-1.md#access)

#### Inherited from

ValueModel.access

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L67)

___

### allowedBaseTags

• `get` **allowedBaseTags**(): [`ElementTag`](../enums/model.ElementTag.md)[]

ValueModels may derive from models of the same type or from generic
Datatype models.

#### Returns

[`ElementTag`](../enums/model.ElementTag.md)[]

#### Inherited from

ValueModel.allowedBaseTags

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:181](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L181)

___

### base

• `get` **base**(): `undefined` \| [`ValueModel`](model.ValueModel.md)

ValueModels may only derive from ValueModels.

#### Returns

`undefined` \| [`ValueModel`](model.ValueModel.md)

#### Inherited from

ValueModel.base

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:173](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L173)

___

### children

• `get` **children**(): [`Children`](../interfaces/model._internal_.Children-1.md)\<[`FieldModel`](model.FieldModel.md), [`FieldElement`](../interfaces/model.FieldElement-1.md)\>

Children of models are always models.

#### Returns

[`Children`](../interfaces/model._internal_.Children-1.md)\<[`FieldModel`](model.FieldModel.md), [`FieldElement`](../interfaces/model.FieldElement-1.md)\>

#### Implementation of

[DatatypeElement](../interfaces/model.DatatypeElement-1.md).[children](../interfaces/model.DatatypeElement-1.md#children)

#### Inherited from

ValueModel.children

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:36](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L36)

• `set` **children**(`children`): `void`

Children can be added as models or elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | ([`FieldElement`](../interfaces/model.FieldElement-1.md) \| [`FieldModel`](model.FieldModel.md))[] |

#### Returns

`void`

#### Implementation of

[DatatypeElement](../interfaces/model.DatatypeElement-1.md).[children](../interfaces/model.DatatypeElement-1.md#children)

#### Inherited from

ValueModel.children

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L40)

___

### conformance

• `get` **conformance**(): [`Conformance`](model.Conformance-1.md)

Optionality control.

#### Returns

[`Conformance`](model.Conformance-1.md)

#### Implementation of

[DatatypeElement](../interfaces/model.DatatypeElement-1.md).[conformance](../interfaces/model.DatatypeElement-1.md#conformance)

#### Inherited from

ValueModel.conformance

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L54)

• `set` **conformance**(`definition`): `void`

Optionality control.

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Definition`](../modules/model.Conformance.md#definition) \| [`Conformance`](model.Conformance-1.md) |

#### Returns

`void`

#### Implementation of

[DatatypeElement](../interfaces/model.DatatypeElement-1.md).[conformance](../interfaces/model.DatatypeElement-1.md#conformance)

#### Inherited from

ValueModel.conformance

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:57](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L57)

___

### constraint

• `get` **constraint**(): [`Constraint`](model.Constraint-1.md)

Limits on values.

#### Returns

[`Constraint`](model.Constraint-1.md)

#### Implementation of

[DatatypeElement](../interfaces/model.DatatypeElement-1.md).[constraint](../interfaces/model.DatatypeElement-1.md#constraint)

#### Inherited from

ValueModel.constraint

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:44](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L44)

• `set` **constraint**(`definition`): `void`

Limits on values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Definition`](../modules/model.Constraint.md#definition) \| [`Constraint`](model.Constraint-1.md) |

#### Returns

`void`

#### Implementation of

[DatatypeElement](../interfaces/model.DatatypeElement-1.md).[constraint](../interfaces/model.DatatypeElement-1.md#constraint)

#### Inherited from

ValueModel.constraint

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L47)

___

### definingModel

• `get` **definingModel**(): `undefined` \| [`ValueModel`](model.ValueModel.md)

Get the first derived ancestor with children, if any.

#### Returns

`undefined` \| [`ValueModel`](model.ValueModel.md)

#### Inherited from

ValueModel.definingModel

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:159](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L159)

___

### deprecated

• `get` **deprecated**(): `boolean`

Is this model deprecated?

#### Returns

`boolean`

#### Inherited from

ValueModel.deprecated

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:223](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L223)

___

### directMetatype

• `get` **directMetatype**(): `undefined` \| [`Metatype`](../enums/model.Metatype-1.md)

The metatype for this model's type, ignoring inheritance.

#### Returns

`undefined` \| [`Metatype`](../enums/model.Metatype-1.md)

#### Inherited from

ValueModel.directMetatype

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:150](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L150)

___

### disallowed

• `get` **disallowed**(): `boolean`

Is this model disallowed?

#### Returns

`boolean`

#### Inherited from

ValueModel.disallowed

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:230](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L230)

___

### discriminator

• `get` **discriminator**(): `undefined` \| `string`

Obtain a discriminator that differentiates different models with the same name

#### Returns

`undefined` \| `string`

#### Inherited from

ValueModel.discriminator

#### Defined in

[packages/matter.js/src/model/models/Model.ts:148](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L148)

___

### effectiveAccess

• `get` **effectiveAccess**(): [`Access`](model.Access-1.md)

#### Returns

[`Access`](model.Access-1.md)

#### Inherited from

ValueModel.effectiveAccess

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:70](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L70)

___

### effectiveConformance

• `get` **effectiveConformance**(): [`Conformance`](model.Conformance-1.md)

#### Returns

[`Conformance`](model.Conformance-1.md)

#### Inherited from

ValueModel.effectiveConformance

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:60](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L60)

___

### effectiveConstraint

• `get` **effectiveConstraint**(): [`Constraint`](model.Constraint-1.md)

#### Returns

[`Constraint`](model.Constraint-1.md)

#### Inherited from

ValueModel.effectiveConstraint

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L50)

___

### effectiveDefault

• `get` **effectiveDefault**(): `any`

The value to use as a default.  The "default" field has a manually
supplied value but this property decodes the default and/or generates
a default from subfields.

#### Returns

`any`

#### Inherited from

ValueModel.effectiveDefault

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:143](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L143)

___

### effectiveId

• `get` **effectiveId**(): `undefined` \| `number`

Allows subclasses to pull a working ID from an alternate source.

#### Returns

`undefined` \| `number`

#### Inherited from

ValueModel.effectiveId

#### Defined in

[packages/matter.js/src/model/models/Model.ts:125](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L125)

___

### effectiveMetatype

• `get` **effectiveMetatype**(): `undefined` \| [`Metatype`](../enums/model.Metatype-1.md)

The working metatype for this object.

#### Returns

`undefined` \| [`Metatype`](../enums/model.Metatype-1.md)

#### Inherited from

ValueModel.effectiveMetatype

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:131](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L131)

___

### effectiveQuality

• `get` **effectiveQuality**(): [`Quality`](model.Quality-1.md)

#### Returns

[`Quality`](model.Quality-1.md)

#### Inherited from

ValueModel.effectiveQuality

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L80)

___

### effectiveType

• `get` **effectiveType**(): `undefined` \| `string`

The "effective type" may be inferred from context.

#### Returns

`undefined` \| `string`

#### Inherited from

ValueModel.effectiveType

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:120](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L120)

___

### effectiveXref

• `get` **effectiveXref**(): `undefined` \| [`CrossReference`](model.Model.CrossReference.md)

A local or parent xref.

#### Returns

`undefined` \| [`CrossReference`](model.Model.CrossReference.md)

#### Inherited from

ValueModel.effectiveXref

#### Defined in

[packages/matter.js/src/model/models/Model.ts:234](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L234)

___

### elements

• `get` **elements**(): [`AnyElement`](../modules/model.md#anyelement)[]

Element view of children.  For TypeScript this allows children to be added as elements.  For JavaScript this is
identical to children().

#### Returns

[`AnyElement`](../modules/model.md#anyelement)[]

#### Inherited from

ValueModel.elements

#### Defined in

[packages/matter.js/src/model/models/Model.ts:115](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L115)

___

### globalBase

• `get` **globalBase**(): `undefined` \| [`Model`](model.Model-1.md)

Get the first global base type.  This may have semantic meaning more specific than the base primitive type.

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Inherited from

ValueModel.globalBase

#### Defined in

[packages/matter.js/src/model/models/Model.ts:227](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L227)

___

### key

• `get` **key**(): `undefined` \| `string`

Get a string that uniquely identifies this model.  This is normally the effective ID but some models require a
generated identifier.

#### Returns

`undefined` \| `string`

#### Inherited from

ValueModel.key

#### Defined in

[packages/matter.js/src/model/models/Model.ts:133](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L133)

___

### listEntry

• `get` **listEntry**(): `undefined` \| [`FieldModel`](model.FieldModel.md)

Get the entry type for lists, if any.

#### Returns

`undefined` \| [`FieldModel`](model.FieldModel.md)

#### Inherited from

ValueModel.listEntry

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:166](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L166)

___

### mandatory

• `get` **mandatory**(): `boolean`

Is the model mandatory?

#### Returns

`boolean`

#### Inherited from

ValueModel.mandatory

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:244](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L244)

___

### members

• `get` **members**(): [`Children`](../interfaces/model._internal_.Children-1.md)\<[`FieldModel`](model.FieldModel.md), [`FieldElement`](../interfaces/model.FieldElement-1.md)\>

Retrieve all datatype members.

#### Returns

[`Children`](../interfaces/model._internal_.Children-1.md)\<[`FieldModel`](model.FieldModel.md), [`FieldElement`](../interfaces/model.FieldElement-1.md)\>

#### Overrides

ValueModel.members

#### Defined in

[packages/matter.js/src/model/models/DatatypeModel.ts:15](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/DatatypeModel.ts#L15)

___

### metabase

• `get` **metabase**(): `undefined` \| [`ValueModel`](model.ValueModel.md)

Metatype is only present on global types with specific semantic meaning.
This model is significant because it gives us information about how to
manipulate the data.  This accessor retrieves this model.

#### Returns

`undefined` \| [`ValueModel`](model.ValueModel.md)

#### Inherited from

ValueModel.metabase

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L89)

___

### nullable

• `get` **nullable**(): `boolean`

Can this model be omitted?

#### Returns

`boolean`

#### Inherited from

ValueModel.nullable

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:237](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L237)

___

### overridesShadow

• `get` **overridesShadow**(): `undefined` \| ``true``

Determine whether this element overrides key properties of its shadow.

#### Returns

`undefined` \| ``true``

#### Inherited from

ValueModel.overridesShadow

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:251](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L251)

___

### parent

• `get` **parent**(): `undefined` \| [`Model`](model.Model-1.md)

The structural parent.  This is the model for the element that contains this element's definition.

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Inherited from

ValueModel.parent

#### Defined in

[packages/matter.js/src/model/models/Model.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L88)

• `set` **parent**(`parent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `undefined` \| [`Model`](model.Model-1.md) |

#### Returns

`void`

#### Inherited from

ValueModel.parent

#### Defined in

[packages/matter.js/src/model/models/Model.ts:92](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L92)

___

### path

• `get` **path**(): `string`

The path ("." delimited) in the Matter tree.

This is informational and generally tries to adhere to JS API conventions.

#### Returns

`string`

#### Inherited from

ValueModel.path

#### Defined in

[packages/matter.js/src/model/models/Model.ts:60](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L60)

___

### primitiveBase

• `get` **primitiveBase**(): `undefined` \| [`ValueModel`](model.ValueModel.md)

Get the primitive type for this value model.  This is an integer type
for enums and bitmaps.  Otherwise it's the metabase.

#### Returns

`undefined` \| [`ValueModel`](model.ValueModel.md)

#### Inherited from

ValueModel.primitiveBase

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:97](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L97)

___

### quality

• `get` **quality**(): [`Quality`](model.Quality-1.md)

Other qualities not covered by conformance or access.

#### Returns

[`Quality`](model.Quality-1.md)

#### Implementation of

[DatatypeElement](../interfaces/model.DatatypeElement-1.md).[quality](../interfaces/model.DatatypeElement-1.md#quality)

#### Inherited from

ValueModel.quality

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L74)

• `set` **quality**(`definition`): `void`

Other qualities not covered by conformance or access.

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Definition`](../modules/model.Quality.md#definition) \| [`Quality`](model.Quality-1.md) |

#### Returns

`void`

#### Implementation of

[DatatypeElement](../interfaces/model.DatatypeElement-1.md).[quality](../interfaces/model.DatatypeElement-1.md#quality)

#### Inherited from

ValueModel.quality

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:77](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L77)

___

### shadow

• `get` **shadow**(): `undefined` \| [`Model`](model.Model-1.md)

Get shadow model, if any.  A "shadow" is an element in my parent's inheritance hierarchy that I override.

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Inherited from

ValueModel.shadow

#### Defined in

[packages/matter.js/src/model/models/Model.ts:220](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L220)

___

### valid

• `get` **valid**(): `boolean`

Did validation find errors?

#### Returns

`boolean`

#### Inherited from

ValueModel.valid

#### Defined in

[packages/matter.js/src/model/models/Model.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L51)

___

### validationAspects

• `get` **validationAspects**(): [`Aspect`](model.Aspect.md)\<`any`\>[]

Collect constraints and conformance for this type and all base types.

#### Returns

[`Aspect`](model.Aspect.md)\<`any`\>[]

#### Inherited from

ValueModel.validationAspects

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:200](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L200)

## Methods

### add

▸ **add**(`...children`): `void`

Add a child.  children.push works too but only accepts models.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...children` | ([`AnyElement`](../modules/model.md#anyelement) \| [`Model`](model.Model-1.md))[] |

#### Returns

`void`

#### Inherited from

[ValueModel](model.ValueModel.md).[add](model.ValueModel.md#add)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:248](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L248)

___

### all

▸ **all**\<`T`\>(`constructor`): `T`[]

Retrieve all models of a specific element type from local scope.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Model`](model.Model-1.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `constructor` | [`Type`](../modules/model.Model.md#type)\<`T`\> | model class or a predicate object |

#### Returns

`T`[]

#### Inherited from

[ValueModel](model.ValueModel.md).[all](model.ValueModel.md#all)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:272](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L272)

___

### bitDefinition

▸ **bitDefinition**(`bit`): `undefined` \| [`FieldModel`](model.FieldModel.md)

Search the inheritance chain for a bitmap field defining a specific bit.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bit` | `number` |

#### Returns

`undefined` \| [`FieldModel`](model.FieldModel.md)

#### Inherited from

[ValueModel](model.ValueModel.md).[bitDefinition](model.ValueModel.md#bitdefinition)

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:277](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L277)

___

### clone

▸ **clone**\<`This`\>(`this`): `This`

Clone the model.  This deep copies all descendant child models but not other properties.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Model`](model.Model-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |

#### Returns

`This`

#### Inherited from

[ValueModel](model.ValueModel.md).[clone](model.ValueModel.md#clone)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:370](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L370)

___

### error

▸ **error**(`code`, `message`): `void`

Record a validation error for this model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `message` | `string` |

#### Returns

`void`

#### Inherited from

[ValueModel](model.ValueModel.md).[error](model.ValueModel.md#error)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:296](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L296)

___

### get

▸ **get**\<`T`\>(`type`, `key`): `undefined` \| `T`

Retrieve a specific model by ID or name.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Model`](model.Model-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Type`](../modules/model.Model.md#type)\<`T`\> |
| `key` | `string` \| `number` |

#### Returns

`undefined` \| `T`

#### Inherited from

[ValueModel](model.ValueModel.md).[get](model.ValueModel.md#get)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:279](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L279)

___

### instanceOf

▸ **instanceOf**(`other`): `boolean`

Does this model derive from another?

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`AnyElement`](../modules/model.md#anyelement) \| [`Model`](model.Model-1.md) |

#### Returns

`boolean`

#### Inherited from

[ValueModel](model.ValueModel.md).[instanceOf](model.ValueModel.md#instanceof)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:363](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L363)

___

### member

▸ **member**(`key`, `allowedTags?`): `undefined` \| [`Model`](model.Model-1.md)

Search the inheritance chain for a child property.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`Selector`](../modules/model._internal_.Children.md#selector) |
| `allowedTags` | [`ElementTag`](../enums/model.ElementTag.md)[] |

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Inherited from

[ValueModel](model.ValueModel.md).[member](model.ValueModel.md#member)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:356](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L356)

___

### owner

▸ **owner**\<`T`\>(`constructor`): `undefined` \| `T`

Retrieve a model of a specific type from the ownership hierarchy.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Model`](model.Model-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | [`Type`](../modules/model.Model.md#type)\<`T`\> |

#### Returns

`undefined` \| `T`

#### Inherited from

[ValueModel](model.ValueModel.md).[owner](model.ValueModel.md#owner)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:289](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L289)

___

### references

▸ **references**(`type`): [`Model`](model.Model-1.md)[]

Find all children that reference a specific type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Model`](model.Model-1.md) |

#### Returns

[`Model`](model.Model-1.md)[]

#### Inherited from

[ValueModel](model.ValueModel.md).[references](model.ValueModel.md#references)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:349](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L349)

___

### toJSON

▸ **toJSON**(): [`AnyElement`](../modules/model.md#anyelement)

Convert model to JSON.

#### Returns

[`AnyElement`](../modules/model.md#anyelement)

#### Inherited from

[ValueModel](model.ValueModel.md).[toJSON](model.ValueModel.md#tojson)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:312](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L312)

___

### valueOf

▸ **valueOf**(): [`AnyElement`](../modules/model.md#anyelement)

Convert to non-class structure.

#### Returns

[`AnyElement`](../modules/model.md#anyelement)

#### Inherited from

[ValueModel](model.ValueModel.md).[valueOf](model.ValueModel.md#valueof)

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:281](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L281)

___

### visit

▸ **visit**(`visitor`): `undefined` \| `boolean`

Apply a function to all tree elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `visitor` | (`model`: [`Model`](model.Model-1.md)) => `boolean` \| `void` |

#### Returns

`undefined` \| `boolean`

#### Inherited from

[ValueModel](model.ValueModel.md).[visit](model.ValueModel.md#visit)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:342](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L342)

___

### create

▸ **create**(`definition`): [`Model`](model.Model-1.md)

Create a model for an element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`AnyElement`](../modules/model.md#anyelement) |

#### Returns

[`Model`](model.Model-1.md)

#### Inherited from

[ValueModel](model.ValueModel.md).[create](model.ValueModel.md#create)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:255](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L255)
