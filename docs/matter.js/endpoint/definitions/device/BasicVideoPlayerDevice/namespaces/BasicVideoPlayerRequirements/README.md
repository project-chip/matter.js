[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [endpoint/definitions/device/BasicVideoPlayerDevice](../../README.md) / BasicVideoPlayerRequirements

# Namespace: BasicVideoPlayerRequirements

## Variables

### AudioOutputServer

> `const` **AudioOutputServer**: *typeof* [`AudioOutputServer`](../../../../../../behavior/definitions/audio-output/export/classes/AudioOutputServer.md) = `BaseAudioOutputServer`

The AudioOutput cluster is optional per the Matter specification

We provide this alias to the default implementation [AudioOutputServer](README.md#audiooutputserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts:112](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts#L112)

***

### ChannelServer

> `const` **ChannelServer**: *typeof* [`ChannelServer`](../../../../../../behavior/definitions/channel/export/classes/ChannelServer.md) = `BaseChannelServer`

The Channel cluster is optional per the Matter specification

We provide this alias to the default implementation [ChannelServer](README.md#channelserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts:84](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts#L84)

***

### KeypadInputServer

> `const` **KeypadInputServer**: *typeof* [`KeypadInputServer`](../../../../../../behavior/definitions/keypad-input/export/classes/KeypadInputServer.md) = `BaseKeypadInputServer`

The KeypadInput cluster is required by the Matter specification

We provide this alias to the default implementation [KeypadInputServer](README.md#keypadinputserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts:70](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts#L70)

***

### LowPowerServer

> `const` **LowPowerServer**: *typeof* [`LowPowerServer`](../../../../../../behavior/definitions/low-power/export/namespaces/LowPowerServer/README.md) = `BaseLowPowerServer`

The LowPower cluster is optional per the Matter specification

We provide this alias to the default implementation [LowPowerServer](README.md#lowpowerserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts:105](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts#L105)

***

### MediaInputServer

> `const` **MediaInputServer**: *typeof* [`MediaInputServer`](../../../../../../behavior/definitions/media-input/export/classes/MediaInputServer.md) = `BaseMediaInputServer`

The MediaInput cluster is optional per the Matter specification

We provide this alias to the default implementation [MediaInputServer](README.md#mediainputserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts:98](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts#L98)

***

### MediaPlaybackServer

> `const` **MediaPlaybackServer**: *typeof* [`MediaPlaybackServer`](../../../../../../behavior/definitions/media-playback/export/classes/MediaPlaybackServer.md) = `BaseMediaPlaybackServer`

The MediaPlayback cluster is required by the Matter specification

We provide this alias to the default implementation [MediaPlaybackServer](README.md#mediaplaybackserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts:63](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts#L63)

***

### OnOffServer

> `const` **OnOffServer**: *typeof* [`OnOffServer`](../../../../../../behavior/definitions/on-off/export/namespaces/OnOffServer/README.md) = `BaseOnOffServer`

The OnOff cluster is required by the Matter specification

We provide this alias to the default implementation [OnOffServer](README.md#onoffserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts:56](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts#L56)

***

### TargetNavigatorServer

> `const` **TargetNavigatorServer**: *typeof* [`TargetNavigatorServer`](../../../../../../behavior/definitions/target-navigator/export/classes/TargetNavigatorServer.md) = `BaseTargetNavigatorServer`

The TargetNavigator cluster is optional per the Matter specification

We provide this alias to the default implementation [TargetNavigatorServer](README.md#targetnavigatorserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts:91](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts#L91)

***

### WakeOnLanServer

> `const` **WakeOnLanServer**: *typeof* [`WakeOnLanServer`](../../../../../../behavior/definitions/wake-on-lan/export/classes/WakeOnLanServer.md) = `BaseWakeOnLanServer`

The WakeOnLan cluster is optional per the Matter specification

We provide this alias to the default implementation [WakeOnLanServer](README.md#wakeonlanserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts:77](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts#L77)

***

### server

> `const` **server**: `object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

##### mandatory

> **mandatory**: `object`

##### mandatory.KeypadInput

> **KeypadInput**: *typeof* [`KeypadInputServer`](../../../../../../behavior/definitions/keypad-input/export/classes/KeypadInputServer.md) = `KeypadInputServer`

##### mandatory.MediaPlayback

> **MediaPlayback**: *typeof* [`MediaPlaybackServer`](../../../../../../behavior/definitions/media-playback/export/classes/MediaPlaybackServer.md) = `MediaPlaybackServer`

##### mandatory.OnOff

> **OnOff**: *typeof* [`OnOffServer`](../../../../../../behavior/definitions/on-off/export/namespaces/OnOffServer/README.md) = `OnOffServer`

##### optional

> **optional**: `object`

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

[packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts:117](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/BasicVideoPlayerDevice.ts#L117)
