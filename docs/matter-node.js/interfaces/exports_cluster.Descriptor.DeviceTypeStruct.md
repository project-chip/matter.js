[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Descriptor](../modules/exports_cluster.Descriptor.md) / DeviceTypeStruct

# Interface: DeviceTypeStruct

[exports/cluster](../modules/exports_cluster.md).[Descriptor](../modules/exports_cluster.Descriptor.md).DeviceTypeStruct

The device type and revision define endpoint conformance to a release of a device type definition. See the Data
Model specification for more information.

**`See`**

MatterSpecification.v11.Core § 9.5.4.1

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvDeviceTypeStruct`](../modules/exports_cluster.Descriptor.md#tlvdevicetypestruct)\>

  ↳ **`DeviceTypeStruct`**

## Table of contents

### Properties

- [deviceType](exports_cluster.Descriptor.DeviceTypeStruct.md#devicetype)
- [revision](exports_cluster.Descriptor.DeviceTypeStruct.md#revision)

## Properties

### deviceType

• **deviceType**: [`DeviceTypeId`](../modules/exports_datatype.md#devicetypeid)\<`number`\>

This shall indicate the device type definition. The endpoint shall conform to the device type definition and
cluster specifications required by the device type.

**`See`**

MatterSpecification.v11.Core § 9.5.4.1.1

#### Inherited from

TypeFromSchema.deviceType

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DescriptorCluster.d.ts:25

___

### revision

• **revision**: `number`

This is the implemented revision of the device type definition. The endpoint shall conform to this revision
of the device type.

**`See`**

MatterSpecification.v11.Core § 9.5.4.1.2

#### Inherited from

TypeFromSchema.revision

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DescriptorCluster.d.ts:32
