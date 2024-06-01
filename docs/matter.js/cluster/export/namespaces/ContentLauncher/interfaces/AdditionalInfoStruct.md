[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [ContentLauncher](../README.md) / AdditionalInfoStruct

# Interface: AdditionalInfoStruct

This object defines additional name=value pairs that can be used for identifying content.

## See

MatterSpecification.v11.Cluster § 6.7.5.5

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvAdditionalInfoStruct`](../README.md#tlvadditionalinfostruct)\>

## Properties

### name

> **name**: `string`

This shall indicate the name of external id, ex. "musicbrainz".

#### See

MatterSpecification.v11.Cluster § 6.7.5.5.1

#### Inherited from

`TypeFromSchema.name`

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:393](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L393)

***

### value

> **value**: `string`

This shall indicate the value for external id, ex. "ST0000000666661".

#### See

MatterSpecification.v11.Cluster § 6.7.5.5.2

#### Inherited from

`TypeFromSchema.value`

#### Source

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:400](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L400)
