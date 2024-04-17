[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ColorControl](../modules/cluster_export.ColorControl.md) / MoveHueRequest

# Interface: MoveHueRequest

[cluster/export](../modules/cluster_export.md).[ColorControl](../modules/cluster_export.ColorControl.md).MoveHueRequest

Input to the ColorControl moveHue command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.5

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvMoveHueRequest`](../modules/cluster_export.ColorControl.md#tlvmovehuerequest)\>

  ↳ **`MoveHueRequest`**

## Table of contents

### Properties

- [moveMode](cluster_export.ColorControl.MoveHueRequest.md#movemode)
- [optionsMask](cluster_export.ColorControl.MoveHueRequest.md#optionsmask)
- [optionsOverride](cluster_export.ColorControl.MoveHueRequest.md#optionsoverride)
- [rate](cluster_export.ColorControl.MoveHueRequest.md#rate)

## Properties

### moveMode

• **moveMode**: [`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md)

The MoveMode field shall be one of the non-reserved values in Values of the MoveMode Field. If the MoveMode
field is equal to 0 (Stop), the Rate field shall be ignored.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.5.1

#### Inherited from

TypeFromSchema.moveMode

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:108](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L108)

___

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:120](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L120)

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:121](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L121)

___

### rate

• **rate**: `number`

The Rate field specifies the rate of movement in steps per second. A step is a change in the device’s hue of
one unit. If the MoveMode field is set to 1 (up) or 3 (down) and the Rate field has a value of zero, the
command has no effect and a response command shall be sent in response, with the status code set to
INVALID_COMMAND. If the MoveMode field is set to 0 (stop) the Rate field shall be ignored.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.5.2

#### Inherited from

TypeFromSchema.rate

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:118](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L118)
