[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / GeneralCommissioning

# Namespace: GeneralCommissioning

[exports/cluster](exports_cluster.md).GeneralCommissioning

## Table of contents

### Enumerations

- [CommissioningError](../enums/exports_cluster.GeneralCommissioning.CommissioningError.md)
- [RegulatoryLocationType](../enums/exports_cluster.GeneralCommissioning.RegulatoryLocationType.md)

### Variables

- [Cluster](exports_cluster.GeneralCommissioning.md#cluster)
- [TlvArmFailSafeRequest](exports_cluster.GeneralCommissioning.md#tlvarmfailsaferequest)
- [TlvArmFailSafeResponse](exports_cluster.GeneralCommissioning.md#tlvarmfailsaferesponse)
- [TlvBasicCommissioningInfo](exports_cluster.GeneralCommissioning.md#tlvbasiccommissioninginfo)
- [TlvCommissioningCompleteResponse](exports_cluster.GeneralCommissioning.md#tlvcommissioningcompleteresponse)
- [TlvSetRegulatoryConfigRequest](exports_cluster.GeneralCommissioning.md#tlvsetregulatoryconfigrequest)
- [TlvSetRegulatoryConfigResponse](exports_cluster.GeneralCommissioning.md#tlvsetregulatoryconfigresponse)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `armFailSafe`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `commissioningComplete`: [`Command`](exports_cluster.md#command)<`void`, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `setRegulatoryConfig`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }, {}\>

General Commissioning

This cluster is used to manage basic commissioning lifecycle.

This cluster also represents responsibilities related to commissioning that don’t well fit other commissioning
clusters, like Section 11.8, “Network Commissioning Cluster”. It also hosts functionalities

those other clusters may depend on.

**`See`**

MatterCoreSpecificationV1_1 § 11.9

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GeneralCommissioningCluster.d.ts:158

___

### TlvArmFailSafeRequest

• `Const` **TlvArmFailSafeRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the GeneralCommissioning armFailSafe command

**`See`**

MatterCoreSpecificationV1_1 § 11.9.6.2

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GeneralCommissioningCluster.d.ts:61

___

### TlvArmFailSafeResponse

• `Const` **TlvArmFailSafeResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_1 § 11.9.6.3

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GeneralCommissioningCluster.d.ts:97

___

### TlvBasicCommissioningInfo

• `Const` **TlvBasicCommissioningInfo**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This structure provides some constant values that may be of use to all commissioners.

**`See`**

MatterCoreSpecificationV1_1 § 11.9.4.3

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GeneralCommissioningCluster.d.ts:14

___

### TlvCommissioningCompleteResponse

• `Const` **TlvCommissioningCompleteResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This field shall contain the result of the operation, based on the behavior specified in the functional
description of the CommissioningComplete command.

See Section 11.9.6.1, “Common fields in General Commissioning cluster responses”.

**`See`**

MatterCoreSpecificationV1_1 § 11.9.6.7

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GeneralCommissioningCluster.d.ts:142

___

### TlvSetRegulatoryConfigRequest

• `Const` **TlvSetRegulatoryConfigRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the GeneralCommissioning setRegulatoryConfig command

**`See`**

MatterCoreSpecificationV1_1 § 11.9.6.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GeneralCommissioningCluster.d.ts:117

___

### TlvSetRegulatoryConfigResponse

• `Const` **TlvSetRegulatoryConfigResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This field shall contain the result of the operation, based on the behavior specified in the functional
description of the SetRegulatoryConfig command.

See Section 11.9.6.1, “Common fields in General Commissioning cluster responses”.

**`See`**

MatterCoreSpecificationV1_1 § 11.9.6.5

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GeneralCommissioningCluster.d.ts:130
