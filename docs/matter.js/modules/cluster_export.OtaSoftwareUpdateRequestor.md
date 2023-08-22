[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / OtaSoftwareUpdateRequestor

# Namespace: OtaSoftwareUpdateRequestor

[cluster/export](cluster_export.md).OtaSoftwareUpdateRequestor

## Table of contents

### Enumerations

- [AnnouncementReason](../enums/cluster_export.OtaSoftwareUpdateRequestor.AnnouncementReason.md)
- [ChangeReason](../enums/cluster_export.OtaSoftwareUpdateRequestor.ChangeReason.md)
- [UpdateState](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)

### Variables

- [Cluster](cluster_export.OtaSoftwareUpdateRequestor.md#cluster)
- [TlvAnnounceOtaProviderRequest](cluster_export.OtaSoftwareUpdateRequestor.md#tlvannounceotaproviderrequest)
- [TlvDownloadErrorEvent](cluster_export.OtaSoftwareUpdateRequestor.md#tlvdownloaderrorevent)
- [TlvProviderLocationStruct](cluster_export.OtaSoftwareUpdateRequestor.md#tlvproviderlocationstruct)
- [TlvStateTransitionEvent](cluster_export.OtaSoftwareUpdateRequestor.md#tlvstatetransitionevent)
- [TlvVersionAppliedEvent](cluster_export.OtaSoftwareUpdateRequestor.md#tlvversionappliedevent)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](cluster_export.md#cluster)<[`BitSchema`](schema_export.md#bitschema), [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<[`BitSchema`](schema_export.md#bitschema)\>, [`Merge`](util_export.md#merge)<{ `defaultOtaProviders`: [`WritableFabricScopedAttribute`](cluster_export.md#writablefabricscopedattribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `endpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `providerNodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>[], `any`\> ; `updatePossible`: [`Attribute`](cluster_export.md#attribute)<`boolean`, `any`\> ; `updateState`: [`Attribute`](cluster_export.md#attribute)<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md), `any`\> ; `updateStateProgress`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<[`BitSchema`](schema_export.md#bitschema)\>\>, { `announceOtaProvider`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `announcementReason`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`AnnouncementReason`](../enums/cluster_export.OtaSoftwareUpdateRequestor.AnnouncementReason.md)\> ; `endpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `metadataForNode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `providerNodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`NodeId`](datatype_export.md#nodeid)\> ; `vendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`VendorId`](datatype_export.md#vendorid)\>  }\>, `void`, `any`\>  }, { `downloadError`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `bytesDownloaded`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `platformCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `progressPercent`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `softwareVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\> ; `stateTransition`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `newState`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `previousState`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `reason`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ChangeReason`](../enums/cluster_export.OtaSoftwareUpdateRequestor.ChangeReason.md)\> ; `targetSoftwareVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `any`\> ; `versionApplied`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `productId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `softwareVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\>  }\>

OTA Software Update Requestor

Provides an interface for downloading and applying OTA software updates

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.19.7

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:202](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L202)

___

### TlvAnnounceOtaProviderRequest

• `Const` **TlvAnnounceOtaProviderRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `announcementReason`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`AnnouncementReason`](../enums/cluster_export.OtaSoftwareUpdateRequestor.AnnouncementReason.md)\> ; `endpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `metadataForNode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `providerNodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`NodeId`](datatype_export.md#nodeid)\> ; `vendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`VendorId`](datatype_export.md#vendorid)\>  }\>

Input to the OtaSoftwareUpdateRequestor announceOtaProvider command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.19.7.6.1

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:120](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L120)

___

### TlvDownloadErrorEvent

• `Const` **TlvDownloadErrorEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `bytesDownloaded`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `platformCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `progressPercent`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `softwareVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Body of the OtaSoftwareUpdateRequestor downloadError event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.19.7.7.9

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:188](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L188)

___

### TlvProviderLocationStruct

• `Const` **TlvProviderLocationStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `endpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `providerNodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>

This structure encodes a fabric-scoped location of an OTA provider on a given fabric.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.19.7.4.20

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:37](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L37)

___

### TlvStateTransitionEvent

• `Const` **TlvStateTransitionEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `newState`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `previousState`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `reason`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ChangeReason`](../enums/cluster_export.OtaSoftwareUpdateRequestor.ChangeReason.md)\> ; `targetSoftwareVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>

Body of the OtaSoftwareUpdateRequestor stateTransition event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.19.7.7.1

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:166](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L166)

___

### TlvVersionAppliedEvent

• `Const` **TlvVersionAppliedEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `productId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `softwareVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Body of the OtaSoftwareUpdateRequestor versionApplied event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.19.7.7.6

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:178](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L178)
