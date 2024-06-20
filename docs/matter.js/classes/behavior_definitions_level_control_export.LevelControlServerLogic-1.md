[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/level-control/export](../modules/behavior_definitions_level_control_export.md) / LevelControlServerLogic

# Class: LevelControlServerLogic

[behavior/definitions/level-control/export](../modules/behavior_definitions_level_control_export.md).LevelControlServerLogic

This is the default server implementation of [LevelControlBehavior](../modules/behavior_definitions_level_control_export.md#levelcontrolbehavior).

This implementation includes all features of [LevelControl.Cluster](../modules/cluster_export.LevelControl.md#cluster) and implements all mandatory commands. The
On-Off Feature is automatically turned on as defined by the matter specification.
You should use [LevelControlServer.with](behavior_definitions_level_control_export.LevelControlServer.md#with) to specialize the class for the features your implementation supports.

This default implementation also handles the OnOff cluster dependency and the ColorControl dependency as defined by
the Matter specification automatically.

This implementation ignores by default all transition times and sets the level immediately. Alternatively, you can
set the `managedTransitionTimeHandling` state attribute to true to have matter.js manage transition times by
changing the level value step-wise every second. This might be an intermediate solution if you develop
independently of defined hardware.

If you develop for a specific hardware you should extend the [LevelControlServer](behavior_definitions_level_control_export.LevelControlServer.md) class and implement the
following methods to natively use device features to correctly support the transition times. For this the default
implementation uses special protected methods which are used by the real commands and are only responsible for the
actual value change logic. The benefit of this structure is that basic data validations and options checks are
already done and you can focus on the actual hardware interaction:
* [LevelControlServerLogic.moveToLevelLogic](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#movetolevellogic) Logic to move the value to a defined level with a transition time
* [LevelControlServerLogic.moveLogic](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#movelogic) Logic to move the value up or down with a defined rate
* [LevelControlServerLogic.stepLogic](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#steplogic) Logic to step the value up or down with a defined step size and transition
* [LevelControlServerLogic.stopLogic](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#stoplogic) Logic to stop any currently running transitions
* [LevelControlServerLogic.handleOnOffChange](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#handleonoffchange) Logic to handle dimming to onLevel when device got turned on by connected OnOff cluster

If you add own implementation you can use:
* [LevelControlServerLogic.setLevel](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#setlevel) to set the level attribute including automatic handling of the onoff dependency
* [LevelControlServerLogic.setRemainingTime](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#setremainingtime) to set the remaining time attribute when Lighting feature is enabled

All overridable methods except setRemainingTime can be implemented sync or async by returning a Promise.

## Hierarchy

- [`LevelControlLogicBase`](../modules/behavior_definitions_level_control_export._internal_.md#levelcontrollogicbase)

  ↳ **`LevelControlServerLogic`**

## Table of contents

### Constructors

- [constructor](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#constructor)

### Properties

- [#agent](behavior_definitions_level_control_export.LevelControlServerLogic-1.md##agent)
- [[reference]](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#[reference])
- [agent](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#agent)
- [cluster](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#cluster)
- [context](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#context)
- [endpoint](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#endpoint)
- [events](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#events)
- [features](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#features)
- [internal](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#internal)
- [session](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#session)
- [state](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#state)
- [Events](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#events-1)
- [Interface](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#interface)
- [cluster](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#cluster-1)
- [defaults](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#defaults)
- [dependencies](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#dependencies)
- [early](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#early)
- [id](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#id)
- [name](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#name)
- [schema](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#schema)
- [supervisor](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#supervisor)
- [supports](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#supports)

### Accessors

- [currentLevel](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#currentlevel)
- [maxLevel](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#maxlevel)
- [minLevel](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#minlevel)

### Methods

- [#assertLevelValue](behavior_definitions_level_control_export.LevelControlServerLogic-1.md##assertlevelvalue)
- [#calculateEffectiveOptions](behavior_definitions_level_control_export.LevelControlServerLogic-1.md##calculateeffectiveoptions)
- [#getBootReason](behavior_definitions_level_control_export.LevelControlServerLogic-1.md##getbootreason)
- [#initiateTransition](behavior_definitions_level_control_export.LevelControlServerLogic-1.md##initiatetransition)
- [#optionsAllowExecution](behavior_definitions_level_control_export.LevelControlServerLogic-1.md##optionsallowexecution)
- [#stepIntervalTick](behavior_definitions_level_control_export.LevelControlServerLogic-1.md##stepintervaltick)
- [[asyncDispose]](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#[asyncdispose])
- [asAdmin](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#asadmin)
- [assertAttributeEnabled](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#assertattributeenabled)
- [callback](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#callback)
- [handleOnOffChange](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#handleonoffchange)
- [initialize](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#initialize)
- [move](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#move)
- [moveLogic](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#movelogic)
- [moveToLevel](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#movetolevel)
- [moveToLevelLogic](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#movetolevellogic)
- [moveToLevelWithOnOff](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#movetolevelwithonoff)
- [moveWithOnOff](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#movewithonoff)
- [reactTo](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#reactto)
- [requireAttributeEnabled](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#requireattributeenabled)
- [setLevel](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#setlevel)
- [setRemainingTime](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#setremainingtime)
- [step](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#step)
- [stepLogic](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#steplogic)
- [stepWithOnOff](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#stepwithonoff)
- [stop](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#stop)
- [stopLogic](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#stoplogic)
- [stopWithOnOff](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#stopwithonoff)
- [toString](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#tostring)
- [alter](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#alter)
- [enable](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#enable)
- [for](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#for)
- [set](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#set)
- [with](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#with)

## Constructors

### constructor

• **new LevelControlServerLogic**(`agent`, `backing`): [`LevelControlServerLogic`](behavior_definitions_level_control_export.LevelControlServerLogic-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |
| `backing` | [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md) |

#### Returns

[`LevelControlServerLogic`](behavior_definitions_level_control_export.LevelControlServerLogic-1.md)

#### Inherited from

LevelControlLogicBase.constructor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

LevelControlLogicBase.#agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L51)

___

### [reference]

• **[reference]**: [`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

LevelControlLogicBase.[reference]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L274)

___

### agent

• **agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

LevelControlLogicBase.agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L80)

___

### cluster

• **cluster**: `never`

The implemented cluster.

#### Inherited from

LevelControlLogicBase.cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:306](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L306)

___

### context

• **context**: [`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

LevelControlLogicBase.context

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L94)

___

### endpoint

• **endpoint**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

LevelControlLogicBase.endpoint

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L87)

___

### events

• `Readonly` **events**: [`EventEmitter`](util_export.EventEmitter-1.md) & `Omit`\<[`ClusterEvents`](../modules/behavior_cluster_export.md#clusterevents)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`LevelControlInterface`](../modules/behavior_definitions_level_control_export.md#levelcontrolinterface)\>\>, ``"options$Changing"`` \| ``"options$Changed"`` \| ``"currentLevel$Changing"`` \| ``"onLevel$Changing"`` \| ``"minLevel$Changing"`` \| ``"maxLevel$Changing"`` \| ``"onOffTransitionTime$Changing"`` \| ``"onTransitionTime$Changing"`` \| ``"offTransitionTime$Changing"`` \| ``"defaultMoveRate$Changing"`` \| ``"currentLevel$Changed"`` \| ``"onLevel$Changed"`` \| ``"minLevel$Changed"`` \| ``"maxLevel$Changed"`` \| ``"onOffTransitionTime$Changed"`` \| ``"onTransitionTime$Changed"`` \| ``"offTransitionTime$Changed"`` \| ``"defaultMoveRate$Changed"``\> & \{ `currentLevel$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>\> ; `onLevel$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `options$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\> ; `remainingTime$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `startUpCurrentLevel$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>\>  } & \{ `defaultMoveRate$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `maxLevel$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>\> ; `minLevel$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>\> ; `offTransitionTime$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `onOffTransitionTime$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `onTransitionTime$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\>  } & \{ `currentLevel$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>\> ; `onLevel$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `options$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\> ; `remainingTime$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `startUpCurrentLevel$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>\>  } & \{ `defaultMoveRate$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `maxLevel$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>\> ; `minLevel$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>\> ; `offTransitionTime$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `onOffTransitionTime$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `onTransitionTime$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\>  } & {} & {}

Access the behavior's events.

#### Inherited from

LevelControlLogicBase.events

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L145)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:316](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L316)

___

### features

• **features**: \{ `onOff`: ``true`` = true } & [`FeaturesAsFlags`](../modules/cluster_export.ClusterComposer.md#featuresasflags)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), readonly [[`OnOff`](../enums/cluster_export.LevelControl.Feature.md#onoff), [`Lighting`](../enums/cluster_export.LevelControl.Feature.md#lighting)]\>

Supported features as a flag object.

#### Inherited from

LevelControlLogicBase.features

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

___

### internal

• `Protected` **internal**: [`Internal`](behavior_definitions_level_control_export.LevelControlServerLogic.Internal.md)

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:67](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L67)

___

### session

• **session**: [`SecureSession`](session_export.SecureSession.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Inherited from

LevelControlLogicBase.session

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L101)

___

### state

• **state**: [`State`](behavior_definitions_level_control_export.LevelControlServerLogic.State.md)

#### Overrides

LevelControlLogicBase.state

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:68](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L68)

___

### Events

▪ `Static` `Readonly` **Events**: [`Type`](../modules/behavior_cluster_export.ClusterEvents.md#type)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), readonly [[`OnOff`](../enums/cluster_export.LevelControl.Feature.md#onoff), [`Lighting`](../enums/cluster_export.LevelControl.Feature.md#lighting)]\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`LevelControlInterface`](../modules/behavior_definitions_level_control_export.md#levelcontrolinterface)\>, [`LevelControlInterface`](../modules/behavior_definitions_level_control_export.md#levelcontrolinterface)\>\>

#### Inherited from

LevelControlLogicBase.Events

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:215](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L215)

___

### Interface

▪ `Static` `Readonly` **Interface**: [`LevelControlInterface`](../modules/behavior_definitions_level_control_export.md#levelcontrolinterface)

#### Inherited from

LevelControlLogicBase.Interface

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:218](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L218)

___

### cluster

▪ `Static` `Readonly` **cluster**: [`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), readonly [[`OnOff`](../enums/cluster_export.LevelControl.Feature.md#onoff), [`Lighting`](../enums/cluster_export.LevelControl.Feature.md#lighting)]\>

Base cluster state include all attribute values but may be extended by subclasses.

#### Inherited from

LevelControlLogicBase.cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:213](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L213)

___

### defaults

▪ `Static` `Readonly` **defaults**: [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), readonly [[`OnOff`](../enums/cluster_export.LevelControl.Feature.md#onoff), [`Lighting`](../enums/cluster_export.LevelControl.Feature.md#lighting)]\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`LevelControlInterface`](../modules/behavior_definitions_level_control_export.md#levelcontrolinterface)\>, [`LevelControlInterface`](../modules/behavior_definitions_level_control_export.md#levelcontrolinterface)\>\>

#### Inherited from

LevelControlLogicBase.defaults

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:222](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L222)

___

### dependencies

▪ `Static` `Optional` `Readonly` **dependencies**: `Iterable`\<[`Type`](../interfaces/behavior_export.Behavior.Type.md)\>

#### Inherited from

LevelControlLogicBase.dependencies

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:224](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L224)

___

### early

▪ `Static` `Readonly` **early**: `boolean`

#### Inherited from

LevelControlLogicBase.early

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:221](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L221)

___

### id

▪ `Static` `Readonly` **id**: ``"levelControl"``

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

LevelControlLogicBase.id

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:208](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L208)

___

### name

▪ `Static` `Readonly` **name**: `string`

#### Inherited from

LevelControlLogicBase.name

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:203](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L203)

___

### schema

▪ `Static` `Optional` `Readonly` **schema**: [`Schema`](../modules/behavior_cluster_export._internal_.md#schema)

#### Inherited from

LevelControlLogicBase.schema

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:220](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L220)

___

### supervisor

▪ `Static` `Readonly` **supervisor**: [`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

#### Inherited from

LevelControlLogicBase.supervisor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:223](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L223)

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

LevelControlLogicBase.supports

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)

## Accessors

### currentLevel

• `get` **currentLevel**(): `number`

The current level value as number.
Throws an StatusResponse Error when null!

#### Returns

`number`

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:84](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L84)

___

### maxLevel

• `get` **maxLevel**(): `number`

Returns the maximum level, including feature specific fallback value handling.

#### Returns

`number`

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:76](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L76)

___

### minLevel

• `get` **minLevel**(): `number`

Returns the minimum level, including feature specific fallback value handling.

#### Returns

`number`

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:71](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L71)

## Methods

### #assertLevelValue

▸ **#assertLevelValue**(`level`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:450](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L450)

___

### #calculateEffectiveOptions

▸ **#calculateEffectiveOptions**(`optionsMask`, `optionsOverride`): [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `optionsMask` | [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> |
| `optionsOverride` | [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> |

#### Returns

[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:426](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L426)

___

### #getBootReason

▸ **#getBootReason**(): `undefined` \| [`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md)

#### Returns

`undefined` \| [`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md)

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:552](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L552)

___

### #initiateTransition

▸ **#initiateTransition**(`stepSize`, `withOnOff`, `targetLevel?`, `options?`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stepSize` | `number` |
| `withOnOff` | `boolean` |
| `targetLevel?` | `number` |
| `options` | [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:482](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L482)

___

### #optionsAllowExecution

▸ **#optionsAllowExecution**(`options`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:441](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L441)

___

### #stepIntervalTick

▸ **#stepIntervalTick**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:502](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L502)

___

### [asyncDispose]

▸ **[asyncDispose]**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

LevelControlLogicBase.[asyncDispose]

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:559](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L559)

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

LevelControlLogicBase.asAdmin

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:125](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L125)

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

LevelControlLogicBase.assertAttributeEnabled

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:183](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L183)

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

LevelControlLogicBase.callback

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L226)

___

### handleOnOffChange

▸ **handleOnOffChange**(`onOff`): `void`

This is the default implementation of the required interaction with the OnOff cluster on the same endpoint when
the onOff feature is used.
This implementation just sets the current level to the onLevel value when the device is turned on. Other fading
up/down logic required by the MatterSpecification.v12.Cluster §1.6.4.1.1 needs to be implemented in a
specialized class if needed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onOff` | `boolean` | The new onOff state |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:475](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L475)

___

### initialize

▸ **initialize**(): `void`

#### Returns

`void`

#### Overrides

LevelControlLogicBase.initialize

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:94](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L94)

___

### move

▸ **move**(`«destructured»`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

Default implementation notes:
After the options checks it uses the [moveLogic](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#movelogic) method to set the level.
If you want to implement own logic just override [moveLogic](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#movelogic) with is also used for [moveWithOnOff](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#movewithonoff).
The logic is implemented as follows: When no move rate is provided and also no default move rate is set, the
server will move as fast as possible, so we set to min/max directly. Else the step logic is applied and the
level is increased or decreased by the step size every second.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MoveMode`](../enums/cluster_export.LevelControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Overrides

LevelControlLogicBase.move

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:223](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L223)

___

### moveLogic

▸ **moveLogic**(`moveMode`, `rate`, `withOnOff`, `options?`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

Default implementation of the move logic. When no move rate is provided and also no default move rate is set, the
server will move as fast as possible, so it is set to min/max directly. Else the step logic is applied and the
level is increased or decreased by the step size every second. The method uses [setLevel](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#setlevel) to set the level
and handle the on/off state if the method is called by a *WithOnOff command.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `moveMode` | [`MoveMode`](../enums/cluster_export.LevelControl.MoveMode.md) | Mode (Up/Down) of the move action |
| `rate` | ``null`` \| `number` | Rate of the move action, null if no rate is provided and the default should be used |
| `withOnOff` | `boolean` | true if the method is called by a *WithOnOff command |
| `options` | [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> | Options for the command |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:256](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L256)

___

### moveToLevel

▸ **moveToLevel**(`«destructured»`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

Default implementation notes:
This method ignores the transition time provided by the command or settings and just sets the level to the
requested value. After the options and value checks it uses the [moveToLevelLogic](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#movetolevellogic) method to set the level.
If you want to implement own logic just override [moveToLevelLogic](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#movetolevellogic) with is also used for [moveToLevelWithOnOff](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#movetolevelwithonoff).

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `level`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Overrides

LevelControlLogicBase.moveToLevel

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:152](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L152)

___

### moveToLevelLogic

▸ **moveToLevelLogic**(`level`, `transitionTime`, `withOnOff`, `options?`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

Default implementation of the moveToLevel logic. When a transition time is specified the implementation uses a
step based logic to manage the move. It also checks if the level is within the min and max level range and sets
the level accordingly. The method uses [setLevel](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#setlevel) to set the level and handle the on/off state if the method
is called by a *WithOnOff command.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `level` | `number` | Level to set |
| `transitionTime` | ``null`` \| `number` | Transition time, ignored in this default implementation |
| `withOnOff` | `boolean` | true if the method is called by a *WithOnOff command |
| `options` | [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> | Options for the command |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:187](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L187)

___

### moveToLevelWithOnOff

▸ **moveToLevelWithOnOff**(`«destructured»`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

Default implementation notes:
This method ignores the transition time provided by the command or settings and just sets the level to the
requested value. After the options and value checks it uses the [moveToLevelLogic](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#movetolevellogic) method to set the level.
If you want to implement own logic just override [moveToLevelLogic](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#movetolevellogic) with is also used for [moveToLevel](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#movetolevel).

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `level`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Overrides

LevelControlLogicBase.moveToLevelWithOnOff

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:169](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L169)

___

### moveWithOnOff

▸ **moveWithOnOff**(`«destructured»`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

Default implementation notes:
This implementation uses the [moveLogic](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#movelogic) method to set the level.
If you want to implement own logic just override [moveLogic](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#movelogic) with is also used for [move](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#move).
The logic is implemented as follows: When no move rate is provided and also no default move rate is set, the
server will move as fast as possible, so we set to min/max directly. Else the step logic is applied and the
level is increased or decreased by the step size every second.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`MoveMode`](../enums/cluster_export.LevelControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Overrides

LevelControlLogicBase.moveWithOnOff

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:240](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L240)

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

LevelControlLogicBase.reactTo

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L212)

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

LevelControlLogicBase.requireAttributeEnabled

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:171](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L171)

___

### setLevel

▸ **setLevel**(`level`, `withOnOff`, `options?`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

Default implementation of the logic to set the level including the handing of the on/off state when one of the
*WithOnOff commands is called. This implementation checks if the level is at the minLevel and the device is on,
it will turn off the device. If the level is above the minLevel and the device is off, it will turn on the device.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `level` | `number` | Level which is set by the command |
| `withOnOff` | `boolean` | true if the method is called by a *WithOnOff command |
| `options` | [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> | Options for the command |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:396](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L396)

___

### setRemainingTime

▸ **setRemainingTime**(`remainingTime`): `void`

Method to set the remaining time attribute when Lighting feature is enabled.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `remainingTime` | `number` | Remaining time in 1/10th of a second |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:379](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L379)

___

### step

▸ **step**(`«destructured»`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

Default implementation notes:
After the options checks it uses the [stepLogic](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#steplogic) method to set the level.
If you want to implement own logic just override [stepLogic](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#steplogic) with is also used for [stepWithOnOff](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#stepwithonoff).
The logic is implemented as follows: When no transition time is provided, the server will move as fast as
possible, so we set to currentlevel +/- stepSize directly. Else the step logic is applied and the level is
increased or decreased by the step size every transition time interval.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StepMode`](../enums/cluster_export.LevelControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Overrides

LevelControlLogicBase.step

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:291](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L291)

___

### stepLogic

▸ **stepLogic**(`stepMode`, `stepSize`, `transitionTime`, `withOnOff`, `options?`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

Default implementation of the step logic. When no transition time is provided, the server will move as fast as
possible, so it is set to min/max directly. Else the level is increased or decreased by the step size every
second. The method uses [setLevel](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#setlevel) to set the level and handle the on/off state if the method is called
by a *WithOnOff command. The remaining time is updated with every step.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stepMode` | [`StepMode`](../enums/cluster_export.LevelControl.StepMode.md) | Mode (Up/Down) of the step action |
| `stepSize` | `number` | Size of the step action |
| `transitionTime` | ``null`` \| `number` | Time of the step action in 10th of a second |
| `withOnOff` | `boolean` | true if the method is called by a *WithOnOff command |
| `options` | [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> | Options for the command |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:324](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L324)

___

### stepWithOnOff

▸ **stepWithOnOff**(`«destructured»`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

Default implementation notes:
This implementation uses the [stepLogic](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#steplogic) method to set the level.
If you want to implement own logic just override [stepLogic](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#steplogic) with is also used for [step](behavior_definitions_level_control_export.LevelControlServerLogic-1.md#step).
The logic is implemented as follows: When no transition time is provided, the server will move as fast as
possible, so we set to min/max directly. Else the step logic is applied and the level is increased or decreased
by the step size every transition time interval.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StepMode`](../enums/cluster_export.LevelControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Overrides

LevelControlLogicBase.stepWithOnOff

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:307](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L307)

___

### stop

▸ **stop**(`«destructured»`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Overrides

LevelControlLogicBase.stop

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:349](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L349)

___

### stopLogic

▸ **stopLogic**(`_options?`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

Default implementation of the stop logic. This stops any level transitions currently appening and sets the
remaining time to 0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options` | [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:368](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L368)

___

### stopWithOnOff

▸ **stopWithOnOff**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Overrides

LevelControlLogicBase.stopWithOnOff

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:358](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L358)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

LevelControlLogicBase.toString

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L203)

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

LevelControlLogicBase.alter

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:254](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L254)

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

LevelControlLogicBase.enable

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:264](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L264)

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

LevelControlLogicBase.for

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:240](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L240)

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

LevelControlLogicBase.set

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:262](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L262)

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

LevelControlLogicBase.with

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:246](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L246)
