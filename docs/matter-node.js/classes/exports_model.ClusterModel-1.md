[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](../modules/exports_model.md) / ClusterModel

# Class: ClusterModel

[exports/model](../modules/exports_model.md).ClusterModel

A "model" is a class that implements runtime functionality associated with
the corresponding element type.

## Hierarchy

- [`Model`](exports_model.Model-1.md)

  ↳ **`ClusterModel`**

## Table of contents

### Constructors

- [constructor](exports_model.ClusterModel-1.md#constructor)

### Properties

- [classification](exports_model.ClusterModel-1.md#classification)
- [description](exports_model.ClusterModel-1.md#description)
- [details](exports_model.ClusterModel-1.md#details)
- [errors](exports_model.ClusterModel-1.md#errors)
- [global](exports_model.ClusterModel-1.md#global)
- [id](exports_model.ClusterModel-1.md#id)
- [isType](exports_model.ClusterModel-1.md#istype)
- [isTypeScope](exports_model.ClusterModel-1.md#istypescope)
- [name](exports_model.ClusterModel-1.md#name)
- [singleton](exports_model.ClusterModel-1.md#singleton)
- [tag](exports_model.ClusterModel-1.md#tag)
- [type](exports_model.ClusterModel-1.md#type)
- [xref](exports_model.ClusterModel-1.md#xref)
- [constructors](exports_model.ClusterModel-1.md#constructors)

### Accessors

- [allowedBaseTags](exports_model.ClusterModel-1.md#allowedbasetags)
- [attributes](exports_model.ClusterModel-1.md#attributes)
- [base](exports_model.ClusterModel-1.md#base)
- [children](exports_model.ClusterModel-1.md#children)
- [commands](exports_model.ClusterModel-1.md#commands)
- [datatypes](exports_model.ClusterModel-1.md#datatypes)
- [effectiveId](exports_model.ClusterModel-1.md#effectiveid)
- [effectiveType](exports_model.ClusterModel-1.md#effectivetype)
- [effectiveXref](exports_model.ClusterModel-1.md#effectivexref)
- [elements](exports_model.ClusterModel-1.md#elements)
- [events](exports_model.ClusterModel-1.md#events)
- [featureMap](exports_model.ClusterModel-1.md#featuremap)
- [features](exports_model.ClusterModel-1.md#features)
- [globalBase](exports_model.ClusterModel-1.md#globalbase)
- [key](exports_model.ClusterModel-1.md#key)
- [parent](exports_model.ClusterModel-1.md#parent)
- [path](exports_model.ClusterModel-1.md#path)
- [revision](exports_model.ClusterModel-1.md#revision)
- [shadow](exports_model.ClusterModel-1.md#shadow)
- [valid](exports_model.ClusterModel-1.md#valid)

### Methods

- [add](exports_model.ClusterModel-1.md#add)
- [all](exports_model.ClusterModel-1.md#all)
- [error](exports_model.ClusterModel-1.md#error)
- [get](exports_model.ClusterModel-1.md#get)
- [instanceOf](exports_model.ClusterModel-1.md#instanceof)
- [is](exports_model.ClusterModel-1.md#is)
- [member](exports_model.ClusterModel-1.md#member)
- [owner](exports_model.ClusterModel-1.md#owner)
- [references](exports_model.ClusterModel-1.md#references)
- [toJSON](exports_model.ClusterModel-1.md#tojson)
- [valueOf](exports_model.ClusterModel-1.md#valueof)
- [visit](exports_model.ClusterModel-1.md#visit)
- [create](exports_model.ClusterModel-1.md#create)

## Constructors

### constructor

• **new ClusterModel**(`definition`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](../modules/exports_model.ClusterElement.md#properties) |

#### Overrides

[Model](exports_model.Model-1.md).[constructor](exports_model.Model-1.md#constructor)

#### Defined in

packages/matter.js/dist/cjs/model/models/ClusterModel.d.ts:28

## Properties

### classification

• `Optional` **classification**: [`Classification`](../enums/exports_model.ClusterElement.Classification.md)

#### Defined in

packages/matter.js/dist/cjs/model/models/ClusterModel.d.ts:16

___

### description

• `Optional` **description**: `string`

#### Inherited from

[Model](exports_model.Model-1.md).[description](exports_model.Model-1.md#description)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:20

___

### details

• `Optional` **details**: `string`

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

#### Inherited from

[Model](exports_model.Model-1.md).[global](exports_model.Model-1.md#global)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:27

___

### id

• `Optional` **id**: `number`

#### Overrides

[Model](exports_model.Model-1.md).[id](exports_model.Model-1.md#id)

#### Defined in

packages/matter.js/dist/cjs/model/models/ClusterModel.d.ts:15

___

### isType

• `Optional` **isType**: `boolean`

Indicates that an element defines a datatype.

#### Inherited from

[Model](exports_model.Model-1.md).[isType](exports_model.Model-1.md#istype)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:35

___

### isTypeScope

• **isTypeScope**: `boolean`

Indicates that an element may have type definitions as children.

#### Overrides

[Model](exports_model.Model-1.md).[isTypeScope](exports_model.Model-1.md#istypescope)

#### Defined in

packages/matter.js/dist/cjs/model/models/ClusterModel.d.ts:17

___

### name

• **name**: `string`

#### Inherited from

[Model](exports_model.Model-1.md).[name](exports_model.Model-1.md#name)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:18

___

### singleton

• `Optional` **singleton**: `boolean`

#### Defined in

packages/matter.js/dist/cjs/model/models/ClusterModel.d.ts:18

___

### tag

• **tag**: [`Cluster`](../enums/exports_model.ElementTag.md#cluster)

#### Overrides

[Model](exports_model.Model-1.md).[tag](exports_model.Model-1.md#tag)

#### Defined in

packages/matter.js/dist/cjs/model/models/ClusterModel.d.ts:14

___

### type

• `Optional` **type**: `string`

#### Inherited from

[Model](exports_model.Model-1.md).[type](exports_model.Model-1.md#type)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:19

___

### xref

• `Optional` **xref**: [`CrossReference`](exports_model.Model.CrossReference.md)

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

### allowedBaseTags

• `get` **allowedBaseTags**(): [`ElementTag`](../enums/exports_model.ElementTag.md)[]

The set of tags from which this model may derive.

#### Returns

[`ElementTag`](../enums/exports_model.ElementTag.md)[]

#### Inherited from

Model.allowedBaseTags

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:108

___

### attributes

• `get` **attributes**(): [`AttributeModel`](exports_model.AttributeModel.md)[]

#### Returns

[`AttributeModel`](exports_model.AttributeModel.md)[]

#### Defined in

packages/matter.js/dist/cjs/model/models/ClusterModel.d.ts:19

___

### base

• `get` **base**(): `undefined` \| [`Model`](exports_model.Model-1.md)

Get a Model for my base type, if any.

#### Returns

`undefined` \| [`Model`](exports_model.Model-1.md)

#### Inherited from

Model.base

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:90

___

### children

• `get` **children**(): [`Child`](../modules/exports_model.ClusterModel.md#child)[]

Children of models are always models.

#### Returns

[`Child`](../modules/exports_model.ClusterModel.md#child)[]

#### Overrides

Model.children

#### Defined in

packages/matter.js/dist/cjs/model/models/ClusterModel.d.ts:26

• `set` **children**(`children`): `void`

Children can be added as models or elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | ([`Child`](../modules/exports_model.ClusterElement.md#child) \| [`Child`](../modules/exports_model.ClusterModel.md#child))[] |

#### Returns

`void`

#### Overrides

Model.children

#### Defined in

packages/matter.js/dist/cjs/model/models/ClusterModel.d.ts:27

___

### commands

• `get` **commands**(): [`CommandModel`](exports_model.CommandModel.md)[]

#### Returns

[`CommandModel`](exports_model.CommandModel.md)[]

#### Defined in

packages/matter.js/dist/cjs/model/models/ClusterModel.d.ts:20

___

### datatypes

• `get` **datatypes**(): [`DatatypeModel`](exports_model.DatatypeModel.md)[]

#### Returns

[`DatatypeModel`](exports_model.DatatypeModel.md)[]

#### Defined in

packages/matter.js/dist/cjs/model/models/ClusterModel.d.ts:22

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

### effectiveType

• `get` **effectiveType**(): `undefined` \| `string`

In some circumstances the base type can be inferred.  This inference
happens here.

Does not recurse so only returns the direct base type.

#### Returns

`undefined` \| `string`

#### Inherited from

Model.effectiveType

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:86

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

### events

• `get` **events**(): [`EventModel`](exports_model.EventModel.md)[]

#### Returns

[`EventModel`](exports_model.EventModel.md)[]

#### Defined in

packages/matter.js/dist/cjs/model/models/ClusterModel.d.ts:21

___

### featureMap

• `get` **featureMap**(): [`AttributeModel`](exports_model.AttributeModel.md)

#### Returns

[`AttributeModel`](exports_model.AttributeModel.md)

#### Defined in

packages/matter.js/dist/cjs/model/models/ClusterModel.d.ts:25

___

### features

• `get` **features**(): [`DatatypeModel`](exports_model.DatatypeModel.md)[]

#### Returns

[`DatatypeModel`](exports_model.DatatypeModel.md)[]

#### Defined in

packages/matter.js/dist/cjs/model/models/ClusterModel.d.ts:24

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

### revision

• `get` **revision**(): `number`

#### Returns

`number`

#### Defined in

packages/matter.js/dist/cjs/model/models/ClusterModel.d.ts:23

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

#### Inherited from

[Model](exports_model.Model-1.md).[valueOf](exports_model.Model-1.md#valueof)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:146

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
