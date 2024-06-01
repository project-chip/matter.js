[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/switch/export](../../../README.md) / [SwitchServerLogic](../README.md) / State

# Class: State

## Extends

- `State`

## Constructors

### new State()

> **new State**(): [`State`](State.md)

#### Returns

[`State`](State.md)

#### Inherited from

`SwitchServerBase.State.constructor`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:216](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L216)

## Properties

### currentPosition

> **currentPosition**: `number`

This attribute shall indicate the position of the switch. The valid range is zero to
NumberOfPositions-1. CurrentPosition value 0 shall be assigned to the default position of the switch:
for example the "open" state of a rocker switch, or the "idle" state of a push button switch.

#### See

MatterSpecification.v11.Cluster § 1.11.5.2

#### Inherited from

`SwitchServerBase.State.currentPosition`

#### Source

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:360](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L360)

***

### debounceDelay

> **debounceDelay**: `number` = `0`

Debounce Delay to wait until a newly reported raw position is considered stable and written to the
currentPosition attribue.

#### Source

[packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts:263](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts#L263)

***

### longPressDelay

> **longPressDelay**: `number` = `0`

Time to wait until a value is considered "long" pressed

#### Source

[packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts:266](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts#L266)

***

### momentaryNeutralPosition

> **momentaryNeutralPosition**: `number` = `0`

Number of the position considered as the neutral position for the momentary switch.

#### Source

[packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts:272](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts#L272)

***

### multiPressDelay

> **multiPressDelay**: `number` = `0`

Timeframe starting with a stable release to detect multi-presses.

#### Source

[packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts:269](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts#L269)

***

### multiPressMax?

> `optional` **multiPressMax**: `number`

#### Inherited from

`SwitchServerBase.State.multiPressMax`

#### Source

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:428](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L428)

***

### numberOfPositions

> **numberOfPositions**: `number`

This attribute shall indicate the maximum number of positions the switch has. Any kind of switch has a
minimum of 2 positions. Also see Section 1.11.10, “NumberOfPositions > 2” for the case
NumberOfPositions>2.

#### See

MatterSpecification.v11.Cluster § 1.11.5.1

#### Inherited from

`SwitchServerBase.State.numberOfPositions`

#### Source

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:351](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L351)

***

### rawPosition

> **rawPosition**: `number` = `0`

Raw position of the switch. Set this to debounce the value.

#### Source

[packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts:257](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts#L257)
