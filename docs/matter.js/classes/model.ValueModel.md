[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](../modules/model.md) / ValueModel

# Class: ValueModel

[model](../modules/model.md).ValueModel

Each ValueElement has a corresponding implementation that derives from
this class.

## Hierarchy

- [`Model`](model.Model-1.md)

  ↳ **`ValueModel`**

  ↳↳ [`AttributeModel`](model.AttributeModel.md)

  ↳↳ [`CommandModel`](model.CommandModel.md)

  ↳↳ [`DatatypeModel`](model.DatatypeModel.md)

  ↳↳ [`EventModel`](model.EventModel.md)

## Implements

- [`ValueElement`](../modules/model.md#valueelement)

## Table of contents

### Constructors

- [constructor](model.ValueModel.md#constructor)

### Properties

- [byteSize](model.ValueModel.md#bytesize)
- [default](model.ValueModel.md#default)
- [description](model.ValueModel.md#description)
- [details](model.ValueModel.md#details)
- [errors](model.ValueModel.md#errors)
- [global](model.ValueModel.md#global)
- [id](model.ValueModel.md#id)
- [isType](model.ValueModel.md#istype)
- [isTypeScope](model.ValueModel.md#istypescope)
- [metatype](model.ValueModel.md#metatype)
- [name](model.ValueModel.md#name)
- [tag](model.ValueModel.md#tag)
- [type](model.ValueModel.md#type)
- [xref](model.ValueModel.md#xref)
- [constructors](model.ValueModel.md#constructors)

### Accessors

- [access](model.ValueModel.md#access)
- [allowedBaseTags](model.ValueModel.md#allowedbasetags)
- [base](model.ValueModel.md#base)
- [children](model.ValueModel.md#children)
- [conformance](model.ValueModel.md#conformance)
- [constraint](model.ValueModel.md#constraint)
- [definingModel](model.ValueModel.md#definingmodel)
- [deprecated](model.ValueModel.md#deprecated)
- [directMetatype](model.ValueModel.md#directmetatype)
- [disallowed](model.ValueModel.md#disallowed)
- [effectiveAccess](model.ValueModel.md#effectiveaccess)
- [effectiveConformance](model.ValueModel.md#effectiveconformance)
- [effectiveConstraint](model.ValueModel.md#effectiveconstraint)
- [effectiveDefault](model.ValueModel.md#effectivedefault)
- [effectiveId](model.ValueModel.md#effectiveid)
- [effectiveMetatype](model.ValueModel.md#effectivemetatype)
- [effectiveQuality](model.ValueModel.md#effectivequality)
- [effectiveType](model.ValueModel.md#effectivetype)
- [effectiveXref](model.ValueModel.md#effectivexref)
- [elements](model.ValueModel.md#elements)
- [globalBase](model.ValueModel.md#globalbase)
- [key](model.ValueModel.md#key)
- [listEntry](model.ValueModel.md#listentry)
- [mandatory](model.ValueModel.md#mandatory)
- [members](model.ValueModel.md#members)
- [metabase](model.ValueModel.md#metabase)
- [nullable](model.ValueModel.md#nullable)
- [overridesShadow](model.ValueModel.md#overridesshadow)
- [parent](model.ValueModel.md#parent)
- [path](model.ValueModel.md#path)
- [primitiveBase](model.ValueModel.md#primitivebase)
- [quality](model.ValueModel.md#quality)
- [shadow](model.ValueModel.md#shadow)
- [valid](model.ValueModel.md#valid)
- [validationAspects](model.ValueModel.md#validationaspects)

### Methods

- [add](model.ValueModel.md#add)
- [all](model.ValueModel.md#all)
- [bitDefinition](model.ValueModel.md#bitdefinition)
- [error](model.ValueModel.md#error)
- [get](model.ValueModel.md#get)
- [instanceOf](model.ValueModel.md#instanceof)
- [is](model.ValueModel.md#is)
- [member](model.ValueModel.md#member)
- [owner](model.ValueModel.md#owner)
- [references](model.ValueModel.md#references)
- [toJSON](model.ValueModel.md#tojson)
- [valueOf](model.ValueModel.md#valueof)
- [visit](model.ValueModel.md#visit)
- [create](model.ValueModel.md#create)

## Constructors

### constructor

• **new ValueModel**(`definition`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](../modules/model.ValueElement.md#properties) |

#### Overrides

[Model](model.Model-1.md).[constructor](model.Model-1.md#constructor)

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:307](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L307)

## Properties

### byteSize

• `Optional` **byteSize**: [`Size`](../modules/model.ValueElement.md#size)

#### Implementation of

ValueElement.byteSize

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:30](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L30)

___

### default

• `Optional` **default**: [`FieldValue`](../modules/model.md#fieldvalue)

#### Implementation of

ValueElement.default

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:31](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L31)

___

### description

• `Optional` **description**: `string`

#### Implementation of

ValueElement.description

#### Inherited from

[Model](model.Model-1.md).[description](model.Model-1.md#description)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:26](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/Model.ts#L26)

___

### details

• `Optional` **details**: `string`

#### Implementation of

ValueElement.details

#### Inherited from

[Model](model.Model-1.md).[details](model.Model-1.md#details)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:27](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/Model.ts#L27)

___

### errors

• `Optional` **errors**: [`DefinitionError`](../modules/model.md#definitionerror)[]

#### Inherited from

[Model](model.Model-1.md).[errors](model.Model-1.md#errors)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:29](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/Model.ts#L29)

___

### global

• `Optional` **global**: `boolean`

Flag set on elements loaded from Globals.

#### Implementation of

ValueElement.global

#### Inherited from

[Model](model.Model-1.md).[global](model.Model-1.md#global)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:34](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/Model.ts#L34)

___

### id

• `Optional` **id**: `number`

#### Implementation of

ValueElement.id

#### Inherited from

[Model](model.Model-1.md).[id](model.Model-1.md#id)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:23](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/Model.ts#L23)

___

### isType

• `Optional` **isType**: `boolean` = `true`

Indicates that an element defines a datatype.

#### Overrides

[Model](model.Model-1.md).[isType](model.Model-1.md#istype)

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:33](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L33)

___

### isTypeScope

• `Optional` **isTypeScope**: `boolean`

Indicates that an element may have type definitions as children.

#### Inherited from

[Model](model.Model-1.md).[isTypeScope](model.Model-1.md#istypescope)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:39](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/Model.ts#L39)

___

### metatype

• `Optional` **metatype**: [`Metatype`](../enums/model.Metatype-1.md)

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:32](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L32)

___

### name

• **name**: `string`

#### Implementation of

ValueElement.name

#### Inherited from

[Model](model.Model-1.md).[name](model.Model-1.md#name)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:24](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/Model.ts#L24)

___

### tag

• `Readonly` `Abstract` **tag**: [`ElementTag`](../enums/model.ElementTag.md)

#### Inherited from

[Model](model.Model-1.md).[tag](model.Model-1.md#tag)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:22](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/Model.ts#L22)

___

### type

• `Optional` **type**: `string`

#### Implementation of

ValueElement.type

#### Inherited from

[Model](model.Model-1.md).[type](model.Model-1.md#type)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:25](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/Model.ts#L25)

___

### xref

• `Optional` **xref**: [`CrossReference`](model.Model.CrossReference.md)

#### Implementation of

ValueElement.xref

#### Inherited from

[Model](model.Model-1.md).[xref](model.Model-1.md#xref)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:28](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/Model.ts#L28)

___

### constructors

▪ `Static` **constructors**: `Object`

Factory support.  Populated by derivatives upon definition.

#### Index signature

▪ [type: `string`]: (`definition`: `any`) => [`Model`](model.Model-1.md)

#### Inherited from

[Model](model.Model-1.md).[constructors](model.Model-1.md#constructors)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:192](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/Model.ts#L192)

## Accessors

### access

• `get` **access**(): [`Access`](model.Access-1.md)

#### Returns

[`Access`](model.Access-1.md)

#### Implementation of

ValueElement.access

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:63](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L63)

• `set` **access**(`definition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Access`](model.Access-1.md) \| [`Definition`](../modules/model.Access.md#definition) |

#### Returns

`void`

#### Implementation of

ValueElement.access

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:66](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L66)

___

### allowedBaseTags

• `get` **allowedBaseTags**(): [`ElementTag`](../enums/model.ElementTag.md)[]

ValueModels may derive from models of the same type or from generic
Datatype models.

#### Returns

[`ElementTag`](../enums/model.ElementTag.md)[]

#### Overrides

Model.allowedBaseTags

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:180](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L180)

___

### base

• `get` **base**(): `undefined` \| [`ValueModel`](model.ValueModel.md)

ValueModels may only derive from ValueModels.

#### Returns

`undefined` \| [`ValueModel`](model.ValueModel.md)

#### Overrides

Model.base

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:172](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L172)

___

### children

• `get` **children**(): [`DatatypeModel`](model.DatatypeModel.md)[]

Children of models are always models.

#### Returns

[`DatatypeModel`](model.DatatypeModel.md)[]

#### Implementation of

ValueElement.children

#### Overrides

Model.children

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:35](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L35)

• `set` **children**(`children`): `void`

Children can be added as models or elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | ([`DatatypeElement`](../modules/model.md#datatypeelement) \| [`DatatypeModel`](model.DatatypeModel.md))[] |

#### Returns

`void`

#### Implementation of

ValueElement.children

#### Overrides

Model.children

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:39](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L39)

___

### conformance

• `get` **conformance**(): [`Conformance`](model.Conformance-1.md)

#### Returns

[`Conformance`](model.Conformance-1.md)

#### Implementation of

ValueElement.conformance

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:53](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L53)

• `set` **conformance**(`definition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Conformance`](model.Conformance-1.md) \| [`Definition`](../modules/model.Conformance.md#definition) |

#### Returns

`void`

#### Implementation of

ValueElement.conformance

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:56](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L56)

___

### constraint

• `get` **constraint**(): [`Constraint`](model.Constraint-1.md)

#### Returns

[`Constraint`](model.Constraint-1.md)

#### Implementation of

ValueElement.constraint

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:43](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L43)

• `set` **constraint**(`definition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Constraint`](model.Constraint-1.md) \| [`Definition`](../modules/model.Constraint.md#definition) |

#### Returns

`void`

#### Implementation of

ValueElement.constraint

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:46](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L46)

___

### definingModel

• `get` **definingModel**(): `undefined` \| [`ValueModel`](model.ValueModel.md)

Get the first derived ancestor with children, if any.

#### Returns

`undefined` \| [`ValueModel`](model.ValueModel.md)

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:158](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L158)

___

### deprecated

• `get` **deprecated**(): `boolean`

Is this model deprecated?

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:220](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L220)

___

### directMetatype

• `get` **directMetatype**(): `undefined` \| [`Metatype`](../enums/model.Metatype-1.md)

The metatype for this model's type, ignoring inheritance.

#### Returns

`undefined` \| [`Metatype`](../enums/model.Metatype-1.md)

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:149](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L149)

___

### disallowed

• `get` **disallowed**(): `boolean`

Is this model disallowed?

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:227](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L227)

___

### effectiveAccess

• `get` **effectiveAccess**(): [`Access`](model.Access-1.md)

#### Returns

[`Access`](model.Access-1.md)

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:69](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L69)

___

### effectiveConformance

• `get` **effectiveConformance**(): [`Conformance`](model.Conformance-1.md)

#### Returns

[`Conformance`](model.Conformance-1.md)

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:59](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L59)

___

### effectiveConstraint

• `get` **effectiveConstraint**(): [`Constraint`](model.Constraint-1.md)

#### Returns

[`Constraint`](model.Constraint-1.md)

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:49](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L49)

___

### effectiveDefault

• `get` **effectiveDefault**(): `any`

The value to use as a default.  The "default" field has a manually
supplied value but this property decodes the default and/or generates
a default from subfields.

#### Returns

`any`

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:142](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L142)

___

### effectiveId

• `get` **effectiveId**(): `undefined` \| `number`

Allows subclasses to pull a working ID from an alternate source.

#### Returns

`undefined` \| `number`

#### Inherited from

Model.effectiveId

#### Defined in

[packages/matter.js/src/model/models/Model.ts:112](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/Model.ts#L112)

___

### effectiveMetatype

• `get` **effectiveMetatype**(): `undefined` \| [`Metatype`](../enums/model.Metatype-1.md)

The working metatype for this object.

#### Returns

`undefined` \| [`Metatype`](../enums/model.Metatype-1.md)

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:130](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L130)

___

### effectiveQuality

• `get` **effectiveQuality**(): [`Quality`](model.Quality-1.md)

#### Returns

[`Quality`](model.Quality-1.md)

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:79](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L79)

___

### effectiveType

• `get` **effectiveType**(): `undefined` \| `string`

The "effective type" may be inferred from context.

#### Returns

`undefined` \| `string`

#### Overrides

Model.effectiveType

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:119](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L119)

___

### effectiveXref

• `get` **effectiveXref**(): `undefined` \| [`CrossReference`](model.Model.CrossReference.md)

A local or parent xref.

#### Returns

`undefined` \| [`CrossReference`](model.Model.CrossReference.md)

#### Inherited from

Model.effectiveXref

#### Defined in

[packages/matter.js/src/model/models/Model.ts:230](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/Model.ts#L230)

___

### elements

• `get` **elements**(): [`AnyElement`](../modules/model.md#anyelement)[]

Element view of children.  For TypeScript this allows children to be
added as elements.  For JavaScript this is identical to children().

#### Returns

[`AnyElement`](../modules/model.md#anyelement)[]

#### Inherited from

Model.elements

#### Defined in

[packages/matter.js/src/model/models/Model.ts:102](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/Model.ts#L102)

___

### globalBase

• `get` **globalBase**(): `undefined` \| [`Model`](model.Model-1.md)

Get the first global base type.  This may have semantic meaning more
specific than the base primitive type.

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Inherited from

Model.globalBase

#### Defined in

[packages/matter.js/src/model/models/Model.ts:223](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/Model.ts#L223)

___

### key

• `get` **key**(): `undefined` \| `string`

Get a string that uniquely identifies this model.  This is normally
the effective ID but some models require a generated identifier.

#### Returns

`undefined` \| `string`

#### Inherited from

Model.key

#### Defined in

[packages/matter.js/src/model/models/Model.ts:120](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/Model.ts#L120)

___

### listEntry

• `get` **listEntry**(): `undefined` \| [`DatatypeModel`](model.DatatypeModel.md)

Get the entry type for lists, if any.

#### Returns

`undefined` \| [`DatatypeModel`](model.DatatypeModel.md)

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:165](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L165)

___

### mandatory

• `get` **mandatory**(): `boolean`

Is this model mandatory?  This supports a limited subset of conformance
and is only appropriate for field conformance.

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:242](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L242)

___

### members

• `get` **members**(): [`DatatypeModel`](model.DatatypeModel.md)[]

Retrieve all datatype members.

#### Returns

[`DatatypeModel`](model.DatatypeModel.md)[]

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:190](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L190)

___

### metabase

• `get` **metabase**(): `undefined` \| [`ValueModel`](model.ValueModel.md)

Metatype is only present on global types with specific semantic meaning.
This model is significant because it gives us information about how to
manipulate the data.  This accessor retrieves this model.

#### Returns

`undefined` \| [`ValueModel`](model.ValueModel.md)

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:88](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L88)

___

### nullable

• `get` **nullable**(): `boolean`

Can this model be omitted?

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:234](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L234)

___

### overridesShadow

• `get` **overridesShadow**(): `undefined` \| ``true``

Determine whether this element overrides key properties of its shadow.

#### Returns

`undefined` \| ``true``

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:263](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L263)

___

### parent

• `get` **parent**(): `undefined` \| [`Model`](model.Model-1.md)

The structural parent.  This is the model for the element that contains
this element's definition.

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Inherited from

Model.parent

#### Defined in

[packages/matter.js/src/model/models/Model.ts:71](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/Model.ts#L71)

• `set` **parent**(`parent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `undefined` \| [`Model`](model.Model-1.md) |

#### Returns

`void`

#### Inherited from

Model.parent

#### Defined in

[packages/matter.js/src/model/models/Model.ts:75](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/Model.ts#L75)

___

### path

• `get` **path**(): `string`

The full path ("." delimited) in the Matter tree.

#### Returns

`string`

#### Inherited from

Model.path

#### Defined in

[packages/matter.js/src/model/models/Model.ts:59](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/Model.ts#L59)

___

### primitiveBase

• `get` **primitiveBase**(): `undefined` \| [`ValueModel`](model.ValueModel.md)

Get the primitive type for this value model.  This is an integer type
for enums and bitmaps.  Otherwise it's the metabase.

#### Returns

`undefined` \| [`ValueModel`](model.ValueModel.md)

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:96](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L96)

___

### quality

• `get` **quality**(): [`Quality`](model.Quality-1.md)

#### Returns

[`Quality`](model.Quality-1.md)

#### Implementation of

ValueElement.quality

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:73](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L73)

• `set` **quality**(`definition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Quality`](model.Quality-1.md) \| [`Definition`](../modules/model.Quality.md#definition) |

#### Returns

`void`

#### Implementation of

ValueElement.quality

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:76](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L76)

___

### shadow

• `get` **shadow**(): `undefined` \| [`Model`](model.Model-1.md)

Get shadow model, if any.  A "shadow" is an element in my parent's
inheritance hierarchy that I override.

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Inherited from

Model.shadow

#### Defined in

[packages/matter.js/src/model/models/Model.ts:215](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/Model.ts#L215)

___

### valid

• `get` **valid**(): `boolean`

Did validation find errors?

#### Returns

`boolean`

#### Inherited from

Model.valid

#### Defined in

[packages/matter.js/src/model/models/Model.ts:52](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/Model.ts#L52)

___

### validationAspects

• `get` **validationAspects**(): [`Aspect`](model.Aspect.md)<`any`\>[]

Collect constraints and conformance for this type and all base types.

#### Returns

[`Aspect`](model.Aspect.md)<`any`\>[]

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:197](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L197)

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

[Model](model.Model-1.md).[add](model.Model-1.md#add)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:244](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/Model.ts#L244)

___

### all

▸ **all**<`T`\>(`constructor`): `T`[]

Retrieve all models of a specific element type from local scope.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Model`](model.Model-1.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `constructor` | [`Constructor`](../modules/model.Model.md#constructor)<`T`\> | model class or a predicate object |

#### Returns

`T`[]

#### Inherited from

[Model](model.Model-1.md).[all](model.Model-1.md#all)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:268](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/Model.ts#L268)

___

### bitDefinition

▸ **bitDefinition**(`bit`): `undefined` \| [`DatatypeModel`](model.DatatypeModel.md)

Search the inheritance chain for a bitmap field defining a specific bit.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bit` | `number` |

#### Returns

`undefined` \| [`DatatypeModel`](model.DatatypeModel.md)

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:289](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L289)

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

[Model](model.Model-1.md).[error](model.Model-1.md#error)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:303](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/Model.ts#L303)

___

### get

▸ **get**<`T`\>(`constructor`, `key`): `T`

Retrieve a specific model by ID or name.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Model`](model.Model-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | [`Constructor`](../modules/model.Model.md#constructor)<`T`\> |
| `key` | `string` \| `number` |

#### Returns

`T`

#### Inherited from

[Model](model.Model-1.md).[get](model.Model-1.md#get)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:275](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/Model.ts#L275)

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

[Model](model.Model-1.md).[instanceOf](model.Model-1.md#instanceof)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:373](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/Model.ts#L373)

___

### is

▸ **is**(`key`): `boolean`

Check identity of element by name or ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `undefined` \| [`ElementSelector`](../modules/export._internal_.ModelTraversal.md#elementselector) |

#### Returns

`boolean`

#### Inherited from

[Model](model.Model-1.md).[is](model.Model-1.md#is)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:291](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/Model.ts#L291)

___

### member

▸ **member**(`key`, `allowedTags?`): `undefined` \| [`Model`](model.Model-1.md)

Search the inheritance chain for a child property.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ElementSelector`](../modules/export._internal_.ModelTraversal.md#elementselector) |
| `allowedTags` | [`ElementTag`](../enums/model.ElementTag.md)[] |

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Inherited from

[Model](model.Model-1.md).[member](model.Model-1.md#member)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:363](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/Model.ts#L363)

___

### owner

▸ **owner**<`T`\>(`constructor`): `undefined` \| `T`

Retrieve a model of a specific type from the ownership hierarchy.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Model`](model.Model-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | [`Constructor`](../modules/model.Model.md#constructor)<`T`\> |

#### Returns

`undefined` \| `T`

#### Inherited from

[Model](model.Model-1.md).[owner](model.Model-1.md#owner)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:284](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/Model.ts#L284)

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

[Model](model.Model-1.md).[references](model.Model-1.md#references)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:356](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/Model.ts#L356)

___

### toJSON

▸ **toJSON**(): [`AnyElement`](../modules/model.md#anyelement)

Convert model to JSON.

#### Returns

[`AnyElement`](../modules/model.md#anyelement)

#### Inherited from

[Model](model.Model-1.md).[toJSON](model.Model-1.md#tojson)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:319](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/Model.ts#L319)

___

### valueOf

▸ **valueOf**(): [`AnyElement`](../modules/model.md#anyelement)

Convert to non-class structure.

#### Returns

[`AnyElement`](../modules/model.md#anyelement)

#### Overrides

[Model](model.Model-1.md).[valueOf](model.Model-1.md#valueof)

#### Defined in

[packages/matter.js/src/model/models/ValueModel.ts:293](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/ValueModel.ts#L293)

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

[Model](model.Model-1.md).[visit](model.Model-1.md#visit)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:349](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/Model.ts#L349)

___

### create

▸ `Static` **create**(`definition`): [`Model`](model.Model-1.md)

Create a model for an element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`AnyElement`](../modules/model.md#anyelement) |

#### Returns

[`Model`](model.Model-1.md)

#### Inherited from

[Model](model.Model-1.md).[create](model.Model-1.md#create)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:251](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/models/Model.ts#L251)
