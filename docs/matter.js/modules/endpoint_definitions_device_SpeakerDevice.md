[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / endpoint/definitions/device/SpeakerDevice

# Module: endpoint/definitions/device/SpeakerDevice

## Table of contents

### Namespaces

- [SpeakerRequirements](endpoint_definitions_device_SpeakerDevice.SpeakerRequirements.md)

### Interfaces

- [SpeakerDevice](../interfaces/endpoint_definitions_device_SpeakerDevice.SpeakerDevice.md)

### Variables

- [SpeakerDevice](endpoint_definitions_device_SpeakerDevice.md#speakerdevice)
- [SpeakerDeviceDefinition](endpoint_definitions_device_SpeakerDevice.md#speakerdevicedefinition)

## Variables

### SpeakerDevice

• **SpeakerDevice**: [`SpeakerDevice`](../interfaces/endpoint_definitions_device_SpeakerDevice.SpeakerDevice.md)

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/SpeakerDevice.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/SpeakerDevice.ts#L33)

[packages/matter.js/src/endpoint/definitions/device/SpeakerDevice.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/SpeakerDevice.ts#L67)

___

### SpeakerDeviceDefinition

• `Const` **SpeakerDeviceDefinition**: [`With`](node_export._internal_.md#with)\<[`For`](behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `onOff`: typeof [`OnOffServer`](behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `levelControl`: typeof [`LevelControlServer`](../classes/behavior_definitions_level_control_export.LevelControlServer.md)  } ; `deviceRevision`: ``1`` = 1; `deviceType`: ``34`` = 0x22; `name`: ``"Speaker"`` = "Speaker"; `requirements`: typeof [`SpeakerRequirements`](endpoint_definitions_device_SpeakerDevice.SpeakerRequirements.md) = SpeakerRequirements }\>, \{ `onOff`: typeof [`OnOffServer`](behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `levelControl`: typeof [`LevelControlServer`](../classes/behavior_definitions_level_control_export.LevelControlServer.md)  }\>

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/SpeakerDevice.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/SpeakerDevice.ts#L56)
