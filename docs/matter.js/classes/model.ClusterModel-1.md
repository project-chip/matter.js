[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](../modules/model.md) / ClusterModel

# Class: ClusterModel

[model](../modules/model.md).ClusterModel

A "model" is a class that implements runtime functionality associated with the corresponding element type.

## Hierarchy

- [`Model`](model.Model-1.md)

  ↳ **`ClusterModel`**

## Table of contents

### Constructors

- [constructor](model.ClusterModel-1.md#constructor)

### Properties

- [#children](model.ClusterModel-1.md##children)
- [#id](model.ClusterModel-1.md##id)
- [#name](model.ClusterModel-1.md##name)
- [#parent](model.ClusterModel-1.md##parent)
- [classification](model.ClusterModel-1.md#classification)
- [description](model.ClusterModel-1.md#description)
- [details](model.ClusterModel-1.md#details)
- [errors](model.ClusterModel-1.md#errors)
- [global](model.ClusterModel-1.md#global)
- [id](model.ClusterModel-1.md#id)
- [isType](model.ClusterModel-1.md#istype)
- [isTypeScope](model.ClusterModel-1.md#istypescope)
- [name](model.ClusterModel-1.md#name)
- [singleton](model.ClusterModel-1.md#singleton)
- [supportedFeatures](model.ClusterModel-1.md#supportedfeatures)
- [tag](model.ClusterModel-1.md#tag)
- [type](model.ClusterModel-1.md#type)
- [xref](model.ClusterModel-1.md#xref)
- [Tag](model.ClusterModel-1.md#tag-1)
- [types](model.ClusterModel-1.md#types)

### Accessors

- [allowedBaseTags](model.ClusterModel-1.md#allowedbasetags)
- [attributes](model.ClusterModel-1.md#attributes)
- [base](model.ClusterModel-1.md#base)
- [children](model.ClusterModel-1.md#children)
- [commands](model.ClusterModel-1.md#commands)
- [datatypes](model.ClusterModel-1.md#datatypes)
- [discriminator](model.ClusterModel-1.md#discriminator)
- [effectiveAccess](model.ClusterModel-1.md#effectiveaccess)
- [effectiveId](model.ClusterModel-1.md#effectiveid)
- [effectiveMetatype](model.ClusterModel-1.md#effectivemetatype)
- [effectiveType](model.ClusterModel-1.md#effectivetype)
- [effectiveXref](model.ClusterModel-1.md#effectivexref)
- [elements](model.ClusterModel-1.md#elements)
- [events](model.ClusterModel-1.md#events)
- [featureMap](model.ClusterModel-1.md#featuremap)
- [features](model.ClusterModel-1.md#features)
- [globalBase](model.ClusterModel-1.md#globalbase)
- [key](model.ClusterModel-1.md#key)
- [members](model.ClusterModel-1.md#members)
- [parent](model.ClusterModel-1.md#parent)
- [path](model.ClusterModel-1.md#path)
- [revision](model.ClusterModel-1.md#revision)
- [shadow](model.ClusterModel-1.md#shadow)
- [valid](model.ClusterModel-1.md#valid)

### Methods

- [add](model.ClusterModel-1.md#add)
- [all](model.ClusterModel-1.md#all)
- [clone](model.ClusterModel-1.md#clone)
- [error](model.ClusterModel-1.md#error)
- [get](model.ClusterModel-1.md#get)
- [instanceOf](model.ClusterModel-1.md#instanceof)
- [member](model.ClusterModel-1.md#member)
- [owner](model.ClusterModel-1.md#owner)
- [references](model.ClusterModel-1.md#references)
- [toJSON](model.ClusterModel-1.md#tojson)
- [valueOf](model.ClusterModel-1.md#valueof)
- [visit](model.ClusterModel-1.md#visit)
- [create](model.ClusterModel-1.md#create)

## Constructors

### constructor

• **new ClusterModel**(`definition`): [`ClusterModel`](model.ClusterModel-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](../modules/model.ClusterElement.md#properties) |

#### Returns

[`ClusterModel`](model.ClusterModel-1.md)

#### Overrides

[Model](model.Model-1.md).[constructor](model.Model-1.md#constructor)

#### Defined in

[packages/matter.js/src/model/models/ClusterModel.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ClusterModel.ts#L80)

## Properties

### #children

• `Private` `Optional` **#children**: [`Children`](../interfaces/model._internal_.Children-1.md)\<[`Model`](model.Model-1.md), [`AnyElement`](../modules/model.md#anyelement)\>

#### Inherited from

[Model](model.Model-1.md).[#children](model.Model-1.md##children)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L45)

___

### #id

• `Private` `Optional` **#id**: `number` = `undefined`

#### Inherited from

[Model](model.Model-1.md).[#id](model.Model-1.md##id)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L27)

___

### #name

• `Private` **#name**: `string`

#### Inherited from

[Model](model.Model-1.md).[#name](model.Model-1.md##name)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L28)

___

### #parent

• `Private` `Optional` **#parent**: [`Model`](model.Model-1.md)

#### Inherited from

[Model](model.Model-1.md).[#parent](model.Model-1.md##parent)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:46](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L46)

___

### classification

• `Optional` **classification**: [`Classification`](../enums/model.ClusterElement.Classification.md)

#### Defined in

[packages/matter.js/src/model/models/ClusterModel.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ClusterModel.ts#L22)

___

### description

• `Optional` **description**: `string`

#### Inherited from

[Model](model.Model-1.md).[description](model.Model-1.md#description)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L20)

___

### details

• `Optional` **details**: `string`

#### Inherited from

[Model](model.Model-1.md).[details](model.Model-1.md#details)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L21)

___

### errors

• `Optional` **errors**: [`DefinitionError`](../modules/model.md#definitionerror)[]

#### Inherited from

[Model](model.Model-1.md).[errors](model.Model-1.md#errors)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L23)

___

### global

• `Optional` **global**: `boolean`

Flag set on elements loaded from Globals.

#### Inherited from

[Model](model.Model-1.md).[global](model.Model-1.md#global)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L33)

___

### id

• `Optional` **id**: `number`

#### Overrides

[Model](model.Model-1.md).[id](model.Model-1.md#id)

#### Defined in

[packages/matter.js/src/model/models/ClusterModel.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ClusterModel.ts#L21)

___

### isType

• `Optional` **isType**: `boolean`

Indicates that an element defines a datatype.

#### Inherited from

[Model](model.Model-1.md).[isType](model.Model-1.md#istype)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L43)

___

### isTypeScope

• **isTypeScope**: `boolean` = `true`

Indicates that an element may have type definitions as children.

#### Overrides

[Model](model.Model-1.md).[isTypeScope](model.Model-1.md#istypescope)

#### Defined in

[packages/matter.js/src/model/models/ClusterModel.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ClusterModel.ts#L23)

___

### name

• **name**: `string`

#### Inherited from

[Model](model.Model-1.md).[name](model.Model-1.md#name)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L25)

___

### singleton

• `Optional` **singleton**: `boolean`

#### Defined in

[packages/matter.js/src/model/models/ClusterModel.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ClusterModel.ts#L24)

___

### supportedFeatures

• `Optional` **supportedFeatures**: [`FeatureSet`](model.FeatureSet-1.md)

#### Defined in

[packages/matter.js/src/model/models/ClusterModel.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ClusterModel.ts#L25)

___

### tag

• **tag**: [`Cluster`](../enums/model.ElementTag.md#cluster) = `ClusterElement.Tag`

#### Overrides

[Model](model.Model-1.md).[tag](model.Model-1.md#tag)

#### Defined in

[packages/matter.js/src/model/models/ClusterModel.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ClusterModel.ts#L20)

___

### type

• `Optional` **type**: `string`

#### Inherited from

[Model](model.Model-1.md).[type](model.Model-1.md#type)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L19)

___

### xref

• `Optional` **xref**: [`CrossReference`](model.Model.CrossReference.md)

#### Inherited from

[Model](model.Model-1.md).[xref](model.Model-1.md#xref)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L22)

___

### Tag

▪ `Static` **Tag**: [`ElementTag`](../enums/model.ElementTag.md) = `ClusterElement.Tag`

#### Defined in

[packages/matter.js/src/model/models/ClusterModel.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ClusterModel.ts#L84)

___

### types

▪ `Static` **types**: `Object`

Factory support.  Populated by derivatives upon definition.

#### Index signature

▪ [type: `string`]: (`definition`: `any`) => [`Model`](model.Model-1.md)

#### Inherited from

[Model](model.Model-1.md).[types](model.Model-1.md#types)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:199](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L199)

## Accessors

### allowedBaseTags

• `get` **allowedBaseTags**(): [`ElementTag`](../enums/model.ElementTag.md)[]

The set of tags from which this model may derive.

#### Returns

[`ElementTag`](../enums/model.ElementTag.md)[]

#### Inherited from

Model.allowedBaseTags

#### Defined in

[packages/matter.js/src/model/models/Model.ts:241](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L241)

___

### attributes

• `get` **attributes**(): [`AttributeModel`](model.AttributeModel.md)[]

#### Returns

[`AttributeModel`](model.AttributeModel.md)[]

#### Defined in

[packages/matter.js/src/model/models/ClusterModel.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ClusterModel.ts#L27)

___

### base

• `get` **base**(): `undefined` \| [`Model`](model.Model-1.md)

Get a Model for my base type, if any.

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Inherited from

Model.base

#### Defined in

[packages/matter.js/src/model/models/Model.ts:213](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L213)

___

### children

• `get` **children**(): [`Children`](../interfaces/model._internal_.Children-1.md)\<[`Child`](../modules/model.ClusterModel.md#child), [`Child`](../modules/model.ClusterElement.md#child)\>

Children of models are always models.

#### Returns

[`Children`](../interfaces/model._internal_.Children-1.md)\<[`Child`](../modules/model.ClusterModel.md#child), [`Child`](../modules/model.ClusterElement.md#child)\>

#### Overrides

Model.children

#### Defined in

[packages/matter.js/src/model/models/ClusterModel.ts:64](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ClusterModel.ts#L64)

• `set` **children**(`children`): `void`

Children can be added as models or elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | ([`Child`](../modules/model.ClusterElement.md#child) \| [`Child`](../modules/model.ClusterModel.md#child))[] |

#### Returns

`void`

#### Overrides

Model.children

#### Defined in

[packages/matter.js/src/model/models/ClusterModel.ts:68](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ClusterModel.ts#L68)

___

### commands

• `get` **commands**(): [`CommandModel`](model.CommandModel.md)[]

#### Returns

[`CommandModel`](model.CommandModel.md)[]

#### Defined in

[packages/matter.js/src/model/models/ClusterModel.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ClusterModel.ts#L31)

___

### datatypes

• `get` **datatypes**(): [`DatatypeModel`](model.DatatypeModel.md)[]

#### Returns

[`DatatypeModel`](model.DatatypeModel.md)[]

#### Defined in

[packages/matter.js/src/model/models/ClusterModel.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ClusterModel.ts#L39)

___

### discriminator

• `get` **discriminator**(): `undefined` \| `string`

Obtain a discriminator that differentiates different models with the same name

#### Returns

`undefined` \| `string`

#### Inherited from

Model.discriminator

#### Defined in

[packages/matter.js/src/model/models/Model.ts:148](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L148)

___

### effectiveAccess

• `get` **effectiveAccess**(): [`Access`](model.Access-1.md)

#### Returns

[`Access`](model.Access-1.md)

#### Defined in

[packages/matter.js/src/model/models/ClusterModel.ts:76](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ClusterModel.ts#L76)

___

### effectiveId

• `get` **effectiveId**(): `undefined` \| `number`

Allows subclasses to pull a working ID from an alternate source.

#### Returns

`undefined` \| `number`

#### Inherited from

Model.effectiveId

#### Defined in

[packages/matter.js/src/model/models/Model.ts:125](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L125)

___

### effectiveMetatype

• `get` **effectiveMetatype**(): [`Metatype`](../enums/model.Metatype-1.md)

#### Returns

[`Metatype`](../enums/model.Metatype-1.md)

#### Defined in

[packages/matter.js/src/model/models/ClusterModel.ts:72](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ClusterModel.ts#L72)

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

[packages/matter.js/src/model/models/Model.ts:206](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L206)

___

### effectiveXref

• `get` **effectiveXref**(): `undefined` \| [`CrossReference`](model.Model.CrossReference.md)

A local or parent xref.

#### Returns

`undefined` \| [`CrossReference`](model.Model.CrossReference.md)

#### Inherited from

Model.effectiveXref

#### Defined in

[packages/matter.js/src/model/models/Model.ts:234](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L234)

___

### elements

• `get` **elements**(): [`AnyElement`](../modules/model.md#anyelement)[]

Element view of children.  For TypeScript this allows children to be added as elements.  For JavaScript this is
identical to children().

#### Returns

[`AnyElement`](../modules/model.md#anyelement)[]

#### Inherited from

Model.elements

#### Defined in

[packages/matter.js/src/model/models/Model.ts:115](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L115)

___

### events

• `get` **events**(): [`EventModel`](model.EventModel.md)[]

#### Returns

[`EventModel`](model.EventModel.md)[]

#### Defined in

[packages/matter.js/src/model/models/ClusterModel.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ClusterModel.ts#L35)

___

### featureMap

• `get` **featureMap**(): [`AttributeModel`](model.AttributeModel.md)

#### Returns

[`AttributeModel`](model.AttributeModel.md)

#### Defined in

[packages/matter.js/src/model/models/ClusterModel.ts:60](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ClusterModel.ts#L60)

___

### features

• `get` **features**(): [`Children`](../interfaces/model._internal_.Children-1.md)\<[`FieldModel`](model.FieldModel.md), [`FieldElement`](../interfaces/model.FieldElement-1.md)\>

#### Returns

[`Children`](../interfaces/model._internal_.Children-1.md)\<[`FieldModel`](model.FieldModel.md), [`FieldElement`](../interfaces/model.FieldElement-1.md)\>

#### Defined in

[packages/matter.js/src/model/models/ClusterModel.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ClusterModel.ts#L56)

___

### globalBase

• `get` **globalBase**(): `undefined` \| [`Model`](model.Model-1.md)

Get the first global base type.  This may have semantic meaning more specific than the base primitive type.

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Inherited from

Model.globalBase

#### Defined in

[packages/matter.js/src/model/models/Model.ts:227](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L227)

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

[packages/matter.js/src/model/models/Model.ts:133](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L133)

___

### members

• `get` **members**(): [`PropertyModel`](model.PropertyModel.md)[]

#### Returns

[`PropertyModel`](model.PropertyModel.md)[]

#### Defined in

[packages/matter.js/src/model/models/ClusterModel.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ClusterModel.ts#L43)

___

### parent

• `get` **parent**(): `undefined` \| [`Model`](model.Model-1.md)

The structural parent.  This is the model for the element that contains this element's definition.

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Inherited from

Model.parent

#### Defined in

[packages/matter.js/src/model/models/Model.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L88)

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

[packages/matter.js/src/model/models/Model.ts:92](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L92)

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

[packages/matter.js/src/model/models/Model.ts:60](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L60)

___

### revision

• `get` **revision**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/model/models/ClusterModel.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/ClusterModel.ts#L47)

___

### shadow

• `get` **shadow**(): `undefined` \| [`Model`](model.Model-1.md)

Get shadow model, if any.  A "shadow" is an element in my parent's inheritance hierarchy that I override.

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Inherited from

Model.shadow

#### Defined in

[packages/matter.js/src/model/models/Model.ts:220](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L220)

___

### valid

• `get` **valid**(): `boolean`

Did validation find errors?

#### Returns

`boolean`

#### Inherited from

Model.valid

#### Defined in

[packages/matter.js/src/model/models/Model.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L51)

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

[packages/matter.js/src/model/models/Model.ts:248](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L248)

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
| `constructor` | [`Type`](../modules/model.Model.md#type)\<`T`\> | model class or a predicate object |

#### Returns

`T`[]

#### Inherited from

[Model](model.Model-1.md).[all](model.Model-1.md#all)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:272](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L272)

___

### clone

▸ **clone**\<`This`\>(`this`): `This`

Clone the model.  This deep copies all descendant child models but not other properties.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Model`](model.Model-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |

#### Returns

`This`

#### Inherited from

[Model](model.Model-1.md).[clone](model.Model-1.md#clone)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:370](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L370)

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

[packages/matter.js/src/model/models/Model.ts:296](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L296)

___

### get

▸ **get**\<`T`\>(`type`, `key`): `undefined` \| `T`

Retrieve a specific model by ID or name.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Model`](model.Model-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Type`](../modules/model.Model.md#type)\<`T`\> |
| `key` | `string` \| `number` |

#### Returns

`undefined` \| `T`

#### Inherited from

[Model](model.Model-1.md).[get](model.Model-1.md#get)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:279](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L279)

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

[packages/matter.js/src/model/models/Model.ts:363](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L363)

___

### member

▸ **member**(`key`, `allowedTags?`): `undefined` \| [`Model`](model.Model-1.md)

Search the inheritance chain for a child property.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`Selector`](../modules/model._internal_.Children.md#selector) |
| `allowedTags` | [`ElementTag`](../enums/model.ElementTag.md)[] |

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Inherited from

[Model](model.Model-1.md).[member](model.Model-1.md#member)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:356](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L356)

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
| `constructor` | [`Type`](../modules/model.Model.md#type)\<`T`\> |

#### Returns

`undefined` \| `T`

#### Inherited from

[Model](model.Model-1.md).[owner](model.Model-1.md#owner)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:289](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L289)

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

[packages/matter.js/src/model/models/Model.ts:349](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L349)

___

### toJSON

▸ **toJSON**(): [`AnyElement`](../modules/model.md#anyelement)

Convert model to JSON.

#### Returns

[`AnyElement`](../modules/model.md#anyelement)

#### Inherited from

[Model](model.Model-1.md).[toJSON](model.Model-1.md#tojson)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:312](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L312)

___

### valueOf

▸ **valueOf**(): [`AnyElement`](../modules/model.md#anyelement)

Convert to non-class structure.

#### Returns

[`AnyElement`](../modules/model.md#anyelement)

#### Inherited from

[Model](model.Model-1.md).[valueOf](model.Model-1.md#valueof)

#### Defined in

[packages/matter.js/src/model/models/Model.ts:319](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L319)

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

[packages/matter.js/src/model/models/Model.ts:342](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L342)

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

[packages/matter.js/src/model/models/Model.ts:255](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/models/Model.ts#L255)
