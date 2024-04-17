[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / BinaryInputBasic

# Namespace: BinaryInputBasic

[cluster/export](cluster_export.md).BinaryInputBasic

## Table of contents

### Interfaces

- [Cluster](../interfaces/cluster_export.BinaryInputBasic.Cluster.md)

### Variables

- [Cluster](cluster_export.BinaryInputBasic.md#cluster)
- [ClusterInstance](cluster_export.BinaryInputBasic.md#clusterinstance)
- [Complete](cluster_export.BinaryInputBasic.md#complete)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.BinaryInputBasic.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/BinaryInputBasicCluster.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BinaryInputBasicCluster.ts#L45)

[packages/matter.js/src/cluster/definitions/BinaryInputBasicCluster.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BinaryInputBasicCluster.ts#L47)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `activeText`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`string`, `any`\> ; `applicationType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `description`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`string`, `any`\> ; `inactiveText`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`string`, `any`\> ; `outOfService`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`boolean`, `any`\> ; `polarity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `presentValue`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`boolean`, `any`\> ; `reliability`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `statusFlags`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\>  } ; `id`: ``15`` = 0xf; `name`: ``"BinaryInputBasic"`` = "BinaryInputBasic"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.BinaryInputBasic.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/BinaryInputBasicCluster.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BinaryInputBasicCluster.ts#L21)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.BinaryInputBasic.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/BinaryInputBasicCluster.ts:49](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BinaryInputBasicCluster.ts#L49)
