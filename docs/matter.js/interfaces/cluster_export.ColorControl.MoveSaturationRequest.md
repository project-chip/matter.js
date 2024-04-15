[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ColorControl](../modules/cluster_export.ColorControl.md) / MoveSaturationRequest

# Interface: MoveSaturationRequest

[cluster/export](../modules/cluster_export.md).[ColorControl](../modules/cluster_export.ColorControl.md).MoveSaturationRequest

Input to the ColorControl moveSaturation command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.8

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvMoveSaturationRequest`](../modules/cluster_export.ColorControl.md#tlvmovesaturationrequest)\>

  ↳ **`MoveSaturationRequest`**

## Table of contents

### Properties

- [moveMode](cluster_export.ColorControl.MoveSaturationRequest.md#movemode)
- [optionsMask](cluster_export.ColorControl.MoveSaturationRequest.md#optionsmask)
- [optionsOverride](cluster_export.ColorControl.MoveSaturationRequest.md#optionsoverride)
- [rate](cluster_export.ColorControl.MoveSaturationRequest.md#rate)

## Properties

### moveMode

• **moveMode**: [`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)

The MoveMode field shall be one of the non-reserved values in Values of the MoveMode Field. If the MoveMode
field is equal to 0 (Stop), the Rate field shall be ignored.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.8.1

#### Inherited from

TypeFromSchema.moveMode

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:214](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L214)

___

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:227](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L227)

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:228](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L228)

___

### rate

• **rate**: `number`

The Rate field specifies the rate of movement in steps per second. A step is a change in the device’s

saturation of one unit. If the MoveMode field is set to 1 (up) or 3 (down) and the Rate field has a value of
zero, the command has no effect and a response command shall be sent in response, with the status code set
to INVALID_COMMAND. If the MoveMode field is set to 0 (stop) the Rate field shall be ignored.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.8.2

#### Inherited from

TypeFromSchema.rate

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:225](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L225)
