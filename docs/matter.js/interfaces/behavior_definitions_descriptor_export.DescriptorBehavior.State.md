[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/descriptor/export](../modules/behavior_definitions_descriptor_export.md) / [DescriptorBehavior](../modules/behavior_definitions_descriptor_export.DescriptorBehavior.md) / State

# Interface: State

[behavior/definitions/descriptor/export](../modules/behavior_definitions_descriptor_export.md).[DescriptorBehavior](../modules/behavior_definitions_descriptor_export.DescriptorBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_descriptor_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [clientList](behavior_definitions_descriptor_export.DescriptorBehavior.State.md#clientlist)
- [deviceTypeList](behavior_definitions_descriptor_export.DescriptorBehavior.State.md#devicetypelist)
- [partsList](behavior_definitions_descriptor_export.DescriptorBehavior.State.md#partslist)
- [serverList](behavior_definitions_descriptor_export.DescriptorBehavior.State.md#serverlist)

## Properties

### clientList

• **clientList**: [`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>[]

This attribute shall list each cluster ID for the client clusters present on the endpoint instance.

**`See`**

MatterSpecification.v11.Core § 9.5.5.3

#### Inherited from

StateType.clientList

#### Defined in

[packages/matter.js/src/cluster/definitions/DescriptorCluster.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DescriptorCluster.ts#L87)

___

### deviceTypeList

• **deviceTypeList**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `deviceType`: [`FieldType`](tlv_export.FieldType.md)\<[`DeviceTypeId`](../modules/datatype_export.md#devicetypeid)\<`number`\>\> ; `revision`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>[]

This is a list of device types and corresponding revisions declaring endpoint conformance (see
DeviceTypeStruct). At least one device type entry shall be present.

An endpoint shall conform to all device types listed in the DeviceTypeList. A cluster instance that is
in common for more than one device type in the DeviceTypeList shall be supported as a shared cluster
instance on the endpoint.

**`See`**

MatterSpecification.v11.Core § 9.5.5.1

#### Inherited from

StateType.deviceTypeList

#### Defined in

[packages/matter.js/src/cluster/definitions/DescriptorCluster.ts:73](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DescriptorCluster.ts#L73)

___

### partsList

• **partsList**: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]

This attribute indicates composition of the device type instance. Device type instance composition shall
include the endpoints in this list. See Endpoint Composition for more information which endpoints to
include in this list.

**`See`**

MatterSpecification.v11.Core § 9.5.5.4

#### Inherited from

StateType.partsList

#### Defined in

[packages/matter.js/src/cluster/definitions/DescriptorCluster.ts:96](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DescriptorCluster.ts#L96)

___

### serverList

• **serverList**: [`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>[]

This attribute shall list each cluster ID for the server clusters present on the endpoint instance.

**`See`**

MatterSpecification.v11.Core § 9.5.5.2

#### Inherited from

StateType.serverList

#### Defined in

[packages/matter.js/src/cluster/definitions/DescriptorCluster.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DescriptorCluster.ts#L80)
