[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](export.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Namespaces

- [DeviceCertification](export._internal_.DeviceCertification.md)

### Classes

- [DeviceCertification](../classes/export._internal_.DeviceCertification-1.md)
- [MatterController](../classes/export._internal_.MatterController.md)

### Type Aliases

- [CommissionedNodeDetails](export._internal_.md#commissionednodedetails)
- [CommissioningServerCommands](export._internal_.md#commissioningservercommands)

## Type Aliases

### CommissionedNodeDetails

Ƭ **CommissionedNodeDetails**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `basicInformationData?` | `Record`\<`string`, [`SupportedStorageTypes`](storage_export.md#supportedstoragetypes)\> |
| `discoveryData?` | [`DiscoveryData`](common_export.md#discoverydata) |
| `operationalServerAddress?` | [`ServerAddressIp`](common_export.md#serveraddressip) |

#### Defined in

[packages/matter.js/src/MatterController.ts:66](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterController.ts#L66)

___

### CommissioningServerCommands

Ƭ **CommissioningServerCommands**: `Object`

Commands exposed by the CommissioningServer

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `testEventTrigger` | [`ClusterServerHandlers`](cluster_export.md#clusterserverhandlers)\<typeof [`GeneralDiagnosticsCluster`](cluster_export.md#generaldiagnosticscluster-1)\>[``"testEventTrigger"``] | Provide a means for certification tests to trigger some test-plan-specific events. |

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:206](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/CommissioningServer.ts#L206)
