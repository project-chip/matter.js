[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/ContactSensorDevice](endpoint_definitions_device_ContactSensorDevice.md) / ContactSensorRequirements

# Namespace: ContactSensorRequirements

[endpoint/definitions/device/ContactSensorDevice](endpoint_definitions_device_ContactSensorDevice.md).ContactSensorRequirements

## Table of contents

### Variables

- [BooleanStateServer](endpoint_definitions_device_ContactSensorDevice.ContactSensorRequirements.md#booleanstateserver)
- [IdentifyServer](endpoint_definitions_device_ContactSensorDevice.ContactSensorRequirements.md#identifyserver)
- [server](endpoint_definitions_device_ContactSensorDevice.ContactSensorRequirements.md#server)

## Variables

### BooleanStateServer

• `Const` **BooleanStateServer**: typeof [`BooleanStateServer`](../classes/behavior_definitions_boolean_state_export.BooleanStateServer.md) = `BaseBooleanStateServer`

The BooleanState cluster is required by the Matter specification

We provide this alias to the default implementation [BooleanStateServer](endpoint_definitions_device_ContactSensorDevice.ContactSensorRequirements.md#booleanstateserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/ContactSensorDevice.ts:37](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/ContactSensorDevice.ts#L37)

___

### IdentifyServer

• `Const` **IdentifyServer**: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) = `BaseIdentifyServer`

The Identify cluster is required by the Matter specification

We provide this alias to the default implementation [IdentifyServer](endpoint_definitions_device_ContactSensorDevice.ContactSensorRequirements.md#identifyserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/ContactSensorDevice.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/ContactSensorDevice.ts#L30)

___

### server

• `Const` **server**: `Object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | \{ `BooleanState`: typeof [`BooleanStateServer`](../classes/behavior_definitions_boolean_state_export.BooleanStateServer.md) = BooleanStateServer; `Identify`: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) = IdentifyServer } |
| `mandatory.BooleanState` | typeof [`BooleanStateServer`](../classes/behavior_definitions_boolean_state_export.BooleanStateServer.md) |
| `mandatory.Identify` | typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) |

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/ContactSensorDevice.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/ContactSensorDevice.ts#L42)
