[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [BridgedDeviceBasicInformation](../modules/cluster_export.BridgedDeviceBasicInformation.md) / Cluster

# Interface: Cluster

[cluster/export](../modules/cluster_export.md).[BridgedDeviceBasicInformation](../modules/cluster_export.BridgedDeviceBasicInformation.md).Cluster

Bridged Device Basic Information

This Cluster serves two purposes towards a Node communicating with a Bridge:

  • Indicate that the functionality on the Endpoint where it is placed (and its Parts) is bridged from a
    non-Matter technology, and

  • Provide a centralized collection of attributes that the Node may collect to aid in conveying information
    regarding the Bridged Device to a user, such as the vendor name, the model name, or user-assigned name.

This cluster shall be exposed by a Bridge on the Endpoint representing each Bridged Device. When the
functionality of a Bridged Device is represented using a set of Endpoints, this cluster shall only be exposed on
the Endpoint which is at the top of the hierarchy for the functionality of that Bridged Device.

This cluster shall NOT be used on an endpoint that is not in the Descriptor cluster PartsList of an endpoint
with an Aggregator device type.

This cluster has been derived from the Basic Information Cluster, and provides generic information about the
Bridged Device. Not all of the attributes in the Basic Information Cluster are relevant for a Bridged Device
(e.g. ProductID since it is not a Matter device). For other attributes, the information which is listed as
Mandatory for the Basic Information Cluster, may not be available when the Bridged Device does not provide it to
the Bridge, and the Bridge has no other means to determine it. For such cases where the information for a
particular attribute is not available, the Bridge SHOULD NOT include the attribute in the cluster for this
Bridged Device. See below for Conformance details.

**`See`**

MatterSpecification.v11.Core § 9.13

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/cluster_export.BridgedDeviceBasicInformation.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](cluster_export.BridgedDeviceBasicInformation.Cluster.md#attributes)
- [base](cluster_export.BridgedDeviceBasicInformation.Cluster.md#base)
- [commands](cluster_export.BridgedDeviceBasicInformation.Cluster.md#commands)
- [events](cluster_export.BridgedDeviceBasicInformation.Cluster.md#events)
- [extensions](cluster_export.BridgedDeviceBasicInformation.Cluster.md#extensions)
- [features](cluster_export.BridgedDeviceBasicInformation.Cluster.md#features)
- [id](cluster_export.BridgedDeviceBasicInformation.Cluster.md#id)
- [name](cluster_export.BridgedDeviceBasicInformation.Cluster.md#name)
- [revision](cluster_export.BridgedDeviceBasicInformation.Cluster.md#revision)
- [supportedFeatures](cluster_export.BridgedDeviceBasicInformation.Cluster.md#supportedfeatures)
- [unknown](cluster_export.BridgedDeviceBasicInformation.Cluster.md#unknown)

### Methods

- [alter](cluster_export.BridgedDeviceBasicInformation.Cluster.md#alter)
- [enable](cluster_export.BridgedDeviceBasicInformation.Cluster.md#enable)
- [set](cluster_export.BridgedDeviceBasicInformation.Cluster.md#set)
- [with](cluster_export.BridgedDeviceBasicInformation.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `hardwareVersion`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `finish`: [`FieldType`](tlv_export.FieldType.md)\<[`ProductFinish`](../enums/cluster_export.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`Color`](../enums/cluster_export.BridgedDeviceBasicInformation.Color.md)\>  }\>, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<[`VendorId`](../modules/datatype_export.md#vendorid), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<{}\>\>

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
| `leave` | [`OptionalEvent`](cluster_export.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Core § 9.13.5 |
| `reachableChanged` | [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\>  }\>, `any`\> | This event shall be generated when there is a change in the Reachable attribute. Its purpose is to provide an indication towards interested parties that the reachability of a bridged device (over the non-Matter network) has changed, so they may take appropriate action. After (re)start of a bridge this event may be generated. **`See`** MatterSpecification.v11.Core § 9.13.5.1 |
| `shutDown` | [`OptionalEvent`](cluster_export.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Core § 9.13.5 |
| `startUp` | [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> | **`See`** MatterSpecification.v11.Core § 9.13.5 |

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

• **id**: [`Branded`](../modules/util_export.md#branded)\<``57``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L81)

___

### name

• **name**: ``"BridgedDeviceBasicInformation"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L82)

___

### revision

• **revision**: ``2``

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

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `hardwareVersion`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `finish`: [`FieldType`](tlv_export.FieldType.md)\<[`ProductFinish`](../enums/cluster_export.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`Color`](../enums/cluster_export.BridgedDeviceBasicInformation.Color.md)\>  }\>, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<[`VendorId`](../modules/datatype_export.md#vendorid), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `reachableChanged`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``57`` = 0x39; `name`: ``"BridgedDeviceBasicInformation"`` = "BridgedDeviceBasicInformation"; `revision`: ``2`` = 2 }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/cluster_export.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/cluster_export.ElementModifier.md#alterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `hardwareVersion`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `finish`: [`FieldType`](tlv_export.FieldType.md)\<[`ProductFinish`](../enums/cluster_export.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`Color`](../enums/cluster_export.BridgedDeviceBasicInformation.Color.md)\>  }\>, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<[`VendorId`](../modules/datatype_export.md#vendorid), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `reachableChanged`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``57`` = 0x39; `name`: ``"BridgedDeviceBasicInformation"`` = "BridgedDeviceBasicInformation"; `revision`: ``2`` = 2 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `hardwareVersion`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `finish`: [`FieldType`](tlv_export.FieldType.md)\<[`ProductFinish`](../enums/cluster_export.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`Color`](../enums/cluster_export.BridgedDeviceBasicInformation.Color.md)\>  }\>, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<[`VendorId`](../modules/datatype_export.md#vendorid), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `reachableChanged`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``57`` = 0x39; `name`: ``"BridgedDeviceBasicInformation"`` = "BridgedDeviceBasicInformation"; `revision`: ``2`` = 2 }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L74)

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `hardwareVersion`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `finish`: [`FieldType`](tlv_export.FieldType.md)\<[`ProductFinish`](../enums/cluster_export.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`Color`](../enums/cluster_export.BridgedDeviceBasicInformation.Color.md)\>  }\>, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<[`VendorId`](../modules/datatype_export.md#vendorid), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `reachableChanged`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``57`` = 0x39; `name`: ``"BridgedDeviceBasicInformation"`` = "BridgedDeviceBasicInformation"; `revision`: ``2`` = 2 }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/cluster_export.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/cluster_export.ElementModifier.md#elementflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `hardwareVersion`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `finish`: [`FieldType`](tlv_export.FieldType.md)\<[`ProductFinish`](../enums/cluster_export.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`Color`](../enums/cluster_export.BridgedDeviceBasicInformation.Color.md)\>  }\>, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<[`VendorId`](../modules/datatype_export.md#vendorid), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `reachableChanged`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``57`` = 0x39; `name`: ``"BridgedDeviceBasicInformation"`` = "BridgedDeviceBasicInformation"; `revision`: ``2`` = 2 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `hardwareVersion`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `finish`: [`FieldType`](tlv_export.FieldType.md)\<[`ProductFinish`](../enums/cluster_export.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`Color`](../enums/cluster_export.BridgedDeviceBasicInformation.Color.md)\>  }\>, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<[`VendorId`](../modules/datatype_export.md#vendorid), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `reachableChanged`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``57`` = 0x39; `name`: ``"BridgedDeviceBasicInformation"`` = "BridgedDeviceBasicInformation"; `revision`: ``2`` = 2 }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L88)

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `hardwareVersion`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `finish`: [`FieldType`](tlv_export.FieldType.md)\<[`ProductFinish`](../enums/cluster_export.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`Color`](../enums/cluster_export.BridgedDeviceBasicInformation.Color.md)\>  }\>, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<[`VendorId`](../modules/datatype_export.md#vendorid), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `reachableChanged`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``57`` = 0x39; `name`: ``"BridgedDeviceBasicInformation"`` = "BridgedDeviceBasicInformation"; `revision`: ``2`` = 2 }\>, `ValuesT`\>

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

[`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `hardwareVersion`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `finish`: [`FieldType`](tlv_export.FieldType.md)\<[`ProductFinish`](../enums/cluster_export.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`Color`](../enums/cluster_export.BridgedDeviceBasicInformation.Color.md)\>  }\>, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<[`VendorId`](../modules/datatype_export.md#vendorid), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `reachableChanged`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``57`` = 0x39; `name`: ``"BridgedDeviceBasicInformation"`` = "BridgedDeviceBasicInformation"; `revision`: ``2`` = 2 }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L81)

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `hardwareVersion`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `finish`: [`FieldType`](tlv_export.FieldType.md)\<[`ProductFinish`](../enums/cluster_export.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`Color`](../enums/cluster_export.BridgedDeviceBasicInformation.Color.md)\>  }\>, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<[`VendorId`](../modules/datatype_export.md#vendorid), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `reachableChanged`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``57`` = 0x39; `name`: ``"BridgedDeviceBasicInformation"`` = "BridgedDeviceBasicInformation"; `revision`: ``2`` = 2 }\>

Select features using [ClusterComposer.compose](../classes/cluster_export.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `hardwareVersion`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `finish`: [`FieldType`](tlv_export.FieldType.md)\<[`ProductFinish`](../enums/cluster_export.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`Color`](../enums/cluster_export.BridgedDeviceBasicInformation.Color.md)\>  }\>, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<[`VendorId`](../modules/datatype_export.md#vendorid), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `reachableChanged`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``57`` = 0x39; `name`: ``"BridgedDeviceBasicInformation"`` = "BridgedDeviceBasicInformation"; `revision`: ``2`` = 2 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `hardwareVersion`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `finish`: [`FieldType`](tlv_export.FieldType.md)\<[`ProductFinish`](../enums/cluster_export.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`Color`](../enums/cluster_export.BridgedDeviceBasicInformation.Color.md)\>  }\>, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<[`VendorId`](../modules/datatype_export.md#vendorid), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `reachableChanged`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``57`` = 0x39; `name`: ``"BridgedDeviceBasicInformation"`` = "BridgedDeviceBasicInformation"; `revision`: ``2`` = 2 }\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
