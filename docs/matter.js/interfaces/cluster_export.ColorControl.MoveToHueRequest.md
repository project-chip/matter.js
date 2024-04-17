[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ColorControl](../modules/cluster_export.ColorControl.md) / MoveToHueRequest

# Interface: MoveToHueRequest

[cluster/export](../modules/cluster_export.md).[ColorControl](../modules/cluster_export.ColorControl.md).MoveToHueRequest

Input to the ColorControl moveToHue command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.4

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvMoveToHueRequest`](../modules/cluster_export.ColorControl.md#tlvmovetohuerequest)\>

  ↳ **`MoveToHueRequest`**

## Table of contents

### Properties

- [direction](cluster_export.ColorControl.MoveToHueRequest.md#direction)
- [hue](cluster_export.ColorControl.MoveToHueRequest.md#hue)
- [optionsMask](cluster_export.ColorControl.MoveToHueRequest.md#optionsmask)
- [optionsOverride](cluster_export.ColorControl.MoveToHueRequest.md#optionsoverride)
- [transitionTime](cluster_export.ColorControl.MoveToHueRequest.md#transitiontime)

## Properties

### direction

• **direction**: [`ColorControlDirection`](../enums/cluster_export.ColorControl.ColorControlDirection.md)

The Direction field shall be one of the non-reserved values in Values of the Direction Field.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.4.2

#### Inherited from

TypeFromSchema.direction

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:66](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L66)

___

### hue

• **hue**: `number`

The Hue field specifies the hue to be moved to.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.4.1

#### Inherited from

TypeFromSchema.hue

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:59](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L59)

___

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:76](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L76)

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:77](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L77)

___

### transitionTime

• **transitionTime**: `number`

The TransitionTime field specifies, in 1/10ths of a second, the time that shall be taken to move to the new
hue.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.4.3

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L74)
