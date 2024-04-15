[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / PumpConfigurationAndControl

# Namespace: PumpConfigurationAndControl

[cluster/export](cluster_export.md).PumpConfigurationAndControl

## Table of contents

### Enumerations

- [ControlMode](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md)
- [Feature](../enums/cluster_export.PumpConfigurationAndControl.Feature.md)
- [OperationMode](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md)

### Interfaces

- [Cluster](../interfaces/cluster_export.PumpConfigurationAndControl.Cluster.md)
- [Complete](../interfaces/cluster_export.PumpConfigurationAndControl.Complete.md)

### Variables

- [AutomaticComponent](cluster_export.PumpConfigurationAndControl.md#automaticcomponent)
- [Base](cluster_export.PumpConfigurationAndControl.md#base)
- [Cluster](cluster_export.PumpConfigurationAndControl.md#cluster)
- [ClusterInstance](cluster_export.PumpConfigurationAndControl.md#clusterinstance)
- [CompensatedPressureComponent](cluster_export.PumpConfigurationAndControl.md#compensatedpressurecomponent)
- [Complete](cluster_export.PumpConfigurationAndControl.md#complete)
- [CompleteInstance](cluster_export.PumpConfigurationAndControl.md#completeinstance)
- [ConstantFlowComponent](cluster_export.PumpConfigurationAndControl.md#constantflowcomponent)
- [ConstantPressureComponent](cluster_export.PumpConfigurationAndControl.md#constantpressurecomponent)
- [ConstantSpeedComponent](cluster_export.PumpConfigurationAndControl.md#constantspeedcomponent)
- [ConstantTemperatureComponent](cluster_export.PumpConfigurationAndControl.md#constanttemperaturecomponent)
- [PumpStatusBitmap](cluster_export.PumpConfigurationAndControl.md#pumpstatusbitmap)

## Variables

### AutomaticComponent

• `Const` **AutomaticComponent**: `Object`

A PumpConfigurationAndControlCluster supports these elements if it supports feature Automatic.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `maxCompPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstFlow`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstSpeed`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstTemp`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minCompPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstFlow`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstSpeed`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstTemp`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>  } |
| `attributes.maxCompPressure` | [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.maxConstFlow` | [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.maxConstPressure` | [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.maxConstSpeed` | [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.maxConstTemp` | [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.minCompPressure` | [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.minConstFlow` | [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.minConstPressure` | [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.minConstSpeed` | [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.minConstTemp` | [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:245](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L245)

___

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all PumpConfigurationAndControl clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `capacity`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `controlMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`ControlMode`](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveControlMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ControlMode`](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveOperationMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`OperationMode`](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `lifetimeEnergyConsumed`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lifetimeRunningHours`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `maxFlow`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxSpeed`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `operationMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`OperationMode`](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `power`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `pumpStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `deviceFault`: [`BitFlag`](schema_export.md#bitflag) ; `localOverride`: [`BitFlag`](schema_export.md#bitflag) ; `remoteFlow`: [`BitFlag`](schema_export.md#bitflag) ; `remotePressure`: [`BitFlag`](schema_export.md#bitflag) ; `remoteTemperature`: [`BitFlag`](schema_export.md#bitflag) ; `running`: [`BitFlag`](schema_export.md#bitflag) ; `speedHigh`: [`BitFlag`](schema_export.md#bitflag) ; `speedLow`: [`BitFlag`](schema_export.md#bitflag) ; `supplyFault`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `speed`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\>  } | - |
| `attributes.capacity` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> | This attribute specifies the actual capacity of the pump as a percentage of the effective maximum setpoint value. It is updated dynamically as the speed of the pump changes. If the value is not available (the measurement or estimation of the speed is done in the pump), this attribute will indicate the null value. Valid range is 0 % to 163.835% (0.005 % granularity). Although this attribute is a signed value, values of capacity less than zero have no physical meaning. **`See`** MatterSpecification.v11.Cluster § 4.2.7.17 |
| `attributes.controlMode` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`ControlMode`](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md), `any`\> | This attribute specifies the control mode of the pump as defined in ControlModeEnum. See the OperationMode attribute for a detailed description of the operation and control of the pump. ControlMode may be changed at any time, even when the pump is running. The behavior of the pump at the point of changing is vendor-specific. In the case a device does not support a specific control mode, the write interaction to this attribute with an unsupported control mode value shall be ignored and a response containing the status of CONSTRAINT_ERROR shall be returned. **`See`** MatterSpecification.v11.Cluster § 4.2.7.23 |
| `attributes.effectiveControlMode` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ControlMode`](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md), `any`\> | This attribute specifies the current effective control mode of the pump as defined in ControlModeEnum. This attribute contains the control mode that currently applies to the pump. It will have the value of the ControlMode attribute, unless one of the following points are true: • The ControlMode attribute is set to Automatic. In this case, the value of the EffectiveControlMode shall match the behavior of the pump. • A remote sensor is used as the sensor for regulation of the pump. In this case, EffectiveControlMode will display ConstantPressure, ConstantFlow or ConstantTemperature if the remote sensor is a pressure sensor, a flow sensor or a temperature sensor respectively, regardless of the value of the ControlMode attribute. In case the ControlMode attribute is not included on the device and no remote sensors are connected, the value of the EffectiveControlMode shall match the vendor-specific behavior of the pump. See OperationMode and ControlMode attributes for detailed a description of the operation and control of the pump. **`See`** MatterSpecification.v11.Cluster § 4.2.7.16 |
| `attributes.effectiveOperationMode` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`OperationMode`](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md), `any`\> | This attribute specifies current effective operation mode of the pump as defined in OperationModeEnum. The value of the EffectiveOperationMode attribute is the same as the OperationMode attribute, unless one of the following points are true: • The pump is physically set to run with the local settings • The LocalOverride bit in the PumpStatus attribute is set, See OperationMode and ControlMode attributes for a detailed description of the operation and control of the pump. **`See`** MatterSpecification.v11.Cluster § 4.2.7.15 |
| `attributes.lifetimeEnergyConsumed` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> | This attribute specifies the accumulated energy consumption of the pump through the entire lifetime of the pump in kWh. The value of the LifetimeEnergyConsumed attribute is updated dynamically as the energy consumption of the pump increases. If LifetimeEnergyConsumed rises above maximum value it “rolls over” and starts at 0 (zero). This attribute is writeable, in order to allow setting to an appropriate value after maintenance. Valid range is 0 kWh to 4,294,967,294 kWh. This attribute shall be null if the value is unknown. **`See`** MatterSpecification.v11.Cluster § 4.2.7.21 |
| `attributes.lifetimeRunningHours` | [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> | This attribute specifies the accumulated number of hours that the pump has been powered and the motor has been running. It is updated dynamically as it increases. It is preserved over power cycles of the pump. If LifeTimeRunningHours rises above maximum value it “rolls over” and starts at 0 (zero). This attribute is writeable, in order to allow setting to an appropriate value after maintenance. If the value is not available, this attribute will indicate the null value. Valid range is 0 to 16,777,214 hrs. **`See`** MatterSpecification.v11.Cluster § 4.2.7.19 |
| `attributes.maxFlow` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> | This attribute specifies the maximum flow the pump can achieve. It is a physical limit, and does not apply to any specific control mode or operation mode. Valid range is 0 m/h to 6,553.4 m/h (steps of 0.1 m/h). This attribute shall be null if the value is invalid. **`See`** MatterSpecification.v11.Cluster § 4.2.7.3 |
| `attributes.maxPressure` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> | This attribute specifies the maximum pressure the pump can achieve. It is a physical limit, and does not apply to any specific control mode or operation mode. Valid range is -3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). This attribute shall be null if the value is invalid. **`See`** MatterSpecification.v11.Cluster § 4.2.7.1 |
| `attributes.maxSpeed` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> | This attribute specifies the maximum speed the pump can achieve. It is a physical limit, and does not apply to any specific control mode or operation mode. Valid range is 0 to 65,534 RPM (steps of 1 RPM). This attribute shall be null if the value is invalid. **`See`** MatterSpecification.v11.Cluster § 4.2.7.2 |
| `attributes.operationMode` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`OperationMode`](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md), `any`\> | This attribute specifies the operation mode of the pump as defined in OperationModeEnum. The actual operating mode of the pump is a result of the setting of the attributes OperationMode, ControlMode and the optional connection of a remote sensor. The operation and control is prioritized as shown in the scheme below: Priority Scheme of Pump Operation and Control If this attribute is Maximum, Minimum or Local, the OperationMode attribute decides how the pump is operated. If this attribute is Normal and a remote sensor is connected to the pump, the type of the remote sensor decides the control mode of the pump. A connected remote pressure sensor will make the pump run in control mode Constant pressure and vice versa for flow and temperature type sensors. This is regardless of the setting of the ControlMode attribute. If this attribute is Normal and no remote sensor is connected, the control mode of the pump is decided by the ControlMode attribute. OperationMode may be changed at any time, even when the pump is running. The behavior of the pump at the point of changing the value of this attribute is vendor-specific. In the case a device does not support a specific operation mode, the write interaction to this attribute with an unsupported operation mode value shall be ignored and a response containing the status of CONSTRAINT_ERROR shall be returned. **`See`** MatterSpecification.v11.Cluster § 4.2.7.22 |
| `attributes.power` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> | This attribute specifies the actual power consumption of the pump in Watts. The value of this attribute is updated dynamically as the power consumption of the pump changes. This attribute is read only. If the value is not available (the measurement of power consumption is not done in the pump), this attribute will indicate the null value. Valid range is 0 to 16,777,214 Watts. **`See`** MatterSpecification.v11.Cluster § 4.2.7.20 |
| `attributes.pumpStatus` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `deviceFault`: [`BitFlag`](schema_export.md#bitflag) ; `localOverride`: [`BitFlag`](schema_export.md#bitflag) ; `remoteFlow`: [`BitFlag`](schema_export.md#bitflag) ; `remotePressure`: [`BitFlag`](schema_export.md#bitflag) ; `remoteTemperature`: [`BitFlag`](schema_export.md#bitflag) ; `running`: [`BitFlag`](schema_export.md#bitflag) ; `speedHigh`: [`BitFlag`](schema_export.md#bitflag) ; `speedLow`: [`BitFlag`](schema_export.md#bitflag) ; `supplyFault`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> | This attribute specifies the activity status of the pump functions as listed in PumpStatusBitmap. Where a pump controller function is active, the corresponding bit shall be set to 1. Where a pump controller function is not active, the corresponding bit shall be set to 0. **`See`** MatterSpecification.v11.Cluster § 4.2.7.14 |
| `attributes.speed` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> | This attribute specifies the actual speed of the pump measured in RPM. It is updated dynamically as the speed of the pump changes. If the value is not available (the measurement or estimation of the speed is done in the pump), this attribute will indicate the null value. Valid range is 0 to 65.534 RPM. **`See`** MatterSpecification.v11.Cluster § 4.2.7.18 |
| `events` | \{ `airDetection`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `dryRunning`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `electronicFatalFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `electronicNonFatalFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `electronicTemperatureHigh`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `generalFault`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `leakage`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `motorTemperatureHigh`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `powerMissingPhase`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `pumpBlocked`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `pumpMotorFatalFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `sensorFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageHigh`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageLow`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureHigh`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureLow`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `turbineOperation`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\>  } | - |
| `events.airDetection` | [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.2.8 |
| `events.dryRunning` | [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.2.8 |
| `events.electronicFatalFailure` | [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.2.8 |
| `events.electronicNonFatalFailure` | [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.2.8 |
| `events.electronicTemperatureHigh` | [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.2.8 |
| `events.generalFault` | [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.2.8 |
| `events.leakage` | [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.2.8 |
| `events.motorTemperatureHigh` | [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.2.8 |
| `events.powerMissingPhase` | [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.2.8 |
| `events.pumpBlocked` | [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.2.8 |
| `events.pumpMotorFatalFailure` | [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.2.8 |
| `events.sensorFailure` | [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.2.8 |
| `events.supplyVoltageHigh` | [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.2.8 |
| `events.supplyVoltageLow` | [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.2.8 |
| `events.systemPressureHigh` | [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.2.8 |
| `events.systemPressureLow` | [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.2.8 |
| `events.turbineOperation` | [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.2.8 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `maxConstPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = ConstantPressureComponent; `flags`: \{ `constantPressure`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxCompPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstFlow`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstSpeed`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstTemp`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minCompPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstFlow`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstSpeed`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstTemp`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = AutomaticComponent; `flags`: \{ `automatic`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxCompPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minCompPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = CompensatedPressureComponent; `flags`: \{ `compensatedPressure`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxConstSpeed`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstSpeed`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = ConstantSpeedComponent; `flags`: \{ `constantSpeed`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxConstFlow`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstFlow`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = ConstantFlowComponent; `flags`: \{ `constantFlow`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxConstTemp`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstTemp`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = ConstantTemperatureComponent; `flags`: \{ `constantTemperature`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `compensatedPressure`: ``false`` = false; `constantFlow`: ``false`` = false; `constantPressure`: ``false`` = false; `constantSpeed`: ``false`` = false; `constantTemperature`: ``false`` = false }  }] | This metadata controls which PumpConfigurationAndControlCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `automatic`: [`BitFlag`](schema_export.md#bitflag) ; `compensatedPressure`: [`BitFlag`](schema_export.md#bitflag) ; `constantFlow`: [`BitFlag`](schema_export.md#bitflag) ; `constantPressure`: [`BitFlag`](schema_export.md#bitflag) ; `constantSpeed`: [`BitFlag`](schema_export.md#bitflag) ; `constantTemperature`: [`BitFlag`](schema_export.md#bitflag) ; `localOperation`: [`BitFlag`](schema_export.md#bitflag)  } | - |
| `features.automatic` | [`BitFlag`](schema_export.md#bitflag) | Automatic Supports operating in automatic mode |
| `features.compensatedPressure` | [`BitFlag`](schema_export.md#bitflag) | CompensatedPressure Supports operating in compensated pressure mode |
| `features.constantFlow` | [`BitFlag`](schema_export.md#bitflag) | ConstantFlow Supports operating in constant flow mode |
| `features.constantPressure` | [`BitFlag`](schema_export.md#bitflag) | ConstantPressure Supports operating in constant pressure mode |
| `features.constantSpeed` | [`BitFlag`](schema_export.md#bitflag) | ConstantSpeed Supports operating in constant speed mode |
| `features.constantTemperature` | [`BitFlag`](schema_export.md#bitflag) | ConstantTemperature Supports operating in constant temperature mode |
| `features.localOperation` | [`BitFlag`](schema_export.md#bitflag) | LocalOperation Supports operating using local settings |
| `id` | ``512`` | - |
| `name` | ``"PumpConfigurationAndControl"`` | - |
| `revision` | ``4`` | - |

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:536](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L536)

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.PumpConfigurationAndControl.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:942](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L942)

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:944](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L944)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`ExtensibleOnly`](../interfaces/cluster_export.MutableCluster.ExtensibleOnly.md)\<\{ `attributes`: \{ `capacity`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `controlMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`ControlMode`](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveControlMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ControlMode`](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveOperationMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`OperationMode`](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `lifetimeEnergyConsumed`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lifetimeRunningHours`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `maxFlow`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxSpeed`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `operationMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`OperationMode`](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `power`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `pumpStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `deviceFault`: [`BitFlag`](schema_export.md#bitflag) ; `localOverride`: [`BitFlag`](schema_export.md#bitflag) ; `remoteFlow`: [`BitFlag`](schema_export.md#bitflag) ; `remotePressure`: [`BitFlag`](schema_export.md#bitflag) ; `remoteTemperature`: [`BitFlag`](schema_export.md#bitflag) ; `running`: [`BitFlag`](schema_export.md#bitflag) ; `speedHigh`: [`BitFlag`](schema_export.md#bitflag) ; `speedLow`: [`BitFlag`](schema_export.md#bitflag) ; `supplyFault`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `speed`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\>  } ; `events`: \{ `airDetection`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `dryRunning`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `electronicFatalFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `electronicNonFatalFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `electronicTemperatureHigh`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `generalFault`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `leakage`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `motorTemperatureHigh`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `powerMissingPhase`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `pumpBlocked`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `pumpMotorFatalFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `sensorFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageHigh`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageLow`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureHigh`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureLow`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `turbineOperation`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `maxConstPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = ConstantPressureComponent; `flags`: \{ `constantPressure`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxCompPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstFlow`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstSpeed`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstTemp`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minCompPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstFlow`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstSpeed`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstTemp`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = AutomaticComponent; `flags`: \{ `automatic`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxCompPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minCompPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = CompensatedPressureComponent; `flags`: \{ `compensatedPressure`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxConstSpeed`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstSpeed`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = ConstantSpeedComponent; `flags`: \{ `constantSpeed`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxConstFlow`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstFlow`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = ConstantFlowComponent; `flags`: \{ `constantFlow`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `maxConstTemp`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstTemp`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } = ConstantTemperatureComponent; `flags`: \{ `constantTemperature`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `compensatedPressure`: ``false`` = false; `constantFlow`: ``false`` = false; `constantPressure`: ``false`` = false; `constantSpeed`: ``false`` = false; `constantTemperature`: ``false`` = false }  }] ; `features`: \{ `automatic`: [`BitFlag`](schema_export.md#bitflag) ; `compensatedPressure`: [`BitFlag`](schema_export.md#bitflag) ; `constantFlow`: [`BitFlag`](schema_export.md#bitflag) ; `constantPressure`: [`BitFlag`](schema_export.md#bitflag) ; `constantSpeed`: [`BitFlag`](schema_export.md#bitflag) ; `constantTemperature`: [`BitFlag`](schema_export.md#bitflag) ; `localOperation`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``512`` = 0x200; `name`: ``"PumpConfigurationAndControl"`` = "PumpConfigurationAndControl"; `revision`: ``4`` = 4 }\>

**`See`**

[Cluster](cluster_export.PumpConfigurationAndControl.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:927](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L927)

___

### CompensatedPressureComponent

• `Const` **CompensatedPressureComponent**: `Object`

A PumpConfigurationAndControlCluster supports these elements if it supports feature CompensatedPressure.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `maxCompPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minCompPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  } |
| `attributes.maxCompPressure` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.minCompPressure` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:363](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L363)

___

### Complete

• **Complete**: [`Complete`](../interfaces/cluster_export.PumpConfigurationAndControl.Complete.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:1014](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L1014)

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:1016](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L1016)

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `capacity`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `controlMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`ControlMode`](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveControlMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`ControlMode`](../enums/cluster_export.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveOperationMode`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`OperationMode`](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `lifetimeEnergyConsumed`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lifetimeRunningHours`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `maxCompPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `compensatedPressure`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `automatic`: `boolean` = true }]  } ; `maxConstFlow`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `constantFlow`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `automatic`: `boolean` = true }]  } ; `maxConstPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `constantPressure`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `automatic`: `boolean` = true }]  } ; `maxConstSpeed`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `constantSpeed`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `automatic`: `boolean` = true }]  } ; `maxConstTemp`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `constantTemperature`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `automatic`: `boolean` = true }]  } ; `maxFlow`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxSpeed`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minCompPressure`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `compensatedPressure`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `automatic`: `boolean` = true }]  } ; `minConstFlow`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `constantFlow`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `automatic`: `boolean` = true }]  } ; `minConstPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `constantPressure`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `automatic`: `boolean` = true }]  } ; `minConstSpeed`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `constantSpeed`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `automatic`: `boolean` = true }]  } ; `minConstTemp`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `constantTemperature`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `automatic`: `boolean` = true }]  } ; `operationMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`OperationMode`](../enums/cluster_export.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `power`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `pumpStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `deviceFault`: [`BitFlag`](schema_export.md#bitflag) ; `localOverride`: [`BitFlag`](schema_export.md#bitflag) ; `remoteFlow`: [`BitFlag`](schema_export.md#bitflag) ; `remotePressure`: [`BitFlag`](schema_export.md#bitflag) ; `remoteTemperature`: [`BitFlag`](schema_export.md#bitflag) ; `running`: [`BitFlag`](schema_export.md#bitflag) ; `speedHigh`: [`BitFlag`](schema_export.md#bitflag) ; `speedLow`: [`BitFlag`](schema_export.md#bitflag) ; `supplyFault`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `speed`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\>  } ; `events`: \{ `airDetection`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `dryRunning`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `electronicFatalFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `electronicNonFatalFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `electronicTemperatureHigh`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `generalFault`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `leakage`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `motorTemperatureHigh`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `powerMissingPhase`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `pumpBlocked`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `pumpMotorFatalFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `sensorFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageHigh`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageLow`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureHigh`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureLow`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\> ; `turbineOperation`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\>  } = Base.events; `features`: \{ `automatic`: [`BitFlag`](schema_export.md#bitflag) ; `compensatedPressure`: [`BitFlag`](schema_export.md#bitflag) ; `constantFlow`: [`BitFlag`](schema_export.md#bitflag) ; `constantPressure`: [`BitFlag`](schema_export.md#bitflag) ; `constantSpeed`: [`BitFlag`](schema_export.md#bitflag) ; `constantTemperature`: [`BitFlag`](schema_export.md#bitflag) ; `localOperation`: [`BitFlag`](schema_export.md#bitflag)  } = Base.features; `id`: ``512`` = Base.id; `name`: ``"PumpConfigurationAndControl"`` = Base.name; `revision`: ``4`` = Base.revision }\>

**`See`**

[Complete](cluster_export.PumpConfigurationAndControl.md#complete)

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:955](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L955)

___

### ConstantFlowComponent

• `Const` **ConstantFlowComponent**: `Object`

A PumpConfigurationAndControlCluster supports these elements if it supports feature ConstantFlow.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `maxConstFlow`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstFlow`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  } |
| `attributes.maxConstFlow` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.minConstFlow` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:419](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L419)

___

### ConstantPressureComponent

• `Const` **ConstantPressureComponent**: `Object`

A PumpConfigurationAndControlCluster supports these elements if it supports feature ConstantPressure.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `maxConstPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstPressure`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  } |
| `attributes.maxConstPressure` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.minConstPressure` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:216](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L216)

___

### ConstantSpeedComponent

• `Const` **ConstantSpeedComponent**: `Object`

A PumpConfigurationAndControlCluster supports these elements if it supports feature ConstantSpeed.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `maxConstSpeed`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstSpeed`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  } |
| `attributes.maxConstSpeed` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.minConstSpeed` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:392](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L392)

___

### ConstantTemperatureComponent

• `Const` **ConstantTemperatureComponent**: `Object`

A PumpConfigurationAndControlCluster supports these elements if it supports feature ConstantTemperature.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `maxConstTemp`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstTemp`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\>  } |
| `attributes.maxConstTemp` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.minConstTemp` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<``null`` \| `number`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:449](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L449)

___

### PumpStatusBitmap

• `Const` **PumpStatusBitmap**: `Object`

**`See`**

MatterSpecification.v11.Cluster § 4.2.6.1

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `deviceFault` | [`BitFlag`](schema_export.md#bitflag) | A fault related to the system or pump device is detected. If this bit is set, it may correspond to an event in the range 2-16, see Events. **`See`** MatterSpecification.v11.Cluster § 4.2.6.1.1 |
| `localOverride` | [`BitFlag`](schema_export.md#bitflag) | Device control is overridden by hardware, such as an external STOP button or via a local HMI. While this bit is set, the EffectiveOperationMode is adjusted to Local. Any request changing OperationMode shall generate a FAILURE error status until LocalOverride is cleared on the physical device. When LocalOverride is cleared, the device shall return to the operation mode set in OperationMode. **`See`** MatterSpecification.v11.Cluster § 4.2.6.1.3 |
| `remoteFlow` | [`BitFlag`](schema_export.md#bitflag) | A remote flow sensor is used as the sensor for the regulation of the pump. If this bit is set, EffectiveControlMode is ConstantFlow, and the setpoint for the pump is interpreted as a percentage of the range of the remote sensor ([MinMeasuredValue – MaxMeasuredValue]). **`See`** MatterSpecification.v11.Cluster § 4.2.6.1.5 |
| `remotePressure` | [`BitFlag`](schema_export.md#bitflag) | A remote pressure sensor is used as the sensor for the regulation of the pump. If this bit is set, EffectiveControlMode is ConstantPressure and the setpoint for the pump is interpreted as a percentage of the range of the remote sensor ([MinMeasuredValue – MaxMeasuredValue]). **`See`** MatterSpecification.v11.Cluster § 4.2.6.1.4 |
| `remoteTemperature` | [`BitFlag`](schema_export.md#bitflag) | A remote temperature sensor is used as the sensor for the regulation of the pump. If this bit is set, EffectiveControlMode is ConstantTemperature, and the setpoint for the pump is interpreted as a percentage of the range of the remote sensor ([MinMeasuredValue – MaxMeasuredValue]) **`See`** MatterSpecification.v11.Cluster § 4.2.6.1.6 |
| `running` | [`BitFlag`](schema_export.md#bitflag) | Pump is currently running |
| `speedHigh` | [`BitFlag`](schema_export.md#bitflag) | Setpoint is too high to achieve. |
| `speedLow` | [`BitFlag`](schema_export.md#bitflag) | Setpoint is too low to achieve. |
| `supplyFault` | [`BitFlag`](schema_export.md#bitflag) | A fault related to the supply to the pump is detected. If this bit is set, it may correspond to an event in the range 0-1 or 13, see Events. **`See`** MatterSpecification.v11.Cluster § 4.2.6.1.2 |

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L32)
