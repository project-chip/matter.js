[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/switch/export](../modules/behavior_definitions_switch_export.md) / [SwitchServerLogic](../modules/behavior_definitions_switch_export.SwitchServerLogic.md) / State

# Class: State

[behavior/definitions/switch/export](../modules/behavior_definitions_switch_export.md).[SwitchServerLogic](../modules/behavior_definitions_switch_export.SwitchServerLogic.md).State

## Hierarchy

- `State`

  ↳ **`State`**

## Table of contents

### Constructors

- [constructor](behavior_definitions_switch_export.SwitchServerLogic.State.md#constructor)

### Properties

- [currentPosition](behavior_definitions_switch_export.SwitchServerLogic.State.md#currentposition)
- [debounceDelay](behavior_definitions_switch_export.SwitchServerLogic.State.md#debouncedelay)
- [longPressDelay](behavior_definitions_switch_export.SwitchServerLogic.State.md#longpressdelay)
- [momentaryNeutralPosition](behavior_definitions_switch_export.SwitchServerLogic.State.md#momentaryneutralposition)
- [multiPressDelay](behavior_definitions_switch_export.SwitchServerLogic.State.md#multipressdelay)
- [multiPressMax](behavior_definitions_switch_export.SwitchServerLogic.State.md#multipressmax)
- [numberOfPositions](behavior_definitions_switch_export.SwitchServerLogic.State.md#numberofpositions)
- [rawPosition](behavior_definitions_switch_export.SwitchServerLogic.State.md#rawposition)

## Constructors

### constructor

• **new State**(): [`State`](behavior_definitions_switch_export.SwitchServerLogic.State.md)

#### Returns

[`State`](behavior_definitions_switch_export.SwitchServerLogic.State.md)

#### Inherited from

SwitchServerBase.State.constructor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:216](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L216)

## Properties

### currentPosition

• **currentPosition**: `number`

This attribute shall indicate the position of the switch. The valid range is zero to
NumberOfPositions-1. CurrentPosition value 0 shall be assigned to the default position of the switch:
for example the "open" state of a rocker switch, or the "idle" state of a push button switch.

**`See`**

MatterSpecification.v11.Cluster § 1.11.5.2

#### Inherited from

SwitchServerBase.State.currentPosition

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:360](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L360)

___

### debounceDelay

• **debounceDelay**: `number` = `0`

Debounce Delay to wait until a newly reported raw position is considered stable and written to the
currentPosition attribue.

#### Defined in

[packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts:263](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts#L263)

___

### longPressDelay

• **longPressDelay**: `number` = `0`

Time to wait until a value is considered "long" pressed

#### Defined in

[packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts:266](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts#L266)

___

### momentaryNeutralPosition

• **momentaryNeutralPosition**: `number` = `0`

Number of the position considered as the neutral position for the momentary switch.

#### Defined in

[packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts:272](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts#L272)

___

### multiPressDelay

• **multiPressDelay**: `number` = `0`

Timeframe starting with a stable release to detect multi-presses.

#### Defined in

[packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts:269](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts#L269)

___

### multiPressMax

• `Optional` **multiPressMax**: `number`

#### Inherited from

SwitchServerBase.State.multiPressMax

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:428](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L428)

___

### numberOfPositions

• **numberOfPositions**: `number`

This attribute shall indicate the maximum number of positions the switch has. Any kind of switch has a
minimum of 2 positions. Also see Section 1.11.10, “NumberOfPositions > 2” for the case
NumberOfPositions>2.

**`See`**

MatterSpecification.v11.Cluster § 1.11.5.1

#### Inherited from

SwitchServerBase.State.numberOfPositions

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:351](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L351)

___

### rawPosition

• **rawPosition**: `number` = `0`

Raw position of the switch. Set this to debounce the value.

#### Defined in

[packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts:257](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts#L257)
