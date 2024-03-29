[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / OtaSoftwareUpdateProvider

# Namespace: OtaSoftwareUpdateProvider

[cluster/export](cluster_export.md).OtaSoftwareUpdateProvider

## Table of contents

### Enumerations

- [ApplyUpdateAction](../enums/cluster_export.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)
- [DownloadProtocol](../enums/cluster_export.OtaSoftwareUpdateProvider.DownloadProtocol.md)
- [Status](../enums/cluster_export.OtaSoftwareUpdateProvider.Status.md)

### Interfaces

- [ApplyUpdateRequest](../interfaces/cluster_export.OtaSoftwareUpdateProvider.ApplyUpdateRequest.md)
- [ApplyUpdateResponse](../interfaces/cluster_export.OtaSoftwareUpdateProvider.ApplyUpdateResponse.md)
- [Cluster](../interfaces/cluster_export.OtaSoftwareUpdateProvider.Cluster.md)
- [NotifyUpdateAppliedRequest](../interfaces/cluster_export.OtaSoftwareUpdateProvider.NotifyUpdateAppliedRequest.md)
- [QueryImageRequest](../interfaces/cluster_export.OtaSoftwareUpdateProvider.QueryImageRequest.md)
- [QueryImageResponse](../interfaces/cluster_export.OtaSoftwareUpdateProvider.QueryImageResponse.md)

### Variables

- [Cluster](cluster_export.OtaSoftwareUpdateProvider.md#cluster)
- [ClusterInstance](cluster_export.OtaSoftwareUpdateProvider.md#clusterinstance)
- [Complete](cluster_export.OtaSoftwareUpdateProvider.md#complete)
- [TlvApplyUpdateRequest](cluster_export.OtaSoftwareUpdateProvider.md#tlvapplyupdaterequest)
- [TlvApplyUpdateResponse](cluster_export.OtaSoftwareUpdateProvider.md#tlvapplyupdateresponse)
- [TlvNotifyUpdateAppliedRequest](cluster_export.OtaSoftwareUpdateProvider.md#tlvnotifyupdateappliedrequest)
- [TlvQueryImageRequest](cluster_export.OtaSoftwareUpdateProvider.md#tlvqueryimagerequest)
- [TlvQueryImageResponse](cluster_export.OtaSoftwareUpdateProvider.md#tlvqueryimageresponse)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.OtaSoftwareUpdateProvider.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:263](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L263)

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:265](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L265)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `commands`: \{ `applyUpdateRequest`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `newVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `action`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ApplyUpdateAction`](../enums/cluster_export.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)\> ; `delayedActionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `notifyUpdateApplied`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `queryImage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `hardwareVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `location`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForProvider`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `productId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `protocolsSupported`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DownloadProtocol`](../enums/cluster_export.OtaSoftwareUpdateProvider.DownloadProtocol.md)[]\> ; `requestorCanConsent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `softwareVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `vendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`VendorId`](datatype_export.md#vendorid)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `delayedActionTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `imageUri`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForRequestor`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `softwareVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `softwareVersionString`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.OtaSoftwareUpdateProvider.Status.md)\> ; `updateToken`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `userConsentNeeded`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\>  }\>, `any`\>  } ; `id`: ``41`` = 0x29; `name`: ``"OtaSoftwareUpdateProvider"`` = "OtaSoftwareUpdateProvider"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.OtaSoftwareUpdateProvider.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:194](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L194)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.OtaSoftwareUpdateProvider.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:266](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L266)

___

### TlvApplyUpdateRequest

• `Const` **TlvApplyUpdateRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `newVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>

Input to the OtaSoftwareUpdateProvider applyUpdateRequest command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.19.6.5.18

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:126](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L126)

___

### TlvApplyUpdateResponse

• `Const` **TlvApplyUpdateResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `action`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ApplyUpdateAction`](../enums/cluster_export.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)\> ; `delayedActionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.19.6.5.20

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:164](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L164)

___

### TlvNotifyUpdateAppliedRequest

• `Const` **TlvNotifyUpdateAppliedRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `softwareVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>

Input to the OtaSoftwareUpdateProvider notifyUpdateApplied command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.19.6.5.22

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:179](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L179)

___

### TlvQueryImageRequest

• `Const` **TlvQueryImageRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `hardwareVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `location`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForProvider`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `productId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `protocolsSupported`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DownloadProtocol`](../enums/cluster_export.OtaSoftwareUpdateProvider.DownloadProtocol.md)[]\> ; `requestorCanConsent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `softwareVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `vendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`VendorId`](datatype_export.md#vendorid)\>  }\>

Input to the OtaSoftwareUpdateProvider queryImage command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.19.6.5.1

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:57](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L57)

___

### TlvQueryImageResponse

• `Const` **TlvQueryImageResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `delayedActionTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `imageUri`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForRequestor`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `softwareVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `softwareVersionString`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.OtaSoftwareUpdateProvider.Status.md)\> ; `updateToken`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `userConsentNeeded`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\>  }\>

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.19.6.5.10

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:105](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L105)
