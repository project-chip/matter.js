[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / FixedLabel

# Namespace: FixedLabel

[cluster/export](cluster_export.md).FixedLabel

## Table of contents

### Interfaces

- [Cluster](../interfaces/cluster_export.FixedLabel.Cluster.md)

### Variables

- [Cluster](cluster_export.FixedLabel.md#cluster)
- [ClusterInstance](cluster_export.FixedLabel.md#clusterinstance)
- [Complete](cluster_export.FixedLabel.md#complete)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.FixedLabel.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/FixedLabelCluster.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/FixedLabelCluster.ts#L48)

[packages/matter.js/src/cluster/definitions/FixedLabelCluster.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/FixedLabelCluster.ts#L50)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `labelList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>[], `any`\>  } ; `id`: ``64`` = 0x40; `name`: ``"FixedLabel"`` = "FixedLabel"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.FixedLabel.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/FixedLabelCluster.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/FixedLabelCluster.ts#L20)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.FixedLabel.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/FixedLabelCluster.ts:52](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/FixedLabelCluster.ts#L52)
