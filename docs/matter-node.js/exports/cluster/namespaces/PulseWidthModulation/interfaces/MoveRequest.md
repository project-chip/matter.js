[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [PulseWidthModulation](../README.md) / MoveRequest

# Interface: MoveRequest

Input to the PulseWidthModulation move command

## See

MatterSpecification.v11.Cluster § 1.6.6.2

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvMoveRequest`](../README.md#tlvmoverequest)\>

## Properties

### moveMode

> **moveMode**: [`MoveMode`](../enumerations/MoveMode.md)

The MoveMode field shall be one of the non-reserved values in Values of the MoveMode Field.

#### See

MatterSpecification.v11.Cluster § 1.6.6.2.1

#### Inherited from

`TypeFromSchema.moveMode`

#### Source

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:81

***

### optionsMask

> **optionsMask**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### coupleColorTempToLevel

> **coupleColorTempToLevel**: [`BitFlag`](../../../../schema/README.md#bitflag)

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../schema/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsMask`

#### Source

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:93

***

### optionsOverride

> **optionsOverride**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### coupleColorTempToLevel

> **coupleColorTempToLevel**: [`BitFlag`](../../../../schema/README.md#bitflag)

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../schema/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsOverride`

#### Source

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:97

***

### rate

> **rate**: `null` \| `number`

The Rate field specifies the rate of movement in units per second. The actual rate of movement SHOULD be as
close to this rate as the device is able. If the Rate field is equal to null, then the value in
DefaultMoveRate attribute shall be used. However, if the Rate field is equal to null and the DefaultMoveRate
attribute is not supported, or if the Rate field is equal to null and the value of the DefaultMoveRate
attribute is equal to null, then the device SHOULD move as fast as it is able. If the device is not able to
move at a variable rate, this field may be disregarded.

#### See

MatterSpecification.v11.Cluster § 1.6.6.2.2

#### Inherited from

`TypeFromSchema.rate`

#### Source

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:92
