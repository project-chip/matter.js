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

• `Const` **Cluster**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `basicCommissioningInfo`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `breadcrumb`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| `bigint`, `any`\> ; `locationCapability`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`RegulatoryLocationType`](../enums/exports_cluster.GeneralCommissioning.RegulatoryLocationType.md), `any`\> ; `regulatoryConfig`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`RegulatoryLocationType`](../enums/exports_cluster.GeneralCommissioning.RegulatoryLocationType.md), `any`\> ; `supportsConcurrentConnection`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`boolean`, `any`\>  } ; `commands`: \{ `armFailSafe`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `commissioningComplete`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `setRegulatoryConfig`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `id`: ``48`` ; `name`: ``"GeneralCommissioning"`` ; `revision`: ``1``  }\>

General Commissioning

This cluster is used to manage basic commissioning lifecycle.

This cluster also represents responsibilities related to commissioning that don’t well fit other commissioning
clusters, like Section 11.8, “Network Commissioning Cluster”. It also hosts functionalities

those other clusters may depend on.

**`See`**

MatterCoreSpecificationV1_1 § 11.9

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:159

___

### TlvArmFailSafeRequest

• `Const` **TlvArmFailSafeRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the GeneralCommissioning armFailSafe command

**`See`**

MatterCoreSpecificationV1_1 § 11.9.6.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:62

___

### TlvArmFailSafeResponse

• `Const` **TlvArmFailSafeResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_1 § 11.9.6.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:98

___

### TlvBasicCommissioningInfo

• `Const` **TlvBasicCommissioningInfo**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This structure provides some constant values that may be of use to all commissioners.

**`See`**

MatterCoreSpecificationV1_1 § 11.9.4.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:15

___

### TlvCommissioningCompleteResponse

• `Const` **TlvCommissioningCompleteResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This field shall contain the result of the operation, based on the behavior specified in the functional
description of the CommissioningComplete command.

See Section 11.9.6.1, “Common fields in General Commissioning cluster responses”.

**`See`**

MatterCoreSpecificationV1_1 § 11.9.6.7

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:143

___

### TlvSetRegulatoryConfigRequest

• `Const` **TlvSetRegulatoryConfigRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the GeneralCommissioning setRegulatoryConfig command

**`See`**

MatterCoreSpecificationV1_1 § 11.9.6.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:118

___

### TlvSetRegulatoryConfigResponse

• `Const` **TlvSetRegulatoryConfigResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This field shall contain the result of the operation, based on the behavior specified in the functional
description of the SetRegulatoryConfig command.

See Section 11.9.6.1, “Common fields in General Commissioning cluster responses”.

**`See`**

MatterCoreSpecificationV1_1 § 11.9.6.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:131
