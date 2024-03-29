[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [LevelControl](../modules/cluster_export.LevelControl.md) / MoveToLevelWithOnOffRequest

# Interface: MoveToLevelWithOnOffRequest

[cluster/export](../modules/cluster_export.md).[LevelControl](../modules/cluster_export.LevelControl.md).MoveToLevelWithOnOffRequest

Input to the LevelControl moveToLevelWithOnOff command

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6.6

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvMoveToLevelWithOnOffRequest`](../modules/cluster_export.LevelControl.md#tlvmovetolevelwithonoffrequest)\>

  ↳ **`MoveToLevelWithOnOffRequest`**

## Table of contents

### Properties

- [level](cluster_export.LevelControl.MoveToLevelWithOnOffRequest.md#level)
- [optionsMask](cluster_export.LevelControl.MoveToLevelWithOnOffRequest.md#optionsmask)
- [optionsOverride](cluster_export.LevelControl.MoveToLevelWithOnOffRequest.md#optionsoverride)
- [transitionTime](cluster_export.LevelControl.MoveToLevelWithOnOffRequest.md#transitiontime)

## Properties

### level

• **level**: `number`

#### Inherited from

TypeFromSchema.level

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:158](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L158)

___

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:160](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L160)

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:161](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L161)

___

### transitionTime

• **transitionTime**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:159](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L159)
