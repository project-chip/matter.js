[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / Descriptor

# Namespace: Descriptor

[cluster/export](cluster_export.md).Descriptor

## Table of contents

### Interfaces

- [Cluster](../interfaces/cluster_export.Descriptor.Cluster.md)
- [DeviceTypeStruct](../interfaces/cluster_export.Descriptor.DeviceTypeStruct.md)

### Variables

- [Cluster](cluster_export.Descriptor.md#cluster)
- [ClusterInstance](cluster_export.Descriptor.md#clusterinstance)
- [Complete](cluster_export.Descriptor.md#complete)
- [TlvDeviceTypeStruct](cluster_export.Descriptor.md#tlvdevicetypestruct)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.Descriptor.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/DescriptorCluster.ts:118](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DescriptorCluster.ts#L118)

[packages/matter.js/src/cluster/definitions/DescriptorCluster.ts:120](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DescriptorCluster.ts#L120)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `clientList`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>[], `any`\> ; `deviceTypeList`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `deviceType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DeviceTypeId`](datatype_export.md#devicetypeid)\<`number`\>\> ; `revision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>[], `any`\> ; `partsList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)[], `any`\> ; `serverList`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>[], `any`\>  } ; `id`: ``29`` = 0x1d; `name`: ``"Descriptor"`` = "Descriptor"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.Descriptor.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/DescriptorCluster.ts:58](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DescriptorCluster.ts#L58)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.Descriptor.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/DescriptorCluster.ts:121](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DescriptorCluster.ts#L121)

___

### TlvDeviceTypeStruct

• `Const` **TlvDeviceTypeStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `deviceType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DeviceTypeId`](datatype_export.md#devicetypeid)\<`number`\>\> ; `revision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

The device type and revision define endpoint conformance to a release of a device type definition. See the Data
Model specification for more information.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.5.4.1

#### Defined in

[packages/matter.js/src/cluster/definitions/DescriptorCluster.ts:29](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DescriptorCluster.ts#L29)
