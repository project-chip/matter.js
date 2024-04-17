[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/SpeakerDevice](../modules/endpoint_definitions_device_SpeakerDevice.md) / SpeakerDevice

# Interface: SpeakerDevice

[endpoint/definitions/device/SpeakerDevice](../modules/endpoint_definitions_device_SpeakerDevice.md).SpeakerDevice

This defines conformance to the Speaker device type. This feature controls the speaker volume of the device.

To control unmute/mute, the On/Off cluster shall be used. A value of TRUE for the OnOff attribute shall represent
the volume on (not muted) state, while a value of FALSE shall represent the volume off (muted) state. For volume
level control, the Level cluster shall be used.

A dedicated endpoint is needed because the On/Off cluster can also be used for other purposes, such as for power
control.

The decision to use Level and On/Off clusters for volume (rather than defining a new audio control cluster) was made
in order to treat volume in a fashion consistent with lighting which also uses these clusters and has matching
functional requirements.

**`See`**

MatterSpecification.v11.Device § 10.4

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`SpeakerDeviceDefinition`](../modules/endpoint_definitions_device_SpeakerDevice.md#speakerdevicedefinition)\>

  ↳ **`SpeakerDevice`**

## Table of contents

### Properties

- [behaviors](endpoint_definitions_device_SpeakerDevice.SpeakerDevice.md#behaviors)
- [defaults](endpoint_definitions_device_SpeakerDevice.SpeakerDevice.md#defaults)
- [deviceClass](endpoint_definitions_device_SpeakerDevice.SpeakerDevice.md#deviceclass)
- [deviceRevision](endpoint_definitions_device_SpeakerDevice.SpeakerDevice.md#devicerevision)
- [deviceType](endpoint_definitions_device_SpeakerDevice.SpeakerDevice.md#devicetype)
- [name](endpoint_definitions_device_SpeakerDevice.SpeakerDevice.md#name)
- [requirements](endpoint_definitions_device_SpeakerDevice.SpeakerDevice.md#requirements)

### Methods

- [set](endpoint_definitions_device_SpeakerDevice.SpeakerDevice.md#set)
- [with](endpoint_definitions_device_SpeakerDevice.SpeakerDevice.md#with)

## Properties

### behaviors

• **behaviors**: \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `levelControl`: typeof [`LevelControlServer`](../classes/behavior_definitions_level_control_export.LevelControlServer.md)  }

#### Inherited from

Identity.behaviors

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L84)

___

### defaults

• **defaults**: [`StateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#stateof)\<\{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `levelControl`: typeof [`LevelControlServer`](../classes/behavior_definitions_level_control_export.LevelControlServer.md)  }\>

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

• **name**: ``"Speaker"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L48)

___

### requirements

• **requirements**: typeof [`SpeakerRequirements`](../modules/endpoint_definitions_device_SpeakerDevice.SpeakerRequirements.md)

#### Inherited from

Identity.requirements

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L53)

## Methods

### set

▸ **set**(`defaults`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `levelControl`: typeof [`LevelControlServer`](../classes/behavior_definitions_level_control_export.LevelControlServer.md)  } ; `deviceRevision`: ``1`` = 1; `deviceType`: ``34`` = 0x22; `name`: ``"Speaker"`` = "Speaker"; `requirements`: typeof [`SpeakerRequirements`](../modules/endpoint_definitions_device_SpeakerDevice.SpeakerRequirements.md) = SpeakerRequirements }\>, \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `levelControl`: typeof [`LevelControlServer`](../classes/behavior_definitions_level_control_export.LevelControlServer.md)  }\>

Define an endpoint like this one with different defaults.  Only updates values present in the input object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`InputStateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#inputstateof)\<\{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `levelControl`: typeof [`LevelControlServer`](../classes/behavior_definitions_level_control_export.LevelControlServer.md)  }\> |

#### Returns

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `levelControl`: typeof [`LevelControlServer`](../classes/behavior_definitions_level_control_export.LevelControlServer.md)  } ; `deviceRevision`: ``1`` = 1; `deviceType`: ``34`` = 0x22; `name`: ``"Speaker"`` = "Speaker"; `requirements`: typeof [`SpeakerRequirements`](../modules/endpoint_definitions_device_SpeakerDevice.SpeakerRequirements.md) = SpeakerRequirements }\>, \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `levelControl`: typeof [`LevelControlServer`](../classes/behavior_definitions_level_control_export.LevelControlServer.md)  }\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L94)

___

### with

▸ **with**\<`BL`\>(`...behaviors`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `levelControl`: typeof [`LevelControlServer`](../classes/behavior_definitions_level_control_export.LevelControlServer.md)  } ; `deviceRevision`: ``1`` = 1; `deviceType`: ``34`` = 0x22; `name`: ``"Speaker"`` = "Speaker"; `requirements`: typeof [`SpeakerRequirements`](../modules/endpoint_definitions_device_SpeakerDevice.SpeakerRequirements.md) = SpeakerRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `levelControl`: typeof [`LevelControlServer`](../classes/behavior_definitions_level_control_export.LevelControlServer.md)  }, `BL`\>\>

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

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `levelControl`: typeof [`LevelControlServer`](../classes/behavior_definitions_level_control_export.LevelControlServer.md)  } ; `deviceRevision`: ``1`` = 1; `deviceType`: ``34`` = 0x22; `name`: ``"Speaker"`` = "Speaker"; `requirements`: typeof [`SpeakerRequirements`](../modules/endpoint_definitions_device_SpeakerDevice.SpeakerRequirements.md) = SpeakerRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `levelControl`: typeof [`LevelControlServer`](../classes/behavior_definitions_level_control_export.LevelControlServer.md)  }, `BL`\>\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:99](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L99)
