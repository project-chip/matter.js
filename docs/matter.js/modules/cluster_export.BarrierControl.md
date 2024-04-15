[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / BarrierControl

# Namespace: BarrierControl

[cluster/export](cluster_export.md).BarrierControl

## Table of contents

### Interfaces

- [BarrierControlGoToPercentRequest](../interfaces/cluster_export.BarrierControl.BarrierControlGoToPercentRequest.md)
- [Cluster](../interfaces/cluster_export.BarrierControl.Cluster.md)

### Variables

- [Cluster](cluster_export.BarrierControl.md#cluster)
- [ClusterInstance](cluster_export.BarrierControl.md#clusterinstance)
- [Complete](cluster_export.BarrierControl.md#complete)
- [TlvBarrierControlGoToPercentRequest](cluster_export.BarrierControl.md#tlvbarriercontrolgotopercentrequest)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.BarrierControl.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/BarrierControlCluster.ts:61](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BarrierControlCluster.ts#L61)

[packages/matter.js/src/cluster/definitions/BarrierControlCluster.ts:63](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BarrierControlCluster.ts#L63)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `barrierCapabilities`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `barrierCloseEvents`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `barrierClosePeriod`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `barrierCommandCloseEvents`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `barrierCommandOpenEvents`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `barrierMovingState`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `barrierOpenEvents`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `barrierOpenPeriod`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `barrierPosition`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `barrierSafetyStatus`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `barrierControlGoToPercent`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `percentOpen`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `barrierControlStop`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``259`` = 0x103; `name`: ``"BarrierControl"`` = "BarrierControl"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.BarrierControl.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/BarrierControlCluster.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BarrierControlCluster.ts#L32)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.BarrierControl.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/BarrierControlCluster.ts:64](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BarrierControlCluster.ts#L64)

___

### TlvBarrierControlGoToPercentRequest

• `Const` **TlvBarrierControlGoToPercentRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `percentOpen`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the BarrierControl barrierControlGoToPercent command

#### Defined in

[packages/matter.js/src/cluster/definitions/BarrierControlCluster.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BarrierControlCluster.ts#L22)
