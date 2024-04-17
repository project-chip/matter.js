[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ColorControl](../modules/cluster_export.ColorControl.md) / StepColorTemperatureRequest

# Interface: StepColorTemperatureRequest

[cluster/export](../modules/cluster_export.md).[ColorControl](../modules/cluster_export.ColorControl.md).StepColorTemperatureRequest

Input to the ColorControl stepColorTemperature command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.22

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvStepColorTemperatureRequest`](../modules/cluster_export.ColorControl.md#tlvstepcolortemperaturerequest)\>

  ↳ **`StepColorTemperatureRequest`**

## Table of contents

### Properties

- [colorTemperatureMaximumMireds](cluster_export.ColorControl.StepColorTemperatureRequest.md#colortemperaturemaximummireds)
- [colorTemperatureMinimumMireds](cluster_export.ColorControl.StepColorTemperatureRequest.md#colortemperatureminimummireds)
- [optionsMask](cluster_export.ColorControl.StepColorTemperatureRequest.md#optionsmask)
- [optionsOverride](cluster_export.ColorControl.StepColorTemperatureRequest.md#optionsoverride)
- [stepMode](cluster_export.ColorControl.StepColorTemperatureRequest.md#stepmode)
- [stepSize](cluster_export.ColorControl.StepColorTemperatureRequest.md#stepsize)
- [transitionTime](cluster_export.ColorControl.StepColorTemperatureRequest.md#transitiontime)

## Properties

### colorTemperatureMaximumMireds

• **colorTemperatureMaximumMireds**: `number`

The ColorTemperatureMaximumMireds field specifies an upper bound on the ColorTemperatureMireds attribute (≡
a lower bound on the color temperature in kelvins) for the current step operation

ColorTemperatureMireds ≤ ColorTemperatureMaximumMireds field ≤ ColorTempPhysicalMaxMireds

As such if the step operation takes the ColorTemperatureMireds attribute towards the value of the
ColorTemperatureMaximumMireds field it shall be clipped so that the above invariant is satisfied. If the
ColorTemperatureMaximum Mireds field is set to 0, ColorTempPhysicalMaxMireds shall be used as the upper
bound for the ColorTemperatureMireds attribute.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.22.5

#### Inherited from

TypeFromSchema.colorTemperatureMaximumMireds

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:526](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L526)

___

### colorTemperatureMinimumMireds

• **colorTemperatureMinimumMireds**: `number`

The ColorTemperatureMinimumMireds field specifies a lower bound on the ColorTemperatureMireds attribute (≡
an upper bound on the color temperature in kelvins) for the current step operation

ColorTempPhysicalMinMireds ≤ ColorTemperatureMinimumMireds field ≤ ColorTemperatureMireds

As such if the step operation takes the ColorTemperatureMireds attribute towards the value of the Color
Temperature Minimum Mireds field it shall be clipped so that the above invariant is satisfied. If the
ColorTemperatureMinimumMireds field is set to 0, ColorTempPhysicalMinMireds shall be used as the lower bound
for the ColorTemperatureMireds attribute.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.22.4

#### Inherited from

TypeFromSchema.colorTemperatureMinimumMireds

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:511](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L511)

___

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:528](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L528)

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:529](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L529)

___

### stepMode

• **stepMode**: `number`

This field is identical to the StepMode field of the StepHue command of the Color Control cluster (see
sub-clause StepHue Command).

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.22.1

#### Inherited from

TypeFromSchema.stepMode

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:479](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L479)

___

### stepSize

• **stepSize**: `number`

The StepSize field specifies the change to be added to (or subtracted from) the current value of the
device’s color temperature.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.22.2

#### Inherited from

TypeFromSchema.stepSize

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:487](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L487)

___

### transitionTime

• **transitionTime**: `number`

The TransitionTime field specifies, in units of 1/10ths of a second, the time that shall be taken to perform
the step. A step is a change to the device’s color temperature of a magnitude corresponding to the StepSize
field.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.22.3

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:496](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L496)
