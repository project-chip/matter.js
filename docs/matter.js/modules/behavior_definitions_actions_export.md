[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/actions/export

# Module: behavior/definitions/actions/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_actions_export._internal_.md)

### Namespaces

- [ActionsBehavior](behavior_definitions_actions_export.ActionsBehavior.md)
- [ActionsInterface](behavior_definitions_actions_export.ActionsInterface.md)

### Classes

- [ActionsServer](../classes/behavior_definitions_actions_export.ActionsServer.md)

### Interfaces

- [ActionsBehavior](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md)

### Type Aliases

- [ActionsInterface](behavior_definitions_actions_export.md#actionsinterface)
- [DisableActionRequest](behavior_definitions_actions_export.md#disableactionrequest)
- [DisableActionWithDurationRequest](behavior_definitions_actions_export.md#disableactionwithdurationrequest)
- [EnableActionRequest](behavior_definitions_actions_export.md#enableactionrequest)
- [EnableActionWithDurationRequest](behavior_definitions_actions_export.md#enableactionwithdurationrequest)
- [InstantActionRequest](behavior_definitions_actions_export.md#instantactionrequest)
- [InstantActionWithTransitionRequest](behavior_definitions_actions_export.md#instantactionwithtransitionrequest)
- [PauseActionRequest](behavior_definitions_actions_export.md#pauseactionrequest)
- [PauseActionWithDurationRequest](behavior_definitions_actions_export.md#pauseactionwithdurationrequest)
- [ResumeActionRequest](behavior_definitions_actions_export.md#resumeactionrequest)
- [StartActionRequest](behavior_definitions_actions_export.md#startactionrequest)
- [StartActionWithDurationRequest](behavior_definitions_actions_export.md#startactionwithdurationrequest)
- [StopActionRequest](behavior_definitions_actions_export.md#stopactionrequest)

### Variables

- [ActionsBehavior](behavior_definitions_actions_export.md#actionsbehavior)

## Type Aliases

### ActionsInterface

Ƭ **ActionsInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: {} ; `methods`: [`Base`](../interfaces/behavior_definitions_actions_export.ActionsInterface.Base.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:158](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L158)

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:312](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L312)

___

### DisableActionRequest

Ƭ **DisableActionRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvDisableActionRequest`](cluster_export.Actions.md#tlvdisableactionrequest)\>

This command disables a certain action or automation, and shall change the action’s state to Inactive.

Example: disable a motion sensor to no longer control the lights in an area.

**`See`**

MatterSpecification.v11.Core § 9.14.6.11

#### Defined in

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:142](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L142)

___

### DisableActionWithDurationRequest

Ƭ **DisableActionWithDurationRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvDisableActionWithDurationRequest`](cluster_export.Actions.md#tlvdisableactionwithdurationrequest)\>

This command disables a certain action or automation, and shall change the action’s state to Disabled. After the
specified Duration, the action or automation will re-start, and the action’s state shall change to either Inactive
or Active, depending on the actions (see examples 4 and 6).

Example: disable a "wakeup" experience for a period of 1 week when going on holiday (to prevent them from turning on
in the morning while you’re not at home). After this period, the wakeup experience will control the lights as before.

This field shall indicate the requested duration in seconds.

**`See`**

MatterSpecification.v11.Core § 9.14.6.12

#### Defined in

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:156](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L156)

___

### EnableActionRequest

Ƭ **EnableActionRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvEnableActionRequest`](cluster_export.Actions.md#tlvenableactionrequest)\>

This command enables a certain action or automation. Afterwards, the action’s state shall be Active.

Example: enable a motion sensor to control the lights in an area.

**`See`**

MatterSpecification.v11.Core § 9.14.6.9

#### Defined in

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:119](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L119)

___

### EnableActionWithDurationRequest

Ƭ **EnableActionWithDurationRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvEnableActionWithDurationRequest`](cluster_export.Actions.md#tlvenableactionwithdurationrequest)\>

This command enables a certain action or automation, and shall change the action’s state to be Active. After the
specified Duration, the action or automation will stop, and the action’s state shall change to Disabled.

Example: enable a "presence mimicking" behavior for the lights in your home during a vacation; the Duration field is
used to indicated the length of your absence from home. After that period, the presence mimicking behavior will no
longer control these lights.

This field shall indicate the requested duration in seconds.

**`See`**

MatterSpecification.v11.Core § 9.14.6.10

#### Defined in

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:133](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L133)

___

### InstantActionRequest

Ƭ **InstantActionRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvInstantActionRequest`](cluster_export.Actions.md#tlvinstantactionrequest)\>

This command triggers an action (state change) on the involved endpoints, in a "fire and forget" manner. Afterwards,
the action’s state shall be Inactive.

Example: recall a scene on a number of lights.

**`See`**

MatterSpecification.v11.Core § 9.14.6.1

#### Defined in

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L21)

___

### InstantActionWithTransitionRequest

Ƭ **InstantActionWithTransitionRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvInstantActionWithTransitionRequest`](cluster_export.Actions.md#tlvinstantactionwithtransitionrequest)\>

It is recommended that, where possible (e.g., it is not possible for attributes with Boolean data type), a gradual
transition SHOULD take place from the old to the new state over this time period. However, the exact transition is
manufacturer dependent.

This command triggers an action (state change) on the involved endpoints, with a specified time to transition from
the current state to the new state. During the transition, the action’s state shall be Active. Afterwards, the
action’s state shall be Inactive.

Example: recall a scene on a number of lights, with a specified transition time.

**`See`**

MatterSpecification.v11.Core § 9.14.6.2

#### Defined in

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:36](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L36)

___

### PauseActionRequest

Ƭ **PauseActionRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvPauseActionRequest`](cluster_export.Actions.md#tlvpauseactionrequest)\>

This command pauses an ongoing action, and shall change the action’s state to Paused.

Example: pause a dynamic lighting effect (the lights stay at their current color) which was previously started with
StartAction.

**`See`**

MatterSpecification.v11.Core § 9.14.6.6

#### Defined in

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L80)

___

### PauseActionWithDurationRequest

Ƭ **PauseActionWithDurationRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvPauseActionWithDurationRequest`](cluster_export.Actions.md#tlvpauseactionwithdurationrequest)\>

This command pauses an ongoing action, and shall change the action’s state to Paused. After the specified Duration,
the ongoing action will be automatically resumed. which shall change the action’s state to Active.

Example: pause a dynamic lighting effect (the lights stay at their current color) for 10 minutes (Duration=600).

The difference between Pause/Resume and Disable/Enable is on the one hand semantic (the former is more of a
transitionary nature while the latter is more permanent) and on the other hand these can be implemented slightly
differently in the implementation of the action (e.g. a Pause would be automatically resumed after some hours or
during a nightly reset, while an Disable would remain in effect until explicitly enabled again).

This field shall indicate the requested duration in seconds.

**`See`**

MatterSpecification.v11.Core § 9.14.6.7

#### Defined in

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:97](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L97)

___

### ResumeActionRequest

Ƭ **ResumeActionRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvResumeActionRequest`](cluster_export.Actions.md#tlvresumeactionrequest)\>

This command resumes a previously paused action, and shall change the action’s state to Active.

The difference between ResumeAction and StartAction is that ResumeAction will continue the action from the state
where it was paused, while StartAction will start the action from the beginning.

Example: resume a dynamic lighting effect (the lights' colors will change gradually, continuing from the point they
were paused).

**`See`**

MatterSpecification.v11.Core § 9.14.6.8

#### Defined in

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:110](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L110)

___

### StartActionRequest

Ƭ **StartActionRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvStartActionRequest`](cluster_export.Actions.md#tlvstartactionrequest)\>

This command triggers the commencement of an action on the involved endpoints. Afterwards, the action’s state shall
be Active.

Example: start a dynamic lighting pattern (such as gradually rotating the colors around the setpoints of the scene)
on a set of lights.

Example: start a sequence of events such as a wake-up experience involving lights moving through several
brightness/color combinations and the window covering gradually opening.

**`See`**

MatterSpecification.v11.Core § 9.14.6.3

#### Defined in

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L50)

___

### StartActionWithDurationRequest

Ƭ **StartActionWithDurationRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvStartActionWithDurationRequest`](cluster_export.Actions.md#tlvstartactionwithdurationrequest)\>

This command triggers the commencement of an action on the involved endpoints, and shall change the action’s state
to Active. After the specified Duration, the action will stop, and the action’s state shall change to Inactive.

Example: start a dynamic lighting pattern (such as gradually rotating the colors around the setpoints of the scene)
on a set of lights for 1 hour (Duration=3600).

**`See`**

MatterSpecification.v11.Core § 9.14.6.4

#### Defined in

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:61](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L61)

___

### StopActionRequest

Ƭ **StopActionRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvStopActionRequest`](cluster_export.Actions.md#tlvstopactionrequest)\>

This command stops the ongoing action on the involved endpoints. Afterwards, the action’s state shall be Inactive.

Example: stop a dynamic lighting pattern which was previously started with StartAction.

**`See`**

MatterSpecification.v11.Core § 9.14.6.5

#### Defined in

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:70](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L70)

## Variables

### ActionsBehavior

• `Const` **ActionsBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.Actions.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`ActionsInterface`](behavior_definitions_actions_export.md#actionsinterface)\>, [`ActionsInterface`](behavior_definitions_actions_export.md#actionsinterface)\>

ActionsBehavior is the base class for objects that support interaction with [Actions.Cluster](cluster_export.Actions.md#cluster).

#### Defined in

[packages/matter.js/src/behavior/definitions/actions/ActionsBehavior.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/actions/ActionsBehavior.ts#L16)

[packages/matter.js/src/behavior/definitions/actions/ActionsBehavior.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/actions/ActionsBehavior.ts#L21)

[packages/matter.js/src/behavior/definitions/actions/ActionsBehavior.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/actions/ActionsBehavior.ts#L23)
