[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / Descriptor

# Namespace: Descriptor

## Index

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [DeviceTypeStruct](interfaces/DeviceTypeStruct.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/DescriptorCluster.ts:117](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DescriptorCluster.ts#L117)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.clientList

> `readonly` **clientList**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`ClusterId`](../../../../datatype/export/README.md#clusterid)[], `any`\>

This attribute shall list each cluster ID for the client clusters present on the endpoint instance.

###### See

MatterSpecification.v11.Core § 9.5.5.3

##### attributes.deviceTypeList

> `readonly` **deviceTypeList**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

This is a list of device types and corresponding revisions declaring endpoint conformance (see
DeviceTypeStruct). At least one device type entry shall be present.

An endpoint shall conform to all device types listed in the DeviceTypeList. A cluster instance that is
in common for more than one device type in the DeviceTypeList shall be supported as a shared cluster
instance on the endpoint.

###### See

MatterSpecification.v11.Core § 9.5.5.1

##### attributes.partsList

> `readonly` **partsList**: [`Attribute`](../../interfaces/Attribute.md)\<[`EndpointNumber`](../../../../datatype/export/README.md#endpointnumber)[], `any`\>

This attribute indicates composition of the device type instance. Device type instance composition shall
include the endpoints in this list. See Endpoint Composition for more information which endpoints to
include in this list.

###### See

MatterSpecification.v11.Core § 9.5.5.4

##### attributes.serverList

> `readonly` **serverList**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`ClusterId`](../../../../datatype/export/README.md#clusterid)[], `any`\>

This attribute shall list each cluster ID for the server clusters present on the endpoint instance.

###### See

MatterSpecification.v11.Core § 9.5.5.2

##### id

> `readonly` **id**: `29` = `0x1d`

##### name

> `readonly` **name**: `"Descriptor"` = `"Descriptor"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/DescriptorCluster.ts:57](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DescriptorCluster.ts#L57)

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md) = `Cluster`

#### Source

[packages/matter.js/src/cluster/definitions/DescriptorCluster.ts:120](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DescriptorCluster.ts#L120)

***

### TlvDeviceTypeStruct

> `const` **TlvDeviceTypeStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

The device type and revision define endpoint conformance to a release of a device type definition. See the Data
Model specification for more information.

#### See

MatterSpecification.v11.Core § 9.5.4.1

#### Type declaration

##### deviceType

> **deviceType**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`DeviceTypeId`](../../../../datatype/export/README.md#devicetypeid)\>

This shall indicate the device type definition. The endpoint shall conform to the device type definition and
cluster specifications required by the device type.

###### See

MatterSpecification.v11.Core § 9.5.4.1.1

##### revision

> **revision**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This is the implemented revision of the device type definition. The endpoint shall conform to this revision
of the device type.

###### See

MatterSpecification.v11.Core § 9.5.4.1.2

#### Source

[packages/matter.js/src/cluster/definitions/DescriptorCluster.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DescriptorCluster.ts#L28)
