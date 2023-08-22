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

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](exports_cluster.md#clusterforbasecluster)<typeof [`Base`](exports_cluster.PumpConfigurationAndControl.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `constantPressure`: ``true``  } ? typeof [`ConstantPressureComponent`](exports_cluster.PumpConfigurationAndControl.md#constantpressurecomponent) : {} & `SF` extends { `automatic`: ``true``  } ? typeof [`AutomaticComponent`](exports_cluster.PumpConfigurationAndControl.md#automaticcomponent) : {} & `SF` extends { `compensatedPressure`: ``true``  } ? typeof [`CompensatedPressureComponent`](exports_cluster.PumpConfigurationAndControl.md#compensatedpressurecomponent) : {} & `SF` extends { `constantSpeed`: ``true``  } ? typeof [`ConstantSpeedComponent`](exports_cluster.PumpConfigurationAndControl.md#constantspeedcomponent) : {} & `SF` extends { `constantFlow`: ``true``  } ? typeof [`ConstantFlowComponent`](exports_cluster.PumpConfigurationAndControl.md#constantflowcomponent) : {} & `SF` extends { `constantTemperature`: ``true``  } ? typeof [`ConstantTemperatureComponent`](exports_cluster.PumpConfigurationAndControl.md#constanttemperaturecomponent) : {} & `SF` extends { `compensatedPressure`: ``false`` ; `constantFlow`: ``false`` ; `constantPressure`: ``false`` ; `constantSpeed`: ``false`` ; `constantTemperature`: ``false``  } ? `never` : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:1336

## Variables

### AutomaticComponent

• `Const` **AutomaticComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `maxCompPressure`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> ; `maxConstFlow`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> ; `maxConstPressure`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> ; `maxConstSpeed`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> ; `maxConstTemp`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> ; `minCompPressure`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> ; `minConstFlow`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> ; `minConstPressure`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> ; `minConstSpeed`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\> ; `minConstTemp`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number` \| ``null``, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A PumpConfigurationAndControlCluster supports these elements if it supports feature Automatic.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:623

___

### Base

• `Const` **Base**: [`BaseClusterComponent`](exports_cluster.md#baseclustercomponent)<{ `automatic`: [`BitFlag`](exports_schema.md#bitflag-1) ; `compensatedPressure`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantFlow`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantPressure`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantSpeed`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantTemperature`: [`BitFlag`](exports_schema.md#bitflag-1) ; `localOperation`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `capacity`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `controlMode`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`ControlMode`](../enums/exports_cluster.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveControlMode`: [`Attribute`](exports_cluster.md#attribute)<[`ControlMode`](../enums/exports_cluster.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveOperationMode`: [`Attribute`](exports_cluster.md#attribute)<[`OperationMode`](../enums/exports_cluster.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `lifetimeEnergyConsumed`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `lifetimeRunningHours`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `maxFlow`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `maxPressure`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `maxSpeed`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `operationMode`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`OperationMode`](../enums/exports_cluster.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `power`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| ``null``, `any`\> ; `pumpStatus`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `deviceFault`: [`BitFlag`](exports_schema.md#bitflag-1) ; `localOverride`: [`BitFlag`](exports_schema.md#bitflag-1) ; `remoteFlow`: [`BitFlag`](exports_schema.md#bitflag-1) ; `remotePressure`: [`BitFlag`](exports_schema.md#bitflag-1) ; `remoteTemperature`: [`BitFlag`](exports_schema.md#bitflag-1) ; `running`: [`BitFlag`](exports_schema.md#bitflag-1) ; `speedHigh`: [`BitFlag`](exports_schema.md#bitflag-1) ; `speedLow`: [`BitFlag`](exports_schema.md#bitflag-1) ; `supplyFault`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `any`\> ; `speed`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| ``null``, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `airDetection`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `dryRunning`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `electronicFatalFailure`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `electronicNonFatalFailure`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `electronicTemperatureHigh`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `generalFault`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `leakage`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `motorTemperatureHigh`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `powerMissingPhase`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `pumpBlocked`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `pumpMotorFatalFailure`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `sensorFailure`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `supplyVoltageHigh`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `supplyVoltageLow`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `systemPressureHigh`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `systemPressureLow`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `turbineOperation`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\>  }\>

These elements and properties are present in all PumpConfigurationAndControl clusters.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:227

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](exports_cluster.md#extensiblecluster)<{ `automatic`: [`BitFlag`](exports_schema.md#bitflag-1) ; `compensatedPressure`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantFlow`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantPressure`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantSpeed`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantTemperature`: [`BitFlag`](exports_schema.md#bitflag-1) ; `localOperation`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `automatic`: [`BitFlag`](exports_schema.md#bitflag-1) ; `compensatedPressure`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantFlow`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantPressure`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantSpeed`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantTemperature`: [`BitFlag`](exports_schema.md#bitflag-1) ; `localOperation`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `airDetection`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `dryRunning`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `electronicFatalFailure`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `electronicNonFatalFailure`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `electronicTemperatureHigh`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `generalFault`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `leakage`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `motorTemperatureHigh`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `powerMissingPhase`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `pumpBlocked`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `pumpMotorFatalFailure`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `sensorFailure`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `supplyVoltageHigh`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `supplyVoltageLow`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `systemPressureHigh`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `systemPressureLow`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `turbineOperation`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\>  }, <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.PumpConfigurationAndControl.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `automatic`: [`BitFlag`](exports_schema.md#bitflag-1) ; `compensatedPressure`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantFlow`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantPressure`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantSpeed`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantTemperature`: [`BitFlag`](exports_schema.md#bitflag-1) ; `localOperation`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>\>

Pump Configuration and Control

The Pump Configuration and Control cluster provides an interface for the setup and control of pump devices, and
the automatic reporting of pump status information. Note that control of pump speed is not included – speed is
controlled by the On/Off and Level Control clusters.

PumpConfigurationAndControlCluster supports optional features that you can enable with the
PumpConfigurationAndControlCluster.with() factory method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.2

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:839

___

### CompensatedPressureComponent

• `Const` **CompensatedPressureComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `maxCompPressure`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `minCompPressure`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A PumpConfigurationAndControlCluster supports these elements if it supports feature CompensatedPressure.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:729

___

### Complete

• `Const` **Complete**: [`Cluster`](exports_cluster.md#cluster)<{ `automatic`: [`BitFlag`](exports_schema.md#bitflag-1) ; `compensatedPressure`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantFlow`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantPressure`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantSpeed`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantTemperature`: [`BitFlag`](exports_schema.md#bitflag-1) ; `localOperation`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `automatic`: [`BitFlag`](exports_schema.md#bitflag-1) ; `compensatedPressure`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantFlow`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantPressure`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantSpeed`: [`BitFlag`](exports_schema.md#bitflag-1) ; `constantTemperature`: [`BitFlag`](exports_schema.md#bitflag-1) ; `localOperation`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), {}, { `airDetection`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `dryRunning`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `electronicFatalFailure`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `electronicNonFatalFailure`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `electronicTemperatureHigh`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `generalFault`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `leakage`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `motorTemperatureHigh`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `powerMissingPhase`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `pumpBlocked`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `pumpMotorFatalFailure`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `sensorFailure`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `supplyVoltageHigh`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `supplyVoltageLow`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `systemPressureHigh`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `systemPressureLow`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\> ; `turbineOperation`: [`OptionalEvent`](exports_cluster.md#optionalevent)<`void`, `any`\>  }\>

This cluster supports all PumpConfigurationAndControl features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:1363

___

### ConstantFlowComponent

• `Const` **ConstantFlowComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `maxConstFlow`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `minConstFlow`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A PumpConfigurationAndControlCluster supports these elements if it supports feature ConstantFlow.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:777

___

### ConstantPressureComponent

• `Const` **ConstantPressureComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `maxConstPressure`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `minConstPressure`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A PumpConfigurationAndControlCluster supports these elements if it supports feature ConstantPressure.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:598

___

### ConstantSpeedComponent

• `Const` **ConstantSpeedComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `maxConstSpeed`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `minConstSpeed`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A PumpConfigurationAndControlCluster supports these elements if it supports feature ConstantSpeed.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:754

___

### ConstantTemperatureComponent

• `Const` **ConstantTemperatureComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `maxConstTemp`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `minConstTemp`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A PumpConfigurationAndControlCluster supports these elements if it supports feature ConstantTemperature.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:803

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

packages/matter.js/dist/cjs/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:13
