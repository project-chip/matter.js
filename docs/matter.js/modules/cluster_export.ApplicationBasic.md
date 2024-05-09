[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / ApplicationBasic

# Namespace: ApplicationBasic

[cluster/export](cluster_export.md).ApplicationBasic

## Table of contents

### Enumerations

- [ApplicationStatus](../enums/cluster_export.ApplicationBasic.ApplicationStatus.md)

### Interfaces

- [ApplicationStruct](../interfaces/cluster_export.ApplicationBasic.ApplicationStruct.md)
- [Cluster](../interfaces/cluster_export.ApplicationBasic.Cluster.md)

### Variables

- [Cluster](cluster_export.ApplicationBasic.md#cluster)
- [ClusterInstance](cluster_export.ApplicationBasic.md#clusterinstance)
- [Complete](cluster_export.ApplicationBasic.md#complete)
- [TlvApplicationStruct](cluster_export.ApplicationBasic.md#tlvapplicationstruct)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.ApplicationBasic.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:167](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L167)

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:169](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L169)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `allowedVendorList`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`VendorId`](datatype_export.md#vendorid)[], `any`\> ; `application`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `applicationName`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\> ; `applicationVersion`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\> ; `productId`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `status`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ApplicationStatus`](../enums/cluster_export.ApplicationBasic.ApplicationStatus.md), `any`\> ; `vendorId`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<[`VendorId`](datatype_export.md#vendorid), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>  } ; `id`: ``1293`` = 0x50d; `name`: ``"ApplicationBasic"`` = "ApplicationBasic"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.ApplicationBasic.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:85](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L85)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.ApplicationBasic.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:170](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L170)

___

### TlvApplicationStruct

• `Const` **TlvApplicationStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

This indicates a global identifier for an Application given a catalog.

**`See`**

MatterSpecification.v11.Cluster § 6.3.4.1

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L26)
