[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [ContentLauncher](../README.md) / ParameterStruct

# Interface: ParameterStruct

This object defines inputs to a search for content for display or playback.

## See

MatterSpecification.v11.Cluster § 6.7.5.3

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvParameterStruct`](../README.md#tlvparameterstruct)\>

## Properties

### externalIdList?

> `optional` **externalIdList**: [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

This shall indicate the list of additional external content identifiers.

#### See

MatterSpecification.v11.Cluster § 6.7.5.3.3

#### Inherited from

`TypeFromSchema.externalIdList`

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:435](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L435)

***

### type

> **type**: [`Parameter`](../enumerations/Parameter.md)

This shall indicate the entity type.

#### See

MatterSpecification.v11.Cluster § 6.7.5.3.1

#### Inherited from

`TypeFromSchema.type`

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:421](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L421)

***

### value

> **value**: `string`

This shall indicate the entity value, which is a search string, ex. “Manchester by the Sea”.

#### See

MatterSpecification.v11.Cluster § 6.7.5.3.2

#### Inherited from

`TypeFromSchema.value`

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:428](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L428)
