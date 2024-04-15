[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/thread-network-diagnostics/export](../modules/behavior_definitions_thread_network_diagnostics_export.md) / ThreadNetworkDiagnosticsBehavior

# Interface: ThreadNetworkDiagnosticsBehavior

[behavior/definitions/thread-network-diagnostics/export](../modules/behavior_definitions_thread_network_diagnostics_export.md).ThreadNetworkDiagnosticsBehavior

## Hierarchy

- [`ThreadNetworkDiagnosticsBehaviorType`](../modules/behavior_definitions_thread_network_diagnostics_export._internal_.md#threadnetworkdiagnosticsbehaviortype)

  ↳ **`ThreadNetworkDiagnosticsBehavior`**

  ↳↳ [`ThreadNetworkDiagnosticsServer`](../classes/behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsServer.md)

## Table of contents

### Properties

- [#agent](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior-1.md##agent)
- [[reference]](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior-1.md#[reference])
- [agent](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior-1.md#agent)
- [cluster](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior-1.md#cluster)
- [context](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior-1.md#context)
- [endpoint](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior-1.md#endpoint)
- [events](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior-1.md#events)
- [features](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior-1.md#features)
- [session](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior-1.md#session)
- [state](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior-1.md#state)

### Methods

- [[asyncDispose]](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior-1.md#[asyncdispose])
- [asAdmin](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior-1.md#asadmin)
- [callback](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior-1.md#callback)
- [initialize](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior-1.md#initialize)
- [reactTo](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior-1.md#reactto)
- [toString](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior-1.md#tostring)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](../classes/endpoint_export.Agent-1.md)

#### Inherited from

ThreadNetworkDiagnosticsBehaviorType.#agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L51)

___

### [reference]

• **[reference]**: [`Datasource`](behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

ThreadNetworkDiagnosticsBehaviorType.[reference]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

___

### agent

• **agent**: [`Agent`](../classes/endpoint_export.Agent-1.md)

#### Inherited from

ThreadNetworkDiagnosticsBehaviorType.agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

___

### cluster

• **cluster**: `never`

The implemented cluster.

#### Inherited from

ThreadNetworkDiagnosticsBehaviorType.cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:280](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L280)

___

### context

• **context**: [`ActionContext`](behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

ThreadNetworkDiagnosticsBehaviorType.context

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

___

### endpoint

• **endpoint**: [`Endpoint`](../classes/endpoint_export.Endpoint-1.md)\<[`Empty`](behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

ThreadNetworkDiagnosticsBehaviorType.endpoint

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

___

### events

• `Readonly` **events**: [`EventEmitter`](../classes/util_export.EventEmitter-1.md) & `Omit`\<[`ClusterEvents`](../modules/behavior_cluster_export.md#clusterevents)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & \{ `activeNetworkFaults$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](cluster_export.Attribute.md)\<[`NetworkFault`](../enums/cluster_export.ThreadNetworkDiagnostics.NetworkFault.md)[], `any`\>\> ; `channel$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>\> ; `channelPage0Mask$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](cluster_export.Attribute.md)\<``null`` \| `Uint8Array`, `any`\>\> ; `dataVersion$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>\> ; `extendedPanId$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>\> ; `leaderRouterId$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>\> ; `meshLocalPrefix$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](cluster_export.Attribute.md)\<``null`` \| `Uint8Array`, `any`\>\> ; `neighborTable$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `age`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `averageRssi`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `extAddress`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `frameErrorRate`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `fullNetworkData`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `fullThreadDevice`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `isChild`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `lastRssi`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `linkFrameCounter`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `lqi`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `messageErrorRate`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `mleFrameCounter`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `rloc16`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `rxOnWhenIdle`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\>  }\>[], `any`\>\> ; `networkName$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](cluster_export.Attribute.md)\<``null`` \| `string`, `any`\>\> ; `operationalDatasetComponents$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `activeTimestampPresent`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `channelMaskPresent`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `channelPresent`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `delayPresent`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `extendedPanIdPresent`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `masterKeyPresent`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `meshLocalPrefixPresent`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `networkNamePresent`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `panIdPresent`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `pendingTimestampPresent`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `pskcPresent`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `securityPolicyPresent`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\>  }\>, `any`\>\> ; `panId$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>\> ; `partitionId$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>\> ; `routeTable$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `age`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `allocated`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `extAddress`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `linkEstablished`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `lqiIn`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `lqiOut`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `nextHop`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `pathCost`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `rloc16`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `routerId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>[], `any`\>\> ; `routingRole$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`RoutingRole`](../enums/cluster_export.ThreadNetworkDiagnostics.RoutingRole.md), `any`\>\> ; `securityPolicy$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `flags`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `rotationTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>\> ; `stableDataVersion$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>\> ; `weighting$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>\>  } & \{ `activeTimestamp$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| `number` \| `bigint`, `any`\>\> ; `delay$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\>\> ; `pendingTimestamp$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| `number` \| `bigint`, `any`\>\>  } & {} & \{ `connectionStatus?`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `connectionStatus`: [`FieldType`](tlv_export.FieldType.md)\<[`ConnectionStatus`](../enums/cluster_export.ThreadNetworkDiagnostics.ConnectionStatus.md)\>  }\>, `any`\>\> ; `networkFaultChange?`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkFault`](../enums/cluster_export.ThreadNetworkDiagnostics.NetworkFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkFault`](../enums/cluster_export.ThreadNetworkDiagnostics.NetworkFault.md)[]\>  }\>, `any`\>\>  }

Access the behavior's events.

#### Inherited from

ThreadNetworkDiagnosticsBehaviorType.events

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L145)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:290](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L290)

___

### features

• **features**: `Object`

Supported features as a flag object.

#### Inherited from

ThreadNetworkDiagnosticsBehaviorType.features

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

ThreadNetworkDiagnosticsBehaviorType.session

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

___

### state

• `Readonly` **state**: `Omit`\<[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & \{ `activeNetworkFaults`: [`NetworkFault`](../enums/cluster_export.ThreadNetworkDiagnostics.NetworkFault.md)[] ; `channel`: ``null`` \| `number` ; `channelPage0Mask`: ``null`` \| `Uint8Array` ; `dataVersion`: ``null`` \| `number` ; `extendedPanId`: ``null`` \| `number` \| `bigint` ; `leaderRouterId`: ``null`` \| `number` ; `meshLocalPrefix`: ``null`` \| `Uint8Array` ; `neighborTable`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `age`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `averageRssi`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `extAddress`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `frameErrorRate`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `fullNetworkData`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `fullThreadDevice`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `isChild`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `lastRssi`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `linkFrameCounter`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `lqi`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `messageErrorRate`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `mleFrameCounter`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `rloc16`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `rxOnWhenIdle`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\>  }\>[] ; `networkName`: ``null`` \| `string` ; `operationalDatasetComponents`: ``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `activeTimestampPresent`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `channelMaskPresent`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `channelPresent`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `delayPresent`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `extendedPanIdPresent`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `masterKeyPresent`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `meshLocalPrefixPresent`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `networkNamePresent`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `panIdPresent`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `pendingTimestampPresent`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `pskcPresent`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `securityPolicyPresent`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\>  }\> ; `panId`: ``null`` \| `number` ; `partitionId`: ``null`` \| `number` ; `routeTable`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `age`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `allocated`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `extAddress`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `linkEstablished`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `lqiIn`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `lqiOut`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `nextHop`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `pathCost`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `rloc16`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `routerId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>[] ; `routingRole`: ``null`` \| [`RoutingRole`](../enums/cluster_export.ThreadNetworkDiagnostics.RoutingRole.md) ; `securityPolicy`: ``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `flags`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `rotationTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> ; `stableDataVersion`: ``null`` \| `number` ; `weighting`: ``null`` \| `number`  } & \{ `activeTimestamp?`: ``null`` \| `number` \| `bigint` ; `delay?`: ``null`` \| `number` ; `pendingTimestamp?`: ``null`` \| `number` \| `bigint`  } & {} & {}

Access the behavior's state.

#### Inherited from

ThreadNetworkDiagnosticsBehaviorType.state

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

ThreadNetworkDiagnosticsBehaviorType.[asyncDispose]

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

ThreadNetworkDiagnosticsBehaviorType.asAdmin

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

ThreadNetworkDiagnosticsBehaviorType.callback

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

ThreadNetworkDiagnosticsBehaviorType.initialize

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

ThreadNetworkDiagnosticsBehaviorType.reactTo

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L212)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

ThreadNetworkDiagnosticsBehaviorType.toString

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L203)
