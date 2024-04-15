[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ClientMonitoring](../modules/cluster_export.ClientMonitoring.md) / RegisterClientMonitoringRequest

# Interface: RegisterClientMonitoringRequest

[cluster/export](../modules/cluster_export.md).[ClientMonitoring](../modules/cluster_export.ClientMonitoring.md).RegisterClientMonitoringRequest

Input to the ClientMonitoring registerClientMonitoring command

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvRegisterClientMonitoringRequest`](../modules/cluster_export.ClientMonitoring.md#tlvregisterclientmonitoringrequest)\>

  ↳ **`RegisterClientMonitoringRequest`**

## Table of contents

### Properties

- [clientNodeId](cluster_export.ClientMonitoring.RegisterClientMonitoringRequest.md#clientnodeid)
- [iCid](cluster_export.ClientMonitoring.RegisterClientMonitoringRequest.md#icid)

## Properties

### clientNodeId

• **clientNodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Inherited from

TypeFromSchema.clientNodeId

#### Defined in

[packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts#L31)

___

### iCid

• **iCid**: `number` \| `bigint`

#### Inherited from

TypeFromSchema.iCid

#### Defined in

[packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts#L32)
