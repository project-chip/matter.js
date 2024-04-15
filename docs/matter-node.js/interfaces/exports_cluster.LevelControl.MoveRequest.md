[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [LevelControl](../modules/exports_cluster.LevelControl.md) / MoveRequest

# Interface: MoveRequest

[exports/cluster](../modules/exports_cluster.md).[LevelControl](../modules/exports_cluster.LevelControl.md).MoveRequest

Input to the LevelControl move command

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.2

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvMoveRequest`](../modules/exports_cluster.LevelControl.md#tlvmoverequest)\>

  ↳ **`MoveRequest`**

## Table of contents

### Properties

- [moveMode](exports_cluster.LevelControl.MoveRequest.md#movemode)
- [optionsMask](exports_cluster.LevelControl.MoveRequest.md#optionsmask)
- [optionsOverride](exports_cluster.LevelControl.MoveRequest.md#optionsoverride)
- [rate](exports_cluster.LevelControl.MoveRequest.md#rate)

## Properties

### moveMode

• **moveMode**: [`MoveMode`](../enums/exports_cluster.LevelControl.MoveMode.md)

The MoveMode field shall be one of the non-reserved values in Values of the MoveMode Field.

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.2.1

#### Inherited from

TypeFromSchema.moveMode

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:76

___

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:88

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:92

___

### rate

• **rate**: ``null`` \| `number`

The Rate field specifies the rate of movement in units per second. The actual rate of movement SHOULD be as
close to this rate as the device is able. If the Rate field is equal to null, then the value in
DefaultMoveRate attribute shall be used. However, if the Rate field is equal to null and the DefaultMoveRate
attribute is not supported, or if the Rate field is equal to null and the value of the DefaultMoveRate
attribute is equal to null, then the device SHOULD move as fast as it is able. If the device is not able to
move at a variable rate, this field may be disregarded.

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.2.2

#### Inherited from

TypeFromSchema.rate

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:87
