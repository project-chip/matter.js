[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [DoorLock](../README.md) / DoorStateChangeEvent

# Interface: DoorStateChangeEvent

Body of the DoorLock doorStateChange event

## See

MatterSpecification.v11.Cluster § 5.2.5.2

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvDoorStateChangeEvent`](../README.md#tlvdoorstatechangeevent)\>

## Properties

### doorState

> **doorState**: [`DoorState`](../enumerations/DoorState.md)

The new door state for this door event.

#### See

MatterSpecification.v11.Cluster § 5.2.5.2.1

#### Inherited from

`TypeFromSchema.doorState`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:57
