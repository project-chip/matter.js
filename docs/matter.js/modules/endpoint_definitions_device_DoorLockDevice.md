[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / endpoint/definitions/device/DoorLockDevice

# Module: endpoint/definitions/device/DoorLockDevice

## Table of contents

### Namespaces

- [DoorLockRequirements](endpoint_definitions_device_DoorLockDevice.DoorLockRequirements.md)

### Interfaces

- [DoorLockDevice](../interfaces/endpoint_definitions_device_DoorLockDevice.DoorLockDevice.md)

### Variables

- [DoorLockDevice](endpoint_definitions_device_DoorLockDevice.md#doorlockdevice)
- [DoorLockDeviceDefinition](endpoint_definitions_device_DoorLockDevice.md#doorlockdevicedefinition)

## Variables

### DoorLockDevice

• **DoorLockDevice**: [`DoorLockDevice`](../interfaces/endpoint_definitions_device_DoorLockDevice.DoorLockDevice.md)

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/DoorLockDevice.ts:23](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/DoorLockDevice.ts#L23)

[packages/matter.js/src/endpoint/definitions/device/DoorLockDevice.ts:69](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/DoorLockDevice.ts#L69)

___

### DoorLockDeviceDefinition

• `Const` **DoorLockDeviceDefinition**: [`With`](node_export._internal_.md#with)\<[`For`](behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `identify`: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md)  } & \{ `doorLock`: typeof [`DoorLockServer`](../classes/behavior_definitions_door_lock_export.DoorLockServer.md)  } ; `deviceRevision`: ``2`` = 2; `deviceType`: ``10`` = 0xa; `name`: ``"DoorLock"`` = "DoorLock"; `requirements`: typeof [`DoorLockRequirements`](endpoint_definitions_device_DoorLockDevice.DoorLockRequirements.md) = DoorLockRequirements }\>, \{ `identify`: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md)  } & \{ `doorLock`: typeof [`DoorLockServer`](../classes/behavior_definitions_door_lock_export.DoorLockServer.md)  }\>

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/DoorLockDevice.ts:58](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/DoorLockDevice.ts#L58)
