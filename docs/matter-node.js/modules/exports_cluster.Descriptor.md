[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / Descriptor

# Namespace: Descriptor

[exports/cluster](exports_cluster.md).Descriptor

## Table of contents

### Interfaces

- [Cluster](../interfaces/exports_cluster.Descriptor.Cluster.md)
- [DeviceTypeStruct](../interfaces/exports_cluster.Descriptor.DeviceTypeStruct.md)

### Variables

- [Cluster](exports_cluster.Descriptor.md#cluster)
- [ClusterInstance](exports_cluster.Descriptor.md#clusterinstance)
- [Complete](exports_cluster.Descriptor.md#complete)
- [TlvDeviceTypeStruct](exports_cluster.Descriptor.md#tlvdevicetypestruct)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.Descriptor.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DescriptorCluster.d.ts:115

packages/matter.js/dist/esm/cluster/definitions/DescriptorCluster.d.ts:117

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `clientList`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/ClusterId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_ClusterId_.md)[], `any`\> ; `deviceTypeList`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `partsList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EndpointNumber"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EndpointNumber_.md)[], `any`\> ; `serverList`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/ClusterId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_ClusterId_.md)[], `any`\>  } ; `id`: ``29`` ; `name`: ``"Descriptor"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.Descriptor.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DescriptorCluster.d.ts:45

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/exports_cluster.Descriptor.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DescriptorCluster.d.ts:118

___

### TlvDeviceTypeStruct

• `Const` **TlvDeviceTypeStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

The device type and revision define endpoint conformance to a release of a device type definition. See the Data
Model specification for more information.

**`See`**

MatterSpecification.v11.Core § 9.5.4.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DescriptorCluster.d.ts:18
