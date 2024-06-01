[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [ContentLauncher](../README.md) / ContentSearchStruct

# Interface: ContentSearchStruct

This object defines inputs to a search for content for display or playback.

## See

MatterSpecification.v11.Cluster § 6.7.5.2

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvContentSearchStruct`](../README.md#tlvcontentsearchstruct)\>

## Properties

### parameterList

> **parameterList**: [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>[]

This shall indicate the list of parameters comprising the search. If multiple parameters are provided, the
search parameters shall be joined with 'AND' logic. e.g. action movies with Tom Cruise will be represented
as [{Actor: 'Tom Cruise'}, {Type: 'Movie'}, {Genre: 'Action'}]

#### See

MatterSpecification.v11.Cluster § 6.7.5.2.1

#### Inherited from

`TypeFromSchema.parameterList`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:938
