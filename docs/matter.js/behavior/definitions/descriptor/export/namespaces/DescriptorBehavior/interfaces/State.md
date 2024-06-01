[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/descriptor/export](../../../README.md) / [DescriptorBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### clientList

> **clientList**: [`ClusterId`](../../../../../../../datatype/export/README.md#clusterid)[]

This attribute shall list each cluster ID for the client clusters present on the endpoint instance.

#### See

MatterSpecification.v11.Core § 9.5.5.3

#### Inherited from

`StateType.clientList`

#### Source

[packages/matter.js/src/cluster/definitions/DescriptorCluster.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DescriptorCluster.ts#L87)

***

### deviceTypeList

> **deviceTypeList**: [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

This is a list of device types and corresponding revisions declaring endpoint conformance (see
DeviceTypeStruct). At least one device type entry shall be present.

An endpoint shall conform to all device types listed in the DeviceTypeList. A cluster instance that is
in common for more than one device type in the DeviceTypeList shall be supported as a shared cluster
instance on the endpoint.

#### See

MatterSpecification.v11.Core § 9.5.5.1

#### Inherited from

`StateType.deviceTypeList`

#### Source

[packages/matter.js/src/cluster/definitions/DescriptorCluster.ts:73](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DescriptorCluster.ts#L73)

***

### partsList

> **partsList**: [`EndpointNumber`](../../../../../../../datatype/export/README.md#endpointnumber)[]

This attribute indicates composition of the device type instance. Device type instance composition shall
include the endpoints in this list. See Endpoint Composition for more information which endpoints to
include in this list.

#### See

MatterSpecification.v11.Core § 9.5.5.4

#### Inherited from

`StateType.partsList`

#### Source

[packages/matter.js/src/cluster/definitions/DescriptorCluster.ts:96](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DescriptorCluster.ts#L96)

***

### serverList

> **serverList**: [`ClusterId`](../../../../../../../datatype/export/README.md#clusterid)[]

This attribute shall list each cluster ID for the server clusters present on the endpoint instance.

#### See

MatterSpecification.v11.Core § 9.5.5.2

#### Inherited from

`StateType.serverList`

#### Source

[packages/matter.js/src/cluster/definitions/DescriptorCluster.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DescriptorCluster.ts#L80)
