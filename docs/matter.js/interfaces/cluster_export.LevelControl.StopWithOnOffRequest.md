[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [LevelControl](../modules/cluster_export.LevelControl.md) / StopWithOnOffRequest

# Interface: StopWithOnOffRequest

[cluster/export](../modules/cluster_export.md).[LevelControl](../modules/cluster_export.LevelControl.md).StopWithOnOffRequest

Input to the LevelControl stopWithOnOff command

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6.6

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvStopWithOnOffRequest`](../modules/cluster_export.LevelControl.md#tlvstopwithonoffrequest)\>

  ↳ **`StopWithOnOffRequest`**

## Table of contents

### Properties

- [optionsMask](cluster_export.LevelControl.StopWithOnOffRequest.md#optionsmask)
- [optionsOverride](cluster_export.LevelControl.StopWithOnOffRequest.md#optionsoverride)

## Properties

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:216](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L216)

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:217](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L217)
