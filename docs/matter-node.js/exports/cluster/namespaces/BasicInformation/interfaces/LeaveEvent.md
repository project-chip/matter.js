[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [BasicInformation](../README.md) / LeaveEvent

# Interface: LeaveEvent

Body of the BasicInformation leave event

## See

MatterSpecification.v11.Core § 11.1.6.3

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvLeaveEvent`](../README.md#tlvleaveevent)\>

## Properties

### fabricIndex

> **fabricIndex**: [`FabricIndex`](../../../../datatype/README.md#fabricindex)

This field shall contain the local Fabric Index of the fabric which the node is about to leave.

#### See

MatterSpecification.v11.Core § 11.1.6.3.1

#### Inherited from

`TypeFromSchema.fabricIndex`

#### Source

packages/matter.js/dist/esm/cluster/definitions/BasicInformationCluster.d.ts:116
