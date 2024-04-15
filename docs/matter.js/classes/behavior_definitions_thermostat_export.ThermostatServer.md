[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/thermostat/export](../modules/behavior_definitions_thermostat_export.md) / ThermostatServer

# Class: ThermostatServer

[behavior/definitions/thermostat/export](../modules/behavior_definitions_thermostat_export.md).ThermostatServer

This is the default server implementation of [ThermostatBehavior](../modules/behavior_definitions_thermostat_export.md#thermostatbehavior).

The Matter specification requires the Thermostat cluster to support features we do not enable by default. You should
use [ThermostatServer.with](behavior_definitions_thermostat_export.ThermostatServer.md#with) to specialize the class for the features your implementation supports.

## Hierarchy

- [`ThermostatBehavior`](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md)

  ↳ **`ThermostatServer`**

## Table of contents

### Constructors

- [constructor](behavior_definitions_thermostat_export.ThermostatServer.md#constructor)

### Properties

- [#agent](behavior_definitions_thermostat_export.ThermostatServer.md##agent)
- [[reference]](behavior_definitions_thermostat_export.ThermostatServer.md#[reference])
- [agent](behavior_definitions_thermostat_export.ThermostatServer.md#agent)
- [cluster](behavior_definitions_thermostat_export.ThermostatServer.md#cluster)
- [context](behavior_definitions_thermostat_export.ThermostatServer.md#context)
- [endpoint](behavior_definitions_thermostat_export.ThermostatServer.md#endpoint)
- [events](behavior_definitions_thermostat_export.ThermostatServer.md#events)
- [features](behavior_definitions_thermostat_export.ThermostatServer.md#features)
- [session](behavior_definitions_thermostat_export.ThermostatServer.md#session)
- [state](behavior_definitions_thermostat_export.ThermostatServer.md#state)
- [Events](behavior_definitions_thermostat_export.ThermostatServer.md#events-1)
- [Interface](behavior_definitions_thermostat_export.ThermostatServer.md#interface)
- [Internal](behavior_definitions_thermostat_export.ThermostatServer.md#internal)
- [State](behavior_definitions_thermostat_export.ThermostatServer.md#state-1)
- [cluster](behavior_definitions_thermostat_export.ThermostatServer.md#cluster-1)
- [defaults](behavior_definitions_thermostat_export.ThermostatServer.md#defaults)
- [dependencies](behavior_definitions_thermostat_export.ThermostatServer.md#dependencies)
- [early](behavior_definitions_thermostat_export.ThermostatServer.md#early)
- [id](behavior_definitions_thermostat_export.ThermostatServer.md#id)
- [name](behavior_definitions_thermostat_export.ThermostatServer.md#name)
- [schema](behavior_definitions_thermostat_export.ThermostatServer.md#schema)
- [supervisor](behavior_definitions_thermostat_export.ThermostatServer.md#supervisor)
- [supports](behavior_definitions_thermostat_export.ThermostatServer.md#supports)

### Methods

- [[asyncDispose]](behavior_definitions_thermostat_export.ThermostatServer.md#[asyncdispose])
- [asAdmin](behavior_definitions_thermostat_export.ThermostatServer.md#asadmin)
- [callback](behavior_definitions_thermostat_export.ThermostatServer.md#callback)
- [getRelayStatusLog](behavior_definitions_thermostat_export.ThermostatServer.md#getrelaystatuslog)
- [initialize](behavior_definitions_thermostat_export.ThermostatServer.md#initialize)
- [reactTo](behavior_definitions_thermostat_export.ThermostatServer.md#reactto)
- [setpointRaiseLower](behavior_definitions_thermostat_export.ThermostatServer.md#setpointraiselower)
- [toString](behavior_definitions_thermostat_export.ThermostatServer.md#tostring)
- [alter](behavior_definitions_thermostat_export.ThermostatServer.md#alter)
- [enable](behavior_definitions_thermostat_export.ThermostatServer.md#enable)
- [for](behavior_definitions_thermostat_export.ThermostatServer.md#for)
- [set](behavior_definitions_thermostat_export.ThermostatServer.md#set)
- [with](behavior_definitions_thermostat_export.ThermostatServer.md#with)

## Constructors

### constructor

• **new ThermostatServer**(`agent`, `backing`): [`ThermostatServer`](behavior_definitions_thermostat_export.ThermostatServer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |
| `backing` | [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md) |

#### Returns

[`ThermostatServer`](behavior_definitions_thermostat_export.ThermostatServer.md)

#### Inherited from

ThermostatBehavior.constructor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:181](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L181)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

[ThermostatBehavior](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md).[#agent](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md##agent)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L51)

___

### [reference]

• **[reference]**: [`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

[ThermostatBehavior](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md).[[reference]](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md#[reference])

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

___

### agent

• **agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

[ThermostatBehavior](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md).[agent](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md#agent)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

___

### cluster

• **cluster**: `never`

The implemented cluster.

#### Inherited from

[ThermostatBehavior](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md).[cluster](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md#cluster)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:280](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L280)

___

### context

• **context**: [`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

[ThermostatBehavior](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md).[context](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md#context)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

___

### endpoint

• **endpoint**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

[ThermostatBehavior](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md).[endpoint](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md#endpoint)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

___

### events

• `Readonly` **events**: [`EventEmitter`](util_export.EventEmitter-1.md) & `Omit`\<[`ClusterEvents`](../modules/behavior_cluster_export.md#clusterevents)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & \{ `controlSequenceOfOperation$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`ControlSequenceOfOperation`](../enums/cluster_export.Thermostat.ControlSequenceOfOperation.md), `any`\>\> ; `localTemperature$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>\> ; `systemMode$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`SystemMode`](../enums/cluster_export.Thermostat.SystemMode.md), `any`\>\>  } & \{ `acCapacity$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `acCapacityFormat$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`BtUh`](../enums/cluster_export.Thermostat.AcCapacityFormat.md#btuh), `any`\>\> ; `acCoilTemperature$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\>\> ; `acCompressorType$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcCompressorType`](../enums/cluster_export.Thermostat.AcCompressorType.md), `any`\>\> ; `acErrorCode$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coilSensorFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `compressorFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fanFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `outdoorSensorFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `roomSensorFail`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\> ; `acLouverPosition$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcLouverPosition`](../enums/cluster_export.Thermostat.AcLouverPosition.md), `any`\>\> ; `acRefrigerantType$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcRefrigerantType`](../enums/cluster_export.Thermostat.AcRefrigerantType.md), `any`\>\> ; `acType$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcType`](../enums/cluster_export.Thermostat.AcType.md), `any`\>\> ; `alarmMask$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `initializationFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `selfCalibrationFailure`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\> ; `emergencyHeatDelta$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>\> ; `outdoorTemperature$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\>\> ; `remoteSensing$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `localTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `outdoorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\> ; `setpointChangeAmount$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\>\> ; `setpointChangeSource$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`SetpointChangeSource`](../enums/cluster_export.Thermostat.SetpointChangeSource.md), `any`\>\> ; `setpointChangeSourceTimestamp$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>\> ; `temperatureSetpointHold$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TemperatureSetpointHold`](../enums/cluster_export.Thermostat.TemperatureSetpointHold.md), `any`\>\> ; `temperatureSetpointHoldDuration$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `thermostatProgrammingOperationMode$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `autoRecovery`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `economy`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `scheduleActive`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\> ; `thermostatRunningState$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `cool`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `coolStage2`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fan`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fanStage2`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fanStage3`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `heat`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `heatStage2`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\>  } & {} & {}

Access the behavior's events.

#### Inherited from

[ThermostatBehavior](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md).[events](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md#events)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L145)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:290](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L290)

___

### features

• **features**: `Object`

Supported features as a flag object.

#### Inherited from

[ThermostatBehavior](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md).[features](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md#features)

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

[ThermostatBehavior](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md).[session](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md#session)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

___

### state

• `Readonly` **state**: `Omit`\<[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & \{ `controlSequenceOfOperation`: [`ControlSequenceOfOperation`](../enums/cluster_export.Thermostat.ControlSequenceOfOperation.md) ; `localTemperature`: ``null`` \| `number` ; `systemMode`: [`SystemMode`](../enums/cluster_export.Thermostat.SystemMode.md)  } & \{ `acCapacity?`: `number` ; `acCapacityFormat?`: [`BtUh`](../enums/cluster_export.Thermostat.AcCapacityFormat.md#btuh) ; `acCoilTemperature?`: ``null`` \| `number` ; `acCompressorType?`: [`AcCompressorType`](../enums/cluster_export.Thermostat.AcCompressorType.md) ; `acErrorCode?`: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coilSensorFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `compressorFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fanFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `outdoorSensorFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `roomSensorFail`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> ; `acLouverPosition?`: [`AcLouverPosition`](../enums/cluster_export.Thermostat.AcLouverPosition.md) ; `acRefrigerantType?`: [`AcRefrigerantType`](../enums/cluster_export.Thermostat.AcRefrigerantType.md) ; `acType?`: [`AcType`](../enums/cluster_export.Thermostat.AcType.md) ; `alarmMask?`: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `initializationFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `selfCalibrationFailure`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> ; `emergencyHeatDelta?`: `number` ; `outdoorTemperature?`: ``null`` \| `number` ; `remoteSensing?`: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `localTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `outdoorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> ; `setpointChangeAmount?`: ``null`` \| `number` ; `setpointChangeSource?`: [`SetpointChangeSource`](../enums/cluster_export.Thermostat.SetpointChangeSource.md) ; `setpointChangeSourceTimestamp?`: `number` ; `temperatureSetpointHold?`: [`TemperatureSetpointHold`](../enums/cluster_export.Thermostat.TemperatureSetpointHold.md) ; `temperatureSetpointHoldDuration?`: ``null`` \| `number` ; `thermostatProgrammingOperationMode?`: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `autoRecovery`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `economy`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `scheduleActive`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> ; `thermostatRunningState?`: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `cool`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `coolStage2`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fan`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fanStage2`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fanStage3`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `heat`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `heatStage2`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>  } & {} & {}

Access the behavior's state.

#### Inherited from

[ThermostatBehavior](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md).[state](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md#state)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:140](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L140)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:285](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L285)

___

### Events

▪ `Static` `Readonly` **Events**: [`Type`](../modules/behavior_cluster_export.ClusterEvents.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acCapacity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `acCapacityFormat`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`BtUh`](../enums/cluster_export.Thermostat.AcCapacityFormat.md#btuh), `any`\> ; `acCoilTemperature`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `acCompressorType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcCompressorType`](../enums/cluster_export.Thermostat.AcCompressorType.md), `any`\> ; `acErrorCode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coilSensorFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `compressorFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fanFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `outdoorSensorFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `roomSensorFail`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `acLouverPosition`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcLouverPosition`](../enums/cluster_export.Thermostat.AcLouverPosition.md), `any`\> ; `acRefrigerantType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcRefrigerantType`](../enums/cluster_export.Thermostat.AcRefrigerantType.md), `any`\> ; `acType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcType`](../enums/cluster_export.Thermostat.AcType.md), `any`\> ; `alarmMask`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `initializationFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `selfCalibrationFailure`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `controlSequenceOfOperation`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`ControlSequenceOfOperation`](../enums/cluster_export.Thermostat.ControlSequenceOfOperation.md), `any`\> ; `emergencyHeatDelta`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `localTemperature`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `outdoorTemperature`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `remoteSensing`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `localTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `outdoorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `setpointChangeAmount`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `setpointChangeSource`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`SetpointChangeSource`](../enums/cluster_export.Thermostat.SetpointChangeSource.md), `any`\> ; `setpointChangeSourceTimestamp`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `systemMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`SystemMode`](../enums/cluster_export.Thermostat.SystemMode.md), `any`\> ; `temperatureSetpointHold`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TemperatureSetpointHold`](../enums/cluster_export.Thermostat.TemperatureSetpointHold.md), `any`\> ; `temperatureSetpointHoldDuration`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `thermostatProgrammingOperationMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `autoRecovery`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `economy`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `scheduleActive`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `thermostatRunningState`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `cool`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `coolStage2`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fan`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fanStage2`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fanStage3`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `heat`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `heatStage2`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `getRelayStatusLog`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> ; `setpointRaiseLower`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `amount`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`SetpointAdjustMode`](../enums/cluster_export.Thermostat.SetpointAdjustMode.md)\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `occupancy`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `occupied`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  }  } = OccupancyComponent; `flags`: \{ `occupancy`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `absMaxHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `absMinHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `maxHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `minHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `occupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `piHeatingDemand`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  }  } = HeatingComponent; `flags`: \{ `heating`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `absMaxCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `absMinCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `maxCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `minCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `occupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `piCoolingDemand`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  }  } = CoolingComponent; `flags`: \{ `cooling`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `localTemperatureCalibration`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>  }  } = NotLocalTemperatureNotExposedComponent; `flags`: \{ `localTemperatureNotExposed`: ``false`` = false }  }, \{ `component`: \{ `attributes`: \{ `unoccupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\>  }  } = CoolingAndOccupancyComponent; `flags`: \{ `cooling`: ``true`` = true; `occupancy`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `unoccupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\>  }  } = HeatingAndOccupancyComponent; `flags`: \{ `heating`: ``true`` = true; `occupancy`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `minSetpointDeadBand`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `thermostatRunningMode`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`ThermostatRunningMode`](../enums/cluster_export.Thermostat.ThermostatRunningMode.md), `any`\>  }  } = AutoModeComponent; `flags`: \{ `autoMode`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfDailyTransitions`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `numberOfWeeklyTransitions`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `startOfWeek`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`StartOfWeek`](../enums/cluster_export.Thermostat.StartOfWeek.md), `any`\>  } ; `commands`: \{ `clearWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `getWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `daysToReturn`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `modeToReturn`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `dayOfWeekForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `modeForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `numberOfTransitionsForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `transitions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `any`\> ; `setWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `dayOfWeekForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `modeForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `numberOfTransitionsForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `transitions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = ScheduleConfigurationComponent; `flags`: \{ `scheduleConfiguration`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `occupiedSetback`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `occupiedSetbackMax`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `occupiedSetbackMin`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = SetbackComponent; `flags`: \{ `setback`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `unoccupiedSetback`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `unoccupiedSetbackMax`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `unoccupiedSetbackMin`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = SetbackAndOccupancyComponent; `flags`: \{ `occupancy`: ``true`` = true; `setback`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `autoMode`: ``true`` = true; `heating`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `autoMode`: ``true`` = true; `cooling`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `cooling`: ``false`` = false; `heating`: ``false`` = false }  }] ; `features`: \{ `autoMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `cooling`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `heating`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `localTemperatureNotExposed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `scheduleConfiguration`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `setback`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``513`` = 0x201; `name`: ``"Thermostat"`` = "Thermostat"; `revision`: ``6`` = 6 }\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`ThermostatInterface`](../modules/behavior_definitions_thermostat_export.md#thermostatinterface)\>\>

#### Inherited from

ThermostatBehavior.Events

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:195](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L195)

___

### Interface

▪ `Static` `Readonly` **Interface**: [`ThermostatInterface`](../modules/behavior_definitions_thermostat_export.md#thermostatinterface)

#### Inherited from

ThermostatBehavior.Interface

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

ThermostatBehavior.Internal

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:197](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L197)

___

### State

▪ `Static` `Readonly` **State**: () => [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acCapacity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `acCapacityFormat`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`BtUh`](../enums/cluster_export.Thermostat.AcCapacityFormat.md#btuh), `any`\> ; `acCoilTemperature`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `acCompressorType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcCompressorType`](../enums/cluster_export.Thermostat.AcCompressorType.md), `any`\> ; `acErrorCode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coilSensorFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `compressorFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fanFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `outdoorSensorFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `roomSensorFail`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `acLouverPosition`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcLouverPosition`](../enums/cluster_export.Thermostat.AcLouverPosition.md), `any`\> ; `acRefrigerantType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcRefrigerantType`](../enums/cluster_export.Thermostat.AcRefrigerantType.md), `any`\> ; `acType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcType`](../enums/cluster_export.Thermostat.AcType.md), `any`\> ; `alarmMask`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `initializationFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `selfCalibrationFailure`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `controlSequenceOfOperation`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`ControlSequenceOfOperation`](../enums/cluster_export.Thermostat.ControlSequenceOfOperation.md), `any`\> ; `emergencyHeatDelta`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `localTemperature`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `outdoorTemperature`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `remoteSensing`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `localTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `outdoorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `setpointChangeAmount`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `setpointChangeSource`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`SetpointChangeSource`](../enums/cluster_export.Thermostat.SetpointChangeSource.md), `any`\> ; `setpointChangeSourceTimestamp`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `systemMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`SystemMode`](../enums/cluster_export.Thermostat.SystemMode.md), `any`\> ; `temperatureSetpointHold`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TemperatureSetpointHold`](../enums/cluster_export.Thermostat.TemperatureSetpointHold.md), `any`\> ; `temperatureSetpointHoldDuration`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `thermostatProgrammingOperationMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `autoRecovery`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `economy`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `scheduleActive`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `thermostatRunningState`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `cool`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `coolStage2`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fan`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fanStage2`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fanStage3`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `heat`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `heatStage2`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `getRelayStatusLog`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> ; `setpointRaiseLower`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `amount`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`SetpointAdjustMode`](../enums/cluster_export.Thermostat.SetpointAdjustMode.md)\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `occupancy`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `occupied`: ...  }\>, `any`\>  }  } = OccupancyComponent; `flags`: \{ `occupancy`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `absMaxHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `absMinHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `maxHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `minHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `occupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `piHeatingDemand`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  }  } = HeatingComponent; `flags`: \{ `heating`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `absMaxCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `absMinCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `maxCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `minCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `occupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `piCoolingDemand`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  }  } = CoolingComponent; `flags`: \{ `cooling`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `localTemperatureCalibration`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>  }  } = NotLocalTemperatureNotExposedComponent; `flags`: \{ `localTemperatureNotExposed`: ``false`` = false }  }, \{ `component`: \{ `attributes`: \{ `unoccupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\>  }  } = CoolingAndOccupancyComponent; `flags`: \{ `cooling`: ``true`` = true; `occupancy`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `unoccupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\>  }  } = HeatingAndOccupancyComponent; `flags`: \{ `heating`: ``true`` = true; `occupancy`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `minSetpointDeadBand`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `thermostatRunningMode`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`ThermostatRunningMode`](../enums/cluster_export.Thermostat.ThermostatRunningMode.md), `any`\>  }  } = AutoModeComponent; `flags`: \{ `autoMode`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfDailyTransitions`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `numberOfWeeklyTransitions`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `startOfWeek`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`StartOfWeek`](../enums/cluster_export.Thermostat.StartOfWeek.md), `any`\>  } ; `commands`: \{ `clearWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `getWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `daysToReturn`: ... ; `modeToReturn`: ...  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `dayOfWeekForSequence`: ... ; `modeForSequence`: ... ; `numberOfTransitionsForSequence`: ... ; `transitions`: ...  }\>, `any`\> ; `setWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `dayOfWeekForSequence`: ... ; `modeForSequence`: ... ; `numberOfTransitionsForSequence`: ... ; `transitions`: ...  }\>, `void`, `any`\>  }  } = ScheduleConfigurationComponent; `flags`: \{ `scheduleConfiguration`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `occupiedSetback`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `occupiedSetbackMax`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `occupiedSetbackMin`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = SetbackComponent; `flags`: \{ `setback`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `unoccupiedSetback`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `unoccupiedSetbackMax`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `unoccupiedSetbackMin`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = SetbackAndOccupancyComponent; `flags`: \{ `occupancy`: ``true`` = true; `setback`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `autoMode`: ``true`` = true; `heating`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `autoMode`: ``true`` = true; `cooling`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `cooling`: ``false`` = false; `heating`: ``false`` = false }  }] ; `features`: \{ `autoMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `cooling`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `heating`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `localTemperatureNotExposed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `scheduleConfiguration`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `setback`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``513`` = 0x201; `name`: ``"Thermostat"`` = "Thermostat"; `revision`: ``6`` = 6 }\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`ThermostatInterface`](../modules/behavior_definitions_thermostat_export.md#thermostatinterface)\>\>

#### Type declaration

• **new State**(): [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acCapacity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `acCapacityFormat`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`BtUh`](../enums/cluster_export.Thermostat.AcCapacityFormat.md#btuh), `any`\> ; `acCoilTemperature`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `acCompressorType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcCompressorType`](../enums/cluster_export.Thermostat.AcCompressorType.md), `any`\> ; `acErrorCode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coilSensorFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `compressorFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fanFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `outdoorSensorFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `roomSensorFail`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `acLouverPosition`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcLouverPosition`](../enums/cluster_export.Thermostat.AcLouverPosition.md), `any`\> ; `acRefrigerantType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcRefrigerantType`](../enums/cluster_export.Thermostat.AcRefrigerantType.md), `any`\> ; `acType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcType`](../enums/cluster_export.Thermostat.AcType.md), `any`\> ; `alarmMask`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `initializationFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `selfCalibrationFailure`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `controlSequenceOfOperation`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`ControlSequenceOfOperation`](../enums/cluster_export.Thermostat.ControlSequenceOfOperation.md), `any`\> ; `emergencyHeatDelta`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `localTemperature`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `outdoorTemperature`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `remoteSensing`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `localTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `outdoorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `setpointChangeAmount`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `setpointChangeSource`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`SetpointChangeSource`](../enums/cluster_export.Thermostat.SetpointChangeSource.md), `any`\> ; `setpointChangeSourceTimestamp`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `systemMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`SystemMode`](../enums/cluster_export.Thermostat.SystemMode.md), `any`\> ; `temperatureSetpointHold`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TemperatureSetpointHold`](../enums/cluster_export.Thermostat.TemperatureSetpointHold.md), `any`\> ; `temperatureSetpointHoldDuration`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `thermostatProgrammingOperationMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `autoRecovery`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `economy`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `scheduleActive`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `thermostatRunningState`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `cool`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `coolStage2`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fan`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fanStage2`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fanStage3`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `heat`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `heatStage2`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `getRelayStatusLog`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> ; `setpointRaiseLower`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `amount`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`SetpointAdjustMode`](../enums/cluster_export.Thermostat.SetpointAdjustMode.md)\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `occupancy`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `occupied`: ...  }\>, `any`\>  }  } = OccupancyComponent; `flags`: \{ `occupancy`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `absMaxHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `absMinHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `maxHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `minHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `occupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `piHeatingDemand`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  }  } = HeatingComponent; `flags`: \{ `heating`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `absMaxCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `absMinCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `maxCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `minCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `occupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `piCoolingDemand`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  }  } = CoolingComponent; `flags`: \{ `cooling`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `localTemperatureCalibration`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>  }  } = NotLocalTemperatureNotExposedComponent; `flags`: \{ `localTemperatureNotExposed`: ``false`` = false }  }, \{ `component`: \{ `attributes`: \{ `unoccupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\>  }  } = CoolingAndOccupancyComponent; `flags`: \{ `cooling`: ``true`` = true; `occupancy`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `unoccupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\>  }  } = HeatingAndOccupancyComponent; `flags`: \{ `heating`: ``true`` = true; `occupancy`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `minSetpointDeadBand`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `thermostatRunningMode`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`ThermostatRunningMode`](../enums/cluster_export.Thermostat.ThermostatRunningMode.md), `any`\>  }  } = AutoModeComponent; `flags`: \{ `autoMode`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfDailyTransitions`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `numberOfWeeklyTransitions`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `startOfWeek`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`StartOfWeek`](../enums/cluster_export.Thermostat.StartOfWeek.md), `any`\>  } ; `commands`: \{ `clearWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `getWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `daysToReturn`: ... ; `modeToReturn`: ...  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `dayOfWeekForSequence`: ... ; `modeForSequence`: ... ; `numberOfTransitionsForSequence`: ... ; `transitions`: ...  }\>, `any`\> ; `setWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `dayOfWeekForSequence`: ... ; `modeForSequence`: ... ; `numberOfTransitionsForSequence`: ... ; `transitions`: ...  }\>, `void`, `any`\>  }  } = ScheduleConfigurationComponent; `flags`: \{ `scheduleConfiguration`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `occupiedSetback`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `occupiedSetbackMax`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `occupiedSetbackMin`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = SetbackComponent; `flags`: \{ `setback`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `unoccupiedSetback`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `unoccupiedSetbackMax`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `unoccupiedSetbackMin`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = SetbackAndOccupancyComponent; `flags`: \{ `occupancy`: ``true`` = true; `setback`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `autoMode`: ``true`` = true; `heating`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `autoMode`: ``true`` = true; `cooling`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `cooling`: ``false`` = false; `heating`: ``false`` = false }  }] ; `features`: \{ `autoMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `cooling`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `heating`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `localTemperatureNotExposed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `scheduleConfiguration`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `setback`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``513`` = 0x201; `name`: ``"Thermostat"`` = "Thermostat"; `revision`: ``6`` = 6 }\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`ThermostatInterface`](../modules/behavior_definitions_thermostat_export.md#thermostatinterface)\>\>

##### Returns

[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acCapacity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `acCapacityFormat`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`BtUh`](../enums/cluster_export.Thermostat.AcCapacityFormat.md#btuh), `any`\> ; `acCoilTemperature`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `acCompressorType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcCompressorType`](../enums/cluster_export.Thermostat.AcCompressorType.md), `any`\> ; `acErrorCode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coilSensorFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `compressorFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fanFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `outdoorSensorFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `roomSensorFail`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `acLouverPosition`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcLouverPosition`](../enums/cluster_export.Thermostat.AcLouverPosition.md), `any`\> ; `acRefrigerantType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcRefrigerantType`](../enums/cluster_export.Thermostat.AcRefrigerantType.md), `any`\> ; `acType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcType`](../enums/cluster_export.Thermostat.AcType.md), `any`\> ; `alarmMask`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `initializationFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `selfCalibrationFailure`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `controlSequenceOfOperation`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`ControlSequenceOfOperation`](../enums/cluster_export.Thermostat.ControlSequenceOfOperation.md), `any`\> ; `emergencyHeatDelta`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `localTemperature`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `outdoorTemperature`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `remoteSensing`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `localTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `outdoorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `setpointChangeAmount`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `setpointChangeSource`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`SetpointChangeSource`](../enums/cluster_export.Thermostat.SetpointChangeSource.md), `any`\> ; `setpointChangeSourceTimestamp`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `systemMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`SystemMode`](../enums/cluster_export.Thermostat.SystemMode.md), `any`\> ; `temperatureSetpointHold`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TemperatureSetpointHold`](../enums/cluster_export.Thermostat.TemperatureSetpointHold.md), `any`\> ; `temperatureSetpointHoldDuration`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `thermostatProgrammingOperationMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `autoRecovery`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `economy`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `scheduleActive`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `thermostatRunningState`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `cool`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `coolStage2`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fan`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fanStage2`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fanStage3`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `heat`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `heatStage2`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `getRelayStatusLog`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> ; `setpointRaiseLower`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `amount`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`SetpointAdjustMode`](../enums/cluster_export.Thermostat.SetpointAdjustMode.md)\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `occupancy`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `occupied`: ...  }\>, `any`\>  }  } = OccupancyComponent; `flags`: \{ `occupancy`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `absMaxHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `absMinHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `maxHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `minHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `occupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `piHeatingDemand`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  }  } = HeatingComponent; `flags`: \{ `heating`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `absMaxCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `absMinCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `maxCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `minCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `occupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `piCoolingDemand`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  }  } = CoolingComponent; `flags`: \{ `cooling`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `localTemperatureCalibration`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>  }  } = NotLocalTemperatureNotExposedComponent; `flags`: \{ `localTemperatureNotExposed`: ``false`` = false }  }, \{ `component`: \{ `attributes`: \{ `unoccupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\>  }  } = CoolingAndOccupancyComponent; `flags`: \{ `cooling`: ``true`` = true; `occupancy`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `unoccupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\>  }  } = HeatingAndOccupancyComponent; `flags`: \{ `heating`: ``true`` = true; `occupancy`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `minSetpointDeadBand`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `thermostatRunningMode`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`ThermostatRunningMode`](../enums/cluster_export.Thermostat.ThermostatRunningMode.md), `any`\>  }  } = AutoModeComponent; `flags`: \{ `autoMode`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfDailyTransitions`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `numberOfWeeklyTransitions`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `startOfWeek`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`StartOfWeek`](../enums/cluster_export.Thermostat.StartOfWeek.md), `any`\>  } ; `commands`: \{ `clearWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `getWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `daysToReturn`: ... ; `modeToReturn`: ...  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `dayOfWeekForSequence`: ... ; `modeForSequence`: ... ; `numberOfTransitionsForSequence`: ... ; `transitions`: ...  }\>, `any`\> ; `setWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `dayOfWeekForSequence`: ... ; `modeForSequence`: ... ; `numberOfTransitionsForSequence`: ... ; `transitions`: ...  }\>, `void`, `any`\>  }  } = ScheduleConfigurationComponent; `flags`: \{ `scheduleConfiguration`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `occupiedSetback`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `occupiedSetbackMax`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `occupiedSetbackMin`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = SetbackComponent; `flags`: \{ `setback`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `unoccupiedSetback`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `unoccupiedSetbackMax`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `unoccupiedSetbackMin`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = SetbackAndOccupancyComponent; `flags`: \{ `occupancy`: ``true`` = true; `setback`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `autoMode`: ``true`` = true; `heating`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `autoMode`: ``true`` = true; `cooling`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `cooling`: ``false`` = false; `heating`: ``false`` = false }  }] ; `features`: \{ `autoMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `cooling`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `heating`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `localTemperatureNotExposed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `scheduleConfiguration`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `setback`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``513`` = 0x201; `name`: ``"Thermostat"`` = "Thermostat"; `revision`: ``6`` = 6 }\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`ThermostatInterface`](../modules/behavior_definitions_thermostat_export.md#thermostatinterface)\>\>

#### Inherited from

ThermostatBehavior.State

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:196](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L196)

___

### cluster

▪ `Static` `Readonly` **cluster**: [`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acCapacity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `acCapacityFormat`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`BtUh`](../enums/cluster_export.Thermostat.AcCapacityFormat.md#btuh), `any`\> ; `acCoilTemperature`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `acCompressorType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcCompressorType`](../enums/cluster_export.Thermostat.AcCompressorType.md), `any`\> ; `acErrorCode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coilSensorFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `compressorFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fanFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `outdoorSensorFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `roomSensorFail`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `acLouverPosition`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcLouverPosition`](../enums/cluster_export.Thermostat.AcLouverPosition.md), `any`\> ; `acRefrigerantType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcRefrigerantType`](../enums/cluster_export.Thermostat.AcRefrigerantType.md), `any`\> ; `acType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcType`](../enums/cluster_export.Thermostat.AcType.md), `any`\> ; `alarmMask`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `initializationFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `selfCalibrationFailure`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `controlSequenceOfOperation`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`ControlSequenceOfOperation`](../enums/cluster_export.Thermostat.ControlSequenceOfOperation.md), `any`\> ; `emergencyHeatDelta`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `localTemperature`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `outdoorTemperature`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `remoteSensing`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `localTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `outdoorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `setpointChangeAmount`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `setpointChangeSource`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`SetpointChangeSource`](../enums/cluster_export.Thermostat.SetpointChangeSource.md), `any`\> ; `setpointChangeSourceTimestamp`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `systemMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`SystemMode`](../enums/cluster_export.Thermostat.SystemMode.md), `any`\> ; `temperatureSetpointHold`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TemperatureSetpointHold`](../enums/cluster_export.Thermostat.TemperatureSetpointHold.md), `any`\> ; `temperatureSetpointHoldDuration`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `thermostatProgrammingOperationMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `autoRecovery`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `economy`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `scheduleActive`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `thermostatRunningState`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `cool`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `coolStage2`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fan`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fanStage2`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fanStage3`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `heat`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `heatStage2`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `getRelayStatusLog`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> ; `setpointRaiseLower`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `amount`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`SetpointAdjustMode`](../enums/cluster_export.Thermostat.SetpointAdjustMode.md)\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `occupancy`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `occupied`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  }  } = OccupancyComponent; `flags`: \{ `occupancy`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `absMaxHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `absMinHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `maxHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `minHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `occupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `piHeatingDemand`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  }  } = HeatingComponent; `flags`: \{ `heating`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `absMaxCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `absMinCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `maxCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `minCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `occupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `piCoolingDemand`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  }  } = CoolingComponent; `flags`: \{ `cooling`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `localTemperatureCalibration`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>  }  } = NotLocalTemperatureNotExposedComponent; `flags`: \{ `localTemperatureNotExposed`: ``false`` = false }  }, \{ `component`: \{ `attributes`: \{ `unoccupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\>  }  } = CoolingAndOccupancyComponent; `flags`: \{ `cooling`: ``true`` = true; `occupancy`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `unoccupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\>  }  } = HeatingAndOccupancyComponent; `flags`: \{ `heating`: ``true`` = true; `occupancy`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `minSetpointDeadBand`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `thermostatRunningMode`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`ThermostatRunningMode`](../enums/cluster_export.Thermostat.ThermostatRunningMode.md), `any`\>  }  } = AutoModeComponent; `flags`: \{ `autoMode`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfDailyTransitions`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `numberOfWeeklyTransitions`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `startOfWeek`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`StartOfWeek`](../enums/cluster_export.Thermostat.StartOfWeek.md), `any`\>  } ; `commands`: \{ `clearWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `getWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `daysToReturn`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `modeToReturn`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `dayOfWeekForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `modeForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `numberOfTransitionsForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...[]\>  }\>, `any`\> ; `setWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `dayOfWeekForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `modeForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<...\>\> ; `numberOfTransitionsForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `transitions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...[]\>  }\>, `void`, `any`\>  }  } = ScheduleConfigurationComponent; `flags`: \{ `scheduleConfiguration`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `occupiedSetback`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `occupiedSetbackMax`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `occupiedSetbackMin`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = SetbackComponent; `flags`: \{ `setback`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `unoccupiedSetback`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `unoccupiedSetbackMax`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `unoccupiedSetbackMin`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = SetbackAndOccupancyComponent; `flags`: \{ `occupancy`: ``true`` = true; `setback`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `autoMode`: ``true`` = true; `heating`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `autoMode`: ``true`` = true; `cooling`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `cooling`: ``false`` = false; `heating`: ``false`` = false }  }] ; `features`: \{ `autoMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `cooling`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `heating`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `localTemperatureNotExposed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `scheduleConfiguration`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `setback`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``513`` = 0x201; `name`: ``"Thermostat"`` = "Thermostat"; `revision`: ``6`` = 6 }\>

Base cluster state include all attribute values but may be extended by subclasses.

#### Inherited from

ThermostatBehavior.cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:193](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L193)

___

### defaults

▪ `Static` `Readonly` **defaults**: [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acCapacity`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `acCapacityFormat`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`BtUh`](../enums/cluster_export.Thermostat.AcCapacityFormat.md#btuh), `any`\> ; `acCoilTemperature`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `acCompressorType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcCompressorType`](../enums/cluster_export.Thermostat.AcCompressorType.md), `any`\> ; `acErrorCode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `coilSensorFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `compressorFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fanFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `outdoorSensorFail`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `roomSensorFail`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `acLouverPosition`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcLouverPosition`](../enums/cluster_export.Thermostat.AcLouverPosition.md), `any`\> ; `acRefrigerantType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcRefrigerantType`](../enums/cluster_export.Thermostat.AcRefrigerantType.md), `any`\> ; `acType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`AcType`](../enums/cluster_export.Thermostat.AcType.md), `any`\> ; `alarmMask`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `initializationFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `selfCalibrationFailure`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `controlSequenceOfOperation`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`ControlSequenceOfOperation`](../enums/cluster_export.Thermostat.ControlSequenceOfOperation.md), `any`\> ; `emergencyHeatDelta`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `localTemperature`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `outdoorTemperature`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `remoteSensing`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `localTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `outdoorTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `setpointChangeAmount`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `setpointChangeSource`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`SetpointChangeSource`](../enums/cluster_export.Thermostat.SetpointChangeSource.md), `any`\> ; `setpointChangeSourceTimestamp`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `systemMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`SystemMode`](../enums/cluster_export.Thermostat.SystemMode.md), `any`\> ; `temperatureSetpointHold`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TemperatureSetpointHold`](../enums/cluster_export.Thermostat.TemperatureSetpointHold.md), `any`\> ; `temperatureSetpointHoldDuration`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `thermostatProgrammingOperationMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `autoRecovery`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `economy`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `scheduleActive`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `thermostatRunningState`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `cool`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `coolStage2`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fan`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fanStage2`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `fanStage3`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `heat`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `heatStage2`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `getRelayStatusLog`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> ; `setpointRaiseLower`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `amount`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`SetpointAdjustMode`](../enums/cluster_export.Thermostat.SetpointAdjustMode.md)\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `occupancy`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `occupied`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  }  } = OccupancyComponent; `flags`: \{ `occupancy`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `absMaxHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `absMinHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `maxHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `minHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `occupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `piHeatingDemand`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  }  } = HeatingComponent; `flags`: \{ `heating`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `absMaxCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `absMinCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `maxCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `minCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `occupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `piCoolingDemand`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  }  } = CoolingComponent; `flags`: \{ `cooling`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `localTemperatureCalibration`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>  }  } = NotLocalTemperatureNotExposedComponent; `flags`: \{ `localTemperatureNotExposed`: ``false`` = false }  }, \{ `component`: \{ `attributes`: \{ `unoccupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\>  }  } = CoolingAndOccupancyComponent; `flags`: \{ `cooling`: ``true`` = true; `occupancy`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `unoccupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\>  }  } = HeatingAndOccupancyComponent; `flags`: \{ `heating`: ``true`` = true; `occupancy`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `minSetpointDeadBand`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `thermostatRunningMode`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`ThermostatRunningMode`](../enums/cluster_export.Thermostat.ThermostatRunningMode.md), `any`\>  }  } = AutoModeComponent; `flags`: \{ `autoMode`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfDailyTransitions`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `numberOfWeeklyTransitions`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `startOfWeek`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`StartOfWeek`](../enums/cluster_export.Thermostat.StartOfWeek.md), `any`\>  } ; `commands`: \{ `clearWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `getWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `daysToReturn`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `modeToReturn`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `dayOfWeekForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `modeForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `numberOfTransitionsForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `transitions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `any`\> ; `setWeeklySchedule`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `dayOfWeekForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `modeForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `numberOfTransitionsForSequence`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `transitions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = ScheduleConfigurationComponent; `flags`: \{ `scheduleConfiguration`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `occupiedSetback`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `occupiedSetbackMax`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `occupiedSetbackMin`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = SetbackComponent; `flags`: \{ `setback`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `unoccupiedSetback`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `unoccupiedSetbackMax`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `unoccupiedSetbackMin`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = SetbackAndOccupancyComponent; `flags`: \{ `occupancy`: ``true`` = true; `setback`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `autoMode`: ``true`` = true; `heating`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `autoMode`: ``true`` = true; `cooling`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `cooling`: ``false`` = false; `heating`: ``false`` = false }  }] ; `features`: \{ `autoMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `cooling`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `heating`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `localTemperatureNotExposed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `occupancy`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `scheduleConfiguration`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `setback`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``513`` = 0x201; `name`: ``"Thermostat"`` = "Thermostat"; `revision`: ``6`` = 6 }\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`ThermostatInterface`](../modules/behavior_definitions_thermostat_export.md#thermostatinterface)\>\>

#### Inherited from

ThermostatBehavior.defaults

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:202](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L202)

___

### dependencies

▪ `Static` `Optional` `Readonly` **dependencies**: `Iterable`\<[`Type`](../interfaces/behavior_export.Behavior.Type.md)\>

#### Inherited from

ThermostatBehavior.dependencies

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:204](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L204)

___

### early

▪ `Static` `Readonly` **early**: `boolean`

#### Inherited from

ThermostatBehavior.early

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

___

### id

▪ `Static` `Readonly` **id**: ``"thermostat"``

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

ThermostatBehavior.id

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:188](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L188)

___

### name

▪ `Static` `Readonly` **name**: `string`

#### Inherited from

ThermostatBehavior.name

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:183](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L183)

___

### schema

▪ `Static` `Optional` `Readonly` **schema**: [`Schema`](../modules/behavior_cluster_export._internal_.md#schema)

#### Inherited from

ThermostatBehavior.schema

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:200](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L200)

___

### supervisor

▪ `Static` `Readonly` **supervisor**: [`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

#### Inherited from

ThermostatBehavior.supervisor

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

ThermostatBehavior.supports

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

[ThermostatBehavior](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md).[[asyncDispose]](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md#[asyncdispose])

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

[ThermostatBehavior](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md).[asAdmin](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md#asadmin)

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

[ThermostatBehavior](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md).[callback](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md#callback)

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

[ThermostatBehavior](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md).[getRelayStatusLog](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md#getrelaystatuslog)

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

[ThermostatBehavior](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md).[initialize](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md#initialize)

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

[ThermostatBehavior](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md).[reactTo](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md#reactto)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L212)

___

### setpointRaiseLower

▸ **setpointRaiseLower**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `amount`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `mode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`SetpointAdjustMode`](../enums/cluster_export.Thermostat.SetpointAdjustMode.md)\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 4.3.8

#### Inherited from

[ThermostatBehavior](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md).[setpointRaiseLower](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md#setpointraiselower)

#### Defined in

[packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts#L38)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

[ThermostatBehavior](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md).[toString](../interfaces/behavior_definitions_thermostat_export.ThermostatBehavior-1.md#tostring)

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

ThermostatBehavior.alter

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

ThermostatBehavior.enable

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

ThermostatBehavior.for

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

ThermostatBehavior.set

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

ThermostatBehavior.with

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)
