[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [DoorLock](../README.md) / DoorStateChangeEvent

# Interface: DoorStateChangeEvent

Body of the DoorLock doorStateChange event

## See

MatterSpecification.v11.Cluster § 5.2.5.2

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvDoorStateChangeEvent`](../README.md#tlvdoorstatechangeevent)\>

## Properties

### doorState

> **doorState**: [`DoorState`](../enumerations/DoorState.md)

The new door state for this door event.

#### See

MatterSpecification.v11.Cluster § 5.2.5.2.1

#### Inherited from

`TypeFromSchema.doorState`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:88](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L88)
