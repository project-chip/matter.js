[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [LevelControl](../modules/exports_cluster.LevelControl.md) / MoveToLevelWithOnOffRequest

# Interface: MoveToLevelWithOnOffRequest

[exports/cluster](../modules/exports_cluster.md).[LevelControl](../modules/exports_cluster.LevelControl.md).MoveToLevelWithOnOffRequest

Input to the LevelControl moveToLevelWithOnOff command

**`See`**

MatterSpecification.v11.Cluster § 1.6.6

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvMoveToLevelWithOnOffRequest`](../modules/exports_cluster.LevelControl.md#tlvmovetolevelwithonoffrequest)\>

  ↳ **`MoveToLevelWithOnOffRequest`**

## Table of contents

### Properties

- [level](exports_cluster.LevelControl.MoveToLevelWithOnOffRequest.md#level)
- [optionsMask](exports_cluster.LevelControl.MoveToLevelWithOnOffRequest.md#optionsmask)
- [optionsOverride](exports_cluster.LevelControl.MoveToLevelWithOnOffRequest.md#optionsoverride)
- [transitionTime](exports_cluster.LevelControl.MoveToLevelWithOnOffRequest.md#transitiontime)

## Properties

### level

• **level**: `number`

#### Inherited from

TypeFromSchema.level

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:161

___

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:163

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:167

___

### transitionTime

• **transitionTime**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:162
