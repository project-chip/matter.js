[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [BasicInformation](../modules/exports_cluster.BasicInformation.md) / LeaveEvent

# Interface: LeaveEvent

[exports/cluster](../modules/exports_cluster.md).[BasicInformation](../modules/exports_cluster.BasicInformation.md).LeaveEvent

Body of the BasicInformation leave event

**`See`**

MatterSpecification.v11.Core § 11.1.6.3

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvLeaveEvent`](../modules/exports_cluster.BasicInformation.md#tlvleaveevent)\>

  ↳ **`LeaveEvent`**

## Table of contents

### Properties

- [fabricIndex](exports_cluster.BasicInformation.LeaveEvent.md#fabricindex)

## Properties

### fabricIndex

• **fabricIndex**: [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

This field shall contain the local Fabric Index of the fabric which the node is about to leave.

**`See`**

MatterSpecification.v11.Core § 11.1.6.3.1

#### Inherited from

TypeFromSchema.fabricIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BasicInformationCluster.d.ts:116
