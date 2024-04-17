[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/cluster/export](behavior_cluster_export.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### References

- [Collection](behavior_cluster_export._internal_.md#collection)
- [Manage](behavior_cluster_export._internal_.md#manage)
- [Patch](behavior_cluster_export._internal_.md#patch)
- [Reference](behavior_cluster_export._internal_.md#reference)
- [Validate](behavior_cluster_export._internal_.md#validate)

### Namespaces

- [AsyncConstruction](behavior_cluster_export._internal_.AsyncConstruction.md)
- [Datasource](behavior_cluster_export._internal_.Datasource.md)
- [EndpointType](behavior_cluster_export._internal_.EndpointType.md)
- [NetworkBehavior](behavior_cluster_export._internal_.NetworkBehavior.md)
- [NodeActivity](behavior_cluster_export._internal_.NodeActivity.md)
- [Schema](behavior_cluster_export._internal_.Schema.md)
- [SupportedBehaviors](behavior_cluster_export._internal_.SupportedBehaviors.md)
- [Val](behavior_cluster_export._internal_.Val.md)
- [ValidationLocation](behavior_cluster_export._internal_.ValidationLocation.md)
- [ValueSupervisor](behavior_cluster_export._internal_.ValueSupervisor.md)

### Enumerations

- [ActionType](../enums/behavior_cluster_export._internal_.ActionType.md)

### Classes

- [BehaviorBacking](../classes/behavior_cluster_export._internal_.BehaviorBacking.md)
- [MatterDevice](../classes/behavior_cluster_export._internal_.MatterDevice.md)
- [Mutex](../classes/behavior_cluster_export._internal_.Mutex.md)
- [NetworkBehavior](../classes/behavior_cluster_export._internal_.NetworkBehavior-1.md)
- [NetworkRuntime](../classes/behavior_cluster_export._internal_.NetworkRuntime.md)
- [NodeActivity](../classes/behavior_cluster_export._internal_.NodeActivity-1.md)
- [ReactorBacking](../classes/behavior_cluster_export._internal_.ReactorBacking.md)
- [Reactors](../classes/behavior_cluster_export._internal_.Reactors.md)
- [RootSupervisor](../classes/behavior_cluster_export._internal_.RootSupervisor.md)

### Interfaces

- [Action](../interfaces/behavior_cluster_export._internal_.Action.md)
- [ActionContext](../interfaces/behavior_cluster_export._internal_.ActionContext.md)
- [Activity](../interfaces/behavior_cluster_export._internal_.Activity.md)
- [AsyncConstructable](../interfaces/behavior_cluster_export._internal_.AsyncConstructable.md)
- [AsyncConstruction](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)
- [Configuration](../interfaces/behavior_cluster_export._internal_.Configuration.md)
- [DataModelPath](../interfaces/behavior_cluster_export._internal_.DataModelPath.md)
- [Datasource](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)
- [Empty](../interfaces/behavior_cluster_export._internal_.Empty.md)
- [EndpointType](../interfaces/behavior_cluster_export._internal_.EndpointType-1.md)
- [Mutation](../interfaces/behavior_cluster_export._internal_.Mutation.md)
- [ProductDescription](../interfaces/behavior_cluster_export._internal_.ProductDescription.md)
- [Session](../interfaces/behavior_cluster_export._internal_.Session.md)
- [StateType](../interfaces/behavior_cluster_export._internal_.StateType.md)
- [ValidationLocation](../interfaces/behavior_cluster_export._internal_.ValidationLocation-1.md)
- [ValueSupervisor](../interfaces/behavior_cluster_export._internal_.ValueSupervisor-1.md)

### Type Aliases

- [Schema](behavior_cluster_export._internal_.md#schema)
- [Struct](behavior_cluster_export._internal_.md#struct)
- [SupportedBehaviors](behavior_cluster_export._internal_.md#supportedbehaviors)
- [Val](behavior_cluster_export._internal_.md#val)

### Functions

- [AsyncConstruction](behavior_cluster_export._internal_.md#asyncconstruction)
- [DataModelPath](behavior_cluster_export._internal_.md#datamodelpath)
- [Datasource](behavior_cluster_export._internal_.md#datasource)
- [EndpointType](behavior_cluster_export._internal_.md#endpointtype)
- [SupportedBehaviors](behavior_cluster_export._internal_.md#supportedbehaviors-1)

## References

### Collection

Re-exports [Collection](behavior_cluster_export._internal_.Val.md#collection)

___

### Manage

Re-exports [Manage](behavior_cluster_export._internal_.ValueSupervisor.md#manage)

___

### Patch

Re-exports [Patch](behavior_cluster_export._internal_.ValueSupervisor.md#patch)

___

### Reference

Re-exports [Reference](../interfaces/behavior_cluster_export._internal_.Val.Reference.md)

___

### Validate

Re-exports [Validate](behavior_cluster_export._internal_.ValueSupervisor.md#validate)

## Type Aliases

### Schema

Ƭ **Schema**: [`ClusterModel`](../classes/model.ClusterModel-1.md) \| [`ValueModel`](../classes/model.ValueModel.md)

We model behavior using Matter semantics.  For schema we allow any Matter
model that defines a datatype.

Most schema is a [ValueModel](../classes/model.ValueModel.md) which explicitly models data.
[ClusterModel](../classes/model.ClusterModel-1.md) is also valid schema.

You will see references to "structs" and "lists" throughout this code.
These are Matter's two container types and map to JS objects and arrays
respectively.

If the schema is a [ClusterModel](../classes/model.ClusterModel-1.md), it models a struct with attributes
as fields.

#### Defined in

[packages/matter.js/src/behavior/supervision/Schema.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/supervision/Schema.ts#L23)

[packages/matter.js/src/behavior/supervision/Schema.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/supervision/Schema.ts#L25)

___

### Struct

Ƭ **Struct**: `Record`\<`string`, [`Val`](behavior_cluster_export._internal_.md#val)\>

Type for Matter structs.  In JS this is an object with string keys.

#### Defined in

[packages/matter.js/src/behavior/state/Val.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/Val.ts#L19)

___

### SupportedBehaviors

Ƭ **SupportedBehaviors**: `Record`\<`string`, [`Type`](../interfaces/behavior_export.Behavior.Type.md)\>

A set of behaviors an endpoint supports.

#### Defined in

[packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts#L19)

[packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts:14](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts#L14)

[packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts#L30)

___

### Val

Ƭ **Val**: `unknown`

General type for state values.

#### Defined in

[packages/matter.js/src/behavior/state/Val.ts:13](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/Val.ts#L13)

[packages/matter.js/src/behavior/state/Val.ts:15](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/Val.ts#L15)

## Functions

### AsyncConstruction

▸ **AsyncConstruction**\<`T`\>(`subject`, `initializer?`, `options?`): [`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AsyncConstructable`](../interfaces/behavior_cluster_export._internal_.AsyncConstructable.md)\<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `subject` | `T` |
| `initializer?` | () => [`MaybePromise`](util_export.md#maybepromise) |
| `options?` | [`Options`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction.Options.md) |

#### Returns

[`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<`T`\>

#### Defined in

[packages/matter.js/src/util/AsyncConstruction.ts:141](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/AsyncConstruction.ts#L141)

___

### DataModelPath

▸ **DataModelPath**(`id`, `type?`): [`DataModelPath`](../interfaces/behavior_cluster_export._internal_.DataModelPath.md)

Create a [DataModelPath](behavior_cluster_export._internal_.md#datamodelpath) rooted at id.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |
| `type?` | `string` |

#### Returns

[`DataModelPath`](../interfaces/behavior_cluster_export._internal_.DataModelPath.md)

#### Defined in

[packages/matter.js/src/endpoint/DataModelPath.ts:29](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/DataModelPath.ts#L29)

___

### Datasource

▸ **Datasource**\<`T`\>(`options`): [`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<`T`\>

Create a new datasource.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md) = [`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`Options`](../interfaces/behavior_cluster_export._internal_.Datasource.Options.md)\<`T`\> |

#### Returns

[`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<`T`\>

#### Defined in

[packages/matter.js/src/behavior/state/managed/Datasource.ts:59](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/managed/Datasource.ts#L59)

___

### EndpointType

▸ **EndpointType**\<`T`\>(`options`): [`For`](behavior_cluster_export._internal_.EndpointType.md#for)\<`T`\>

Define a new type of endpoint.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Options`](../interfaces/behavior_cluster_export._internal_.EndpointType.Options.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `T` |

#### Returns

[`For`](behavior_cluster_export._internal_.EndpointType.md#for)\<`T`\>

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L26)

___

### SupportedBehaviors

▸ **SupportedBehaviors**\<`T`\>(`...types`): [`MapOf`](behavior_cluster_export._internal_.SupportedBehaviors.md#mapof)\<`T`\>

Create SupportedBehaviors from a list of behavior types.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`List`](behavior_cluster_export._internal_.SupportedBehaviors.md#list) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...types` | `T` |

#### Returns

[`MapOf`](behavior_cluster_export._internal_.SupportedBehaviors.md#mapof)\<`T`\>

#### Defined in

[packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts#L19)
