[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ColorControl](../modules/exports_cluster.ColorControl.md) / ColorLoopSetRequest

# Interface: ColorLoopSetRequest

[exports/cluster](../modules/exports_cluster.md).[ColorControl](../modules/exports_cluster.ColorControl.md).ColorLoopSetRequest

Input to the ColorControl colorLoopSet command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.19

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvColorLoopSetRequest`](../modules/exports_cluster.ColorControl.md#tlvcolorloopsetrequest)\>

  ↳ **`ColorLoopSetRequest`**

## Table of contents

### Properties

- [action](exports_cluster.ColorControl.ColorLoopSetRequest.md#action)
- [direction](exports_cluster.ColorControl.ColorLoopSetRequest.md#direction)
- [optionsMask](exports_cluster.ColorControl.ColorLoopSetRequest.md#optionsmask)
- [optionsOverride](exports_cluster.ColorControl.ColorLoopSetRequest.md#optionsoverride)
- [startHue](exports_cluster.ColorControl.ColorLoopSetRequest.md#starthue)
- [time](exports_cluster.ColorControl.ColorLoopSetRequest.md#time)
- [updateFlags](exports_cluster.ColorControl.ColorLoopSetRequest.md#updateflags)

## Properties

### action

• **action**: [`Action`](../enums/exports_cluster.ColorControl.Action.md)

The Action field specifies the action to take for the color loop if the UpdateAction sub-field of the
UpdateFlags field is set to 1. This field shall be set to one of the non-reserved values listed in Values of
the Action Field of the ColorLoopSet Command.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.19.2

#### Inherited from

TypeFromSchema.action

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:768

___

### direction

• **direction**: [`ColorLoopSetDirection`](../enums/exports_cluster.ColorControl.ColorLoopSetDirection.md)

The Direction field specifies the direction for the color loop if the Update Direction field of the
UpdateFlags field is set to 1. This field shall be set to one of the non-reserved values listed in Values of
the Direction Field of the ColorLoopSet Command.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.19.3

#### Inherited from

TypeFromSchema.direction

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:776

___

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:785

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:788

___

### startHue

• **startHue**: `number`

#### Inherited from

TypeFromSchema.startHue

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:784

___

### time

• **time**: `number`

The Time field specifies the number of seconds over which to perform a full color loop if the UpdateTime
sub-field of the UpdateFlags field is set to 1.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.19.4

#### Inherited from

TypeFromSchema.time

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:783

___

### updateFlags

• **updateFlags**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `reserved`: [`BitField`](../modules/exports_schema.md#bitfield) ; `updateAction`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `updateDirection`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `updateStartHue`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `updateTime`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

The UpdateFlags field specifies which color loop attributes to update before the color loop is started. This
field shall be formatted as illustrated in Format of the UpdateFlags Field of the ColorLoopSet Command.

The UpdateAction sub-field is 1 bit in length and specifies whether the device shall adhere to the action
field in order to process the command. If this sub-field is set to 1, the device shall adhere to the action
field. If this sub-field is set to 0, the device shall ignore the Action field.

The UpdateDirection sub-field is 1 bit in length and specifies whether the device shall update the
ColorLoopDirection attribute with the Direction field. If this sub-field is set to 1, the device shall
update the value of the ColorLoopDirection attribute with the value of the Direction field. If this
sub-field is set to 0, the device shall ignore the Direction field.

The UpdateTime sub-field is 1 bit in length and specifies whether the device shall update the ColorLoopTime
attribute with the Time field. If this sub-field is set to 1, the device shall update the value of the
ColorLoopTime attribute with the value of the Time field. If this sub-field is set to 0, the device shall
ignore the Time field.

The UpdateStartHue sub-field is 1 bit in length and specifies whether the device shall update the
ColorLoopStartEnhancedHue attribute with the StartHue field. If this sub-field is set to 1, the device shall
update the value of the ColorLoopStartEnhancedHue attribute with the value of the StartHue field. If this
sub-field is set to 0, the device shall ignore the StartHue field.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.19.1

#### Inherited from

TypeFromSchema.updateFlags

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:754
