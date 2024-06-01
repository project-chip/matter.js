[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [Channel](../README.md) / LineupInfoStruct

# Interface: LineupInfoStruct

The Lineup Info allows references to external lineup sources like Gracenote. The combination of OperatorName,
LineupName, and PostalCode MUST uniquely identify a lineup.

## See

MatterSpecification.v11.Cluster § 6.6.5.2

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvLineupInfoStruct`](../README.md#tlvlineupinfostruct)\>

## Properties

### lineupInfoType

> **lineupInfoType**: [`Mso`](../enumerations/LineupInfoType.md#mso)

This shall indicate the type of lineup. This field is optional, but SHOULD be provided when known.

#### See

MatterSpecification.v11.Cluster § 6.6.5.2.4

#### Inherited from

`TypeFromSchema.lineupInfoType`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:97

***

### lineupName?

> `optional` **lineupName**: `string`

#### Inherited from

`TypeFromSchema.lineupName`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:90

***

### operatorName

> **operatorName**: `string`

This shall indicate the name of the operator, for example “Comcast”.

#### See

MatterSpecification.v11.Cluster § 6.6.5.2.1

#### Inherited from

`TypeFromSchema.operatorName`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:89

***

### postalCode?

> `optional` **postalCode**: `string`

#### Inherited from

`TypeFromSchema.postalCode`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:91
