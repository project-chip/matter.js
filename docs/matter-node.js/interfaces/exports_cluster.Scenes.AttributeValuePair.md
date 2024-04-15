[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Scenes](../modules/exports_cluster.Scenes.md) / AttributeValuePair

# Interface: AttributeValuePair

[exports/cluster](../modules/exports_cluster.md).[Scenes](../modules/exports_cluster.Scenes.md).AttributeValuePair

This data type indicates a combination of an identifier and the value of an attribute.

**`See`**

MatterSpecification.v11.Cluster § 1.4.6.1

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvAttributeValuePair`](../modules/exports_cluster.Scenes.md#tlvattributevaluepair)\>

  ↳ **`AttributeValuePair`**

## Table of contents

### Properties

- [attributeId](exports_cluster.Scenes.AttributeValuePair.md#attributeid)
- [attributeValue](exports_cluster.Scenes.AttributeValuePair.md#attributevalue)

## Properties

### attributeId

• `Optional` **attributeId**: [`AttributeId`](../modules/exports_datatype.md#attributeid)

This field shall be present or not present, for all instances in the Scenes cluster. If this field is not
present, then the data type of AttributeValue shall be determined by the order and data type defined in the
cluster specification. Otherwise the data type of AttributeValue shall be the data type of the attribute
indicated by AttributeID.

**`See`**

MatterSpecification.v11.Cluster § 1.4.6.1.1

#### Inherited from

TypeFromSchema.attributeId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:40

___

### attributeValue

• **attributeValue**: [`TlvStream`](../modules/exports_tlv.md#tlvstream)

This is the attribute value as part of an extension field set. See AttributeID to determine the data type
for this field.

**`See`**

MatterSpecification.v11.Cluster § 1.4.6.1.2

#### Inherited from

TypeFromSchema.attributeValue

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:47
