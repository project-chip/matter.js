[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ColorControl](../modules/cluster_export.ColorControl.md) / MoveToHueAndSaturationRequest

# Interface: MoveToHueAndSaturationRequest

[cluster/export](../modules/cluster_export.md).[ColorControl](../modules/cluster_export.ColorControl.md).MoveToHueAndSaturationRequest

Input to the ColorControl moveToHueAndSaturation command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.10

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvMoveToHueAndSaturationRequest`](../modules/cluster_export.ColorControl.md#tlvmovetohueandsaturationrequest)\>

  ↳ **`MoveToHueAndSaturationRequest`**

## Table of contents

### Properties

- [hue](cluster_export.ColorControl.MoveToHueAndSaturationRequest.md#hue)
- [optionsMask](cluster_export.ColorControl.MoveToHueAndSaturationRequest.md#optionsmask)
- [optionsOverride](cluster_export.ColorControl.MoveToHueAndSaturationRequest.md#optionsoverride)
- [saturation](cluster_export.ColorControl.MoveToHueAndSaturationRequest.md#saturation)
- [transitionTime](cluster_export.ColorControl.MoveToHueAndSaturationRequest.md#transitiontime)

## Properties

### hue

• **hue**: `number`

#### Inherited from

TypeFromSchema.hue

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:286](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L286)

___

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:289](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L289)

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:290](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L290)

___

### saturation

• **saturation**: `number`

#### Inherited from

TypeFromSchema.saturation

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:287](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L287)

___

### transitionTime

• **transitionTime**: `number`

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:288](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L288)
