[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [DoorLock](../modules/exports_cluster.DoorLock.md) / SetWeekDayScheduleRequest

# Interface: SetWeekDayScheduleRequest

[exports/cluster](../modules/exports_cluster.md).[DoorLock](../modules/exports_cluster.DoorLock.md).SetWeekDayScheduleRequest

Input to the DoorLock setWeekDaySchedule command

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvSetWeekDayScheduleRequest`](../modules/exports_cluster.DoorLock.md#tlvsetweekdayschedulerequest)\>

  ↳ **`SetWeekDayScheduleRequest`**

## Table of contents

### Properties

- [daysMask](exports_cluster.DoorLock.SetWeekDayScheduleRequest.md#daysmask)
- [endHour](exports_cluster.DoorLock.SetWeekDayScheduleRequest.md#endhour)
- [endMinute](exports_cluster.DoorLock.SetWeekDayScheduleRequest.md#endminute)
- [startHour](exports_cluster.DoorLock.SetWeekDayScheduleRequest.md#starthour)
- [startMinute](exports_cluster.DoorLock.SetWeekDayScheduleRequest.md#startminute)
- [userIndex](exports_cluster.DoorLock.SetWeekDayScheduleRequest.md#userindex)
- [weekDayIndex](exports_cluster.DoorLock.SetWeekDayScheduleRequest.md#weekdayindex)

## Properties

### daysMask

• **daysMask**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `friday`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `monday`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `saturday`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `sunday`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `thursday`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `tuesday`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `wednesday`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.daysMask

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:617

___

### endHour

• **endHour**: `number`

#### Inherited from

TypeFromSchema.endHour

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:628

___

### endMinute

• **endMinute**: `number`

#### Inherited from

TypeFromSchema.endMinute

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:629

___

### startHour

• **startHour**: `number`

#### Inherited from

TypeFromSchema.startHour

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:626

___

### startMinute

• **startMinute**: `number`

#### Inherited from

TypeFromSchema.startMinute

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:627

___

### userIndex

• **userIndex**: `number`

#### Inherited from

TypeFromSchema.userIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:616

___

### weekDayIndex

• **weekDayIndex**: `number`

#### Inherited from

TypeFromSchema.weekDayIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:615
