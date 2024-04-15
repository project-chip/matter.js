[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Scenes](../modules/cluster_export.Scenes.md) / ExtensionFieldSet

# Interface: ExtensionFieldSet

[cluster/export](../modules/cluster_export.md).[Scenes](../modules/cluster_export.Scenes.md).ExtensionFieldSet

This data type indicates for a given cluster a set of attributes and their values. Only attributes which have
the "S" designation in the Quality column of the cluster specification shall be used in the AttributeValueList
field.

**`See`**

MatterSpecification.v11.Cluster § 1.4.6.2

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvExtensionFieldSet`](../modules/cluster_export.Scenes.md#tlvextensionfieldset)\>

  ↳ **`ExtensionFieldSet`**

## Table of contents

### Properties

- [attributeValueList](cluster_export.Scenes.ExtensionFieldSet.md#attributevaluelist)
- [clusterId](cluster_export.Scenes.ExtensionFieldSet.md#clusterid)

## Properties

### attributeValueList

• **attributeValueList**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)\> ; `attributeValue`: [`FieldType`](tlv_export.FieldType.md)\<[`TlvStream`](../modules/tlv_export.md#tlvstream)\>  }\>[]

#### Inherited from

TypeFromSchema.attributeValueList

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L89)

___

### clusterId

• **clusterId**: [`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>

#### Inherited from

TypeFromSchema.clusterId

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L88)
