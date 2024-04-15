[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [LevelControl](../modules/cluster_export.LevelControl.md) / StepRequest

# Interface: StepRequest

[cluster/export](../modules/cluster_export.md).[LevelControl](../modules/cluster_export.LevelControl.md).StepRequest

Input to the LevelControl step command

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.3

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvStepRequest`](../modules/cluster_export.LevelControl.md#tlvsteprequest)\>

  ↳ **`StepRequest`**

## Table of contents

### Properties

- [optionsMask](cluster_export.LevelControl.StepRequest.md#optionsmask)
- [optionsOverride](cluster_export.LevelControl.StepRequest.md#optionsoverride)
- [stepMode](cluster_export.LevelControl.StepRequest.md#stepmode)
- [stepSize](cluster_export.LevelControl.StepRequest.md#stepsize)
- [transitionTime](cluster_export.LevelControl.StepRequest.md#transitiontime)

## Properties

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:123](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L123)

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:124](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L124)

___

### stepMode

• **stepMode**: [`StepMode`](../enums/cluster_export.LevelControl.StepMode.md)

#### Inherited from

TypeFromSchema.stepMode

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:120](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L120)

___

### stepSize

• **stepSize**: `number`

#### Inherited from

TypeFromSchema.stepSize

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:121](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L121)

___

### transitionTime

• **transitionTime**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:122](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L122)
