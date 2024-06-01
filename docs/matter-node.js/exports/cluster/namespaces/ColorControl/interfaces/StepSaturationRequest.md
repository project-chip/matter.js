[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [ColorControl](../README.md) / StepSaturationRequest

# Interface: StepSaturationRequest

Input to the ColorControl stepSaturation command

## See

MatterSpecification.v11.Cluster § 3.2.11.9

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvStepSaturationRequest`](../README.md#tlvstepsaturationrequest)\>

## Properties

### optionsMask

> **optionsMask**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../schema/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsMask`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:251

***

### optionsOverride

> **optionsOverride**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../schema/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsOverride`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:254

***

### stepMode

> **stepMode**: [`StepMode`](../enumerations/StepMode.md)

The StepMode field shall be one of the non-reserved values in Values of the StepMode Field.

#### See

MatterSpecification.v11.Cluster § 3.2.11.9.1

#### Inherited from

`TypeFromSchema.stepMode`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:234

***

### stepSize

> **stepSize**: `number`

The change to be added to (or subtracted from) the current value of the device’s saturation.

#### See

MatterSpecification.v11.Cluster § 3.2.11.9.2

#### Inherited from

`TypeFromSchema.stepSize`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:240

***

### transitionTime

> **transitionTime**: `number`

The TransitionTime field specifies, in 1/10ths of a second, the time that shall be taken to perform the
step. A step is a change in the device’s saturation of ‘Step size’ units.

Note: Here the TransitionTime data field is of data type uint8, where uint16 is more common for
TransitionTime data fields in other clusters / commands.

#### See

MatterSpecification.v11.Cluster § 3.2.11.9.3

#### Inherited from

`TypeFromSchema.transitionTime`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:250
