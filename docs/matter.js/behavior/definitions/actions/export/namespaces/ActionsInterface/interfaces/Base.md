[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/actions/export](../../../README.md) / [ActionsInterface](../README.md) / Base

# Interface: Base

## Methods

### disableAction()

> **disableAction**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

This command disables a certain action or automation, and shall change the action’s state to Inactive.

Example: disable a motion sensor to no longer control the lights in an area.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Core § 9.14.6.11

#### Source

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:283](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L283)

***

### disableActionWithDuration()

> **disableActionWithDuration**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

This command disables a certain action or automation, and shall change the action’s state to Disabled. After
the specified Duration, the action or automation will re-start, and the action’s state shall change to
either Inactive or Active, depending on the actions (see examples 4 and 6).

Example: disable a "wakeup" experience for a period of 1 week when going on holiday (to prevent them from
turning on in the morning while you’re not at home). After this period, the wakeup experience will control
the lights as before.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Core § 9.14.6.12

#### Source

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:296](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L296)

***

### enableAction()

> **enableAction**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

This command enables a certain action or automation. Afterwards, the action’s state shall be Active.

Example: enable a motion sensor to control the lights in an area.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Core § 9.14.6.9

#### Source

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:262](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L262)

***

### enableActionWithDuration()

> **enableActionWithDuration**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

This command enables a certain action or automation, and shall change the action’s state to be Active. After
the specified Duration, the action or automation will stop, and the action’s state shall change to Disabled.

Example: enable a "presence mimicking" behavior for the lights in your home during a vacation; the Duration
field is used to indicated the length of your absence from home. After that period, the presence mimicking
behavior will no longer control these lights.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Core § 9.14.6.10

#### Source

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:274](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L274)

***

### instantAction()

> **instantAction**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

This command triggers an action (state change) on the involved endpoints, in a "fire and forget" manner.
Afterwards, the action’s state shall be Inactive.

Example: recall a scene on a number of lights.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Core § 9.14.6.1

#### Source

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:162](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L162)

***

### instantActionWithTransition()

> **instantActionWithTransition**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

It is recommended that, where possible (e.g., it is not possible for attributes with Boolean data type), a
gradual transition SHOULD take place from the old to the new state over this time period. However, the exact
transition is manufacturer dependent.

This command triggers an action (state change) on the involved endpoints, with a specified time to
transition from the current state to the new state. During the transition, the action’s state shall be
Active. Afterwards, the action’s state shall be Inactive.

Example: recall a scene on a number of lights, with a specified transition time.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Core § 9.14.6.2

#### Source

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:177](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L177)

***

### pauseAction()

> **pauseAction**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

This command pauses an ongoing action, and shall change the action’s state to Paused.

Example: pause a dynamic lighting effect (the lights stay at their current color) which was previously
started with StartAction.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Core § 9.14.6.6

#### Source

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:223](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L223)

***

### pauseActionWithDuration()

> **pauseActionWithDuration**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

This command pauses an ongoing action, and shall change the action’s state to Paused. After the specified
Duration, the ongoing action will be automatically resumed. which shall change the action’s state to Active.

Example: pause a dynamic lighting effect (the lights stay at their current color) for 10 minutes
(Duration=600).

The difference between Pause/Resume and Disable/Enable is on the one hand semantic (the former is more of a
transitionary nature while the latter is more permanent) and on the other hand these can be implemented
slightly differently in the implementation of the action (e.g. a Pause would be automatically resumed after
some hours or during a nightly reset, while an Disable would remain in effect until explicitly enabled
again).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Core § 9.14.6.7

#### Source

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:240](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L240)

***

### resumeAction()

> **resumeAction**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

This command resumes a previously paused action, and shall change the action’s state to Active.

The difference between ResumeAction and StartAction is that ResumeAction will continue the action from the
state where it was paused, while StartAction will start the action from the beginning.

Example: resume a dynamic lighting effect (the lights' colors will change gradually, continuing from the
point they were paused).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Core § 9.14.6.8

#### Source

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:253](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L253)

***

### startAction()

> **startAction**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

This command triggers the commencement of an action on the involved endpoints. Afterwards, the action’s
state shall be Active.

Example: start a dynamic lighting pattern (such as gradually rotating the colors around the setpoints of the
scene) on a set of lights.

Example: start a sequence of events such as a wake-up experience involving lights moving through several
brightness/color combinations and the window covering gradually opening.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Core § 9.14.6.3

#### Source

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:191](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L191)

***

### startActionWithDuration()

> **startActionWithDuration**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

This command triggers the commencement of an action on the involved endpoints, and shall change the action’s
state to Active. After the specified Duration, the action will stop, and the action’s state shall change to
Inactive.

Example: start a dynamic lighting pattern (such as gradually rotating the colors around the setpoints of the
scene) on a set of lights for 1 hour (Duration=3600).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Core § 9.14.6.4

#### Source

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:203](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L203)

***

### stopAction()

> **stopAction**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

This command stops the ongoing action on the involved endpoints. Afterwards, the action’s state shall be
Inactive.

Example: stop a dynamic lighting pattern which was previously started with StartAction.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Core § 9.14.6.5

#### Source

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:213](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L213)
