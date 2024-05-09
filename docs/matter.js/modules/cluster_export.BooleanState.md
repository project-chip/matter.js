[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / BooleanState

# Namespace: BooleanState

[cluster/export](cluster_export.md).BooleanState

## Table of contents

### Interfaces

- [Cluster](../interfaces/cluster_export.BooleanState.Cluster.md)
- [StateChangeEvent](../interfaces/cluster_export.BooleanState.StateChangeEvent.md)

### Variables

- [Cluster](cluster_export.BooleanState.md#cluster)
- [ClusterInstance](cluster_export.BooleanState.md#clusterinstance)
- [Complete](cluster_export.BooleanState.md#complete)
- [TlvStateChangeEvent](cluster_export.BooleanState.md#tlvstatechangeevent)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.BooleanState.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/BooleanStateCluster.ts:68](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BooleanStateCluster.ts#L68)

[packages/matter.js/src/cluster/definitions/BooleanStateCluster.ts:70](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BooleanStateCluster.ts#L70)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `stateValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `stateChange`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `stateValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\>  }\>, `any`\>  } ; `id`: ``69`` = 0x45; `name`: ``"BooleanState"`` = "BooleanState"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.BooleanState.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/BooleanStateCluster.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BooleanStateCluster.ts#L35)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.BooleanState.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/BooleanStateCluster.ts:71](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BooleanStateCluster.ts#L71)

___

### TlvStateChangeEvent

• `Const` **TlvStateChangeEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `stateValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\>  }\>

Body of the BooleanState stateChange event

**`See`**

MatterSpecification.v11.Cluster § 1.7.5.1

#### Defined in

[packages/matter.js/src/cluster/definitions/BooleanStateCluster.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BooleanStateCluster.ts#L23)
