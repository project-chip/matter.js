[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / ApplicationBasic

# Namespace: ApplicationBasic

[exports/cluster](exports_cluster.md).ApplicationBasic

## Table of contents

### Enumerations

- [ApplicationStatus](../enums/exports_cluster.ApplicationBasic.ApplicationStatus.md)

### Variables

- [Cluster](exports_cluster.ApplicationBasic.md#cluster)
- [TlvApplicationStruct](exports_cluster.ApplicationBasic.md#tlvapplicationstruct)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `allowedVendorList`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`VendorId`](exports_datatype.md#vendorid)[], `any`\> ; `application`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `applicationName`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `applicationVersion`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `productId`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `status`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`ApplicationStatus`](../enums/exports_cluster.ApplicationBasic.ApplicationStatus.md), `any`\> ; `vendorId`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<[`VendorId`](exports_datatype.md#vendorid), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\>  } ; `id`: ``1293`` ; `name`: ``"ApplicationBasic"`` ; `revision`: ``1``  }\>

Application Basic

This cluster provides information about a Content App running on a Video Player device which is represented as
an endpoint (see Device Type Library document).

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationBasicCluster.d.ts:67

___

### TlvApplicationStruct

• `Const` **TlvApplicationStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This indicates a global identifier for an Application given a catalog.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.3.4.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationBasicCluster.d.ts:16
