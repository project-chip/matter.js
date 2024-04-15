[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / DiagnosticLogs

# Namespace: DiagnosticLogs

[exports/cluster](exports_cluster.md).DiagnosticLogs

## Table of contents

### Enumerations

- [Intent](../enums/exports_cluster.DiagnosticLogs.Intent.md)
- [Status](../enums/exports_cluster.DiagnosticLogs.Status.md)
- [TransferProtocol](../enums/exports_cluster.DiagnosticLogs.TransferProtocol.md)

### Interfaces

- [Cluster](../interfaces/exports_cluster.DiagnosticLogs.Cluster.md)
- [RetrieveLogsRequest](../interfaces/exports_cluster.DiagnosticLogs.RetrieveLogsRequest.md)
- [RetrieveLogsResponse](../interfaces/exports_cluster.DiagnosticLogs.RetrieveLogsResponse.md)

### Variables

- [Cluster](exports_cluster.DiagnosticLogs.md#cluster)
- [ClusterInstance](exports_cluster.DiagnosticLogs.md#clusterinstance)
- [Complete](exports_cluster.DiagnosticLogs.md#complete)
- [TlvRetrieveLogsRequest](exports_cluster.DiagnosticLogs.md#tlvretrievelogsrequest)
- [TlvRetrieveLogsResponse](exports_cluster.DiagnosticLogs.md#tlvretrievelogsresponse)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.DiagnosticLogs.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DiagnosticLogsCluster.d.ts:341

packages/matter.js/dist/esm/cluster/definitions/DiagnosticLogsCluster.d.ts:343

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `commands`: \{ `retrieveLogsRequest`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `id`: ``50`` ; `name`: ``"DiagnosticLogs"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.DiagnosticLogs.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DiagnosticLogsCluster.d.ts:230

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/exports_cluster.DiagnosticLogs.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DiagnosticLogsCluster.d.ts:344

___

### TlvRetrieveLogsRequest

• `Const` **TlvRetrieveLogsRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DiagnosticLogs retrieveLogsRequest command

**`See`**

MatterSpecification.v11.Core § 11.10.5.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DiagnosticLogsCluster.d.ts:70

___

### TlvRetrieveLogsResponse

• `Const` **TlvRetrieveLogsResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This shall be generated as a response to the RetrieveLogsRequest. The data for this command is shown in the
following.

**`See`**

MatterSpecification.v11.Core § 11.10.5.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DiagnosticLogsCluster.d.ts:187
