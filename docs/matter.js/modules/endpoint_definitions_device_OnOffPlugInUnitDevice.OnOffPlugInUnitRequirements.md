[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/OnOffPlugInUnitDevice](endpoint_definitions_device_OnOffPlugInUnitDevice.md) / OnOffPlugInUnitRequirements

# Namespace: OnOffPlugInUnitRequirements

[endpoint/definitions/device/OnOffPlugInUnitDevice](endpoint_definitions_device_OnOffPlugInUnitDevice.md).OnOffPlugInUnitRequirements

## Table of contents

### Variables

- [GroupsServer](endpoint_definitions_device_OnOffPlugInUnitDevice.OnOffPlugInUnitRequirements.md#groupsserver)
- [IdentifyServer](endpoint_definitions_device_OnOffPlugInUnitDevice.OnOffPlugInUnitRequirements.md#identifyserver)
- [LevelControlServer](endpoint_definitions_device_OnOffPlugInUnitDevice.OnOffPlugInUnitRequirements.md#levelcontrolserver)
- [OnOffServer](endpoint_definitions_device_OnOffPlugInUnitDevice.OnOffPlugInUnitRequirements.md#onoffserver)
- [ScenesServer](endpoint_definitions_device_OnOffPlugInUnitDevice.OnOffPlugInUnitRequirements.md#scenesserver)
- [server](endpoint_definitions_device_OnOffPlugInUnitDevice.OnOffPlugInUnitRequirements.md#server)

## Variables

### GroupsServer

• `Const` **GroupsServer**: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md) = `BaseGroupsServer`

The Groups cluster is required by the Matter specification

We provide this alias to the default implementation [GroupsServer](endpoint_definitions_device_OnOffPlugInUnitDevice.OnOffPlugInUnitRequirements.md#groupsserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/OnOffPlugInUnitDevice.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/OnOffPlugInUnitDevice.ts#L43)

___

### IdentifyServer

• `Const` **IdentifyServer**: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) = `BaseIdentifyServer`

The Identify cluster is required by the Matter specification

We provide this alias to the default implementation [IdentifyServer](endpoint_definitions_device_OnOffPlugInUnitDevice.OnOffPlugInUnitRequirements.md#identifyserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/OnOffPlugInUnitDevice.ts:36](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/OnOffPlugInUnitDevice.ts#L36)

___

### LevelControlServer

• `Const` **LevelControlServer**: typeof [`LevelControlServer`](../classes/behavior_definitions_level_control_export.LevelControlServer.md) = `BaseLevelControlServer`

The LevelControl cluster is optional per the Matter specification

We provide this alias to the default implementation [LevelControlServer](endpoint_definitions_device_OnOffPlugInUnitDevice.OnOffPlugInUnitRequirements.md#levelcontrolserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/OnOffPlugInUnitDevice.ts:64](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/OnOffPlugInUnitDevice.ts#L64)

___

### OnOffServer

• `Const` **OnOffServer**: typeof [`OnOffServer`](behavior_definitions_on_off_export.OnOffServer.md) = `BaseOnOffServer`

The OnOff cluster is required by the Matter specification

We provide this alias to the default implementation [OnOffServer](endpoint_definitions_device_OnOffPlugInUnitDevice.OnOffPlugInUnitRequirements.md#onoffserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/OnOffPlugInUnitDevice.ts:57](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/OnOffPlugInUnitDevice.ts#L57)

___

### ScenesServer

• `Const` **ScenesServer**: typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md) = `BaseScenesServer`

The Scenes cluster is required by the Matter specification

We provide this alias to the default implementation [ScenesServer](endpoint_definitions_device_OnOffPlugInUnitDevice.OnOffPlugInUnitRequirements.md#scenesserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/OnOffPlugInUnitDevice.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/OnOffPlugInUnitDevice.ts#L50)

___

### server

• `Const` **server**: `Object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | \{ `Groups`: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md) = GroupsServer; `Identify`: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) = IdentifyServer; `OnOff`: typeof [`OnOffServer`](behavior_definitions_on_off_export.OnOffServer.md) = OnOffServer; `Scenes`: typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md) = ScenesServer } |
| `mandatory.Groups` | typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md) |
| `mandatory.Identify` | typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) |
| `mandatory.OnOff` | typeof [`OnOffServer`](behavior_definitions_on_off_export.OnOffServer.md) |
| `mandatory.Scenes` | typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md) |
| `optional` | \{ `LevelControl`: typeof [`LevelControlServer`](../classes/behavior_definitions_level_control_export.LevelControlServer.md) = LevelControlServer } |
| `optional.LevelControl` | typeof [`LevelControlServer`](../classes/behavior_definitions_level_control_export.LevelControlServer.md) |

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/OnOffPlugInUnitDevice.ts:69](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/OnOffPlugInUnitDevice.ts#L69)
