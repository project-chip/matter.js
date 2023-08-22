[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / FixedLabel

# Namespace: FixedLabel

[cluster/export](cluster_export.md).FixedLabel

## Table of contents

### Variables

- [Cluster](cluster_export.FixedLabel.md#cluster)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](cluster_export.md#cluster)<[`BitSchema`](schema_export.md#bitschema), [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<[`BitSchema`](schema_export.md#bitschema)\>, [`Merge`](util_export.md#merge)<{ `labelList`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>[], `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<[`BitSchema`](schema_export.md#bitschema)\>\>, {}, {}\>

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

[packages/matter.js/src/cluster/definitions/FixedLabelCluster.ts:30](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/FixedLabelCluster.ts#L30)
