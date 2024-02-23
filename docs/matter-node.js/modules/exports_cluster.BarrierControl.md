[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / BarrierControl

# Namespace: BarrierControl

[exports/cluster](exports_cluster.md).BarrierControl

## Table of contents

### Variables

- [Cluster](exports_cluster.BarrierControl.md#cluster)
- [TlvBarrierControlGoToPercentRequest](exports_cluster.BarrierControl.md#tlvbarriercontrolgotopercentrequest)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `barrierCapabilities`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `barrierCloseEvents`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `barrierClosePeriod`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `barrierCommandCloseEvents`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `barrierCommandOpenEvents`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `barrierMovingState`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `barrierOpenEvents`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `barrierOpenPeriod`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `barrierPosition`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `barrierSafetyStatus`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `barrierControlGoToPercent`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `barrierControlStop`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``259`` ; `name`: ``"BarrierControl"`` ; `revision`: ``1``  }\>

Barrier Control

This cluster provides control of a barrier (garage door).

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BarrierControlCluster.d.ts:21

___

### TlvBarrierControlGoToPercentRequest

• `Const` **TlvBarrierControlGoToPercentRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the BarrierControl barrierControlGoToPercent command

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BarrierControlCluster.d.ts:13
