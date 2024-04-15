[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ColorControl](../modules/exports_cluster.ColorControl.md) / StepHueRequest

# Interface: StepHueRequest

[exports/cluster](../modules/exports_cluster.md).[ColorControl](../modules/exports_cluster.ColorControl.md).StepHueRequest

Input to the ColorControl stepHue command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.6

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvStepHueRequest`](../modules/exports_cluster.ColorControl.md#tlvstephuerequest)\>

  ↳ **`StepHueRequest`**

## Table of contents

### Properties

- [optionsMask](exports_cluster.ColorControl.StepHueRequest.md#optionsmask)
- [optionsOverride](exports_cluster.ColorControl.StepHueRequest.md#optionsoverride)
- [stepMode](exports_cluster.ColorControl.StepHueRequest.md#stepmode)
- [stepSize](exports_cluster.ColorControl.StepHueRequest.md#stepsize)
- [transitionTime](exports_cluster.ColorControl.StepHueRequest.md#transitiontime)

## Properties

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:150

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:153

___

### stepMode

• **stepMode**: [`StepMode`](../enums/exports_cluster.ColorControl.StepMode.md)

The StepMode field shall be one of the non-reserved values in Values of the StepMode Field.

Table 50. Values of the StepMode Field

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.6.1

#### Inherited from

TypeFromSchema.stepMode

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:133

___

### stepSize

• **stepSize**: `number`

The change to be added to (or subtracted from) the current value of the device’s hue.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.6.2

#### Inherited from

TypeFromSchema.stepSize

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:139

___

### transitionTime

• **transitionTime**: `number`

The TransitionTime field specifies, in 1/10ths of a second, the time that shall be taken to perform the
step. A step is a change in the device’s hue of ‘Step size’ units.

Note: Here the TransitionTime data field is of data type uint8, where uint16 is more common for
TransitionTime data fields in other clusters / commands.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.6.3

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:149
