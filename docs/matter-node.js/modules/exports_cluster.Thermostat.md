[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / Thermostat

# Namespace: Thermostat

[exports/cluster](exports_cluster.md).Thermostat

## Table of contents

### Enumerations

- [AcCapacityFormat](../enums/exports_cluster.Thermostat.AcCapacityFormat.md)
- [AcCompressorType](../enums/exports_cluster.Thermostat.AcCompressorType.md)
- [AcLouverPosition](../enums/exports_cluster.Thermostat.AcLouverPosition.md)
- [AcRefrigerantType](../enums/exports_cluster.Thermostat.AcRefrigerantType.md)
- [AcType](../enums/exports_cluster.Thermostat.AcType.md)
- [ControlSequenceOfOperation](../enums/exports_cluster.Thermostat.ControlSequenceOfOperation.md)
- [Feature](../enums/exports_cluster.Thermostat.Feature.md)
- [SetpointAdjustMode](../enums/exports_cluster.Thermostat.SetpointAdjustMode.md)
- [SetpointChangeSource](../enums/exports_cluster.Thermostat.SetpointChangeSource.md)
- [StartOfWeek](../enums/exports_cluster.Thermostat.StartOfWeek.md)
- [SystemMode](../enums/exports_cluster.Thermostat.SystemMode.md)
- [TemperatureSetpointHold](../enums/exports_cluster.Thermostat.TemperatureSetpointHold.md)
- [ThermostatRunningMode](../enums/exports_cluster.Thermostat.ThermostatRunningMode.md)

### Type Aliases

- [Extension](exports_cluster.Thermostat.md#extension)

### Variables

- [AcErrorCode](exports_cluster.Thermostat.md#acerrorcode)
- [AlarmMask](exports_cluster.Thermostat.md#alarmmask)
- [AutoModeComponent](exports_cluster.Thermostat.md#automodecomponent)
- [Base](exports_cluster.Thermostat.md#base)
- [Cluster](exports_cluster.Thermostat.md#cluster)
- [Complete](exports_cluster.Thermostat.md#complete)
- [CoolingAndOccupancyComponent](exports_cluster.Thermostat.md#coolingandoccupancycomponent)
- [CoolingComponent](exports_cluster.Thermostat.md#coolingcomponent)
- [DayOfWeek](exports_cluster.Thermostat.md#dayofweek)
- [HeatingAndOccupancyComponent](exports_cluster.Thermostat.md#heatingandoccupancycomponent)
- [HeatingComponent](exports_cluster.Thermostat.md#heatingcomponent)
- [ModeForSequence](exports_cluster.Thermostat.md#modeforsequence)
- [NotLocalTemperatureNotExposedComponent](exports_cluster.Thermostat.md#notlocaltemperaturenotexposedcomponent)
- [Occupancy](exports_cluster.Thermostat.md#occupancy)
- [OccupancyComponent](exports_cluster.Thermostat.md#occupancycomponent)
- [RemoteSensing](exports_cluster.Thermostat.md#remotesensing)
- [ScheduleConfigurationComponent](exports_cluster.Thermostat.md#scheduleconfigurationcomponent)
- [SetbackAndOccupancyComponent](exports_cluster.Thermostat.md#setbackandoccupancycomponent)
- [SetbackComponent](exports_cluster.Thermostat.md#setbackcomponent)
- [ThermostatProgrammingOperationMode](exports_cluster.Thermostat.md#thermostatprogrammingoperationmode)
- [ThermostatRunningState](exports_cluster.Thermostat.md#thermostatrunningstate)
- [TlvGetWeeklyScheduleRequest](exports_cluster.Thermostat.md#tlvgetweeklyschedulerequest)
- [TlvGetWeeklyScheduleResponse](exports_cluster.Thermostat.md#tlvgetweeklyscheduleresponse)
- [TlvSetWeeklyScheduleRequest](exports_cluster.Thermostat.md#tlvsetweeklyschedulerequest)
- [TlvSetpointRaiseLowerRequest](exports_cluster.Thermostat.md#tlvsetpointraiselowerrequest)
- [TlvThermostatScheduleTransition](exports_cluster.Thermostat.md#tlvthermostatscheduletransition)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](exports_cluster.md#clusterforbasecluster)<typeof [`Base`](exports_cluster.Thermostat.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `occupancy`: ``true``  } ? typeof [`OccupancyComponent`](exports_cluster.Thermostat.md#occupancycomponent) : {} & `SF` extends { `heating`: ``true``  } ? typeof [`HeatingComponent`](exports_cluster.Thermostat.md#heatingcomponent) : {} & `SF` extends { `cooling`: ``true``  } ? typeof [`CoolingComponent`](exports_cluster.Thermostat.md#coolingcomponent) : {} & `SF` extends { `localTemperatureNotExposed`: ``false``  } ? typeof [`NotLocalTemperatureNotExposedComponent`](exports_cluster.Thermostat.md#notlocaltemperaturenotexposedcomponent) : {} & `SF` extends { `cooling`: ``true`` ; `occupancy`: ``true``  } ? typeof [`CoolingAndOccupancyComponent`](exports_cluster.Thermostat.md#coolingandoccupancycomponent) : {} & `SF` extends { `heating`: ``true`` ; `occupancy`: ``true``  } ? typeof [`HeatingAndOccupancyComponent`](exports_cluster.Thermostat.md#heatingandoccupancycomponent) : {} & `SF` extends { `autoMode`: ``true``  } ? typeof [`AutoModeComponent`](exports_cluster.Thermostat.md#automodecomponent) : {} & `SF` extends { `scheduleConfiguration`: ``true``  } ? typeof [`ScheduleConfigurationComponent`](exports_cluster.Thermostat.md#scheduleconfigurationcomponent) : {} & `SF` extends { `setback`: ``true``  } ? typeof [`SetbackComponent`](exports_cluster.Thermostat.md#setbackcomponent) : {} & `SF` extends { `occupancy`: ``true`` ; `setback`: ``true``  } ? typeof [`SetbackAndOccupancyComponent`](exports_cluster.Thermostat.md#setbackandoccupancycomponent) : {} & `SF` extends { `autoMode`: ``true`` ; `heating`: ``false``  } ? `never` : {} & `SF` extends { `autoMode`: ``true`` ; `cooling`: ``false``  } ? `never` : {} & `SF` extends { `cooling`: ``false`` ; `heating`: ``false``  } ? `never` : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:1919

## Variables

### AcErrorCode

• `Const` **AcErrorCode**: `Object`

The value of the Thermostat acErrorCode attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.3.7.48

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `coilSensorFail` | [`BitFlag`](exports_schema.md#bitflag-1) | Indoor Coil Temperature Sensor Failure |
| `compressorFail` | [`BitFlag`](exports_schema.md#bitflag-1) | Compressor Failure or Refrigerant Leakage |
| `fanFail` | [`BitFlag`](exports_schema.md#bitflag-1) | Fan Failure |
| `outdoorSensorFail` | [`BitFlag`](exports_schema.md#bitflag-1) | Outdoor Temperature Sensor Failure |
| `roomSensorFail` | [`BitFlag`](exports_schema.md#bitflag-1) | Room Temperature Sensor Failure |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:270

___

### AlarmMask

• `Const` **AlarmMask**: `Object`

The value of the Thermostat alarmMask attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.3.7.25

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hardwareFailure` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `initializationFailure` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `selfCalibrationFailure` | [`BitFlag`](exports_schema.md#bitflag-1) |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:99

___

### AutoModeComponent

• `Const` **AutoModeComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `minSetpointDeadBand`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number`, `any`\> ; `thermostatRunningMode`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<[`ThermostatRunningMode`](../enums/exports_cluster.Thermostat.ThermostatRunningMode.md), `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A ThermostatCluster supports these elements if it supports feature AutoMode.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:1155

___

### Base

• `Const` **Base**: [`BaseClusterComponent`](exports_cluster.md#baseclustercomponent)<{ `autoMode`: [`BitFlag`](exports_schema.md#bitflag-1) ; `cooling`: [`BitFlag`](exports_schema.md#bitflag-1) ; `heating`: [`BitFlag`](exports_schema.md#bitflag-1) ; `localTemperatureNotExposed`: [`BitFlag`](exports_schema.md#bitflag-1) ; `occupancy`: [`BitFlag`](exports_schema.md#bitflag-1) ; `scheduleConfiguration`: [`BitFlag`](exports_schema.md#bitflag-1) ; `setback`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `acCapacity`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `acCapacityFormat`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`AcCapacityFormat`](../enums/exports_cluster.Thermostat.AcCapacityFormat.md), `any`\> ; `acCoilTemperature`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| ``null``, `any`\> ; `acCompressorType`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`AcCompressorType`](../enums/exports_cluster.Thermostat.AcCompressorType.md), `any`\> ; `acErrorCode`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `coilSensorFail`: [`BitFlag`](exports_schema.md#bitflag-1) ; `compressorFail`: [`BitFlag`](exports_schema.md#bitflag-1) ; `fanFail`: [`BitFlag`](exports_schema.md#bitflag-1) ; `outdoorSensorFail`: [`BitFlag`](exports_schema.md#bitflag-1) ; `roomSensorFail`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `any`\> ; `acLouverPosition`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`AcLouverPosition`](../enums/exports_cluster.Thermostat.AcLouverPosition.md), `any`\> ; `acRefrigerantType`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`AcRefrigerantType`](../enums/exports_cluster.Thermostat.AcRefrigerantType.md), `any`\> ; `acType`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`AcType`](../enums/exports_cluster.Thermostat.AcType.md), `any`\> ; `alarmMask`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `hardwareFailure`: [`BitFlag`](exports_schema.md#bitflag-1) ; `initializationFailure`: [`BitFlag`](exports_schema.md#bitflag-1) ; `selfCalibrationFailure`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `any`\> ; `controlSequenceOfOperation`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`ControlSequenceOfOperation`](../enums/exports_cluster.Thermostat.ControlSequenceOfOperation.md), `any`\> ; `emergencyHeatDelta`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `localTemperature`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `outdoorTemperature`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| ``null``, `any`\> ; `remoteSensing`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `localTemperature`: [`BitFlag`](exports_schema.md#bitflag-1) ; `occupancy`: [`BitFlag`](exports_schema.md#bitflag-1) ; `outdoorTemperature`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `any`\> ; `setpointChangeAmount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| ``null``, `any`\> ; `setpointChangeSource`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<[`SetpointChangeSource`](../enums/exports_cluster.Thermostat.SetpointChangeSource.md), `any`\> ; `setpointChangeSourceTimestamp`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `systemMode`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`SystemMode`](../enums/exports_cluster.Thermostat.SystemMode.md), `any`\> ; `temperatureSetpointHold`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`TemperatureSetpointHold`](../enums/exports_cluster.Thermostat.TemperatureSetpointHold.md), `any`\> ; `temperatureSetpointHoldDuration`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `thermostatProgrammingOperationMode`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `autoRecovery`: [`BitFlag`](exports_schema.md#bitflag-1) ; `economy`: [`BitFlag`](exports_schema.md#bitflag-1) ; `scheduleActive`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `any`\> ; `thermostatRunningState`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `cool`: [`BitFlag`](exports_schema.md#bitflag-1) ; `coolStage2`: [`BitFlag`](exports_schema.md#bitflag-1) ; `fan`: [`BitFlag`](exports_schema.md#bitflag-1) ; `fanStage2`: [`BitFlag`](exports_schema.md#bitflag-1) ; `fanStage3`: [`BitFlag`](exports_schema.md#bitflag-1) ; `heat`: [`BitFlag`](exports_schema.md#bitflag-1) ; `heatStage2`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `any`\>  }, { `getRelayStatusLog`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<`void`, `void`, `any`\> ; `setpointRaiseLower`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

These elements and properties are present in all Thermostat clusters.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:546

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](exports_cluster.md#extensiblecluster)<{ `autoMode`: [`BitFlag`](exports_schema.md#bitflag-1) ; `cooling`: [`BitFlag`](exports_schema.md#bitflag-1) ; `heating`: [`BitFlag`](exports_schema.md#bitflag-1) ; `localTemperatureNotExposed`: [`BitFlag`](exports_schema.md#bitflag-1) ; `occupancy`: [`BitFlag`](exports_schema.md#bitflag-1) ; `scheduleConfiguration`: [`BitFlag`](exports_schema.md#bitflag-1) ; `setback`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `autoMode`: [`BitFlag`](exports_schema.md#bitflag-1) ; `cooling`: [`BitFlag`](exports_schema.md#bitflag-1) ; `heating`: [`BitFlag`](exports_schema.md#bitflag-1) ; `localTemperatureNotExposed`: [`BitFlag`](exports_schema.md#bitflag-1) ; `occupancy`: [`BitFlag`](exports_schema.md#bitflag-1) ; `scheduleConfiguration`: [`BitFlag`](exports_schema.md#bitflag-1) ; `setback`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `getRelayStatusLog`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<`void`, `void`, `any`\> ; `setpointRaiseLower`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.Thermostat.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `autoMode`: [`BitFlag`](exports_schema.md#bitflag-1) ; `cooling`: [`BitFlag`](exports_schema.md#bitflag-1) ; `heating`: [`BitFlag`](exports_schema.md#bitflag-1) ; `localTemperatureNotExposed`: [`BitFlag`](exports_schema.md#bitflag-1) ; `occupancy`: [`BitFlag`](exports_schema.md#bitflag-1) ; `scheduleConfiguration`: [`BitFlag`](exports_schema.md#bitflag-1) ; `setback`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>\>

Thermostat

This cluster provides an interface to the functionality of a thermostat.

ThermostatCluster supports optional features that you can enable with the ThermostatCluster.with() factory
method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.3

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:1393

___

### Complete

• `Const` **Complete**: [`Cluster`](exports_cluster.md#cluster)<{ `autoMode`: [`BitFlag`](exports_schema.md#bitflag-1) ; `cooling`: [`BitFlag`](exports_schema.md#bitflag-1) ; `heating`: [`BitFlag`](exports_schema.md#bitflag-1) ; `localTemperatureNotExposed`: [`BitFlag`](exports_schema.md#bitflag-1) ; `occupancy`: [`BitFlag`](exports_schema.md#bitflag-1) ; `scheduleConfiguration`: [`BitFlag`](exports_schema.md#bitflag-1) ; `setback`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `autoMode`: [`BitFlag`](exports_schema.md#bitflag-1) ; `cooling`: [`BitFlag`](exports_schema.md#bitflag-1) ; `heating`: [`BitFlag`](exports_schema.md#bitflag-1) ; `localTemperatureNotExposed`: [`BitFlag`](exports_schema.md#bitflag-1) ; `occupancy`: [`BitFlag`](exports_schema.md#bitflag-1) ; `scheduleConfiguration`: [`BitFlag`](exports_schema.md#bitflag-1) ; `setback`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `clearWeeklySchedule`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>\> ; `getRelayStatusLog`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<`void`, `void`, `any`\> ; `getWeeklySchedule`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>\> ; `setWeeklySchedule`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `setpointRaiseLower`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, {}\>

This cluster supports all Thermostat features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:1960

___

### CoolingAndOccupancyComponent

• `Const` **CoolingAndOccupancyComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `unoccupiedCoolingSetpoint`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A ThermostatCluster supports these elements if it supports features Cooling and Occupancy.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:1123

___

### CoolingComponent

• `Const` **CoolingComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `absMaxCoolSetpointLimit`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\> ; `absMinCoolSetpointLimit`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\> ; `maxCoolSetpointLimit`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `minCoolSetpointLimit`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `occupiedCoolingSetpoint`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number`, `any`\> ; `piCoolingDemand`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A ThermostatCluster supports these elements if it supports feature Cooling.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:1033

___

### DayOfWeek

• `Const` **DayOfWeek**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `away` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `friday` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `monday` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `saturday` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `sunday` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `thursday` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `tuesday` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `wednesday` | [`BitFlag`](exports_schema.md#bitflag-1) |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:376

___

### HeatingAndOccupancyComponent

• `Const` **HeatingAndOccupancyComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `unoccupiedHeatingSetpoint`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A ThermostatCluster supports these elements if it supports features Heating and Occupancy.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:1139

___

### HeatingComponent

• `Const` **HeatingComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `absMaxHeatSetpointLimit`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\> ; `absMinHeatSetpointLimit`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\> ; `maxHeatSetpointLimit`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `minHeatSetpointLimit`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `occupiedHeatingSetpoint`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number`, `any`\> ; `piHeatingDemand`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A ThermostatCluster supports these elements if it supports feature Heating.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:961

___

### ModeForSequence

• `Const` **ModeForSequence**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `coolSetpointPresent` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `heatSetpointPresent` | [`BitFlag`](exports_schema.md#bitflag-1) |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:386

___

### NotLocalTemperatureNotExposedComponent

• `Const` **NotLocalTemperatureNotExposedComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `localTemperatureCalibration`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A ThermostatCluster supports these elements if doesn't support feature LTNE.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:1103

___

### Occupancy

• `Const` **Occupancy**: `Object`

The value of the Thermostat occupancy attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.3.7.4

#### Type declaration

| Name | Type |
| :------ | :------ |
| `occupied` | [`BitFlag`](exports_schema.md#bitflag-1) |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:349

___

### OccupancyComponent

• `Const` **OccupancyComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `occupancy`: [`Attribute`](exports_cluster.md#attribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `occupied`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A ThermostatCluster supports these elements if it supports feature Occupancy.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:946

___

### RemoteSensing

• `Const` **RemoteSensing**: `Object`

The value of the Thermostat remoteSensing attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.3.7.22

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `localTemperature` | [`BitFlag`](exports_schema.md#bitflag-1) | When set, LocalTemperature Value is derived from a remote node |
| `occupancy` | [`BitFlag`](exports_schema.md#bitflag-1) | When set, Occupancy is derived from a remote node |
| `outdoorTemperature` | [`BitFlag`](exports_schema.md#bitflag-1) | When set, OutdoorTemperature is derived from a remote node |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:15

___

### ScheduleConfigurationComponent

• `Const` **ScheduleConfigurationComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `numberOfDailyTransitions`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `numberOfWeeklyTransitions`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `startOfWeek`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<[`StartOfWeek`](../enums/exports_cluster.Thermostat.StartOfWeek.md), `any`\>  }, { `clearWeeklySchedule`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `getWeeklySchedule`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `setWeeklySchedule`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A ThermostatCluster supports these elements if it supports feature ScheduleConfiguration.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:1177

___

### SetbackAndOccupancyComponent

• `Const` **SetbackAndOccupancyComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `unoccupiedSetback`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number` \| ``null``, `any`\> ; `unoccupiedSetbackMax`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `unoccupiedSetbackMin`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A ThermostatCluster supports these elements if it supports features Setback and Occupancy.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:1338

___

### SetbackComponent

• `Const` **SetbackComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `occupiedSetback`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number` \| ``null``, `any`\> ; `occupiedSetbackMax`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\> ; `occupiedSetbackMin`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number` \| ``null``, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A ThermostatCluster supports these elements if it supports feature Setback.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:1290

___

### ThermostatProgrammingOperationMode

• `Const` **ThermostatProgrammingOperationMode**: `Object`

The value of the Thermostat thermostatProgrammingOperationMode attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.3.7.32

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `autoRecovery` | [`BitFlag`](exports_schema.md#bitflag-1) | Auto/recovery mode |
| `economy` | [`BitFlag`](exports_schema.md#bitflag-1) | Economy/EnergyStar mode |
| `scheduleActive` | [`BitFlag`](exports_schema.md#bitflag-1) | Schedule programming mode. This enables any programmed weekly schedule configurations. |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:124

___

### ThermostatRunningState

• `Const` **ThermostatRunningState**: `Object`

The value of the Thermostat thermostatRunningState attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.3.7.33

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `cool` | [`BitFlag`](exports_schema.md#bitflag-1) | Cool State On |
| `coolStage2` | [`BitFlag`](exports_schema.md#bitflag-1) | Cool 2nd Stage State On |
| `fan` | [`BitFlag`](exports_schema.md#bitflag-1) | Fan State On |
| `fanStage2` | [`BitFlag`](exports_schema.md#bitflag-1) | Fan 2nd Stage State On |
| `fanStage3` | [`BitFlag`](exports_schema.md#bitflag-1) | Fan 3rd Stage Stage On |
| `heat` | [`BitFlag`](exports_schema.md#bitflag-1) | Heat State On |
| `heatStage2` | [`BitFlag`](exports_schema.md#bitflag-1) | Heat 2nd Stage State On |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:143

___

### TlvGetWeeklyScheduleRequest

• `Const` **TlvGetWeeklyScheduleRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the Thermostat getWeeklySchedule command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.3.8

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:446

___

### TlvGetWeeklyScheduleResponse

• `Const` **TlvGetWeeklyScheduleResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.3.8

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:465

___

### TlvSetWeeklyScheduleRequest

• `Const` **TlvSetWeeklyScheduleRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the Thermostat setWeeklySchedule command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.3.8

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:412

___

### TlvSetpointRaiseLowerRequest

• `Const` **TlvSetpointRaiseLowerRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the Thermostat setpointRaiseLower command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.3.8

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:340

___

### TlvThermostatScheduleTransition

• `Const` **TlvThermostatScheduleTransition**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This represents a single transition in a Thermostat schedule

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.3.9.5

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThermostatCluster.d.ts:395
