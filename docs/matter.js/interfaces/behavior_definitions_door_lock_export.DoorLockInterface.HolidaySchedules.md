[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/door-lock/export](../modules/behavior_definitions_door_lock_export.md) / [DoorLockInterface](../modules/behavior_definitions_door_lock_export.DoorLockInterface.md) / HolidaySchedules

# Interface: HolidaySchedules

[behavior/definitions/door-lock/export](../modules/behavior_definitions_door_lock_export.md).[DoorLockInterface](../modules/behavior_definitions_door_lock_export.DoorLockInterface.md).HolidaySchedules

## Table of contents

### Methods

- [clearHolidaySchedule](behavior_definitions_door_lock_export.DoorLockInterface.HolidaySchedules.md#clearholidayschedule)
- [getHolidaySchedule](behavior_definitions_door_lock_export.DoorLockInterface.HolidaySchedules.md#getholidayschedule)
- [setHolidaySchedule](behavior_definitions_door_lock_export.DoorLockInterface.HolidaySchedules.md#setholidayschedule)

## Methods

### clearHolidaySchedule

▸ **clearHolidaySchedule**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

[packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts:238](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts#L238)

___

### getHolidaySchedule

▸ **getHolidaySchedule**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `localEndTime`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `localStartTime`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `operatingMode`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\>  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `localEndTime`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `localStartTime`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `operatingMode`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

[packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts:233](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts#L233)

___

### setHolidaySchedule

▸ **setHolidaySchedule**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `holidayIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `localEndTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `localStartTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `operatingMode`: [`FieldType`](tlv_export.FieldType.md)\<[`OperatingMode`](../enums/cluster_export.DoorLock.OperatingMode.md)\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

[packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts:228](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts#L228)
