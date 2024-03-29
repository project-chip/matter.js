[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ColorControl](../modules/cluster_export.ColorControl.md) / MoveToHueAndSaturationRequest

# Interface: MoveToHueAndSaturationRequest

[cluster/export](../modules/cluster_export.md).[ColorControl](../modules/cluster_export.ColorControl.md).MoveToHueAndSaturationRequest

Input to the ColorControl moveToHueAndSaturation command

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.2.11.10

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

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:287](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L287)

___

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:290](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L290)

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:291](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L291)

___

### saturation

• **saturation**: `number`

#### Inherited from

TypeFromSchema.saturation

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:288](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L288)

___

### transitionTime

• **transitionTime**: `number`

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:289](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L289)
