[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [DoorLock](../README.md) / DoorLockAlarmEvent

# Interface: DoorLockAlarmEvent

Body of the DoorLock doorLockAlarm event

## See

MatterSpecification.v11.Cluster § 5.2.5.1

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvDoorLockAlarmEvent`](../README.md#tlvdoorlockalarmevent)\>

## Properties

### alarmCode

> **alarmCode**: [`AlarmCode`](../enumerations/AlarmCode.md)

The alarm code of the event that has happened.

#### See

MatterSpecification.v11.Cluster § 5.2.5.1.1

#### Inherited from

`TypeFromSchema.alarmCode`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1219](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1219)
