[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [BasicInformation](../modules/cluster_export.BasicInformation.md) / ReachableChangedEvent

# Interface: ReachableChangedEvent

[cluster/export](../modules/cluster_export.md).[BasicInformation](../modules/cluster_export.BasicInformation.md).ReachableChangedEvent

Body of the BasicInformation reachableChanged event

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.1.6.4

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvReachableChangedEvent`](../modules/cluster_export.BasicInformation.md#tlvreachablechangedevent)\>

  ↳ **`ReachableChangedEvent`**

## Table of contents

### Properties

- [reachableNewValue](cluster_export.BasicInformation.ReachableChangedEvent.md#reachablenewvalue)

## Properties

### reachableNewValue

• **reachableNewValue**: `boolean`

This field shall indicate the value of the Reachable attribute after it was changed.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.1.6.4.1

#### Inherited from

TypeFromSchema.reachableNewValue

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:165](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L165)
