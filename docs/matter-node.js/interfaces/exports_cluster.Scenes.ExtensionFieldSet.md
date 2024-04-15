[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Scenes](../modules/exports_cluster.Scenes.md) / ExtensionFieldSet

# Interface: ExtensionFieldSet

[exports/cluster](../modules/exports_cluster.md).[Scenes](../modules/exports_cluster.Scenes.md).ExtensionFieldSet

This data type indicates for a given cluster a set of attributes and their values. Only attributes which have
the "S" designation in the Quality column of the cluster specification shall be used in the AttributeValueList
field.

**`See`**

MatterSpecification.v11.Cluster § 1.4.6.2

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvExtensionFieldSet`](../modules/exports_cluster.Scenes.md#tlvextensionfieldset)\>

  ↳ **`ExtensionFieldSet`**

## Table of contents

### Properties

- [attributeValueList](exports_cluster.Scenes.ExtensionFieldSet.md#attributevaluelist)
- [clusterId](exports_cluster.Scenes.ExtensionFieldSet.md#clusterid)

## Properties

### attributeValueList

• **attributeValueList**: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)\> ; `attributeValue`: [`FieldType`](exports_tlv.FieldType.md)\<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\>  }\>[]

#### Inherited from

TypeFromSchema.attributeValueList

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:65

___

### clusterId

• **clusterId**: [`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>

#### Inherited from

TypeFromSchema.clusterId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:64
