[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [DoorLock](../modules/exports_cluster.DoorLock.md) / GetWeekDayScheduleResponse

# Interface: GetWeekDayScheduleResponse

[exports/cluster](../modules/exports_cluster.md).[DoorLock](../modules/exports_cluster.DoorLock.md).GetWeekDayScheduleResponse

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvGetWeekDayScheduleResponse`](../modules/exports_cluster.DoorLock.md#tlvgetweekdayscheduleresponse)\>

  ↳ **`GetWeekDayScheduleResponse`**

## Table of contents

### Properties

- [daysMask](exports_cluster.DoorLock.GetWeekDayScheduleResponse.md#daysmask)
- [endHour](exports_cluster.DoorLock.GetWeekDayScheduleResponse.md#endhour)
- [endMinute](exports_cluster.DoorLock.GetWeekDayScheduleResponse.md#endminute)
- [startHour](exports_cluster.DoorLock.GetWeekDayScheduleResponse.md#starthour)
- [startMinute](exports_cluster.DoorLock.GetWeekDayScheduleResponse.md#startminute)
- [status](exports_cluster.DoorLock.GetWeekDayScheduleResponse.md#status)
- [userIndex](exports_cluster.DoorLock.GetWeekDayScheduleResponse.md#userindex)
- [weekDayIndex](exports_cluster.DoorLock.GetWeekDayScheduleResponse.md#weekdayindex)

## Properties

### daysMask

• `Optional` **daysMask**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `friday`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `monday`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `saturday`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `sunday`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `thursday`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `tuesday`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `wednesday`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.daysMask

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:661

___

### endHour

• `Optional` **endHour**: `number`

#### Inherited from

TypeFromSchema.endHour

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:672

___

### endMinute

• `Optional` **endMinute**: `number`

#### Inherited from

TypeFromSchema.endMinute

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:673

___

### startHour

• `Optional` **startHour**: `number`

#### Inherited from

TypeFromSchema.startHour

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:670

___

### startMinute

• `Optional` **startMinute**: `number`

#### Inherited from

TypeFromSchema.startMinute

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:671

___

### status

• **status**: [`DlStatus`](../enums/exports_cluster.DoorLock.DlStatus.md)

#### Inherited from

TypeFromSchema.status

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:660

___

### userIndex

• **userIndex**: `number`

#### Inherited from

TypeFromSchema.userIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:659

___

### weekDayIndex

• **weekDayIndex**: `number`

#### Inherited from

TypeFromSchema.weekDayIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:658
