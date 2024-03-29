[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/system/OtaRequestorEndpoint](endpoint_definitions_system_OtaRequestorEndpoint.md) / OtaRequestorRequirements

# Namespace: OtaRequestorRequirements

[endpoint/definitions/system/OtaRequestorEndpoint](endpoint_definitions_system_OtaRequestorEndpoint.md).OtaRequestorRequirements

## Table of contents

### Variables

- [OtaSoftwareUpdateProviderBehavior](endpoint_definitions_system_OtaRequestorEndpoint.OtaRequestorRequirements.md#otasoftwareupdateproviderbehavior)
- [OtaSoftwareUpdateRequestorServer](endpoint_definitions_system_OtaRequestorEndpoint.OtaRequestorRequirements.md#otasoftwareupdaterequestorserver)
- [client](endpoint_definitions_system_OtaRequestorEndpoint.OtaRequestorRequirements.md#client)
- [server](endpoint_definitions_system_OtaRequestorEndpoint.OtaRequestorRequirements.md#server)

## Variables

### OtaSoftwareUpdateProviderBehavior

• `Const` **OtaSoftwareUpdateProviderBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.OtaSoftwareUpdateProvider.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`OtaSoftwareUpdateProviderInterface`](behavior_definitions_ota_software_update_provider_export.md#otasoftwareupdateproviderinterface)\>, [`OtaSoftwareUpdateProviderInterface`](behavior_definitions_ota_software_update_provider_export.md#otasoftwareupdateproviderinterface)\> = `BaseOtaSoftwareUpdateProviderBehavior`

The OtaSoftwareUpdateProvider cluster is required by the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/OtaRequestorEndpoint.ts:41](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/system/OtaRequestorEndpoint.ts#L41)

___

### OtaSoftwareUpdateRequestorServer

• `Const` **OtaSoftwareUpdateRequestorServer**: typeof [`OtaSoftwareUpdateRequestorServer`](../classes/behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorServer.md) = `BaseOtaSoftwareUpdateRequestorServer`

The OtaSoftwareUpdateRequestor cluster is required by the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/OtaRequestorEndpoint.ts:34](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/system/OtaRequestorEndpoint.ts#L34)

___

### client

• `Const` **client**: `Object`

A definition for each client cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | \{ `OtaSoftwareUpdateProvider`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.OtaSoftwareUpdateProvider.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`OtaSoftwareUpdateProviderInterface`](behavior_definitions_ota_software_update_provider_export.md#otasoftwareupdateproviderinterface)\>, [`OtaSoftwareUpdateProviderInterface`](behavior_definitions_ota_software_update_provider_export.md#otasoftwareupdateproviderinterface)\> = OtaSoftwareUpdateProviderBehavior } |
| `mandatory.OtaSoftwareUpdateProvider` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.OtaSoftwareUpdateProvider.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`OtaSoftwareUpdateProviderInterface`](behavior_definitions_ota_software_update_provider_export.md#otasoftwareupdateproviderinterface)\>, [`OtaSoftwareUpdateProviderInterface`](behavior_definitions_ota_software_update_provider_export.md#otasoftwareupdateproviderinterface)\> |

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/OtaRequestorEndpoint.ts:51](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/system/OtaRequestorEndpoint.ts#L51)

___

### server

• `Const` **server**: `Object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | \{ `OtaSoftwareUpdateRequestor`: typeof [`OtaSoftwareUpdateRequestorServer`](../classes/behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorServer.md) = OtaSoftwareUpdateRequestorServer } |
| `mandatory.OtaSoftwareUpdateRequestor` | typeof [`OtaSoftwareUpdateRequestorServer`](../classes/behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorServer.md) |

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/OtaRequestorEndpoint.ts:46](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/system/OtaRequestorEndpoint.ts#L46)
