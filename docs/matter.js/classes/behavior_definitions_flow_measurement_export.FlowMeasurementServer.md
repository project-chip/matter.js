[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/flow-measurement/export](../modules/behavior_definitions_flow_measurement_export.md) / FlowMeasurementServer

# Class: FlowMeasurementServer

[behavior/definitions/flow-measurement/export](../modules/behavior_definitions_flow_measurement_export.md).FlowMeasurementServer

This is the default server implementation of [FlowMeasurementBehavior](../modules/behavior_definitions_flow_measurement_export.md#flowmeasurementbehavior).

## Hierarchy

- [`FlowMeasurementBehavior`](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md)

  ↳ **`FlowMeasurementServer`**

## Table of contents

### Constructors

- [constructor](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#constructor)

### Properties

- [#agent](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md##agent)
- [[reference]](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#[reference])
- [agent](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#agent)
- [cluster](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#cluster)
- [context](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#context)
- [endpoint](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#endpoint)
- [events](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#events)
- [features](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#features)
- [session](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#session)
- [state](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#state)
- [Events](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#events-1)
- [ExtensionInterface](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#extensioninterface)
- [Interface](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#interface)
- [Internal](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#internal)
- [State](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#state-1)
- [cluster](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#cluster-1)
- [defaults](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#defaults)
- [dependencies](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#dependencies)
- [early](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#early)
- [id](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#id)
- [name](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#name)
- [schema](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#schema)
- [supervisor](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#supervisor)
- [supports](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#supports)

### Methods

- [[asyncDispose]](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#[asyncdispose])
- [asAdmin](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#asadmin)
- [assertAttributeEnabled](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#assertattributeenabled)
- [callback](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#callback)
- [initialize](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#initialize)
- [reactTo](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#reactto)
- [requireAttributeEnabled](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#requireattributeenabled)
- [toString](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#tostring)
- [alter](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#alter)
- [enable](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#enable)
- [for](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#for)
- [set](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#set)
- [with](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md#with)

## Constructors

### constructor

• **new FlowMeasurementServer**(`agent`, `backing`): [`FlowMeasurementServer`](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |
| `backing` | [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md) |

#### Returns

[`FlowMeasurementServer`](behavior_definitions_flow_measurement_export.FlowMeasurementServer.md)

#### Inherited from

FlowMeasurementBehavior.constructor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

[FlowMeasurementBehavior](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md).[#agent](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md##agent)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L51)

___

### [reference]

• **[reference]**: [`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

[FlowMeasurementBehavior](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md).[[reference]](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md#[reference])

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L274)

___

### agent

• **agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

[FlowMeasurementBehavior](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md).[agent](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md#agent)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L80)

___

### cluster

• **cluster**: `never`

The implemented cluster.

#### Inherited from

[FlowMeasurementBehavior](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md).[cluster](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md#cluster)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:306](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L306)

___

### context

• **context**: [`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

[FlowMeasurementBehavior](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md).[context](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md#context)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L94)

___

### endpoint

• **endpoint**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

[FlowMeasurementBehavior](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md).[endpoint](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md#endpoint)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L87)

___

### events

• `Readonly` **events**: [`EventEmitter`](util_export.EventEmitter-1.md) & `Omit`\<[`EventEmitter`](util_export.EventEmitter-1.md), `never`\> & \{ `maxMeasuredValue$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>\> ; `measuredValue$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>\> ; `minMeasuredValue$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>\>  } & \{ `tolerance$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>\>  } & \{ `maxMeasuredValue$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>\> ; `measuredValue$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>\> ; `minMeasuredValue$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>\>  } & \{ `tolerance$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>\>  } & {} & {}

Access the behavior's events.

#### Inherited from

[FlowMeasurementBehavior](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md).[events](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md#events)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L145)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:316](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L316)

___

### features

• **features**: `Object`

Supported features as a flag object.

#### Inherited from

[FlowMeasurementBehavior](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md).[features](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md#features)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

___

### session

• **session**: [`SecureSession`](session_export.SecureSession.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Inherited from

[FlowMeasurementBehavior](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md).[session](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md#session)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L101)

___

### state

• `Readonly` **state**: `Omit`\<{}, `never`\> & \{ `maxMeasuredValue`: ``null`` \| `number` ; `measuredValue`: ``null`` \| `number` ; `minMeasuredValue`: ``null`` \| `number`  } & \{ `tolerance?`: `number`  } & {} & {}

Access the behavior's state.

#### Inherited from

[FlowMeasurementBehavior](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md).[state](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md#state)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:140](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L140)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:311](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L311)

___

### Events

▪ `Static` `Readonly` **Events**: [`Type`](../modules/behavior_cluster_export.ClusterEvents.md#type)\<[`Cluster`](../interfaces/cluster_export.FlowMeasurement.Cluster.md), typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>

#### Inherited from

FlowMeasurementBehavior.Events

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:215](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L215)

___

### ExtensionInterface

▪ `Static` `Readonly` **ExtensionInterface**: `Object`

#### Inherited from

FlowMeasurementBehavior.ExtensionInterface

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:226](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L226)

___

### Interface

▪ `Static` `Readonly` **Interface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | `never`[] |

#### Inherited from

FlowMeasurementBehavior.Interface

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:218](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L218)

___

### Internal

▪ `Static` `Readonly` **Internal**: () => {}

#### Type declaration

• **new Internal**(): `Object`

##### Returns

`Object`

#### Inherited from

FlowMeasurementBehavior.Internal

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:217](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L217)

___

### State

▪ `Static` `Readonly` **State**: () => [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Cluster`](../interfaces/cluster_export.FlowMeasurement.Cluster.md), typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>

#### Type declaration

• **new State**(): [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Cluster`](../interfaces/cluster_export.FlowMeasurement.Cluster.md), typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>

##### Returns

[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Cluster`](../interfaces/cluster_export.FlowMeasurement.Cluster.md), typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>

#### Inherited from

FlowMeasurementBehavior.State

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:216](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L216)

___

### cluster

▪ `Static` `Readonly` **cluster**: [`Cluster`](../interfaces/cluster_export.FlowMeasurement.Cluster.md)

Base cluster state include all attribute values but may be extended by subclasses.

#### Inherited from

FlowMeasurementBehavior.cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:213](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L213)

___

### defaults

▪ `Static` `Readonly` **defaults**: [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Cluster`](../interfaces/cluster_export.FlowMeasurement.Cluster.md), typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>

#### Inherited from

FlowMeasurementBehavior.defaults

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:222](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L222)

___

### dependencies

▪ `Static` `Optional` `Readonly` **dependencies**: `Iterable`\<[`Type`](../interfaces/behavior_export.Behavior.Type.md)\>

#### Inherited from

FlowMeasurementBehavior.dependencies

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:224](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L224)

___

### early

▪ `Static` `Readonly` **early**: `boolean`

#### Inherited from

FlowMeasurementBehavior.early

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:221](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L221)

___

### id

▪ `Static` `Readonly` **id**: ``"flowMeasurement"``

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

FlowMeasurementBehavior.id

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:208](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L208)

___

### name

▪ `Static` `Readonly` **name**: `string`

#### Inherited from

FlowMeasurementBehavior.name

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:203](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L203)

___

### schema

▪ `Static` `Optional` `Readonly` **schema**: [`Schema`](../modules/behavior_cluster_export._internal_.md#schema)

#### Inherited from

FlowMeasurementBehavior.schema

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:220](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L220)

___

### supervisor

▪ `Static` `Readonly` **supervisor**: [`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

#### Inherited from

FlowMeasurementBehavior.supervisor

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

FlowMeasurementBehavior.supports

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)

## Methods

### [asyncDispose]

▸ **[asyncDispose]**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

[FlowMeasurementBehavior](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md).[[asyncDispose]](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md#[asyncdispose])

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:198](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L198)

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

[FlowMeasurementBehavior](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md).[asAdmin](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md#asadmin)

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

[FlowMeasurementBehavior](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md).[assertAttributeEnabled](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md#assertattributeenabled)

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

[FlowMeasurementBehavior](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md).[callback](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md#callback)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L226)

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

[FlowMeasurementBehavior](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md).[initialize](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md#initialize)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:192](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L192)

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

[FlowMeasurementBehavior](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md).[reactTo](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md#reactto)

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

[FlowMeasurementBehavior](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md).[requireAttributeEnabled](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md#requireattributeenabled)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:171](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L171)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

[FlowMeasurementBehavior](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md).[toString](../interfaces/behavior_definitions_flow_measurement_export.FlowMeasurementBehavior-1.md#tostring)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L203)

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

FlowMeasurementBehavior.alter

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

FlowMeasurementBehavior.enable

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

FlowMeasurementBehavior.for

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

FlowMeasurementBehavior.set

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

FlowMeasurementBehavior.with

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:246](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L246)
