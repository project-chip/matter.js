[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [BridgedDeviceBasicInformation](../modules/exports_cluster.BridgedDeviceBasicInformation.md) / Cluster

# Interface: Cluster

[exports/cluster](../modules/exports_cluster.md).[BridgedDeviceBasicInformation](../modules/exports_cluster.BridgedDeviceBasicInformation.md).Cluster

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

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/exports_cluster.BridgedDeviceBasicInformation.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](exports_cluster.BridgedDeviceBasicInformation.Cluster.md#attributes)
- [base](exports_cluster.BridgedDeviceBasicInformation.Cluster.md#base)
- [commands](exports_cluster.BridgedDeviceBasicInformation.Cluster.md#commands)
- [events](exports_cluster.BridgedDeviceBasicInformation.Cluster.md#events)
- [extensions](exports_cluster.BridgedDeviceBasicInformation.Cluster.md#extensions)
- [features](exports_cluster.BridgedDeviceBasicInformation.Cluster.md#features)
- [id](exports_cluster.BridgedDeviceBasicInformation.Cluster.md#id)
- [name](exports_cluster.BridgedDeviceBasicInformation.Cluster.md#name)
- [revision](exports_cluster.BridgedDeviceBasicInformation.Cluster.md#revision)
- [supportedFeatures](exports_cluster.BridgedDeviceBasicInformation.Cluster.md#supportedfeatures)
- [unknown](exports_cluster.BridgedDeviceBasicInformation.Cluster.md#unknown)

### Methods

- [alter](exports_cluster.BridgedDeviceBasicInformation.Cluster.md#alter)
- [enable](exports_cluster.BridgedDeviceBasicInformation.Cluster.md#enable)
- [set](exports_cluster.BridgedDeviceBasicInformation.Cluster.md#set)
- [with](exports_cluster.BridgedDeviceBasicInformation.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `hardwareVersion`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `finish`: [`FieldType`](exports_tlv.FieldType.md)\<[`ProductFinish`](../enums/exports_cluster.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`Color`](../enums/exports_cluster.BridgedDeviceBasicInformation.Color.md)\>  }\>, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<{}\>\>

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
| `leave` | [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Core § 9.13.5 |
| `reachableChanged` | [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\>  }\>, `any`\> | This event shall be generated when there is a change in the Reachable attribute. Its purpose is to provide an indication towards interested parties that the reachability of a bridged device (over the non-Matter network) has changed, so they may take appropriate action. After (re)start of a bridge this event may be generated. **`See`** MatterSpecification.v11.Core § 9.13.5.1 |
| `shutDown` | [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Core § 9.13.5 |
| `startUp` | [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> | **`See`** MatterSpecification.v11.Core § 9.13.5 |

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

• **id**: [`Branded`](../modules/util_export.md#branded)\<``57``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: ``"BridgedDeviceBasicInformation"``

#### Inherited from

Identity.name

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

___

### revision

• **revision**: ``2``

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

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `hardwareVersion`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `finish`: [`FieldType`](exports_tlv.FieldType.md)\<[`ProductFinish`](../enums/exports_cluster.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`Color`](../enums/exports_cluster.BridgedDeviceBasicInformation.Color.md)\>  }\>, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `reachableChanged`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``57`` ; `name`: ``"BridgedDeviceBasicInformation"`` ; `revision`: ``2``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `hardwareVersion`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `finish`: [`FieldType`](exports_tlv.FieldType.md)\<[`ProductFinish`](../enums/exports_cluster.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`Color`](../enums/exports_cluster.BridgedDeviceBasicInformation.Color.md)\>  }\>, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `reachableChanged`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``57`` ; `name`: ``"BridgedDeviceBasicInformation"`` ; `revision`: ``2``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `hardwareVersion`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `finish`: [`FieldType`](exports_tlv.FieldType.md)\<[`ProductFinish`](../enums/exports_cluster.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`Color`](../enums/exports_cluster.BridgedDeviceBasicInformation.Color.md)\>  }\>, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `reachableChanged`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``57`` ; `name`: ``"BridgedDeviceBasicInformation"`` ; `revision`: ``2``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `hardwareVersion`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `finish`: [`FieldType`](exports_tlv.FieldType.md)\<[`ProductFinish`](../enums/exports_cluster.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`Color`](../enums/exports_cluster.BridgedDeviceBasicInformation.Color.md)\>  }\>, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `reachableChanged`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``57`` ; `name`: ``"BridgedDeviceBasicInformation"`` ; `revision`: ``2``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `hardwareVersion`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `finish`: [`FieldType`](exports_tlv.FieldType.md)\<[`ProductFinish`](../enums/exports_cluster.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`Color`](../enums/exports_cluster.BridgedDeviceBasicInformation.Color.md)\>  }\>, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `reachableChanged`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``57`` ; `name`: ``"BridgedDeviceBasicInformation"`` ; `revision`: ``2``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `hardwareVersion`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `finish`: [`FieldType`](exports_tlv.FieldType.md)\<[`ProductFinish`](../enums/exports_cluster.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`Color`](../enums/exports_cluster.BridgedDeviceBasicInformation.Color.md)\>  }\>, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `reachableChanged`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``57`` ; `name`: ``"BridgedDeviceBasicInformation"`` ; `revision`: ``2``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `hardwareVersion`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `finish`: [`FieldType`](exports_tlv.FieldType.md)\<[`ProductFinish`](../enums/exports_cluster.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`Color`](../enums/exports_cluster.BridgedDeviceBasicInformation.Color.md)\>  }\>, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `reachableChanged`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``57`` ; `name`: ``"BridgedDeviceBasicInformation"`` ; `revision`: ``2``  }\>, `ValuesT`\>

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

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `hardwareVersion`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `finish`: [`FieldType`](exports_tlv.FieldType.md)\<[`ProductFinish`](../enums/exports_cluster.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`Color`](../enums/exports_cluster.BridgedDeviceBasicInformation.Color.md)\>  }\>, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `reachableChanged`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``57`` ; `name`: ``"BridgedDeviceBasicInformation"`` ; `revision`: ``2``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `hardwareVersion`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `finish`: [`FieldType`](exports_tlv.FieldType.md)\<[`ProductFinish`](../enums/exports_cluster.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`Color`](../enums/exports_cluster.BridgedDeviceBasicInformation.Color.md)\>  }\>, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `reachableChanged`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``57`` ; `name`: ``"BridgedDeviceBasicInformation"`` ; `revision`: ``2``  }\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `hardwareVersion`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `finish`: [`FieldType`](exports_tlv.FieldType.md)\<[`ProductFinish`](../enums/exports_cluster.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`Color`](../enums/exports_cluster.BridgedDeviceBasicInformation.Color.md)\>  }\>, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `reachableChanged`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``57`` ; `name`: ``"BridgedDeviceBasicInformation"`` ; `revision`: ``2``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `hardwareVersion`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `finish`: [`FieldType`](exports_tlv.FieldType.md)\<[`ProductFinish`](../enums/exports_cluster.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`Color`](../enums/exports_cluster.BridgedDeviceBasicInformation.Color.md)\>  }\>, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `reachableChanged`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``57`` ; `name`: ``"BridgedDeviceBasicInformation"`` ; `revision`: ``2``  }\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
