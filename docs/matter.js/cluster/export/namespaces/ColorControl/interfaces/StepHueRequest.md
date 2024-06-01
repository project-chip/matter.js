[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [ColorControl](../README.md) / StepHueRequest

# Interface: StepHueRequest

Input to the ColorControl stepHue command

## See

MatterSpecification.v11.Cluster § 3.2.11.6

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvStepHueRequest`](../README.md#tlvstephuerequest)\>

## Properties

### optionsMask

> **optionsMask**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsMask`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:172](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L172)

***

### optionsOverride

> **optionsOverride**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsOverride`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:173](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L173)

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

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:152](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L152)

***

### stepSize

> **stepSize**: `number`

The change to be added to (or subtracted from) the current value of the device’s hue.

#### See

MatterSpecification.v11.Cluster § 3.2.11.6.2

#### Inherited from

`TypeFromSchema.stepSize`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:159](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L159)

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

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:170](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L170)
