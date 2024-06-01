[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [Descriptor](../README.md) / DeviceTypeStruct

# Interface: DeviceTypeStruct

The device type and revision define endpoint conformance to a release of a device type definition. See the Data
Model specification for more information.

## See

MatterSpecification.v11.Core § 9.5.4.1

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvDeviceTypeStruct`](../README.md#tlvdevicetypestruct)\>

## Properties

### deviceType

> **deviceType**: [`DeviceTypeId`](../../../../../datatype/export/README.md#devicetypeid)

This shall indicate the device type definition. The endpoint shall conform to the device type definition and
cluster specifications required by the device type.

#### See

MatterSpecification.v11.Core § 9.5.4.1.1

#### Inherited from

`TypeFromSchema.deviceType`

#### Source

[packages/matter.js/src/cluster/definitions/DescriptorCluster.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DescriptorCluster.ts#L35)

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

[packages/matter.js/src/cluster/definitions/DescriptorCluster.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DescriptorCluster.ts#L43)
