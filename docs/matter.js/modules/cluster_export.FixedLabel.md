[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / FixedLabel

# Namespace: FixedLabel

[cluster/export](cluster_export.md).FixedLabel

## Table of contents

### Variables

- [Cluster](cluster_export.FixedLabel.md#cluster)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `labelList`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>[], `any`\>  } ; `id`: ``64`` = 0x40; `name`: ``"FixedLabel"`` = "FixedLabel"; `revision`: ``1`` = 1 }\>

Fixed Label

This cluster provides a feature for the device to tag an endpoint with zero or more read only labels. Examples:

  • A bridge can use this to indicate grouping of bridged devices. For example: All bridged devices whose
    endpoints have an entry in their LabelList "room":"bedroom 2" are in the same (bed)room.

  • A manufacturer can use this to identify a characteristic of an endpoint. For example to identify the
    endpoints of a luminaire, one pointing up, the other pointing down, one of the endpoints would have a
    LabelList entry "orientation":"up" while the other would have "orientation":"down". Using such indication,
    the user interface of a Node controlling this luminaire knows which of the endpoints is which of the lights.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.8

#### Defined in

[packages/matter.js/src/cluster/definitions/FixedLabelCluster.ts:31](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/definitions/FixedLabelCluster.ts#L31)
