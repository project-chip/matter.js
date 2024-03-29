[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ClientMonitoring](../modules/exports_cluster.ClientMonitoring.md) / RegisterClientMonitoringRequest

# Interface: RegisterClientMonitoringRequest

[exports/cluster](../modules/exports_cluster.md).[ClientMonitoring](../modules/exports_cluster.ClientMonitoring.md).RegisterClientMonitoringRequest

Input to the ClientMonitoring registerClientMonitoring command

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvRegisterClientMonitoringRequest`](../modules/exports_cluster.ClientMonitoring.md#tlvregisterclientmonitoringrequest)\>

  ↳ **`RegisterClientMonitoringRequest`**

## Table of contents

### Properties

- [clientNodeId](exports_cluster.ClientMonitoring.RegisterClientMonitoringRequest.md#clientnodeid)
- [iCid](exports_cluster.ClientMonitoring.RegisterClientMonitoringRequest.md#icid)

## Properties

### clientNodeId

• **clientNodeId**: [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Inherited from

TypeFromSchema.clientNodeId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ClientMonitoringCluster.d.ts:22

___

### iCid

• **iCid**: `number` \| `bigint`

#### Inherited from

TypeFromSchema.iCid

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ClientMonitoringCluster.d.ts:23
