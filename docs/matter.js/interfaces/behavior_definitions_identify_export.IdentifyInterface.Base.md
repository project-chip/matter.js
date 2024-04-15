[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/identify/export](../modules/behavior_definitions_identify_export.md) / [IdentifyInterface](../modules/behavior_definitions_identify_export.IdentifyInterface.md) / Base

# Interface: Base

[behavior/definitions/identify/export](../modules/behavior_definitions_identify_export.md).[IdentifyInterface](../modules/behavior_definitions_identify_export.IdentifyInterface.md).Base

## Table of contents

### Methods

- [identify](behavior_definitions_identify_export.IdentifyInterface.Base.md#identify)
- [triggerEffect](behavior_definitions_identify_export.IdentifyInterface.Base.md#triggereffect)

## Methods

### identify

▸ **identify**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

This command starts or stops the receiving device identifying itself.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `identifyTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 1.2.6.1

#### Defined in

[packages/matter.js/src/behavior/definitions/identify/IdentifyInterface.ts:46](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/identify/IdentifyInterface.ts#L46)

___

### triggerEffect

▸ **triggerEffect**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

This command allows the support of feedback to the user, such as a certain light effect. It is used to allow
an implementation to provide visual feedback to the user under certain circumstances such as a color light
turning green when it has successfully connected to a network. The use of this command and the effects
themselves are entirely up to the implementer to use whenever a visual feedback is useful but it is not the
same as and does not replace the identify mechanism used during commissioning.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<[`EffectIdentifier`](../enums/cluster_export.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](tlv_export.FieldType.md)\<[`Default`](../enums/cluster_export.Identify.EffectVariant.md#default)\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 1.2.6.3

#### Defined in

[packages/matter.js/src/behavior/definitions/identify/IdentifyInterface.ts:57](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/identify/IdentifyInterface.ts#L57)
