[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [DoorLock](../README.md) / UserType

# Enumeration: UserType

The UserType enum used in various commands shall indicate what the type is for a specific user ID.

## See

MatterSpecification.v11.Cluster § 5.2.6.16

## Enumeration Members

### DisposableUser

> **DisposableUser**: `6`

User has ability to open lock once after which the lock shall change the corresponding user record
UserStatus value to OccupiedDisabled automatically.

#### See

MatterSpecification.v11.Cluster § 5.2.6.16.7

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:197](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L197)

***

### ExpiringUser

> **ExpiringUser**: `7`

User has ability to open lock for ExpiringUserTimeout attribute minutes after the first use of the PIN code,
RFID code, Fingerprint, or other credential. After ExpiringUserTimeout minutes the corresponding user record
UserStatus value shall be set to OccupiedDisabled automatically by the lock. The lock shall persist the
timeout across reboots such that the ExpiringUserTimeout is honored.

#### See

MatterSpecification.v11.Cluster § 5.2.6.16.8

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:207](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L207)

***

### ForcedUser

> **ForcedUser**: `5`

User has ability to open lock but a ForcedUser LockOperationType and ForcedUser silent alarm will be emitted
to allow a notified Node to alert emergency services or contacts on the user account when used.

#### See

MatterSpecification.v11.Cluster § 5.2.6.16.6

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:189](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L189)

***

### NonAccessUser

> **NonAccessUser**: `4`

User is recognized by the lock but does not have the ability to open the lock. This user will only cause the
lock to generate the appropriate event notification to any bound devices.

#### See

MatterSpecification.v11.Cluster § 5.2.6.16.5

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:181](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L181)

***

### ProgrammingUser

> **ProgrammingUser**: `3`

User has ability to both program and operate the door lock. This user can manage the users and user
schedules. In all other respects this user matches the unrestricted (default) user. ProgrammingUser is the
only user that can disable the user interface (keypad, remote, etc…).

#### See

MatterSpecification.v11.Cluster § 5.2.6.16.4

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:173](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L173)

***

### RemoteOnlyUser

> **RemoteOnlyUser**: `9`

User access and PIN code is restricted to remote lock/unlock commands only. This type of user might be
useful for regular delivery services or voice assistant unlocking operations to prevent a PIN code
credential created for them from being used at the keypad. The PIN code credential would only be provided
over-the-air for the lock/unlock commands.

#### See

MatterSpecification.v11.Cluster § 5.2.6.16.10

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:224](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L224)

***

### ScheduleRestrictedUser

> **ScheduleRestrictedUser**: `8`

User access is restricted by Week Day and/or Year Day schedule.

#### See

MatterSpecification.v11.Cluster § 5.2.6.16.9

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:214](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L214)

***

### UnrestrictedUser

> **UnrestrictedUser**: `0`

User has access 24/7 provided proper PIN or RFID is supplied (e.g., owner).

#### See

MatterSpecification.v11.Cluster § 5.2.6.16.1

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:149](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L149)

***

### WeekDayScheduleUser

> **WeekDayScheduleUser**: `2`

User has ability to open lock based on specific time period within a reoccurring weekly schedule (e.g.,
cleaning worker).

#### See

MatterSpecification.v11.Cluster § 5.2.6.16.3

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:164](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L164)

***

### YearDayScheduleUser

> **YearDayScheduleUser**: `1`

User has ability to open lock within a specific time period (e.g., guest).

#### See

MatterSpecification.v11.Cluster § 5.2.6.16.2

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:156](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L156)
