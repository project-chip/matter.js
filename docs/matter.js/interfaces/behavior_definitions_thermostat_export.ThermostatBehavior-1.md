[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/thermostat/export](../modules/behavior_definitions_thermostat_export.md) / ThermostatBehavior

# Interface: ThermostatBehavior

[behavior/definitions/thermostat/export](../modules/behavior_definitions_thermostat_export.md).ThermostatBehavior

## Hierarchy

- [`ThermostatBehaviorType`](../modules/behavior_definitions_thermostat_export._internal_.md#thermostatbehaviortype)

  ↳ **`ThermostatBehavior`**

  ↳↳ [`ThermostatServer`](../classes/behavior_definitions_thermostat_export.ThermostatServer.md)

## Table of contents

### Properties

- [#agent](behavior_definitions_thermostat_export.ThermostatBehavior-1.md##agent)
- [[reference]](behavior_definitions_thermostat_export.ThermostatBehavior-1.md#[reference])
- [agent](behavior_definitions_thermostat_export.ThermostatBehavior-1.md#agent)
- [cluster](behavior_definitions_thermostat_export.ThermostatBehavior-1.md#cluster)
- [context](behavior_definitions_thermostat_export.ThermostatBehavior-1.md#context)
- [endpoint](behavior_definitions_thermostat_export.ThermostatBehavior-1.md#endpoint)
- [events](behavior_definitions_thermostat_export.ThermostatBehavior-1.md#events)
- [features](behavior_definitions_thermostat_export.ThermostatBehavior-1.md#features)
- [session](behavior_definitions_thermostat_export.ThermostatBehavior-1.md#session)
- [state](behavior_definitions_thermostat_export.ThermostatBehavior-1.md#state)

### Methods

- [[asyncDispose]](behavior_definitions_thermostat_export.ThermostatBehavior-1.md#[asyncdispose])
- [asAdmin](behavior_definitions_thermostat_export.ThermostatBehavior-1.md#asadmin)
- [callback](behavior_definitions_thermostat_export.ThermostatBehavior-1.md#callback)
- [getRelayStatusLog](behavior_definitions_thermostat_export.ThermostatBehavior-1.md#getrelaystatuslog)
- [initialize](behavior_definitions_thermostat_export.ThermostatBehavior-1.md#initialize)
- [reactTo](behavior_definitions_thermostat_export.ThermostatBehavior-1.md#reactto)
- [setpointRaiseLower](behavior_definitions_thermostat_export.ThermostatBehavior-1.md#setpointraiselower)
- [toString](behavior_definitions_thermostat_export.ThermostatBehavior-1.md#tostring)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](../classes/endpoint_export.Agent-1.md)

#### Inherited from

ThermostatBehaviorType.#agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L51)

___

### [reference]

• **[reference]**: [`Datasource`](behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

ThermostatBehaviorType.[reference]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

___

### agent

• **agent**: [`Agent`](../classes/endpoint_export.Agent-1.md)

#### Inherited from

ThermostatBehaviorType.agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

___

### cluster

• **cluster**: `never`

The implemented cluster.

#### Inherited from

ThermostatBehaviorType.cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:280](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L280)

___

### context

• **context**: [`ActionContext`](behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

ThermostatBehaviorType.context

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

___

### endpoint

• **endpoint**: [`Endpoint`](../classes/endpoint_export.Endpoint-1.md)\<[`Empty`](behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

ThermostatBehaviorType.endpoint

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

___

### events

• `Readonly` **events**: [`EventEmitter`](../classes/util_export.EventEmitter-1.md) & `Omit`\<[`ClusterEvents`](../modules/behavior_cluster_export.md#clusterevents)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & \{ `controlSequenceOfOperation$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`ControlSequenceOfOperation`](../enums/cluster_export.Thermostat.ControlSequenceOfOperation.md), `any`\>\> ; `localTemperature$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>\> ; `systemMode$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`SystemMode`](../enums/cluster_export.Thermostat.SystemMode.md), `any`\>\>  } & \{ `acCapacity$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `acCapacityFormat$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<[`BtUh`](../enums/cluster_export.Thermostat.AcCapacityFormat.md#btuh), `any`\>\> ; `acCoilTemperature$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\>\> ; `acCompressorType$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<[`AcCompressorType`](../enums/cluster_export.Thermostat.AcCompressorType.md), `any`\>\> ; `acErrorCode$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coilSensorFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `compressorFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fanFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `outdoorSensorFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `roomSensorFail`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\> ; `acLouverPosition$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<[`AcLouverPosition`](../enums/cluster_export.Thermostat.AcLouverPosition.md), `any`\>\> ; `acRefrigerantType$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<[`AcRefrigerantType`](../enums/cluster_export.Thermostat.AcRefrigerantType.md), `any`\>\> ; `acType$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<[`AcType`](../enums/cluster_export.Thermostat.AcType.md), `any`\>\> ; `alarmMask$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `initializationFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `selfCalibrationFailure`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\> ; `emergencyHeatDelta$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `outdoorTemperature$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\>\> ; `remoteSensing$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `localTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `outdoorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\> ; `setpointChangeAmount$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\>\> ; `setpointChangeSource$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`SetpointChangeSource`](../enums/cluster_export.Thermostat.SetpointChangeSource.md), `any`\>\> ; `setpointChangeSourceTimestamp$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\>\> ; `temperatureSetpointHold$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<[`TemperatureSetpointHold`](../enums/cluster_export.Thermostat.TemperatureSetpointHold.md), `any`\>\> ; `temperatureSetpointHoldDuration$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `thermostatProgrammingOperationMode$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `autoRecovery`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `economy`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `scheduleActive`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\> ; `thermostatRunningState$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `cool`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `coolStage2`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fan`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fanStage2`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fanStage3`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `heat`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `heatStage2`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\>  } & {} & {}

Access the behavior's events.

#### Inherited from

ThermostatBehaviorType.events

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L145)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:290](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L290)

___

### features

• **features**: `Object`

Supported features as a flag object.

#### Inherited from

ThermostatBehaviorType.features

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

ThermostatBehaviorType.session

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

___

### state

• `Readonly` **state**: `Omit`\<[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & \{ `controlSequenceOfOperation`: [`ControlSequenceOfOperation`](../enums/cluster_export.Thermostat.ControlSequenceOfOperation.md) ; `localTemperature`: ``null`` \| `number` ; `systemMode`: [`SystemMode`](../enums/cluster_export.Thermostat.SystemMode.md)  } & \{ `acCapacity?`: `number` ; `acCapacityFormat?`: [`BtUh`](../enums/cluster_export.Thermostat.AcCapacityFormat.md#btuh) ; `acCoilTemperature?`: ``null`` \| `number` ; `acCompressorType?`: [`AcCompressorType`](../enums/cluster_export.Thermostat.AcCompressorType.md) ; `acErrorCode?`: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coilSensorFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `compressorFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fanFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `outdoorSensorFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `roomSensorFail`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> ; `acLouverPosition?`: [`AcLouverPosition`](../enums/cluster_export.Thermostat.AcLouverPosition.md) ; `acRefrigerantType?`: [`AcRefrigerantType`](../enums/cluster_export.Thermostat.AcRefrigerantType.md) ; `acType?`: [`AcType`](../enums/cluster_export.Thermostat.AcType.md) ; `alarmMask?`: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `initializationFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `selfCalibrationFailure`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> ; `emergencyHeatDelta?`: `number` ; `outdoorTemperature?`: ``null`` \| `number` ; `remoteSensing?`: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `localTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `outdoorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> ; `setpointChangeAmount?`: ``null`` \| `number` ; `setpointChangeSource?`: [`SetpointChangeSource`](../enums/cluster_export.Thermostat.SetpointChangeSource.md) ; `setpointChangeSourceTimestamp?`: `number` ; `temperatureSetpointHold?`: [`TemperatureSetpointHold`](../enums/cluster_export.Thermostat.TemperatureSetpointHold.md) ; `temperatureSetpointHoldDuration?`: ``null`` \| `number` ; `thermostatProgrammingOperationMode?`: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `autoRecovery`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `economy`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `scheduleActive`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> ; `thermostatRunningState?`: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `cool`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `coolStage2`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fan`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fanStage2`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fanStage3`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `heat`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `heatStage2`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>  } & {} & {}

Access the behavior's state.

#### Inherited from

ThermostatBehaviorType.state

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

ThermostatBehaviorType.[asyncDispose]

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

ThermostatBehaviorType.asAdmin

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

ThermostatBehaviorType.callback

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L226)

___

### getRelayStatusLog

▸ **getRelayStatusLog**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 4.3.8

#### Inherited from

ThermostatBehaviorType.getRelayStatusLog

#### Defined in

[packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts#L43)

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

ThermostatBehaviorType.initialize

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

ThermostatBehaviorType.reactTo

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L212)

___

### setpointRaiseLower

▸ **setpointRaiseLower**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `amount`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `mode`: [`FieldType`](tlv_export.FieldType.md)\<[`SetpointAdjustMode`](../enums/cluster_export.Thermostat.SetpointAdjustMode.md)\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 4.3.8

#### Inherited from

ThermostatBehaviorType.setpointRaiseLower

#### Defined in

[packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts#L38)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

ThermostatBehaviorType.toString

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L203)
