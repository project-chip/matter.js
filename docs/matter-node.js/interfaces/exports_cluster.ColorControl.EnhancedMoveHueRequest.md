[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ColorControl](../modules/exports_cluster.ColorControl.md) / EnhancedMoveHueRequest

# Interface: EnhancedMoveHueRequest

[exports/cluster](../modules/exports_cluster.md).[ColorControl](../modules/exports_cluster.ColorControl.md).EnhancedMoveHueRequest

Input to the ColorControl enhancedMoveHue command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.16

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvEnhancedMoveHueRequest`](../modules/exports_cluster.ColorControl.md#tlvenhancedmovehuerequest)\>

  ↳ **`EnhancedMoveHueRequest`**

## Table of contents

### Properties

- [moveMode](exports_cluster.ColorControl.EnhancedMoveHueRequest.md#movemode)
- [optionsMask](exports_cluster.ColorControl.EnhancedMoveHueRequest.md#optionsmask)
- [optionsOverride](exports_cluster.ColorControl.EnhancedMoveHueRequest.md#optionsoverride)
- [rate](exports_cluster.ColorControl.EnhancedMoveHueRequest.md#rate)

## Properties

### moveMode

• **moveMode**: [`MoveMode`](../enums/exports_cluster.ColorControl.MoveMode.md)

This field is identical to the MoveMode field of the MoveHue command of the Color Control cluster (see
sub-clause MoveHue Command). If the MoveMode field is equal to 0 (Stop), the Rate field shall be ignored.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.16.1

#### Inherited from

TypeFromSchema.moveMode

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:584

___

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:594

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:597

___

### rate

• **rate**: `number`

The Rate field specifies the rate of movement in steps per second. A step is a change in the extended hue of
a device by one unit. If the MoveMode field is set to 1 (up) or 3 (down) and the Rate field has a value of
zero, the command has no effect and a response command shall be sent in response, with the status code set
to INVALID_COMMAND. If the MoveMode field is set to 0 (stop) the Rate field shall be ignored.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.16.2

#### Inherited from

TypeFromSchema.rate

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:593
