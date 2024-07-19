[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/ota-software-update-provider/export

# Module: behavior/definitions/ota-software-update-provider/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_ota_software_update_provider_export._internal_.md)

### Namespaces

- [OtaSoftwareUpdateProviderBehavior](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior.md)
- [OtaSoftwareUpdateProviderInterface](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderInterface.md)

### Classes

- [OtaSoftwareUpdateProviderServer](../classes/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md)

### Interfaces

- [OtaSoftwareUpdateProviderBehavior](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md)

### Type Aliases

- [ApplyUpdateRequest](behavior_definitions_ota_software_update_provider_export.md#applyupdaterequest)
- [ApplyUpdateResponse](behavior_definitions_ota_software_update_provider_export.md#applyupdateresponse)
- [NotifyUpdateAppliedRequest](behavior_definitions_ota_software_update_provider_export.md#notifyupdateappliedrequest)
- [OtaSoftwareUpdateProviderInterface](behavior_definitions_ota_software_update_provider_export.md#otasoftwareupdateproviderinterface)
- [QueryImageRequest](behavior_definitions_ota_software_update_provider_export.md#queryimagerequest)
- [QueryImageResponse](behavior_definitions_ota_software_update_provider_export.md#queryimageresponse)

### Variables

- [OtaSoftwareUpdateProviderBehavior](behavior_definitions_ota_software_update_provider_export.md#otasoftwareupdateproviderbehavior)

## Type Aliases

### ApplyUpdateRequest

Ƭ **ApplyUpdateRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvApplyUpdateRequest`](cluster_export.OtaSoftwareUpdateProvider.md#tlvapplyupdaterequest)\>

**`See`**

MatterSpecification.v11.Core § 11.19.6.5.19

#### Defined in

[packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts:29](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts#L29)

___

### ApplyUpdateResponse

Ƭ **ApplyUpdateResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvApplyUpdateResponse`](cluster_export.OtaSoftwareUpdateProvider.md#tlvapplyupdateresponse)\>

**`See`**

MatterSpecification.v11.Core § 11.19.6.5.22

#### Defined in

[packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts:34](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts#L34)

___

### NotifyUpdateAppliedRequest

Ƭ **NotifyUpdateAppliedRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvNotifyUpdateAppliedRequest`](cluster_export.OtaSoftwareUpdateProvider.md#tlvnotifyupdateappliedrequest)\>

**`See`**

MatterSpecification.v11.Core § 11.19.6.5.25

#### Defined in

[packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts:39](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts#L39)

___

### OtaSoftwareUpdateProviderInterface

Ƭ **OtaSoftwareUpdateProviderInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: {} ; `methods`: [`Base`](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderInterface.Base.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts:41](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts#L41)

[packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts:63](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts#L63)

___

### QueryImageRequest

Ƭ **QueryImageRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvQueryImageRequest`](cluster_export.OtaSoftwareUpdateProvider.md#tlvqueryimagerequest)\>

Upon receipt, this command shall trigger an attempt to find an updated Software Image by the OTA Provider to match
the OTA Requestor’s constraints provided in the payload fields.

**`See`**

MatterSpecification.v11.Core § 11.19.6.5.1

#### Defined in

[packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts:19](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts#L19)

___

### QueryImageResponse

Ƭ **QueryImageResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvQueryImageResponse`](cluster_export.OtaSoftwareUpdateProvider.md#tlvqueryimageresponse)\>

**`See`**

MatterSpecification.v11.Core § 11.19.6.5.10

#### Defined in

[packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts:24](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts#L24)

## Variables

### OtaSoftwareUpdateProviderBehavior

• `Const` **OtaSoftwareUpdateProviderBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.OtaSoftwareUpdateProvider.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`OtaSoftwareUpdateProviderInterface`](behavior_definitions_ota_software_update_provider_export.md#otasoftwareupdateproviderinterface)\>, [`OtaSoftwareUpdateProviderInterface`](behavior_definitions_ota_software_update_provider_export.md#otasoftwareupdateproviderinterface)\>

OtaSoftwareUpdateProviderBehavior is the base class for objects that support interaction with OtaSoftwareUpdateProvider.Cluster.

#### Defined in

[packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderBehavior.ts:17](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderBehavior.ts#L17)

[packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderBehavior.ts:22](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderBehavior.ts#L22)

[packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderBehavior.ts:24](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderBehavior.ts#L24)
