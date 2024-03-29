[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / endpoint/definitions/device/PressureSensorDevice

# Module: endpoint/definitions/device/PressureSensorDevice

## Table of contents

### Namespaces

- [PressureSensorRequirements](endpoint_definitions_device_PressureSensorDevice.PressureSensorRequirements.md)

### Interfaces

- [PressureSensorDevice](../interfaces/endpoint_definitions_device_PressureSensorDevice.PressureSensorDevice.md)

### Variables

- [PressureSensorDevice](endpoint_definitions_device_PressureSensorDevice.md#pressuresensordevice)
- [PressureSensorDeviceDefinition](endpoint_definitions_device_PressureSensorDevice.md#pressuresensordevicedefinition)

## Variables

### PressureSensorDevice

• **PressureSensorDevice**: [`PressureSensorDevice`](../interfaces/endpoint_definitions_device_PressureSensorDevice.PressureSensorDevice.md)

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/PressureSensorDevice.ts:23](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/PressureSensorDevice.ts#L23)

[packages/matter.js/src/endpoint/definitions/device/PressureSensorDevice.ts:57](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/PressureSensorDevice.ts#L57)

___

### PressureSensorDeviceDefinition

• `Const` **PressureSensorDeviceDefinition**: [`With`](node_export._internal_.md#with)\<[`For`](behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `pressureMeasurement`: typeof [`PressureMeasurementServer`](../classes/behavior_definitions_pressure_measurement_export.PressureMeasurementServer.md)  } & \{ `identify`: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md)  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``773`` = 0x305; `name`: ``"PressureSensor"`` = "PressureSensor"; `requirements`: typeof [`PressureSensorRequirements`](endpoint_definitions_device_PressureSensorDevice.PressureSensorRequirements.md) = PressureSensorRequirements }\>, \{ `pressureMeasurement`: typeof [`PressureMeasurementServer`](../classes/behavior_definitions_pressure_measurement_export.PressureMeasurementServer.md)  } & \{ `identify`: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md)  }\>

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/PressureSensorDevice.ts:46](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/PressureSensorDevice.ts#L46)
