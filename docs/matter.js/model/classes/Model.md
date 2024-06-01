[**@project-chip/matter.js**](../../README.md) • **Docs**

***

[@project-chip/matter.js](../../modules.md) / [model](../README.md) / Model

# Class: `abstract` Model

A "model" is a class that implements runtime functionality associated with the corresponding element type.

## Extended by

- [`ClusterModel`](ClusterModel.md)
- [`DeviceTypeModel`](DeviceTypeModel.md)
- [`EndpointModel`](EndpointModel.md)
- [`FabricModel`](FabricModel.md)
- [`MatterModel`](MatterModel.md)
- [`NodeModel`](NodeModel.md)
- [`RequirementModel`](RequirementModel.md)
- [`ValueModel`](ValueModel.md)

## Constructors

### new Model()

> **new Model**(`definition`): [`Model`](Model.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`BaseElement`](../interfaces/BaseElement.md) |

#### Returns

[`Model`](Model.md)

#### Source

[packages/matter.js/src/model/models/Model.ts:375](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L375)

## Properties

### #children?

> `private` `optional` **#children**: [`Children`](../-internal-/interfaces/Children.md)\<[`Model`](Model.md), [`AnyElement`](../README.md#anyelement)\>

#### Source

[packages/matter.js/src/model/models/Model.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L45)

***

### #id?

> `private` `optional` **#id**: `number` = `undefined`

#### Source

[packages/matter.js/src/model/models/Model.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L27)

***

### #name

> `private` **#name**: `string`

#### Source

[packages/matter.js/src/model/models/Model.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L28)

***

### #parent?

> `private` `optional` **#parent**: [`Model`](Model.md)

#### Source

[packages/matter.js/src/model/models/Model.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L46)

***

### description?

> `optional` **description**: `string`

#### Source

[packages/matter.js/src/model/models/Model.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L20)

***

### details?

> `optional` **details**: `string`

#### Source

[packages/matter.js/src/model/models/Model.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L21)

***

### errors?

> `optional` **errors**: [`DefinitionError`](../README.md#definitionerror)[]

#### Source

[packages/matter.js/src/model/models/Model.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L23)

***

### global?

> `optional` **global**: `boolean`

Flag set on elements loaded from Globals.

#### Source

[packages/matter.js/src/model/models/Model.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L33)

***

### id?

> `optional` **id**: `number`

#### Source

[packages/matter.js/src/model/models/Model.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L24)

***

### isType?

> `optional` **isType**: `boolean`

Indicates that an element defines a datatype.

#### Source

[packages/matter.js/src/model/models/Model.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L43)

***

### isTypeScope?

> `optional` **isTypeScope**: `boolean`

Indicates that an element may have type definitions as children.

#### Source

[packages/matter.js/src/model/models/Model.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L38)

***

### name

> **name**: `string`

#### Source

[packages/matter.js/src/model/models/Model.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L25)

***

### tag

> `readonly` `abstract` **tag**: [`ElementTag`](../enumerations/ElementTag.md)

#### Source

[packages/matter.js/src/model/models/Model.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L18)

***

### type?

> `optional` **type**: `string`

#### Source

[packages/matter.js/src/model/models/Model.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L19)

***

### xref?

> `optional` **xref**: [`CrossReference`](../namespaces/Model/classes/CrossReference.md)

#### Source

[packages/matter.js/src/model/models/Model.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L22)

***

### types

> `static` **types**: `object`

Factory support.  Populated by derivatives upon definition.

#### Index signature

 \[`type`: `string`\]: (`definition`) => [`Model`](Model.md)

#### Source

[packages/matter.js/src/model/models/Model.ts:199](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L199)

## Accessors

### allowedBaseTags

> `get` **allowedBaseTags**(): [`ElementTag`](../enumerations/ElementTag.md)[]

The set of tags from which this model may derive.

#### Returns

[`ElementTag`](../enumerations/ElementTag.md)[]

#### Source

[packages/matter.js/src/model/models/Model.ts:241](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L241)

***

### base

> `get` **base**(): `undefined` \| [`Model`](Model.md)

Get a Model for my base type, if any.

#### Returns

`undefined` \| [`Model`](Model.md)

#### Source

[packages/matter.js/src/model/models/Model.ts:213](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L213)

***

### children

> `get` **children**(): [`Children`](../-internal-/interfaces/Children.md)\<[`Model`](Model.md), [`AnyElement`](../README.md#anyelement)\>

Children of models are always models.

> `set` **children**(`children`): `void`

Children can be added as models or elements.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `children` | ([`AnyElement`](../README.md#anyelement) \| [`Model`](Model.md))[] |

#### Returns

[`Children`](../-internal-/interfaces/Children.md)\<[`Model`](Model.md), [`AnyElement`](../README.md#anyelement)\>

#### Source

[packages/matter.js/src/model/models/Model.ts:155](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L155)

***

### discriminator

> `get` **discriminator**(): `undefined` \| `string`

Obtain a discriminator that differentiates different models with the same name

#### Returns

`undefined` \| `string`

#### Source

[packages/matter.js/src/model/models/Model.ts:148](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L148)

***

### effectiveId

> `get` **effectiveId**(): `undefined` \| `number`

Allows subclasses to pull a working ID from an alternate source.

#### Returns

`undefined` \| `number`

#### Source

[packages/matter.js/src/model/models/Model.ts:125](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L125)

***

### effectiveType

> `get` **effectiveType**(): `undefined` \| `string`

In some circumstances the base type can be inferred.  This inference happens here.

Does not recurse so only returns the direct base type.

#### Returns

`undefined` \| `string`

#### Source

[packages/matter.js/src/model/models/Model.ts:206](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L206)

***

### effectiveXref

> `get` **effectiveXref**(): `undefined` \| [`CrossReference`](../namespaces/Model/classes/CrossReference.md)

A local or parent xref.

#### Returns

`undefined` \| [`CrossReference`](../namespaces/Model/classes/CrossReference.md)

#### Source

[packages/matter.js/src/model/models/Model.ts:234](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L234)

***

### elements

> `get` **elements**(): [`AnyElement`](../README.md#anyelement)[]

Element view of children.  For TypeScript this allows children to be added as elements.  For JavaScript this is
identical to children().

#### Returns

[`AnyElement`](../README.md#anyelement)[]

#### Source

[packages/matter.js/src/model/models/Model.ts:115](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L115)

***

### globalBase

> `get` **globalBase**(): `undefined` \| [`Model`](Model.md)

Get the first global base type.  This may have semantic meaning more specific than the base primitive type.

#### Returns

`undefined` \| [`Model`](Model.md)

#### Source

[packages/matter.js/src/model/models/Model.ts:227](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L227)

***

### key

> `get` **key**(): `undefined` \| `string`

Get a string that uniquely identifies this model.  This is normally the effective ID but some models require a
generated identifier.

#### Returns

`undefined` \| `string`

#### Source

[packages/matter.js/src/model/models/Model.ts:133](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L133)

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

[packages/matter.js/src/model/models/Model.ts:88](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L88)

***

### path

> `get` **path**(): `string`

The path ("." delimited) in the Matter tree.

This is informational and generally tries to adhere to JS API conventions.

#### Returns

`string`

#### Source

[packages/matter.js/src/model/models/Model.ts:60](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L60)

***

### shadow

> `get` **shadow**(): `undefined` \| [`Model`](Model.md)

Get shadow model, if any.  A "shadow" is an element in my parent's inheritance hierarchy that I override.

#### Returns

`undefined` \| [`Model`](Model.md)

#### Source

[packages/matter.js/src/model/models/Model.ts:220](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L220)

***

### valid

> `get` **valid**(): `boolean`

Did validation find errors?

#### Returns

`boolean`

#### Source

[packages/matter.js/src/model/models/Model.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L51)

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

#### Source

[packages/matter.js/src/model/models/Model.ts:248](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L248)

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

#### Source

[packages/matter.js/src/model/models/Model.ts:272](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L272)

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

#### Source

[packages/matter.js/src/model/models/Model.ts:370](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L370)

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

#### Source

[packages/matter.js/src/model/models/Model.ts:296](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L296)

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

#### Source

[packages/matter.js/src/model/models/Model.ts:279](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L279)

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

#### Source

[packages/matter.js/src/model/models/Model.ts:363](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L363)

***

### member()

> **member**(`key`, `allowedTags`): `undefined` \| [`Model`](Model.md)

Search the inheritance chain for a child property.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | [`Selector`](../-internal-/namespaces/Children/README.md#selector) |
| `allowedTags` | [`ElementTag`](../enumerations/ElementTag.md)[] |

#### Returns

`undefined` \| [`Model`](Model.md)

#### Source

[packages/matter.js/src/model/models/Model.ts:356](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L356)

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

#### Source

[packages/matter.js/src/model/models/Model.ts:289](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L289)

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

#### Source

[packages/matter.js/src/model/models/Model.ts:349](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L349)

***

### toJSON()

> **toJSON**(): [`AnyElement`](../README.md#anyelement)

Convert model to JSON.

#### Returns

[`AnyElement`](../README.md#anyelement)

#### Source

[packages/matter.js/src/model/models/Model.ts:312](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L312)

***

### valueOf()

> **valueOf**(): [`AnyElement`](../README.md#anyelement)

Convert to non-class structure.

#### Returns

[`AnyElement`](../README.md#anyelement)

#### Source

[packages/matter.js/src/model/models/Model.ts:319](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L319)

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

#### Source

[packages/matter.js/src/model/models/Model.ts:342](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L342)

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

#### Source

[packages/matter.js/src/model/models/Model.ts:255](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L255)
