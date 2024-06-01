[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [MediaPlayback](../README.md) / PlaybackState

# Enumeration: PlaybackState

## See

MatterSpecification.v11.Cluster § 6.10.5.1

## Enumeration Members

### Buffering

> **Buffering**: `3`

Media is not currently buffering and playback will start when buffer has been filled

#### Source

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:147

***

### NotPlaying

> **NotPlaying**: `2`

Media is not currently playing

#### Source

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:143

***

### Paused

> **Paused**: `1`

Media is currently paused

#### Source

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:139

***

### Playing

> **Playing**: `0`

Media is currently playing (includes FF and REW)

#### Source

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:135
