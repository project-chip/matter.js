[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / UserLabel

# Namespace: UserLabel

[cluster/export](cluster_export.md).UserLabel

## Table of contents

### Variables

- [Cluster](cluster_export.UserLabel.md#cluster)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `labelList`: [`WritableAttribute`](cluster_export.md#writableattribute)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>[], `any`\>  } ; `id`: ``65`` = 0x41; `name`: ``"UserLabel"`` = "UserLabel"; `revision`: ``1`` = 1 }\>

User Label

This cluster provides a feature to tag an endpoint with zero or more labels.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.9

#### Defined in

[packages/matter.js/src/cluster/definitions/UserLabelCluster.ts:23](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/UserLabelCluster.ts#L23)
