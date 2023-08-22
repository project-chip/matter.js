[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](../modules/exports_model.md) / Model

# Class: Model

[exports/model](../modules/exports_model.md).Model

A "model" is a class that implements runtime functionality associated with
the corresponding element type.

## Hierarchy

- **`Model`**

  ↳ [`ClusterModel`](exports_model.ClusterModel-1.md)

  ↳ [`DeviceTypeModel`](exports_model.DeviceTypeModel.md)

  ↳ [`EndpointModel`](exports_model.EndpointModel.md)

  ↳ [`FabricModel`](exports_model.FabricModel.md)

  ↳ [`MatterModel`](exports_model.MatterModel-1.md)

  ↳ [`NodeModel`](exports_model.NodeModel.md)

  ↳ [`RequirementModel`](exports_model.RequirementModel.md)

  ↳ [`ValueModel`](exports_model.ValueModel.md)

## Table of contents

### Constructors

- [constructor](exports_model.Model-1.md#constructor)

### Properties

- [[CHILDREN]](exports_model.Model-1.md#[children])
- [[PARENT]](exports_model.Model-1.md#[parent])
- [description](exports_model.Model-1.md#description)
- [details](exports_model.Model-1.md#details)
- [errors](exports_model.Model-1.md#errors)
- [global](exports_model.Model-1.md#global)
- [id](exports_model.Model-1.md#id)
- [isType](exports_model.Model-1.md#istype)
- [isTypeScope](exports_model.Model-1.md#istypescope)
- [name](exports_model.Model-1.md#name)
- [tag](exports_model.Model-1.md#tag)
- [type](exports_model.Model-1.md#type)
- [xref](exports_model.Model-1.md#xref)
- [constructors](exports_model.Model-1.md#constructors)

### Accessors

- [allowedBaseTags](exports_model.Model-1.md#allowedbasetags)
- [base](exports_model.Model-1.md#base)
- [children](exports_model.Model-1.md#children)
- [effectiveId](exports_model.Model-1.md#effectiveid)
- [effectiveType](exports_model.Model-1.md#effectivetype)
- [effectiveXref](exports_model.Model-1.md#effectivexref)
- [elements](exports_model.Model-1.md#elements)
- [globalBase](exports_model.Model-1.md#globalbase)
- [key](exports_model.Model-1.md#key)
- [parent](exports_model.Model-1.md#parent)
- [path](exports_model.Model-1.md#path)
- [shadow](exports_model.Model-1.md#shadow)
- [valid](exports_model.Model-1.md#valid)

### Methods

- [add](exports_model.Model-1.md#add)
- [all](exports_model.Model-1.md#all)
- [error](exports_model.Model-1.md#error)
- [get](exports_model.Model-1.md#get)
- [instanceOf](exports_model.Model-1.md#instanceof)
- [is](exports_model.Model-1.md#is)
- [member](exports_model.Model-1.md#member)
- [owner](exports_model.Model-1.md#owner)
- [references](exports_model.Model-1.md#references)
- [toJSON](exports_model.Model-1.md#tojson)
- [valueOf](exports_model.Model-1.md#valueof)
- [visit](exports_model.Model-1.md#visit)
- [create](exports_model.Model-1.md#create)

## Constructors

### constructor

• **new Model**(`definition`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`BaseElement`](../modules/exports_model.md#baseelement) |

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:163

## Properties

### [CHILDREN]

• `Private` **[CHILDREN]**: `any`

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:36

___

### [PARENT]

• `Private` `Optional` **[PARENT]**: `any`

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:37

___

### description

• `Optional` **description**: `string`

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:20

___

### details

• `Optional` **details**: `string`

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:21

___

### errors

• `Optional` **errors**: [`DefinitionError`](../modules/exports_model.md#definitionerror)[]

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:23

___

### global

• `Optional` **global**: `boolean`

Flag set on elements loaded from Globals.

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:27

___

### id

• `Optional` **id**: `number`

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:17

___

### isType

• `Optional` **isType**: `boolean`

Indicates that an element defines a datatype.

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:35

___

### isTypeScope

• `Optional` **isTypeScope**: `boolean`

Indicates that an element may have type definitions as children.

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:31

___

### name

• **name**: `string`

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:18

___

### tag

• `Readonly` `Abstract` **tag**: [`ElementTag`](../enums/exports_model.ElementTag.md)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:16

___

### type

• `Optional` **type**: `string`

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:19

___

### xref

• `Optional` **xref**: [`CrossReference`](exports_model.Model.CrossReference.md)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:22

___

### constructors

▪ `Static` **constructors**: `Object`

Factory support.  Populated by derivatives upon definition.

#### Index signature

▪ [type: `string`]: (`definition`: `any`) => [`Model`](exports_model.Model-1.md)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:77

## Accessors

### allowedBaseTags

• `get` **allowedBaseTags**(): [`ElementTag`](../enums/exports_model.ElementTag.md)[]

The set of tags from which this model may derive.

#### Returns

[`ElementTag`](../enums/exports_model.ElementTag.md)[]

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:108

___

### base

• `get` **base**(): `undefined` \| [`Model`](exports_model.Model-1.md)

Get a Model for my base type, if any.

#### Returns

`undefined` \| [`Model`](exports_model.Model-1.md)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:90

___

### children

• `get` **children**(): [`Model`](exports_model.Model-1.md)[]

Children of models are always models.

#### Returns

[`Model`](exports_model.Model-1.md)[]

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:69

• `set` **children**(`children`): `void`

Children can be added as models or elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | ([`AnyElement`](../modules/exports_model.md#anyelement) \| [`Model`](exports_model.Model-1.md))[] |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:73

___

### effectiveId

• `get` **effectiveId**(): `undefined` \| `number`

Allows subclasses to pull a working ID from an alternate source.

#### Returns

`undefined` \| `number`

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

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:86

___

### effectiveXref

• `get` **effectiveXref**(): `undefined` \| [`CrossReference`](exports_model.Model.CrossReference.md)

A local or parent xref.

#### Returns

`undefined` \| [`CrossReference`](exports_model.Model.CrossReference.md)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:104

___

### elements

• `get` **elements**(): [`AnyElement`](../modules/exports_model.md#anyelement)[]

Element view of children.  For TypeScript this allows children to be
added as elements.  For JavaScript this is identical to children().

#### Returns

[`AnyElement`](../modules/exports_model.md#anyelement)[]

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:56

___

### globalBase

• `get` **globalBase**(): `undefined` \| [`Model`](exports_model.Model-1.md)

Get the first global base type.  This may have semantic meaning more
specific than the base primitive type.

#### Returns

`undefined` \| [`Model`](exports_model.Model-1.md)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:100

___

### key

• `get` **key**(): `undefined` \| `string`

Get a string that uniquely identifies this model.  This is normally
the effective ID but some models require a generated identifier.

#### Returns

`undefined` \| `string`

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:65

___

### parent

• `get` **parent**(): `undefined` \| [`Model`](exports_model.Model-1.md)

The structural parent.  This is the model for the element that contains
this element's definition.

#### Returns

`undefined` \| [`Model`](exports_model.Model-1.md)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:50

• `set` **parent**(`parent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `undefined` \| [`Model`](exports_model.Model-1.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:51

___

### path

• `get` **path**(): `string`

The full path ("." delimited) in the Matter tree.

#### Returns

`string`

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:45

___

### shadow

• `get` **shadow**(): `undefined` \| [`Model`](exports_model.Model-1.md)

Get shadow model, if any.  A "shadow" is an element in my parent's
inheritance hierarchy that I override.

#### Returns

`undefined` \| [`Model`](exports_model.Model-1.md)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:95

___

### valid

• `get` **valid**(): `boolean`

Did validation find errors?

#### Returns

`boolean`

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

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:154

___

### toJSON

▸ **toJSON**(): [`AnyElement`](../modules/exports_model.md#anyelement)

Convert model to JSON.

#### Returns

[`AnyElement`](../modules/exports_model.md#anyelement)

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:142

___

### valueOf

▸ **valueOf**(): [`AnyElement`](../modules/exports_model.md#anyelement)

Convert to non-class structure.

#### Returns

[`AnyElement`](../modules/exports_model.md#anyelement)

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

#### Defined in

packages/matter.js/dist/cjs/model/models/Model.d.ts:116
