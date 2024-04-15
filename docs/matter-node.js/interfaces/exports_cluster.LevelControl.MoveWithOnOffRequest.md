[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [LevelControl](../modules/exports_cluster.LevelControl.md) / MoveWithOnOffRequest

# Interface: MoveWithOnOffRequest

[exports/cluster](../modules/exports_cluster.md).[LevelControl](../modules/exports_cluster.LevelControl.md).MoveWithOnOffRequest

Input to the LevelControl moveWithOnOff command

**`See`**

MatterSpecification.v11.Cluster § 1.6.6

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvMoveWithOnOffRequest`](../modules/exports_cluster.LevelControl.md#tlvmovewithonoffrequest)\>

  ↳ **`MoveWithOnOffRequest`**

## Table of contents

### Properties

- [moveMode](exports_cluster.LevelControl.MoveWithOnOffRequest.md#movemode)
- [optionsMask](exports_cluster.LevelControl.MoveWithOnOffRequest.md#optionsmask)
- [optionsOverride](exports_cluster.LevelControl.MoveWithOnOffRequest.md#optionsoverride)
- [rate](exports_cluster.LevelControl.MoveWithOnOffRequest.md#rate)

## Properties

### moveMode

• **moveMode**: [`MoveMode`](../enums/exports_cluster.LevelControl.MoveMode.md)

#### Inherited from

TypeFromSchema.moveMode

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:185

___

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:187

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:191

___

### rate

• **rate**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.rate

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:186
