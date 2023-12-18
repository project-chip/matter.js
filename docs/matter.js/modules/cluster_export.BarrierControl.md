[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / BarrierControl

# Namespace: BarrierControl

[cluster/export](cluster_export.md).BarrierControl

## Table of contents

### Variables

- [Cluster](cluster_export.BarrierControl.md#cluster)
- [TlvBarrierControlGoToPercentRequest](cluster_export.BarrierControl.md#tlvbarriercontrolgotopercentrequest)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `barrierCapabilities`: [`Attribute`](cluster_export.md#attribute)\<`number`, `any`\> ; `barrierCloseEvents`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<`number`, `any`\> ; `barrierClosePeriod`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<`number`, `any`\> ; `barrierCommandCloseEvents`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<`number`, `any`\> ; `barrierCommandOpenEvents`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<`number`, `any`\> ; `barrierMovingState`: [`Attribute`](cluster_export.md#attribute)\<`number`, `any`\> ; `barrierOpenEvents`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<`number`, `any`\> ; `barrierOpenPeriod`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<`number`, `any`\> ; `barrierPosition`: [`Attribute`](cluster_export.md#attribute)\<`number`, `any`\> ; `barrierSafetyStatus`: [`Attribute`](cluster_export.md#attribute)\<`number`, `any`\>  } ; `commands`: \{ `barrierControlGoToPercent`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `percentOpen`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `barrierControlStop`: [`Command`](cluster_export.md#command)\<`void`, `void`, `any`\>  } ; `id`: ``259`` = 0x103; `name`: ``"BarrierControl"`` = "BarrierControl"; `revision`: ``1`` = 1 }\>

Barrier Control

This cluster provides control of a barrier (garage door).

#### Defined in

[packages/matter.js/src/cluster/definitions/BarrierControlCluster.ts:26](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/BarrierControlCluster.ts#L26)

___

### TlvBarrierControlGoToPercentRequest

• `Const` **TlvBarrierControlGoToPercentRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `percentOpen`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the BarrierControl barrierControlGoToPercent command

#### Defined in

[packages/matter.js/src/cluster/definitions/BarrierControlCluster.ts:19](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/BarrierControlCluster.ts#L19)
