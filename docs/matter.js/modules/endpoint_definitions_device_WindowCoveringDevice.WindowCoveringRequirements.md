[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/WindowCoveringDevice](endpoint_definitions_device_WindowCoveringDevice.md) / WindowCoveringRequirements

# Namespace: WindowCoveringRequirements

[endpoint/definitions/device/WindowCoveringDevice](endpoint_definitions_device_WindowCoveringDevice.md).WindowCoveringRequirements

## Table of contents

### Variables

- [GroupsServer](endpoint_definitions_device_WindowCoveringDevice.WindowCoveringRequirements.md#groupsserver)
- [IdentifyServer](endpoint_definitions_device_WindowCoveringDevice.WindowCoveringRequirements.md#identifyserver)
- [ScenesServer](endpoint_definitions_device_WindowCoveringDevice.WindowCoveringRequirements.md#scenesserver)
- [WindowCoveringServer](endpoint_definitions_device_WindowCoveringDevice.WindowCoveringRequirements.md#windowcoveringserver)
- [server](endpoint_definitions_device_WindowCoveringDevice.WindowCoveringRequirements.md#server)

## Variables

### GroupsServer

• `Const` **GroupsServer**: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md) = `BaseGroupsServer`

The Groups cluster is optional per the Matter specification

We provide this alias to the default implementation [GroupsServer](endpoint_definitions_device_WindowCoveringDevice.WindowCoveringRequirements.md#groupsserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/WindowCoveringDevice.ts:49](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/WindowCoveringDevice.ts#L49)

___

### IdentifyServer

• `Const` **IdentifyServer**: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) = `BaseIdentifyServer`

The Identify cluster is required by the Matter specification

We provide this alias to the default implementation [IdentifyServer](endpoint_definitions_device_WindowCoveringDevice.WindowCoveringRequirements.md#identifyserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/WindowCoveringDevice.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/WindowCoveringDevice.ts#L35)

___

### ScenesServer

• `Const` **ScenesServer**: typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md) = `BaseScenesServer`

The Scenes cluster is optional per the Matter specification

We provide this alias to the default implementation [ScenesServer](endpoint_definitions_device_WindowCoveringDevice.WindowCoveringRequirements.md#scenesserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/WindowCoveringDevice.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/WindowCoveringDevice.ts#L56)

___

### WindowCoveringServer

• `Const` **WindowCoveringServer**: typeof [`WindowCoveringServer`](../classes/behavior_definitions_window_covering_export.WindowCoveringServer.md) = `BaseWindowCoveringServer`

The WindowCovering cluster is required by the Matter specification

We provide this alias to the default implementation [WindowCoveringServer](endpoint_definitions_device_WindowCoveringDevice.WindowCoveringRequirements.md#windowcoveringserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/WindowCoveringDevice.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/WindowCoveringDevice.ts#L42)

___

### server

• `Const` **server**: `Object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | \{ `Identify`: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) = IdentifyServer; `WindowCovering`: typeof [`WindowCoveringServer`](../classes/behavior_definitions_window_covering_export.WindowCoveringServer.md) = WindowCoveringServer } |
| `mandatory.Identify` | typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) |
| `mandatory.WindowCovering` | typeof [`WindowCoveringServer`](../classes/behavior_definitions_window_covering_export.WindowCoveringServer.md) |
| `optional` | \{ `Groups`: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md) = GroupsServer; `Scenes`: typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md) = ScenesServer } |
| `optional.Groups` | typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md) |
| `optional.Scenes` | typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md) |

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/WindowCoveringDevice.ts:61](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/WindowCoveringDevice.ts#L61)
