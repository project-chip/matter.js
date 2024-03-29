[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [LevelControl](../modules/cluster_export.LevelControl.md) / StepWithOnOffRequest

# Interface: StepWithOnOffRequest

[cluster/export](../modules/cluster_export.md).[LevelControl](../modules/cluster_export.LevelControl.md).StepWithOnOffRequest

Input to the LevelControl stepWithOnOff command

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6.6

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvStepWithOnOffRequest`](../modules/cluster_export.LevelControl.md#tlvstepwithonoffrequest)\>

  ↳ **`StepWithOnOffRequest`**

## Table of contents

### Properties

- [optionsMask](cluster_export.LevelControl.StepWithOnOffRequest.md#optionsmask)
- [optionsOverride](cluster_export.LevelControl.StepWithOnOffRequest.md#optionsoverride)
- [stepMode](cluster_export.LevelControl.StepWithOnOffRequest.md#stepmode)
- [stepSize](cluster_export.LevelControl.StepWithOnOffRequest.md#stepsize)
- [transitionTime](cluster_export.LevelControl.StepWithOnOffRequest.md#transitiontime)

## Properties

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:199](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L199)

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:200](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L200)

___

### stepMode

• **stepMode**: [`StepMode`](../enums/cluster_export.LevelControl.StepMode.md)

#### Inherited from

TypeFromSchema.stepMode

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:196](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L196)

___

### stepSize

• **stepSize**: `number`

#### Inherited from

TypeFromSchema.stepSize

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:197](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L197)

___

### transitionTime

• **transitionTime**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:198](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L198)
