[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ClientMonitoring](../modules/cluster_export.ClientMonitoring.md) / UnregisterClientMonitoringRequest

# Interface: UnregisterClientMonitoringRequest

[cluster/export](../modules/cluster_export.md).[ClientMonitoring](../modules/cluster_export.ClientMonitoring.md).UnregisterClientMonitoringRequest

Input to the ClientMonitoring unregisterClientMonitoring command

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvUnregisterClientMonitoringRequest`](../modules/cluster_export.ClientMonitoring.md#tlvunregisterclientmonitoringrequest)\>

  ↳ **`UnregisterClientMonitoringRequest`**

## Table of contents

### Properties

- [clientNodeId](cluster_export.ClientMonitoring.UnregisterClientMonitoringRequest.md#clientnodeid)
- [iCid](cluster_export.ClientMonitoring.UnregisterClientMonitoringRequest.md#icid)

## Properties

### clientNodeId

• **clientNodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Inherited from

TypeFromSchema.clientNodeId

#### Defined in

[packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts:44](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts#L44)

___

### iCid

• **iCid**: `number` \| `bigint`

#### Inherited from

TypeFromSchema.iCid

#### Defined in

[packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts#L45)
