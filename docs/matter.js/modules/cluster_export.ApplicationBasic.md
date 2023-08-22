[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / ApplicationBasic

# Namespace: ApplicationBasic

[cluster/export](cluster_export.md).ApplicationBasic

## Table of contents

### Enumerations

- [ApplicationStatus](../enums/cluster_export.ApplicationBasic.ApplicationStatus.md)

### Variables

- [Cluster](cluster_export.ApplicationBasic.md#cluster)
- [TlvApplicationStruct](cluster_export.ApplicationBasic.md#tlvapplicationstruct)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](cluster_export.md#cluster)<[`BitSchema`](schema_export.md#bitschema), [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<[`BitSchema`](schema_export.md#bitschema)\>, [`Merge`](util_export.md#merge)<{ `allowedVendorList`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`VendorId`](datatype_export.md#vendorid)[], `any`\> ; `application`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\> ; `applicationName`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`string`, `any`\> ; `applicationVersion`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`string`, `any`\> ; `productId`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `status`: [`Attribute`](cluster_export.md#attribute)<[`ApplicationStatus`](../enums/cluster_export.ApplicationBasic.ApplicationStatus.md), `any`\> ; `vendorId`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<[`VendorId`](datatype_export.md#vendorid), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`string`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<[`BitSchema`](schema_export.md#bitschema)\>\>, {}, {}\>

Application Basic

This cluster provides information about a Content App running on a Video Player device which is represented as
an endpoint (see Device Type Library document).

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.3

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:86](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L86)

___

### TlvApplicationStruct

• `Const` **TlvApplicationStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

This indicates a global identifier for an Application given a catalog.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.3.4.1

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:29](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L29)
