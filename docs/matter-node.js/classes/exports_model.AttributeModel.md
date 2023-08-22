[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](../modules/exports_model.md) / AttributeModel

# Class: AttributeModel

[exports/model](../modules/exports_model.md).AttributeModel

Each ValueElement has a corresponding implementation that derives from
this class.

## Hierarchy

- [`ValueModel`](exports_model.ValueModel.md)

  ↳ **`AttributeModel`**

## Implements

- [`AttributeElement`](../modules/exports_model.md#attributeelement)

## Table of contents

### Constructors

- [constructor](exports_model.AttributeModel.md#constructor)

### Properties

- [byteSize](exports_model.AttributeModel.md#bytesize)
- [default](exports_model.AttributeModel.md#default)
- [description](exports_model.AttributeModel.md#description)
- [details](exports_model.AttributeModel.md#details)
- [errors](exports_model.AttributeModel.md#errors)
- [global](exports_model.AttributeModel.md#global)
- [id](exports_model.AttributeModel.md#id)
- [isType](exports_model.AttributeModel.md#istype)
- [isTypeScope](exports_model.AttributeModel.md#istypescope)
- [metatype](exports_model.AttributeModel.md#metatype)
- [name](exports_model.AttributeModel.md#name)
- [tag](exports_model.AttributeModel.md#tag)
- [type](exports_model.AttributeModel.md#type)
- [xref](exports_model.AttributeModel.md#xref)
- [Tag](exports_model.AttributeModel.md#tag-1)
- [constructors](exports_model.AttributeModel.md#constructors)

### Accessors

- [access](exports_model.AttributeModel.md#access)
- [allowedBaseTags](exports_model.AttributeModel.md#allowedbasetags)
- [base](exports_model.AttributeModel.md#base)
- [children](exports_model.AttributeModel.md#children)
- [conformance](exports_model.AttributeModel.md#conformance)
- [constraint](exports_model.AttributeModel.md#constraint)
- [definingModel](exports_model.AttributeModel.md#definingmodel)
- [deprecated](exports_model.AttributeModel.md#deprecated)
- [directMetatype](exports_model.AttributeModel.md#directmetatype)
- [disallowed](exports_model.AttributeModel.md#disallowed)
- [effectiveAccess](exports_model.AttributeModel.md#effectiveaccess)
- [effectiveConformance](exports_model.AttributeModel.md#effectiveconformance)
- [effectiveConstraint](exports_model.AttributeModel.md#effectiveconstraint)
- [effectiveDefault](exports_model.AttributeModel.md#effectivedefault)
- [effectiveId](exports_model.AttributeModel.md#effectiveid)
- [effectiveMetatype](exports_model.AttributeModel.md#effectivemetatype)
- [effectiveQuality](exports_model.AttributeModel.md#effectivequality)
- [effectiveType](exports_model.AttributeModel.md#effectivetype)
- [effectiveXref](exports_model.AttributeModel.md#effectivexref)
- [elements](exports_model.AttributeModel.md#elements)
- [fabricScoped](exports_model.AttributeModel.md#fabricscoped)
- [fixed](exports_model.AttributeModel.md#fixed)
- [globalBase](exports_model.AttributeModel.md#globalbase)
- [key](exports_model.AttributeModel.md#key)
- [listEntry](exports_model.AttributeModel.md#listentry)
- [mandatory](exports_model.AttributeModel.md#mandatory)
- [members](exports_model.AttributeModel.md#members)
- [metabase](exports_model.AttributeModel.md#metabase)
- [nullable](exports_model.AttributeModel.md#nullable)
- [overridesShadow](exports_model.AttributeModel.md#overridesshadow)
- [parent](exports_model.AttributeModel.md#parent)
- [path](exports_model.AttributeModel.md#path)
- [primitiveBase](exports_model.AttributeModel.md#primitivebase)
- [quality](exports_model.AttributeModel.md#quality)
- [shadow](exports_model.AttributeModel.md#shadow)
- [valid](exports_model.AttributeModel.md#valid)
- [validationAspects](exports_model.AttributeModel.md#validationaspects)
- [writable](exports_model.AttributeModel.md#writable)

### Methods

- [add](exports_model.AttributeModel.md#add)
- [all](exports_model.AttributeModel.md#all)
- [bitDefinition](exports_model.AttributeModel.md#bitdefinition)
- [error](exports_model.AttributeModel.md#error)
- [get](exports_model.AttributeModel.md#get)
- [instanceOf](exports_model.AttributeModel.md#instanceof)
- [is](exports_model.AttributeModel.md#is)
- [member](exports_model.AttributeModel.md#member)
- [owner](exports_model.AttributeModel.md#owner)
- [references](exports_model.AttributeModel.md#references)
- [toJSON](exports_model.AttributeModel.md#tojson)
- [valueOf](exports_model.AttributeModel.md#valueof)
- [visit](exports_model.AttributeModel.md#visit)
- [create](exports_model.AttributeModel.md#create)

## Constructors

### constructor

• **new AttributeModel**(`definition`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](../modules/exports_model.AttributeElement.md#properties) |

#### Overrides

[ValueModel](exports_model.ValueModel.md).[constructor](exports_model.ValueModel.md#constructor)

#### Defined in

packages/matter.js/dist/cjs/model/models/AttributeModel.d.ts:15

## Properties

### byteSize

• `Optional` **byteSize**: [`Size`](../modules/exports_model.ValueElement.md#size)

#### Implementation of

AttributeElement.byteSize

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[byteSize](exports_model.ValueModel.md#bytesize)

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:16

___

### default

• `Optional` **default**: [`FieldValue`](../modules/exports_model.md#fieldvalue)

#### Implementation of

AttributeElement.default

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[default](exports_model.ValueModel.md#default)

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:17

___

### description

• `Optional` **description**: `string`

#### Implementation of

AttributeElement.description

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[description](exports_model.ValueModel.md#description)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:20

___

### details

• `Optional` **details**: `string`

#### Implementation of

AttributeElement.details

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[details](exports_model.ValueModel.md#details)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:21

___

### errors

• `Optional` **errors**: [`DefinitionError`](../modules/exports_model.md#definitionerror)[]

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[errors](exports_model.ValueModel.md#errors)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:23

___

### global

• `Optional` **global**: `boolean`

Flag set on elements loaded from Globals.

#### Implementation of

AttributeElement.global

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[global](exports_model.ValueModel.md#global)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:27

___

### id

• **id**: `number`

#### Implementation of

AttributeElement.id

#### Overrides

[ValueModel](exports_model.ValueModel.md).[id](exports_model.ValueModel.md#id)

#### Defined in

packages/matter.js/dist/cjs/model/models/AttributeModel.d.ts:11

___

### isType

• `Optional` **isType**: `boolean`

Indicates that an element defines a datatype.

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[isType](exports_model.ValueModel.md#istype)

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:19

___

### isTypeScope

• `Optional` **isTypeScope**: `boolean`

Indicates that an element may have type definitions as children.

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[isTypeScope](exports_model.ValueModel.md#istypescope)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:31

___

### metatype

• `Optional` **metatype**: [`Metatype`](../enums/exports_model.Metatype-1.md)

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[metatype](exports_model.ValueModel.md#metatype)

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:18

___

### name

• **name**: `string`

#### Implementation of

AttributeElement.name

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[name](exports_model.ValueModel.md#name)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:18

___

### tag

• **tag**: [`Attribute`](../enums/exports_model.ElementTag.md#attribute)

#### Implementation of

AttributeElement.tag

#### Overrides

[ValueModel](exports_model.ValueModel.md).[tag](exports_model.ValueModel.md#tag)

#### Defined in

packages/matter.js/dist/cjs/model/models/AttributeModel.d.ts:10

___

### type

• `Optional` **type**: `string`

#### Implementation of

AttributeElement.type

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[type](exports_model.ValueModel.md#type)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:19

___

### xref

• `Optional` **xref**: [`CrossReference`](exports_model.Model.CrossReference.md)

#### Implementation of

AttributeElement.xref

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[xref](exports_model.ValueModel.md#xref)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:22

___

### Tag

▪ `Static` **Tag**: [`ElementTag`](../enums/exports_model.ElementTag.md)

#### Defined in

packages/matter.js/dist/cjs/model/models/AttributeModel.d.ts:16

___

### constructors

▪ `Static` **constructors**: `Object`

Factory support.  Populated by derivatives upon definition.

#### Index signature

▪ [type: `string`]: (`definition`: `any`) => [`Model`](exports_model.Model-1.md)

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[constructors](exports_model.ValueModel.md#constructors)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:77

## Accessors

### access

• `get` **access**(): [`Access`](exports_model.Access-1.md)

#### Returns

[`Access`](exports_model.Access-1.md)

#### Implementation of

AttributeElement.access

#### Inherited from

ValueModel.access

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:28

• `set` **access**(`definition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Access`](exports_model.Access-1.md) \| [`Definition`](../modules/exports_model.Access.md#definition) |

#### Returns

`void`

#### Implementation of

AttributeElement.access

#### Inherited from

ValueModel.access

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:29

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

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:79

___

### base

• `get` **base**(): `undefined` \| [`ValueModel`](exports_model.ValueModel.md)

ValueModels may only derive from ValueModels.

#### Returns

`undefined` \| [`ValueModel`](exports_model.ValueModel.md)

#### Inherited from

ValueModel.base

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:74

___

### children

• `get` **children**(): [`DatatypeModel`](exports_model.DatatypeModel.md)[]

Children of models are always models.

#### Returns

[`DatatypeModel`](exports_model.DatatypeModel.md)[]

#### Implementation of

AttributeElement.children

#### Inherited from

ValueModel.children

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:20

• `set` **children**(`children`): `void`

Children can be added as models or elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | ([`DatatypeElement`](../modules/exports_model.md#datatypeelement) \| [`DatatypeModel`](exports_model.DatatypeModel.md))[] |

#### Returns

`void`

#### Implementation of

AttributeElement.children

#### Inherited from

ValueModel.children

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:21

___

### conformance

• `get` **conformance**(): [`Conformance`](exports_model.Conformance-1.md)

#### Returns

[`Conformance`](exports_model.Conformance-1.md)

#### Implementation of

AttributeElement.conformance

#### Inherited from

ValueModel.conformance

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:25

• `set` **conformance**(`definition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Conformance`](exports_model.Conformance-1.md) \| [`Definition`](../modules/exports_model.Conformance.md#definition) |

#### Returns

`void`

#### Implementation of

AttributeElement.conformance

#### Inherited from

ValueModel.conformance

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:26

___

### constraint

• `get` **constraint**(): [`Constraint`](exports_model.Constraint-1.md)

#### Returns

[`Constraint`](exports_model.Constraint-1.md)

#### Implementation of

AttributeElement.constraint

#### Inherited from

ValueModel.constraint

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:22

• `set` **constraint**(`definition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Constraint`](exports_model.Constraint-1.md) \| [`Definition`](../modules/exports_model.Constraint.md#definition) |

#### Returns

`void`

#### Implementation of

AttributeElement.constraint

#### Inherited from

ValueModel.constraint

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:23

___

### definingModel

• `get` **definingModel**(): `undefined` \| [`ValueModel`](exports_model.ValueModel.md)

Get the first derived ancestor with children, if any.

#### Returns

`undefined` \| [`ValueModel`](exports_model.ValueModel.md)

#### Inherited from

ValueModel.definingModel

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:66

___

### deprecated

• `get` **deprecated**(): `boolean`

Is this model deprecated?

#### Returns

`boolean`

#### Inherited from

ValueModel.deprecated

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:91

___

### directMetatype

• `get` **directMetatype**(): `undefined` \| [`Metatype`](../enums/exports_model.Metatype-1.md)

The metatype for this model's type, ignoring inheritance.

#### Returns

`undefined` \| [`Metatype`](../enums/exports_model.Metatype-1.md)

#### Inherited from

ValueModel.directMetatype

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:62

___

### disallowed

• `get` **disallowed**(): `boolean`

Is this model disallowed?

#### Returns

`boolean`

#### Inherited from

ValueModel.disallowed

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:95

___

### effectiveAccess

• `get` **effectiveAccess**(): [`Access`](exports_model.Access-1.md)

#### Returns

[`Access`](exports_model.Access-1.md)

#### Inherited from

ValueModel.effectiveAccess

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:30

___

### effectiveConformance

• `get` **effectiveConformance**(): [`Conformance`](exports_model.Conformance-1.md)

#### Returns

[`Conformance`](exports_model.Conformance-1.md)

#### Inherited from

ValueModel.effectiveConformance

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:27

___

### effectiveConstraint

• `get` **effectiveConstraint**(): [`Constraint`](exports_model.Constraint-1.md)

#### Returns

[`Constraint`](exports_model.Constraint-1.md)

#### Inherited from

ValueModel.effectiveConstraint

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:24

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

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:58

___

### effectiveId

• `get` **effectiveId**(): `undefined` \| `number`

Allows subclasses to pull a working ID from an alternate source.

#### Returns

`undefined` \| `number`

#### Inherited from

ValueModel.effectiveId

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:60

___

### effectiveMetatype

• `get` **effectiveMetatype**(): `undefined` \| [`Metatype`](../enums/exports_model.Metatype-1.md)

The working metatype for this object.

#### Returns

`undefined` \| [`Metatype`](../enums/exports_model.Metatype-1.md)

#### Inherited from

ValueModel.effectiveMetatype

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:52

___

### effectiveQuality

• `get` **effectiveQuality**(): [`Quality`](exports_model.Quality-1.md)

#### Returns

[`Quality`](exports_model.Quality-1.md)

#### Inherited from

ValueModel.effectiveQuality

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:33

___

### effectiveType

• `get` **effectiveType**(): `undefined` \| `string`

The "effective type" may be inferred from context.

#### Returns

`undefined` \| `string`

#### Inherited from

ValueModel.effectiveType

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:48

___

### effectiveXref

• `get` **effectiveXref**(): `undefined` \| [`CrossReference`](exports_model.Model.CrossReference.md)

A local or parent xref.

#### Returns

`undefined` \| [`CrossReference`](exports_model.Model.CrossReference.md)

#### Inherited from

ValueModel.effectiveXref

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:104

___

### elements

• `get` **elements**(): [`AnyElement`](../modules/exports_model.md#anyelement)[]

Element view of children.  For TypeScript this allows children to be
added as elements.  For JavaScript this is identical to children().

#### Returns

[`AnyElement`](../modules/exports_model.md#anyelement)[]

#### Inherited from

ValueModel.elements

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:56

___

### fabricScoped

• `get` **fabricScoped**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/cjs/model/models/AttributeModel.d.ts:13

___

### fixed

• `get` **fixed**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/cjs/model/models/AttributeModel.d.ts:14

___

### globalBase

• `get` **globalBase**(): `undefined` \| [`Model`](exports_model.Model-1.md)

Get the first global base type.  This may have semantic meaning more
specific than the base primitive type.

#### Returns

`undefined` \| [`Model`](exports_model.Model-1.md)

#### Inherited from

ValueModel.globalBase

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:100

___

### key

• `get` **key**(): `undefined` \| `string`

Get a string that uniquely identifies this model.  This is normally
the effective ID but some models require a generated identifier.

#### Returns

`undefined` \| `string`

#### Inherited from

ValueModel.key

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:65

___

### listEntry

• `get` **listEntry**(): `undefined` \| [`DatatypeModel`](exports_model.DatatypeModel.md)

Get the entry type for lists, if any.

#### Returns

`undefined` \| [`DatatypeModel`](exports_model.DatatypeModel.md)

#### Inherited from

ValueModel.listEntry

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:70

___

### mandatory

• `get` **mandatory**(): `boolean`

Is this model mandatory?  This supports a limited subset of conformance
and is only appropriate for field conformance.

#### Returns

`boolean`

#### Inherited from

ValueModel.mandatory

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:104

___

### members

• `get` **members**(): [`DatatypeModel`](exports_model.DatatypeModel.md)[]

Retrieve all datatype members.

#### Returns

[`DatatypeModel`](exports_model.DatatypeModel.md)[]

#### Inherited from

ValueModel.members

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:83

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

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:39

___

### nullable

• `get` **nullable**(): `boolean`

Can this model be omitted?

#### Returns

`boolean`

#### Inherited from

ValueModel.nullable

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:99

___

### overridesShadow

• `get` **overridesShadow**(): `undefined` \| ``true``

Determine whether this element overrides key properties of its shadow.

#### Returns

`undefined` \| ``true``

#### Inherited from

ValueModel.overridesShadow

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:108

___

### parent

• `get` **parent**(): `undefined` \| [`Model`](exports_model.Model-1.md)

The structural parent.  This is the model for the element that contains
this element's definition.

#### Returns

`undefined` \| [`Model`](exports_model.Model-1.md)

#### Inherited from

ValueModel.parent

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:50

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

packages/matter.js/dist/cjs/model/models/Model.d.ts:51

___

### path

• `get` **path**(): `string`

The full path ("." delimited) in the Matter tree.

#### Returns

`string`

#### Inherited from

ValueModel.path

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:45

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

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:44

___

### quality

• `get` **quality**(): [`Quality`](exports_model.Quality-1.md)

#### Returns

[`Quality`](exports_model.Quality-1.md)

#### Implementation of

AttributeElement.quality

#### Inherited from

ValueModel.quality

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:31

• `set` **quality**(`definition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Quality`](exports_model.Quality-1.md) \| [`Definition`](../modules/exports_model.Quality.md#definition) |

#### Returns

`void`

#### Implementation of

AttributeElement.quality

#### Inherited from

ValueModel.quality

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:32

___

### shadow

• `get` **shadow**(): `undefined` \| [`Model`](exports_model.Model-1.md)

Get shadow model, if any.  A "shadow" is an element in my parent's
inheritance hierarchy that I override.

#### Returns

`undefined` \| [`Model`](exports_model.Model-1.md)

#### Inherited from

ValueModel.shadow

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:95

___

### valid

• `get` **valid**(): `boolean`

Did validation find errors?

#### Returns

`boolean`

#### Inherited from

ValueModel.valid

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:41

___

### validationAspects

• `get` **validationAspects**(): [`Aspect`](exports_model.Aspect.md)<`any`\>[]

Collect constraints and conformance for this type and all base types.

#### Returns

[`Aspect`](exports_model.Aspect.md)<`any`\>[]

#### Inherited from

ValueModel.validationAspects

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:87

___

### writable

• `get` **writable**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/cjs/model/models/AttributeModel.d.ts:12

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

packages/matter.js/dist/cjs/model/models/Model.d.ts:112

___

### all

▸ **all**<`T`\>(`constructor`): `T`[]

Retrieve all models of a specific element type from local scope.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Model`](exports_model.Model-1.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `constructor` | [`Constructor`](../modules/exports_model.Model.md#constructor)<`T`\> | model class or a predicate object |

#### Returns

`T`[]

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[all](exports_model.ValueModel.md#all)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:122

___

### bitDefinition

▸ **bitDefinition**(`bit`): `undefined` \| [`DatatypeModel`](exports_model.DatatypeModel.md)

Search the inheritance chain for a bitmap field defining a specific bit.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bit` | `number` |

#### Returns

`undefined` \| [`DatatypeModel`](exports_model.DatatypeModel.md)

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[bitDefinition](exports_model.ValueModel.md#bitdefinition)

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:112

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

packages/matter.js/dist/cjs/model/models/Model.d.ts:138

___

### get

▸ **get**<`T`\>(`constructor`, `key`): `T`

Retrieve a specific model by ID or name.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Model`](exports_model.Model-1.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | [`Constructor`](../modules/exports_model.Model.md#constructor)<`T`\> |
| `key` | `string` \| `number` |

#### Returns

`T`

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[get](exports_model.ValueModel.md#get)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:126

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

packages/matter.js/dist/cjs/model/models/Model.d.ts:162

___

### is

▸ **is**(`key`): `boolean`

Check identity of element by name or ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `undefined` \| [`ElementSelector`](../modules/export._internal_.md#elementselector) |

#### Returns

`boolean`

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[is](exports_model.ValueModel.md#is)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:134

___

### member

▸ **member**(`key`, `allowedTags?`): `undefined` \| [`Model`](exports_model.Model-1.md)

Search the inheritance chain for a child property.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ElementSelector`](../modules/export._internal_.md#elementselector) |
| `allowedTags?` | [`ElementTag`](../enums/exports_model.ElementTag.md)[] |

#### Returns

`undefined` \| [`Model`](exports_model.Model-1.md)

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[member](exports_model.ValueModel.md#member)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:158

___

### owner

▸ **owner**<`T`\>(`constructor`): `undefined` \| `T`

Retrieve a model of a specific type from the ownership hierarchy.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Model`](exports_model.Model-1.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | [`Constructor`](../modules/exports_model.Model.md#constructor)<`T`\> |

#### Returns

`undefined` \| `T`

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[owner](exports_model.ValueModel.md#owner)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:130

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

packages/matter.js/dist/cjs/model/models/Model.d.ts:154

___

### toJSON

▸ **toJSON**(): [`AnyElement`](../modules/exports_model.md#anyelement)

Convert model to JSON.

#### Returns

[`AnyElement`](../modules/exports_model.md#anyelement)

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[toJSON](exports_model.ValueModel.md#tojson)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:142

___

### valueOf

▸ **valueOf**(): [`AnyElement`](../modules/exports_model.md#anyelement)

Convert to non-class structure.

#### Returns

[`AnyElement`](../modules/exports_model.md#anyelement)

#### Inherited from

[ValueModel](exports_model.ValueModel.md).[valueOf](exports_model.ValueModel.md#valueof)

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:113

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

packages/matter.js/dist/cjs/model/models/Model.d.ts:150

___

### create

▸ `Static` **create**(`definition`): [`Model`](exports_model.Model-1.md)

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

packages/matter.js/dist/cjs/model/models/Model.d.ts:116
