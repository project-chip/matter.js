[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/FlowSensorDevice](endpoint_definitions_device_FlowSensorDevice.md) / FlowSensorRequirements

# Namespace: FlowSensorRequirements

[endpoint/definitions/device/FlowSensorDevice](endpoint_definitions_device_FlowSensorDevice.md).FlowSensorRequirements

## Table of contents

### Variables

- [FlowMeasurementServer](endpoint_definitions_device_FlowSensorDevice.FlowSensorRequirements.md#flowmeasurementserver)
- [IdentifyServer](endpoint_definitions_device_FlowSensorDevice.FlowSensorRequirements.md#identifyserver)
- [server](endpoint_definitions_device_FlowSensorDevice.FlowSensorRequirements.md#server)

## Variables

### FlowMeasurementServer

• `Const` **FlowMeasurementServer**: typeof [`FlowMeasurementServer`](../classes/behavior_definitions_flow_measurement_export.FlowMeasurementServer.md) = `BaseFlowMeasurementServer`

The FlowMeasurement cluster is required by the Matter specification

We provide this alias to the default implementation [FlowMeasurementServer](endpoint_definitions_device_FlowSensorDevice.FlowSensorRequirements.md#flowmeasurementserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/FlowSensorDevice.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/FlowSensorDevice.ts#L30)

___

### IdentifyServer

• `Const` **IdentifyServer**: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) = `BaseIdentifyServer`

The Identify cluster is required by the Matter specification

We provide this alias to the default implementation [IdentifyServer](endpoint_definitions_device_FlowSensorDevice.FlowSensorRequirements.md#identifyserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/FlowSensorDevice.ts:37](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/FlowSensorDevice.ts#L37)

___

### server

• `Const` **server**: `Object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | \{ `FlowMeasurement`: typeof [`FlowMeasurementServer`](../classes/behavior_definitions_flow_measurement_export.FlowMeasurementServer.md) = FlowMeasurementServer; `Identify`: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) = IdentifyServer } |
| `mandatory.FlowMeasurement` | typeof [`FlowMeasurementServer`](../classes/behavior_definitions_flow_measurement_export.FlowMeasurementServer.md) |
| `mandatory.Identify` | typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) |

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/FlowSensorDevice.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/FlowSensorDevice.ts#L42)
