[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [BasicInformation](../modules/cluster_export.BasicInformation.md) / LeaveEvent

# Interface: LeaveEvent

[cluster/export](../modules/cluster_export.md).[BasicInformation](../modules/cluster_export.BasicInformation.md).LeaveEvent

Body of the BasicInformation leave event

**`See`**

MatterSpecification.v11.Core § 11.1.6.3

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvLeaveEvent`](../modules/cluster_export.BasicInformation.md#tlvleaveevent)\>

  ↳ **`LeaveEvent`**

## Table of contents

### Properties

- [fabricIndex](cluster_export.BasicInformation.LeaveEvent.md#fabricindex)

## Properties

### fabricIndex

• **fabricIndex**: [`FabricIndex`](../modules/datatype_export.md#fabricindex)

This field shall contain the local Fabric Index of the fabric which the node is about to leave.

**`See`**

MatterSpecification.v11.Core § 11.1.6.3.1

#### Inherited from

TypeFromSchema.fabricIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:143](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L143)
