[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [Scenes](../README.md) / AttributeValuePair

# Interface: AttributeValuePair

This data type indicates a combination of an identifier and the value of an attribute.

## See

MatterSpecification.v11.Cluster § 1.4.6.1

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvAttributeValuePair`](../README.md#tlvattributevaluepair)\>

## Properties

### attributeId?

> `optional` **attributeId**: [`AttributeId`](../../../../../datatype/export/README.md#attributeid)

This field shall be present or not present, for all instances in the Scenes cluster. If this field is not
present, then the data type of AttributeValue shall be determined by the order and data type defined in the
cluster specification. Otherwise the data type of AttributeValue shall be the data type of the attribute
indicated by AttributeID.

#### See

MatterSpecification.v11.Cluster § 1.4.6.1.1

#### Inherited from

`TypeFromSchema.attributeId`

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:62](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L62)

***

### attributeValue

> **attributeValue**: [`TlvStream`](../../../../../tlv/export/README.md#tlvstream)

This is the attribute value as part of an extension field set. See AttributeID to determine the data type
for this field.

#### See

MatterSpecification.v11.Cluster § 1.4.6.1.2

#### Inherited from

`TypeFromSchema.attributeValue`

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:70](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L70)
