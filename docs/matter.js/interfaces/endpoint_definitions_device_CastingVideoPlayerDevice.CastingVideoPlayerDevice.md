[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/CastingVideoPlayerDevice](../modules/endpoint_definitions_device_CastingVideoPlayerDevice.md) / CastingVideoPlayerDevice

# Interface: CastingVideoPlayerDevice

[endpoint/definitions/device/CastingVideoPlayerDevice](../modules/endpoint_definitions_device_CastingVideoPlayerDevice.md).CastingVideoPlayerDevice

This defines conformance to the Casting Video Player device type.

A Video Player (either Basic or Casting) represents a device that is able to play media to a physical output or to a
display screen which is part of the device.

A Casting Video Player has basic controls for playback (play, pause, etc.) and keypad input (up, down, number
input), and is able to launch content.

For example, a Casting Video Player can be a smart TV device, a TV Set Top Box, or a content streaming device that
provides input to another device like a TV or computer monitor.

Please see Video Player Architecture for additional Casting Video Player requirements relating to Video Player
device endpoint composition, commissioning, feature representation in clusters, and UI context.

**`See`**

MatterSpecification.v11.Device § 10.3

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`CastingVideoPlayerDeviceDefinition`](../modules/endpoint_definitions_device_CastingVideoPlayerDevice.md#castingvideoplayerdevicedefinition)\>

  ↳ **`CastingVideoPlayerDevice`**

## Table of contents

### Properties

- [behaviors](endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerDevice.md#behaviors)
- [defaults](endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerDevice.md#defaults)
- [deviceClass](endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerDevice.md#deviceclass)
- [deviceRevision](endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerDevice.md#devicerevision)
- [deviceType](endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerDevice.md#devicetype)
- [name](endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerDevice.md#name)
- [requirements](endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerDevice.md#requirements)

### Methods

- [set](endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerDevice.md#set)
- [with](endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerDevice.md#with)

## Properties

### behaviors

• **behaviors**: \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `mediaPlayback`: typeof [`MediaPlaybackServer`](../classes/behavior_definitions_media_playback_export.MediaPlaybackServer.md)  } & \{ `keypadInput`: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md)  } & \{ `contentLauncher`: typeof [`ContentLauncherServer`](../classes/behavior_definitions_content_launcher_export.ContentLauncherServer.md)  }

#### Inherited from

Identity.behaviors

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L84)

___

### defaults

• **defaults**: [`StateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#stateof)\<\{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `mediaPlayback`: typeof [`MediaPlaybackServer`](../classes/behavior_definitions_media_playback_export.MediaPlaybackServer.md)  } & \{ `keypadInput`: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md)  } & \{ `contentLauncher`: typeof [`ContentLauncherServer`](../classes/behavior_definitions_content_launcher_export.ContentLauncherServer.md)  }\>

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

• **name**: ``"CastingVideoPlayer"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L48)

___

### requirements

• **requirements**: typeof [`CastingVideoPlayerRequirements`](../modules/endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerRequirements.md)

#### Inherited from

Identity.requirements

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L53)

## Methods

### set

▸ **set**(`defaults`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `mediaPlayback`: typeof [`MediaPlaybackServer`](../classes/behavior_definitions_media_playback_export.MediaPlaybackServer.md)  } & \{ `keypadInput`: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md)  } & \{ `contentLauncher`: typeof [`ContentLauncherServer`](../classes/behavior_definitions_content_launcher_export.ContentLauncherServer.md)  } ; `deviceRevision`: ``1`` = 1; `deviceType`: ``35`` = 0x23; `name`: ``"CastingVideoPlayer"`` = "CastingVideoPlayer"; `requirements`: typeof [`CastingVideoPlayerRequirements`](../modules/endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerRequirements.md) = CastingVideoPlayerRequirements }\>, \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `mediaPlayback`: typeof [`MediaPlaybackServer`](../classes/behavior_definitions_media_playback_export.MediaPlaybackServer.md)  } & \{ `keypadInput`: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md)  } & \{ `contentLauncher`: typeof [`ContentLauncherServer`](../classes/behavior_definitions_content_launcher_export.ContentLauncherServer.md)  }\>

Define an endpoint like this one with different defaults.  Only updates values present in the input object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`InputStateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#inputstateof)\<\{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `mediaPlayback`: typeof [`MediaPlaybackServer`](../classes/behavior_definitions_media_playback_export.MediaPlaybackServer.md)  } & \{ `keypadInput`: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md)  } & \{ `contentLauncher`: typeof [`ContentLauncherServer`](../classes/behavior_definitions_content_launcher_export.ContentLauncherServer.md)  }\> |

#### Returns

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `mediaPlayback`: typeof [`MediaPlaybackServer`](../classes/behavior_definitions_media_playback_export.MediaPlaybackServer.md)  } & \{ `keypadInput`: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md)  } & \{ `contentLauncher`: typeof [`ContentLauncherServer`](../classes/behavior_definitions_content_launcher_export.ContentLauncherServer.md)  } ; `deviceRevision`: ``1`` = 1; `deviceType`: ``35`` = 0x23; `name`: ``"CastingVideoPlayer"`` = "CastingVideoPlayer"; `requirements`: typeof [`CastingVideoPlayerRequirements`](../modules/endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerRequirements.md) = CastingVideoPlayerRequirements }\>, \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `mediaPlayback`: typeof [`MediaPlaybackServer`](../classes/behavior_definitions_media_playback_export.MediaPlaybackServer.md)  } & \{ `keypadInput`: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md)  } & \{ `contentLauncher`: typeof [`ContentLauncherServer`](../classes/behavior_definitions_content_launcher_export.ContentLauncherServer.md)  }\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L94)

___

### with

▸ **with**\<`BL`\>(`...behaviors`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `mediaPlayback`: typeof [`MediaPlaybackServer`](../classes/behavior_definitions_media_playback_export.MediaPlaybackServer.md)  } & \{ `keypadInput`: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md)  } & \{ `contentLauncher`: typeof [`ContentLauncherServer`](../classes/behavior_definitions_content_launcher_export.ContentLauncherServer.md)  } ; `deviceRevision`: ``1`` = 1; `deviceType`: ``35`` = 0x23; `name`: ``"CastingVideoPlayer"`` = "CastingVideoPlayer"; `requirements`: typeof [`CastingVideoPlayerRequirements`](../modules/endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerRequirements.md) = CastingVideoPlayerRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `mediaPlayback`: typeof [`MediaPlaybackServer`](../classes/behavior_definitions_media_playback_export.MediaPlaybackServer.md)  } & \{ `keypadInput`: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md)  } & \{ `contentLauncher`: typeof [`ContentLauncherServer`](../classes/behavior_definitions_content_launcher_export.ContentLauncherServer.md)  }, `BL`\>\>

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

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `mediaPlayback`: typeof [`MediaPlaybackServer`](../classes/behavior_definitions_media_playback_export.MediaPlaybackServer.md)  } & \{ `keypadInput`: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md)  } & \{ `contentLauncher`: typeof [`ContentLauncherServer`](../classes/behavior_definitions_content_launcher_export.ContentLauncherServer.md)  } ; `deviceRevision`: ``1`` = 1; `deviceType`: ``35`` = 0x23; `name`: ``"CastingVideoPlayer"`` = "CastingVideoPlayer"; `requirements`: typeof [`CastingVideoPlayerRequirements`](../modules/endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerRequirements.md) = CastingVideoPlayerRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `onOff`: typeof [`OnOffServer`](../modules/behavior_definitions_on_off_export.OnOffServer.md)  } & \{ `mediaPlayback`: typeof [`MediaPlaybackServer`](../classes/behavior_definitions_media_playback_export.MediaPlaybackServer.md)  } & \{ `keypadInput`: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md)  } & \{ `contentLauncher`: typeof [`ContentLauncherServer`](../classes/behavior_definitions_content_launcher_export.ContentLauncherServer.md)  }, `BL`\>\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:99](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L99)
