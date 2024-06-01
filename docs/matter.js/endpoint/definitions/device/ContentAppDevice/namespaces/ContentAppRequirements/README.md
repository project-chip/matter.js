[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [endpoint/definitions/device/ContentAppDevice](../../README.md) / ContentAppRequirements

# Namespace: ContentAppRequirements

## Variables

### AccountLoginServer

> `const` **AccountLoginServer**: *typeof* [`AccountLoginServer`](../../../../../../behavior/definitions/account-login/export/classes/AccountLoginServer.md) = `BaseAccountLoginServer`

The AccountLogin cluster is optional per the Matter specification

We provide this alias to the default implementation [AccountLoginServer](README.md#accountloginserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/ContentAppDevice.ts:100](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/ContentAppDevice.ts#L100)

***

### ApplicationBasicServer

> `const` **ApplicationBasicServer**: *typeof* [`ApplicationBasicServer`](../../../../../../behavior/definitions/application-basic/export/classes/ApplicationBasicServer.md) = `BaseApplicationBasicServer`

The ApplicationBasic cluster is required by the Matter specification

We provide this alias to the default implementation [ApplicationBasicServer](README.md#applicationbasicserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/ContentAppDevice.ts:65](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/ContentAppDevice.ts#L65)

***

### ApplicationLauncherServer

> `const` **ApplicationLauncherServer**: *typeof* [`ApplicationLauncherServer`](../../../../../../behavior/definitions/application-launcher/export/classes/ApplicationLauncherServer.md) = `BaseApplicationLauncherServer`

The ApplicationLauncher cluster is required by the Matter specification

We provide this alias to the default implementation [ApplicationLauncherServer](README.md#applicationlauncherserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/ContentAppDevice.ts:58](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/ContentAppDevice.ts#L58)

***

### ChannelServer

> `const` **ChannelServer**: *typeof* [`ChannelServer`](../../../../../../behavior/definitions/channel/export/classes/ChannelServer.md) = `BaseChannelServer`

The Channel cluster is optional per the Matter specification

We provide this alias to the default implementation [ChannelServer](README.md#channelserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/ContentAppDevice.ts:72](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/ContentAppDevice.ts#L72)

***

### ContentLauncherServer

> `const` **ContentLauncherServer**: *typeof* [`ContentLauncherServer`](../../../../../../behavior/definitions/content-launcher/export/classes/ContentLauncherServer.md) = `BaseContentLauncherServer`

The ContentLauncher cluster is optional per the Matter specification

We provide this alias to the default implementation [ContentLauncherServer](README.md#contentlauncherserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/ContentAppDevice.ts:93](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/ContentAppDevice.ts#L93)

***

### KeypadInputServer

> `const` **KeypadInputServer**: *typeof* [`KeypadInputServer`](../../../../../../behavior/definitions/keypad-input/export/classes/KeypadInputServer.md) = `BaseKeypadInputServer`

The KeypadInput cluster is required by the Matter specification

We provide this alias to the default implementation [KeypadInputServer](README.md#keypadinputserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/ContentAppDevice.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/ContentAppDevice.ts#L51)

***

### MediaPlaybackServer

> `const` **MediaPlaybackServer**: *typeof* [`MediaPlaybackServer`](../../../../../../behavior/definitions/media-playback/export/classes/MediaPlaybackServer.md) = `BaseMediaPlaybackServer`

The MediaPlayback cluster is optional per the Matter specification

We provide this alias to the default implementation [MediaPlaybackServer](README.md#mediaplaybackserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/ContentAppDevice.ts:86](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/ContentAppDevice.ts#L86)

***

### TargetNavigatorServer

> `const` **TargetNavigatorServer**: *typeof* [`TargetNavigatorServer`](../../../../../../behavior/definitions/target-navigator/export/classes/TargetNavigatorServer.md) = `BaseTargetNavigatorServer`

The TargetNavigator cluster is optional per the Matter specification

We provide this alias to the default implementation [TargetNavigatorServer](README.md#targetnavigatorserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/device/ContentAppDevice.ts:79](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/ContentAppDevice.ts#L79)

***

### server

> `const` **server**: `object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

##### mandatory

> **mandatory**: `object`

##### mandatory.ApplicationBasic

> **ApplicationBasic**: *typeof* [`ApplicationBasicServer`](../../../../../../behavior/definitions/application-basic/export/classes/ApplicationBasicServer.md) = `ApplicationBasicServer`

##### mandatory.ApplicationLauncher

> **ApplicationLauncher**: *typeof* [`ApplicationLauncherServer`](../../../../../../behavior/definitions/application-launcher/export/classes/ApplicationLauncherServer.md) = `ApplicationLauncherServer`

##### mandatory.KeypadInput

> **KeypadInput**: *typeof* [`KeypadInputServer`](../../../../../../behavior/definitions/keypad-input/export/classes/KeypadInputServer.md) = `KeypadInputServer`

##### optional

> **optional**: `object`

##### optional.AccountLogin

> **AccountLogin**: *typeof* [`AccountLoginServer`](../../../../../../behavior/definitions/account-login/export/classes/AccountLoginServer.md) = `AccountLoginServer`

##### optional.Channel

> **Channel**: *typeof* [`ChannelServer`](../../../../../../behavior/definitions/channel/export/classes/ChannelServer.md) = `ChannelServer`

##### optional.ContentLauncher

> **ContentLauncher**: *typeof* [`ContentLauncherServer`](../../../../../../behavior/definitions/content-launcher/export/classes/ContentLauncherServer.md) = `ContentLauncherServer`

##### optional.MediaPlayback

> **MediaPlayback**: *typeof* [`MediaPlaybackServer`](../../../../../../behavior/definitions/media-playback/export/classes/MediaPlaybackServer.md) = `MediaPlaybackServer`

##### optional.TargetNavigator

> **TargetNavigator**: *typeof* [`TargetNavigatorServer`](../../../../../../behavior/definitions/target-navigator/export/classes/TargetNavigatorServer.md) = `TargetNavigatorServer`

#### Source

[packages/matter.js/src/endpoint/definitions/device/ContentAppDevice.ts:105](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/device/ContentAppDevice.ts#L105)
