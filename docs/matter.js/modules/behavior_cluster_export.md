[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/cluster/export

# Module: behavior/cluster/export

## Table of contents

### Modules

- [\<internal\>](behavior_cluster_export._internal_.md)

### Namespaces

- [ClusterBehavior](behavior_cluster_export.ClusterBehavior.md)
- [ClusterEvents](behavior_cluster_export.ClusterEvents.md)
- [ClusterInterface](behavior_cluster_export.ClusterInterface.md)
- [ClusterState](behavior_cluster_export.ClusterState.md)

### Classes

- [ClusterBehavior](../classes/behavior_cluster_export.ClusterBehavior-1.md)
- [ValidatedElements](../classes/behavior_cluster_export.ValidatedElements.md)

### Type Aliases

- [ClusterEvents](behavior_cluster_export.md#clusterevents)
- [ClusterInterface](behavior_cluster_export.md#clusterinterface)
- [ClusterOf](behavior_cluster_export.md#clusterof)
- [ClusterState](behavior_cluster_export.md#clusterstate)

### Functions

- [createType](behavior_cluster_export.md#createtype)
- [introspectionInstanceOf](behavior_cluster_export.md#introspectioninstanceof)

## Type Aliases

### ClusterEvents

Ƭ **ClusterEvents**\<`ClusterT`, `BaseT`\>: `Omit`\<`InstanceType`\<`BaseT`[``"Events"``]\>, keyof [`Properties`](behavior_cluster_export.ClusterEvents.md#properties)\<[`ClusterOf`](behavior_cluster_export.md#clusterof)\<`BaseT`\>\>\> & [`Properties`](behavior_cluster_export.ClusterEvents.md#properties)\<`ClusterT`\>

Event instance type for ClusterBehaviors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ClusterT` | extends [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md) |
| `BaseT` | extends [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterEvents.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterEvents.ts#L17)

[packages/matter.js/src/behavior/cluster/ClusterEvents.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterEvents.ts#L23)

___

### ClusterInterface

Ƭ **ClusterInterface**\<`F`\>: `Object`

This type defines methods for a behavior grouped by named cluster component.

Ideally we would do this using a simple mapped type.  Unfortunately as of
TypeScript 5.2 there is no way to define a method using a mapped type.
Instead the mapped type defines function properties.

Function properties work identically to methods semantically but TypeScript
doesn't allow you to override them with standard methods (see error TS2425).

Thus we are forced to generate an interface for every cluster component
and assemble based on selected features using logic that mirrors
[ClusterComposer.Of](cluster_export.ClusterComposer.md#of).

Note that we only need to do this for commands.  The public interface for
attributes and events consists solely of properties so we generate using
mapped types.  This is handled by ClusterState and
ClusterEvents respectively.

If TS team ever fixes:

  https://github.com/microsoft/TypeScript/issues/27965

...then we can remove the interface and just use
[ClusterInterface.MappedMethodsOf](behavior_cluster_export.ClusterInterface.md#mappedmethodsof).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](schema_export.md#bitschema) = {} |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [`Component`](../interfaces/behavior_cluster_export.ClusterInterface.Component.md)\<`F`\>[] |

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterInterface.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterInterface.ts#L39)

[packages/matter.js/src/behavior/cluster/ClusterInterface.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterInterface.ts#L43)

___

### ClusterOf

Ƭ **ClusterOf**\<`B`\>: `B` extends \{ `cluster`: infer C  } ? `C` : [`Unknown`](cluster_export.ClusterType.md#unknown)

The cluster type for a behavior.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehaviorUtil.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehaviorUtil.ts#L87)

___

### ClusterState

Ƭ **ClusterState**\<`C`, `B`\>: [`Type`](behavior_cluster_export.ClusterState.md#type)\<`C`, `B`\>

Instance type for complete (endpoint + fabric) state.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md) |
| `B` | extends [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterState.ts:15](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterState.ts#L15)

[packages/matter.js/src/behavior/cluster/ClusterState.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterState.ts#L17)

## Functions

### createType

▸ **createType**\<`C`\>(`cluster`, `base`, `schema?`): (...`args`: `any`) => `any`

This is the actual implementation of ClusterBehavior.for().  The result must match [ClusterBehavior.Type](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)<C>.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | `C` |
| `base` | [`Type`](../interfaces/behavior_export.Behavior.Type.md) |
| `schema?` | [`Schema`](behavior_cluster_export._internal_.md#schema) |

#### Returns

`fn`

• **new createType**(`...args`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

##### Returns

`any`

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehaviorUtil.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehaviorUtil.ts#L30)

___

### introspectionInstanceOf

▸ **introspectionInstanceOf**(`type`): `Record`\<`string`, (...`args`: `any`[]) => `any`\>

Create a non-functional instance of a [Behavior](../classes/behavior_export.Behavior-1.md) for introspection purposes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Returns

`Record`\<`string`, (...`args`: `any`[]) => `any`\>

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehaviorUtil.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehaviorUtil.ts#L23)
