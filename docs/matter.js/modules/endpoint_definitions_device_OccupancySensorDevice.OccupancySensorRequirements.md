[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/OccupancySensorDevice](endpoint_definitions_device_OccupancySensorDevice.md) / OccupancySensorRequirements

# Namespace: OccupancySensorRequirements

[endpoint/definitions/device/OccupancySensorDevice](endpoint_definitions_device_OccupancySensorDevice.md).OccupancySensorRequirements

## Table of contents

### Variables

- [GroupsBehavior](endpoint_definitions_device_OccupancySensorDevice.OccupancySensorRequirements.md#groupsbehavior)
- [IdentifyServer](endpoint_definitions_device_OccupancySensorDevice.OccupancySensorRequirements.md#identifyserver)
- [OccupancySensingServer](endpoint_definitions_device_OccupancySensorDevice.OccupancySensorRequirements.md#occupancysensingserver)
- [client](endpoint_definitions_device_OccupancySensorDevice.OccupancySensorRequirements.md#client)
- [server](endpoint_definitions_device_OccupancySensorDevice.OccupancySensorRequirements.md#server)

## Variables

### GroupsBehavior

• `Const` **GroupsBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.Groups.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`GroupsInterface`](behavior_definitions_groups_export.md#groupsinterface)\>, [`GroupsInterface`](behavior_definitions_groups_export.md#groupsinterface)\> = `BaseGroupsBehavior`

The Groups cluster is optional per the Matter specification

We provide this alias to the default implementation [GroupsBehavior](endpoint_definitions_device_OccupancySensorDevice.OccupancySensorRequirements.md#groupsbehavior) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/OccupancySensorDevice.ts:46](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/OccupancySensorDevice.ts#L46)

___

### IdentifyServer

• `Const` **IdentifyServer**: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) = `BaseIdentifyServer`

The Identify cluster is required by the Matter specification

We provide this alias to the default implementation [IdentifyServer](endpoint_definitions_device_OccupancySensorDevice.OccupancySensorRequirements.md#identifyserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/OccupancySensorDevice.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/OccupancySensorDevice.ts#L32)

___

### OccupancySensingServer

• `Const` **OccupancySensingServer**: typeof [`OccupancySensingServer`](../classes/behavior_definitions_occupancy_sensing_export.OccupancySensingServer.md) = `BaseOccupancySensingServer`

The OccupancySensing cluster is required by the Matter specification

We provide this alias to the default implementation [OccupancySensingServer](endpoint_definitions_device_OccupancySensorDevice.OccupancySensorRequirements.md#occupancysensingserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/OccupancySensorDevice.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/OccupancySensorDevice.ts#L39)

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

[packages/matter.js/src/endpoint/definitions/device/OccupancySensorDevice.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/OccupancySensorDevice.ts#L56)

___

### server

• `Const` **server**: `Object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | \{ `Identify`: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) = IdentifyServer; `OccupancySensing`: typeof [`OccupancySensingServer`](../classes/behavior_definitions_occupancy_sensing_export.OccupancySensingServer.md) = OccupancySensingServer } |
| `mandatory.Identify` | typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) |
| `mandatory.OccupancySensing` | typeof [`OccupancySensingServer`](../classes/behavior_definitions_occupancy_sensing_export.OccupancySensingServer.md) |

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/OccupancySensorDevice.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/OccupancySensorDevice.ts#L51)
