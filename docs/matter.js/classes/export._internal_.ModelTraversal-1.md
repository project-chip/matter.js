[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [<internal\>](../modules/export._internal_.md) / ModelTraversal

# Class: ModelTraversal

[export](../modules/export.md).[<internal>](../modules/export._internal_.md).ModelTraversal

This class performs lookups of models in the scope of a specific model.  We
use a class so the lookup can maintain state and guard against circular
references.

Any logic that requires traversal of a multi-model ownership or inheritance
should use this class.

Note that we don't currently utilize any kind of index when we perform
search.  Not currently a problem but may need to address if it becomes too
inefficient.

## Table of contents

### Constructors

- [constructor](export._internal_.ModelTraversal-1.md#constructor)

### Properties

- [dismissed](export._internal_.ModelTraversal-1.md#dismissed)
- [operationDepth](export._internal_.ModelTraversal-1.md#operationdepth)

### Methods

- [findAspect](export._internal_.ModelTraversal-1.md#findaspect)
- [findBase](export._internal_.ModelTraversal-1.md#findbase)
- [findBitDefinition](export._internal_.ModelTraversal-1.md#findbitdefinition)
- [findConstraint](export._internal_.ModelTraversal-1.md#findconstraint)
- [findDefiningModel](export._internal_.ModelTraversal-1.md#finddefiningmodel)
- [findGlobalBase](export._internal_.ModelTraversal-1.md#findglobalbase)
- [findLocal](export._internal_.ModelTraversal-1.md#findlocal)
- [findMember](export._internal_.ModelTraversal-1.md#findmember)
- [findMembers](export._internal_.ModelTraversal-1.md#findmembers)
- [findMetabase](export._internal_.ModelTraversal-1.md#findmetabase)
- [findOwner](export._internal_.ModelTraversal-1.md#findowner)
- [findReferences](export._internal_.ModelTraversal-1.md#findreferences)
- [findResponse](export._internal_.ModelTraversal-1.md#findresponse)
- [findRoot](export._internal_.ModelTraversal-1.md#findroot)
- [findShadow](export._internal_.ModelTraversal-1.md#findshadow)
- [findType](export._internal_.ModelTraversal-1.md#findtype)
- [findXref](export._internal_.ModelTraversal-1.md#findxref)
- [getTypeName](export._internal_.ModelTraversal-1.md#gettypename)
- [instanceOf](export._internal_.ModelTraversal-1.md#instanceof)
- [operation](export._internal_.ModelTraversal-1.md#operation)
- [operationWithDismissal](export._internal_.ModelTraversal-1.md#operationwithdismissal)
- [visit](export._internal_.ModelTraversal-1.md#visit)
- [visitInheritance](export._internal_.ModelTraversal-1.md#visitinheritance)

## Constructors

### constructor

• **new ModelTraversal**()

## Properties

### dismissed

• `Private` `Optional` **dismissed**: `Set`<[`Model`](model.Model-1.md)\>

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:29](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/logic/ModelTraversal.ts#L29)

___

### operationDepth

• `Private` **operationDepth**: `number` = `0`

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:28](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/logic/ModelTraversal.ts#L28)

## Methods

### findAspect

▸ **findAspect**(`model`, `symbol`): `undefined` \| [`Aspect`](model.Aspect.md)<`any`\>

Get an aspect that reflects extension of any shadowed aspects.  Note
that this searches parent's inheritance and the model's inheritance.
This is because aspects can be inherited by overriding an element in
the parent or by direct type inheritance.  Aspects in shadowed elements
take priority as they are presumably more specific.

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `undefined` \| [`Model`](model.Model-1.md) |
| `symbol` | `symbol` |

#### Returns

`undefined` \| [`Aspect`](model.Aspect.md)<`any`\>

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:264](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/logic/ModelTraversal.ts#L264)

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

[packages/matter.js/src/model/logic/ModelTraversal.ts:138](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/logic/ModelTraversal.ts#L138)

___

### findBitDefinition

▸ **findBitDefinition**(`scope`, `bit`): `undefined` \| [`DatatypeModel`](model.DatatypeModel.md)

Search inherited scope for a bit definition.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | `undefined` \| [`Model`](model.Model-1.md) |
| `bit` | `number` |

#### Returns

`undefined` \| [`DatatypeModel`](model.DatatypeModel.md)

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:387](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/logic/ModelTraversal.ts#L387)

___

### findConstraint

▸ **findConstraint**(`model`, `symbol`, `field?`): `undefined` \| [`Constraint`](model.Constraint-1.md)

Constraint aspects are specialized because we infer constraint fields
that are referenced in other models.

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`ValueModel`](model.ValueModel.md) |
| `symbol` | `symbol` |
| `field?` | ``"max"`` \| ``"min"`` \| ``"value"`` |

#### Returns

`undefined` \| [`Constraint`](model.Constraint-1.md)

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:298](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/logic/ModelTraversal.ts#L298)

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

[packages/matter.js/src/model/logic/ModelTraversal.ts:216](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/logic/ModelTraversal.ts#L216)

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

[packages/matter.js/src/model/logic/ModelTraversal.ts:160](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/logic/ModelTraversal.ts#L160)

___

### findLocal

▸ `Private` **findLocal**(`scope`, `key`, `allowedTags`): `undefined` \| [`Model`](model.Model-1.md)

Search for a direct child by name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | [`Model`](model.Model-1.md) |
| `key` | [`ElementSelector`](../modules/export._internal_.ModelTraversal.md#elementselector) |
| `allowedTags` | [`ElementTag`](../enums/model.ElementTag.md)[] |

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:551](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/logic/ModelTraversal.ts#L551)

___

### findMember

▸ **findMember**(`scope`, `key`, `allowedTags`): `undefined` \| [`Model`](model.Model-1.md)

Search inherited scope for a named member.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | `undefined` \| [`Model`](model.Model-1.md) |
| `key` | [`ElementSelector`](../modules/export._internal_.ModelTraversal.md#elementselector) |
| `allowedTags` | [`ElementTag`](../enums/model.ElementTag.md)[] |

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:351](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/logic/ModelTraversal.ts#L351)

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

[packages/matter.js/src/model/logic/ModelTraversal.ts:370](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/logic/ModelTraversal.ts#L370)

___

### findMetabase

▸ **findMetabase**(`model`): `undefined` \| [`Model`](model.Model-1.md)

Find the model in my inheritance hierarchy that has semantic meaning.
This will be the first inherited model with a metatype.

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `undefined` \| [`Model`](model.Model-1.md) |

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:126](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/logic/ModelTraversal.ts#L126)

___

### findOwner

▸ **findOwner**<`T`\>(`constructor`, `model`): `undefined` \| `T`

Find an owning model of a specific type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Model`](model.Model-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | [`Constructor`](../modules/model.Model.md#constructor)<`T`\> |
| `model` | `undefined` \| [`Model`](model.Model-1.md) |

#### Returns

`undefined` \| `T`

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:490](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/logic/ModelTraversal.ts#L490)

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

[packages/matter.js/src/model/logic/ModelTraversal.ts:453](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/logic/ModelTraversal.ts#L453)

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

[packages/matter.js/src/model/logic/ModelTraversal.ts:444](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/logic/ModelTraversal.ts#L444)

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

[packages/matter.js/src/model/logic/ModelTraversal.ts:503](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/logic/ModelTraversal.ts#L503)

___

### findShadow

▸ **findShadow**(`model`): `undefined` \| [`Model`](model.Model-1.md)

Find a child in the parent's inheritance hierarchy with the same tag
and ID/name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `undefined` \| [`Model`](model.Model-1.md) |

#### Returns

`undefined` \| [`Model`](model.Model-1.md)

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:234](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/logic/ModelTraversal.ts#L234)

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

[packages/matter.js/src/model/logic/ModelTraversal.ts:413](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/logic/ModelTraversal.ts#L413)

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

[packages/matter.js/src/model/logic/ModelTraversal.ts:201](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/logic/ModelTraversal.ts#L201)

___

### getTypeName

▸ **getTypeName**(`model`): `undefined` \| `string`

Determine the type for a model.  This is the string name of the base
model.  Usually this is simply the type field but we infer the type of
some datatypes based on their parent's type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `undefined` \| [`Model`](model.Model-1.md) |

#### Returns

`undefined` \| `string`

#### Defined in

[packages/matter.js/src/model/logic/ModelTraversal.ts:68](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/logic/ModelTraversal.ts#L68)

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

[packages/matter.js/src/model/logic/ModelTraversal.ts:179](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/logic/ModelTraversal.ts#L179)

___

### operation

▸ **operation**<`T`\>(`operator`, `toDismiss?`): `T`

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

[packages/matter.js/src/model/logic/ModelTraversal.ts:34](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/logic/ModelTraversal.ts#L34)

___

### operationWithDismissal

▸ **operationWithDismissal**<`T`\>(`toDismiss`, `operator`): `T`

Perform an operation with a model dismissed from consideration for type
lookup.

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

[packages/matter.js/src/model/logic/ModelTraversal.ts:59](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/logic/ModelTraversal.ts#L59)

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

[packages/matter.js/src/model/logic/ModelTraversal.ts:518](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/logic/ModelTraversal.ts#L518)

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

[packages/matter.js/src/model/logic/ModelTraversal.ts:535](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/logic/ModelTraversal.ts#L535)
