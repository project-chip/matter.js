[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/actions/export](../modules/behavior_definitions_actions_export.md) / ActionsBehavior

# Interface: ActionsBehavior

[behavior/definitions/actions/export](../modules/behavior_definitions_actions_export.md).ActionsBehavior

## Hierarchy

- [`ActionsBehaviorType`](../modules/behavior_definitions_actions_export._internal_.md#actionsbehaviortype)

  ↳ **`ActionsBehavior`**

  ↳↳ [`ActionsServer`](../classes/behavior_definitions_actions_export.ActionsServer.md)

## Table of contents

### Properties

- [#agent](behavior_definitions_actions_export.ActionsBehavior-1.md##agent)
- [[reference]](behavior_definitions_actions_export.ActionsBehavior-1.md#[reference])
- [agent](behavior_definitions_actions_export.ActionsBehavior-1.md#agent)
- [cluster](behavior_definitions_actions_export.ActionsBehavior-1.md#cluster)
- [context](behavior_definitions_actions_export.ActionsBehavior-1.md#context)
- [endpoint](behavior_definitions_actions_export.ActionsBehavior-1.md#endpoint)
- [events](behavior_definitions_actions_export.ActionsBehavior-1.md#events)
- [features](behavior_definitions_actions_export.ActionsBehavior-1.md#features)
- [session](behavior_definitions_actions_export.ActionsBehavior-1.md#session)
- [state](behavior_definitions_actions_export.ActionsBehavior-1.md#state)

### Methods

- [[asyncDispose]](behavior_definitions_actions_export.ActionsBehavior-1.md#[asyncdispose])
- [asAdmin](behavior_definitions_actions_export.ActionsBehavior-1.md#asadmin)
- [callback](behavior_definitions_actions_export.ActionsBehavior-1.md#callback)
- [disableAction](behavior_definitions_actions_export.ActionsBehavior-1.md#disableaction)
- [disableActionWithDuration](behavior_definitions_actions_export.ActionsBehavior-1.md#disableactionwithduration)
- [enableAction](behavior_definitions_actions_export.ActionsBehavior-1.md#enableaction)
- [enableActionWithDuration](behavior_definitions_actions_export.ActionsBehavior-1.md#enableactionwithduration)
- [initialize](behavior_definitions_actions_export.ActionsBehavior-1.md#initialize)
- [instantAction](behavior_definitions_actions_export.ActionsBehavior-1.md#instantaction)
- [instantActionWithTransition](behavior_definitions_actions_export.ActionsBehavior-1.md#instantactionwithtransition)
- [pauseAction](behavior_definitions_actions_export.ActionsBehavior-1.md#pauseaction)
- [pauseActionWithDuration](behavior_definitions_actions_export.ActionsBehavior-1.md#pauseactionwithduration)
- [reactTo](behavior_definitions_actions_export.ActionsBehavior-1.md#reactto)
- [resumeAction](behavior_definitions_actions_export.ActionsBehavior-1.md#resumeaction)
- [startAction](behavior_definitions_actions_export.ActionsBehavior-1.md#startaction)
- [startActionWithDuration](behavior_definitions_actions_export.ActionsBehavior-1.md#startactionwithduration)
- [stopAction](behavior_definitions_actions_export.ActionsBehavior-1.md#stopaction)
- [toString](behavior_definitions_actions_export.ActionsBehavior-1.md#tostring)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](../classes/endpoint_export.Agent-1.md)

#### Inherited from

ActionsBehaviorType.#agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L51)

___

### [reference]

• **[reference]**: [`Datasource`](behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

ActionsBehaviorType.[reference]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

___

### agent

• **agent**: [`Agent`](../classes/endpoint_export.Agent-1.md)

#### Inherited from

ActionsBehaviorType.agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

___

### cluster

• **cluster**: `never`

The implemented cluster.

#### Inherited from

ActionsBehaviorType.cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:280](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L280)

___

### context

• **context**: [`ActionContext`](behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

ActionsBehaviorType.context

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

___

### endpoint

• **endpoint**: [`Endpoint`](../classes/endpoint_export.Endpoint-1.md)\<[`Empty`](behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

ActionsBehaviorType.endpoint

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

___

### events

• `Readonly` **events**: [`EventEmitter`](../classes/util_export.EventEmitter-1.md) & `Omit`\<[`ClusterEvents`](../modules/behavior_cluster_export.md#clusterevents)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & \{ `actionList$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `endpointListId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `state`: [`FieldType`](tlv_export.FieldType.md)\<[`ActionState`](../enums/cluster_export.Actions.ActionState.md)\> ; `supportedCommands`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `disableAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `disableActionWithDuration`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enableAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enableActionWithDuration`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `instantAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `instantActionWithTransition`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pauseAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pauseActionWithDuration`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `resumeAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `startAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `startActionWithDuration`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopAction`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `type`: [`FieldType`](tlv_export.FieldType.md)\<[`ActionType`](../enums/cluster_export.Actions.ActionType.md)\>  }\>[], `any`\>\> ; `endpointLists$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `endpointListId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `endpoints`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `type`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointListType`](../enums/cluster_export.Actions.EndpointListType.md)\>  }\>[], `any`\>\>  } & \{ `setupUrl$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`string`, `any`\>\>  } & \{ `actionFailed`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `error`: [`FieldType`](tlv_export.FieldType.md)\<[`ActionError`](../enums/cluster_export.Actions.ActionError.md)\> ; `invokeId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `newState`: [`FieldType`](tlv_export.FieldType.md)\<[`ActionState`](../enums/cluster_export.Actions.ActionState.md)\>  }\>, `any`\>\> ; `stateChanged`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `newState`: [`FieldType`](tlv_export.FieldType.md)\<[`ActionState`](../enums/cluster_export.Actions.ActionState.md)\>  }\>, `any`\>\>  } & {}

Access the behavior's events.

#### Inherited from

ActionsBehaviorType.events

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L145)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:290](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L290)

___

### features

• **features**: `Object`

Supported features as a flag object.

#### Inherited from

ActionsBehaviorType.features

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:295](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L295)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:295](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L295)

___

### session

• **session**: [`SecureSession`](../classes/session_export.SecureSession.md)\<[`MatterDevice`](../classes/behavior_cluster_export._internal_.MatterDevice.md)\>

#### Inherited from

ActionsBehaviorType.session

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

___

### state

• `Readonly` **state**: `Omit`\<[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & \{ `actionList`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `endpointListId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `state`: [`FieldType`](tlv_export.FieldType.md)\<[`ActionState`](../enums/cluster_export.Actions.ActionState.md)\> ; `supportedCommands`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `disableAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `disableActionWithDuration`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enableAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enableActionWithDuration`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `instantAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `instantActionWithTransition`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pauseAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pauseActionWithDuration`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `resumeAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `startAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `startActionWithDuration`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopAction`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `type`: [`FieldType`](tlv_export.FieldType.md)\<[`ActionType`](../enums/cluster_export.Actions.ActionType.md)\>  }\>[] ; `endpointLists`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `endpointListId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `endpoints`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `type`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointListType`](../enums/cluster_export.Actions.EndpointListType.md)\>  }\>[]  } & \{ `setupUrl?`: `string`  } & {} & {}

Access the behavior's state.

#### Inherited from

ActionsBehaviorType.state

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:140](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L140)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:285](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L285)

## Methods

### [asyncDispose]

▸ **[asyncDispose]**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

ActionsBehaviorType.[asyncDispose]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:198](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L198)

___

### asAdmin

▸ **asAdmin**(`fn`): `void`

Execute logic with elevated privileges.

The provided function executes with privileges escalated to offline mode.  This is not commonly necessary.

Elevated logic effectively ignores ACLs so should be used with care.

Note that interactions with the behavior will remain elevated until the synchronous completion of this call.
You should only elevate privileges for synchronous logic.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | () => `void` | the elevated logic |

#### Returns

`void`

#### Inherited from

ActionsBehaviorType.asAdmin

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:125](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L125)

___

### callback

▸ **callback**\<`A`, `R`\>(`reactor`, `options?`): (...`args`: `A`) => `undefined` \| `R`

Create a generic callback function that has the same properties as a [Reactor](../modules/behavior_export.md#reactor).

Like a reactor, the callback's "this" will be bound to an active Behavior instance.
Because of this: The reactor MUST be a real JS function - arrow functions will not work!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `any`[] |
| `R` | `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reactor` | [`Reactor`](../modules/behavior_export.md#reactor)\<`A`, `R`\> |
| `options?` | [`Options`](behavior_export.Reactor.Options.md) |

#### Returns

`fn`

▸ (`...args`): `undefined` \| `R`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `A` |

##### Returns

`undefined` \| `R`

#### Inherited from

ActionsBehaviorType.callback

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L226)

___

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

#### Inherited from

ActionsBehaviorType.disableAction

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

#### Inherited from

ActionsBehaviorType.disableActionWithDuration

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

#### Inherited from

ActionsBehaviorType.enableAction

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

#### Inherited from

ActionsBehaviorType.enableActionWithDuration

#### Defined in

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:284](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L284)

___

### initialize

▸ **initialize**(`_options?`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Behaviors are ephemeral and should not perform initialization in their constructor.  They can override this
method instead.

This method may be synchronous or asyncronous.  If asynchronous, the behavior will not be available for external
use until initialization completes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | `Object` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

ActionsBehaviorType.initialize

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:192](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L192)

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

#### Inherited from

ActionsBehaviorType.instantAction

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

#### Inherited from

ActionsBehaviorType.instantActionWithTransition

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

#### Inherited from

ActionsBehaviorType.pauseAction

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

#### Inherited from

ActionsBehaviorType.pauseActionWithDuration

#### Defined in

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:248](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L248)

___

### reactTo

▸ **reactTo**\<`O`\>(`observable`, `reactor`, `options?`): `void`

Install a [Reactor](../modules/behavior_export.md#reactor).

Important: The reactor MUST be a real JS function - arrow functions will not work!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends [`Observable`](util_export.Observable.md)\<`any`[], `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `O` |
| `reactor` | [`Reactor`](../modules/behavior_export.md#reactor)\<`Parameters`\<`O`[``"emit"``]\>, `ReturnType`\<`O`[``"emit"``]\>\> |
| `options?` | [`Options`](behavior_export.Reactor.Options.md) |

#### Returns

`void`

#### Inherited from

ActionsBehaviorType.reactTo

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L212)

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

#### Inherited from

ActionsBehaviorType.resumeAction

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

#### Inherited from

ActionsBehaviorType.startAction

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

#### Inherited from

ActionsBehaviorType.startActionWithDuration

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

#### Inherited from

ActionsBehaviorType.stopAction

#### Defined in

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:219](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L219)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

ActionsBehaviorType.toString

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L203)
