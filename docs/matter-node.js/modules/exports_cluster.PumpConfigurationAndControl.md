[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / PumpConfigurationAndControl

# Namespace: PumpConfigurationAndControl

[exports/cluster](exports_cluster.md).PumpConfigurationAndControl

## Table of contents

### Enumerations

- [ControlMode](../enums/exports_cluster.PumpConfigurationAndControl.ControlMode.md)
- [Feature](../enums/exports_cluster.PumpConfigurationAndControl.Feature.md)
- [OperationMode](../enums/exports_cluster.PumpConfigurationAndControl.OperationMode.md)

### Interfaces

- [Cluster](../interfaces/exports_cluster.PumpConfigurationAndControl.Cluster.md)
- [Complete](../interfaces/exports_cluster.PumpConfigurationAndControl.Complete.md)

### Variables

- [AutomaticComponent](exports_cluster.PumpConfigurationAndControl.md#automaticcomponent)
- [Base](exports_cluster.PumpConfigurationAndControl.md#base)
- [Cluster](exports_cluster.PumpConfigurationAndControl.md#cluster)
- [ClusterInstance](exports_cluster.PumpConfigurationAndControl.md#clusterinstance)
- [CompensatedPressureComponent](exports_cluster.PumpConfigurationAndControl.md#compensatedpressurecomponent)
- [Complete](exports_cluster.PumpConfigurationAndControl.md#complete)
- [CompleteInstance](exports_cluster.PumpConfigurationAndControl.md#completeinstance)
- [ConstantFlowComponent](exports_cluster.PumpConfigurationAndControl.md#constantflowcomponent)
- [ConstantPressureComponent](exports_cluster.PumpConfigurationAndControl.md#constantpressurecomponent)
- [ConstantSpeedComponent](exports_cluster.PumpConfigurationAndControl.md#constantspeedcomponent)
- [ConstantTemperatureComponent](exports_cluster.PumpConfigurationAndControl.md#constanttemperaturecomponent)
- [PumpStatusBitmap](exports_cluster.PumpConfigurationAndControl.md#pumpstatusbitmap)

## Variables

### AutomaticComponent

• `Const` **AutomaticComponent**: `Object`

A PumpConfigurationAndControlCluster supports these elements if it supports feature Automatic.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `maxCompPressure`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `maxConstFlow`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `maxConstPressure`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `maxConstSpeed`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `maxConstTemp`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minCompPressure`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minConstFlow`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minConstPressure`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minConstSpeed`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minConstTemp`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\>  } |
| `attributes.maxCompPressure` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.maxConstFlow` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.maxConstPressure` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.maxConstSpeed` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.maxConstTemp` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.minCompPressure` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.minConstFlow` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.minConstPressure` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.minConstSpeed` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.minConstTemp` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:207

___

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all PumpConfigurationAndControl clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `capacity`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `controlMode`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`ControlMode`](../enums/exports_cluster.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveControlMode`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`ControlMode`](../enums/exports_cluster.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveOperationMode`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`OperationMode`](../enums/exports_cluster.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `lifetimeEnergyConsumed`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `lifetimeRunningHours`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `maxFlow`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `maxPressure`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `maxSpeed`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `operationMode`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`OperationMode`](../enums/exports_cluster.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `power`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `pumpStatus`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `speed`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\>  } | - |
| `attributes.capacity` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> | This attribute specifies the actual capacity of the pump as a percentage of the effective maximum setpoint value. It is updated dynamically as the speed of the pump changes. If the value is not available (the measurement or estimation of the speed is done in the pump), this attribute will indicate the null value. Valid range is 0 % to 163.835% (0.005 % granularity). Although this attribute is a signed value, values of capacity less than zero have no physical meaning. **`See`** MatterSpecification.v11.Cluster § 4.2.7.17 |
| `attributes.controlMode` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`ControlMode`](../enums/exports_cluster.PumpConfigurationAndControl.ControlMode.md), `any`\> | This attribute specifies the control mode of the pump as defined in ControlModeEnum. See the OperationMode attribute for a detailed description of the operation and control of the pump. ControlMode may be changed at any time, even when the pump is running. The behavior of the pump at the point of changing is vendor-specific. In the case a device does not support a specific control mode, the write interaction to this attribute with an unsupported control mode value shall be ignored and a response containing the status of CONSTRAINT_ERROR shall be returned. **`See`** MatterSpecification.v11.Cluster § 4.2.7.23 |
| `attributes.effectiveControlMode` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`ControlMode`](../enums/exports_cluster.PumpConfigurationAndControl.ControlMode.md), `any`\> | This attribute specifies the current effective control mode of the pump as defined in ControlModeEnum. This attribute contains the control mode that currently applies to the pump. It will have the value of the ControlMode attribute, unless one of the following points are true: • The ControlMode attribute is set to Automatic. In this case, the value of the EffectiveControlMode shall match the behavior of the pump. • A remote sensor is used as the sensor for regulation of the pump. In this case, EffectiveControlMode will display ConstantPressure, ConstantFlow or ConstantTemperature if the remote sensor is a pressure sensor, a flow sensor or a temperature sensor respectively, regardless of the value of the ControlMode attribute. In case the ControlMode attribute is not included on the device and no remote sensors are connected, the value of the EffectiveControlMode shall match the vendor-specific behavior of the pump. See OperationMode and ControlMode attributes for detailed a description of the operation and control of the pump. **`See`** MatterSpecification.v11.Cluster § 4.2.7.16 |
| `attributes.effectiveOperationMode` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`OperationMode`](../enums/exports_cluster.PumpConfigurationAndControl.OperationMode.md), `any`\> | This attribute specifies current effective operation mode of the pump as defined in OperationModeEnum. The value of the EffectiveOperationMode attribute is the same as the OperationMode attribute, unless one of the following points are true: • The pump is physically set to run with the local settings • The LocalOverride bit in the PumpStatus attribute is set, See OperationMode and ControlMode attributes for a detailed description of the operation and control of the pump. **`See`** MatterSpecification.v11.Cluster § 4.2.7.15 |
| `attributes.lifetimeEnergyConsumed` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> | This attribute specifies the accumulated energy consumption of the pump through the entire lifetime of the pump in kWh. The value of the LifetimeEnergyConsumed attribute is updated dynamically as the energy consumption of the pump increases. If LifetimeEnergyConsumed rises above maximum value it “rolls over” and starts at 0 (zero). This attribute is writeable, in order to allow setting to an appropriate value after maintenance. Valid range is 0 kWh to 4,294,967,294 kWh. This attribute shall be null if the value is unknown. **`See`** MatterSpecification.v11.Cluster § 4.2.7.21 |
| `attributes.lifetimeRunningHours` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> | This attribute specifies the accumulated number of hours that the pump has been powered and the motor has been running. It is updated dynamically as it increases. It is preserved over power cycles of the pump. If LifeTimeRunningHours rises above maximum value it “rolls over” and starts at 0 (zero). This attribute is writeable, in order to allow setting to an appropriate value after maintenance. If the value is not available, this attribute will indicate the null value. Valid range is 0 to 16,777,214 hrs. **`See`** MatterSpecification.v11.Cluster § 4.2.7.19 |
| `attributes.maxFlow` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> | This attribute specifies the maximum flow the pump can achieve. It is a physical limit, and does not apply to any specific control mode or operation mode. Valid range is 0 m/h to 6,553.4 m/h (steps of 0.1 m/h). This attribute shall be null if the value is invalid. **`See`** MatterSpecification.v11.Cluster § 4.2.7.3 |
| `attributes.maxPressure` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> | This attribute specifies the maximum pressure the pump can achieve. It is a physical limit, and does not apply to any specific control mode or operation mode. Valid range is -3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). This attribute shall be null if the value is invalid. **`See`** MatterSpecification.v11.Cluster § 4.2.7.1 |
| `attributes.maxSpeed` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> | This attribute specifies the maximum speed the pump can achieve. It is a physical limit, and does not apply to any specific control mode or operation mode. Valid range is 0 to 65,534 RPM (steps of 1 RPM). This attribute shall be null if the value is invalid. **`See`** MatterSpecification.v11.Cluster § 4.2.7.2 |
| `attributes.operationMode` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`OperationMode`](../enums/exports_cluster.PumpConfigurationAndControl.OperationMode.md), `any`\> | This attribute specifies the operation mode of the pump as defined in OperationModeEnum. The actual operating mode of the pump is a result of the setting of the attributes OperationMode, ControlMode and the optional connection of a remote sensor. The operation and control is prioritized as shown in the scheme below: Priority Scheme of Pump Operation and Control If this attribute is Maximum, Minimum or Local, the OperationMode attribute decides how the pump is operated. If this attribute is Normal and a remote sensor is connected to the pump, the type of the remote sensor decides the control mode of the pump. A connected remote pressure sensor will make the pump run in control mode Constant pressure and vice versa for flow and temperature type sensors. This is regardless of the setting of the ControlMode attribute. If this attribute is Normal and no remote sensor is connected, the control mode of the pump is decided by the ControlMode attribute. OperationMode may be changed at any time, even when the pump is running. The behavior of the pump at the point of changing the value of this attribute is vendor-specific. In the case a device does not support a specific operation mode, the write interaction to this attribute with an unsupported operation mode value shall be ignored and a response containing the status of CONSTRAINT_ERROR shall be returned. **`See`** MatterSpecification.v11.Cluster § 4.2.7.22 |
| `attributes.power` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> | This attribute specifies the actual power consumption of the pump in Watts. The value of this attribute is updated dynamically as the power consumption of the pump changes. This attribute is read only. If the value is not available (the measurement of power consumption is not done in the pump), this attribute will indicate the null value. Valid range is 0 to 16,777,214 Watts. **`See`** MatterSpecification.v11.Cluster § 4.2.7.20 |
| `attributes.pumpStatus` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> | This attribute specifies the activity status of the pump functions as listed in PumpStatusBitmap. Where a pump controller function is active, the corresponding bit shall be set to 1. Where a pump controller function is not active, the corresponding bit shall be set to 0. **`See`** MatterSpecification.v11.Cluster § 4.2.7.14 |
| `attributes.speed` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> | This attribute specifies the actual speed of the pump measured in RPM. It is updated dynamically as the speed of the pump changes. If the value is not available (the measurement or estimation of the speed is done in the pump), this attribute will indicate the null value. Valid range is 0 to 65.534 RPM. **`See`** MatterSpecification.v11.Cluster § 4.2.7.18 |
| `events` | \{ `airDetection`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `dryRunning`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `electronicFatalFailure`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `electronicNonFatalFailure`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `electronicTemperatureHigh`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `generalFault`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `leakage`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `motorTemperatureHigh`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `powerMissingPhase`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `pumpBlocked`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `pumpMotorFatalFailure`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `sensorFailure`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageHigh`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageLow`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureHigh`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureLow`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `turbineOperation`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\>  } | - |
| `events.airDetection` | [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.2.8 |
| `events.dryRunning` | [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.2.8 |
| `events.electronicFatalFailure` | [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.2.8 |
| `events.electronicNonFatalFailure` | [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.2.8 |
| `events.electronicTemperatureHigh` | [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.2.8 |
| `events.generalFault` | [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.2.8 |
| `events.leakage` | [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.2.8 |
| `events.motorTemperatureHigh` | [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.2.8 |
| `events.powerMissingPhase` | [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.2.8 |
| `events.pumpBlocked` | [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.2.8 |
| `events.pumpMotorFatalFailure` | [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.2.8 |
| `events.sensorFailure` | [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.2.8 |
| `events.supplyVoltageHigh` | [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.2.8 |
| `events.supplyVoltageLow` | [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.2.8 |
| `events.systemPressureHigh` | [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.2.8 |
| `events.systemPressureLow` | [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.2.8 |
| `events.turbineOperation` | [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> | **`See`** MatterSpecification.v11.Cluster § 4.2.8 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `maxConstPressure`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minConstPressure`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\>  }  } ; `flags`: \{ `constantPressure`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `maxCompPressure`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `maxConstFlow`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `maxConstPressure`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `maxConstSpeed`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `maxConstTemp`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minCompPressure`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minConstFlow`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minConstPressure`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minConstSpeed`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minConstTemp`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\>  }  } ; `flags`: \{ `automatic`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `maxCompPressure`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minCompPressure`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\>  }  } ; `flags`: \{ `compensatedPressure`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `maxConstSpeed`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minConstSpeed`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\>  }  } ; `flags`: \{ `constantSpeed`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `maxConstFlow`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minConstFlow`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\>  }  } ; `flags`: \{ `constantFlow`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `maxConstTemp`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minConstTemp`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\>  }  } ; `flags`: \{ `constantTemperature`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `compensatedPressure`: ``false`` ; `constantFlow`: ``false`` ; `constantPressure`: ``false`` ; `constantSpeed`: ``false`` ; `constantTemperature`: ``false``  }  }] | This metadata controls which PumpConfigurationAndControlCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `automatic`: [`BitFlag`](exports_schema.md#bitflag) ; `compensatedPressure`: [`BitFlag`](exports_schema.md#bitflag) ; `constantFlow`: [`BitFlag`](exports_schema.md#bitflag) ; `constantPressure`: [`BitFlag`](exports_schema.md#bitflag) ; `constantSpeed`: [`BitFlag`](exports_schema.md#bitflag) ; `constantTemperature`: [`BitFlag`](exports_schema.md#bitflag) ; `localOperation`: [`BitFlag`](exports_schema.md#bitflag)  } | - |
| `features.automatic` | [`BitFlag`](exports_schema.md#bitflag) | Automatic Supports operating in automatic mode |
| `features.compensatedPressure` | [`BitFlag`](exports_schema.md#bitflag) | CompensatedPressure Supports operating in compensated pressure mode |
| `features.constantFlow` | [`BitFlag`](exports_schema.md#bitflag) | ConstantFlow Supports operating in constant flow mode |
| `features.constantPressure` | [`BitFlag`](exports_schema.md#bitflag) | ConstantPressure Supports operating in constant pressure mode |
| `features.constantSpeed` | [`BitFlag`](exports_schema.md#bitflag) | ConstantSpeed Supports operating in constant speed mode |
| `features.constantTemperature` | [`BitFlag`](exports_schema.md#bitflag) | ConstantTemperature Supports operating in constant temperature mode |
| `features.localOperation` | [`BitFlag`](exports_schema.md#bitflag) | LocalOperation Supports operating using local settings |
| `id` | ``512`` | - |
| `name` | ``"PumpConfigurationAndControl"`` | - |
| `revision` | ``4`` | - |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:473

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.PumpConfigurationAndControl.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:1767

packages/matter.js/dist/esm/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:1769

___

### ClusterInstance

• `Const` **ClusterInstance**: [`ExtensibleOnly`](../interfaces/exports_cluster.MutableCluster.ExtensibleOnly.md)\<\{ `attributes`: \{ `capacity`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `controlMode`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`ControlMode`](../enums/exports_cluster.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveControlMode`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`ControlMode`](../enums/exports_cluster.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveOperationMode`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`OperationMode`](../enums/exports_cluster.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `lifetimeEnergyConsumed`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `lifetimeRunningHours`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `maxFlow`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `maxPressure`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `maxSpeed`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `operationMode`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`OperationMode`](../enums/exports_cluster.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `power`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `pumpStatus`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `speed`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\>  } ; `events`: \{ `airDetection`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `dryRunning`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `electronicFatalFailure`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `electronicNonFatalFailure`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `electronicTemperatureHigh`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `generalFault`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `leakage`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `motorTemperatureHigh`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `powerMissingPhase`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `pumpBlocked`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `pumpMotorFatalFailure`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `sensorFailure`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageHigh`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageLow`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureHigh`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureLow`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `turbineOperation`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `maxConstPressure`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minConstPressure`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\>  }  } ; `flags`: \{ `constantPressure`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `maxCompPressure`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `maxConstFlow`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `maxConstPressure`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `maxConstSpeed`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `maxConstTemp`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minCompPressure`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minConstFlow`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minConstPressure`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minConstSpeed`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minConstTemp`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\>  }  } ; `flags`: \{ `automatic`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `maxCompPressure`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minCompPressure`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\>  }  } ; `flags`: \{ `compensatedPressure`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `maxConstSpeed`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minConstSpeed`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\>  }  } ; `flags`: \{ `constantSpeed`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `maxConstFlow`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minConstFlow`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\>  }  } ; `flags`: \{ `constantFlow`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `maxConstTemp`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minConstTemp`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\>  }  } ; `flags`: \{ `constantTemperature`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `compensatedPressure`: ``false`` ; `constantFlow`: ``false`` ; `constantPressure`: ``false`` ; `constantSpeed`: ``false`` ; `constantTemperature`: ``false``  }  }] ; `features`: \{ `automatic`: [`BitFlag`](exports_schema.md#bitflag) ; `compensatedPressure`: [`BitFlag`](exports_schema.md#bitflag) ; `constantFlow`: [`BitFlag`](exports_schema.md#bitflag) ; `constantPressure`: [`BitFlag`](exports_schema.md#bitflag) ; `constantSpeed`: [`BitFlag`](exports_schema.md#bitflag) ; `constantTemperature`: [`BitFlag`](exports_schema.md#bitflag) ; `localOperation`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``512`` ; `name`: ``"PumpConfigurationAndControl"`` ; `revision`: ``4``  }\>

**`See`**

[Cluster](exports_cluster.PumpConfigurationAndControl.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:1115

___

### CompensatedPressureComponent

• `Const` **CompensatedPressureComponent**: `Object`

A PumpConfigurationAndControlCluster supports these elements if it supports feature CompensatedPressure.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `maxCompPressure`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minCompPressure`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\>  } |
| `attributes.maxCompPressure` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.minCompPressure` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:315

___

### Complete

• **Complete**: [`Complete`](../interfaces/exports_cluster.PumpConfigurationAndControl.Complete.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:2254

packages/matter.js/dist/esm/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:2256

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `capacity`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `controlMode`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`ControlMode`](../enums/exports_cluster.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveControlMode`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`ControlMode`](../enums/exports_cluster.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveOperationMode`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`OperationMode`](../enums/exports_cluster.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `lifetimeEnergyConsumed`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `lifetimeRunningHours`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `maxCompPressure`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `compensatedPressure`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `automatic`: `boolean`  }]  } ; `maxConstFlow`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `constantFlow`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `automatic`: `boolean`  }]  } ; `maxConstPressure`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `constantPressure`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `automatic`: `boolean`  }]  } ; `maxConstSpeed`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `constantSpeed`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `automatic`: `boolean`  }]  } ; `maxConstTemp`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `constantTemperature`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `automatic`: `boolean`  }]  } ; `maxFlow`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `maxPressure`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `maxSpeed`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minCompPressure`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `compensatedPressure`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `automatic`: `boolean`  }]  } ; `minConstFlow`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `constantFlow`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `automatic`: `boolean`  }]  } ; `minConstPressure`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `constantPressure`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `automatic`: `boolean`  }]  } ; `minConstSpeed`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `constantSpeed`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `automatic`: `boolean`  }]  } ; `minConstTemp`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `constantTemperature`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `automatic`: `boolean`  }]  } ; `operationMode`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`OperationMode`](../enums/exports_cluster.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `power`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `pumpStatus`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `speed`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\>  } ; `events`: \{ `airDetection`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `dryRunning`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `electronicFatalFailure`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `electronicNonFatalFailure`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `electronicTemperatureHigh`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `generalFault`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `leakage`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `motorTemperatureHigh`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `powerMissingPhase`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `pumpBlocked`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `pumpMotorFatalFailure`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `sensorFailure`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageHigh`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageLow`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureHigh`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureLow`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `turbineOperation`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\>  } ; `features`: \{ `automatic`: [`BitFlag`](exports_schema.md#bitflag) ; `compensatedPressure`: [`BitFlag`](exports_schema.md#bitflag) ; `constantFlow`: [`BitFlag`](exports_schema.md#bitflag) ; `constantPressure`: [`BitFlag`](exports_schema.md#bitflag) ; `constantSpeed`: [`BitFlag`](exports_schema.md#bitflag) ; `constantTemperature`: [`BitFlag`](exports_schema.md#bitflag) ; `localOperation`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``512`` ; `name`: ``"PumpConfigurationAndControl"`` ; `revision`: ``4``  }\>

**`See`**

[Complete](exports_cluster.PumpConfigurationAndControl.md#complete)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:1773

___

### ConstantFlowComponent

• `Const` **ConstantFlowComponent**: `Object`

A PumpConfigurationAndControlCluster supports these elements if it supports feature ConstantFlow.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `maxConstFlow`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minConstFlow`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\>  } |
| `attributes.maxConstFlow` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.minConstFlow` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:367

___

### ConstantPressureComponent

• `Const` **ConstantPressureComponent**: `Object`

A PumpConfigurationAndControlCluster supports these elements if it supports feature ConstantPressure.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `maxConstPressure`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minConstPressure`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\>  } |
| `attributes.maxConstPressure` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.minConstPressure` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:180

___

### ConstantSpeedComponent

• `Const` **ConstantSpeedComponent**: `Object`

A PumpConfigurationAndControlCluster supports these elements if it supports feature ConstantSpeed.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `maxConstSpeed`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minConstSpeed`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\>  } |
| `attributes.maxConstSpeed` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.minConstSpeed` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:342

___

### ConstantTemperatureComponent

• `Const` **ConstantTemperatureComponent**: `Object`

A PumpConfigurationAndControlCluster supports these elements if it supports feature ConstantTemperature.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `maxConstTemp`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minConstTemp`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\>  } |
| `attributes.maxConstTemp` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.minConstTemp` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:395

___

### PumpStatusBitmap

• `Const` **PumpStatusBitmap**: `Object`

**`See`**

MatterSpecification.v11.Cluster § 4.2.6.1

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `deviceFault` | [`BitFlag`](exports_schema.md#bitflag) | A fault related to the system or pump device is detected. If this bit is set, it may correspond to an event in the range 2-16, see Events. **`See`** MatterSpecification.v11.Cluster § 4.2.6.1.1 |
| `localOverride` | [`BitFlag`](exports_schema.md#bitflag) | Device control is overridden by hardware, such as an external STOP button or via a local HMI. While this bit is set, the EffectiveOperationMode is adjusted to Local. Any request changing OperationMode shall generate a FAILURE error status until LocalOverride is cleared on the physical device. When LocalOverride is cleared, the device shall return to the operation mode set in OperationMode. **`See`** MatterSpecification.v11.Cluster § 4.2.6.1.3 |
| `remoteFlow` | [`BitFlag`](exports_schema.md#bitflag) | A remote flow sensor is used as the sensor for the regulation of the pump. If this bit is set, EffectiveControlMode is ConstantFlow, and the setpoint for the pump is interpreted as a percentage of the range of the remote sensor ([MinMeasuredValue – MaxMeasuredValue]). **`See`** MatterSpecification.v11.Cluster § 4.2.6.1.5 |
| `remotePressure` | [`BitFlag`](exports_schema.md#bitflag) | A remote pressure sensor is used as the sensor for the regulation of the pump. If this bit is set, EffectiveControlMode is ConstantPressure and the setpoint for the pump is interpreted as a percentage of the range of the remote sensor ([MinMeasuredValue – MaxMeasuredValue]). **`See`** MatterSpecification.v11.Cluster § 4.2.6.1.4 |
| `remoteTemperature` | [`BitFlag`](exports_schema.md#bitflag) | A remote temperature sensor is used as the sensor for the regulation of the pump. If this bit is set, EffectiveControlMode is ConstantTemperature, and the setpoint for the pump is interpreted as a percentage of the range of the remote sensor ([MinMeasuredValue – MaxMeasuredValue]) **`See`** MatterSpecification.v11.Cluster § 4.2.6.1.6 |
| `running` | [`BitFlag`](exports_schema.md#bitflag) | Pump is currently running |
| `speedHigh` | [`BitFlag`](exports_schema.md#bitflag) | Setpoint is too high to achieve. |
| `speedLow` | [`BitFlag`](exports_schema.md#bitflag) | Setpoint is too low to achieve. |
| `supplyFault` | [`BitFlag`](exports_schema.md#bitflag) | A fault related to the supply to the pump is detected. If this bit is set, it may correspond to an event in the range 0-1 or 13, see Events. **`See`** MatterSpecification.v11.Cluster § 4.2.6.1.2 |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:15
