[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / DiagnosticLogs

# Namespace: DiagnosticLogs

[cluster/export](cluster_export.md).DiagnosticLogs

## Table of contents

### Enumerations

- [Intent](../enums/cluster_export.DiagnosticLogs.Intent.md)
- [Status](../enums/cluster_export.DiagnosticLogs.Status.md)
- [TransferProtocol](../enums/cluster_export.DiagnosticLogs.TransferProtocol.md)

### Interfaces

- [Cluster](../interfaces/cluster_export.DiagnosticLogs.Cluster.md)
- [RetrieveLogsRequest](../interfaces/cluster_export.DiagnosticLogs.RetrieveLogsRequest.md)
- [RetrieveLogsResponse](../interfaces/cluster_export.DiagnosticLogs.RetrieveLogsResponse.md)

### Variables

- [Cluster](cluster_export.DiagnosticLogs.md#cluster)
- [ClusterInstance](cluster_export.DiagnosticLogs.md#clusterinstance)
- [Complete](cluster_export.DiagnosticLogs.md#complete)
- [TlvRetrieveLogsRequest](cluster_export.DiagnosticLogs.md#tlvretrievelogsrequest)
- [TlvRetrieveLogsResponse](cluster_export.DiagnosticLogs.md#tlvretrievelogsresponse)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.DiagnosticLogs.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:282](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L282)

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:284](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L284)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `commands`: \{ `retrieveLogsRequest`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `intent`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Intent`](../enums/cluster_export.DiagnosticLogs.Intent.md)\> ; `requestedProtocol`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TransferProtocol`](../enums/cluster_export.DiagnosticLogs.TransferProtocol.md)\> ; `transferFileDesignator`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `logContent`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.DiagnosticLogs.Status.md)\> ; `timeSinceBoot`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `utcTimeStamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\>  }\>, `any`\>  } ; `id`: ``50`` = 0x32; `name`: ``"DiagnosticLogs"`` = "DiagnosticLogs"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.DiagnosticLogs.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:254](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L254)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.DiagnosticLogs.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:285](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L285)

___

### TlvRetrieveLogsRequest

• `Const` **TlvRetrieveLogsRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `intent`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Intent`](../enums/cluster_export.DiagnosticLogs.Intent.md)\> ; `requestedProtocol`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TransferProtocol`](../enums/cluster_export.DiagnosticLogs.TransferProtocol.md)\> ; `transferFileDesignator`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>

Input to the DiagnosticLogs retrieveLogsRequest command

**`See`**

MatterSpecification.v11.Core § 11.10.5.1

#### Defined in

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L82)

___

### TlvRetrieveLogsResponse

• `Const` **TlvRetrieveLogsResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `logContent`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.DiagnosticLogs.Status.md)\> ; `timeSinceBoot`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `utcTimeStamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\>  }\>

This shall be generated as a response to the RetrieveLogsRequest. The data for this command is shown in the
following.

**`See`**

MatterSpecification.v11.Core § 11.10.5.2

#### Defined in

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:207](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L207)
