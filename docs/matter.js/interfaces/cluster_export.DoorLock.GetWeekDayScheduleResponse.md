[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [DoorLock](../modules/cluster_export.DoorLock.md) / GetWeekDayScheduleResponse

# Interface: GetWeekDayScheduleResponse

[cluster/export](../modules/cluster_export.md).[DoorLock](../modules/cluster_export.DoorLock.md).GetWeekDayScheduleResponse

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvGetWeekDayScheduleResponse`](../modules/cluster_export.DoorLock.md#tlvgetweekdayscheduleresponse)\>

  ↳ **`GetWeekDayScheduleResponse`**

## Table of contents

### Properties

- [daysMask](cluster_export.DoorLock.GetWeekDayScheduleResponse.md#daysmask)
- [endHour](cluster_export.DoorLock.GetWeekDayScheduleResponse.md#endhour)
- [endMinute](cluster_export.DoorLock.GetWeekDayScheduleResponse.md#endminute)
- [startHour](cluster_export.DoorLock.GetWeekDayScheduleResponse.md#starthour)
- [startMinute](cluster_export.DoorLock.GetWeekDayScheduleResponse.md#startminute)
- [status](cluster_export.DoorLock.GetWeekDayScheduleResponse.md#status)
- [userIndex](cluster_export.DoorLock.GetWeekDayScheduleResponse.md#userindex)
- [weekDayIndex](cluster_export.DoorLock.GetWeekDayScheduleResponse.md#weekdayindex)

## Properties

### daysMask

• `Optional` **daysMask**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `friday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `monday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `saturday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `sunday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thursday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.daysMask

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:664](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L664)

___

### endHour

• `Optional` **endHour**: `number`

#### Inherited from

TypeFromSchema.endHour

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:667](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L667)

___

### endMinute

• `Optional` **endMinute**: `number`

#### Inherited from

TypeFromSchema.endMinute

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:668](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L668)

___

### startHour

• `Optional` **startHour**: `number`

#### Inherited from

TypeFromSchema.startHour

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:665](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L665)

___

### startMinute

• `Optional` **startMinute**: `number`

#### Inherited from

TypeFromSchema.startMinute

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:666](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L666)

___

### status

• **status**: [`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)

#### Inherited from

TypeFromSchema.status

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:663](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L663)

___

### userIndex

• **userIndex**: `number`

#### Inherited from

TypeFromSchema.userIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:662](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L662)

___

### weekDayIndex

• **weekDayIndex**: `number`

#### Inherited from

TypeFromSchema.weekDayIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:661](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L661)
