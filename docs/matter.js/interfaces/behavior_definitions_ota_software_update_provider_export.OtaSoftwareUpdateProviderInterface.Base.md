[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/ota-software-update-provider/export](../modules/behavior_definitions_ota_software_update_provider_export.md) / [OtaSoftwareUpdateProviderInterface](../modules/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderInterface.md) / Base

# Interface: Base

[behavior/definitions/ota-software-update-provider/export](../modules/behavior_definitions_ota_software_update_provider_export.md).[OtaSoftwareUpdateProviderInterface](../modules/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderInterface.md).Base

## Table of contents

### Methods

- [applyUpdateRequest](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderInterface.Base.md#applyupdaterequest)
- [notifyUpdateApplied](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderInterface.Base.md#notifyupdateapplied)
- [queryImage](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderInterface.Base.md#queryimage)

## Methods

### applyUpdateRequest

▸ **applyUpdateRequest**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `action`: [`FieldType`](tlv_export.FieldType.md)\<[`ApplyUpdateAction`](../enums/cluster_export.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)\> ; `delayedActionTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>\>

This field shall contain the UpdateToken as specified in Section 11.19.3.6.1, “UpdateToken usage”. This
field may be used by the OTA Provider to track minimal lifecycle state to allow finer-grained scheduling of
the application of Software Images by OTA Requestors.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `action`: [`FieldType`](tlv_export.FieldType.md)\<[`ApplyUpdateAction`](../enums/cluster_export.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)\> ; `delayedActionTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>\>

**`See`**

MatterSpecification.v11.Core § 11.19.6.5.18

#### Defined in

[packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts:93](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts#L93)

___

### notifyUpdateApplied

▸ **notifyUpdateApplied**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

This field shall contain the UpdateToken as specified in Section 11.19.3.6.1, “UpdateToken usage”.

The SoftwareVersion included in the request payload shall provide the same value as the SoftwareVersion
attribute in the invoking OTA Requestor’s Basic Information Cluster, and SHOULD be consistent with the value
representing a new version running on the Node invoking the command.

When Generated

The NotifyUpdateApplied command SHOULD be invoked in the following two circumstances:

  1. An OTA Requestor has just successfully applied a Software Image it had obtained from a previous
     QueryImage response.

  2. An OTA Requestor has just successfully applied a Software Image it had obtained through means different
     than those of this Cluster.

An OTA Provider may use the state of invocation of this command to help track the progress of update for OTA
Requestors it knows require a new OTA Software Image. However, due to the possibility that an OTA Requestor
may never come back (e.g. device removed from Fabric altogether, or a critical malfunction), an OTA Provider
shall NOT expect every OTA Requestor to invoke this command for correct operation of the OTA Provider.

This command shall be considered optional and shall not result in reduced availability of the OTA Provider
functionality if OTA Requestors never invoke this command.

Effect on Receipt

An OTA Provider receiving an invocation of this command may log it internally.

On receiving this command, an OTA Provider may use the information to update its bookkeeping of cached
Software Images, or use it for other similar administrative purposes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 11.19.6.5.22

#### Defined in

[packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts:129](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts#L129)

___

### queryImage

▸ **queryImage**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `delayedActionTime`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `imageUri`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForRequestor`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `softwareVersion`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `softwareVersionString`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.OtaSoftwareUpdateProvider.Status.md)\> ; `updateToken`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `userConsentNeeded`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\>  }\>\>

Upon receipt, this command shall trigger an attempt to find an updated Software Image by the OTA Provider to
match the OTA Requestor’s constraints provided in the payload fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hardwareVersion`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `location`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForProvider`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `productId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `protocolsSupported`: [`FieldType`](tlv_export.FieldType.md)\<[`DownloadProtocol`](../enums/cluster_export.OtaSoftwareUpdateProvider.DownloadProtocol.md)[]\> ; `requestorCanConsent`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `vendorId`: [`FieldType`](tlv_export.FieldType.md)\<[`VendorId`](../modules/datatype_export.md#vendorid)\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `delayedActionTime`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `imageUri`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForRequestor`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `softwareVersion`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `softwareVersionString`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.OtaSoftwareUpdateProvider.Status.md)\> ; `updateToken`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `userConsentNeeded`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\>  }\>\>

**`See`**

MatterSpecification.v11.Core § 11.19.6.5.1

#### Defined in

[packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts#L84)
