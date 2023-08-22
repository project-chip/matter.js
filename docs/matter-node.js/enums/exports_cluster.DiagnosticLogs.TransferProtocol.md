[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [DiagnosticLogs](../modules/exports_cluster.DiagnosticLogs.md) / TransferProtocol

# Enumeration: TransferProtocol

[exports/cluster](../modules/exports_cluster.md).[DiagnosticLogs](../modules/exports_cluster.DiagnosticLogs.md).TransferProtocol

**`See`**

MatterCoreSpecificationV1_1 § 11.10.4.3

## Table of contents

### Enumeration Members

- [Bdx](exports_cluster.DiagnosticLogs.TransferProtocol.md#bdx)
- [ResponsePayload](exports_cluster.DiagnosticLogs.TransferProtocol.md#responsepayload)

## Enumeration Members

### Bdx

• **Bdx** = ``1``

Logs to be returned using BDX

shall be used by a Client to request that logs are transferred using BDX as defined in BDX Protocol

**`See`**

MatterCoreSpecificationV1_1 § 11.10.4.3.2

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DiagnosticLogsCluster.d.ts:60

___

### ResponsePayload

• **ResponsePayload** = ``0``

Logs to be returned as a response

shall be used by a Client to request that logs are transferred using the LogContent attribute of the response

**`See`**

MatterCoreSpecificationV1_1 § 11.10.4.3.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DiagnosticLogsCluster.d.ts:52
