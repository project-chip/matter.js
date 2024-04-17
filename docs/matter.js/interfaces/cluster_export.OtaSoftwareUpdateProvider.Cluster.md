[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OtaSoftwareUpdateProvider](../modules/cluster_export.OtaSoftwareUpdateProvider.md) / Cluster

# Interface: Cluster

[cluster/export](../modules/cluster_export.md).[OtaSoftwareUpdateProvider](../modules/cluster_export.OtaSoftwareUpdateProvider.md).Cluster

OTA Software Update Provider

Provides an interface for providing OTA software updates

**`See`**

MatterSpecification.v11.Core § 11.19.6

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/cluster_export.OtaSoftwareUpdateProvider.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](cluster_export.OtaSoftwareUpdateProvider.Cluster.md#attributes)
- [base](cluster_export.OtaSoftwareUpdateProvider.Cluster.md#base)
- [commands](cluster_export.OtaSoftwareUpdateProvider.Cluster.md#commands)
- [events](cluster_export.OtaSoftwareUpdateProvider.Cluster.md#events)
- [extensions](cluster_export.OtaSoftwareUpdateProvider.Cluster.md#extensions)
- [features](cluster_export.OtaSoftwareUpdateProvider.Cluster.md#features)
- [id](cluster_export.OtaSoftwareUpdateProvider.Cluster.md#id)
- [name](cluster_export.OtaSoftwareUpdateProvider.Cluster.md#name)
- [revision](cluster_export.OtaSoftwareUpdateProvider.Cluster.md#revision)
- [supportedFeatures](cluster_export.OtaSoftwareUpdateProvider.Cluster.md#supportedfeatures)
- [unknown](cluster_export.OtaSoftwareUpdateProvider.Cluster.md#unknown)

### Methods

- [alter](cluster_export.OtaSoftwareUpdateProvider.Cluster.md#alter)
- [enable](cluster_export.OtaSoftwareUpdateProvider.Cluster.md#enable)
- [set](cluster_export.OtaSoftwareUpdateProvider.Cluster.md#set)
- [with](cluster_export.OtaSoftwareUpdateProvider.Cluster.md#with)

## Properties

### attributes

• **attributes**: `Object`

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
| `applyUpdateRequest` | [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `action`: [`FieldType`](tlv_export.FieldType.md)\<[`ApplyUpdateAction`](../enums/cluster_export.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)\> ; `delayedActionTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> | This field shall contain the UpdateToken as specified in Section 11.19.3.6.1, “UpdateToken usage”. This field may be used by the OTA Provider to track minimal lifecycle state to allow finer-grained scheduling of the application of Software Images by OTA Requestors. **`See`** MatterSpecification.v11.Core § 11.19.6.5.18 |
| `notifyUpdateApplied` | [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> | This field shall contain the UpdateToken as specified in Section 11.19.3.6.1, “UpdateToken usage”. The SoftwareVersion included in the request payload shall provide the same value as the SoftwareVersion attribute in the invoking OTA Requestor’s Basic Information Cluster, and SHOULD be consistent with the value representing a new version running on the Node invoking the command. When Generated The NotifyUpdateApplied command SHOULD be invoked in the following two circumstances: 1. An OTA Requestor has just successfully applied a Software Image it had obtained from a previous QueryImage response. 2. An OTA Requestor has just successfully applied a Software Image it had obtained through means different than those of this Cluster. An OTA Provider may use the state of invocation of this command to help track the progress of update for OTA Requestors it knows require a new OTA Software Image. However, due to the possibility that an OTA Requestor may never come back (e.g. device removed from Fabric altogether, or a critical malfunction), an OTA Provider shall NOT expect every OTA Requestor to invoke this command for correct operation of the OTA Provider. This command shall be considered optional and shall not result in reduced availability of the OTA Provider functionality if OTA Requestors never invoke this command. Effect on Receipt An OTA Provider receiving an invocation of this command may log it internally. On receiving this command, an OTA Provider may use the information to update its bookkeeping of cached Software Images, or use it for other similar administrative purposes. **`See`** MatterSpecification.v11.Core § 11.19.6.5.22 |
| `queryImage` | [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hardwareVersion`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `location`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForProvider`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `productId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `protocolsSupported`: [`FieldType`](tlv_export.FieldType.md)\<[`DownloadProtocol`](../enums/cluster_export.OtaSoftwareUpdateProvider.DownloadProtocol.md)[]\> ; `requestorCanConsent`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `vendorId`: [`FieldType`](tlv_export.FieldType.md)\<[`VendorId`](../modules/datatype_export.md#vendorid)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `delayedActionTime`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `imageUri`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForRequestor`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `softwareVersion`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `softwareVersionString`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.OtaSoftwareUpdateProvider.Status.md)\> ; `updateToken`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `userConsentNeeded`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\>  }\>, `any`\> | Upon receipt, this command shall trigger an attempt to find an updated Software Image by the OTA Provider to match the OTA Requestor’s constraints provided in the payload fields. **`See`** MatterSpecification.v11.Core § 11.19.6.5.1 |

#### Inherited from

Identity.commands

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L89)

___

### events

• **events**: `Object`

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

• **id**: [`Branded`](../modules/util_export.md#branded)\<``41``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L81)

___

### name

• **name**: ``"OtaSoftwareUpdateProvider"``

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

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `commands`: \{ `applyUpdateRequest`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `action`: [`FieldType`](tlv_export.FieldType.md)\<[`ApplyUpdateAction`](../enums/cluster_export.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)\> ; `delayedActionTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `notifyUpdateApplied`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `queryImage`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hardwareVersion`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `location`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForProvider`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `productId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `protocolsSupported`: [`FieldType`](tlv_export.FieldType.md)\<[`DownloadProtocol`](../enums/cluster_export.OtaSoftwareUpdateProvider.DownloadProtocol.md)[]\> ; `requestorCanConsent`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `vendorId`: [`FieldType`](tlv_export.FieldType.md)\<[`VendorId`](../modules/datatype_export.md#vendorid)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `delayedActionTime`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `imageUri`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForRequestor`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `softwareVersion`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `softwareVersionString`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.OtaSoftwareUpdateProvider.Status.md)\> ; `updateToken`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `userConsentNeeded`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\>  }\>, `any`\>  } ; `id`: ``41`` = 0x29; `name`: ``"OtaSoftwareUpdateProvider"`` = "OtaSoftwareUpdateProvider"; `revision`: ``1`` = 1 }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/cluster_export.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/cluster_export.ElementModifier.md#alterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `commands`: \{ `applyUpdateRequest`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `action`: [`FieldType`](tlv_export.FieldType.md)\<[`ApplyUpdateAction`](../enums/cluster_export.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)\> ; `delayedActionTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `notifyUpdateApplied`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `queryImage`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hardwareVersion`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `location`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForProvider`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `productId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `protocolsSupported`: [`FieldType`](tlv_export.FieldType.md)\<[`DownloadProtocol`](../enums/cluster_export.OtaSoftwareUpdateProvider.DownloadProtocol.md)[]\> ; `requestorCanConsent`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `vendorId`: [`FieldType`](tlv_export.FieldType.md)\<[`VendorId`](../modules/datatype_export.md#vendorid)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `delayedActionTime`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `imageUri`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForRequestor`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `softwareVersion`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `softwareVersionString`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.OtaSoftwareUpdateProvider.Status.md)\> ; `updateToken`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `userConsentNeeded`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\>  }\>, `any`\>  } ; `id`: ``41`` = 0x29; `name`: ``"OtaSoftwareUpdateProvider"`` = "OtaSoftwareUpdateProvider"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `commands`: \{ `applyUpdateRequest`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `action`: [`FieldType`](tlv_export.FieldType.md)\<[`ApplyUpdateAction`](../enums/cluster_export.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)\> ; `delayedActionTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `notifyUpdateApplied`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `queryImage`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hardwareVersion`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `location`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForProvider`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `productId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `protocolsSupported`: [`FieldType`](tlv_export.FieldType.md)\<[`DownloadProtocol`](../enums/cluster_export.OtaSoftwareUpdateProvider.DownloadProtocol.md)[]\> ; `requestorCanConsent`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `vendorId`: [`FieldType`](tlv_export.FieldType.md)\<[`VendorId`](../modules/datatype_export.md#vendorid)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `delayedActionTime`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `imageUri`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForRequestor`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `softwareVersion`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `softwareVersionString`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.OtaSoftwareUpdateProvider.Status.md)\> ; `updateToken`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `userConsentNeeded`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\>  }\>, `any`\>  } ; `id`: ``41`` = 0x29; `name`: ``"OtaSoftwareUpdateProvider"`` = "OtaSoftwareUpdateProvider"; `revision`: ``1`` = 1 }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L74)

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `commands`: \{ `applyUpdateRequest`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `action`: [`FieldType`](tlv_export.FieldType.md)\<[`ApplyUpdateAction`](../enums/cluster_export.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)\> ; `delayedActionTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `notifyUpdateApplied`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `queryImage`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hardwareVersion`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `location`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForProvider`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `productId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `protocolsSupported`: [`FieldType`](tlv_export.FieldType.md)\<[`DownloadProtocol`](../enums/cluster_export.OtaSoftwareUpdateProvider.DownloadProtocol.md)[]\> ; `requestorCanConsent`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `vendorId`: [`FieldType`](tlv_export.FieldType.md)\<[`VendorId`](../modules/datatype_export.md#vendorid)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `delayedActionTime`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `imageUri`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForRequestor`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `softwareVersion`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `softwareVersionString`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.OtaSoftwareUpdateProvider.Status.md)\> ; `updateToken`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `userConsentNeeded`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\>  }\>, `any`\>  } ; `id`: ``41`` = 0x29; `name`: ``"OtaSoftwareUpdateProvider"`` = "OtaSoftwareUpdateProvider"; `revision`: ``1`` = 1 }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/cluster_export.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/cluster_export.ElementModifier.md#elementflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `commands`: \{ `applyUpdateRequest`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `action`: [`FieldType`](tlv_export.FieldType.md)\<[`ApplyUpdateAction`](../enums/cluster_export.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)\> ; `delayedActionTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `notifyUpdateApplied`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `queryImage`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hardwareVersion`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `location`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForProvider`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `productId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `protocolsSupported`: [`FieldType`](tlv_export.FieldType.md)\<[`DownloadProtocol`](../enums/cluster_export.OtaSoftwareUpdateProvider.DownloadProtocol.md)[]\> ; `requestorCanConsent`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `vendorId`: [`FieldType`](tlv_export.FieldType.md)\<[`VendorId`](../modules/datatype_export.md#vendorid)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `delayedActionTime`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `imageUri`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForRequestor`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `softwareVersion`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `softwareVersionString`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.OtaSoftwareUpdateProvider.Status.md)\> ; `updateToken`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `userConsentNeeded`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\>  }\>, `any`\>  } ; `id`: ``41`` = 0x29; `name`: ``"OtaSoftwareUpdateProvider"`` = "OtaSoftwareUpdateProvider"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `commands`: \{ `applyUpdateRequest`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `action`: [`FieldType`](tlv_export.FieldType.md)\<[`ApplyUpdateAction`](../enums/cluster_export.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)\> ; `delayedActionTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `notifyUpdateApplied`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `queryImage`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hardwareVersion`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `location`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForProvider`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `productId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `protocolsSupported`: [`FieldType`](tlv_export.FieldType.md)\<[`DownloadProtocol`](../enums/cluster_export.OtaSoftwareUpdateProvider.DownloadProtocol.md)[]\> ; `requestorCanConsent`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `vendorId`: [`FieldType`](tlv_export.FieldType.md)\<[`VendorId`](../modules/datatype_export.md#vendorid)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `delayedActionTime`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `imageUri`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForRequestor`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `softwareVersion`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `softwareVersionString`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.OtaSoftwareUpdateProvider.Status.md)\> ; `updateToken`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `userConsentNeeded`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\>  }\>, `any`\>  } ; `id`: ``41`` = 0x29; `name`: ``"OtaSoftwareUpdateProvider"`` = "OtaSoftwareUpdateProvider"; `revision`: ``1`` = 1 }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L88)

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `commands`: \{ `applyUpdateRequest`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `action`: [`FieldType`](tlv_export.FieldType.md)\<[`ApplyUpdateAction`](../enums/cluster_export.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)\> ; `delayedActionTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `notifyUpdateApplied`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `queryImage`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hardwareVersion`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `location`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForProvider`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `productId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `protocolsSupported`: [`FieldType`](tlv_export.FieldType.md)\<[`DownloadProtocol`](../enums/cluster_export.OtaSoftwareUpdateProvider.DownloadProtocol.md)[]\> ; `requestorCanConsent`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `vendorId`: [`FieldType`](tlv_export.FieldType.md)\<[`VendorId`](../modules/datatype_export.md#vendorid)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `delayedActionTime`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `imageUri`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForRequestor`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `softwareVersion`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `softwareVersionString`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.OtaSoftwareUpdateProvider.Status.md)\> ; `updateToken`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `userConsentNeeded`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\>  }\>, `any`\>  } ; `id`: ``41`` = 0x29; `name`: ``"OtaSoftwareUpdateProvider"`` = "OtaSoftwareUpdateProvider"; `revision`: ``1`` = 1 }\>, `ValuesT`\>

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

[`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `commands`: \{ `applyUpdateRequest`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `action`: [`FieldType`](tlv_export.FieldType.md)\<[`ApplyUpdateAction`](../enums/cluster_export.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)\> ; `delayedActionTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `notifyUpdateApplied`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `queryImage`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hardwareVersion`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `location`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForProvider`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `productId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `protocolsSupported`: [`FieldType`](tlv_export.FieldType.md)\<[`DownloadProtocol`](../enums/cluster_export.OtaSoftwareUpdateProvider.DownloadProtocol.md)[]\> ; `requestorCanConsent`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `vendorId`: [`FieldType`](tlv_export.FieldType.md)\<[`VendorId`](../modules/datatype_export.md#vendorid)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `delayedActionTime`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `imageUri`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForRequestor`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `softwareVersion`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `softwareVersionString`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.OtaSoftwareUpdateProvider.Status.md)\> ; `updateToken`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `userConsentNeeded`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\>  }\>, `any`\>  } ; `id`: ``41`` = 0x29; `name`: ``"OtaSoftwareUpdateProvider"`` = "OtaSoftwareUpdateProvider"; `revision`: ``1`` = 1 }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L81)

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](cluster_export.ClusterType.Of.md)\<\{ `commands`: \{ `applyUpdateRequest`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `action`: [`FieldType`](tlv_export.FieldType.md)\<[`ApplyUpdateAction`](../enums/cluster_export.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)\> ; `delayedActionTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `notifyUpdateApplied`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `queryImage`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hardwareVersion`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `location`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForProvider`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `productId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `protocolsSupported`: [`FieldType`](tlv_export.FieldType.md)\<[`DownloadProtocol`](../enums/cluster_export.OtaSoftwareUpdateProvider.DownloadProtocol.md)[]\> ; `requestorCanConsent`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `vendorId`: [`FieldType`](tlv_export.FieldType.md)\<[`VendorId`](../modules/datatype_export.md#vendorid)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `delayedActionTime`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `imageUri`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForRequestor`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `softwareVersion`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `softwareVersionString`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.OtaSoftwareUpdateProvider.Status.md)\> ; `updateToken`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `userConsentNeeded`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\>  }\>, `any`\>  } ; `id`: ``41`` = 0x29; `name`: ``"OtaSoftwareUpdateProvider"`` = "OtaSoftwareUpdateProvider"; `revision`: ``1`` = 1 }\>

Select features using [ClusterComposer.compose](../classes/cluster_export.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `commands`: \{ `applyUpdateRequest`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `action`: [`FieldType`](tlv_export.FieldType.md)\<[`ApplyUpdateAction`](../enums/cluster_export.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)\> ; `delayedActionTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `notifyUpdateApplied`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `queryImage`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hardwareVersion`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `location`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForProvider`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `productId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `protocolsSupported`: [`FieldType`](tlv_export.FieldType.md)\<[`DownloadProtocol`](../enums/cluster_export.OtaSoftwareUpdateProvider.DownloadProtocol.md)[]\> ; `requestorCanConsent`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `vendorId`: [`FieldType`](tlv_export.FieldType.md)\<[`VendorId`](../modules/datatype_export.md#vendorid)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `delayedActionTime`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `imageUri`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForRequestor`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `softwareVersion`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `softwareVersionString`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.OtaSoftwareUpdateProvider.Status.md)\> ; `updateToken`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `userConsentNeeded`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\>  }\>, `any`\>  } ; `id`: ``41`` = 0x29; `name`: ``"OtaSoftwareUpdateProvider"`` = "OtaSoftwareUpdateProvider"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](cluster_export.ClusterType.Of.md)\<\{ `commands`: \{ `applyUpdateRequest`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `action`: [`FieldType`](tlv_export.FieldType.md)\<[`ApplyUpdateAction`](../enums/cluster_export.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)\> ; `delayedActionTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `notifyUpdateApplied`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `queryImage`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hardwareVersion`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `location`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForProvider`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `productId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `protocolsSupported`: [`FieldType`](tlv_export.FieldType.md)\<[`DownloadProtocol`](../enums/cluster_export.OtaSoftwareUpdateProvider.DownloadProtocol.md)[]\> ; `requestorCanConsent`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `vendorId`: [`FieldType`](tlv_export.FieldType.md)\<[`VendorId`](../modules/datatype_export.md#vendorid)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `delayedActionTime`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `imageUri`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForRequestor`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `softwareVersion`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `softwareVersionString`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.OtaSoftwareUpdateProvider.Status.md)\> ; `updateToken`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `userConsentNeeded`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\>  }\>, `any`\>  } ; `id`: ``41`` = 0x29; `name`: ``"OtaSoftwareUpdateProvider"`` = "OtaSoftwareUpdateProvider"; `revision`: ``1`` = 1 }\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
