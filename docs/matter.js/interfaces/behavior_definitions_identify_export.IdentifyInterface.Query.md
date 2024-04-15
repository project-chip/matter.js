[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/identify/export](../modules/behavior_definitions_identify_export.md) / [IdentifyInterface](../modules/behavior_definitions_identify_export.IdentifyInterface.md) / Query

# Interface: Query

[behavior/definitions/identify/export](../modules/behavior_definitions_identify_export.md).[IdentifyInterface](../modules/behavior_definitions_identify_export.IdentifyInterface.md).Query

## Table of contents

### Methods

- [identifyQuery](behavior_definitions_identify_export.IdentifyInterface.Query.md#identifyquery)

## Methods

### identifyQuery

▸ **identifyQuery**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `timeout`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>\>

This command allows the sending device to request the target or targets to respond if they are currently
identifying themselves.

This command has no data fields.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `timeout`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 1.2.6.2

#### Defined in

[packages/matter.js/src/behavior/definitions/identify/IdentifyInterface.ts:69](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/identify/IdentifyInterface.ts#L69)
