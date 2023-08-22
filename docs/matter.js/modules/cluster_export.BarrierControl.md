[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / BarrierControl

# Namespace: BarrierControl

[cluster/export](cluster_export.md).BarrierControl

## Table of contents

### Variables

- [Cluster](cluster_export.BarrierControl.md#cluster)
- [TlvBarrierControlGoToPercentRequest](cluster_export.BarrierControl.md#tlvbarriercontrolgotopercentrequest)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](cluster_export.md#cluster)<[`BitSchema`](schema_export.md#bitschema), [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<[`BitSchema`](schema_export.md#bitschema)\>, [`Merge`](util_export.md#merge)<{ `barrierCapabilities`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `barrierCloseEvents`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `barrierClosePeriod`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `barrierCommandCloseEvents`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `barrierCommandOpenEvents`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `barrierMovingState`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `barrierOpenEvents`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `barrierOpenPeriod`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `barrierPosition`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `barrierSafetyStatus`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<[`BitSchema`](schema_export.md#bitschema)\>\>, { `barrierControlGoToPercent`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `percentOpen`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `barrierControlStop`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>  }, {}\>

Barrier Control

This cluster provides control of a barrier (garage door).

#### Defined in

[packages/matter.js/src/cluster/definitions/BarrierControlCluster.ts:31](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/BarrierControlCluster.ts#L31)

___

### TlvBarrierControlGoToPercentRequest

• `Const` **TlvBarrierControlGoToPercentRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `percentOpen`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the BarrierControl barrierControlGoToPercent command

#### Defined in

[packages/matter.js/src/cluster/definitions/BarrierControlCluster.ts:24](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/BarrierControlCluster.ts#L24)
