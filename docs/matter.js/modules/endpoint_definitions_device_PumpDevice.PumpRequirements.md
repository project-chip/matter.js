[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/PumpDevice](endpoint_definitions_device_PumpDevice.md) / PumpRequirements

# Namespace: PumpRequirements

[endpoint/definitions/device/PumpDevice](endpoint_definitions_device_PumpDevice.md).PumpRequirements

## Table of contents

### Variables

- [FlowMeasurementBehavior](endpoint_definitions_device_PumpDevice.PumpRequirements.md#flowmeasurementbehavior)
- [FlowMeasurementServer](endpoint_definitions_device_PumpDevice.PumpRequirements.md#flowmeasurementserver)
- [GroupsServer](endpoint_definitions_device_PumpDevice.PumpRequirements.md#groupsserver)
- [IdentifyServer](endpoint_definitions_device_PumpDevice.PumpRequirements.md#identifyserver)
- [LevelControlServer](endpoint_definitions_device_PumpDevice.PumpRequirements.md#levelcontrolserver)
- [OccupancySensingBehavior](endpoint_definitions_device_PumpDevice.PumpRequirements.md#occupancysensingbehavior)
- [OnOffServer](endpoint_definitions_device_PumpDevice.PumpRequirements.md#onoffserver)
- [PressureMeasurementBehavior](endpoint_definitions_device_PumpDevice.PumpRequirements.md#pressuremeasurementbehavior)
- [PressureMeasurementServer](endpoint_definitions_device_PumpDevice.PumpRequirements.md#pressuremeasurementserver)
- [PumpConfigurationAndControlServer](endpoint_definitions_device_PumpDevice.PumpRequirements.md#pumpconfigurationandcontrolserver)
- [ScenesServer](endpoint_definitions_device_PumpDevice.PumpRequirements.md#scenesserver)
- [TemperatureMeasurementBehavior](endpoint_definitions_device_PumpDevice.PumpRequirements.md#temperaturemeasurementbehavior)
- [TemperatureMeasurementServer](endpoint_definitions_device_PumpDevice.PumpRequirements.md#temperaturemeasurementserver)
- [client](endpoint_definitions_device_PumpDevice.PumpRequirements.md#client)
- [server](endpoint_definitions_device_PumpDevice.PumpRequirements.md#server)

## Variables

### FlowMeasurementBehavior

• `Const` **FlowMeasurementBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.FlowMeasurement.Cluster.md), typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\> = `BaseFlowMeasurementBehavior`

The FlowMeasurement cluster is optional per the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/PumpDevice.ts:139](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/PumpDevice.ts#L139)

___

### FlowMeasurementServer

• `Const` **FlowMeasurementServer**: typeof [`FlowMeasurementServer`](../classes/behavior_definitions_flow_measurement_export.FlowMeasurementServer.md) = `BaseFlowMeasurementServer`

The FlowMeasurement cluster is optional per the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/PumpDevice.ts:118](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/PumpDevice.ts#L118)

___

### GroupsServer

• `Const` **GroupsServer**: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md) = `BaseGroupsServer`

The Groups cluster is optional per the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/PumpDevice.ts:97](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/PumpDevice.ts#L97)

___

### IdentifyServer

• `Const` **IdentifyServer**: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) = `BaseIdentifyServer`

The Identify cluster is required by the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/PumpDevice.ts:76](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/PumpDevice.ts#L76)

___

### LevelControlServer

• `Const` **LevelControlServer**: typeof [`LevelControlServer`](../classes/behavior_definitions_level_control_export.LevelControlServer.md) = `BaseLevelControlServer`

The LevelControl cluster is optional per the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/PumpDevice.ts:83](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/PumpDevice.ts#L83)

___

### OccupancySensingBehavior

• `Const` **OccupancySensingBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.OccupancySensing.Cluster.md), typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\> = `BaseOccupancySensingBehavior`

The OccupancySensing cluster is optional per the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/PumpDevice.ts:146](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/PumpDevice.ts#L146)

___

### OnOffServer

• `Const` **OnOffServer**: typeof [`OnOffServer`](behavior_definitions_on_off_export.OnOffServer.md) = `BaseOnOffServer`

The OnOff cluster is required by the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/PumpDevice.ts:62](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/PumpDevice.ts#L62)

___

### PressureMeasurementBehavior

• `Const` **PressureMeasurementBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.PressureMeasurement.Cluster.md), typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\> = `BasePressureMeasurementBehavior`

The PressureMeasurement cluster is optional per the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/PumpDevice.ts:132](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/PumpDevice.ts#L132)

___

### PressureMeasurementServer

• `Const` **PressureMeasurementServer**: typeof [`PressureMeasurementServer`](../classes/behavior_definitions_pressure_measurement_export.PressureMeasurementServer.md) = `BasePressureMeasurementServer`

The PressureMeasurement cluster is optional per the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/PumpDevice.ts:111](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/PumpDevice.ts#L111)

___

### PumpConfigurationAndControlServer

• `Const` **PumpConfigurationAndControlServer**: typeof [`PumpConfigurationAndControlServer`](../classes/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md) = `BasePumpConfigurationAndControlServer`

The PumpConfigurationAndControl cluster is required by the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/PumpDevice.ts:69](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/PumpDevice.ts#L69)

___

### ScenesServer

• `Const` **ScenesServer**: typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md) = `BaseScenesServer`

The Scenes cluster is optional per the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/PumpDevice.ts:90](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/PumpDevice.ts#L90)

___

### TemperatureMeasurementBehavior

• `Const` **TemperatureMeasurementBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.TemperatureMeasurement.Cluster.md), typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\> = `BaseTemperatureMeasurementBehavior`

The TemperatureMeasurement cluster is optional per the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/PumpDevice.ts:125](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/PumpDevice.ts#L125)

___

### TemperatureMeasurementServer

• `Const` **TemperatureMeasurementServer**: typeof [`TemperatureMeasurementServer`](../classes/behavior_definitions_temperature_measurement_export.TemperatureMeasurementServer.md) = `BaseTemperatureMeasurementServer`

The TemperatureMeasurement cluster is optional per the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/PumpDevice.ts:104](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/PumpDevice.ts#L104)

___

### client

• `Const` **client**: `Object`

A definition for each client cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | {} |
| `optional` | \{ `FlowMeasurement`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.FlowMeasurement.Cluster.md), typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\> = FlowMeasurementBehavior; `OccupancySensing`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.OccupancySensing.Cluster.md), typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\> = OccupancySensingBehavior; `PressureMeasurement`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.PressureMeasurement.Cluster.md), typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\> = PressureMeasurementBehavior; `TemperatureMeasurement`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.TemperatureMeasurement.Cluster.md), typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\> = TemperatureMeasurementBehavior } |
| `optional.FlowMeasurement` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.FlowMeasurement.Cluster.md), typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\> |
| `optional.OccupancySensing` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.OccupancySensing.Cluster.md), typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\> |
| `optional.PressureMeasurement` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.PressureMeasurement.Cluster.md), typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\> |
| `optional.TemperatureMeasurement` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.TemperatureMeasurement.Cluster.md), typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\> |

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/PumpDevice.ts:171](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/PumpDevice.ts#L171)

___

### server

• `Const` **server**: `Object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | \{ `Identify`: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) = IdentifyServer; `OnOff`: typeof [`OnOffServer`](behavior_definitions_on_off_export.OnOffServer.md) = OnOffServer; `PumpConfigurationAndControl`: typeof [`PumpConfigurationAndControlServer`](../classes/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md) = PumpConfigurationAndControlServer } |
| `mandatory.Identify` | typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) |
| `mandatory.OnOff` | typeof [`OnOffServer`](behavior_definitions_on_off_export.OnOffServer.md) |
| `mandatory.PumpConfigurationAndControl` | typeof [`PumpConfigurationAndControlServer`](../classes/behavior_definitions_pump_configuration_and_control_export.PumpConfigurationAndControlServer.md) |
| `optional` | \{ `FlowMeasurement`: typeof [`FlowMeasurementServer`](../classes/behavior_definitions_flow_measurement_export.FlowMeasurementServer.md) = FlowMeasurementServer; `Groups`: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md) = GroupsServer; `LevelControl`: typeof [`LevelControlServer`](../classes/behavior_definitions_level_control_export.LevelControlServer.md) = LevelControlServer; `PressureMeasurement`: typeof [`PressureMeasurementServer`](../classes/behavior_definitions_pressure_measurement_export.PressureMeasurementServer.md) = PressureMeasurementServer; `Scenes`: typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md) = ScenesServer; `TemperatureMeasurement`: typeof [`TemperatureMeasurementServer`](../classes/behavior_definitions_temperature_measurement_export.TemperatureMeasurementServer.md) = TemperatureMeasurementServer } |
| `optional.FlowMeasurement` | typeof [`FlowMeasurementServer`](../classes/behavior_definitions_flow_measurement_export.FlowMeasurementServer.md) |
| `optional.Groups` | typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md) |
| `optional.LevelControl` | typeof [`LevelControlServer`](../classes/behavior_definitions_level_control_export.LevelControlServer.md) |
| `optional.PressureMeasurement` | typeof [`PressureMeasurementServer`](../classes/behavior_definitions_pressure_measurement_export.PressureMeasurementServer.md) |
| `optional.Scenes` | typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md) |
| `optional.TemperatureMeasurement` | typeof [`TemperatureMeasurementServer`](../classes/behavior_definitions_temperature_measurement_export.TemperatureMeasurementServer.md) |

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/PumpDevice.ts:151](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/PumpDevice.ts#L151)
