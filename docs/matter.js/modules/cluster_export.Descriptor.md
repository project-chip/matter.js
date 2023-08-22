[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / Descriptor

# Namespace: Descriptor

[cluster/export](cluster_export.md).Descriptor

## Table of contents

### Variables

- [Cluster](cluster_export.Descriptor.md#cluster)
- [TlvDeviceTypeStruct](cluster_export.Descriptor.md#tlvdevicetypestruct)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](cluster_export.md#cluster)<[`BitSchema`](schema_export.md#bitschema), [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<[`BitSchema`](schema_export.md#bitschema)\>, [`Merge`](util_export.md#merge)<{ `clientList`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`ClusterId`](datatype_export.md#clusterid)[], `any`\> ; `deviceTypeList`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `deviceType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DeviceTypeId`](datatype_export.md#devicetypeid)\> ; `revision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>[], `any`\> ; `partsList`: [`Attribute`](cluster_export.md#attribute)<[`EndpointNumber`](datatype_export.md#endpointnumber)[], `any`\> ; `serverList`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`ClusterId`](datatype_export.md#clusterid)[], `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<[`BitSchema`](schema_export.md#bitschema)\>\>, {}, {}\>

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

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.5

#### Defined in

[packages/matter.js/src/cluster/definitions/DescriptorCluster.ts:60](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DescriptorCluster.ts#L60)

___

### TlvDeviceTypeStruct

• `Const` **TlvDeviceTypeStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `deviceType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DeviceTypeId`](datatype_export.md#devicetypeid)\> ; `revision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

The device type and revision define endpoint conformance to a release of a device type definition. See the Data
Model specification for more information.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.5.4.1

#### Defined in

[packages/matter.js/src/cluster/definitions/DescriptorCluster.ts:25](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DescriptorCluster.ts#L25)
