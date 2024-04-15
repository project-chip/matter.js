[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ColorControl](../modules/cluster_export.ColorControl.md) / EnhancedMoveToHueAndSaturationRequest

# Interface: EnhancedMoveToHueAndSaturationRequest

[cluster/export](../modules/cluster_export.md).[ColorControl](../modules/cluster_export.ColorControl.md).EnhancedMoveToHueAndSaturationRequest

Input to the ColorControl enhancedMoveToHueAndSaturation command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.18

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvEnhancedMoveToHueAndSaturationRequest`](../modules/cluster_export.ColorControl.md#tlvenhancedmovetohueandsaturationrequest)\>

  ↳ **`EnhancedMoveToHueAndSaturationRequest`**

## Table of contents

### Properties

- [enhancedHue](cluster_export.ColorControl.EnhancedMoveToHueAndSaturationRequest.md#enhancedhue)
- [optionsMask](cluster_export.ColorControl.EnhancedMoveToHueAndSaturationRequest.md#optionsmask)
- [optionsOverride](cluster_export.ColorControl.EnhancedMoveToHueAndSaturationRequest.md#optionsoverride)
- [saturation](cluster_export.ColorControl.EnhancedMoveToHueAndSaturationRequest.md#saturation)
- [transitionTime](cluster_export.ColorControl.EnhancedMoveToHueAndSaturationRequest.md#transitiontime)

## Properties

### enhancedHue

• **enhancedHue**: `number`

The EnhancedHue field specifies the target extended hue for the lamp.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.18.1

#### Inherited from

TypeFromSchema.enhancedHue

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:669](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L669)

___

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:687](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L687)

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:688](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L688)

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

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:677](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L677)

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

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:685](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L685)
