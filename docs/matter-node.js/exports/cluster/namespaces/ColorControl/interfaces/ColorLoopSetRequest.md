[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [ColorControl](../README.md) / ColorLoopSetRequest

# Interface: ColorLoopSetRequest

Input to the ColorControl colorLoopSet command

## See

MatterSpecification.v11.Cluster § 3.2.11.19

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvColorLoopSetRequest`](../README.md#tlvcolorloopsetrequest)\>

## Properties

### action

> **action**: [`Action`](../enumerations/Action.md)

The Action field specifies the action to take for the color loop if the UpdateAction sub-field of the
UpdateFlags field is set to 1. This field shall be set to one of the non-reserved values listed in Values of
the Action Field of the ColorLoopSet Command.

#### See

MatterSpecification.v11.Cluster § 3.2.11.19.2

#### Inherited from

`TypeFromSchema.action`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:786

***

### direction

> **direction**: [`ColorLoopSetDirection`](../enumerations/ColorLoopSetDirection.md)

The Direction field specifies the direction for the color loop if the Update Direction field of the
UpdateFlags field is set to 1. This field shall be set to one of the non-reserved values listed in Values of
the Direction Field of the ColorLoopSet Command.

#### See

MatterSpecification.v11.Cluster § 3.2.11.19.3

#### Inherited from

`TypeFromSchema.direction`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:794

***

### optionsMask

> **optionsMask**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../schema/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsMask`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:803

***

### optionsOverride

> **optionsOverride**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../schema/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsOverride`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:806

***

### startHue

> **startHue**: `number`

#### Inherited from

`TypeFromSchema.startHue`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:802

***

### time

> **time**: `number`

The Time field specifies the number of seconds over which to perform a full color loop if the UpdateTime
sub-field of the UpdateFlags field is set to 1.

#### See

MatterSpecification.v11.Cluster § 3.2.11.19.4

#### Inherited from

`TypeFromSchema.time`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:801

***

### updateFlags

> **updateFlags**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

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

#### See

MatterSpecification.v11.Cluster § 3.2.11.19.1

#### Type declaration

##### reserved

> **reserved**: [`BitField`](../../../../schema/README.md#bitfield)

##### updateAction

> **updateAction**: [`BitFlag`](../../../../schema/README.md#bitflag)

##### updateDirection

> **updateDirection**: [`BitFlag`](../../../../schema/README.md#bitflag)

##### updateStartHue

> **updateStartHue**: [`BitFlag`](../../../../schema/README.md#bitflag)

##### updateTime

> **updateTime**: [`BitFlag`](../../../../schema/README.md#bitflag)

#### Inherited from

`TypeFromSchema.updateFlags`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:772
