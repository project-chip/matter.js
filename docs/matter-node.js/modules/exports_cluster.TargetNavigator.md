[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / TargetNavigator

# Namespace: TargetNavigator

[exports/cluster](exports_cluster.md).TargetNavigator

## Table of contents

### Enumerations

- [Status](../enums/exports_cluster.TargetNavigator.Status.md)

### Interfaces

- [Cluster](../interfaces/exports_cluster.TargetNavigator.Cluster.md)
- [NavigateTargetRequest](../interfaces/exports_cluster.TargetNavigator.NavigateTargetRequest.md)
- [NavigateTargetResponse](../interfaces/exports_cluster.TargetNavigator.NavigateTargetResponse.md)
- [TargetInfoStruct](../interfaces/exports_cluster.TargetNavigator.TargetInfoStruct.md)

### Variables

- [Cluster](exports_cluster.TargetNavigator.md#cluster)
- [ClusterInstance](exports_cluster.TargetNavigator.md#clusterinstance)
- [Complete](exports_cluster.TargetNavigator.md#complete)
- [TlvNavigateTargetRequest](exports_cluster.TargetNavigator.md#tlvnavigatetargetrequest)
- [TlvNavigateTargetResponse](exports_cluster.TargetNavigator.md#tlvnavigatetargetresponse)
- [TlvTargetInfoStruct](exports_cluster.TargetNavigator.md#tlvtargetinfostruct)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.TargetNavigator.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TargetNavigatorCluster.d.ts:192

packages/matter.js/dist/esm/cluster/definitions/TargetNavigatorCluster.d.ts:194

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `currentTarget`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `targetList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\>  } ; `commands`: \{ `navigateTarget`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `id`: ``1285`` ; `name`: ``"TargetNavigator"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.TargetNavigator.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TargetNavigatorCluster.d.ts:111

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/exports_cluster.TargetNavigator.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TargetNavigatorCluster.d.ts:195

___

### TlvNavigateTargetRequest

• `Const` **TlvNavigateTargetRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the TargetNavigator navigateTarget command

**`See`**

MatterSpecification.v11.Cluster § 6.11.4.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TargetNavigatorCluster.d.ts:43

___

### TlvNavigateTargetResponse

• `Const` **TlvNavigateTargetResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This command shall be generated in response to NavigateTarget command.

**`See`**

MatterSpecification.v11.Cluster § 6.11.4.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TargetNavigatorCluster.d.ts:87

___

### TlvTargetInfoStruct

• `Const` **TlvTargetInfoStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This indicates an object describing the navigable target.

**`See`**

MatterSpecification.v11.Cluster § 6.11.5.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TargetNavigatorCluster.d.ts:17
