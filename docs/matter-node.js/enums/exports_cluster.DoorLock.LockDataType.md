[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [DoorLock](../modules/exports_cluster.DoorLock.md) / LockDataType

# Enumeration: LockDataType

[exports/cluster](../modules/exports_cluster.md).[DoorLock](../modules/exports_cluster.DoorLock.md).LockDataType

The LockDataType enum shall indicate the data type that is being or has changed.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.6.9

## Table of contents

### Enumeration Members

- [Face](exports_cluster.DoorLock.LockDataType.md#face)
- [FingerVein](exports_cluster.DoorLock.LockDataType.md#fingervein)
- [Fingerprint](exports_cluster.DoorLock.LockDataType.md#fingerprint)
- [HolidaySchedule](exports_cluster.DoorLock.LockDataType.md#holidayschedule)
- [Pin](exports_cluster.DoorLock.LockDataType.md#pin)
- [ProgrammingCode](exports_cluster.DoorLock.LockDataType.md#programmingcode)
- [Rfid](exports_cluster.DoorLock.LockDataType.md#rfid)
- [Unspecified](exports_cluster.DoorLock.LockDataType.md#unspecified)
- [UserIndex](exports_cluster.DoorLock.LockDataType.md#userindex)
- [WeekDaySchedule](exports_cluster.DoorLock.LockDataType.md#weekdayschedule)
- [YearDaySchedule](exports_cluster.DoorLock.LockDataType.md#yeardayschedule)

## Enumeration Members

### Face

• **Face** = ``10``

Lock user face information was added, cleared, or modified.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:858

___

### FingerVein

• **FingerVein** = ``9``

Lock user finger-vein information was added, cleared, or modified.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:854

___

### Fingerprint

• **Fingerprint** = ``8``

Lock user fingerprint was added, cleared, or modified.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:850

___

### HolidaySchedule

• **HolidaySchedule** = ``5``

Lock holiday schedule was added, cleared, or modified.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:838

___

### Pin

• **Pin** = ``6``

Lock user PIN code was added, cleared, or modified.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:842

___

### ProgrammingCode

• **ProgrammingCode** = ``1``

Lock programming PIN code was added, cleared, or modified.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:822

___

### Rfid

• **Rfid** = ``7``

Lock user RFID code was added, cleared, or modified.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:846

___

### Unspecified

• **Unspecified** = ``0``

Unspecified or manufacturer specific lock user data added, cleared, or modified.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:818

___

### UserIndex

• **UserIndex** = ``2``

Lock user index was added, cleared, or modified.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:826

___

### WeekDaySchedule

• **WeekDaySchedule** = ``3``

Lock user week day schedule was added, cleared, or modified.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:830

___

### YearDaySchedule

• **YearDaySchedule** = ``4``

Lock user year day schedule was added, cleared, or modified.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:834
