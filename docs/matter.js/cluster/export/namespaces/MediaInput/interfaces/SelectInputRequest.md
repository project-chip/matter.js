[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [MediaInput](../README.md) / SelectInputRequest

# Interface: SelectInputRequest

Input to the MediaInput selectInput command

## See

MatterSpecification.v11.Cluster § 6.9.4.1

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvSelectInputRequest`](../README.md#tlvselectinputrequest)\>

## Properties

### index

> **index**: `number`

This shall indicate the index field of the InputInfoStruct from the InputList attribute in which to change
to.

#### See

MatterSpecification.v11.Cluster § 6.9.4.1.1

#### Inherited from

`TypeFromSchema.index`

#### Source

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:116](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L116)
