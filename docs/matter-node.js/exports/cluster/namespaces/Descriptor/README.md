[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / Descriptor

# Namespace: Descriptor

## Index

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [DeviceTypeStruct](interfaces/DeviceTypeStruct.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/DescriptorCluster.d.ts:115

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.clientList

> `readonly` **clientList**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/ClusterId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_ClusterId/README.md)[], `any`\>

This attribute shall list each cluster ID for the client clusters present on the endpoint instance.

###### See

MatterSpecification.v11.Core § 9.5.5.3

##### attributes.deviceTypeList

> `readonly` **deviceTypeList**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

This is a list of device types and corresponding revisions declaring endpoint conformance (see
DeviceTypeStruct). At least one device type entry shall be present.

An endpoint shall conform to all device types listed in the DeviceTypeList. A cluster instance that is
in common for more than one device type in the DeviceTypeList shall be supported as a shared cluster
instance on the endpoint.

###### See

MatterSpecification.v11.Core § 9.5.5.1

##### attributes.partsList

> `readonly` **partsList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/EndpointNumber"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_EndpointNumber/README.md)[], `any`\>

This attribute indicates composition of the device type instance. Device type instance composition shall
include the endpoints in this list. See Endpoint Composition for more information which endpoints to
include in this list.

###### See

MatterSpecification.v11.Core § 9.5.5.4

##### attributes.serverList

> `readonly` **serverList**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/ClusterId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_ClusterId/README.md)[], `any`\>

This attribute shall list each cluster ID for the server clusters present on the endpoint instance.

###### See

MatterSpecification.v11.Core § 9.5.5.2

##### id

> `readonly` **id**: `29`

##### name

> `readonly` **name**: `"Descriptor"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DescriptorCluster.d.ts:45

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/DescriptorCluster.d.ts:118

***

### TlvDeviceTypeStruct

> `const` **TlvDeviceTypeStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

The device type and revision define endpoint conformance to a release of a device type definition. See the Data
Model specification for more information.

#### See

MatterSpecification.v11.Core § 9.5.4.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/DescriptorCluster.d.ts:18
