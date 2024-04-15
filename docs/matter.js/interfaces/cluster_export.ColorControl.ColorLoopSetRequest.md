[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ColorControl](../modules/cluster_export.ColorControl.md) / ColorLoopSetRequest

# Interface: ColorLoopSetRequest

[cluster/export](../modules/cluster_export.md).[ColorControl](../modules/cluster_export.ColorControl.md).ColorLoopSetRequest

Input to the ColorControl colorLoopSet command

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.19

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvColorLoopSetRequest`](../modules/cluster_export.ColorControl.md#tlvcolorloopsetrequest)\>

  ↳ **`ColorLoopSetRequest`**

## Table of contents

### Properties

- [action](cluster_export.ColorControl.ColorLoopSetRequest.md#action)
- [direction](cluster_export.ColorControl.ColorLoopSetRequest.md#direction)
- [optionsMask](cluster_export.ColorControl.ColorLoopSetRequest.md#optionsmask)
- [optionsOverride](cluster_export.ColorControl.ColorLoopSetRequest.md#optionsoverride)
- [startHue](cluster_export.ColorControl.ColorLoopSetRequest.md#starthue)
- [time](cluster_export.ColorControl.ColorLoopSetRequest.md#time)
- [updateFlags](cluster_export.ColorControl.ColorLoopSetRequest.md#updateflags)

## Properties

### action

• **action**: [`Action`](../enums/cluster_export.ColorControl.Action.md)

The Action field specifies the action to take for the color loop if the UpdateAction sub-field of the
UpdateFlags field is set to 1. This field shall be set to one of the non-reserved values listed in Values of
the Action Field of the ColorLoopSet Command.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.19.2

#### Inherited from

TypeFromSchema.action

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:772](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L772)

___

### direction

• **direction**: [`ColorLoopSetDirection`](../enums/cluster_export.ColorControl.ColorLoopSetDirection.md)

The Direction field specifies the direction for the color loop if the Update Direction field of the
UpdateFlags field is set to 1. This field shall be set to one of the non-reserved values listed in Values of
the Direction Field of the ColorLoopSet Command.

**`See`**

MatterSpecification.v11.Cluster § 3.2.11.19.3

#### Inherited from

TypeFromSchema.direction

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:781](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L781)

___

### optionsMask

• **optionsMask**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsMask

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:792](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L792)

___

### optionsOverride

• **optionsOverride**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Inherited from

TypeFromSchema.optionsOverride

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:793](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L793)

___

### startHue

• **startHue**: `number`

#### Inherited from

TypeFromSchema.startHue

#### Defined in

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:791](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L791)

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

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:789](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L789)

___

### updateFlags

• **updateFlags**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `reserved`: [`BitField`](../modules/schema_export.md#bitfield) ; `updateAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `updateDirection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `updateStartHue`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `updateTime`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

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

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:763](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L763)
