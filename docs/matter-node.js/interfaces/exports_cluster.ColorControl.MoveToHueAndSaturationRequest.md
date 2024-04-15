[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ColorControl](../modules/exports_cluster.ColorControl.md) / MoveToHueAndSaturationRequest

# Interface: MoveToHueAndSaturationRequest

[exports/cluster](../modules/exports_cluster.md).[ColorControl](../modules/exports_cluster.ColorControl.md).MoveToHueAndSaturationRequest

Input to the ColorControl moveToHueAndSaturation command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.10

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvMoveToHueAndSaturationRequest`](../modules/exports_cluster.ColorControl.md#tlvmovetohueandsaturationrequest)\>

  ↳ **`MoveToHueAndSaturationRequest`**

## Table of contents

### Properties

- [hue](exports_cluster.ColorControl.MoveToHueAndSaturationRequest.md#hue)
- [optionsMask](exports_cluster.ColorControl.MoveToHueAndSaturationRequest.md#optionsmask)
- [optionsOverride](exports_cluster.ColorControl.MoveToHueAndSaturationRequest.md#optionsoverride)
- [saturation](exports_cluster.ColorControl.MoveToHueAndSaturationRequest.md#saturation)
- [transitionTime](exports_cluster.ColorControl.MoveToHueAndSaturationRequest.md#transitiontime)

## Properties

### hue

• **hue**: `number`

#### Inherited from

TypeFromSchema.hue

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:271

___

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:274

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:277

___

### saturation

• **saturation**: `number`

#### Inherited from

TypeFromSchema.saturation

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:272

___

### transitionTime

• **transitionTime**: `number`

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:273
