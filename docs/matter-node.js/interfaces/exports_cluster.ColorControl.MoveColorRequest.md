[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ColorControl](../modules/exports_cluster.ColorControl.md) / MoveColorRequest

# Interface: MoveColorRequest

[exports/cluster](../modules/exports_cluster.md).[ColorControl](../modules/exports_cluster.ColorControl.md).MoveColorRequest

Input to the ColorControl moveColor command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.12

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvMoveColorRequest`](../modules/exports_cluster.ColorControl.md#tlvmovecolorrequest)\>

  ↳ **`MoveColorRequest`**

## Table of contents

### Properties

- [optionsMask](exports_cluster.ColorControl.MoveColorRequest.md#optionsmask)
- [optionsOverride](exports_cluster.ColorControl.MoveColorRequest.md#optionsoverride)
- [rateX](exports_cluster.ColorControl.MoveColorRequest.md#ratex)
- [rateY](exports_cluster.ColorControl.MoveColorRequest.md#ratey)

## Properties

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:331

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:334

___

### rateX

• **rateX**: `number`

The RateX field specifies the rate of movement in steps per second. A step is a change in the device’s
CurrentX attribute of one unit.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.12.1

#### Inherited from

TypeFromSchema.rateX

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:323

___

### rateY

• **rateY**: `number`

The RateY field specifies the rate of movement in steps per second. A step is a change in the device’s
CurrentY attribute of one unit.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.12.2

#### Inherited from

TypeFromSchema.rateY

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:330
