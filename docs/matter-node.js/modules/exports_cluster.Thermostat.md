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
| `coilSensorFail` | [`BitFlag`](exports_schema.md#bitflag) | Indoor Coil Temperature Sensor Failure |
| `compressorFail` | [`BitFlag`](exports_schema.md#bitflag) | Compressor Failure or Refrigerant Leakage |
| `fanFail` | [`BitFlag`](exports_schema.md#bitflag) | Fan Failure |
| `outdoorSensorFail` | [`BitFlag`](exports_schema.md#bitflag) | Outdoor Temperature Sensor Failure |
| `roomSensorFail` | [`BitFlag`](exports_schema.md#bitflag) | Room Temperature Sensor Failure |

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
| `hardwareFailure` | [`BitFlag`](exports_schema.md#bitflag) |
| `initializationFailure` | [`BitFlag`](exports_schema.md#bitflag) |
| `selfCalibrationFailure` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:100

___

### AutoModeComponent

• `Const` **AutoModeComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `minSetpointDeadBand`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `thermostatRunningMode`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`ThermostatRunningMode`](../enums/exports_cluster.Thermostat.ThermostatRunningMode.md), `any`\>  }  }\>

A ThermostatCluster supports these elements if it supports feature AutoMode.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:1175

___

### Base

• `Const` **Base**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `acCapacity`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `acCapacityFormat`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`AcCapacityFormat`](../enums/exports_cluster.Thermostat.AcCapacityFormat.md), `any`\> ; `acCoilTemperature`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `acCompressorType`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`AcCompressorType`](../enums/exports_cluster.Thermostat.AcCompressorType.md), `any`\> ; `acErrorCode`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `acLouverPosition`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`AcLouverPosition`](../enums/exports_cluster.Thermostat.AcLouverPosition.md), `any`\> ; `acRefrigerantType`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`AcRefrigerantType`](../enums/exports_cluster.Thermostat.AcRefrigerantType.md), `any`\> ; `acType`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`AcType`](../enums/exports_cluster.Thermostat.AcType.md), `any`\> ; `alarmMask`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `controlSequenceOfOperation`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`ControlSequenceOfOperation`](../enums/exports_cluster.Thermostat.ControlSequenceOfOperation.md), `any`\> ; `emergencyHeatDelta`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `localTemperature`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `outdoorTemperature`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `remoteSensing`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `setpointChangeAmount`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `setpointChangeSource`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`SetpointChangeSource`](../enums/exports_cluster.Thermostat.SetpointChangeSource.md), `any`\> ; `setpointChangeSourceTimestamp`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `systemMode`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`SystemMode`](../enums/exports_cluster.Thermostat.SystemMode.md), `any`\> ; `temperatureSetpointHold`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`TemperatureSetpointHold`](../enums/exports_cluster.Thermostat.TemperatureSetpointHold.md), `any`\> ; `temperatureSetpointHoldDuration`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `thermostatProgrammingOperationMode`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `thermostatRunningState`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  } ; `commands`: \{ `getRelayStatusLog`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> ; `setpointRaiseLower`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `features`: \{ `autoMode`: [`BitFlag`](exports_schema.md#bitflag) ; `cooling`: [`BitFlag`](exports_schema.md#bitflag) ; `heating`: [`BitFlag`](exports_schema.md#bitflag) ; `localTemperatureNotExposed`: [`BitFlag`](exports_schema.md#bitflag) ; `occupancy`: [`BitFlag`](exports_schema.md#bitflag) ; `scheduleConfiguration`: [`BitFlag`](exports_schema.md#bitflag) ; `setback`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``513`` ; `name`: ``"Thermostat"`` ; `revision`: ``6``  }\>

These elements and properties are present in all Thermostat clusters.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:547

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: \{ `getRelayStatusLog`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> ; `setpointRaiseLower`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `events`: {} ; `features`: \{ `autoMode`: [`BitFlag`](exports_schema.md#bitflag) ; `cooling`: [`BitFlag`](exports_schema.md#bitflag) ; `heating`: [`BitFlag`](exports_schema.md#bitflag) ; `localTemperatureNotExposed`: [`BitFlag`](exports_schema.md#bitflag) ; `occupancy`: [`BitFlag`](exports_schema.md#bitflag) ; `scheduleConfiguration`: [`BitFlag`](exports_schema.md#bitflag) ; `setback`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"Thermostat"`` ; `revision`: ``6`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `acCapacity`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `acCapacityFormat`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`AcCapacityFormat`](../enums/exports_cluster.Thermostat.AcCapacityFormat.md), `any`\> ; `acCoilTemperature`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `acCompressorType`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`AcCompressorType`](../enums/exports_cluster.Thermostat.AcCompressorType.md), `any`\> ; `acErrorCode`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `acLouverPosition`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`AcLouverPosition`](../enums/exports_cluster.Thermostat.AcLouverPosition.md), `any`\> ; `acRefrigerantType`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`AcRefrigerantType`](../enums/exports_cluster.Thermostat.AcRefrigerantType.md), `any`\> ; `acType`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`AcType`](../enums/exports_cluster.Thermostat.AcType.md), `any`\> ; `alarmMask`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `controlSequenceOfOperation`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`ControlSequenceOfOperation`](../enums/exports_cluster.Thermostat.ControlSequenceOfOperation.md), `any`\> ; `emergencyHeatDelta`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `localTemperature`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `outdoorTemperature`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `remoteSensing`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `setpointChangeAmount`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `setpointChangeSource`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`SetpointChangeSource`](../enums/exports_cluster.Thermostat.SetpointChangeSource.md), `any`\> ; `setpointChangeSourceTimestamp`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `systemMode`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`SystemMode`](../enums/exports_cluster.Thermostat.SystemMode.md), `any`\> ; `temperatureSetpointHold`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`TemperatureSetpointHold`](../enums/exports_cluster.Thermostat.TemperatureSetpointHold.md), `any`\> ; `temperatureSetpointHoldDuration`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `thermostatProgrammingOperationMode`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `thermostatRunningState`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  } ; `commands`: \{ `getRelayStatusLog`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> ; `setpointRaiseLower`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `features`: \{ `autoMode`: [`BitFlag`](exports_schema.md#bitflag) ; `cooling`: [`BitFlag`](exports_schema.md#bitflag) ; `heating`: [`BitFlag`](exports_schema.md#bitflag) ; `localTemperatureNotExposed`: [`BitFlag`](exports_schema.md#bitflag) ; `occupancy`: [`BitFlag`](exports_schema.md#bitflag) ; `scheduleConfiguration`: [`BitFlag`](exports_schema.md#bitflag) ; `setback`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``513`` ; `name`: ``"Thermostat"`` ; `revision`: ``6``  }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.Thermostat.md#extension)\<[`BitFlags`](exports_schema.md#bitflags)\<\{ `autoMode`: [`BitFlag`](exports_schema.md#bitflag) ; `cooling`: [`BitFlag`](exports_schema.md#bitflag) ; `heating`: [`BitFlag`](exports_schema.md#bitflag) ; `localTemperatureNotExposed`: [`BitFlag`](exports_schema.md#bitflag) ; `occupancy`: [`BitFlag`](exports_schema.md#bitflag) ; `scheduleConfiguration`: [`BitFlag`](exports_schema.md#bitflag) ; `setback`: [`BitFlag`](exports_schema.md#bitflag)  }, `T`\>\>  }

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

• `Const` **Complete**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `absMaxCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `cooling`: `boolean`  }]  } ; `absMaxHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `heating`: `boolean`  }]  } ; `absMinCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `cooling`: `boolean`  }]  } ; `absMinHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `heating`: `boolean`  }]  } ; `acCapacity`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `acCapacityFormat`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`AcCapacityFormat`](../enums/exports_cluster.Thermostat.AcCapacityFormat.md), `any`\> ; `acCoilTemperature`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `acCompressorType`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`AcCompressorType`](../enums/exports_cluster.Thermostat.AcCompressorType.md), `any`\> ; `acErrorCode`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `acLouverPosition`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`AcLouverPosition`](../enums/exports_cluster.Thermostat.AcLouverPosition.md), `any`\> ; `acRefrigerantType`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`AcRefrigerantType`](../enums/exports_cluster.Thermostat.AcRefrigerantType.md), `any`\> ; `acType`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`AcType`](../enums/exports_cluster.Thermostat.AcType.md), `any`\> ; `acceptedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `alarmMask`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `attributeList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `clusterRevision`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `never`\> ; `controlSequenceOfOperation`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`ControlSequenceOfOperation`](../enums/exports_cluster.Thermostat.ControlSequenceOfOperation.md), `any`\> ; `emergencyHeatDelta`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `eventList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<\{ `autoMode`: [`BitFlag`](exports_schema.md#bitflag) ; `cooling`: [`BitFlag`](exports_schema.md#bitflag) ; `heating`: [`BitFlag`](exports_schema.md#bitflag) ; `localTemperatureNotExposed`: [`BitFlag`](exports_schema.md#bitflag) ; `occupancy`: [`BitFlag`](exports_schema.md#bitflag) ; `scheduleConfiguration`: [`BitFlag`](exports_schema.md#bitflag) ; `setback`: [`BitFlag`](exports_schema.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `localTemperature`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `localTemperatureCalibration`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: []  } ; `maxCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `cooling`: `boolean`  }]  } ; `maxHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `heating`: `boolean`  }]  } ; `minCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `cooling`: `boolean`  }]  } ; `minHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `heating`: `boolean`  }]  } ; `minSetpointDeadBand`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `autoMode`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `numberOfDailyTransitions`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `scheduleConfiguration`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `numberOfWeeklyTransitions`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `scheduleConfiguration`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `occupancy`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `occupancy`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `occupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `cooling`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `occupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `heating`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `occupiedSetback`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `setback`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `occupiedSetbackMax`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `setback`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `occupiedSetbackMin`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `setback`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `outdoorTemperature`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `piCoolingDemand`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `cooling`: `boolean`  }]  } ; `piHeatingDemand`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `heating`: `boolean`  }]  } ; `remoteSensing`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `setpointChangeAmount`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `setpointChangeSource`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`SetpointChangeSource`](../enums/exports_cluster.Thermostat.SetpointChangeSource.md), `any`\> ; `setpointChangeSourceTimestamp`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `startOfWeek`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`StartOfWeek`](../enums/exports_cluster.Thermostat.StartOfWeek.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `scheduleConfiguration`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `systemMode`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`SystemMode`](../enums/exports_cluster.Thermostat.SystemMode.md), `any`\> ; `temperatureSetpointHold`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`TemperatureSetpointHold`](../enums/exports_cluster.Thermostat.TemperatureSetpointHold.md), `any`\> ; `temperatureSetpointHoldDuration`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `thermostatProgrammingOperationMode`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `thermostatRunningMode`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`ThermostatRunningMode`](../enums/exports_cluster.Thermostat.ThermostatRunningMode.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `autoMode`: `boolean`  }]  } ; `thermostatRunningState`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `unoccupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `cooling`: `boolean` ; `occupancy`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `unoccupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `heating`: `boolean` ; `occupancy`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `unoccupiedSetback`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `occupancy`: `boolean` ; `setback`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `unoccupiedSetbackMax`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `occupancy`: `boolean` ; `setback`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `unoccupiedSetbackMin`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `occupancy`: `boolean` ; `setback`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `commands`: \{ `clearWeeklySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `scheduleConfiguration`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `getRelayStatusLog`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> ; `getWeeklySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `scheduleConfiguration`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `setWeeklySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `scheduleConfiguration`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `setpointRaiseLower`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `features`: \{ `autoMode`: [`BitFlag`](exports_schema.md#bitflag) ; `cooling`: [`BitFlag`](exports_schema.md#bitflag) ; `heating`: [`BitFlag`](exports_schema.md#bitflag) ; `localTemperatureNotExposed`: [`BitFlag`](exports_schema.md#bitflag) ; `occupancy`: [`BitFlag`](exports_schema.md#bitflag) ; `scheduleConfiguration`: [`BitFlag`](exports_schema.md#bitflag) ; `setback`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``513`` & [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"Thermostat"`` ; `revision`: ``6``  }\>

This cluster supports all Thermostat features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:2404

___

### CoolingAndOccupancyComponent

• `Const` **CoolingAndOccupancyComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `unoccupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\>  }  }\>

A ThermostatCluster supports these elements if it supports features Cooling and Occupancy.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:1139

___

### CoolingComponent

• `Const` **CoolingComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `absMaxCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `absMinCoolSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `maxCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `minCoolSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `occupiedCoolingSetpoint`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `piCoolingDemand`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  }  }\>

A ThermostatCluster supports these elements if it supports feature Cooling.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:1045

___

### DayOfWeek

• `Const` **DayOfWeek**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `away` | [`BitFlag`](exports_schema.md#bitflag) |
| `friday` | [`BitFlag`](exports_schema.md#bitflag) |
| `monday` | [`BitFlag`](exports_schema.md#bitflag) |
| `saturday` | [`BitFlag`](exports_schema.md#bitflag) |
| `sunday` | [`BitFlag`](exports_schema.md#bitflag) |
| `thursday` | [`BitFlag`](exports_schema.md#bitflag) |
| `tuesday` | [`BitFlag`](exports_schema.md#bitflag) |
| `wednesday` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:377

___

### HeatingAndOccupancyComponent

• `Const` **HeatingAndOccupancyComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `unoccupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\>  }  }\>

A ThermostatCluster supports these elements if it supports features Heating and Occupancy.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:1157

___

### HeatingComponent

• `Const` **HeatingComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `absMaxHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `absMinHeatSetpointLimit`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `maxHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `minHeatSetpointLimit`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `occupiedHeatingSetpoint`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `piHeatingDemand`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  }  }\>

A ThermostatCluster supports these elements if it supports feature Heating.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:971

___

### ModeForSequence

• `Const` **ModeForSequence**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `coolSetpointPresent` | [`BitFlag`](exports_schema.md#bitflag) |
| `heatSetpointPresent` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:387

___

### NotLocalTemperatureNotExposedComponent

• `Const` **NotLocalTemperatureNotExposedComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `localTemperatureCalibration`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\>  }  }\>

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
| `occupied` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:350

___

### OccupancyComponent

• `Const` **OccupancyComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `occupancy`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  }  }\>

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
| `localTemperature` | [`BitFlag`](exports_schema.md#bitflag) | When set, LocalTemperature Value is derived from a remote node |
| `occupancy` | [`BitFlag`](exports_schema.md#bitflag) | When set, Occupancy is derived from a remote node |
| `outdoorTemperature` | [`BitFlag`](exports_schema.md#bitflag) | When set, OutdoorTemperature is derived from a remote node |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:16

___

### ScheduleConfigurationComponent

• `Const` **ScheduleConfigurationComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `numberOfDailyTransitions`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `numberOfWeeklyTransitions`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `startOfWeek`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`StartOfWeek`](../enums/exports_cluster.Thermostat.StartOfWeek.md), `any`\>  } ; `commands`: \{ `clearWeeklySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `getWeeklySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `setWeeklySchedule`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  }\>

A ThermostatCluster supports these elements if it supports feature ScheduleConfiguration.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:1199

___

### SetbackAndOccupancyComponent

• `Const` **SetbackAndOccupancyComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `unoccupiedSetback`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> ; `unoccupiedSetbackMax`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `unoccupiedSetbackMin`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\>  }  }\>

A ThermostatCluster supports these elements if it supports features Setback and Occupancy.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:1365

___

### SetbackComponent

• `Const` **SetbackComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `occupiedSetback`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> ; `occupiedSetbackMax`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `occupiedSetbackMin`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\>  }  }\>

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
| `autoRecovery` | [`BitFlag`](exports_schema.md#bitflag) | Auto/recovery mode |
| `economy` | [`BitFlag`](exports_schema.md#bitflag) | Economy/EnergyStar mode |
| `scheduleActive` | [`BitFlag`](exports_schema.md#bitflag) | Schedule programming mode. This enables any programmed weekly schedule configurations. |

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
| `cool` | [`BitFlag`](exports_schema.md#bitflag) | Cool State On |
| `coolStage2` | [`BitFlag`](exports_schema.md#bitflag) | Cool 2nd Stage State On |
| `fan` | [`BitFlag`](exports_schema.md#bitflag) | Fan State On |
| `fanStage2` | [`BitFlag`](exports_schema.md#bitflag) | Fan 2nd Stage State On |
| `fanStage3` | [`BitFlag`](exports_schema.md#bitflag) | Fan 3rd Stage Stage On |
| `heat` | [`BitFlag`](exports_schema.md#bitflag) | Heat State On |
| `heatStage2` | [`BitFlag`](exports_schema.md#bitflag) | Heat 2nd Stage State On |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:144

___

### TlvGetWeeklyScheduleRequest

• `Const` **TlvGetWeeklyScheduleRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Thermostat getWeeklySchedule command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.3.8

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:447

___

### TlvGetWeeklyScheduleResponse

• `Const` **TlvGetWeeklyScheduleResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.3.8

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:466

___

### TlvSetWeeklyScheduleRequest

• `Const` **TlvSetWeeklyScheduleRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Thermostat setWeeklySchedule command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.3.8

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:413

___

### TlvSetpointRaiseLowerRequest

• `Const` **TlvSetpointRaiseLowerRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Thermostat setpointRaiseLower command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.3.8

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:341

___

### TlvThermostatScheduleTransition

• `Const` **TlvThermostatScheduleTransition**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This represents a single transition in a Thermostat schedule

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.3.9.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatCluster.d.ts:396
