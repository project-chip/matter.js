[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [DoorLock](../README.md) / OperatingMode

# Enumeration: OperatingMode

The OperatingMode enumeration shall indicate the lock operating mode.

The table below shows the operating mode and which interfaces are enabled, if supported, for each mode.

Note: For modes that disable the remote interface, the door lock shall respond to Lock, Unlock, Toggle, and
Unlock with Timeout commands with a response status Failure and not take the action requested by those commands.
The door lock shall NOT disable the radio or otherwise unbind or leave the network. It shall still respond to
all other commands and requests.

## See

MatterSpecification.v11.Cluster § 5.2.6.12

## Enumeration Members

### NoRemoteLockUnlock

> **NoRemoteLockUnlock**: `3`

This mode only disables remote interaction with the lock. This does not apply to any remote proprietary
means of communication. It specifically applies to the Lock, Unlock, Toggle, and Unlock with Timeout
Commands.

#### See

MatterSpecification.v11.Cluster § 5.2.6.12.4

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:805](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L805)

***

### Normal

> **Normal**: `0`

The lock operates normally. All interfaces are enabled.

#### See

MatterSpecification.v11.Cluster § 5.2.6.12.1

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:780](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L780)

***

### Passage

> **Passage**: `4`

The lock is open or can be opened or closed at will without the use of a Keypad or other means of user
validation (e.g. a lock for a business during work hours).

#### See

MatterSpecification.v11.Cluster § 5.2.6.12.5

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:813](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L813)

***

### Privacy

> **Privacy**: `2`

This mode is only possible if the door is locked. Manual unlocking changes the mode to Normal operating
mode. All external interaction with the door lock is disabled. This mode is intended to be used so that
users, presumably inside the property, will have control over the entrance.

#### See

MatterSpecification.v11.Cluster § 5.2.6.12.3

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:796](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L796)

***

### Vacation

> **Vacation**: `1`

Only remote interaction is enabled. The keypad shall only be operable by the master user.

#### See

MatterSpecification.v11.Cluster § 5.2.6.12.2

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:787](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L787)
