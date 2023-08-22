[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [DoorLock](../modules/cluster_export.DoorLock.md) / OperatingMode

# Enumeration: OperatingMode

[cluster/export](../modules/cluster_export.md).[DoorLock](../modules/cluster_export.DoorLock.md).OperatingMode

The OperatingMode enumeration shall indicate the lock operating mode.

The table below shows the operating mode and which interfaces are enabled, if supported, for each mode.

Note: For modes that disable the remote interface, the door lock shall respond to Lock, Unlock, Toggle, and
Unlock with Timeout commands with a response status Failure and not take the action requested by those commands.
The door lock shall NOT disable the radio or otherwise unbind or leave the network. It shall still respond to
all other commands and requests.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.6.12

## Table of contents

### Enumeration Members

- [NoRemoteLockUnlock](cluster_export.DoorLock.OperatingMode.md#noremotelockunlock)
- [Normal](cluster_export.DoorLock.OperatingMode.md#normal)
- [Passage](cluster_export.DoorLock.OperatingMode.md#passage)
- [Privacy](cluster_export.DoorLock.OperatingMode.md#privacy)
- [Vacation](cluster_export.DoorLock.OperatingMode.md#vacation)

## Enumeration Members

### NoRemoteLockUnlock

• **NoRemoteLockUnlock** = ``3``

This mode only disables remote interaction with the lock. This does not apply to any remote proprietary
means of communication. It specifically applies to the Lock, Unlock, Toggle, and Unlock with Timeout
Commands.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.6.12.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:173](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L173)

___

### Normal

• **Normal** = ``0``

The lock operates normally. All interfaces are enabled.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.6.12.1

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:148](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L148)

___

### Passage

• **Passage** = ``4``

The lock is open or can be opened or closed at will without the use of a Keypad or other means of user
validation (e.g. a lock for a business during work hours).

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.6.12.5

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:181](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L181)

___

### Privacy

• **Privacy** = ``2``

This mode is only possible if the door is locked. Manual unlocking changes the mode to Normal operating
mode. All external interaction with the door lock is disabled. This mode is intended to be used so that
users, presumably inside the property, will have control over the entrance.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.6.12.3

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:164](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L164)

___

### Vacation

• **Vacation** = ``1``

Only remote interaction is enabled. The keypad shall only be operable by the master user.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.6.12.2

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:155](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L155)
