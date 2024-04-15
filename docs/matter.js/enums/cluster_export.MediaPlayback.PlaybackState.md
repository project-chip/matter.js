[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [MediaPlayback](../modules/cluster_export.MediaPlayback.md) / PlaybackState

# Enumeration: PlaybackState

[cluster/export](../modules/cluster_export.md).[MediaPlayback](../modules/cluster_export.MediaPlayback.md).PlaybackState

**`See`**

MatterSpecification.v11.Cluster § 6.10.5.1

## Table of contents

### Enumeration Members

- [Buffering](cluster_export.MediaPlayback.PlaybackState.md#buffering)
- [NotPlaying](cluster_export.MediaPlayback.PlaybackState.md#notplaying)
- [Paused](cluster_export.MediaPlayback.PlaybackState.md#paused)
- [Playing](cluster_export.MediaPlayback.PlaybackState.md#playing)

## Enumeration Members

### Buffering

• **Buffering** = ``3``

Media is not currently buffering and playback will start when buffer has been filled

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:170](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L170)

___

### NotPlaying

• **NotPlaying** = ``2``

Media is not currently playing

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:165](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L165)

___

### Paused

• **Paused** = ``1``

Media is currently paused

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:160](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L160)

___

### Playing

• **Playing** = ``0``

Media is currently playing (includes FF and REW)

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:155](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L155)
