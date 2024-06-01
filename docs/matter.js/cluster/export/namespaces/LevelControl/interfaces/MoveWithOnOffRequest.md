[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [LevelControl](../README.md) / MoveWithOnOffRequest

# Interface: MoveWithOnOffRequest

Input to the LevelControl moveWithOnOff command

## See

MatterSpecification.v11.Cluster § 1.6.6

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvMoveWithOnOffRequest`](../README.md#tlvmovewithonoffrequest)\>

## Properties

### moveMode

> **moveMode**: [`MoveMode`](../enumerations/MoveMode.md)

#### Inherited from

`TypeFromSchema.moveMode`

#### Source

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:176](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L176)

***

### optionsMask

> **optionsMask**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### coupleColorTempToLevel

> **coupleColorTempToLevel**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsMask`

#### Source

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:178](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L178)

***

### optionsOverride

> **optionsOverride**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### coupleColorTempToLevel

> **coupleColorTempToLevel**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

#### Inherited from

`TypeFromSchema.optionsOverride`

#### Source

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:179](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L179)

***

### rate

> **rate**: `null` \| `number`

#### Inherited from

`TypeFromSchema.rate`

#### Source

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:177](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L177)
