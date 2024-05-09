[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / GeneralCommissioning

# Namespace: GeneralCommissioning

[exports/cluster](exports_cluster.md).GeneralCommissioning

## Table of contents

### Enumerations

- [CommissioningError](../enums/exports_cluster.GeneralCommissioning.CommissioningError.md)
- [RegulatoryLocationType](../enums/exports_cluster.GeneralCommissioning.RegulatoryLocationType.md)

### Interfaces

- [ArmFailSafeRequest](../interfaces/exports_cluster.GeneralCommissioning.ArmFailSafeRequest.md)
- [ArmFailSafeResponse](../interfaces/exports_cluster.GeneralCommissioning.ArmFailSafeResponse.md)
- [BasicCommissioningInfo](../interfaces/exports_cluster.GeneralCommissioning.BasicCommissioningInfo.md)
- [Cluster](../interfaces/exports_cluster.GeneralCommissioning.Cluster.md)
- [CommissioningCompleteResponse](../interfaces/exports_cluster.GeneralCommissioning.CommissioningCompleteResponse.md)
- [SetRegulatoryConfigRequest](../interfaces/exports_cluster.GeneralCommissioning.SetRegulatoryConfigRequest.md)
- [SetRegulatoryConfigResponse](../interfaces/exports_cluster.GeneralCommissioning.SetRegulatoryConfigResponse.md)

### Variables

- [Cluster](exports_cluster.GeneralCommissioning.md#cluster)
- [ClusterInstance](exports_cluster.GeneralCommissioning.md#clusterinstance)
- [Complete](exports_cluster.GeneralCommissioning.md#complete)
- [TlvArmFailSafeRequest](exports_cluster.GeneralCommissioning.md#tlvarmfailsaferequest)
- [TlvArmFailSafeResponse](exports_cluster.GeneralCommissioning.md#tlvarmfailsaferesponse)
- [TlvBasicCommissioningInfo](exports_cluster.GeneralCommissioning.md#tlvbasiccommissioninginfo)
- [TlvCommissioningCompleteResponse](exports_cluster.GeneralCommissioning.md#tlvcommissioningcompleteresponse)
- [TlvSetRegulatoryConfigRequest](exports_cluster.GeneralCommissioning.md#tlvsetregulatoryconfigrequest)
- [TlvSetRegulatoryConfigResponse](exports_cluster.GeneralCommissioning.md#tlvsetregulatoryconfigresponse)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.GeneralCommissioning.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:542

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:544

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `basicCommissioningInfo`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `breadcrumb`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| `bigint`, `any`\> ; `locationCapability`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`RegulatoryLocationType`](../enums/exports_cluster.GeneralCommissioning.RegulatoryLocationType.md), `any`\> ; `regulatoryConfig`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`RegulatoryLocationType`](../enums/exports_cluster.GeneralCommissioning.RegulatoryLocationType.md), `any`\> ; `supportsConcurrentConnection`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`boolean`, `any`\>  } ; `commands`: \{ `armFailSafe`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `commissioningComplete`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `setRegulatoryConfig`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `id`: ``48`` ; `name`: ``"GeneralCommissioning"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.GeneralCommissioning.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:198

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/exports_cluster.GeneralCommissioning.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:545

___

### TlvArmFailSafeRequest

• `Const` **TlvArmFailSafeRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the GeneralCommissioning armFailSafe command

**`See`**

MatterSpecification.v11.Core § 11.9.6.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:71

___

### TlvArmFailSafeResponse

• `Const` **TlvArmFailSafeResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v11.Core § 11.9.6.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:114

___

### TlvBasicCommissioningInfo

• `Const` **TlvBasicCommissioningInfo**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This structure provides some constant values that may be of use to all commissioners.

**`See`**

MatterSpecification.v11.Core § 11.9.4.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:17

___

### TlvCommissioningCompleteResponse

• `Const` **TlvCommissioningCompleteResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This field shall contain the result of the operation, based on the behavior specified in the functional
description of the CommissioningComplete command.

See Section 11.9.6.1, “Common fields in General Commissioning cluster responses”.

**`See`**

MatterSpecification.v11.Core § 11.9.6.7

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:181

___

### TlvSetRegulatoryConfigRequest

• `Const` **TlvSetRegulatoryConfigRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the GeneralCommissioning setRegulatoryConfig command

**`See`**

MatterSpecification.v11.Core § 11.9.6.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:139

___

### TlvSetRegulatoryConfigResponse

• `Const` **TlvSetRegulatoryConfigResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This field shall contain the result of the operation, based on the behavior specified in the functional
description of the SetRegulatoryConfig command.

See Section 11.9.6.1, “Common fields in General Commissioning cluster responses”.

**`See`**

MatterSpecification.v11.Core § 11.9.6.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:159
