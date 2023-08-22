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

• `Const` **Cluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `retrieveLogsRequest`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }, {}\>

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

packages/matter.js/dist/cjs/cluster/definitions/DiagnosticLogsCluster.d.ts:222

___

### TlvRetrieveLogsRequestRequest

• `Const` **TlvRetrieveLogsRequestRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the DiagnosticLogs retrieveLogsRequest command

**`See`**

MatterCoreSpecificationV1_1 § 11.10.5.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DiagnosticLogsCluster.d.ts:67

___

### TlvRetrieveLogsResponse

• `Const` **TlvRetrieveLogsResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This shall be generated as a response to the RetrieveLogsRequest. The data for this command is shown in the
following.

**`See`**

MatterCoreSpecificationV1_1 § 11.10.5.2

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DiagnosticLogsCluster.d.ts:177
