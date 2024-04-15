[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ColorControl](../modules/cluster_export.ColorControl.md) / StepSaturationRequest

# Interface: StepSaturationRequest

[cluster/export](../modules/cluster_export.md).[ColorControl](../modules/cluster_export.ColorControl.md).StepSaturationRequest

Input to the ColorControl stepSaturation command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.9

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvStepSaturationRequest`](../modules/cluster_export.ColorControl.md#tlvstepsaturationrequest)\>

  ↳ **`StepSaturationRequest`**

## Table of contents

### Properties

- [optionsMask](cluster_export.ColorControl.StepSaturationRequest.md#optionsmask)
- [optionsOverride](cluster_export.ColorControl.StepSaturationRequest.md#optionsoverride)
- [stepMode](cluster_export.ColorControl.StepSaturationRequest.md#stepmode)
- [stepSize](cluster_export.ColorControl.StepSaturationRequest.md#stepsize)
- [transitionTime](cluster_export.ColorControl.StepSaturationRequest.md#transitiontime)

## Properties

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:269](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L269)

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:270](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L270)

___

### stepMode

• **stepMode**: [`StepMode`](../enums/cluster_export.ColorControl.StepMode.md)

The StepMode field shall be one of the non-reserved values in Values of the StepMode Field.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.9.1

#### Inherited from

TypeFromSchema.stepMode

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:249](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L249)

___

### stepSize

• **stepSize**: `number`

The change to be added to (or subtracted from) the current value of the device’s saturation.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.9.2

#### Inherited from

TypeFromSchema.stepSize

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:256](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L256)

___

### transitionTime

• **transitionTime**: `number`

The TransitionTime field specifies, in 1/10ths of a second, the time that shall be taken to perform the
step. A step is a change in the device’s saturation of ‘Step size’ units.

Note: Here the TransitionTime data field is of data type uint8, where uint16 is more common for
TransitionTime data fields in other clusters / commands.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.9.3

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:267](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L267)
