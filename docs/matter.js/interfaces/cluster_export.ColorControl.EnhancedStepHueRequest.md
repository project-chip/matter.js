[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ColorControl](../modules/cluster_export.ColorControl.md) / EnhancedStepHueRequest

# Interface: EnhancedStepHueRequest

[cluster/export](../modules/cluster_export.md).[ColorControl](../modules/cluster_export.ColorControl.md).EnhancedStepHueRequest

Input to the ColorControl enhancedStepHue command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.17

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvEnhancedStepHueRequest`](../modules/cluster_export.ColorControl.md#tlvenhancedstephuerequest)\>

  ↳ **`EnhancedStepHueRequest`**

## Table of contents

### Properties

- [optionsMask](cluster_export.ColorControl.EnhancedStepHueRequest.md#optionsmask)
- [optionsOverride](cluster_export.ColorControl.EnhancedStepHueRequest.md#optionsoverride)
- [stepMode](cluster_export.ColorControl.EnhancedStepHueRequest.md#stepmode)
- [stepSize](cluster_export.ColorControl.EnhancedStepHueRequest.md#stepsize)
- [transitionTime](cluster_export.ColorControl.EnhancedStepHueRequest.md#transitiontime)

## Properties

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:647](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L647)

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:648](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L648)

___

### stepMode

• **stepMode**: [`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)

This field is identical to the StepMode field of the StepHue command of the Color Control cluster (see
sub-clause StepHue Command).

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.17.1

#### Inherited from

TypeFromSchema.stepMode

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:626](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L626)

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

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:634](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L634)

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

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:645](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L645)
