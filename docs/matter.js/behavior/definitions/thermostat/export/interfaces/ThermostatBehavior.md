[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/definitions/thermostat/export](../README.md) / ThermostatBehavior

# Interface: ThermostatBehavior

## Extends

- [`ThermostatBehaviorType`](../-internal-/README.md#thermostatbehaviortype)

## Extended by

- [`ThermostatServer`](../classes/ThermostatServer.md)

## Properties

### #agent

> `private` **#agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

`ThermostatBehaviorType.#agent`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L51)

***

### \[reference\]

> **\[reference\]**: [`Datasource`](../../../../cluster/export/-internal-/interfaces/Datasource.md)\<[`StateType`](../../../../cluster/export/-internal-/interfaces/StateType.md)\>

#### Inherited from

`ThermostatBehaviorType.[reference]`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L274)

***

### agent

> **agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

`ThermostatBehaviorType.agent`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L80)

***

### cluster

> **cluster**: `never`

The implemented cluster.

#### Inherited from

`ThermostatBehaviorType.cluster`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

***

### context

> **context**: [`ActionContext`](../../../../cluster/export/-internal-/interfaces/ActionContext.md)

#### Inherited from

`ThermostatBehaviorType.context`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L94)

***

### endpoint

> **endpoint**: [`Endpoint`](../../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../cluster/export/-internal-/interfaces/Empty.md)\>

#### Inherited from

`ThermostatBehaviorType.endpoint`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L87)

***

### events

> `readonly` **events**: [`EventEmitter`](../../../../../util/export/classes/EventEmitter.md) & `Omit`\<[`ClusterEvents`](../../../../cluster/export/README.md#clustereventsclustertbaset)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md)\>, `never`\> & `object` & `object` & `object` & `object` & `object` & `object`

Access the behavior's events.

#### Type declaration

##### controlSequenceOfOperation$Changing

> **controlSequenceOfOperation$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`WritableAttribute`](../../../../../cluster/export/interfaces/WritableAttribute.md)\<[`ControlSequenceOfOperation`](../../../../../cluster/export/namespaces/Thermostat/enumerations/ControlSequenceOfOperation.md), `any`\>\>

##### localTemperature$Changing

> **localTemperature$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`null` \| `number`, `any`\>\>

##### systemMode$Changing

> **systemMode$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`WritableAttribute`](../../../../../cluster/export/interfaces/WritableAttribute.md)\<[`SystemMode`](../../../../../cluster/export/namespaces/Thermostat/enumerations/SystemMode.md), `any`\>\>

#### Type declaration

##### acCapacity$Changing

> **acCapacity$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### acCapacityFormat$Changing

> **acCapacityFormat$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<[`BtUh`](../../../../../cluster/export/namespaces/Thermostat/enumerations/AcCapacityFormat.md#btuh), `any`\>\>

##### acCoilTemperature$Changing

> **acCoilTemperature$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>\>

##### acCompressorType$Changing

> **acCompressorType$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<[`AcCompressorType`](../../../../../cluster/export/namespaces/Thermostat/enumerations/AcCompressorType.md), `any`\>\>

##### acErrorCode$Changing

> **acErrorCode$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

##### acLouverPosition$Changing

> **acLouverPosition$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<[`AcLouverPosition`](../../../../../cluster/export/namespaces/Thermostat/enumerations/AcLouverPosition.md), `any`\>\>

##### acRefrigerantType$Changing

> **acRefrigerantType$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<[`AcRefrigerantType`](../../../../../cluster/export/namespaces/Thermostat/enumerations/AcRefrigerantType.md), `any`\>\>

##### acType$Changing

> **acType$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<[`AcType`](../../../../../cluster/export/namespaces/Thermostat/enumerations/AcType.md), `any`\>\>

##### alarmMask$Changing

> **alarmMask$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

##### emergencyHeatDelta$Changing

> **emergencyHeatDelta$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### outdoorTemperature$Changing

> **outdoorTemperature$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>\>

##### remoteSensing$Changing

> **remoteSensing$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

##### setpointChangeAmount$Changing

> **setpointChangeAmount$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>\>

##### setpointChangeSource$Changing

> **setpointChangeSource$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<[`SetpointChangeSource`](../../../../../cluster/export/namespaces/Thermostat/enumerations/SetpointChangeSource.md), `any`\>\>

##### setpointChangeSourceTimestamp$Changing

> **setpointChangeSourceTimestamp$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`number`, `any`\>\>

##### temperatureSetpointHold$Changing

> **temperatureSetpointHold$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<[`TemperatureSetpointHold`](../../../../../cluster/export/namespaces/Thermostat/enumerations/TemperatureSetpointHold.md), `any`\>\>

##### temperatureSetpointHoldDuration$Changing

> **temperatureSetpointHoldDuration$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>\>

##### thermostatProgrammingOperationMode$Changing

> **thermostatProgrammingOperationMode$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

##### thermostatRunningState$Changing

> **thermostatRunningState$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

#### Type declaration

##### controlSequenceOfOperation$Changed

> **controlSequenceOfOperation$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`WritableAttribute`](../../../../../cluster/export/interfaces/WritableAttribute.md)\<[`ControlSequenceOfOperation`](../../../../../cluster/export/namespaces/Thermostat/enumerations/ControlSequenceOfOperation.md), `any`\>\>

##### localTemperature$Changed

> **localTemperature$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`null` \| `number`, `any`\>\>

##### systemMode$Changed

> **systemMode$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`WritableAttribute`](../../../../../cluster/export/interfaces/WritableAttribute.md)\<[`SystemMode`](../../../../../cluster/export/namespaces/Thermostat/enumerations/SystemMode.md), `any`\>\>

#### Type declaration

##### acCapacity$Changed

> **acCapacity$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### acCapacityFormat$Changed

> **acCapacityFormat$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<[`BtUh`](../../../../../cluster/export/namespaces/Thermostat/enumerations/AcCapacityFormat.md#btuh), `any`\>\>

##### acCoilTemperature$Changed

> **acCoilTemperature$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>\>

##### acCompressorType$Changed

> **acCompressorType$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<[`AcCompressorType`](../../../../../cluster/export/namespaces/Thermostat/enumerations/AcCompressorType.md), `any`\>\>

##### acErrorCode$Changed

> **acErrorCode$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

##### acLouverPosition$Changed

> **acLouverPosition$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<[`AcLouverPosition`](../../../../../cluster/export/namespaces/Thermostat/enumerations/AcLouverPosition.md), `any`\>\>

##### acRefrigerantType$Changed

> **acRefrigerantType$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<[`AcRefrigerantType`](../../../../../cluster/export/namespaces/Thermostat/enumerations/AcRefrigerantType.md), `any`\>\>

##### acType$Changed

> **acType$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<[`AcType`](../../../../../cluster/export/namespaces/Thermostat/enumerations/AcType.md), `any`\>\>

##### alarmMask$Changed

> **alarmMask$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

##### emergencyHeatDelta$Changed

> **emergencyHeatDelta$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>\>

##### outdoorTemperature$Changed

> **outdoorTemperature$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>\>

##### remoteSensing$Changed

> **remoteSensing$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

##### setpointChangeAmount$Changed

> **setpointChangeAmount$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>\>

##### setpointChangeSource$Changed

> **setpointChangeSource$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<[`SetpointChangeSource`](../../../../../cluster/export/namespaces/Thermostat/enumerations/SetpointChangeSource.md), `any`\>\>

##### setpointChangeSourceTimestamp$Changed

> **setpointChangeSourceTimestamp$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`number`, `any`\>\>

##### temperatureSetpointHold$Changed

> **temperatureSetpointHold$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<[`TemperatureSetpointHold`](../../../../../cluster/export/namespaces/Thermostat/enumerations/TemperatureSetpointHold.md), `any`\>\>

##### temperatureSetpointHoldDuration$Changed

> **temperatureSetpointHoldDuration$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>\>

##### thermostatProgrammingOperationMode$Changed

> **thermostatProgrammingOperationMode$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

##### thermostatRunningState$Changed

> **thermostatRunningState$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

#### Inherited from

`ThermostatBehaviorType.events`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L145)

***

### features

> **features**: `object`

Supported features as a flag object.

#### Inherited from

`ThermostatBehaviorType.features`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

***

### session

> **session**: [`SecureSession`](../../../../../session/export/classes/SecureSession.md)\<[`MatterDevice`](../../../../cluster/export/-internal-/classes/MatterDevice.md)\>

#### Inherited from

`ThermostatBehaviorType.session`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L101)

***

### state

> `readonly` **state**: `Omit`\<[`Type`](../../../../cluster/export/namespaces/ClusterState/README.md#typecb)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md)\>, `never`\> & `object` & `object` & `object` & `object`

Access the behavior's state.

#### Type declaration

##### controlSequenceOfOperation

> **controlSequenceOfOperation**: [`ControlSequenceOfOperation`](../../../../../cluster/export/namespaces/Thermostat/enumerations/ControlSequenceOfOperation.md)

This attribute specifies the overall operating environment of the thermostat, and thus the possible
system modes that the thermostat can operate in. It shall be set to one of the following values.

Table 73. ControlSequenceOfOperation Values

NOTE

CoolingAndHeating

A thermostat indicating it supports CoolingAndHeating (or CoolingAndHeatingWithReheat) SHOULD be able to
request heating or cooling on demand and will usually support the Auto SystemMode.

Systems which support cooling or heating, requiring external intervention to change modes or where the
whole building must be in the same mode, SHOULD report CoolingOnly or HeatingOnly based on the current
capability.

###### See

MatterSpecification.v11.Cluster § 4.3.7.23

##### localTemperature

> **localTemperature**: `null` \| `number`

This attribute indicates the current LocalTemperature value, when available. The value may be local, or
remote, depending on the value of the RemoteSensing attribute when supported.

  • If the LTNE feature is not supported:

    ◦ If the temperature measurement is invalid or currently unavailable, the attribute shall report
      null.

    ◦ If the temperature measurement is valid, the attribute shall report that value.

  • Otherwise, if the LTNE feature is supported, there is no feedback externally available for the
    LocalTemperature value. In that case, the LocalTemperature attribute shall always report null.

###### See

MatterSpecification.v11.Cluster § 4.3.7.2

##### systemMode

> **systemMode**: [`SystemMode`](../../../../../cluster/export/namespaces/Thermostat/enumerations/SystemMode.md)

This attribute specifies the current operating mode of the thermostat, It shall be set to one of the
following values, as limited by the ControlSequenceOfOperation Attribute.

NOTE It is not mandatory to support all values.

Table 75. Interpretation of Heat, Cool and Auto SystemMode Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.24

#### Type declaration

##### acCapacity?

> `optional` **acCapacity**: `number`

This attribute indicates capacity of Mini Split AC in terms of the format defined by the
ACCapacityFormat attribute

###### See

MatterSpecification.v11.Cluster § 4.3.7.45

##### acCapacityFormat?

> `optional` **acCapacityFormat**: [`BtUh`](../../../../../cluster/export/namespaces/Thermostat/enumerations/AcCapacityFormat.md#btuh)

This attribute specifies the format for the ACCapacity attribute.

Table 87. ACCapacity Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.51

##### acCoilTemperature?

> `optional` **acCoilTemperature**: `null` \| `number`

This attribute represents the temperature of the AC coil, as measured locally or remotely (over the
network).

###### See

MatterSpecification.v11.Cluster § 4.3.7.50

##### acCompressorType?

> `optional` **acCompressorType**: [`AcCompressorType`](../../../../../cluster/export/namespaces/Thermostat/enumerations/AcCompressorType.md)

This attribute indicates type of Compressor used within the Mini Split AC.

Table 84. ACCompressorType Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.47

##### acErrorCode?

> `optional` **acErrorCode**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

This attribute indicates the type of errors encountered within the Mini Split AC. Error values are
reported with four bytes values. Each bit within the four bytes indicates the unique error.

Table 85. ACErrorCode Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.48

###### Type declaration

###### coilSensorFail

> **coilSensorFail**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Indoor Coil Temperature Sensor Failure

###### compressorFail

> **compressorFail**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Compressor Failure or Refrigerant Leakage

###### fanFail

> **fanFail**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Fan Failure

###### outdoorSensorFail

> **outdoorSensorFail**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Outdoor Temperature Sensor Failure

###### roomSensorFail

> **roomSensorFail**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Room Temperature Sensor Failure

##### acLouverPosition?

> `optional` **acLouverPosition**: [`AcLouverPosition`](../../../../../cluster/export/namespaces/Thermostat/enumerations/AcLouverPosition.md)

This attribute indicates the position of Louver on the AC.

Table 86. ACLouverPosition Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.49

##### acRefrigerantType?

> `optional` **acRefrigerantType**: [`AcRefrigerantType`](../../../../../cluster/export/namespaces/Thermostat/enumerations/AcRefrigerantType.md)

This attribute indicates type of refrigerant used within the Mini Split AC.

Table 83. ACRefrigerantType Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.46

##### acType?

> `optional` **acType**: [`AcType`](../../../../../cluster/export/namespaces/Thermostat/enumerations/AcType.md)

This attribute indicates the type of Mini Split ACType of Mini Split AC is defined depending on how
Cooling and Heating condition is achieved by Mini Split AC.

Table 82. ACType Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.44

##### alarmMask?

> `optional` **alarmMask**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

This attribute specifies whether each of the alarms listed below is enabled. When the bit number
corresponding to the alarm code is set to 1, the alarm is enabled, else it is disabled. Bits not
corresponding to a code in the table are reserved.

When the Alarms cluster is implemented on a device, and one of the alarm conditions included in this
table occurs, an alarm notification is generated, with the alarm code field set as listed in the table.

Table 76. Alarm Codes

###### See

MatterSpecification.v11.Cluster § 4.3.7.25

###### Type declaration

###### hardwareFailure

> **hardwareFailure**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

###### initializationFailure

> **initializationFailure**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

###### selfCalibrationFailure

> **selfCalibrationFailure**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

##### emergencyHeatDelta?

> `optional` **emergencyHeatDelta**: `number`

This attribute specifies the delta between the LocalTemperature Value and the OccupiedHeatingSetpoint or
UnoccupiedHeatingSetpoint attributes at which the Thermostat server will operate in emergency heat mode.

If the difference between LocalTemperature Value and Un/OccupiedHeatingSetpoint is greater than or equal
to the EmergencyHeatDelta and the Thermostat server’s SystemMode attribute is in a heating-related mode,
then the Thermostat server shall immediately switch to the SystemMode attribute value that provides the
highest stage of heating (e.g., emergency heat) and continue operating in that running state until the
OccupiedHeatingSetpoint value is reached. For example:

  • LocalTemperature = 10.0°C

  • OccupiedHeatingSetpoint = 16.0°C

  • EmergencyHeatDelta = 2.0°C

⇒ OccupiedHeatingSetpoint - LocalTemperature ≥? EmergencyHeatDelta

⇒ 16°C - 10°C ≥? 2°C

⇒ TRUE >>> Thermostat server changes its SystemMode to operate in 2nd stage or emergency heat mode

The purpose of this attribute is to provide Thermostat clients the ability to configure rapid heating
when a setpoint is of a specified amount greater than the measured temperature. This allows the heated
space to be quickly heated to the desired level set by the user.

###### See

MatterSpecification.v11.Cluster § 4.3.7.43

##### outdoorTemperature?

> `optional` **outdoorTemperature**: `null` \| `number`

This attribute represents the outdoor temperature, as measured locally or remotely (over the network).

###### See

MatterSpecification.v11.Cluster § 4.3.7.3

##### remoteSensing?

> `optional` **remoteSensing**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

This attribute indicates when the local temperature, outdoor temperature and occupancy are being sensed
by remote networked sensors, rather than internal sensors.

A bit set to 1 indicates remote sensing of the relevant value.

Table 72. RemoteSensing Attribute Bit Values

If the LTNE feature is present in the server, the LocalTemperature RemoteSensing bit value shall always
report a value of 0.

If the LocalTemperature RemoteSensing bit is written with a value of 1 when the LTNE feature is present,
the write shall fail and the server shall report a CONSTRAINT_ERROR.

###### See

MatterSpecification.v11.Cluster § 4.3.7.22

###### Type declaration

###### localTemperature

> **localTemperature**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

When set, LocalTemperature Value is derived from a remote node

###### occupancy

> **occupancy**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

When set, Occupancy is derived from a remote node

###### outdoorTemperature

> **outdoorTemperature**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

When set, OutdoorTemperature is derived from a remote node

##### setpointChangeAmount?

> `optional` **setpointChangeAmount**: `null` \| `number`

This attribute specifies the delta between the current active OccupiedCoolingSetpoint or
OccupiedHeatingSetpoint and the previous active setpoint. This attribute is meant to accompany the
SetpointChangeSource attribute; devices implementing SetpointChangeAmount SHOULD also implement
SetpointChangeSource.

The null value indicates that the previous setpoint was unknown.

###### See

MatterSpecification.v11.Cluster § 4.3.7.35

##### setpointChangeSource?

> `optional` **setpointChangeSource**: [`SetpointChangeSource`](../../../../../cluster/export/namespaces/Thermostat/enumerations/SetpointChangeSource.md)

This attribute specifies the source of the current active OccupiedCoolingSetpoint or
OccupiedHeatingSetpoint (i.e., who or what determined the current setpoint).

This attribute enables service providers to determine whether changes to setpoints were initiated due to
occupant comfort, scheduled programming or some other source (e.g., electric utility or other service
provider). Because automation services may initiate frequent setpoint changes, this attribute clearly
differentiates the source of setpoint changes made at the thermostat.

Table 81. SetpointChangeSource Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.34

##### setpointChangeSourceTimestamp?

> `optional` **setpointChangeSourceTimestamp**: `number`

This attribute specifies the time in UTC at which the SetpointChangeSourceAmount attribute change was
recorded.

###### See

MatterSpecification.v11.Cluster § 4.3.7.36

##### temperatureSetpointHold?

> `optional` **temperatureSetpointHold**: [`TemperatureSetpointHold`](../../../../../cluster/export/namespaces/Thermostat/enumerations/TemperatureSetpointHold.md)

This attribute specifies the temperature hold status on the thermostat. If hold status is on, the
thermostat SHOULD maintain the temperature set point for the current mode until a system mode change. If
hold status is off, the thermostat SHOULD follow the setpoint transitions specified by its internal
scheduling program. If the thermostat supports setpoint hold for a specific duration, it SHOULD also
implement the TemperatureSetpointHoldDuration attribute.

Table 78. TemperatureSetpointHold Values

###### See

MatterSpecification.v11.Cluster § 4.3.7.30

##### temperatureSetpointHoldDuration?

> `optional` **temperatureSetpointHoldDuration**: `null` \| `number`

This attribute sets the period in minutes for which a setpoint hold is active. Thermostats that support
hold for a specified duration SHOULD implement this attribute. The null value indicates the field is
unused. All other values are reserved.

###### See

MatterSpecification.v11.Cluster § 4.3.7.31

##### thermostatProgrammingOperationMode?

> `optional` **thermostatProgrammingOperationMode**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

This attribute determines the operational state of the thermostat’s programming. The thermostat shall
modify its programming operation when this attribute is modified by a client and update this attribute
when its programming operation is modified locally by a user. The thermostat may support more than one
active ThermostatProgrammingOperationMode. For example, the thermostat may operate simultaneously in
Schedule Programming Mode and Recovery Mode.

Thermostats which contain a schedule may use this attribute to control how that schedule is used, even
if they do not support the Schedule Configuration feature.

Table 79. ThermostatProgrammingOperationMode Attribute Values

When ScheduleActive is not set, the setpoint is altered only by manual up/down changes at the thermostat
or remotely, not by internal schedule programming.

NOTE Modifying the ScheduleActive bit does not clear or delete previous weekly schedule programming
configurations.

###### See

MatterSpecification.v11.Cluster § 4.3.7.32

###### Type declaration

###### autoRecovery

> **autoRecovery**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Auto/recovery mode

###### economy

> **economy**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Economy/EnergyStar mode

###### scheduleActive

> **scheduleActive**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Schedule programming mode. This enables any programmed weekly schedule configurations.

##### thermostatRunningState?

> `optional` **thermostatRunningState**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

This attribute represents the current relay state of the heat, cool, and fan relays.

Table 80. HVAC Relay State Values

Unimplemented outputs shall be treated as if they were Off.

###### See

MatterSpecification.v11.Cluster § 4.3.7.33

###### Type declaration

###### cool

> **cool**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Cool State On

###### coolStage2

> **coolStage2**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Cool 2nd Stage State On

###### fan

> **fan**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Fan State On

###### fanStage2

> **fanStage2**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Fan 2nd Stage State On

###### fanStage3

> **fanStage3**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Fan 3rd Stage Stage On

###### heat

> **heat**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Heat State On

###### heatStage2

> **heatStage2**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Heat 2nd Stage State On

#### Inherited from

`ThermostatBehaviorType.state`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:140](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L140)

## Methods

### `[asyncDispose]`()

> **\[asyncDispose\]**(): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`ThermostatBehaviorType.[asyncDispose]`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:198](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L198)

***

### asAdmin()

> **asAdmin**(`fn`): `void`

Execute logic with elevated privileges.

The provided function executes with privileges escalated to offline mode.  This is not commonly necessary.

Elevated logic effectively ignores ACLs so should be used with care.

Note that interactions with the behavior will remain elevated until the synchronous completion of this call.
You should only elevate privileges for synchronous logic.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `fn` | () => `void` | the elevated logic |

#### Returns

`void`

#### Inherited from

`ThermostatBehaviorType.asAdmin`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:125](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L125)

***

### assertAttributeEnabled()

> **assertAttributeEnabled**\<`This`, `K`\>(`this`, `attributeName`): `void`

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Behavior`](../../../../export/classes/Behavior.md) |
| `K` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `attributeName` | `K` |

#### Returns

`void`

#### Inherited from

`ThermostatBehaviorType.assertAttributeEnabled`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:183](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L183)

***

### callback()

> `protected` **callback**\<`A`, `R`\>(`reactor`, `options`?): (...`args`) => `undefined` \| `R`

Create a generic callback function that has the same properties as a [Reactor](../../../../export/README.md#reactortr).

Like a reactor, the callback's "this" will be bound to an active Behavior instance.
Because of this: The reactor MUST be a real JS function - arrow functions will not work!

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* `any`[] |
| `R` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reactor` | [`Reactor`](../../../../export/README.md#reactortr)\<`A`, `R`\> |
| `options`? | [`Options`](../../../../export/namespaces/Reactor/interfaces/Options.md) |

#### Returns

`Function`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | `A` |

##### Returns

`undefined` \| `R`

#### Inherited from

`ThermostatBehaviorType.callback`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L226)

***

### getRelayStatusLog()

> **getRelayStatusLog**(): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`ThermostatBehaviorType.getRelayStatusLog`

#### See

MatterSpecification.v11.Cluster § 4.3.8

#### Source

[packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts#L43)

***

### initialize()

> **initialize**(`_options`?): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Behaviors are ephemeral and should not perform initialization in their constructor.  They can override this
method instead.

This method may be synchronous or asyncronous.  If asynchronous, the behavior will not be available for external
use until initialization completes.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_options`? | `object` |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`ThermostatBehaviorType.initialize`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:192](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L192)

***

### reactTo()

> `protected` **reactTo**\<`O`\>(`observable`, `reactor`, `options`?): `void`

Install a [Reactor](../../../../export/README.md#reactortr).

Important: The reactor MUST be a real JS function - arrow functions will not work!

#### Type parameters

| Type parameter |
| :------ |
| `O` *extends* [`Observable`](../../../../../util/export/interfaces/Observable.md)\<`any`[], `any`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `observable` | `O` |
| `reactor` | [`Reactor`](../../../../export/README.md#reactortr)\<`Parameters`\<`O`\[`"emit"`\]\>, `ReturnType`\<`O`\[`"emit"`\]\>\> |
| `options`? | [`Options`](../../../../export/namespaces/Reactor/interfaces/Options.md) |

#### Returns

`void`

#### Inherited from

`ThermostatBehaviorType.reactTo`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L212)

***

### requireAttributeEnabled()

> **requireAttributeEnabled**\<`This`, `K`\>(`this`, `attributeName`): `Exclude`\<`This`\[`"state"`\]\[`K`\], `undefined`\>

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Behavior`](../../../../export/classes/Behavior.md) |
| `K` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `attributeName` | `K` |

#### Returns

`Exclude`\<`This`\[`"state"`\]\[`K`\], `undefined`\>

#### Inherited from

`ThermostatBehaviorType.requireAttributeEnabled`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:171](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L171)

***

### setpointRaiseLower()

> **setpointRaiseLower**(`request`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`ThermostatBehaviorType.setpointRaiseLower`

#### See

MatterSpecification.v11.Cluster § 4.3.8

#### Source

[packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/thermostat/ThermostatInterface.ts#L38)

***

### toString()

> **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

`ThermostatBehaviorType.toString`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L203)
