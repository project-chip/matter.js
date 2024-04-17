[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/network-commissioning/export](../modules/behavior_definitions_network_commissioning_export.md) / NetworkCommissioningServer

# Class: NetworkCommissioningServer

[behavior/definitions/network-commissioning/export](../modules/behavior_definitions_network_commissioning_export.md).NetworkCommissioningServer

This is the default server implementation of [NetworkCommissioningBehavior](../modules/behavior_definitions_network_commissioning_export.md#networkcommissioningbehavior).

The Matter specification requires the NetworkCommissioning cluster to support features we do not enable by default.
You should use [NetworkCommissioningServer.with](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md#with) to specialize the class for the features your implementation
supports.

## Hierarchy

- [`NetworkCommissioningBehavior`](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningBehavior-1.md)

  ↳ **`NetworkCommissioningServer`**

## Table of contents

### Constructors

- [constructor](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md#constructor)

### Properties

- [#agent](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md##agent)
- [[reference]](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md#[reference])
- [agent](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md#agent)
- [cluster](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md#cluster)
- [context](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md#context)
- [endpoint](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md#endpoint)
- [events](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md#events)
- [features](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md#features)
- [session](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md#session)
- [state](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md#state)
- [Events](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md#events-1)
- [Interface](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md#interface)
- [Internal](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md#internal)
- [State](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md#state-1)
- [cluster](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md#cluster-1)
- [defaults](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md#defaults)
- [dependencies](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md#dependencies)
- [early](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md#early)
- [id](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md#id)
- [name](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md#name)
- [schema](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md#schema)
- [supervisor](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md#supervisor)
- [supports](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md#supports)

### Methods

- [[asyncDispose]](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md#[asyncdispose])
- [asAdmin](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md#asadmin)
- [callback](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md#callback)
- [initialize](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md#initialize)
- [reactTo](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md#reactto)
- [toString](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md#tostring)
- [alter](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md#alter)
- [enable](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md#enable)
- [for](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md#for)
- [set](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md#set)
- [with](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md#with)

## Constructors

### constructor

• **new NetworkCommissioningServer**(`agent`, `backing`): [`NetworkCommissioningServer`](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |
| `backing` | [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md) |

#### Returns

[`NetworkCommissioningServer`](behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md)

#### Inherited from

NetworkCommissioningBehavior.constructor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:181](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L181)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

[NetworkCommissioningBehavior](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningBehavior-1.md).[#agent](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningBehavior-1.md##agent)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L51)

___

### [reference]

• **[reference]**: [`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

[NetworkCommissioningBehavior](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningBehavior-1.md).[[reference]](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningBehavior-1.md#[reference])

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

___

### agent

• **agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

[NetworkCommissioningBehavior](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningBehavior-1.md).[agent](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningBehavior-1.md#agent)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

___

### cluster

• **cluster**: `never`

The implemented cluster.

#### Inherited from

[NetworkCommissioningBehavior](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningBehavior-1.md).[cluster](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningBehavior-1.md#cluster)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:280](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L280)

___

### context

• **context**: [`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

[NetworkCommissioningBehavior](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningBehavior-1.md).[context](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningBehavior-1.md#context)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

___

### endpoint

• **endpoint**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

[NetworkCommissioningBehavior](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningBehavior-1.md).[endpoint](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningBehavior-1.md#endpoint)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

___

### events

• `Readonly` **events**: [`EventEmitter`](util_export.EventEmitter-1.md) & `Omit`\<[`ClusterEvents`](../modules/behavior_cluster_export.md#clusterevents)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & \{ `interfaceEnabled$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`boolean`, `any`\>\> ; `lastConnectErrorValue$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>\> ; `lastNetworkId$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `Uint8Array`, `any`\>\> ; `lastNetworkingStatus$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md), `any`\>\> ; `maxNetworks$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>\> ; `networks$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `connected`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>[], `any`\>\>  } & {} & {} & {}

Access the behavior's events.

#### Inherited from

[NetworkCommissioningBehavior](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningBehavior-1.md).[events](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningBehavior-1.md#events)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L145)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:290](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L290)

___

### features

• **features**: `Object`

Supported features as a flag object.

#### Inherited from

[NetworkCommissioningBehavior](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningBehavior-1.md).[features](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningBehavior-1.md#features)

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

[NetworkCommissioningBehavior](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningBehavior-1.md).[session](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningBehavior-1.md#session)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

___

### state

• `Readonly` **state**: `Omit`\<[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & \{ `interfaceEnabled`: `boolean` ; `lastConnectErrorValue`: ``null`` \| `number` ; `lastNetworkId`: ``null`` \| `Uint8Array` ; `lastNetworkingStatus`: ``null`` \| [`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md) ; `networks`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `connected`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>[]  } & {} & \{ `maxNetworks`: `number`  } & {}

Access the behavior's state.

#### Inherited from

[NetworkCommissioningBehavior](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningBehavior-1.md).[state](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningBehavior-1.md#state)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:140](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L140)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:285](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L285)

___

### Events

▪ `Static` `Readonly` **Events**: [`Type`](../modules/behavior_cluster_export.ClusterEvents.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `interfaceEnabled`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`boolean`, `any`\> ; `lastConnectErrorValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `lastNetworkId`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `Uint8Array`, `any`\> ; `lastNetworkingStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md), `any`\> ; `maxNetworks`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `networks`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `connected`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>[], `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `connectMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `scanMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `connectNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `errorValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `any`\> ; `removeNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `any`\> ; `reorderNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `networkIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `any`\> ; `scanNetworks`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `ssid`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `threadScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `wiFiScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\>  }\>, `any`\>  }  } = WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent; `flags`: \{ `wiFiNetworkInterface`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `connectMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `scanMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `connectNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `errorValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `any`\> ; `removeNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `any`\> ; `reorderNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `networkIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `any`\> ; `scanNetworks`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `ssid`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `threadScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `wiFiScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\>  }\>, `any`\>  }  } = WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent; `flags`: \{ `threadNetworkInterface`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `addOrUpdateWiFiNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `credentials`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `ssid`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = WiFiNetworkInterfaceComponent; `flags`: \{ `wiFiNetworkInterface`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `addOrUpdateThreadNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `operationalDataset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = ThreadNetworkInterfaceComponent; `flags`: \{ `threadNetworkInterface`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `threadNetworkInterface`: ``true`` = true; `wiFiNetworkInterface`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `ethernetNetworkInterface`: ``true`` = true; `wiFiNetworkInterface`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `ethernetNetworkInterface`: ``true`` = true; `threadNetworkInterface`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `ethernetNetworkInterface`: ``false`` = false; `threadNetworkInterface`: ``false`` = false; `wiFiNetworkInterface`: ``false`` = false }  }] ; `features`: \{ `ethernetNetworkInterface`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `threadNetworkInterface`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wiFiNetworkInterface`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``49`` = 0x31; `name`: ``"NetworkCommissioning"`` = "NetworkCommissioning"; `revision`: ``1`` = 1 }\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`NetworkCommissioningInterface`](../modules/behavior_definitions_network_commissioning_export.md#networkcommissioninginterface)\>\>

#### Inherited from

NetworkCommissioningBehavior.Events

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:195](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L195)

___

### Interface

▪ `Static` `Readonly` **Interface**: [`NetworkCommissioningInterface`](../modules/behavior_definitions_network_commissioning_export.md#networkcommissioninginterface)

#### Inherited from

NetworkCommissioningBehavior.Interface

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

NetworkCommissioningBehavior.Internal

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:197](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L197)

___

### State

▪ `Static` `Readonly` **State**: () => [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `interfaceEnabled`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`boolean`, `any`\> ; `lastConnectErrorValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `lastNetworkId`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `Uint8Array`, `any`\> ; `lastNetworkingStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md), `any`\> ; `maxNetworks`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `networks`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `connected`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>[], `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `connectMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `scanMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `connectNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: ... ; `networkId`: ...  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: ... ; `errorValue`: ... ; `networkingStatus`: ...  }\>, `any`\> ; `removeNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: ... ; `networkId`: ...  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: ... ; `networkIndex`: ... ; `networkingStatus`: ...  }\>, `any`\> ; `reorderNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: ... ; `networkId`: ... ; `networkIndex`: ...  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: ... ; `networkIndex`: ... ; `networkingStatus`: ...  }\>, `any`\> ; `scanNetworks`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: ... ; `ssid`: ...  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: ... ; `networkingStatus`: ... ; `threadScanResults`: ... ; `wiFiScanResults`: ...  }\>, `any`\>  }  } = WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent; `flags`: \{ `wiFiNetworkInterface`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `connectMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `scanMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `connectNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: ... ; `networkId`: ...  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: ... ; `errorValue`: ... ; `networkingStatus`: ...  }\>, `any`\> ; `removeNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: ... ; `networkId`: ...  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: ... ; `networkIndex`: ... ; `networkingStatus`: ...  }\>, `any`\> ; `reorderNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: ... ; `networkId`: ... ; `networkIndex`: ...  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: ... ; `networkIndex`: ... ; `networkingStatus`: ...  }\>, `any`\> ; `scanNetworks`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: ... ; `ssid`: ...  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: ... ; `networkingStatus`: ... ; `threadScanResults`: ... ; `wiFiScanResults`: ...  }\>, `any`\>  }  } = WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent; `flags`: \{ `threadNetworkInterface`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `addOrUpdateWiFiNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: ... ; `credentials`: ... ; `ssid`: ...  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: ... ; `networkIndex`: ... ; `networkingStatus`: ...  }\>, `any`\>  }  } = WiFiNetworkInterfaceComponent; `flags`: \{ `wiFiNetworkInterface`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `addOrUpdateThreadNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: ... ; `operationalDataset`: ...  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: ... ; `networkIndex`: ... ; `networkingStatus`: ...  }\>, `any`\>  }  } = ThreadNetworkInterfaceComponent; `flags`: \{ `threadNetworkInterface`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `threadNetworkInterface`: ``true`` = true; `wiFiNetworkInterface`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `ethernetNetworkInterface`: ``true`` = true; `wiFiNetworkInterface`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `ethernetNetworkInterface`: ``true`` = true; `threadNetworkInterface`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `ethernetNetworkInterface`: ``false`` = false; `threadNetworkInterface`: ``false`` = false; `wiFiNetworkInterface`: ``false`` = false }  }] ; `features`: \{ `ethernetNetworkInterface`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `threadNetworkInterface`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wiFiNetworkInterface`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``49`` = 0x31; `name`: ``"NetworkCommissioning"`` = "NetworkCommissioning"; `revision`: ``1`` = 1 }\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`NetworkCommissioningInterface`](../modules/behavior_definitions_network_commissioning_export.md#networkcommissioninginterface)\>\>

#### Type declaration

• **new State**(): [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `interfaceEnabled`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`boolean`, `any`\> ; `lastConnectErrorValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `lastNetworkId`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `Uint8Array`, `any`\> ; `lastNetworkingStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md), `any`\> ; `maxNetworks`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `networks`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `connected`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>[], `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `connectMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `scanMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `connectNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: ... ; `networkId`: ...  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: ... ; `errorValue`: ... ; `networkingStatus`: ...  }\>, `any`\> ; `removeNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: ... ; `networkId`: ...  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: ... ; `networkIndex`: ... ; `networkingStatus`: ...  }\>, `any`\> ; `reorderNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: ... ; `networkId`: ... ; `networkIndex`: ...  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: ... ; `networkIndex`: ... ; `networkingStatus`: ...  }\>, `any`\> ; `scanNetworks`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: ... ; `ssid`: ...  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: ... ; `networkingStatus`: ... ; `threadScanResults`: ... ; `wiFiScanResults`: ...  }\>, `any`\>  }  } = WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent; `flags`: \{ `wiFiNetworkInterface`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `connectMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `scanMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `connectNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: ... ; `networkId`: ...  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: ... ; `errorValue`: ... ; `networkingStatus`: ...  }\>, `any`\> ; `removeNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: ... ; `networkId`: ...  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: ... ; `networkIndex`: ... ; `networkingStatus`: ...  }\>, `any`\> ; `reorderNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: ... ; `networkId`: ... ; `networkIndex`: ...  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: ... ; `networkIndex`: ... ; `networkingStatus`: ...  }\>, `any`\> ; `scanNetworks`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: ... ; `ssid`: ...  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: ... ; `networkingStatus`: ... ; `threadScanResults`: ... ; `wiFiScanResults`: ...  }\>, `any`\>  }  } = WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent; `flags`: \{ `threadNetworkInterface`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `addOrUpdateWiFiNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: ... ; `credentials`: ... ; `ssid`: ...  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: ... ; `networkIndex`: ... ; `networkingStatus`: ...  }\>, `any`\>  }  } = WiFiNetworkInterfaceComponent; `flags`: \{ `wiFiNetworkInterface`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `addOrUpdateThreadNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: ... ; `operationalDataset`: ...  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: ... ; `networkIndex`: ... ; `networkingStatus`: ...  }\>, `any`\>  }  } = ThreadNetworkInterfaceComponent; `flags`: \{ `threadNetworkInterface`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `threadNetworkInterface`: ``true`` = true; `wiFiNetworkInterface`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `ethernetNetworkInterface`: ``true`` = true; `wiFiNetworkInterface`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `ethernetNetworkInterface`: ``true`` = true; `threadNetworkInterface`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `ethernetNetworkInterface`: ``false`` = false; `threadNetworkInterface`: ``false`` = false; `wiFiNetworkInterface`: ``false`` = false }  }] ; `features`: \{ `ethernetNetworkInterface`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `threadNetworkInterface`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wiFiNetworkInterface`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``49`` = 0x31; `name`: ``"NetworkCommissioning"`` = "NetworkCommissioning"; `revision`: ``1`` = 1 }\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`NetworkCommissioningInterface`](../modules/behavior_definitions_network_commissioning_export.md#networkcommissioninginterface)\>\>

##### Returns

[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `interfaceEnabled`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`boolean`, `any`\> ; `lastConnectErrorValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `lastNetworkId`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `Uint8Array`, `any`\> ; `lastNetworkingStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md), `any`\> ; `maxNetworks`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `networks`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `connected`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>[], `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `connectMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `scanMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `connectNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: ... ; `networkId`: ...  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: ... ; `errorValue`: ... ; `networkingStatus`: ...  }\>, `any`\> ; `removeNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: ... ; `networkId`: ...  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: ... ; `networkIndex`: ... ; `networkingStatus`: ...  }\>, `any`\> ; `reorderNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: ... ; `networkId`: ... ; `networkIndex`: ...  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: ... ; `networkIndex`: ... ; `networkingStatus`: ...  }\>, `any`\> ; `scanNetworks`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: ... ; `ssid`: ...  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: ... ; `networkingStatus`: ... ; `threadScanResults`: ... ; `wiFiScanResults`: ...  }\>, `any`\>  }  } = WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent; `flags`: \{ `wiFiNetworkInterface`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `connectMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `scanMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `connectNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: ... ; `networkId`: ...  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: ... ; `errorValue`: ... ; `networkingStatus`: ...  }\>, `any`\> ; `removeNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: ... ; `networkId`: ...  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: ... ; `networkIndex`: ... ; `networkingStatus`: ...  }\>, `any`\> ; `reorderNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: ... ; `networkId`: ... ; `networkIndex`: ...  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: ... ; `networkIndex`: ... ; `networkingStatus`: ...  }\>, `any`\> ; `scanNetworks`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: ... ; `ssid`: ...  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: ... ; `networkingStatus`: ... ; `threadScanResults`: ... ; `wiFiScanResults`: ...  }\>, `any`\>  }  } = WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent; `flags`: \{ `threadNetworkInterface`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `addOrUpdateWiFiNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: ... ; `credentials`: ... ; `ssid`: ...  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: ... ; `networkIndex`: ... ; `networkingStatus`: ...  }\>, `any`\>  }  } = WiFiNetworkInterfaceComponent; `flags`: \{ `wiFiNetworkInterface`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `addOrUpdateThreadNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: ... ; `operationalDataset`: ...  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: ... ; `networkIndex`: ... ; `networkingStatus`: ...  }\>, `any`\>  }  } = ThreadNetworkInterfaceComponent; `flags`: \{ `threadNetworkInterface`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `threadNetworkInterface`: ``true`` = true; `wiFiNetworkInterface`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `ethernetNetworkInterface`: ``true`` = true; `wiFiNetworkInterface`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `ethernetNetworkInterface`: ``true`` = true; `threadNetworkInterface`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `ethernetNetworkInterface`: ``false`` = false; `threadNetworkInterface`: ``false`` = false; `wiFiNetworkInterface`: ``false`` = false }  }] ; `features`: \{ `ethernetNetworkInterface`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `threadNetworkInterface`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wiFiNetworkInterface`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``49`` = 0x31; `name`: ``"NetworkCommissioning"`` = "NetworkCommissioning"; `revision`: ``1`` = 1 }\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`NetworkCommissioningInterface`](../modules/behavior_definitions_network_commissioning_export.md#networkcommissioninginterface)\>\>

#### Inherited from

NetworkCommissioningBehavior.State

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:196](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L196)

___

### cluster

▪ `Static` `Readonly` **cluster**: [`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `interfaceEnabled`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`boolean`, `any`\> ; `lastConnectErrorValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `lastNetworkId`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `Uint8Array`, `any`\> ; `lastNetworkingStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md), `any`\> ; `maxNetworks`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `networks`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `connected`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>[], `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `connectMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `scanMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `connectNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<... \| ...\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `errorValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> ; `removeNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<... \| ...\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> ; `reorderNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<... \| ...\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `networkIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> ; `scanNetworks`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<... \| ...\> ; `ssid`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<... \| ...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\> ; `threadScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...[]\> ; `wiFiScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...[]\>  }\>, `any`\>  }  } = WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent; `flags`: \{ `wiFiNetworkInterface`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `connectMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `scanMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `connectNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<... \| ...\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `errorValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> ; `removeNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<... \| ...\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> ; `reorderNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<... \| ...\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `networkIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> ; `scanNetworks`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<... \| ...\> ; `ssid`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<... \| ...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\> ; `threadScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...[]\> ; `wiFiScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...[]\>  }\>, `any`\>  }  } = WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent; `flags`: \{ `threadNetworkInterface`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `addOrUpdateWiFiNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<... \| ...\> ; `credentials`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `ssid`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\>  }  } = WiFiNetworkInterfaceComponent; `flags`: \{ `wiFiNetworkInterface`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `addOrUpdateThreadNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<... \| ...\> ; `operationalDataset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\>  }  } = ThreadNetworkInterfaceComponent; `flags`: \{ `threadNetworkInterface`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `threadNetworkInterface`: ``true`` = true; `wiFiNetworkInterface`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `ethernetNetworkInterface`: ``true`` = true; `wiFiNetworkInterface`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `ethernetNetworkInterface`: ``true`` = true; `threadNetworkInterface`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `ethernetNetworkInterface`: ``false`` = false; `threadNetworkInterface`: ``false`` = false; `wiFiNetworkInterface`: ``false`` = false }  }] ; `features`: \{ `ethernetNetworkInterface`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `threadNetworkInterface`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wiFiNetworkInterface`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``49`` = 0x31; `name`: ``"NetworkCommissioning"`` = "NetworkCommissioning"; `revision`: ``1`` = 1 }\>

Base cluster state include all attribute values but may be extended by subclasses.

#### Inherited from

NetworkCommissioningBehavior.cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:193](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L193)

___

### defaults

▪ `Static` `Readonly` **defaults**: [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `interfaceEnabled`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`boolean`, `any`\> ; `lastConnectErrorValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `lastNetworkId`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `Uint8Array`, `any`\> ; `lastNetworkingStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md), `any`\> ; `maxNetworks`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `networks`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `connected`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>[], `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `connectMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `scanMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `connectNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `errorValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `any`\> ; `removeNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `any`\> ; `reorderNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `networkIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `any`\> ; `scanNetworks`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `ssid`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `threadScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `wiFiScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\>  }\>, `any`\>  }  } = WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent; `flags`: \{ `wiFiNetworkInterface`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `connectMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `scanMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `connectNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `errorValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `any`\> ; `removeNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `any`\> ; `reorderNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `networkIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `any`\> ; `scanNetworks`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `ssid`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `threadScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `wiFiScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\>  }\>, `any`\>  }  } = WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent; `flags`: \{ `threadNetworkInterface`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `addOrUpdateWiFiNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `credentials`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `ssid`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = WiFiNetworkInterfaceComponent; `flags`: \{ `wiFiNetworkInterface`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `addOrUpdateThreadNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `operationalDataset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = ThreadNetworkInterfaceComponent; `flags`: \{ `threadNetworkInterface`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `threadNetworkInterface`: ``true`` = true; `wiFiNetworkInterface`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `ethernetNetworkInterface`: ``true`` = true; `wiFiNetworkInterface`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `ethernetNetworkInterface`: ``true`` = true; `threadNetworkInterface`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `ethernetNetworkInterface`: ``false`` = false; `threadNetworkInterface`: ``false`` = false; `wiFiNetworkInterface`: ``false`` = false }  }] ; `features`: \{ `ethernetNetworkInterface`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `threadNetworkInterface`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wiFiNetworkInterface`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``49`` = 0x31; `name`: ``"NetworkCommissioning"`` = "NetworkCommissioning"; `revision`: ``1`` = 1 }\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`NetworkCommissioningInterface`](../modules/behavior_definitions_network_commissioning_export.md#networkcommissioninginterface)\>\>

#### Inherited from

NetworkCommissioningBehavior.defaults

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:202](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L202)

___

### dependencies

▪ `Static` `Optional` `Readonly` **dependencies**: `Iterable`\<[`Type`](../interfaces/behavior_export.Behavior.Type.md)\>

#### Inherited from

NetworkCommissioningBehavior.dependencies

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:204](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L204)

___

### early

▪ `Static` `Readonly` **early**: `boolean`

#### Inherited from

NetworkCommissioningBehavior.early

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

___

### id

▪ `Static` `Readonly` **id**: ``"networkCommissioning"``

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

NetworkCommissioningBehavior.id

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:188](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L188)

___

### name

▪ `Static` `Readonly` **name**: `string`

#### Inherited from

NetworkCommissioningBehavior.name

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:183](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L183)

___

### schema

▪ `Static` `Optional` `Readonly` **schema**: [`Schema`](../modules/behavior_cluster_export._internal_.md#schema)

#### Inherited from

NetworkCommissioningBehavior.schema

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:200](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L200)

___

### supervisor

▪ `Static` `Readonly` **supervisor**: [`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

#### Inherited from

NetworkCommissioningBehavior.supervisor

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

NetworkCommissioningBehavior.supports

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

[NetworkCommissioningBehavior](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningBehavior-1.md).[[asyncDispose]](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningBehavior-1.md#[asyncdispose])

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

[NetworkCommissioningBehavior](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningBehavior-1.md).[asAdmin](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningBehavior-1.md#asadmin)

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

[NetworkCommissioningBehavior](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningBehavior-1.md).[callback](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningBehavior-1.md#callback)

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

[NetworkCommissioningBehavior](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningBehavior-1.md).[initialize](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningBehavior-1.md#initialize)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:192](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L192)

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

[NetworkCommissioningBehavior](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningBehavior-1.md).[reactTo](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningBehavior-1.md#reactto)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L212)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

[NetworkCommissioningBehavior](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningBehavior-1.md).[toString](../interfaces/behavior_definitions_network_commissioning_export.NetworkCommissioningBehavior-1.md#tostring)

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

NetworkCommissioningBehavior.alter

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

NetworkCommissioningBehavior.enable

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

NetworkCommissioningBehavior.for

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

NetworkCommissioningBehavior.set

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

NetworkCommissioningBehavior.with

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)
