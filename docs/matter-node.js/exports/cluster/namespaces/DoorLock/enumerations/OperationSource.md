[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [DoorLock](../README.md) / OperationSource

# Enumeration: OperationSource

The OperationSource enumeration shall indicate the source of the Lock/Unlock operation performed.

5.2.6.14. PIN/RFID Code Format

The PIN/RFID codes defined in this specification are all octet strings.

All value in the PIN/RFID code shall be ASCII encoded regardless if the PIN/RFID codes are number or characters.
For example, code of “1, 2, 3, 4” shall be represented as 0x31, 0x32, 0x33, 0x34.

## See

MatterSpecification.v11.Cluster § 5.2.6.13

## Enumeration Members

### Auto

> **Auto**: `4`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:524

***

### Biometric

> **Biometric**: `9`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:529

***

### Button

> **Button**: `5`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:525

***

### Keypad

> **Keypad**: `3`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:523

***

### Manual

> **Manual**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:521

***

### ProprietaryRemote

> **ProprietaryRemote**: `2`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:522

***

### Remote

> **Remote**: `7`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:527

***

### Rfid

> **Rfid**: `8`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:528

***

### Schedule

> **Schedule**: `6`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:526

***

### Unspecified

> **Unspecified**: `0`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:520
