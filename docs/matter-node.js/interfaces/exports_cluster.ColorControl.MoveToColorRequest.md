[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ColorControl](../modules/exports_cluster.ColorControl.md) / MoveToColorRequest

# Interface: MoveToColorRequest

[exports/cluster](../modules/exports_cluster.md).[ColorControl](../modules/exports_cluster.ColorControl.md).MoveToColorRequest

Input to the ColorControl moveToColor command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.11

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvMoveToColorRequest`](../modules/exports_cluster.ColorControl.md#tlvmovetocolorrequest)\>

  ↳ **`MoveToColorRequest`**

## Table of contents

### Properties

- [colorX](exports_cluster.ColorControl.MoveToColorRequest.md#colorx)
- [colorY](exports_cluster.ColorControl.MoveToColorRequest.md#colory)
- [optionsMask](exports_cluster.ColorControl.MoveToColorRequest.md#optionsmask)
- [optionsOverride](exports_cluster.ColorControl.MoveToColorRequest.md#optionsoverride)
- [transitionTime](exports_cluster.ColorControl.MoveToColorRequest.md#transitiontime)

## Properties

### colorX

• **colorX**: `number`

#### Inherited from

TypeFromSchema.colorX

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:294

___

### colorY

• **colorY**: `number`

#### Inherited from

TypeFromSchema.colorY

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:295

___

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:297

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:300

___

### transitionTime

• **transitionTime**: `number`

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:296
