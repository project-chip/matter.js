[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [BasicInformation](../README.md) / LeaveEvent

# Interface: LeaveEvent

Body of the BasicInformation leave event

## See

MatterSpecification.v11.Core § 11.1.6.3

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvLeaveEvent`](../README.md#tlvleaveevent)\>

## Properties

### fabricIndex

> **fabricIndex**: [`FabricIndex`](../../../../../datatype/export/README.md#fabricindex)

This field shall contain the local Fabric Index of the fabric which the node is about to leave.

#### See

MatterSpecification.v11.Core § 11.1.6.3.1

#### Inherited from

`TypeFromSchema.fabricIndex`

#### Source

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:143](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L143)
