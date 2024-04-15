[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ColorControl](../modules/exports_cluster.ColorControl.md) / EnhancedMoveToHueAndSaturationRequest

# Interface: EnhancedMoveToHueAndSaturationRequest

[exports/cluster](../modules/exports_cluster.md).[ColorControl](../modules/exports_cluster.ColorControl.md).EnhancedMoveToHueAndSaturationRequest

Input to the ColorControl enhancedMoveToHueAndSaturation command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.18

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvEnhancedMoveToHueAndSaturationRequest`](../modules/exports_cluster.ColorControl.md#tlvenhancedmovetohueandsaturationrequest)\>

  ↳ **`EnhancedMoveToHueAndSaturationRequest`**

## Table of contents

### Properties

- [enhancedHue](exports_cluster.ColorControl.EnhancedMoveToHueAndSaturationRequest.md#enhancedhue)
- [optionsMask](exports_cluster.ColorControl.EnhancedMoveToHueAndSaturationRequest.md#optionsmask)
- [optionsOverride](exports_cluster.ColorControl.EnhancedMoveToHueAndSaturationRequest.md#optionsoverride)
- [saturation](exports_cluster.ColorControl.EnhancedMoveToHueAndSaturationRequest.md#saturation)
- [transitionTime](exports_cluster.ColorControl.EnhancedMoveToHueAndSaturationRequest.md#transitiontime)

## Properties

### enhancedHue

• **enhancedHue**: `number`

The EnhancedHue field specifies the target extended hue for the lamp.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.18.1

#### Inherited from

TypeFromSchema.enhancedHue

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:663

___

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:678

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:681

___

### saturation

• **saturation**: `number`

This field is identical to the Saturation field of the MoveToHueAndSaturation command of the Color Control
cluster (see sub-clause MoveToHueAndSaturation Command).

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.18.2

#### Inherited from

TypeFromSchema.saturation

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:670

___

### transitionTime

• **transitionTime**: `number`

This field is identical to the TransitionTime field of the MoveToHue command of the Color Control cluster
(see sub-clause MoveToHueAndSaturation Command).

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.18.3

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:677
