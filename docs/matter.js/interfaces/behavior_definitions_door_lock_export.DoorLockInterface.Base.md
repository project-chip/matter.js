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

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts:139](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts#L139)

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

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts:144](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts#L144)

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

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

#### Defined in

[packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts:149](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts#L149)
