[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/FanDevice](endpoint_definitions_device_FanDevice.md) / FanRequirements

# Namespace: FanRequirements

[endpoint/definitions/device/FanDevice](endpoint_definitions_device_FanDevice.md).FanRequirements

## Table of contents

### Variables

- [FanControlServer](endpoint_definitions_device_FanDevice.FanRequirements.md#fancontrolserver)
- [GroupsServer](endpoint_definitions_device_FanDevice.FanRequirements.md#groupsserver)
- [IdentifyServer](endpoint_definitions_device_FanDevice.FanRequirements.md#identifyserver)
- [server](endpoint_definitions_device_FanDevice.FanRequirements.md#server)

## Variables

### FanControlServer

• `Const` **FanControlServer**: typeof [`FanControlServer`](../classes/behavior_definitions_fan_control_export.FanControlServer.md) = `BaseFanControlServer`

The FanControl cluster is required by the Matter specification

We provide this alias to the default implementation [FanControlServer](endpoint_definitions_device_FanDevice.FanRequirements.md#fancontrolserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/FanDevice.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/FanDevice.ts#L45)

___

### GroupsServer

• `Const` **GroupsServer**: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md) = `BaseGroupsServer`

The Groups cluster is required by the Matter specification

We provide this alias to the default implementation [GroupsServer](endpoint_definitions_device_FanDevice.FanRequirements.md#groupsserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/FanDevice.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/FanDevice.ts#L38)

___

### IdentifyServer

• `Const` **IdentifyServer**: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) = `BaseIdentifyServer`

The Identify cluster is required by the Matter specification

We provide this alias to the default implementation [IdentifyServer](endpoint_definitions_device_FanDevice.FanRequirements.md#identifyserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/FanDevice.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/FanDevice.ts#L31)

___

### server

• `Const` **server**: `Object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | \{ `FanControl`: typeof [`FanControlServer`](../classes/behavior_definitions_fan_control_export.FanControlServer.md) = FanControlServer; `Groups`: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md) = GroupsServer; `Identify`: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) = IdentifyServer } |
| `mandatory.FanControl` | typeof [`FanControlServer`](../classes/behavior_definitions_fan_control_export.FanControlServer.md) |
| `mandatory.Groups` | typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md) |
| `mandatory.Identify` | typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) |

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/FanDevice.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/FanDevice.ts#L50)
