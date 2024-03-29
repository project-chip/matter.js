[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](../modules/exports_model.md) / CommandModel

# Class: CommandModel

[exports/model](../modules/exports_model.md).CommandModel

A command describes a remote procedure call.

## Hierarchy

- [`ValueModel`](exports_model.ValueModel.md)

  ↳ **`CommandModel`**

## Implements

- [`CommandElement`](../interfaces/exports_model.CommandElement-1.md)

## Table of contents

### Constructors

- [constructor](exports_model.CommandModel.md#constructor)

### Properties

- [#private](exports_model.CommandModel.md##private)
- [byteSize](exports_model.CommandModel.md#bytesize)
- [default](exports_model.CommandModel.md#default)
- [description](exports_model.CommandModel.md#description)
- [details](exports_model.CommandModel.md#details)
- [direction](exports_model.CommandModel.md#direction)
- [errors](exports_model.CommandModel.md#errors)
- [global](exports_model.CommandModel.md#global)
- [id](exports_model.CommandModel.md#id)
- [isType](exports_model.CommandModel.md#istype)
- [isTypeScope](exports_model.CommandModel.md#istypescope)
- [metatype](exports_model.CommandModel.md#metatype)
- [name](exports_model.CommandModel.md#name)
- [response](exports_model.CommandModel.md#response)
- [tag](exports_model.CommandModel.md#tag)
- [type](exports_model.CommandModel.md#type)
- [xref](exports_model.CommandModel.md#xref)
- [Tag](exports_model.CommandModel.md#tag-1)
- [types](exports_model.CommandModel.md#types)

### Accessors

- [access](exports_model.CommandModel.md#access)
- [allowedBaseTags](exports_model.CommandModel.md#allowedbasetags)
- [base](exports_model.CommandModel.md#base)
- [children](exports_model.CommandModel.md#children)
- [conformance](exports_model.CommandModel.md#conformance)
- [constraint](exports_model.CommandModel.md#constraint)
- [definingModel](exports_model.CommandModel.md#definingmodel)
- [deprecated](exports_model.CommandModel.md#deprecated)
- [directMetatype](exports_model.CommandModel.md#directmetatype)
- [disallowed](exports_model.CommandModel.md#disallowed)
- [discriminator](exports_model.CommandModel.md#discriminator)
- [effectiveAccess](exports_model.CommandModel.md#effectiveaccess)
- [effectiveConformance](exports_model.CommandModel.md#effectiveconformance)
- [effectiveConstraint](exports_model.CommandModel.md#effectiveconstraint)
- [effectiveDefault](exports_model.CommandModel.md#effectivedefault)
- [effectiveId](exports_model.CommandModel.md#effectiveid)
- [effectiveMetatype](exports_model.CommandModel.md#effectivemetatype)
- [effectiveQuality](exports_model.CommandModel.md#effectivequality)
- [effectiveType](exports_model.CommandModel.md#effectivetype)
- [effectiveXref](exports_model.CommandModel.md#effectivexref)
- [elements](exports_model.CommandModel.md#elements)
- [globalBase](exports_model.CommandModel.md#globalbase)
- [isRequest](exports_model.CommandModel.md#isrequest)
- [isResponse](exports_model.CommandModel.md#isresponse)
- [key](exports_model.CommandModel.md#key)
- [listEntry](exports_model.CommandModel.md#listentry)
- [mandatory](exports_model.CommandModel.md#mandatory)
- [members](exports_model.CommandModel.md#members)
- [metabase](exports_model.CommandModel.md#metabase)
- [nullable](exports_model.CommandModel.md#nullable)
- [overridesShadow](exports_model.CommandModel.md#overridesshadow)
- [parent](exports_model.CommandModel.md#parent)
- [path](exports_model.CommandModel.md#path)
- [primitiveBase](exports_model.CommandModel.md#primitivebase)
- [quality](exports_model.CommandModel.md#quality)
- [responseModel](exports_model.CommandModel.md#responsemodel)
- [shadow](exports_model.CommandModel.md#shadow)
- [valid](exports_model.CommandModel.md#valid)
- [validationAspects](exports_model.CommandModel.md#validationaspects)

### Methods

- [add](exports_model.CommandModel.md#add)
- [all](exports_model.CommandModel.md#all)
- [bitDefinition](exports_model.CommandModel.md#bitdefinition)
- [clone](exports_model.CommandModel.md#clone)
- [error](exports_model.CommandModel.md#error)
- [get](exports_model.CommandModel.md#get)
- [instanceOf](exports_model.CommandModel.md#instanceof)
- [member](exports_model.CommandModel.md#member)
- [owner](exports_model.CommandModel.md#owner)
- [references](exports_model.CommandModel.md#references)
- [toJSON](exports_model.CommandModel.md#tojson)
- [valueOf](exports_model.CommandModel.md#valueof)
- [visit](exports_model.CommandModel.md#visit)
- [create](exports_model.CommandModel.md#create)

## Constructors

### constructor

• **new CommandModel**(`definition`): [`CommandModel`](exports_model.CommandModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](../modules/exports_model.CommandElement.md#properties) |

#### Returns

[`CommandModel`](exports_model.CommandModel.md)

#### Overrides

[ValueModel](exports_model.ValueModel.md).[constructor](exports_model.ValueModel.md#constructor)

#### Defined in

packages/matter.js/dist/esm/model/models/CommandModel.d.ts:22

## Properties

### #private

• `Private` **#private**: `any`

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[#private](exports_model.ValueModel.md##private)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:13

___

### byteSize

• `Optional` **byteSize**: [`Size`](../modules/exports_model.ValueElement.md#size)

Applies to numeric types.

#### Implementation of

[CommandElement](../interfaces/exports_model.CommandElement-1.md).[byteSize](../interfaces/exports_model.CommandElement-1.md#bytesize)

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[byteSize](exports_model.ValueModel.md#bytesize)

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:17

___

### default

• `Optional` **default**: [`FieldValue`](../modules/exports_model.md#fieldvalue)

The default value for the element.

#### Implementation of

[CommandElement](../interfaces/exports_model.CommandElement-1.md).[default](../interfaces/exports_model.CommandElement-1.md#default)

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[default](exports_model.ValueModel.md#default)

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:18

___

### description

• `Optional` **description**: `string`

A short summary of the element.

#### Implementation of

[CommandElement](../interfaces/exports_model.CommandElement-1.md).[description](../interfaces/exports_model.CommandElement-1.md#description)

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[description](exports_model.ValueModel.md#description)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:16

___

### details

• `Optional` **details**: `string`

A paragraph summary of the element.

#### Implementation of

[CommandElement](../interfaces/exports_model.CommandElement-1.md).[details](../interfaces/exports_model.CommandElement-1.md#details)

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[details](exports_model.ValueModel.md#details)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:17

___

### direction

• `Optional` **direction**: [`Direction`](../enums/exports_model.CommandElement.Direction.md)

#### Implementation of

[CommandElement](../interfaces/exports_model.CommandElement-1.md).[direction](../interfaces/exports_model.CommandElement-1.md#direction)

#### Defined in

packages/matter.js/dist/esm/model/models/CommandModel.d.ts:12

___

### errors

• `Optional` **errors**: [`DefinitionError`](../modules/exports_model.md#definitionerror)[]

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[errors](exports_model.ValueModel.md#errors)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:19

___

### global

• `Optional` **global**: `boolean`

Flag set on elements loaded from Globals.

#### Implementation of

[CommandElement](../interfaces/exports_model.CommandElement-1.md).[global](../interfaces/exports_model.CommandElement-1.md#global)

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[global](exports_model.ValueModel.md#global)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:25

___

### id

• **id**: `number`

#### Implementation of

[CommandElement](../interfaces/exports_model.CommandElement-1.md).[id](../interfaces/exports_model.CommandElement-1.md#id)

#### Overrides

[ValueModel](exports_model.ValueModel.md).[id](exports_model.ValueModel.md#id)

#### Defined in

packages/matter.js/dist/esm/model/models/CommandModel.d.ts:11

___

### isType

• `Optional` **isType**: `boolean`

Indicates that an element defines a datatype.

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[isType](exports_model.ValueModel.md#istype)

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:20

___

### isTypeScope

• `Optional` **isTypeScope**: `boolean`

Indicates that an element may have type definitions as children.

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[isTypeScope](exports_model.ValueModel.md#istypescope)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:29

___

### metatype

• `Optional` **metatype**: [`Metatype`](../enums/exports_model.Metatype-1.md)

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[metatype](exports_model.ValueModel.md#metatype)

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:19

___

### name

• **name**: `string`

The key used for storing this element.  A "human appropriate" semantic
differentiator.

#### Implementation of

[CommandElement](../interfaces/exports_model.CommandElement-1.md).[name](../interfaces/exports_model.CommandElement-1.md#name)

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[name](exports_model.ValueModel.md#name)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:21

___

### response

• `Optional` **response**: `string`

#### Implementation of

[CommandElement](../interfaces/exports_model.CommandElement-1.md).[response](../interfaces/exports_model.CommandElement-1.md#response)

#### Defined in

packages/matter.js/dist/esm/model/models/CommandModel.d.ts:13

___

### tag

• **tag**: [`Command`](../enums/exports_model.ElementTag.md#command)

#### Implementation of

[CommandElement](../interfaces/exports_model.CommandElement-1.md).[tag](../interfaces/exports_model.CommandElement-1.md#tag)

#### Overrides

[ValueModel](exports_model.ValueModel.md).[tag](exports_model.ValueModel.md#tag)

#### Defined in

packages/matter.js/dist/esm/model/models/CommandModel.d.ts:10

___

### type

• `Optional` **type**: `string`

If an element derives from another element, the name of the parent
element goes here.

#### Implementation of

[CommandElement](../interfaces/exports_model.CommandElement-1.md).[type](../interfaces/exports_model.CommandElement-1.md#type)

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[type](exports_model.ValueModel.md#type)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:15

___

### xref

• `Optional` **xref**: [`CrossReference`](exports_model.Model.CrossReference.md)

Reference to Matter specification document.

#### Implementation of

[CommandElement](../interfaces/exports_model.CommandElement-1.md).[xref](../interfaces/exports_model.CommandElement-1.md#xref)

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[xref](exports_model.ValueModel.md#xref)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:18

___

### Tag

▪ `Static` **Tag**: [`ElementTag`](../enums/exports_model.ElementTag.md)

#### Defined in

packages/matter.js/dist/esm/model/models/CommandModel.d.ts:23

___

### types

▪ `Static` **types**: `Object`

Factory support.  Populated by derivatives upon definition.

#### Index signature

▪ [type: `string`]: (`definition`: `any`) => [`Model`](exports_model.Model-1.md)

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[types](exports_model.ValueModel.md#types)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:78

## Accessors

### access

• `get` **access**(): [`Access`](exports_model.Access-1.md)

Authorization limits.

#### Returns

[`Access`](exports_model.Access-1.md)

#### Implementation of

[CommandElement](../interfaces/exports_model.CommandElement-1.md).[access](../interfaces/exports_model.CommandElement-1.md#access)

#### Inherited from

ValueModel.access

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:29

• `set` **access**(`definition`): `void`

Authorization limits.

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Access`](exports_model.Access-1.md) \| [`Definition`](../modules/exports_model.Access.md#definition) |

#### Returns

`void`

#### Implementation of

[CommandElement](../interfaces/exports_model.CommandElement-1.md).[access](../interfaces/exports_model.CommandElement-1.md#access)

#### Inherited from

ValueModel.access

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:30

___

### allowedBaseTags

• `get` **allowedBaseTags**(): [`ElementTag`](../enums/exports_model.ElementTag.md)[]

ValueModels may derive from models of the same type or from generic
Datatype models.

#### Returns

[`ElementTag`](../enums/exports_model.ElementTag.md)[]

#### Inherited from

ValueModel.allowedBaseTags

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:80

___

### base

• `get` **base**(): `undefined` \| [`ValueModel`](exports_model.ValueModel.md)

ValueModels may only derive from ValueModels.

#### Returns

`undefined` \| [`ValueModel`](exports_model.ValueModel.md)

#### Inherited from

ValueModel.base

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:75

___

### children

• `get` **children**(): [`Children`](../interfaces/exports_model._internal_.Children-1.md)\<[`FieldModel`](exports_model.FieldModel.md), [`FieldElement`](../interfaces/exports_model.FieldElement-1.md)\>

Child elements.

#### Returns

[`Children`](../interfaces/exports_model._internal_.Children-1.md)\<[`FieldModel`](exports_model.FieldModel.md), [`FieldElement`](../interfaces/exports_model.FieldElement-1.md)\>

#### Implementation of

[CommandElement](../interfaces/exports_model.CommandElement-1.md).[children](../interfaces/exports_model.CommandElement-1.md#children)

#### Inherited from

ValueModel.children

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:21

• `set` **children**(`children`): `void`

Child elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | ([`FieldElement`](../interfaces/exports_model.FieldElement-1.md) \| [`FieldModel`](exports_model.FieldModel.md))[] |

#### Returns

`void`

#### Implementation of

[CommandElement](../interfaces/exports_model.CommandElement-1.md).[children](../interfaces/exports_model.CommandElement-1.md#children)

#### Inherited from

ValueModel.children

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:22

___

### conformance

• `get` **conformance**(): [`Conformance`](exports_model.Conformance-1.md)

Optionality control.

#### Returns

[`Conformance`](exports_model.Conformance-1.md)

#### Implementation of

[CommandElement](../interfaces/exports_model.CommandElement-1.md).[conformance](../interfaces/exports_model.CommandElement-1.md#conformance)

#### Inherited from

ValueModel.conformance

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:26

• `set` **conformance**(`definition`): `void`

Optionality control.

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Definition`](../modules/exports_model.Conformance.md#definition) \| [`Conformance`](exports_model.Conformance-1.md) |

#### Returns

`void`

#### Implementation of

[CommandElement](../interfaces/exports_model.CommandElement-1.md).[conformance](../interfaces/exports_model.CommandElement-1.md#conformance)

#### Inherited from

ValueModel.conformance

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:27

___

### constraint

• `get` **constraint**(): [`Constraint`](exports_model.Constraint-1.md)

Limits on values.

#### Returns

[`Constraint`](exports_model.Constraint-1.md)

#### Implementation of

[CommandElement](../interfaces/exports_model.CommandElement-1.md).[constraint](../interfaces/exports_model.CommandElement-1.md#constraint)

#### Inherited from

ValueModel.constraint

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:23

• `set` **constraint**(`definition`): `void`

Limits on values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Definition`](../modules/exports_model.Constraint.md#definition) \| [`Constraint`](exports_model.Constraint-1.md) |

#### Returns

`void`

#### Implementation of

[CommandElement](../interfaces/exports_model.CommandElement-1.md).[constraint](../interfaces/exports_model.CommandElement-1.md#constraint)

#### Inherited from

ValueModel.constraint

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:24

___

### definingModel

• `get` **definingModel**(): `undefined` \| [`ValueModel`](exports_model.ValueModel.md)

Get the first derived ancestor with children, if any.

#### Returns

`undefined` \| [`ValueModel`](exports_model.ValueModel.md)

#### Inherited from

ValueModel.definingModel

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:67

___

### deprecated

• `get` **deprecated**(): `boolean`

Is this model deprecated?

#### Returns

`boolean`

#### Inherited from

ValueModel.deprecated

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:92

___

### directMetatype

• `get` **directMetatype**(): `undefined` \| [`Metatype`](../enums/exports_model.Metatype-1.md)

The metatype for this model's type, ignoring inheritance.

#### Returns

`undefined` \| [`Metatype`](../enums/exports_model.Metatype-1.md)

#### Inherited from

ValueModel.directMetatype

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:63

___

### disallowed

• `get` **disallowed**(): `boolean`

Is this model disallowed?

#### Returns

`boolean`

#### Inherited from

ValueModel.disallowed

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:96

___

### discriminator

• `get` **discriminator**(): [`Direction`](../enums/exports_model.CommandElement.Direction.md)

Commands may re-use the ID for request and response so identification requires the ID in conjunction with the
direction.

#### Returns

[`Direction`](../enums/exports_model.CommandElement.Direction.md)

#### Overrides

ValueModel.discriminator

#### Defined in

packages/matter.js/dist/esm/model/models/CommandModel.d.ts:21

___

### effectiveAccess

• `get` **effectiveAccess**(): [`Access`](exports_model.Access-1.md)

#### Returns

[`Access`](exports_model.Access-1.md)

#### Inherited from

ValueModel.effectiveAccess

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:31

___

### effectiveConformance

• `get` **effectiveConformance**(): [`Conformance`](exports_model.Conformance-1.md)

#### Returns

[`Conformance`](exports_model.Conformance-1.md)

#### Inherited from

ValueModel.effectiveConformance

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:28

___

### effectiveConstraint

• `get` **effectiveConstraint**(): [`Constraint`](exports_model.Constraint-1.md)

#### Returns

[`Constraint`](exports_model.Constraint-1.md)

#### Inherited from

ValueModel.effectiveConstraint

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:25

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

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:59

___

### effectiveId

• `get` **effectiveId**(): `undefined` \| `number`

Allows subclasses to pull a working ID from an alternate source.

#### Returns

`undefined` \| `number`

#### Inherited from

ValueModel.effectiveId

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:57

___

### effectiveMetatype

• `get` **effectiveMetatype**(): `undefined` \| [`Metatype`](../enums/exports_model.Metatype-1.md)

The working metatype for this object.

#### Returns

`undefined` \| [`Metatype`](../enums/exports_model.Metatype-1.md)

#### Inherited from

ValueModel.effectiveMetatype

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:53

___

### effectiveQuality

• `get` **effectiveQuality**(): [`Quality`](exports_model.Quality-1.md)

#### Returns

[`Quality`](exports_model.Quality-1.md)

#### Inherited from

ValueModel.effectiveQuality

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:34

___

### effectiveType

• `get` **effectiveType**(): `undefined` \| `string`

The "effective type" may be inferred from context.

#### Returns

`undefined` \| `string`

#### Inherited from

ValueModel.effectiveType

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:49

___

### effectiveXref

• `get` **effectiveXref**(): `undefined` \| [`CrossReference`](exports_model.Model.CrossReference.md)

A local or parent xref.

#### Returns

`undefined` \| [`CrossReference`](exports_model.Model.CrossReference.md)

#### Inherited from

ValueModel.effectiveXref

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:102

___

### elements

• `get` **elements**(): [`AnyElement`](../modules/exports_model.md#anyelement)[]

Element view of children.  For TypeScript this allows children to be added as elements.  For JavaScript this is
identical to children().

#### Returns

[`AnyElement`](../modules/exports_model.md#anyelement)[]

#### Inherited from

ValueModel.elements

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:53

___

### globalBase

• `get` **globalBase**(): `undefined` \| [`Model`](exports_model.Model-1.md)

Get the first global base type.  This may have semantic meaning more specific than the base primitive type.

#### Returns

`undefined` \| [`Model`](exports_model.Model-1.md)

#### Inherited from

ValueModel.globalBase

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:98

___

### isRequest

• `get` **isRequest**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/model/models/CommandModel.d.ts:14

___

### isResponse

• `get` **isResponse**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/model/models/CommandModel.d.ts:15

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

packages/matter.js/dist/esm/model/models/Model.d.ts:62

___

### listEntry

• `get` **listEntry**(): `undefined` \| [`FieldModel`](exports_model.FieldModel.md)

Get the entry type for lists, if any.

#### Returns

`undefined` \| [`FieldModel`](exports_model.FieldModel.md)

#### Inherited from

ValueModel.listEntry

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:71

___

### mandatory

• `get` **mandatory**(): `boolean`

Is the model mandatory?

#### Returns

`boolean`

#### Inherited from

ValueModel.mandatory

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:104

___

### members

• `get` **members**(): [`FieldModel`](exports_model.FieldModel.md)[]

Retrieve all datatype members.

#### Returns

[`FieldModel`](exports_model.FieldModel.md)[]

#### Inherited from

ValueModel.members

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:84

___

### metabase

• `get` **metabase**(): `undefined` \| [`ValueModel`](exports_model.ValueModel.md)

Metatype is only present on global types with specific semantic meaning.
This model is significant because it gives us information about how to
manipulate the data.  This accessor retrieves this model.

#### Returns

`undefined` \| [`ValueModel`](exports_model.ValueModel.md)

#### Inherited from

ValueModel.metabase

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:40

___

### nullable

• `get` **nullable**(): `boolean`

Can this model be omitted?

#### Returns

`boolean`

#### Inherited from

ValueModel.nullable

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:100

___

### overridesShadow

• `get` **overridesShadow**(): `undefined` \| ``true``

Determine whether this element overrides key properties of its shadow.

#### Returns

`undefined` \| ``true``

#### Inherited from

ValueModel.overridesShadow

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:108

___

### parent

• `get` **parent**(): `undefined` \| [`Model`](exports_model.Model-1.md)

The structural parent.  This is the model for the element that contains this element's definition.

#### Returns

`undefined` \| [`Model`](exports_model.Model-1.md)

#### Inherited from

ValueModel.parent

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:47

• `set` **parent**(`parent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `undefined` \| [`Model`](exports_model.Model-1.md) |

#### Returns

`void`

#### Inherited from

ValueModel.parent

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:48

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

packages/matter.js/dist/esm/model/models/Model.d.ts:43

___

### primitiveBase

• `get` **primitiveBase**(): `undefined` \| [`ValueModel`](exports_model.ValueModel.md)

Get the primitive type for this value model.  This is an integer type
for enums and bitmaps.  Otherwise it's the metabase.

#### Returns

`undefined` \| [`ValueModel`](exports_model.ValueModel.md)

#### Inherited from

ValueModel.primitiveBase

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:45

___

### quality

• `get` **quality**(): [`Quality`](exports_model.Quality-1.md)

Other qualities not covered by conformance or access.

#### Returns

[`Quality`](exports_model.Quality-1.md)

#### Implementation of

[CommandElement](../interfaces/exports_model.CommandElement-1.md).[quality](../interfaces/exports_model.CommandElement-1.md#quality)

#### Inherited from

ValueModel.quality

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:32

• `set` **quality**(`definition`): `void`

Other qualities not covered by conformance or access.

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Definition`](../modules/exports_model.Quality.md#definition) \| [`Quality`](exports_model.Quality-1.md) |

#### Returns

`void`

#### Implementation of

[CommandElement](../interfaces/exports_model.CommandElement-1.md).[quality](../interfaces/exports_model.CommandElement-1.md#quality)

#### Inherited from

ValueModel.quality

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:33

___

### responseModel

• `get` **responseModel**(): [`ValueModel`](exports_model.ValueModel.md)

#### Returns

[`ValueModel`](exports_model.ValueModel.md)

#### Defined in

packages/matter.js/dist/esm/model/models/CommandModel.d.ts:16

___

### shadow

• `get` **shadow**(): `undefined` \| [`Model`](exports_model.Model-1.md)

Get shadow model, if any.  A "shadow" is an element in my parent's inheritance hierarchy that I override.

#### Returns

`undefined` \| [`Model`](exports_model.Model-1.md)

#### Inherited from

ValueModel.shadow

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:94

___

### valid

• `get` **valid**(): `boolean`

Did validation find errors?

#### Returns

`boolean`

#### Inherited from

ValueModel.valid

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:37

___

### validationAspects

• `get` **validationAspects**(): [`Aspect`](exports_model.Aspect.md)\<`any`\>[]

Collect constraints and conformance for this type and all base types.

#### Returns

[`Aspect`](exports_model.Aspect.md)\<`any`\>[]

#### Inherited from

ValueModel.validationAspects

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:88

## Methods

### add

▸ **add**(`...children`): `void`

Add a child.  children.push works too but only accepts models.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...children` | ([`AnyElement`](../modules/exports_model.md#anyelement) \| [`Model`](exports_model.Model-1.md))[] |

#### Returns

`void`

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[add](exports_model.ValueModel.md#add)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:110

___

### all

▸ **all**\<`T`\>(`constructor`): `T`[]

Retrieve all models of a specific element type from local scope.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Model`](exports_model.Model-1.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `constructor` | [`Type`](../modules/exports_model.Model.md#type)\<`T`\> | model class or a predicate object |

#### Returns

`T`[]

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[all](exports_model.ValueModel.md#all)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:120

___

### bitDefinition

▸ **bitDefinition**(`bit`): `undefined` \| [`FieldModel`](exports_model.FieldModel.md)

Search the inheritance chain for a bitmap field defining a specific bit.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bit` | `number` |

#### Returns

`undefined` \| [`FieldModel`](exports_model.FieldModel.md)

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[bitDefinition](exports_model.ValueModel.md#bitdefinition)

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:112

___

### clone

▸ **clone**\<`This`\>(`this`): `This`

Clone the model.  This deep copies all descendant child models but not other properties.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Model`](exports_model.Model-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |

#### Returns

`This`

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[clone](exports_model.ValueModel.md#clone)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:160

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

[ValueModel](exports_model.ValueModel.md).[error](exports_model.ValueModel.md#error)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:132

___

### get

▸ **get**\<`T`\>(`type`, `key`): `undefined` \| `T`

Retrieve a specific model by ID or name.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Model`](exports_model.Model-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Type`](../modules/exports_model.Model.md#type)\<`T`\> |
| `key` | `string` \| `number` |

#### Returns

`undefined` \| `T`

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[get](exports_model.ValueModel.md#get)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:124

___

### instanceOf

▸ **instanceOf**(`other`): `boolean`

Does this model derive from another?

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`AnyElement`](../modules/exports_model.md#anyelement) \| [`Model`](exports_model.Model-1.md) |

#### Returns

`boolean`

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[instanceOf](exports_model.ValueModel.md#instanceof)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:156

___

### member

▸ **member**(`key`, `allowedTags?`): `undefined` \| [`Model`](exports_model.Model-1.md)

Search the inheritance chain for a child property.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`Selector`](../modules/exports_model._internal_.Children.md#selector) |
| `allowedTags?` | [`ElementTag`](../enums/exports_model.ElementTag.md)[] |

#### Returns

`undefined` \| [`Model`](exports_model.Model-1.md)

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[member](exports_model.ValueModel.md#member)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:152

___

### owner

▸ **owner**\<`T`\>(`constructor`): `undefined` \| `T`

Retrieve a model of a specific type from the ownership hierarchy.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Model`](exports_model.Model-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | [`Type`](../modules/exports_model.Model.md#type)\<`T`\> |

#### Returns

`undefined` \| `T`

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[owner](exports_model.ValueModel.md#owner)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:128

___

### references

▸ **references**(`type`): [`Model`](exports_model.Model-1.md)[]

Find all children that reference a specific type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Model`](exports_model.Model-1.md) |

#### Returns

[`Model`](exports_model.Model-1.md)[]

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[references](exports_model.ValueModel.md#references)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:148

___

### toJSON

▸ **toJSON**(): [`AnyElement`](../modules/exports_model.md#anyelement)

Convert model to JSON.

#### Returns

[`AnyElement`](../modules/exports_model.md#anyelement)

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[toJSON](exports_model.ValueModel.md#tojson)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:136

___

### valueOf

▸ **valueOf**(): [`AnyElement`](../modules/exports_model.md#anyelement)

Convert to non-class structure.

#### Returns

[`AnyElement`](../modules/exports_model.md#anyelement)

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[valueOf](exports_model.ValueModel.md#valueof)

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:113

___

### visit

▸ **visit**(`visitor`): `undefined` \| `boolean`

Apply a function to all tree elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `visitor` | (`model`: [`Model`](exports_model.Model-1.md)) => `boolean` \| `void` |

#### Returns

`undefined` \| `boolean`

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[visit](exports_model.ValueModel.md#visit)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:144

___

### create

▸ **create**(`definition`): [`Model`](exports_model.Model-1.md)

Create a model for an element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`AnyElement`](../modules/exports_model.md#anyelement) |

#### Returns

[`Model`](exports_model.Model-1.md)

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[create](exports_model.ValueModel.md#create)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:114
