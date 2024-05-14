[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ColorControl](../modules/cluster_export.ColorControl.md) / StopMoveStepRequest

# Interface: StopMoveStepRequest

[cluster/export](../modules/cluster_export.md).[ColorControl](../modules/cluster_export.ColorControl.md).StopMoveStepRequest

Input to the ColorControl stopMoveStep command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.20

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvStopMoveStepRequest`](../modules/cluster_export.ColorControl.md#tlvstopmovesteprequest)\>

  ↳ **`StopMoveStepRequest`**

## Table of contents

### Properties

- [optionsMask](cluster_export.ColorControl.StopMoveStepRequest.md#optionsmask)
- [optionsOverride](cluster_export.ColorControl.StopMoveStepRequest.md#optionsoverride)

## Properties

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:829](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L829)

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:830](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L830)
