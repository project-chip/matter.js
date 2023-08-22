[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [DoorLock](../modules/exports_cluster.DoorLock.md) / DoorState

# Enumeration: DoorState

[exports/cluster](../modules/exports_cluster.md).[DoorLock](../modules/exports_cluster.DoorLock.md).DoorState

The DoorState enumeration shall indicate the current door state. The data type of the DoorState

enum field is derived from enum8.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.2.6.7

## Table of contents

### Enumeration Members

- [DoorAjar](exports_cluster.DoorLock.DoorState.md#doorajar)
- [DoorClosed](exports_cluster.DoorLock.DoorState.md#doorclosed)
- [DoorForcedOpen](exports_cluster.DoorLock.DoorState.md#doorforcedopen)
- [DoorJammed](exports_cluster.DoorLock.DoorState.md#doorjammed)
- [DoorOpen](exports_cluster.DoorLock.DoorState.md#dooropen)
- [DoorUnspecifiedError](exports_cluster.DoorLock.DoorState.md#doorunspecifiederror)

## Enumeration Members

### DoorAjar

• **DoorAjar** = ``5``

Door state is ajar

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:504

___

### DoorClosed

• **DoorClosed** = ``1``

Door state is closed

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:488

___

### DoorForcedOpen

• **DoorForcedOpen** = ``3``

Door state is currently forced open

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:496

___

### DoorJammed

• **DoorJammed** = ``2``

Door state is jammed

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:492

___

### DoorOpen

• **DoorOpen** = ``0``

Door state is open

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:484

___

### DoorUnspecifiedError

• **DoorUnspecifiedError** = ``4``

Door state is invalid for unspecified reason

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DoorLockCluster.d.ts:500
