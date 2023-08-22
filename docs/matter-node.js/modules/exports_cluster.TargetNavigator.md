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

• `Const` **Cluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `navigateTarget`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }, {}\>

Target Navigator

This cluster provides an interface for UX navigation within a set of targets on a device or endpoint.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.11

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/TargetNavigatorCluster.d.ts:91

___

### TlvNavigateTargetRequest

• `Const` **TlvNavigateTargetRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the TargetNavigator navigateTarget command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.11.4.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/TargetNavigatorCluster.d.ts:33

___

### TlvNavigateTargetResponse

• `Const` **TlvNavigateTargetResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This command shall be generated in response to NavigateTarget command.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.11.4.2

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/TargetNavigatorCluster.d.ts:70

___

### TlvTargetInfoStruct

• `Const` **TlvTargetInfoStruct**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This indicates an object describing the navigable target.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.11.5.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/TargetNavigatorCluster.d.ts:14
