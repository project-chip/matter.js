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

Ƭ **Extension**<`SF`\>: `Omit`<typeof [`Base`](exports_cluster.PumpConfigurationAndControl.md#base), ``"supportedFeatures"``\> & { `supportedFeatures`: `SF`  } & `SF` extends { `constantPressure`: ``true``  } ? typeof [`ConstantPressureComponent`](exports_cluster.PumpConfigurationAndControl.md#constantpressurecomponent) : {} & `SF` extends { `automatic`: ``true``  } ? typeof [`AutomaticComponent`](exports_cluster.PumpConfigurationAndControl.md#automaticcomponent) : {} & `SF` extends { `compensatedPressure`: ``true``  } ? typeof [`CompensatedPressureComponent`](exports_cluster.PumpConfigurationAndControl.md#compensatedpressurecomponent) : {} & `SF` extends { `constantSpeed`: ``true``  } ? typeof [`ConstantSpeedComponent`](exports_cluster.PumpConfigurationAndControl.md#constantspeedcomponent) : {} & `SF` extends { `constantFlow`: ``true``  } ? typeof [`ConstantFlowComponent`](exports_cluster.PumpConfigurationAndControl.md#constantflowcomponent) : {} & `SF` extends { `constantTemperature`: ``true``  } ? typeof [`ConstantTemperatureComponent`](exports_cluster.PumpConfigurationAndControl.md#constanttemperaturecomponent) : {} & `SF` extends { `compensatedPressure`: ``false`` ; `constantFlow`: ``false`` ; `constantPressure`: ``false`` ; `constantSpeed`: ``false`` ; `constantTemperature`: ``false``  } ? `never` : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:1742

## Variables

### AutomaticComponent

• `Const` **AutomaticComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `maxCompPressure`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> ; `maxConstFlow`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> ; `maxConstPressure`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> ; `maxConstSpeed`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> ; `maxConstTemp`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> ; `minCompPressure`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> ; `minConstFlow`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> ; `minConstPressure`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> ; `minConstSpeed`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> ; `minConstTemp`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\>  }  }\>

A PumpConfigurationAndControlCluster supports these elements if it supports feature Automatic.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:633

___

### Base

• `Const` **Base**: [`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `capacity`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `controlMode`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`ControlMode`](../enums/exports_cluster.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveControlMode`: [`Attribute`](exports_cluster.md#attribute)<[`ControlMode`](../enums/exports_cluster.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveOperationMode`: [`Attribute`](exports_cluster.md#attribute)<[`OperationMode`](../enums/exports_cluster.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `lifetimeEnergyConsumed`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `lifetimeRunningHours`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `maxFlow`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `maxPressure`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `maxSpeed`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `operationMode`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`OperationMode`](../enums/exports_cluster.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `power`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| ``null``, `any`\> ; `pumpStatus`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `speed`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| ``null``, `any`\>  } ; `events`: { `airDetection`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `dryRunning`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `electronicFatalFailure`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `electronicNonFatalFailure`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `electronicTemperatureHigh`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `generalFault`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `leakage`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `motorTemperatureHigh`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `powerMissingPhase`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `pumpBlocked`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `pumpMotorFatalFailure`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `sensorFailure`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `supplyVoltageHigh`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `supplyVoltageLow`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `systemPressureHigh`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `systemPressureLow`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `turbineOperation`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\>  } ; `features`: { `automatic`: [`BitFlag`](exports_schema.md#bitflag-1) ; `compensatedPressure`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantFlow`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantPressure`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantSpeed`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantTemperature`: [`BitFlag`](exports_schema.md#bitflag-1) ; `localOperation`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``512`` ; `name`: ``"PumpConfigurationAndControl"`` ; `revision`: ``4``  }\>

These elements and properties are present in all PumpConfigurationAndControl clusters.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:228

___

### Cluster

• `Const` **Cluster**: { `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: {} ; `events`: { `airDetection`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `dryRunning`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `electronicFatalFailure`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `electronicNonFatalFailure`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `electronicTemperatureHigh`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `generalFault`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `leakage`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `motorTemperatureHigh`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `powerMissingPhase`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `pumpBlocked`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `pumpMotorFatalFailure`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `sensorFailure`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `supplyVoltageHigh`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `supplyVoltageLow`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `systemPressureHigh`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `systemPressureLow`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `turbineOperation`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\>  } ; `features`: { `automatic`: [`BitFlag`](exports_schema.md#bitflag-1) ; `compensatedPressure`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantFlow`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantPressure`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantSpeed`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantTemperature`: [`BitFlag`](exports_schema.md#bitflag-1) ; `localOperation`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"PumpConfigurationAndControl"`` ; `revision`: ``4`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`<[`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `capacity`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `controlMode`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`ControlMode`](../enums/exports_cluster.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveControlMode`: [`Attribute`](exports_cluster.md#attribute)<[`ControlMode`](../enums/exports_cluster.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveOperationMode`: [`Attribute`](exports_cluster.md#attribute)<[`OperationMode`](../enums/exports_cluster.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `lifetimeEnergyConsumed`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `lifetimeRunningHours`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `maxFlow`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `maxPressure`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `maxSpeed`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `operationMode`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`OperationMode`](../enums/exports_cluster.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `power`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| ``null``, `any`\> ; `pumpStatus`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `speed`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| ``null``, `any`\>  } ; `events`: { `airDetection`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `dryRunning`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `electronicFatalFailure`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `electronicNonFatalFailure`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `electronicTemperatureHigh`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `generalFault`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `leakage`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `motorTemperatureHigh`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `powerMissingPhase`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `pumpBlocked`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `pumpMotorFatalFailure`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `sensorFailure`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `supplyVoltageHigh`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `supplyVoltageLow`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `systemPressureHigh`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `systemPressureLow`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `turbineOperation`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\>  } ; `features`: { `automatic`: [`BitFlag`](exports_schema.md#bitflag-1) ; `compensatedPressure`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantFlow`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantPressure`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantSpeed`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantTemperature`: [`BitFlag`](exports_schema.md#bitflag-1) ; `localOperation`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``512`` ; `name`: ``"PumpConfigurationAndControl"`` ; `revision`: ``4``  }\>, ``"attributes"``\> & { `with`: <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.PumpConfigurationAndControl.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `automatic`: [`BitFlag`](exports_schema.md#bitflag-1) ; `compensatedPressure`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantFlow`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantPressure`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantSpeed`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantTemperature`: [`BitFlag`](exports_schema.md#bitflag-1) ; `localOperation`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>  }

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

• `Const` **CompensatedPressureComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `maxCompPressure`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `minCompPressure`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\>  }  }\>

A PumpConfigurationAndControlCluster supports these elements if it supports feature CompensatedPressure.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:741

___

### Complete

• `Const` **Complete**: [`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `acceptedCommandList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `attributeList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `capacity`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `clusterRevision`: [`Attribute`](exports_cluster.md#attribute)<`number`, `never`\> ; `controlMode`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`ControlMode`](../enums/exports_cluster.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveControlMode`: [`Attribute`](exports_cluster.md#attribute)<[`ControlMode`](../enums/exports_cluster.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveOperationMode`: [`Attribute`](exports_cluster.md#attribute)<[`OperationMode`](../enums/exports_cluster.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `eventList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.md#attribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `automatic`: [`BitFlag`](exports_schema.md#bitflag-1) ; `compensatedPressure`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantFlow`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantPressure`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantSpeed`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantTemperature`: [`BitFlag`](exports_schema.md#bitflag-1) ; `localOperation`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `lifetimeEnergyConsumed`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `lifetimeRunningHours`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `maxCompPressure`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `maxConstFlow`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `maxConstPressure`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `maxConstSpeed`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `maxConstTemp`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `maxFlow`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `maxPressure`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `maxSpeed`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `minCompPressure`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `minConstFlow`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `minConstPressure`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `minConstSpeed`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `minConstTemp`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `operationMode`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`OperationMode`](../enums/exports_cluster.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `power`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| ``null``, `any`\> ; `pumpStatus`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `speed`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| ``null``, `any`\>  } ; `events`: { `airDetection`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `dryRunning`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `electronicFatalFailure`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `electronicNonFatalFailure`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `electronicTemperatureHigh`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `generalFault`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `leakage`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `motorTemperatureHigh`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `powerMissingPhase`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `pumpBlocked`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `pumpMotorFatalFailure`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `sensorFailure`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `supplyVoltageHigh`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `supplyVoltageLow`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `systemPressureHigh`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `systemPressureLow`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `turbineOperation`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\>  } ; `features`: { `automatic`: [`BitFlag`](exports_schema.md#bitflag-1) ; `compensatedPressure`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantFlow`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantPressure`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantSpeed`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantTemperature`: [`BitFlag`](exports_schema.md#bitflag-1) ; `localOperation`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``512`` & [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"PumpConfigurationAndControl"`` ; `revision`: ``4``  }\>

This cluster supports all PumpConfigurationAndControl features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:1769

___

### ConstantFlowComponent

• `Const` **ConstantFlowComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `maxConstFlow`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `minConstFlow`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\>  }  }\>

A PumpConfigurationAndControlCluster supports these elements if it supports feature ConstantFlow.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:793

___

### ConstantPressureComponent

• `Const` **ConstantPressureComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `maxConstPressure`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `minConstPressure`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\>  }  }\>

A PumpConfigurationAndControlCluster supports these elements if it supports feature ConstantPressure.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:606

___

### ConstantSpeedComponent

• `Const` **ConstantSpeedComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `maxConstSpeed`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `minConstSpeed`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\>  }  }\>

A PumpConfigurationAndControlCluster supports these elements if it supports feature ConstantSpeed.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:768

___

### ConstantTemperatureComponent

• `Const` **ConstantTemperatureComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `maxConstTemp`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `minConstTemp`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\>  }  }\>

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
| `deviceFault` | [`BitFlag`](exports_schema.md#bitflag-1) | A fault related to the system or pump device is detected. If this bit is set, it may correspond to an event in the range 2-16, see Events. **`See`** MatterApplicationClusterSpecificationV1_1 § 4.2.6.1.1 |
| `localOverride` | [`BitFlag`](exports_schema.md#bitflag-1) | Device control is overridden by hardware, such as an external STOP button or via a local HMI. While this bit is set, the EffectiveOperationMode is adjusted to Local. Any request changing OperationMode shall generate a FAILURE error status until LocalOverride is cleared on the physical device. When LocalOverride is cleared, the device shall return to the operation mode set in OperationMode. **`See`** MatterApplicationClusterSpecificationV1_1 § 4.2.6.1.3 |
| `remoteFlow` | [`BitFlag`](exports_schema.md#bitflag-1) | A remote flow sensor is used as the sensor for the regulation of the pump. If this bit is set, EffectiveControlMode is ConstantFlow, and the setpoint for the pump is interpreted as a percentage of the range of the remote sensor ([MinMeasuredValue – MaxMeasuredValue]). **`See`** MatterApplicationClusterSpecificationV1_1 § 4.2.6.1.5 |
| `remotePressure` | [`BitFlag`](exports_schema.md#bitflag-1) | A remote pressure sensor is used as the sensor for the regulation of the pump. If this bit is set, EffectiveControlMode is ConstantPressure and the setpoint for the pump is interpreted as a percentage of the range of the remote sensor ([MinMeasuredValue – MaxMeasuredValue]). **`See`** MatterApplicationClusterSpecificationV1_1 § 4.2.6.1.4 |
| `remoteTemperature` | [`BitFlag`](exports_schema.md#bitflag-1) | A remote temperature sensor is used as the sensor for the regulation of the pump. If this bit is set, EffectiveControlMode is ConstantTemperature, and the setpoint for the pump is interpreted as a percentage of the range of the remote sensor ([MinMeasuredValue – MaxMeasuredValue]) **`See`** MatterApplicationClusterSpecificationV1_1 § 4.2.6.1.6 |
| `running` | [`BitFlag`](exports_schema.md#bitflag-1) | Pump is currently running |
| `speedHigh` | [`BitFlag`](exports_schema.md#bitflag-1) | Setpoint is too high to achieve. |
| `speedLow` | [`BitFlag`](exports_schema.md#bitflag-1) | Setpoint is too low to achieve. |
| `supplyFault` | [`BitFlag`](exports_schema.md#bitflag-1) | A fault related to the supply to the pump is detected. If this bit is set, it may correspond to an event in the range 0-1 or 13, see Events. **`See`** MatterApplicationClusterSpecificationV1_1 § 4.2.6.1.2 |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:14
