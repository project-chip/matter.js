[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [Scenes](../README.md) / ExtensionFieldSet

# Interface: ExtensionFieldSet

This data type indicates for a given cluster a set of attributes and their values. Only attributes which have
the "S" designation in the Quality column of the cluster specification shall be used in the AttributeValueList
field.

## See

MatterSpecification.v11.Cluster § 1.4.6.2

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvExtensionFieldSet`](../README.md#tlvextensionfieldset)\>

## Properties

### attributeValueList

> **attributeValueList**: [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

#### Inherited from

`TypeFromSchema.attributeValueList`

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L89)

***

### clusterId

> **clusterId**: [`ClusterId`](../../../../../datatype/export/README.md#clusterid)

#### Inherited from

`TypeFromSchema.clusterId`

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:88](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L88)
