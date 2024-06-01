[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / DiagnosticLogs

# Namespace: DiagnosticLogs

## Index

### Enumerations

- [Intent](enumerations/Intent.md)
- [Status](enumerations/Status.md)
- [TransferProtocol](enumerations/TransferProtocol.md)

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [RetrieveLogsRequest](interfaces/RetrieveLogsRequest.md)
- [RetrieveLogsResponse](interfaces/RetrieveLogsResponse.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/DiagnosticLogsCluster.d.ts:341

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### commands

> `readonly` **commands**: `object`

##### commands.retrieveLogsRequest

> `readonly` **retrieveLogsRequest**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Reception of this command starts the process of retrieving diagnostic logs from a Node.

###### See

MatterSpecification.v11.Core § 11.10.5.1

##### id

> `readonly` **id**: `50`

##### name

> `readonly` **name**: `"DiagnosticLogs"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DiagnosticLogsCluster.d.ts:230

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/DiagnosticLogsCluster.d.ts:344

***

### TlvRetrieveLogsRequest

> `const` **TlvRetrieveLogsRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the DiagnosticLogs retrieveLogsRequest command

#### See

MatterSpecification.v11.Core § 11.10.5.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/DiagnosticLogsCluster.d.ts:70

***

### TlvRetrieveLogsResponse

> `const` **TlvRetrieveLogsResponse**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This shall be generated as a response to the RetrieveLogsRequest. The data for this command is shown in the
following.

#### See

MatterSpecification.v11.Core § 11.10.5.2

#### Source

packages/matter.js/dist/esm/cluster/definitions/DiagnosticLogsCluster.d.ts:187
