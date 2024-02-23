[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / BridgedDeviceBasicInformation

# Namespace: BridgedDeviceBasicInformation

[cluster/export](cluster_export.md).BridgedDeviceBasicInformation

## Table of contents

### Enumerations

- [Color](../enums/cluster_export.BridgedDeviceBasicInformation.Color.md)
- [ProductFinish](../enums/cluster_export.BridgedDeviceBasicInformation.ProductFinish.md)

### Variables

- [Cluster](cluster_export.BridgedDeviceBasicInformation.md#cluster)
- [TlvProductAppearanceStruct](cluster_export.BridgedDeviceBasicInformation.md#tlvproductappearancestruct)
- [TlvReachableChangedEvent](cluster_export.BridgedDeviceBasicInformation.md#tlvreachablechangedevent)
- [TlvStartUpEvent](cluster_export.BridgedDeviceBasicInformation.md#tlvstartupevent)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `hardwareVersion`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `finish`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ProductFinish`](../enums/cluster_export.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`Color`](../enums/cluster_export.BridgedDeviceBasicInformation.Color.md)\>  }\>, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<[`VendorId`](datatype_export.md#vendorid), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `reachableChanged`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``57`` = 0x39; `name`: ``"BridgedDeviceBasicInformation"`` = "BridgedDeviceBasicInformation"; `revision`: ``2`` = 2 }\>

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

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.13

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:109](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L109)

___

### TlvProductAppearanceStruct

• `Const` **TlvProductAppearanceStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `finish`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ProductFinish`](../enums/cluster_export.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`Color`](../enums/cluster_export.BridgedDeviceBasicInformation.Color.md)\>  }\>

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:62](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L62)

___

### TlvReachableChangedEvent

• `Const` **TlvReachableChangedEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `reachableNewValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\>  }\>

Body of the BridgedDeviceBasicInformation reachableChanged event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.13.5.1

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:79](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L79)

___

### TlvStartUpEvent

• `Const` **TlvStartUpEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `softwareVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Body of the BridgedDeviceBasicInformation startUp event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.13.5

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:72](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L72)
