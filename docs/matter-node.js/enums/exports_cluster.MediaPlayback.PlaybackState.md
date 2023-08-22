[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [MediaPlayback](../modules/exports_cluster.MediaPlayback.md) / PlaybackState

# Enumeration: PlaybackState

[exports/cluster](../modules/exports_cluster.md).[MediaPlayback](../modules/exports_cluster.MediaPlayback.md).PlaybackState

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.10.5.1

## Table of contents

### Enumeration Members

- [Buffering](exports_cluster.MediaPlayback.PlaybackState.md#buffering)
- [NotPlaying](exports_cluster.MediaPlayback.PlaybackState.md#notplaying)
- [Paused](exports_cluster.MediaPlayback.PlaybackState.md#paused)
- [Playing](exports_cluster.MediaPlayback.PlaybackState.md#playing)

## Enumeration Members

### Buffering

• **Buffering** = ``3``

Media is not currently buffering and playback will start when buffer has been filled

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/MediaPlaybackCluster.d.ts:29

___

### NotPlaying

• **NotPlaying** = ``2``

Media is not currently playing

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/MediaPlaybackCluster.d.ts:25

___

### Paused

• **Paused** = ``1``

Media is currently paused

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/MediaPlaybackCluster.d.ts:21

___

### Playing

• **Playing** = ``0``

Media is currently playing (includes FF and REW)

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/MediaPlaybackCluster.d.ts:17
