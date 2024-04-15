[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [OtaSoftwareUpdateRequestor](../modules/exports_cluster.OtaSoftwareUpdateRequestor.md) / Cluster

# Interface: Cluster

[exports/cluster](../modules/exports_cluster.md).[OtaSoftwareUpdateRequestor](../modules/exports_cluster.OtaSoftwareUpdateRequestor.md).Cluster

OTA Software Update Requestor

Provides an interface for downloading and applying OTA software updates

**`See`**

MatterSpecification.v11.Core § 11.19.7

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/exports_cluster.OtaSoftwareUpdateRequestor.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](exports_cluster.OtaSoftwareUpdateRequestor.Cluster.md#attributes)
- [base](exports_cluster.OtaSoftwareUpdateRequestor.Cluster.md#base)
- [commands](exports_cluster.OtaSoftwareUpdateRequestor.Cluster.md#commands)
- [events](exports_cluster.OtaSoftwareUpdateRequestor.Cluster.md#events)
- [extensions](exports_cluster.OtaSoftwareUpdateRequestor.Cluster.md#extensions)
- [features](exports_cluster.OtaSoftwareUpdateRequestor.Cluster.md#features)
- [id](exports_cluster.OtaSoftwareUpdateRequestor.Cluster.md#id)
- [name](exports_cluster.OtaSoftwareUpdateRequestor.Cluster.md#name)
- [revision](exports_cluster.OtaSoftwareUpdateRequestor.Cluster.md#revision)
- [supportedFeatures](exports_cluster.OtaSoftwareUpdateRequestor.Cluster.md#supportedfeatures)
- [unknown](exports_cluster.OtaSoftwareUpdateRequestor.Cluster.md#unknown)

### Methods

- [alter](exports_cluster.OtaSoftwareUpdateRequestor.Cluster.md#alter)
- [enable](exports_cluster.OtaSoftwareUpdateRequestor.Cluster.md#enable)
- [set](exports_cluster.OtaSoftwareUpdateRequestor.Cluster.md#set)
- [with](exports_cluster.OtaSoftwareUpdateRequestor.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `defaultOtaProviders`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `endpoint`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `providerNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[], `any`\> ; `updatePossible`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `updateState`: [`Attribute`](exports_cluster.Attribute.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md), `any`\> ; `updateStateProgress`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<{}\>\>

#### Inherited from

Identity.attributes

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:44

___

### base

• **base**: `undefined`

#### Inherited from

Identity.base

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:48

___

### commands

• **commands**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `announceOtaProvider` | [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `announcementReason`: [`FieldType`](exports_tlv.FieldType.md)\<[`AnnouncementReason`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.AnnouncementReason.md)\> ; `endpoint`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `metadataForNode`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `providerNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `vendorId`: [`FieldType`](exports_tlv.FieldType.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid)\>  }\>, `void`, `any`\> | This command may be invoked by Administrators to announce the presence of a particular OTA Provider. This command shall be scoped to the accessing fabric. If the accessing fabric index is 0, this command shall fail with an UNSUPPORTED_ACCESS status code. This field shall contain the Node ID of a Node implementing the OTA Provider cluster server, on the accessing fabric. **`See`** MatterSpecification.v11.Core § 11.19.7.6.1 |

#### Inherited from

Identity.commands

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:45

___

### events

• **events**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `downloadError` | [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `bytesDownloaded`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `platformCode`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `progressPercent`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> | This event shall be generated whenever an error occurs during OTA Requestor download operation. This field shall be set to the value of the SoftwareVersion being downloaded, matching the SoftwareVersion field of the QueryImageResponse that caused the failing download to take place. **`See`** MatterSpecification.v11.Core § 11.19.7.7.9 |
| `stateTransition` | [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newState`: [`FieldType`](exports_tlv.FieldType.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `previousState`: [`FieldType`](exports_tlv.FieldType.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `reason`: [`FieldType`](exports_tlv.FieldType.md)\<[`ChangeReason`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.ChangeReason.md)\> ; `targetSoftwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> | This event shall be generated when a change of the UpdateState attribute occurs due to an OTA Requestor moving through the states necessary to query for updates. **`See`** MatterSpecification.v11.Core § 11.19.7.7.1 |
| `versionApplied` | [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `productId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> | This event shall be generated whenever a new version starts executing after being applied due to a software update. This event SHOULD be generated even if a software update was done using means outside of this cluster. **`See`** MatterSpecification.v11.Core § 11.19.7.7.6 |

#### Inherited from

Identity.events

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:46

___

### extensions

• **extensions**: `undefined`

#### Inherited from

Identity.extensions

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:49

___

### features

• **features**: `Object`

#### Inherited from

Identity.features

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``42``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: ``"OtaSoftwareUpdateRequestor"``

#### Inherited from

Identity.name

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

___

### revision

• **revision**: ``1``

#### Inherited from

Identity.revision

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:41

___

### supportedFeatures

• **supportedFeatures**: `Object`

#### Inherited from

Identity.supportedFeatures

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:43

___

### unknown

• **unknown**: ``false``

#### Inherited from

Identity.unknown

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:47

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `defaultOtaProviders`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `endpoint`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `providerNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[], `any`\> ; `updatePossible`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `updateState`: [`Attribute`](exports_cluster.Attribute.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md), `any`\> ; `updateStateProgress`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `announceOtaProvider`: [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `announcementReason`: [`FieldType`](exports_tlv.FieldType.md)\<[`AnnouncementReason`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.AnnouncementReason.md)\> ; `endpoint`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `metadataForNode`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `providerNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `vendorId`: [`FieldType`](exports_tlv.FieldType.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid)\>  }\>, `void`, `any`\>  } ; `events`: \{ `downloadError`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `bytesDownloaded`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `platformCode`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `progressPercent`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `stateTransition`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newState`: [`FieldType`](exports_tlv.FieldType.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `previousState`: [`FieldType`](exports_tlv.FieldType.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `reason`: [`FieldType`](exports_tlv.FieldType.md)\<[`ChangeReason`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.ChangeReason.md)\> ; `targetSoftwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `versionApplied`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `productId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``42`` ; `name`: ``"OtaSoftwareUpdateRequestor"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `defaultOtaProviders`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `endpoint`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `providerNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[], `any`\> ; `updatePossible`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `updateState`: [`Attribute`](exports_cluster.Attribute.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md), `any`\> ; `updateStateProgress`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `announceOtaProvider`: [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `announcementReason`: [`FieldType`](exports_tlv.FieldType.md)\<[`AnnouncementReason`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.AnnouncementReason.md)\> ; `endpoint`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `metadataForNode`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `providerNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `vendorId`: [`FieldType`](exports_tlv.FieldType.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid)\>  }\>, `void`, `any`\>  } ; `events`: \{ `downloadError`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `bytesDownloaded`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `platformCode`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `progressPercent`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `stateTransition`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newState`: [`FieldType`](exports_tlv.FieldType.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `previousState`: [`FieldType`](exports_tlv.FieldType.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `reason`: [`FieldType`](exports_tlv.FieldType.md)\<[`ChangeReason`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.ChangeReason.md)\> ; `targetSoftwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `versionApplied`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `productId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``42`` ; `name`: ``"OtaSoftwareUpdateRequestor"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `defaultOtaProviders`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `endpoint`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `providerNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[], `any`\> ; `updatePossible`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `updateState`: [`Attribute`](exports_cluster.Attribute.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md), `any`\> ; `updateStateProgress`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `announceOtaProvider`: [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `announcementReason`: [`FieldType`](exports_tlv.FieldType.md)\<[`AnnouncementReason`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.AnnouncementReason.md)\> ; `endpoint`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `metadataForNode`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `providerNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `vendorId`: [`FieldType`](exports_tlv.FieldType.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid)\>  }\>, `void`, `any`\>  } ; `events`: \{ `downloadError`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `bytesDownloaded`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `platformCode`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `progressPercent`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `stateTransition`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newState`: [`FieldType`](exports_tlv.FieldType.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `previousState`: [`FieldType`](exports_tlv.FieldType.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `reason`: [`FieldType`](exports_tlv.FieldType.md)\<[`ChangeReason`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.ChangeReason.md)\> ; `targetSoftwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `versionApplied`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `productId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``42`` ; `name`: ``"OtaSoftwareUpdateRequestor"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `defaultOtaProviders`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `endpoint`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `providerNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[], `any`\> ; `updatePossible`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `updateState`: [`Attribute`](exports_cluster.Attribute.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md), `any`\> ; `updateStateProgress`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `announceOtaProvider`: [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `announcementReason`: [`FieldType`](exports_tlv.FieldType.md)\<[`AnnouncementReason`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.AnnouncementReason.md)\> ; `endpoint`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `metadataForNode`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `providerNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `vendorId`: [`FieldType`](exports_tlv.FieldType.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid)\>  }\>, `void`, `any`\>  } ; `events`: \{ `downloadError`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `bytesDownloaded`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `platformCode`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `progressPercent`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `stateTransition`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newState`: [`FieldType`](exports_tlv.FieldType.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `previousState`: [`FieldType`](exports_tlv.FieldType.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `reason`: [`FieldType`](exports_tlv.FieldType.md)\<[`ChangeReason`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.ChangeReason.md)\> ; `targetSoftwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `versionApplied`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `productId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``42`` ; `name`: ``"OtaSoftwareUpdateRequestor"`` ; `revision`: ``1``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `defaultOtaProviders`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `endpoint`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `providerNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[], `any`\> ; `updatePossible`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `updateState`: [`Attribute`](exports_cluster.Attribute.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md), `any`\> ; `updateStateProgress`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `announceOtaProvider`: [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `announcementReason`: [`FieldType`](exports_tlv.FieldType.md)\<[`AnnouncementReason`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.AnnouncementReason.md)\> ; `endpoint`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `metadataForNode`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `providerNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `vendorId`: [`FieldType`](exports_tlv.FieldType.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid)\>  }\>, `void`, `any`\>  } ; `events`: \{ `downloadError`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `bytesDownloaded`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `platformCode`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `progressPercent`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `stateTransition`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newState`: [`FieldType`](exports_tlv.FieldType.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `previousState`: [`FieldType`](exports_tlv.FieldType.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `reason`: [`FieldType`](exports_tlv.FieldType.md)\<[`ChangeReason`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.ChangeReason.md)\> ; `targetSoftwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `versionApplied`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `productId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``42`` ; `name`: ``"OtaSoftwareUpdateRequestor"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `defaultOtaProviders`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `endpoint`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `providerNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[], `any`\> ; `updatePossible`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `updateState`: [`Attribute`](exports_cluster.Attribute.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md), `any`\> ; `updateStateProgress`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `announceOtaProvider`: [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `announcementReason`: [`FieldType`](exports_tlv.FieldType.md)\<[`AnnouncementReason`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.AnnouncementReason.md)\> ; `endpoint`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `metadataForNode`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `providerNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `vendorId`: [`FieldType`](exports_tlv.FieldType.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid)\>  }\>, `void`, `any`\>  } ; `events`: \{ `downloadError`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `bytesDownloaded`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `platformCode`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `progressPercent`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `stateTransition`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newState`: [`FieldType`](exports_tlv.FieldType.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `previousState`: [`FieldType`](exports_tlv.FieldType.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `reason`: [`FieldType`](exports_tlv.FieldType.md)\<[`ChangeReason`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.ChangeReason.md)\> ; `targetSoftwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `versionApplied`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `productId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``42`` ; `name`: ``"OtaSoftwareUpdateRequestor"`` ; `revision`: ``1``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `defaultOtaProviders`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `endpoint`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `providerNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[], `any`\> ; `updatePossible`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `updateState`: [`Attribute`](exports_cluster.Attribute.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md), `any`\> ; `updateStateProgress`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `announceOtaProvider`: [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `announcementReason`: [`FieldType`](exports_tlv.FieldType.md)\<[`AnnouncementReason`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.AnnouncementReason.md)\> ; `endpoint`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `metadataForNode`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `providerNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `vendorId`: [`FieldType`](exports_tlv.FieldType.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid)\>  }\>, `void`, `any`\>  } ; `events`: \{ `downloadError`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `bytesDownloaded`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `platformCode`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `progressPercent`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `stateTransition`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newState`: [`FieldType`](exports_tlv.FieldType.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `previousState`: [`FieldType`](exports_tlv.FieldType.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `reason`: [`FieldType`](exports_tlv.FieldType.md)\<[`ChangeReason`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.ChangeReason.md)\> ; `targetSoftwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `versionApplied`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `productId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``42`` ; `name`: ``"OtaSoftwareUpdateRequestor"`` ; `revision`: ``1``  }\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../classes/exports_cluster.ElementModifier-1.md#set).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `defaultOtaProviders`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `endpoint`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `providerNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[], `any`\> ; `updatePossible`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `updateState`: [`Attribute`](exports_cluster.Attribute.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md), `any`\> ; `updateStateProgress`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `announceOtaProvider`: [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `announcementReason`: [`FieldType`](exports_tlv.FieldType.md)\<[`AnnouncementReason`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.AnnouncementReason.md)\> ; `endpoint`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `metadataForNode`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `providerNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `vendorId`: [`FieldType`](exports_tlv.FieldType.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid)\>  }\>, `void`, `any`\>  } ; `events`: \{ `downloadError`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `bytesDownloaded`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `platformCode`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `progressPercent`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `stateTransition`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newState`: [`FieldType`](exports_tlv.FieldType.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `previousState`: [`FieldType`](exports_tlv.FieldType.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `reason`: [`FieldType`](exports_tlv.FieldType.md)\<[`ChangeReason`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.ChangeReason.md)\> ; `targetSoftwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `versionApplied`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `productId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``42`` ; `name`: ``"OtaSoftwareUpdateRequestor"`` ; `revision`: ``1``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `defaultOtaProviders`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `endpoint`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `providerNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[], `any`\> ; `updatePossible`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `updateState`: [`Attribute`](exports_cluster.Attribute.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md), `any`\> ; `updateStateProgress`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `announceOtaProvider`: [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `announcementReason`: [`FieldType`](exports_tlv.FieldType.md)\<[`AnnouncementReason`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.AnnouncementReason.md)\> ; `endpoint`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `metadataForNode`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `providerNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `vendorId`: [`FieldType`](exports_tlv.FieldType.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid)\>  }\>, `void`, `any`\>  } ; `events`: \{ `downloadError`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `bytesDownloaded`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `platformCode`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `progressPercent`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `stateTransition`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newState`: [`FieldType`](exports_tlv.FieldType.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `previousState`: [`FieldType`](exports_tlv.FieldType.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `reason`: [`FieldType`](exports_tlv.FieldType.md)\<[`ChangeReason`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.ChangeReason.md)\> ; `targetSoftwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `versionApplied`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `productId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``42`` ; `name`: ``"OtaSoftwareUpdateRequestor"`` ; `revision`: ``1``  }\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `defaultOtaProviders`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `endpoint`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `providerNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[], `any`\> ; `updatePossible`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `updateState`: [`Attribute`](exports_cluster.Attribute.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md), `any`\> ; `updateStateProgress`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `announceOtaProvider`: [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `announcementReason`: [`FieldType`](exports_tlv.FieldType.md)\<[`AnnouncementReason`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.AnnouncementReason.md)\> ; `endpoint`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `metadataForNode`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `providerNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `vendorId`: [`FieldType`](exports_tlv.FieldType.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid)\>  }\>, `void`, `any`\>  } ; `events`: \{ `downloadError`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `bytesDownloaded`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `platformCode`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `progressPercent`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `stateTransition`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newState`: [`FieldType`](exports_tlv.FieldType.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `previousState`: [`FieldType`](exports_tlv.FieldType.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `reason`: [`FieldType`](exports_tlv.FieldType.md)\<[`ChangeReason`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.ChangeReason.md)\> ; `targetSoftwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `versionApplied`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `productId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``42`` ; `name`: ``"OtaSoftwareUpdateRequestor"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `defaultOtaProviders`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `endpoint`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `providerNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[], `any`\> ; `updatePossible`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `updateState`: [`Attribute`](exports_cluster.Attribute.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md), `any`\> ; `updateStateProgress`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `announceOtaProvider`: [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `announcementReason`: [`FieldType`](exports_tlv.FieldType.md)\<[`AnnouncementReason`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.AnnouncementReason.md)\> ; `endpoint`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `metadataForNode`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `providerNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `vendorId`: [`FieldType`](exports_tlv.FieldType.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid)\>  }\>, `void`, `any`\>  } ; `events`: \{ `downloadError`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `bytesDownloaded`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `platformCode`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `progressPercent`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `stateTransition`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newState`: [`FieldType`](exports_tlv.FieldType.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `previousState`: [`FieldType`](exports_tlv.FieldType.md)\<[`UpdateState`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `reason`: [`FieldType`](exports_tlv.FieldType.md)\<[`ChangeReason`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.ChangeReason.md)\> ; `targetSoftwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\> ; `versionApplied`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `productId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``42`` ; `name`: ``"OtaSoftwareUpdateRequestor"`` ; `revision`: ``1``  }\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
