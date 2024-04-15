[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [BasicInformation](../modules/exports_cluster.BasicInformation.md) / ReachableChangedEvent

# Interface: ReachableChangedEvent

[exports/cluster](../modules/exports_cluster.md).[BasicInformation](../modules/exports_cluster.BasicInformation.md).ReachableChangedEvent

Body of the BasicInformation reachableChanged event

**`See`**

MatterSpecification.v11.Core § 11.1.6.4

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvReachableChangedEvent`](../modules/exports_cluster.BasicInformation.md#tlvreachablechangedevent)\>

  ↳ **`ReachableChangedEvent`**

## Table of contents

### Properties

- [reachableNewValue](exports_cluster.BasicInformation.ReachableChangedEvent.md#reachablenewvalue)

## Properties

### reachableNewValue

• **reachableNewValue**: `boolean`

This field shall indicate the value of the Reachable attribute after it was changed.

**`See`**

MatterSpecification.v11.Core § 11.1.6.4.1

#### Inherited from

TypeFromSchema.reachableNewValue

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BasicInformationCluster.d.ts:136
