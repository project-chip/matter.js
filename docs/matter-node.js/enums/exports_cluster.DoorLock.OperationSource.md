[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [DoorLock](../modules/exports_cluster.DoorLock.md) / OperationSource

# Enumeration: OperationSource

[exports/cluster](../modules/exports_cluster.md).[DoorLock](../modules/exports_cluster.DoorLock.md).OperationSource

The OperationSource enumeration shall indicate the source of the Lock/Unlock operation performed.

5.2.6.14. PIN/RFID Code Format

The PIN/RFID codes defined in this specification are all octet strings.

All value in the PIN/RFID code shall be ASCII encoded regardless if the PIN/RFID codes are number or characters.
For example, code of “1, 2, 3, 4” shall be represented as 0x31, 0x32, 0x33, 0x34.

**`See`**

MatterSpecification.v11.Cluster § 5.2.6.13

## Table of contents

### Enumeration Members

- [Auto](exports_cluster.DoorLock.OperationSource.md#auto)
- [Biometric](exports_cluster.DoorLock.OperationSource.md#biometric)
- [Button](exports_cluster.DoorLock.OperationSource.md#button)
- [Keypad](exports_cluster.DoorLock.OperationSource.md#keypad)
- [Manual](exports_cluster.DoorLock.OperationSource.md#manual)
- [ProprietaryRemote](exports_cluster.DoorLock.OperationSource.md#proprietaryremote)
- [Remote](exports_cluster.DoorLock.OperationSource.md#remote)
- [Rfid](exports_cluster.DoorLock.OperationSource.md#rfid)
- [Schedule](exports_cluster.DoorLock.OperationSource.md#schedule)
- [Unspecified](exports_cluster.DoorLock.OperationSource.md#unspecified)

## Enumeration Members

### Auto

• **Auto** = ``4``

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:524

___

### Biometric

• **Biometric** = ``9``

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:529

___

### Button

• **Button** = ``5``

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:525

___

### Keypad

• **Keypad** = ``3``

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:523

___

### Manual

• **Manual** = ``1``

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:521

___

### ProprietaryRemote

• **ProprietaryRemote** = ``2``

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:522

___

### Remote

• **Remote** = ``7``

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:527

___

### Rfid

• **Rfid** = ``8``

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:528

___

### Schedule

• **Schedule** = ``6``

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:526

___

### Unspecified

• **Unspecified** = ``0``

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:520
