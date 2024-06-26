[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/on-off/export](../modules/behavior_definitions_on_off_export.md) / OnOffServer

# Class: OnOffServer

[behavior/definitions/on-off/export](../modules/behavior_definitions_on_off_export.md).OnOffServer

This is the default server implementation of [OnOffBehavior](../modules/behavior_definitions_on_off_export.md#onoffbehavior).

This implementation includes all features of [OnOff.Cluster](../modules/cluster_export.OnOff.md#cluster) and automatically enables the "Level Control
for Lighting" Feature. You should use [OnOffServer.with](behavior_definitions_on_off_export.OnOffServer-1.md#with) to specialize the class for the features your
implementation supports. Alternatively you can extend this class and override the methods you need to change or add
mandatory commands.

## Hierarchy

- [`Base`](../modules/behavior_definitions_on_off_export._internal_.md#base)

  ↳ **`OnOffServer`**

## Table of contents

### Constructors

- [constructor](behavior_definitions_on_off_export.OnOffServer-1.md#constructor)

### Properties

- [#agent](behavior_definitions_on_off_export.OnOffServer-1.md##agent)
- [[reference]](behavior_definitions_on_off_export.OnOffServer-1.md#[reference])
- [agent](behavior_definitions_on_off_export.OnOffServer-1.md#agent)
- [cluster](behavior_definitions_on_off_export.OnOffServer-1.md#cluster)
- [context](behavior_definitions_on_off_export.OnOffServer-1.md#context)
- [endpoint](behavior_definitions_on_off_export.OnOffServer-1.md#endpoint)
- [events](behavior_definitions_on_off_export.OnOffServer-1.md#events)
- [features](behavior_definitions_on_off_export.OnOffServer-1.md#features)
- [internal](behavior_definitions_on_off_export.OnOffServer-1.md#internal)
- [session](behavior_definitions_on_off_export.OnOffServer-1.md#session)
- [state](behavior_definitions_on_off_export.OnOffServer-1.md#state)
- [Events](behavior_definitions_on_off_export.OnOffServer-1.md#events-1)
- [ExtensionInterface](behavior_definitions_on_off_export.OnOffServer-1.md#extensioninterface)
- [Interface](behavior_definitions_on_off_export.OnOffServer-1.md#interface)
- [State](behavior_definitions_on_off_export.OnOffServer-1.md#state-1)
- [cluster](behavior_definitions_on_off_export.OnOffServer-1.md#cluster-1)
- [defaults](behavior_definitions_on_off_export.OnOffServer-1.md#defaults)
- [dependencies](behavior_definitions_on_off_export.OnOffServer-1.md#dependencies)
- [early](behavior_definitions_on_off_export.OnOffServer-1.md#early)
- [id](behavior_definitions_on_off_export.OnOffServer-1.md#id)
- [name](behavior_definitions_on_off_export.OnOffServer-1.md#name)
- [schema](behavior_definitions_on_off_export.OnOffServer-1.md#schema)
- [supervisor](behavior_definitions_on_off_export.OnOffServer-1.md#supervisor)
- [supports](behavior_definitions_on_off_export.OnOffServer-1.md#supports)

### Accessors

- [delayedOffTimer](behavior_definitions_on_off_export.OnOffServer-1.md#delayedofftimer)
- [timedOnTimer](behavior_definitions_on_off_export.OnOffServer-1.md#timedontimer)

### Methods

- [#delayedOffTick](behavior_definitions_on_off_export.OnOffServer-1.md##delayedofftick)
- [#getBootReason](behavior_definitions_on_off_export.OnOffServer-1.md##getbootreason)
- [#timedOnTick](behavior_definitions_on_off_export.OnOffServer-1.md##timedontick)
- [[asyncDispose]](behavior_definitions_on_off_export.OnOffServer-1.md#[asyncdispose])
- [asAdmin](behavior_definitions_on_off_export.OnOffServer-1.md#asadmin)
- [assertAttributeEnabled](behavior_definitions_on_off_export.OnOffServer-1.md#assertattributeenabled)
- [callback](behavior_definitions_on_off_export.OnOffServer-1.md#callback)
- [initialize](behavior_definitions_on_off_export.OnOffServer-1.md#initialize)
- [off](behavior_definitions_on_off_export.OnOffServer-1.md#off)
- [offWithEffect](behavior_definitions_on_off_export.OnOffServer-1.md#offwitheffect)
- [on](behavior_definitions_on_off_export.OnOffServer-1.md#on)
- [onWithRecallGlobalScene](behavior_definitions_on_off_export.OnOffServer-1.md#onwithrecallglobalscene)
- [onWithTimedOff](behavior_definitions_on_off_export.OnOffServer-1.md#onwithtimedoff)
- [reactTo](behavior_definitions_on_off_export.OnOffServer-1.md#reactto)
- [requireAttributeEnabled](behavior_definitions_on_off_export.OnOffServer-1.md#requireattributeenabled)
- [toString](behavior_definitions_on_off_export.OnOffServer-1.md#tostring)
- [toggle](behavior_definitions_on_off_export.OnOffServer-1.md#toggle)
- [alter](behavior_definitions_on_off_export.OnOffServer-1.md#alter)
- [enable](behavior_definitions_on_off_export.OnOffServer-1.md#enable)
- [for](behavior_definitions_on_off_export.OnOffServer-1.md#for)
- [set](behavior_definitions_on_off_export.OnOffServer-1.md#set)
- [with](behavior_definitions_on_off_export.OnOffServer-1.md#with)

## Constructors

### constructor

• **new OnOffServer**(`agent`, `backing`): [`OnOffServer`](behavior_definitions_on_off_export.OnOffServer-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |
| `backing` | [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md) |

#### Returns

[`OnOffServer`](behavior_definitions_on_off_export.OnOffServer-1.md)

#### Inherited from

Base.constructor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

Base.#agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L51)

___

### [reference]

• **[reference]**: [`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

Base.[reference]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L274)

___

### agent

• **agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

Base.agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L80)

___

### cluster

• **cluster**: `never`

The implemented cluster.

#### Inherited from

Base.cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:306](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L306)

___

### context

• **context**: [`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

Base.context

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L94)

___

### endpoint

• **endpoint**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

Base.endpoint

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L87)

___

### events

• `Readonly` **events**: [`EventEmitter`](util_export.EventEmitter-1.md) & `Omit`\<[`ClusterEvents`](../modules/behavior_cluster_export.md#clusterevents)\<[`Cluster`](../interfaces/cluster_export.OnOff.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`OnOffInterface`](../modules/behavior_definitions_on_off_export.md#onoffinterface)\>\>, ``"onOff$Changing"`` \| ``"onOff$Changed"``\> & \{ `globalSceneControl$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\>\> ; `offWaitTime$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `onOff$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\>\> ; `onTime$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `startUpOnOff$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| [`StartUpOnOff`](../enums/cluster_export.OnOff.StartUpOnOff.md), `any`\>\>  } & {} & \{ `globalSceneControl$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\>\> ; `offWaitTime$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `onOff$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\>\> ; `onTime$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `startUpOnOff$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| [`StartUpOnOff`](../enums/cluster_export.OnOff.StartUpOnOff.md), `any`\>\>  } & {} & {} & {}

Access the behavior's events.

#### Inherited from

Base.events

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L145)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:316](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L316)

___

### features

• **features**: [`FeaturesAsFlags`](../modules/cluster_export.ClusterComposer.md#featuresasflags)\<[`Cluster`](../interfaces/cluster_export.OnOff.Cluster.md), readonly [[`LevelControlForLighting`](../enums/cluster_export.OnOff.Feature.md#levelcontrolforlighting)]\>

Supported features as a flag object.

#### Inherited from

Base.features

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

___

### internal

• `Protected` **internal**: [`Internal`](behavior_definitions_on_off_export.OnOffServer.Internal.md)

#### Defined in

[packages/matter.js/src/behavior/definitions/on-off/OnOffServer.ts:27](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/on-off/OnOffServer.ts#L27)

___

### session

• **session**: [`SecureSession`](session_export.SecureSession.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Inherited from

Base.session

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L101)

___

### state

• `Readonly` **state**: `Omit`\<[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Cluster`](../interfaces/cluster_export.OnOff.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`OnOffInterface`](../modules/behavior_definitions_on_off_export.md#onoffinterface)\>\>, ``"onOff"``\> & \{ `globalSceneControl`: `boolean` ; `offWaitTime`: ``null`` \| `number` ; `onOff`: `boolean` ; `onTime`: ``null`` \| `number` ; `startUpOnOff`: ``null`` \| [`StartUpOnOff`](../enums/cluster_export.OnOff.StartUpOnOff.md)  } & {} & {} & {}

Access the behavior's state.

#### Inherited from

Base.state

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:140](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L140)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:311](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L311)

___

### Events

▪ `Static` `Readonly` **Events**: [`Type`](../modules/behavior_cluster_export.ClusterEvents.md#type)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.OnOff.Cluster.md), readonly [[`LevelControlForLighting`](../enums/cluster_export.OnOff.Feature.md#levelcontrolforlighting)]\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.OnOff.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`OnOffInterface`](../modules/behavior_definitions_on_off_export.md#onoffinterface)\>, [`OnOffInterface`](../modules/behavior_definitions_on_off_export.md#onoffinterface)\>\>

#### Inherited from

Base.Events

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:215](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L215)

___

### ExtensionInterface

▪ `Static` `Readonly` **ExtensionInterface**: `Object`

#### Inherited from

Base.ExtensionInterface

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:226](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L226)

___

### Interface

▪ `Static` `Readonly` **Interface**: [`OnOffInterface`](../modules/behavior_definitions_on_off_export.md#onoffinterface)

#### Inherited from

Base.Interface

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:218](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L218)

___

### State

▪ `Static` `Readonly` **State**: () => [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.OnOff.Cluster.md), readonly [[`LevelControlForLighting`](../enums/cluster_export.OnOff.Feature.md#levelcontrolforlighting)]\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.OnOff.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`OnOffInterface`](../modules/behavior_definitions_on_off_export.md#onoffinterface)\>, [`OnOffInterface`](../modules/behavior_definitions_on_off_export.md#onoffinterface)\>\>

#### Type declaration

• **new State**(): [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.OnOff.Cluster.md), readonly [[`LevelControlForLighting`](../enums/cluster_export.OnOff.Feature.md#levelcontrolforlighting)]\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.OnOff.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`OnOffInterface`](../modules/behavior_definitions_on_off_export.md#onoffinterface)\>, [`OnOffInterface`](../modules/behavior_definitions_on_off_export.md#onoffinterface)\>\>

##### Returns

[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.OnOff.Cluster.md), readonly [[`LevelControlForLighting`](../enums/cluster_export.OnOff.Feature.md#levelcontrolforlighting)]\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.OnOff.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`OnOffInterface`](../modules/behavior_definitions_on_off_export.md#onoffinterface)\>, [`OnOffInterface`](../modules/behavior_definitions_on_off_export.md#onoffinterface)\>\>

#### Inherited from

Base.State

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:216](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L216)

___

### cluster

▪ `Static` `Readonly` **cluster**: [`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.OnOff.Cluster.md), readonly [[`LevelControlForLighting`](../enums/cluster_export.OnOff.Feature.md#levelcontrolforlighting)]\>

Base cluster state include all attribute values but may be extended by subclasses.

#### Inherited from

Base.cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:213](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L213)

___

### defaults

▪ `Static` `Readonly` **defaults**: [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.OnOff.Cluster.md), readonly [[`LevelControlForLighting`](../enums/cluster_export.OnOff.Feature.md#levelcontrolforlighting)]\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.OnOff.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`OnOffInterface`](../modules/behavior_definitions_on_off_export.md#onoffinterface)\>, [`OnOffInterface`](../modules/behavior_definitions_on_off_export.md#onoffinterface)\>\>

#### Inherited from

Base.defaults

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:222](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L222)

___

### dependencies

▪ `Static` `Optional` `Readonly` **dependencies**: `Iterable`\<[`Type`](../interfaces/behavior_export.Behavior.Type.md)\>

#### Inherited from

Base.dependencies

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:224](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L224)

___

### early

▪ `Static` `Readonly` **early**: `boolean`

#### Inherited from

Base.early

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:221](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L221)

___

### id

▪ `Static` `Readonly` **id**: ``"onOff"``

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

Base.id

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:208](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L208)

___

### name

▪ `Static` `Readonly` **name**: `string`

#### Inherited from

Base.name

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:203](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L203)

___

### schema

▪ `Static` `Optional` `Readonly` **schema**: [`Schema`](../modules/behavior_cluster_export._internal_.md#schema)

#### Inherited from

Base.schema

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:220](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L220)

___

### supervisor

▪ `Static` `Readonly` **supervisor**: [`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

#### Inherited from

Base.supervisor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:223](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L223)

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

Base.supports

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)

## Accessors

### delayedOffTimer

• `get` **delayedOffTimer**(): [`Timer`](../interfaces/time_export.Timer.md)

#### Returns

[`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/behavior/definitions/on-off/OnOffServer.ts:169](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/on-off/OnOffServer.ts#L169)

___

### timedOnTimer

• `get` **timedOnTimer**(): [`Timer`](../interfaces/time_export.Timer.md)

#### Returns

[`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/behavior/definitions/on-off/OnOffServer.ts:146](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/on-off/OnOffServer.ts#L146)

## Methods

### #delayedOffTick

▸ **#delayedOffTick**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/on-off/OnOffServer.ts:181](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/on-off/OnOffServer.ts#L181)

___

### #getBootReason

▸ **#getBootReason**(): `undefined` \| [`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md)

#### Returns

`undefined` \| [`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md)

#### Defined in

[packages/matter.js/src/behavior/definitions/on-off/OnOffServer.ts:190](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/on-off/OnOffServer.ts#L190)

___

### #timedOnTick

▸ **#timedOnTick**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/definitions/on-off/OnOffServer.ts:158](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/on-off/OnOffServer.ts#L158)

___

### [asyncDispose]

▸ **[asyncDispose]**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

Base.[asyncDispose]

#### Defined in

[packages/matter.js/src/behavior/definitions/on-off/OnOffServer.ts:48](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/on-off/OnOffServer.ts#L48)

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

Base.asAdmin

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:125](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L125)

___

### assertAttributeEnabled

▸ **assertAttributeEnabled**\<`This`, `K`\>(`this`, `attributeName`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Behavior`](behavior_export.Behavior-1.md) |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `attributeName` | `K` |

#### Returns

`void`

#### Inherited from

Base.assertAttributeEnabled

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:183](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L183)

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

Base.callback

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L226)

___

### initialize

▸ **initialize**(): `void`

#### Returns

`void`

#### Overrides

Base.initialize

#### Defined in

[packages/matter.js/src/behavior/definitions/on-off/OnOffServer.ts:29](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/on-off/OnOffServer.ts#L29)

___

### off

▸ **off**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Overrides

Base.off

#### Defined in

[packages/matter.js/src/behavior/definitions/on-off/OnOffServer.ts:66](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/on-off/OnOffServer.ts#L66)

___

### offWithEffect

▸ **offWithEffect**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

Default implementation notes:
* This implementation ignores the effect and just calls off().
* Global Scene Control is not supported yet.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Overrides

Base.offWithEffect

#### Defined in

[packages/matter.js/src/behavior/definitions/on-off/OnOffServer.ts:97](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/on-off/OnOffServer.ts#L97)

___

### on

▸ **on**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Overrides

Base.on

#### Defined in

[packages/matter.js/src/behavior/definitions/on-off/OnOffServer.ts:54](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/on-off/OnOffServer.ts#L54)

___

### onWithRecallGlobalScene

▸ **onWithRecallGlobalScene**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

Default implementation notes:
* Global Scene Control is not supported yet, so the device is just turned on.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Overrides

Base.onWithRecallGlobalScene

#### Defined in

[packages/matter.js/src/behavior/definitions/on-off/OnOffServer.ts:109](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/on-off/OnOffServer.ts#L109)

___

### onWithTimedOff

▸ **onWithTimedOff**(`«destructured»`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

Default implementation notes:
* This method uses the on/off methods when timed actions should occur. This means that it is enough to override
on() and off() with custom control logic.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `offWaitTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `onOffControl`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `acceptOnlyWhenOn`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `reserved`: [`BitField`](../modules/schema_export.md#bitfield)  }\>\> ; `onTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Overrides

Base.onWithTimedOff

#### Defined in

[packages/matter.js/src/behavior/definitions/on-off/OnOffServer.ts:126](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/on-off/OnOffServer.ts#L126)

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

Base.reactTo

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L212)

___

### requireAttributeEnabled

▸ **requireAttributeEnabled**\<`This`, `K`\>(`this`, `attributeName`): `Exclude`\<`This`[``"state"``][`K`], `undefined`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Behavior`](behavior_export.Behavior-1.md) |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `attributeName` | `K` |

#### Returns

`Exclude`\<`This`[``"state"``][`K`], `undefined`\>

#### Inherited from

Base.requireAttributeEnabled

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:171](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L171)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

Base.toString

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L203)

___

### toggle

▸ **toggle**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

Default implementation notes:
This method uses the on/off methods when timed actions should occur. This means that it is enough to override
on() and off() with custom control logic.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Overrides

Base.toggle

#### Defined in

[packages/matter.js/src/behavior/definitions/on-off/OnOffServer.ts:84](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/on-off/OnOffServer.ts#L84)

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

Base.alter

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:254](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L254)

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

Base.enable

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:264](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L264)

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

Base.for

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:240](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L240)

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

Base.set

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:262](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L262)

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

Base.with

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:246](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L246)
