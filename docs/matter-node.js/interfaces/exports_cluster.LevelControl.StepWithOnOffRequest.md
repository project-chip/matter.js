[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [LevelControl](../modules/exports_cluster.LevelControl.md) / StepWithOnOffRequest

# Interface: StepWithOnOffRequest

[exports/cluster](../modules/exports_cluster.md).[LevelControl](../modules/exports_cluster.LevelControl.md).StepWithOnOffRequest

Input to the LevelControl stepWithOnOff command

**`See`**

MatterSpecification.v11.Cluster § 1.6.6

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvStepWithOnOffRequest`](../modules/exports_cluster.LevelControl.md#tlvstepwithonoffrequest)\>

  ↳ **`StepWithOnOffRequest`**

## Table of contents

### Properties

- [optionsMask](exports_cluster.LevelControl.StepWithOnOffRequest.md#optionsmask)
- [optionsOverride](exports_cluster.LevelControl.StepWithOnOffRequest.md#optionsoverride)
- [stepMode](exports_cluster.LevelControl.StepWithOnOffRequest.md#stepmode)
- [stepSize](exports_cluster.LevelControl.StepWithOnOffRequest.md#stepsize)
- [transitionTime](exports_cluster.LevelControl.StepWithOnOffRequest.md#transitiontime)

## Properties

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:212

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:216

___

### stepMode

• **stepMode**: [`StepMode`](../enums/exports_cluster.LevelControl.StepMode.md)

#### Inherited from

TypeFromSchema.stepMode

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:209

___

### stepSize

• **stepSize**: `number`

#### Inherited from

TypeFromSchema.stepSize

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:210

___

### transitionTime

• **transitionTime**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:211
