[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/on-off/export](../modules/behavior_definitions_on_off_export.md) / [OnOffInterface](../modules/behavior_definitions_on_off_export.OnOffInterface.md) / LevelControlForLighting

# Interface: LevelControlForLighting

[behavior/definitions/on-off/export](../modules/behavior_definitions_on_off_export.md).[OnOffInterface](../modules/behavior_definitions_on_off_export.OnOffInterface.md).LevelControlForLighting

## Table of contents

### Methods

- [offWithEffect](behavior_definitions_on_off_export.OnOffInterface.LevelControlForLighting.md#offwitheffect)
- [onWithRecallGlobalScene](behavior_definitions_on_off_export.OnOffInterface.LevelControlForLighting.md#onwithrecallglobalscene)
- [onWithTimedOff](behavior_definitions_on_off_export.OnOffInterface.LevelControlForLighting.md#onwithtimedoff)

## Methods

### offWithEffect

▸ **offWithEffect**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

The OffWithEffect command allows devices to be turned off using enhanced ways of fading.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<[`OnOffEffectIdentifier`](../enums/cluster_export.OnOff.OnOffEffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 1.5.7.4

#### Defined in

[packages/matter.js/src/behavior/definitions/on-off/OnOffInterface.ts:61](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/on-off/OnOffInterface.ts#L61)

___

### onWithRecallGlobalScene

▸ **onWithRecallGlobalScene**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

The OnWithRecallGlobalScene command allows the recall of the settings when the device was turned off.

The OnWithRecallGlobalScene command shall have no parameters.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 1.5.7.5

#### Defined in

[packages/matter.js/src/behavior/definitions/on-off/OnOffInterface.ts:70](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/on-off/OnOffInterface.ts#L70)

___

### onWithTimedOff

▸ **onWithTimedOff**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

The OnWithTimedOff command allows devices to be turned on for a specific duration with a guarded off
duration so that SHOULD the device be subsequently turned off, further OnWithTimedOff commands, received
during this time, are prevented from turning the devices back on. Further

OnWithTimedOff commands received while the server is turned on, will update the period that the device is
turned on.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `offWaitTime`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `onOffControl`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `acceptOnlyWhenOn`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `reserved`: [`BitField`](../modules/schema_export.md#bitfield)  }\>\> ; `onTime`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 1.5.7.6

#### Defined in

[packages/matter.js/src/behavior/definitions/on-off/OnOffInterface.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/on-off/OnOffInterface.ts#L82)
