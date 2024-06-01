[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [endpoint/definitions/device/ThermostatDevice](../../README.md) / ThermostatRequirements

# Namespace: ThermostatRequirements

## Variables

### FanControlBehavior

> `const` **FanControlBehavior**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/FanControl/interfaces/Cluster.md), *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), `object`\> = `BaseFanControlBehavior`

The FanControl cluster is optional per the Matter specification

We provide this alias to the default implementation [FanControlBehavior](README.md#fancontrolbehavior) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts:110](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts#L110)

***

### GroupsServer

> `const` **GroupsServer**: *typeof* [`GroupsServer`](../../../../../../behavior/definitions/groups/export/classes/GroupsServer.md) = `BaseGroupsServer`

The Groups cluster is optional per the Matter specification

We provide this alias to the default implementation [GroupsServer](README.md#groupsserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts#L67)

***

### IdentifyServer

> `const` **IdentifyServer**: *typeof* [`IdentifyServer`](../../../../../../behavior/definitions/identify/export/namespaces/IdentifyServer/README.md) = `BaseIdentifyServer`

The Identify cluster is required by the Matter specification

We provide this alias to the default implementation [IdentifyServer](README.md#identifyserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts#L53)

***

### OccupancySensingBehavior

> `const` **OccupancySensingBehavior**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/OccupancySensing/interfaces/Cluster.md), *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), `object`\> = `BaseOccupancySensingBehavior`

The OccupancySensing cluster is optional per the Matter specification

We provide this alias to the default implementation [OccupancySensingBehavior](README.md#occupancysensingbehavior) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts:124](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts#L124)

***

### RelativeHumidityMeasurementBehavior

> `const` **RelativeHumidityMeasurementBehavior**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/RelativeHumidityMeasurement/interfaces/Cluster.md), *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), `object`\> = `BaseRelativeHumidityMeasurementBehavior`

The RelativeHumidityMeasurement cluster is optional per the Matter specification

We provide this alias to the default implementation [RelativeHumidityMeasurementBehavior](README.md#relativehumiditymeasurementbehavior) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts:96](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts#L96)

***

### ScenesServer

> `const` **ScenesServer**: *typeof* [`ScenesServer`](../../../../../../behavior/definitions/scenes/export/classes/ScenesServer.md) = `BaseScenesServer`

The Scenes cluster is optional per the Matter specification

We provide this alias to the default implementation [ScenesServer](README.md#scenesserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts:74](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts#L74)

***

### TemperatureMeasurementBehavior

> `const` **TemperatureMeasurementBehavior**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/TemperatureMeasurement/interfaces/Cluster.md), *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), `object`\> = `BaseTemperatureMeasurementBehavior`

The TemperatureMeasurement cluster is optional per the Matter specification

We provide this alias to the default implementation [TemperatureMeasurementBehavior](README.md#temperaturemeasurementbehavior) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts:117](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts#L117)

***

### ThermostatServer

> `const` **ThermostatServer**: *typeof* [`ThermostatServer`](../../../../../../behavior/definitions/thermostat/export/classes/ThermostatServer.md) = `BaseThermostatServer`

The Thermostat cluster is required by the Matter specification

We provide this alias to the default implementation [ThermostatServer](README.md#thermostatserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts:60](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts#L60)

***

### ThermostatUserInterfaceConfigurationServer

> `const` **ThermostatUserInterfaceConfigurationServer**: *typeof* [`ThermostatUserInterfaceConfigurationServer`](../../../../../../behavior/definitions/thermostat-user-interface-configuration/export/classes/ThermostatUserInterfaceConfigurationServer.md) = `BaseThermostatUserInterfaceConfigurationServer`

The ThermostatUserInterfaceConfiguration cluster is optional per the Matter specification

We provide this alias to the default implementation [ThermostatUserInterfaceConfigurationServer](README.md#thermostatuserinterfaceconfigurationserver) for
convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts#L82)

***

### TimeSyncBehavior

> `const` **TimeSyncBehavior**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/TimeSync/interfaces/Cluster.md), [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`TimeSyncInterface`](../../../../../../behavior/definitions/time-sync/export/README.md#timesyncinterface)\>, [`TimeSyncInterface`](../../../../../../behavior/definitions/time-sync/export/README.md#timesyncinterface)\> = `BaseTimeSyncBehavior`

The TimeSync cluster is optional per the Matter specification

We provide this alias to the default implementation [TimeSyncBehavior](README.md#timesyncbehavior) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts:103](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts#L103)

***

### TimeSyncServer

> `const` **TimeSyncServer**: *typeof* [`TimeSyncServer`](../../../../../../behavior/definitions/time-sync/export/classes/TimeSyncServer.md) = `BaseTimeSyncServer`

The TimeSync cluster is optional per the Matter specification

We provide this alias to the default implementation [TimeSyncServer](README.md#timesyncserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts#L89)

***

### client

> `const` **client**: `object`

A definition for each client cluster supported by the endpoint per the Matter specification.

#### Type declaration

##### mandatory

> **mandatory**: `object` = `{}`

##### optional

> **optional**: `object`

##### optional.FanControl

> **FanControl**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/FanControl/interfaces/Cluster.md), *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), `object`\> = `FanControlBehavior`

##### optional.OccupancySensing

> **OccupancySensing**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/OccupancySensing/interfaces/Cluster.md), *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), `object`\> = `OccupancySensingBehavior`

##### optional.RelativeHumidityMeasurement

> **RelativeHumidityMeasurement**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/RelativeHumidityMeasurement/interfaces/Cluster.md), *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), `object`\> = `RelativeHumidityMeasurementBehavior`

##### optional.TemperatureMeasurement

> **TemperatureMeasurement**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/TemperatureMeasurement/interfaces/Cluster.md), *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), `object`\> = `TemperatureMeasurementBehavior`

##### optional.TimeSync

> **TimeSync**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../../cluster/export/namespaces/TimeSync/interfaces/Cluster.md), [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/README.md), [`TimeSyncInterface`](../../../../../../behavior/definitions/time-sync/export/README.md#timesyncinterface)\>, [`TimeSyncInterface`](../../../../../../behavior/definitions/time-sync/export/README.md#timesyncinterface)\> = `TimeSyncBehavior`

#### Source

[packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts:143](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts#L143)

***

### server

> `const` **server**: `object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

##### mandatory

> **mandatory**: `object`

##### mandatory.Identify

> **Identify**: *typeof* [`IdentifyServer`](../../../../../../behavior/definitions/identify/export/namespaces/IdentifyServer/README.md) = `IdentifyServer`

##### mandatory.Thermostat

> **Thermostat**: *typeof* [`ThermostatServer`](../../../../../../behavior/definitions/thermostat/export/classes/ThermostatServer.md) = `ThermostatServer`

##### optional

> **optional**: `object`

##### optional.Groups

> **Groups**: *typeof* [`GroupsServer`](../../../../../../behavior/definitions/groups/export/classes/GroupsServer.md) = `GroupsServer`

##### optional.Scenes

> **Scenes**: *typeof* [`ScenesServer`](../../../../../../behavior/definitions/scenes/export/classes/ScenesServer.md) = `ScenesServer`

##### optional.ThermostatUserInterfaceConfiguration

> **ThermostatUserInterfaceConfiguration**: *typeof* [`ThermostatUserInterfaceConfigurationServer`](../../../../../../behavior/definitions/thermostat-user-interface-configuration/export/classes/ThermostatUserInterfaceConfigurationServer.md) = `ThermostatUserInterfaceConfigurationServer`

##### optional.TimeSync

> **TimeSync**: *typeof* [`TimeSyncServer`](../../../../../../behavior/definitions/time-sync/export/classes/TimeSyncServer.md) = `TimeSyncServer`

#### Source

[packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts:129](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/ThermostatDevice.ts#L129)
