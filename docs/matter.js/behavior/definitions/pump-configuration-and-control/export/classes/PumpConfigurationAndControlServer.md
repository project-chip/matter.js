[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/definitions/pump-configuration-and-control/export](../README.md) / PumpConfigurationAndControlServer

# Class: PumpConfigurationAndControlServer

This is the default server implementation of [PumpConfigurationAndControlBehavior](../README.md#pumpconfigurationandcontrolbehavior).

The Matter specification requires the PumpConfigurationAndControl cluster to support features we do not enable by
default. You should use [PumpConfigurationAndControlServer.with](PumpConfigurationAndControlServer.md#with) to specialize the class for the features your
implementation supports.

## Extends

- [`PumpConfigurationAndControlBehavior`](../interfaces/PumpConfigurationAndControlBehavior.md)

## Constructors

### new PumpConfigurationAndControlServer()

> **new PumpConfigurationAndControlServer**(`agent`, `backing`): [`PumpConfigurationAndControlServer`](PumpConfigurationAndControlServer.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `agent` | [`Agent`](../../../../../endpoint/export/classes/Agent.md) |
| `backing` | [`BehaviorBacking`](../../../../cluster/export/-internal-/classes/BehaviorBacking.md) |

#### Returns

[`PumpConfigurationAndControlServer`](PumpConfigurationAndControlServer.md)

#### Inherited from

`PumpConfigurationAndControlBehavior.constructor`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

## Properties

### #agent

> `private` **#agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

[`PumpConfigurationAndControlBehavior`](../interfaces/PumpConfigurationAndControlBehavior.md).[`#agent`](../interfaces/PumpConfigurationAndControlBehavior.md##agent)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L51)

***

### \[reference\]

> **\[reference\]**: [`Datasource`](../../../../cluster/export/-internal-/interfaces/Datasource.md)\<[`StateType`](../../../../cluster/export/-internal-/interfaces/StateType.md)\>

#### Inherited from

[`PumpConfigurationAndControlBehavior`](../interfaces/PumpConfigurationAndControlBehavior.md).[`[reference]`](../interfaces/PumpConfigurationAndControlBehavior.md#%5Breference%5D)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L274)

***

### agent

> **agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

[`PumpConfigurationAndControlBehavior`](../interfaces/PumpConfigurationAndControlBehavior.md).[`agent`](../interfaces/PumpConfigurationAndControlBehavior.md#agent)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L80)

***

### cluster

> **cluster**: `never`

The implemented cluster.

#### Inherited from

[`PumpConfigurationAndControlBehavior`](../interfaces/PumpConfigurationAndControlBehavior.md).[`cluster`](../interfaces/PumpConfigurationAndControlBehavior.md#cluster)

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

***

### context

> **context**: [`ActionContext`](../../../../cluster/export/-internal-/interfaces/ActionContext.md)

#### Inherited from

[`PumpConfigurationAndControlBehavior`](../interfaces/PumpConfigurationAndControlBehavior.md).[`context`](../interfaces/PumpConfigurationAndControlBehavior.md#context)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L94)

***

### endpoint

> **endpoint**: [`Endpoint`](../../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../cluster/export/-internal-/interfaces/Empty.md)\>

#### Inherited from

[`PumpConfigurationAndControlBehavior`](../interfaces/PumpConfigurationAndControlBehavior.md).[`endpoint`](../interfaces/PumpConfigurationAndControlBehavior.md#endpoint)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L87)

***

### events

> `readonly` **events**: [`EventEmitter`](../../../../../util/export/classes/EventEmitter.md) & `Omit`\<[`EventEmitter`](../../../../../util/export/classes/EventEmitter.md), `never`\> & `object` & `object` & `object` & `object` & `object` & `object`

Access the behavior's events.

#### Type declaration

##### capacity$Changing

> **capacity$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`null` \| `number`, `any`\>\>

##### effectiveControlMode$Changing

> **effectiveControlMode$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`ControlMode`](../../../../../cluster/export/namespaces/PumpConfigurationAndControl/enumerations/ControlMode.md), `any`\>\>

##### effectiveOperationMode$Changing

> **effectiveOperationMode$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`OperationMode`](../../../../../cluster/export/namespaces/PumpConfigurationAndControl/enumerations/OperationMode.md), `any`\>\>

##### maxFlow$Changing

> **maxFlow$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>\>

##### maxPressure$Changing

> **maxPressure$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>\>

##### maxSpeed$Changing

> **maxSpeed$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>\>

##### operationMode$Changing

> **operationMode$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`WritableAttribute`](../../../../../cluster/export/interfaces/WritableAttribute.md)\<[`OperationMode`](../../../../../cluster/export/namespaces/PumpConfigurationAndControl/enumerations/OperationMode.md), `any`\>\>

#### Type declaration

##### controlMode$Changing

> **controlMode$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<[`ControlMode`](../../../../../cluster/export/namespaces/PumpConfigurationAndControl/enumerations/ControlMode.md), `any`\>\>

##### lifetimeEnergyConsumed$Changing

> **lifetimeEnergyConsumed$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>\>

##### lifetimeRunningHours$Changing

> **lifetimeRunningHours$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>\>

##### power$Changing

> **power$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>\>

##### pumpStatus$Changing

> **pumpStatus$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

##### speed$Changing

> **speed$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>\>

#### Type declaration

##### capacity$Changed

> **capacity$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`null` \| `number`, `any`\>\>

##### effectiveControlMode$Changed

> **effectiveControlMode$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`ControlMode`](../../../../../cluster/export/namespaces/PumpConfigurationAndControl/enumerations/ControlMode.md), `any`\>\>

##### effectiveOperationMode$Changed

> **effectiveOperationMode$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`OperationMode`](../../../../../cluster/export/namespaces/PumpConfigurationAndControl/enumerations/OperationMode.md), `any`\>\>

##### maxFlow$Changed

> **maxFlow$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>\>

##### maxPressure$Changed

> **maxPressure$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>\>

##### maxSpeed$Changed

> **maxSpeed$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>\>

##### operationMode$Changed

> **operationMode$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`WritableAttribute`](../../../../../cluster/export/interfaces/WritableAttribute.md)\<[`OperationMode`](../../../../../cluster/export/namespaces/PumpConfigurationAndControl/enumerations/OperationMode.md), `any`\>\>

#### Type declaration

##### controlMode$Changed

> **controlMode$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<[`ControlMode`](../../../../../cluster/export/namespaces/PumpConfigurationAndControl/enumerations/ControlMode.md), `any`\>\>

##### lifetimeEnergyConsumed$Changed

> **lifetimeEnergyConsumed$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>\>

##### lifetimeRunningHours$Changed

> **lifetimeRunningHours$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>\>

##### power$Changed

> **power$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>\>

##### pumpStatus$Changed

> **pumpStatus$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>\>

##### speed$Changed

> **speed$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>\>

#### Type declaration

##### airDetection?

> `optional` **airDetection**: [`EventObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<[`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### dryRunning?

> `optional` **dryRunning**: [`EventObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<[`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### electronicFatalFailure?

> `optional` **electronicFatalFailure**: [`EventObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<[`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### electronicNonFatalFailure?

> `optional` **electronicNonFatalFailure**: [`EventObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<[`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### electronicTemperatureHigh?

> `optional` **electronicTemperatureHigh**: [`EventObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<[`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### generalFault?

> `optional` **generalFault**: [`EventObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<[`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### leakage?

> `optional` **leakage**: [`EventObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<[`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### motorTemperatureHigh?

> `optional` **motorTemperatureHigh**: [`EventObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<[`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### powerMissingPhase?

> `optional` **powerMissingPhase**: [`EventObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<[`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### pumpBlocked?

> `optional` **pumpBlocked**: [`EventObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<[`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### pumpMotorFatalFailure?

> `optional` **pumpMotorFatalFailure**: [`EventObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<[`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### sensorFailure?

> `optional` **sensorFailure**: [`EventObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<[`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### supplyVoltageHigh?

> `optional` **supplyVoltageHigh**: [`EventObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<[`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### supplyVoltageLow?

> `optional` **supplyVoltageLow**: [`EventObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<[`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### systemPressureHigh?

> `optional` **systemPressureHigh**: [`EventObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<[`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### systemPressureLow?

> `optional` **systemPressureLow**: [`EventObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<[`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### turbineOperation?

> `optional` **turbineOperation**: [`EventObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<[`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

#### Inherited from

[`PumpConfigurationAndControlBehavior`](../interfaces/PumpConfigurationAndControlBehavior.md).[`events`](../interfaces/PumpConfigurationAndControlBehavior.md#events)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L145)

***

### features

> **features**: `object`

Supported features as a flag object.

#### Inherited from

[`PumpConfigurationAndControlBehavior`](../interfaces/PumpConfigurationAndControlBehavior.md).[`features`](../interfaces/PumpConfigurationAndControlBehavior.md#features)

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

***

### session

> **session**: [`SecureSession`](../../../../../session/export/classes/SecureSession.md)\<[`MatterDevice`](../../../../cluster/export/-internal-/classes/MatterDevice.md)\>

#### Inherited from

[`PumpConfigurationAndControlBehavior`](../interfaces/PumpConfigurationAndControlBehavior.md).[`session`](../interfaces/PumpConfigurationAndControlBehavior.md#session)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L101)

***

### state

> `readonly` **state**: `Omit`\<`object`, `never`\> & `object` & `object` & `object` & `object`

Access the behavior's state.

#### Type declaration

##### capacity

> **capacity**: `null` \| `number`

This attribute specifies the actual capacity of the pump as a percentage of the effective maximum
setpoint value. It is updated dynamically as the speed of the pump changes.

If the value is not available (the measurement or estimation of the speed is done in the pump), this
attribute will indicate the null value.

Valid range is 0 % to 163.835% (0.005 % granularity). Although this attribute is a signed value, values
of capacity less than zero have no physical meaning.

###### See

MatterSpecification.v11.Cluster § 4.2.7.17

##### effectiveControlMode

> **effectiveControlMode**: [`ControlMode`](../../../../../cluster/export/namespaces/PumpConfigurationAndControl/enumerations/ControlMode.md)

This attribute specifies the current effective control mode of the pump as defined in ControlModeEnum.

This attribute contains the control mode that currently applies to the pump. It will have the value of
the ControlMode attribute, unless one of the following points are true:

  • The ControlMode attribute is set to Automatic. In this case, the value of the EffectiveControlMode
    shall match the behavior of the pump.

  • A remote sensor is used as the sensor for regulation of the pump. In this case, EffectiveControlMode
    will display ConstantPressure, ConstantFlow or ConstantTemperature if the remote sensor is a
    pressure sensor, a flow sensor or a temperature sensor respectively, regardless of the value of the
    ControlMode attribute.

In case the ControlMode attribute is not included on the device and no remote sensors are connected, the
value of the EffectiveControlMode shall match the vendor-specific behavior of the pump.

See OperationMode and ControlMode attributes for detailed a description of the operation and control of
the pump.

###### See

MatterSpecification.v11.Cluster § 4.2.7.16

##### effectiveOperationMode

> **effectiveOperationMode**: [`OperationMode`](../../../../../cluster/export/namespaces/PumpConfigurationAndControl/enumerations/OperationMode.md)

This attribute specifies current effective operation mode of the pump as defined in OperationModeEnum.

The value of the EffectiveOperationMode attribute is the same as the OperationMode attribute, unless one
of the following points are true:

  • The pump is physically set to run with the local settings

  • The LocalOverride bit in the PumpStatus attribute is set,

See OperationMode and ControlMode attributes for a detailed description of the operation and control of
the pump.

###### See

MatterSpecification.v11.Cluster § 4.2.7.15

##### operationMode

> **operationMode**: [`OperationMode`](../../../../../cluster/export/namespaces/PumpConfigurationAndControl/enumerations/OperationMode.md)

This attribute specifies the operation mode of the pump as defined in OperationModeEnum.

The actual operating mode of the pump is a result of the setting of the attributes OperationMode,
ControlMode and the optional connection of a remote sensor. The operation and control is prioritized as
shown in the scheme below:

Priority Scheme of Pump Operation and Control

If this attribute is Maximum, Minimum or Local, the OperationMode attribute decides how the pump is
operated.

If this attribute is Normal and a remote sensor is connected to the pump, the type of the remote sensor
decides the control mode of the pump. A connected remote pressure sensor will make the pump run in
control mode Constant pressure and vice versa for flow and temperature type sensors. This is regardless
of the setting of the ControlMode attribute.

If this attribute is Normal and no remote sensor is connected, the control mode of the pump is decided
by the ControlMode attribute.

OperationMode may be changed at any time, even when the pump is running. The behavior of the pump at the
point of changing the value of this attribute is vendor-specific.

In the case a device does not support a specific operation mode, the write interaction to this attribute
with an unsupported operation mode value shall be ignored and a response containing the status of
CONSTRAINT_ERROR shall be returned.

###### See

MatterSpecification.v11.Cluster § 4.2.7.22

#### Type declaration

##### controlMode?

> `optional` **controlMode**: [`ControlMode`](../../../../../cluster/export/namespaces/PumpConfigurationAndControl/enumerations/ControlMode.md)

This attribute specifies the control mode of the pump as defined in ControlModeEnum.

See the OperationMode attribute for a detailed description of the operation and control of the

pump.

ControlMode may be changed at any time, even when the pump is running. The behavior of the pump at the
point of changing is vendor-specific.

In the case a device does not support a specific control mode, the write interaction to this attribute
with an unsupported control mode value shall be ignored and a response containing the status of
CONSTRAINT_ERROR shall be returned.

###### See

MatterSpecification.v11.Cluster § 4.2.7.23

##### lifetimeEnergyConsumed?

> `optional` **lifetimeEnergyConsumed**: `null` \| `number`

This attribute specifies the accumulated energy consumption of the pump through the entire lifetime of
the pump in kWh. The value of the LifetimeEnergyConsumed attribute is updated dynamically as the energy
consumption of the pump increases. If LifetimeEnergyConsumed rises above maximum value it “rolls over”
and starts at 0 (zero).

This attribute is writeable, in order to allow setting to an appropriate value after maintenance.

Valid range is 0 kWh to 4,294,967,294 kWh.

This attribute shall be null if the value is unknown.

###### See

MatterSpecification.v11.Cluster § 4.2.7.21

##### lifetimeRunningHours?

> `optional` **lifetimeRunningHours**: `null` \| `number`

This attribute specifies the accumulated number of hours that the pump has been powered and the motor
has been running. It is updated dynamically as it increases. It is preserved over power cycles of the
pump. If LifeTimeRunningHours rises above maximum value it “rolls over” and starts at 0 (zero).

This attribute is writeable, in order to allow setting to an appropriate value after maintenance. If

the value is not available, this attribute will indicate the null value. Valid range is 0 to 16,777,214
hrs.

###### See

MatterSpecification.v11.Cluster § 4.2.7.19

##### power?

> `optional` **power**: `null` \| `number`

This attribute specifies the actual power consumption of the pump in Watts. The value of this attribute
is updated dynamically as the power consumption of the pump changes.

This attribute is read only. If the value is not available (the measurement of power consumption is not
done in the pump), this attribute will indicate the null value.

Valid range is 0 to 16,777,214 Watts.

###### See

MatterSpecification.v11.Cluster § 4.2.7.20

##### pumpStatus?

> `optional` **pumpStatus**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

This attribute specifies the activity status of the pump functions as listed in PumpStatusBitmap. Where
a pump controller function is active, the corresponding bit shall be set to 1. Where a pump controller
function is not active, the corresponding bit shall be set to 0.

###### See

MatterSpecification.v11.Cluster § 4.2.7.14

###### Type declaration

###### deviceFault

> **deviceFault**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

A fault related to the system or pump device is detected.

If this bit is set, it may correspond to an event in the range 2-16, see Events.

###### See

MatterSpecification.v11.Cluster § 4.2.6.1.1

###### localOverride

> **localOverride**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Device control is overridden by hardware, such as an external STOP button or via a local HMI.

While this bit is set, the EffectiveOperationMode is adjusted to Local. Any request changing OperationMode
shall generate a FAILURE error status until LocalOverride is cleared on the physical device. When
LocalOverride is cleared, the device shall return to the operation mode set in OperationMode.

###### See

MatterSpecification.v11.Cluster § 4.2.6.1.3

###### remoteFlow

> **remoteFlow**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

A remote flow sensor is used as the sensor for the regulation of the pump.

If this bit is set, EffectiveControlMode is ConstantFlow, and the setpoint for the pump is interpreted as a
percentage of the range of the remote sensor ([MinMeasuredValue – MaxMeasuredValue]).

###### See

MatterSpecification.v11.Cluster § 4.2.6.1.5

###### remotePressure

> **remotePressure**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

A remote pressure sensor is used as the sensor for the regulation of the pump.

If this bit is set, EffectiveControlMode is ConstantPressure and the setpoint for the pump is interpreted as
a percentage of the range of the remote sensor ([MinMeasuredValue – MaxMeasuredValue]).

###### See

MatterSpecification.v11.Cluster § 4.2.6.1.4

###### remoteTemperature

> **remoteTemperature**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

A remote temperature sensor is used as the sensor for the regulation of the pump.

If this bit is set, EffectiveControlMode is ConstantTemperature, and the setpoint for the pump is
interpreted as a percentage of the range of the remote sensor ([MinMeasuredValue – MaxMeasuredValue])

###### See

MatterSpecification.v11.Cluster § 4.2.6.1.6

###### running

> **running**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Pump is currently running

###### speedHigh

> **speedHigh**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Setpoint is too high to achieve.

###### speedLow

> **speedLow**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Setpoint is too low to achieve.

###### supplyFault

> **supplyFault**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

A fault related to the supply to the pump is detected.

If this bit is set, it may correspond to an event in the range 0-1 or 13, see Events.

###### See

MatterSpecification.v11.Cluster § 4.2.6.1.2

##### speed?

> `optional` **speed**: `null` \| `number`

This attribute specifies the actual speed of the pump measured in RPM. It is updated dynamically as the
speed of the pump changes.

If the value is not available (the measurement or estimation of the speed is done in the pump), this
attribute will indicate the null value.

Valid range is 0 to 65.534 RPM.

###### See

MatterSpecification.v11.Cluster § 4.2.7.18

#### Type declaration

##### maxFlow

> **maxFlow**: `null` \| `number`

This attribute specifies the maximum flow the pump can achieve. It is a physical limit, and does not
apply to any specific control mode or operation mode.

Valid range is 0 m/h to 6,553.4 m/h (steps of 0.1 m/h). This attribute shall be null if the value is
invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.3

##### maxPressure

> **maxPressure**: `null` \| `number`

This attribute specifies the maximum pressure the pump can achieve. It is a physical limit, and does not
apply to any specific control mode or operation mode.

Valid range is -3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). This attribute shall be null if the value
is invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.1

##### maxSpeed

> **maxSpeed**: `null` \| `number`

This attribute specifies the maximum speed the pump can achieve. It is a physical limit, and does not
apply to any specific control mode or operation mode.

Valid range is 0 to 65,534 RPM (steps of 1 RPM). This attribute shall be null if the value is invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.2

#### Inherited from

[`PumpConfigurationAndControlBehavior`](../interfaces/PumpConfigurationAndControlBehavior.md).[`state`](../interfaces/PumpConfigurationAndControlBehavior.md#state)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:140](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L140)

***

### Events

> `static` `readonly` **Events**: [`Type`](../../../../cluster/export/namespaces/ClusterEvents/README.md#typecb)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md)\>

#### Inherited from

`PumpConfigurationAndControlBehavior.Events`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:215](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L215)

***

### ExtensionInterface

> `static` `readonly` **ExtensionInterface**: `object`

#### Inherited from

`PumpConfigurationAndControlBehavior.ExtensionInterface`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L226)

***

### Interface

> `static` `readonly` **Interface**: `object`

#### components

> **components**: `never`[] = `[]`

#### Inherited from

`PumpConfigurationAndControlBehavior.Interface`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:218](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L218)

***

### Internal()

> `static` `readonly` **Internal**: () => `object`

#### Returns

`object`

#### Inherited from

`PumpConfigurationAndControlBehavior.Internal`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:217](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L217)

***

### State()

> `static` `readonly` **State**: () => [`Type`](../../../../cluster/export/namespaces/ClusterState/README.md#typecb)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md)\>

#### Returns

[`Type`](../../../../cluster/export/namespaces/ClusterState/README.md#typecb)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md)\>

#### Inherited from

`PumpConfigurationAndControlBehavior.State`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:216](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L216)

***

### cluster

> `static` `readonly` **cluster**: [`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>

Base cluster state include all attribute values but may be extended by subclasses.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.capacity

> `readonly` **capacity**: [`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the actual capacity of the pump as a percentage of the effective maximum
setpoint value. It is updated dynamically as the speed of the pump changes.

If the value is not available (the measurement or estimation of the speed is done in the pump), this
attribute will indicate the null value.

Valid range is 0 % to 163.835% (0.005 % granularity). Although this attribute is a signed value, values
of capacity less than zero have no physical meaning.

###### See

MatterSpecification.v11.Cluster § 4.2.7.17

##### attributes.controlMode

> `readonly` **controlMode**: [`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<[`ControlMode`](../../../../../cluster/export/namespaces/PumpConfigurationAndControl/enumerations/ControlMode.md), `any`\>

This attribute specifies the control mode of the pump as defined in ControlModeEnum.

See the OperationMode attribute for a detailed description of the operation and control of the

pump.

ControlMode may be changed at any time, even when the pump is running. The behavior of the pump at the
point of changing is vendor-specific.

In the case a device does not support a specific control mode, the write interaction to this attribute
with an unsupported control mode value shall be ignored and a response containing the status of
CONSTRAINT_ERROR shall be returned.

###### See

MatterSpecification.v11.Cluster § 4.2.7.23

##### attributes.effectiveControlMode

> `readonly` **effectiveControlMode**: [`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`ControlMode`](../../../../../cluster/export/namespaces/PumpConfigurationAndControl/enumerations/ControlMode.md), `any`\>

This attribute specifies the current effective control mode of the pump as defined in ControlModeEnum.

This attribute contains the control mode that currently applies to the pump. It will have the value of
the ControlMode attribute, unless one of the following points are true:

  • The ControlMode attribute is set to Automatic. In this case, the value of the EffectiveControlMode
    shall match the behavior of the pump.

  • A remote sensor is used as the sensor for regulation of the pump. In this case, EffectiveControlMode
    will display ConstantPressure, ConstantFlow or ConstantTemperature if the remote sensor is a
    pressure sensor, a flow sensor or a temperature sensor respectively, regardless of the value of the
    ControlMode attribute.

In case the ControlMode attribute is not included on the device and no remote sensors are connected, the
value of the EffectiveControlMode shall match the vendor-specific behavior of the pump.

See OperationMode and ControlMode attributes for detailed a description of the operation and control of
the pump.

###### See

MatterSpecification.v11.Cluster § 4.2.7.16

##### attributes.effectiveOperationMode

> `readonly` **effectiveOperationMode**: [`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`OperationMode`](../../../../../cluster/export/namespaces/PumpConfigurationAndControl/enumerations/OperationMode.md), `any`\>

This attribute specifies current effective operation mode of the pump as defined in OperationModeEnum.

The value of the EffectiveOperationMode attribute is the same as the OperationMode attribute, unless one
of the following points are true:

  • The pump is physically set to run with the local settings

  • The LocalOverride bit in the PumpStatus attribute is set,

See OperationMode and ControlMode attributes for a detailed description of the operation and control of
the pump.

###### See

MatterSpecification.v11.Cluster § 4.2.7.15

##### attributes.lifetimeEnergyConsumed

> `readonly` **lifetimeEnergyConsumed**: [`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the accumulated energy consumption of the pump through the entire lifetime of
the pump in kWh. The value of the LifetimeEnergyConsumed attribute is updated dynamically as the energy
consumption of the pump increases. If LifetimeEnergyConsumed rises above maximum value it “rolls over”
and starts at 0 (zero).

This attribute is writeable, in order to allow setting to an appropriate value after maintenance.

Valid range is 0 kWh to 4,294,967,294 kWh.

This attribute shall be null if the value is unknown.

###### See

MatterSpecification.v11.Cluster § 4.2.7.21

##### attributes.lifetimeRunningHours

> `readonly` **lifetimeRunningHours**: [`OptionalWritableAttribute`](../../../../../cluster/export/interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the accumulated number of hours that the pump has been powered and the motor
has been running. It is updated dynamically as it increases. It is preserved over power cycles of the
pump. If LifeTimeRunningHours rises above maximum value it “rolls over” and starts at 0 (zero).

This attribute is writeable, in order to allow setting to an appropriate value after maintenance. If

the value is not available, this attribute will indicate the null value. Valid range is 0 to 16,777,214
hrs.

###### See

MatterSpecification.v11.Cluster § 4.2.7.19

##### attributes.maxFlow

> `readonly` **maxFlow**: [`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the maximum flow the pump can achieve. It is a physical limit, and does not
apply to any specific control mode or operation mode.

Valid range is 0 m/h to 6,553.4 m/h (steps of 0.1 m/h). This attribute shall be null if the value is
invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.3

##### attributes.maxPressure

> `readonly` **maxPressure**: [`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the maximum pressure the pump can achieve. It is a physical limit, and does not
apply to any specific control mode or operation mode.

Valid range is -3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). This attribute shall be null if the value
is invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.1

##### attributes.maxSpeed

> `readonly` **maxSpeed**: [`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the maximum speed the pump can achieve. It is a physical limit, and does not
apply to any specific control mode or operation mode.

Valid range is 0 to 65,534 RPM (steps of 1 RPM). This attribute shall be null if the value is invalid.

###### See

MatterSpecification.v11.Cluster § 4.2.7.2

##### attributes.operationMode

> `readonly` **operationMode**: [`WritableAttribute`](../../../../../cluster/export/interfaces/WritableAttribute.md)\<[`OperationMode`](../../../../../cluster/export/namespaces/PumpConfigurationAndControl/enumerations/OperationMode.md), `any`\>

This attribute specifies the operation mode of the pump as defined in OperationModeEnum.

The actual operating mode of the pump is a result of the setting of the attributes OperationMode,
ControlMode and the optional connection of a remote sensor. The operation and control is prioritized as
shown in the scheme below:

Priority Scheme of Pump Operation and Control

If this attribute is Maximum, Minimum or Local, the OperationMode attribute decides how the pump is
operated.

If this attribute is Normal and a remote sensor is connected to the pump, the type of the remote sensor
decides the control mode of the pump. A connected remote pressure sensor will make the pump run in
control mode Constant pressure and vice versa for flow and temperature type sensors. This is regardless
of the setting of the ControlMode attribute.

If this attribute is Normal and no remote sensor is connected, the control mode of the pump is decided
by the ControlMode attribute.

OperationMode may be changed at any time, even when the pump is running. The behavior of the pump at the
point of changing the value of this attribute is vendor-specific.

In the case a device does not support a specific operation mode, the write interaction to this attribute
with an unsupported operation mode value shall be ignored and a response containing the status of
CONSTRAINT_ERROR shall be returned.

###### See

MatterSpecification.v11.Cluster § 4.2.7.22

##### attributes.power

> `readonly` **power**: [`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the actual power consumption of the pump in Watts. The value of this attribute
is updated dynamically as the power consumption of the pump changes.

This attribute is read only. If the value is not available (the measurement of power consumption is not
done in the pump), this attribute will indicate the null value.

Valid range is 0 to 16,777,214 Watts.

###### See

MatterSpecification.v11.Cluster § 4.2.7.20

##### attributes.pumpStatus

> `readonly` **pumpStatus**: [`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute specifies the activity status of the pump functions as listed in PumpStatusBitmap. Where
a pump controller function is active, the corresponding bit shall be set to 1. Where a pump controller
function is not active, the corresponding bit shall be set to 0.

###### See

MatterSpecification.v11.Cluster § 4.2.7.14

##### attributes.speed

> `readonly` **speed**: [`OptionalAttribute`](../../../../../cluster/export/interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

This attribute specifies the actual speed of the pump measured in RPM. It is updated dynamically as the
speed of the pump changes.

If the value is not available (the measurement or estimation of the speed is done in the pump), this
attribute will indicate the null value.

Valid range is 0 to 65.534 RPM.

###### See

MatterSpecification.v11.Cluster § 4.2.7.18

##### events

> `readonly` **events**: `object`

##### events.airDetection

> `readonly` **airDetection**: [`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.dryRunning

> `readonly` **dryRunning**: [`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.electronicFatalFailure

> `readonly` **electronicFatalFailure**: [`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.electronicNonFatalFailure

> `readonly` **electronicNonFatalFailure**: [`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.electronicTemperatureHigh

> `readonly` **electronicTemperatureHigh**: [`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.generalFault

> `readonly` **generalFault**: [`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.leakage

> `readonly` **leakage**: [`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.motorTemperatureHigh

> `readonly` **motorTemperatureHigh**: [`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.powerMissingPhase

> `readonly` **powerMissingPhase**: [`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.pumpBlocked

> `readonly` **pumpBlocked**: [`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.pumpMotorFatalFailure

> `readonly` **pumpMotorFatalFailure**: [`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.sensorFailure

> `readonly` **sensorFailure**: [`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.supplyVoltageHigh

> `readonly` **supplyVoltageHigh**: [`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.supplyVoltageLow

> `readonly` **supplyVoltageLow**: [`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.systemPressureHigh

> `readonly` **systemPressureHigh**: [`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.systemPressureLow

> `readonly` **systemPressureLow**: [`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### events.turbineOperation

> `readonly` **turbineOperation**: [`OptionalEvent`](../../../../../cluster/export/interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 4.2.8

##### extensions

> `readonly` **extensions**: readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`]

This metadata controls which PumpConfigurationAndControlCluster elements matter.js activates for specific
feature combinations.

##### features

> `readonly` **features**: `object`

##### features.automatic

> `readonly` **automatic**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Automatic

Supports operating in automatic mode

##### features.compensatedPressure

> `readonly` **compensatedPressure**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

CompensatedPressure

Supports operating in compensated pressure mode

##### features.constantFlow

> `readonly` **constantFlow**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

ConstantFlow

Supports operating in constant flow mode

##### features.constantPressure

> `readonly` **constantPressure**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

ConstantPressure

Supports operating in constant pressure mode

##### features.constantSpeed

> `readonly` **constantSpeed**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

ConstantSpeed

Supports operating in constant speed mode

##### features.constantTemperature

> `readonly` **constantTemperature**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

ConstantTemperature

Supports operating in constant temperature mode

##### features.localOperation

> `readonly` **localOperation**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

LocalOperation

Supports operating using local settings

##### id

> `readonly` **id**: `512` = `0x200`

##### name

> `readonly` **name**: `"PumpConfigurationAndControl"` = `"PumpConfigurationAndControl"`

##### revision

> `readonly` **revision**: `4` = `4`

#### Inherited from

`PumpConfigurationAndControlBehavior.cluster`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:213](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L213)

***

### defaults

> `static` `readonly` **defaults**: [`Type`](../../../../cluster/export/namespaces/ClusterState/README.md#typecb)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md)\>

#### Inherited from

`PumpConfigurationAndControlBehavior.defaults`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:222](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L222)

***

### dependencies?

> `static` `optional` `readonly` **dependencies**: `Iterable`\<[`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md)\>

#### Inherited from

`PumpConfigurationAndControlBehavior.dependencies`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:224](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L224)

***

### early

> `static` `readonly` **early**: `boolean`

#### Inherited from

`PumpConfigurationAndControlBehavior.early`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:221](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L221)

***

### id

> `static` `readonly` **id**: `"pumpConfigurationAndControl"`

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

`PumpConfigurationAndControlBehavior.id`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:208](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L208)

***

### name

> `static` `readonly` **name**: `string`

#### Inherited from

`PumpConfigurationAndControlBehavior.name`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:203](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L203)

***

### schema?

> `static` `optional` `readonly` **schema**: [`Schema`](../../../../cluster/export/-internal-/README.md#schema)

#### Inherited from

`PumpConfigurationAndControlBehavior.schema`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:220](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L220)

***

### supervisor

> `static` `readonly` **supervisor**: [`RootSupervisor`](../../../../cluster/export/-internal-/classes/RootSupervisor.md)

#### Inherited from

`PumpConfigurationAndControlBehavior.supervisor`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:223](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L223)

***

### supports()

> `static` **supports**: (`other`) => `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `other` | [`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md) |

#### Returns

`boolean`

#### Inherited from

`PumpConfigurationAndControlBehavior.supports`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)

## Methods

### `[asyncDispose]`()

> **\[asyncDispose\]**(): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

[`PumpConfigurationAndControlBehavior`](../interfaces/PumpConfigurationAndControlBehavior.md).[`[asyncDispose]`](../interfaces/PumpConfigurationAndControlBehavior.md#%5Basyncdispose%5D)

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

[`PumpConfigurationAndControlBehavior`](../interfaces/PumpConfigurationAndControlBehavior.md).[`asAdmin`](../interfaces/PumpConfigurationAndControlBehavior.md#asadmin)

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

[`PumpConfigurationAndControlBehavior`](../interfaces/PumpConfigurationAndControlBehavior.md).[`assertAttributeEnabled`](../interfaces/PumpConfigurationAndControlBehavior.md#assertattributeenabled)

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

[`PumpConfigurationAndControlBehavior`](../interfaces/PumpConfigurationAndControlBehavior.md).[`callback`](../interfaces/PumpConfigurationAndControlBehavior.md#callback)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L226)

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

[`PumpConfigurationAndControlBehavior`](../interfaces/PumpConfigurationAndControlBehavior.md).[`initialize`](../interfaces/PumpConfigurationAndControlBehavior.md#initialize)

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

[`PumpConfigurationAndControlBehavior`](../interfaces/PumpConfigurationAndControlBehavior.md).[`reactTo`](../interfaces/PumpConfigurationAndControlBehavior.md#reactto)

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

[`PumpConfigurationAndControlBehavior`](../interfaces/PumpConfigurationAndControlBehavior.md).[`requireAttributeEnabled`](../interfaces/PumpConfigurationAndControlBehavior.md#requireattributeenabled)

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:171](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L171)

***

### toString()

> **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

[`PumpConfigurationAndControlBehavior`](../interfaces/PumpConfigurationAndControlBehavior.md).[`toString`](../interfaces/PumpConfigurationAndControlBehavior.md#tostring)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L203)

***

### alter()

> `static` **alter**\<`This`, `AlterationsT`\>(`this`, `alterations`): [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<`This`\[`"cluster"`\], `AlterationsT`\>, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`ClusterType`](../../../../../cluster/export/interfaces/ClusterType.md), [`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md), [`ClusterInterface`](../../../../cluster/export/README.md#clusterinterfacef)\<`object`\>\> |
| `AlterationsT` *extends* [`Alterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#alterationsoriginalt)\<`This`\[`"cluster"`\]\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `alterations` | `AlterationsT` |

#### Returns

[`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<`This`\[`"cluster"`\], `AlterationsT`\>, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Inherited from

`PumpConfigurationAndControlBehavior.alter`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:254](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L254)

***

### enable()

> `static` **enable**\<`This`, `FlagsT`\>(`this`, `flags`): [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<`This`\[`"cluster"`\], [`ElementFlagAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#elementflagalterationst)\<`FlagsT`\>\>, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`ClusterType`](../../../../../cluster/export/interfaces/ClusterType.md), [`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md), [`ClusterInterface`](../../../../cluster/export/README.md#clusterinterfacef)\<`object`\>\> |
| `FlagsT` *extends* [`ElementFlags`](../../../../../cluster/export/namespaces/ElementModifier/README.md#elementflagsclustert)\<`This`\[`"cluster"`\]\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `flags` | `FlagsT` |

#### Returns

[`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<`This`\[`"cluster"`\], [`ElementFlagAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#elementflagalterationst)\<`FlagsT`\>\>, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Inherited from

`PumpConfigurationAndControlBehavior.enable`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:264](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L264)

***

### for()

> `static` **for**\<`This`, `ClusterT`\>(`this`, `cluster`, `schema`?): [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<`ClusterT`, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`ClusterType`](../../../../../cluster/export/interfaces/ClusterType.md), [`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md), [`ClusterInterface`](../../../../cluster/export/README.md#clusterinterfacef)\<`object`\>\> |
| `ClusterT` *extends* [`ClusterType`](../../../../../cluster/export/interfaces/ClusterType.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `cluster` | `ClusterT` |
| `schema`? | [`Schema`](../../../../cluster/export/-internal-/README.md#schema) |

#### Returns

[`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<`ClusterT`, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Inherited from

`PumpConfigurationAndControlBehavior.for`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:240](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L240)

***

### set()

> `static` **set**\<`This`\>(`this`, `defaults`): `This`

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `defaults` | `Partial`\<[`RelaxTypes`](../../../../../cluster/export/namespaces/ClusterType/README.md#relaxtypesv)\<`InstanceType`\<`This`\[`"State"`\]\>\>\> |

#### Returns

`This`

#### Inherited from

`PumpConfigurationAndControlBehavior.set`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:262](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L262)

***

### with()

> `static` **with**\<`This`, `FeaturesT`\>(`this`, ...`features`): [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithFeatures`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<`This`\[`"cluster"`\], `FeaturesT`\>, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`ClusterType`](../../../../../cluster/export/interfaces/ClusterType.md), [`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md), [`ClusterInterface`](../../../../cluster/export/README.md#clusterinterfacef)\<`object`\>\> |
| `FeaturesT` *extends* [`FeatureSelection`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#featureselectiont)\<`This`\[`"cluster"`\]\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| ...`features` | `FeaturesT` |

#### Returns

[`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithFeatures`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<`This`\[`"cluster"`\], `FeaturesT`\>, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Inherited from

`PumpConfigurationAndControlBehavior.with`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:246](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L246)
