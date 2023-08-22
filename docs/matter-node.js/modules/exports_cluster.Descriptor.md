[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / Descriptor

# Namespace: Descriptor

[exports/cluster](exports_cluster.md).Descriptor

## Table of contents

### Variables

- [Cluster](exports_cluster.Descriptor.md#cluster)
- [TlvDeviceTypeStruct](exports_cluster.Descriptor.md#tlvdevicetypestruct)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), {}, {}\>

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

packages/matter.js/dist/cjs/cluster/definitions/DescriptorCluster.d.ts:48

___

### TlvDeviceTypeStruct

• `Const` **TlvDeviceTypeStruct**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

The device type and revision define endpoint conformance to a release of a device type definition. See the Data
Model specification for more information.

**`See`**

MatterCoreSpecificationV1_1 § 9.5.4.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DescriptorCluster.d.ts:15
