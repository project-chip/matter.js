[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [endpoint/definitions/device/PressureSensorDevice](../../README.md) / PressureSensorRequirements

# Namespace: PressureSensorRequirements

## Variables

### IdentifyServer

> `const` **IdentifyServer**: *typeof* [`IdentifyServer`](../../../../../../behavior/definitions/identify/export/namespaces/IdentifyServer/README.md) = `BaseIdentifyServer`

The Identify cluster is required by the Matter specification

We provide this alias to the default implementation [IdentifyServer](README.md#identifyserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/PressureSensorDevice.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/PressureSensorDevice.ts#L37)

***

### PressureMeasurementServer

> `const` **PressureMeasurementServer**: *typeof* [`PressureMeasurementServer`](../../../../../../behavior/definitions/pressure-measurement/export/classes/PressureMeasurementServer.md) = `BasePressureMeasurementServer`

The PressureMeasurement cluster is required by the Matter specification

We provide this alias to the default implementation [PressureMeasurementServer](README.md#pressuremeasurementserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/PressureSensorDevice.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/PressureSensorDevice.ts#L30)

***

### server

> `const` **server**: `object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

##### mandatory

> **mandatory**: `object`

##### mandatory.Identify

> **Identify**: *typeof* [`IdentifyServer`](../../../../../../behavior/definitions/identify/export/namespaces/IdentifyServer/README.md) = `IdentifyServer`

##### mandatory.PressureMeasurement

> **PressureMeasurement**: *typeof* [`PressureMeasurementServer`](../../../../../../behavior/definitions/pressure-measurement/export/classes/PressureMeasurementServer.md) = `PressureMeasurementServer`

#### Source

[packages/matter.js/src/endpoint/definitions/device/PressureSensorDevice.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/PressureSensorDevice.ts#L42)
