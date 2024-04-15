[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Channel](../modules/exports_cluster.Channel.md) / LineupInfoStruct

# Interface: LineupInfoStruct

[exports/cluster](../modules/exports_cluster.md).[Channel](../modules/exports_cluster.Channel.md).LineupInfoStruct

The Lineup Info allows references to external lineup sources like Gracenote. The combination of OperatorName,
LineupName, and PostalCode MUST uniquely identify a lineup.

**`See`**

MatterSpecification.v11.Cluster § 6.6.5.2

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvLineupInfoStruct`](../modules/exports_cluster.Channel.md#tlvlineupinfostruct)\>

  ↳ **`LineupInfoStruct`**

## Table of contents

### Properties

- [lineupInfoType](exports_cluster.Channel.LineupInfoStruct.md#lineupinfotype)
- [lineupName](exports_cluster.Channel.LineupInfoStruct.md#lineupname)
- [operatorName](exports_cluster.Channel.LineupInfoStruct.md#operatorname)
- [postalCode](exports_cluster.Channel.LineupInfoStruct.md#postalcode)

## Properties

### lineupInfoType

• **lineupInfoType**: [`Mso`](../enums/exports_cluster.Channel.LineupInfoType.md#mso)

This shall indicate the type of lineup. This field is optional, but SHOULD be provided when known.

**`See`**

MatterSpecification.v11.Cluster § 6.6.5.2.4

#### Inherited from

TypeFromSchema.lineupInfoType

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:97

___

### lineupName

• `Optional` **lineupName**: `string`

#### Inherited from

TypeFromSchema.lineupName

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:90

___

### operatorName

• **operatorName**: `string`

This shall indicate the name of the operator, for example “Comcast”.

**`See`**

MatterSpecification.v11.Cluster § 6.6.5.2.1

#### Inherited from

TypeFromSchema.operatorName

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:89

___

### postalCode

• `Optional` **postalCode**: `string`

#### Inherited from

TypeFromSchema.postalCode

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:91
