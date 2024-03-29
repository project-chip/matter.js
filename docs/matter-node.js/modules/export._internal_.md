[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [export](export.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Classes

- [MatterController](../classes/export._internal_.MatterController.md)

### Type Aliases

- [CommissioningServerCommands](export._internal_.md#commissioningservercommands)

## Type Aliases

### CommissioningServerCommands

Ƭ **CommissioningServerCommands**: `Object`

Commands exposed by the CommissioningServer

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `testEventTrigger` | [`ClusterServerHandlers`](exports_cluster.md#clusterserverhandlers)\<typeof [`GeneralDiagnosticsCluster`](exports_cluster.md#generaldiagnosticscluster-1)\>[``"testEventTrigger"``] | Provide a means for certification tests to trigger some test-plan-specific events. |

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:129
