[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / BarrierControl

# Namespace: BarrierControl

[exports/cluster](exports_cluster.md).BarrierControl

## Table of contents

### Interfaces

- [BarrierControlGoToPercentRequest](../interfaces/exports_cluster.BarrierControl.BarrierControlGoToPercentRequest.md)
- [Cluster](../interfaces/exports_cluster.BarrierControl.Cluster.md)

### Variables

- [Cluster](exports_cluster.BarrierControl.md#cluster)
- [ClusterInstance](exports_cluster.BarrierControl.md#clusterinstance)
- [Complete](exports_cluster.BarrierControl.md#complete)
- [TlvBarrierControlGoToPercentRequest](exports_cluster.BarrierControl.md#tlvbarriercontrolgotopercentrequest)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.BarrierControl.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BarrierControlCluster.d.ts:54

packages/matter.js/dist/esm/cluster/definitions/BarrierControlCluster.d.ts:56

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `barrierCapabilities`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `barrierCloseEvents`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `barrierClosePeriod`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `barrierCommandCloseEvents`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `barrierCommandOpenEvents`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `barrierMovingState`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `barrierOpenEvents`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `barrierOpenPeriod`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `barrierPosition`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `barrierSafetyStatus`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `barrierControlGoToPercent`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `barrierControlStop`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``259`` ; `name`: ``"BarrierControl"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.BarrierControl.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BarrierControlCluster.d.ts:26

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/exports_cluster.BarrierControl.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BarrierControlCluster.d.ts:57

___

### TlvBarrierControlGoToPercentRequest

• `Const` **TlvBarrierControlGoToPercentRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the BarrierControl barrierControlGoToPercent command

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BarrierControlCluster.d.ts:15
