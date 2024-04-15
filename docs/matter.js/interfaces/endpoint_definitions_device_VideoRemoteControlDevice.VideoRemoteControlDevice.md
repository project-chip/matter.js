[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/VideoRemoteControlDevice](../modules/endpoint_definitions_device_VideoRemoteControlDevice.md) / VideoRemoteControlDevice

# Interface: VideoRemoteControlDevice

[endpoint/definitions/device/VideoRemoteControlDevice](../modules/endpoint_definitions_device_VideoRemoteControlDevice.md).VideoRemoteControlDevice

This defines conformance to the Video Remote Control device type.

A Video Remote Control is a client that can control a Video Player, for example, a traditional universal remote
control.

**`See`**

MatterSpecification.v11.Device § 10.7

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`VideoRemoteControlDeviceDefinition`](../modules/endpoint_definitions_device_VideoRemoteControlDevice.md#videoremotecontroldevicedefinition)\>

  ↳ **`VideoRemoteControlDevice`**

## Table of contents

### Properties

- [behaviors](endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlDevice.md#behaviors)
- [defaults](endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlDevice.md#defaults)
- [deviceClass](endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlDevice.md#deviceclass)
- [deviceRevision](endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlDevice.md#devicerevision)
- [deviceType](endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlDevice.md#devicetype)
- [name](endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlDevice.md#name)
- [requirements](endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlDevice.md#requirements)

### Methods

- [set](endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlDevice.md#set)
- [with](endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlDevice.md#with)

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

• **name**: ``"VideoRemoteControl"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L48)

___

### requirements

• **requirements**: typeof [`VideoRemoteControlRequirements`](../modules/endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlRequirements.md)

#### Inherited from

Identity.requirements

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L53)

## Methods

### set

▸ **set**(`defaults`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: {} ; `deviceRevision`: ``1`` = 1; `deviceType`: ``42`` = 0x2a; `name`: ``"VideoRemoteControl"`` = "VideoRemoteControl"; `requirements`: typeof [`VideoRemoteControlRequirements`](../modules/endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlRequirements.md) = VideoRemoteControlRequirements }\>, {}\>

Define an endpoint like this one with different defaults.  Only updates values present in the input object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`InputStateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#inputstateof)\<{}\> |

#### Returns

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: {} ; `deviceRevision`: ``1`` = 1; `deviceType`: ``42`` = 0x2a; `name`: ``"VideoRemoteControl"`` = "VideoRemoteControl"; `requirements`: typeof [`VideoRemoteControlRequirements`](../modules/endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlRequirements.md) = VideoRemoteControlRequirements }\>, {}\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L94)

___

### with

▸ **with**\<`BL`\>(`...behaviors`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: {} ; `deviceRevision`: ``1`` = 1; `deviceType`: ``42`` = 0x2a; `name`: ``"VideoRemoteControl"`` = "VideoRemoteControl"; `requirements`: typeof [`VideoRemoteControlRequirements`](../modules/endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlRequirements.md) = VideoRemoteControlRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<{}, `BL`\>\>

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

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: {} ; `deviceRevision`: ``1`` = 1; `deviceType`: ``42`` = 0x2a; `name`: ``"VideoRemoteControl"`` = "VideoRemoteControl"; `requirements`: typeof [`VideoRemoteControlRequirements`](../modules/endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlRequirements.md) = VideoRemoteControlRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<{}, `BL`\>\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:99](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L99)
