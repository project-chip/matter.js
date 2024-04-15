[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / endpoint/definitions/device/TemperatureSensorDevice

# Module: endpoint/definitions/device/TemperatureSensorDevice

## Table of contents

### Namespaces

- [TemperatureSensorRequirements](endpoint_definitions_device_TemperatureSensorDevice.TemperatureSensorRequirements.md)

### Interfaces

- [TemperatureSensorDevice](../interfaces/endpoint_definitions_device_TemperatureSensorDevice.TemperatureSensorDevice.md)

### Variables

- [TemperatureSensorDevice](endpoint_definitions_device_TemperatureSensorDevice.md#temperaturesensordevice)
- [TemperatureSensorDeviceDefinition](endpoint_definitions_device_TemperatureSensorDevice.md#temperaturesensordevicedefinition)

## Variables

### TemperatureSensorDevice

• **TemperatureSensorDevice**: [`TemperatureSensorDevice`](../interfaces/endpoint_definitions_device_TemperatureSensorDevice.TemperatureSensorDevice.md)

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/TemperatureSensorDevice.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/TemperatureSensorDevice.ts#L22)

[packages/matter.js/src/endpoint/definitions/device/TemperatureSensorDevice.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/TemperatureSensorDevice.ts#L56)

___

### TemperatureSensorDeviceDefinition

• `Const` **TemperatureSensorDeviceDefinition**: [`With`](node_export._internal_.md#with)\<[`For`](behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `temperatureMeasurement`: typeof [`TemperatureMeasurementServer`](../classes/behavior_definitions_temperature_measurement_export.TemperatureMeasurementServer.md)  } & \{ `identify`: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md)  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``770`` = 0x302; `name`: ``"TemperatureSensor"`` = "TemperatureSensor"; `requirements`: typeof [`TemperatureSensorRequirements`](endpoint_definitions_device_TemperatureSensorDevice.TemperatureSensorRequirements.md) = TemperatureSensorRequirements }\>, \{ `temperatureMeasurement`: typeof [`TemperatureMeasurementServer`](../classes/behavior_definitions_temperature_measurement_export.TemperatureMeasurementServer.md)  } & \{ `identify`: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md)  }\>

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/TemperatureSensorDevice.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/TemperatureSensorDevice.ts#L45)
