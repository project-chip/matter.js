[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / MutableCluster

# Namespace: MutableCluster

[exports/cluster](exports_cluster.md).MutableCluster

## Table of contents

### Interfaces

- [ExtensibleOnly](../interfaces/exports_cluster.MutableCluster.ExtensibleOnly.md)
- [Methods](../interfaces/exports_cluster.MutableCluster.Methods.md)

### Functions

- [AsConditional](exports_cluster.MutableCluster.md#asconditional)
- [Component](exports_cluster.MutableCluster.md#component)
- [ExtensibleOnly](exports_cluster.MutableCluster.md#extensibleonly)
- [Extensions](exports_cluster.MutableCluster.md#extensions)

## Functions

### AsConditional

▸ **AsConditional**\<`ClusterT`, `E`, `OI`, `MI`\>(`element`, `«destructured»`): `E` & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| `MI` ; `optional`: ``true`` ; `optionalIf`: [] \| `OI`  }

Create a conditional version of an unconditional element definition.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ClusterT` | extends [`ClusterType`](../interfaces/exports_cluster.ClusterType-1.md) |
| `E` | extends [`Attribute`](exports_cluster.ClusterType.md#attribute) \| [`Command`](exports_cluster.ClusterType.md#command) \| [`Event`](exports_cluster.ClusterType.md#event) |
| `OI` | extends [`ConditionalFeatureList`](exports_cluster.md#conditionalfeaturelist)\<`ClusterT`[``"features"``]\> |
| `MI` | extends [`ConditionalFeatureList`](exports_cluster.md#conditionalfeaturelist)\<`ClusterT`[``"features"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `E` |
| `«destructured»` | `Object` |
| › `mandatoryIf?` | `MI` |
| › `optionalIf?` | `OI` |

#### Returns

`E` & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| `MI` ; `optional`: ``true`` ; `optionalIf`: [] \| `OI`  }

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:66

___

### Component

▸ **Component**\<`T`\>(`elements`): `T`

Define a "component" -- a set of elements that may be added to a cluster.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Partial`\<[`Options`](exports_cluster.ClusterType.md#options)\<{}\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `elements` | `T` |

#### Returns

`T`

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:25

___

### ExtensibleOnly

▸ **ExtensibleOnly**\<`T`\>(`options`): [`ExtensibleOnly`](../interfaces/exports_cluster.MutableCluster.ExtensibleOnly.md)\<`T`\>

Create a factory for clusters that require extension.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Options`](exports_cluster.ClusterType.md#options)\<{}\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `T` |

#### Returns

[`ExtensibleOnly`](../interfaces/exports_cluster.MutableCluster.ExtensibleOnly.md)\<`T`\>

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:62

___

### Extensions

▸ **Extensions**\<`T`\>(`...extensions`): `T`

Define a cluster's extension set.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends readonly [`Extension`](../interfaces/exports_cluster.ClusterType.Extension.md)\<{}\>[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...extensions` | `T` |

#### Returns

`T`

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:29
