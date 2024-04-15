[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/door-lock/export](../modules/behavior_definitions_door_lock_export.md) / [DoorLockInterface](../modules/behavior_definitions_door_lock_export.DoorLockInterface.md) / Base

# Interface: Base

[behavior/definitions/door-lock/export](../modules/behavior_definitions_door_lock_export.md).[DoorLockInterface](../modules/behavior_definitions_door_lock_export.DoorLockInterface.md).Base

## Table of contents

### Methods

- [lockDoor](behavior_definitions_door_lock_export.DoorLockInterface.Base.md#lockdoor)
- [unlockDoor](behavior_definitions_door_lock_export.DoorLockInterface.Base.md#unlockdoor)
- [unlockWithTimeout](behavior_definitions_door_lock_export.DoorLockInterface.Base.md#unlockwithtimeout)

## Methods

### lockDoor

▸ **lockDoor**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `pinCode`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

[packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts:138](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts#L138)

___

### unlockDoor

▸ **unlockDoor**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `pinCode`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

[packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts:143](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts#L143)

___

### unlockWithTimeout

▸ **unlockWithTimeout**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `pinCode`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `timeout`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

[packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts:148](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts#L148)
