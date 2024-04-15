[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ColorControl](../modules/exports_cluster.ColorControl.md) / EnhancedStepHueRequest

# Interface: EnhancedStepHueRequest

[exports/cluster](../modules/exports_cluster.md).[ColorControl](../modules/exports_cluster.ColorControl.md).EnhancedStepHueRequest

Input to the ColorControl enhancedStepHue command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.17

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvEnhancedStepHueRequest`](../modules/exports_cluster.ColorControl.md#tlvenhancedstephuerequest)\>

  ↳ **`EnhancedStepHueRequest`**

## Table of contents

### Properties

- [optionsMask](exports_cluster.ColorControl.EnhancedStepHueRequest.md#optionsmask)
- [optionsOverride](exports_cluster.ColorControl.EnhancedStepHueRequest.md#optionsoverride)
- [stepMode](exports_cluster.ColorControl.EnhancedStepHueRequest.md#stepmode)
- [stepSize](exports_cluster.ColorControl.EnhancedStepHueRequest.md#stepsize)
- [transitionTime](exports_cluster.ColorControl.EnhancedStepHueRequest.md#transitiontime)

## Properties

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:638

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:641

___

### stepMode

• **stepMode**: [`StepMode`](../enums/exports_cluster.ColorControl.StepMode.md)

This field is identical to the StepMode field of the StepHue command of the Color Control cluster (see
sub-clause StepHue Command).

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.17.1

#### Inherited from

TypeFromSchema.stepMode

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:620

___

### stepSize

• **stepSize**: `number`

The StepSize field specifies the change to be added to (or subtracted from) the current value of the
device’s enhanced hue.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.17.2

#### Inherited from

TypeFromSchema.stepSize

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:627

___

### transitionTime

• **transitionTime**: `number`

The TransitionTime field specifies, in units of 1/10ths of a second, the time that shall be taken to perform
the step. A step is a change to the device’s enhanced hue of a magnitude corresponding to the StepSize field.

Note: Here TransitionTime data field is of data type uint16, while the TransitionTime data field of the
StepHue command is of data type uint8.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.17.3

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:637
