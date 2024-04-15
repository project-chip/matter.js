[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [LevelControl](../modules/cluster_export.LevelControl.md) / MoveWithOnOffRequest

# Interface: MoveWithOnOffRequest

[cluster/export](../modules/cluster_export.md).[LevelControl](../modules/cluster_export.LevelControl.md).MoveWithOnOffRequest

Input to the LevelControl moveWithOnOff command

**`See`**

MatterSpecification.v11.Cluster § 1.6.6

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvMoveWithOnOffRequest`](../modules/cluster_export.LevelControl.md#tlvmovewithonoffrequest)\>

  ↳ **`MoveWithOnOffRequest`**

## Table of contents

### Properties

- [moveMode](cluster_export.LevelControl.MoveWithOnOffRequest.md#movemode)
- [optionsMask](cluster_export.LevelControl.MoveWithOnOffRequest.md#optionsmask)
- [optionsOverride](cluster_export.LevelControl.MoveWithOnOffRequest.md#optionsoverride)
- [rate](cluster_export.LevelControl.MoveWithOnOffRequest.md#rate)

## Properties

### moveMode

• **moveMode**: [`MoveMode`](../enums/cluster_export.LevelControl.MoveMode.md)

#### Inherited from

TypeFromSchema.moveMode

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:176](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L176)

___

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:178](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L178)

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:179](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L179)

___

### rate

• **rate**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.rate

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:177](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L177)
