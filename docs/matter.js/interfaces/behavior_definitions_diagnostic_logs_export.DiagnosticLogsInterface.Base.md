[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/diagnostic-logs/export](../modules/behavior_definitions_diagnostic_logs_export.md) / [DiagnosticLogsInterface](../modules/behavior_definitions_diagnostic_logs_export.DiagnosticLogsInterface.md) / Base

# Interface: Base

[behavior/definitions/diagnostic-logs/export](../modules/behavior_definitions_diagnostic_logs_export.md).[DiagnosticLogsInterface](../modules/behavior_definitions_diagnostic_logs_export.DiagnosticLogsInterface.md).Base

## Table of contents

### Methods

- [retrieveLogsRequest](behavior_definitions_diagnostic_logs_export.DiagnosticLogsInterface.Base.md#retrievelogsrequest)

## Methods

### retrieveLogsRequest

▸ **retrieveLogsRequest**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `logContent`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.DiagnosticLogs.Status.md)\> ; `timeSinceBoot`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `utcTimeStamp`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\>  }\>\>

Reception of this command starts the process of retrieving diagnostic logs from a Node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `intent`: [`FieldType`](tlv_export.FieldType.md)\<[`Intent`](../enums/cluster_export.DiagnosticLogs.Intent.md)\> ; `requestedProtocol`: [`FieldType`](tlv_export.FieldType.md)\<[`TransferProtocol`](../enums/cluster_export.DiagnosticLogs.TransferProtocol.md)\> ; `transferFileDesignator`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `logContent`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.DiagnosticLogs.Status.md)\> ; `timeSinceBoot`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `utcTimeStamp`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\>  }\>\>

**`See`**

MatterSpecification.v11.Core § 11.10.5.1

#### Defined in

[packages/matter.js/src/behavior/definitions/diagnostic-logs/DiagnosticLogsInterface.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/diagnostic-logs/DiagnosticLogsInterface.ts#L35)
