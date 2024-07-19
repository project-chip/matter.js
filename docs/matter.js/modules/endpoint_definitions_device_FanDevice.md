[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / endpoint/definitions/device/FanDevice

# Module: endpoint/definitions/device/FanDevice

## Table of contents

### Namespaces

- [FanRequirements](endpoint_definitions_device_FanDevice.FanRequirements.md)

### Interfaces

- [FanDevice](../interfaces/endpoint_definitions_device_FanDevice.FanDevice.md)

### Variables

- [FanDevice](endpoint_definitions_device_FanDevice.md#fandevice)
- [FanDeviceDefinition](endpoint_definitions_device_FanDevice.md#fandevicedefinition)

## Variables

### FanDevice

• **FanDevice**: [`FanDevice`](../interfaces/endpoint_definitions_device_FanDevice.FanDevice.md)

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/FanDevice.ts:23](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/definitions/device/FanDevice.ts#L23)

[packages/matter.js/src/endpoint/definitions/device/FanDevice.ts:65](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/definitions/device/FanDevice.ts#L65)

___

### FanDeviceDefinition

• `Const` **FanDeviceDefinition**: [`With`](node_export._internal_.md#with)\<[`For`](behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `identify`: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md)  } & \{ `groups`: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md)  } & \{ `fanControl`: typeof [`FanControlServer`](../classes/behavior_definitions_fan_control_export.FanControlServer.md)  } ; `deviceRevision`: ``1`` = 1; `deviceType`: ``43`` = 0x2b; `name`: ``"Fan"`` = "Fan"; `requirements`: typeof [`FanRequirements`](endpoint_definitions_device_FanDevice.FanRequirements.md) = FanRequirements }\>, \{ `identify`: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md)  } & \{ `groups`: typeof [`GroupsServer`](../classes/behavior_definitions_groups_export.GroupsServer.md)  } & \{ `fanControl`: typeof [`FanControlServer`](../classes/behavior_definitions_fan_control_export.FanControlServer.md)  }\>

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/FanDevice.ts:53](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/definitions/device/FanDevice.ts#L53)
