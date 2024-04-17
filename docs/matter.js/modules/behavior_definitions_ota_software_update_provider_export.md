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

This field shall contain the UpdateToken as specified in Section 11.19.3.6.1, “UpdateToken usage”. This field may be
used by the OTA Provider to track minimal lifecycle state to allow finer-grained scheduling of the application of
Software Images by OTA Requestors.

**`See`**

MatterSpecification.v11.Core § 11.19.6.5.18

#### Defined in

[packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts#L33)

___

### ApplyUpdateResponse

Ƭ **ApplyUpdateResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvApplyUpdateResponse`](cluster_export.OtaSoftwareUpdateProvider.md#tlvapplyupdateresponse)\>

**`See`**

MatterSpecification.v11.Core § 11.19.6.5.20

#### Defined in

[packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts#L38)

___

### NotifyUpdateAppliedRequest

Ƭ **NotifyUpdateAppliedRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvNotifyUpdateAppliedRequest`](cluster_export.OtaSoftwareUpdateProvider.md#tlvnotifyupdateappliedrequest)\>

This field shall contain the UpdateToken as specified in Section 11.19.3.6.1, “UpdateToken usage”.

The SoftwareVersion included in the request payload shall provide the same value as the SoftwareVersion attribute in
the invoking OTA Requestor’s Basic Information Cluster, and SHOULD be consistent with the value representing a new
version running on the Node invoking the command.

When Generated

The NotifyUpdateApplied command SHOULD be invoked in the following two circumstances:

  1. An OTA Requestor has just successfully applied a Software Image it had obtained from a previous QueryImage
     response.

  2. An OTA Requestor has just successfully applied a Software Image it had obtained through means different than
     those of this Cluster.

An OTA Provider may use the state of invocation of this command to help track the progress of update for OTA
Requestors it knows require a new OTA Software Image. However, due to the possibility that an OTA Requestor may
never come back (e.g. device removed from Fabric altogether, or a critical malfunction), an OTA Provider shall NOT
expect every OTA Requestor to invoke this command for correct operation of the OTA Provider.

This command shall be considered optional and shall not result in reduced availability of the OTA Provider
functionality if OTA Requestors never invoke this command.

Effect on Receipt

An OTA Provider receiving an invocation of this command may log it internally.

On receiving this command, an OTA Provider may use the information to update its bookkeeping of cached Software
Images, or use it for other similar administrative purposes.

**`See`**

MatterSpecification.v11.Core § 11.19.6.5.22

#### Defined in

[packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts#L74)

___

### OtaSoftwareUpdateProviderInterface

Ƭ **OtaSoftwareUpdateProviderInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: {} ; `methods`: [`Base`](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderInterface.Base.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts:76](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts#L76)

[packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts:133](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts#L133)

___

### QueryImageRequest

Ƭ **QueryImageRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvQueryImageRequest`](cluster_export.OtaSoftwareUpdateProvider.md#tlvqueryimagerequest)\>

Upon receipt, this command shall trigger an attempt to find an updated Software Image by the OTA Provider to match
the OTA Requestor’s constraints provided in the payload fields.

**`See`**

MatterSpecification.v11.Core § 11.19.6.5.1

#### Defined in

[packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts#L19)

___

### QueryImageResponse

Ƭ **QueryImageResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvQueryImageResponse`](cluster_export.OtaSoftwareUpdateProvider.md#tlvqueryimageresponse)\>

**`See`**

MatterSpecification.v11.Core § 11.19.6.5.10

#### Defined in

[packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts#L24)

## Variables

### OtaSoftwareUpdateProviderBehavior

• `Const` **OtaSoftwareUpdateProviderBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.OtaSoftwareUpdateProvider.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`OtaSoftwareUpdateProviderInterface`](behavior_definitions_ota_software_update_provider_export.md#otasoftwareupdateproviderinterface)\>, [`OtaSoftwareUpdateProviderInterface`](behavior_definitions_ota_software_update_provider_export.md#otasoftwareupdateproviderinterface)\>

OtaSoftwareUpdateProviderBehavior is the base class for objects that support interaction with OtaSoftwareUpdateProvider.Cluster.

#### Defined in

[packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderBehavior.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderBehavior.ts#L17)

[packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderBehavior.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderBehavior.ts#L22)

[packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderBehavior.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderBehavior.ts#L24)
