[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / ApplicationBasic

# Namespace: ApplicationBasic

[exports/cluster](exports_cluster.md).ApplicationBasic

## Table of contents

### Enumerations

- [ApplicationStatus](../enums/exports_cluster.ApplicationBasic.ApplicationStatus.md)

### Interfaces

- [ApplicationStruct](../interfaces/exports_cluster.ApplicationBasic.ApplicationStruct.md)
- [Cluster](../interfaces/exports_cluster.ApplicationBasic.Cluster.md)

### Variables

- [Cluster](exports_cluster.ApplicationBasic.md#cluster)
- [ClusterInstance](exports_cluster.ApplicationBasic.md#clusterinstance)
- [Complete](exports_cluster.ApplicationBasic.md#complete)
- [TlvApplicationStruct](exports_cluster.ApplicationBasic.md#tlvapplicationstruct)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.ApplicationBasic.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationBasicCluster.d.ts:161

packages/matter.js/dist/esm/cluster/definitions/ApplicationBasicCluster.d.ts:163

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `allowedVendorList`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`VendorId`](exports_datatype.md#vendorid)[], `any`\> ; `application`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `applicationName`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `applicationVersion`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `productId`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `status`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`ApplicationStatus`](../enums/exports_cluster.ApplicationBasic.ApplicationStatus.md), `any`\> ; `vendorId`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<[`VendorId`](exports_datatype.md#vendorid), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\>  } ; `id`: ``1293`` ; `name`: ``"ApplicationBasic"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.ApplicationBasic.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationBasicCluster.d.ts:71

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/exports_cluster.ApplicationBasic.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationBasicCluster.d.ts:164

___

### TlvApplicationStruct

• `Const` **TlvApplicationStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This indicates a global identifier for an Application given a catalog.

**`See`**

MatterSpecification.v11.Cluster § 6.3.4.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationBasicCluster.d.ts:18
