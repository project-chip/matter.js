[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [DoorLock](../modules/cluster_export.DoorLock.md) / OperationSource

# Enumeration: OperationSource

[cluster/export](../modules/cluster_export.md).[DoorLock](../modules/cluster_export.DoorLock.md).OperationSource

The OperationSource enumeration shall indicate the source of the Lock/Unlock operation performed.

5.2.6.14. PIN/RFID Code Format

The PIN/RFID codes defined in this specification are all octet strings.

All value in the PIN/RFID code shall be ASCII encoded regardless if the PIN/RFID codes are number or characters.
For example, code of “1, 2, 3, 4” shall be represented as 0x31, 0x32, 0x33, 0x34.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.6.13

## Table of contents

### Enumeration Members

- [Auto](cluster_export.DoorLock.OperationSource.md#auto)
- [Biometric](cluster_export.DoorLock.OperationSource.md#biometric)
- [Button](cluster_export.DoorLock.OperationSource.md#button)
- [Keypad](cluster_export.DoorLock.OperationSource.md#keypad)
- [Manual](cluster_export.DoorLock.OperationSource.md#manual)
- [ProprietaryRemote](cluster_export.DoorLock.OperationSource.md#proprietaryremote)
- [Remote](cluster_export.DoorLock.OperationSource.md#remote)
- [Rfid](cluster_export.DoorLock.OperationSource.md#rfid)
- [Schedule](cluster_export.DoorLock.OperationSource.md#schedule)
- [Unspecified](cluster_export.DoorLock.OperationSource.md#unspecified)

## Enumeration Members

### Auto

• **Auto** = ``4``

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:342](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L342)

___

### Biometric

• **Biometric** = ``9``

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:347](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L347)

___

### Button

• **Button** = ``5``

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:343](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L343)

___

### Keypad

• **Keypad** = ``3``

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:341](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L341)

___

### Manual

• **Manual** = ``1``

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:339](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L339)

___

### ProprietaryRemote

• **ProprietaryRemote** = ``2``

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:340](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L340)

___

### Remote

• **Remote** = ``7``

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:345](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L345)

___

### Rfid

• **Rfid** = ``8``

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:346](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L346)

___

### Schedule

• **Schedule** = ``6``

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:344](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L344)

___

### Unspecified

• **Unspecified** = ``0``

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:338](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L338)
