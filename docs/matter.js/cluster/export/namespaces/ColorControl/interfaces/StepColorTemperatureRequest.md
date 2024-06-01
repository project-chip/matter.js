[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [ColorControl](../README.md) / StepColorTemperatureRequest

# Interface: StepColorTemperatureRequest

Input to the ColorControl stepColorTemperature command

## See

MatterSpecification.v11.Cluster § 3.2.11.22

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvStepColorTemperatureRequest`](../README.md#tlvstepcolortemperaturerequest)\>

## Properties

### colorTemperatureMaximumMireds

> **colorTemperatureMaximumMireds**: `number`

The ColorTemperatureMaximumMireds field specifies an upper bound on the ColorTemperatureMireds attribute (≡
a lower bound on the color temperature in kelvins) for the current step operation

ColorTemperatureMireds ≤ ColorTemperatureMaximumMireds field ≤ ColorTempPhysicalMaxMireds

As such if the step operation takes the ColorTemperatureMireds attribute towards the value of the
ColorTemperatureMaximumMireds field it shall be clipped so that the above invariant is satisfied. If the
ColorTemperatureMaximum Mireds field is set to 0, ColorTempPhysicalMaxMireds shall be used as the upper
bound for the ColorTemperatureMireds attribute.

#### See

MatterSpecification.v11.Cluster § 3.2.11.22.5

#### Inherited from

`TypeFromSchema.colorTemperatureMaximumMireds`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:526](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L526)

***

### colorTemperatureMinimumMireds

> **colorTemperatureMinimumMireds**: `number`

The ColorTemperatureMinimumMireds field specifies a lower bound on the ColorTemperatureMireds attribute (≡
an upper bound on the color temperature in kelvins) for the current step operation

ColorTempPhysicalMinMireds ≤ ColorTemperatureMinimumMireds field ≤ ColorTemperatureMireds

As such if the step operation takes the ColorTemperatureMireds attribute towards the value of the Color
Temperature Minimum Mireds field it shall be clipped so that the above invariant is satisfied. If the
ColorTemperatureMinimumMireds field is set to 0, ColorTempPhysicalMinMireds shall be used as the lower bound
for the ColorTemperatureMireds attribute.

#### See

MatterSpecification.v11.Cluster § 3.2.11.22.4

#### Inherited from

`TypeFromSchema.colorTemperatureMinimumMireds`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:511](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L511)

***

### optionsMask

> **optionsMask**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsMask`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:528](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L528)

***

### optionsOverride

> **optionsOverride**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsOverride`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:529](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L529)

***

### stepMode

> **stepMode**: [`StepMode`](../enumerations/StepMode.md)

This field is identical to the StepMode field of the StepHue command of the Color Control cluster (see
sub-clause StepHue Command).

#### See

MatterSpecification.v11.Cluster § 3.2.11.22.1

#### Inherited from

`TypeFromSchema.stepMode`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:479](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L479)

***

### stepSize

> **stepSize**: `number`

The StepSize field specifies the change to be added to (or subtracted from) the current value of the
device’s color temperature.

#### See

MatterSpecification.v11.Cluster § 3.2.11.22.2

#### Inherited from

`TypeFromSchema.stepSize`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:487](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L487)

***

### transitionTime

> **transitionTime**: `number`

The TransitionTime field specifies, in units of 1/10ths of a second, the time that shall be taken to perform
the step. A step is a change to the device’s color temperature of a magnitude corresponding to the StepSize
field.

#### See

MatterSpecification.v11.Cluster § 3.2.11.22.3

#### Inherited from

`TypeFromSchema.transitionTime`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:496](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L496)
