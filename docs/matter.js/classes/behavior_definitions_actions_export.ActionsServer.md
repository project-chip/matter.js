[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/actions/export](../modules/behavior_definitions_actions_export.md) / ActionsServer

# Class: ActionsServer

[behavior/definitions/actions/export](../modules/behavior_definitions_actions_export.md).ActionsServer

This is the default server implementation of [ActionsBehavior](../modules/behavior_definitions_actions_export.md#actionsbehavior).

## Hierarchy

- [`ActionsBehavior`](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md)

  ↳ **`ActionsServer`**

## Table of contents

### Constructors

- [constructor](behavior_definitions_actions_export.ActionsServer.md#constructor)

### Properties

- [#agent](behavior_definitions_actions_export.ActionsServer.md##agent)
- [[reference]](behavior_definitions_actions_export.ActionsServer.md#[reference])
- [agent](behavior_definitions_actions_export.ActionsServer.md#agent)
- [cluster](behavior_definitions_actions_export.ActionsServer.md#cluster)
- [context](behavior_definitions_actions_export.ActionsServer.md#context)
- [endpoint](behavior_definitions_actions_export.ActionsServer.md#endpoint)
- [events](behavior_definitions_actions_export.ActionsServer.md#events)
- [features](behavior_definitions_actions_export.ActionsServer.md#features)
- [session](behavior_definitions_actions_export.ActionsServer.md#session)
- [state](behavior_definitions_actions_export.ActionsServer.md#state)
- [Events](behavior_definitions_actions_export.ActionsServer.md#events-1)
- [Interface](behavior_definitions_actions_export.ActionsServer.md#interface)
- [Internal](behavior_definitions_actions_export.ActionsServer.md#internal)
- [State](behavior_definitions_actions_export.ActionsServer.md#state-1)
- [cluster](behavior_definitions_actions_export.ActionsServer.md#cluster-1)
- [defaults](behavior_definitions_actions_export.ActionsServer.md#defaults)
- [dependencies](behavior_definitions_actions_export.ActionsServer.md#dependencies)
- [early](behavior_definitions_actions_export.ActionsServer.md#early)
- [id](behavior_definitions_actions_export.ActionsServer.md#id)
- [name](behavior_definitions_actions_export.ActionsServer.md#name)
- [schema](behavior_definitions_actions_export.ActionsServer.md#schema)
- [supervisor](behavior_definitions_actions_export.ActionsServer.md#supervisor)
- [supports](behavior_definitions_actions_export.ActionsServer.md#supports)

### Methods

- [[asyncDispose]](behavior_definitions_actions_export.ActionsServer.md#[asyncdispose])
- [asAdmin](behavior_definitions_actions_export.ActionsServer.md#asadmin)
- [callback](behavior_definitions_actions_export.ActionsServer.md#callback)
- [disableAction](behavior_definitions_actions_export.ActionsServer.md#disableaction)
- [disableActionWithDuration](behavior_definitions_actions_export.ActionsServer.md#disableactionwithduration)
- [enableAction](behavior_definitions_actions_export.ActionsServer.md#enableaction)
- [enableActionWithDuration](behavior_definitions_actions_export.ActionsServer.md#enableactionwithduration)
- [initialize](behavior_definitions_actions_export.ActionsServer.md#initialize)
- [instantAction](behavior_definitions_actions_export.ActionsServer.md#instantaction)
- [instantActionWithTransition](behavior_definitions_actions_export.ActionsServer.md#instantactionwithtransition)
- [pauseAction](behavior_definitions_actions_export.ActionsServer.md#pauseaction)
- [pauseActionWithDuration](behavior_definitions_actions_export.ActionsServer.md#pauseactionwithduration)
- [reactTo](behavior_definitions_actions_export.ActionsServer.md#reactto)
- [resumeAction](behavior_definitions_actions_export.ActionsServer.md#resumeaction)
- [startAction](behavior_definitions_actions_export.ActionsServer.md#startaction)
- [startActionWithDuration](behavior_definitions_actions_export.ActionsServer.md#startactionwithduration)
- [stopAction](behavior_definitions_actions_export.ActionsServer.md#stopaction)
- [toString](behavior_definitions_actions_export.ActionsServer.md#tostring)
- [alter](behavior_definitions_actions_export.ActionsServer.md#alter)
- [enable](behavior_definitions_actions_export.ActionsServer.md#enable)
- [for](behavior_definitions_actions_export.ActionsServer.md#for)
- [set](behavior_definitions_actions_export.ActionsServer.md#set)
- [with](behavior_definitions_actions_export.ActionsServer.md#with)

## Constructors

### constructor

• **new ActionsServer**(`agent`, `backing`): [`ActionsServer`](behavior_definitions_actions_export.ActionsServer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |
| `backing` | [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md) |

#### Returns

[`ActionsServer`](behavior_definitions_actions_export.ActionsServer.md)

#### Inherited from

ActionsBehavior.constructor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:181](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L181)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

[ActionsBehavior](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md).[#agent](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md##agent)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L51)

___

### [reference]

• **[reference]**: [`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

[ActionsBehavior](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md).[[reference]](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md#[reference])

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

___

### agent

• **agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

[ActionsBehavior](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md).[agent](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md#agent)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

___

### cluster

• **cluster**: `never`

The implemented cluster.

#### Inherited from

[ActionsBehavior](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md).[cluster](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md#cluster)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:280](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L280)

___

### context

• **context**: [`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

[ActionsBehavior](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md).[context](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md#context)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

___

### endpoint

• **endpoint**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

[ActionsBehavior](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md).[endpoint](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md#endpoint)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

___

### events

• `Readonly` **events**: [`EventEmitter`](util_export.EventEmitter-1.md) & `Omit`\<[`ClusterEvents`](../modules/behavior_cluster_export.md#clusterevents)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & \{ `actionList$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `endpointListId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `state`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ActionState`](../enums/cluster_export.Actions.ActionState.md)\> ; `supportedCommands`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `disableAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `disableActionWithDuration`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enableAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enableActionWithDuration`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `instantAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `instantActionWithTransition`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pauseAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pauseActionWithDuration`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `resumeAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `startAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `startActionWithDuration`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopAction`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ActionType`](../enums/cluster_export.Actions.ActionType.md)\>  }\>[], `any`\>\> ; `endpointLists$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `endpointListId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `endpoints`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EndpointListType`](../enums/cluster_export.Actions.EndpointListType.md)\>  }\>[], `any`\>\>  } & \{ `setupUrl$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`string`, `any`\>\>  } & \{ `actionFailed`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `error`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ActionError`](../enums/cluster_export.Actions.ActionError.md)\> ; `invokeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `newState`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ActionState`](../enums/cluster_export.Actions.ActionState.md)\>  }\>, `any`\>\> ; `stateChanged`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `newState`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ActionState`](../enums/cluster_export.Actions.ActionState.md)\>  }\>, `any`\>\>  } & {}

Access the behavior's events.

#### Inherited from

[ActionsBehavior](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md).[events](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md#events)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L145)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:290](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L290)

___

### features

• **features**: `Object`

Supported features as a flag object.

#### Inherited from

[ActionsBehavior](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md).[features](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md#features)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:295](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L295)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:295](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L295)

___

### session

• **session**: [`SecureSession`](session_export.SecureSession.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Inherited from

[ActionsBehavior](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md).[session](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md#session)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

___

### state

• `Readonly` **state**: `Omit`\<[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & \{ `actionList`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `endpointListId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `state`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ActionState`](../enums/cluster_export.Actions.ActionState.md)\> ; `supportedCommands`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `disableAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `disableActionWithDuration`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enableAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `enableActionWithDuration`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `instantAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `instantActionWithTransition`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pauseAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pauseActionWithDuration`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `resumeAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `startAction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `startActionWithDuration`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopAction`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ActionType`](../enums/cluster_export.Actions.ActionType.md)\>  }\>[] ; `endpointLists`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `endpointListId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `endpoints`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EndpointListType`](../enums/cluster_export.Actions.EndpointListType.md)\>  }\>[]  } & \{ `setupUrl?`: `string`  } & {} & {}

Access the behavior's state.

#### Inherited from

[ActionsBehavior](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md).[state](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md#state)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:140](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L140)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:285](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L285)

___

### Events

▪ `Static` `Readonly` **Events**: [`Type`](../modules/behavior_cluster_export.ClusterEvents.md#type)\<[`Cluster`](../interfaces/cluster_export.Actions.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`ActionsInterface`](../modules/behavior_definitions_actions_export.md#actionsinterface)\>\>

#### Inherited from

ActionsBehavior.Events

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:195](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L195)

___

### Interface

▪ `Static` `Readonly` **Interface**: [`ActionsInterface`](../modules/behavior_definitions_actions_export.md#actionsinterface)

#### Inherited from

ActionsBehavior.Interface

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:198](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L198)

___

### Internal

▪ `Static` `Readonly` **Internal**: () => {}

#### Type declaration

• **new Internal**(): `Object`

##### Returns

`Object`

#### Inherited from

ActionsBehavior.Internal

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:197](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L197)

___

### State

▪ `Static` `Readonly` **State**: () => [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Cluster`](../interfaces/cluster_export.Actions.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`ActionsInterface`](../modules/behavior_definitions_actions_export.md#actionsinterface)\>\>

#### Type declaration

• **new State**(): [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Cluster`](../interfaces/cluster_export.Actions.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`ActionsInterface`](../modules/behavior_definitions_actions_export.md#actionsinterface)\>\>

##### Returns

[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Cluster`](../interfaces/cluster_export.Actions.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`ActionsInterface`](../modules/behavior_definitions_actions_export.md#actionsinterface)\>\>

#### Inherited from

ActionsBehavior.State

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:196](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L196)

___

### cluster

▪ `Static` `Readonly` **cluster**: [`Cluster`](../interfaces/cluster_export.Actions.Cluster.md)

Base cluster state include all attribute values but may be extended by subclasses.

#### Inherited from

ActionsBehavior.cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:193](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L193)

___

### defaults

▪ `Static` `Readonly` **defaults**: [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Cluster`](../interfaces/cluster_export.Actions.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`ActionsInterface`](../modules/behavior_definitions_actions_export.md#actionsinterface)\>\>

#### Inherited from

ActionsBehavior.defaults

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:202](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L202)

___

### dependencies

▪ `Static` `Optional` `Readonly` **dependencies**: `Iterable`\<[`Type`](../interfaces/behavior_export.Behavior.Type.md)\>

#### Inherited from

ActionsBehavior.dependencies

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:204](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L204)

___

### early

▪ `Static` `Readonly` **early**: `boolean`

#### Inherited from

ActionsBehavior.early

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

___

### id

▪ `Static` `Readonly` **id**: ``"actions"``

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

ActionsBehavior.id

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:188](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L188)

___

### name

▪ `Static` `Readonly` **name**: `string`

#### Inherited from

ActionsBehavior.name

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:183](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L183)

___

### schema

▪ `Static` `Optional` `Readonly` **schema**: [`Schema`](../modules/behavior_cluster_export._internal_.md#schema)

#### Inherited from

ActionsBehavior.schema

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:200](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L200)

___

### supervisor

▪ `Static` `Readonly` **supervisor**: [`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

#### Inherited from

ActionsBehavior.supervisor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:203](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L203)

___

### supports

▪ `Static` **supports**: (`other`: [`Type`](../interfaces/behavior_export.Behavior.Type.md)) => `boolean`

#### Type declaration

▸ (`other`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

##### Returns

`boolean`

#### Inherited from

ActionsBehavior.supports

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:205](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L205)

## Methods

### [asyncDispose]

▸ **[asyncDispose]**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

[ActionsBehavior](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md).[[asyncDispose]](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md#[asyncdispose])

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

[ActionsBehavior](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md).[asAdmin](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md#asadmin)

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
| `options?` | [`Options`](../interfaces/behavior_export.Reactor.Options.md) |

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

[ActionsBehavior](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md).[callback](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md#callback)

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
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 9.14.6.11

#### Inherited from

[ActionsBehavior](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md).[disableAction](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md#disableaction)

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
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `duration`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 9.14.6.12

#### Inherited from

[ActionsBehavior](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md).[disableActionWithDuration](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md#disableactionwithduration)

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
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 9.14.6.9

#### Inherited from

[ActionsBehavior](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md).[enableAction](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md#enableaction)

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
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `duration`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 9.14.6.10

#### Inherited from

[ActionsBehavior](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md).[enableActionWithDuration](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md#enableactionwithduration)

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

[ActionsBehavior](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md).[initialize](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md#initialize)

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
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 9.14.6.1

#### Inherited from

[ActionsBehavior](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md).[instantAction](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md#instantaction)

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
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 9.14.6.2

#### Inherited from

[ActionsBehavior](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md).[instantActionWithTransition](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md#instantactionwithtransition)

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
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 9.14.6.6

#### Inherited from

[ActionsBehavior](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md).[pauseAction](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md#pauseaction)

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
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `duration`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 9.14.6.7

#### Inherited from

[ActionsBehavior](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md).[pauseActionWithDuration](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md#pauseactionwithduration)

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
| `O` | extends [`Observable`](../interfaces/util_export.Observable.md)\<`any`[], `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `O` |
| `reactor` | [`Reactor`](../modules/behavior_export.md#reactor)\<`Parameters`\<`O`[``"emit"``]\>, `ReturnType`\<`O`[``"emit"``]\>\> |
| `options?` | [`Options`](../interfaces/behavior_export.Reactor.Options.md) |

#### Returns

`void`

#### Inherited from

[ActionsBehavior](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md).[reactTo](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md#reactto)

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
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 9.14.6.8

#### Inherited from

[ActionsBehavior](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md).[resumeAction](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md#resumeaction)

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
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 9.14.6.3

#### Inherited from

[ActionsBehavior](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md).[startAction](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md#startaction)

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
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `duration`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 9.14.6.4

#### Inherited from

[ActionsBehavior](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md).[startActionWithDuration](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md#startactionwithduration)

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
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `actionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 9.14.6.5

#### Inherited from

[ActionsBehavior](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md).[stopAction](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md#stopaction)

#### Defined in

[packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts:219](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/actions/ActionsInterface.ts#L219)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

[ActionsBehavior](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md).[toString](../interfaces/behavior_definitions_actions_export.ActionsBehavior-1.md#tostring)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L203)

___

### alter

▸ **alter**\<`This`, `AlterationsT`\>(`this`, `alterations`): [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<`This`[``"cluster"``], `AlterationsT`\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md), [`Type`](../interfaces/behavior_export.Behavior.Type.md), [`ClusterInterface`](../modules/behavior_cluster_export.md#clusterinterface)\<{}\>\> |
| `AlterationsT` | extends [`Alterations`](../modules/cluster_export.ElementModifier.md#alterations)\<`This`[``"cluster"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `alterations` | `AlterationsT` |

#### Returns

[`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<`This`[``"cluster"``], `AlterationsT`\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Inherited from

ActionsBehavior.alter

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:233](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L233)

___

### enable

▸ **enable**\<`This`, `FlagsT`\>(`this`, `flags`): [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<`This`[``"cluster"``], [`ElementFlagAlterations`](../modules/cluster_export.ElementModifier.md#elementflagalterations)\<`FlagsT`\>\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md), [`Type`](../interfaces/behavior_export.Behavior.Type.md), [`ClusterInterface`](../modules/behavior_cluster_export.md#clusterinterface)\<{}\>\> |
| `FlagsT` | extends [`ElementFlags`](../modules/cluster_export.ElementModifier.md#elementflags)\<`This`[``"cluster"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `flags` | `FlagsT` |

#### Returns

[`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<`This`[``"cluster"``], [`ElementFlagAlterations`](../modules/cluster_export.ElementModifier.md#elementflagalterations)\<`FlagsT`\>\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Inherited from

ActionsBehavior.enable

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:243](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L243)

___

### for

▸ **for**\<`This`, `ClusterT`\>(`this`, `cluster`, `schema?`): [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<`ClusterT`, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md), [`Type`](../interfaces/behavior_export.Behavior.Type.md), [`ClusterInterface`](../modules/behavior_cluster_export.md#clusterinterface)\<{}\>\> |
| `ClusterT` | extends [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `cluster` | `ClusterT` |
| `schema?` | [`Schema`](../modules/behavior_cluster_export._internal_.md#schema) |

#### Returns

[`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<`ClusterT`, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Inherited from

ActionsBehavior.for

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:219](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L219)

___

### set

▸ **set**\<`This`\>(`this`, `defaults`): `This`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `defaults` | `Partial`\<[`RelaxTypes`](../modules/cluster_export.ClusterType.md#relaxtypes)\<`InstanceType`\<`This`[``"State"``]\>\>\> |

#### Returns

`This`

#### Inherited from

ActionsBehavior.set

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:241](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L241)

___

### with

▸ **with**\<`This`, `FeaturesT`\>(`this`, `...features`): [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<`This`[``"cluster"``], `FeaturesT`\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md), [`Type`](../interfaces/behavior_export.Behavior.Type.md), [`ClusterInterface`](../modules/behavior_cluster_export.md#clusterinterface)\<{}\>\> |
| `FeaturesT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<`This`[``"cluster"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `...features` | `FeaturesT` |

#### Returns

[`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<`This`[``"cluster"``], `FeaturesT`\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Inherited from

ActionsBehavior.with

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)
