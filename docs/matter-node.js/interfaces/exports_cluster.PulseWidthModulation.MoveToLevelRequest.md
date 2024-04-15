[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [PulseWidthModulation](../modules/exports_cluster.PulseWidthModulation.md) / MoveToLevelRequest

# Interface: MoveToLevelRequest

[exports/cluster](../modules/exports_cluster.md).[PulseWidthModulation](../modules/exports_cluster.PulseWidthModulation.md).MoveToLevelRequest

Input to the PulseWidthModulation moveToLevel command

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.1

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvMoveToLevelRequest`](../modules/exports_cluster.PulseWidthModulation.md#tlvmovetolevelrequest)\>

  ↳ **`MoveToLevelRequest`**

## Table of contents

### Properties

- [level](exports_cluster.PulseWidthModulation.MoveToLevelRequest.md#level)
- [optionsMask](exports_cluster.PulseWidthModulation.MoveToLevelRequest.md#optionsmask)
- [optionsOverride](exports_cluster.PulseWidthModulation.MoveToLevelRequest.md#optionsoverride)
- [transitionTime](exports_cluster.PulseWidthModulation.MoveToLevelRequest.md#transitiontime)

## Properties

### level

• **level**: `number`

#### Inherited from

TypeFromSchema.level

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:43

___

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:45

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:49

___

### transitionTime

• **transitionTime**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:44
