[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/system/OtaProviderEndpoint](endpoint_definitions_system_OtaProviderEndpoint.md) / OtaProviderRequirements

# Namespace: OtaProviderRequirements

[endpoint/definitions/system/OtaProviderEndpoint](endpoint_definitions_system_OtaProviderEndpoint.md).OtaProviderRequirements

## Table of contents

### Variables

- [OtaSoftwareUpdateProviderServer](endpoint_definitions_system_OtaProviderEndpoint.OtaProviderRequirements.md#otasoftwareupdateproviderserver)
- [OtaSoftwareUpdateRequestorBehavior](endpoint_definitions_system_OtaProviderEndpoint.OtaProviderRequirements.md#otasoftwareupdaterequestorbehavior)
- [client](endpoint_definitions_system_OtaProviderEndpoint.OtaProviderRequirements.md#client)
- [server](endpoint_definitions_system_OtaProviderEndpoint.OtaProviderRequirements.md#server)

## Variables

### OtaSoftwareUpdateProviderServer

• `Const` **OtaSoftwareUpdateProviderServer**: typeof [`OtaSoftwareUpdateProviderServer`](../classes/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md) = `BaseOtaSoftwareUpdateProviderServer`

The OtaSoftwareUpdateProvider cluster is required by the Matter specification

We provide this alias to the default implementation [OtaSoftwareUpdateProviderServer](endpoint_definitions_system_OtaProviderEndpoint.OtaProviderRequirements.md#otasoftwareupdateproviderserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/OtaProviderEndpoint.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/OtaProviderEndpoint.ts#L33)

___

### OtaSoftwareUpdateRequestorBehavior

• `Const` **OtaSoftwareUpdateRequestorBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.OtaSoftwareUpdateRequestor.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`OtaSoftwareUpdateRequestorInterface`](behavior_definitions_ota_software_update_requestor_export.md#otasoftwareupdaterequestorinterface)\>, [`OtaSoftwareUpdateRequestorInterface`](behavior_definitions_ota_software_update_requestor_export.md#otasoftwareupdaterequestorinterface)\> = `BaseOtaSoftwareUpdateRequestorBehavior`

The OtaSoftwareUpdateRequestor cluster is optional per the Matter specification

We provide this alias to the default implementation [OtaSoftwareUpdateRequestorBehavior](endpoint_definitions_system_OtaProviderEndpoint.OtaProviderRequirements.md#otasoftwareupdaterequestorbehavior) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/OtaProviderEndpoint.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/OtaProviderEndpoint.ts#L40)

___

### client

• `Const` **client**: `Object`

A definition for each client cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | {} |
| `optional` | \{ `OtaSoftwareUpdateRequestor`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.OtaSoftwareUpdateRequestor.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`OtaSoftwareUpdateRequestorInterface`](behavior_definitions_ota_software_update_requestor_export.md#otasoftwareupdaterequestorinterface)\>, [`OtaSoftwareUpdateRequestorInterface`](behavior_definitions_ota_software_update_requestor_export.md#otasoftwareupdaterequestorinterface)\> = OtaSoftwareUpdateRequestorBehavior } |
| `optional.OtaSoftwareUpdateRequestor` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.OtaSoftwareUpdateRequestor.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`OtaSoftwareUpdateRequestorInterface`](behavior_definitions_ota_software_update_requestor_export.md#otasoftwareupdaterequestorinterface)\>, [`OtaSoftwareUpdateRequestorInterface`](behavior_definitions_ota_software_update_requestor_export.md#otasoftwareupdaterequestorinterface)\> |

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/OtaProviderEndpoint.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/OtaProviderEndpoint.ts#L50)

___

### server

• `Const` **server**: `Object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | \{ `OtaSoftwareUpdateProvider`: typeof [`OtaSoftwareUpdateProviderServer`](../classes/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md) = OtaSoftwareUpdateProviderServer } |
| `mandatory.OtaSoftwareUpdateProvider` | typeof [`OtaSoftwareUpdateProviderServer`](../classes/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md) |

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/OtaProviderEndpoint.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/OtaProviderEndpoint.ts#L45)
