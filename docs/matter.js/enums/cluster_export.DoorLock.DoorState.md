[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [DoorLock](../modules/cluster_export.DoorLock.md) / DoorState

# Enumeration: DoorState

[cluster/export](../modules/cluster_export.md).[DoorLock](../modules/cluster_export.DoorLock.md).DoorState

The DoorState enumeration shall indicate the current door state. The data type of the DoorState

enum field is derived from enum8.

**`See`**

MatterSpecification.v11.Cluster § 5.2.6.7

## Table of contents

### Enumeration Members

- [DoorAjar](cluster_export.DoorLock.DoorState.md#doorajar)
- [DoorClosed](cluster_export.DoorLock.DoorState.md#doorclosed)
- [DoorForcedOpen](cluster_export.DoorLock.DoorState.md#doorforcedopen)
- [DoorJammed](cluster_export.DoorLock.DoorState.md#doorjammed)
- [DoorOpen](cluster_export.DoorLock.DoorState.md#dooropen)
- [DoorUnspecifiedError](cluster_export.DoorLock.DoorState.md#doorunspecifiederror)

## Enumeration Members

### DoorAjar

• **DoorAjar** = ``5``

Door state is ajar

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L74)

___

### DoorClosed

• **DoorClosed** = ``1``

Door state is closed

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L54)

___

### DoorForcedOpen

• **DoorForcedOpen** = ``3``

Door state is currently forced open

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:64](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L64)

___

### DoorJammed

• **DoorJammed** = ``2``

Door state is jammed

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:59](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L59)

___

### DoorOpen

• **DoorOpen** = ``0``

Door state is open

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:49](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L49)

___

### DoorUnspecifiedError

• **DoorUnspecifiedError** = ``4``

Door state is invalid for unspecified reason

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:69](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L69)
