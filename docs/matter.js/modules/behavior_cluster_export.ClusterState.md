[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/cluster/export](behavior_cluster_export.md) / ClusterState

# Namespace: ClusterState

[behavior/cluster/export](behavior_cluster_export.md).ClusterState

## Table of contents

### Type Aliases

- [PropertiesOf](behavior_cluster_export.ClusterState.md#propertiesof)
- [PropertiesOfAttributes](behavior_cluster_export.ClusterState.md#propertiesofattributes)
- [Type](behavior_cluster_export.ClusterState.md#type)

## Type Aliases

### PropertiesOf

Ƭ **PropertiesOf**\<`C`\>: [`PropertiesOfAttributes`](behavior_cluster_export.ClusterState.md#propertiesofattributes)\<[`AttributesOf`](cluster_export.ClusterType.md#attributesof)\<`C`\>\>

Properties a cluster contributes state.

#### Type parameters

| Name |
| :------ |
| `C` |

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterState.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterState.ts#L30)

___

### PropertiesOfAttributes

Ƭ **PropertiesOfAttributes**\<`A`\>: \{ -readonly [N in keyof A as A[N] extends Object ? never : A[N] extends Object ? never : N]: TypeFromSchema\<A[N]["schema"]\> } & \{ -readonly [N in keyof A as A[N] extends Object ? never : A[N] extends Object ? N : never]?: TypeFromSchema\<A[N]["schema"]\> } & \{ -readonly [N in keyof A as A[N] extends Object ? A[N] extends Object ? never : N : never]: TypeFromSchema\<A[N]["schema"]\> } & \{ -readonly [N in keyof A as A[N] extends Object ? A[N] extends Object ? N : never : never]?: TypeFromSchema\<A[N]["schema"]\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `Record`\<`string`, [`Attribute`](cluster_export.ClusterType.md#attribute)\> |

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterState.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterState.ts#L32)

___

### Type

Ƭ **Type**\<`C`, `B`\>: `Omit`\<`InstanceType`\<`B`[``"State"``]\>, keyof [`PropertiesOf`](behavior_cluster_export.ClusterState.md#propertiesof)\<[`ClusterOf`](behavior_cluster_export.md#clusterof)\<`B`\>\>\> & [`PropertiesOf`](behavior_cluster_export.ClusterState.md#propertiesof)\<`C`\>

Instance type for ClusterBehavior state.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md) |
| `B` | extends [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterState.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterState.ts#L21)
