[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [ColorControl](../README.md) / MoveColorRequest

# Interface: MoveColorRequest

Input to the ColorControl moveColor command

## See

MatterSpecification.v11.Cluster § 3.2.11.12

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvMoveColorRequest`](../README.md#tlvmovecolorrequest)\>

## Properties

### optionsMask

> **optionsMask**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsMask`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:342](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L342)

***

### optionsOverride

> **optionsOverride**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsOverride`

#### Source

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:343](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L343)

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

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:332](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L332)

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

[packages/matter.js/src/cluster/definitions/ColorControlCluster.ts:340](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ColorControlCluster.ts#L340)
