[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ColorControl](../modules/exports_cluster.ColorControl.md) / MoveColorTemperatureRequest

# Interface: MoveColorTemperatureRequest

[exports/cluster](../modules/exports_cluster.md).[ColorControl](../modules/exports_cluster.ColorControl.md).MoveColorTemperatureRequest

Input to the ColorControl moveColorTemperature command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.21

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvMoveColorTemperatureRequest`](../modules/exports_cluster.ColorControl.md#tlvmovecolortemperaturerequest)\>

  ↳ **`MoveColorTemperatureRequest`**

## Table of contents

### Properties

- [colorTemperatureMaximumMireds](exports_cluster.ColorControl.MoveColorTemperatureRequest.md#colortemperaturemaximummireds)
- [colorTemperatureMinimumMireds](exports_cluster.ColorControl.MoveColorTemperatureRequest.md#colortemperatureminimummireds)
- [moveMode](exports_cluster.ColorControl.MoveColorTemperatureRequest.md#movemode)
- [optionsMask](exports_cluster.ColorControl.MoveColorTemperatureRequest.md#optionsmask)
- [optionsOverride](exports_cluster.ColorControl.MoveColorTemperatureRequest.md#optionsoverride)
- [rate](exports_cluster.ColorControl.MoveColorTemperatureRequest.md#rate)

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

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:447

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

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:433

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

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:410

___

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:448

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:451

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

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:419
