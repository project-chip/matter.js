[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/DoorLockControllerDevice](../modules/endpoint_definitions_device_DoorLockControllerDevice.md) / DoorLockControllerDevice

# Interface: DoorLockControllerDevice

[endpoint/definitions/device/DoorLockControllerDevice](../modules/endpoint_definitions_device_DoorLockControllerDevice.md).DoorLockControllerDevice

A Door Lock Controller is a device capable of controlling a door lock.

**`See`**

MatterSpecification.v11.Device § 8.2

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`DoorLockControllerDeviceDefinition`](../modules/endpoint_definitions_device_DoorLockControllerDevice.md#doorlockcontrollerdevicedefinition)\>

  ↳ **`DoorLockControllerDevice`**

## Table of contents

### Properties

- [behaviors](endpoint_definitions_device_DoorLockControllerDevice.DoorLockControllerDevice.md#behaviors)
- [defaults](endpoint_definitions_device_DoorLockControllerDevice.DoorLockControllerDevice.md#defaults)
- [deviceClass](endpoint_definitions_device_DoorLockControllerDevice.DoorLockControllerDevice.md#deviceclass)
- [deviceRevision](endpoint_definitions_device_DoorLockControllerDevice.DoorLockControllerDevice.md#devicerevision)
- [deviceType](endpoint_definitions_device_DoorLockControllerDevice.DoorLockControllerDevice.md#devicetype)
- [name](endpoint_definitions_device_DoorLockControllerDevice.DoorLockControllerDevice.md#name)
- [requirements](endpoint_definitions_device_DoorLockControllerDevice.DoorLockControllerDevice.md#requirements)

### Methods

- [set](endpoint_definitions_device_DoorLockControllerDevice.DoorLockControllerDevice.md#set)
- [with](endpoint_definitions_device_DoorLockControllerDevice.DoorLockControllerDevice.md#with)

## Properties

### behaviors

• **behaviors**: `Object`

#### Inherited from

Identity.behaviors

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L84)

___

### defaults

• **defaults**: [`StateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#stateof)\<{}\>

Access default state values.

#### Inherited from

Identity.defaults

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L89)

___

### deviceClass

• **deviceClass**: [`DeviceClasses`](../enums/device_export.DeviceClasses.md)

#### Inherited from

Identity.deviceClass

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L51)

___

### deviceRevision

• **deviceRevision**: `number`

#### Inherited from

Identity.deviceRevision

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L50)

___

### deviceType

• **deviceType**: [`DeviceTypeId`](../modules/datatype_export.md#devicetypeid)

#### Inherited from

Identity.deviceType

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:49](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L49)

___

### name

• **name**: ``"DoorLockController"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L48)

___

### requirements

• **requirements**: typeof [`DoorLockControllerRequirements`](../modules/endpoint_definitions_device_DoorLockControllerDevice.DoorLockControllerRequirements.md)

#### Inherited from

Identity.requirements

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L53)

## Methods

### set

▸ **set**(`defaults`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: {} ; `deviceRevision`: ``2`` = 2; `deviceType`: ``11`` = 0xb; `name`: ``"DoorLockController"`` = "DoorLockController"; `requirements`: typeof [`DoorLockControllerRequirements`](../modules/endpoint_definitions_device_DoorLockControllerDevice.DoorLockControllerRequirements.md) = DoorLockControllerRequirements }\>, {}\>

Define an endpoint like this one with different defaults.  Only updates values present in the input object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`InputStateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#inputstateof)\<{}\> |

#### Returns

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: {} ; `deviceRevision`: ``2`` = 2; `deviceType`: ``11`` = 0xb; `name`: ``"DoorLockController"`` = "DoorLockController"; `requirements`: typeof [`DoorLockControllerRequirements`](../modules/endpoint_definitions_device_DoorLockControllerDevice.DoorLockControllerRequirements.md) = DoorLockControllerRequirements }\>, {}\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L94)

___

### with

▸ **with**\<`BL`\>(`...behaviors`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: {} ; `deviceRevision`: ``2`` = 2; `deviceType`: ``11`` = 0xb; `name`: ``"DoorLockController"`` = "DoorLockController"; `requirements`: typeof [`DoorLockControllerRequirements`](../modules/endpoint_definitions_device_DoorLockControllerDevice.DoorLockControllerRequirements.md) = DoorLockControllerRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<{}, `BL`\>\>

Define an endpoint like this one with additional and/or replacement server behaviors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `BL` | extends [`List`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#list) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...behaviors` | `BL` |

#### Returns

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: {} ; `deviceRevision`: ``2`` = 2; `deviceType`: ``11`` = 0xb; `name`: ``"DoorLockController"`` = "DoorLockController"; `requirements`: typeof [`DoorLockControllerRequirements`](../modules/endpoint_definitions_device_DoorLockControllerDevice.DoorLockControllerRequirements.md) = DoorLockControllerRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<{}, `BL`\>\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:99](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L99)
