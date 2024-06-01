[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/model](../README.md) / DatatypeModel

# Class: DatatypeModel

A datatype represents a named, standalone type definition.

## Extends

- [`ValueModel`](ValueModel.md)

## Implements

- [`DatatypeElement`](../interfaces/DatatypeElement.md)

## Constructors

### new DatatypeModel()

> **new DatatypeModel**(`definition`): [`DatatypeModel`](DatatypeModel.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`Properties`](../namespaces/ValueElement/README.md#properties) |

#### Returns

[`DatatypeModel`](DatatypeModel.md)

#### Inherited from

[`ValueModel`](ValueModel.md).[`constructor`](ValueModel.md#constructors)

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:114

## Properties

### #private

> `private` **#private**: `any`

#### Inherited from

[`ValueModel`](ValueModel.md).[`#private`](ValueModel.md##private)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:13

***

### byteSize?

> `optional` **byteSize**: [`Size`](../namespaces/ValueElement/README.md#size)

Applies to numeric types.

#### Implementation of

[`DatatypeElement`](../interfaces/DatatypeElement.md).[`byteSize`](../interfaces/DatatypeElement.md#bytesize)

#### Inherited from

[`ValueModel`](ValueModel.md).[`byteSize`](ValueModel.md#bytesize)

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:17

***

### default?

> `optional` **default**: [`FieldValue`](../README.md#fieldvalue)

The default value for the element.

#### Implementation of

[`DatatypeElement`](../interfaces/DatatypeElement.md).[`default`](../interfaces/DatatypeElement.md#default)

#### Inherited from

[`ValueModel`](ValueModel.md).[`default`](ValueModel.md#default)

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:18

***

### description?

> `optional` **description**: `string`

A short summary of the element.

#### Implementation of

[`DatatypeElement`](../interfaces/DatatypeElement.md).[`description`](../interfaces/DatatypeElement.md#description)

#### Inherited from

[`ValueModel`](ValueModel.md).[`description`](ValueModel.md#description)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:16

***

### details?

> `optional` **details**: `string`

A paragraph summary of the element.

#### Implementation of

[`DatatypeElement`](../interfaces/DatatypeElement.md).[`details`](../interfaces/DatatypeElement.md#details)

#### Inherited from

[`ValueModel`](ValueModel.md).[`details`](ValueModel.md#details)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:17

***

### errors?

> `optional` **errors**: [`DefinitionError`](../README.md#definitionerror)[]

#### Inherited from

[`ValueModel`](ValueModel.md).[`errors`](ValueModel.md#errors)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:19

***

### global?

> `optional` **global**: `boolean`

Flag set on elements loaded from Globals.

#### Implementation of

[`DatatypeElement`](../interfaces/DatatypeElement.md).[`global`](../interfaces/DatatypeElement.md#global)

#### Inherited from

[`ValueModel`](ValueModel.md).[`global`](ValueModel.md#global)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:25

***

### id?

> `optional` **id**: `undefined`

You can only reference a datatype by name.  It does not have an ID.

#### Implementation of

[`DatatypeElement`](../interfaces/DatatypeElement.md).[`id`](../interfaces/DatatypeElement.md#id)

#### Overrides

[`ValueModel`](ValueModel.md).[`id`](ValueModel.md#id)

#### Source

packages/matter.js/dist/esm/model/models/DatatypeModel.d.ts:10

***

### isType?

> `optional` **isType**: `boolean`

Indicates that an element defines a datatype.

#### Inherited from

[`ValueModel`](ValueModel.md).[`isType`](ValueModel.md#istype)

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:20

***

### isTypeScope?

> `optional` **isTypeScope**: `boolean`

Indicates that an element may have type definitions as children.

#### Inherited from

[`ValueModel`](ValueModel.md).[`isTypeScope`](ValueModel.md#istypescope)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:29

***

### metatype?

> `optional` **metatype**: [`Metatype`](../enumerations/Metatype.md)

A "metatype" provides enough semantics for us to translate a value into
a native datatype.  Metatype is only required on global datatypes, and
only when the datatype should map directly to a specific native (JS)
type.

#### Implementation of

[`DatatypeElement`](../interfaces/DatatypeElement.md).[`metatype`](../interfaces/DatatypeElement.md#metatype)

#### Inherited from

[`ValueModel`](ValueModel.md).[`metatype`](ValueModel.md#metatype)

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:19

***

### name

> **name**: `string`

The key used for storing this element.  A "human appropriate" semantic
differentiator.

#### Implementation of

[`DatatypeElement`](../interfaces/DatatypeElement.md).[`name`](../interfaces/DatatypeElement.md#name)

#### Inherited from

[`ValueModel`](ValueModel.md).[`name`](ValueModel.md#name)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:21

***

### tag

> **tag**: [`Datatype`](../enumerations/ElementTag.md#datatype)

#### Implementation of

[`DatatypeElement`](../interfaces/DatatypeElement.md).[`tag`](../interfaces/DatatypeElement.md#tag)

#### Overrides

[`ValueModel`](ValueModel.md).[`tag`](ValueModel.md#tag)

#### Source

packages/matter.js/dist/esm/model/models/DatatypeModel.d.ts:9

***

### type?

> `optional` **type**: `string`

If an element derives from another element, the name of the parent
element goes here.

#### Implementation of

[`DatatypeElement`](../interfaces/DatatypeElement.md).[`type`](../interfaces/DatatypeElement.md#type)

#### Inherited from

[`ValueModel`](ValueModel.md).[`type`](ValueModel.md#type)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:15

***

### xref?

> `optional` **xref**: [`CrossReference`](../namespaces/Model/classes/CrossReference.md)

Reference to Matter specification document.

#### Implementation of

[`DatatypeElement`](../interfaces/DatatypeElement.md).[`xref`](../interfaces/DatatypeElement.md#xref)

#### Inherited from

[`ValueModel`](ValueModel.md).[`xref`](ValueModel.md#xref)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:18

***

### types

> `static` **types**: `object`

Factory support.  Populated by derivatives upon definition.

#### Index signature

 \[`type`: `string`\]: (`definition`) => [`Model`](Model.md)

#### Inherited from

[`ValueModel`](ValueModel.md).[`types`](ValueModel.md#types)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:78

## Accessors

### access

> `get` **access**(): [`Access`](Access.md)

Authorization limits.

> `set` **access**(`definition`): `void`

Authorization limits.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`Access`](Access.md) \| [`Definition`](../namespaces/Access/README.md#definition) |

#### Returns

[`Access`](Access.md)

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:29

***

### allowedBaseTags

> `get` **allowedBaseTags**(): [`ElementTag`](../enumerations/ElementTag.md)[]

ValueModels may derive from models of the same type or from generic
Datatype models.

#### Returns

[`ElementTag`](../enumerations/ElementTag.md)[]

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:80

***

### base

> `get` **base**(): `undefined` \| [`ValueModel`](ValueModel.md)

ValueModels may only derive from ValueModels.

#### Returns

`undefined` \| [`ValueModel`](ValueModel.md)

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:75

***

### children

> `get` **children**(): [`Children`](../-internal-/interfaces/Children.md)\<[`FieldModel`](FieldModel.md), [`FieldElement`](../interfaces/FieldElement.md)\>

Children of models are always models.

> `set` **children**(`children`): `void`

Children can be added as models or elements.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `children` | ([`FieldElement`](../interfaces/FieldElement.md) \| [`FieldModel`](FieldModel.md))[] |

#### Returns

[`Children`](../-internal-/interfaces/Children.md)\<[`FieldModel`](FieldModel.md), [`FieldElement`](../interfaces/FieldElement.md)\>

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:21

***

### conformance

> `get` **conformance**(): [`Conformance`](Conformance.md)

Optionality control.

> `set` **conformance**(`definition`): `void`

Optionality control.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`Definition`](../namespaces/Conformance/README.md#definition) \| [`Conformance`](Conformance.md) |

#### Returns

[`Conformance`](Conformance.md)

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:26

***

### constraint

> `get` **constraint**(): [`Constraint`](Constraint.md)

Limits on values.

> `set` **constraint**(`definition`): `void`

Limits on values.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`Definition`](../namespaces/Constraint/README.md#definition) \| [`Constraint`](Constraint.md) |

#### Returns

[`Constraint`](Constraint.md)

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:23

***

### definingModel

> `get` **definingModel**(): `undefined` \| [`ValueModel`](ValueModel.md)

Get the first derived ancestor with children, if any.

#### Returns

`undefined` \| [`ValueModel`](ValueModel.md)

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:67

***

### directMetatype

> `get` **directMetatype**(): `undefined` \| [`Metatype`](../enumerations/Metatype.md)

The metatype for this model's type, ignoring inheritance.

#### Returns

`undefined` \| [`Metatype`](../enumerations/Metatype.md)

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:63

***

### disallowed

> `get` **disallowed**(): `boolean`

Is this model disallowed?

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:96

***

### discriminator

> `get` **discriminator**(): `undefined` \| `string`

Obtain a discriminator that differentiates different models with the same name

#### Returns

`undefined` \| `string`

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:66

***

### effectiveAccess

> `get` **effectiveAccess**(): [`Access`](Access.md)

#### Returns

[`Access`](Access.md)

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:31

***

### effectiveConformance

> `get` **effectiveConformance**(): [`Conformance`](Conformance.md)

#### Returns

[`Conformance`](Conformance.md)

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:28

***

### effectiveConstraint

> `get` **effectiveConstraint**(): [`Constraint`](Constraint.md)

#### Returns

[`Constraint`](Constraint.md)

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:25

***

### effectiveDefault

> `get` **effectiveDefault**(): `any`

The value to use as a default.  The "default" field has a manually
supplied value but this property decodes the default and/or generates
a default from subfields.

#### Returns

`any`

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:59

***

### effectiveId

> `get` **effectiveId**(): `undefined` \| `number`

Allows subclasses to pull a working ID from an alternate source.

#### Returns

`undefined` \| `number`

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:57

***

### effectiveMetatype

> `get` **effectiveMetatype**(): `undefined` \| [`Metatype`](../enumerations/Metatype.md)

The working metatype for this object.

#### Returns

`undefined` \| [`Metatype`](../enumerations/Metatype.md)

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:53

***

### effectiveQuality

> `get` **effectiveQuality**(): [`Quality`](Quality.md)

#### Returns

[`Quality`](Quality.md)

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:34

***

### effectiveType

> `get` **effectiveType**(): `undefined` \| `string`

The "effective type" may be inferred from context.

#### Returns

`undefined` \| `string`

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:49

***

### effectiveXref

> `get` **effectiveXref**(): `undefined` \| [`CrossReference`](../namespaces/Model/classes/CrossReference.md)

A local or parent xref.

#### Returns

`undefined` \| [`CrossReference`](../namespaces/Model/classes/CrossReference.md)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:102

***

### elements

> `get` **elements**(): [`AnyElement`](../README.md#anyelement)[]

Element view of children.  For TypeScript this allows children to be added as elements.  For JavaScript this is
identical to children().

#### Returns

[`AnyElement`](../README.md#anyelement)[]

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:53

***

### globalBase

> `get` **globalBase**(): `undefined` \| [`Model`](Model.md)

Get the first global base type.  This may have semantic meaning more specific than the base primitive type.

#### Returns

`undefined` \| [`Model`](Model.md)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:98

***

### isDeprecated

> `get` **isDeprecated**(): `boolean`

Is this model deprecated?

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:92

***

### key

> `get` **key**(): `undefined` \| `string`

Get a string that uniquely identifies this model.  This is normally the effective ID but some models require a
generated identifier.

#### Returns

`undefined` \| `string`

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:62

***

### listEntry

> `get` **listEntry**(): `undefined` \| [`FieldModel`](FieldModel.md)

Get the entry type for lists, if any.

#### Returns

`undefined` \| [`FieldModel`](FieldModel.md)

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:71

***

### mandatory

> `get` **mandatory**(): `boolean`

Is the model mandatory?

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:104

***

### members

> `get` **members**(): [`Children`](../-internal-/interfaces/Children.md)\<[`FieldModel`](FieldModel.md), [`FieldElement`](../interfaces/FieldElement.md)\>

Retrieve all datatype members.

#### Returns

[`Children`](../-internal-/interfaces/Children.md)\<[`FieldModel`](FieldModel.md), [`FieldElement`](../interfaces/FieldElement.md)\>

#### Source

packages/matter.js/dist/esm/model/models/DatatypeModel.d.ts:11

***

### metabase

> `get` **metabase**(): `undefined` \| [`ValueModel`](ValueModel.md)

Metatype is only present on global types with specific semantic meaning.
This model is significant because it gives us information about how to
manipulate the data.  This accessor retrieves this model.

#### Returns

`undefined` \| [`ValueModel`](ValueModel.md)

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:40

***

### nullable

> `get` **nullable**(): `boolean`

Can this model be omitted?

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:100

***

### overridesShadow

> `get` **overridesShadow**(): `undefined` \| `true`

Determine whether this element overrides key properties of its shadow.

#### Returns

`undefined` \| `true`

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:108

***

### parent

> `get` **parent**(): `undefined` \| [`Model`](Model.md)

The structural parent.  This is the model for the element that contains this element's definition.

> `set` **parent**(`parent`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `parent` | `undefined` \| [`Model`](Model.md) |

#### Returns

`undefined` \| [`Model`](Model.md)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:47

***

### path

> `get` **path**(): `string`

The path ("." delimited) in the Matter tree.

This is informational and generally tries to adhere to JS API conventions.

#### Returns

`string`

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:43

***

### primitiveBase

> `get` **primitiveBase**(): `undefined` \| [`ValueModel`](ValueModel.md)

Get the primitive type for this value model.  This is an integer type
for enums and bitmaps.  Otherwise it's the metabase.

#### Returns

`undefined` \| [`ValueModel`](ValueModel.md)

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:45

***

### quality

> `get` **quality**(): [`Quality`](Quality.md)

Other qualities not covered by conformance or access.

> `set` **quality**(`definition`): `void`

Other qualities not covered by conformance or access.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`Definition`](../namespaces/Quality/README.md#definition) \| [`Quality`](Quality.md) |

#### Returns

[`Quality`](Quality.md)

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:32

***

### shadow

> `get` **shadow**(): `undefined` \| [`Model`](Model.md)

Get shadow model, if any.  A "shadow" is an element in my parent's inheritance hierarchy that I override.

#### Returns

`undefined` \| [`Model`](Model.md)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:94

***

### valid

> `get` **valid**(): `boolean`

Did validation find errors?

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:37

***

### validationAspects

> `get` **validationAspects**(): [`Aspect`](Aspect.md)\<`any`\>[]

Collect constraints and conformance for this type and all base types.

#### Returns

[`Aspect`](Aspect.md)\<`any`\>[]

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:88

## Methods

### add()

> **add**(...`children`): `void`

Add a child.  children.push works too but only accepts models.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`children` | ([`AnyElement`](../README.md#anyelement) \| [`Model`](Model.md))[] |

#### Returns

`void`

#### Inherited from

[`ValueModel`](ValueModel.md).[`add`](ValueModel.md#add)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:110

***

### all()

> **all**\<`T`\>(`constructor`): `T`[]

Retrieve all models of a specific element type from local scope.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Model`](Model.md) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `constructor` | [`Type`](../namespaces/Model/README.md#typet)\<`T`\> | model class or a predicate object |

#### Returns

`T`[]

#### Inherited from

[`ValueModel`](ValueModel.md).[`all`](ValueModel.md#all)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:120

***

### bitDefinition()

> **bitDefinition**(`bit`): `undefined` \| [`FieldModel`](FieldModel.md)

Search the inheritance chain for a bitmap field defining a specific bit.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `bit` | `number` |

#### Returns

`undefined` \| [`FieldModel`](FieldModel.md)

#### Inherited from

[`ValueModel`](ValueModel.md).[`bitDefinition`](ValueModel.md#bitdefinition)

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:112

***

### clone()

> **clone**\<`This`\>(`this`): `This`

Clone the model.  This deep copies all descendant child models but not other properties.

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Model`](Model.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |

#### Returns

`This`

#### Inherited from

[`ValueModel`](ValueModel.md).[`clone`](ValueModel.md#clone)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:160

***

### error()

> **error**(`code`, `message`): `void`

Record a validation error for this model.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `code` | `string` |
| `message` | `string` |

#### Returns

`void`

#### Inherited from

[`ValueModel`](ValueModel.md).[`error`](ValueModel.md#error)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:132

***

### get()

> **get**\<`T`\>(`type`, `key`): `undefined` \| `T`

Retrieve a specific model by ID or name.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Model`](Model.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`Type`](../namespaces/Model/README.md#typet)\<`T`\> |
| `key` | `string` \| `number` |

#### Returns

`undefined` \| `T`

#### Inherited from

[`ValueModel`](ValueModel.md).[`get`](ValueModel.md#get)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:124

***

### instanceOf()

> **instanceOf**(`other`): `boolean`

Does this model derive from another?

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `other` | [`AnyElement`](../README.md#anyelement) \| [`Model`](Model.md) |

#### Returns

`boolean`

#### Inherited from

[`ValueModel`](ValueModel.md).[`instanceOf`](ValueModel.md#instanceof)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:156

***

### member()

> **member**(`key`, `allowedTags`?): `undefined` \| [`Model`](Model.md)

Search the inheritance chain for a child property.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | [`Selector`](../-internal-/namespaces/Children/README.md#selector) |
| `allowedTags`? | [`ElementTag`](../enumerations/ElementTag.md)[] |

#### Returns

`undefined` \| [`Model`](Model.md)

#### Inherited from

[`ValueModel`](ValueModel.md).[`member`](ValueModel.md#member)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:152

***

### owner()

> **owner**\<`T`\>(`constructor`): `undefined` \| `T`

Retrieve a model of a specific type from the ownership hierarchy.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Model`](Model.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `constructor` | [`Type`](../namespaces/Model/README.md#typet)\<`T`\> |

#### Returns

`undefined` \| `T`

#### Inherited from

[`ValueModel`](ValueModel.md).[`owner`](ValueModel.md#owner)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:128

***

### references()

> **references**(`type`): [`Model`](Model.md)[]

Find all children that reference a specific type.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`Model`](Model.md) |

#### Returns

[`Model`](Model.md)[]

#### Inherited from

[`ValueModel`](ValueModel.md).[`references`](ValueModel.md#references)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:148

***

### toJSON()

> **toJSON**(): [`AnyElement`](../README.md#anyelement)

Convert model to JSON.

#### Returns

[`AnyElement`](../README.md#anyelement)

#### Inherited from

[`ValueModel`](ValueModel.md).[`toJSON`](ValueModel.md#tojson)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:136

***

### valueOf()

> **valueOf**(): [`AnyElement`](../README.md#anyelement)

Convert to non-class structure.

#### Returns

[`AnyElement`](../README.md#anyelement)

#### Inherited from

[`ValueModel`](ValueModel.md).[`valueOf`](ValueModel.md#valueof)

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:113

***

### visit()

> **visit**(`visitor`): `undefined` \| `boolean`

Apply a function to all tree elements.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `visitor` | (`model`) => `boolean` \| `void` |

#### Returns

`undefined` \| `boolean`

#### Inherited from

[`ValueModel`](ValueModel.md).[`visit`](ValueModel.md#visit)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:144

***

### create()

> `static` **create**(`definition`): [`Model`](Model.md)

Create a model for an element.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`AnyElement`](../README.md#anyelement) |

#### Returns

[`Model`](Model.md)

#### Inherited from

[`ValueModel`](ValueModel.md).[`create`](ValueModel.md#create)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:114
