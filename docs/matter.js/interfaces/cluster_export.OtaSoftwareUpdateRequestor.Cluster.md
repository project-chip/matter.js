[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OtaSoftwareUpdateRequestor](../modules/cluster_export.OtaSoftwareUpdateRequestor.md) / Cluster

# Interface: Cluster

[cluster/export](../modules/cluster_export.md).[OtaSoftwareUpdateRequestor](../modules/cluster_export.OtaSoftwareUpdateRequestor.md).Cluster

OTA Software Update Requestor

Provides an interface for downloading and applying OTA software updates

**`See`**

MatterSpecification.v11.Core § 11.19.7

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/cluster_export.OtaSoftwareUpdateRequestor.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](cluster_export.OtaSoftwareUpdateRequestor.Cluster.md#attributes)
- [base](cluster_export.OtaSoftwareUpdateRequestor.Cluster.md#base)
- [commands](cluster_export.OtaSoftwareUpdateRequestor.Cluster.md#commands)
- [events](cluster_export.OtaSoftwareUpdateRequestor.Cluster.md#events)
- [extensions](cluster_export.OtaSoftwareUpdateRequestor.Cluster.md#extensions)
- [features](cluster_export.OtaSoftwareUpdateRequestor.Cluster.md#features)
- [id](cluster_export.OtaSoftwareUpdateRequestor.Cluster.md#id)
- [name](cluster_export.OtaSoftwareUpdateRequestor.Cluster.md#name)
- [revision](cluster_export.OtaSoftwareUpdateRequestor.Cluster.md#revision)
- [supportedFeatures](cluster_export.OtaSoftwareUpdateRequestor.Cluster.md#supportedfeatures)
- [unknown](cluster_export.OtaSoftwareUpdateRequestor.Cluster.md#unknown)

### Methods

- [alter](cluster_export.OtaSoftwareUpdateRequestor.Cluster.md#alter)
- [enable](cluster_export.OtaSoftwareUpdateRequestor.Cluster.md#enable)
- [set](cluster_export.OtaSoftwareUpdateRequestor.Cluster.md#set)
- [with](cluster_export.OtaSoftwareUpdateRequestor.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `defaultOtaProviders`: [`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `endpoint`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `providerNodeId`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[], `any`\> ; `updatePossible`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `updateState`: [`Attribute`](cluster_export.Attribute.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md), `any`\> ; `updateStateProgress`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<{}\>\>

#### Inherited from

Identity.attributes

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L86)

___

### base

• **base**: `undefined`

#### Inherited from

Identity.base

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:92](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L92)

___

### commands

• **commands**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `announceOtaProvider` | [`OptionalCommand`](cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `announcementReason`: [`FieldType`](tlv_export.FieldType.md)\<[`AnnouncementReason`](../enums/cluster_export.OtaSoftwareUpdateRequestor.AnnouncementReason.md)\> ; `endpoint`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `metadataForNode`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `providerNodeId`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\> ; `vendorId`: [`FieldType`](tlv_export.FieldType.md)\<[`VendorId`](../modules/datatype_export.md#vendorid)\>  }\>, `void`, `any`\> | This command may be invoked by Administrators to announce the presence of a particular OTA Provider. This command shall be scoped to the accessing fabric. If the accessing fabric index is 0, this command shall fail with an UNSUPPORTED_ACCESS status code. This field shall contain the Node ID of a Node implementing the OTA Provider cluster server, on the accessing fabric. **`See`** MatterSpecification.v11.Core § 11.19.7.6.1 |

#### Inherited from

Identity.commands

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L89)

___

### events

• **events**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `downloadError` | [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `bytesDownloaded`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `platformCode`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `progressPercent`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> | This event shall be generated whenever an error occurs during OTA Requestor download operation. This field shall be set to the value of the SoftwareVersion being downloaded, matching the SoftwareVersion field of the QueryImageResponse that caused the failing download to take place. **`See`** MatterSpecification.v11.Core § 11.19.7.7.9 |
| `stateTransition` | [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newState`: [`FieldType`](tlv_export.FieldType.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `previousState`: [`FieldType`](tlv_export.FieldType.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `reason`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeReason`](../enums/cluster_export.OtaSoftwareUpdateRequestor.ChangeReason.md)\> ; `targetSoftwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> | This event shall be generated when a change of the UpdateState attribute occurs due to an OTA Requestor moving through the states necessary to query for updates. **`See`** MatterSpecification.v11.Core § 11.19.7.7.1 |
| `versionApplied` | [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `productId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> | This event shall be generated whenever a new version starts executing after being applied due to a software update. This event SHOULD be generated even if a software update was done using means outside of this cluster. **`See`** MatterSpecification.v11.Core § 11.19.7.7.6 |

#### Inherited from

Identity.events

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:90](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L90)

___

### extensions

• **extensions**: `undefined`

#### Inherited from

Identity.extensions

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:93](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L93)

___

### features

• **features**: `Object`

#### Inherited from

Identity.features

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L84)

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``42``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L81)

___

### name

• **name**: ``"OtaSoftwareUpdateRequestor"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L82)

___

### revision

• **revision**: ``1``

#### Inherited from

Identity.revision

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:83](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L83)

___

### supportedFeatures

• **supportedFeatures**: `Object`

#### Inherited from

Identity.supportedFeatures

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:85](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L85)

___

### unknown

• **unknown**: ``false``

#### Inherited from

Identity.unknown

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:91](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L91)

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `defaultOtaProviders`: [`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `endpoint`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `providerNodeId`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[], `any`\> ; `updatePossible`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `updateState`: [`Attribute`](cluster_export.Attribute.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md), `any`\> ; `updateStateProgress`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `announceOtaProvider`: [`OptionalCommand`](cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `announcementReason`: [`FieldType`](tlv_export.FieldType.md)\<[`AnnouncementReason`](../enums/cluster_export.OtaSoftwareUpdateRequestor.AnnouncementReason.md)\> ; `endpoint`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `metadataForNode`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `providerNodeId`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\> ; `vendorId`: [`FieldType`](tlv_export.FieldType.md)\<[`VendorId`](../modules/datatype_export.md#vendorid)\>  }\>, `void`, `any`\>  } ; `events`: \{ `downloadError`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `bytesDownloaded`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `platformCode`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `progressPercent`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `stateTransition`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newState`: [`FieldType`](tlv_export.FieldType.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `previousState`: [`FieldType`](tlv_export.FieldType.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `reason`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeReason`](../enums/cluster_export.OtaSoftwareUpdateRequestor.ChangeReason.md)\> ; `targetSoftwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `versionApplied`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `productId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``42`` = 0x2a; `name`: ``"OtaSoftwareUpdateRequestor"`` = "OtaSoftwareUpdateRequestor"; `revision`: ``1`` = 1 }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/cluster_export.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/cluster_export.ElementModifier.md#alterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `defaultOtaProviders`: [`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `endpoint`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `providerNodeId`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[], `any`\> ; `updatePossible`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `updateState`: [`Attribute`](cluster_export.Attribute.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md), `any`\> ; `updateStateProgress`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `announceOtaProvider`: [`OptionalCommand`](cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `announcementReason`: [`FieldType`](tlv_export.FieldType.md)\<[`AnnouncementReason`](../enums/cluster_export.OtaSoftwareUpdateRequestor.AnnouncementReason.md)\> ; `endpoint`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `metadataForNode`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `providerNodeId`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\> ; `vendorId`: [`FieldType`](tlv_export.FieldType.md)\<[`VendorId`](../modules/datatype_export.md#vendorid)\>  }\>, `void`, `any`\>  } ; `events`: \{ `downloadError`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `bytesDownloaded`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `platformCode`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `progressPercent`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `stateTransition`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newState`: [`FieldType`](tlv_export.FieldType.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `previousState`: [`FieldType`](tlv_export.FieldType.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `reason`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeReason`](../enums/cluster_export.OtaSoftwareUpdateRequestor.ChangeReason.md)\> ; `targetSoftwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `versionApplied`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `productId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``42`` = 0x2a; `name`: ``"OtaSoftwareUpdateRequestor"`` = "OtaSoftwareUpdateRequestor"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `defaultOtaProviders`: [`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `endpoint`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `providerNodeId`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[], `any`\> ; `updatePossible`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `updateState`: [`Attribute`](cluster_export.Attribute.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md), `any`\> ; `updateStateProgress`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `announceOtaProvider`: [`OptionalCommand`](cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `announcementReason`: [`FieldType`](tlv_export.FieldType.md)\<[`AnnouncementReason`](../enums/cluster_export.OtaSoftwareUpdateRequestor.AnnouncementReason.md)\> ; `endpoint`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `metadataForNode`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `providerNodeId`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\> ; `vendorId`: [`FieldType`](tlv_export.FieldType.md)\<[`VendorId`](../modules/datatype_export.md#vendorid)\>  }\>, `void`, `any`\>  } ; `events`: \{ `downloadError`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `bytesDownloaded`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `platformCode`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `progressPercent`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `stateTransition`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newState`: [`FieldType`](tlv_export.FieldType.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `previousState`: [`FieldType`](tlv_export.FieldType.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `reason`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeReason`](../enums/cluster_export.OtaSoftwareUpdateRequestor.ChangeReason.md)\> ; `targetSoftwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `versionApplied`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `productId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``42`` = 0x2a; `name`: ``"OtaSoftwareUpdateRequestor"`` = "OtaSoftwareUpdateRequestor"; `revision`: ``1`` = 1 }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L74)

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `defaultOtaProviders`: [`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `endpoint`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `providerNodeId`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[], `any`\> ; `updatePossible`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `updateState`: [`Attribute`](cluster_export.Attribute.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md), `any`\> ; `updateStateProgress`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `announceOtaProvider`: [`OptionalCommand`](cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `announcementReason`: [`FieldType`](tlv_export.FieldType.md)\<[`AnnouncementReason`](../enums/cluster_export.OtaSoftwareUpdateRequestor.AnnouncementReason.md)\> ; `endpoint`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `metadataForNode`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `providerNodeId`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\> ; `vendorId`: [`FieldType`](tlv_export.FieldType.md)\<[`VendorId`](../modules/datatype_export.md#vendorid)\>  }\>, `void`, `any`\>  } ; `events`: \{ `downloadError`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `bytesDownloaded`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `platformCode`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `progressPercent`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `stateTransition`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newState`: [`FieldType`](tlv_export.FieldType.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `previousState`: [`FieldType`](tlv_export.FieldType.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `reason`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeReason`](../enums/cluster_export.OtaSoftwareUpdateRequestor.ChangeReason.md)\> ; `targetSoftwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `versionApplied`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `productId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``42`` = 0x2a; `name`: ``"OtaSoftwareUpdateRequestor"`` = "OtaSoftwareUpdateRequestor"; `revision`: ``1`` = 1 }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/cluster_export.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/cluster_export.ElementModifier.md#elementflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `defaultOtaProviders`: [`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `endpoint`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `providerNodeId`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[], `any`\> ; `updatePossible`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `updateState`: [`Attribute`](cluster_export.Attribute.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md), `any`\> ; `updateStateProgress`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `announceOtaProvider`: [`OptionalCommand`](cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `announcementReason`: [`FieldType`](tlv_export.FieldType.md)\<[`AnnouncementReason`](../enums/cluster_export.OtaSoftwareUpdateRequestor.AnnouncementReason.md)\> ; `endpoint`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `metadataForNode`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `providerNodeId`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\> ; `vendorId`: [`FieldType`](tlv_export.FieldType.md)\<[`VendorId`](../modules/datatype_export.md#vendorid)\>  }\>, `void`, `any`\>  } ; `events`: \{ `downloadError`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `bytesDownloaded`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `platformCode`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `progressPercent`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `stateTransition`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newState`: [`FieldType`](tlv_export.FieldType.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `previousState`: [`FieldType`](tlv_export.FieldType.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `reason`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeReason`](../enums/cluster_export.OtaSoftwareUpdateRequestor.ChangeReason.md)\> ; `targetSoftwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `versionApplied`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `productId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``42`` = 0x2a; `name`: ``"OtaSoftwareUpdateRequestor"`` = "OtaSoftwareUpdateRequestor"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `defaultOtaProviders`: [`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `endpoint`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `providerNodeId`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[], `any`\> ; `updatePossible`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `updateState`: [`Attribute`](cluster_export.Attribute.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md), `any`\> ; `updateStateProgress`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `announceOtaProvider`: [`OptionalCommand`](cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `announcementReason`: [`FieldType`](tlv_export.FieldType.md)\<[`AnnouncementReason`](../enums/cluster_export.OtaSoftwareUpdateRequestor.AnnouncementReason.md)\> ; `endpoint`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `metadataForNode`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `providerNodeId`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\> ; `vendorId`: [`FieldType`](tlv_export.FieldType.md)\<[`VendorId`](../modules/datatype_export.md#vendorid)\>  }\>, `void`, `any`\>  } ; `events`: \{ `downloadError`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `bytesDownloaded`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `platformCode`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `progressPercent`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `stateTransition`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newState`: [`FieldType`](tlv_export.FieldType.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `previousState`: [`FieldType`](tlv_export.FieldType.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `reason`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeReason`](../enums/cluster_export.OtaSoftwareUpdateRequestor.ChangeReason.md)\> ; `targetSoftwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `versionApplied`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `productId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``42`` = 0x2a; `name`: ``"OtaSoftwareUpdateRequestor"`` = "OtaSoftwareUpdateRequestor"; `revision`: ``1`` = 1 }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L88)

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `defaultOtaProviders`: [`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `endpoint`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `providerNodeId`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[], `any`\> ; `updatePossible`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `updateState`: [`Attribute`](cluster_export.Attribute.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md), `any`\> ; `updateStateProgress`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `announceOtaProvider`: [`OptionalCommand`](cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `announcementReason`: [`FieldType`](tlv_export.FieldType.md)\<[`AnnouncementReason`](../enums/cluster_export.OtaSoftwareUpdateRequestor.AnnouncementReason.md)\> ; `endpoint`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `metadataForNode`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `providerNodeId`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\> ; `vendorId`: [`FieldType`](tlv_export.FieldType.md)\<[`VendorId`](../modules/datatype_export.md#vendorid)\>  }\>, `void`, `any`\>  } ; `events`: \{ `downloadError`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `bytesDownloaded`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `platformCode`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `progressPercent`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `stateTransition`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newState`: [`FieldType`](tlv_export.FieldType.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `previousState`: [`FieldType`](tlv_export.FieldType.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `reason`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeReason`](../enums/cluster_export.OtaSoftwareUpdateRequestor.ChangeReason.md)\> ; `targetSoftwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `versionApplied`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `productId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``42`` = 0x2a; `name`: ``"OtaSoftwareUpdateRequestor"`` = "OtaSoftwareUpdateRequestor"; `revision`: ``1`` = 1 }\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../classes/cluster_export.ElementModifier-1.md#set).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `defaultOtaProviders`: [`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `endpoint`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `providerNodeId`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[], `any`\> ; `updatePossible`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `updateState`: [`Attribute`](cluster_export.Attribute.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md), `any`\> ; `updateStateProgress`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `announceOtaProvider`: [`OptionalCommand`](cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `announcementReason`: [`FieldType`](tlv_export.FieldType.md)\<[`AnnouncementReason`](../enums/cluster_export.OtaSoftwareUpdateRequestor.AnnouncementReason.md)\> ; `endpoint`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `metadataForNode`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `providerNodeId`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\> ; `vendorId`: [`FieldType`](tlv_export.FieldType.md)\<[`VendorId`](../modules/datatype_export.md#vendorid)\>  }\>, `void`, `any`\>  } ; `events`: \{ `downloadError`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `bytesDownloaded`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `platformCode`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `progressPercent`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `stateTransition`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newState`: [`FieldType`](tlv_export.FieldType.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `previousState`: [`FieldType`](tlv_export.FieldType.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `reason`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeReason`](../enums/cluster_export.OtaSoftwareUpdateRequestor.ChangeReason.md)\> ; `targetSoftwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `versionApplied`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `productId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``42`` = 0x2a; `name`: ``"OtaSoftwareUpdateRequestor"`` = "OtaSoftwareUpdateRequestor"; `revision`: ``1`` = 1 }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L81)

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `defaultOtaProviders`: [`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `endpoint`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `providerNodeId`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[], `any`\> ; `updatePossible`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `updateState`: [`Attribute`](cluster_export.Attribute.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md), `any`\> ; `updateStateProgress`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `announceOtaProvider`: [`OptionalCommand`](cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `announcementReason`: [`FieldType`](tlv_export.FieldType.md)\<[`AnnouncementReason`](../enums/cluster_export.OtaSoftwareUpdateRequestor.AnnouncementReason.md)\> ; `endpoint`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `metadataForNode`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `providerNodeId`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\> ; `vendorId`: [`FieldType`](tlv_export.FieldType.md)\<[`VendorId`](../modules/datatype_export.md#vendorid)\>  }\>, `void`, `any`\>  } ; `events`: \{ `downloadError`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `bytesDownloaded`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `platformCode`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `progressPercent`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `stateTransition`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newState`: [`FieldType`](tlv_export.FieldType.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `previousState`: [`FieldType`](tlv_export.FieldType.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `reason`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeReason`](../enums/cluster_export.OtaSoftwareUpdateRequestor.ChangeReason.md)\> ; `targetSoftwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `versionApplied`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `productId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``42`` = 0x2a; `name`: ``"OtaSoftwareUpdateRequestor"`` = "OtaSoftwareUpdateRequestor"; `revision`: ``1`` = 1 }\>

Select features using [ClusterComposer.compose](../classes/cluster_export.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `defaultOtaProviders`: [`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `endpoint`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `providerNodeId`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[], `any`\> ; `updatePossible`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `updateState`: [`Attribute`](cluster_export.Attribute.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md), `any`\> ; `updateStateProgress`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `announceOtaProvider`: [`OptionalCommand`](cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `announcementReason`: [`FieldType`](tlv_export.FieldType.md)\<[`AnnouncementReason`](../enums/cluster_export.OtaSoftwareUpdateRequestor.AnnouncementReason.md)\> ; `endpoint`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `metadataForNode`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `providerNodeId`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\> ; `vendorId`: [`FieldType`](tlv_export.FieldType.md)\<[`VendorId`](../modules/datatype_export.md#vendorid)\>  }\>, `void`, `any`\>  } ; `events`: \{ `downloadError`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `bytesDownloaded`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `platformCode`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `progressPercent`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `stateTransition`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newState`: [`FieldType`](tlv_export.FieldType.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `previousState`: [`FieldType`](tlv_export.FieldType.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `reason`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeReason`](../enums/cluster_export.OtaSoftwareUpdateRequestor.ChangeReason.md)\> ; `targetSoftwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `versionApplied`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `productId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``42`` = 0x2a; `name`: ``"OtaSoftwareUpdateRequestor"`` = "OtaSoftwareUpdateRequestor"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `defaultOtaProviders`: [`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `endpoint`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `providerNodeId`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[], `any`\> ; `updatePossible`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `updateState`: [`Attribute`](cluster_export.Attribute.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md), `any`\> ; `updateStateProgress`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `announceOtaProvider`: [`OptionalCommand`](cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `announcementReason`: [`FieldType`](tlv_export.FieldType.md)\<[`AnnouncementReason`](../enums/cluster_export.OtaSoftwareUpdateRequestor.AnnouncementReason.md)\> ; `endpoint`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `metadataForNode`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `providerNodeId`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\> ; `vendorId`: [`FieldType`](tlv_export.FieldType.md)\<[`VendorId`](../modules/datatype_export.md#vendorid)\>  }\>, `void`, `any`\>  } ; `events`: \{ `downloadError`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `bytesDownloaded`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `platformCode`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `progressPercent`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `stateTransition`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newState`: [`FieldType`](tlv_export.FieldType.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `previousState`: [`FieldType`](tlv_export.FieldType.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `reason`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeReason`](../enums/cluster_export.OtaSoftwareUpdateRequestor.ChangeReason.md)\> ; `targetSoftwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `versionApplied`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `productId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``42`` = 0x2a; `name`: ``"OtaSoftwareUpdateRequestor"`` = "OtaSoftwareUpdateRequestor"; `revision`: ``1`` = 1 }\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
