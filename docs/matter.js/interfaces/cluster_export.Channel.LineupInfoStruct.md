[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Channel](../modules/cluster_export.Channel.md) / LineupInfoStruct

# Interface: LineupInfoStruct

[cluster/export](../modules/cluster_export.md).[Channel](../modules/cluster_export.Channel.md).LineupInfoStruct

The Lineup Info allows references to external lineup sources like Gracenote. The combination of OperatorName,
LineupName, and PostalCode MUST uniquely identify a lineup.

**`See`**

MatterSpecification.v11.Cluster § 6.6.5.2

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvLineupInfoStruct`](../modules/cluster_export.Channel.md#tlvlineupinfostruct)\>

  ↳ **`LineupInfoStruct`**

## Table of contents

### Properties

- [lineupInfoType](cluster_export.Channel.LineupInfoStruct.md#lineupinfotype)
- [lineupName](cluster_export.Channel.LineupInfoStruct.md#lineupname)
- [operatorName](cluster_export.Channel.LineupInfoStruct.md#operatorname)
- [postalCode](cluster_export.Channel.LineupInfoStruct.md#postalcode)

## Properties

### lineupInfoType

• **lineupInfoType**: [`Mso`](../enums/cluster_export.Channel.LineupInfoType.md#mso)

This shall indicate the type of lineup. This field is optional, but SHOULD be provided when known.

**`See`**

MatterSpecification.v11.Cluster § 6.6.5.2.4

#### Inherited from

TypeFromSchema.lineupInfoType

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:114](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L114)

___

### lineupName

• `Optional` **lineupName**: `string`

#### Inherited from

TypeFromSchema.lineupName

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:106](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L106)

___

### operatorName

• **operatorName**: `string`

This shall indicate the name of the operator, for example “Comcast”.

**`See`**

MatterSpecification.v11.Cluster § 6.6.5.2.1

#### Inherited from

TypeFromSchema.operatorName

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:104](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L104)

___

### postalCode

• `Optional` **postalCode**: `string`

#### Inherited from

TypeFromSchema.postalCode

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:107](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L107)
