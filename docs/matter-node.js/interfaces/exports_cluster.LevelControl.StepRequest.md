[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [LevelControl](../modules/exports_cluster.LevelControl.md) / StepRequest

# Interface: StepRequest

[exports/cluster](../modules/exports_cluster.md).[LevelControl](../modules/exports_cluster.LevelControl.md).StepRequest

Input to the LevelControl step command

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.3

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvStepRequest`](../modules/exports_cluster.LevelControl.md#tlvsteprequest)\>

  ↳ **`StepRequest`**

## Table of contents

### Properties

- [optionsMask](exports_cluster.LevelControl.StepRequest.md#optionsmask)
- [optionsOverride](exports_cluster.LevelControl.StepRequest.md#optionsoverride)
- [stepMode](exports_cluster.LevelControl.StepRequest.md#stepmode)
- [stepSize](exports_cluster.LevelControl.StepRequest.md#stepsize)
- [transitionTime](exports_cluster.LevelControl.StepRequest.md#transitiontime)

## Properties

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:117

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:121

___

### stepMode

• **stepMode**: [`StepMode`](../enums/exports_cluster.LevelControl.StepMode.md)

#### Inherited from

TypeFromSchema.stepMode

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:114

___

### stepSize

• **stepSize**: `number`

#### Inherited from

TypeFromSchema.stepSize

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:115

___

### transitionTime

• **transitionTime**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LevelControlCluster.d.ts:116
