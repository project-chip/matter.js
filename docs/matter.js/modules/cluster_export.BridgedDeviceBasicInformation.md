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

• `Const` **Cluster**: [`Cluster`](cluster_export.md#cluster)<[`BitSchema`](schema_export.md#bitschema), [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<[`BitSchema`](schema_export.md#bitschema)\>, [`Merge`](util_export.md#merge)<{ `hardwareVersion`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `hardwareVersionString`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`string`, `any`\> ; `nodeLabel`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`string`, `any`\> ; `productAppearance`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `finish`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ProductFinish`](../enums/cluster_export.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`Color`](../enums/cluster_export.BridgedDeviceBasicInformation.Color.md)\>  }\>, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`string`, `any`\> ; `productName`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`string`, `any`\> ; `reachable`: [`Attribute`](cluster_export.md#attribute)<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`string`, `any`\> ; `softwareVersion`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `softwareVersionString`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`string`, `any`\> ; `vendorId`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<[`VendorId`](datatype_export.md#vendorid), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`string`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<[`BitSchema`](schema_export.md#bitschema)\>\>, {}, { `leave`: [`OptionalEvent`](cluster_export.md#optionalevent)<`void`, `any`\> ; `reachableChanged`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `reachableNewValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](cluster_export.md#optionalevent)<`void`, `any`\> ; `startUp`: [`OptionalEvent`](cluster_export.md#optionalevent)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `softwareVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\>  }\>

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

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:110](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L110)

___

### TlvProductAppearanceStruct

• `Const` **TlvProductAppearanceStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `finish`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ProductFinish`](../enums/cluster_export.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| [`Color`](../enums/cluster_export.BridgedDeviceBasicInformation.Color.md)\>  }\>

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:63](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L63)

___

### TlvReachableChangedEvent

• `Const` **TlvReachableChangedEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `reachableNewValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\>  }\>

Body of the BridgedDeviceBasicInformation reachableChanged event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.13.5.1

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:80](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L80)

___

### TlvStartUpEvent

• `Const` **TlvStartUpEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `softwareVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Body of the BridgedDeviceBasicInformation startUp event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.13.5

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:73](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L73)
