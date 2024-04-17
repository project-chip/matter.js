[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [OtaSoftwareUpdateProvider](../modules/exports_cluster.OtaSoftwareUpdateProvider.md) / Cluster

# Interface: Cluster

[exports/cluster](../modules/exports_cluster.md).[OtaSoftwareUpdateProvider](../modules/exports_cluster.OtaSoftwareUpdateProvider.md).Cluster

OTA Software Update Provider

Provides an interface for providing OTA software updates

**`See`**

MatterSpecification.v11.Core § 11.19.6

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/exports_cluster.OtaSoftwareUpdateProvider.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](exports_cluster.OtaSoftwareUpdateProvider.Cluster.md#attributes)
- [base](exports_cluster.OtaSoftwareUpdateProvider.Cluster.md#base)
- [commands](exports_cluster.OtaSoftwareUpdateProvider.Cluster.md#commands)
- [events](exports_cluster.OtaSoftwareUpdateProvider.Cluster.md#events)
- [extensions](exports_cluster.OtaSoftwareUpdateProvider.Cluster.md#extensions)
- [features](exports_cluster.OtaSoftwareUpdateProvider.Cluster.md#features)
- [id](exports_cluster.OtaSoftwareUpdateProvider.Cluster.md#id)
- [name](exports_cluster.OtaSoftwareUpdateProvider.Cluster.md#name)
- [revision](exports_cluster.OtaSoftwareUpdateProvider.Cluster.md#revision)
- [supportedFeatures](exports_cluster.OtaSoftwareUpdateProvider.Cluster.md#supportedfeatures)
- [unknown](exports_cluster.OtaSoftwareUpdateProvider.Cluster.md#unknown)

### Methods

- [alter](exports_cluster.OtaSoftwareUpdateProvider.Cluster.md#alter)
- [enable](exports_cluster.OtaSoftwareUpdateProvider.Cluster.md#enable)
- [set](exports_cluster.OtaSoftwareUpdateProvider.Cluster.md#set)
- [with](exports_cluster.OtaSoftwareUpdateProvider.Cluster.md#with)

## Properties

### attributes

• **attributes**: `Object`

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
| `applyUpdateRequest` | [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `action`: [`FieldType`](exports_tlv.FieldType.md)\<[`ApplyUpdateAction`](../enums/exports_cluster.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)\> ; `delayedActionTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> | This field shall contain the UpdateToken as specified in Section 11.19.3.6.1, “UpdateToken usage”. This field may be used by the OTA Provider to track minimal lifecycle state to allow finer-grained scheduling of the application of Software Images by OTA Requestors. **`See`** MatterSpecification.v11.Core § 11.19.6.5.18 |
| `notifyUpdateApplied` | [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> | This field shall contain the UpdateToken as specified in Section 11.19.3.6.1, “UpdateToken usage”. The SoftwareVersion included in the request payload shall provide the same value as the SoftwareVersion attribute in the invoking OTA Requestor’s Basic Information Cluster, and SHOULD be consistent with the value representing a new version running on the Node invoking the command. When Generated The NotifyUpdateApplied command SHOULD be invoked in the following two circumstances: 1. An OTA Requestor has just successfully applied a Software Image it had obtained from a previous QueryImage response. 2. An OTA Requestor has just successfully applied a Software Image it had obtained through means different than those of this Cluster. An OTA Provider may use the state of invocation of this command to help track the progress of update for OTA Requestors it knows require a new OTA Software Image. However, due to the possibility that an OTA Requestor may never come back (e.g. device removed from Fabric altogether, or a critical malfunction), an OTA Provider shall NOT expect every OTA Requestor to invoke this command for correct operation of the OTA Provider. This command shall be considered optional and shall not result in reduced availability of the OTA Provider functionality if OTA Requestors never invoke this command. Effect on Receipt An OTA Provider receiving an invocation of this command may log it internally. On receiving this command, an OTA Provider may use the information to update its bookkeeping of cached Software Images, or use it for other similar administrative purposes. **`See`** MatterSpecification.v11.Core § 11.19.6.5.22 |
| `queryImage` | [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `hardwareVersion`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `location`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `metadataForProvider`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `productId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `protocolsSupported`: [`FieldType`](exports_tlv.FieldType.md)\<[`DownloadProtocol`](../enums/exports_cluster.OtaSoftwareUpdateProvider.DownloadProtocol.md)[]\> ; `requestorCanConsent`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `vendorId`: [`FieldType`](exports_tlv.FieldType.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `delayedActionTime`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `imageUri`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `metadataForRequestor`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `softwareVersion`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `softwareVersionString`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.OtaSoftwareUpdateProvider.Status.md)\> ; `updateToken`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `userConsentNeeded`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`boolean`\>  }\>, `any`\> | Upon receipt, this command shall trigger an attempt to find an updated Software Image by the OTA Provider to match the OTA Requestor’s constraints provided in the payload fields. **`See`** MatterSpecification.v11.Core § 11.19.6.5.1 |

#### Inherited from

Identity.commands

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:45

___

### events

• **events**: `Object`

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

• **id**: [`Branded`](../modules/util_export.md#branded)\<``41``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: ``"OtaSoftwareUpdateProvider"``

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

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `applyUpdateRequest`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `action`: [`FieldType`](exports_tlv.FieldType.md)\<[`ApplyUpdateAction`](../enums/exports_cluster.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)\> ; `delayedActionTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `notifyUpdateApplied`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `queryImage`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `hardwareVersion`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `location`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `metadataForProvider`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `productId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `protocolsSupported`: [`FieldType`](exports_tlv.FieldType.md)\<[`DownloadProtocol`](../enums/exports_cluster.OtaSoftwareUpdateProvider.DownloadProtocol.md)[]\> ; `requestorCanConsent`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `vendorId`: [`FieldType`](exports_tlv.FieldType.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `delayedActionTime`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `imageUri`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `metadataForRequestor`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `softwareVersion`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `softwareVersionString`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.OtaSoftwareUpdateProvider.Status.md)\> ; `updateToken`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `userConsentNeeded`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`boolean`\>  }\>, `any`\>  } ; `id`: ``41`` ; `name`: ``"OtaSoftwareUpdateProvider"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `applyUpdateRequest`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `action`: [`FieldType`](exports_tlv.FieldType.md)\<[`ApplyUpdateAction`](../enums/exports_cluster.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)\> ; `delayedActionTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `notifyUpdateApplied`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `queryImage`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `hardwareVersion`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `location`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `metadataForProvider`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `productId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `protocolsSupported`: [`FieldType`](exports_tlv.FieldType.md)\<[`DownloadProtocol`](../enums/exports_cluster.OtaSoftwareUpdateProvider.DownloadProtocol.md)[]\> ; `requestorCanConsent`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `vendorId`: [`FieldType`](exports_tlv.FieldType.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `delayedActionTime`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `imageUri`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `metadataForRequestor`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `softwareVersion`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `softwareVersionString`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.OtaSoftwareUpdateProvider.Status.md)\> ; `updateToken`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `userConsentNeeded`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`boolean`\>  }\>, `any`\>  } ; `id`: ``41`` ; `name`: ``"OtaSoftwareUpdateProvider"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `applyUpdateRequest`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `action`: [`FieldType`](exports_tlv.FieldType.md)\<[`ApplyUpdateAction`](../enums/exports_cluster.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)\> ; `delayedActionTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `notifyUpdateApplied`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `queryImage`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `hardwareVersion`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `location`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `metadataForProvider`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `productId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `protocolsSupported`: [`FieldType`](exports_tlv.FieldType.md)\<[`DownloadProtocol`](../enums/exports_cluster.OtaSoftwareUpdateProvider.DownloadProtocol.md)[]\> ; `requestorCanConsent`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `vendorId`: [`FieldType`](exports_tlv.FieldType.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `delayedActionTime`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `imageUri`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `metadataForRequestor`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `softwareVersion`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `softwareVersionString`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.OtaSoftwareUpdateProvider.Status.md)\> ; `updateToken`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `userConsentNeeded`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`boolean`\>  }\>, `any`\>  } ; `id`: ``41`` ; `name`: ``"OtaSoftwareUpdateProvider"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `applyUpdateRequest`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `action`: [`FieldType`](exports_tlv.FieldType.md)\<[`ApplyUpdateAction`](../enums/exports_cluster.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)\> ; `delayedActionTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `notifyUpdateApplied`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `queryImage`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `hardwareVersion`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `location`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `metadataForProvider`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `productId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `protocolsSupported`: [`FieldType`](exports_tlv.FieldType.md)\<[`DownloadProtocol`](../enums/exports_cluster.OtaSoftwareUpdateProvider.DownloadProtocol.md)[]\> ; `requestorCanConsent`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `vendorId`: [`FieldType`](exports_tlv.FieldType.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `delayedActionTime`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `imageUri`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `metadataForRequestor`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `softwareVersion`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `softwareVersionString`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.OtaSoftwareUpdateProvider.Status.md)\> ; `updateToken`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `userConsentNeeded`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`boolean`\>  }\>, `any`\>  } ; `id`: ``41`` ; `name`: ``"OtaSoftwareUpdateProvider"`` ; `revision`: ``1``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `applyUpdateRequest`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `action`: [`FieldType`](exports_tlv.FieldType.md)\<[`ApplyUpdateAction`](../enums/exports_cluster.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)\> ; `delayedActionTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `notifyUpdateApplied`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `queryImage`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `hardwareVersion`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `location`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `metadataForProvider`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `productId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `protocolsSupported`: [`FieldType`](exports_tlv.FieldType.md)\<[`DownloadProtocol`](../enums/exports_cluster.OtaSoftwareUpdateProvider.DownloadProtocol.md)[]\> ; `requestorCanConsent`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `vendorId`: [`FieldType`](exports_tlv.FieldType.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `delayedActionTime`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `imageUri`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `metadataForRequestor`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `softwareVersion`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `softwareVersionString`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.OtaSoftwareUpdateProvider.Status.md)\> ; `updateToken`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `userConsentNeeded`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`boolean`\>  }\>, `any`\>  } ; `id`: ``41`` ; `name`: ``"OtaSoftwareUpdateProvider"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `applyUpdateRequest`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `action`: [`FieldType`](exports_tlv.FieldType.md)\<[`ApplyUpdateAction`](../enums/exports_cluster.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)\> ; `delayedActionTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `notifyUpdateApplied`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `queryImage`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `hardwareVersion`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `location`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `metadataForProvider`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `productId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `protocolsSupported`: [`FieldType`](exports_tlv.FieldType.md)\<[`DownloadProtocol`](../enums/exports_cluster.OtaSoftwareUpdateProvider.DownloadProtocol.md)[]\> ; `requestorCanConsent`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `vendorId`: [`FieldType`](exports_tlv.FieldType.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `delayedActionTime`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `imageUri`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `metadataForRequestor`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `softwareVersion`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `softwareVersionString`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.OtaSoftwareUpdateProvider.Status.md)\> ; `updateToken`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `userConsentNeeded`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`boolean`\>  }\>, `any`\>  } ; `id`: ``41`` ; `name`: ``"OtaSoftwareUpdateProvider"`` ; `revision`: ``1``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `applyUpdateRequest`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `action`: [`FieldType`](exports_tlv.FieldType.md)\<[`ApplyUpdateAction`](../enums/exports_cluster.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)\> ; `delayedActionTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `notifyUpdateApplied`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `queryImage`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `hardwareVersion`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `location`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `metadataForProvider`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `productId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `protocolsSupported`: [`FieldType`](exports_tlv.FieldType.md)\<[`DownloadProtocol`](../enums/exports_cluster.OtaSoftwareUpdateProvider.DownloadProtocol.md)[]\> ; `requestorCanConsent`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `vendorId`: [`FieldType`](exports_tlv.FieldType.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `delayedActionTime`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `imageUri`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `metadataForRequestor`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `softwareVersion`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `softwareVersionString`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.OtaSoftwareUpdateProvider.Status.md)\> ; `updateToken`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `userConsentNeeded`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`boolean`\>  }\>, `any`\>  } ; `id`: ``41`` ; `name`: ``"OtaSoftwareUpdateProvider"`` ; `revision`: ``1``  }\>, `ValuesT`\>

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

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `applyUpdateRequest`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `action`: [`FieldType`](exports_tlv.FieldType.md)\<[`ApplyUpdateAction`](../enums/exports_cluster.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)\> ; `delayedActionTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `notifyUpdateApplied`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `queryImage`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `hardwareVersion`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `location`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `metadataForProvider`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `productId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `protocolsSupported`: [`FieldType`](exports_tlv.FieldType.md)\<[`DownloadProtocol`](../enums/exports_cluster.OtaSoftwareUpdateProvider.DownloadProtocol.md)[]\> ; `requestorCanConsent`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `vendorId`: [`FieldType`](exports_tlv.FieldType.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `delayedActionTime`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `imageUri`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `metadataForRequestor`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `softwareVersion`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `softwareVersionString`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.OtaSoftwareUpdateProvider.Status.md)\> ; `updateToken`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `userConsentNeeded`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`boolean`\>  }\>, `any`\>  } ; `id`: ``41`` ; `name`: ``"OtaSoftwareUpdateProvider"`` ; `revision`: ``1``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `applyUpdateRequest`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `action`: [`FieldType`](exports_tlv.FieldType.md)\<[`ApplyUpdateAction`](../enums/exports_cluster.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)\> ; `delayedActionTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `notifyUpdateApplied`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `queryImage`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `hardwareVersion`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `location`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `metadataForProvider`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `productId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `protocolsSupported`: [`FieldType`](exports_tlv.FieldType.md)\<[`DownloadProtocol`](../enums/exports_cluster.OtaSoftwareUpdateProvider.DownloadProtocol.md)[]\> ; `requestorCanConsent`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `vendorId`: [`FieldType`](exports_tlv.FieldType.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `delayedActionTime`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `imageUri`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `metadataForRequestor`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `softwareVersion`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `softwareVersionString`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.OtaSoftwareUpdateProvider.Status.md)\> ; `updateToken`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `userConsentNeeded`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`boolean`\>  }\>, `any`\>  } ; `id`: ``41`` ; `name`: ``"OtaSoftwareUpdateProvider"`` ; `revision`: ``1``  }\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `applyUpdateRequest`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `action`: [`FieldType`](exports_tlv.FieldType.md)\<[`ApplyUpdateAction`](../enums/exports_cluster.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)\> ; `delayedActionTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `notifyUpdateApplied`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `queryImage`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `hardwareVersion`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `location`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `metadataForProvider`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `productId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `protocolsSupported`: [`FieldType`](exports_tlv.FieldType.md)\<[`DownloadProtocol`](../enums/exports_cluster.OtaSoftwareUpdateProvider.DownloadProtocol.md)[]\> ; `requestorCanConsent`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `vendorId`: [`FieldType`](exports_tlv.FieldType.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `delayedActionTime`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `imageUri`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `metadataForRequestor`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `softwareVersion`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `softwareVersionString`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.OtaSoftwareUpdateProvider.Status.md)\> ; `updateToken`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `userConsentNeeded`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`boolean`\>  }\>, `any`\>  } ; `id`: ``41`` ; `name`: ``"OtaSoftwareUpdateProvider"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `applyUpdateRequest`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `action`: [`FieldType`](exports_tlv.FieldType.md)\<[`ApplyUpdateAction`](../enums/exports_cluster.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)\> ; `delayedActionTime`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `notifyUpdateApplied`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `queryImage`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `hardwareVersion`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `location`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `metadataForProvider`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `productId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `protocolsSupported`: [`FieldType`](exports_tlv.FieldType.md)\<[`DownloadProtocol`](../enums/exports_cluster.OtaSoftwareUpdateProvider.DownloadProtocol.md)[]\> ; `requestorCanConsent`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `vendorId`: [`FieldType`](exports_tlv.FieldType.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `delayedActionTime`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `imageUri`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `metadataForRequestor`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `softwareVersion`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `softwareVersionString`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.OtaSoftwareUpdateProvider.Status.md)\> ; `updateToken`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `userConsentNeeded`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`boolean`\>  }\>, `any`\>  } ; `id`: ``41`` ; `name`: ``"OtaSoftwareUpdateProvider"`` ; `revision`: ``1``  }\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
