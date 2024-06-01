[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [endpoint/definitions/device/CastingVideoPlayerDevice](../../README.md) / CastingVideoPlayerRequirements

# Namespace: CastingVideoPlayerRequirements

## Variables

### AccountLoginServer

> `const` **AccountLoginServer**: *typeof* [`AccountLoginServer`](../../../../../../behavior/definitions/account-login/export/classes/AccountLoginServer.md) = `BaseAccountLoginServer`

The AccountLogin cluster is optional per the Matter specification

We provide this alias to the default implementation [AccountLoginServer](README.md#accountloginserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:141](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L141)

***

### ApplicationLauncherServer

> `const` **ApplicationLauncherServer**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithFeatures`](../../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Cluster`](../../../../../../cluster/export/namespaces/ApplicationLauncher/interfaces/Cluster.md), readonly [`"ApplicationPlatform"`]\>, *typeof* [`ApplicationLauncherServer`](../../../../../../behavior/definitions/application-launcher/export/classes/ApplicationLauncherServer.md), [`ApplicationLauncherInterface`](../../../../../../behavior/definitions/application-launcher/export/README.md#applicationlauncherinterface)\>

The ApplicationLauncher cluster is optional per the Matter specification

This version of [ApplicationLauncherServer](README.md#applicationlauncherserver) is specialized per the specification.

#### Source

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:134](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L134)

***

### AudioOutputServer

> `const` **AudioOutputServer**: *typeof* [`AudioOutputServer`](../../../../../../behavior/definitions/audio-output/export/classes/AudioOutputServer.md) = `BaseAudioOutputServer`

The AudioOutput cluster is optional per the Matter specification

We provide this alias to the default implementation [AudioOutputServer](README.md#audiooutputserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:127](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L127)

***

### ChannelServer

> `const` **ChannelServer**: *typeof* [`ChannelServer`](../../../../../../behavior/definitions/channel/export/classes/ChannelServer.md) = `BaseChannelServer`

The Channel cluster is optional per the Matter specification

We provide this alias to the default implementation [ChannelServer](README.md#channelserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:99](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L99)

***

### ContentLauncherServer

> `const` **ContentLauncherServer**: *typeof* [`ContentLauncherServer`](../../../../../../behavior/definitions/content-launcher/export/classes/ContentLauncherServer.md) = `BaseContentLauncherServer`

The ContentLauncher cluster is required by the Matter specification

We provide this alias to the default implementation [ContentLauncherServer](README.md#contentlauncherserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:85](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L85)

***

### KeypadInputServer

> `const` **KeypadInputServer**: *typeof* [`KeypadInputServer`](../../../../../../behavior/definitions/keypad-input/export/classes/KeypadInputServer.md) = `BaseKeypadInputServer`

The KeypadInput cluster is required by the Matter specification

We provide this alias to the default implementation [KeypadInputServer](README.md#keypadinputserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:78](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L78)

***

### LowPowerServer

> `const` **LowPowerServer**: *typeof* [`LowPowerServer`](../../../../../../behavior/definitions/low-power/export/namespaces/LowPowerServer/README.md) = `BaseLowPowerServer`

The LowPower cluster is optional per the Matter specification

We provide this alias to the default implementation [LowPowerServer](README.md#lowpowerserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:120](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L120)

***

### MediaInputServer

> `const` **MediaInputServer**: *typeof* [`MediaInputServer`](../../../../../../behavior/definitions/media-input/export/classes/MediaInputServer.md) = `BaseMediaInputServer`

The MediaInput cluster is optional per the Matter specification

We provide this alias to the default implementation [MediaInputServer](README.md#mediainputserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:113](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L113)

***

### MediaPlaybackServer

> `const` **MediaPlaybackServer**: *typeof* [`MediaPlaybackServer`](../../../../../../behavior/definitions/media-playback/export/classes/MediaPlaybackServer.md) = `BaseMediaPlaybackServer`

The MediaPlayback cluster is required by the Matter specification

We provide this alias to the default implementation [MediaPlaybackServer](README.md#mediaplaybackserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:71](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L71)

***

### OnOffServer

> `const` **OnOffServer**: *typeof* [`OnOffServer`](../../../../../../behavior/definitions/on-off/export/namespaces/OnOffServer/README.md) = `BaseOnOffServer`

The OnOff cluster is required by the Matter specification

We provide this alias to the default implementation [OnOffServer](README.md#onoffserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:64](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L64)

***

### TargetNavigatorServer

> `const` **TargetNavigatorServer**: *typeof* [`TargetNavigatorServer`](../../../../../../behavior/definitions/target-navigator/export/classes/TargetNavigatorServer.md) = `BaseTargetNavigatorServer`

The TargetNavigator cluster is optional per the Matter specification

We provide this alias to the default implementation [TargetNavigatorServer](README.md#targetnavigatorserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:106](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L106)

***

### WakeOnLanServer

> `const` **WakeOnLanServer**: *typeof* [`WakeOnLanServer`](../../../../../../behavior/definitions/wake-on-lan/export/classes/WakeOnLanServer.md) = `BaseWakeOnLanServer`

The WakeOnLan cluster is optional per the Matter specification

We provide this alias to the default implementation [WakeOnLanServer](README.md#wakeonlanserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:92](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L92)

***

### server

> `const` **server**: `object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

##### mandatory

> **mandatory**: `object`

##### mandatory.ContentLauncher

> **ContentLauncher**: *typeof* [`ContentLauncherServer`](../../../../../../behavior/definitions/content-launcher/export/classes/ContentLauncherServer.md) = `ContentLauncherServer`

##### mandatory.KeypadInput

> **KeypadInput**: *typeof* [`KeypadInputServer`](../../../../../../behavior/definitions/keypad-input/export/classes/KeypadInputServer.md) = `KeypadInputServer`

##### mandatory.MediaPlayback

> **MediaPlayback**: *typeof* [`MediaPlaybackServer`](../../../../../../behavior/definitions/media-playback/export/classes/MediaPlaybackServer.md) = `MediaPlaybackServer`

##### mandatory.OnOff

> **OnOff**: *typeof* [`OnOffServer`](../../../../../../behavior/definitions/on-off/export/namespaces/OnOffServer/README.md) = `OnOffServer`

##### optional

> **optional**: `object`

##### optional.AccountLogin

> **AccountLogin**: *typeof* [`AccountLoginServer`](../../../../../../behavior/definitions/account-login/export/classes/AccountLoginServer.md) = `AccountLoginServer`

##### optional.ApplicationLauncher

> **ApplicationLauncher**: [`Type`](../../../../../../behavior/cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithFeatures`](../../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Cluster`](../../../../../../cluster/export/namespaces/ApplicationLauncher/interfaces/Cluster.md), readonly [`"ApplicationPlatform"`]\>, *typeof* [`ApplicationLauncherServer`](../../../../../../behavior/definitions/application-launcher/export/classes/ApplicationLauncherServer.md), [`ApplicationLauncherInterface`](../../../../../../behavior/definitions/application-launcher/export/README.md#applicationlauncherinterface)\> = `ApplicationLauncherServer`

##### optional.AudioOutput

> **AudioOutput**: *typeof* [`AudioOutputServer`](../../../../../../behavior/definitions/audio-output/export/classes/AudioOutputServer.md) = `AudioOutputServer`

##### optional.Channel

> **Channel**: *typeof* [`ChannelServer`](../../../../../../behavior/definitions/channel/export/classes/ChannelServer.md) = `ChannelServer`

##### optional.LowPower

> **LowPower**: *typeof* [`LowPowerServer`](../../../../../../behavior/definitions/low-power/export/namespaces/LowPowerServer/README.md) = `LowPowerServer`

##### optional.MediaInput

> **MediaInput**: *typeof* [`MediaInputServer`](../../../../../../behavior/definitions/media-input/export/classes/MediaInputServer.md) = `MediaInputServer`

##### optional.TargetNavigator

> **TargetNavigator**: *typeof* [`TargetNavigatorServer`](../../../../../../behavior/definitions/target-navigator/export/classes/TargetNavigatorServer.md) = `TargetNavigatorServer`

##### optional.WakeOnLan

> **WakeOnLan**: *typeof* [`WakeOnLanServer`](../../../../../../behavior/definitions/wake-on-lan/export/classes/WakeOnLanServer.md) = `WakeOnLanServer`

#### Source

[packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts:146](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/CastingVideoPlayerDevice.ts#L146)
