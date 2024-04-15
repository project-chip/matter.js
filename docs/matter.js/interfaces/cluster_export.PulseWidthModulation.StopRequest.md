[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [PulseWidthModulation](../modules/cluster_export.PulseWidthModulation.md) / StopRequest

# Interface: StopRequest

[cluster/export](../modules/cluster_export.md).[PulseWidthModulation](../modules/cluster_export.PulseWidthModulation.md).StopRequest

Input to the PulseWidthModulation stop command

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.4

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvStopRequest`](../modules/cluster_export.PulseWidthModulation.md#tlvstoprequest)\>

  ↳ **`StopRequest`**

## Table of contents

### Properties

- [optionsMask](cluster_export.PulseWidthModulation.StopRequest.md#optionsmask)
- [optionsOverride](cluster_export.PulseWidthModulation.StopRequest.md#optionsoverride)

## Properties

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:141](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L141)

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:142](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L142)
