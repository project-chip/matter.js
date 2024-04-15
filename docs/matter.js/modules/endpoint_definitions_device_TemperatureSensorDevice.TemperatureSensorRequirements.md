[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/TemperatureSensorDevice](endpoint_definitions_device_TemperatureSensorDevice.md) / TemperatureSensorRequirements

# Namespace: TemperatureSensorRequirements

[endpoint/definitions/device/TemperatureSensorDevice](endpoint_definitions_device_TemperatureSensorDevice.md).TemperatureSensorRequirements

## Table of contents

### Variables

- [IdentifyServer](endpoint_definitions_device_TemperatureSensorDevice.TemperatureSensorRequirements.md#identifyserver)
- [TemperatureMeasurementServer](endpoint_definitions_device_TemperatureSensorDevice.TemperatureSensorRequirements.md#temperaturemeasurementserver)
- [server](endpoint_definitions_device_TemperatureSensorDevice.TemperatureSensorRequirements.md#server)

## Variables

### IdentifyServer

• `Const` **IdentifyServer**: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) = `BaseIdentifyServer`

The Identify cluster is required by the Matter specification

We provide this alias to the default implementation [IdentifyServer](endpoint_definitions_device_TemperatureSensorDevice.TemperatureSensorRequirements.md#identifyserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/TemperatureSensorDevice.ts:37](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/TemperatureSensorDevice.ts#L37)

___

### TemperatureMeasurementServer

• `Const` **TemperatureMeasurementServer**: typeof [`TemperatureMeasurementServer`](../classes/behavior_definitions_temperature_measurement_export.TemperatureMeasurementServer.md) = `BaseTemperatureMeasurementServer`

The TemperatureMeasurement cluster is required by the Matter specification

We provide this alias to the default implementation [TemperatureMeasurementServer](endpoint_definitions_device_TemperatureSensorDevice.TemperatureSensorRequirements.md#temperaturemeasurementserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/TemperatureSensorDevice.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/TemperatureSensorDevice.ts#L30)

___

### server

• `Const` **server**: `Object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | \{ `Identify`: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) = IdentifyServer; `TemperatureMeasurement`: typeof [`TemperatureMeasurementServer`](../classes/behavior_definitions_temperature_measurement_export.TemperatureMeasurementServer.md) = TemperatureMeasurementServer } |
| `mandatory.Identify` | typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) |
| `mandatory.TemperatureMeasurement` | typeof [`TemperatureMeasurementServer`](../classes/behavior_definitions_temperature_measurement_export.TemperatureMeasurementServer.md) |

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/TemperatureSensorDevice.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/TemperatureSensorDevice.ts#L42)
