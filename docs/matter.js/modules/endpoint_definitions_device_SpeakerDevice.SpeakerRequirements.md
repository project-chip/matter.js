[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/SpeakerDevice](endpoint_definitions_device_SpeakerDevice.md) / SpeakerRequirements

# Namespace: SpeakerRequirements

[endpoint/definitions/device/SpeakerDevice](endpoint_definitions_device_SpeakerDevice.md).SpeakerRequirements

## Table of contents

### Variables

- [LevelControlServer](endpoint_definitions_device_SpeakerDevice.SpeakerRequirements.md#levelcontrolserver)
- [OnOffServer](endpoint_definitions_device_SpeakerDevice.SpeakerRequirements.md#onoffserver)
- [server](endpoint_definitions_device_SpeakerDevice.SpeakerRequirements.md#server)

## Variables

### LevelControlServer

• `Const` **LevelControlServer**: typeof [`LevelControlServer`](../classes/behavior_definitions_level_control_export.LevelControlServer.md) = `BaseLevelControlServer`

The LevelControl cluster is required by the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/SpeakerDevice.ts:49](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/SpeakerDevice.ts#L49)

___

### OnOffServer

• `Const` **OnOffServer**: typeof [`OnOffServer`](behavior_definitions_on_off_export.OnOffServer.md) = `BaseOnOffServer`

The OnOff cluster is required by the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/SpeakerDevice.ts:42](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/SpeakerDevice.ts#L42)

___

### server

• `Const` **server**: `Object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | \{ `LevelControl`: typeof [`LevelControlServer`](../classes/behavior_definitions_level_control_export.LevelControlServer.md) = LevelControlServer; `OnOff`: typeof [`OnOffServer`](behavior_definitions_on_off_export.OnOffServer.md) = OnOffServer } |
| `mandatory.LevelControl` | typeof [`LevelControlServer`](../classes/behavior_definitions_level_control_export.LevelControlServer.md) |
| `mandatory.OnOff` | typeof [`OnOffServer`](behavior_definitions_on_off_export.OnOffServer.md) |

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/SpeakerDevice.ts:54](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/SpeakerDevice.ts#L54)
