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

We provide this alias to the default implementation [GroupsBehavior](endpoint_definitions_device_LightSensorDevice.LightSensorRequirements.md#groupsbehavior) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/LightSensorDevice.ts:46](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/LightSensorDevice.ts#L46)

___

### IdentifyServer

• `Const` **IdentifyServer**: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) = `BaseIdentifyServer`

The Identify cluster is required by the Matter specification

We provide this alias to the default implementation [IdentifyServer](endpoint_definitions_device_LightSensorDevice.LightSensorRequirements.md#identifyserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/LightSensorDevice.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/LightSensorDevice.ts#L32)

___

### IlluminanceMeasurementServer

• `Const` **IlluminanceMeasurementServer**: typeof [`IlluminanceMeasurementServer`](../classes/behavior_definitions_illuminance_measurement_export.IlluminanceMeasurementServer.md) = `BaseIlluminanceMeasurementServer`

The IlluminanceMeasurement cluster is required by the Matter specification

We provide this alias to the default implementation [IlluminanceMeasurementServer](endpoint_definitions_device_LightSensorDevice.LightSensorRequirements.md#illuminancemeasurementserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/LightSensorDevice.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/LightSensorDevice.ts#L39)

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

[packages/matter.js/src/endpoint/definitions/device/LightSensorDevice.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/LightSensorDevice.ts#L56)

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

[packages/matter.js/src/endpoint/definitions/device/LightSensorDevice.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/LightSensorDevice.ts#L51)
