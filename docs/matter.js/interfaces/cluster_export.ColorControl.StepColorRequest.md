[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ColorControl](../modules/cluster_export.ColorControl.md) / StepColorRequest

# Interface: StepColorRequest

[cluster/export](../modules/cluster_export.md).[ColorControl](../modules/cluster_export.ColorControl.md).StepColorRequest

Input to the ColorControl stepColor command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.13

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvStepColorRequest`](../modules/cluster_export.ColorControl.md#tlvstepcolorrequest)\>

  ↳ **`StepColorRequest`**

## Table of contents

### Properties

- [optionsMask](cluster_export.ColorControl.StepColorRequest.md#optionsmask)
- [optionsOverride](cluster_export.ColorControl.StepColorRequest.md#optionsoverride)
- [stepX](cluster_export.ColorControl.StepColorRequest.md#stepx)
- [stepY](cluster_export.ColorControl.StepColorRequest.md#stepy)
- [transitionTime](cluster_export.ColorControl.StepColorRequest.md#transitiontime)

## Properties

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:370](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L370)

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:371](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L371)

___

### stepX

• **stepX**: `number`

#### Inherited from

TypeFromSchema.stepX

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:359](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L359)

___

### stepY

• **stepY**: `number`

#### Inherited from

TypeFromSchema.stepY

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:360](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L360)

___

### transitionTime

• **transitionTime**: `number`

The TransitionTime field specifies, in 1/10ths of a second, the time that shall be taken to perform the
color change.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.13.2

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:368](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L368)
