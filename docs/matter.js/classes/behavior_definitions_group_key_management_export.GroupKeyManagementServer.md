[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/group-key-management/export](../modules/behavior_definitions_group_key_management_export.md) / GroupKeyManagementServer

# Class: GroupKeyManagementServer

[behavior/definitions/group-key-management/export](../modules/behavior_definitions_group_key_management_export.md).GroupKeyManagementServer

This is the default server implementation of [GroupKeyManagementBehavior](../modules/behavior_definitions_group_key_management_export.md#groupkeymanagementbehavior).

## Hierarchy

- [`GroupKeyManagementBehavior`](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md)

  ↳ **`GroupKeyManagementServer`**

## Table of contents

### Constructors

- [constructor](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#constructor)

### Properties

- [#agent](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md##agent)
- [[reference]](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#[reference])
- [agent](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#agent)
- [cluster](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#cluster)
- [context](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#context)
- [endpoint](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#endpoint)
- [events](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#events)
- [features](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#features)
- [session](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#session)
- [state](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#state)
- [Events](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#events-1)
- [Interface](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#interface)
- [Internal](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#internal)
- [State](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#state-1)
- [cluster](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#cluster-1)
- [defaults](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#defaults)
- [dependencies](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#dependencies)
- [early](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#early)
- [id](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#id)
- [name](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#name)
- [schema](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#schema)
- [supervisor](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#supervisor)
- [supports](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#supports)

### Methods

- [[asyncDispose]](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#[asyncdispose])
- [asAdmin](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#asadmin)
- [callback](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#callback)
- [initialize](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#initialize)
- [keySetRead](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#keysetread)
- [keySetReadAllIndices](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#keysetreadallindices)
- [keySetRemove](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#keysetremove)
- [keySetWrite](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#keysetwrite)
- [reactTo](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#reactto)
- [toString](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#tostring)
- [alter](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#alter)
- [enable](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#enable)
- [for](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#for)
- [set](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#set)
- [with](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md#with)

## Constructors

### constructor

• **new GroupKeyManagementServer**(`agent`, `backing`): [`GroupKeyManagementServer`](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |
| `backing` | [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md) |

#### Returns

[`GroupKeyManagementServer`](behavior_definitions_group_key_management_export.GroupKeyManagementServer.md)

#### Inherited from

GroupKeyManagementBehavior.constructor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:181](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L181)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

[GroupKeyManagementBehavior](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md).[#agent](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md##agent)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L51)

___

### [reference]

• **[reference]**: [`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

[GroupKeyManagementBehavior](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md).[[reference]](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md#[reference])

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

___

### agent

• **agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

[GroupKeyManagementBehavior](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md).[agent](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md#agent)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

___

### cluster

• **cluster**: `never`

The implemented cluster.

#### Inherited from

[GroupKeyManagementBehavior](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md).[cluster](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md#cluster)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:280](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L280)

___

### context

• **context**: [`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

[GroupKeyManagementBehavior](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md).[context](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md#context)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

___

### endpoint

• **endpoint**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

[GroupKeyManagementBehavior](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md).[endpoint](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md#endpoint)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

___

### events

• `Readonly` **events**: [`EventEmitter`](util_export.EventEmitter-1.md) & `Omit`\<[`ClusterEvents`](../modules/behavior_cluster_export.md#clusterevents)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & \{ `groupKeyMap$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableFabricScopedAttribute`](../interfaces/cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>[], `any`\>\> ; `groupTable$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FabricScopedAttribute`](../interfaces/cluster_export.FabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `endpoints`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>[], `any`\>\> ; `maxGroupKeysPerFabric$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>\> ; `maxGroupsPerFabric$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>\>  } & {} & {} & {}

Access the behavior's events.

#### Inherited from

[GroupKeyManagementBehavior](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md).[events](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md#events)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L145)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:290](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L290)

___

### features

• **features**: `Object`

Supported features as a flag object.

#### Inherited from

[GroupKeyManagementBehavior](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md).[features](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md#features)

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

[GroupKeyManagementBehavior](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md).[session](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md#session)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

___

### state

• `Readonly` **state**: `Omit`\<[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & \{ `groupKeyMap`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>[] ; `groupTable`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `endpoints`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>[]  } & {} & \{ `maxGroupKeysPerFabric`: `number` ; `maxGroupsPerFabric`: `number`  } & {}

Access the behavior's state.

#### Inherited from

[GroupKeyManagementBehavior](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md).[state](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md#state)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:140](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L140)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:285](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L285)

___

### Events

▪ `Static` `Readonly` **Events**: [`Type`](../modules/behavior_cluster_export.ClusterEvents.md#type)\<[`Cluster`](../interfaces/cluster_export.GroupKeyManagement.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`GroupKeyManagementInterface`](../modules/behavior_definitions_group_key_management_export.md#groupkeymanagementinterface)\>\>

#### Inherited from

GroupKeyManagementBehavior.Events

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:195](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L195)

___

### Interface

▪ `Static` `Readonly` **Interface**: [`GroupKeyManagementInterface`](../modules/behavior_definitions_group_key_management_export.md#groupkeymanagementinterface)

#### Inherited from

GroupKeyManagementBehavior.Interface

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

GroupKeyManagementBehavior.Internal

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:197](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L197)

___

### State

▪ `Static` `Readonly` **State**: () => [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Cluster`](../interfaces/cluster_export.GroupKeyManagement.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`GroupKeyManagementInterface`](../modules/behavior_definitions_group_key_management_export.md#groupkeymanagementinterface)\>\>

#### Type declaration

• **new State**(): [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Cluster`](../interfaces/cluster_export.GroupKeyManagement.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`GroupKeyManagementInterface`](../modules/behavior_definitions_group_key_management_export.md#groupkeymanagementinterface)\>\>

##### Returns

[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Cluster`](../interfaces/cluster_export.GroupKeyManagement.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`GroupKeyManagementInterface`](../modules/behavior_definitions_group_key_management_export.md#groupkeymanagementinterface)\>\>

#### Inherited from

GroupKeyManagementBehavior.State

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:196](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L196)

___

### cluster

▪ `Static` `Readonly` **cluster**: [`Cluster`](../interfaces/cluster_export.GroupKeyManagement.Cluster.md)

Base cluster state include all attribute values but may be extended by subclasses.

#### Inherited from

GroupKeyManagementBehavior.cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:193](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L193)

___

### defaults

▪ `Static` `Readonly` **defaults**: [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Cluster`](../interfaces/cluster_export.GroupKeyManagement.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`GroupKeyManagementInterface`](../modules/behavior_definitions_group_key_management_export.md#groupkeymanagementinterface)\>\>

#### Inherited from

GroupKeyManagementBehavior.defaults

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:202](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L202)

___

### dependencies

▪ `Static` `Optional` `Readonly` **dependencies**: `Iterable`\<[`Type`](../interfaces/behavior_export.Behavior.Type.md)\>

#### Inherited from

GroupKeyManagementBehavior.dependencies

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:204](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L204)

___

### early

▪ `Static` `Readonly` **early**: `boolean`

#### Inherited from

GroupKeyManagementBehavior.early

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

___

### id

▪ `Static` `Readonly` **id**: ``"groupKeyManagement"``

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

GroupKeyManagementBehavior.id

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:188](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L188)

___

### name

▪ `Static` `Readonly` **name**: `string`

#### Inherited from

GroupKeyManagementBehavior.name

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:183](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L183)

___

### schema

▪ `Static` `Optional` `Readonly` **schema**: [`Schema`](../modules/behavior_cluster_export._internal_.md#schema)

#### Inherited from

GroupKeyManagementBehavior.schema

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:200](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L200)

___

### supervisor

▪ `Static` `Readonly` **supervisor**: [`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

#### Inherited from

GroupKeyManagementBehavior.supervisor

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

GroupKeyManagementBehavior.supports

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

[GroupKeyManagementBehavior](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md).[[asyncDispose]](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md#[asyncdispose])

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

[GroupKeyManagementBehavior](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md).[asAdmin](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md#asadmin)

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

[GroupKeyManagementBehavior](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md).[callback](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md#callback)

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

[GroupKeyManagementBehavior](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md).[initialize](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md#initialize)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:192](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L192)

___

### keySetRead

▸ **keySetRead**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochStartTime0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `groupKeyMulticastPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupKeyMulticastPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeyMulticastPolicy.md)\> ; `groupKeySecurityPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupKeySecurityPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeySecurityPolicy.md)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>\>

This command is used by Administrators to read the state of a given Group Key Set.

Effect on Receipt

If there exists a Group Key Set associated with the accessing fabric which has the same GroupKeySetID as
that provided in the GroupKeySetID field, then the contents of that Group Key Set shall be sent in a
KeySetReadResponse command, but with the EpochKey0, EpochKey1 and EpochKey2 fields replaced by null.

Otherwise, if the GroupKeySetID does not refer to a Group Key Set associated with the accessing fabric, then
this command shall fail with a NOT_FOUND status code.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochStartTime0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `groupKeyMulticastPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupKeyMulticastPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeyMulticastPolicy.md)\> ; `groupKeySecurityPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupKeySecurityPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeySecurityPolicy.md)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>\>

**`See`**

MatterSpecification.v11.Core § 11.2.8.2

#### Inherited from

[GroupKeyManagementBehavior](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md).[keySetRead](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md#keysetread)

#### Defined in

[packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts:174](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts#L174)

___

### keySetReadAllIndices

▸ **keySetReadAllIndices**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetIDs`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`[]\>  }\>\>

This command is used by Administrators to query a list of all Group Key Sets associated with the accessing
fabric.

Effect on Receipt

Upon receipt, this command shall iterate all stored GroupKeySetStruct associated with the accessing fabric
and generate a KeySetReadAllIndicesResponse command containing the list of GroupKeySetID values from those
structs.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetIDs`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`[]\>  }\>\>

**`See`**

MatterSpecification.v11.Core § 11.2.8.5

#### Inherited from

[GroupKeyManagementBehavior](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md).[keySetReadAllIndices](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md#keysetreadallindices)

#### Defined in

[packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts:212](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts#L212)

___

### keySetRemove

▸ **keySetRemove**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

This command is used by Administrators to remove all state of a given Group Key Set.

Effect on Receipt

If there exists a Group Key Set associated with the accessing fabric which has the same GroupKeySetID as
that provided in the GroupKeySetID field, then the contents of that Group Key Set shall be removed,
including all epoch keys it contains.

If there exist any entries for the accessing fabric within the GroupKeyMap attribute that refer to the
GroupKeySetID just removed, then these entries shall be removed from that list.

This command shall fail with an INVALID_COMMAND status code back to the initiator if the GroupKeySetID being
removed is 0, which is the Key Set associated with the Identity Protection Key (IPK). The only method to
remove the IPK is usage of the RemoveFabric command or any operation which causes the equivalent of a
RemoveFabric to occur by side-effect.

This command shall send a SUCCESS status code back to the initiator on success, or NOT_FOUND if the
GroupKeySetID requested did not exist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 11.2.8.4

#### Inherited from

[GroupKeyManagementBehavior](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md).[keySetRemove](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md#keysetremove)

#### Defined in

[packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts:198](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts#L198)

___

### keySetWrite

▸ **keySetWrite**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

This command is used by Administrators to set the state of a given Group Key Set, including atomically
updating the state of all epoch keys.

Effect on Receipt

If the EpochKey0 field is null or its associated EpochStartTime0 field is null, then this command shall fail
with an INVALID_COMMAND status code sent back to the initiator.

If the EpochKey1 field is not null, its associated EpochStartTime1 field shall contain a later epoch start
time than the epoch start time found in the EpochStartTime0 field. Otherwise this command shall fail with an
INVALID_COMMAND status code sent back to the initiator.

If the EpochKey2 field is not null, then the EpochKey1 field shall NOT be null. Otherwise this command shall
fail with an INVALID_COMMAND status code sent back to the initiator.

If the EpochKey2 field is not null, its associated EpochStartTime2 field shall contain a later epoch start
time than the epoch start time found in the EpochStartTime1 field. Otherwise this command shall fail with an
INVALID_COMMAND status code sent back to the initiator.

If there exists a Group Key Set associated with the accessing fabric which has the same GroupKeySetID as
that provided in the GroupKeySet field, then the contents of that group key set shall be replaced. A
replacement shall be done by executing the equivalent of entirely removing the previous Group Key Set with
the given GroupKeySetID, followed by an addition of a Group Key Set with the provided configuration.
Otherwise, if the GroupKeySetID did not match an existing entry, a new Group Key Set associated with the
accessing fabric shall be created with the provided data. The Group Key Set shall be written to non-volatile
storage.

Upon completion, this command shall send a status code back to the initiator:

  • If the Group Key Set was properly installed or updated on the Node, the status code shall be set to
    SUCCESS.

  • If there are insufficient resources on the receiver to store an additional Group Key Set, the status
    code shall be set to RESOURCE_EXHAUSTED (see group key limits);

  • Otherwise, this status code shall be set to FAILURE.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochStartTime0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `groupKeyMulticastPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupKeyMulticastPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeyMulticastPolicy.md)\> ; `groupKeySecurityPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupKeySecurityPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeySecurityPolicy.md)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 11.2.8.1

#### Inherited from

[GroupKeyManagementBehavior](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md).[keySetWrite](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md#keysetwrite)

#### Defined in

[packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts:158](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts#L158)

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

[GroupKeyManagementBehavior](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md).[reactTo](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md#reactto)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L212)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

[GroupKeyManagementBehavior](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md).[toString](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md#tostring)

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

GroupKeyManagementBehavior.alter

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

GroupKeyManagementBehavior.enable

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

GroupKeyManagementBehavior.for

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

GroupKeyManagementBehavior.set

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

GroupKeyManagementBehavior.with

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)
