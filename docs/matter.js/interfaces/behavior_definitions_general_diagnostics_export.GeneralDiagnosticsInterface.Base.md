[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/general-diagnostics/export](../modules/behavior_definitions_general_diagnostics_export.md) / [GeneralDiagnosticsInterface](../modules/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsInterface.md) / Base

# Interface: Base

[behavior/definitions/general-diagnostics/export](../modules/behavior_definitions_general_diagnostics_export.md).[GeneralDiagnosticsInterface](../modules/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsInterface.md).Base

## Table of contents

### Methods

- [testEventTrigger](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsInterface.Base.md#testeventtrigger)

## Methods

### testEventTrigger

▸ **testEventTrigger**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

This command shall be supported to provide a means for certification tests to trigger some test-
plan-specific events, necessary to assist in automation of device interactions for some certification test
cases. This command shall NOT cause any changes to the state of the device that persist after the last
fabric is removed.

The fields for the TestEventTrigger command are as follows:

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `enableKey`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `eventTrigger`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 11.11.7.1

#### Defined in

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsInterface.ts:36](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsInterface.ts#L36)
