[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [PulseWidthModulation](../modules/exports_cluster.PulseWidthModulation.md) / StepRequest

# Interface: StepRequest

[exports/cluster](../modules/exports_cluster.md).[PulseWidthModulation](../modules/exports_cluster.PulseWidthModulation.md).StepRequest

Input to the PulseWidthModulation step command

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.3

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvStepRequest`](../modules/exports_cluster.PulseWidthModulation.md#tlvsteprequest)\>

  ↳ **`StepRequest`**

## Table of contents

### Properties

- [optionsMask](exports_cluster.PulseWidthModulation.StepRequest.md#optionsmask)
- [optionsOverride](exports_cluster.PulseWidthModulation.StepRequest.md#optionsoverride)
- [stepMode](exports_cluster.PulseWidthModulation.StepRequest.md#stepmode)
- [stepSize](exports_cluster.PulseWidthModulation.StepRequest.md#stepsize)
- [transitionTime](exports_cluster.PulseWidthModulation.StepRequest.md#transitiontime)

## Properties

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:118

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:122

___

### stepMode

• **stepMode**: `number`

#### Inherited from

TypeFromSchema.stepMode

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:115

___

### stepSize

• **stepSize**: `number`

#### Inherited from

TypeFromSchema.stepSize

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:116

___

### transitionTime

• **transitionTime**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:117
