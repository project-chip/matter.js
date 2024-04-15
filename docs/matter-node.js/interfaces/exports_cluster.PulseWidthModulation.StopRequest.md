[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [PulseWidthModulation](../modules/exports_cluster.PulseWidthModulation.md) / StopRequest

# Interface: StopRequest

[exports/cluster](../modules/exports_cluster.md).[PulseWidthModulation](../modules/exports_cluster.PulseWidthModulation.md).StopRequest

Input to the PulseWidthModulation stop command

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.4

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvStopRequest`](../modules/exports_cluster.PulseWidthModulation.md#tlvstoprequest)\>

  ↳ **`StopRequest`**

## Table of contents

### Properties

- [optionsMask](exports_cluster.PulseWidthModulation.StopRequest.md#optionsmask)
- [optionsOverride](exports_cluster.PulseWidthModulation.StopRequest.md#optionsoverride)

## Properties

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:140

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:144
