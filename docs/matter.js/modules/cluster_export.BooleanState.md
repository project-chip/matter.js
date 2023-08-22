[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / BooleanState

# Namespace: BooleanState

[cluster/export](cluster_export.md).BooleanState

## Table of contents

### Variables

- [Cluster](cluster_export.BooleanState.md#cluster)
- [TlvStateChangeEvent](cluster_export.BooleanState.md#tlvstatechangeevent)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](cluster_export.md#cluster)<[`BitSchema`](schema_export.md#bitschema), [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<[`BitSchema`](schema_export.md#bitschema)\>, [`Merge`](util_export.md#merge)<{ `stateValue`: [`Attribute`](cluster_export.md#attribute)<`boolean`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<[`BitSchema`](schema_export.md#bitschema)\>\>, {}, { `stateChange`: [`OptionalEvent`](cluster_export.md#optionalevent)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `stateValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\>  }\>, `any`\>  }\>

Boolean State

This cluster provides an interface to a boolean state called StateValue.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.7

#### Defined in

[packages/matter.js/src/cluster/definitions/BooleanStateCluster.ts:29](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/BooleanStateCluster.ts#L29)

___

### TlvStateChangeEvent

• `Const` **TlvStateChangeEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `stateValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\>  }\>

Body of the BooleanState stateChange event

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.7.5.1

#### Defined in

[packages/matter.js/src/cluster/definitions/BooleanStateCluster.ts:20](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/BooleanStateCluster.ts#L20)
