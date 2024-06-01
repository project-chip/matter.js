[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [ColorControl](../README.md) / StepHueRequest

# Interface: StepHueRequest

Input to the ColorControl stepHue command

## See

MatterSpecification.v11.Cluster § 3.2.11.6

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvStepHueRequest`](../README.md#tlvstephuerequest)\>

## Properties

### optionsMask

> **optionsMask**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../schema/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsMask`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:150

***

### optionsOverride

> **optionsOverride**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../schema/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsOverride`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:153

***

### stepMode

> **stepMode**: [`StepMode`](../enumerations/StepMode.md)

The StepMode field shall be one of the non-reserved values in Values of the StepMode Field.

Table 50. Values of the StepMode Field

#### See

MatterSpecification.v11.Cluster § 3.2.11.6.1

#### Inherited from

`TypeFromSchema.stepMode`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:133

***

### stepSize

> **stepSize**: `number`

The change to be added to (or subtracted from) the current value of the device’s hue.

#### See

MatterSpecification.v11.Cluster § 3.2.11.6.2

#### Inherited from

`TypeFromSchema.stepSize`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:139

***

### transitionTime

> **transitionTime**: `number`

The TransitionTime field specifies, in 1/10ths of a second, the time that shall be taken to perform the
step. A step is a change in the device’s hue of ‘Step size’ units.

Note: Here the TransitionTime data field is of data type uint8, where uint16 is more common for
TransitionTime data fields in other clusters / commands.

#### See

MatterSpecification.v11.Cluster § 3.2.11.6.3

#### Inherited from

`TypeFromSchema.transitionTime`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:149
