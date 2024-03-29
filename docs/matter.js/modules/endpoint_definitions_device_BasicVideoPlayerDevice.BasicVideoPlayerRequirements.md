[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/BasicVideoPlayerDevice](endpoint_definitions_device_BasicVideoPlayerDevice.md) / BasicVideoPlayerRequirements

# Namespace: BasicVideoPlayerRequirements

[endpoint/definitions/device/BasicVideoPlayerDevice](endpoint_definitions_device_BasicVideoPlayerDevice.md).BasicVideoPlayerRequirements

## Table of contents

### Variables

- [AudioOutputServer](endpoint_definitions_device_BasicVideoPlayerDevice.BasicVideoPlayerRequirements.md#audiooutputserver)
- [ChannelServer](endpoint_definitions_device_BasicVideoPlayerDevice.BasicVideoPlayerRequirements.md#channelserver)
- [KeypadInputServer](endpoint_definitions_device_BasicVideoPlayerDevice.BasicVideoPlayerRequirements.md#keypadinputserver)
- [LowPowerServer](endpoint_definitions_device_BasicVideoPlayerDevice.BasicVideoPlayerRequirements.md#lowpowerserver)
- [MediaInputServer](endpoint_definitions_device_BasicVideoPlayerDevice.BasicVideoPlayerRequirements.md#mediainputserver)
- [MediaPlaybackServer](endpoint_definitions_device_BasicVideoPlayerDevice.BasicVideoPlayerRequirements.md#mediaplaybackserver)
- [OnOffServer](endpoint_definitions_device_BasicVideoPlayerDevice.BasicVideoPlayerRequirements.md#onoffserver)
- [TargetNavigatorServer](endpoint_definitions_device_BasicVideoPlayerDevice.BasicVideoPlayerRequirements.md#targetnavigatorserver)
- [WakeOnLanServer](endpoint_definitions_device_BasicVideoPlayerDevice.BasicVideoPlayerRequirements.md#wakeonlanserver)
- [server](endpoint_definitions_device_BasicVideoPlayerDevice.BasicVideoPlayerRequirements.md#server)

## Variables

### AudioOutputServer

• `Const` **AudioOutputServer**: typeof [`AudioOutputServer`](../classes/behavior_definitions_audio_output_export.AudioOutputServer.md) = `BaseAudioOutputServer`

The AudioOutput cluster is optional per the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts:113](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts#L113)

___

### ChannelServer

• `Const` **ChannelServer**: typeof [`ChannelServer`](../classes/behavior_definitions_channel_export.ChannelServer.md) = `BaseChannelServer`

The Channel cluster is optional per the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts:85](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts#L85)

___

### KeypadInputServer

• `Const` **KeypadInputServer**: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md) = `BaseKeypadInputServer`

The KeypadInput cluster is required by the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts:71](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts#L71)

___

### LowPowerServer

• `Const` **LowPowerServer**: typeof [`LowPowerServer`](../classes/behavior_definitions_low_power_export.LowPowerServer.md) = `BaseLowPowerServer`

The LowPower cluster is optional per the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts:106](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts#L106)

___

### MediaInputServer

• `Const` **MediaInputServer**: typeof [`MediaInputServer`](../classes/behavior_definitions_media_input_export.MediaInputServer.md) = `BaseMediaInputServer`

The MediaInput cluster is optional per the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts:99](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts#L99)

___

### MediaPlaybackServer

• `Const` **MediaPlaybackServer**: typeof [`MediaPlaybackServer`](../classes/behavior_definitions_media_playback_export.MediaPlaybackServer.md) = `BaseMediaPlaybackServer`

The MediaPlayback cluster is required by the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts:64](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts#L64)

___

### OnOffServer

• `Const` **OnOffServer**: typeof [`OnOffServer`](behavior_definitions_on_off_export.OnOffServer.md) = `BaseOnOffServer`

The OnOff cluster is required by the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts:57](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts#L57)

___

### TargetNavigatorServer

• `Const` **TargetNavigatorServer**: typeof [`TargetNavigatorServer`](../classes/behavior_definitions_target_navigator_export.TargetNavigatorServer.md) = `BaseTargetNavigatorServer`

The TargetNavigator cluster is optional per the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts:92](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts#L92)

___

### WakeOnLanServer

• `Const` **WakeOnLanServer**: typeof [`WakeOnLanServer`](../classes/behavior_definitions_wake_on_lan_export.WakeOnLanServer.md) = `BaseWakeOnLanServer`

The WakeOnLan cluster is optional per the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts:78](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts#L78)

___

### server

• `Const` **server**: `Object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | \{ `KeypadInput`: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md) = KeypadInputServer; `MediaPlayback`: typeof [`MediaPlaybackServer`](../classes/behavior_definitions_media_playback_export.MediaPlaybackServer.md) = MediaPlaybackServer; `OnOff`: typeof [`OnOffServer`](behavior_definitions_on_off_export.OnOffServer.md) = OnOffServer } |
| `mandatory.KeypadInput` | typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md) |
| `mandatory.MediaPlayback` | typeof [`MediaPlaybackServer`](../classes/behavior_definitions_media_playback_export.MediaPlaybackServer.md) |
| `mandatory.OnOff` | typeof [`OnOffServer`](behavior_definitions_on_off_export.OnOffServer.md) |
| `optional` | \{ `AudioOutput`: typeof [`AudioOutputServer`](../classes/behavior_definitions_audio_output_export.AudioOutputServer.md) = AudioOutputServer; `Channel`: typeof [`ChannelServer`](../classes/behavior_definitions_channel_export.ChannelServer.md) = ChannelServer; `LowPower`: typeof [`LowPowerServer`](../classes/behavior_definitions_low_power_export.LowPowerServer.md) = LowPowerServer; `MediaInput`: typeof [`MediaInputServer`](../classes/behavior_definitions_media_input_export.MediaInputServer.md) = MediaInputServer; `TargetNavigator`: typeof [`TargetNavigatorServer`](../classes/behavior_definitions_target_navigator_export.TargetNavigatorServer.md) = TargetNavigatorServer; `WakeOnLan`: typeof [`WakeOnLanServer`](../classes/behavior_definitions_wake_on_lan_export.WakeOnLanServer.md) = WakeOnLanServer } |
| `optional.AudioOutput` | typeof [`AudioOutputServer`](../classes/behavior_definitions_audio_output_export.AudioOutputServer.md) |
| `optional.Channel` | typeof [`ChannelServer`](../classes/behavior_definitions_channel_export.ChannelServer.md) |
| `optional.LowPower` | typeof [`LowPowerServer`](../classes/behavior_definitions_low_power_export.LowPowerServer.md) |
| `optional.MediaInput` | typeof [`MediaInputServer`](../classes/behavior_definitions_media_input_export.MediaInputServer.md) |
| `optional.TargetNavigator` | typeof [`TargetNavigatorServer`](../classes/behavior_definitions_target_navigator_export.TargetNavigatorServer.md) |
| `optional.WakeOnLan` | typeof [`WakeOnLanServer`](../classes/behavior_definitions_wake_on_lan_export.WakeOnLanServer.md) |

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts:118](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts#L118)
