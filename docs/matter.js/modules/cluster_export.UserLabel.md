[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / UserLabel

# Namespace: UserLabel

[cluster/export](cluster_export.md).UserLabel

## Table of contents

### Interfaces

- [Cluster](../interfaces/cluster_export.UserLabel.Cluster.md)

### Variables

- [Cluster](cluster_export.UserLabel.md#cluster)
- [ClusterInstance](cluster_export.UserLabel.md#clusterinstance)
- [Complete](cluster_export.UserLabel.md#complete)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.UserLabel.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/UserLabelCluster.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/UserLabelCluster.ts#L47)

[packages/matter.js/src/cluster/definitions/UserLabelCluster.ts:49](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/UserLabelCluster.ts#L49)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `labelList`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>[], `any`\>  } ; `id`: ``65`` = 0x41; `name`: ``"UserLabel"`` = "UserLabel"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.UserLabel.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/UserLabelCluster.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/UserLabelCluster.ts#L20)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.UserLabel.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/UserLabelCluster.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/UserLabelCluster.ts#L51)
