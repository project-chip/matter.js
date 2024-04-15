[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ColorControl](../modules/exports_cluster.ColorControl.md) / StepColorRequest

# Interface: StepColorRequest

[exports/cluster](../modules/exports_cluster.md).[ColorControl](../modules/exports_cluster.ColorControl.md).StepColorRequest

Input to the ColorControl stepColor command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.13

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvStepColorRequest`](../modules/exports_cluster.ColorControl.md#tlvstepcolorrequest)\>

  ↳ **`StepColorRequest`**

## Table of contents

### Properties

- [optionsMask](exports_cluster.ColorControl.StepColorRequest.md#optionsmask)
- [optionsOverride](exports_cluster.ColorControl.StepColorRequest.md#optionsoverride)
- [stepX](exports_cluster.ColorControl.StepColorRequest.md#stepx)
- [stepY](exports_cluster.ColorControl.StepColorRequest.md#stepy)
- [transitionTime](exports_cluster.ColorControl.StepColorRequest.md#transitiontime)

## Properties

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:360

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:363

___

### stepX

• **stepX**: `number`

#### Inherited from

TypeFromSchema.stepX

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:351

___

### stepY

• **stepY**: `number`

#### Inherited from

TypeFromSchema.stepY

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:352

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

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:359
