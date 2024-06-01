[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [LevelControl](../README.md) / MoveToLevelWithOnOffRequest

# Interface: MoveToLevelWithOnOffRequest

Input to the LevelControl moveToLevelWithOnOff command

## See

MatterSpecification.v11.Cluster § 1.6.6

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvMoveToLevelWithOnOffRequest`](../README.md#tlvmovetolevelwithonoffrequest)\>

## Properties

### level

> **level**: `number`

#### Inherited from

`TypeFromSchema.level`

#### Source

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:157](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L157)

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

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:159](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L159)

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

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:160](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L160)

***

### transitionTime

> **transitionTime**: `null` \| `number`

#### Inherited from

`TypeFromSchema.transitionTime`

#### Source

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:158](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L158)
