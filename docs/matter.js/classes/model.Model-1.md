[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](../modules/model.md) / Model

# Class: Model

[model](../modules/model.md).Model

A "model" is a class that implements runtime functionality associated with
the corresponding element type.

## Hierarchy

- **`Model`**

  ↳ [`ClusterModel`](model.ClusterModel-1.md)

  ↳ [`DeviceTypeModel`](model.DeviceTypeModel.md)

  ↳ [`EndpointModel`](model.EndpointModel.md)

  ↳ [`FabricModel`](model.FabricModel.md)

  ↳ [`MatterModel`](model.MatterModel-1.md)

  ↳ [`NodeModel`](model.NodeModel.md)

  ↳ [`RequirementModel`](model.RequirementModel.md)

  ↳ [`ValueModel`](model.ValueModel.md)

## Table of contents

### Constructors

- [constructor](model.Model-1.md#constructor)

### Properties

- [[CHILDREN]](model.Model-1.md#[children])
- [[PARENT]](model.Model-1.md#[parent])
- [description](model.Model-1.md#description)
- [details](model.Model-1.md#details)
- [errors](model.Model-1.md#errors)
- [global](model.Model-1.md#global)
- [id](model.Model-1.md#id)
- [isType](model.Model-1.md#istype)
- [isTypeScope](model.Model-1.md#istypescope)
- [name](model.Model-1.md#name)
- [tag](model.Model-1.md#tag)
- [type](model.Model-1.md#type)
- [xref](model.Model-1.md#xref)
- [constructors](model.Model-1.md#constructors)

### Accessors

- [allowedBaseTags](model.Model-1.md#allowedbasetags)
- [base](model.Model-1.md#base)
- [children](model.Model-1.md#children)
- [effectiveId](model.Model-1.md#effectiveid)
- [effectiveType](model.Model-1.md#effectivetype)
- [effectiveXref](model.Model-1.md#effectivexref)
- [elements](model.Model-1.md#elements)
- [globalBase](model.Model-1.md#globalbase)
- [key](model.Model-1.md#key)
- [parent](model.Model-1.md#parent)
- [path](model.Model-1.md#path)
- [shadow](model.Model-1.md#shadow)
- [valid](model.Model-1.md#valid)

### Methods

- [add](model.Model-1.md#add)
- [all](model.Model-1.md#all)
- [error](model.Model-1.md#error)
- [get](model.Model-1.md#get)
- [instanceOf](model.Model-1.md#instanceof)
- [is](model.Model-1.md#is)
- [member](model.Model-1.md#member)
- [owner](model.Model-1.md#owner)
- [references](model.Model-1.md#references)
- [toJSON](model.Model-1.md#tojson)
- [valueOf](model.Model-1.md#valueof)
- [visit](model.Model-1.md#visit)
- [create](model.Model-1.md#create)

## Constructors

### constructor

• **new Model**(`definition`): [`Model`](model.Model-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`BaseElement`](../modules/model.md#baseelement) |

#### Returns

[`Model`](model.Model-1.md)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:377](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L377)

## Properties

### [CHILDREN]

• `Private` **[CHILDREN]**: `any`[]

#### Defined in

[packages/matter.js/src/model/models/Model.ts:46](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L46)

___

### [PARENT]

• `Private` `Optional` **[PARENT]**: [`Model`](model.Model-1.md)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:47](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L47)

___

### description

• `Optional` **description**: `string`

#### Defined in

[packages/matter.js/src/model/models/Model.ts:26](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L26)

___

### details

• `Optional` **details**: `string`

#### Defined in

[packages/matter.js/src/model/models/Model.ts:27](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L27)

___

### errors

• `Optional` **errors**: [`DefinitionError`](../modules/model.md#definitionerror)[]

#### Defined in

[packages/matter.js/src/model/models/Model.ts:29](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L29)

___

### global

• `Optional` **global**: `boolean`

Flag set on elements loaded from Globals.

#### Defined in

[packages/matter.js/src/model/models/Model.ts:34](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L34)

___

### id

• `Optional` **id**: `number`

#### Defined in

[packages/matter.js/src/model/models/Model.ts:23](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L23)

___

### isType

• `Optional` **isType**: `boolean`

Indicates that an element defines a datatype.

#### Defined in

[packages/matter.js/src/model/models/Model.ts:44](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L44)

___

### isTypeScope

• `Optional` **isTypeScope**: `boolean`

Indicates that an element may have type definitions as children.

#### Defined in

[packages/matter.js/src/model/models/Model.ts:39](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L39)

___

### name

• **name**: `string`

#### Defined in

[packages/matter.js/src/model/models/Model.ts:24](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L24)

___

### tag

• `Readonly` `Abstract` **tag**: [`ElementTag`](../enums/model.ElementTag.md)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:22](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L22)

___

### type

• `Optional` **type**: `string`

#### Defined in

[packages/matter.js/src/model/models/Model.ts:25](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L25)

___

### xref

• `Optional` **xref**: [`CrossReference`](model.Model.CrossReference.md)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:28](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L28)

___

### constructors

▪ `Static` **constructors**: `Object`

Factory support.  Populated by derivatives upon definition.

#### Index signature

▪ [type: `string`]: (`definition`: `any`) => [`Model`](model.Model-1.md)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:192](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L192)

## Accessors

### allowedBaseTags

• `get` **allowedBaseTags**(): [`ElementTag`](../enums/model.ElementTag.md)[]

The set of tags from which this model may derive.

#### Returns

[`ElementTag`](../enums/model.ElementTag.md)[]

#### Defined in

[packages/matter.js/src/model/models/Model.ts:237](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L237)

___

### base

• `get` **base**(): `undefined` \| [`Model`](model.Model-1.md)

Get a Model for my base type, if any.

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:207](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L207)

___

### children

• `get` **children**(): [`Model`](model.Model-1.md)[]

Children of models are always models.

#### Returns

[`Model`](model.Model-1.md)[]

#### Defined in

[packages/matter.js/src/model/models/Model.ts:127](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L127)

• `set` **children**(`children`): `void`

Children can be added as models or elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | ([`AnyElement`](../modules/model.md#anyelement) \| [`Model`](model.Model-1.md))[] |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/model/models/Model.ts:137](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L137)

___

### effectiveId

• `get` **effectiveId**(): `undefined` \| `number`

Allows subclasses to pull a working ID from an alternate source.

#### Returns

`undefined` \| `number`

#### Defined in

[packages/matter.js/src/model/models/Model.ts:112](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L112)

___

### effectiveType

• `get` **effectiveType**(): `undefined` \| `string`

In some circumstances the base type can be inferred.  This inference
happens here.

Does not recurse so only returns the direct base type.

#### Returns

`undefined` \| `string`

#### Defined in

[packages/matter.js/src/model/models/Model.ts:200](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L200)

___

### effectiveXref

• `get` **effectiveXref**(): `undefined` \| [`CrossReference`](model.Model.CrossReference.md)

A local or parent xref.

#### Returns

`undefined` \| [`CrossReference`](model.Model.CrossReference.md)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:230](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L230)

___

### elements

• `get` **elements**(): [`AnyElement`](../modules/model.md#anyelement)[]

Element view of children.  For TypeScript this allows children to be
added as elements.  For JavaScript this is identical to children().

#### Returns

[`AnyElement`](../modules/model.md#anyelement)[]

#### Defined in

[packages/matter.js/src/model/models/Model.ts:102](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L102)

___

### globalBase

• `get` **globalBase**(): `undefined` \| [`Model`](model.Model-1.md)

Get the first global base type.  This may have semantic meaning more
specific than the base primitive type.

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:223](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L223)

___

### key

• `get` **key**(): `undefined` \| `string`

Get a string that uniquely identifies this model.  This is normally
the effective ID but some models require a generated identifier.

#### Returns

`undefined` \| `string`

#### Defined in

[packages/matter.js/src/model/models/Model.ts:120](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L120)

___

### parent

• `get` **parent**(): `undefined` \| [`Model`](model.Model-1.md)

The structural parent.  This is the model for the element that contains
this element's definition.

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:71](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L71)

• `set` **parent**(`parent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `undefined` \| [`Model`](model.Model-1.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/model/models/Model.ts:75](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L75)

___

### path

• `get` **path**(): `string`

The full path ("." delimited) in the Matter tree.

#### Returns

`string`

#### Defined in

[packages/matter.js/src/model/models/Model.ts:59](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L59)

___

### shadow

• `get` **shadow**(): `undefined` \| [`Model`](model.Model-1.md)

Get shadow model, if any.  A "shadow" is an element in my parent's
inheritance hierarchy that I override.

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:215](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L215)

___

### valid

• `get` **valid**(): `boolean`

Did validation find errors?

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/model/models/Model.ts:52](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L52)

## Methods

### add

▸ **add**(`...children`): `void`

Add a child.  children.push works too but only accepts models.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...children` | ([`AnyElement`](../modules/model.md#anyelement) \| [`Model`](model.Model-1.md))[] |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/model/models/Model.ts:244](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L244)

___

### all

▸ **all**\<`T`\>(`constructor`): `T`[]

Retrieve all models of a specific element type from local scope.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Model`](model.Model-1.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `constructor` | [`Constructor`](../modules/model.Model.md#constructor)\<`T`\> | model class or a predicate object |

#### Returns

`T`[]

#### Defined in

[packages/matter.js/src/model/models/Model.ts:268](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L268)

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

[packages/matter.js/src/model/models/Model.ts:303](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L303)

___

### get

▸ **get**\<`T`\>(`constructor`, `key`): `T`

Retrieve a specific model by ID or name.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Model`](model.Model-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | [`Constructor`](../modules/model.Model.md#constructor)\<`T`\> |
| `key` | `string` \| `number` |

#### Returns

`T`

#### Defined in

[packages/matter.js/src/model/models/Model.ts:275](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L275)

___

### instanceOf

▸ **instanceOf**(`other`): `boolean`

Does this model derive from another?

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`AnyElement`](../modules/model.md#anyelement) \| [`Model`](model.Model-1.md) |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/model/models/Model.ts:373](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L373)

___

### is

▸ **is**(`key`): `boolean`

Check identity of element by name or ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `undefined` \| [`ElementSelector`](../modules/model._internal_.ModelTraversal.md#elementselector) |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/model/models/Model.ts:291](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L291)

___

### member

▸ **member**(`key`, `allowedTags?`): `undefined` \| [`Model`](model.Model-1.md)

Search the inheritance chain for a child property.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ElementSelector`](../modules/model._internal_.ModelTraversal.md#elementselector) |
| `allowedTags` | [`ElementTag`](../enums/model.ElementTag.md)[] |

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:363](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L363)

___

### owner

▸ **owner**\<`T`\>(`constructor`): `undefined` \| `T`

Retrieve a model of a specific type from the ownership hierarchy.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Model`](model.Model-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | [`Constructor`](../modules/model.Model.md#constructor)\<`T`\> |

#### Returns

`undefined` \| `T`

#### Defined in

[packages/matter.js/src/model/models/Model.ts:284](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L284)

___

### references

▸ **references**(`type`): [`Model`](model.Model-1.md)[]

Find all children that reference a specific type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Model`](model.Model-1.md) |

#### Returns

[`Model`](model.Model-1.md)[]

#### Defined in

[packages/matter.js/src/model/models/Model.ts:356](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L356)

___

### toJSON

▸ **toJSON**(): [`AnyElement`](../modules/model.md#anyelement)

Convert model to JSON.

#### Returns

[`AnyElement`](../modules/model.md#anyelement)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:319](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L319)

___

### valueOf

▸ **valueOf**(): [`AnyElement`](../modules/model.md#anyelement)

Convert to non-class structure.

#### Returns

[`AnyElement`](../modules/model.md#anyelement)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:326](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L326)

___

### visit

▸ **visit**(`visitor`): `undefined` \| `boolean`

Apply a function to all tree elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `visitor` | (`model`: [`Model`](model.Model-1.md)) => `boolean` \| `void` |

#### Returns

`undefined` \| `boolean`

#### Defined in

[packages/matter.js/src/model/models/Model.ts:349](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L349)

___

### create

▸ **create**(`definition`): [`Model`](model.Model-1.md)

Create a model for an element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`AnyElement`](../modules/model.md#anyelement) |

#### Returns

[`Model`](model.Model-1.md)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:251](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L251)
