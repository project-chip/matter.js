[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [ColorControl](../README.md) / EnhancedStepHueRequest

# Interface: EnhancedStepHueRequest

Input to the ColorControl enhancedStepHue command

## See

MatterSpecification.v11.Cluster § 3.2.11.17

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvEnhancedStepHueRequest`](../README.md#tlvenhancedstephuerequest)\>

## Properties

### optionsMask

> **optionsMask**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsMask`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:647](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L647)

***

### optionsOverride

> **optionsOverride**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsOverride`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:648](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L648)

***

### stepMode

> **stepMode**: [`StepMode`](../enumerations/StepMode.md)

This field is identical to the StepMode field of the StepHue command of the Color Control cluster (see
sub-clause StepHue Command).

#### See

MatterSpecification.v11.Cluster § 3.2.11.17.1

#### Inherited from

`TypeFromSchema.stepMode`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:626](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L626)

***

### stepSize

> **stepSize**: `number`

The StepSize field specifies the change to be added to (or subtracted from) the current value of the
device’s enhanced hue.

#### See

MatterSpecification.v11.Cluster § 3.2.11.17.2

#### Inherited from

`TypeFromSchema.stepSize`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:634](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L634)

***

### transitionTime

> **transitionTime**: `number`

The TransitionTime field specifies, in units of 1/10ths of a second, the time that shall be taken to perform
the step. A step is a change to the device’s enhanced hue of a magnitude corresponding to the StepSize field.

Note: Here TransitionTime data field is of data type uint16, while the TransitionTime data field of the
StepHue command is of data type uint8.

#### See

MatterSpecification.v11.Cluster § 3.2.11.17.3

#### Inherited from

`TypeFromSchema.transitionTime`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:645](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L645)
