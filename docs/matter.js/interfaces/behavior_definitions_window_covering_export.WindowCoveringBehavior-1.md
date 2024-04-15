[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/window-covering/export](../modules/behavior_definitions_window_covering_export.md) / WindowCoveringBehavior

# Interface: WindowCoveringBehavior

[behavior/definitions/window-covering/export](../modules/behavior_definitions_window_covering_export.md).WindowCoveringBehavior

## Hierarchy

- [`WindowCoveringBehaviorType`](../modules/behavior_definitions_window_covering_export._internal_.md#windowcoveringbehaviortype)

  ↳ **`WindowCoveringBehavior`**

  ↳↳ [`WindowCoveringServer`](../classes/behavior_definitions_window_covering_export.WindowCoveringServer.md)

## Table of contents

### Properties

- [#agent](behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md##agent)
- [[reference]](behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md#[reference])
- [agent](behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md#agent)
- [cluster](behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md#cluster)
- [context](behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md#context)
- [endpoint](behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md#endpoint)
- [events](behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md#events)
- [features](behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md#features)
- [session](behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md#session)
- [state](behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md#state)

### Methods

- [[asyncDispose]](behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md#[asyncdispose])
- [asAdmin](behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md#asadmin)
- [callback](behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md#callback)
- [downOrClose](behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md#downorclose)
- [initialize](behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md#initialize)
- [reactTo](behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md#reactto)
- [stopMotion](behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md#stopmotion)
- [toString](behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md#tostring)
- [upOrOpen](behavior_definitions_window_covering_export.WindowCoveringBehavior-1.md#uporopen)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](../classes/endpoint_export.Agent-1.md)

#### Inherited from

WindowCoveringBehaviorType.#agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L51)

___

### [reference]

• **[reference]**: [`Datasource`](behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

WindowCoveringBehaviorType.[reference]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

___

### agent

• **agent**: [`Agent`](../classes/endpoint_export.Agent-1.md)

#### Inherited from

WindowCoveringBehaviorType.agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

___

### cluster

• **cluster**: `never`

The implemented cluster.

#### Inherited from

WindowCoveringBehaviorType.cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:280](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L280)

___

### context

• **context**: [`ActionContext`](behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

WindowCoveringBehaviorType.context

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

___

### endpoint

• **endpoint**: [`Endpoint`](../classes/endpoint_export.Endpoint-1.md)\<[`Empty`](behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

WindowCoveringBehaviorType.endpoint

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

___

### events

• `Readonly` **events**: [`EventEmitter`](../classes/util_export.EventEmitter-1.md) & `Omit`\<[`ClusterEvents`](../modules/behavior_cluster_export.md#clusterevents)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & \{ `configStatus$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `operational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\> ; `endProductType$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\>\> ; `mode$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\> ; `operationalStatus$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>, `any`\>\> ; `type$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>\>  } & \{ `safetyStatus$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `power`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `protection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\>  } & {} & {}

Access the behavior's events.

#### Inherited from

WindowCoveringBehaviorType.events

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L145)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:290](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L290)

___

### features

• **features**: `Object`

Supported features as a flag object.

#### Inherited from

WindowCoveringBehaviorType.features

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

WindowCoveringBehaviorType.session

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

___

### state

• `Readonly` **state**: `Omit`\<[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & \{ `configStatus`: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `operational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> ; `mode`: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> ; `operationalStatus`: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>  } & \{ `safetyStatus?`: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `power`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `protection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>  } & \{ `endProductType`: [`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md) ; `type`: [`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md)  } & {}

Access the behavior's state.

#### Inherited from

WindowCoveringBehaviorType.state

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

WindowCoveringBehaviorType.[asyncDispose]

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

WindowCoveringBehaviorType.asAdmin

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

WindowCoveringBehaviorType.callback

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

WindowCoveringBehaviorType.downOrClose

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

WindowCoveringBehaviorType.initialize

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

WindowCoveringBehaviorType.reactTo

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

WindowCoveringBehaviorType.stopMotion

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts:154](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts#L154)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

WindowCoveringBehaviorType.toString

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

WindowCoveringBehaviorType.upOrOpen

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts:108](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts#L108)
