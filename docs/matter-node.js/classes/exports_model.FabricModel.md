[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](../modules/exports_model.md) / FabricModel

# Class: FabricModel

[exports/model](../modules/exports_model.md).FabricModel

Runtime representation of a fabric.

## Hierarchy

- [`Model`](exports_model.Model-1.md)

  ↳ **`FabricModel`**

## Implements

- [`FabricElement`](../interfaces/exports_model.FabricElement-1.md)

## Table of contents

### Constructors

- [constructor](exports_model.FabricModel.md#constructor)

### Properties

- [#private](exports_model.FabricModel.md##private)
- [description](exports_model.FabricModel.md#description)
- [details](exports_model.FabricModel.md#details)
- [errors](exports_model.FabricModel.md#errors)
- [global](exports_model.FabricModel.md#global)
- [id](exports_model.FabricModel.md#id)
- [isType](exports_model.FabricModel.md#istype)
- [isTypeScope](exports_model.FabricModel.md#istypescope)
- [name](exports_model.FabricModel.md#name)
- [tag](exports_model.FabricModel.md#tag)
- [type](exports_model.FabricModel.md#type)
- [xref](exports_model.FabricModel.md#xref)
- [types](exports_model.FabricModel.md#types)

### Accessors

- [allowedBaseTags](exports_model.FabricModel.md#allowedbasetags)
- [base](exports_model.FabricModel.md#base)
- [children](exports_model.FabricModel.md#children)
- [discriminator](exports_model.FabricModel.md#discriminator)
- [effectiveId](exports_model.FabricModel.md#effectiveid)
- [effectiveType](exports_model.FabricModel.md#effectivetype)
- [effectiveXref](exports_model.FabricModel.md#effectivexref)
- [elements](exports_model.FabricModel.md#elements)
- [globalBase](exports_model.FabricModel.md#globalbase)
- [key](exports_model.FabricModel.md#key)
- [nodes](exports_model.FabricModel.md#nodes)
- [parent](exports_model.FabricModel.md#parent)
- [path](exports_model.FabricModel.md#path)
- [shadow](exports_model.FabricModel.md#shadow)
- [valid](exports_model.FabricModel.md#valid)

### Methods

- [add](exports_model.FabricModel.md#add)
- [all](exports_model.FabricModel.md#all)
- [clone](exports_model.FabricModel.md#clone)
- [error](exports_model.FabricModel.md#error)
- [get](exports_model.FabricModel.md#get)
- [instanceOf](exports_model.FabricModel.md#instanceof)
- [member](exports_model.FabricModel.md#member)
- [owner](exports_model.FabricModel.md#owner)
- [references](exports_model.FabricModel.md#references)
- [toJSON](exports_model.FabricModel.md#tojson)
- [valueOf](exports_model.FabricModel.md#valueof)
- [visit](exports_model.FabricModel.md#visit)
- [create](exports_model.FabricModel.md#create)

## Constructors

### constructor

• **new FabricModel**(`definition`): [`FabricModel`](exports_model.FabricModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](../modules/exports_model.FabricElement.md#properties) |

#### Returns

[`FabricModel`](exports_model.FabricModel.md)

#### Overrides

[Model](exports_model.Model-1.md).[constructor](exports_model.Model-1.md#constructor)

#### Defined in

packages/matter.js/dist/esm/model/models/FabricModel.d.ts:16

## Properties

### #private

• `Private` **#private**: `any`

#### Inherited from

[Model](exports_model.Model-1.md).[#private](exports_model.Model-1.md##private)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:13

___

### description

• `Optional` **description**: `string`

A short summary of the element.

#### Implementation of

[FabricElement](../interfaces/exports_model.FabricElement-1.md).[description](../interfaces/exports_model.FabricElement-1.md#description)

#### Inherited from

[Model](exports_model.Model-1.md).[description](exports_model.Model-1.md#description)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:16

___

### details

• `Optional` **details**: `string`

A paragraph summary of the element.

#### Implementation of

[FabricElement](../interfaces/exports_model.FabricElement-1.md).[details](../interfaces/exports_model.FabricElement-1.md#details)

#### Inherited from

[Model](exports_model.Model-1.md).[details](exports_model.Model-1.md#details)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:17

___

### errors

• `Optional` **errors**: [`DefinitionError`](../modules/exports_model.md#definitionerror)[]

#### Inherited from

[Model](exports_model.Model-1.md).[errors](exports_model.Model-1.md#errors)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:19

___

### global

• `Optional` **global**: `boolean`

Flag set on elements loaded from Globals.

#### Implementation of

[FabricElement](../interfaces/exports_model.FabricElement-1.md).[global](../interfaces/exports_model.FabricElement-1.md#global)

#### Inherited from

[Model](exports_model.Model-1.md).[global](exports_model.Model-1.md#global)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:25

___

### id

• **id**: `number`

The ID of the element per Matter specification, either global or
context-specific.  A "machine appropriate" semantic differentiator.

#### Implementation of

[FabricElement](../interfaces/exports_model.FabricElement-1.md).[id](../interfaces/exports_model.FabricElement-1.md#id)

#### Overrides

[Model](exports_model.Model-1.md).[id](exports_model.Model-1.md#id)

#### Defined in

packages/matter.js/dist/esm/model/models/FabricModel.d.ts:12

___

### isType

• `Optional` **isType**: `boolean`

Indicates that an element defines a datatype.

#### Inherited from

[Model](exports_model.Model-1.md).[isType](exports_model.Model-1.md#istype)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:33

___

### isTypeScope

• `Optional` **isTypeScope**: `boolean`

Indicates that an element may have type definitions as children.

#### Inherited from

[Model](exports_model.Model-1.md).[isTypeScope](exports_model.Model-1.md#istypescope)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:29

___

### name

• **name**: `string`

The key used for storing this element.  A "human appropriate" semantic
differentiator.

#### Implementation of

[FabricElement](../interfaces/exports_model.FabricElement-1.md).[name](../interfaces/exports_model.FabricElement-1.md#name)

#### Inherited from

[Model](exports_model.Model-1.md).[name](exports_model.Model-1.md#name)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:21

___

### tag

• **tag**: [`Fabric`](../enums/exports_model.ElementTag.md#fabric)

#### Implementation of

[FabricElement](../interfaces/exports_model.FabricElement-1.md).[tag](../interfaces/exports_model.FabricElement-1.md#tag)

#### Overrides

[Model](exports_model.Model-1.md).[tag](exports_model.Model-1.md#tag)

#### Defined in

packages/matter.js/dist/esm/model/models/FabricModel.d.ts:11

___

### type

• `Optional` **type**: `string`

If an element derives from another element, the name of the parent
element goes here.

#### Implementation of

[FabricElement](../interfaces/exports_model.FabricElement-1.md).[type](../interfaces/exports_model.FabricElement-1.md#type)

#### Inherited from

[Model](exports_model.Model-1.md).[type](exports_model.Model-1.md#type)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:15

___

### xref

• `Optional` **xref**: [`CrossReference`](exports_model.Model.CrossReference.md)

Reference to Matter specification document.

#### Implementation of

[FabricElement](../interfaces/exports_model.FabricElement-1.md).[xref](../interfaces/exports_model.FabricElement-1.md#xref)

#### Inherited from

[Model](exports_model.Model-1.md).[xref](exports_model.Model-1.md#xref)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:18

___

### types

▪ `Static` **types**: `Object`

Factory support.  Populated by derivatives upon definition.

#### Index signature

▪ [type: `string`]: (`definition`: `any`) => [`Model`](exports_model.Model-1.md)

#### Inherited from

[Model](exports_model.Model-1.md).[types](exports_model.Model-1.md#types)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:78

## Accessors

### allowedBaseTags

• `get` **allowedBaseTags**(): [`ElementTag`](../enums/exports_model.ElementTag.md)[]

The set of tags from which this model may derive.

#### Returns

[`ElementTag`](../enums/exports_model.ElementTag.md)[]

#### Inherited from

Model.allowedBaseTags

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:106

___

### base

• `get` **base**(): `undefined` \| [`Model`](exports_model.Model-1.md)

Get a Model for my base type, if any.

#### Returns

`undefined` \| [`Model`](exports_model.Model-1.md)

#### Inherited from

Model.base

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:90

___

### children

• `get` **children**(): [`Children`](../interfaces/exports_model._internal_.Children-1.md)\<[`NodeModel`](exports_model.NodeModel.md), [`NodeElement`](../modules/exports_model.md#nodeelement)\>

Child elements.

#### Returns

[`Children`](../interfaces/exports_model._internal_.Children-1.md)\<[`NodeModel`](exports_model.NodeModel.md), [`NodeElement`](../modules/exports_model.md#nodeelement)\>

#### Implementation of

[FabricElement](../interfaces/exports_model.FabricElement-1.md).[children](../interfaces/exports_model.FabricElement-1.md#children)

#### Overrides

Model.children

#### Defined in

packages/matter.js/dist/esm/model/models/FabricModel.d.ts:14

• `set` **children**(`children`): `void`

Child elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | ([`NodeElement`](../modules/exports_model.md#nodeelement) \| [`NodeModel`](exports_model.NodeModel.md))[] |

#### Returns

`void`

#### Implementation of

[FabricElement](../interfaces/exports_model.FabricElement-1.md).[children](../interfaces/exports_model.FabricElement-1.md#children)

#### Overrides

Model.children

#### Defined in

packages/matter.js/dist/esm/model/models/FabricModel.d.ts:15

___

### discriminator

• `get` **discriminator**(): `undefined` \| `string`

Obtain a discriminator that differentiates different models with the same name

#### Returns

`undefined` \| `string`

#### Inherited from

Model.discriminator

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:66

___

### effectiveId

• `get` **effectiveId**(): `undefined` \| `number`

Allows subclasses to pull a working ID from an alternate source.

#### Returns

`undefined` \| `number`

#### Inherited from

Model.effectiveId

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:57

___

### effectiveType

• `get` **effectiveType**(): `undefined` \| `string`

In some circumstances the base type can be inferred.  This inference happens here.

Does not recurse so only returns the direct base type.

#### Returns

`undefined` \| `string`

#### Inherited from

Model.effectiveType

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:86

___

### effectiveXref

• `get` **effectiveXref**(): `undefined` \| [`CrossReference`](exports_model.Model.CrossReference.md)

A local or parent xref.

#### Returns

`undefined` \| [`CrossReference`](exports_model.Model.CrossReference.md)

#### Inherited from

Model.effectiveXref

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

Model.elements

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:53

___

### globalBase

• `get` **globalBase**(): `undefined` \| [`Model`](exports_model.Model-1.md)

Get the first global base type.  This may have semantic meaning more specific than the base primitive type.

#### Returns

`undefined` \| [`Model`](exports_model.Model-1.md)

#### Inherited from

Model.globalBase

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:98

___

### key

• `get` **key**(): `undefined` \| `string`

Get a string that uniquely identifies this model.  This is normally the effective ID but some models require a
generated identifier.

#### Returns

`undefined` \| `string`

#### Inherited from

Model.key

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:62

___

### nodes

• `get` **nodes**(): [`Children`](../interfaces/exports_model._internal_.Children-1.md)\<[`NodeModel`](exports_model.NodeModel.md), [`NodeElement`](../modules/exports_model.md#nodeelement)\>

#### Returns

[`Children`](../interfaces/exports_model._internal_.Children-1.md)\<[`NodeModel`](exports_model.NodeModel.md), [`NodeElement`](../modules/exports_model.md#nodeelement)\>

#### Defined in

packages/matter.js/dist/esm/model/models/FabricModel.d.ts:13

___

### parent

• `get` **parent**(): `undefined` \| [`Model`](exports_model.Model-1.md)

The structural parent.  This is the model for the element that contains this element's definition.

#### Returns

`undefined` \| [`Model`](exports_model.Model-1.md)

#### Inherited from

Model.parent

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

Model.parent

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

Model.path

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:43

___

### shadow

• `get` **shadow**(): `undefined` \| [`Model`](exports_model.Model-1.md)

Get shadow model, if any.  A "shadow" is an element in my parent's inheritance hierarchy that I override.

#### Returns

`undefined` \| [`Model`](exports_model.Model-1.md)

#### Inherited from

Model.shadow

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:94

___

### valid

• `get` **valid**(): `boolean`

Did validation find errors?

#### Returns

`boolean`

#### Inherited from

Model.valid

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:37

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

[Model](exports_model.Model-1.md).[all](exports_model.Model-1.md#all)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:120

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

[Model](exports_model.Model-1.md).[clone](exports_model.Model-1.md#clone)

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

[Model](exports_model.Model-1.md).[error](exports_model.Model-1.md#error)

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

[Model](exports_model.Model-1.md).[get](exports_model.Model-1.md#get)

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

[Model](exports_model.Model-1.md).[instanceOf](exports_model.Model-1.md#instanceof)

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

[Model](exports_model.Model-1.md).[member](exports_model.Model-1.md#member)

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

[Model](exports_model.Model-1.md).[owner](exports_model.Model-1.md#owner)

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

[Model](exports_model.Model-1.md).[references](exports_model.Model-1.md#references)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:148

___

### toJSON

▸ **toJSON**(): [`AnyElement`](../modules/exports_model.md#anyelement)

Convert model to JSON.

#### Returns

[`AnyElement`](../modules/exports_model.md#anyelement)

#### Inherited from

[Model](exports_model.Model-1.md).[toJSON](exports_model.Model-1.md#tojson)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:136

___

### valueOf

▸ **valueOf**(): [`AnyElement`](../modules/exports_model.md#anyelement)

Convert to non-class structure.

#### Returns

[`AnyElement`](../modules/exports_model.md#anyelement)

#### Inherited from

[Model](exports_model.Model-1.md).[valueOf](exports_model.Model-1.md#valueof)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:140

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

[Model](exports_model.Model-1.md).[create](exports_model.Model-1.md#create)

#### Defined in

packages/matter.js/dist/esm/model/models/Model.d.ts:114
