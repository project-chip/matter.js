[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [Channel](../README.md) / LineupInfoStruct

# Interface: LineupInfoStruct

The Lineup Info allows references to external lineup sources like Gracenote. The combination of OperatorName,
LineupName, and PostalCode MUST uniquely identify a lineup.

## See

MatterSpecification.v11.Cluster § 6.6.5.2

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvLineupInfoStruct`](../README.md#tlvlineupinfostruct)\>

## Properties

### lineupInfoType

> **lineupInfoType**: [`Mso`](../enumerations/LineupInfoType.md#mso)

This shall indicate the type of lineup. This field is optional, but SHOULD be provided when known.

#### See

MatterSpecification.v11.Cluster § 6.6.5.2.4

#### Inherited from

`TypeFromSchema.lineupInfoType`

#### Source

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:114](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L114)

***

### lineupName?

> `optional` **lineupName**: `string`

#### Inherited from

`TypeFromSchema.lineupName`

#### Source

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:106](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L106)

***

### operatorName

> **operatorName**: `string`

This shall indicate the name of the operator, for example “Comcast”.

#### See

MatterSpecification.v11.Cluster § 6.6.5.2.1

#### Inherited from

`TypeFromSchema.operatorName`

#### Source

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:104](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L104)

***

### postalCode?

> `optional` **postalCode**: `string`

#### Inherited from

`TypeFromSchema.postalCode`

#### Source

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:107](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L107)
