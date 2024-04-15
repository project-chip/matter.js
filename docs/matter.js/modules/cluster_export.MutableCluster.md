[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / MutableCluster

# Namespace: MutableCluster

[cluster/export](cluster_export.md).MutableCluster

## Table of contents

### Interfaces

- [ExtensibleOnly](../interfaces/cluster_export.MutableCluster.ExtensibleOnly.md)
- [Methods](../interfaces/cluster_export.MutableCluster.Methods.md)

### Functions

- [AsConditional](cluster_export.MutableCluster.md#asconditional)
- [Component](cluster_export.MutableCluster.md#component)
- [ExtensibleOnly](cluster_export.MutableCluster.md#extensibleonly)
- [Extensions](cluster_export.MutableCluster.md#extensions)

## Functions

### AsConditional

▸ **AsConditional**\<`ClusterT`, `E`, `OI`, `MI`\>(`element`, `«destructured»`): `E` & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| `MI` ; `optional`: ``true`` = true; `optionalIf`: [] \| `OI`  }

Create a conditional version of an unconditional element definition.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ClusterT` | extends [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md) |
| `E` | extends [`Attribute`](cluster_export.ClusterType.md#attribute) \| [`Command`](cluster_export.ClusterType.md#command) \| [`Event`](cluster_export.ClusterType.md#event) |
| `OI` | extends [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<`ClusterT`[``"features"``]\> |
| `MI` | extends [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<`ClusterT`[``"features"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `E` |
| `«destructured»` | `Object` |
| › `mandatoryIf?` | `MI` |
| › `optionalIf?` | `OI` |

#### Returns

`E` & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| `MI` ; `optional`: ``true`` = true; `optionalIf`: [] \| `OI`  }

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:123](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L123)

___

### Component

▸ **Component**\<`T`\>(`elements`): `T`

Define a "component" -- a set of elements that may be added to a cluster.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Partial`\<[`Options`](cluster_export.ClusterType.md#options)\<{}\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `elements` | `T` |

#### Returns

`T`

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:52](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L52)

___

### ExtensibleOnly

▸ **ExtensibleOnly**\<`T`\>(`options`): [`ExtensibleOnly`](../interfaces/cluster_export.MutableCluster.ExtensibleOnly.md)\<`T`\>

Create a factory for clusters that require extension.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Options`](cluster_export.ClusterType.md#options)\<{}\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `T` |

#### Returns

[`ExtensibleOnly`](../interfaces/cluster_export.MutableCluster.ExtensibleOnly.md)\<`T`\>

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:109](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L109)

___

### Extensions

▸ **Extensions**\<`T`\>(`...extensions`): `T`

Define a cluster's extension set.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends readonly [`Extension`](../interfaces/cluster_export.ClusterType.Extension.md)\<{}\>[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...extensions` | `T` |

#### Returns

`T`

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:59](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L59)
