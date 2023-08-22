[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [DoorLock](../modules/exports_cluster.DoorLock.md) / UserType

# Enumeration: UserType

[exports/cluster](../modules/exports_cluster.md).[DoorLock](../modules/exports_cluster.DoorLock.md).UserType

The UserType enum used in various commands shall indicate what the type is for a specific user ID.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.6.16

## Table of contents

### Enumeration Members

- [DisposableUser](exports_cluster.DoorLock.UserType.md#disposableuser)
- [ExpiringUser](exports_cluster.DoorLock.UserType.md#expiringuser)
- [ForcedUser](exports_cluster.DoorLock.UserType.md#forceduser)
- [NonAccessUser](exports_cluster.DoorLock.UserType.md#nonaccessuser)
- [ProgrammingUser](exports_cluster.DoorLock.UserType.md#programminguser)
- [RemoteOnlyUser](exports_cluster.DoorLock.UserType.md#remoteonlyuser)
- [ScheduleRestrictedUser](exports_cluster.DoorLock.UserType.md#schedulerestricteduser)
- [UnrestrictedUser](exports_cluster.DoorLock.UserType.md#unrestricteduser)
- [WeekDayScheduleUser](exports_cluster.DoorLock.UserType.md#weekdayscheduleuser)
- [YearDayScheduleUser](exports_cluster.DoorLock.UserType.md#yeardayscheduleuser)

## Enumeration Members

### DisposableUser

• **DisposableUser** = ``6``

User has ability to open lock once after which the lock shall change the corresponding user record
UserStatus value to OccupiedDisabled automatically.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.6.16.7

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:611

___

### ExpiringUser

• **ExpiringUser** = ``7``

User has ability to open lock for ExpiringUserTimeout attribute minutes after the first use of the PIN code,
RFID code, Fingerprint, or other credential. After ExpiringUserTimeout minutes the corresponding user record
UserStatus value shall be set to OccupiedDisabled automatically by the lock. The lock shall persist the
timeout across reboots such that the ExpiringUserTimeout is honored.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.6.16.8

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:620

___

### ForcedUser

• **ForcedUser** = ``5``

User has ability to open lock but a ForcedUser LockOperationType and ForcedUser silent alarm will be emitted
to allow a notified Node to alert emergency services or contacts on the user account when used.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.6.16.6

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:604

___

### NonAccessUser

• **NonAccessUser** = ``4``

User is recognized by the lock but does not have the ability to open the lock. This user will only cause the
lock to generate the appropriate event notification to any bound devices.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.6.16.5

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:597

___

### ProgrammingUser

• **ProgrammingUser** = ``3``

User has ability to both program and operate the door lock. This user can manage the users and user
schedules. In all other respects this user matches the unrestricted (default) user. ProgrammingUser is the
only user that can disable the user interface (keypad, remote, etc…).

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.6.16.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:590

___

### RemoteOnlyUser

• **RemoteOnlyUser** = ``9``

User access and PIN code is restricted to remote lock/unlock commands only. This type of user might be
useful for regular delivery services or voice assistant unlocking operations to prevent a PIN code
credential created for them from being used at the keypad. The PIN code credential would only be provided
over-the-air for the lock/unlock commands.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.6.16.10

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:635

___

### ScheduleRestrictedUser

• **ScheduleRestrictedUser** = ``8``

User access is restricted by Week Day and/or Year Day schedule.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.6.16.9

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:626

___

### UnrestrictedUser

• **UnrestrictedUser** = ``0``

User has access 24/7 provided proper PIN or RFID is supplied (e.g., owner).

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.6.16.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:569

___

### WeekDayScheduleUser

• **WeekDayScheduleUser** = ``2``

User has ability to open lock based on specific time period within a reoccurring weekly schedule (e.g.,
cleaning worker).

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.6.16.3

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:582

___

### YearDayScheduleUser

• **YearDayScheduleUser** = ``1``

User has ability to open lock within a specific time period (e.g., guest).

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.6.16.2

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:575
