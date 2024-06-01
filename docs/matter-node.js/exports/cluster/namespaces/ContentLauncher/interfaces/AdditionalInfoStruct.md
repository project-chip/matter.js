[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [ContentLauncher](../README.md) / AdditionalInfoStruct

# Interface: AdditionalInfoStruct

This object defines additional name=value pairs that can be used for identifying content.

## See

MatterSpecification.v11.Cluster § 6.7.5.5

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvAdditionalInfoStruct`](../README.md#tlvadditionalinfostruct)\>

## Properties

### name

> **name**: `string`

This shall indicate the name of external id, ex. "musicbrainz".

#### See

MatterSpecification.v11.Cluster § 6.7.5.5.1

#### Inherited from

`TypeFromSchema.name`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:865

***

### value

> **value**: `string`

This shall indicate the value for external id, ex. "ST0000000666661".

#### See

MatterSpecification.v11.Cluster § 6.7.5.5.2

#### Inherited from

`TypeFromSchema.value`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:871
