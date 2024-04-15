[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/HumiditySensorDevice](endpoint_definitions_device_HumiditySensorDevice.md) / HumiditySensorRequirements

# Namespace: HumiditySensorRequirements

[endpoint/definitions/device/HumiditySensorDevice](endpoint_definitions_device_HumiditySensorDevice.md).HumiditySensorRequirements

## Table of contents

### Variables

- [IdentifyServer](endpoint_definitions_device_HumiditySensorDevice.HumiditySensorRequirements.md#identifyserver)
- [RelativeHumidityMeasurementServer](endpoint_definitions_device_HumiditySensorDevice.HumiditySensorRequirements.md#relativehumiditymeasurementserver)
- [server](endpoint_definitions_device_HumiditySensorDevice.HumiditySensorRequirements.md#server)

## Variables

### IdentifyServer

• `Const` **IdentifyServer**: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) = `BaseIdentifyServer`

The Identify cluster is required by the Matter specification

We provide this alias to the default implementation [IdentifyServer](endpoint_definitions_device_HumiditySensorDevice.HumiditySensorRequirements.md#identifyserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/HumiditySensorDevice.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/HumiditySensorDevice.ts#L30)

___

### RelativeHumidityMeasurementServer

• `Const` **RelativeHumidityMeasurementServer**: typeof [`RelativeHumidityMeasurementServer`](../classes/behavior_definitions_relative_humidity_measurement_export.RelativeHumidityMeasurementServer.md) = `BaseRelativeHumidityMeasurementServer`

The RelativeHumidityMeasurement cluster is required by the Matter specification

We provide this alias to the default implementation [RelativeHumidityMeasurementServer](endpoint_definitions_device_HumiditySensorDevice.HumiditySensorRequirements.md#relativehumiditymeasurementserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/HumiditySensorDevice.ts:37](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/HumiditySensorDevice.ts#L37)

___

### server

• `Const` **server**: `Object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | \{ `Identify`: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) = IdentifyServer; `RelativeHumidityMeasurement`: typeof [`RelativeHumidityMeasurementServer`](../classes/behavior_definitions_relative_humidity_measurement_export.RelativeHumidityMeasurementServer.md) = RelativeHumidityMeasurementServer } |
| `mandatory.Identify` | typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) |
| `mandatory.RelativeHumidityMeasurement` | typeof [`RelativeHumidityMeasurementServer`](../classes/behavior_definitions_relative_humidity_measurement_export.RelativeHumidityMeasurementServer.md) |

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/HumiditySensorDevice.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/HumiditySensorDevice.ts#L42)
