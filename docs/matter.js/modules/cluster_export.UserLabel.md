[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / UserLabel

# Namespace: UserLabel

[cluster/export](cluster_export.md).UserLabel

## Table of contents

### Variables

- [Cluster](cluster_export.UserLabel.md#cluster)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](cluster_export.md#cluster)<[`BitSchema`](schema_export.md#bitschema), [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<[`BitSchema`](schema_export.md#bitschema)\>, [`Merge`](util_export.md#merge)<{ `labelList`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `value`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>[], `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<[`BitSchema`](schema_export.md#bitschema)\>\>, {}, {}\>

User Label

This cluster provides a feature to tag an endpoint with zero or more labels.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.9

#### Defined in

[packages/matter.js/src/cluster/definitions/UserLabelCluster.ts:22](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/UserLabelCluster.ts#L22)
