[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/door-lock/export](../modules/behavior_definitions_door_lock_export.md) / [DoorLockInterface](../modules/behavior_definitions_door_lock_export.DoorLockInterface.md) / WeekDayAccessSchedules

# Interface: WeekDayAccessSchedules

[behavior/definitions/door-lock/export](../modules/behavior_definitions_door_lock_export.md).[DoorLockInterface](../modules/behavior_definitions_door_lock_export.DoorLockInterface.md).WeekDayAccessSchedules

## Table of contents

### Methods

- [clearWeekDaySchedule](behavior_definitions_door_lock_export.DoorLockInterface.WeekDayAccessSchedules.md#clearweekdayschedule)
- [getWeekDaySchedule](behavior_definitions_door_lock_export.DoorLockInterface.WeekDayAccessSchedules.md#getweekdayschedule)
- [setWeekDaySchedule](behavior_definitions_door_lock_export.DoorLockInterface.WeekDayAccessSchedules.md#setweekdayschedule)

## Methods

### clearWeekDaySchedule

▸ **clearWeekDaySchedule**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts:205](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts#L205)

___

### getWeekDaySchedule

▸ **getWeekDaySchedule**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `daysMask`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `friday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `monday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `saturday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `sunday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thursday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `endHour`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `endMinute`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `startHour`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `startMinute`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `daysMask`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `friday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `monday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `saturday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `sunday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thursday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `endHour`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `endMinute`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `startHour`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `startMinute`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts:200](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts#L200)

___

### setWeekDaySchedule

▸ **setWeekDaySchedule**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `daysMask`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `friday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `monday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `saturday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `sunday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thursday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tuesday`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wednesday`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `endHour`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `endMinute`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `startHour`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `startMinute`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `userIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `weekDayIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts:195](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts#L195)
