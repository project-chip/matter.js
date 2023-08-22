[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / OtaSoftwareUpdateRequestor

# Namespace: OtaSoftwareUpdateRequestor

[exports/cluster](exports_cluster.md).OtaSoftwareUpdateRequestor

## Table of contents

### Enumerations

- [AnnouncementReason](../enums/exports_cluster.OtaSoftwareUpdateRequestor.AnnouncementReason.md)
- [ChangeReason](../enums/exports_cluster.OtaSoftwareUpdateRequestor.ChangeReason.md)
- [UpdateState](../enums/exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md)

### Variables

- [Cluster](exports_cluster.OtaSoftwareUpdateRequestor.md#cluster)
- [TlvAnnounceOtaProviderRequest](exports_cluster.OtaSoftwareUpdateRequestor.md#tlvannounceotaproviderrequest)
- [TlvDownloadErrorEvent](exports_cluster.OtaSoftwareUpdateRequestor.md#tlvdownloaderrorevent)
- [TlvProviderLocationStruct](exports_cluster.OtaSoftwareUpdateRequestor.md#tlvproviderlocationstruct)
- [TlvStateTransitionEvent](exports_cluster.OtaSoftwareUpdateRequestor.md#tlvstatetransitionevent)
- [TlvVersionAppliedEvent](exports_cluster.OtaSoftwareUpdateRequestor.md#tlvversionappliedevent)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `announceOtaProvider`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, { `downloadError`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `stateTransition`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `versionApplied`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }\>

OTA Software Update Requestor

Provides an interface for downloading and applying OTA software updates

**`See`**

MatterCoreSpecificationV1_1 § 11.19.7

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:157

___

### TlvAnnounceOtaProviderRequest

• `Const` **TlvAnnounceOtaProviderRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the OtaSoftwareUpdateRequestor announceOtaProvider command

**`See`**

MatterCoreSpecificationV1_1 § 11.19.7.6.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:84

___

### TlvDownloadErrorEvent

• `Const` **TlvDownloadErrorEvent**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Body of the OtaSoftwareUpdateRequestor downloadError event

**`See`**

MatterCoreSpecificationV1_1 § 11.19.7.7.9

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:144

___

### TlvProviderLocationStruct

• `Const` **TlvProviderLocationStruct**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This structure encodes a fabric-scoped location of an OTA provider on a given fabric.

**`See`**

MatterCoreSpecificationV1_1 § 11.19.7.4.20

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:14

___

### TlvStateTransitionEvent

• `Const` **TlvStateTransitionEvent**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Body of the OtaSoftwareUpdateRequestor stateTransition event

**`See`**

MatterCoreSpecificationV1_1 § 11.19.7.7.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:124

___

### TlvVersionAppliedEvent

• `Const` **TlvVersionAppliedEvent**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Body of the OtaSoftwareUpdateRequestor versionApplied event

**`See`**

MatterCoreSpecificationV1_1 § 11.19.7.7.6

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:135
