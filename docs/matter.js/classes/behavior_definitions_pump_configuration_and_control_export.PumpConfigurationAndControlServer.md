[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/pump-configuration-and-control/export](../modules/behavior_definitions_pump_configuration_and_control_export.md) / PumpConfigurationAndControlServer

# Class: PumpConfigurationAndControlServer

[behavior/definitions/pump-configuration-and-control/export](../modules/behavior_definitions_pump_configuration_and_control_export.md).PumpConfigurationAndControlServer

This is the default server implementation of [PumpConfigurationAndControlBehavior](../modules/behavior_definitions_pump_configuration_and_control_export.md#pumpconfigurationandcontrolbehavior).

The Matter specification requires the PumpConfigurationAndControl cluster to support features we do not enable by
default. You should use [PumpConfigurationAndControlServer.with](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#with) to specialize the class for the features your
implementation supports.

## Hierarchy

- [`PumpConfigurationAndControlBehavior`](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md)

  ↳ **`PumpConfigurationAndControlServer`**

## Table of contents

### Constructors

- [constructor](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#constructor)

### Properties

- [#agent](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md##agent)
- [[reference]](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#[reference])
- [agent](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#agent)
- [cluster](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#cluster)
- [context](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#context)
- [endpoint](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#endpoint)
- [events](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#events)
- [features](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#features)
- [session](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#session)
- [state](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#state)
- [Events](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#events-1)
- [ExtensionInterface](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#extensioninterface)
- [Interface](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#interface)
- [Internal](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#internal)
- [State](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#state-1)
- [cluster](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#cluster-1)
- [defaults](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#defaults)
- [dependencies](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#dependencies)
- [early](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#early)
- [id](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#id)
- [name](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#name)
- [schema](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#schema)
- [supervisor](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#supervisor)
- [supports](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#supports)

### Methods

- [[asyncDispose]](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#[asyncdispose])
- [asAdmin](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#asadmin)
- [assertAttributeEnabled](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#assertattributeenabled)
- [callback](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#callback)
- [initialize](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#initialize)
- [reactTo](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#reactto)
- [requireAttributeEnabled](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#requireattributeenabled)
- [toString](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#tostring)
- [alter](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#alter)
- [enable](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#enable)
- [for](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#for)
- [set](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#set)
- [with](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md#with)

## Constructors

### constructor

• **new PumpConfigurationAndControlServer**(`agent`, `backing`): [`PumpConfigurationAndControlServer`](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |
| `backing` | [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md) |

#### Returns

[`PumpConfigurationAndControlServer`](behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md)

#### Inherited from

PumpConfigurationAndControlBehavior.constructor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

[PumpConfigurationAndControlBehavior](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md).[#agent](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md##agent)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L51)

___

### [reference]

• **[reference]**: [`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

[PumpConfigurationAndControlBehavior](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md).[[reference]](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md#[reference])

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L274)

___

### agent

• **agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

[PumpConfigurationAndControlBehavior](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md).[agent](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md#agent)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L80)

___

### cluster

• **cluster**: `never`

The implemented cluster.

#### Inherited from

[PumpConfigurationAndControlBehavior](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md).[cluster](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md#cluster)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:306](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L306)

___

### context

• **context**: [`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

[PumpConfigurationAndControlBehavior](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md).[context](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md#context)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L94)

___

### endpoint

• **endpoint**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

[PumpConfigurationAndControlBehavior](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md).[endpoint](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md#endpoint)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L87)

___

### events

• `Readonly` **events**: [`EventEmitter`](util_export.EventEmitter-1.md) & `Omit`\<[`EventEmitter`](util_export.EventEmitter-1.md), `never`\> & \{ `capacity$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>\> ; `effectiveControlMode$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ControlMode`](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md), `any`\>\> ; `effectiveOperationMode$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`OperationMode`](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md), `any`\>\> ; `maxFlow$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `maxPressure$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `maxSpeed$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `operationMode$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`OperationMode`](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md), `any`\>\>  } & \{ `controlMode$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`ControlMode`](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md), `any`\>\> ; `lifetimeEnergyConsumed$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `lifetimeRunningHours$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `power$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\>\> ; `pumpStatus$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `deviceFault`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `localOverride`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteFlow`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remotePressure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `running`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `speedHigh`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `speedLow`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `supplyFault`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\> ; `speed$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\>\>  } & \{ `capacity$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>\> ; `effectiveControlMode$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ControlMode`](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md), `any`\>\> ; `effectiveOperationMode$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`OperationMode`](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md), `any`\>\> ; `maxFlow$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `maxPressure$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `maxSpeed$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>\> ; `operationMode$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`OperationMode`](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md), `any`\>\>  } & \{ `controlMode$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`ControlMode`](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md), `any`\>\> ; `lifetimeEnergyConsumed$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `lifetimeRunningHours$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\>\> ; `power$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\>\> ; `pumpStatus$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `deviceFault`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `localOverride`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteFlow`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remotePressure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `running`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `speedHigh`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `speedLow`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `supplyFault`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\> ; `speed$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\>\>  } & {} & \{ `airDetection?`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\>\> ; `dryRunning?`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\>\> ; `electronicFatalFailure?`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\>\> ; `electronicNonFatalFailure?`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\>\> ; `electronicTemperatureHigh?`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\>\> ; `generalFault?`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\>\> ; `leakage?`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\>\> ; `motorTemperatureHigh?`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\>\> ; `powerMissingPhase?`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\>\> ; `pumpBlocked?`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\>\> ; `pumpMotorFatalFailure?`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\>\> ; `sensorFailure?`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\>\> ; `supplyVoltageHigh?`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\>\> ; `supplyVoltageLow?`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\>\> ; `systemPressureHigh?`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\>\> ; `systemPressureLow?`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\>\> ; `turbineOperation?`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\>\>  }

Access the behavior's events.

#### Inherited from

[PumpConfigurationAndControlBehavior](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md).[events](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md#events)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L145)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:316](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L316)

___

### features

• **features**: `Object`

Supported features as a flag object.

#### Inherited from

[PumpConfigurationAndControlBehavior](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md).[features](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md#features)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

___

### session

• **session**: [`SecureSession`](session_export.SecureSession.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Inherited from

[PumpConfigurationAndControlBehavior](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md).[session](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md#session)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L101)

___

### state

• `Readonly` **state**: `Omit`\<{}, `never`\> & \{ `capacity`: ``null`` \| `number` ; `effectiveControlMode`: [`ControlMode`](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md) ; `effectiveOperationMode`: [`OperationMode`](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md) ; `operationMode`: [`OperationMode`](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md)  } & \{ `controlMode?`: [`ControlMode`](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md) ; `lifetimeEnergyConsumed?`: ``null`` \| `number` ; `lifetimeRunningHours?`: ``null`` \| `number` ; `power?`: ``null`` \| `number` ; `pumpStatus?`: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `deviceFault`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `localOverride`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteFlow`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remotePressure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `running`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `speedHigh`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `speedLow`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `supplyFault`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> ; `speed?`: ``null`` \| `number`  } & \{ `maxFlow`: ``null`` \| `number` ; `maxPressure`: ``null`` \| `number` ; `maxSpeed`: ``null`` \| `number`  } & {}

Access the behavior's state.

#### Inherited from

[PumpConfigurationAndControlBehavior](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md).[state](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md#state)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:140](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L140)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:311](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L311)

___

### Events

▪ `Static` `Readonly` **Events**: [`Type`](../modules/behavior_cluster_export.ClusterEvents.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `capacity`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `controlMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`ControlMode`](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveControlMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ControlMode`](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveOperationMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`OperationMode`](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `lifetimeEnergyConsumed`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lifetimeRunningHours`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `maxFlow`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxSpeed`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `operationMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`OperationMode`](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `power`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `pumpStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `deviceFault`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `localOverride`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteFlow`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remotePressure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `running`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `speedHigh`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `speedLow`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `supplyFault`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `speed`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\>  } ; `events`: \{ `airDetection`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `dryRunning`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `electronicFatalFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `electronicNonFatalFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `electronicTemperatureHigh`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `generalFault`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `leakage`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `motorTemperatureHigh`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `powerMissingPhase`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `pumpBlocked`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `pumpMotorFatalFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `sensorFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageHigh`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageLow`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureHigh`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureLow`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `turbineOperation`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `maxConstPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = ConstantPressureComponent; `flags`: \{ `constantPressure`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxCompPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstFlow`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstSpeed`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstTemp`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minCompPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstFlow`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstSpeed`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstTemp`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = AutomaticComponent; `flags`: \{ `automatic`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxCompPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minCompPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = CompensatedPressureComponent; `flags`: \{ `compensatedPressure`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxConstSpeed`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstSpeed`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = ConstantSpeedComponent; `flags`: \{ `constantSpeed`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxConstFlow`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstFlow`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = ConstantFlowComponent; `flags`: \{ `constantFlow`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxConstTemp`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstTemp`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = ConstantTemperatureComponent; `flags`: \{ `constantTemperature`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `compensatedPressure`: ``false`` = false; `constantFlow`: ``false`` = false; `constantPressure`: ``false`` = false; `constantSpeed`: ``false`` = false; `constantTemperature`: ``false`` = false }  }] ; `features`: \{ `automatic`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `compensatedPressure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `constantFlow`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `constantPressure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `constantSpeed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `constantTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `localOperation`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``512`` = 0x200; `name`: ``"PumpConfigurationAndControl"`` = "PumpConfigurationAndControl"; `revision`: ``4`` = 4 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>

#### Inherited from

PumpConfigurationAndControlBehavior.Events

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:215](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L215)

___

### ExtensionInterface

▪ `Static` `Readonly` **ExtensionInterface**: `Object`

#### Inherited from

PumpConfigurationAndControlBehavior.ExtensionInterface

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:226](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L226)

___

### Interface

▪ `Static` `Readonly` **Interface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | `never`[] |

#### Inherited from

PumpConfigurationAndControlBehavior.Interface

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:218](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L218)

___

### Internal

▪ `Static` `Readonly` **Internal**: () => {}

#### Type declaration

• **new Internal**(): `Object`

##### Returns

`Object`

#### Inherited from

PumpConfigurationAndControlBehavior.Internal

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:217](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L217)

___

### State

▪ `Static` `Readonly` **State**: () => [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `capacity`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `controlMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`ControlMode`](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveControlMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ControlMode`](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveOperationMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`OperationMode`](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `lifetimeEnergyConsumed`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lifetimeRunningHours`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `maxFlow`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxSpeed`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `operationMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`OperationMode`](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `power`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `pumpStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `deviceFault`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `localOverride`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteFlow`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remotePressure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `running`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `speedHigh`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `speedLow`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `supplyFault`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `speed`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\>  } ; `events`: \{ `airDetection`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `dryRunning`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `electronicFatalFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `electronicNonFatalFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `electronicTemperatureHigh`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `generalFault`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `leakage`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `motorTemperatureHigh`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `powerMissingPhase`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `pumpBlocked`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `pumpMotorFatalFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `sensorFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageHigh`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageLow`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureHigh`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureLow`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `turbineOperation`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `maxConstPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = ConstantPressureComponent; `flags`: \{ `constantPressure`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxCompPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstFlow`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstSpeed`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstTemp`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minCompPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstFlow`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstSpeed`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstTemp`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = AutomaticComponent; `flags`: \{ `automatic`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxCompPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minCompPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = CompensatedPressureComponent; `flags`: \{ `compensatedPressure`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxConstSpeed`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstSpeed`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = ConstantSpeedComponent; `flags`: \{ `constantSpeed`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxConstFlow`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstFlow`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = ConstantFlowComponent; `flags`: \{ `constantFlow`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxConstTemp`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstTemp`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = ConstantTemperatureComponent; `flags`: \{ `constantTemperature`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `compensatedPressure`: ``false`` = false; `constantFlow`: ``false`` = false; `constantPressure`: ``false`` = false; `constantSpeed`: ``false`` = false; `constantTemperature`: ``false`` = false }  }] ; `features`: \{ `automatic`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `compensatedPressure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `constantFlow`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `constantPressure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `constantSpeed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `constantTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `localOperation`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``512`` = 0x200; `name`: ``"PumpConfigurationAndControl"`` = "PumpConfigurationAndControl"; `revision`: ``4`` = 4 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>

#### Type declaration

• **new State**(): [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `capacity`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `controlMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`ControlMode`](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveControlMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ControlMode`](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveOperationMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`OperationMode`](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `lifetimeEnergyConsumed`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lifetimeRunningHours`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `maxFlow`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxSpeed`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `operationMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`OperationMode`](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `power`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `pumpStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `deviceFault`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `localOverride`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteFlow`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remotePressure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `running`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `speedHigh`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `speedLow`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `supplyFault`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `speed`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\>  } ; `events`: \{ `airDetection`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `dryRunning`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `electronicFatalFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `electronicNonFatalFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `electronicTemperatureHigh`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `generalFault`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `leakage`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `motorTemperatureHigh`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `powerMissingPhase`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `pumpBlocked`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `pumpMotorFatalFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `sensorFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageHigh`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageLow`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureHigh`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureLow`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `turbineOperation`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `maxConstPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = ConstantPressureComponent; `flags`: \{ `constantPressure`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxCompPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstFlow`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstSpeed`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstTemp`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minCompPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstFlow`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstSpeed`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstTemp`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = AutomaticComponent; `flags`: \{ `automatic`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxCompPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minCompPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = CompensatedPressureComponent; `flags`: \{ `compensatedPressure`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxConstSpeed`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstSpeed`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = ConstantSpeedComponent; `flags`: \{ `constantSpeed`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxConstFlow`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstFlow`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = ConstantFlowComponent; `flags`: \{ `constantFlow`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxConstTemp`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstTemp`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = ConstantTemperatureComponent; `flags`: \{ `constantTemperature`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `compensatedPressure`: ``false`` = false; `constantFlow`: ``false`` = false; `constantPressure`: ``false`` = false; `constantSpeed`: ``false`` = false; `constantTemperature`: ``false`` = false }  }] ; `features`: \{ `automatic`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `compensatedPressure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `constantFlow`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `constantPressure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `constantSpeed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `constantTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `localOperation`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``512`` = 0x200; `name`: ``"PumpConfigurationAndControl"`` = "PumpConfigurationAndControl"; `revision`: ``4`` = 4 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>

##### Returns

[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `capacity`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `controlMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`ControlMode`](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveControlMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ControlMode`](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveOperationMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`OperationMode`](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `lifetimeEnergyConsumed`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lifetimeRunningHours`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `maxFlow`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxSpeed`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `operationMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`OperationMode`](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `power`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `pumpStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `deviceFault`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `localOverride`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteFlow`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remotePressure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `running`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `speedHigh`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `speedLow`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `supplyFault`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `speed`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\>  } ; `events`: \{ `airDetection`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `dryRunning`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `electronicFatalFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `electronicNonFatalFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `electronicTemperatureHigh`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `generalFault`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `leakage`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `motorTemperatureHigh`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `powerMissingPhase`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `pumpBlocked`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `pumpMotorFatalFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `sensorFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageHigh`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageLow`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureHigh`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureLow`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `turbineOperation`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `maxConstPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = ConstantPressureComponent; `flags`: \{ `constantPressure`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxCompPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstFlow`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstSpeed`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstTemp`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minCompPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstFlow`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstSpeed`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstTemp`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = AutomaticComponent; `flags`: \{ `automatic`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxCompPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minCompPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = CompensatedPressureComponent; `flags`: \{ `compensatedPressure`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxConstSpeed`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstSpeed`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = ConstantSpeedComponent; `flags`: \{ `constantSpeed`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxConstFlow`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstFlow`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = ConstantFlowComponent; `flags`: \{ `constantFlow`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxConstTemp`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstTemp`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = ConstantTemperatureComponent; `flags`: \{ `constantTemperature`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `compensatedPressure`: ``false`` = false; `constantFlow`: ``false`` = false; `constantPressure`: ``false`` = false; `constantSpeed`: ``false`` = false; `constantTemperature`: ``false`` = false }  }] ; `features`: \{ `automatic`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `compensatedPressure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `constantFlow`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `constantPressure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `constantSpeed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `constantTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `localOperation`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``512`` = 0x200; `name`: ``"PumpConfigurationAndControl"`` = "PumpConfigurationAndControl"; `revision`: ``4`` = 4 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>

#### Inherited from

PumpConfigurationAndControlBehavior.State

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:216](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L216)

___

### cluster

▪ `Static` `Readonly` **cluster**: [`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `capacity`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `controlMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`ControlMode`](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveControlMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ControlMode`](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveOperationMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`OperationMode`](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `lifetimeEnergyConsumed`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lifetimeRunningHours`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `maxFlow`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxSpeed`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `operationMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`OperationMode`](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `power`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `pumpStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `deviceFault`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `localOverride`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteFlow`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remotePressure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `running`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `speedHigh`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `speedLow`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `supplyFault`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `speed`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\>  } ; `events`: \{ `airDetection`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `dryRunning`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `electronicFatalFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `electronicNonFatalFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `electronicTemperatureHigh`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `generalFault`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `leakage`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `motorTemperatureHigh`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `powerMissingPhase`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `pumpBlocked`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `pumpMotorFatalFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `sensorFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageHigh`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageLow`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureHigh`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureLow`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `turbineOperation`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `maxConstPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = ConstantPressureComponent; `flags`: \{ `constantPressure`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxCompPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstFlow`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstSpeed`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstTemp`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minCompPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstFlow`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstSpeed`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstTemp`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = AutomaticComponent; `flags`: \{ `automatic`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxCompPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minCompPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = CompensatedPressureComponent; `flags`: \{ `compensatedPressure`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxConstSpeed`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstSpeed`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = ConstantSpeedComponent; `flags`: \{ `constantSpeed`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxConstFlow`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstFlow`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = ConstantFlowComponent; `flags`: \{ `constantFlow`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxConstTemp`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstTemp`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = ConstantTemperatureComponent; `flags`: \{ `constantTemperature`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `compensatedPressure`: ``false`` = false; `constantFlow`: ``false`` = false; `constantPressure`: ``false`` = false; `constantSpeed`: ``false`` = false; `constantTemperature`: ``false`` = false }  }] ; `features`: \{ `automatic`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `compensatedPressure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `constantFlow`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `constantPressure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `constantSpeed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `constantTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `localOperation`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``512`` = 0x200; `name`: ``"PumpConfigurationAndControl"`` = "PumpConfigurationAndControl"; `revision`: ``4`` = 4 }\>

Base cluster state include all attribute values but may be extended by subclasses.

#### Inherited from

PumpConfigurationAndControlBehavior.cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:213](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L213)

___

### defaults

▪ `Static` `Readonly` **defaults**: [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `capacity`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `controlMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`ControlMode`](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveControlMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ControlMode`](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveOperationMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`OperationMode`](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `lifetimeEnergyConsumed`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lifetimeRunningHours`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `maxFlow`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxSpeed`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `operationMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`OperationMode`](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `power`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `pumpStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `deviceFault`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `localOverride`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteFlow`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remotePressure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `running`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `speedHigh`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `speedLow`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `supplyFault`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `speed`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\>  } ; `events`: \{ `airDetection`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `dryRunning`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `electronicFatalFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `electronicNonFatalFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `electronicTemperatureHigh`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `generalFault`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `leakage`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `motorTemperatureHigh`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `powerMissingPhase`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `pumpBlocked`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `pumpMotorFatalFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `sensorFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageHigh`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageLow`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureHigh`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureLow`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `turbineOperation`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `maxConstPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = ConstantPressureComponent; `flags`: \{ `constantPressure`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxCompPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstFlow`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstSpeed`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstTemp`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minCompPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstFlow`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstSpeed`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstTemp`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = AutomaticComponent; `flags`: \{ `automatic`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxCompPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minCompPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = CompensatedPressureComponent; `flags`: \{ `compensatedPressure`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxConstSpeed`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstSpeed`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = ConstantSpeedComponent; `flags`: \{ `constantSpeed`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxConstFlow`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstFlow`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = ConstantFlowComponent; `flags`: \{ `constantFlow`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxConstTemp`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstTemp`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = ConstantTemperatureComponent; `flags`: \{ `constantTemperature`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `compensatedPressure`: ``false`` = false; `constantFlow`: ``false`` = false; `constantPressure`: ``false`` = false; `constantSpeed`: ``false`` = false; `constantTemperature`: ``false`` = false }  }] ; `features`: \{ `automatic`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `compensatedPressure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `constantFlow`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `constantPressure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `constantSpeed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `constantTemperature`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `localOperation`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``512`` = 0x200; `name`: ``"PumpConfigurationAndControl"`` = "PumpConfigurationAndControl"; `revision`: ``4`` = 4 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>

#### Inherited from

PumpConfigurationAndControlBehavior.defaults

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:222](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L222)

___

### dependencies

▪ `Static` `Optional` `Readonly` **dependencies**: `Iterable`\<[`Type`](../interfaces/behavior_export.Behavior.Type.md)\>

#### Inherited from

PumpConfigurationAndControlBehavior.dependencies

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:224](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L224)

___

### early

▪ `Static` `Readonly` **early**: `boolean`

#### Inherited from

PumpConfigurationAndControlBehavior.early

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:221](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L221)

___

### id

▪ `Static` `Readonly` **id**: ``"pumpConfigurationAndControl"``

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

PumpConfigurationAndControlBehavior.id

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:208](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L208)

___

### name

▪ `Static` `Readonly` **name**: `string`

#### Inherited from

PumpConfigurationAndControlBehavior.name

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:203](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L203)

___

### schema

▪ `Static` `Optional` `Readonly` **schema**: [`Schema`](../modules/behavior_cluster_export._internal_.md#schema)

#### Inherited from

PumpConfigurationAndControlBehavior.schema

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:220](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L220)

___

### supervisor

▪ `Static` `Readonly` **supervisor**: [`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

#### Inherited from

PumpConfigurationAndControlBehavior.supervisor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:223](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L223)

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

PumpConfigurationAndControlBehavior.supports

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)

## Methods

### [asyncDispose]

▸ **[asyncDispose]**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

[PumpConfigurationAndControlBehavior](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md).[[asyncDispose]](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md#[asyncdispose])

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:198](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L198)

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

[PumpConfigurationAndControlBehavior](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md).[asAdmin](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md#asadmin)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:125](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L125)

___

### assertAttributeEnabled

▸ **assertAttributeEnabled**\<`This`, `K`\>(`this`, `attributeName`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Behavior`](behavior_export.Behavior-1.md) |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `attributeName` | `K` |

#### Returns

`void`

#### Inherited from

[PumpConfigurationAndControlBehavior](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md).[assertAttributeEnabled](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md#assertattributeenabled)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:183](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L183)

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

[PumpConfigurationAndControlBehavior](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md).[callback](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md#callback)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L226)

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

[PumpConfigurationAndControlBehavior](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md).[initialize](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md#initialize)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:192](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L192)

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

[PumpConfigurationAndControlBehavior](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md).[reactTo](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md#reactto)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L212)

___

### requireAttributeEnabled

▸ **requireAttributeEnabled**\<`This`, `K`\>(`this`, `attributeName`): `Exclude`\<`This`[``"state"``][`K`], `undefined`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Behavior`](behavior_export.Behavior-1.md) |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `attributeName` | `K` |

#### Returns

`Exclude`\<`This`[``"state"``][`K`], `undefined`\>

#### Inherited from

[PumpConfigurationAndControlBehavior](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md).[requireAttributeEnabled](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md#requireattributeenabled)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:171](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L171)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

[PumpConfigurationAndControlBehavior](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md).[toString](../interfaces/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlBehavior-1.md#tostring)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/Behavior.ts#L203)

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

PumpConfigurationAndControlBehavior.alter

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:254](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L254)

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

PumpConfigurationAndControlBehavior.enable

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:264](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L264)

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

PumpConfigurationAndControlBehavior.for

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:240](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L240)

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

PumpConfigurationAndControlBehavior.set

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:262](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L262)

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

PumpConfigurationAndControlBehavior.with

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:246](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L246)
