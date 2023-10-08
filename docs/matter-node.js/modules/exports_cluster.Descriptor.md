[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / Descriptor

# Namespace: Descriptor

[exports/cluster](exports_cluster.md).Descriptor

## Table of contents

### Variables

- [Cluster](exports_cluster.Descriptor.md#cluster)
- [TlvDeviceTypeStruct](exports_cluster.Descriptor.md#tlvdevicetypestruct)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `clientList`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/ClusterId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_ClusterId_.md)[], `any`\> ; `deviceTypeList`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `partsList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EndpointNumber"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EndpointNumber_.md)[], `any`\> ; `serverList`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/ClusterId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_ClusterId_.md)[], `any`\>  } ; `id`: ``29`` ; `name`: ``"Descriptor"`` ; `revision`: ``1``  }\>

Descriptor

NOTE The Descriptor cluster is meant to replace the support from the Zigbee Device Object (ZDO) for describing a
node, its endpoints and clusters.

This cluster describes an endpoint instance on the node, independently from other endpoints, but also allows
composition of endpoints to conform to complex device type patterns.

This cluster supports a list of one or more device type identifiers that represent conformance to device type
specifications.

The cluster supports a PartsList attribute that is a list of zero or more endpoints to support a composed device
type.

**`See`**

MatterCoreSpecificationV1_1 § 9.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DescriptorCluster.d.ts:49

___

### TlvDeviceTypeStruct

• `Const` **TlvDeviceTypeStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

The device type and revision define endpoint conformance to a release of a device type definition. See the Data
Model specification for more information.

**`See`**

MatterCoreSpecificationV1_1 § 9.5.4.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DescriptorCluster.d.ts:16
