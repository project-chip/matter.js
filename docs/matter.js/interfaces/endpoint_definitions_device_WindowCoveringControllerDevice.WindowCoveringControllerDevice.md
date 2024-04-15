[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/WindowCoveringControllerDevice](../modules/endpoint_definitions_device_WindowCoveringControllerDevice.md) / WindowCoveringControllerDevice

# Interface: WindowCoveringControllerDevice

[endpoint/definitions/device/WindowCoveringControllerDevice](../modules/endpoint_definitions_device_WindowCoveringControllerDevice.md).WindowCoveringControllerDevice

A Window Covering Controller is a device that controls an automatic window covering.

**`See`**

MatterSpecification.v11.Device § 8.4

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`WindowCoveringControllerDeviceDefinition`](../modules/endpoint_definitions_device_WindowCoveringControllerDevice.md#windowcoveringcontrollerdevicedefinition)\>

  ↳ **`WindowCoveringControllerDevice`**

## Table of contents

### Properties

- [behaviors](endpoint_definitions_device_WindowCoveringControllerDevice.WindowCoveringControllerDevice.md#behaviors)
- [defaults](endpoint_definitions_device_WindowCoveringControllerDevice.WindowCoveringControllerDevice.md#defaults)
- [deviceClass](endpoint_definitions_device_WindowCoveringControllerDevice.WindowCoveringControllerDevice.md#deviceclass)
- [deviceRevision](endpoint_definitions_device_WindowCoveringControllerDevice.WindowCoveringControllerDevice.md#devicerevision)
- [deviceType](endpoint_definitions_device_WindowCoveringControllerDevice.WindowCoveringControllerDevice.md#devicetype)
- [name](endpoint_definitions_device_WindowCoveringControllerDevice.WindowCoveringControllerDevice.md#name)
- [requirements](endpoint_definitions_device_WindowCoveringControllerDevice.WindowCoveringControllerDevice.md#requirements)

### Methods

- [set](endpoint_definitions_device_WindowCoveringControllerDevice.WindowCoveringControllerDevice.md#set)
- [with](endpoint_definitions_device_WindowCoveringControllerDevice.WindowCoveringControllerDevice.md#with)

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

• **name**: ``"WindowCoveringController"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L48)

___

### requirements

• **requirements**: typeof [`WindowCoveringControllerRequirements`](../modules/endpoint_definitions_device_WindowCoveringControllerDevice.WindowCoveringControllerRequirements.md)

#### Inherited from

Identity.requirements

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L53)

## Methods

### set

▸ **set**(`defaults`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: {} ; `deviceRevision`: ``2`` = 2; `deviceType`: ``515`` = 0x203; `name`: ``"WindowCoveringController"`` = "WindowCoveringController"; `requirements`: typeof [`WindowCoveringControllerRequirements`](../modules/endpoint_definitions_device_WindowCoveringControllerDevice.WindowCoveringControllerRequirements.md) = WindowCoveringControllerRequirements }\>, {}\>

Define an endpoint like this one with different defaults.  Only updates values present in the input object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`InputStateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#inputstateof)\<{}\> |

#### Returns

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: {} ; `deviceRevision`: ``2`` = 2; `deviceType`: ``515`` = 0x203; `name`: ``"WindowCoveringController"`` = "WindowCoveringController"; `requirements`: typeof [`WindowCoveringControllerRequirements`](../modules/endpoint_definitions_device_WindowCoveringControllerDevice.WindowCoveringControllerRequirements.md) = WindowCoveringControllerRequirements }\>, {}\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L94)

___

### with

▸ **with**\<`BL`\>(`...behaviors`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: {} ; `deviceRevision`: ``2`` = 2; `deviceType`: ``515`` = 0x203; `name`: ``"WindowCoveringController"`` = "WindowCoveringController"; `requirements`: typeof [`WindowCoveringControllerRequirements`](../modules/endpoint_definitions_device_WindowCoveringControllerDevice.WindowCoveringControllerRequirements.md) = WindowCoveringControllerRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<{}, `BL`\>\>

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

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: {} ; `deviceRevision`: ``2`` = 2; `deviceType`: ``515`` = 0x203; `name`: ``"WindowCoveringController"`` = "WindowCoveringController"; `requirements`: typeof [`WindowCoveringControllerRequirements`](../modules/endpoint_definitions_device_WindowCoveringControllerDevice.WindowCoveringControllerRequirements.md) = WindowCoveringControllerRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<{}, `BL`\>\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:99](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L99)
