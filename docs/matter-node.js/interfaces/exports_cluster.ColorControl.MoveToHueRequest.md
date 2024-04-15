[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ColorControl](../modules/exports_cluster.ColorControl.md) / MoveToHueRequest

# Interface: MoveToHueRequest

[exports/cluster](../modules/exports_cluster.md).[ColorControl](../modules/exports_cluster.ColorControl.md).MoveToHueRequest

Input to the ColorControl moveToHue command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.4

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvMoveToHueRequest`](../modules/exports_cluster.ColorControl.md#tlvmovetohuerequest)\>

  ↳ **`MoveToHueRequest`**

## Table of contents

### Properties

- [direction](exports_cluster.ColorControl.MoveToHueRequest.md#direction)
- [hue](exports_cluster.ColorControl.MoveToHueRequest.md#hue)
- [optionsMask](exports_cluster.ColorControl.MoveToHueRequest.md#optionsmask)
- [optionsOverride](exports_cluster.ColorControl.MoveToHueRequest.md#optionsoverride)
- [transitionTime](exports_cluster.ColorControl.MoveToHueRequest.md#transitiontime)

## Properties

### direction

• **direction**: [`ColorControlDirection`](../enums/exports_cluster.ColorControl.ColorControlDirection.md)

The Direction field shall be one of the non-reserved values in Values of the Direction Field.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.4.2

#### Inherited from

TypeFromSchema.direction

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:47

___

### hue

• **hue**: `number`

The Hue field specifies the hue to be moved to.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.4.1

#### Inherited from

TypeFromSchema.hue

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:41

___

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:55

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:58

___

### transitionTime

• **transitionTime**: `number`

The TransitionTime field specifies, in 1/10ths of a second, the time that shall be taken to move to the new
hue.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.4.3

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:54
