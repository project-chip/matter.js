[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/window-covering/export](../modules/behavior_definitions_window_covering_export.md) / WindowCoveringServer

# Class: WindowCoveringServer

[behavior/definitions/window-covering/export](../modules/behavior_definitions_window_covering_export.md).WindowCoveringServer

This is the default server implementation of [WindowCoveringBehavior](../modules/behavior_definitions_window_covering_export.md#windowcoveringbehavior).

The Matter specification requires the WindowCovering cluster to support features we do not enable by default. You
should use [WindowCoveringServer.with](behavior_definitions_window_covering_export.WindowCoveringServer.md#with) to specialize the class for the features your implementation supports.

## Hierarchy

- [`WindowCoveringBehavior`](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md)

  ↳ **`WindowCoveringServer`**

## Table of contents

### Constructors

- [constructor](behavior_definitions_window_covering_export.WindowCoveringServer.md#constructor)

### Properties

- [#agent](behavior_definitions_window_covering_export.WindowCoveringServer.md##agent)
- [[reference]](behavior_definitions_window_covering_export.WindowCoveringServer.md#[reference])
- [agent](behavior_definitions_window_covering_export.WindowCoveringServer.md#agent)
- [cluster](behavior_definitions_window_covering_export.WindowCoveringServer.md#cluster)
- [context](behavior_definitions_window_covering_export.WindowCoveringServer.md#context)
- [endpoint](behavior_definitions_window_covering_export.WindowCoveringServer.md#endpoint)
- [events](behavior_definitions_window_covering_export.WindowCoveringServer.md#events)
- [features](behavior_definitions_window_covering_export.WindowCoveringServer.md#features)
- [session](behavior_definitions_window_covering_export.WindowCoveringServer.md#session)
- [state](behavior_definitions_window_covering_export.WindowCoveringServer.md#state)
- [Events](behavior_definitions_window_covering_export.WindowCoveringServer.md#events-1)
- [Interface](behavior_definitions_window_covering_export.WindowCoveringServer.md#interface)
- [Internal](behavior_definitions_window_covering_export.WindowCoveringServer.md#internal)
- [State](behavior_definitions_window_covering_export.WindowCoveringServer.md#state-1)
- [cluster](behavior_definitions_window_covering_export.WindowCoveringServer.md#cluster-1)
- [defaults](behavior_definitions_window_covering_export.WindowCoveringServer.md#defaults)
- [dependencies](behavior_definitions_window_covering_export.WindowCoveringServer.md#dependencies)
- [early](behavior_definitions_window_covering_export.WindowCoveringServer.md#early)
- [id](behavior_definitions_window_covering_export.WindowCoveringServer.md#id)
- [name](behavior_definitions_window_covering_export.WindowCoveringServer.md#name)
- [schema](behavior_definitions_window_covering_export.WindowCoveringServer.md#schema)
- [supervisor](behavior_definitions_window_covering_export.WindowCoveringServer.md#supervisor)
- [supports](behavior_definitions_window_covering_export.WindowCoveringServer.md#supports)

### Methods

- [[asyncDispose]](behavior_definitions_window_covering_export.WindowCoveringServer.md#[asyncdispose])
- [asAdmin](behavior_definitions_window_covering_export.WindowCoveringServer.md#asadmin)
- [callback](behavior_definitions_window_covering_export.WindowCoveringServer.md#callback)
- [downOrClose](behavior_definitions_window_covering_export.WindowCoveringServer.md#downorclose)
- [initialize](behavior_definitions_window_covering_export.WindowCoveringServer.md#initialize)
- [reactTo](behavior_definitions_window_covering_export.WindowCoveringServer.md#reactto)
- [stopMotion](behavior_definitions_window_covering_export.WindowCoveringServer.md#stopmotion)
- [toString](behavior_definitions_window_covering_export.WindowCoveringServer.md#tostring)
- [upOrOpen](behavior_definitions_window_covering_export.WindowCoveringServer.md#uporopen)
- [alter](behavior_definitions_window_covering_export.WindowCoveringServer.md#alter)
- [enable](behavior_definitions_window_covering_export.WindowCoveringServer.md#enable)
- [for](behavior_definitions_window_covering_export.WindowCoveringServer.md#for)
- [set](behavior_definitions_window_covering_export.WindowCoveringServer.md#set)
- [with](behavior_definitions_window_covering_export.WindowCoveringServer.md#with)

## Constructors

### constructor

• **new WindowCoveringServer**(`agent`, `backing`): [`WindowCoveringServer`](behavior_definitions_window_covering_export.WindowCoveringServer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |
| `backing` | [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md) |

#### Returns

[`WindowCoveringServer`](behavior_definitions_window_covering_export.WindowCoveringServer.md)

#### Inherited from

WindowCoveringBehavior.constructor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:181](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L181)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

[WindowCoveringBehavior](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md).[#agent](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md##agent)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L51)

___

### [reference]

• **[reference]**: [`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

[WindowCoveringBehavior](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md).[[reference]](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md#[reference])

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

___

### agent

• **agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

[WindowCoveringBehavior](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md).[agent](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md#agent)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

___

### cluster

• **cluster**: `never`

The implemented cluster.

#### Inherited from

[WindowCoveringBehavior](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md).[cluster](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md#cluster)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:280](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L280)

___

### context

• **context**: [`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

[WindowCoveringBehavior](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md).[context](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md#context)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

___

### endpoint

• **endpoint**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

[WindowCoveringBehavior](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md).[endpoint](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md#endpoint)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

___

### events

• `Readonly` **events**: [`EventEmitter`](util_export.EventEmitter-1.md) & `Omit`\<[`ClusterEvents`](../modules/behavior_cluster_export.md#clusterevents)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & \{ `configStatus$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `operational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\> ; `endProductType$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\>\> ; `mode$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\> ; `operationalStatus$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>, `any`\>\> ; `type$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>\>  } & \{ `safetyStatus$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `power`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `protection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\>  } & {} & {}

Access the behavior's events.

#### Inherited from

[WindowCoveringBehavior](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md).[events](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md#events)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L145)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:290](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L290)

___

### features

• **features**: `Object`

Supported features as a flag object.

#### Inherited from

[WindowCoveringBehavior](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md).[features](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md#features)

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

[WindowCoveringBehavior](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md).[session](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md#session)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

___

### state

• `Readonly` **state**: `Omit`\<[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & \{ `configStatus`: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `operational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> ; `mode`: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> ; `operationalStatus`: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>  } & \{ `safetyStatus?`: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `power`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `protection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>  } & \{ `endProductType`: [`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md) ; `type`: [`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md)  } & {}

Access the behavior's state.

#### Inherited from

[WindowCoveringBehavior](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md).[state](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md#state)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:140](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L140)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:285](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L285)

___

### Events

▪ `Static` `Readonly` **Events**: [`Type`](../modules/behavior_cluster_export.ClusterEvents.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `configStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `operational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `endProductType`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\> ; `mode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `operationalStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>, `any`\> ; `safetyStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `power`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `protection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `type`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>  } ; `commands`: \{ `downOrClose`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentPositionLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = LiftAndPositionAwareLiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = TiltAndPositionAwareTiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = LiftComponent; `flags`: \{ `lift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = TiltComponent; `flags`: \{ `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionLiftPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = LiftAndPositionAwareLiftComponent; `flags`: \{ `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionTiltPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = TiltAndPositionAwareTiltComponent; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToLiftValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = LiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToTiltValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = TiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `positionAwareLift`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `tilt`: ``false`` = false }  }] ; `features`: \{ `absolutePosition`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareLift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareTilt`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tilt`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``258`` = 0x102; `name`: ``"WindowCovering"`` = "WindowCovering"; `revision`: ``5`` = 5 }\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`WindowCoveringInterface`](../modules/behavior_definitions_window_covering_export.md#windowcoveringinterface)\>\>

#### Inherited from

WindowCoveringBehavior.Events

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:195](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L195)

___

### Interface

▪ `Static` `Readonly` **Interface**: [`WindowCoveringInterface`](../modules/behavior_definitions_window_covering_export.md#windowcoveringinterface)

#### Inherited from

WindowCoveringBehavior.Interface

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

WindowCoveringBehavior.Internal

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:197](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L197)

___

### State

▪ `Static` `Readonly` **State**: () => [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `configStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `operational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `endProductType`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\> ; `mode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `operationalStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>, `any`\> ; `safetyStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `power`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `protection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `type`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>  } ; `commands`: \{ `downOrClose`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentPositionLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = LiftAndPositionAwareLiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = TiltAndPositionAwareTiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = LiftComponent; `flags`: \{ `lift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = TiltComponent; `flags`: \{ `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionLiftPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = LiftAndPositionAwareLiftComponent; `flags`: \{ `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionTiltPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = TiltAndPositionAwareTiltComponent; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToLiftValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftValue`: ...  }\>, `void`, `any`\>  }  } = LiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToTiltValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltValue`: ...  }\>, `void`, `any`\>  }  } = TiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `positionAwareLift`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `tilt`: ``false`` = false }  }] ; `features`: \{ `absolutePosition`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareLift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareTilt`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tilt`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``258`` = 0x102; `name`: ``"WindowCovering"`` = "WindowCovering"; `revision`: ``5`` = 5 }\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`WindowCoveringInterface`](../modules/behavior_definitions_window_covering_export.md#windowcoveringinterface)\>\>

#### Type declaration

• **new State**(): [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `configStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `operational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `endProductType`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\> ; `mode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `operationalStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>, `any`\> ; `safetyStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `power`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `protection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `type`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>  } ; `commands`: \{ `downOrClose`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentPositionLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = LiftAndPositionAwareLiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = TiltAndPositionAwareTiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = LiftComponent; `flags`: \{ `lift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = TiltComponent; `flags`: \{ `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionLiftPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = LiftAndPositionAwareLiftComponent; `flags`: \{ `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionTiltPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = TiltAndPositionAwareTiltComponent; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToLiftValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftValue`: ...  }\>, `void`, `any`\>  }  } = LiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToTiltValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltValue`: ...  }\>, `void`, `any`\>  }  } = TiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `positionAwareLift`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `tilt`: ``false`` = false }  }] ; `features`: \{ `absolutePosition`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareLift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareTilt`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tilt`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``258`` = 0x102; `name`: ``"WindowCovering"`` = "WindowCovering"; `revision`: ``5`` = 5 }\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`WindowCoveringInterface`](../modules/behavior_definitions_window_covering_export.md#windowcoveringinterface)\>\>

##### Returns

[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `configStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `operational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `endProductType`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\> ; `mode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `operationalStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>, `any`\> ; `safetyStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `power`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `protection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `type`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>  } ; `commands`: \{ `downOrClose`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentPositionLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = LiftAndPositionAwareLiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = TiltAndPositionAwareTiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = LiftComponent; `flags`: \{ `lift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = TiltComponent; `flags`: \{ `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionLiftPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = LiftAndPositionAwareLiftComponent; `flags`: \{ `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionTiltPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = TiltAndPositionAwareTiltComponent; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToLiftValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftValue`: ...  }\>, `void`, `any`\>  }  } = LiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToTiltValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltValue`: ...  }\>, `void`, `any`\>  }  } = TiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `positionAwareLift`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `tilt`: ``false`` = false }  }] ; `features`: \{ `absolutePosition`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareLift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareTilt`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tilt`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``258`` = 0x102; `name`: ``"WindowCovering"`` = "WindowCovering"; `revision`: ``5`` = 5 }\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`WindowCoveringInterface`](../modules/behavior_definitions_window_covering_export.md#windowcoveringinterface)\>\>

#### Inherited from

WindowCoveringBehavior.State

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:196](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L196)

___

### cluster

▪ `Static` `Readonly` **cluster**: [`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `configStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `operational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `endProductType`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\> ; `mode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `operationalStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>, `any`\> ; `safetyStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `power`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `protection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `type`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>  } ; `commands`: \{ `downOrClose`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentPositionLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = LiftAndPositionAwareLiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = TiltAndPositionAwareTiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  } = LiftComponent; `flags`: \{ `lift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  } = TiltComponent; `flags`: \{ `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionLiftPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  } = LiftAndPositionAwareLiftComponent; `flags`: \{ `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionTiltPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  } = TiltAndPositionAwareTiltComponent; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToLiftValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  } = LiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToTiltValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  } = TiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `positionAwareLift`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `tilt`: ``false`` = false }  }] ; `features`: \{ `absolutePosition`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareLift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareTilt`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tilt`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``258`` = 0x102; `name`: ``"WindowCovering"`` = "WindowCovering"; `revision`: ``5`` = 5 }\>

Base cluster state include all attribute values but may be extended by subclasses.

#### Inherited from

WindowCoveringBehavior.cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:193](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L193)

___

### defaults

▪ `Static` `Readonly` **defaults**: [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `configStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `operational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `endProductType`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\> ; `mode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `operationalStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>, `any`\> ; `safetyStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `power`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `protection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `type`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>  } ; `commands`: \{ `downOrClose`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentPositionLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = LiftAndPositionAwareLiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = TiltAndPositionAwareTiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = LiftComponent; `flags`: \{ `lift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = TiltComponent; `flags`: \{ `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionLiftPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = LiftAndPositionAwareLiftComponent; `flags`: \{ `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionTiltPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = TiltAndPositionAwareTiltComponent; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToLiftValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = LiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToTiltValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = TiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `positionAwareLift`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `tilt`: ``false`` = false }  }] ; `features`: \{ `absolutePosition`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareLift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareTilt`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tilt`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``258`` = 0x102; `name`: ``"WindowCovering"`` = "WindowCovering"; `revision`: ``5`` = 5 }\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`WindowCoveringInterface`](../modules/behavior_definitions_window_covering_export.md#windowcoveringinterface)\>\>

#### Inherited from

WindowCoveringBehavior.defaults

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:202](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L202)

___

### dependencies

▪ `Static` `Optional` `Readonly` **dependencies**: `Iterable`\<[`Type`](../interfaces/behavior_export.Behavior.Type.md)\>

#### Inherited from

WindowCoveringBehavior.dependencies

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:204](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L204)

___

### early

▪ `Static` `Readonly` **early**: `boolean`

#### Inherited from

WindowCoveringBehavior.early

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

___

### id

▪ `Static` `Readonly` **id**: ``"windowCovering"``

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

WindowCoveringBehavior.id

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:188](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L188)

___

### name

▪ `Static` `Readonly` **name**: `string`

#### Inherited from

WindowCoveringBehavior.name

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:183](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L183)

___

### schema

▪ `Static` `Optional` `Readonly` **schema**: [`Schema`](../modules/behavior_cluster_export._internal_.md#schema)

#### Inherited from

WindowCoveringBehavior.schema

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:200](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L200)

___

### supervisor

▪ `Static` `Readonly` **supervisor**: [`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

#### Inherited from

WindowCoveringBehavior.supervisor

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

WindowCoveringBehavior.supports

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

[WindowCoveringBehavior](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md).[[asyncDispose]](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md#[asyncdispose])

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

[WindowCoveringBehavior](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md).[asAdmin](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md#asadmin)

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

[WindowCoveringBehavior](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md).[callback](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md#callback)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L226)

___

### downOrClose

▸ **downOrClose**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Upon receipt of this command, the Window Covering will adjust its position so the physical lift/slide and
tilt is at the maximum closed/down position. This will happen as fast as possible. The server attributes
supported shall be updated as follows:

if Position Aware feature is supported:

  • TargetPositionLiftPercent100ths attribute shall be set to 100.00%.

  • TargetPositionTiltPercent100ths attribute shall be set to 100.00%.

The server positioning attributes will follow the movements, once the movement has successfully finished,
the server attributes shall be updated as follows:

if Position Aware feature is supported:

  • CurrentPositionLiftPercent100ths attribute shall be 100.00%.

  • CurrentPositionLiftPercentage attribute shall be 100%.

  • CurrentPositionTiltPercent100ths attribute shall be 100.00%.

  • CurrentPositionTiltPercentage attribute shall be 100%. if Absolute Position feature is supported:

  • CurrentPositionLift attribute shall be equal to the InstalledClosedLimitLift attribute.

  • CurrentPositionTilt attribute shall be equal to the InstalledClosedLimitTilt attribute.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 5.3.6.2

#### Inherited from

[WindowCoveringBehavior](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md).[downOrClose](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md#downorclose)

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts:140](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts#L140)

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

[WindowCoveringBehavior](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md).[initialize](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md#initialize)

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

[WindowCoveringBehavior](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md).[reactTo](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md#reactto)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L212)

___

### stopMotion

▸ **stopMotion**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Upon receipt of this command, the Window Covering will stop any adjusting to the physical tilt and
lift/slide that is currently occurring. The server attributes supported shall be updated as follows:

  • TargetPositionLiftPercent100ths attribute will be set to CurrentPositionLiftPercent100ths attribute
    value.

  • TargetPositionTiltPercent100ths attribute will be set to CurrentPositionTiltPercent100ths attribute
    value.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 5.3.6.3

#### Inherited from

[WindowCoveringBehavior](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md).[stopMotion](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md#stopmotion)

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts:154](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts#L154)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

[WindowCoveringBehavior](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md).[toString](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md#tostring)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L203)

___

### upOrOpen

▸ **upOrOpen**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Upon receipt of this command, the Window Covering will adjust its position so the physical lift/slide and
tilt is at the maximum open/up position. This will happen as fast as possible. The server attributes shall
be updated as follows:

if Position Aware feature is supported:

  • TargetPositionLiftPercent100ths attribute shall be set to 0.00%.

  • TargetPositionTiltPercent100ths attribute shall be set to 0.00%.

The server positioning attributes will follow the movements, once the movement has successfully finished,
the server attributes shall be updated as follows:

if Position Aware feature is supported:

  • CurrentPositionLiftPercent100ths attribute shall be 0.00%.

  • CurrentPositionLiftPercentage attribute shall be 0%.

  • CurrentPositionTiltPercent100ths attribute shall be 0.00%.

  • CurrentPositionTiltPercentage attribute shall be 0%. if Absolute Position feature is supported:

  • CurrentPositionLift attribute shall be equal to the InstalledOpenLimitLift attribute.

  • CurrentPositionTilt attribute shall be equal to the InstalledOpenLimitTilt attribute.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 5.3.6.1

#### Inherited from

[WindowCoveringBehavior](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md).[upOrOpen](../interfaces/behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md#uporopen)

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts:108](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts#L108)

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

WindowCoveringBehavior.alter

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

WindowCoveringBehavior.enable

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

WindowCoveringBehavior.for

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

WindowCoveringBehavior.set

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

WindowCoveringBehavior.with

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)
