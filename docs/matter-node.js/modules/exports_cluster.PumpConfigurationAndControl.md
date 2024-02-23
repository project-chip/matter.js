[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / PumpConfigurationAndControl

# Namespace: PumpConfigurationAndControl

[exports/cluster](exports_cluster.md).PumpConfigurationAndControl

## Table of contents

### Enumerations

- [ControlMode](../enums/exports_cluster.PumpConfigurationAndControl.ControlMode.md)
- [Feature](../enums/exports_cluster.PumpConfigurationAndControl.Feature.md)
- [OperationMode](../enums/exports_cluster.PumpConfigurationAndControl.OperationMode.md)

### Type Aliases

- [Extension](exports_cluster.PumpConfigurationAndControl.md#extension)

### Variables

- [AutomaticComponent](exports_cluster.PumpConfigurationAndControl.md#automaticcomponent)
- [Base](exports_cluster.PumpConfigurationAndControl.md#base)
- [Cluster](exports_cluster.PumpConfigurationAndControl.md#cluster)
- [CompensatedPressureComponent](exports_cluster.PumpConfigurationAndControl.md#compensatedpressurecomponent)
- [Complete](exports_cluster.PumpConfigurationAndControl.md#complete)
- [ConstantFlowComponent](exports_cluster.PumpConfigurationAndControl.md#constantflowcomponent)
- [ConstantPressureComponent](exports_cluster.PumpConfigurationAndControl.md#constantpressurecomponent)
- [ConstantSpeedComponent](exports_cluster.PumpConfigurationAndControl.md#constantspeedcomponent)
- [ConstantTemperatureComponent](exports_cluster.PumpConfigurationAndControl.md#constanttemperaturecomponent)
- [PumpStatusBitmap](exports_cluster.PumpConfigurationAndControl.md#pumpstatusbitmap)

## Type Aliases

### Extension

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](exports_cluster.PumpConfigurationAndControl.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  } & `SF` extends \{ `constantPressure`: ``true``  } ? typeof [`ConstantPressureComponent`](exports_cluster.PumpConfigurationAndControl.md#constantpressurecomponent) : {} & `SF` extends \{ `automatic`: ``true``  } ? typeof [`AutomaticComponent`](exports_cluster.PumpConfigurationAndControl.md#automaticcomponent) : {} & `SF` extends \{ `compensatedPressure`: ``true``  } ? typeof [`CompensatedPressureComponent`](exports_cluster.PumpConfigurationAndControl.md#compensatedpressurecomponent) : {} & `SF` extends \{ `constantSpeed`: ``true``  } ? typeof [`ConstantSpeedComponent`](exports_cluster.PumpConfigurationAndControl.md#constantspeedcomponent) : {} & `SF` extends \{ `constantFlow`: ``true``  } ? typeof [`ConstantFlowComponent`](exports_cluster.PumpConfigurationAndControl.md#constantflowcomponent) : {} & `SF` extends \{ `constantTemperature`: ``true``  } ? typeof [`ConstantTemperatureComponent`](exports_cluster.PumpConfigurationAndControl.md#constanttemperaturecomponent) : {} & `SF` extends \{ `compensatedPressure`: ``false`` ; `constantFlow`: ``false`` ; `constantPressure`: ``false`` ; `constantSpeed`: ``false`` ; `constantTemperature`: ``false``  } ? `never` : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:1742

## Variables

### AutomaticComponent

• `Const` **AutomaticComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `maxCompPressure`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `maxConstFlow`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `maxConstPressure`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `maxConstSpeed`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `maxConstTemp`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minCompPressure`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minConstFlow`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minConstPressure`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minConstSpeed`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minConstTemp`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\>  }  }\>

A PumpConfigurationAndControlCluster supports these elements if it supports feature Automatic.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:633

___

### Base

• `Const` **Base**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `capacity`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `controlMode`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`ControlMode`](../enums/exports_cluster.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveControlMode`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`ControlMode`](../enums/exports_cluster.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveOperationMode`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`OperationMode`](../enums/exports_cluster.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `lifetimeEnergyConsumed`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `lifetimeRunningHours`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `maxFlow`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `maxPressure`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `maxSpeed`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `operationMode`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`OperationMode`](../enums/exports_cluster.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `power`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `pumpStatus`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `speed`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\>  } ; `events`: \{ `airDetection`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `dryRunning`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `electronicFatalFailure`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `electronicNonFatalFailure`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `electronicTemperatureHigh`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `generalFault`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `leakage`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `motorTemperatureHigh`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `powerMissingPhase`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `pumpBlocked`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `pumpMotorFatalFailure`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `sensorFailure`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageHigh`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageLow`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureHigh`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureLow`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `turbineOperation`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\>  } ; `features`: \{ `automatic`: [`BitFlag`](exports_schema.md#bitflag) ; `compensatedPressure`: [`BitFlag`](exports_schema.md#bitflag) ; `constantFlow`: [`BitFlag`](exports_schema.md#bitflag) ; `constantPressure`: [`BitFlag`](exports_schema.md#bitflag) ; `constantSpeed`: [`BitFlag`](exports_schema.md#bitflag) ; `constantTemperature`: [`BitFlag`](exports_schema.md#bitflag) ; `localOperation`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``512`` ; `name`: ``"PumpConfigurationAndControl"`` ; `revision`: ``4``  }\>

These elements and properties are present in all PumpConfigurationAndControl clusters.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:228

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: {} ; `events`: \{ `airDetection`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `dryRunning`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `electronicFatalFailure`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `electronicNonFatalFailure`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `electronicTemperatureHigh`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `generalFault`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `leakage`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `motorTemperatureHigh`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `powerMissingPhase`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `pumpBlocked`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `pumpMotorFatalFailure`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `sensorFailure`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageHigh`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageLow`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureHigh`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureLow`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `turbineOperation`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\>  } ; `features`: \{ `automatic`: [`BitFlag`](exports_schema.md#bitflag) ; `compensatedPressure`: [`BitFlag`](exports_schema.md#bitflag) ; `constantFlow`: [`BitFlag`](exports_schema.md#bitflag) ; `constantPressure`: [`BitFlag`](exports_schema.md#bitflag) ; `constantSpeed`: [`BitFlag`](exports_schema.md#bitflag) ; `constantTemperature`: [`BitFlag`](exports_schema.md#bitflag) ; `localOperation`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"PumpConfigurationAndControl"`` ; `revision`: ``4`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `capacity`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `controlMode`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`ControlMode`](../enums/exports_cluster.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveControlMode`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`ControlMode`](../enums/exports_cluster.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveOperationMode`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`OperationMode`](../enums/exports_cluster.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `lifetimeEnergyConsumed`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `lifetimeRunningHours`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `maxFlow`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `maxPressure`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `maxSpeed`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `operationMode`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`OperationMode`](../enums/exports_cluster.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `power`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `pumpStatus`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `speed`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\>  } ; `events`: \{ `airDetection`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `dryRunning`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `electronicFatalFailure`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `electronicNonFatalFailure`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `electronicTemperatureHigh`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `generalFault`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `leakage`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `motorTemperatureHigh`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `powerMissingPhase`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `pumpBlocked`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `pumpMotorFatalFailure`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `sensorFailure`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageHigh`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageLow`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureHigh`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureLow`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `turbineOperation`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\>  } ; `features`: \{ `automatic`: [`BitFlag`](exports_schema.md#bitflag) ; `compensatedPressure`: [`BitFlag`](exports_schema.md#bitflag) ; `constantFlow`: [`BitFlag`](exports_schema.md#bitflag) ; `constantPressure`: [`BitFlag`](exports_schema.md#bitflag) ; `constantSpeed`: [`BitFlag`](exports_schema.md#bitflag) ; `constantTemperature`: [`BitFlag`](exports_schema.md#bitflag) ; `localOperation`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``512`` ; `name`: ``"PumpConfigurationAndControl"`` ; `revision`: ``4``  }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.PumpConfigurationAndControl.md#extension)\<[`BitFlags`](exports_schema.md#bitflags)\<\{ `automatic`: [`BitFlag`](exports_schema.md#bitflag) ; `compensatedPressure`: [`BitFlag`](exports_schema.md#bitflag) ; `constantFlow`: [`BitFlag`](exports_schema.md#bitflag) ; `constantPressure`: [`BitFlag`](exports_schema.md#bitflag) ; `constantSpeed`: [`BitFlag`](exports_schema.md#bitflag) ; `constantTemperature`: [`BitFlag`](exports_schema.md#bitflag) ; `localOperation`: [`BitFlag`](exports_schema.md#bitflag)  }, `T`\>\>  }

Pump Configuration and Control

The Pump Configuration and Control cluster provides an interface for the setup and control of pump devices, and
the automatic reporting of pump status information. Note that control of pump speed is not included – speed is
controlled by the On/Off and Level Control clusters.

PumpConfigurationAndControlCluster supports optional features that you can enable with the
PumpConfigurationAndControlCluster.with() factory method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:859

___

### CompensatedPressureComponent

• `Const` **CompensatedPressureComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `maxCompPressure`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minCompPressure`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\>  }  }\>

A PumpConfigurationAndControlCluster supports these elements if it supports feature CompensatedPressure.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:741

___

### Complete

• `Const` **Complete**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `capacity`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `clusterRevision`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `never`\> ; `controlMode`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`ControlMode`](../enums/exports_cluster.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveControlMode`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`ControlMode`](../enums/exports_cluster.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveOperationMode`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`OperationMode`](../enums/exports_cluster.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `eventList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<\{ `automatic`: [`BitFlag`](exports_schema.md#bitflag) ; `compensatedPressure`: [`BitFlag`](exports_schema.md#bitflag) ; `constantFlow`: [`BitFlag`](exports_schema.md#bitflag) ; `constantPressure`: [`BitFlag`](exports_schema.md#bitflag) ; `constantSpeed`: [`BitFlag`](exports_schema.md#bitflag) ; `constantTemperature`: [`BitFlag`](exports_schema.md#bitflag) ; `localOperation`: [`BitFlag`](exports_schema.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `lifetimeEnergyConsumed`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `lifetimeRunningHours`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `maxCompPressure`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `compensatedPressure`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `automatic`: `boolean`  }]  } ; `maxConstFlow`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `constantFlow`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `automatic`: `boolean`  }]  } ; `maxConstPressure`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `constantPressure`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `automatic`: `boolean`  }]  } ; `maxConstSpeed`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `constantSpeed`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `automatic`: `boolean`  }]  } ; `maxConstTemp`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `constantTemperature`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `automatic`: `boolean`  }]  } ; `maxFlow`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `maxPressure`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `maxSpeed`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minCompPressure`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `compensatedPressure`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `automatic`: `boolean`  }]  } ; `minConstFlow`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `constantFlow`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `automatic`: `boolean`  }]  } ; `minConstPressure`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `constantPressure`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `automatic`: `boolean`  }]  } ; `minConstSpeed`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `constantSpeed`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `automatic`: `boolean`  }]  } ; `minConstTemp`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `constantTemperature`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `automatic`: `boolean`  }]  } ; `operationMode`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`OperationMode`](../enums/exports_cluster.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `power`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `pumpStatus`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `speed`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\>  } ; `events`: \{ `airDetection`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `dryRunning`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `electronicFatalFailure`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `electronicNonFatalFailure`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `electronicTemperatureHigh`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `generalFault`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `leakage`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `motorTemperatureHigh`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `powerMissingPhase`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `pumpBlocked`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `pumpMotorFatalFailure`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `sensorFailure`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageHigh`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageLow`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureHigh`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureLow`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `turbineOperation`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<`void`, `any`\>  } ; `features`: \{ `automatic`: [`BitFlag`](exports_schema.md#bitflag) ; `compensatedPressure`: [`BitFlag`](exports_schema.md#bitflag) ; `constantFlow`: [`BitFlag`](exports_schema.md#bitflag) ; `constantPressure`: [`BitFlag`](exports_schema.md#bitflag) ; `constantSpeed`: [`BitFlag`](exports_schema.md#bitflag) ; `constantTemperature`: [`BitFlag`](exports_schema.md#bitflag) ; `localOperation`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``512`` & [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"PumpConfigurationAndControl"`` ; `revision`: ``4``  }\>

This cluster supports all PumpConfigurationAndControl features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:1769

___

### ConstantFlowComponent

• `Const` **ConstantFlowComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `maxConstFlow`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minConstFlow`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\>  }  }\>

A PumpConfigurationAndControlCluster supports these elements if it supports feature ConstantFlow.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:793

___

### ConstantPressureComponent

• `Const` **ConstantPressureComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `maxConstPressure`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minConstPressure`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\>  }  }\>

A PumpConfigurationAndControlCluster supports these elements if it supports feature ConstantPressure.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:606

___

### ConstantSpeedComponent

• `Const` **ConstantSpeedComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `maxConstSpeed`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minConstSpeed`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\>  }  }\>

A PumpConfigurationAndControlCluster supports these elements if it supports feature ConstantSpeed.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:768

___

### ConstantTemperatureComponent

• `Const` **ConstantTemperatureComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `maxConstTemp`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `minConstTemp`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\>  }  }\>

A PumpConfigurationAndControlCluster supports these elements if it supports feature ConstantTemperature.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:821

___

### PumpStatusBitmap

• `Const` **PumpStatusBitmap**: `Object`

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.2.6.1

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `deviceFault` | [`BitFlag`](exports_schema.md#bitflag) | A fault related to the system or pump device is detected. If this bit is set, it may correspond to an event in the range 2-16, see Events. **`See`** MatterApplicationClusterSpecificationV1_1 § 4.2.6.1.1 |
| `localOverride` | [`BitFlag`](exports_schema.md#bitflag) | Device control is overridden by hardware, such as an external STOP button or via a local HMI. While this bit is set, the EffectiveOperationMode is adjusted to Local. Any request changing OperationMode shall generate a FAILURE error status until LocalOverride is cleared on the physical device. When LocalOverride is cleared, the device shall return to the operation mode set in OperationMode. **`See`** MatterApplicationClusterSpecificationV1_1 § 4.2.6.1.3 |
| `remoteFlow` | [`BitFlag`](exports_schema.md#bitflag) | A remote flow sensor is used as the sensor for the regulation of the pump. If this bit is set, EffectiveControlMode is ConstantFlow, and the setpoint for the pump is interpreted as a percentage of the range of the remote sensor ([MinMeasuredValue – MaxMeasuredValue]). **`See`** MatterApplicationClusterSpecificationV1_1 § 4.2.6.1.5 |
| `remotePressure` | [`BitFlag`](exports_schema.md#bitflag) | A remote pressure sensor is used as the sensor for the regulation of the pump. If this bit is set, EffectiveControlMode is ConstantPressure and the setpoint for the pump is interpreted as a percentage of the range of the remote sensor ([MinMeasuredValue – MaxMeasuredValue]). **`See`** MatterApplicationClusterSpecificationV1_1 § 4.2.6.1.4 |
| `remoteTemperature` | [`BitFlag`](exports_schema.md#bitflag) | A remote temperature sensor is used as the sensor for the regulation of the pump. If this bit is set, EffectiveControlMode is ConstantTemperature, and the setpoint for the pump is interpreted as a percentage of the range of the remote sensor ([MinMeasuredValue – MaxMeasuredValue]) **`See`** MatterApplicationClusterSpecificationV1_1 § 4.2.6.1.6 |
| `running` | [`BitFlag`](exports_schema.md#bitflag) | Pump is currently running |
| `speedHigh` | [`BitFlag`](exports_schema.md#bitflag) | Setpoint is too high to achieve. |
| `speedLow` | [`BitFlag`](exports_schema.md#bitflag) | Setpoint is too low to achieve. |
| `supplyFault` | [`BitFlag`](exports_schema.md#bitflag) | A fault related to the supply to the pump is detected. If this bit is set, it may correspond to an event in the range 0-1 or 13, see Events. **`See`** MatterApplicationClusterSpecificationV1_1 § 4.2.6.1.2 |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:14
