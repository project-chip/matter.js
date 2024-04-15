[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/actions/export](../modules/behavior_definitions_actions_export.md) / [ActionsInterface](../modules/behavior_definitions_actions_export.ActionsInterface.md) / Base

# Interface: Base

[behavior/definitions/actions/export](../modules/behavior_definitions_actions_export.md).[ActionsInterface](../modules/behavior_definitions_actions_export.ActionsInterface.md).Base

## Table of contents

### Methods

- [disableAction](behavior_definitions_actions_export.ActionsInterface.Base.md#disableaction)
- [disableActionWithDuration](behavior_definitions_actions_export.ActionsInterface.Base.md#disableactionwithduration)
- [enableAction](behavior_definitions_actions_export.ActionsInterface.Base.md#enableaction)
- [enableActionWithDuration](behavior_definitions_actions_export.ActionsInterface.Base.md#enableactionwithduration)
- [instantAction](behavior_definitions_actions_export.ActionsInterface.Base.md#instantaction)
- [instantActionWithTransition](behavior_definitions_actions_export.ActionsInterface.Base.md#instantactionwithtransition)
- [pauseAction](behavior_definitions_actions_export.ActionsInterface.Base.md#pauseaction)
- [pauseActionWithDuration](behavior_definitions_actions_export.ActionsInterface.Base.md#pauseactionwithduration)
- [resumeAction](behavior_definitions_actions_export.ActionsInterface.Base.md#resumeaction)
- [startAction](behavior_definitions_actions_export.ActionsInterface.Base.md#startaction)
- [startActionWithDuration](behavior_definitions_actions_export.ActionsInterface.Base.md#startactionwithduration)
- [stopAction](behavior_definitions_actions_export.ActionsInterface.Base.md#stopaction)

## Methods

### disableAction

▸ **disableAction**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

This command disables a certain action or automation, and shall change the action’s state to Inactive.

Example: disable a motion sensor to no longer control the lights in an area.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 9.14.6.11

#### Defined in

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:293](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L293)

___

### disableActionWithDuration

▸ **disableActionWithDuration**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

This command disables a certain action or automation, and shall change the action’s state to Disabled. After
the specified Duration, the action or automation will re-start, and the action’s state shall change to
either Inactive or Active, depending on the actions (see examples 4 and 6).

Example: disable a "wakeup" experience for a period of 1 week when going on holiday (to prevent them from
turning on in the morning while you’re not at home). After this period, the wakeup experience will control
the lights as before.

This field shall indicate the requested duration in seconds.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `duration`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 9.14.6.12

#### Defined in

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:308](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L308)

___

### enableAction

▸ **enableAction**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

This command enables a certain action or automation. Afterwards, the action’s state shall be Active.

Example: enable a motion sensor to control the lights in an area.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 9.14.6.9

#### Defined in

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:270](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L270)

___

### enableActionWithDuration

▸ **enableActionWithDuration**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

This command enables a certain action or automation, and shall change the action’s state to be Active. After
the specified Duration, the action or automation will stop, and the action’s state shall change to Disabled.

Example: enable a "presence mimicking" behavior for the lights in your home during a vacation; the Duration
field is used to indicated the length of your absence from home. After that period, the presence mimicking
behavior will no longer control these lights.

This field shall indicate the requested duration in seconds.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `duration`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 9.14.6.10

#### Defined in

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:284](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L284)

___

### instantAction

▸ **instantAction**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

This command triggers an action (state change) on the involved endpoints, in a "fire and forget" manner.
Afterwards, the action’s state shall be Inactive.

Example: recall a scene on a number of lights.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 9.14.6.1

#### Defined in

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:168](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L168)

___

### instantActionWithTransition

▸ **instantActionWithTransition**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

It is recommended that, where possible (e.g., it is not possible for attributes with Boolean data type), a
gradual transition SHOULD take place from the old to the new state over this time period. However, the exact
transition is manufacturer dependent.

This command triggers an action (state change) on the involved endpoints, with a specified time to
transition from the current state to the new state. During the transition, the action’s state shall be
Active. Afterwards, the action’s state shall be Inactive.

Example: recall a scene on a number of lights, with a specified transition time.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 9.14.6.2

#### Defined in

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:183](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L183)

___

### pauseAction

▸ **pauseAction**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

This command pauses an ongoing action, and shall change the action’s state to Paused.

Example: pause a dynamic lighting effect (the lights stay at their current color) which was previously
started with StartAction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 9.14.6.6

#### Defined in

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:229](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L229)

___

### pauseActionWithDuration

▸ **pauseActionWithDuration**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

This command pauses an ongoing action, and shall change the action’s state to Paused. After the specified
Duration, the ongoing action will be automatically resumed. which shall change the action’s state to Active.

Example: pause a dynamic lighting effect (the lights stay at their current color) for 10 minutes
(Duration=600).

The difference between Pause/Resume and Disable/Enable is on the one hand semantic (the former is more of a
transitionary nature while the latter is more permanent) and on the other hand these can be implemented
slightly differently in the implementation of the action (e.g. a Pause would be automatically resumed after
some hours or during a nightly reset, while an Disable would remain in effect until explicitly enabled
again).

This field shall indicate the requested duration in seconds.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `duration`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 9.14.6.7

#### Defined in

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:248](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L248)

___

### resumeAction

▸ **resumeAction**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

This command resumes a previously paused action, and shall change the action’s state to Active.

The difference between ResumeAction and StartAction is that ResumeAction will continue the action from the
state where it was paused, while StartAction will start the action from the beginning.

Example: resume a dynamic lighting effect (the lights' colors will change gradually, continuing from the
point they were paused).

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 9.14.6.8

#### Defined in

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:261](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L261)

___

### startAction

▸ **startAction**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

This command triggers the commencement of an action on the involved endpoints. Afterwards, the action’s
state shall be Active.

Example: start a dynamic lighting pattern (such as gradually rotating the colors around the setpoints of the
scene) on a set of lights.

Example: start a sequence of events such as a wake-up experience involving lights moving through several
brightness/color combinations and the window covering gradually opening.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 9.14.6.3

#### Defined in

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:197](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L197)

___

### startActionWithDuration

▸ **startActionWithDuration**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

This command triggers the commencement of an action on the involved endpoints, and shall change the action’s
state to Active. After the specified Duration, the action will stop, and the action’s state shall change to
Inactive.

Example: start a dynamic lighting pattern (such as gradually rotating the colors around the setpoints of the
scene) on a set of lights for 1 hour (Duration=3600).

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `duration`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 9.14.6.4

#### Defined in

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:209](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L209)

___

### stopAction

▸ **stopAction**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

This command stops the ongoing action on the involved endpoints. Afterwards, the action’s state shall be
Inactive.

Example: stop a dynamic lighting pattern which was previously started with StartAction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 9.14.6.5

#### Defined in

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:219](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L219)
