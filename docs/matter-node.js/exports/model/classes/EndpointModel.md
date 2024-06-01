[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/model](../README.md) / EndpointModel

# Class: EndpointModel

Runtime representation of an endpoint.

## Extends

- [`Model`](Model.md)

## Implements

- [`EndpointElement`](../interfaces/EndpointElement.md)

## Constructors

### new EndpointModel()

> **new EndpointModel**(`definition`): [`EndpointModel`](EndpointModel.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`Properties`](../namespaces/EndpointElement/README.md#properties) |

#### Returns

[`EndpointModel`](EndpointModel.md)

#### Overrides

[`Model`](Model.md).[`constructor`](Model.md#constructors)

#### Source

packages/matter.js/dist/esm/model/models/EndpointModel.d.ts:16

## Properties

### #private

> `private` **#private**: `any`

#### Inherited from

[`Model`](Model.md).[`#private`](Model.md##private)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:13

***

### description?

> `optional` **description**: `string`

A short summary of the element.

#### Implementation of

[`EndpointElement`](../interfaces/EndpointElement.md).[`description`](../interfaces/EndpointElement.md#description)

#### Inherited from

[`Model`](Model.md).[`description`](Model.md#description)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:16

***

### details?

> `optional` **details**: `string`

A paragraph summary of the element.

#### Implementation of

[`EndpointElement`](../interfaces/EndpointElement.md).[`details`](../interfaces/EndpointElement.md#details)

#### Inherited from

[`Model`](Model.md).[`details`](Model.md#details)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:17

***

### errors?

> `optional` **errors**: [`DefinitionError`](../README.md#definitionerror)[]

#### Inherited from

[`Model`](Model.md).[`errors`](Model.md#errors)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:19

***

### global?

> `optional` **global**: `boolean`

Flag set on elements loaded from Globals.

#### Implementation of

[`EndpointElement`](../interfaces/EndpointElement.md).[`global`](../interfaces/EndpointElement.md#global)

#### Inherited from

[`Model`](Model.md).[`global`](Model.md#global)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:25

***

### id

> **id**: `number`

The ID of the element per Matter specification, either global or
context-specific.  A "machine appropriate" semantic differentiator.

#### Implementation of

[`EndpointElement`](../interfaces/EndpointElement.md).[`id`](../interfaces/EndpointElement.md#id)

#### Overrides

[`Model`](Model.md).[`id`](Model.md#id)

#### Source

packages/matter.js/dist/esm/model/models/EndpointModel.d.ts:12

***

### isType?

> `optional` **isType**: `boolean`

Indicates that an element defines a datatype.

#### Inherited from

[`Model`](Model.md).[`isType`](Model.md#istype)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:33

***

### isTypeScope?

> `optional` **isTypeScope**: `boolean`

Indicates that an element may have type definitions as children.

#### Inherited from

[`Model`](Model.md).[`isTypeScope`](Model.md#istypescope)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:29

***

### name

> **name**: `string`

The key used for storing this element.  A "human appropriate" semantic
differentiator.

#### Implementation of

[`EndpointElement`](../interfaces/EndpointElement.md).[`name`](../interfaces/EndpointElement.md#name)

#### Inherited from

[`Model`](Model.md).[`name`](Model.md#name)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:21

***

### tag

> **tag**: [`Endpoint`](../enumerations/ElementTag.md#endpoint)

#### Implementation of

[`EndpointElement`](../interfaces/EndpointElement.md).[`tag`](../interfaces/EndpointElement.md#tag)

#### Overrides

[`Model`](Model.md).[`tag`](Model.md#tag)

#### Source

packages/matter.js/dist/esm/model/models/EndpointModel.d.ts:11

***

### type?

> `optional` **type**: `string`

If an element derives from another element, the name of the parent
element goes here.

#### Implementation of

[`EndpointElement`](../interfaces/EndpointElement.md).[`type`](../interfaces/EndpointElement.md#type)

#### Inherited from

[`Model`](Model.md).[`type`](Model.md#type)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:15

***

### xref?

> `optional` **xref**: [`CrossReference`](../namespaces/Model/classes/CrossReference.md)

Reference to Matter specification document.

#### Implementation of

[`EndpointElement`](../interfaces/EndpointElement.md).[`xref`](../interfaces/EndpointElement.md#xref)

#### Inherited from

[`Model`](Model.md).[`xref`](Model.md#xref)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:18

***

### types

> `static` **types**: `object`

Factory support.  Populated by derivatives upon definition.

#### Index signature

 \[`type`: `string`\]: (`definition`) => [`Model`](Model.md)

#### Inherited from

[`Model`](Model.md).[`types`](Model.md#types)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:78

## Accessors

### allowedBaseTags

> `get` **allowedBaseTags**(): [`ElementTag`](../enumerations/ElementTag.md)[]

The set of tags from which this model may derive.

#### Returns

[`ElementTag`](../enumerations/ElementTag.md)[]

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:106

***

### base

> `get` **base**(): `undefined` \| [`Model`](Model.md)

Get a Model for my base type, if any.

#### Returns

`undefined` \| [`Model`](Model.md)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:90

***

### children

> `get` **children**(): [`Children`](../-internal-/interfaces/Children.md)\<[`DeviceTypeModel`](DeviceTypeModel.md), [`DeviceTypeElement`](../interfaces/DeviceTypeElement.md)\>

Child elements.

> `set` **children**(`children`): `void`

Child elements.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `children` | ([`DeviceTypeElement`](../interfaces/DeviceTypeElement.md) \| [`DeviceTypeModel`](DeviceTypeModel.md))[] |

#### Returns

[`Children`](../-internal-/interfaces/Children.md)\<[`DeviceTypeModel`](DeviceTypeModel.md), [`DeviceTypeElement`](../interfaces/DeviceTypeElement.md)\>

#### Source

packages/matter.js/dist/esm/model/models/EndpointModel.d.ts:14

***

### deviceTypes

> `get` **deviceTypes**(): [`Children`](../-internal-/interfaces/Children.md)\<[`DeviceTypeModel`](DeviceTypeModel.md), [`DeviceTypeElement`](../interfaces/DeviceTypeElement.md)\>

#### Returns

[`Children`](../-internal-/interfaces/Children.md)\<[`DeviceTypeModel`](DeviceTypeModel.md), [`DeviceTypeElement`](../interfaces/DeviceTypeElement.md)\>

#### Source

packages/matter.js/dist/esm/model/models/EndpointModel.d.ts:13

***

### discriminator

> `get` **discriminator**(): `undefined` \| `string`

Obtain a discriminator that differentiates different models with the same name

#### Returns

`undefined` \| `string`

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:66

***

### effectiveId

> `get` **effectiveId**(): `undefined` \| `number`

Allows subclasses to pull a working ID from an alternate source.

#### Returns

`undefined` \| `number`

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:57

***

### effectiveType

> `get` **effectiveType**(): `undefined` \| `string`

In some circumstances the base type can be inferred.  This inference happens here.

Does not recurse so only returns the direct base type.

#### Returns

`undefined` \| `string`

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:86

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

### key

> `get` **key**(): `undefined` \| `string`

Get a string that uniquely identifies this model.  This is normally the effective ID but some models require a
generated identifier.

#### Returns

`undefined` \| `string`

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:62

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

[`Model`](Model.md).[`add`](Model.md#add)

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

[`Model`](Model.md).[`all`](Model.md#all)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:120

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

[`Model`](Model.md).[`clone`](Model.md#clone)

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

[`Model`](Model.md).[`error`](Model.md#error)

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

[`Model`](Model.md).[`get`](Model.md#get)

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

[`Model`](Model.md).[`instanceOf`](Model.md#instanceof)

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

[`Model`](Model.md).[`member`](Model.md#member)

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

[`Model`](Model.md).[`owner`](Model.md#owner)

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

[`Model`](Model.md).[`references`](Model.md#references)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:148

***

### toJSON()

> **toJSON**(): [`AnyElement`](../README.md#anyelement)

Convert model to JSON.

#### Returns

[`AnyElement`](../README.md#anyelement)

#### Inherited from

[`Model`](Model.md).[`toJSON`](Model.md#tojson)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:136

***

### valueOf()

> **valueOf**(): [`AnyElement`](../README.md#anyelement)

Convert to non-class structure.

#### Returns

[`AnyElement`](../README.md#anyelement)

#### Inherited from

[`Model`](Model.md).[`valueOf`](Model.md#valueof)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:140

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

[`Model`](Model.md).[`visit`](Model.md#visit)

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

[`Model`](Model.md).[`create`](Model.md#create)

#### Source

packages/matter.js/dist/esm/model/models/Model.d.ts:114
