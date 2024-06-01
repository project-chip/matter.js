[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [ContentLauncher](../README.md) / ContentSearchStruct

# Interface: ContentSearchStruct

This object defines inputs to a search for content for display or playback.

## See

MatterSpecification.v11.Cluster § 6.7.5.2

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvContentSearchStruct`](../README.md#tlvcontentsearchstruct)\>

## Properties

### parameterList

> **parameterList**: [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

This shall indicate the list of parameters comprising the search. If multiple parameters are provided, the
search parameters shall be joined with 'AND' logic. e.g. action movies with Tom Cruise will be represented
as [{Actor: 'Tom Cruise'}, {Type: 'Movie'}, {Genre: 'Action'}]

#### See

MatterSpecification.v11.Cluster § 6.7.5.2.1

#### Inherited from

`TypeFromSchema.parameterList`

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:458](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L458)
