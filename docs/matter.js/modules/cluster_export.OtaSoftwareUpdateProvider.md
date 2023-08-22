[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / OtaSoftwareUpdateProvider

# Namespace: OtaSoftwareUpdateProvider

[cluster/export](cluster_export.md).OtaSoftwareUpdateProvider

## Table of contents

### Enumerations

- [ApplyUpdateAction](../enums/cluster_export.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)
- [DownloadProtocol](../enums/cluster_export.OtaSoftwareUpdateProvider.DownloadProtocol.md)
- [Status](../enums/cluster_export.OtaSoftwareUpdateProvider.Status.md)

### Variables

- [Cluster](cluster_export.OtaSoftwareUpdateProvider.md#cluster)
- [TlvApplyUpdateRequestRequest](cluster_export.OtaSoftwareUpdateProvider.md#tlvapplyupdaterequestrequest)
- [TlvApplyUpdateResponse](cluster_export.OtaSoftwareUpdateProvider.md#tlvapplyupdateresponse)
- [TlvNotifyUpdateAppliedRequest](cluster_export.OtaSoftwareUpdateProvider.md#tlvnotifyupdateappliedrequest)
- [TlvQueryImageRequest](cluster_export.OtaSoftwareUpdateProvider.md#tlvqueryimagerequest)
- [TlvQueryImageResponse](cluster_export.OtaSoftwareUpdateProvider.md#tlvqueryimageresponse)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](cluster_export.md#cluster)<[`BitSchema`](schema_export.md#bitschema), [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<[`BitSchema`](schema_export.md#bitschema)\>, [`Merge`](util_export.md#merge)<{}, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<[`BitSchema`](schema_export.md#bitschema)\>\>, { `applyUpdateRequest`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `newVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `updateToken`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `action`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ApplyUpdateAction`](../enums/cluster_export.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)\> ; `delayedActionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\> ; `notifyUpdateApplied`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `softwareVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `updateToken`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>, `void`, `any`\> ; `queryImage`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `hardwareVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `location`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `metadataForProvider`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `productId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `protocolsSupported`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DownloadProtocol`](../enums/cluster_export.OtaSoftwareUpdateProvider.DownloadProtocol.md)[]\> ; `requestorCanConsent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `softwareVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `vendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`VendorId`](datatype_export.md#vendorid)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `delayedActionTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `imageUri`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `metadataForRequestor`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `softwareVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `softwareVersionString`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.OtaSoftwareUpdateProvider.Status.md)\> ; `updateToken`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `userConsentNeeded`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\>  }\>, `any`\>  }, {}\>

OTA Software Update Provider

Provides an interface for providing OTA software updates

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.19.6

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:163](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L163)

___

### TlvApplyUpdateRequestRequest

• `Const` **TlvApplyUpdateRequestRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `newVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `updateToken`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>

Input to the OtaSoftwareUpdateProvider applyUpdateRequest command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.19.6.5.18

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:110](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L110)

___

### TlvApplyUpdateResponse

• `Const` **TlvApplyUpdateResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `action`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ApplyUpdateAction`](../enums/cluster_export.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)\> ; `delayedActionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.19.6.5.20

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:141](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L141)

___

### TlvNotifyUpdateAppliedRequest

• `Const` **TlvNotifyUpdateAppliedRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `softwareVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `updateToken`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>

Input to the OtaSoftwareUpdateProvider notifyUpdateApplied command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.19.6.5.22

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:151](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L151)

___

### TlvQueryImageRequest

• `Const` **TlvQueryImageRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `hardwareVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `location`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `metadataForProvider`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `productId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `protocolsSupported`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DownloadProtocol`](../enums/cluster_export.OtaSoftwareUpdateProvider.DownloadProtocol.md)[]\> ; `requestorCanConsent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `softwareVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `vendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`VendorId`](datatype_export.md#vendorid)\>  }\>

Input to the OtaSoftwareUpdateProvider queryImage command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.19.6.5.1

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:53](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L53)

___

### TlvQueryImageResponse

• `Const` **TlvQueryImageResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `delayedActionTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `imageUri`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `metadataForRequestor`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `softwareVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `softwareVersionString`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.OtaSoftwareUpdateProvider.Status.md)\> ; `updateToken`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `userConsentNeeded`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\>  }\>

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.19.6.5.10

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:94](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L94)
