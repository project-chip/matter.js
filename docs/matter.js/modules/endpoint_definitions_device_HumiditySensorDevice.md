[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / endpoint/definitions/device/HumiditySensorDevice

# Module: endpoint/definitions/device/HumiditySensorDevice

## Table of contents

### Namespaces

- [HumiditySensorRequirements](endpoint_definitions_device_HumiditySensorDevice.HumiditySensorRequirements.md)

### Interfaces

- [HumiditySensorDevice](../interfaces/endpoint_definitions_device_HumiditySensorDevice.HumiditySensorDevice.md)

### Variables

- [HumiditySensorDevice](endpoint_definitions_device_HumiditySensorDevice.md#humiditysensordevice)
- [HumiditySensorDeviceDefinition](endpoint_definitions_device_HumiditySensorDevice.md#humiditysensordevicedefinition)

## Variables

### HumiditySensorDevice

• **HumiditySensorDevice**: [`HumiditySensorDevice`](../interfaces/endpoint_definitions_device_HumiditySensorDevice.HumiditySensorDevice.md)

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/HumiditySensorDevice.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/HumiditySensorDevice.ts#L22)

[packages/matter.js/src/endpoint/definitions/device/HumiditySensorDevice.ts:58](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/HumiditySensorDevice.ts#L58)

___

### HumiditySensorDeviceDefinition

• `Const` **HumiditySensorDeviceDefinition**: [`With`](node_export._internal_.md#with)\<[`For`](behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `identify`: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md)  } & \{ `relativeHumidityMeasurement`: typeof [`RelativeHumidityMeasurementServer`](../classes/behavior_definitions_relative_humidity_measurement_export.RelativeHumidityMeasurementServer.md)  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``775`` = 0x307; `name`: ``"HumiditySensor"`` = "HumiditySensor"; `requirements`: typeof [`HumiditySensorRequirements`](endpoint_definitions_device_HumiditySensorDevice.HumiditySensorRequirements.md) = HumiditySensorRequirements }\>, \{ `identify`: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md)  } & \{ `relativeHumidityMeasurement`: typeof [`RelativeHumidityMeasurementServer`](../classes/behavior_definitions_relative_humidity_measurement_export.RelativeHumidityMeasurementServer.md)  }\>

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/HumiditySensorDevice.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/HumiditySensorDevice.ts#L47)
