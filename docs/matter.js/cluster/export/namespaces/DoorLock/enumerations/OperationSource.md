[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [DoorLock](../README.md) / OperationSource

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

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:524](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L524)

***

### Biometric

> **Biometric**: `9`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:529](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L529)

***

### Button

> **Button**: `5`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:525](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L525)

***

### Keypad

> **Keypad**: `3`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:523](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L523)

***

### Manual

> **Manual**: `1`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:521](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L521)

***

### ProprietaryRemote

> **ProprietaryRemote**: `2`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:522](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L522)

***

### Remote

> **Remote**: `7`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:527](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L527)

***

### Rfid

> **Rfid**: `8`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:528](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L528)

***

### Schedule

> **Schedule**: `6`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:526](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L526)

***

### Unspecified

> **Unspecified**: `0`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:520](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L520)
