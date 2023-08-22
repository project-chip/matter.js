[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](../modules/exports_model.md) / ValueModel

# Class: ValueModel

[exports/model](../modules/exports_model.md).ValueModel

Each ValueElement has a corresponding implementation that derives from
this class.

## Hierarchy

- [`Model`](exports_model.Model-1.md)

  ↳ **`ValueModel`**

  ↳↳ [`AttributeModel`](exports_model.AttributeModel.md)

  ↳↳ [`CommandModel`](exports_model.CommandModel.md)

  ↳↳ [`DatatypeModel`](exports_model.DatatypeModel.md)

  ↳↳ [`EventModel`](exports_model.EventModel.md)

## Implements

- [`ValueElement`](../modules/exports_model.md#valueelement)

## Table of contents

### Constructors

- [constructor](exports_model.ValueModel.md#constructor)

### Properties

- [byteSize](exports_model.ValueModel.md#bytesize)
- [default](exports_model.ValueModel.md#default)
- [description](exports_model.ValueModel.md#description)
- [details](exports_model.ValueModel.md#details)
- [errors](exports_model.ValueModel.md#errors)
- [global](exports_model.ValueModel.md#global)
- [id](exports_model.ValueModel.md#id)
- [isType](exports_model.ValueModel.md#istype)
- [isTypeScope](exports_model.ValueModel.md#istypescope)
- [metatype](exports_model.ValueModel.md#metatype)
- [name](exports_model.ValueModel.md#name)
- [tag](exports_model.ValueModel.md#tag)
- [type](exports_model.ValueModel.md#type)
- [xref](exports_model.ValueModel.md#xref)
- [constructors](exports_model.ValueModel.md#constructors)

### Accessors

- [access](exports_model.ValueModel.md#access)
- [allowedBaseTags](exports_model.ValueModel.md#allowedbasetags)
- [base](exports_model.ValueModel.md#base)
- [children](exports_model.ValueModel.md#children)
- [conformance](exports_model.ValueModel.md#conformance)
- [constraint](exports_model.ValueModel.md#constraint)
- [definingModel](exports_model.ValueModel.md#definingmodel)
- [deprecated](exports_model.ValueModel.md#deprecated)
- [directMetatype](exports_model.ValueModel.md#directmetatype)
- [disallowed](exports_model.ValueModel.md#disallowed)
- [effectiveAccess](exports_model.ValueModel.md#effectiveaccess)
- [effectiveConformance](exports_model.ValueModel.md#effectiveconformance)
- [effectiveConstraint](exports_model.ValueModel.md#effectiveconstraint)
- [effectiveDefault](exports_model.ValueModel.md#effectivedefault)
- [effectiveId](exports_model.ValueModel.md#effectiveid)
- [effectiveMetatype](exports_model.ValueModel.md#effectivemetatype)
- [effectiveQuality](exports_model.ValueModel.md#effectivequality)
- [effectiveType](exports_model.ValueModel.md#effectivetype)
- [effectiveXref](exports_model.ValueModel.md#effectivexref)
- [elements](exports_model.ValueModel.md#elements)
- [globalBase](exports_model.ValueModel.md#globalbase)
- [key](exports_model.ValueModel.md#key)
- [listEntry](exports_model.ValueModel.md#listentry)
- [mandatory](exports_model.ValueModel.md#mandatory)
- [members](exports_model.ValueModel.md#members)
- [metabase](exports_model.ValueModel.md#metabase)
- [nullable](exports_model.ValueModel.md#nullable)
- [overridesShadow](exports_model.ValueModel.md#overridesshadow)
- [parent](exports_model.ValueModel.md#parent)
- [path](exports_model.ValueModel.md#path)
- [primitiveBase](exports_model.ValueModel.md#primitivebase)
- [quality](exports_model.ValueModel.md#quality)
- [shadow](exports_model.ValueModel.md#shadow)
- [valid](exports_model.ValueModel.md#valid)
- [validationAspects](exports_model.ValueModel.md#validationaspects)

### Methods

- [add](exports_model.ValueModel.md#add)
- [all](exports_model.ValueModel.md#all)
- [bitDefinition](exports_model.ValueModel.md#bitdefinition)
- [error](exports_model.ValueModel.md#error)
- [get](exports_model.ValueModel.md#get)
- [instanceOf](exports_model.ValueModel.md#instanceof)
- [is](exports_model.ValueModel.md#is)
- [member](exports_model.ValueModel.md#member)
- [owner](exports_model.ValueModel.md#owner)
- [references](exports_model.ValueModel.md#references)
- [toJSON](exports_model.ValueModel.md#tojson)
- [valueOf](exports_model.ValueModel.md#valueof)
- [visit](exports_model.ValueModel.md#visit)
- [create](exports_model.ValueModel.md#create)

## Constructors

### constructor

• **new ValueModel**(`definition`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](../modules/exports_model.ValueElement.md#properties) |

#### Overrides

[Model](exports_model.Model-1.md).[constructor](exports_model.Model-1.md#constructor)

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:114

## Properties

### byteSize

• `Optional` **byteSize**: [`Size`](../modules/exports_model.ValueElement.md#size)

#### Implementation of

ValueElement.byteSize

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:16

___

### default

• `Optional` **default**: [`FieldValue`](../modules/exports_model.md#fieldvalue)

#### Implementation of

ValueElement.default

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:17

___

### description

• `Optional` **description**: `string`

#### Implementation of

ValueElement.description

#### Inherited from

[Model](exports_model.Model-1.md).[description](exports_model.Model-1.md#description)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:20

___

### details

• `Optional` **details**: `string`

#### Implementation of

ValueElement.details

#### Inherited from

[Model](exports_model.Model-1.md).[details](exports_model.Model-1.md#details)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:21

___

### errors

• `Optional` **errors**: [`DefinitionError`](../modules/exports_model.md#definitionerror)[]

#### Inherited from

[Model](exports_model.Model-1.md).[errors](exports_model.Model-1.md#errors)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:23

___

### global

• `Optional` **global**: `boolean`

Flag set on elements loaded from Globals.

#### Implementation of

ValueElement.global

#### Inherited from

[Model](exports_model.Model-1.md).[global](exports_model.Model-1.md#global)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:27

___

### id

• `Optional` **id**: `number`

#### Implementation of

ValueElement.id

#### Inherited from

[Model](exports_model.Model-1.md).[id](exports_model.Model-1.md#id)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:17

___

### isType

• `Optional` **isType**: `boolean`

Indicates that an element defines a datatype.

#### Overrides

[Model](exports_model.Model-1.md).[isType](exports_model.Model-1.md#istype)

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:19

___

### isTypeScope

• `Optional` **isTypeScope**: `boolean`

Indicates that an element may have type definitions as children.

#### Inherited from

[Model](exports_model.Model-1.md).[isTypeScope](exports_model.Model-1.md#istypescope)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:31

___

### metatype

• `Optional` **metatype**: [`Metatype`](../enums/exports_model.Metatype-1.md)

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:18

___

### name

• **name**: `string`

#### Implementation of

ValueElement.name

#### Inherited from

[Model](exports_model.Model-1.md).[name](exports_model.Model-1.md#name)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:18

___

### tag

• `Readonly` `Abstract` **tag**: [`ElementTag`](../enums/exports_model.ElementTag.md)

#### Inherited from

[Model](exports_model.Model-1.md).[tag](exports_model.Model-1.md#tag)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:16

___

### type

• `Optional` **type**: `string`

#### Implementation of

ValueElement.type

#### Inherited from

[Model](exports_model.Model-1.md).[type](exports_model.Model-1.md#type)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:19

___

### xref

• `Optional` **xref**: [`CrossReference`](exports_model.Model.CrossReference.md)

#### Implementation of

ValueElement.xref

#### Inherited from

[Model](exports_model.Model-1.md).[xref](exports_model.Model-1.md#xref)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:22

___

### constructors

▪ `Static` **constructors**: `Object`

Factory support.  Populated by derivatives upon definition.

#### Index signature

▪ [type: `string`]: (`definition`: `any`) => [`Model`](exports_model.Model-1.md)

#### Inherited from

[Model](exports_model.Model-1.md).[constructors](exports_model.Model-1.md#constructors)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:77

## Accessors

### access

• `get` **access**(): [`Access`](exports_model.Access-1.md)

#### Returns

[`Access`](exports_model.Access-1.md)

#### Implementation of

ValueElement.access

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

ValueElement.access

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:29

___

### allowedBaseTags

• `get` **allowedBaseTags**(): [`ElementTag`](../enums/exports_model.ElementTag.md)[]

ValueModels may derive from models of the same type or from generic
Datatype models.

#### Returns

[`ElementTag`](../enums/exports_model.ElementTag.md)[]

#### Overrides

Model.allowedBaseTags

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:79

___

### base

• `get` **base**(): `undefined` \| [`ValueModel`](exports_model.ValueModel.md)

ValueModels may only derive from ValueModels.

#### Returns

`undefined` \| [`ValueModel`](exports_model.ValueModel.md)

#### Overrides

Model.base

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:74

___

### children

• `get` **children**(): [`DatatypeModel`](exports_model.DatatypeModel.md)[]

Children of models are always models.

#### Returns

[`DatatypeModel`](exports_model.DatatypeModel.md)[]

#### Implementation of

ValueElement.children

#### Overrides

Model.children

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

ValueElement.children

#### Overrides

Model.children

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:21

___

### conformance

• `get` **conformance**(): [`Conformance`](exports_model.Conformance-1.md)

#### Returns

[`Conformance`](exports_model.Conformance-1.md)

#### Implementation of

ValueElement.conformance

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

ValueElement.conformance

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:26

___

### constraint

• `get` **constraint**(): [`Constraint`](exports_model.Constraint-1.md)

#### Returns

[`Constraint`](exports_model.Constraint-1.md)

#### Implementation of

ValueElement.constraint

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

ValueElement.constraint

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:23

___

### definingModel

• `get` **definingModel**(): `undefined` \| [`ValueModel`](exports_model.ValueModel.md)

Get the first derived ancestor with children, if any.

#### Returns

`undefined` \| [`ValueModel`](exports_model.ValueModel.md)

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:66

___

### deprecated

• `get` **deprecated**(): `boolean`

Is this model deprecated?

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:91

___

### directMetatype

• `get` **directMetatype**(): `undefined` \| [`Metatype`](../enums/exports_model.Metatype-1.md)

The metatype for this model's type, ignoring inheritance.

#### Returns

`undefined` \| [`Metatype`](../enums/exports_model.Metatype-1.md)

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:62

___

### disallowed

• `get` **disallowed**(): `boolean`

Is this model disallowed?

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:95

___

### effectiveAccess

• `get` **effectiveAccess**(): [`Access`](exports_model.Access-1.md)

#### Returns

[`Access`](exports_model.Access-1.md)

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:30

___

### effectiveConformance

• `get` **effectiveConformance**(): [`Conformance`](exports_model.Conformance-1.md)

#### Returns

[`Conformance`](exports_model.Conformance-1.md)

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:27

___

### effectiveConstraint

• `get` **effectiveConstraint**(): [`Constraint`](exports_model.Constraint-1.md)

#### Returns

[`Constraint`](exports_model.Constraint-1.md)

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

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:58

___

### effectiveId

• `get` **effectiveId**(): `undefined` \| `number`

Allows subclasses to pull a working ID from an alternate source.

#### Returns

`undefined` \| `number`

#### Inherited from

Model.effectiveId

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:60

___

### effectiveMetatype

• `get` **effectiveMetatype**(): `undefined` \| [`Metatype`](../enums/exports_model.Metatype-1.md)

The working metatype for this object.

#### Returns

`undefined` \| [`Metatype`](../enums/exports_model.Metatype-1.md)

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:52

___

### effectiveQuality

• `get` **effectiveQuality**(): [`Quality`](exports_model.Quality-1.md)

#### Returns

[`Quality`](exports_model.Quality-1.md)

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:33

___

### effectiveType

• `get` **effectiveType**(): `undefined` \| `string`

The "effective type" may be inferred from context.

#### Returns

`undefined` \| `string`

#### Overrides

Model.effectiveType

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:48

___

### effectiveXref

• `get` **effectiveXref**(): `undefined` \| [`CrossReference`](exports_model.Model.CrossReference.md)

A local or parent xref.

#### Returns

`undefined` \| [`CrossReference`](exports_model.Model.CrossReference.md)

#### Inherited from

Model.effectiveXref

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

Model.elements

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:56

___

### globalBase

• `get` **globalBase**(): `undefined` \| [`Model`](exports_model.Model-1.md)

Get the first global base type.  This may have semantic meaning more
specific than the base primitive type.

#### Returns

`undefined` \| [`Model`](exports_model.Model-1.md)

#### Inherited from

Model.globalBase

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

Model.key

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:65

___

### listEntry

• `get` **listEntry**(): `undefined` \| [`DatatypeModel`](exports_model.DatatypeModel.md)

Get the entry type for lists, if any.

#### Returns

`undefined` \| [`DatatypeModel`](exports_model.DatatypeModel.md)

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:70

___

### mandatory

• `get` **mandatory**(): `boolean`

Is this model mandatory?  This supports a limited subset of conformance
and is only appropriate for field conformance.

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:104

___

### members

• `get` **members**(): [`DatatypeModel`](exports_model.DatatypeModel.md)[]

Retrieve all datatype members.

#### Returns

[`DatatypeModel`](exports_model.DatatypeModel.md)[]

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

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:39

___

### nullable

• `get` **nullable**(): `boolean`

Can this model be omitted?

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:99

___

### overridesShadow

• `get` **overridesShadow**(): `undefined` \| ``true``

Determine whether this element overrides key properties of its shadow.

#### Returns

`undefined` \| ``true``

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

Model.parent

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

Model.parent

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:51

___

### path

• `get` **path**(): `string`

The full path ("." delimited) in the Matter tree.

#### Returns

`string`

#### Inherited from

Model.path

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:45

___

### primitiveBase

• `get` **primitiveBase**(): `undefined` \| [`ValueModel`](exports_model.ValueModel.md)

Get the primitive type for this value model.  This is an integer type
for enums and bitmaps.  Otherwise it's the metabase.

#### Returns

`undefined` \| [`ValueModel`](exports_model.ValueModel.md)

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:44

___

### quality

• `get` **quality**(): [`Quality`](exports_model.Quality-1.md)

#### Returns

[`Quality`](exports_model.Quality-1.md)

#### Implementation of

ValueElement.quality

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

ValueElement.quality

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

Model.shadow

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:95

___

### valid

• `get` **valid**(): `boolean`

Did validation find errors?

#### Returns

`boolean`

#### Inherited from

Model.valid

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:41

___

### validationAspects

• `get` **validationAspects**(): [`Aspect`](exports_model.Aspect.md)<`any`\>[]

Collect constraints and conformance for this type and all base types.

#### Returns

[`Aspect`](exports_model.Aspect.md)<`any`\>[]

#### Defined in

packages/matter.js/dist/cjs/model/models/ValueModel.d.ts:87

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

[Model](exports_model.Model-1.md).[add](exports_model.Model-1.md#add)

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

[Model](exports_model.Model-1.md).[all](exports_model.Model-1.md#all)

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

[Model](exports_model.Model-1.md).[error](exports_model.Model-1.md#error)

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

[Model](exports_model.Model-1.md).[get](exports_model.Model-1.md#get)

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

[Model](exports_model.Model-1.md).[instanceOf](exports_model.Model-1.md#instanceof)

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

[Model](exports_model.Model-1.md).[is](exports_model.Model-1.md#is)

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

[Model](exports_model.Model-1.md).[member](exports_model.Model-1.md#member)

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

[Model](exports_model.Model-1.md).[owner](exports_model.Model-1.md#owner)

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

[Model](exports_model.Model-1.md).[references](exports_model.Model-1.md#references)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:154

___

### toJSON

▸ **toJSON**(): [`AnyElement`](../modules/exports_model.md#anyelement)

Convert model to JSON.

#### Returns

[`AnyElement`](../modules/exports_model.md#anyelement)

#### Inherited from

[Model](exports_model.Model-1.md).[toJSON](exports_model.Model-1.md#tojson)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:142

___

### valueOf

▸ **valueOf**(): [`AnyElement`](../modules/exports_model.md#anyelement)

Convert to non-class structure.

#### Returns

[`AnyElement`](../modules/exports_model.md#anyelement)

#### Overrides

[Model](exports_model.Model-1.md).[valueOf](exports_model.Model-1.md#valueof)

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

[Model](exports_model.Model-1.md).[visit](exports_model.Model-1.md#visit)

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

[Model](exports_model.Model-1.md).[create](exports_model.Model-1.md#create)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:116
