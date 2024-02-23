[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / BinaryInputBasic

# Namespace: BinaryInputBasic

[exports/cluster](exports_cluster.md).BinaryInputBasic

## Table of contents

### Variables

- [Cluster](exports_cluster.BinaryInputBasic.md#cluster)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `activeText`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `applicationType`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `description`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `inactiveText`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `outOfService`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`boolean`, `any`\> ; `polarity`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `presentValue`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`boolean`, `any`\> ; `reliability`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `statusFlags`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\>  } ; `id`: ``15`` ; `name`: ``"BinaryInputBasic"`` ; `revision`: ``1``  }\>

Binary Input (Basic)

An interface for reading the value of a binary measurement and accessing various characteristics of that
measurement.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BinaryInputBasicCluster.d.ts:16
