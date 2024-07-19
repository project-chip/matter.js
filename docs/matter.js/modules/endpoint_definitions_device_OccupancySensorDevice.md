[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / endpoint/definitions/device/OccupancySensorDevice

# Module: endpoint/definitions/device/OccupancySensorDevice

## Table of contents

### Namespaces

- [OccupancySensorRequirements](endpoint_definitions_device_OccupancySensorDevice.OccupancySensorRequirements.md)

### Interfaces

- [OccupancySensorDevice](../interfaces/endpoint_definitions_device_OccupancySensorDevice.OccupancySensorDevice.md)

### Variables

- [OccupancySensorDevice](endpoint_definitions_device_OccupancySensorDevice.md#occupancysensordevice)
- [OccupancySensorDeviceDefinition](endpoint_definitions_device_OccupancySensorDevice.md#occupancysensordevicedefinition)

## Variables

### OccupancySensorDevice

• **OccupancySensorDevice**: [`OccupancySensorDevice`](../interfaces/endpoint_definitions_device_OccupancySensorDevice.OccupancySensorDevice.md)

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/OccupancySensorDevice.ts:24](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/definitions/device/OccupancySensorDevice.ts#L24)

[packages/matter.js/src/endpoint/definitions/device/OccupancySensorDevice.ts:70](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/definitions/device/OccupancySensorDevice.ts#L70)

___

### OccupancySensorDeviceDefinition

• `Const` **OccupancySensorDeviceDefinition**: [`With`](node_export._internal_.md#with)\<[`For`](behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `identify`: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md)  } & \{ `occupancySensing`: typeof [`OccupancySensingServer`](../classes/behavior_definitions_occupancy_sensing_export.OccupancySensingServer.md)  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``263`` = 0x107; `name`: ``"OccupancySensor"`` = "OccupancySensor"; `requirements`: typeof [`OccupancySensorRequirements`](endpoint_definitions_device_OccupancySensorDevice.OccupancySensorRequirements.md) = OccupancySensorRequirements }\>, \{ `identify`: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md)  } & \{ `occupancySensing`: typeof [`OccupancySensingServer`](../classes/behavior_definitions_occupancy_sensing_export.OccupancySensingServer.md)  }\>

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/OccupancySensorDevice.ts:59](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/definitions/device/OccupancySensorDevice.ts#L59)
