[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/model](../README.md) / FieldModel

# Class: FieldModel

A field element defines a field in a list, struct, enum or bitmap.

## Extends

- [`PropertyModel`](PropertyModel.md)

## Implements

- [`FieldElement`](../interfaces/FieldElement.md)

## Constructors

### new FieldModel()

> **new FieldModel**(`definition`): [`FieldModel`](FieldModel.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`Properties`](../namespaces/FieldElement/README.md#properties) |

#### Returns

[`FieldModel`](FieldModel.md)

#### Overrides

[`PropertyModel`](PropertyModel.md).[`constructor`](PropertyModel.md#constructors)

#### Source

packages/matter.js/dist/esm/model/models/FieldModel.d.ts:13

## Properties

### #private

> `private` **#private**: `any`

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`#private`](PropertyModel.md##private)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:13

***

### byteSize?

> `optional` **byteSize**: [`Size`](../namespaces/ValueElement/README.md#size)

Applies to numeric types.

#### Implementation of

[`FieldElement`](../interfaces/FieldElement.md).[`byteSize`](../interfaces/FieldElement.md#bytesize)

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`byteSize`](PropertyModel.md#bytesize)

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:17

***

### default?

> `optional` **default**: [`FieldValue`](../README.md#fieldvalue)

The default value for the element.

#### Implementation of

[`FieldElement`](../interfaces/FieldElement.md).[`default`](../interfaces/FieldElement.md#default)

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`default`](PropertyModel.md#default)

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:18

***

### description?

> `optional` **description**: `string`

A short summary of the element.

#### Implementation of

[`FieldElement`](../interfaces/FieldElement.md).[`description`](../interfaces/FieldElement.md#description)

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`description`](PropertyModel.md#description)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:16

***

### details?

> `optional` **details**: `string`

A paragraph summary of the element.

#### Implementation of

[`FieldElement`](../interfaces/FieldElement.md).[`details`](../interfaces/FieldElement.md#details)

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`details`](PropertyModel.md#details)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:17

***

### errors?

> `optional` **errors**: [`DefinitionError`](../README.md#definitionerror)[]

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`errors`](PropertyModel.md#errors)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:19

***

### global?

> `optional` **global**: `boolean`

Flag set on elements loaded from Globals.

#### Implementation of

[`FieldElement`](../interfaces/FieldElement.md).[`global`](../interfaces/FieldElement.md#global)

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`global`](PropertyModel.md#global)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:25

***

### id?

> `optional` **id**: `number`

Fields must have IDs but they may be implied by the field's position
in its parent.

#### Implementation of

[`FieldElement`](../interfaces/FieldElement.md).[`id`](../interfaces/FieldElement.md#id)

#### Overrides

[`PropertyModel`](PropertyModel.md).[`id`](PropertyModel.md#id)

#### Source

packages/matter.js/dist/esm/model/models/FieldModel.d.ts:11

***

### isGlobalAttribute?

> `optional` **isGlobalAttribute**: `boolean`

#### Overrides

[`PropertyModel`](PropertyModel.md).[`isGlobalAttribute`](PropertyModel.md#isglobalattribute)

#### Source

packages/matter.js/dist/esm/model/models/FieldModel.d.ts:12

***

### isType?

> `optional` **isType**: `boolean`

Indicates that an element defines a datatype.

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`isType`](PropertyModel.md#istype)

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:20

***

### isTypeScope?

> `optional` **isTypeScope**: `boolean`

Indicates that an element may have type definitions as children.

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`isTypeScope`](PropertyModel.md#istypescope)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:29

***

### metatype?

> `optional` **metatype**: [`Metatype`](../enumerations/Metatype.md)

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`metatype`](PropertyModel.md#metatype)

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:19

***

### name

> **name**: `string`

The key used for storing this element.  A "human appropriate" semantic
differentiator.

#### Implementation of

[`FieldElement`](../interfaces/FieldElement.md).[`name`](../interfaces/FieldElement.md#name)

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`name`](PropertyModel.md#name)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:21

***

### tag

> **tag**: [`Field`](../enumerations/ElementTag.md#field)

#### Implementation of

[`FieldElement`](../interfaces/FieldElement.md).[`tag`](../interfaces/FieldElement.md#tag)

#### Overrides

[`PropertyModel`](PropertyModel.md).[`tag`](PropertyModel.md#tag)

#### Source

packages/matter.js/dist/esm/model/models/FieldModel.d.ts:10

***

### type?

> `optional` **type**: `string`

If an element derives from another element, the name of the parent
element goes here.

#### Implementation of

[`FieldElement`](../interfaces/FieldElement.md).[`type`](../interfaces/FieldElement.md#type)

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`type`](PropertyModel.md#type)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:15

***

### xref?

> `optional` **xref**: [`CrossReference`](../namespaces/Model/classes/CrossReference.md)

Reference to Matter specification document.

#### Implementation of

[`FieldElement`](../interfaces/FieldElement.md).[`xref`](../interfaces/FieldElement.md#xref)

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`xref`](PropertyModel.md#xref)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:18

***

### types

> `static` **types**: `object`

Factory support.  Populated by derivatives upon definition.

#### Index signature

 \[`type`: `string`\]: (`definition`) => [`Model`](Model.md)

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`types`](PropertyModel.md#types)

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

Fields may omit their ID.  In this case we use their index within the parent as the ID.

#### Returns

`undefined` \| `number`

#### Source

packages/matter.js/dist/esm/model/models/FieldModel.d.ts:17

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

The key for bitmap fields is actually the constraint which defines the bit range.  All other datatypes use the
default key.

#### Returns

`undefined` \| `string`

#### Source

packages/matter.js/dist/esm/model/models/FieldModel.d.ts:22

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

> `get` **members**(): [`FieldModel`](FieldModel.md)[]

Retrieve all datatype members.

#### Returns

[`FieldModel`](FieldModel.md)[]

#### Source

packages/matter.js/dist/esm/model/models/ValueModel.d.ts:84

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

[`PropertyModel`](PropertyModel.md).[`add`](PropertyModel.md#add)

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

[`PropertyModel`](PropertyModel.md).[`all`](PropertyModel.md#all)

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

[`PropertyModel`](PropertyModel.md).[`bitDefinition`](PropertyModel.md#bitdefinition)

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

[`PropertyModel`](PropertyModel.md).[`clone`](PropertyModel.md#clone)

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

[`PropertyModel`](PropertyModel.md).[`error`](PropertyModel.md#error)

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

[`PropertyModel`](PropertyModel.md).[`get`](PropertyModel.md#get)

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

[`PropertyModel`](PropertyModel.md).[`instanceOf`](PropertyModel.md#instanceof)

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

[`PropertyModel`](PropertyModel.md).[`member`](PropertyModel.md#member)

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

[`PropertyModel`](PropertyModel.md).[`owner`](PropertyModel.md#owner)

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

[`PropertyModel`](PropertyModel.md).[`references`](PropertyModel.md#references)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:148

***

### toJSON()

> **toJSON**(): [`AnyElement`](../README.md#anyelement)

Convert model to JSON.

#### Returns

[`AnyElement`](../README.md#anyelement)

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`toJSON`](PropertyModel.md#tojson)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:136

***

### valueOf()

> **valueOf**(): [`AnyElement`](../README.md#anyelement)

Convert to non-class structure.

#### Returns

[`AnyElement`](../README.md#anyelement)

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`valueOf`](PropertyModel.md#valueof)

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

[`PropertyModel`](PropertyModel.md).[`visit`](PropertyModel.md#visit)

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

[`PropertyModel`](PropertyModel.md).[`create`](PropertyModel.md#create)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:114
