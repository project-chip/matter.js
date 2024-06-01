[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [model](../../README.md) / [\<internal\>](../README.md) / ModelTraversal

# Class: ModelTraversal

This class performs lookups of models in the scope of a specific model.  We use a class so the lookup can maintain
state and guard against circular references.

Any logic that requires traversal of a multi-model ownership or inheritance should use this class.

Note that we don't currently utilize any kind of index when we perform search.  Not currently a problem but may need
to address if it becomes too inefficient.

## Constructors

### new ModelTraversal()

> **new ModelTraversal**(): [`ModelTraversal`](ModelTraversal.md)

#### Returns

[`ModelTraversal`](ModelTraversal.md)

## Properties

### dismissed?

> `private` `optional` **dismissed**: `Set`\<[`Model`](../../classes/Model.md)\>

#### Source

[packages/matter.js/src/model/logic/ModelTraversal.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelTraversal.ts#L27)

***

### operationDepth

> `private` **operationDepth**: `number` = `0`

#### Source

[packages/matter.js/src/model/logic/ModelTraversal.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelTraversal.ts#L26)

***

### defaultRoot

> `static` **defaultRoot**: [`Model`](../../classes/Model.md)

If a model is not owned by a MatterModel, global resolution won't work.
This model acts as a fallback to work around this.

#### Source

[packages/matter.js/src/model/logic/ModelTraversal.ts:578](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelTraversal.ts#L578)

## Methods

### findAccess()

> **findAccess**(`model`, `symbol`, `VM`): [`Access`](../../classes/Access.md)

Access aspects are specialized because access controls are inherited from the owner if not otherwise defined.

That means access controls may come from 5 places, in order of priority:

  1. The model itself
  2. A shadowed model in the owner hierarchy
  3. An overridden model in the model's class hierarchy
  4. A model in the parent hierarchy
  5. Access.Default

This method uses [findAspect](ModelTraversal.md#findaspect) for 1-3 then extends the result with 4 & 5 as necessary until
[Access.complete](../../classes/Access.md#complete) is true.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | `undefined` \| [`ValueModel`](../../classes/ValueModel.md) |
| `symbol` | `symbol` |
| `VM` | *typeof* [`ValueModel`](../../classes/ValueModel.md) |

#### Returns

[`Access`](../../classes/Access.md)

#### Source

[packages/matter.js/src/model/logic/ModelTraversal.ts:352](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelTraversal.ts#L352)

***

### findAspect()

> **findAspect**(`model`, `symbol`): `undefined` \| [`Aspect`](../../classes/Aspect.md)\<`any`\>

Get an aspect that reflects extension of any shadowed aspects.  Note that this searches the parent's inheritance
and the model's inheritance. This is because aspects can be inherited by overriding an element in the parent or
by direct type inheritance.  Aspects in shadowed elements take priority as they are presumably more specific.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | `undefined` \| [`Model`](../../classes/Model.md) |
| `symbol` | `symbol` |

#### Returns

`undefined` \| [`Aspect`](../../classes/Aspect.md)\<`any`\>

#### Source

[packages/matter.js/src/model/logic/ModelTraversal.ts:256](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelTraversal.ts#L256)

***

### findBase()

> **findBase**(`model`): `undefined` \| [`Model`](../../classes/Model.md)

Find the model a model derives from, if any.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | `undefined` \| [`Model`](../../classes/Model.md) |

#### Returns

`undefined` \| [`Model`](../../classes/Model.md)

#### Source

[packages/matter.js/src/model/logic/ModelTraversal.ts:133](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelTraversal.ts#L133)

***

### findBitDefinition()

> **findBitDefinition**(`scope`, `bit`): `undefined` \| [`FieldModel`](../../classes/FieldModel.md)

Search inherited scope for a bit definition.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `scope` | `undefined` \| [`Model`](../../classes/Model.md) |
| `bit` | `number` |

#### Returns

`undefined` \| [`FieldModel`](../../classes/FieldModel.md)

#### Source

[packages/matter.js/src/model/logic/ModelTraversal.ts:407](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelTraversal.ts#L407)

***

### findConstraint()

> **findConstraint**(`model`, `symbol`, `field`?): `undefined` \| [`Constraint`](../../classes/Constraint.md)

Constraint aspects are specialized because we infer constraint fields that are referenced in other models.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`ValueModel`](../../classes/ValueModel.md) |
| `symbol` | `symbol` |
| `field`? | `"max"` \| `"min"` \| `"value"` |

#### Returns

`undefined` \| [`Constraint`](../../classes/Constraint.md)

#### Source

[packages/matter.js/src/model/logic/ModelTraversal.ts:289](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelTraversal.ts#L289)

***

### findDefiningModel()

> **findDefiningModel**(`model`): `undefined` \| [`ValueModel`](../../classes/ValueModel.md)

Find the model this model derives from that has children, if any.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | `undefined` \| [`ValueModel`](../../classes/ValueModel.md) |

#### Returns

`undefined` \| [`ValueModel`](../../classes/ValueModel.md)

#### Source

[packages/matter.js/src/model/logic/ModelTraversal.ts:211](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelTraversal.ts#L211)

***

### findGlobalBase()

> **findGlobalBase**(`model`): `undefined` \| [`Model`](../../classes/Model.md)

Find the first global model this model derives from, if any.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | `undefined` \| [`Model`](../../classes/Model.md) |

#### Returns

`undefined` \| [`Model`](../../classes/Model.md)

#### Source

[packages/matter.js/src/model/logic/ModelTraversal.ts:155](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelTraversal.ts#L155)

***

### findMember()

> **findMember**(`scope`, `key`, `allowedTags`): `undefined` \| [`Model`](../../classes/Model.md)

Search inherited scope for a named member.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `scope` | `undefined` \| [`Model`](../../classes/Model.md) |
| `key` | [`Selector`](../namespaces/Children/README.md#selector) |
| `allowedTags` | [`ElementTag`](../../enumerations/ElementTag.md)[] |

#### Returns

`undefined` \| [`Model`](../../classes/Model.md)

#### Source

[packages/matter.js/src/model/logic/ModelTraversal.ts:375](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelTraversal.ts#L375)

***

### findMembers()

> **findMembers**(`scope`, `allowedTags`): [`Model`](../../classes/Model.md)[]

Retrieve all children of a specific type, inherited or otherwise.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `scope` | [`Model`](../../classes/Model.md) |
| `allowedTags` | [`ElementTag`](../../enumerations/ElementTag.md)[] |

#### Returns

[`Model`](../../classes/Model.md)[]

#### Source

[packages/matter.js/src/model/logic/ModelTraversal.ts:390](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelTraversal.ts#L390)

***

### findMetabase()

> **findMetabase**(`model`): `undefined` \| [`Model`](../../classes/Model.md)

Find the model in my inheritance hierarchy that has semantic meaning. This will be the first inherited model with
a metatype.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | `undefined` \| [`Model`](../../classes/Model.md) |

#### Returns

`undefined` \| [`Model`](../../classes/Model.md)

#### Source

[packages/matter.js/src/model/logic/ModelTraversal.ts:121](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelTraversal.ts#L121)

***

### findOwner()

> **findOwner**\<`T`\>(`constructor`, `model`): `undefined` \| `T`

Find an owning model of a specific type.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Model`](../../classes/Model.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `constructor` | [`Type`](../../namespaces/Model/README.md#typet)\<`T`\> |
| `model` | `undefined` \| [`Model`](../../classes/Model.md) |

#### Returns

`undefined` \| `T`

#### Source

[packages/matter.js/src/model/logic/ModelTraversal.ts:511](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelTraversal.ts#L511)

***

### findReferences()

> **findReferences**(`scope`, `type`): [`Model`](../../classes/Model.md)[]

Find all children of a node that reference a specific type.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `scope` | `undefined` \| [`Model`](../../classes/Model.md) |
| `type` | `undefined` \| [`Model`](../../classes/Model.md) |

#### Returns

[`Model`](../../classes/Model.md)[]

#### Source

[packages/matter.js/src/model/logic/ModelTraversal.ts:474](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelTraversal.ts#L474)

***

### findResponse()

> **findResponse**(`command`): `undefined` \| [`Model`](../../classes/Model.md)

Find the response model for a command.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `command` | [`CommandModel`](../../classes/CommandModel.md) |

#### Returns

`undefined` \| [`Model`](../../classes/Model.md)

#### Source

[packages/matter.js/src/model/logic/ModelTraversal.ts:465](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelTraversal.ts#L465)

***

### findRoot()

> **findRoot**(`model`): `undefined` \| [`Model`](../../classes/Model.md)

Find the root model.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | `undefined` \| [`Model`](../../classes/Model.md) |

#### Returns

`undefined` \| [`Model`](../../classes/Model.md)

#### Source

[packages/matter.js/src/model/logic/ModelTraversal.ts:526](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelTraversal.ts#L526)

***

### findShadow()

> **findShadow**(`model`): `undefined` \| [`Model`](../../classes/Model.md)

Find a child in the parent's inheritance hierarchy with the same tag and ID/name.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | `undefined` \| [`Model`](../../classes/Model.md) |

#### Returns

`undefined` \| [`Model`](../../classes/Model.md)

#### Source

[packages/matter.js/src/model/logic/ModelTraversal.ts:228](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelTraversal.ts#L228)

***

### findType()

> **findType**(`scope`, `name`, `tag`): `undefined` \| [`Model`](../../classes/Model.md)

Search inherited and structural type scope for a named type.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `scope` | `undefined` \| [`Model`](../../classes/Model.md) |
| `name` | `string` |
| `tag` | [`ElementTag`](../../enumerations/ElementTag.md) |

#### Returns

`undefined` \| [`Model`](../../classes/Model.md)

#### Source

[packages/matter.js/src/model/logic/ModelTraversal.ts:433](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelTraversal.ts#L433)

***

### findXref()

> **findXref**(`model`): `undefined` \| [`CrossReference`](../../namespaces/Model/classes/CrossReference.md)

Find an xref from this model or a parent.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | `undefined` \| [`Model`](../../classes/Model.md) |

#### Returns

`undefined` \| [`CrossReference`](../../namespaces/Model/classes/CrossReference.md)

#### Source

[packages/matter.js/src/model/logic/ModelTraversal.ts:196](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelTraversal.ts#L196)

***

### getTypeName()

> **getTypeName**(`model`): `undefined` \| `string`

Determine the type for a model.  This is the string name of the base model.  Usually this is simply the type
field but we infer the type of some datatypes based on their parent's type.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | `undefined` \| [`Model`](../../classes/Model.md) |

#### Returns

`undefined` \| `string`

#### Source

[packages/matter.js/src/model/logic/ModelTraversal.ts:64](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelTraversal.ts#L64)

***

### instanceOf()

> **instanceOf**(`model`, `other`): `boolean`

Determine whether this model derives from another.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | `undefined` \| [`Model`](../../classes/Model.md) |
| `other` | `undefined` \| [`AnyElement`](../../README.md#anyelement) \| [`Model`](../../classes/Model.md) |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/model/logic/ModelTraversal.ts:174](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelTraversal.ts#L174)

***

### operation()

> **operation**\<`T`\>(`operator`, `toDismiss`?): `T`

Perform an operation with iteration tracking.  If iteration depth limit

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `operator` | () => `T` |
| `toDismiss`? | [`Model`](../../classes/Model.md) |

#### Returns

`T`

#### Source

[packages/matter.js/src/model/logic/ModelTraversal.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelTraversal.ts#L32)

***

### operationWithDismissal()

> **operationWithDismissal**\<`T`\>(`toDismiss`, `operator`): `T`

Perform an operation with a model dismissed from consideration for type lookup.

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `toDismiss` | `undefined` \| [`Model`](../../classes/Model.md) |
| `operator` | () => `T` |

#### Returns

`T`

#### Source

[packages/matter.js/src/model/logic/ModelTraversal.ts:56](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelTraversal.ts#L56)

***

### visit()

> **visit**(`model`, `visitor`): `undefined` \| `boolean`

Visit all nodes in the model tree.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`Model`](../../classes/Model.md) |
| `visitor` | (`model`) => `boolean` \| `void` |

#### Returns

`undefined` \| `boolean`

#### Source

[packages/matter.js/src/model/logic/ModelTraversal.ts:544](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelTraversal.ts#L544)

***

### visitInheritance()

> **visitInheritance**(`model`, `visitor`): `undefined` \| `boolean`

Visit all nodes in the inheritance hierarchy until the visitor returns false.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | `undefined` \| [`Model`](../../classes/Model.md) |
| `visitor` | (`model`) => `boolean` \| `void` |

#### Returns

`undefined` \| `boolean`

#### Source

[packages/matter.js/src/model/logic/ModelTraversal.ts:561](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelTraversal.ts#L561)
