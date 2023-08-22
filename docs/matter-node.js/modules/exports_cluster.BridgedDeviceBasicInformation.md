[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / BridgedDeviceBasicInformation

# Namespace: BridgedDeviceBasicInformation

[exports/cluster](exports_cluster.md).BridgedDeviceBasicInformation

## Table of contents

### Enumerations

- [Color](../enums/exports_cluster.BridgedDeviceBasicInformation.Color.md)
- [ProductFinish](../enums/exports_cluster.BridgedDeviceBasicInformation.ProductFinish.md)

### Variables

- [Cluster](exports_cluster.BridgedDeviceBasicInformation.md#cluster)
- [TlvProductAppearanceStruct](exports_cluster.BridgedDeviceBasicInformation.md#tlvproductappearancestruct)
- [TlvReachableChangedEvent](exports_cluster.BridgedDeviceBasicInformation.md#tlvreachablechangedevent)
- [TlvStartUpEvent](exports_cluster.BridgedDeviceBasicInformation.md#tlvstartupevent)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), {}, { `leave`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `reachableChanged`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `shutDown`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `startUp`: [`OptionalEvent`](exports_cluster.md#optionalevent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }\>

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

MatterCoreSpecificationV1_1 § 9.13

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/BridgedDeviceBasicInformationCluster.d.ts:88

___

### TlvProductAppearanceStruct

• `Const` **TlvProductAppearanceStruct**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/BridgedDeviceBasicInformationCluster.d.ts:40

___

### TlvReachableChangedEvent

• `Const` **TlvReachableChangedEvent**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Body of the BridgedDeviceBasicInformation reachableChanged event

**`See`**

MatterCoreSpecificationV1_1 § 9.13.5.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/BridgedDeviceBasicInformationCluster.d.ts:57

___

### TlvStartUpEvent

• `Const` **TlvStartUpEvent**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Body of the BridgedDeviceBasicInformation startUp event

**`See`**

MatterCoreSpecificationV1_1 § 9.13.5

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/BridgedDeviceBasicInformationCluster.d.ts:49
