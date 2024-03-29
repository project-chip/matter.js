[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / endpoint/definitions/device/ContactSensorDevice

# Module: endpoint/definitions/device/ContactSensorDevice

## Table of contents

### Namespaces

- [ContactSensorRequirements](endpoint_definitions_device_ContactSensorDevice.ContactSensorRequirements.md)

### Interfaces

- [ContactSensorDevice](../interfaces/endpoint_definitions_device_ContactSensorDevice.ContactSensorDevice.md)

### Variables

- [ContactSensorDevice](endpoint_definitions_device_ContactSensorDevice.md#contactsensordevice)
- [ContactSensorDeviceDefinition](endpoint_definitions_device_ContactSensorDevice.md#contactsensordevicedefinition)

## Variables

### ContactSensorDevice

• **ContactSensorDevice**: [`ContactSensorDevice`](../interfaces/endpoint_definitions_device_ContactSensorDevice.ContactSensorDevice.md)

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/ContactSensorDevice.ts:23](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/ContactSensorDevice.ts#L23)

[packages/matter.js/src/endpoint/definitions/device/ContactSensorDevice.ts:57](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/ContactSensorDevice.ts#L57)

___

### ContactSensorDeviceDefinition

• `Const` **ContactSensorDeviceDefinition**: [`With`](node_export._internal_.md#with)\<[`For`](behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `identify`: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md)  } & \{ `booleanState`: typeof [`BooleanStateServer`](../classes/behavior_definitions_boolean_state_export.BooleanStateServer.md)  } ; `deviceRevision`: ``1`` = 1; `deviceType`: ``21`` = 0x15; `name`: ``"ContactSensor"`` = "ContactSensor"; `requirements`: typeof [`ContactSensorRequirements`](endpoint_definitions_device_ContactSensorDevice.ContactSensorRequirements.md) = ContactSensorRequirements }\>, \{ `identify`: typeof [`IdentifyServer`](behavior_definitions_identify_export.IdentifyServer.md)  } & \{ `booleanState`: typeof [`BooleanStateServer`](../classes/behavior_definitions_boolean_state_export.BooleanStateServer.md)  }\>

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/ContactSensorDevice.ts:46](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/ContactSensorDevice.ts#L46)
