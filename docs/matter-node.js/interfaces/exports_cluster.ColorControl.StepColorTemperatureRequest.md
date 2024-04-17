[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ColorControl](../modules/exports_cluster.ColorControl.md) / StepColorTemperatureRequest

# Interface: StepColorTemperatureRequest

[exports/cluster](../modules/exports_cluster.md).[ColorControl](../modules/exports_cluster.ColorControl.md).StepColorTemperatureRequest

Input to the ColorControl stepColorTemperature command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.22

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvStepColorTemperatureRequest`](../modules/exports_cluster.ColorControl.md#tlvstepcolortemperaturerequest)\>

  ↳ **`StepColorTemperatureRequest`**

## Table of contents

### Properties

- [colorTemperatureMaximumMireds](exports_cluster.ColorControl.StepColorTemperatureRequest.md#colortemperaturemaximummireds)
- [colorTemperatureMinimumMireds](exports_cluster.ColorControl.StepColorTemperatureRequest.md#colortemperatureminimummireds)
- [optionsMask](exports_cluster.ColorControl.StepColorTemperatureRequest.md#optionsmask)
- [optionsOverride](exports_cluster.ColorControl.StepColorTemperatureRequest.md#optionsoverride)
- [stepMode](exports_cluster.ColorControl.StepColorTemperatureRequest.md#stepmode)
- [stepSize](exports_cluster.ColorControl.StepColorTemperatureRequest.md#stepsize)
- [transitionTime](exports_cluster.ColorControl.StepColorTemperatureRequest.md#transitiontime)

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

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:517

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

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:503

___

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:518

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:521

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

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:474

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

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:481

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

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:489
