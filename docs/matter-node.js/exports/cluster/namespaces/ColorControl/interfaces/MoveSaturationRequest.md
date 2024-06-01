[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [ColorControl](../README.md) / MoveSaturationRequest

# Interface: MoveSaturationRequest

Input to the ColorControl moveSaturation command

## See

MatterSpecification.v11.Cluster § 3.2.11.8

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvMoveSaturationRequest`](../README.md#tlvmovesaturationrequest)\>

## Properties

### moveMode

> **moveMode**: [`MoveMode`](../enumerations/MoveMode.md)

The MoveMode field shall be one of the non-reserved values in Values of the MoveMode Field. If the MoveMode
field is equal to 0 (Stop), the Rate field shall be ignored.

#### See

MatterSpecification.v11.Cluster § 3.2.11.8.1

#### Inherited from

`TypeFromSchema.moveMode`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:198

***

### optionsMask

> **optionsMask**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../schema/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsMask`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:209

***

### optionsOverride

> **optionsOverride**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../schema/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsOverride`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:212

***

### rate

> **rate**: `number`

The Rate field specifies the rate of movement in steps per second. A step is a change in the device’s

saturation of one unit. If the MoveMode field is set to 1 (up) or 3 (down) and the Rate field has a value of
zero, the command has no effect and a response command shall be sent in response, with the status code set
to INVALID_COMMAND. If the MoveMode field is set to 0 (stop) the Rate field shall be ignored.

#### See

MatterSpecification.v11.Cluster § 3.2.11.8.2

#### Inherited from

`TypeFromSchema.rate`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:208
