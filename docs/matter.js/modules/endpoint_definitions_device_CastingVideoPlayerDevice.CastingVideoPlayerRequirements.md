[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/CastingVideoPlayerDevice](endpoint_definitions_device_CastingVideoPlayerDevice.md) / CastingVideoPlayerRequirements

# Namespace: CastingVideoPlayerRequirements

[endpoint/definitions/device/CastingVideoPlayerDevice](endpoint_definitions_device_CastingVideoPlayerDevice.md).CastingVideoPlayerRequirements

## Table of contents

### Variables

- [AccountLoginServer](endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerRequirements.md#accountloginserver)
- [ApplicationLauncherServer](endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerRequirements.md#applicationlauncherserver)
- [AudioOutputServer](endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerRequirements.md#audiooutputserver)
- [ChannelServer](endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerRequirements.md#channelserver)
- [ContentLauncherServer](endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerRequirements.md#contentlauncherserver)
- [KeypadInputServer](endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerRequirements.md#keypadinputserver)
- [LowPowerServer](endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerRequirements.md#lowpowerserver)
- [MediaInputServer](endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerRequirements.md#mediainputserver)
- [MediaPlaybackServer](endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerRequirements.md#mediaplaybackserver)
- [OnOffServer](endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerRequirements.md#onoffserver)
- [TargetNavigatorServer](endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerRequirements.md#targetnavigatorserver)
- [WakeOnLanServer](endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerRequirements.md#wakeonlanserver)
- [server](endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerRequirements.md#server)

## Variables

### AccountLoginServer

• `Const` **AccountLoginServer**: typeof [`AccountLoginServer`](../classes/behavior_definitions_account_login_export.AccountLoginServer.md) = `BaseAccountLoginServer`

The AccountLogin cluster is optional per the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:142](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L142)

___

### ApplicationLauncherServer

• `Const` **ApplicationLauncherServer**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.ApplicationLauncher.Cluster.md), readonly [``"ApplicationPlatform"``]\>, typeof [`ApplicationLauncherServer`](../classes/behavior_definitions_application_launcher_export.ApplicationLauncherServer.md), [`ApplicationLauncherInterface`](behavior_definitions_application_launcher_export.md#applicationlauncherinterface)\>

The ApplicationLauncher cluster is optional per the Matter specification

This version of [ApplicationLauncherServer](endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerRequirements.md#applicationlauncherserver) is specialized per the specification.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:135](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L135)

___

### AudioOutputServer

• `Const` **AudioOutputServer**: typeof [`AudioOutputServer`](../classes/behavior_definitions_audio_output_export.AudioOutputServer.md) = `BaseAudioOutputServer`

The AudioOutput cluster is optional per the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:128](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L128)

___

### ChannelServer

• `Const` **ChannelServer**: typeof [`ChannelServer`](../classes/behavior_definitions_channel_export.ChannelServer.md) = `BaseChannelServer`

The Channel cluster is optional per the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:100](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L100)

___

### ContentLauncherServer

• `Const` **ContentLauncherServer**: typeof [`ContentLauncherServer`](../classes/behavior_definitions_content_launcher_export.ContentLauncherServer.md) = `BaseContentLauncherServer`

The ContentLauncher cluster is required by the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:86](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L86)

___

### KeypadInputServer

• `Const` **KeypadInputServer**: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md) = `BaseKeypadInputServer`

The KeypadInput cluster is required by the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:79](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L79)

___

### LowPowerServer

• `Const` **LowPowerServer**: typeof [`LowPowerServer`](../classes/behavior_definitions_low_power_export.LowPowerServer.md) = `BaseLowPowerServer`

The LowPower cluster is optional per the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:121](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L121)

___

### MediaInputServer

• `Const` **MediaInputServer**: typeof [`MediaInputServer`](../classes/behavior_definitions_media_input_export.MediaInputServer.md) = `BaseMediaInputServer`

The MediaInput cluster is optional per the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:114](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L114)

___

### MediaPlaybackServer

• `Const` **MediaPlaybackServer**: typeof [`MediaPlaybackServer`](../classes/behavior_definitions_media_playback_export.MediaPlaybackServer.md) = `BaseMediaPlaybackServer`

The MediaPlayback cluster is required by the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:72](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L72)

___

### OnOffServer

• `Const` **OnOffServer**: typeof [`OnOffServer`](behavior_definitions_on_off_export.OnOffServer.md) = `BaseOnOffServer`

The OnOff cluster is required by the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:65](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L65)

___

### TargetNavigatorServer

• `Const` **TargetNavigatorServer**: typeof [`TargetNavigatorServer`](../classes/behavior_definitions_target_navigator_export.TargetNavigatorServer.md) = `BaseTargetNavigatorServer`

The TargetNavigator cluster is optional per the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:107](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L107)

___

### WakeOnLanServer

• `Const` **WakeOnLanServer**: typeof [`WakeOnLanServer`](../classes/behavior_definitions_wake_on_lan_export.WakeOnLanServer.md) = `BaseWakeOnLanServer`

The WakeOnLan cluster is optional per the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:93](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L93)

___

### server

• `Const` **server**: `Object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | \{ `ContentLauncher`: typeof [`ContentLauncherServer`](../classes/behavior_definitions_content_launcher_export.ContentLauncherServer.md) = ContentLauncherServer; `KeypadInput`: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md) = KeypadInputServer; `MediaPlayback`: typeof [`MediaPlaybackServer`](../classes/behavior_definitions_media_playback_export.MediaPlaybackServer.md) = MediaPlaybackServer; `OnOff`: typeof [`OnOffServer`](behavior_definitions_on_off_export.OnOffServer.md) = OnOffServer } |
| `mandatory.ContentLauncher` | typeof [`ContentLauncherServer`](../classes/behavior_definitions_content_launcher_export.ContentLauncherServer.md) |
| `mandatory.KeypadInput` | typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md) |
| `mandatory.MediaPlayback` | typeof [`MediaPlaybackServer`](../classes/behavior_definitions_media_playback_export.MediaPlaybackServer.md) |
| `mandatory.OnOff` | typeof [`OnOffServer`](behavior_definitions_on_off_export.OnOffServer.md) |
| `optional` | \{ `AccountLogin`: typeof [`AccountLoginServer`](../classes/behavior_definitions_account_login_export.AccountLoginServer.md) = AccountLoginServer; `ApplicationLauncher`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.ApplicationLauncher.Cluster.md), readonly [``"ApplicationPlatform"``]\>, typeof [`ApplicationLauncherServer`](../classes/behavior_definitions_application_launcher_export.ApplicationLauncherServer.md), [`ApplicationLauncherInterface`](behavior_definitions_application_launcher_export.md#applicationlauncherinterface)\> = ApplicationLauncherServer; `AudioOutput`: typeof [`AudioOutputServer`](../classes/behavior_definitions_audio_output_export.AudioOutputServer.md) = AudioOutputServer; `Channel`: typeof [`ChannelServer`](../classes/behavior_definitions_channel_export.ChannelServer.md) = ChannelServer; `LowPower`: typeof [`LowPowerServer`](../classes/behavior_definitions_low_power_export.LowPowerServer.md) = LowPowerServer; `MediaInput`: typeof [`MediaInputServer`](../classes/behavior_definitions_media_input_export.MediaInputServer.md) = MediaInputServer; `TargetNavigator`: typeof [`TargetNavigatorServer`](../classes/behavior_definitions_target_navigator_export.TargetNavigatorServer.md) = TargetNavigatorServer; `WakeOnLan`: typeof [`WakeOnLanServer`](../classes/behavior_definitions_wake_on_lan_export.WakeOnLanServer.md) = WakeOnLanServer } |
| `optional.AccountLogin` | typeof [`AccountLoginServer`](../classes/behavior_definitions_account_login_export.AccountLoginServer.md) |
| `optional.ApplicationLauncher` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.ApplicationLauncher.Cluster.md), readonly [``"ApplicationPlatform"``]\>, typeof [`ApplicationLauncherServer`](../classes/behavior_definitions_application_launcher_export.ApplicationLauncherServer.md), [`ApplicationLauncherInterface`](behavior_definitions_application_launcher_export.md#applicationlauncherinterface)\> |
| `optional.AudioOutput` | typeof [`AudioOutputServer`](../classes/behavior_definitions_audio_output_export.AudioOutputServer.md) |
| `optional.Channel` | typeof [`ChannelServer`](../classes/behavior_definitions_channel_export.ChannelServer.md) |
| `optional.LowPower` | typeof [`LowPowerServer`](../classes/behavior_definitions_low_power_export.LowPowerServer.md) |
| `optional.MediaInput` | typeof [`MediaInputServer`](../classes/behavior_definitions_media_input_export.MediaInputServer.md) |
| `optional.TargetNavigator` | typeof [`TargetNavigatorServer`](../classes/behavior_definitions_target_navigator_export.TargetNavigatorServer.md) |
| `optional.WakeOnLan` | typeof [`WakeOnLanServer`](../classes/behavior_definitions_wake_on_lan_export.WakeOnLanServer.md) |

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:147](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L147)
