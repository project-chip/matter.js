[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Actions](../modules/cluster_export.Actions.md) / ActionType

# Enumeration: ActionType

[cluster/export](../modules/cluster_export.md).[Actions](../modules/cluster_export.Actions.md).ActionType

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.4.2

## Table of contents

### Enumeration Members

- [Alarm](cluster_export.Actions.ActionType.md#alarm)
- [Automation](cluster_export.Actions.ActionType.md#automation)
- [Exception](cluster_export.Actions.ActionType.md#exception)
- [Notification](cluster_export.Actions.ActionType.md#notification)
- [Other](cluster_export.Actions.ActionType.md#other)
- [Scene](cluster_export.Actions.ActionType.md#scene)
- [Sequence](cluster_export.Actions.ActionType.md#sequence)

## Enumeration Members

### Alarm

• **Alarm** = ``6``

Higher priority notification

Similar to Notification but with a higher priority (and might override other endpoint states which
Type=Notification would not override).

Example: flash all lights in the house when CO sensor triggers.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.4.2.6

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:108](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L108)

___

### Automation

• **Automation** = ``3``

Control an automation (e.g. motion sensor controlling lights)

Indications an automation (e.g. a motion sensor controlling lights, an alarm system) which can bee.g.
started, stopped, paused, resumed. Example: see example 3.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.4.2.3

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:72](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L72)

___

### Exception

• **Exception** = ``4``

Sequence that will run when something doesn’t happen

Indicates some action which the server will execute when a certain condition (which normally does not
happen) is not met.

Example: lock the doors when the server’s system has detected no one is at home while the doors are in the
'unlocked' state.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.4.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:85](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L85)

___

### Notification

• **Notification** = ``5``

Use the endpoints to send a message to user

Indicates an action that can be triggered (e.g. by InstantAction) to notify the user.

Example: play a pattern on the lights in the living room if there is someone in the garden in the evening.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.4.2.5

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:96](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L96)

___

### Other

• **Other** = ``0``

Use this only when none of the other values applies

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:34](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L34)

___

### Scene

• **Scene** = ``1``

Bring the endpoints into a certain state

Can be used to set a static state of the associated endpoints (typically using InstantAction or
InstantActionWithTransition), or to bring these endpoints into a more dynamic state (typically using
StartAction), where the endpoints would e.g. gradually cycle through certain colors for a pleasing effect. A
voice controller could use "set" (to map to InstantAction) or "play" (to map to StartAction) to trig

ger such actions.

Example: see examples 1 and 2.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.4.2.1

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:50](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L50)

___

### Sequence

• **Sequence** = ``2``

A sequence of states with a certain time pattern

Indicates an action which involves a sequence of events/states of the associated endpoints, such as a
wake-up experience.

Example: see example 4.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.14.4.2.2

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:62](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L62)
