[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/descriptor/export](../modules/behavior_definitions_descriptor_export.md) / DescriptorServer

# Class: DescriptorServer

[behavior/definitions/descriptor/export](../modules/behavior_definitions_descriptor_export.md).DescriptorServer

This is the default server implementation of DescriptorBehavior.

## Hierarchy

- [`DescriptorBehavior`](../interfaces/behavior_definitions_descriptor_export.DescriptorBehavior-1.md)

  ↳ **`DescriptorServer`**

## Table of contents

### Constructors

- [constructor](behavior_definitions_descriptor_export.DescriptorServer-1.md#constructor)

### Properties

- [#agent](behavior_definitions_descriptor_export.DescriptorServer-1.md##agent)
- [[reference]](behavior_definitions_descriptor_export.DescriptorServer-1.md#[reference])
- [agent](behavior_definitions_descriptor_export.DescriptorServer-1.md#agent)
- [cluster](behavior_definitions_descriptor_export.DescriptorServer-1.md#cluster)
- [context](behavior_definitions_descriptor_export.DescriptorServer-1.md#context)
- [endpoint](behavior_definitions_descriptor_export.DescriptorServer-1.md#endpoint)
- [events](behavior_definitions_descriptor_export.DescriptorServer-1.md#events)
- [features](behavior_definitions_descriptor_export.DescriptorServer-1.md#features)
- [session](behavior_definitions_descriptor_export.DescriptorServer-1.md#session)
- [state](behavior_definitions_descriptor_export.DescriptorServer-1.md#state)
- [Events](behavior_definitions_descriptor_export.DescriptorServer-1.md#events-1)
- [Interface](behavior_definitions_descriptor_export.DescriptorServer-1.md#interface)
- [Internal](behavior_definitions_descriptor_export.DescriptorServer-1.md#internal)
- [State](behavior_definitions_descriptor_export.DescriptorServer-1.md#state-1)
- [cluster](behavior_definitions_descriptor_export.DescriptorServer-1.md#cluster-1)
- [defaults](behavior_definitions_descriptor_export.DescriptorServer-1.md#defaults)
- [dependencies](behavior_definitions_descriptor_export.DescriptorServer-1.md#dependencies)
- [early](behavior_definitions_descriptor_export.DescriptorServer-1.md#early)
- [id](behavior_definitions_descriptor_export.DescriptorServer-1.md#id)
- [name](behavior_definitions_descriptor_export.DescriptorServer-1.md#name)
- [schema](behavior_definitions_descriptor_export.DescriptorServer-1.md#schema)
- [supervisor](behavior_definitions_descriptor_export.DescriptorServer-1.md#supervisor)
- [supports](behavior_definitions_descriptor_export.DescriptorServer-1.md#supports)

### Accessors

- [#serverList](behavior_definitions_descriptor_export.DescriptorServer-1.md##serverlist)

### Methods

- [#monitorDestruction](behavior_definitions_descriptor_export.DescriptorServer-1.md##monitordestruction)
- [#updateDescriptor](behavior_definitions_descriptor_export.DescriptorServer-1.md##updatedescriptor)
- [#updatePartsList](behavior_definitions_descriptor_export.DescriptorServer-1.md##updatepartslist)
- [[asyncDispose]](behavior_definitions_descriptor_export.DescriptorServer-1.md#[asyncdispose])
- [addDeviceTypes](behavior_definitions_descriptor_export.DescriptorServer-1.md#adddevicetypes)
- [asAdmin](behavior_definitions_descriptor_export.DescriptorServer-1.md#asadmin)
- [callback](behavior_definitions_descriptor_export.DescriptorServer-1.md#callback)
- [hasDeviceType](behavior_definitions_descriptor_export.DescriptorServer-1.md#hasdevicetype)
- [initialize](behavior_definitions_descriptor_export.DescriptorServer-1.md#initialize)
- [reactTo](behavior_definitions_descriptor_export.DescriptorServer-1.md#reactto)
- [toString](behavior_definitions_descriptor_export.DescriptorServer-1.md#tostring)
- [alter](behavior_definitions_descriptor_export.DescriptorServer-1.md#alter)
- [enable](behavior_definitions_descriptor_export.DescriptorServer-1.md#enable)
- [for](behavior_definitions_descriptor_export.DescriptorServer-1.md#for)
- [set](behavior_definitions_descriptor_export.DescriptorServer-1.md#set)
- [with](behavior_definitions_descriptor_export.DescriptorServer-1.md#with)

## Constructors

### constructor

• **new DescriptorServer**(`agent`, `backing`): [`DescriptorServer`](behavior_definitions_descriptor_export.DescriptorServer-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |
| `backing` | [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md) |

#### Returns

[`DescriptorServer`](behavior_definitions_descriptor_export.DescriptorServer-1.md)

#### Inherited from

DescriptorBehavior.constructor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:181](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L181)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

[DescriptorBehavior](../interfaces/behavior_definitions_descriptor_export.DescriptorBehavior-1.md).[#agent](../interfaces/behavior_definitions_descriptor_export.DescriptorBehavior-1.md##agent)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L51)

___

### [reference]

• **[reference]**: [`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

[DescriptorBehavior](../interfaces/behavior_definitions_descriptor_export.DescriptorBehavior-1.md).[[reference]](../interfaces/behavior_definitions_descriptor_export.DescriptorBehavior-1.md#[reference])

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

___

### agent

• **agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

[DescriptorBehavior](../interfaces/behavior_definitions_descriptor_export.DescriptorBehavior-1.md).[agent](../interfaces/behavior_definitions_descriptor_export.DescriptorBehavior-1.md#agent)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

___

### cluster

• **cluster**: `never`

The implemented cluster.

#### Inherited from

[DescriptorBehavior](../interfaces/behavior_definitions_descriptor_export.DescriptorBehavior-1.md).[cluster](../interfaces/behavior_definitions_descriptor_export.DescriptorBehavior-1.md#cluster)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:280](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L280)

___

### context

• **context**: [`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

[DescriptorBehavior](../interfaces/behavior_definitions_descriptor_export.DescriptorBehavior-1.md).[context](../interfaces/behavior_definitions_descriptor_export.DescriptorBehavior-1.md#context)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

___

### endpoint

• **endpoint**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

[DescriptorBehavior](../interfaces/behavior_definitions_descriptor_export.DescriptorBehavior-1.md).[endpoint](../interfaces/behavior_definitions_descriptor_export.DescriptorBehavior-1.md#endpoint)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

___

### events

• `Readonly` **events**: [`EventEmitter`](util_export.EventEmitter-1.md) & `Omit`\<[`EventEmitter`](util_export.EventEmitter-1.md), `never`\> & \{ `clientList$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>[], `any`\>\> ; `deviceTypeList$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `deviceType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DeviceTypeId`](../modules/datatype_export.md#devicetypeid)\<`number`\>\> ; `revision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>[], `any`\>\> ; `partsList$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[], `any`\>\> ; `serverList$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>[], `any`\>\>  } & {} & {} & {}

Access the behavior's events.

#### Inherited from

[DescriptorBehavior](../interfaces/behavior_definitions_descriptor_export.DescriptorBehavior-1.md).[events](../interfaces/behavior_definitions_descriptor_export.DescriptorBehavior-1.md#events)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L145)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:290](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L290)

___

### features

• **features**: `Object`

Supported features as a flag object.

#### Inherited from

[DescriptorBehavior](../interfaces/behavior_definitions_descriptor_export.DescriptorBehavior-1.md).[features](../interfaces/behavior_definitions_descriptor_export.DescriptorBehavior-1.md#features)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:295](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L295)

___

### session

• **session**: [`SecureSession`](session_export.SecureSession.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Inherited from

[DescriptorBehavior](../interfaces/behavior_definitions_descriptor_export.DescriptorBehavior-1.md).[session](../interfaces/behavior_definitions_descriptor_export.DescriptorBehavior-1.md#session)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

___

### state

• `Readonly` **state**: `Omit`\<{}, `never`\> & \{ `partsList`: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]  } & {} & \{ `clientList`: [`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>[] ; `deviceTypeList`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `deviceType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DeviceTypeId`](../modules/datatype_export.md#devicetypeid)\<`number`\>\> ; `revision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>[] ; `serverList`: [`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>[]  } & {}

Access the behavior's state.

#### Inherited from

[DescriptorBehavior](../interfaces/behavior_definitions_descriptor_export.DescriptorBehavior-1.md).[state](../interfaces/behavior_definitions_descriptor_export.DescriptorBehavior-1.md#state)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:140](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L140)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:285](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L285)

___

### Events

▪ `Static` `Readonly` **Events**: [`Type`](../modules/behavior_cluster_export.ClusterEvents.md#type)\<[`Cluster`](../interfaces/cluster_export.Descriptor.Cluster.md), typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>

#### Inherited from

DescriptorBehavior.Events

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:195](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L195)

___

### Interface

▪ `Static` `Readonly` **Interface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | `never`[] |

#### Inherited from

DescriptorBehavior.Interface

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

DescriptorBehavior.Internal

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:197](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L197)

___

### State

▪ `Static` `Readonly` **State**: () => [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Cluster`](../interfaces/cluster_export.Descriptor.Cluster.md), typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>

#### Type declaration

• **new State**(): [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Cluster`](../interfaces/cluster_export.Descriptor.Cluster.md), typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>

##### Returns

[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Cluster`](../interfaces/cluster_export.Descriptor.Cluster.md), typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>

#### Inherited from

DescriptorBehavior.State

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:196](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L196)

___

### cluster

▪ `Static` `Readonly` **cluster**: [`Cluster`](../interfaces/cluster_export.Descriptor.Cluster.md)

Base cluster state include all attribute values but may be extended by subclasses.

#### Inherited from

DescriptorBehavior.cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:193](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L193)

___

### defaults

▪ `Static` `Readonly` **defaults**: [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Cluster`](../interfaces/cluster_export.Descriptor.Cluster.md), typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>

#### Inherited from

DescriptorBehavior.defaults

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:202](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L202)

___

### dependencies

▪ `Static` **dependencies**: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)[]

#### Overrides

DescriptorBehavior.dependencies

#### Defined in

[packages/matter.js/src/behavior/definitions/descriptor/DescriptorServer.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/descriptor/DescriptorServer.ts#L22)

___

### early

▪ `Static` `Readonly` **early**: `boolean`

#### Inherited from

DescriptorBehavior.early

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

___

### id

▪ `Static` `Readonly` **id**: ``"descriptor"``

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

DescriptorBehavior.id

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:188](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L188)

___

### name

▪ `Static` `Readonly` **name**: `string`

#### Inherited from

DescriptorBehavior.name

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:183](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L183)

___

### schema

▪ `Static` `Optional` `Readonly` **schema**: [`Schema`](../modules/behavior_cluster_export._internal_.md#schema)

#### Inherited from

DescriptorBehavior.schema

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:200](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L200)

___

### supervisor

▪ `Static` `Readonly` **supervisor**: [`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

#### Inherited from

DescriptorBehavior.supervisor

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

DescriptorBehavior.supports

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:205](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L205)

## Accessors

### #serverList

• `get` **#serverList**(): [`ClusterId`](../modules/datatype_export.md#clusterid)[]

Computed current server list.

#### Returns

[`ClusterId`](../modules/datatype_export.md#clusterid)[]

#### Defined in

[packages/matter.js/src/behavior/definitions/descriptor/DescriptorServer.ts:163](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/descriptor/DescriptorServer.ts#L163)

## Methods

### #monitorDestruction

▸ **#monitorDestruction**(`endpoint`): `void`

Monitor endpoint for removal.

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/descriptor/DescriptorServer.ts:105](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/descriptor/DescriptorServer.ts#L105)

___

### #updateDescriptor

▸ **#updateDescriptor**(`type`, `endpoint`): `Promise`\<`void`\>

Process a structure change event and trigger state updates if necessary.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Change`](../enums/node_export._internal_.Change.md) |
| `endpoint` | [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/definitions/descriptor/DescriptorServer.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/descriptor/DescriptorServer.ts#L80)

___

### #updatePartsList

▸ **#updatePartsList**(): `Promise`\<`void`\>

Update the parts list.

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/definitions/descriptor/DescriptorServer.ts:112](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/descriptor/DescriptorServer.ts#L112)

___

### [asyncDispose]

▸ **[asyncDispose]**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

[DescriptorBehavior](../interfaces/behavior_definitions_descriptor_export.DescriptorBehavior-1.md).[[asyncDispose]](../interfaces/behavior_definitions_descriptor_export.DescriptorBehavior-1.md#[asyncdispose])

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:198](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L198)

___

### addDeviceTypes

▸ **addDeviceTypes**(`...deviceTypes`): `void`

Extend device type metadata.  This is a shortcut for deduped insert into the deviceTypeList cluster attribute.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...deviceTypes` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `deviceType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`DeviceTypeId`](../modules/datatype_export.md#devicetypeid)\<`number`\>\> ; `revision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>[] |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/descriptor/DescriptorServer.ts:57](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/descriptor/DescriptorServer.ts#L57)

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

[DescriptorBehavior](../interfaces/behavior_definitions_descriptor_export.DescriptorBehavior-1.md).[asAdmin](../interfaces/behavior_definitions_descriptor_export.DescriptorBehavior-1.md#asadmin)

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

[DescriptorBehavior](../interfaces/behavior_definitions_descriptor_export.DescriptorBehavior-1.md).[callback](../interfaces/behavior_definitions_descriptor_export.DescriptorBehavior-1.md#callback)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L226)

___

### hasDeviceType

▸ **hasDeviceType**(`type`): `boolean`

Check for presence of a device type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`DeviceTypeId`](../modules/datatype_export.md#devicetypeid) |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/behavior/definitions/descriptor/DescriptorServer.ts:73](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/descriptor/DescriptorServer.ts#L73)

___

### initialize

▸ **initialize**(): `Promise`\<`void`\>

Behaviors are ephemeral and should not perform initialization in their constructor.  They can override this
method instead.

This method may be synchronous or asyncronous.  If asynchronous, the behavior will not be available for external
use until initialization completes.

#### Returns

`Promise`\<`void`\>

#### Overrides

[DescriptorBehavior](../interfaces/behavior_definitions_descriptor_export.DescriptorBehavior-1.md).[initialize](../interfaces/behavior_definitions_descriptor_export.DescriptorBehavior-1.md#initialize)

#### Defined in

[packages/matter.js/src/behavior/definitions/descriptor/DescriptorServer.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/descriptor/DescriptorServer.ts#L24)

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

[DescriptorBehavior](../interfaces/behavior_definitions_descriptor_export.DescriptorBehavior-1.md).[reactTo](../interfaces/behavior_definitions_descriptor_export.DescriptorBehavior-1.md#reactto)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L212)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

[DescriptorBehavior](../interfaces/behavior_definitions_descriptor_export.DescriptorBehavior-1.md).[toString](../interfaces/behavior_definitions_descriptor_export.DescriptorBehavior-1.md#tostring)

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

DescriptorBehavior.alter

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

DescriptorBehavior.enable

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

DescriptorBehavior.for

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

DescriptorBehavior.set

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

DescriptorBehavior.with

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)
