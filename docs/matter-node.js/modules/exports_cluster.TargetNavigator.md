[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / TargetNavigator

# Namespace: TargetNavigator

[exports/cluster](exports_cluster.md).TargetNavigator

## Table of contents

### Enumerations

- [Status](../enums/exports_cluster.TargetNavigator.Status.md)

### Variables

- [Cluster](exports_cluster.TargetNavigator.md#cluster)
- [TlvNavigateTargetRequest](exports_cluster.TargetNavigator.md#tlvnavigatetargetrequest)
- [TlvNavigateTargetResponse](exports_cluster.TargetNavigator.md#tlvnavigatetargetresponse)
- [TlvTargetInfoStruct](exports_cluster.TargetNavigator.md#tlvtargetinfostruct)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `currentTarget`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| ``null``, `any`\> ; `targetList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\>  } ; `commands`: { `navigateTarget`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `id`: ``1285`` ; `name`: ``"TargetNavigator"`` ; `revision`: ``1``  }\>

Target Navigator

This cluster provides an interface for UX navigation within a set of targets on a device or endpoint.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.11

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TargetNavigatorCluster.d.ts:92

___

### TlvNavigateTargetRequest

• `Const` **TlvNavigateTargetRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the TargetNavigator navigateTarget command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.11.4.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TargetNavigatorCluster.d.ts:34

___

### TlvNavigateTargetResponse

• `Const` **TlvNavigateTargetResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This command shall be generated in response to NavigateTarget command.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.11.4.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TargetNavigatorCluster.d.ts:71

___

### TlvTargetInfoStruct

• `Const` **TlvTargetInfoStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This indicates an object describing the navigable target.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.11.5.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/TargetNavigatorCluster.d.ts:15
