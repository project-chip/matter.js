[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/PressureSensorDevice](endpoint_definitions_device_PressureSensorDevice.md) / PressureSensorRequirements

# Namespace: PressureSensorRequirements

[endpoint/definitions/device/PressureSensorDevice](endpoint_definitions_device_PressureSensorDevice.md).PressureSensorRequirements

## Table of contents

### Variables

- [IdentifyServer](endpoint_definitions_device_PressureSensorDevice.PressureSensorRequirements.md#identifyserver)
- [PressureMeasurementServer](endpoint_definitions_device_PressureSensorDevice.PressureSensorRequirements.md#pressuremeasurementserver)
- [server](endpoint_definitions_device_PressureSensorDevice.PressureSensorRequirements.md#server)

## Variables

### IdentifyServer

• `Const` **IdentifyServer**: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) = `BaseIdentifyServer`

The Identify cluster is required by the Matter specification

We provide this alias to the default implementation [IdentifyServer](endpoint_definitions_device_PressureSensorDevice.PressureSensorRequirements.md#identifyserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/PressureSensorDevice.ts:37](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/PressureSensorDevice.ts#L37)

___

### PressureMeasurementServer

• `Const` **PressureMeasurementServer**: typeof [`PressureMeasurementServer`](../classes/behavior_definitions_pressure_measurement_export.PressureMeasurementServer.md) = `BasePressureMeasurementServer`

The PressureMeasurement cluster is required by the Matter specification

We provide this alias to the default implementation [PressureMeasurementServer](endpoint_definitions_device_PressureSensorDevice.PressureSensorRequirements.md#pressuremeasurementserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/PressureSensorDevice.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/PressureSensorDevice.ts#L30)

___

### server

• `Const` **server**: `Object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | \{ `Identify`: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) = IdentifyServer; `PressureMeasurement`: typeof [`PressureMeasurementServer`](../classes/behavior_definitions_pressure_measurement_export.PressureMeasurementServer.md) = PressureMeasurementServer } |
| `mandatory.Identify` | typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) |
| `mandatory.PressureMeasurement` | typeof [`PressureMeasurementServer`](../classes/behavior_definitions_pressure_measurement_export.PressureMeasurementServer.md) |

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/PressureSensorDevice.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/PressureSensorDevice.ts#L42)
