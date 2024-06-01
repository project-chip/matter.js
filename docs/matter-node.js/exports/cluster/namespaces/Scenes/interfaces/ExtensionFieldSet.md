[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [Scenes](../README.md) / ExtensionFieldSet

# Interface: ExtensionFieldSet

This data type indicates for a given cluster a set of attributes and their values. Only attributes which have
the "S" designation in the Quality column of the cluster specification shall be used in the AttributeValueList
field.

## See

MatterSpecification.v11.Cluster § 1.4.6.2

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvExtensionFieldSet`](../README.md#tlvextensionfieldset)\>

## Properties

### attributeValueList

> **attributeValueList**: [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>[]

#### Inherited from

`TypeFromSchema.attributeValueList`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:65

***

### clusterId

> **clusterId**: [`ClusterId`](../../../../datatype/README.md#clusterid)

#### Inherited from

`TypeFromSchema.clusterId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:64
