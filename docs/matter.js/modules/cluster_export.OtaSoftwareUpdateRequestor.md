[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / OtaSoftwareUpdateRequestor

# Namespace: OtaSoftwareUpdateRequestor

[cluster/export](cluster_export.md).OtaSoftwareUpdateRequestor

## Table of contents

### Enumerations

- [AnnouncementReason](../enums/cluster_export.OtaSoftwareUpdateRequestor.AnnouncementReason.md)
- [ChangeReason](../enums/cluster_export.OtaSoftwareUpdateRequestor.ChangeReason.md)
- [UpdateState](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)

### Interfaces

- [AnnounceOtaProviderRequest](../interfaces/cluster_export.OtaSoftwareUpdateRequestor.AnnounceOtaProviderRequest.md)
- [Cluster](../interfaces/cluster_export.OtaSoftwareUpdateRequestor.Cluster.md)
- [DownloadErrorEvent](../interfaces/cluster_export.OtaSoftwareUpdateRequestor.DownloadErrorEvent.md)
- [ProviderLocationStruct](../interfaces/cluster_export.OtaSoftwareUpdateRequestor.ProviderLocationStruct.md)
- [StateTransitionEvent](../interfaces/cluster_export.OtaSoftwareUpdateRequestor.StateTransitionEvent.md)
- [VersionAppliedEvent](../interfaces/cluster_export.OtaSoftwareUpdateRequestor.VersionAppliedEvent.md)

### Variables

- [Cluster](cluster_export.OtaSoftwareUpdateRequestor.md#cluster)
- [ClusterInstance](cluster_export.OtaSoftwareUpdateRequestor.md#clusterinstance)
- [Complete](cluster_export.OtaSoftwareUpdateRequestor.md#complete)
- [TlvAnnounceOtaProviderRequest](cluster_export.OtaSoftwareUpdateRequestor.md#tlvannounceotaproviderrequest)
- [TlvDownloadErrorEvent](cluster_export.OtaSoftwareUpdateRequestor.md#tlvdownloaderrorevent)
- [TlvProviderLocationStruct](cluster_export.OtaSoftwareUpdateRequestor.md#tlvproviderlocationstruct)
- [TlvStateTransitionEvent](cluster_export.OtaSoftwareUpdateRequestor.md#tlvstatetransitionevent)
- [TlvVersionAppliedEvent](cluster_export.OtaSoftwareUpdateRequestor.md#tlvversionappliedevent)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.OtaSoftwareUpdateRequestor.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:347](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L347)

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:349](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L349)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `defaultOtaProviders`: [`WritableFabricScopedAttribute`](../interfaces/cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `endpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `providerNodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>[], `any`\> ; `updatePossible`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\> ; `updateState`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md), `any`\> ; `updateStateProgress`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `announceOtaProvider`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `announcementReason`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`AnnouncementReason`](../enums/cluster_export.OtaSoftwareUpdateRequestor.AnnouncementReason.md)\> ; `endpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `metadataForNode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `providerNodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\> ; `vendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`VendorId`](datatype_export.md#vendorid)\>  }\>, `void`, `any`\>  } ; `events`: \{ `downloadError`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `bytesDownloaded`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `platformCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `progressPercent`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `softwareVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `stateTransition`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `newState`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `previousState`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `reason`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ChangeReason`](../enums/cluster_export.OtaSoftwareUpdateRequestor.ChangeReason.md)\> ; `targetSoftwareVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `versionApplied`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `productId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `softwareVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``42`` = 0x2a; `name`: ``"OtaSoftwareUpdateRequestor"`` = "OtaSoftwareUpdateRequestor"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.OtaSoftwareUpdateRequestor.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:233](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L233)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.OtaSoftwareUpdateRequestor.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:350](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L350)

___

### TlvAnnounceOtaProviderRequest

• `Const` **TlvAnnounceOtaProviderRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `announcementReason`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`AnnouncementReason`](../enums/cluster_export.OtaSoftwareUpdateRequestor.AnnouncementReason.md)\> ; `endpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `metadataForNode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `providerNodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\> ; `vendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`VendorId`](datatype_export.md#vendorid)\>  }\>

Input to the OtaSoftwareUpdateRequestor announceOtaProvider command

**`See`**

MatterSpecification.v11.Core § 11.19.7.6.1

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:129](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L129)

___

### TlvDownloadErrorEvent

• `Const` **TlvDownloadErrorEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `bytesDownloaded`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `platformCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `progressPercent`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `softwareVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Body of the OtaSoftwareUpdateRequestor downloadError event

**`See`**

MatterSpecification.v11.Core § 11.19.7.7.9

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:216](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L216)

___

### TlvProviderLocationStruct

• `Const` **TlvProviderLocationStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `endpoint`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `providerNodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>

This structure encodes a fabric-scoped location of an OTA provider on a given fabric.

**`See`**

MatterSpecification.v11.Core § 11.19.7.4.21

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:39](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L39)

___

### TlvStateTransitionEvent

• `Const` **TlvStateTransitionEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `newState`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `previousState`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `reason`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ChangeReason`](../enums/cluster_export.OtaSoftwareUpdateRequestor.ChangeReason.md)\> ; `targetSoftwareVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>

Body of the OtaSoftwareUpdateRequestor stateTransition event

**`See`**

MatterSpecification.v11.Core § 11.19.7.7.1

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:180](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L180)

___

### TlvVersionAppliedEvent

• `Const` **TlvVersionAppliedEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `productId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `softwareVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Body of the OtaSoftwareUpdateRequestor versionApplied event

**`See`**

MatterSpecification.v11.Core § 11.19.7.7.6

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:199](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L199)
