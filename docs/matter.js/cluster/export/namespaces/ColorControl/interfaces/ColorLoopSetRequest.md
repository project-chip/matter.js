[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [ColorControl](../README.md) / ColorLoopSetRequest

# Interface: ColorLoopSetRequest

Input to the ColorControl colorLoopSet command

## See

MatterSpecification.v11.Cluster § 3.2.11.19

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvColorLoopSetRequest`](../README.md#tlvcolorloopsetrequest)\>

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

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:792](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L792)

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

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:801](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L801)

***

### optionsMask

> **optionsMask**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsMask`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:812](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L812)

***

### optionsOverride

> **optionsOverride**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsOverride`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:813](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L813)

***

### startHue

> **startHue**: `number`

#### Inherited from

`TypeFromSchema.startHue`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:811](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L811)

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

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:809](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L809)

***

### updateFlags

> **updateFlags**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

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

> **reserved**: [`BitField`](../../../../../schema/export/README.md#bitfield)

##### updateAction

> **updateAction**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

##### updateDirection

> **updateDirection**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

##### updateStartHue

> **updateStartHue**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

##### updateTime

> **updateTime**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

#### Inherited from

`TypeFromSchema.updateFlags`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:783](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L783)
