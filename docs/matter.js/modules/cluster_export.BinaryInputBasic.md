[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / BinaryInputBasic

# Namespace: BinaryInputBasic

[cluster/export](cluster_export.md).BinaryInputBasic

## Table of contents

### Variables

- [Cluster](cluster_export.BinaryInputBasic.md#cluster)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `activeText`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`string`, `any`\> ; `applicationType`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `description`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`string`, `any`\> ; `inactiveText`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`string`, `any`\> ; `outOfService`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`boolean`, `any`\> ; `polarity`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `presentValue`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`boolean`, `any`\> ; `reliability`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `statusFlags`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `id`: ``15`` = 0xf; `name`: ``"BinaryInputBasic"`` = "BinaryInputBasic"; `revision`: ``1`` = 1 }\>

Binary Input (Basic)

An interface for reading the value of a binary measurement and accessing various characteristics of that
measurement.

#### Defined in

[packages/matter.js/src/cluster/definitions/BinaryInputBasicCluster.ts:22](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/BinaryInputBasicCluster.ts#L22)
