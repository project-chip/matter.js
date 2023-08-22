[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [MediaPlayback](../modules/cluster_export.MediaPlayback.md) / PlaybackState

# Enumeration: PlaybackState

[cluster/export](../modules/cluster_export.md).[MediaPlayback](../modules/cluster_export.MediaPlayback.md).PlaybackState

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.10.5.1

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

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:50](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L50)

___

### NotPlaying

• **NotPlaying** = ``2``

Media is not currently playing

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:45](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L45)

___

### Paused

• **Paused** = ``1``

Media is currently paused

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:40](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L40)

___

### Playing

• **Playing** = ``0``

Media is currently playing (includes FF and REW)

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:35](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L35)
