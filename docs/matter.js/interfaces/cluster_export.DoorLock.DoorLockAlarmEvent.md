[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [DoorLock](../modules/cluster_export.DoorLock.md) / DoorLockAlarmEvent

# Interface: DoorLockAlarmEvent

[cluster/export](../modules/cluster_export.md).[DoorLock](../modules/cluster_export.DoorLock.md).DoorLockAlarmEvent

Body of the DoorLock doorLockAlarm event

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvDoorLockAlarmEvent`](../modules/cluster_export.DoorLock.md#tlvdoorlockalarmevent)\>

  ↳ **`DoorLockAlarmEvent`**

## Table of contents

### Properties

- [alarmCode](cluster_export.DoorLock.DoorLockAlarmEvent.md#alarmcode)

## Properties

### alarmCode

• **alarmCode**: [`AlarmCode`](../enums/cluster_export.DoorLock.AlarmCode.md)

The alarm code of the event that has happened.

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.1.1

#### Inherited from

TypeFromSchema.alarmCode

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1219](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1219)
