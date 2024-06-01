[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [MediaPlayback](../README.md) / PlaybackState

# Enumeration: PlaybackState

## See

MatterSpecification.v11.Cluster § 6.10.5.1

## Enumeration Members

### Buffering

> **Buffering**: `3`

Media is not currently buffering and playback will start when buffer has been filled

#### Source

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:170](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L170)

***

### NotPlaying

> **NotPlaying**: `2`

Media is not currently playing

#### Source

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:165](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L165)

***

### Paused

> **Paused**: `1`

Media is currently paused

#### Source

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:160](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L160)

***

### Playing

> **Playing**: `0`

Media is currently playing (includes FF and REW)

#### Source

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:155](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L155)
