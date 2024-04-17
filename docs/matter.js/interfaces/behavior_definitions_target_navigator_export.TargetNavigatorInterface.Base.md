[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/target-navigator/export](../modules/behavior_definitions_target_navigator_export.md) / [TargetNavigatorInterface](../modules/behavior_definitions_target_navigator_export.TargetNavigatorInterface.md) / Base

# Interface: Base

[behavior/definitions/target-navigator/export](../modules/behavior_definitions_target_navigator_export.md).[TargetNavigatorInterface](../modules/behavior_definitions_target_navigator_export.TargetNavigatorInterface.md).Base

## Table of contents

### Methods

- [navigateTarget](behavior_definitions_target_navigator_export.TargetNavigatorInterface.Base.md#navigatetarget)

## Methods

### navigateTarget

▸ **navigateTarget**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.TargetNavigator.Status.md)\>  }\>\>

Upon receipt, this shall navigation the UX to the target identified.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `target`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.TargetNavigator.Status.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 6.11.4.1

#### Defined in

[packages/matter.js/src/behavior/definitions/target-navigator/TargetNavigatorInterface.ts:34](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/target-navigator/TargetNavigatorInterface.ts#L34)
