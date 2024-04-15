[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [DoorLock](../modules/cluster_export.DoorLock.md) / OperationSource

# Enumeration: OperationSource

[cluster/export](../modules/cluster_export.md).[DoorLock](../modules/cluster_export.DoorLock.md).OperationSource

The OperationSource enumeration shall indicate the source of the Lock/Unlock operation performed.

5.2.6.14. PIN/RFID Code Format

The PIN/RFID codes defined in this specification are all octet strings.

All value in the PIN/RFID code shall be ASCII encoded regardless if the PIN/RFID codes are number or characters.
For example, code of “1, 2, 3, 4” shall be represented as 0x31, 0x32, 0x33, 0x34.

**`See`**

MatterSpecification.v11.Cluster § 5.2.6.13

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

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:524](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L524)

___

### Biometric

• **Biometric** = ``9``

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:529](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L529)

___

### Button

• **Button** = ``5``

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:525](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L525)

___

### Keypad

• **Keypad** = ``3``

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:523](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L523)

___

### Manual

• **Manual** = ``1``

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:521](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L521)

___

### ProprietaryRemote

• **ProprietaryRemote** = ``2``

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:522](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L522)

___

### Remote

• **Remote** = ``7``

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:527](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L527)

___

### Rfid

• **Rfid** = ``8``

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:528](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L528)

___

### Schedule

• **Schedule** = ``6``

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:526](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L526)

___

### Unspecified

• **Unspecified** = ``0``

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:520](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L520)
