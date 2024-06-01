[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [MediaInput](../README.md) / SelectInputRequest

# Interface: SelectInputRequest

Input to the MediaInput selectInput command

## See

MatterSpecification.v11.Cluster § 6.9.4.1

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvSelectInputRequest`](../README.md#tlvselectinputrequest)\>

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

packages/matter.js/dist/esm/cluster/definitions/MediaInputCluster.d.ts:103
