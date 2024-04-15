[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ColorControl](../modules/cluster_export.ColorControl.md) / EnhancedMoveToHueRequest

# Interface: EnhancedMoveToHueRequest

[cluster/export](../modules/cluster_export.md).[ColorControl](../modules/cluster_export.ColorControl.md).EnhancedMoveToHueRequest

Input to the ColorControl enhancedMoveToHue command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.15

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvEnhancedMoveToHueRequest`](../modules/cluster_export.ColorControl.md#tlvenhancedmovetohuerequest)\>

  ↳ **`EnhancedMoveToHueRequest`**

## Table of contents

### Properties

- [direction](cluster_export.ColorControl.EnhancedMoveToHueRequest.md#direction)
- [enhancedHue](cluster_export.ColorControl.EnhancedMoveToHueRequest.md#enhancedhue)
- [optionsMask](cluster_export.ColorControl.EnhancedMoveToHueRequest.md#optionsmask)
- [optionsOverride](cluster_export.ColorControl.EnhancedMoveToHueRequest.md#optionsoverride)
- [transitionTime](cluster_export.ColorControl.EnhancedMoveToHueRequest.md#transitiontime)

## Properties

### direction

• **direction**: [`ColorControlDirection`](../enums/cluster_export.ColorControl.ColorControlDirection.md)

This field is identical to the Direction field of the MoveToHue command of the Color Control cluster (see
sub-clause Use of the OptionsMask and OptionsOverride fields).

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.15.2

#### Inherited from

TypeFromSchema.direction

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:558](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L558)

___

### enhancedHue

• **enhancedHue**: `number`

The EnhancedHue field specifies the target extended hue for the lamp.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.15.1

#### Inherited from

TypeFromSchema.enhancedHue

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:550](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L550)

___

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:568](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L568)

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:569](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L569)

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

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:566](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L566)
