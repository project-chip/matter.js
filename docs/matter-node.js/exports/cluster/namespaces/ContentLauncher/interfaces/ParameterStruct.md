[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [ContentLauncher](../README.md) / ParameterStruct

# Interface: ParameterStruct

This object defines inputs to a search for content for display or playback.

## See

MatterSpecification.v11.Cluster § 6.7.5.3

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvParameterStruct`](../README.md#tlvparameterstruct)\>

## Properties

### externalIdList?

> `optional` **externalIdList**: [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>[]

This shall indicate the list of additional external content identifiers.

#### See

MatterSpecification.v11.Cluster § 6.7.5.3.3

#### Inherited from

`TypeFromSchema.externalIdList`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:903

***

### type

> **type**: [`Parameter`](../enumerations/Parameter.md)

This shall indicate the entity type.

#### See

MatterSpecification.v11.Cluster § 6.7.5.3.1

#### Inherited from

`TypeFromSchema.type`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:891

***

### value

> **value**: `string`

This shall indicate the entity value, which is a search string, ex. “Manchester by the Sea”.

#### See

MatterSpecification.v11.Cluster § 6.7.5.3.2

#### Inherited from

`TypeFromSchema.value`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:897
