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

• `Const` **Cluster**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `allowedVendorList`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`VendorId`](datatype_export.md#vendorid)[], `any`\> ; `application`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\> ; `applicationName`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`string`, `any`\> ; `applicationVersion`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`string`, `any`\> ; `productId`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `status`: [`Attribute`](cluster_export.md#attribute)<[`ApplicationStatus`](../enums/cluster_export.ApplicationBasic.ApplicationStatus.md), `any`\> ; `vendorId`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<[`VendorId`](datatype_export.md#vendorid), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`string`, `any`\>  } ; `id`: ``1293`` = 0x50d; `name`: ``"ApplicationBasic"`` = "ApplicationBasic"; `revision`: ``1`` = 1 }\>

Application Basic

This cluster provides information about a Content App running on a Video Player device which is represented as
an endpoint (see Device Type Library document).

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.3

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:81](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L81)

___

### TlvApplicationStruct

• `Const` **TlvApplicationStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

This indicates a global identifier for an Application given a catalog.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.3.4.1

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:24](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L24)
