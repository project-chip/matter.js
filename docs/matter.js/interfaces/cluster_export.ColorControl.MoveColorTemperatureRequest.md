[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ColorControl](../modules/cluster_export.ColorControl.md) / MoveColorTemperatureRequest

# Interface: MoveColorTemperatureRequest

[cluster/export](../modules/cluster_export.md).[ColorControl](../modules/cluster_export.ColorControl.md).MoveColorTemperatureRequest

Input to the ColorControl moveColorTemperature command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.21

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvMoveColorTemperatureRequest`](../modules/cluster_export.ColorControl.md#tlvmovecolortemperaturerequest)\>

  ↳ **`MoveColorTemperatureRequest`**

## Table of contents

### Properties

- [colorTemperatureMaximumMireds](cluster_export.ColorControl.MoveColorTemperatureRequest.md#colortemperaturemaximummireds)
- [colorTemperatureMinimumMireds](cluster_export.ColorControl.MoveColorTemperatureRequest.md#colortemperatureminimummireds)
- [moveMode](cluster_export.ColorControl.MoveColorTemperatureRequest.md#movemode)
- [optionsMask](cluster_export.ColorControl.MoveColorTemperatureRequest.md#optionsmask)
- [optionsOverride](cluster_export.ColorControl.MoveColorTemperatureRequest.md#optionsoverride)
- [rate](cluster_export.ColorControl.MoveColorTemperatureRequest.md#rate)

## Properties

### colorTemperatureMaximumMireds

• **colorTemperatureMaximumMireds**: `number`

The ColorTemperatureMaximumMireds field specifies an upper bound on the ColorTemperatureMireds attribute (≡
a lower bound on the color temperature in kelvins) for the current move operation

ColorTemperatureMireds ≤ ColorTemperatureMaximumMireds field ≤ ColorTempPhysicalMaxMireds

As such if the move operation takes the ColorTemperatureMireds attribute towards the value of the
ColorTemperatureMaximumMireds field it shall be clipped so that the above invariant is satisfied. If the
ColorTemperatureMaximumMireds field is set to 0, ColorTempPhysicalMaxMireds shall be used as the upper bound
for the ColorTemperatureMireds attribute.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.21.4

#### Inherited from

TypeFromSchema.colorTemperatureMaximumMireds

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:454](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L454)

___

### colorTemperatureMinimumMireds

• **colorTemperatureMinimumMireds**: `number`

The ColorTemperatureMinimumMireds field specifies a lower bound on the ColorTemperatureMireds attribute (≡
an upper bound on the color temperature in kelvins) for the current move operation

ColorTempPhysicalMinMireds ≤ ColorTemperatureMinimumMireds field ≤ ColorTemperatureMireds

As such if the move operation takes the ColorTemperatureMireds attribute towards the value of the
ColorTemperatureMinimumMireds field it shall be clipped so that the above invariant is satisfied. If the
ColorTemperatureMinimumMireds field is set to 0, ColorTempPhysicalMinMireds shall be used as the lower bound
for the ColorTemperatureMireds attribute.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.21.3

#### Inherited from

TypeFromSchema.colorTemperatureMinimumMireds

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:439](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L439)

___

### moveMode

• **moveMode**: `number`

This field is identical to the MoveMode field of the MoveHue command of the Color Control cluster

(see sub-clause MoveHue Command). If the MoveMode field is equal to 0 (Stop), the Rate field shall be
ignored.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.21.1

#### Inherited from

TypeFromSchema.moveMode

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:414](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L414)

___

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:456](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L456)

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:457](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L457)

___

### rate

• **rate**: `number`

The Rate field specifies the rate of movement in steps per second. A step is a change in the color
temperature of a device by one unit. If the MoveMode field is set to 1 (up) or 3 (down) and the Rate field
has a value of zero, the command has no effect and a response command shall be sent in response, with the
status code set to INVALID_COMMAND. If the MoveMode field is set to 0 (stop) the Rate field shall be ignored.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.21.2

#### Inherited from

TypeFromSchema.rate

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:424](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L424)
