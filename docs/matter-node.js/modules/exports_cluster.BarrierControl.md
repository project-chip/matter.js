[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / BarrierControl

# Namespace: BarrierControl

[exports/cluster](exports_cluster.md).BarrierControl

## Table of contents

### Variables

- [Cluster](exports_cluster.BarrierControl.md#cluster)
- [TlvBarrierControlGoToPercentRequest](exports_cluster.BarrierControl.md#tlvbarriercontrolgotopercentrequest)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `barrierCapabilities`: [`Attribute`](exports_cluster.md#attribute)\<`number`, `any`\> ; `barrierCloseEvents`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<`number`, `any`\> ; `barrierClosePeriod`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<`number`, `any`\> ; `barrierCommandCloseEvents`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<`number`, `any`\> ; `barrierCommandOpenEvents`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<`number`, `any`\> ; `barrierMovingState`: [`Attribute`](exports_cluster.md#attribute)\<`number`, `any`\> ; `barrierOpenEvents`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<`number`, `any`\> ; `barrierOpenPeriod`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<`number`, `any`\> ; `barrierPosition`: [`Attribute`](exports_cluster.md#attribute)\<`number`, `any`\> ; `barrierSafetyStatus`: [`Attribute`](exports_cluster.md#attribute)\<`number`, `any`\>  } ; `commands`: \{ `barrierControlGoToPercent`: [`Command`](exports_cluster.md#command)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `barrierControlStop`: [`Command`](exports_cluster.md#command)\<`void`, `void`, `any`\>  } ; `id`: ``259`` ; `name`: ``"BarrierControl"`` ; `revision`: ``1``  }\>

Barrier Control

This cluster provides control of a barrier (garage door).

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BarrierControlCluster.d.ts:21

___

### TlvBarrierControlGoToPercentRequest

• `Const` **TlvBarrierControlGoToPercentRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the BarrierControl barrierControlGoToPercent command

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BarrierControlCluster.d.ts:13
