[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ColorControl](../modules/cluster_export.ColorControl.md) / StepHueRequest

# Interface: StepHueRequest

[cluster/export](../modules/cluster_export.md).[ColorControl](../modules/cluster_export.ColorControl.md).StepHueRequest

Input to the ColorControl stepHue command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.6

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvStepHueRequest`](../modules/cluster_export.ColorControl.md#tlvstephuerequest)\>

  ↳ **`StepHueRequest`**

## Table of contents

### Properties

- [optionsMask](cluster_export.ColorControl.StepHueRequest.md#optionsmask)
- [optionsOverride](cluster_export.ColorControl.StepHueRequest.md#optionsoverride)
- [stepMode](cluster_export.ColorControl.StepHueRequest.md#stepmode)
- [stepSize](cluster_export.ColorControl.StepHueRequest.md#stepsize)
- [transitionTime](cluster_export.ColorControl.StepHueRequest.md#transitiontime)

## Properties

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:172](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L172)

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:173](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L173)

___

### stepMode

• **stepMode**: [`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)

The StepMode field shall be one of the non-reserved values in Values of the StepMode Field.

Table 50. Values of the StepMode Field

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.6.1

#### Inherited from

TypeFromSchema.stepMode

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:152](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L152)

___

### stepSize

• **stepSize**: `number`

The change to be added to (or subtracted from) the current value of the device’s hue.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.6.2

#### Inherited from

TypeFromSchema.stepSize

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:159](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L159)

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

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:170](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L170)
