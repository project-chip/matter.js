[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](../modules/model.md) / FieldModel

# Class: FieldModel

[model](../modules/model.md).FieldModel

A field element defines a field in a list, struct, enum or bitmap.

## Hierarchy

- [`PropertyModel`](model.PropertyModel.md)

  ↳ **`FieldModel`**

## Implements

- [`FieldElement`](../interfaces/model.FieldElement-1.md)

## Table of contents

### Constructors

- [constructor](model.FieldModel.md#constructor)

### Properties

- [#children](model.FieldModel.md##children)
- [#id](model.FieldModel.md##id)
- [#name](model.FieldModel.md##name)
- [#parent](model.FieldModel.md##parent)
- [byteSize](model.FieldModel.md#bytesize)
- [default](model.FieldModel.md#default)
- [description](model.FieldModel.md#description)
- [details](model.FieldModel.md#details)
- [errors](model.FieldModel.md#errors)
- [global](model.FieldModel.md#global)
- [id](model.FieldModel.md#id)
- [isGlobalAttribute](model.FieldModel.md#isglobalattribute)
- [isType](model.FieldModel.md#istype)
- [isTypeScope](model.FieldModel.md#istypescope)
- [metatype](model.FieldModel.md#metatype)
- [name](model.FieldModel.md#name)
- [tag](model.FieldModel.md#tag)
- [type](model.FieldModel.md#type)
- [xref](model.FieldModel.md#xref)
- [types](model.FieldModel.md#types)

### Accessors

- [access](model.FieldModel.md#access)
- [allowedBaseTags](model.FieldModel.md#allowedbasetags)
- [base](model.FieldModel.md#base)
- [children](model.FieldModel.md#children)
- [conformance](model.FieldModel.md#conformance)
- [constraint](model.FieldModel.md#constraint)
- [definingModel](model.FieldModel.md#definingmodel)
- [deprecated](model.FieldModel.md#deprecated)
- [directMetatype](model.FieldModel.md#directmetatype)
- [disallowed](model.FieldModel.md#disallowed)
- [discriminator](model.FieldModel.md#discriminator)
- [effectiveAccess](model.FieldModel.md#effectiveaccess)
- [effectiveConformance](model.FieldModel.md#effectiveconformance)
- [effectiveConstraint](model.FieldModel.md#effectiveconstraint)
- [effectiveDefault](model.FieldModel.md#effectivedefault)
- [effectiveId](model.FieldModel.md#effectiveid)
- [effectiveMetatype](model.FieldModel.md#effectivemetatype)
- [effectiveQuality](model.FieldModel.md#effectivequality)
- [effectiveType](model.FieldModel.md#effectivetype)
- [effectiveXref](model.FieldModel.md#effectivexref)
- [elements](model.FieldModel.md#elements)
- [globalBase](model.FieldModel.md#globalbase)
- [key](model.FieldModel.md#key)
- [listEntry](model.FieldModel.md#listentry)
- [mandatory](model.FieldModel.md#mandatory)
- [members](model.FieldModel.md#members)
- [metabase](model.FieldModel.md#metabase)
- [nullable](model.FieldModel.md#nullable)
- [overridesShadow](model.FieldModel.md#overridesshadow)
- [parent](model.FieldModel.md#parent)
- [path](model.FieldModel.md#path)
- [primitiveBase](model.FieldModel.md#primitivebase)
- [quality](model.FieldModel.md#quality)
- [shadow](model.FieldModel.md#shadow)
- [valid](model.FieldModel.md#valid)
- [validationAspects](model.FieldModel.md#validationaspects)

### Methods

- [add](model.FieldModel.md#add)
- [all](model.FieldModel.md#all)
- [bitDefinition](model.FieldModel.md#bitdefinition)
- [clone](model.FieldModel.md#clone)
- [error](model.FieldModel.md#error)
- [get](model.FieldModel.md#get)
- [instanceOf](model.FieldModel.md#instanceof)
- [member](model.FieldModel.md#member)
- [owner](model.FieldModel.md#owner)
- [references](model.FieldModel.md#references)
- [toJSON](model.FieldModel.md#tojson)
- [valueOf](model.FieldModel.md#valueof)
- [visit](model.FieldModel.md#visit)
- [create](model.FieldModel.md#create)

## Constructors

### constructor

• **new FieldModel**(`definition`): [`FieldModel`](model.FieldModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](../modules/model.FieldElement.md#properties) |

#### Returns

[`FieldModel`](model.FieldModel.md)

#### Overrides

[PropertyModel](model.PropertyModel.md).[constructor](model.PropertyModel.md#constructor)

#### Defined in

[packages/matter.js/src/model/models/FieldModel.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/FieldModel.ts#L18)

## Properties

### #children

• `Private` `Optional` **#children**: [`Children`](../interfaces/model._internal_.Children-1.md)\<[`Model`](model.Model-1.md), [`AnyElement`](../modules/model.md#anyelement)\>

#### Inherited from

[PropertyModel](model.PropertyModel.md).[#children](model.PropertyModel.md##children)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L45)

___

### #id

• `Private` `Optional` **#id**: `number` = `undefined`

#### Inherited from

[PropertyModel](model.PropertyModel.md).[#id](model.PropertyModel.md##id)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L27)

___

### #name

• `Private` **#name**: `string`

#### Inherited from

[PropertyModel](model.PropertyModel.md).[#name](model.PropertyModel.md##name)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L28)

___

### #parent

• `Private` `Optional` **#parent**: [`Model`](model.Model-1.md)

#### Inherited from

[PropertyModel](model.PropertyModel.md).[#parent](model.PropertyModel.md##parent)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:46](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L46)

___

### byteSize

• `Optional` **byteSize**: [`Size`](../modules/model.ValueElement.md#size)

Applies to numeric types.

#### Implementation of

[FieldElement](../interfaces/model.FieldElement-1.md).[byteSize](../interfaces/model.FieldElement-1.md#bytesize)

#### Inherited from

[PropertyModel](model.PropertyModel.md).[byteSize](model.PropertyModel.md#bytesize)

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L31)

___

### default

• `Optional` **default**: [`FieldValue`](../modules/model.md#fieldvalue)

The default value for the element.

#### Implementation of

[FieldElement](../interfaces/model.FieldElement-1.md).[default](../interfaces/model.FieldElement-1.md#default)

#### Inherited from

[PropertyModel](model.PropertyModel.md).[default](model.PropertyModel.md#default)

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L32)

___

### description

• `Optional` **description**: `string`

A short summary of the element.

#### Implementation of

[FieldElement](../interfaces/model.FieldElement-1.md).[description](../interfaces/model.FieldElement-1.md#description)

#### Inherited from

[PropertyModel](model.PropertyModel.md).[description](model.PropertyModel.md#description)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L20)

___

### details

• `Optional` **details**: `string`

A paragraph summary of the element.

#### Implementation of

[FieldElement](../interfaces/model.FieldElement-1.md).[details](../interfaces/model.FieldElement-1.md#details)

#### Inherited from

[PropertyModel](model.PropertyModel.md).[details](model.PropertyModel.md#details)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L21)

___

### errors

• `Optional` **errors**: [`DefinitionError`](../modules/model.md#definitionerror)[]

#### Inherited from

[PropertyModel](model.PropertyModel.md).[errors](model.PropertyModel.md#errors)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L23)

___

### global

• `Optional` **global**: `boolean`

Flag set on elements loaded from Globals.

#### Implementation of

[FieldElement](../interfaces/model.FieldElement-1.md).[global](../interfaces/model.FieldElement-1.md#global)

#### Inherited from

[PropertyModel](model.PropertyModel.md).[global](model.PropertyModel.md#global)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L33)

___

### id

• `Optional` **id**: `number`

Fields must have IDs but they may be implied by the field's position
in its parent.

#### Implementation of

[FieldElement](../interfaces/model.FieldElement-1.md).[id](../interfaces/model.FieldElement-1.md#id)

#### Overrides

[PropertyModel](model.PropertyModel.md).[id](model.PropertyModel.md#id)

#### Defined in

[packages/matter.js/src/model/models/FieldModel.ts:15](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/FieldModel.ts#L15)

___

### isGlobalAttribute

• `Optional` **isGlobalAttribute**: `boolean`

#### Overrides

[PropertyModel](model.PropertyModel.md).[isGlobalAttribute](model.PropertyModel.md#isglobalattribute)

#### Defined in

[packages/matter.js/src/model/models/FieldModel.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/FieldModel.ts#L16)

___

### isType

• `Optional` **isType**: `boolean` = `true`

Indicates that an element defines a datatype.

#### Inherited from

[PropertyModel](model.PropertyModel.md).[isType](model.PropertyModel.md#istype)

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:34](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L34)

___

### isTypeScope

• `Optional` **isTypeScope**: `boolean`

Indicates that an element may have type definitions as children.

#### Inherited from

[PropertyModel](model.PropertyModel.md).[isTypeScope](model.PropertyModel.md#istypescope)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L38)

___

### metatype

• `Optional` **metatype**: [`Metatype`](../enums/model.Metatype-1.md)

#### Inherited from

[PropertyModel](model.PropertyModel.md).[metatype](model.PropertyModel.md#metatype)

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L33)

___

### name

• **name**: `string`

The key used for storing this element.  A "human appropriate" semantic
differentiator.

#### Implementation of

[FieldElement](../interfaces/model.FieldElement-1.md).[name](../interfaces/model.FieldElement-1.md#name)

#### Inherited from

[PropertyModel](model.PropertyModel.md).[name](model.PropertyModel.md#name)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L25)

___

### tag

• **tag**: [`Field`](../enums/model.ElementTag.md#field) = `FieldElement.Tag`

#### Implementation of

[FieldElement](../interfaces/model.FieldElement-1.md).[tag](../interfaces/model.FieldElement-1.md#tag)

#### Overrides

[PropertyModel](model.PropertyModel.md).[tag](model.PropertyModel.md#tag)

#### Defined in

[packages/matter.js/src/model/models/FieldModel.ts:14](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/FieldModel.ts#L14)

___

### type

• `Optional` **type**: `string`

If an element derives from another element, the name of the parent
element goes here.

#### Implementation of

[FieldElement](../interfaces/model.FieldElement-1.md).[type](../interfaces/model.FieldElement-1.md#type)

#### Inherited from

[PropertyModel](model.PropertyModel.md).[type](model.PropertyModel.md#type)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L19)

___

### xref

• `Optional` **xref**: [`CrossReference`](model.Model.CrossReference.md)

Reference to Matter specification document.

#### Implementation of

[FieldElement](../interfaces/model.FieldElement-1.md).[xref](../interfaces/model.FieldElement-1.md#xref)

#### Inherited from

[PropertyModel](model.PropertyModel.md).[xref](model.PropertyModel.md#xref)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L22)

___

### types

▪ `Static` **types**: `Object`

Factory support.  Populated by derivatives upon definition.

#### Index signature

▪ [type: `string`]: (`definition`: `any`) => [`Model`](model.Model-1.md)

#### Inherited from

[PropertyModel](model.PropertyModel.md).[types](model.PropertyModel.md#types)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:199](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L199)

## Accessors

### access

• `get` **access**(): [`Access`](model.Access-1.md)

Authorization limits.

#### Returns

[`Access`](model.Access-1.md)

#### Implementation of

[FieldElement](../interfaces/model.FieldElement-1.md).[access](../interfaces/model.FieldElement-1.md#access)

#### Inherited from

PropertyModel.access

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

[FieldElement](../interfaces/model.FieldElement-1.md).[access](../interfaces/model.FieldElement-1.md#access)

#### Inherited from

PropertyModel.access

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

PropertyModel.allowedBaseTags

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:181](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L181)

___

### base

• `get` **base**(): `undefined` \| [`ValueModel`](model.ValueModel.md)

ValueModels may only derive from ValueModels.

#### Returns

`undefined` \| [`ValueModel`](model.ValueModel.md)

#### Inherited from

PropertyModel.base

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:173](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L173)

___

### children

• `get` **children**(): [`Children`](../interfaces/model._internal_.Children-1.md)\<[`FieldModel`](model.FieldModel.md), [`FieldElement`](../interfaces/model.FieldElement-1.md)\>

Children of models are always models.

#### Returns

[`Children`](../interfaces/model._internal_.Children-1.md)\<[`FieldModel`](model.FieldModel.md), [`FieldElement`](../interfaces/model.FieldElement-1.md)\>

#### Implementation of

[FieldElement](../interfaces/model.FieldElement-1.md).[children](../interfaces/model.FieldElement-1.md#children)

#### Inherited from

PropertyModel.children

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

[FieldElement](../interfaces/model.FieldElement-1.md).[children](../interfaces/model.FieldElement-1.md#children)

#### Inherited from

PropertyModel.children

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L40)

___

### conformance

• `get` **conformance**(): [`Conformance`](model.Conformance-1.md)

Optionality control.

#### Returns

[`Conformance`](model.Conformance-1.md)

#### Implementation of

[FieldElement](../interfaces/model.FieldElement-1.md).[conformance](../interfaces/model.FieldElement-1.md#conformance)

#### Inherited from

PropertyModel.conformance

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

[FieldElement](../interfaces/model.FieldElement-1.md).[conformance](../interfaces/model.FieldElement-1.md#conformance)

#### Inherited from

PropertyModel.conformance

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:57](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L57)

___

### constraint

• `get` **constraint**(): [`Constraint`](model.Constraint-1.md)

Limits on values.

#### Returns

[`Constraint`](model.Constraint-1.md)

#### Implementation of

[FieldElement](../interfaces/model.FieldElement-1.md).[constraint](../interfaces/model.FieldElement-1.md#constraint)

#### Inherited from

PropertyModel.constraint

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

[FieldElement](../interfaces/model.FieldElement-1.md).[constraint](../interfaces/model.FieldElement-1.md#constraint)

#### Inherited from

PropertyModel.constraint

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L47)

___

### definingModel

• `get` **definingModel**(): `undefined` \| [`ValueModel`](model.ValueModel.md)

Get the first derived ancestor with children, if any.

#### Returns

`undefined` \| [`ValueModel`](model.ValueModel.md)

#### Inherited from

PropertyModel.definingModel

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:159](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L159)

___

### deprecated

• `get` **deprecated**(): `boolean`

Is this model deprecated?

#### Returns

`boolean`

#### Inherited from

PropertyModel.deprecated

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:223](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L223)

___

### directMetatype

• `get` **directMetatype**(): `undefined` \| [`Metatype`](../enums/model.Metatype-1.md)

The metatype for this model's type, ignoring inheritance.

#### Returns

`undefined` \| [`Metatype`](../enums/model.Metatype-1.md)

#### Inherited from

PropertyModel.directMetatype

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:150](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L150)

___

### disallowed

• `get` **disallowed**(): `boolean`

Is this model disallowed?

#### Returns

`boolean`

#### Inherited from

PropertyModel.disallowed

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:230](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L230)

___

### discriminator

• `get` **discriminator**(): `undefined` \| `string`

Obtain a discriminator that differentiates different models with the same name

#### Returns

`undefined` \| `string`

#### Inherited from

PropertyModel.discriminator

#### Defined in

[packages/matter.js/src/model/models/Model.ts:148](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L148)

___

### effectiveAccess

• `get` **effectiveAccess**(): [`Access`](model.Access-1.md)

#### Returns

[`Access`](model.Access-1.md)

#### Inherited from

PropertyModel.effectiveAccess

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:70](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L70)

___

### effectiveConformance

• `get` **effectiveConformance**(): [`Conformance`](model.Conformance-1.md)

#### Returns

[`Conformance`](model.Conformance-1.md)

#### Inherited from

PropertyModel.effectiveConformance

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:60](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L60)

___

### effectiveConstraint

• `get` **effectiveConstraint**(): [`Constraint`](model.Constraint-1.md)

#### Returns

[`Constraint`](model.Constraint-1.md)

#### Inherited from

PropertyModel.effectiveConstraint

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

PropertyModel.effectiveDefault

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:143](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L143)

___

### effectiveId

• `get` **effectiveId**(): `undefined` \| `number`

Fields may omit their ID.  In this case we use their index within the parent as the ID.

#### Returns

`undefined` \| `number`

#### Overrides

PropertyModel.effectiveId

#### Defined in

[packages/matter.js/src/model/models/FieldModel.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/FieldModel.ts#L25)

___

### effectiveMetatype

• `get` **effectiveMetatype**(): `undefined` \| [`Metatype`](../enums/model.Metatype-1.md)

The working metatype for this object.

#### Returns

`undefined` \| [`Metatype`](../enums/model.Metatype-1.md)

#### Inherited from

PropertyModel.effectiveMetatype

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:131](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L131)

___

### effectiveQuality

• `get` **effectiveQuality**(): [`Quality`](model.Quality-1.md)

#### Returns

[`Quality`](model.Quality-1.md)

#### Inherited from

PropertyModel.effectiveQuality

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L80)

___

### effectiveType

• `get` **effectiveType**(): `undefined` \| `string`

The "effective type" may be inferred from context.

#### Returns

`undefined` \| `string`

#### Inherited from

PropertyModel.effectiveType

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:120](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L120)

___

### effectiveXref

• `get` **effectiveXref**(): `undefined` \| [`CrossReference`](model.Model.CrossReference.md)

A local or parent xref.

#### Returns

`undefined` \| [`CrossReference`](model.Model.CrossReference.md)

#### Inherited from

PropertyModel.effectiveXref

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

PropertyModel.elements

#### Defined in

[packages/matter.js/src/model/models/Model.ts:115](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L115)

___

### globalBase

• `get` **globalBase**(): `undefined` \| [`Model`](model.Model-1.md)

Get the first global base type.  This may have semantic meaning more specific than the base primitive type.

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Inherited from

PropertyModel.globalBase

#### Defined in

[packages/matter.js/src/model/models/Model.ts:227](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L227)

___

### key

• `get` **key**(): `undefined` \| `string`

The key for bitmap fields is actually the constraint which defines the bit range.  All other datatypes use the
default key.

#### Returns

`undefined` \| `string`

#### Overrides

PropertyModel.key

#### Defined in

[packages/matter.js/src/model/models/FieldModel.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/FieldModel.ts#L41)

___

### listEntry

• `get` **listEntry**(): `undefined` \| [`FieldModel`](model.FieldModel.md)

Get the entry type for lists, if any.

#### Returns

`undefined` \| [`FieldModel`](model.FieldModel.md)

#### Inherited from

PropertyModel.listEntry

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:166](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L166)

___

### mandatory

• `get` **mandatory**(): `boolean`

Is the model mandatory?

#### Returns

`boolean`

#### Inherited from

PropertyModel.mandatory

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:244](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L244)

___

### members

• `get` **members**(): [`FieldModel`](model.FieldModel.md)[]

Retrieve all datatype members.

#### Returns

[`FieldModel`](model.FieldModel.md)[]

#### Inherited from

PropertyModel.members

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:193](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L193)

___

### metabase

• `get` **metabase**(): `undefined` \| [`ValueModel`](model.ValueModel.md)

Metatype is only present on global types with specific semantic meaning.
This model is significant because it gives us information about how to
manipulate the data.  This accessor retrieves this model.

#### Returns

`undefined` \| [`ValueModel`](model.ValueModel.md)

#### Inherited from

PropertyModel.metabase

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L89)

___

### nullable

• `get` **nullable**(): `boolean`

Can this model be omitted?

#### Returns

`boolean`

#### Inherited from

PropertyModel.nullable

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:237](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L237)

___

### overridesShadow

• `get` **overridesShadow**(): `undefined` \| ``true``

Determine whether this element overrides key properties of its shadow.

#### Returns

`undefined` \| ``true``

#### Inherited from

PropertyModel.overridesShadow

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:251](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L251)

___

### parent

• `get` **parent**(): `undefined` \| [`Model`](model.Model-1.md)

The structural parent.  This is the model for the element that contains this element's definition.

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Inherited from

PropertyModel.parent

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

PropertyModel.parent

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

PropertyModel.path

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

PropertyModel.primitiveBase

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:97](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L97)

___

### quality

• `get` **quality**(): [`Quality`](model.Quality-1.md)

Other qualities not covered by conformance or access.

#### Returns

[`Quality`](model.Quality-1.md)

#### Implementation of

[FieldElement](../interfaces/model.FieldElement-1.md).[quality](../interfaces/model.FieldElement-1.md#quality)

#### Inherited from

PropertyModel.quality

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

[FieldElement](../interfaces/model.FieldElement-1.md).[quality](../interfaces/model.FieldElement-1.md#quality)

#### Inherited from

PropertyModel.quality

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:77](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L77)

___

### shadow

• `get` **shadow**(): `undefined` \| [`Model`](model.Model-1.md)

Get shadow model, if any.  A "shadow" is an element in my parent's inheritance hierarchy that I override.

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Inherited from

PropertyModel.shadow

#### Defined in

[packages/matter.js/src/model/models/Model.ts:220](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L220)

___

### valid

• `get` **valid**(): `boolean`

Did validation find errors?

#### Returns

`boolean`

#### Inherited from

PropertyModel.valid

#### Defined in

[packages/matter.js/src/model/models/Model.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L51)

___

### validationAspects

• `get` **validationAspects**(): [`Aspect`](model.Aspect.md)\<`any`\>[]

Collect constraints and conformance for this type and all base types.

#### Returns

[`Aspect`](model.Aspect.md)\<`any`\>[]

#### Inherited from

PropertyModel.validationAspects

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

[PropertyModel](model.PropertyModel.md).[add](model.PropertyModel.md#add)

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

[PropertyModel](model.PropertyModel.md).[all](model.PropertyModel.md#all)

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

[PropertyModel](model.PropertyModel.md).[bitDefinition](model.PropertyModel.md#bitdefinition)

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

[PropertyModel](model.PropertyModel.md).[clone](model.PropertyModel.md#clone)

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

[PropertyModel](model.PropertyModel.md).[error](model.PropertyModel.md#error)

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

[PropertyModel](model.PropertyModel.md).[get](model.PropertyModel.md#get)

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

[PropertyModel](model.PropertyModel.md).[instanceOf](model.PropertyModel.md#instanceof)

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

[PropertyModel](model.PropertyModel.md).[member](model.PropertyModel.md#member)

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

[PropertyModel](model.PropertyModel.md).[owner](model.PropertyModel.md#owner)

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

[PropertyModel](model.PropertyModel.md).[references](model.PropertyModel.md#references)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:349](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L349)

___

### toJSON

▸ **toJSON**(): [`AnyElement`](../modules/model.md#anyelement)

Convert model to JSON.

#### Returns

[`AnyElement`](../modules/model.md#anyelement)

#### Inherited from

[PropertyModel](model.PropertyModel.md).[toJSON](model.PropertyModel.md#tojson)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:312](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L312)

___

### valueOf

▸ **valueOf**(): [`AnyElement`](../modules/model.md#anyelement)

Convert to non-class structure.

#### Returns

[`AnyElement`](../modules/model.md#anyelement)

#### Inherited from

[PropertyModel](model.PropertyModel.md).[valueOf](model.PropertyModel.md#valueof)

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

[PropertyModel](model.PropertyModel.md).[visit](model.PropertyModel.md#visit)

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

[PropertyModel](model.PropertyModel.md).[create](model.PropertyModel.md#create)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:255](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L255)
