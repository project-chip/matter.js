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

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/OnOffPlugInUnitDevice.ts:44](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/OnOffPlugInUnitDevice.ts#L44)

___

### IdentifyServer

• `Const` **IdentifyServer**: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md) = `BaseIdentifyServer`

The Identify cluster is required by the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/OnOffPlugInUnitDevice.ts:37](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/OnOffPlugInUnitDevice.ts#L37)

___

### LevelControlServer

• `Const` **LevelControlServer**: typeof [`LevelControlServer`](../classes/behavior_definitions_level_control_export.LevelControlServer.md) = `BaseLevelControlServer`

The LevelControl cluster is optional per the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/OnOffPlugInUnitDevice.ts:65](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/OnOffPlugInUnitDevice.ts#L65)

___

### OnOffServer

• `Const` **OnOffServer**: typeof [`OnOffServer`](behavior_definitions_on_off_export.OnOffServer.md) = `BaseOnOffServer`

The OnOff cluster is required by the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/OnOffPlugInUnitDevice.ts:58](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/OnOffPlugInUnitDevice.ts#L58)

___

### ScenesServer

• `Const` **ScenesServer**: typeof [`ScenesServer`](../classes/behavior_definitions_scenes_export.ScenesServer.md) = `BaseScenesServer`

The Scenes cluster is required by the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/OnOffPlugInUnitDevice.ts:51](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/OnOffPlugInUnitDevice.ts#L51)

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

[packages/matter.js/src/endpoint/definitions/device/OnOffPlugInUnitDevice.ts:70](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/OnOffPlugInUnitDevice.ts#L70)
