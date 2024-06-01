[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [Descriptor](../README.md) / DeviceTypeStruct

# Interface: DeviceTypeStruct

The device type and revision define endpoint conformance to a release of a device type definition. See the Data
Model specification for more information.

## See

MatterSpecification.v11.Core § 9.5.4.1

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvDeviceTypeStruct`](../README.md#tlvdevicetypestruct)\>

## Properties

### deviceType

> **deviceType**: [`DeviceTypeId`](../../../../datatype/README.md#devicetypeid)

This shall indicate the device type definition. The endpoint shall conform to the device type definition and
cluster specifications required by the device type.

#### See

MatterSpecification.v11.Core § 9.5.4.1.1

#### Inherited from

`TypeFromSchema.deviceType`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DescriptorCluster.d.ts:25

***

### revision

> **revision**: `number`

This is the implemented revision of the device type definition. The endpoint shall conform to this revision
of the device type.

#### See

MatterSpecification.v11.Core § 9.5.4.1.2

#### Inherited from

`TypeFromSchema.revision`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DescriptorCluster.d.ts:32
