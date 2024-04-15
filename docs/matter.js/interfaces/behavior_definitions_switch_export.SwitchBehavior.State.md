[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/switch/export](../modules/behavior_definitions_switch_export.md) / [SwitchBehavior](../modules/behavior_definitions_switch_export.SwitchBehavior.md) / State

# Interface: State

[behavior/definitions/switch/export](../modules/behavior_definitions_switch_export.md).[SwitchBehavior](../modules/behavior_definitions_switch_export.SwitchBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_switch_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [currentPosition](behavior_definitions_switch_export.SwitchBehavior.State.md#currentposition)
- [numberOfPositions](behavior_definitions_switch_export.SwitchBehavior.State.md#numberofpositions)

## Properties

### currentPosition

• **currentPosition**: `number`

This attribute shall indicate the position of the switch. The valid range is zero to
NumberOfPositions-1. CurrentPosition value 0 shall be assigned to the default position of the switch:
for example the "open" state of a rocker switch, or the "idle" state of a push button switch.

**`See`**

MatterSpecification.v11.Cluster § 1.11.5.2

#### Inherited from

StateType.currentPosition

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:360](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L360)

___

### numberOfPositions

• **numberOfPositions**: `number`

This attribute shall indicate the maximum number of positions the switch has. Any kind of switch has a
minimum of 2 positions. Also see Section 1.11.10, “NumberOfPositions > 2” for the case
NumberOfPositions>2.

**`See`**

MatterSpecification.v11.Cluster § 1.11.5.1

#### Inherited from

StateType.numberOfPositions

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:351](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L351)
