[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [DoorLock](../README.md) / DoorLockAlarmEvent

# Interface: DoorLockAlarmEvent

Body of the DoorLock doorLockAlarm event

## See

MatterSpecification.v11.Cluster § 5.2.5.1

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvDoorLockAlarmEvent`](../README.md#tlvdoorlockalarmevent)\>

## Properties

### alarmCode

> **alarmCode**: [`AlarmCode`](../enumerations/AlarmCode.md)

The alarm code of the event that has happened.

#### See

MatterSpecification.v11.Cluster § 5.2.5.1.1

#### Inherited from

`TypeFromSchema.alarmCode`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1185
