[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [endpoint/definitions/device/TemperatureSensorDevice](../../README.md) / TemperatureSensorRequirements

# Namespace: TemperatureSensorRequirements

## Variables

### IdentifyServer

> `const` **IdentifyServer**: *typeof* [`IdentifyServer`](../../../../../../behavior/definitions/identify/export/namespaces/IdentifyServer/README.md) = `BaseIdentifyServer`

The Identify cluster is required by the Matter specification

We provide this alias to the default implementation [IdentifyServer](README.md#identifyserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/TemperatureSensorDevice.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/TemperatureSensorDevice.ts#L37)

***

### TemperatureMeasurementServer

> `const` **TemperatureMeasurementServer**: *typeof* [`TemperatureMeasurementServer`](../../../../../../behavior/definitions/temperature-measurement/export/classes/TemperatureMeasurementServer.md) = `BaseTemperatureMeasurementServer`

The TemperatureMeasurement cluster is required by the Matter specification

We provide this alias to the default implementation [TemperatureMeasurementServer](README.md#temperaturemeasurementserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/TemperatureSensorDevice.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/TemperatureSensorDevice.ts#L30)

***

### server

> `const` **server**: `object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

##### mandatory

> **mandatory**: `object`

##### mandatory.Identify

> **Identify**: *typeof* [`IdentifyServer`](../../../../../../behavior/definitions/identify/export/namespaces/IdentifyServer/README.md) = `IdentifyServer`

##### mandatory.TemperatureMeasurement

> **TemperatureMeasurement**: *typeof* [`TemperatureMeasurementServer`](../../../../../../behavior/definitions/temperature-measurement/export/classes/TemperatureMeasurementServer.md) = `TemperatureMeasurementServer`

#### Source

[packages/matter.js/src/endpoint/definitions/device/TemperatureSensorDevice.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/TemperatureSensorDevice.ts#L42)
