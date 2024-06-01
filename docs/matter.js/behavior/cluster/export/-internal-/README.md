[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [behavior/cluster/export](../README.md) / \<internal\>

# \<internal\>

## Index

### Namespaces

- [AsyncConstruction](namespaces/AsyncConstruction/README.md)
- [Datasource](namespaces/Datasource/README.md)
- [EndpointType](namespaces/EndpointType/README.md)
- [NetworkBehavior](namespaces/NetworkBehavior/README.md)
- [NodeActivity](namespaces/NodeActivity/README.md)
- [Schema](namespaces/Schema/README.md)
- [SupportedBehaviors](namespaces/SupportedBehaviors/README.md)
- [Val](namespaces/Val/README.md)
- [ValidationLocation](namespaces/ValidationLocation/README.md)
- [ValueSupervisor](namespaces/ValueSupervisor/README.md)

### Enumerations

- [ActionType](enumerations/ActionType.md)

### Classes

- [BehaviorBacking](classes/BehaviorBacking.md)
- [MatterDevice](classes/MatterDevice.md)
- [Mutex](classes/Mutex.md)
- [NetworkBehavior](classes/NetworkBehavior.md)
- [NetworkRuntime](classes/NetworkRuntime.md)
- [NodeActivity](classes/NodeActivity.md)
- [ReactorBacking](classes/ReactorBacking.md)
- [Reactors](classes/Reactors.md)
- [RootSupervisor](classes/RootSupervisor.md)

### Interfaces

- [Action](interfaces/Action.md)
- [ActionContext](interfaces/ActionContext.md)
- [Activity](interfaces/Activity.md)
- [AsyncConstructable](interfaces/AsyncConstructable.md)
- [AsyncConstruction](interfaces/AsyncConstruction.md)
- [Configuration](interfaces/Configuration.md)
- [DataModelPath](interfaces/DataModelPath.md)
- [Datasource](interfaces/Datasource.md)
- [Empty](interfaces/Empty.md)
- [EndpointType](interfaces/EndpointType.md)
- [Mutation](interfaces/Mutation.md)
- [ProductDescription](interfaces/ProductDescription.md)
- [Session](interfaces/Session.md)
- [StateType](interfaces/StateType.md)
- [ValidationLocation](interfaces/ValidationLocation.md)
- [ValueSupervisor](interfaces/ValueSupervisor.md)

## References

### Collection

Re-exports [Collection](namespaces/Val/README.md#collection)

***

### Manage

Re-exports [Manage](namespaces/ValueSupervisor/README.md#manage)

***

### Patch

Re-exports [Patch](namespaces/ValueSupervisor/README.md#patch)

***

### Reference

Re-exports [Reference](namespaces/Val/interfaces/Reference.md)

***

### Validate

Re-exports [Validate](namespaces/ValueSupervisor/README.md#validate)

## Type Aliases

### Schema

> **Schema**: [`ClusterModel`](../../../../model/classes/ClusterModel.md) \| [`ValueModel`](../../../../model/classes/ValueModel.md)

We model behavior using Matter semantics.  For schema we allow any Matter
model that defines a datatype.

Most schema is a [ValueModel](../../../../model/classes/ValueModel.md) which explicitly models data.
[ClusterModel](../../../../model/classes/ClusterModel.md) is also valid schema.

You will see references to "structs" and "lists" throughout this code.
These are Matter's two container types and map to JS objects and arrays
respectively.

If the schema is a [ClusterModel](../../../../model/classes/ClusterModel.md), it models a struct with attributes
as fields.

#### Source

[packages/matter.js/src/behavior/supervision/Schema.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/Schema.ts#L23)

***

### Struct

> **Struct**: `Record`\<`string`, [`Val`](README.md#val)\>

Type for Matter structs.  In JS this is an object with string keys.

#### Source

[packages/matter.js/src/behavior/state/Val.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/Val.ts#L19)

***

### SupportedBehaviors

> **SupportedBehaviors**: `Record`\<`string`, [`Type`](../../../export/namespaces/Behavior/interfaces/Type.md)\>

A set of behaviors an endpoint supports.

#### Source

[packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts#L19)

***

### Val

> **Val**: `unknown`

General type for state values.

#### Source

[packages/matter.js/src/behavior/state/Val.ts:13](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/Val.ts#L13)

## Functions

### AsyncConstruction()

> **AsyncConstruction**\<`T`\>(`subject`, `initializer`?, `options`?): [`AsyncConstruction`](interfaces/AsyncConstruction.md)\<`T`\>

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`AsyncConstructable`](interfaces/AsyncConstructable.md)\<`any`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `subject` | `T` |
| `initializer`? | () => [`MaybePromise`](../../../../util/export/README.md#maybepromiset) |
| `options`? | [`Options`](namespaces/AsyncConstruction/interfaces/Options.md) |

#### Returns

[`AsyncConstruction`](interfaces/AsyncConstruction.md)\<`T`\>

#### Source

[packages/matter.js/src/util/AsyncConstruction.ts:141](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/AsyncConstruction.ts#L141)

***

### DataModelPath()

> **DataModelPath**(`id`, `type`?): [`DataModelPath`](interfaces/DataModelPath.md)

Create a [DataModelPath](README.md#datamodelpath) rooted at id.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` \| `number` |
| `type`? | `string` |

#### Returns

[`DataModelPath`](interfaces/DataModelPath.md)

#### Source

[packages/matter.js/src/endpoint/DataModelPath.ts:29](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/DataModelPath.ts#L29)

***

### Datasource()

> **Datasource**\<`T`\>(`options`): [`Datasource`](interfaces/Datasource.md)\<`T`\>

Create a new datasource.

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`StateType`](interfaces/StateType.md) | [`StateType`](interfaces/StateType.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`Options`](namespaces/Datasource/interfaces/Options.md)\<`T`\> |

#### Returns

[`Datasource`](interfaces/Datasource.md)\<`T`\>

#### Source

[packages/matter.js/src/behavior/state/managed/Datasource.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/managed/Datasource.ts#L61)

***

### EndpointType()

> **EndpointType**\<`T`\>(`options`): [`For`](namespaces/EndpointType/README.md#fort)\<`T`\>

Define a new type of endpoint.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Options`](namespaces/EndpointType/interfaces/Options.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `T` |

#### Returns

[`For`](namespaces/EndpointType/README.md#fort)\<`T`\>

#### Source

[packages/matter.js/src/endpoint/type/EndpointType.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/type/EndpointType.ts#L26)

***

### SupportedBehaviors()

> **SupportedBehaviors**\<`T`\>(...`types`): [`MapOf`](namespaces/SupportedBehaviors/README.md#mapoft)\<`T`\>

Create SupportedBehaviors from a list of behavior types.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`List`](namespaces/SupportedBehaviors/README.md#list) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`types` | `T` |

#### Returns

[`MapOf`](namespaces/SupportedBehaviors/README.md#mapoft)\<`T`\>

#### Source

[packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts#L19)
