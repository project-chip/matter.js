[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](../modules/model.md) / [\<internal\>](../modules/model._internal_.md) / ModelTraversal

# Class: ModelTraversal

[model](../modules/model.md).[\<internal\>](../modules/model._internal_.md).ModelTraversal

This class performs lookups of models in the scope of a specific model.  We use a class so the lookup can maintain
state and guard against circular references.

Any logic that requires traversal of a multi-model ownership or inheritance should use this class.

Note that we don't currently utilize any kind of index when we perform search.  Not currently a problem but may need
to address if it becomes too inefficient.

## Table of contents

### Constructors

- [constructor](model._internal_.ModelTraversal.md#constructor)

### Properties

- [dismissed](model._internal_.ModelTraversal.md#dismissed)
- [operationDepth](model._internal_.ModelTraversal.md#operationdepth)
- [defaultRoot](model._internal_.ModelTraversal.md#defaultroot)

### Methods

- [findAccess](model._internal_.ModelTraversal.md#findaccess)
- [findAspect](model._internal_.ModelTraversal.md#findaspect)
- [findBase](model._internal_.ModelTraversal.md#findbase)
- [findBitDefinition](model._internal_.ModelTraversal.md#findbitdefinition)
- [findConstraint](model._internal_.ModelTraversal.md#findconstraint)
- [findDefiningModel](model._internal_.ModelTraversal.md#finddefiningmodel)
- [findGlobalBase](model._internal_.ModelTraversal.md#findglobalbase)
- [findMember](model._internal_.ModelTraversal.md#findmember)
- [findMembers](model._internal_.ModelTraversal.md#findmembers)
- [findMetabase](model._internal_.ModelTraversal.md#findmetabase)
- [findOwner](model._internal_.ModelTraversal.md#findowner)
- [findReferences](model._internal_.ModelTraversal.md#findreferences)
- [findResponse](model._internal_.ModelTraversal.md#findresponse)
- [findRoot](model._internal_.ModelTraversal.md#findroot)
- [findShadow](model._internal_.ModelTraversal.md#findshadow)
- [findType](model._internal_.ModelTraversal.md#findtype)
- [findXref](model._internal_.ModelTraversal.md#findxref)
- [getTypeName](model._internal_.ModelTraversal.md#gettypename)
- [instanceOf](model._internal_.ModelTraversal.md#instanceof)
- [operation](model._internal_.ModelTraversal.md#operation)
- [operationWithDismissal](model._internal_.ModelTraversal.md#operationwithdismissal)
- [visit](model._internal_.ModelTraversal.md#visit)
- [visitInheritance](model._internal_.ModelTraversal.md#visitinheritance)

## Constructors

### constructor

• **new ModelTraversal**(): [`ModelTraversal`](model._internal_.ModelTraversal.md)

#### Returns

[`ModelTraversal`](model._internal_.ModelTraversal.md)

## Properties

### dismissed

• `Private` `Optional` **dismissed**: `Set`\<[`Model`](model.Model-1.md)\>

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelTraversal.ts#L27)

___

### operationDepth

• `Private` **operationDepth**: `number` = `0`

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelTraversal.ts#L26)

___

### defaultRoot

▪ `Static` **defaultRoot**: [`Model`](model.Model-1.md)

If a model is not owned by a MatterModel, global resolution won't work.
This model acts as a fallback to work around this.

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:578](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelTraversal.ts#L578)

## Methods

### findAccess

▸ **findAccess**(`model`, `symbol`, `VM`): [`Access`](model.Access-1.md)

Access aspects are specialized because access controls are inherited from the owner if not otherwise defined.

That means access controls may come from 5 places, in order of priority:

  1. The model itself
  2. A shadowed model in the owner hierarchy
  3. An overridden model in the model's class hierarchy
  4. A model in the parent hierarchy
  5. Access.Default

This method uses [findAspect](model._internal_.ModelTraversal.md#findaspect) for 1-3 then extends the result with 4 & 5 as necessary until
[Access.complete](model.Access-1.md#complete) is true.

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `undefined` \| [`ValueModel`](model.ValueModel.md) |
| `symbol` | `symbol` |
| `VM` | typeof [`ValueModel`](model.ValueModel.md) |

#### Returns

[`Access`](model.Access-1.md)

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:352](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelTraversal.ts#L352)

___

### findAspect

▸ **findAspect**(`model`, `symbol`): `undefined` \| [`Aspect`](model.Aspect.md)\<`any`\>

Get an aspect that reflects extension of any shadowed aspects.  Note that this searches the parent's inheritance
and the model's inheritance. This is because aspects can be inherited by overriding an element in the parent or
by direct type inheritance.  Aspects in shadowed elements take priority as they are presumably more specific.

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `undefined` \| [`Model`](model.Model-1.md) |
| `symbol` | `symbol` |

#### Returns

`undefined` \| [`Aspect`](model.Aspect.md)\<`any`\>

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:256](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelTraversal.ts#L256)

___

### findBase

▸ **findBase**(`model`): `undefined` \| [`Model`](model.Model-1.md)

Find the model a model derives from, if any.

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `undefined` \| [`Model`](model.Model-1.md) |

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:133](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelTraversal.ts#L133)

___

### findBitDefinition

▸ **findBitDefinition**(`scope`, `bit`): `undefined` \| [`FieldModel`](model.FieldModel.md)

Search inherited scope for a bit definition.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | `undefined` \| [`Model`](model.Model-1.md) |
| `bit` | `number` |

#### Returns

`undefined` \| [`FieldModel`](model.FieldModel.md)

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:407](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelTraversal.ts#L407)

___

### findConstraint

▸ **findConstraint**(`model`, `symbol`, `field?`): `undefined` \| [`Constraint`](model.Constraint-1.md)

Constraint aspects are specialized because we infer constraint fields that are referenced in other models.

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`ValueModel`](model.ValueModel.md) |
| `symbol` | `symbol` |
| `field?` | ``"max"`` \| ``"min"`` \| ``"value"`` |

#### Returns

`undefined` \| [`Constraint`](model.Constraint-1.md)

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:289](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelTraversal.ts#L289)

___

### findDefiningModel

▸ **findDefiningModel**(`model`): `undefined` \| [`ValueModel`](model.ValueModel.md)

Find the model this model derives from that has children, if any.

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `undefined` \| [`ValueModel`](model.ValueModel.md) |

#### Returns

`undefined` \| [`ValueModel`](model.ValueModel.md)

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:211](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelTraversal.ts#L211)

___

### findGlobalBase

▸ **findGlobalBase**(`model`): `undefined` \| [`Model`](model.Model-1.md)

Find the first global model this model derives from, if any.

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `undefined` \| [`Model`](model.Model-1.md) |

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:155](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelTraversal.ts#L155)

___

### findMember

▸ **findMember**(`scope`, `key`, `allowedTags`): `undefined` \| [`Model`](model.Model-1.md)

Search inherited scope for a named member.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | `undefined` \| [`Model`](model.Model-1.md) |
| `key` | [`Selector`](../modules/model._internal_.Children.md#selector) |
| `allowedTags` | [`ElementTag`](../enums/model.ElementTag.md)[] |

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:375](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelTraversal.ts#L375)

___

### findMembers

▸ **findMembers**(`scope`, `allowedTags`): [`Model`](model.Model-1.md)[]

Retrieve all children of a specific type, inherited or otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | [`Model`](model.Model-1.md) |
| `allowedTags` | [`ElementTag`](../enums/model.ElementTag.md)[] |

#### Returns

[`Model`](model.Model-1.md)[]

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:390](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelTraversal.ts#L390)

___

### findMetabase

▸ **findMetabase**(`model`): `undefined` \| [`Model`](model.Model-1.md)

Find the model in my inheritance hierarchy that has semantic meaning. This will be the first inherited model with
a metatype.

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `undefined` \| [`Model`](model.Model-1.md) |

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:121](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelTraversal.ts#L121)

___

### findOwner

▸ **findOwner**\<`T`\>(`constructor`, `model`): `undefined` \| `T`

Find an owning model of a specific type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Model`](model.Model-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | [`Type`](../modules/model.Model.md#type)\<`T`\> |
| `model` | `undefined` \| [`Model`](model.Model-1.md) |

#### Returns

`undefined` \| `T`

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:511](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelTraversal.ts#L511)

___

### findReferences

▸ **findReferences**(`scope`, `type`): [`Model`](model.Model-1.md)[]

Find all children of a node that reference a specific type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | `undefined` \| [`Model`](model.Model-1.md) |
| `type` | `undefined` \| [`Model`](model.Model-1.md) |

#### Returns

[`Model`](model.Model-1.md)[]

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:474](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelTraversal.ts#L474)

___

### findResponse

▸ **findResponse**(`command`): `undefined` \| [`Model`](model.Model-1.md)

Find the response model for a command.

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | [`CommandModel`](model.CommandModel.md) |

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:465](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelTraversal.ts#L465)

___

### findRoot

▸ **findRoot**(`model`): `undefined` \| [`Model`](model.Model-1.md)

Find the root model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `undefined` \| [`Model`](model.Model-1.md) |

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:526](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelTraversal.ts#L526)

___

### findShadow

▸ **findShadow**(`model`): `undefined` \| [`Model`](model.Model-1.md)

Find a child in the parent's inheritance hierarchy with the same tag and ID/name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `undefined` \| [`Model`](model.Model-1.md) |

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:228](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelTraversal.ts#L228)

___

### findType

▸ **findType**(`scope`, `name`, `tag`): `undefined` \| [`Model`](model.Model-1.md)

Search inherited and structural type scope for a named type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | `undefined` \| [`Model`](model.Model-1.md) |
| `name` | `string` |
| `tag` | [`ElementTag`](../enums/model.ElementTag.md) |

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:433](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelTraversal.ts#L433)

___

### findXref

▸ **findXref**(`model`): `undefined` \| [`CrossReference`](model.Model.CrossReference.md)

Find an xref from this model or a parent.

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `undefined` \| [`Model`](model.Model-1.md) |

#### Returns

`undefined` \| [`CrossReference`](model.Model.CrossReference.md)

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:196](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelTraversal.ts#L196)

___

### getTypeName

▸ **getTypeName**(`model`): `undefined` \| `string`

Determine the type for a model.  This is the string name of the base model.  Usually this is simply the type
field but we infer the type of some datatypes based on their parent's type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `undefined` \| [`Model`](model.Model-1.md) |

#### Returns

`undefined` \| `string`

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:64](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelTraversal.ts#L64)

___

### instanceOf

▸ **instanceOf**(`model`, `other`): `boolean`

Determine whether this model derives from another.

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `undefined` \| [`Model`](model.Model-1.md) |
| `other` | `undefined` \| [`AnyElement`](../modules/model.md#anyelement) \| [`Model`](model.Model-1.md) |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:174](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelTraversal.ts#L174)

___

### operation

▸ **operation**\<`T`\>(`operator`, `toDismiss?`): `T`

Perform an operation with iteration tracking.  If iteration depth limit

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | () => `T` |
| `toDismiss?` | [`Model`](model.Model-1.md) |

#### Returns

`T`

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelTraversal.ts#L32)

___

### operationWithDismissal

▸ **operationWithDismissal**\<`T`\>(`toDismiss`, `operator`): `T`

Perform an operation with a model dismissed from consideration for type lookup.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `toDismiss` | `undefined` \| [`Model`](model.Model-1.md) |
| `operator` | () => `T` |

#### Returns

`T`

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelTraversal.ts#L56)

___

### visit

▸ **visit**(`model`, `visitor`): `undefined` \| `boolean`

Visit all nodes in the model tree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`Model`](model.Model-1.md) |
| `visitor` | (`model`: [`Model`](model.Model-1.md)) => `boolean` \| `void` |

#### Returns

`undefined` \| `boolean`

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:544](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelTraversal.ts#L544)

___

### visitInheritance

▸ **visitInheritance**(`model`, `visitor`): `undefined` \| `boolean`

Visit all nodes in the inheritance hierarchy until the visitor returns false.

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `undefined` \| [`Model`](model.Model-1.md) |
| `visitor` | (`model`: [`Model`](model.Model-1.md)) => `boolean` \| `void` |

#### Returns

`undefined` \| `boolean`

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:561](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelTraversal.ts#L561)
