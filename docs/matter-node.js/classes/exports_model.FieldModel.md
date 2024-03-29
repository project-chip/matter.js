[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](../modules/exports_model.md) / FieldModel

# Class: FieldModel

[exports/model](../modules/exports_model.md).FieldModel

A field element defines a field in a list, struct, enum or bitmap.

## Hierarchy

- [`PropertyModel`](exports_model.PropertyModel.md)

  ↳ **`FieldModel`**

## Implements

- [`FieldElement`](../interfaces/exports_model.FieldElement-1.md)

## Table of contents

### Constructors

- [constructor](exports_model.FieldModel.md#constructor)

### Properties

- [#private](exports_model.FieldModel.md##private)
- [byteSize](exports_model.FieldModel.md#bytesize)
- [default](exports_model.FieldModel.md#default)
- [description](exports_model.FieldModel.md#description)
- [details](exports_model.FieldModel.md#details)
- [errors](exports_model.FieldModel.md#errors)
- [global](exports_model.FieldModel.md#global)
- [id](exports_model.FieldModel.md#id)
- [isGlobalAttribute](exports_model.FieldModel.md#isglobalattribute)
- [isType](exports_model.FieldModel.md#istype)
- [isTypeScope](exports_model.FieldModel.md#istypescope)
- [metatype](exports_model.FieldModel.md#metatype)
- [name](exports_model.FieldModel.md#name)
- [tag](exports_model.FieldModel.md#tag)
- [type](exports_model.FieldModel.md#type)
- [xref](exports_model.FieldModel.md#xref)
- [types](exports_model.FieldModel.md#types)

### Accessors

- [access](exports_model.FieldModel.md#access)
- [allowedBaseTags](exports_model.FieldModel.md#allowedbasetags)
- [base](exports_model.FieldModel.md#base)
- [children](exports_model.FieldModel.md#children)
- [conformance](exports_model.FieldModel.md#conformance)
- [constraint](exports_model.FieldModel.md#constraint)
- [definingModel](exports_model.FieldModel.md#definingmodel)
- [deprecated](exports_model.FieldModel.md#deprecated)
- [directMetatype](exports_model.FieldModel.md#directmetatype)
- [disallowed](exports_model.FieldModel.md#disallowed)
- [discriminator](exports_model.FieldModel.md#discriminator)
- [effectiveAccess](exports_model.FieldModel.md#effectiveaccess)
- [effectiveConformance](exports_model.FieldModel.md#effectiveconformance)
- [effectiveConstraint](exports_model.FieldModel.md#effectiveconstraint)
- [effectiveDefault](exports_model.FieldModel.md#effectivedefault)
- [effectiveId](exports_model.FieldModel.md#effectiveid)
- [effectiveMetatype](exports_model.FieldModel.md#effectivemetatype)
- [effectiveQuality](exports_model.FieldModel.md#effectivequality)
- [effectiveType](exports_model.FieldModel.md#effectivetype)
- [effectiveXref](exports_model.FieldModel.md#effectivexref)
- [elements](exports_model.FieldModel.md#elements)
- [globalBase](exports_model.FieldModel.md#globalbase)
- [key](exports_model.FieldModel.md#key)
- [listEntry](exports_model.FieldModel.md#listentry)
- [mandatory](exports_model.FieldModel.md#mandatory)
- [members](exports_model.FieldModel.md#members)
- [metabase](exports_model.FieldModel.md#metabase)
- [nullable](exports_model.FieldModel.md#nullable)
- [overridesShadow](exports_model.FieldModel.md#overridesshadow)
- [parent](exports_model.FieldModel.md#parent)
- [path](exports_model.FieldModel.md#path)
- [primitiveBase](exports_model.FieldModel.md#primitivebase)
- [quality](exports_model.FieldModel.md#quality)
- [shadow](exports_model.FieldModel.md#shadow)
- [valid](exports_model.FieldModel.md#valid)
- [validationAspects](exports_model.FieldModel.md#validationaspects)

### Methods

- [add](exports_model.FieldModel.md#add)
- [all](exports_model.FieldModel.md#all)
- [bitDefinition](exports_model.FieldModel.md#bitdefinition)
- [clone](exports_model.FieldModel.md#clone)
- [error](exports_model.FieldModel.md#error)
- [get](exports_model.FieldModel.md#get)
- [instanceOf](exports_model.FieldModel.md#instanceof)
- [member](exports_model.FieldModel.md#member)
- [owner](exports_model.FieldModel.md#owner)
- [references](exports_model.FieldModel.md#references)
- [toJSON](exports_model.FieldModel.md#tojson)
- [valueOf](exports_model.FieldModel.md#valueof)
- [visit](exports_model.FieldModel.md#visit)
- [create](exports_model.FieldModel.md#create)

## Constructors

### constructor

• **new FieldModel**(`definition`): [`FieldModel`](exports_model.FieldModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](../modules/exports_model.FieldElement.md#properties) |

#### Returns

[`FieldModel`](exports_model.FieldModel.md)

#### Overrides

[PropertyModel](exports_model.PropertyModel.md).[constructor](exports_model.PropertyModel.md#constructor)

#### Defined in

packages/matter.js/dist/esm/model/models/FieldModel.d.ts:13

## Properties

### #private

• `Private` **#private**: `any`

#### Inherited from

[PropertyModel](exports_model.PropertyModel.md).[#private](exports_model.PropertyModel.md##private)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:13

___

### byteSize

• `Optional` **byteSize**: [`Size`](../modules/exports_model.ValueElement.md#size)

Applies to numeric types.

#### Implementation of

[FieldElement](../interfaces/exports_model.FieldElement-1.md).[byteSize](../interfaces/exports_model.FieldElement-1.md#bytesize)

#### Inherited from

[PropertyModel](exports_model.PropertyModel.md).[byteSize](exports_model.PropertyModel.md#bytesize)

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:17

___

### default

• `Optional` **default**: [`FieldValue`](../modules/exports_model.md#fieldvalue)

The default value for the element.

#### Implementation of

[FieldElement](../interfaces/exports_model.FieldElement-1.md).[default](../interfaces/exports_model.FieldElement-1.md#default)

#### Inherited from

[PropertyModel](exports_model.PropertyModel.md).[default](exports_model.PropertyModel.md#default)

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:18

___

### description

• `Optional` **description**: `string`

A short summary of the element.

#### Implementation of

[FieldElement](../interfaces/exports_model.FieldElement-1.md).[description](../interfaces/exports_model.FieldElement-1.md#description)

#### Inherited from

[PropertyModel](exports_model.PropertyModel.md).[description](exports_model.PropertyModel.md#description)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:16

___

### details

• `Optional` **details**: `string`

A paragraph summary of the element.

#### Implementation of

[FieldElement](../interfaces/exports_model.FieldElement-1.md).[details](../interfaces/exports_model.FieldElement-1.md#details)

#### Inherited from

[PropertyModel](exports_model.PropertyModel.md).[details](exports_model.PropertyModel.md#details)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:17

___

### errors

• `Optional` **errors**: [`DefinitionError`](../modules/exports_model.md#definitionerror)[]

#### Inherited from

[PropertyModel](exports_model.PropertyModel.md).[errors](exports_model.PropertyModel.md#errors)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:19

___

### global

• `Optional` **global**: `boolean`

Flag set on elements loaded from Globals.

#### Implementation of

[FieldElement](../interfaces/exports_model.FieldElement-1.md).[global](../interfaces/exports_model.FieldElement-1.md#global)

#### Inherited from

[PropertyModel](exports_model.PropertyModel.md).[global](exports_model.PropertyModel.md#global)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:25

___

### id

• `Optional` **id**: `number`

Fields must have IDs but they may be implied by the field's position
in its parent.

#### Implementation of

[FieldElement](../interfaces/exports_model.FieldElement-1.md).[id](../interfaces/exports_model.FieldElement-1.md#id)

#### Overrides

[PropertyModel](exports_model.PropertyModel.md).[id](exports_model.PropertyModel.md#id)

#### Defined in

packages/matter.js/dist/esm/model/models/FieldModel.d.ts:11

___

### isGlobalAttribute

• `Optional` **isGlobalAttribute**: `boolean`

#### Overrides

[PropertyModel](exports_model.PropertyModel.md).[isGlobalAttribute](exports_model.PropertyModel.md#isglobalattribute)

#### Defined in

packages/matter.js/dist/esm/model/models/FieldModel.d.ts:12

___

### isType

• `Optional` **isType**: `boolean`

Indicates that an element defines a datatype.

#### Inherited from

[PropertyModel](exports_model.PropertyModel.md).[isType](exports_model.PropertyModel.md#istype)

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:20

___

### isTypeScope

• `Optional` **isTypeScope**: `boolean`

Indicates that an element may have type definitions as children.

#### Inherited from

[PropertyModel](exports_model.PropertyModel.md).[isTypeScope](exports_model.PropertyModel.md#istypescope)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:29

___

### metatype

• `Optional` **metatype**: [`Metatype`](../enums/exports_model.Metatype-1.md)

#### Inherited from

[PropertyModel](exports_model.PropertyModel.md).[metatype](exports_model.PropertyModel.md#metatype)

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:19

___

### name

• **name**: `string`

The key used for storing this element.  A "human appropriate" semantic
differentiator.

#### Implementation of

[FieldElement](../interfaces/exports_model.FieldElement-1.md).[name](../interfaces/exports_model.FieldElement-1.md#name)

#### Inherited from

[PropertyModel](exports_model.PropertyModel.md).[name](exports_model.PropertyModel.md#name)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:21

___

### tag

• **tag**: [`Field`](../enums/exports_model.ElementTag.md#field)

#### Implementation of

[FieldElement](../interfaces/exports_model.FieldElement-1.md).[tag](../interfaces/exports_model.FieldElement-1.md#tag)

#### Overrides

[PropertyModel](exports_model.PropertyModel.md).[tag](exports_model.PropertyModel.md#tag)

#### Defined in

packages/matter.js/dist/esm/model/models/FieldModel.d.ts:10

___

### type

• `Optional` **type**: `string`

If an element derives from another element, the name of the parent
element goes here.

#### Implementation of

[FieldElement](../interfaces/exports_model.FieldElement-1.md).[type](../interfaces/exports_model.FieldElement-1.md#type)

#### Inherited from

[PropertyModel](exports_model.PropertyModel.md).[type](exports_model.PropertyModel.md#type)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:15

___

### xref

• `Optional` **xref**: [`CrossReference`](exports_model.Model.CrossReference.md)

Reference to Matter specification document.

#### Implementation of

[FieldElement](../interfaces/exports_model.FieldElement-1.md).[xref](../interfaces/exports_model.FieldElement-1.md#xref)

#### Inherited from

[PropertyModel](exports_model.PropertyModel.md).[xref](exports_model.PropertyModel.md#xref)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:18

___

### types

▪ `Static` **types**: `Object`

Factory support.  Populated by derivatives upon definition.

#### Index signature

▪ [type: `string`]: (`definition`: `any`) => [`Model`](exports_model.Model-1.md)

#### Inherited from

[PropertyModel](exports_model.PropertyModel.md).[types](exports_model.PropertyModel.md#types)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:78

## Accessors

### access

• `get` **access**(): [`Access`](exports_model.Access-1.md)

Authorization limits.

#### Returns

[`Access`](exports_model.Access-1.md)

#### Implementation of

[FieldElement](../interfaces/exports_model.FieldElement-1.md).[access](../interfaces/exports_model.FieldElement-1.md#access)

#### Inherited from

PropertyModel.access

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

[FieldElement](../interfaces/exports_model.FieldElement-1.md).[access](../interfaces/exports_model.FieldElement-1.md#access)

#### Inherited from

PropertyModel.access

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

PropertyModel.allowedBaseTags

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:80

___

### base

• `get` **base**(): `undefined` \| [`ValueModel`](exports_model.ValueModel.md)

ValueModels may only derive from ValueModels.

#### Returns

`undefined` \| [`ValueModel`](exports_model.ValueModel.md)

#### Inherited from

PropertyModel.base

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:75

___

### children

• `get` **children**(): [`Children`](../interfaces/exports_model._internal_.Children-1.md)\<[`FieldModel`](exports_model.FieldModel.md), [`FieldElement`](../interfaces/exports_model.FieldElement-1.md)\>

Children of models are always models.

#### Returns

[`Children`](../interfaces/exports_model._internal_.Children-1.md)\<[`FieldModel`](exports_model.FieldModel.md), [`FieldElement`](../interfaces/exports_model.FieldElement-1.md)\>

#### Implementation of

[FieldElement](../interfaces/exports_model.FieldElement-1.md).[children](../interfaces/exports_model.FieldElement-1.md#children)

#### Inherited from

PropertyModel.children

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:21

• `set` **children**(`children`): `void`

Children can be added as models or elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | ([`FieldElement`](../interfaces/exports_model.FieldElement-1.md) \| [`FieldModel`](exports_model.FieldModel.md))[] |

#### Returns

`void`

#### Implementation of

[FieldElement](../interfaces/exports_model.FieldElement-1.md).[children](../interfaces/exports_model.FieldElement-1.md#children)

#### Inherited from

PropertyModel.children

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:22

___

### conformance

• `get` **conformance**(): [`Conformance`](exports_model.Conformance-1.md)

Optionality control.

#### Returns

[`Conformance`](exports_model.Conformance-1.md)

#### Implementation of

[FieldElement](../interfaces/exports_model.FieldElement-1.md).[conformance](../interfaces/exports_model.FieldElement-1.md#conformance)

#### Inherited from

PropertyModel.conformance

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

[FieldElement](../interfaces/exports_model.FieldElement-1.md).[conformance](../interfaces/exports_model.FieldElement-1.md#conformance)

#### Inherited from

PropertyModel.conformance

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:27

___

### constraint

• `get` **constraint**(): [`Constraint`](exports_model.Constraint-1.md)

Limits on values.

#### Returns

[`Constraint`](exports_model.Constraint-1.md)

#### Implementation of

[FieldElement](../interfaces/exports_model.FieldElement-1.md).[constraint](../interfaces/exports_model.FieldElement-1.md#constraint)

#### Inherited from

PropertyModel.constraint

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

[FieldElement](../interfaces/exports_model.FieldElement-1.md).[constraint](../interfaces/exports_model.FieldElement-1.md#constraint)

#### Inherited from

PropertyModel.constraint

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:24

___

### definingModel

• `get` **definingModel**(): `undefined` \| [`ValueModel`](exports_model.ValueModel.md)

Get the first derived ancestor with children, if any.

#### Returns

`undefined` \| [`ValueModel`](exports_model.ValueModel.md)

#### Inherited from

PropertyModel.definingModel

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:67

___

### deprecated

• `get` **deprecated**(): `boolean`

Is this model deprecated?

#### Returns

`boolean`

#### Inherited from

PropertyModel.deprecated

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:92

___

### directMetatype

• `get` **directMetatype**(): `undefined` \| [`Metatype`](../enums/exports_model.Metatype-1.md)

The metatype for this model's type, ignoring inheritance.

#### Returns

`undefined` \| [`Metatype`](../enums/exports_model.Metatype-1.md)

#### Inherited from

PropertyModel.directMetatype

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:63

___

### disallowed

• `get` **disallowed**(): `boolean`

Is this model disallowed?

#### Returns

`boolean`

#### Inherited from

PropertyModel.disallowed

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:96

___

### discriminator

• `get` **discriminator**(): `undefined` \| `string`

Obtain a discriminator that differentiates different models with the same name

#### Returns

`undefined` \| `string`

#### Inherited from

PropertyModel.discriminator

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:66

___

### effectiveAccess

• `get` **effectiveAccess**(): [`Access`](exports_model.Access-1.md)

#### Returns

[`Access`](exports_model.Access-1.md)

#### Inherited from

PropertyModel.effectiveAccess

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:31

___

### effectiveConformance

• `get` **effectiveConformance**(): [`Conformance`](exports_model.Conformance-1.md)

#### Returns

[`Conformance`](exports_model.Conformance-1.md)

#### Inherited from

PropertyModel.effectiveConformance

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:28

___

### effectiveConstraint

• `get` **effectiveConstraint**(): [`Constraint`](exports_model.Constraint-1.md)

#### Returns

[`Constraint`](exports_model.Constraint-1.md)

#### Inherited from

PropertyModel.effectiveConstraint

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

PropertyModel.effectiveDefault

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:59

___

### effectiveId

• `get` **effectiveId**(): `undefined` \| `number`

Fields may omit their ID.  In this case we use their index within the parent as the ID.

#### Returns

`undefined` \| `number`

#### Overrides

PropertyModel.effectiveId

#### Defined in

packages/matter.js/dist/esm/model/models/FieldModel.d.ts:17

___

### effectiveMetatype

• `get` **effectiveMetatype**(): `undefined` \| [`Metatype`](../enums/exports_model.Metatype-1.md)

The working metatype for this object.

#### Returns

`undefined` \| [`Metatype`](../enums/exports_model.Metatype-1.md)

#### Inherited from

PropertyModel.effectiveMetatype

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:53

___

### effectiveQuality

• `get` **effectiveQuality**(): [`Quality`](exports_model.Quality-1.md)

#### Returns

[`Quality`](exports_model.Quality-1.md)

#### Inherited from

PropertyModel.effectiveQuality

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:34

___

### effectiveType

• `get` **effectiveType**(): `undefined` \| `string`

The "effective type" may be inferred from context.

#### Returns

`undefined` \| `string`

#### Inherited from

PropertyModel.effectiveType

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:49

___

### effectiveXref

• `get` **effectiveXref**(): `undefined` \| [`CrossReference`](exports_model.Model.CrossReference.md)

A local or parent xref.

#### Returns

`undefined` \| [`CrossReference`](exports_model.Model.CrossReference.md)

#### Inherited from

PropertyModel.effectiveXref

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

PropertyModel.elements

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:53

___

### globalBase

• `get` **globalBase**(): `undefined` \| [`Model`](exports_model.Model-1.md)

Get the first global base type.  This may have semantic meaning more specific than the base primitive type.

#### Returns

`undefined` \| [`Model`](exports_model.Model-1.md)

#### Inherited from

PropertyModel.globalBase

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:98

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

packages/matter.js/dist/esm/model/models/FieldModel.d.ts:22

___

### listEntry

• `get` **listEntry**(): `undefined` \| [`FieldModel`](exports_model.FieldModel.md)

Get the entry type for lists, if any.

#### Returns

`undefined` \| [`FieldModel`](exports_model.FieldModel.md)

#### Inherited from

PropertyModel.listEntry

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:71

___

### mandatory

• `get` **mandatory**(): `boolean`

Is the model mandatory?

#### Returns

`boolean`

#### Inherited from

PropertyModel.mandatory

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:104

___

### members

• `get` **members**(): [`FieldModel`](exports_model.FieldModel.md)[]

Retrieve all datatype members.

#### Returns

[`FieldModel`](exports_model.FieldModel.md)[]

#### Inherited from

PropertyModel.members

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

PropertyModel.metabase

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:40

___

### nullable

• `get` **nullable**(): `boolean`

Can this model be omitted?

#### Returns

`boolean`

#### Inherited from

PropertyModel.nullable

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:100

___

### overridesShadow

• `get` **overridesShadow**(): `undefined` \| ``true``

Determine whether this element overrides key properties of its shadow.

#### Returns

`undefined` \| ``true``

#### Inherited from

PropertyModel.overridesShadow

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:108

___

### parent

• `get` **parent**(): `undefined` \| [`Model`](exports_model.Model-1.md)

The structural parent.  This is the model for the element that contains this element's definition.

#### Returns

`undefined` \| [`Model`](exports_model.Model-1.md)

#### Inherited from

PropertyModel.parent

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

PropertyModel.parent

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

PropertyModel.path

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

PropertyModel.primitiveBase

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:45

___

### quality

• `get` **quality**(): [`Quality`](exports_model.Quality-1.md)

Other qualities not covered by conformance or access.

#### Returns

[`Quality`](exports_model.Quality-1.md)

#### Implementation of

[FieldElement](../interfaces/exports_model.FieldElement-1.md).[quality](../interfaces/exports_model.FieldElement-1.md#quality)

#### Inherited from

PropertyModel.quality

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

[FieldElement](../interfaces/exports_model.FieldElement-1.md).[quality](../interfaces/exports_model.FieldElement-1.md#quality)

#### Inherited from

PropertyModel.quality

#### Defined in

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:33

___

### shadow

• `get` **shadow**(): `undefined` \| [`Model`](exports_model.Model-1.md)

Get shadow model, if any.  A "shadow" is an element in my parent's inheritance hierarchy that I override.

#### Returns

`undefined` \| [`Model`](exports_model.Model-1.md)

#### Inherited from

PropertyModel.shadow

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:94

___

### valid

• `get` **valid**(): `boolean`

Did validation find errors?

#### Returns

`boolean`

#### Inherited from

PropertyModel.valid

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:37

___

### validationAspects

• `get` **validationAspects**(): [`Aspect`](exports_model.Aspect.md)\<`any`\>[]

Collect constraints and conformance for this type and all base types.

#### Returns

[`Aspect`](exports_model.Aspect.md)\<`any`\>[]

#### Inherited from

PropertyModel.validationAspects

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

[PropertyModel](exports_model.PropertyModel.md).[add](exports_model.PropertyModel.md#add)

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

[PropertyModel](exports_model.PropertyModel.md).[all](exports_model.PropertyModel.md#all)

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

[PropertyModel](exports_model.PropertyModel.md).[bitDefinition](exports_model.PropertyModel.md#bitdefinition)

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

[PropertyModel](exports_model.PropertyModel.md).[clone](exports_model.PropertyModel.md#clone)

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

[PropertyModel](exports_model.PropertyModel.md).[error](exports_model.PropertyModel.md#error)

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

[PropertyModel](exports_model.PropertyModel.md).[get](exports_model.PropertyModel.md#get)

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

[PropertyModel](exports_model.PropertyModel.md).[instanceOf](exports_model.PropertyModel.md#instanceof)

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

[PropertyModel](exports_model.PropertyModel.md).[member](exports_model.PropertyModel.md#member)

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

[PropertyModel](exports_model.PropertyModel.md).[owner](exports_model.PropertyModel.md#owner)

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

[PropertyModel](exports_model.PropertyModel.md).[references](exports_model.PropertyModel.md#references)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:148

___

### toJSON

▸ **toJSON**(): [`AnyElement`](../modules/exports_model.md#anyelement)

Convert model to JSON.

#### Returns

[`AnyElement`](../modules/exports_model.md#anyelement)

#### Inherited from

[PropertyModel](exports_model.PropertyModel.md).[toJSON](exports_model.PropertyModel.md#tojson)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:136

___

### valueOf

▸ **valueOf**(): [`AnyElement`](../modules/exports_model.md#anyelement)

Convert to non-class structure.

#### Returns

[`AnyElement`](../modules/exports_model.md#anyelement)

#### Inherited from

[PropertyModel](exports_model.PropertyModel.md).[valueOf](exports_model.PropertyModel.md#valueof)

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

[PropertyModel](exports_model.PropertyModel.md).[visit](exports_model.PropertyModel.md#visit)

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

[PropertyModel](exports_model.PropertyModel.md).[create](exports_model.PropertyModel.md#create)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:114
