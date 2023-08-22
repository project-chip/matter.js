[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / DiagnosticLogs

# Namespace: DiagnosticLogs

[cluster/export](cluster_export.md).DiagnosticLogs

## Table of contents

### Enumerations

- [Intent](../enums/cluster_export.DiagnosticLogs.Intent.md)
- [Status](../enums/cluster_export.DiagnosticLogs.Status.md)
- [TransferProtocol](../enums/cluster_export.DiagnosticLogs.TransferProtocol.md)

### Variables

- [Cluster](cluster_export.DiagnosticLogs.md#cluster)
- [TlvRetrieveLogsRequestRequest](cluster_export.DiagnosticLogs.md#tlvretrievelogsrequestrequest)
- [TlvRetrieveLogsResponse](cluster_export.DiagnosticLogs.md#tlvretrievelogsresponse)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](cluster_export.md#cluster)<[`BitSchema`](schema_export.md#bitschema), [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<[`BitSchema`](schema_export.md#bitschema)\>, [`Merge`](util_export.md#merge)<{}, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<[`BitSchema`](schema_export.md#bitschema)\>\>, { `retrieveLogsRequest`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `intent`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Intent`](../enums/cluster_export.DiagnosticLogs.Intent.md)\> ; `requestedProtocol`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TransferProtocol`](../enums/cluster_export.DiagnosticLogs.TransferProtocol.md)\> ; `transferFileDesignator`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `logContent`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.DiagnosticLogs.Status.md)\> ; `timeSinceBoot`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\> ; `utcTimeStamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\>  }\>, `any`\>  }, {}\>

Diagnostic Logs

This Cluster supports an interface to a Node. It provides commands for retrieving unstructured diagnostic logs
from a Node that may be used to aid in diagnostics. It will often be the case that unstructured diagnostic logs
will be Node-wide and not specific to any subset of Endpoints. When present, this Cluster shall be implemented
once for the Node. The Node SHOULD also implement the BDX Initiator and BDX Sender roles as defined in the BDX
Protocol.

NOTE Support for Diagnostic Logs cluster is provisional.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.10

#### Defined in

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:246](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L246)

___

### TlvRetrieveLogsRequestRequest

• `Const` **TlvRetrieveLogsRequestRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `intent`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Intent`](../enums/cluster_export.DiagnosticLogs.Intent.md)\> ; `requestedProtocol`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TransferProtocol`](../enums/cluster_export.DiagnosticLogs.TransferProtocol.md)\> ; `transferFileDesignator`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\>  }\>

Input to the DiagnosticLogs retrieveLogsRequest command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.10.5.1

#### Defined in

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:79](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L79)

___

### TlvRetrieveLogsResponse

• `Const` **TlvRetrieveLogsResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `logContent`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.DiagnosticLogs.Status.md)\> ; `timeSinceBoot`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\> ; `utcTimeStamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\>  }\>

This shall be generated as a response to the RetrieveLogsRequest. The data for this command is shown in the
following.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.10.5.2

#### Defined in

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:197](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L197)
