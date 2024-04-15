[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ColorControl](../modules/exports_cluster.ColorControl.md) / MoveToColorTemperatureRequest

# Interface: MoveToColorTemperatureRequest

[exports/cluster](../modules/exports_cluster.md).[ColorControl](../modules/exports_cluster.ColorControl.md).MoveToColorTemperatureRequest

Input to the ColorControl moveToColorTemperature command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.14

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvMoveToColorTemperatureRequest`](../modules/exports_cluster.ColorControl.md#tlvmovetocolortemperaturerequest)\>

  ↳ **`MoveToColorTemperatureRequest`**

## Table of contents

### Properties

- [colorTemperatureMireds](exports_cluster.ColorControl.MoveToColorTemperatureRequest.md#colortemperaturemireds)
- [optionsMask](exports_cluster.ColorControl.MoveToColorTemperatureRequest.md#optionsmask)
- [optionsOverride](exports_cluster.ColorControl.MoveToColorTemperatureRequest.md#optionsoverride)
- [transitionTime](exports_cluster.ColorControl.MoveToColorTemperatureRequest.md#transitiontime)

## Properties

### colorTemperatureMireds

• **colorTemperatureMireds**: `number`

#### Inherited from

TypeFromSchema.colorTemperatureMireds

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:380

___

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:382

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:385

___

### transitionTime

• **transitionTime**: `number`

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:381
