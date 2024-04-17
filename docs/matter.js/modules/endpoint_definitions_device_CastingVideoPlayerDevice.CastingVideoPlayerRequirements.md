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

We provide this alias to the default implementation [AccountLoginServer](endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerRequirements.md#accountloginserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:141](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L141)

___

### ApplicationLauncherServer

• `Const` **ApplicationLauncherServer**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.ApplicationLauncher.Cluster.md), readonly [``"ApplicationPlatform"``]\>, typeof [`ApplicationLauncherServer`](../classes/behavior_definitions_application_launcher_export.ApplicationLauncherServer.md), [`ApplicationLauncherInterface`](behavior_definitions_application_launcher_export.md#applicationlauncherinterface)\>

The ApplicationLauncher cluster is optional per the Matter specification

This version of [ApplicationLauncherServer](endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerRequirements.md#applicationlauncherserver) is specialized per the specification.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:134](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L134)

___

### AudioOutputServer

• `Const` **AudioOutputServer**: typeof [`AudioOutputServer`](../classes/behavior_definitions_audio_output_export.AudioOutputServer.md) = `BaseAudioOutputServer`

The AudioOutput cluster is optional per the Matter specification

We provide this alias to the default implementation [AudioOutputServer](endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerRequirements.md#audiooutputserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:127](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L127)

___

### ChannelServer

• `Const` **ChannelServer**: typeof [`ChannelServer`](../classes/behavior_definitions_channel_export.ChannelServer.md) = `BaseChannelServer`

The Channel cluster is optional per the Matter specification

We provide this alias to the default implementation [ChannelServer](endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerRequirements.md#channelserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:99](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L99)

___

### ContentLauncherServer

• `Const` **ContentLauncherServer**: typeof [`ContentLauncherServer`](../classes/behavior_definitions_content_launcher_export.ContentLauncherServer.md) = `BaseContentLauncherServer`

The ContentLauncher cluster is required by the Matter specification

We provide this alias to the default implementation [ContentLauncherServer](endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerRequirements.md#contentlauncherserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:85](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L85)

___

### KeypadInputServer

• `Const` **KeypadInputServer**: typeof [`KeypadInputServer`](../classes/behavior_definitions_keypad_input_export.KeypadInputServer.md) = `BaseKeypadInputServer`

The KeypadInput cluster is required by the Matter specification

We provide this alias to the default implementation [KeypadInputServer](endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerRequirements.md#keypadinputserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:78](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L78)

___

### LowPowerServer

• `Const` **LowPowerServer**: typeof [`LowPowerServer`](../classes/behavior_definitions_low_power_export.LowPowerServer.md) = `BaseLowPowerServer`

The LowPower cluster is optional per the Matter specification

We provide this alias to the default implementation [LowPowerServer](endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerRequirements.md#lowpowerserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:120](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L120)

___

### MediaInputServer

• `Const` **MediaInputServer**: typeof [`MediaInputServer`](../classes/behavior_definitions_media_input_export.MediaInputServer.md) = `BaseMediaInputServer`

The MediaInput cluster is optional per the Matter specification

We provide this alias to the default implementation [MediaInputServer](endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerRequirements.md#mediainputserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:113](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L113)

___

### MediaPlaybackServer

• `Const` **MediaPlaybackServer**: typeof [`MediaPlaybackServer`](../classes/behavior_definitions_media_playback_export.MediaPlaybackServer.md) = `BaseMediaPlaybackServer`

The MediaPlayback cluster is required by the Matter specification

We provide this alias to the default implementation [MediaPlaybackServer](endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerRequirements.md#mediaplaybackserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:71](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L71)

___

### OnOffServer

• `Const` **OnOffServer**: typeof [`OnOffServer`](behavior_definitions_on_off_export.OnOffServer.md) = `BaseOnOffServer`

The OnOff cluster is required by the Matter specification

We provide this alias to the default implementation [OnOffServer](endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerRequirements.md#onoffserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:64](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L64)

___

### TargetNavigatorServer

• `Const` **TargetNavigatorServer**: typeof [`TargetNavigatorServer`](../classes/behavior_definitions_target_navigator_export.TargetNavigatorServer.md) = `BaseTargetNavigatorServer`

The TargetNavigator cluster is optional per the Matter specification

We provide this alias to the default implementation [TargetNavigatorServer](endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerRequirements.md#targetnavigatorserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:106](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L106)

___

### WakeOnLanServer

• `Const` **WakeOnLanServer**: typeof [`WakeOnLanServer`](../classes/behavior_definitions_wake_on_lan_export.WakeOnLanServer.md) = `BaseWakeOnLanServer`

The WakeOnLan cluster is optional per the Matter specification

We provide this alias to the default implementation [WakeOnLanServer](endpoint_definitions_device_CastingVideoPlayerDevice.CastingVideoPlayerRequirements.md#wakeonlanserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:92](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L92)

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

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:146](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L146)
