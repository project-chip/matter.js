[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/ota-software-update-requestor/export

# Module: behavior/definitions/ota-software-update-requestor/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_ota_software_update_requestor_export._internal_.md)

### Namespaces

- [OtaSoftwareUpdateRequestorBehavior](behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorBehavior.md)
- [OtaSoftwareUpdateRequestorInterface](behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorInterface.md)

### Classes

- [OtaSoftwareUpdateRequestorServer](../classes/behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorServer.md)

### Interfaces

- [OtaSoftwareUpdateRequestorBehavior](../interfaces/behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorBehavior-1.md)

### Type Aliases

- [AnnounceOtaProviderRequest](behavior_definitions_ota_software_update_requestor_export.md#announceotaproviderrequest)
- [OtaSoftwareUpdateRequestorInterface](behavior_definitions_ota_software_update_requestor_export.md#otasoftwareupdaterequestorinterface)

### Variables

- [OtaSoftwareUpdateRequestorBehavior](behavior_definitions_ota_software_update_requestor_export.md#otasoftwareupdaterequestorbehavior)

## Type Aliases

### AnnounceOtaProviderRequest

Ƭ **AnnounceOtaProviderRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvAnnounceOtaProviderRequest`](cluster_export.OtaSoftwareUpdateRequestor.md#tlvannounceotaproviderrequest)\>

This command may be invoked by Administrators to announce the presence of a particular OTA Provider.

This command shall be scoped to the accessing fabric.

If the accessing fabric index is 0, this command shall fail with an UNSUPPORTED_ACCESS status code.

**`See`**

MatterSpecification.v11.Core § 11.19.7.6.1

#### Defined in

[packages/matter.js/src/behavior/definitions/ota-software-update-requestor/OtaSoftwareUpdateRequestorInterface.ts:22](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/ota-software-update-requestor/OtaSoftwareUpdateRequestorInterface.ts#L22)

___

### OtaSoftwareUpdateRequestorInterface

Ƭ **OtaSoftwareUpdateRequestorInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: {} ; `methods`: [`Base`](../interfaces/behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorInterface.Base.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/ota-software-update-requestor/OtaSoftwareUpdateRequestorInterface.ts:24](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/ota-software-update-requestor/OtaSoftwareUpdateRequestorInterface.ts#L24)

[packages/matter.js/src/behavior/definitions/ota-software-update-requestor/OtaSoftwareUpdateRequestorInterface.ts:39](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/ota-software-update-requestor/OtaSoftwareUpdateRequestorInterface.ts#L39)

## Variables

### OtaSoftwareUpdateRequestorBehavior

• `Const` **OtaSoftwareUpdateRequestorBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.OtaSoftwareUpdateRequestor.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`OtaSoftwareUpdateRequestorInterface`](behavior_definitions_ota_software_update_requestor_export.md#otasoftwareupdaterequestorinterface)\>, [`OtaSoftwareUpdateRequestorInterface`](behavior_definitions_ota_software_update_requestor_export.md#otasoftwareupdaterequestorinterface)\>

OtaSoftwareUpdateRequestorBehavior is the base class for objects that support interaction with OtaSoftwareUpdateRequestor.Cluster.

#### Defined in

[packages/matter.js/src/behavior/definitions/ota-software-update-requestor/OtaSoftwareUpdateRequestorBehavior.ts:17](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/ota-software-update-requestor/OtaSoftwareUpdateRequestorBehavior.ts#L17)

[packages/matter.js/src/behavior/definitions/ota-software-update-requestor/OtaSoftwareUpdateRequestorBehavior.ts:22](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/ota-software-update-requestor/OtaSoftwareUpdateRequestorBehavior.ts#L22)

[packages/matter.js/src/behavior/definitions/ota-software-update-requestor/OtaSoftwareUpdateRequestorBehavior.ts:24](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/ota-software-update-requestor/OtaSoftwareUpdateRequestorBehavior.ts#L24)
