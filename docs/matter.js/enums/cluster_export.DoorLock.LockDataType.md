[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [DoorLock](../modules/cluster_export.DoorLock.md) / LockDataType

# Enumeration: LockDataType

[cluster/export](../modules/cluster_export.md).[DoorLock](../modules/cluster_export.DoorLock.md).LockDataType

The LockDataType enum shall indicate the data type that is being or has changed.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.6.9

## Table of contents

### Enumeration Members

- [Face](cluster_export.DoorLock.LockDataType.md#face)
- [FingerVein](cluster_export.DoorLock.LockDataType.md#fingervein)
- [Fingerprint](cluster_export.DoorLock.LockDataType.md#fingerprint)
- [HolidaySchedule](cluster_export.DoorLock.LockDataType.md#holidayschedule)
- [Pin](cluster_export.DoorLock.LockDataType.md#pin)
- [ProgrammingCode](cluster_export.DoorLock.LockDataType.md#programmingcode)
- [Rfid](cluster_export.DoorLock.LockDataType.md#rfid)
- [Unspecified](cluster_export.DoorLock.LockDataType.md#unspecified)
- [UserIndex](cluster_export.DoorLock.LockDataType.md#userindex)
- [WeekDaySchedule](cluster_export.DoorLock.LockDataType.md#weekdayschedule)
- [YearDaySchedule](cluster_export.DoorLock.LockDataType.md#yeardayschedule)

## Enumeration Members

### Face

• **Face** = ``10``

Lock user face information was added, cleared, or modified.

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:875

___

### FingerVein

• **FingerVein** = ``9``

Lock user finger-vein information was added, cleared, or modified.

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:870

___

### Fingerprint

• **Fingerprint** = ``8``

Lock user fingerprint was added, cleared, or modified.

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:865

___

### HolidaySchedule

• **HolidaySchedule** = ``5``

Lock holiday schedule was added, cleared, or modified.

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:850

___

### Pin

• **Pin** = ``6``

Lock user PIN code was added, cleared, or modified.

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:855

___

### ProgrammingCode

• **ProgrammingCode** = ``1``

Lock programming PIN code was added, cleared, or modified.

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:830

___

### Rfid

• **Rfid** = ``7``

Lock user RFID code was added, cleared, or modified.

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:860

___

### Unspecified

• **Unspecified** = ``0``

Unspecified or manufacturer specific lock user data added, cleared, or modified.

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:825

___

### UserIndex

• **UserIndex** = ``2``

Lock user index was added, cleared, or modified.

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:835

___

### WeekDaySchedule

• **WeekDaySchedule** = ``3``

Lock user week day schedule was added, cleared, or modified.

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:840

___

### YearDaySchedule

• **YearDaySchedule** = ``4``

Lock user year day schedule was added, cleared, or modified.

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:845
