[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](../modules/model.md) / PropertyModel

# Class: PropertyModel

[model](../modules/model.md).PropertyModel

This is the base class for fields and attributes, both of which define
subvalues of logical structs.

## Hierarchy

- [`ValueModel`](model.ValueModel.md)

  ↳ **`PropertyModel`**

  ↳↳ [`AttributeModel`](model.AttributeModel.md)

  ↳↳ [`FieldModel`](model.FieldModel.md)

## Table of contents

### Constructors

- [constructor](model.PropertyModel.md#constructor)

### Properties

- [#children](model.PropertyModel.md##children)
- [#id](model.PropertyModel.md##id)
- [#name](model.PropertyModel.md##name)
- [#parent](model.PropertyModel.md##parent)
- [byteSize](model.PropertyModel.md#bytesize)
- [default](model.PropertyModel.md#default)
- [description](model.PropertyModel.md#description)
- [details](model.PropertyModel.md#details)
- [errors](model.PropertyModel.md#errors)
- [global](model.PropertyModel.md#global)
- [id](model.PropertyModel.md#id)
- [isGlobalAttribute](model.PropertyModel.md#isglobalattribute)
- [isType](model.PropertyModel.md#istype)
- [isTypeScope](model.PropertyModel.md#istypescope)
- [metatype](model.PropertyModel.md#metatype)
- [name](model.PropertyModel.md#name)
- [tag](model.PropertyModel.md#tag)
- [type](model.PropertyModel.md#type)
- [xref](model.PropertyModel.md#xref)
- [types](model.PropertyModel.md#types)

### Accessors

- [access](model.PropertyModel.md#access)
- [allowedBaseTags](model.PropertyModel.md#allowedbasetags)
- [base](model.PropertyModel.md#base)
- [children](model.PropertyModel.md#children)
- [conformance](model.PropertyModel.md#conformance)
- [constraint](model.PropertyModel.md#constraint)
- [definingModel](model.PropertyModel.md#definingmodel)
- [deprecated](model.PropertyModel.md#deprecated)
- [directMetatype](model.PropertyModel.md#directmetatype)
- [disallowed](model.PropertyModel.md#disallowed)
- [discriminator](model.PropertyModel.md#discriminator)
- [effectiveAccess](model.PropertyModel.md#effectiveaccess)
- [effectiveConformance](model.PropertyModel.md#effectiveconformance)
- [effectiveConstraint](model.PropertyModel.md#effectiveconstraint)
- [effectiveDefault](model.PropertyModel.md#effectivedefault)
- [effectiveId](model.PropertyModel.md#effectiveid)
- [effectiveMetatype](model.PropertyModel.md#effectivemetatype)
- [effectiveQuality](model.PropertyModel.md#effectivequality)
- [effectiveType](model.PropertyModel.md#effectivetype)
- [effectiveXref](model.PropertyModel.md#effectivexref)
- [elements](model.PropertyModel.md#elements)
- [globalBase](model.PropertyModel.md#globalbase)
- [key](model.PropertyModel.md#key)
- [listEntry](model.PropertyModel.md#listentry)
- [mandatory](model.PropertyModel.md#mandatory)
- [members](model.PropertyModel.md#members)
- [metabase](model.PropertyModel.md#metabase)
- [nullable](model.PropertyModel.md#nullable)
- [overridesShadow](model.PropertyModel.md#overridesshadow)
- [parent](model.PropertyModel.md#parent)
- [path](model.PropertyModel.md#path)
- [primitiveBase](model.PropertyModel.md#primitivebase)
- [quality](model.PropertyModel.md#quality)
- [shadow](model.PropertyModel.md#shadow)
- [valid](model.PropertyModel.md#valid)
- [validationAspects](model.PropertyModel.md#validationaspects)

### Methods

- [add](model.PropertyModel.md#add)
- [all](model.PropertyModel.md#all)
- [bitDefinition](model.PropertyModel.md#bitdefinition)
- [clone](model.PropertyModel.md#clone)
- [error](model.PropertyModel.md#error)
- [get](model.PropertyModel.md#get)
- [instanceOf](model.PropertyModel.md#instanceof)
- [member](model.PropertyModel.md#member)
- [owner](model.PropertyModel.md#owner)
- [references](model.PropertyModel.md#references)
- [toJSON](model.PropertyModel.md#tojson)
- [valueOf](model.PropertyModel.md#valueof)
- [visit](model.PropertyModel.md#visit)
- [create](model.PropertyModel.md#create)

## Constructors

### constructor

• **new PropertyModel**(`definition`): [`PropertyModel`](model.PropertyModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](../modules/model.ValueElement.md#properties) |

#### Returns

[`PropertyModel`](model.PropertyModel.md)

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

#### Inherited from

[ValueModel](model.ValueModel.md).[byteSize](model.ValueModel.md#bytesize)

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L31)

___

### default

• `Optional` **default**: [`FieldValue`](../modules/model.md#fieldvalue)

#### Inherited from

[ValueModel](model.ValueModel.md).[default](model.ValueModel.md#default)

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L32)

___

### description

• `Optional` **description**: `string`

#### Inherited from

[ValueModel](model.ValueModel.md).[description](model.ValueModel.md#description)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L20)

___

### details

• `Optional` **details**: `string`

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

#### Inherited from

[ValueModel](model.ValueModel.md).[global](model.ValueModel.md#global)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L33)

___

### id

• `Optional` **id**: `number`

#### Inherited from

[ValueModel](model.ValueModel.md).[id](model.ValueModel.md#id)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L24)

___

### isGlobalAttribute

• `Optional` `Abstract` **isGlobalAttribute**: `boolean`

#### Defined in

[packages/matter.js/src/model/models/PropertyModel.ts:14](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/PropertyModel.ts#L14)

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

#### Inherited from

[ValueModel](model.ValueModel.md).[metatype](model.ValueModel.md#metatype)

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L33)

___

### name

• **name**: `string`

#### Inherited from

[ValueModel](model.ValueModel.md).[name](model.ValueModel.md#name)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L25)

___

### tag

• `Readonly` `Abstract` **tag**: [`ElementTag`](../enums/model.ElementTag.md)

#### Inherited from

[ValueModel](model.ValueModel.md).[tag](model.ValueModel.md#tag)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L18)

___

### type

• `Optional` **type**: `string`

#### Inherited from

[ValueModel](model.ValueModel.md).[type](model.ValueModel.md#type)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L19)

___

### xref

• `Optional` **xref**: [`CrossReference`](model.Model.CrossReference.md)

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

#### Returns

[`Access`](model.Access-1.md)

#### Inherited from

ValueModel.access

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:64](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L64)

• `set` **access**(`definition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Access`](model.Access-1.md) \| [`Definition`](../modules/model.Access.md#definition) |

#### Returns

`void`

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

#### Inherited from

ValueModel.children

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L40)

___

### conformance

• `get` **conformance**(): [`Conformance`](model.Conformance-1.md)

#### Returns

[`Conformance`](model.Conformance-1.md)

#### Inherited from

ValueModel.conformance

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L54)

• `set` **conformance**(`definition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Definition`](../modules/model.Conformance.md#definition) \| [`Conformance`](model.Conformance-1.md) |

#### Returns

`void`

#### Inherited from

ValueModel.conformance

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:57](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L57)

___

### constraint

• `get` **constraint**(): [`Constraint`](model.Constraint-1.md)

#### Returns

[`Constraint`](model.Constraint-1.md)

#### Inherited from

ValueModel.constraint

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:44](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L44)

• `set` **constraint**(`definition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Definition`](../modules/model.Constraint.md#definition) \| [`Constraint`](model.Constraint-1.md) |

#### Returns

`void`

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

• `get` **members**(): [`FieldModel`](model.FieldModel.md)[]

Retrieve all datatype members.

#### Returns

[`FieldModel`](model.FieldModel.md)[]

#### Inherited from

ValueModel.members

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

#### Returns

[`Quality`](model.Quality-1.md)

#### Inherited from

ValueModel.quality

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ValueModel.ts#L74)

• `set` **quality**(`definition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Definition`](../modules/model.Quality.md#definition) \| [`Quality`](model.Quality-1.md) |

#### Returns

`void`

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
