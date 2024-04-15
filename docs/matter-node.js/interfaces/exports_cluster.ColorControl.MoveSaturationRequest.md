[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ColorControl](../modules/exports_cluster.ColorControl.md) / MoveSaturationRequest

# Interface: MoveSaturationRequest

[exports/cluster](../modules/exports_cluster.md).[ColorControl](../modules/exports_cluster.ColorControl.md).MoveSaturationRequest

Input to the ColorControl moveSaturation command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.8

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvMoveSaturationRequest`](../modules/exports_cluster.ColorControl.md#tlvmovesaturationrequest)\>

  ↳ **`MoveSaturationRequest`**

## Table of contents

### Properties

- [moveMode](exports_cluster.ColorControl.MoveSaturationRequest.md#movemode)
- [optionsMask](exports_cluster.ColorControl.MoveSaturationRequest.md#optionsmask)
- [optionsOverride](exports_cluster.ColorControl.MoveSaturationRequest.md#optionsoverride)
- [rate](exports_cluster.ColorControl.MoveSaturationRequest.md#rate)

## Properties

### moveMode

• **moveMode**: [`MoveMode`](../enums/exports_cluster.ColorControl.MoveMode.md)

The MoveMode field shall be one of the non-reserved values in Values of the MoveMode Field. If the MoveMode
field is equal to 0 (Stop), the Rate field shall be ignored.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.8.1

#### Inherited from

TypeFromSchema.moveMode

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:198

___

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:209

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:212

___

### rate

• **rate**: `number`

The Rate field specifies the rate of movement in steps per second. A step is a change in the device’s

saturation of one unit. If the MoveMode field is set to 1 (up) or 3 (down) and the Rate field has a value of
zero, the command has no effect and a response command shall be sent in response, with the status code set
to INVALID_COMMAND. If the MoveMode field is set to 0 (stop) the Rate field shall be ignored.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.8.2

#### Inherited from

TypeFromSchema.rate

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:208
