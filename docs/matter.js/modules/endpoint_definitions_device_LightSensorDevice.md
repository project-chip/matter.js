[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / endpoint/definitions/device/LightSensorDevice

# Module: endpoint/definitions/device/LightSensorDevice

## Table of contents

### Namespaces

- [LightSensorRequirements](endpoint_definitions_device_LightSensorDevice.LightSensorRequirements.md)

### Interfaces

- [LightSensorDevice](../interfaces/endpoint_definitions_device_LightSensorDevice.LightSensorDevice.md)

### Variables

- [LightSensorDevice](endpoint_definitions_device_LightSensorDevice.md#lightsensordevice)
- [LightSensorDeviceDefinition](endpoint_definitions_device_LightSensorDevice.md#lightsensordevicedefinition)

## Variables

### LightSensorDevice

• **LightSensorDevice**: [`LightSensorDevice`](../interfaces/endpoint_definitions_device_LightSensorDevice.LightSensorDevice.md)

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/LightSensorDevice.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/LightSensorDevice.ts#L24)

[packages/matter.js/src/endpoint/definitions/device/LightSensorDevice.ts:70](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/LightSensorDevice.ts#L70)

___

### LightSensorDeviceDefinition

• `Const` **LightSensorDeviceDefinition**: [`With`](node_export._internal_.md#with)\<[`For`](behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `identify`: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md)  } & \{ `illuminanceMeasurement`: typeof [`IlluminanceMeasurementServer`](../classes/behavior_definitions_illuminance_measurement_export.IlluminanceMeasurementServer.md)  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``262`` = 0x106; `name`: ``"LightSensor"`` = "LightSensor"; `requirements`: typeof [`LightSensorRequirements`](endpoint_definitions_device_LightSensorDevice.LightSensorRequirements.md) = LightSensorRequirements }\>, \{ `identify`: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md)  } & \{ `illuminanceMeasurement`: typeof [`IlluminanceMeasurementServer`](../classes/behavior_definitions_illuminance_measurement_export.IlluminanceMeasurementServer.md)  }\>

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/LightSensorDevice.ts:59](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/LightSensorDevice.ts#L59)
