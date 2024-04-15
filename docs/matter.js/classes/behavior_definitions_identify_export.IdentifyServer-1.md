[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/identify/export](../modules/behavior_definitions_identify_export.md) / IdentifyServer

# Class: IdentifyServer

[behavior/definitions/identify/export](../modules/behavior_definitions_identify_export.md).IdentifyServer

This is the default server implementation of IdentifyBehavior.

This implementation includes all features of Identify.Cluster and implements all mandatory commands. You should use
[IdentifyServer.with](behavior_definitions_identify_export.IdentifyServer-1.md#with) to specialize the class for the features your implementation supports. Alternatively
you can extend this class and override the methods you need to change or add mandatory commands.

Beside the standard state values the following additional state values are available:
* `isIdentifying` - Indicates if the device is currently identifying.

Beside the standard events the following additional events are available:
* `startIdentifying` - Emitted when the device starts identifying. Use it e.g to start your own identifying logic.
* `stopIdentifying` - Emitted when the device stops identifying.

## Hierarchy

- [`IdentifyBehavior`](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md)

  ↳ **`IdentifyServer`**

## Table of contents

### Constructors

- [constructor](behavior_definitions_identify_export.IdentifyServer-1.md#constructor)

### Properties

- [#agent](behavior_definitions_identify_export.IdentifyServer-1.md##agent)
- [[reference]](behavior_definitions_identify_export.IdentifyServer-1.md#[reference])
- [agent](behavior_definitions_identify_export.IdentifyServer-1.md#agent)
- [cluster](behavior_definitions_identify_export.IdentifyServer-1.md#cluster)
- [context](behavior_definitions_identify_export.IdentifyServer-1.md#context)
- [endpoint](behavior_definitions_identify_export.IdentifyServer-1.md#endpoint)
- [events](behavior_definitions_identify_export.IdentifyServer-1.md#events)
- [features](behavior_definitions_identify_export.IdentifyServer-1.md#features)
- [internal](behavior_definitions_identify_export.IdentifyServer-1.md#internal)
- [session](behavior_definitions_identify_export.IdentifyServer-1.md#session)
- [state](behavior_definitions_identify_export.IdentifyServer-1.md#state)
- [Interface](behavior_definitions_identify_export.IdentifyServer-1.md#interface)
- [cluster](behavior_definitions_identify_export.IdentifyServer-1.md#cluster-1)
- [defaults](behavior_definitions_identify_export.IdentifyServer-1.md#defaults)
- [dependencies](behavior_definitions_identify_export.IdentifyServer-1.md#dependencies)
- [early](behavior_definitions_identify_export.IdentifyServer-1.md#early)
- [id](behavior_definitions_identify_export.IdentifyServer-1.md#id)
- [name](behavior_definitions_identify_export.IdentifyServer-1.md#name)
- [schema](behavior_definitions_identify_export.IdentifyServer-1.md#schema)
- [supervisor](behavior_definitions_identify_export.IdentifyServer-1.md#supervisor)
- [supports](behavior_definitions_identify_export.IdentifyServer-1.md#supports)

### Methods

- [#identifyTick](behavior_definitions_identify_export.IdentifyServer-1.md##identifytick)
- [#identifyTimeChangedHandler](behavior_definitions_identify_export.IdentifyServer-1.md##identifytimechangedhandler)
- [#startIdentifying](behavior_definitions_identify_export.IdentifyServer-1.md##startidentifying)
- [#stopIdentifying](behavior_definitions_identify_export.IdentifyServer-1.md##stopidentifying)
- [[asyncDispose]](behavior_definitions_identify_export.IdentifyServer-1.md#[asyncdispose])
- [asAdmin](behavior_definitions_identify_export.IdentifyServer-1.md#asadmin)
- [callback](behavior_definitions_identify_export.IdentifyServer-1.md#callback)
- [identify](behavior_definitions_identify_export.IdentifyServer-1.md#identify)
- [identifyQuery](behavior_definitions_identify_export.IdentifyServer-1.md#identifyquery)
- [initialize](behavior_definitions_identify_export.IdentifyServer-1.md#initialize)
- [reactTo](behavior_definitions_identify_export.IdentifyServer-1.md#reactto)
- [toString](behavior_definitions_identify_export.IdentifyServer-1.md#tostring)
- [triggerEffect](behavior_definitions_identify_export.IdentifyServer-1.md#triggereffect)
- [alter](behavior_definitions_identify_export.IdentifyServer-1.md#alter)
- [enable](behavior_definitions_identify_export.IdentifyServer-1.md#enable)
- [for](behavior_definitions_identify_export.IdentifyServer-1.md#for)
- [set](behavior_definitions_identify_export.IdentifyServer-1.md#set)
- [with](behavior_definitions_identify_export.IdentifyServer-1.md#with)

## Constructors

### constructor

• **new IdentifyServer**(`agent`, `backing`): [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |
| `backing` | [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md) |

#### Returns

[`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer-1.md)

#### Inherited from

IdentifyBehavior.constructor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:181](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L181)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

[IdentifyBehavior](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md).[#agent](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md##agent)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L51)

___

### [reference]

• **[reference]**: [`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

[IdentifyBehavior](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md).[[reference]](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md#[reference])

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

___

### agent

• **agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

[IdentifyBehavior](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md).[agent](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md#agent)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

___

### cluster

• **cluster**: `never`

The implemented cluster.

#### Inherited from

[IdentifyBehavior](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md).[cluster](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md#cluster)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:280](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L280)

___

### context

• **context**: [`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

[IdentifyBehavior](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md).[context](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md#context)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

___

### endpoint

• **endpoint**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

[IdentifyBehavior](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md).[endpoint](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md#endpoint)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

___

### events

• **events**: [`Events`](behavior_definitions_identify_export.IdentifyServer.Events.md)

Access the behavior's events.

#### Overrides

[IdentifyBehavior](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md).[events](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md#events)

#### Defined in

[packages/matter.js/src/behavior/definitions/identify/IdentifyServer.ts:29](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/identify/IdentifyServer.ts#L29)

___

### features

• **features**: `Object`

Supported features as a flag object.

#### Inherited from

[IdentifyBehavior](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md).[features](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md#features)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:295](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L295)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:295](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L295)

___

### internal

• `Protected` **internal**: [`Internal`](behavior_definitions_identify_export.IdentifyServer.Internal.md)

#### Defined in

[packages/matter.js/src/behavior/definitions/identify/IdentifyServer.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/identify/IdentifyServer.ts#L27)

___

### session

• **session**: [`SecureSession`](session_export.SecureSession.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Inherited from

[IdentifyBehavior](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md).[session](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md#session)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

___

### state

• **state**: [`State`](behavior_definitions_identify_export.IdentifyServer.State.md)

Access the behavior's state.

#### Overrides

[IdentifyBehavior](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md).[state](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md#state)

#### Defined in

[packages/matter.js/src/behavior/definitions/identify/IdentifyServer.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/identify/IdentifyServer.ts#L28)

___

### Interface

▪ `Static` `Readonly` **Interface**: [`IdentifyInterface`](../modules/behavior_definitions_identify_export.md#identifyinterface)

#### Inherited from

IdentifyBehavior.Interface

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:198](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L198)

___

### cluster

▪ `Static` `Readonly` **cluster**: [`Cluster`](../interfaces/cluster_export.Identify.Cluster.md)

Base cluster state include all attribute values but may be extended by subclasses.

#### Inherited from

IdentifyBehavior.cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:193](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L193)

___

### defaults

▪ `Static` `Readonly` **defaults**: [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Cluster`](../interfaces/cluster_export.Identify.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`IdentifyInterface`](../modules/behavior_definitions_identify_export.md#identifyinterface)\>\>

#### Inherited from

IdentifyBehavior.defaults

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:202](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L202)

___

### dependencies

▪ `Static` `Optional` `Readonly` **dependencies**: `Iterable`\<[`Type`](../interfaces/behavior_export.Behavior.Type.md)\>

#### Inherited from

IdentifyBehavior.dependencies

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:204](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L204)

___

### early

▪ `Static` `Readonly` **early**: `boolean`

#### Inherited from

IdentifyBehavior.early

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

___

### id

▪ `Static` `Readonly` **id**: ``"identify"``

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

IdentifyBehavior.id

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:188](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L188)

___

### name

▪ `Static` `Readonly` **name**: `string`

#### Inherited from

IdentifyBehavior.name

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:183](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L183)

___

### schema

▪ `Static` `Optional` `Readonly` **schema**: [`Schema`](../modules/behavior_cluster_export._internal_.md#schema)

#### Inherited from

IdentifyBehavior.schema

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:200](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L200)

___

### supervisor

▪ `Static` `Readonly` **supervisor**: [`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

#### Inherited from

IdentifyBehavior.supervisor

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

IdentifyBehavior.supports

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:205](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L205)

## Methods

### #identifyTick

▸ **#identifyTick**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/identify/IdentifyServer.ts:71](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/identify/IdentifyServer.ts#L71)

___

### #identifyTimeChangedHandler

▸ **#identifyTimeChangedHandler**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/identify/IdentifyServer.ts:58](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/identify/IdentifyServer.ts#L58)

___

### #startIdentifying

▸ **#startIdentifying**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/identify/IdentifyServer.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/identify/IdentifyServer.ts#L42)

___

### #stopIdentifying

▸ **#stopIdentifying**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/identify/IdentifyServer.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/identify/IdentifyServer.ts#L50)

___

### [asyncDispose]

▸ **[asyncDispose]**(): `Promise`\<`void`\>

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

`Promise`\<`void`\>

#### Overrides

[IdentifyBehavior](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md).[[asyncDispose]](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md#[asyncdispose])

#### Defined in

[packages/matter.js/src/behavior/definitions/identify/IdentifyServer.ts:66](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/identify/IdentifyServer.ts#L66)

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

[IdentifyBehavior](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md).[asAdmin](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md#asadmin)

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

[IdentifyBehavior](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md).[callback](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md#callback)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L226)

___

### identify

▸ **identify**(`request`): `void`

This command starts or stops the receiving device identifying itself.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `identifyTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

`void`

**`See`**

MatterSpecification.v11.Cluster § 1.2.6.1

#### Overrides

[IdentifyBehavior](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md).[identify](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md#identify)

#### Defined in

[packages/matter.js/src/behavior/definitions/identify/IdentifyServer.ts:79](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/identify/IdentifyServer.ts#L79)

___

### identifyQuery

▸ **identifyQuery**(): [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `timeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

#### Returns

[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `timeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

#### Defined in

[packages/matter.js/src/behavior/definitions/identify/IdentifyServer.ts:85](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/identify/IdentifyServer.ts#L85)

___

### initialize

▸ **initialize**(): `void`

Behaviors are ephemeral and should not perform initialization in their constructor.  They can override this
method instead.

This method may be synchronous or asyncronous.  If asynchronous, the behavior will not be available for external
use until initialization completes.

#### Returns

`void`

#### Overrides

[IdentifyBehavior](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md).[initialize](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md#initialize)

#### Defined in

[packages/matter.js/src/behavior/definitions/identify/IdentifyServer.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/identify/IdentifyServer.ts#L31)

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

[IdentifyBehavior](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md).[reactTo](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md#reactto)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L212)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

[IdentifyBehavior](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md).[toString](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md#tostring)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L203)

___

### triggerEffect

▸ **triggerEffect**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

This command allows the support of feedback to the user, such as a certain light effect. It is used to allow
an implementation to provide visual feedback to the user under certain circumstances such as a color light
turning green when it has successfully connected to a network. The use of this command and the effects
themselves are entirely up to the implementer to use whenever a visual feedback is useful but it is not the
same as and does not replace the identify mechanism used during commissioning.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `effectIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EffectIdentifier`](../enums/cluster_export.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Default`](../enums/cluster_export.Identify.EffectVariant.md#default)\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 1.2.6.3

#### Inherited from

[IdentifyBehavior](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md).[triggerEffect](../interfaces/behavior_definitions_identify_export.IdentifyBehavior-1.md#triggereffect)

#### Defined in

[packages/matter.js/src/behavior/definitions/identify/IdentifyInterface.ts:57](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/identify/IdentifyInterface.ts#L57)

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

IdentifyBehavior.alter

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

IdentifyBehavior.enable

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

IdentifyBehavior.for

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

IdentifyBehavior.set

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

IdentifyBehavior.with

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)
