[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ColorControl](../modules/exports_cluster.ColorControl.md) / EnhancedMoveToHueRequest

# Interface: EnhancedMoveToHueRequest

[exports/cluster](../modules/exports_cluster.md).[ColorControl](../modules/exports_cluster.ColorControl.md).EnhancedMoveToHueRequest

Input to the ColorControl enhancedMoveToHue command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.15

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvEnhancedMoveToHueRequest`](../modules/exports_cluster.ColorControl.md#tlvenhancedmovetohuerequest)\>

  ↳ **`EnhancedMoveToHueRequest`**

## Table of contents

### Properties

- [direction](exports_cluster.ColorControl.EnhancedMoveToHueRequest.md#direction)
- [enhancedHue](exports_cluster.ColorControl.EnhancedMoveToHueRequest.md#enhancedhue)
- [optionsMask](exports_cluster.ColorControl.EnhancedMoveToHueRequest.md#optionsmask)
- [optionsOverride](exports_cluster.ColorControl.EnhancedMoveToHueRequest.md#optionsoverride)
- [transitionTime](exports_cluster.ColorControl.EnhancedMoveToHueRequest.md#transitiontime)

## Properties

### direction

• **direction**: [`ColorControlDirection`](../enums/exports_cluster.ColorControl.ColorControlDirection.md)

This field is identical to the Direction field of the MoveToHue command of the Color Control cluster (see
sub-clause Use of the OptionsMask and OptionsOverride fields).

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.15.2

#### Inherited from

TypeFromSchema.direction

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:550

___

### enhancedHue

• **enhancedHue**: `number`

The EnhancedHue field specifies the target extended hue for the lamp.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.15.1

#### Inherited from

TypeFromSchema.enhancedHue

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:543

___

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:558

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:561

___

### transitionTime

• **transitionTime**: `number`

This field is identical to the TransitionTime field of the MoveToHue command of the Color Control cluster
(see sub-clause Use of the OptionsMask and OptionsOverride fields).

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.15.3

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:557
