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

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](exports_cluster.Thermostat.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  } & `SF` extends \{ `occupancy`: ``true``  } ? typeof [`OccupancyComponent`](exports_cluster.Thermostat.md#occupancycomponent) : {} & `SF` extends \{ `heating`: ``true``  } ? typeof [`HeatingComponent`](exports_cluster.Thermostat.md#heatingcomponent) : {} & `SF` extends \{ `cooling`: ``true``  } ? typeof [`CoolingComponent`](exports_cluster.Thermostat.md#coolingcomponent) : {} & `SF` extends \{ `localTemperatureNotExposed`: ``false``  } ? typeof [`NotLocalTemperatureNotExposedComponent`](exports_cluster.Thermostat.md#notlocaltemperaturenotexposedcomponent) : {} & `SF` extends \{ `cooling`: ``true`` ; `occupancy`: ``true``  } ? typeof [`CoolingAndOccupancyComponent`](exports_cluster.Thermostat.md#coolingandoccupancycomponent) : {} & `SF` extends \{ `heating`: ``true`` ; `occupancy`: ``true``  } ? typeof [`HeatingAndOccupancyComponent`](exports_cluster.Thermostat.md#heatingandoccupancycomponent) : {} & `SF` extends \{ `autoMode`: ``true``  } ? typeof [`AutoModeComponent`](exports_cluster.Thermostat.md#automodecomponent) : {} & `SF` extends \{ `scheduleConfiguration`: ``true``  } ? typeof [`ScheduleConfigurationComponent`](exports_cluster.Thermostat.md#scheduleconfigurationcomponent) : {} & `SF` extends \{ `setback`: ``true``  } ? typeof [`SetbackComponent`](exports_cluster.Thermostat.md#setbackcomponent) : {} & `SF` extends \{ `occupancy`: ``true`` ; `setback`: ``true``  } ? typeof [`SetbackAndOccupancyComponent`](exports_cluster.Thermostat.md#setbackandoccupancycomponent) : {} & `SF` extends \{ `autoMode`: ``true`` ; `heating`: ``false``  } ? `never` : {} & `SF` extends \{ `autoMode`: ``true`` ; `cooling`: ``false``  } ? `never` : {} & `SF` extends \{ `cooling`: ``false`` ; `heating`: ``false``  } ? `never` : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:2363

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

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:271

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

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:100

___

### AutoModeComponent

• `Const` **AutoModeComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `minSetpointDeadBand`: [`WritableAttribute`](exports_cluster.md#writableattribute)\<`number`, `any`\> ; `thermostatRunningMode`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<[`ThermostatRunningMode`](../enums/exports_cluster.Thermostat.ThermostatRunningMode.md), `any`\>  }  }\>

A ThermostatCluster supports these elements if it supports feature AutoMode.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:1175

___

### Base

• `Const` **Base**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `acCapacity`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<`number`, `any`\> ; `acCapacityFormat`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<[`AcCapacityFormat`](../enums/exports_cluster.Thermostat.AcCapacityFormat.md), `any`\> ; `acCoilTemperature`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<`number` \| ``null``, `any`\> ; `acCompressorType`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<[`AcCompressorType`](../enums/exports_cluster.Thermostat.AcCompressorType.md), `any`\> ; `acErrorCode`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `acLouverPosition`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<[`AcLouverPosition`](../enums/exports_cluster.Thermostat.AcLouverPosition.md), `any`\> ; `acRefrigerantType`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<[`AcRefrigerantType`](../enums/exports_cluster.Thermostat.AcRefrigerantType.md), `any`\> ; `acType`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<[`AcType`](../enums/exports_cluster.Thermostat.AcType.md), `any`\> ; `alarmMask`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `controlSequenceOfOperation`: [`WritableAttribute`](exports_cluster.md#writableattribute)\<[`ControlSequenceOfOperation`](../enums/exports_cluster.Thermostat.ControlSequenceOfOperation.md), `any`\> ; `emergencyHeatDelta`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<`number`, `any`\> ; `localTemperature`: [`Attribute`](exports_cluster.md#attribute)\<`number` \| ``null``, `any`\> ; `outdoorTemperature`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<`number` \| ``null``, `any`\> ; `remoteSensing`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `setpointChangeAmount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<`number` \| ``null``, `any`\> ; `setpointChangeSource`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<[`SetpointChangeSource`](../enums/exports_cluster.Thermostat.SetpointChangeSource.md), `any`\> ; `setpointChangeSourceTimestamp`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<`number`, `any`\> ; `systemMode`: [`WritableAttribute`](exports_cluster.md#writableattribute)\<[`SystemMode`](../enums/exports_cluster.Thermostat.SystemMode.md), `any`\> ; `temperatureSetpointHold`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<[`TemperatureSetpointHold`](../enums/exports_cluster.Thermostat.TemperatureSetpointHold.md), `any`\> ; `temperatureSetpointHoldDuration`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<`number` \| ``null``, `any`\> ; `thermostatProgrammingOperationMode`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `thermostatRunningState`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  } ; `commands`: \{ `getRelayStatusLog`: [`OptionalCommand`](exports_cluster.md#optionalcommand)\<`void`, `void`, `any`\> ; `setpointRaiseLower`: [`Command`](exports_cluster.md#command)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `features`: \{ `autoMode`: [`BitFlag`](exports_schema.md#bitflag-1) ; `cooling`: [`BitFlag`](exports_schema.md#bitflag-1) ; `heating`: [`BitFlag`](exports_schema.md#bitflag-1) ; `localTemperatureNotExposed`: [`BitFlag`](exports_schema.md#bitflag-1) ; `occupancy`: [`BitFlag`](exports_schema.md#bitflag-1) ; `scheduleConfiguration`: [`BitFlag`](exports_schema.md#bitflag-1) ; `setback`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``513`` ; `name`: ``"Thermostat"`` ; `revision`: ``6``  }\>

These elements and properties are present in all Thermostat clusters.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:547

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: \{ `getRelayStatusLog`: [`OptionalCommand`](exports_cluster.md#optionalcommand)\<`void`, `void`, `any`\> ; `setpointRaiseLower`: [`Command`](exports_cluster.md#command)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `events`: {} ; `features`: \{ `autoMode`: [`BitFlag`](exports_schema.md#bitflag-1) ; `cooling`: [`BitFlag`](exports_schema.md#bitflag-1) ; `heating`: [`BitFlag`](exports_schema.md#bitflag-1) ; `localTemperatureNotExposed`: [`BitFlag`](exports_schema.md#bitflag-1) ; `occupancy`: [`BitFlag`](exports_schema.md#bitflag-1) ; `scheduleConfiguration`: [`BitFlag`](exports_schema.md#bitflag-1) ; `setback`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"Thermostat"`` ; `revision`: ``6`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `acCapacity`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<`number`, `any`\> ; `acCapacityFormat`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<[`AcCapacityFormat`](../enums/exports_cluster.Thermostat.AcCapacityFormat.md), `any`\> ; `acCoilTemperature`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<`number` \| ``null``, `any`\> ; `acCompressorType`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<[`AcCompressorType`](../enums/exports_cluster.Thermostat.AcCompressorType.md), `any`\> ; `acErrorCode`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `acLouverPosition`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<[`AcLouverPosition`](../enums/exports_cluster.Thermostat.AcLouverPosition.md), `any`\> ; `acRefrigerantType`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<[`AcRefrigerantType`](../enums/exports_cluster.Thermostat.AcRefrigerantType.md), `any`\> ; `acType`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<[`AcType`](../enums/exports_cluster.Thermostat.AcType.md), `any`\> ; `alarmMask`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `controlSequenceOfOperation`: [`WritableAttribute`](exports_cluster.md#writableattribute)\<[`ControlSequenceOfOperation`](../enums/exports_cluster.Thermostat.ControlSequenceOfOperation.md), `any`\> ; `emergencyHeatDelta`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<`number`, `any`\> ; `localTemperature`: [`Attribute`](exports_cluster.md#attribute)\<`number` \| ``null``, `any`\> ; `outdoorTemperature`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<`number` \| ``null``, `any`\> ; `remoteSensing`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `setpointChangeAmount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<`number` \| ``null``, `any`\> ; `setpointChangeSource`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<[`SetpointChangeSource`](../enums/exports_cluster.Thermostat.SetpointChangeSource.md), `any`\> ; `setpointChangeSourceTimestamp`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<`number`, `any`\> ; `systemMode`: [`WritableAttribute`](exports_cluster.md#writableattribute)\<[`SystemMode`](../enums/exports_cluster.Thermostat.SystemMode.md), `any`\> ; `temperatureSetpointHold`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<[`TemperatureSetpointHold`](../enums/exports_cluster.Thermostat.TemperatureSetpointHold.md), `any`\> ; `temperatureSetpointHoldDuration`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<`number` \| ``null``, `any`\> ; `thermostatProgrammingOperationMode`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `thermostatRunningState`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  } ; `commands`: \{ `getRelayStatusLog`: [`OptionalCommand`](exports_cluster.md#optionalcommand)\<`void`, `void`, `any`\> ; `setpointRaiseLower`: [`Command`](exports_cluster.md#command)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `features`: \{ `autoMode`: [`BitFlag`](exports_schema.md#bitflag-1) ; `cooling`: [`BitFlag`](exports_schema.md#bitflag-1) ; `heating`: [`BitFlag`](exports_schema.md#bitflag-1) ; `localTemperatureNotExposed`: [`BitFlag`](exports_schema.md#bitflag-1) ; `occupancy`: [`BitFlag`](exports_schema.md#bitflag-1) ; `scheduleConfiguration`: [`BitFlag`](exports_schema.md#bitflag-1) ; `setback`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``513`` ; `name`: ``"Thermostat"`` ; `revision`: ``6``  }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.Thermostat.md#extension)\<[`BitFlags`](exports_schema.md#bitflags)\<\{ `autoMode`: [`BitFlag`](exports_schema.md#bitflag-1) ; `cooling`: [`BitFlag`](exports_schema.md#bitflag-1) ; `heating`: [`BitFlag`](exports_schema.md#bitflag-1) ; `localTemperatureNotExposed`: [`BitFlag`](exports_schema.md#bitflag-1) ; `occupancy`: [`BitFlag`](exports_schema.md#bitflag-1) ; `scheduleConfiguration`: [`BitFlag`](exports_schema.md#bitflag-1) ; `setback`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>  }

Thermostat

This cluster provides an interface to the functionality of a thermostat.

ThermostatCluster supports optional features that you can enable with the ThermostatCluster.with() factory
method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:1422

___

### Complete

• `Const` **Complete**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `absMaxCoolSetpointLimit`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `cooling`: `boolean`  }]  } ; `absMaxHeatSetpointLimit`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `heating`: `boolean`  }]  } ; `absMinCoolSetpointLimit`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `cooling`: `boolean`  }]  } ; `absMinHeatSetpointLimit`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `heating`: `boolean`  }]  } ; `acCapacity`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<`number`, `any`\> ; `acCapacityFormat`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<[`AcCapacityFormat`](../enums/exports_cluster.Thermostat.AcCapacityFormat.md), `any`\> ; `acCoilTemperature`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<`number` \| ``null``, `any`\> ; `acCompressorType`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<[`AcCompressorType`](../enums/exports_cluster.Thermostat.AcCompressorType.md), `any`\> ; `acErrorCode`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `acLouverPosition`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<[`AcLouverPosition`](../enums/exports_cluster.Thermostat.AcLouverPosition.md), `any`\> ; `acRefrigerantType`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<[`AcRefrigerantType`](../enums/exports_cluster.Thermostat.AcRefrigerantType.md), `any`\> ; `acType`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<[`AcType`](../enums/exports_cluster.Thermostat.AcType.md), `any`\> ; `acceptedCommandList`: [`Attribute`](exports_cluster.md#attribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `alarmMask`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `attributeList`: [`Attribute`](exports_cluster.md#attribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `clusterRevision`: [`Attribute`](exports_cluster.md#attribute)\<`number`, `never`\> ; `controlSequenceOfOperation`: [`WritableAttribute`](exports_cluster.md#writableattribute)\<[`ControlSequenceOfOperation`](../enums/exports_cluster.Thermostat.ControlSequenceOfOperation.md), `any`\> ; `emergencyHeatDelta`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<`number`, `any`\> ; `eventList`: [`Attribute`](exports_cluster.md#attribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.md#attribute)\<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<\{ `autoMode`: [`BitFlag`](exports_schema.md#bitflag-1) ; `cooling`: [`BitFlag`](exports_schema.md#bitflag-1) ; `heating`: [`BitFlag`](exports_schema.md#bitflag-1) ; `localTemperatureNotExposed`: [`BitFlag`](exports_schema.md#bitflag-1) ; `occupancy`: [`BitFlag`](exports_schema.md#bitflag-1) ; `scheduleConfiguration`: [`BitFlag`](exports_schema.md#bitflag-1) ; `setback`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.md#attribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `localTemperature`: [`Attribute`](exports_cluster.md#attribute)\<`number` \| ``null``, `any`\> ; `localTemperatureCalibration`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: []  } ; `maxCoolSetpointLimit`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `cooling`: `boolean`  }]  } ; `maxHeatSetpointLimit`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `heating`: `boolean`  }]  } ; `minCoolSetpointLimit`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `cooling`: `boolean`  }]  } ; `minHeatSetpointLimit`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `heating`: `boolean`  }]  } ; `minSetpointDeadBand`: [`WritableAttribute`](exports_cluster.md#writableattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `autoMode`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `numberOfDailyTransitions`: [`FixedAttribute`](exports_cluster.md#fixedattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `scheduleConfiguration`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `numberOfWeeklyTransitions`: [`FixedAttribute`](exports_cluster.md#fixedattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `scheduleConfiguration`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `occupancy`: [`Attribute`](exports_cluster.md#attribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `occupancy`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `occupiedCoolingSetpoint`: [`WritableAttribute`](exports_cluster.md#writableattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `cooling`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `occupiedHeatingSetpoint`: [`WritableAttribute`](exports_cluster.md#writableattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `heating`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `occupiedSetback`: [`WritableAttribute`](exports_cluster.md#writableattribute)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `setback`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `occupiedSetbackMax`: [`FixedAttribute`](exports_cluster.md#fixedattribute)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `setback`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `occupiedSetbackMin`: [`FixedAttribute`](exports_cluster.md#fixedattribute)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `setback`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `outdoorTemperature`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<`number` \| ``null``, `any`\> ; `piCoolingDemand`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `cooling`: `boolean`  }]  } ; `piHeatingDemand`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `heating`: `boolean`  }]  } ; `remoteSensing`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `setpointChangeAmount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<`number` \| ``null``, `any`\> ; `setpointChangeSource`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<[`SetpointChangeSource`](../enums/exports_cluster.Thermostat.SetpointChangeSource.md), `any`\> ; `setpointChangeSourceTimestamp`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<`number`, `any`\> ; `startOfWeek`: [`FixedAttribute`](exports_cluster.md#fixedattribute)\<[`StartOfWeek`](../enums/exports_cluster.Thermostat.StartOfWeek.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `scheduleConfiguration`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `systemMode`: [`WritableAttribute`](exports_cluster.md#writableattribute)\<[`SystemMode`](../enums/exports_cluster.Thermostat.SystemMode.md), `any`\> ; `temperatureSetpointHold`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<[`TemperatureSetpointHold`](../enums/exports_cluster.Thermostat.TemperatureSetpointHold.md), `any`\> ; `temperatureSetpointHoldDuration`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<`number` \| ``null``, `any`\> ; `thermostatProgrammingOperationMode`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `thermostatRunningMode`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<[`ThermostatRunningMode`](../enums/exports_cluster.Thermostat.ThermostatRunningMode.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `autoMode`: `boolean`  }]  } ; `thermostatRunningState`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `unoccupiedCoolingSetpoint`: [`WritableAttribute`](exports_cluster.md#writableattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `cooling`: `boolean` ; `occupancy`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `unoccupiedHeatingSetpoint`: [`WritableAttribute`](exports_cluster.md#writableattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `heating`: `boolean` ; `occupancy`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `unoccupiedSetback`: [`WritableAttribute`](exports_cluster.md#writableattribute)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `occupancy`: `boolean` ; `setback`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `unoccupiedSetbackMax`: [`FixedAttribute`](exports_cluster.md#fixedattribute)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `occupancy`: `boolean` ; `setback`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `unoccupiedSetbackMin`: [`FixedAttribute`](exports_cluster.md#fixedattribute)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `occupancy`: `boolean` ; `setback`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `commands`: \{ `clearWeeklySchedule`: [`Command`](exports_cluster.md#command)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `scheduleConfiguration`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `getRelayStatusLog`: [`OptionalCommand`](exports_cluster.md#optionalcommand)\<`void`, `void`, `any`\> ; `getWeeklySchedule`: [`Command`](exports_cluster.md#command)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `scheduleConfiguration`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `setWeeklySchedule`: [`Command`](exports_cluster.md#command)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `scheduleConfiguration`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `setpointRaiseLower`: [`Command`](exports_cluster.md#command)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `features`: \{ `autoMode`: [`BitFlag`](exports_schema.md#bitflag-1) ; `cooling`: [`BitFlag`](exports_schema.md#bitflag-1) ; `heating`: [`BitFlag`](exports_schema.md#bitflag-1) ; `localTemperatureNotExposed`: [`BitFlag`](exports_schema.md#bitflag-1) ; `occupancy`: [`BitFlag`](exports_schema.md#bitflag-1) ; `scheduleConfiguration`: [`BitFlag`](exports_schema.md#bitflag-1) ; `setback`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``513`` & [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"Thermostat"`` ; `revision`: ``6``  }\>

This cluster supports all Thermostat features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:2404

___

### CoolingAndOccupancyComponent

• `Const` **CoolingAndOccupancyComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `unoccupiedCoolingSetpoint`: [`WritableAttribute`](exports_cluster.md#writableattribute)\<`number`, `any`\>  }  }\>

A ThermostatCluster supports these elements if it supports features Cooling and Occupancy.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:1139

___

### CoolingComponent

• `Const` **CoolingComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `absMaxCoolSetpointLimit`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)\<`number`, `any`\> ; `absMinCoolSetpointLimit`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)\<`number`, `any`\> ; `maxCoolSetpointLimit`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<`number`, `any`\> ; `minCoolSetpointLimit`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<`number`, `any`\> ; `occupiedCoolingSetpoint`: [`WritableAttribute`](exports_cluster.md#writableattribute)\<`number`, `any`\> ; `piCoolingDemand`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<`number`, `any`\>  }  }\>

A ThermostatCluster supports these elements if it supports feature Cooling.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:1045

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

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:377

___

### HeatingAndOccupancyComponent

• `Const` **HeatingAndOccupancyComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `unoccupiedHeatingSetpoint`: [`WritableAttribute`](exports_cluster.md#writableattribute)\<`number`, `any`\>  }  }\>

A ThermostatCluster supports these elements if it supports features Heating and Occupancy.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:1157

___

### HeatingComponent

• `Const` **HeatingComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `absMaxHeatSetpointLimit`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)\<`number`, `any`\> ; `absMinHeatSetpointLimit`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)\<`number`, `any`\> ; `maxHeatSetpointLimit`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<`number`, `any`\> ; `minHeatSetpointLimit`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<`number`, `any`\> ; `occupiedHeatingSetpoint`: [`WritableAttribute`](exports_cluster.md#writableattribute)\<`number`, `any`\> ; `piHeatingDemand`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<`number`, `any`\>  }  }\>

A ThermostatCluster supports these elements if it supports feature Heating.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:971

___

### ModeForSequence

• `Const` **ModeForSequence**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `coolSetpointPresent` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `heatSetpointPresent` | [`BitFlag`](exports_schema.md#bitflag-1) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:387

___

### NotLocalTemperatureNotExposedComponent

• `Const` **NotLocalTemperatureNotExposedComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `localTemperatureCalibration`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<`number`, `any`\>  }  }\>

A ThermostatCluster supports these elements if doesn't support feature LTNE.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:1117

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

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:350

___

### OccupancyComponent

• `Const` **OccupancyComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `occupancy`: [`Attribute`](exports_cluster.md#attribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  }  }\>

A ThermostatCluster supports these elements if it supports feature Occupancy.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:954

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

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:16

___

### ScheduleConfigurationComponent

• `Const` **ScheduleConfigurationComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `numberOfDailyTransitions`: [`FixedAttribute`](exports_cluster.md#fixedattribute)\<`number`, `any`\> ; `numberOfWeeklyTransitions`: [`FixedAttribute`](exports_cluster.md#fixedattribute)\<`number`, `any`\> ; `startOfWeek`: [`FixedAttribute`](exports_cluster.md#fixedattribute)\<[`StartOfWeek`](../enums/exports_cluster.Thermostat.StartOfWeek.md), `any`\>  } ; `commands`: \{ `clearWeeklySchedule`: [`Command`](exports_cluster.md#command)\<`void`, `void`, `any`\> ; `getWeeklySchedule`: [`Command`](exports_cluster.md#command)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `setWeeklySchedule`: [`Command`](exports_cluster.md#command)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  }\>

A ThermostatCluster supports these elements if it supports feature ScheduleConfiguration.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:1199

___

### SetbackAndOccupancyComponent

• `Const` **SetbackAndOccupancyComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `unoccupiedSetback`: [`WritableAttribute`](exports_cluster.md#writableattribute)\<`number` \| ``null``, `any`\> ; `unoccupiedSetbackMax`: [`FixedAttribute`](exports_cluster.md#fixedattribute)\<`number` \| ``null``, `any`\> ; `unoccupiedSetbackMin`: [`FixedAttribute`](exports_cluster.md#fixedattribute)\<`number` \| ``null``, `any`\>  }  }\>

A ThermostatCluster supports these elements if it supports features Setback and Occupancy.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:1365

___

### SetbackComponent

• `Const` **SetbackComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `occupiedSetback`: [`WritableAttribute`](exports_cluster.md#writableattribute)\<`number` \| ``null``, `any`\> ; `occupiedSetbackMax`: [`FixedAttribute`](exports_cluster.md#fixedattribute)\<`number` \| ``null``, `any`\> ; `occupiedSetbackMin`: [`FixedAttribute`](exports_cluster.md#fixedattribute)\<`number` \| ``null``, `any`\>  }  }\>

A ThermostatCluster supports these elements if it supports feature Setback.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:1315

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

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:125

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

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:144

___

### TlvGetWeeklyScheduleRequest

• `Const` **TlvGetWeeklyScheduleRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Thermostat getWeeklySchedule command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.3.8

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:447

___

### TlvGetWeeklyScheduleResponse

• `Const` **TlvGetWeeklyScheduleResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.3.8

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:466

___

### TlvSetWeeklyScheduleRequest

• `Const` **TlvSetWeeklyScheduleRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Thermostat setWeeklySchedule command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.3.8

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:413

___

### TlvSetpointRaiseLowerRequest

• `Const` **TlvSetpointRaiseLowerRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Thermostat setpointRaiseLower command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.3.8

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:341

___

### TlvThermostatScheduleTransition

• `Const` **TlvThermostatScheduleTransition**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This represents a single transition in a Thermostat schedule

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.3.9.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:396
