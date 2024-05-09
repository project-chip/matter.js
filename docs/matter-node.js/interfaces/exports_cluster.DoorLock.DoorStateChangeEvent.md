[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [DoorLock](../modules/exports_cluster.DoorLock.md) / DoorStateChangeEvent

# Interface: DoorStateChangeEvent

[exports/cluster](../modules/exports_cluster.md).[DoorLock](../modules/exports_cluster.DoorLock.md).DoorStateChangeEvent

Body of the DoorLock doorStateChange event

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.2

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvDoorStateChangeEvent`](../modules/exports_cluster.DoorLock.md#tlvdoorstatechangeevent)\>

  ↳ **`DoorStateChangeEvent`**

## Table of contents

### Properties

- [doorState](exports_cluster.DoorLock.DoorStateChangeEvent.md#doorstate)

## Properties

### doorState

• **doorState**: [`DoorState`](../enums/exports_cluster.DoorLock.DoorState.md)

The new door state for this door event.

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.2.1

#### Inherited from

TypeFromSchema.doorState

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:57
