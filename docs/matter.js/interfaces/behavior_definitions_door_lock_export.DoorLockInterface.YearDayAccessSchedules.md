[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/door-lock/export](../modules/behavior_definitions_door_lock_export.md) / [DoorLockInterface](../modules/behavior_definitions_door_lock_export.DoorLockInterface.md) / YearDayAccessSchedules

# Interface: YearDayAccessSchedules

[behavior/definitions/door-lock/export](../modules/behavior_definitions_door_lock_export.md).[DoorLockInterface](../modules/behavior_definitions_door_lock_export.DoorLockInterface.md).YearDayAccessSchedules

## Table of contents

### Methods

- [clearYearDaySchedule](behavior_definitions_door_lock_export.DoorLockInterface.YearDayAccessSchedules.md#clearyeardayschedule)
- [getYearDaySchedule](behavior_definitions_door_lock_export.DoorLockInterface.YearDayAccessSchedules.md#getyeardayschedule)
- [setYearDaySchedule](behavior_definitions_door_lock_export.DoorLockInterface.YearDayAccessSchedules.md#setyeardayschedule)

## Methods

### clearYearDaySchedule

▸ **clearYearDaySchedule**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

[packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts:221](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts#L221)

___

### getYearDaySchedule

▸ **getYearDaySchedule**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `localEndTime`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `localStartTime`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `localEndTime`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `localStartTime`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

[packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts:216](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts#L216)

___

### setYearDaySchedule

▸ **setYearDaySchedule**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `localEndTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `localStartTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `userIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `yearDayIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

[packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts:211](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts#L211)
