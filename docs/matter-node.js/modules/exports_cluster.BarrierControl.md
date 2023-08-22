[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / BarrierControl

# Namespace: BarrierControl

[exports/cluster](exports_cluster.md).BarrierControl

## Table of contents

### Variables

- [Cluster](exports_cluster.BarrierControl.md#cluster)
- [TlvBarrierControlGoToPercentRequest](exports_cluster.BarrierControl.md#tlvbarriercontrolgotopercentrequest)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `barrierControlGoToPercent`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `barrierControlStop`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  }, {}\>

Barrier Control

This cluster provides control of a barrier (garage door).

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/BarrierControlCluster.d.ts:20

___

### TlvBarrierControlGoToPercentRequest

• `Const` **TlvBarrierControlGoToPercentRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the BarrierControl barrierControlGoToPercent command

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/BarrierControlCluster.d.ts:12
