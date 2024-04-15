[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/ota-software-update-provider/export](../modules/behavior_definitions_ota_software_update_provider_export.md) / OtaSoftwareUpdateProviderServer

# Class: OtaSoftwareUpdateProviderServer

[behavior/definitions/ota-software-update-provider/export](../modules/behavior_definitions_ota_software_update_provider_export.md).OtaSoftwareUpdateProviderServer

This is the default server implementation of [OtaSoftwareUpdateProviderBehavior](../modules/behavior_definitions_ota_software_update_provider_export.md#otasoftwareupdateproviderbehavior).

## Hierarchy

- [`OtaSoftwareUpdateProviderBehavior`](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md)

  ↳ **`OtaSoftwareUpdateProviderServer`**

## Table of contents

### Constructors

- [constructor](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#constructor)

### Properties

- [#agent](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md##agent)
- [[reference]](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#[reference])
- [agent](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#agent)
- [cluster](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#cluster)
- [context](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#context)
- [endpoint](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#endpoint)
- [events](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#events)
- [features](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#features)
- [session](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#session)
- [state](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#state)
- [Events](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#events-1)
- [Interface](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#interface)
- [Internal](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#internal)
- [State](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#state-1)
- [cluster](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#cluster-1)
- [defaults](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#defaults)
- [dependencies](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#dependencies)
- [early](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#early)
- [id](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#id)
- [name](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#name)
- [schema](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#schema)
- [supervisor](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#supervisor)
- [supports](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#supports)

### Methods

- [[asyncDispose]](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#[asyncdispose])
- [applyUpdateRequest](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#applyupdaterequest)
- [asAdmin](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#asadmin)
- [callback](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#callback)
- [initialize](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#initialize)
- [notifyUpdateApplied](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#notifyupdateapplied)
- [queryImage](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#queryimage)
- [reactTo](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#reactto)
- [toString](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#tostring)
- [alter](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#alter)
- [enable](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#enable)
- [for](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#for)
- [set](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#set)
- [with](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md#with)

## Constructors

### constructor

• **new OtaSoftwareUpdateProviderServer**(`agent`, `backing`): [`OtaSoftwareUpdateProviderServer`](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |
| `backing` | [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md) |

#### Returns

[`OtaSoftwareUpdateProviderServer`](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md)

#### Inherited from

OtaSoftwareUpdateProviderBehavior.constructor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:181](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L181)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

[OtaSoftwareUpdateProviderBehavior](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md).[#agent](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md##agent)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L51)

___

### [reference]

• **[reference]**: [`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

[OtaSoftwareUpdateProviderBehavior](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md).[[reference]](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md#[reference])

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

___

### agent

• **agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

[OtaSoftwareUpdateProviderBehavior](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md).[agent](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md#agent)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

___

### cluster

• **cluster**: `never`

The implemented cluster.

#### Inherited from

[OtaSoftwareUpdateProviderBehavior](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md).[cluster](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md#cluster)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:280](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L280)

___

### context

• **context**: [`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

[OtaSoftwareUpdateProviderBehavior](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md).[context](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md#context)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

___

### endpoint

• **endpoint**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

[OtaSoftwareUpdateProviderBehavior](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md).[endpoint](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md#endpoint)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

___

### events

• `Readonly` **events**: [`EventEmitter`](util_export.EventEmitter-1.md) & `Omit`\<[`ClusterEvents`](../modules/behavior_cluster_export.md#clusterevents)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & {} & {} & {} & {}

Access the behavior's events.

#### Inherited from

[OtaSoftwareUpdateProviderBehavior](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md).[events](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md#events)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L145)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:290](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L290)

___

### features

• **features**: `Object`

Supported features as a flag object.

#### Inherited from

[OtaSoftwareUpdateProviderBehavior](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md).[features](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md#features)

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

[OtaSoftwareUpdateProviderBehavior](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md).[session](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md#session)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

___

### state

• `Readonly` **state**: `Omit`\<[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & {} & {} & {} & {}

Access the behavior's state.

#### Inherited from

[OtaSoftwareUpdateProviderBehavior](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md).[state](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md#state)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:140](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L140)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:285](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L285)

___

### Events

▪ `Static` `Readonly` **Events**: [`Type`](../modules/behavior_cluster_export.ClusterEvents.md#type)\<[`Cluster`](../interfaces/cluster_export.OtaSoftwareUpdateProvider.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`OtaSoftwareUpdateProviderInterface`](../modules/behavior_definitions_ota_software_update_provider_export.md#otasoftwareupdateproviderinterface)\>\>

#### Inherited from

OtaSoftwareUpdateProviderBehavior.Events

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:195](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L195)

___

### Interface

▪ `Static` `Readonly` **Interface**: [`OtaSoftwareUpdateProviderInterface`](../modules/behavior_definitions_ota_software_update_provider_export.md#otasoftwareupdateproviderinterface)

#### Inherited from

OtaSoftwareUpdateProviderBehavior.Interface

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

OtaSoftwareUpdateProviderBehavior.Internal

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:197](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L197)

___

### State

▪ `Static` `Readonly` **State**: () => [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Cluster`](../interfaces/cluster_export.OtaSoftwareUpdateProvider.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`OtaSoftwareUpdateProviderInterface`](../modules/behavior_definitions_ota_software_update_provider_export.md#otasoftwareupdateproviderinterface)\>\>

#### Type declaration

• **new State**(): [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Cluster`](../interfaces/cluster_export.OtaSoftwareUpdateProvider.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`OtaSoftwareUpdateProviderInterface`](../modules/behavior_definitions_ota_software_update_provider_export.md#otasoftwareupdateproviderinterface)\>\>

##### Returns

[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Cluster`](../interfaces/cluster_export.OtaSoftwareUpdateProvider.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`OtaSoftwareUpdateProviderInterface`](../modules/behavior_definitions_ota_software_update_provider_export.md#otasoftwareupdateproviderinterface)\>\>

#### Inherited from

OtaSoftwareUpdateProviderBehavior.State

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:196](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L196)

___

### cluster

▪ `Static` `Readonly` **cluster**: [`Cluster`](../interfaces/cluster_export.OtaSoftwareUpdateProvider.Cluster.md)

Base cluster state include all attribute values but may be extended by subclasses.

#### Inherited from

OtaSoftwareUpdateProviderBehavior.cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:193](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L193)

___

### defaults

▪ `Static` `Readonly` **defaults**: [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Cluster`](../interfaces/cluster_export.OtaSoftwareUpdateProvider.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`OtaSoftwareUpdateProviderInterface`](../modules/behavior_definitions_ota_software_update_provider_export.md#otasoftwareupdateproviderinterface)\>\>

#### Inherited from

OtaSoftwareUpdateProviderBehavior.defaults

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:202](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L202)

___

### dependencies

▪ `Static` `Optional` `Readonly` **dependencies**: `Iterable`\<[`Type`](../interfaces/behavior_export.Behavior.Type.md)\>

#### Inherited from

OtaSoftwareUpdateProviderBehavior.dependencies

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:204](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L204)

___

### early

▪ `Static` `Readonly` **early**: `boolean`

#### Inherited from

OtaSoftwareUpdateProviderBehavior.early

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

___

### id

▪ `Static` `Readonly` **id**: ``"otaSoftwareUpdateProvider"``

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

OtaSoftwareUpdateProviderBehavior.id

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:188](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L188)

___

### name

▪ `Static` `Readonly` **name**: `string`

#### Inherited from

OtaSoftwareUpdateProviderBehavior.name

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:183](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L183)

___

### schema

▪ `Static` `Optional` `Readonly` **schema**: [`Schema`](../modules/behavior_cluster_export._internal_.md#schema)

#### Inherited from

OtaSoftwareUpdateProviderBehavior.schema

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:200](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L200)

___

### supervisor

▪ `Static` `Readonly` **supervisor**: [`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

#### Inherited from

OtaSoftwareUpdateProviderBehavior.supervisor

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

OtaSoftwareUpdateProviderBehavior.supports

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

[OtaSoftwareUpdateProviderBehavior](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md).[[asyncDispose]](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md#[asyncdispose])

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:198](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L198)

___

### applyUpdateRequest

▸ **applyUpdateRequest**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `action`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ApplyUpdateAction`](../enums/cluster_export.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)\> ; `delayedActionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>

This field shall contain the UpdateToken as specified in Section 11.19.3.6.1, “UpdateToken usage”. This
field may be used by the OTA Provider to track minimal lifecycle state to allow finer-grained scheduling of
the application of Software Images by OTA Requestors.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `action`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ApplyUpdateAction`](../enums/cluster_export.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)\> ; `delayedActionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>

**`See`**

MatterSpecification.v11.Core § 11.19.6.5.18

#### Inherited from

[OtaSoftwareUpdateProviderBehavior](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md).[applyUpdateRequest](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md#applyupdaterequest)

#### Defined in

[packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts:93](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts#L93)

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

[OtaSoftwareUpdateProviderBehavior](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md).[asAdmin](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md#asadmin)

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

[OtaSoftwareUpdateProviderBehavior](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md).[callback](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md#callback)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L226)

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

[OtaSoftwareUpdateProviderBehavior](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md).[initialize](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md#initialize)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:192](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L192)

___

### notifyUpdateApplied

▸ **notifyUpdateApplied**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

This field shall contain the UpdateToken as specified in Section 11.19.3.6.1, “UpdateToken usage”.

The SoftwareVersion included in the request payload shall provide the same value as the SoftwareVersion
attribute in the invoking OTA Requestor’s Basic Information Cluster, and SHOULD be consistent with the value
representing a new version running on the Node invoking the command.

When Generated

The NotifyUpdateApplied command SHOULD be invoked in the following two circumstances:

  1. An OTA Requestor has just successfully applied a Software Image it had obtained from a previous
     QueryImage response.

  2. An OTA Requestor has just successfully applied a Software Image it had obtained through means different
     than those of this Cluster.

An OTA Provider may use the state of invocation of this command to help track the progress of update for OTA
Requestors it knows require a new OTA Software Image. However, due to the possibility that an OTA Requestor
may never come back (e.g. device removed from Fabric altogether, or a critical malfunction), an OTA Provider
shall NOT expect every OTA Requestor to invoke this command for correct operation of the OTA Provider.

This command shall be considered optional and shall not result in reduced availability of the OTA Provider
functionality if OTA Requestors never invoke this command.

Effect on Receipt

An OTA Provider receiving an invocation of this command may log it internally.

On receiving this command, an OTA Provider may use the information to update its bookkeeping of cached
Software Images, or use it for other similar administrative purposes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 11.19.6.5.22

#### Inherited from

[OtaSoftwareUpdateProviderBehavior](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md).[notifyUpdateApplied](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md#notifyupdateapplied)

#### Defined in

[packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts:129](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts#L129)

___

### queryImage

▸ **queryImage**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `delayedActionTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `imageUri`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForRequestor`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `softwareVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `softwareVersionString`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.OtaSoftwareUpdateProvider.Status.md)\> ; `updateToken`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `userConsentNeeded`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\>  }\>\>

Upon receipt, this command shall trigger an attempt to find an updated Software Image by the OTA Provider to
match the OTA Requestor’s constraints provided in the payload fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hardwareVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `location`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForProvider`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `productId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `protocolsSupported`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DownloadProtocol`](../enums/cluster_export.OtaSoftwareUpdateProvider.DownloadProtocol.md)[]\> ; `requestorCanConsent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `softwareVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `vendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`VendorId`](../modules/datatype_export.md#vendorid)\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `delayedActionTime`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `imageUri`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForRequestor`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `softwareVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `softwareVersionString`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.OtaSoftwareUpdateProvider.Status.md)\> ; `updateToken`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `userConsentNeeded`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\>  }\>\>

**`See`**

MatterSpecification.v11.Core § 11.19.6.5.1

#### Inherited from

[OtaSoftwareUpdateProviderBehavior](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md).[queryImage](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md#queryimage)

#### Defined in

[packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts#L84)

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

[OtaSoftwareUpdateProviderBehavior](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md).[reactTo](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md#reactto)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L212)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

[OtaSoftwareUpdateProviderBehavior](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md).[toString](../interfaces/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md#tostring)

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

OtaSoftwareUpdateProviderBehavior.alter

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

OtaSoftwareUpdateProviderBehavior.enable

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

OtaSoftwareUpdateProviderBehavior.for

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

OtaSoftwareUpdateProviderBehavior.set

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

OtaSoftwareUpdateProviderBehavior.with

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)
