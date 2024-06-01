[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/switch/export](../../../README.md) / [SwitchBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### currentPosition

> **currentPosition**: `number`

This attribute shall indicate the position of the switch. The valid range is zero to
NumberOfPositions-1. CurrentPosition value 0 shall be assigned to the default position of the switch:
for example the "open" state of a rocker switch, or the "idle" state of a push button switch.

#### See

MatterSpecification.v11.Cluster § 1.11.5.2

#### Inherited from

`StateType.currentPosition`

#### Source

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:360](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L360)

***

### numberOfPositions

> **numberOfPositions**: `number`

This attribute shall indicate the maximum number of positions the switch has. Any kind of switch has a
minimum of 2 positions. Also see Section 1.11.10, “NumberOfPositions > 2” for the case
NumberOfPositions>2.

#### See

MatterSpecification.v11.Cluster § 1.11.5.1

#### Inherited from

`StateType.numberOfPositions`

#### Source

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:351](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L351)
