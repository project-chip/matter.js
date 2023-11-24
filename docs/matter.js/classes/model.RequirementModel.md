[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](../modules/model.md) / RequirementModel

# Class: RequirementModel

[model](../modules/model.md).RequirementModel

A "model" is a class that implements runtime functionality associated with
the corresponding element type.

## Hierarchy

- [`Model`](model.Model-1.md)

  ↳ **`RequirementModel`**

## Implements

- [`RequirementElement`](../modules/model.md#requirementelement)

## Table of contents

### Constructors

- [constructor](model.RequirementModel.md#constructor)

### Properties

- [description](model.RequirementModel.md#description)
- [details](model.RequirementModel.md#details)
- [element](model.RequirementModel.md#element)
- [errors](model.RequirementModel.md#errors)
- [global](model.RequirementModel.md#global)
- [id](model.RequirementModel.md#id)
- [isType](model.RequirementModel.md#istype)
- [isTypeScope](model.RequirementModel.md#istypescope)
- [name](model.RequirementModel.md#name)
- [tag](model.RequirementModel.md#tag)
- [type](model.RequirementModel.md#type)
- [xref](model.RequirementModel.md#xref)
- [constructors](model.RequirementModel.md#constructors)

### Accessors

- [access](model.RequirementModel.md#access)
- [allowedBaseTags](model.RequirementModel.md#allowedbasetags)
- [base](model.RequirementModel.md#base)
- [children](model.RequirementModel.md#children)
- [conformance](model.RequirementModel.md#conformance)
- [constraint](model.RequirementModel.md#constraint)
- [effectiveId](model.RequirementModel.md#effectiveid)
- [effectiveType](model.RequirementModel.md#effectivetype)
- [effectiveXref](model.RequirementModel.md#effectivexref)
- [elements](model.RequirementModel.md#elements)
- [globalBase](model.RequirementModel.md#globalbase)
- [key](model.RequirementModel.md#key)
- [parent](model.RequirementModel.md#parent)
- [path](model.RequirementModel.md#path)
- [quality](model.RequirementModel.md#quality)
- [shadow](model.RequirementModel.md#shadow)
- [valid](model.RequirementModel.md#valid)

### Methods

- [add](model.RequirementModel.md#add)
- [all](model.RequirementModel.md#all)
- [error](model.RequirementModel.md#error)
- [get](model.RequirementModel.md#get)
- [instanceOf](model.RequirementModel.md#instanceof)
- [is](model.RequirementModel.md#is)
- [member](model.RequirementModel.md#member)
- [owner](model.RequirementModel.md#owner)
- [references](model.RequirementModel.md#references)
- [toJSON](model.RequirementModel.md#tojson)
- [valueOf](model.RequirementModel.md#valueof)
- [visit](model.RequirementModel.md#visit)
- [create](model.RequirementModel.md#create)

## Constructors

### constructor

• **new RequirementModel**(`definition`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`BaseElement`](../modules/model.md#baseelement) |

#### Inherited from

[Model](model.Model-1.md).[constructor](model.Model-1.md#constructor)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:377](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L377)

## Properties

### description

• `Optional` **description**: `string`

#### Implementation of

RequirementElement.description

#### Inherited from

[Model](model.Model-1.md).[description](model.Model-1.md#description)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:26](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L26)

___

### details

• `Optional` **details**: `string`

#### Implementation of

RequirementElement.details

#### Inherited from

[Model](model.Model-1.md).[details](model.Model-1.md#details)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:27](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L27)

___

### element

• **element**: [`ElementType`](../enums/model.RequirementElement.ElementType.md)

#### Implementation of

RequirementElement.element

#### Defined in

[packages/matter.js/src/model/models/RequirementModel.ts:20](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/RequirementModel.ts#L20)

___

### errors

• `Optional` **errors**: [`DefinitionError`](../modules/model.md#definitionerror)[]

#### Inherited from

[Model](model.Model-1.md).[errors](model.Model-1.md#errors)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:29](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L29)

___

### global

• `Optional` **global**: `boolean`

Flag set on elements loaded from Globals.

#### Implementation of

RequirementElement.global

#### Inherited from

[Model](model.Model-1.md).[global](model.Model-1.md#global)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:34](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L34)

___

### id

• `Optional` **id**: `number`

#### Implementation of

RequirementElement.id

#### Inherited from

[Model](model.Model-1.md).[id](model.Model-1.md#id)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:23](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L23)

___

### isType

• `Optional` **isType**: `boolean`

Indicates that an element defines a datatype.

#### Inherited from

[Model](model.Model-1.md).[isType](model.Model-1.md#istype)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:44](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L44)

___

### isTypeScope

• `Optional` **isTypeScope**: `boolean`

Indicates that an element may have type definitions as children.

#### Inherited from

[Model](model.Model-1.md).[isTypeScope](model.Model-1.md#istypescope)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:39](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L39)

___

### name

• **name**: `string`

#### Implementation of

RequirementElement.name

#### Inherited from

[Model](model.Model-1.md).[name](model.Model-1.md#name)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:24](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L24)

___

### tag

• **tag**: [`Requirement`](../enums/model.ElementTag.md#requirement) = `RequirementElement.Tag`

#### Implementation of

RequirementElement.tag

#### Overrides

[Model](model.Model-1.md).[tag](model.Model-1.md#tag)

#### Defined in

[packages/matter.js/src/model/models/RequirementModel.ts:19](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/RequirementModel.ts#L19)

___

### type

• `Optional` **type**: `string`

#### Implementation of

RequirementElement.type

#### Inherited from

[Model](model.Model-1.md).[type](model.Model-1.md#type)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:25](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L25)

___

### xref

• `Optional` **xref**: [`CrossReference`](model.Model.CrossReference.md)

#### Implementation of

RequirementElement.xref

#### Inherited from

[Model](model.Model-1.md).[xref](model.Model-1.md#xref)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:28](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L28)

___

### constructors

▪ `Static` **constructors**: `Object`

Factory support.  Populated by derivatives upon definition.

#### Index signature

▪ [type: `string`]: (`definition`: `any`) => [`Model`](model.Model-1.md)

#### Inherited from

[Model](model.Model-1.md).[constructors](model.Model-1.md#constructors)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:192](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L192)

## Accessors

### access

• `get` **access**(): [`Access`](model.Access-1.md)

#### Returns

[`Access`](model.Access-1.md)

#### Implementation of

RequirementElement.access

#### Defined in

[packages/matter.js/src/model/models/RequirementModel.ts:34](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/RequirementModel.ts#L34)

• `set` **access**(`definition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Access`](model.Access-1.md) \| [`Definition`](../modules/model.Access.md#definition) |

#### Returns

`void`

#### Implementation of

RequirementElement.access

#### Defined in

[packages/matter.js/src/model/models/RequirementModel.ts:37](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/RequirementModel.ts#L37)

___

### allowedBaseTags

• `get` **allowedBaseTags**(): [`ElementTag`](../enums/model.ElementTag.md)[]

The set of tags from which this model may derive.

#### Returns

[`ElementTag`](../enums/model.ElementTag.md)[]

#### Inherited from

Model.allowedBaseTags

#### Defined in

[packages/matter.js/src/model/models/Model.ts:237](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L237)

___

### base

• `get` **base**(): `undefined` \| [`Model`](model.Model-1.md)

Get a Model for my base type, if any.

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Inherited from

Model.base

#### Defined in

[packages/matter.js/src/model/models/Model.ts:207](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L207)

___

### children

• `get` **children**(): ([`DatatypeModel`](model.DatatypeModel.md) \| [`RequirementModel`](model.RequirementModel.md))[]

Children of models are always models.

#### Returns

([`DatatypeModel`](model.DatatypeModel.md) \| [`RequirementModel`](model.RequirementModel.md))[]

#### Implementation of

RequirementElement.children

#### Overrides

Model.children

#### Defined in

[packages/matter.js/src/model/models/RequirementModel.ts:26](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/RequirementModel.ts#L26)

• `set` **children**(`children`): `void`

Children can be added as models or elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | ([`DatatypeElement`](../modules/model.md#datatypeelement) \| [`RequirementElement`](../modules/model.md#requirementelement) \| [`DatatypeModel`](model.DatatypeModel.md) \| [`RequirementModel`](model.RequirementModel.md))[] |

#### Returns

`void`

#### Implementation of

RequirementElement.children

#### Overrides

Model.children

#### Defined in

[packages/matter.js/src/model/models/RequirementModel.ts:30](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/RequirementModel.ts#L30)

___

### conformance

• `get` **conformance**(): [`Conformance`](model.Conformance-1.md)

#### Returns

[`Conformance`](model.Conformance-1.md)

#### Implementation of

RequirementElement.conformance

#### Defined in

[packages/matter.js/src/model/models/RequirementModel.ts:48](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/RequirementModel.ts#L48)

• `set` **conformance**(`definition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Conformance`](model.Conformance-1.md) \| [`Definition`](../modules/model.Conformance.md#definition) |

#### Returns

`void`

#### Implementation of

RequirementElement.conformance

#### Defined in

[packages/matter.js/src/model/models/RequirementModel.ts:51](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/RequirementModel.ts#L51)

___

### constraint

• `get` **constraint**(): [`Constraint`](model.Constraint-1.md)

#### Returns

[`Constraint`](model.Constraint-1.md)

#### Implementation of

RequirementElement.constraint

#### Defined in

[packages/matter.js/src/model/models/RequirementModel.ts:41](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/RequirementModel.ts#L41)

• `set` **constraint**(`definition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Constraint`](model.Constraint-1.md) \| [`Definition`](../modules/model.Constraint.md#definition) |

#### Returns

`void`

#### Implementation of

RequirementElement.constraint

#### Defined in

[packages/matter.js/src/model/models/RequirementModel.ts:44](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/RequirementModel.ts#L44)

___

### effectiveId

• `get` **effectiveId**(): `undefined` \| `number`

Allows subclasses to pull a working ID from an alternate source.

#### Returns

`undefined` \| `number`

#### Inherited from

Model.effectiveId

#### Defined in

[packages/matter.js/src/model/models/Model.ts:112](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L112)

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

[packages/matter.js/src/model/models/Model.ts:200](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L200)

___

### effectiveXref

• `get` **effectiveXref**(): `undefined` \| [`CrossReference`](model.Model.CrossReference.md)

A local or parent xref.

#### Returns

`undefined` \| [`CrossReference`](model.Model.CrossReference.md)

#### Inherited from

Model.effectiveXref

#### Defined in

[packages/matter.js/src/model/models/Model.ts:230](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L230)

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

[packages/matter.js/src/model/models/Model.ts:102](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L102)

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

[packages/matter.js/src/model/models/Model.ts:223](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L223)

___

### key

• `get` **key**(): `string`

Get a string that uniquely identifies this model.  This is normally
the effective ID but some models require a generated identifier.

#### Returns

`string`

#### Overrides

Model.key

#### Defined in

[packages/matter.js/src/model/models/RequirementModel.ts:22](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/RequirementModel.ts#L22)

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

[packages/matter.js/src/model/models/Model.ts:71](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L71)

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

[packages/matter.js/src/model/models/Model.ts:75](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L75)

___

### path

• `get` **path**(): `string`

The full path ("." delimited) in the Matter tree.

#### Returns

`string`

#### Inherited from

Model.path

#### Defined in

[packages/matter.js/src/model/models/Model.ts:59](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L59)

___

### quality

• `get` **quality**(): [`Quality`](model.Quality-1.md)

#### Returns

[`Quality`](model.Quality-1.md)

#### Implementation of

RequirementElement.quality

#### Defined in

[packages/matter.js/src/model/models/RequirementModel.ts:55](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/RequirementModel.ts#L55)

• `set` **quality**(`definition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Quality`](model.Quality-1.md) \| [`Definition`](../modules/model.Quality.md#definition) |

#### Returns

`void`

#### Implementation of

RequirementElement.quality

#### Defined in

[packages/matter.js/src/model/models/RequirementModel.ts:58](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/RequirementModel.ts#L58)

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

[packages/matter.js/src/model/models/Model.ts:215](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L215)

___

### valid

• `get` **valid**(): `boolean`

Did validation find errors?

#### Returns

`boolean`

#### Inherited from

Model.valid

#### Defined in

[packages/matter.js/src/model/models/Model.ts:52](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L52)

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

[packages/matter.js/src/model/models/Model.ts:244](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L244)

___

### all

▸ **all**<`T`\>(`constructor`): `T`[]

Retrieve all models of a specific element type from local scope.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Model`](model.Model-1.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `constructor` | [`Constructor`](../modules/model.Model.md#constructor)<`T`\> | model class or a predicate object |

#### Returns

`T`[]

#### Inherited from

[Model](model.Model-1.md).[all](model.Model-1.md#all)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:268](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L268)

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

[packages/matter.js/src/model/models/Model.ts:303](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L303)

___

### get

▸ **get**<`T`\>(`constructor`, `key`): `T`

Retrieve a specific model by ID or name.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Model`](model.Model-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | [`Constructor`](../modules/model.Model.md#constructor)<`T`\> |
| `key` | `string` \| `number` |

#### Returns

`T`

#### Inherited from

[Model](model.Model-1.md).[get](model.Model-1.md#get)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:275](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L275)

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

[packages/matter.js/src/model/models/Model.ts:373](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L373)

___

### is

▸ **is**(`key`): `boolean`

Check identity of element by name or ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `undefined` \| [`ElementSelector`](../modules/export._internal_.ModelTraversal.md#elementselector) |

#### Returns

`boolean`

#### Inherited from

[Model](model.Model-1.md).[is](model.Model-1.md#is)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:291](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L291)

___

### member

▸ **member**(`key`, `allowedTags?`): `undefined` \| [`Model`](model.Model-1.md)

Search the inheritance chain for a child property.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ElementSelector`](../modules/export._internal_.ModelTraversal.md#elementselector) |
| `allowedTags` | [`ElementTag`](../enums/model.ElementTag.md)[] |

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Inherited from

[Model](model.Model-1.md).[member](model.Model-1.md#member)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:363](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L363)

___

### owner

▸ **owner**<`T`\>(`constructor`): `undefined` \| `T`

Retrieve a model of a specific type from the ownership hierarchy.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Model`](model.Model-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | [`Constructor`](../modules/model.Model.md#constructor)<`T`\> |

#### Returns

`undefined` \| `T`

#### Inherited from

[Model](model.Model-1.md).[owner](model.Model-1.md#owner)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:284](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L284)

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

[packages/matter.js/src/model/models/Model.ts:356](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L356)

___

### toJSON

▸ **toJSON**(): [`AnyElement`](../modules/model.md#anyelement)

Convert model to JSON.

#### Returns

[`AnyElement`](../modules/model.md#anyelement)

#### Inherited from

[Model](model.Model-1.md).[toJSON](model.Model-1.md#tojson)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:319](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L319)

___

### valueOf

▸ **valueOf**(): [`AnyElement`](../modules/model.md#anyelement)

Convert to non-class structure.

#### Returns

[`AnyElement`](../modules/model.md#anyelement)

#### Inherited from

[Model](model.Model-1.md).[valueOf](model.Model-1.md#valueof)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:326](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L326)

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

[packages/matter.js/src/model/models/Model.ts:349](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L349)

___

### create

▸ `Static` **create**(`definition`): [`Model`](model.Model-1.md)

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

[packages/matter.js/src/model/models/Model.ts:251](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/models/Model.ts#L251)
