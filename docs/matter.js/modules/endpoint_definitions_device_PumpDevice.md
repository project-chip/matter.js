[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / endpoint/definitions/device/PumpDevice

# Module: endpoint/definitions/device/PumpDevice

## Table of contents

### Namespaces

- [PumpRequirements](endpoint_definitions_device_PumpDevice.PumpRequirements.md)

### Interfaces

- [PumpDevice](../interfaces/endpoint_definitions_device_PumpDevice.PumpDevice.md)

### Variables

- [PumpDevice](endpoint_definitions_device_PumpDevice.md#pumpdevice)
- [PumpDeviceDefinition](endpoint_definitions_device_PumpDevice.md#pumpdevicedefinition)

## Variables

### PumpDevice

• **PumpDevice**: [`PumpDevice`](../interfaces/endpoint_definitions_device_PumpDevice.PumpDevice.md)

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/PumpDevice.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/PumpDevice.ts#L53)

[packages/matter.js/src/endpoint/definitions/device/PumpDevice.ts:190](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/PumpDevice.ts#L190)

___

### PumpDeviceDefinition

• `Const` **PumpDeviceDefinition**: [`With`](node_export._internal_.md#with)\<[`For`](behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `onOff`: typeof [`OnOffServer`](behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `identify`: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md)  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``771`` = 0x303; `name`: ``"Pump"`` = "Pump"; `requirements`: typeof [`PumpRequirements`](endpoint_definitions_device_PumpDevice.PumpRequirements.md) = PumpRequirements }\>, \{ `onOff`: typeof [`OnOffServer`](behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `identify`: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md)  }\>

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/PumpDevice.ts:182](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/PumpDevice.ts#L182)
