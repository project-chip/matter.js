[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [endpoint/definitions/device/ContactSensorDevice](../../README.md) / ContactSensorRequirements

# Namespace: ContactSensorRequirements

## Variables

### BooleanStateServer

> `const` **BooleanStateServer**: *typeof* [`BooleanStateServer`](../../../../../../behavior/definitions/boolean-state/export/classes/BooleanStateServer.md) = `BaseBooleanStateServer`

The BooleanState cluster is required by the Matter specification

We provide this alias to the default implementation [BooleanStateServer](README.md#booleanstateserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/ContactSensorDevice.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/ContactSensorDevice.ts#L37)

***

### IdentifyServer

> `const` **IdentifyServer**: *typeof* [`IdentifyServer`](../../../../../../behavior/definitions/identify/export/namespaces/IdentifyServer/README.md) = `BaseIdentifyServer`

The Identify cluster is required by the Matter specification

We provide this alias to the default implementation [IdentifyServer](README.md#identifyserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/ContactSensorDevice.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/ContactSensorDevice.ts#L30)

***

### server

> `const` **server**: `object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

##### mandatory

> **mandatory**: `object`

##### mandatory.BooleanState

> **BooleanState**: *typeof* [`BooleanStateServer`](../../../../../../behavior/definitions/boolean-state/export/classes/BooleanStateServer.md) = `BooleanStateServer`

##### mandatory.Identify

> **Identify**: *typeof* [`IdentifyServer`](../../../../../../behavior/definitions/identify/export/namespaces/IdentifyServer/README.md) = `IdentifyServer`

#### Source

[packages/matter.js/src/endpoint/definitions/device/ContactSensorDevice.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/ContactSensorDevice.ts#L42)
