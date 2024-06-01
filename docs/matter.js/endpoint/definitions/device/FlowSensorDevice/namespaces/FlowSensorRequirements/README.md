[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [endpoint/definitions/device/FlowSensorDevice](../../README.md) / FlowSensorRequirements

# Namespace: FlowSensorRequirements

## Variables

### FlowMeasurementServer

> `const` **FlowMeasurementServer**: *typeof* [`FlowMeasurementServer`](../../../../../../behavior/definitions/flow-measurement/export/classes/FlowMeasurementServer.md) = `BaseFlowMeasurementServer`

The FlowMeasurement cluster is required by the Matter specification

We provide this alias to the default implementation [FlowMeasurementServer](README.md#flowmeasurementserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/FlowSensorDevice.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/FlowSensorDevice.ts#L30)

***

### IdentifyServer

> `const` **IdentifyServer**: *typeof* [`IdentifyServer`](../../../../../../behavior/definitions/identify/export/namespaces/IdentifyServer/README.md) = `BaseIdentifyServer`

The Identify cluster is required by the Matter specification

We provide this alias to the default implementation [IdentifyServer](README.md#identifyserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/FlowSensorDevice.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/FlowSensorDevice.ts#L37)

***

### server

> `const` **server**: `object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

##### mandatory

> **mandatory**: `object`

##### mandatory.FlowMeasurement

> **FlowMeasurement**: *typeof* [`FlowMeasurementServer`](../../../../../../behavior/definitions/flow-measurement/export/classes/FlowMeasurementServer.md) = `FlowMeasurementServer`

##### mandatory.Identify

> **Identify**: *typeof* [`IdentifyServer`](../../../../../../behavior/definitions/identify/export/namespaces/IdentifyServer/README.md) = `IdentifyServer`

#### Source

[packages/matter.js/src/endpoint/definitions/device/FlowSensorDevice.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/FlowSensorDevice.ts#L42)
