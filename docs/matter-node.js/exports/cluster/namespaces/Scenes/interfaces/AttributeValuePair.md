[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [Scenes](../README.md) / AttributeValuePair

# Interface: AttributeValuePair

This data type indicates a combination of an identifier and the value of an attribute.

## See

MatterSpecification.v11.Cluster § 1.4.6.1

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvAttributeValuePair`](../README.md#tlvattributevaluepair)\>

## Properties

### attributeId?

> `optional` **attributeId**: [`AttributeId`](../../../../datatype/README.md#attributeid)

This field shall be present or not present, for all instances in the Scenes cluster. If this field is not
present, then the data type of AttributeValue shall be determined by the order and data type defined in the
cluster specification. Otherwise the data type of AttributeValue shall be the data type of the attribute
indicated by AttributeID.

#### See

MatterSpecification.v11.Cluster § 1.4.6.1.1

#### Inherited from

`TypeFromSchema.attributeId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:40

***

### attributeValue

> **attributeValue**: [`TlvStream`](../../../../tlv/README.md#tlvstream)

This is the attribute value as part of an extension field set. See AttributeID to determine the data type
for this field.

#### See

MatterSpecification.v11.Cluster § 1.4.6.1.2

#### Inherited from

`TypeFromSchema.attributeValue`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:47
