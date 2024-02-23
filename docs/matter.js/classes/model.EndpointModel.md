[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](../modules/model.md) / EndpointModel

# Class: EndpointModel

[model](../modules/model.md).EndpointModel

A "model" is a class that implements runtime functionality associated with
the corresponding element type.

## Hierarchy

- [`Model`](model.Model-1.md)

  ↳ **`EndpointModel`**

## Implements

- [`EndpointElement`](../modules/model.md#endpointelement)

## Table of contents

### Constructors

- [constructor](model.EndpointModel.md#constructor)

### Properties

- [description](model.EndpointModel.md#description)
- [details](model.EndpointModel.md#details)
- [errors](model.EndpointModel.md#errors)
- [global](model.EndpointModel.md#global)
- [id](model.EndpointModel.md#id)
- [isType](model.EndpointModel.md#istype)
- [isTypeScope](model.EndpointModel.md#istypescope)
- [name](model.EndpointModel.md#name)
- [tag](model.EndpointModel.md#tag)
- [type](model.EndpointModel.md#type)
- [xref](model.EndpointModel.md#xref)
- [constructors](model.EndpointModel.md#constructors)

### Accessors

- [allowedBaseTags](model.EndpointModel.md#allowedbasetags)
- [base](model.EndpointModel.md#base)
- [children](model.EndpointModel.md#children)
- [deviceTypes](model.EndpointModel.md#devicetypes)
- [effectiveId](model.EndpointModel.md#effectiveid)
- [effectiveType](model.EndpointModel.md#effectivetype)
- [effectiveXref](model.EndpointModel.md#effectivexref)
- [elements](model.EndpointModel.md#elements)
- [globalBase](model.EndpointModel.md#globalbase)
- [key](model.EndpointModel.md#key)
- [parent](model.EndpointModel.md#parent)
- [path](model.EndpointModel.md#path)
- [shadow](model.EndpointModel.md#shadow)
- [valid](model.EndpointModel.md#valid)

### Methods

- [add](model.EndpointModel.md#add)
- [all](model.EndpointModel.md#all)
- [error](model.EndpointModel.md#error)
- [get](model.EndpointModel.md#get)
- [instanceOf](model.EndpointModel.md#instanceof)
- [is](model.EndpointModel.md#is)
- [member](model.EndpointModel.md#member)
- [owner](model.EndpointModel.md#owner)
- [references](model.EndpointModel.md#references)
- [toJSON](model.EndpointModel.md#tojson)
- [valueOf](model.EndpointModel.md#valueof)
- [visit](model.EndpointModel.md#visit)
- [create](model.EndpointModel.md#create)

## Constructors

### constructor

• **new EndpointModel**(`definition`): [`EndpointModel`](model.EndpointModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](../modules/model.EndpointElement.md#properties) |

#### Returns

[`EndpointModel`](model.EndpointModel.md)

#### Overrides

[Model](model.Model-1.md).[constructor](model.Model-1.md#constructor)

#### Defined in

[packages/matter.js/src/model/models/EndpointModel.ts:27](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/EndpointModel.ts#L27)

## Properties

### description

• `Optional` **description**: `string`

#### Implementation of

EndpointElement.description

#### Inherited from

[Model](model.Model-1.md).[description](model.Model-1.md#description)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:26](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L26)

___

### details

• `Optional` **details**: `string`

#### Implementation of

EndpointElement.details

#### Inherited from

[Model](model.Model-1.md).[details](model.Model-1.md#details)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:27](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L27)

___

### errors

• `Optional` **errors**: [`DefinitionError`](../modules/model.md#definitionerror)[]

#### Inherited from

[Model](model.Model-1.md).[errors](model.Model-1.md#errors)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:29](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L29)

___

### global

• `Optional` **global**: `boolean`

Flag set on elements loaded from Globals.

#### Implementation of

EndpointElement.global

#### Inherited from

[Model](model.Model-1.md).[global](model.Model-1.md#global)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:34](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L34)

___

### id

• **id**: `number`

#### Implementation of

EndpointElement.id

#### Overrides

[Model](model.Model-1.md).[id](model.Model-1.md#id)

#### Defined in

[packages/matter.js/src/model/models/EndpointModel.ts:13](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/EndpointModel.ts#L13)

___

### isType

• `Optional` **isType**: `boolean`

Indicates that an element defines a datatype.

#### Inherited from

[Model](model.Model-1.md).[isType](model.Model-1.md#istype)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:44](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L44)

___

### isTypeScope

• `Optional` **isTypeScope**: `boolean`

Indicates that an element may have type definitions as children.

#### Inherited from

[Model](model.Model-1.md).[isTypeScope](model.Model-1.md#istypescope)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:39](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L39)

___

### name

• **name**: `string`

#### Implementation of

EndpointElement.name

#### Inherited from

[Model](model.Model-1.md).[name](model.Model-1.md#name)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:24](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L24)

___

### tag

• **tag**: [`Endpoint`](../enums/model.ElementTag.md#endpoint) = `EndpointElement.Tag`

#### Implementation of

EndpointElement.tag

#### Overrides

[Model](model.Model-1.md).[tag](model.Model-1.md#tag)

#### Defined in

[packages/matter.js/src/model/models/EndpointModel.ts:12](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/EndpointModel.ts#L12)

___

### type

• `Optional` **type**: `string`

#### Implementation of

EndpointElement.type

#### Inherited from

[Model](model.Model-1.md).[type](model.Model-1.md#type)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:25](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L25)

___

### xref

• `Optional` **xref**: [`CrossReference`](model.Model.CrossReference.md)

#### Implementation of

EndpointElement.xref

#### Inherited from

[Model](model.Model-1.md).[xref](model.Model-1.md#xref)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:28](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L28)

___

### constructors

▪ `Static` **constructors**: `Object`

Factory support.  Populated by derivatives upon definition.

#### Index signature

▪ [type: `string`]: (`definition`: `any`) => [`Model`](model.Model-1.md)

#### Inherited from

[Model](model.Model-1.md).[constructors](model.Model-1.md#constructors)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:192](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L192)

## Accessors

### allowedBaseTags

• `get` **allowedBaseTags**(): [`ElementTag`](../enums/model.ElementTag.md)[]

The set of tags from which this model may derive.

#### Returns

[`ElementTag`](../enums/model.ElementTag.md)[]

#### Inherited from

Model.allowedBaseTags

#### Defined in

[packages/matter.js/src/model/models/Model.ts:237](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L237)

___

### base

• `get` **base**(): `undefined` \| [`Model`](model.Model-1.md)

Get a Model for my base type, if any.

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Inherited from

Model.base

#### Defined in

[packages/matter.js/src/model/models/Model.ts:207](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L207)

___

### children

• `get` **children**(): [`DeviceTypeModel`](model.DeviceTypeModel.md)[]

Children of models are always models.

#### Returns

[`DeviceTypeModel`](model.DeviceTypeModel.md)[]

#### Implementation of

EndpointElement.children

#### Overrides

Model.children

#### Defined in

[packages/matter.js/src/model/models/EndpointModel.ts:19](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/EndpointModel.ts#L19)

• `set` **children**(`children`): `void`

Children can be added as models or elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | ([`DeviceTypeElement`](../modules/model.md#devicetypeelement) \| [`DeviceTypeModel`](model.DeviceTypeModel.md))[] |

#### Returns

`void`

#### Implementation of

EndpointElement.children

#### Overrides

Model.children

#### Defined in

[packages/matter.js/src/model/models/EndpointModel.ts:23](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/EndpointModel.ts#L23)

___

### deviceTypes

• `get` **deviceTypes**(): [`DeviceTypeModel`](model.DeviceTypeModel.md)[]

#### Returns

[`DeviceTypeModel`](model.DeviceTypeModel.md)[]

#### Defined in

[packages/matter.js/src/model/models/EndpointModel.ts:15](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/EndpointModel.ts#L15)

___

### effectiveId

• `get` **effectiveId**(): `undefined` \| `number`

Allows subclasses to pull a working ID from an alternate source.

#### Returns

`undefined` \| `number`

#### Inherited from

Model.effectiveId

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

#### Inherited from

Model.effectiveType

#### Defined in

[packages/matter.js/src/model/models/Model.ts:200](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L200)

___

### effectiveXref

• `get` **effectiveXref**(): `undefined` \| [`CrossReference`](model.Model.CrossReference.md)

A local or parent xref.

#### Returns

`undefined` \| [`CrossReference`](model.Model.CrossReference.md)

#### Inherited from

Model.effectiveXref

#### Defined in

[packages/matter.js/src/model/models/Model.ts:230](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L230)

___

### elements

• `get` **elements**(): [`AnyElement`](../modules/model.md#anyelement)[]

Element view of children.  For TypeScript this allows children to be
added as elements.  For JavaScript this is identical to children().

#### Returns

[`AnyElement`](../modules/model.md#anyelement)[]

#### Inherited from

Model.elements

#### Defined in

[packages/matter.js/src/model/models/Model.ts:102](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L102)

___

### globalBase

• `get` **globalBase**(): `undefined` \| [`Model`](model.Model-1.md)

Get the first global base type.  This may have semantic meaning more
specific than the base primitive type.

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Inherited from

Model.globalBase

#### Defined in

[packages/matter.js/src/model/models/Model.ts:223](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L223)

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

[packages/matter.js/src/model/models/Model.ts:120](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L120)

___

### parent

• `get` **parent**(): `undefined` \| [`Model`](model.Model-1.md)

The structural parent.  This is the model for the element that contains
this element's definition.

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Inherited from

Model.parent

#### Defined in

[packages/matter.js/src/model/models/Model.ts:71](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L71)

• `set` **parent**(`parent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `undefined` \| [`Model`](model.Model-1.md) |

#### Returns

`void`

#### Inherited from

Model.parent

#### Defined in

[packages/matter.js/src/model/models/Model.ts:75](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L75)

___

### path

• `get` **path**(): `string`

The full path ("." delimited) in the Matter tree.

#### Returns

`string`

#### Inherited from

Model.path

#### Defined in

[packages/matter.js/src/model/models/Model.ts:59](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L59)

___

### shadow

• `get` **shadow**(): `undefined` \| [`Model`](model.Model-1.md)

Get shadow model, if any.  A "shadow" is an element in my parent's
inheritance hierarchy that I override.

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Inherited from

Model.shadow

#### Defined in

[packages/matter.js/src/model/models/Model.ts:215](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L215)

___

### valid

• `get` **valid**(): `boolean`

Did validation find errors?

#### Returns

`boolean`

#### Inherited from

Model.valid

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

#### Inherited from

[Model](model.Model-1.md).[add](model.Model-1.md#add)

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

#### Inherited from

[Model](model.Model-1.md).[all](model.Model-1.md#all)

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

#### Inherited from

[Model](model.Model-1.md).[error](model.Model-1.md#error)

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

#### Inherited from

[Model](model.Model-1.md).[get](model.Model-1.md#get)

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

#### Inherited from

[Model](model.Model-1.md).[instanceOf](model.Model-1.md#instanceof)

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

#### Inherited from

[Model](model.Model-1.md).[is](model.Model-1.md#is)

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

#### Inherited from

[Model](model.Model-1.md).[member](model.Model-1.md#member)

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

#### Inherited from

[Model](model.Model-1.md).[owner](model.Model-1.md#owner)

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

#### Inherited from

[Model](model.Model-1.md).[references](model.Model-1.md#references)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:356](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L356)

___

### toJSON

▸ **toJSON**(): [`AnyElement`](../modules/model.md#anyelement)

Convert model to JSON.

#### Returns

[`AnyElement`](../modules/model.md#anyelement)

#### Inherited from

[Model](model.Model-1.md).[toJSON](model.Model-1.md#tojson)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:319](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L319)

___

### valueOf

▸ **valueOf**(): [`AnyElement`](../modules/model.md#anyelement)

Convert to non-class structure.

#### Returns

[`AnyElement`](../modules/model.md#anyelement)

#### Inherited from

[Model](model.Model-1.md).[valueOf](model.Model-1.md#valueof)

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

#### Inherited from

[Model](model.Model-1.md).[visit](model.Model-1.md#visit)

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

#### Inherited from

[Model](model.Model-1.md).[create](model.Model-1.md#create)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:251](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/models/Model.ts#L251)
