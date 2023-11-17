[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / BooleanState

# Namespace: BooleanState

[cluster/export](cluster_export.md).BooleanState

## Table of contents

### Variables

- [Cluster](cluster_export.BooleanState.md#cluster)
- [TlvStateChangeEvent](cluster_export.BooleanState.md#tlvstatechangeevent)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `stateValue`: [`Attribute`](cluster_export.md#attribute)<`boolean`, `any`\>  } ; `events`: { `stateChange`: [`OptionalEvent`](cluster_export.md#optionalevent)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `stateValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\>  }\>, `any`\>  } ; `id`: ``69`` = 0x45; `name`: ``"BooleanState"`` = "BooleanState"; `revision`: ``1`` = 1 }\>

Boolean State

This cluster provides an interface to a boolean state called StateValue.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.7

#### Defined in

[packages/matter.js/src/cluster/definitions/BooleanStateCluster.ts:30](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/definitions/BooleanStateCluster.ts#L30)

___

### TlvStateChangeEvent

• `Const` **TlvStateChangeEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `stateValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\>  }\>

Body of the BooleanState stateChange event

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.7.5.1

#### Defined in

[packages/matter.js/src/cluster/definitions/BooleanStateCluster.ts:21](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/definitions/BooleanStateCluster.ts#L21)
