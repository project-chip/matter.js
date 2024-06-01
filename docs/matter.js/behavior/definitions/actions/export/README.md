[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / behavior/definitions/actions/export

# behavior/definitions/actions/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [ActionsBehavior](namespaces/ActionsBehavior/README.md)
- [ActionsInterface](namespaces/ActionsInterface/README.md)

### Classes

- [ActionsServer](classes/ActionsServer.md)

### Interfaces

- [ActionsBehavior](interfaces/ActionsBehavior.md)

## Type Aliases

### ActionsInterface

> **ActionsInterface**: `object`

#### Type declaration

##### components

> **components**: [`object`]

#### Source

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:152](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L152)

***

### DisableActionRequest

> **DisableActionRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvDisableActionRequest`](../../../../cluster/export/namespaces/Actions/README.md#tlvdisableactionrequest)\>

This command disables a certain action or automation, and shall change the action’s state to Inactive.

Example: disable a motion sensor to no longer control the lights in an area.

#### See

MatterSpecification.v11.Core § 9.14.6.11

#### Source

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:138](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L138)

***

### DisableActionWithDurationRequest

> **DisableActionWithDurationRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvDisableActionWithDurationRequest`](../../../../cluster/export/namespaces/Actions/README.md#tlvdisableactionwithdurationrequest)\>

This command disables a certain action or automation, and shall change the action’s state to Disabled. After the
specified Duration, the action or automation will re-start, and the action’s state shall change to either Inactive
or Active, depending on the actions (see examples 4 and 6).

Example: disable a "wakeup" experience for a period of 1 week when going on holiday (to prevent them from turning on
in the morning while you’re not at home). After this period, the wakeup experience will control the lights as before.

#### See

MatterSpecification.v11.Core § 9.14.6.12

#### Source

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:150](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L150)

***

### EnableActionRequest

> **EnableActionRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvEnableActionRequest`](../../../../cluster/export/namespaces/Actions/README.md#tlvenableactionrequest)\>

This command enables a certain action or automation. Afterwards, the action’s state shall be Active.

Example: enable a motion sensor to control the lights in an area.

#### See

MatterSpecification.v11.Core § 9.14.6.9

#### Source

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:117](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L117)

***

### EnableActionWithDurationRequest

> **EnableActionWithDurationRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvEnableActionWithDurationRequest`](../../../../cluster/export/namespaces/Actions/README.md#tlvenableactionwithdurationrequest)\>

This command enables a certain action or automation, and shall change the action’s state to be Active. After the
specified Duration, the action or automation will stop, and the action’s state shall change to Disabled.

Example: enable a "presence mimicking" behavior for the lights in your home during a vacation; the Duration field is
used to indicated the length of your absence from home. After that period, the presence mimicking behavior will no
longer control these lights.

#### See

MatterSpecification.v11.Core § 9.14.6.10

#### Source

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:129](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L129)

***

### InstantActionRequest

> **InstantActionRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvInstantActionRequest`](../../../../cluster/export/namespaces/Actions/README.md#tlvinstantactionrequest)\>

This command triggers an action (state change) on the involved endpoints, in a "fire and forget" manner. Afterwards,
the action’s state shall be Inactive.

Example: recall a scene on a number of lights.

#### See

MatterSpecification.v11.Core § 9.14.6.1

#### Source

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L21)

***

### InstantActionWithTransitionRequest

> **InstantActionWithTransitionRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvInstantActionWithTransitionRequest`](../../../../cluster/export/namespaces/Actions/README.md#tlvinstantactionwithtransitionrequest)\>

It is recommended that, where possible (e.g., it is not possible for attributes with Boolean data type), a gradual
transition SHOULD take place from the old to the new state over this time period. However, the exact transition is
manufacturer dependent.

This command triggers an action (state change) on the involved endpoints, with a specified time to transition from
the current state to the new state. During the transition, the action’s state shall be Active. Afterwards, the
action’s state shall be Inactive.

Example: recall a scene on a number of lights, with a specified transition time.

#### See

MatterSpecification.v11.Core § 9.14.6.2

#### Source

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:36](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L36)

***

### PauseActionRequest

> **PauseActionRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvPauseActionRequest`](../../../../cluster/export/namespaces/Actions/README.md#tlvpauseactionrequest)\>

This command pauses an ongoing action, and shall change the action’s state to Paused.

Example: pause a dynamic lighting effect (the lights stay at their current color) which was previously started with
StartAction.

#### See

MatterSpecification.v11.Core § 9.14.6.6

#### Source

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L80)

***

### PauseActionWithDurationRequest

> **PauseActionWithDurationRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvPauseActionWithDurationRequest`](../../../../cluster/export/namespaces/Actions/README.md#tlvpauseactionwithdurationrequest)\>

This command pauses an ongoing action, and shall change the action’s state to Paused. After the specified Duration,
the ongoing action will be automatically resumed. which shall change the action’s state to Active.

Example: pause a dynamic lighting effect (the lights stay at their current color) for 10 minutes (Duration=600).

The difference between Pause/Resume and Disable/Enable is on the one hand semantic (the former is more of a
transitionary nature while the latter is more permanent) and on the other hand these can be implemented slightly
differently in the implementation of the action (e.g. a Pause would be automatically resumed after some hours or
during a nightly reset, while an Disable would remain in effect until explicitly enabled again).

#### See

MatterSpecification.v11.Core § 9.14.6.7

#### Source

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:95](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L95)

***

### ResumeActionRequest

> **ResumeActionRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvResumeActionRequest`](../../../../cluster/export/namespaces/Actions/README.md#tlvresumeactionrequest)\>

This command resumes a previously paused action, and shall change the action’s state to Active.

The difference between ResumeAction and StartAction is that ResumeAction will continue the action from the state
where it was paused, while StartAction will start the action from the beginning.

Example: resume a dynamic lighting effect (the lights' colors will change gradually, continuing from the point they
were paused).

#### See

MatterSpecification.v11.Core § 9.14.6.8

#### Source

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:108](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L108)

***

### StartActionRequest

> **StartActionRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvStartActionRequest`](../../../../cluster/export/namespaces/Actions/README.md#tlvstartactionrequest)\>

This command triggers the commencement of an action on the involved endpoints. Afterwards, the action’s state shall
be Active.

Example: start a dynamic lighting pattern (such as gradually rotating the colors around the setpoints of the scene)
on a set of lights.

Example: start a sequence of events such as a wake-up experience involving lights moving through several
brightness/color combinations and the window covering gradually opening.

#### See

MatterSpecification.v11.Core § 9.14.6.3

#### Source

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L50)

***

### StartActionWithDurationRequest

> **StartActionWithDurationRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvStartActionWithDurationRequest`](../../../../cluster/export/namespaces/Actions/README.md#tlvstartactionwithdurationrequest)\>

This command triggers the commencement of an action on the involved endpoints, and shall change the action’s state
to Active. After the specified Duration, the action will stop, and the action’s state shall change to Inactive.

Example: start a dynamic lighting pattern (such as gradually rotating the colors around the setpoints of the scene)
on a set of lights for 1 hour (Duration=3600).

#### See

MatterSpecification.v11.Core § 9.14.6.4

#### Source

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L61)

***

### StopActionRequest

> **StopActionRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvStopActionRequest`](../../../../cluster/export/namespaces/Actions/README.md#tlvstopactionrequest)\>

This command stops the ongoing action on the involved endpoints. Afterwards, the action’s state shall be Inactive.

Example: stop a dynamic lighting pattern which was previously started with StartAction.

#### See

MatterSpecification.v11.Core § 9.14.6.5

#### Source

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:70](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L70)

## Variables

### ActionsBehavior

> `const` **ActionsBehavior**: [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../cluster/export/namespaces/Actions/interfaces/Cluster.md), [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../cluster/export/namespaces/ClusterBehavior/README.md), [`ActionsInterface`](README.md#actionsinterface)\>, [`ActionsInterface`](README.md#actionsinterface)\>

ActionsBehavior is the base class for objects that support interaction with [Actions.Cluster](../../../../cluster/export/namespaces/Actions/README.md#cluster).

#### Source

[packages/matter.js/src/behavior/definitions/actions/ActionsBehavior.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/actions/ActionsBehavior.ts#L16)
