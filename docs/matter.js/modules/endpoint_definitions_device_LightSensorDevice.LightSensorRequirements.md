[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/LightSensorDevice](endpoint_definitions_device_LightSensorDevice.md) / LightSensorRequirements

# Namespace: LightSensorRequirements

[endpoint/definitions/device/LightSensorDevice](endpoint_definitions_device_LightSensorDevice.md).LightSensorRequirements

## Table of contents

### Variables

- [GroupsBehavior](endpoint_definitions_device_LightSensorDevice.LightSensorRequirements.md#groupsbehavior)
- [IdentifyServer](endpoint_definitions_device_LightSensorDevice.LightSensorRequirements.md#identifyserver)
- [IlluminanceMeasurementServer](endpoint_definitions_device_LightSensorDevice.LightSensorRequirements.md#illuminancemeasurementserver)
- [client](endpoint_definitions_device_LightSensorDevice.LightSensorRequirements.md#client)
- [server](endpoint_definitions_device_LightSensorDevice.LightSensorRequirements.md#server)

## Variables

### GroupsBehavior

• `Const` **GroupsBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.Groups.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`GroupsInterface`](behavior_definitions_groups_export.md#groupsinterface)\>, [`GroupsInterface`](behavior_definitions_groups_export.md#groupsinterface)\> = `BaseGroupsBehavior`

The Groups cluster is optional per the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/LightSensorDevice.ts:47](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/LightSensorDevice.ts#L47)

___

### IdentifyServer

• `Const` **IdentifyServer**: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) = `BaseIdentifyServer`

The Identify cluster is required by the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/LightSensorDevice.ts:33](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/LightSensorDevice.ts#L33)

___

### IlluminanceMeasurementServer

• `Const` **IlluminanceMeasurementServer**: typeof [`IlluminanceMeasurementServer`](../classes/behavior_definitions_illuminance_measurement_export.IlluminanceMeasurementServer.md) = `BaseIlluminanceMeasurementServer`

The IlluminanceMeasurement cluster is required by the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/LightSensorDevice.ts:40](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/LightSensorDevice.ts#L40)

___

### client

• `Const` **client**: `Object`

A definition for each client cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | {} |
| `optional` | \{ `Groups`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.Groups.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`GroupsInterface`](behavior_definitions_groups_export.md#groupsinterface)\>, [`GroupsInterface`](behavior_definitions_groups_export.md#groupsinterface)\> = GroupsBehavior } |
| `optional.Groups` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.Groups.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`GroupsInterface`](behavior_definitions_groups_export.md#groupsinterface)\>, [`GroupsInterface`](behavior_definitions_groups_export.md#groupsinterface)\> |

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/LightSensorDevice.ts:57](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/LightSensorDevice.ts#L57)

___

### server

• `Const` **server**: `Object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | \{ `Identify`: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) = IdentifyServer; `IlluminanceMeasurement`: typeof [`IlluminanceMeasurementServer`](../classes/behavior_definitions_illuminance_measurement_export.IlluminanceMeasurementServer.md) = IlluminanceMeasurementServer } |
| `mandatory.Identify` | typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) |
| `mandatory.IlluminanceMeasurement` | typeof [`IlluminanceMeasurementServer`](../classes/behavior_definitions_illuminance_measurement_export.IlluminanceMeasurementServer.md) |

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/LightSensorDevice.ts:52](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/LightSensorDevice.ts#L52)
