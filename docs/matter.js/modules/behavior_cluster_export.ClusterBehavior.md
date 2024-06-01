[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/cluster/export](behavior_cluster_export.md) / ClusterBehavior

# Namespace: ClusterBehavior

[behavior/cluster/export](behavior_cluster_export.md).ClusterBehavior

## Table of contents

### Interfaces

- [Type](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)

### Type Aliases

- [Instance](behavior_cluster_export.ClusterBehavior.md#instance)

### Variables

- [ExtensionInterface](behavior_cluster_export.ClusterBehavior.md#extensioninterface)

## Type Aliases

### Instance

Ƭ **Instance**\<`C`, `B`, `I`\>: [`ClusterBehavior`](../classes/behavior_cluster_export.ClusterBehavior-1.md) & `Omit`\<`InstanceType`\<`B`\>, ``"cluster"`` \| ``"state"`` \| ``"events"`` \| ``"initialize"`` \| typeof `Symbol.asyncDispose` \| keyof [`MethodsOf`](behavior_cluster_export.ClusterInterface.md#methodsof)\<[`InterfaceOf`](behavior_cluster_export.ClusterInterface.md#interfaceof)\<`B`\>, [`ClusterOf`](behavior_cluster_export.md#clusterof)\<`B`\>\> \| keyof [`ExtensionInterfaceOf`](behavior_cluster_export.md#extensioninterfaceof)\<`B`\>\> & [`MethodsOf`](behavior_cluster_export.ClusterInterface.md#methodsof)\<`I`, `C`\> & [`ExtensionInterfaceOf`](behavior_cluster_export.md#extensioninterfaceof)\<`B`\> & \{ `cluster`: `C` ; `events`: [`ClusterEvents`](behavior_cluster_export.md#clusterevents)\<`C`, `B`\> ; `features`: `C`[``"supportedFeatures"``] ; `state`: [`ClusterState`](behavior_cluster_export.md#clusterstate)\<`C`, `B`\> ; `[asyncDispose]`: () => [`MaybePromise`](util_export.md#maybepromise)\<`void`\>  }

A fully-typed ClusterBehavior.  This type is derived by combining properties of the base type with properties
contributed by the cluster.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md) |
| `B` | extends [`Type`](../interfaces/behavior_export.Behavior.Type.md) |
| `I` | extends [`ClusterInterface`](behavior_cluster_export.md#clusterinterface) |

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:277](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L277)

## Variables

### ExtensionInterface

• `Const` **ExtensionInterface**: `Object`

This is an unfortunate kludge required to work around https://github.com/microsoft/TypeScript/issues/27965.  It
allows you to designate extension methods available on behavior instances.

Methods designated in this way make it so you can override methods using the syntax:

    override foo() {}

rather than:

    override foo: () => {}

See [ClusterInterface](behavior_cluster_export.md#clusterinterface) for more details.

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:340](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L340)
