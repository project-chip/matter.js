[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / BarrierControl

# Namespace: BarrierControl

[cluster/export](cluster_export.md).BarrierControl

## Table of contents

### Variables

- [Cluster](cluster_export.BarrierControl.md#cluster)
- [TlvBarrierControlGoToPercentRequest](cluster_export.BarrierControl.md#tlvbarriercontrolgotopercentrequest)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `barrierCapabilities`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `barrierCloseEvents`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `barrierClosePeriod`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `barrierCommandCloseEvents`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `barrierCommandOpenEvents`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `barrierMovingState`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `barrierOpenEvents`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `barrierOpenPeriod`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `barrierPosition`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `barrierSafetyStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `barrierControlGoToPercent`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `percentOpen`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `barrierControlStop`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``259`` = 0x103; `name`: ``"BarrierControl"`` = "BarrierControl"; `revision`: ``1`` = 1 }\>

Barrier Control

This cluster provides control of a barrier (garage door).

#### Defined in

[packages/matter.js/src/cluster/definitions/BarrierControlCluster.ts:26](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/BarrierControlCluster.ts#L26)

___

### TlvBarrierControlGoToPercentRequest

• `Const` **TlvBarrierControlGoToPercentRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `percentOpen`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the BarrierControl barrierControlGoToPercent command

#### Defined in

[packages/matter.js/src/cluster/definitions/BarrierControlCluster.ts:19](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/BarrierControlCluster.ts#L19)
