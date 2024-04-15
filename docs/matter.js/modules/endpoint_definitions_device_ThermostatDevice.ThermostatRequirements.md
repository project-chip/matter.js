[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/ThermostatDevice](endpoint_definitions_device_ThermostatDevice.md) / ThermostatRequirements

# Namespace: ThermostatRequirements

[endpoint/definitions/device/ThermostatDevice](endpoint_definitions_device_ThermostatDevice.md).ThermostatRequirements

## Table of contents

### Variables

- [FanControlBehavior](endpoint_definitions_device_ThermostatDevice.ThermostatRequirements.md#fancontrolbehavior)
- [GroupsServer](endpoint_definitions_device_ThermostatDevice.ThermostatRequirements.md#groupsserver)
- [IdentifyServer](endpoint_definitions_device_ThermostatDevice.ThermostatRequirements.md#identifyserver)
- [OccupancySensingBehavior](endpoint_definitions_device_ThermostatDevice.ThermostatRequirements.md#occupancysensingbehavior)
- [RelativeHumidityMeasurementBehavior](endpoint_definitions_device_ThermostatDevice.ThermostatRequirements.md#relativehumiditymeasurementbehavior)
- [ScenesServer](endpoint_definitions_device_ThermostatDevice.ThermostatRequirements.md#scenesserver)
- [TemperatureMeasurementBehavior](endpoint_definitions_device_ThermostatDevice.ThermostatRequirements.md#temperaturemeasurementbehavior)
- [ThermostatServer](endpoint_definitions_device_ThermostatDevice.ThermostatRequirements.md#thermostatserver)
- [ThermostatUserInterfaceConfigurationServer](endpoint_definitions_device_ThermostatDevice.ThermostatRequirements.md#thermostatuserinterfaceconfigurationserver)
- [TimeSyncBehavior](endpoint_definitions_device_ThermostatDevice.ThermostatRequirements.md#timesyncbehavior)
- [TimeSyncServer](endpoint_definitions_device_ThermostatDevice.ThermostatRequirements.md#timesyncserver)
- [client](endpoint_definitions_device_ThermostatDevice.ThermostatRequirements.md#client)
- [server](endpoint_definitions_device_ThermostatDevice.ThermostatRequirements.md#server)

## Variables

### FanControlBehavior

• `Const` **FanControlBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.FanControl.Cluster.md), typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\> = `BaseFanControlBehavior`

The FanControl cluster is optional per the Matter specification

We provide this alias to the default implementation [FanControlBehavior](endpoint_definitions_device_ThermostatDevice.ThermostatRequirements.md#fancontrolbehavior) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts:110](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts#L110)

___

### GroupsServer

• `Const` **GroupsServer**: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md) = `BaseGroupsServer`

The Groups cluster is optional per the Matter specification

We provide this alias to the default implementation [GroupsServer](endpoint_definitions_device_ThermostatDevice.ThermostatRequirements.md#groupsserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts#L67)

___

### IdentifyServer

• `Const` **IdentifyServer**: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) = `BaseIdentifyServer`

The Identify cluster is required by the Matter specification

We provide this alias to the default implementation [IdentifyServer](endpoint_definitions_device_ThermostatDevice.ThermostatRequirements.md#identifyserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts#L53)

___

### OccupancySensingBehavior

• `Const` **OccupancySensingBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.OccupancySensing.Cluster.md), typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\> = `BaseOccupancySensingBehavior`

The OccupancySensing cluster is optional per the Matter specification

We provide this alias to the default implementation [OccupancySensingBehavior](endpoint_definitions_device_ThermostatDevice.ThermostatRequirements.md#occupancysensingbehavior) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts:124](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts#L124)

___

### RelativeHumidityMeasurementBehavior

• `Const` **RelativeHumidityMeasurementBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.RelativeHumidityMeasurement.Cluster.md), typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\> = `BaseRelativeHumidityMeasurementBehavior`

The RelativeHumidityMeasurement cluster is optional per the Matter specification

We provide this alias to the default implementation [RelativeHumidityMeasurementBehavior](endpoint_definitions_device_ThermostatDevice.ThermostatRequirements.md#relativehumiditymeasurementbehavior) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts:96](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts#L96)

___

### ScenesServer

• `Const` **ScenesServer**: typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md) = `BaseScenesServer`

The Scenes cluster is optional per the Matter specification

We provide this alias to the default implementation [ScenesServer](endpoint_definitions_device_ThermostatDevice.ThermostatRequirements.md#scenesserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts#L74)

___

### TemperatureMeasurementBehavior

• `Const` **TemperatureMeasurementBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.TemperatureMeasurement.Cluster.md), typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\> = `BaseTemperatureMeasurementBehavior`

The TemperatureMeasurement cluster is optional per the Matter specification

We provide this alias to the default implementation [TemperatureMeasurementBehavior](endpoint_definitions_device_ThermostatDevice.ThermostatRequirements.md#temperaturemeasurementbehavior) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts:117](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts#L117)

___

### ThermostatServer

• `Const` **ThermostatServer**: typeof [`ThermostatServer`](../classes/behavior_definitions_thermostat_export.ThermostatServer.md) = `BaseThermostatServer`

The Thermostat cluster is required by the Matter specification

We provide this alias to the default implementation [ThermostatServer](endpoint_definitions_device_ThermostatDevice.ThermostatRequirements.md#thermostatserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts:60](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts#L60)

___

### ThermostatUserInterfaceConfigurationServer

• `Const` **ThermostatUserInterfaceConfigurationServer**: typeof [`ThermostatUserInterfaceConfigurationServer`](../classes/behavior_definitions_thermostat_user_interface_configuration_export.ThermostatUserInterfaceConfigurationServer.md) = `BaseThermostatUserInterfaceConfigurationServer`

The ThermostatUserInterfaceConfiguration cluster is optional per the Matter specification

We provide this alias to the default implementation [ThermostatUserInterfaceConfigurationServer](endpoint_definitions_device_ThermostatDevice.ThermostatRequirements.md#thermostatuserinterfaceconfigurationserver) for
convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts#L82)

___

### TimeSyncBehavior

• `Const` **TimeSyncBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.TimeSync.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`TimeSyncInterface`](behavior_definitions_time_sync_export.md#timesyncinterface)\>, [`TimeSyncInterface`](behavior_definitions_time_sync_export.md#timesyncinterface)\> = `BaseTimeSyncBehavior`

The TimeSync cluster is optional per the Matter specification

We provide this alias to the default implementation [TimeSyncBehavior](endpoint_definitions_device_ThermostatDevice.ThermostatRequirements.md#timesyncbehavior) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts:103](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts#L103)

___

### TimeSyncServer

• `Const` **TimeSyncServer**: typeof [`TimeSyncServer`](../classes/behavior_definitions_time_sync_export.TimeSyncServer.md) = `BaseTimeSyncServer`

The TimeSync cluster is optional per the Matter specification

We provide this alias to the default implementation [TimeSyncServer](endpoint_definitions_device_ThermostatDevice.ThermostatRequirements.md#timesyncserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts#L89)

___

### client

• `Const` **client**: `Object`

A definition for each client cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | {} |
| `optional` | \{ `FanControl`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.FanControl.Cluster.md), typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\> = FanControlBehavior; `OccupancySensing`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.OccupancySensing.Cluster.md), typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\> = OccupancySensingBehavior; `RelativeHumidityMeasurement`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.RelativeHumidityMeasurement.Cluster.md), typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\> = RelativeHumidityMeasurementBehavior; `TemperatureMeasurement`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.TemperatureMeasurement.Cluster.md), typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\> = TemperatureMeasurementBehavior; `TimeSync`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.TimeSync.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`TimeSyncInterface`](behavior_definitions_time_sync_export.md#timesyncinterface)\>, [`TimeSyncInterface`](behavior_definitions_time_sync_export.md#timesyncinterface)\> = TimeSyncBehavior } |
| `optional.FanControl` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.FanControl.Cluster.md), typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\> |
| `optional.OccupancySensing` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.OccupancySensing.Cluster.md), typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\> |
| `optional.RelativeHumidityMeasurement` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.RelativeHumidityMeasurement.Cluster.md), typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\> |
| `optional.TemperatureMeasurement` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.TemperatureMeasurement.Cluster.md), typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\> |
| `optional.TimeSync` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.TimeSync.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`TimeSyncInterface`](behavior_definitions_time_sync_export.md#timesyncinterface)\>, [`TimeSyncInterface`](behavior_definitions_time_sync_export.md#timesyncinterface)\> |

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts:143](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts#L143)

___

### server

• `Const` **server**: `Object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | \{ `Identify`: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) = IdentifyServer; `Thermostat`: typeof [`ThermostatServer`](../classes/behavior_definitions_thermostat_export.ThermostatServer.md) = ThermostatServer } |
| `mandatory.Identify` | typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) |
| `mandatory.Thermostat` | typeof [`ThermostatServer`](../classes/behavior_definitions_thermostat_export.ThermostatServer.md) |
| `optional` | \{ `Groups`: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md) = GroupsServer; `Scenes`: typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md) = ScenesServer; `ThermostatUserInterfaceConfiguration`: typeof [`ThermostatUserInterfaceConfigurationServer`](../classes/behavior_definitions_thermostat_user_interface_configuration_export.ThermostatUserInterfaceConfigurationServer.md) = ThermostatUserInterfaceConfigurationServer; `TimeSync`: typeof [`TimeSyncServer`](../classes/behavior_definitions_time_sync_export.TimeSyncServer.md) = TimeSyncServer } |
| `optional.Groups` | typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md) |
| `optional.Scenes` | typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md) |
| `optional.ThermostatUserInterfaceConfiguration` | typeof [`ThermostatUserInterfaceConfigurationServer`](../classes/behavior_definitions_thermostat_user_interface_configuration_export.ThermostatUserInterfaceConfigurationServer.md) |
| `optional.TimeSync` | typeof [`TimeSyncServer`](../classes/behavior_definitions_time_sync_export.TimeSyncServer.md) |

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts:129](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts#L129)
