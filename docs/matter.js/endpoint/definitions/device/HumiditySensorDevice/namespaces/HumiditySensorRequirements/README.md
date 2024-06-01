[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [endpoint/definitions/device/HumiditySensorDevice](../../README.md) / HumiditySensorRequirements

# Namespace: HumiditySensorRequirements

## Variables

### IdentifyServer

> `const` **IdentifyServer**: *typeof* [`IdentifyServer`](../../../../../../behavior/definitions/identify/export/namespaces/IdentifyServer/README.md) = `BaseIdentifyServer`

The Identify cluster is required by the Matter specification

We provide this alias to the default implementation [IdentifyServer](README.md#identifyserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/HumiditySensorDevice.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/HumiditySensorDevice.ts#L30)

***

### RelativeHumidityMeasurementServer

> `const` **RelativeHumidityMeasurementServer**: *typeof* [`RelativeHumidityMeasurementServer`](../../../../../../behavior/definitions/relative-humidity-measurement/export/classes/RelativeHumidityMeasurementServer.md) = `BaseRelativeHumidityMeasurementServer`

The RelativeHumidityMeasurement cluster is required by the Matter specification

We provide this alias to the default implementation [RelativeHumidityMeasurementServer](README.md#relativehumiditymeasurementserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/HumiditySensorDevice.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/HumiditySensorDevice.ts#L37)

***

### server

> `const` **server**: `object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

##### mandatory

> **mandatory**: `object`

##### mandatory.Identify

> **Identify**: *typeof* [`IdentifyServer`](../../../../../../behavior/definitions/identify/export/namespaces/IdentifyServer/README.md) = `IdentifyServer`

##### mandatory.RelativeHumidityMeasurement

> **RelativeHumidityMeasurement**: *typeof* [`RelativeHumidityMeasurementServer`](../../../../../../behavior/definitions/relative-humidity-measurement/export/classes/RelativeHumidityMeasurementServer.md) = `RelativeHumidityMeasurementServer`

#### Source

[packages/matter.js/src/endpoint/definitions/device/HumiditySensorDevice.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/HumiditySensorDevice.ts#L42)
