[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/device/VideoRemoteControlDevice](endpoint_definitions_device_VideoRemoteControlDevice.md) / VideoRemoteControlRequirements

# Namespace: VideoRemoteControlRequirements

[endpoint/definitions/device/VideoRemoteControlDevice](endpoint_definitions_device_VideoRemoteControlDevice.md).VideoRemoteControlRequirements

## Table of contents

### Variables

- [AccountLoginBehavior](endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlRequirements.md#accountloginbehavior)
- [ApplicationLauncherBehavior](endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlRequirements.md#applicationlauncherbehavior)
- [AudioOutputBehavior](endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlRequirements.md#audiooutputbehavior)
- [ChannelBehavior](endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlRequirements.md#channelbehavior)
- [ContentLauncherBehavior](endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlRequirements.md#contentlauncherbehavior)
- [KeypadInputBehavior](endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlRequirements.md#keypadinputbehavior)
- [LevelControlBehavior](endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlRequirements.md#levelcontrolbehavior)
- [LowPowerBehavior](endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlRequirements.md#lowpowerbehavior)
- [MediaInputBehavior](endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlRequirements.md#mediainputbehavior)
- [MediaPlaybackBehavior](endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlRequirements.md#mediaplaybackbehavior)
- [OnOffBehavior](endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlRequirements.md#onoffbehavior)
- [TargetNavigatorBehavior](endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlRequirements.md#targetnavigatorbehavior)
- [WakeOnLanBehavior](endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlRequirements.md#wakeonlanbehavior)
- [client](endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlRequirements.md#client)

## Variables

### AccountLoginBehavior

• `Const` **AccountLoginBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.AccountLogin.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`AccountLoginInterface`](behavior_definitions_account_login_export.md#accountlogininterface)\>, [`AccountLoginInterface`](behavior_definitions_account_login_export.md#accountlogininterface)\> = `BaseAccountLoginBehavior`

The AccountLogin cluster is optional per the Matter specification

We provide this alias to the default implementation [AccountLoginBehavior](endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlRequirements.md#accountloginbehavior) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/VideoRemoteControlDevice.ts:144](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/VideoRemoteControlDevice.ts#L144)

___

### ApplicationLauncherBehavior

• `Const` **ApplicationLauncherBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.ApplicationLauncher.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`ApplicationLauncherInterface`](behavior_definitions_application_launcher_export.md#applicationlauncherinterface)\>, [`ApplicationLauncherInterface`](behavior_definitions_application_launcher_export.md#applicationlauncherinterface)\> = `BaseApplicationLauncherBehavior`

The ApplicationLauncher cluster is optional per the Matter specification

We provide this alias to the default implementation [ApplicationLauncherBehavior](endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlRequirements.md#applicationlauncherbehavior) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/VideoRemoteControlDevice.ts:137](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/VideoRemoteControlDevice.ts#L137)

___

### AudioOutputBehavior

• `Const` **AudioOutputBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.AudioOutput.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`AudioOutputInterface`](behavior_definitions_audio_output_export.md#audiooutputinterface)\>, [`AudioOutputInterface`](behavior_definitions_audio_output_export.md#audiooutputinterface)\> = `BaseAudioOutputBehavior`

The AudioOutput cluster is optional per the Matter specification

We provide this alias to the default implementation [AudioOutputBehavior](endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlRequirements.md#audiooutputbehavior) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/VideoRemoteControlDevice.ts:130](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/VideoRemoteControlDevice.ts#L130)

___

### ChannelBehavior

• `Const` **ChannelBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.Channel.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`ChannelInterface`](behavior_definitions_channel_export.md#channelinterface)\>, [`ChannelInterface`](behavior_definitions_channel_export.md#channelinterface)\> = `BaseChannelBehavior`

The Channel cluster is optional per the Matter specification

We provide this alias to the default implementation [ChannelBehavior](endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlRequirements.md#channelbehavior) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/VideoRemoteControlDevice.ts:95](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/VideoRemoteControlDevice.ts#L95)

___

### ContentLauncherBehavior

• `Const` **ContentLauncherBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.ContentLauncher.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`ContentLauncherInterface`](behavior_definitions_content_launcher_export.md#contentlauncherinterface)\>, [`ContentLauncherInterface`](behavior_definitions_content_launcher_export.md#contentlauncherinterface)\> = `BaseContentLauncherBehavior`

The ContentLauncher cluster is optional per the Matter specification

We provide this alias to the default implementation [ContentLauncherBehavior](endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlRequirements.md#contentlauncherbehavior) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/VideoRemoteControlDevice.ts:123](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/VideoRemoteControlDevice.ts#L123)

___

### KeypadInputBehavior

• `Const` **KeypadInputBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.KeypadInput.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`KeypadInputInterface`](behavior_definitions_keypad_input_export.md#keypadinputinterface)\>, [`KeypadInputInterface`](behavior_definitions_keypad_input_export.md#keypadinputinterface)\> = `BaseKeypadInputBehavior`

The KeypadInput cluster is required by the Matter specification

We provide this alias to the default implementation [KeypadInputBehavior](endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlRequirements.md#keypadinputbehavior) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/VideoRemoteControlDevice.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/VideoRemoteControlDevice.ts#L74)

___

### LevelControlBehavior

• `Const` **LevelControlBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`LevelControlInterface`](behavior_definitions_level_control_export.md#levelcontrolinterface)\>, [`LevelControlInterface`](behavior_definitions_level_control_export.md#levelcontrolinterface)\> = `BaseLevelControlBehavior`

The LevelControl cluster is optional per the Matter specification

We provide this alias to the default implementation [LevelControlBehavior](endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlRequirements.md#levelcontrolbehavior) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/VideoRemoteControlDevice.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/VideoRemoteControlDevice.ts#L81)

___

### LowPowerBehavior

• `Const` **LowPowerBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.LowPower.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`LowPowerInterface`](behavior_definitions_low_power_export.md#lowpowerinterface)\>, [`LowPowerInterface`](behavior_definitions_low_power_export.md#lowpowerinterface)\> = `BaseLowPowerBehavior`

The LowPower cluster is optional per the Matter specification

We provide this alias to the default implementation [LowPowerBehavior](endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlRequirements.md#lowpowerbehavior) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/VideoRemoteControlDevice.ts:116](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/VideoRemoteControlDevice.ts#L116)

___

### MediaInputBehavior

• `Const` **MediaInputBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.MediaInput.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`MediaInputInterface`](behavior_definitions_media_input_export.md#mediainputinterface)\>, [`MediaInputInterface`](behavior_definitions_media_input_export.md#mediainputinterface)\> = `BaseMediaInputBehavior`

The MediaInput cluster is optional per the Matter specification

We provide this alias to the default implementation [MediaInputBehavior](endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlRequirements.md#mediainputbehavior) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/VideoRemoteControlDevice.ts:109](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/VideoRemoteControlDevice.ts#L109)

___

### MediaPlaybackBehavior

• `Const` **MediaPlaybackBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.MediaPlayback.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`MediaPlaybackInterface`](behavior_definitions_media_playback_export.md#mediaplaybackinterface)\>, [`MediaPlaybackInterface`](behavior_definitions_media_playback_export.md#mediaplaybackinterface)\> = `BaseMediaPlaybackBehavior`

The MediaPlayback cluster is required by the Matter specification

We provide this alias to the default implementation [MediaPlaybackBehavior](endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlRequirements.md#mediaplaybackbehavior) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/VideoRemoteControlDevice.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/VideoRemoteControlDevice.ts#L67)

___

### OnOffBehavior

• `Const` **OnOffBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.OnOff.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`OnOffInterface`](behavior_definitions_on_off_export.md#onoffinterface)\>, [`OnOffInterface`](behavior_definitions_on_off_export.md#onoffinterface)\> = `BaseOnOffBehavior`

The OnOff cluster is required by the Matter specification

We provide this alias to the default implementation [OnOffBehavior](endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlRequirements.md#onoffbehavior) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/VideoRemoteControlDevice.ts:60](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/VideoRemoteControlDevice.ts#L60)

___

### TargetNavigatorBehavior

• `Const` **TargetNavigatorBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.TargetNavigator.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`TargetNavigatorInterface`](behavior_definitions_target_navigator_export.md#targetnavigatorinterface)\>, [`TargetNavigatorInterface`](behavior_definitions_target_navigator_export.md#targetnavigatorinterface)\> = `BaseTargetNavigatorBehavior`

The TargetNavigator cluster is optional per the Matter specification

We provide this alias to the default implementation [TargetNavigatorBehavior](endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlRequirements.md#targetnavigatorbehavior) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/VideoRemoteControlDevice.ts:102](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/VideoRemoteControlDevice.ts#L102)

___

### WakeOnLanBehavior

• `Const` **WakeOnLanBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.WakeOnLan.Cluster.md), typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\> = `BaseWakeOnLanBehavior`

The WakeOnLan cluster is optional per the Matter specification

We provide this alias to the default implementation [WakeOnLanBehavior](endpoint_definitions_device_VideoRemoteControlDevice.VideoRemoteControlRequirements.md#wakeonlanbehavior) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/VideoRemoteControlDevice.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/VideoRemoteControlDevice.ts#L88)

___

### client

• `Const` **client**: `Object`

A definition for each client cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | \{ `KeypadInput`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.KeypadInput.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`KeypadInputInterface`](behavior_definitions_keypad_input_export.md#keypadinputinterface)\>, [`KeypadInputInterface`](behavior_definitions_keypad_input_export.md#keypadinputinterface)\> = KeypadInputBehavior; `MediaPlayback`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.MediaPlayback.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`MediaPlaybackInterface`](behavior_definitions_media_playback_export.md#mediaplaybackinterface)\>, [`MediaPlaybackInterface`](behavior_definitions_media_playback_export.md#mediaplaybackinterface)\> = MediaPlaybackBehavior; `OnOff`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.OnOff.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`OnOffInterface`](behavior_definitions_on_off_export.md#onoffinterface)\>, [`OnOffInterface`](behavior_definitions_on_off_export.md#onoffinterface)\> = OnOffBehavior } |
| `mandatory.KeypadInput` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.KeypadInput.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`KeypadInputInterface`](behavior_definitions_keypad_input_export.md#keypadinputinterface)\>, [`KeypadInputInterface`](behavior_definitions_keypad_input_export.md#keypadinputinterface)\> |
| `mandatory.MediaPlayback` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.MediaPlayback.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`MediaPlaybackInterface`](behavior_definitions_media_playback_export.md#mediaplaybackinterface)\>, [`MediaPlaybackInterface`](behavior_definitions_media_playback_export.md#mediaplaybackinterface)\> |
| `mandatory.OnOff` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.OnOff.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`OnOffInterface`](behavior_definitions_on_off_export.md#onoffinterface)\>, [`OnOffInterface`](behavior_definitions_on_off_export.md#onoffinterface)\> |
| `optional` | \{ `AccountLogin`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.AccountLogin.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`AccountLoginInterface`](behavior_definitions_account_login_export.md#accountlogininterface)\>, [`AccountLoginInterface`](behavior_definitions_account_login_export.md#accountlogininterface)\> = AccountLoginBehavior; `ApplicationLauncher`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.ApplicationLauncher.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`ApplicationLauncherInterface`](behavior_definitions_application_launcher_export.md#applicationlauncherinterface)\>, [`ApplicationLauncherInterface`](behavior_definitions_application_launcher_export.md#applicationlauncherinterface)\> = ApplicationLauncherBehavior; `AudioOutput`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.AudioOutput.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`AudioOutputInterface`](behavior_definitions_audio_output_export.md#audiooutputinterface)\>, [`AudioOutputInterface`](behavior_definitions_audio_output_export.md#audiooutputinterface)\> = AudioOutputBehavior; `Channel`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.Channel.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`ChannelInterface`](behavior_definitions_channel_export.md#channelinterface)\>, [`ChannelInterface`](behavior_definitions_channel_export.md#channelinterface)\> = ChannelBehavior; `ContentLauncher`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.ContentLauncher.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`ContentLauncherInterface`](behavior_definitions_content_launcher_export.md#contentlauncherinterface)\>, [`ContentLauncherInterface`](behavior_definitions_content_launcher_export.md#contentlauncherinterface)\> = ContentLauncherBehavior; `LevelControl`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`LevelControlInterface`](behavior_definitions_level_control_export.md#levelcontrolinterface)\>, [`LevelControlInterface`](behavior_definitions_level_control_export.md#levelcontrolinterface)\> = LevelControlBehavior; `LowPower`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.LowPower.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`LowPowerInterface`](behavior_definitions_low_power_export.md#lowpowerinterface)\>, [`LowPowerInterface`](behavior_definitions_low_power_export.md#lowpowerinterface)\> = LowPowerBehavior; `MediaInput`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.MediaInput.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`MediaInputInterface`](behavior_definitions_media_input_export.md#mediainputinterface)\>, [`MediaInputInterface`](behavior_definitions_media_input_export.md#mediainputinterface)\> = MediaInputBehavior; `TargetNavigator`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.TargetNavigator.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`TargetNavigatorInterface`](behavior_definitions_target_navigator_export.md#targetnavigatorinterface)\>, [`TargetNavigatorInterface`](behavior_definitions_target_navigator_export.md#targetnavigatorinterface)\> = TargetNavigatorBehavior; `WakeOnLan`: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.WakeOnLan.Cluster.md), typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\> = WakeOnLanBehavior } |
| `optional.AccountLogin` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.AccountLogin.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`AccountLoginInterface`](behavior_definitions_account_login_export.md#accountlogininterface)\>, [`AccountLoginInterface`](behavior_definitions_account_login_export.md#accountlogininterface)\> |
| `optional.ApplicationLauncher` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.ApplicationLauncher.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`ApplicationLauncherInterface`](behavior_definitions_application_launcher_export.md#applicationlauncherinterface)\>, [`ApplicationLauncherInterface`](behavior_definitions_application_launcher_export.md#applicationlauncherinterface)\> |
| `optional.AudioOutput` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.AudioOutput.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`AudioOutputInterface`](behavior_definitions_audio_output_export.md#audiooutputinterface)\>, [`AudioOutputInterface`](behavior_definitions_audio_output_export.md#audiooutputinterface)\> |
| `optional.Channel` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.Channel.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`ChannelInterface`](behavior_definitions_channel_export.md#channelinterface)\>, [`ChannelInterface`](behavior_definitions_channel_export.md#channelinterface)\> |
| `optional.ContentLauncher` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.ContentLauncher.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`ContentLauncherInterface`](behavior_definitions_content_launcher_export.md#contentlauncherinterface)\>, [`ContentLauncherInterface`](behavior_definitions_content_launcher_export.md#contentlauncherinterface)\> |
| `optional.LevelControl` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.LevelControl.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`LevelControlInterface`](behavior_definitions_level_control_export.md#levelcontrolinterface)\>, [`LevelControlInterface`](behavior_definitions_level_control_export.md#levelcontrolinterface)\> |
| `optional.LowPower` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.LowPower.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`LowPowerInterface`](behavior_definitions_low_power_export.md#lowpowerinterface)\>, [`LowPowerInterface`](behavior_definitions_low_power_export.md#lowpowerinterface)\> |
| `optional.MediaInput` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.MediaInput.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`MediaInputInterface`](behavior_definitions_media_input_export.md#mediainputinterface)\>, [`MediaInputInterface`](behavior_definitions_media_input_export.md#mediainputinterface)\> |
| `optional.TargetNavigator` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.TargetNavigator.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`TargetNavigatorInterface`](behavior_definitions_target_navigator_export.md#targetnavigatorinterface)\>, [`TargetNavigatorInterface`](behavior_definitions_target_navigator_export.md#targetnavigatorinterface)\> |
| `optional.WakeOnLan` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.WakeOnLan.Cluster.md), typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\> |

#### Defined in

[packages/matter.js/src/endpoint/definitions/device/VideoRemoteControlDevice.ts:149](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/device/VideoRemoteControlDevice.ts#L149)
