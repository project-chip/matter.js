[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/media-playback/export](../modules/behavior_definitions_media_playback_export.md) / [MediaPlaybackBehavior](../modules/behavior_definitions_media_playback_export.MediaPlaybackBehavior.md) / State

# Interface: State

[behavior/definitions/media-playback/export](../modules/behavior_definitions_media_playback_export.md).[MediaPlaybackBehavior](../modules/behavior_definitions_media_playback_export.MediaPlaybackBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_media_playback_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [currentState](behavior_definitions_media_playback_export.MediaPlaybackBehavior.State.md#currentstate)

## Properties

### currentState

• **currentState**: [`PlaybackState`](../enums/cluster_export.MediaPlayback.PlaybackState.md)

This shall indicate the current playback state of media.

During fast-forward, rewind, and other seek operations; this attribute shall be set to PLAYING.

**`See`**

MatterSpecification.v11.Cluster § 6.10.3.1

#### Inherited from

StateType.currentState

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:438](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L438)
