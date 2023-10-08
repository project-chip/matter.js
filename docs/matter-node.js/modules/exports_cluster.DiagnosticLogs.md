[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / DiagnosticLogs

# Namespace: DiagnosticLogs

[exports/cluster](exports_cluster.md).DiagnosticLogs

## Table of contents

### Enumerations

- [Intent](../enums/exports_cluster.DiagnosticLogs.Intent.md)
- [Status](../enums/exports_cluster.DiagnosticLogs.Status.md)
- [TransferProtocol](../enums/exports_cluster.DiagnosticLogs.TransferProtocol.md)

### Variables

- [Cluster](exports_cluster.DiagnosticLogs.md#cluster)
- [TlvRetrieveLogsRequestRequest](exports_cluster.DiagnosticLogs.md#tlvretrievelogsrequestrequest)
- [TlvRetrieveLogsResponse](exports_cluster.DiagnosticLogs.md#tlvretrievelogsresponse)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `commands`: { `retrieveLogsRequest`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `id`: ``50`` ; `name`: ``"DiagnosticLogs"`` ; `revision`: ``1``  }\>

Diagnostic Logs

This Cluster supports an interface to a Node. It provides commands for retrieving unstructured diagnostic logs
from a Node that may be used to aid in diagnostics. It will often be the case that unstructured diagnostic logs
will be Node-wide and not specific to any subset of Endpoints. When present, this Cluster shall be implemented
once for the Node. The Node SHOULD also implement the BDX Initiator and BDX Sender roles as defined in the BDX
Protocol.

NOTE Support for Diagnostic Logs cluster is provisional.

**`See`**

MatterCoreSpecificationV1_1 § 11.10

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DiagnosticLogsCluster.d.ts:223

___

### TlvRetrieveLogsRequestRequest

• `Const` **TlvRetrieveLogsRequestRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the DiagnosticLogs retrieveLogsRequest command

**`See`**

MatterCoreSpecificationV1_1 § 11.10.5.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DiagnosticLogsCluster.d.ts:68

___

### TlvRetrieveLogsResponse

• `Const` **TlvRetrieveLogsResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This shall be generated as a response to the RetrieveLogsRequest. The data for this command is shown in the
following.

**`See`**

MatterCoreSpecificationV1_1 § 11.10.5.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DiagnosticLogsCluster.d.ts:178
