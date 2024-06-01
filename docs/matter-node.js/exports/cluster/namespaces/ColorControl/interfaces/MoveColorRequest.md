[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [ColorControl](../README.md) / MoveColorRequest

# Interface: MoveColorRequest

Input to the ColorControl moveColor command

## See

MatterSpecification.v11.Cluster § 3.2.11.12

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvMoveColorRequest`](../README.md#tlvmovecolorrequest)\>

## Properties

### optionsMask

> **optionsMask**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../schema/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsMask`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:331

***

### optionsOverride

> **optionsOverride**: [`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../schema/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsOverride`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:334

***

### rateX

> **rateX**: `number`

The RateX field specifies the rate of movement in steps per second. A step is a change in the device’s
CurrentX attribute of one unit.

#### See

MatterSpecification.v11.Cluster § 3.2.11.12.1

#### Inherited from

`TypeFromSchema.rateX`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:323

***

### rateY

> **rateY**: `number`

The RateY field specifies the rate of movement in steps per second. A step is a change in the device’s
CurrentY attribute of one unit.

#### See

MatterSpecification.v11.Cluster § 3.2.11.12.2

#### Inherited from

`TypeFromSchema.rateY`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ColorControlCluster.d.ts:330
