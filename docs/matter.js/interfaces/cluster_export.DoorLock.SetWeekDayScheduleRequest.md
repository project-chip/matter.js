[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [DoorLock](../modules/cluster_export.DoorLock.md) / SetWeekDayScheduleRequest

# Interface: SetWeekDayScheduleRequest

[cluster/export](../modules/cluster_export.md).[DoorLock](../modules/cluster_export.DoorLock.md).SetWeekDayScheduleRequest

Input to the DoorLock setWeekDaySchedule command

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvSetWeekDayScheduleRequest`](../modules/cluster_export.DoorLock.md#tlvsetweekdayschedulerequest)\>

  ↳ **`SetWeekDayScheduleRequest`**

## Table of contents

### Properties

- [daysMask](cluster_export.DoorLock.SetWeekDayScheduleRequest.md#daysmask)
- [endHour](cluster_export.DoorLock.SetWeekDayScheduleRequest.md#endhour)
- [endMinute](cluster_export.DoorLock.SetWeekDayScheduleRequest.md#endminute)
- [startHour](cluster_export.DoorLock.SetWeekDayScheduleRequest.md#starthour)
- [startMinute](cluster_export.DoorLock.SetWeekDayScheduleRequest.md#startminute)
- [userIndex](cluster_export.DoorLock.SetWeekDayScheduleRequest.md#userindex)
- [weekDayIndex](cluster_export.DoorLock.SetWeekDayScheduleRequest.md#weekdayindex)

## Properties

### daysMask

• **daysMask**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `friday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `monday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `saturday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `sunday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thursday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.daysMask

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:626](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L626)

___

### endHour

• **endHour**: `number`

#### Inherited from

TypeFromSchema.endHour

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:629](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L629)

___

### endMinute

• **endMinute**: `number`

#### Inherited from

TypeFromSchema.endMinute

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:630](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L630)

___

### startHour

• **startHour**: `number`

#### Inherited from

TypeFromSchema.startHour

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:627](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L627)

___

### startMinute

• **startMinute**: `number`

#### Inherited from

TypeFromSchema.startMinute

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:628](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L628)

___

### userIndex

• **userIndex**: `number`

#### Inherited from

TypeFromSchema.userIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:625](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L625)

___

### weekDayIndex

• **weekDayIndex**: `number`

#### Inherited from

TypeFromSchema.weekDayIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:624](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L624)
