[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/BasicVideoPlayerDevice](../modules/endpoint_definitions_device_BasicVideoPlayerDevice.md) / BasicVideoPlayerDevice

# Interface: BasicVideoPlayerDevice

[endpoint/definitions/device/BasicVideoPlayerDevice](../modules/endpoint_definitions_device_BasicVideoPlayerDevice.md).BasicVideoPlayerDevice

This defines conformance to the Basic Video Player device type.

A Video Player (either Basic or Casting) represents a device that is able to play media to a physical output or to a
display screen which is part of the device.

A Basic Video Player has playback controls (play, pause, etc.) and keypad remote controls (up, down, number input),
but is not able to launch content and is not a content app platform (the Casting Video Player device type is used
for these functions).

For example, a Basic Video Player can be a traditional TV device a physical media playback device such as a DVD
Player, or a device that provides input to another device like a TV or computer monitor.

Please see Video Player Architecture for additional Basic Video Player requirements relating to Video Player device
endpoint composition, commissioning, feature representation in clusters, and UI context.

**`See`**

MatterSpecification.v11.Device § 10.2

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`BasicVideoPlayerDeviceDefinition`](../modules/endpoint_definitions_device_BasicVideoPlayerDevice.md#basicvideoplayerdevicedefinition)\>

  ↳ **`BasicVideoPlayerDevice`**

## Table of contents

### Properties

- [behaviors](endpoint_definitions_device_BasicVideoPlayerDevice.BasicVideoPlayerDevice.md#behaviors)
- [defaults](endpoint_definitions_device_BasicVideoPlayerDevice.BasicVideoPlayerDevice.md#defaults)
- [deviceClass](endpoint_definitions_device_BasicVideoPlayerDevice.BasicVideoPlayerDevice.md#deviceclass)
- [deviceRevision](endpoint_definitions_device_BasicVideoPlayerDevice.BasicVideoPlayerDevice.md#devicerevision)
- [deviceType](endpoint_definitions_device_BasicVideoPlayerDevice.BasicVideoPlayerDevice.md#devicetype)
- [name](endpoint_definitions_device_BasicVideoPlayerDevice.BasicVideoPlayerDevice.md#name)
- [requirements](endpoint_definitions_device_BasicVideoPlayerDevice.BasicVideoPlayerDevice.md#requirements)

### Methods

- [set](endpoint_definitions_device_BasicVideoPlayerDevice.BasicVideoPlayerDevice.md#set)
- [with](endpoint_definitions_device_BasicVideoPlayerDevice.BasicVideoPlayerDevice.md#with)

## Properties

### behaviors

• **behaviors**: \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `mediaPlayback`: typeof [`MediaPlaybackServer`](../classes/behavior_definitions_media_playback_export.MediaPlaybackServer.md)  } & \{ `keypadInput`: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md)  }

#### Inherited from

Identity.behaviors

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L84)

___

### defaults

• **defaults**: [`StateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#stateof)\<\{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `mediaPlayback`: typeof [`MediaPlaybackServer`](../classes/behavior_definitions_media_playback_export.MediaPlaybackServer.md)  } & \{ `keypadInput`: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md)  }\>

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

• **name**: ``"BasicVideoPlayer"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L48)

___

### requirements

• **requirements**: typeof [`BasicVideoPlayerRequirements`](../modules/endpoint_definitions_device_BasicVideoPlayerDevice.BasicVideoPlayerRequirements.md)

#### Inherited from

Identity.requirements

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L53)

## Methods

### set

▸ **set**(`defaults`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `mediaPlayback`: typeof [`MediaPlaybackServer`](../classes/behavior_definitions_media_playback_export.MediaPlaybackServer.md)  } & \{ `keypadInput`: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md)  } ; `deviceRevision`: ``1`` = 1; `deviceType`: ``40`` = 0x28; `name`: ``"BasicVideoPlayer"`` = "BasicVideoPlayer"; `requirements`: typeof [`BasicVideoPlayerRequirements`](../modules/endpoint_definitions_device_BasicVideoPlayerDevice.BasicVideoPlayerRequirements.md) = BasicVideoPlayerRequirements }\>, \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `mediaPlayback`: typeof [`MediaPlaybackServer`](../classes/behavior_definitions_media_playback_export.MediaPlaybackServer.md)  } & \{ `keypadInput`: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md)  }\>

Define an endpoint like this one with different defaults.  Only updates values present in the input object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`InputStateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#inputstateof)\<\{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `mediaPlayback`: typeof [`MediaPlaybackServer`](../classes/behavior_definitions_media_playback_export.MediaPlaybackServer.md)  } & \{ `keypadInput`: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md)  }\> |

#### Returns

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `mediaPlayback`: typeof [`MediaPlaybackServer`](../classes/behavior_definitions_media_playback_export.MediaPlaybackServer.md)  } & \{ `keypadInput`: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md)  } ; `deviceRevision`: ``1`` = 1; `deviceType`: ``40`` = 0x28; `name`: ``"BasicVideoPlayer"`` = "BasicVideoPlayer"; `requirements`: typeof [`BasicVideoPlayerRequirements`](../modules/endpoint_definitions_device_BasicVideoPlayerDevice.BasicVideoPlayerRequirements.md) = BasicVideoPlayerRequirements }\>, \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `mediaPlayback`: typeof [`MediaPlaybackServer`](../classes/behavior_definitions_media_playback_export.MediaPlaybackServer.md)  } & \{ `keypadInput`: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md)  }\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L94)

___

### with

▸ **with**\<`BL`\>(`...behaviors`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `mediaPlayback`: typeof [`MediaPlaybackServer`](../classes/behavior_definitions_media_playback_export.MediaPlaybackServer.md)  } & \{ `keypadInput`: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md)  } ; `deviceRevision`: ``1`` = 1; `deviceType`: ``40`` = 0x28; `name`: ``"BasicVideoPlayer"`` = "BasicVideoPlayer"; `requirements`: typeof [`BasicVideoPlayerRequirements`](../modules/endpoint_definitions_device_BasicVideoPlayerDevice.BasicVideoPlayerRequirements.md) = BasicVideoPlayerRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `mediaPlayback`: typeof [`MediaPlaybackServer`](../classes/behavior_definitions_media_playback_export.MediaPlaybackServer.md)  } & \{ `keypadInput`: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md)  }, `BL`\>\>

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

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `mediaPlayback`: typeof [`MediaPlaybackServer`](../classes/behavior_definitions_media_playback_export.MediaPlaybackServer.md)  } & \{ `keypadInput`: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md)  } ; `deviceRevision`: ``1`` = 1; `deviceType`: ``40`` = 0x28; `name`: ``"BasicVideoPlayer"`` = "BasicVideoPlayer"; `requirements`: typeof [`BasicVideoPlayerRequirements`](../modules/endpoint_definitions_device_BasicVideoPlayerDevice.BasicVideoPlayerRequirements.md) = BasicVideoPlayerRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `mediaPlayback`: typeof [`MediaPlaybackServer`](../classes/behavior_definitions_media_playback_export.MediaPlaybackServer.md)  } & \{ `keypadInput`: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md)  }, `BL`\>\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:99](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L99)
