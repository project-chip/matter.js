[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/media-playback/export](../../../README.md) / [MediaPlaybackBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### currentState

> **currentState**: [`PlaybackState`](../../../../../../../cluster/export/namespaces/MediaPlayback/enumerations/PlaybackState.md)

This shall indicate the current playback state of media.

During fast-forward, rewind, and other seek operations; this attribute shall be set to PLAYING.

#### See

MatterSpecification.v11.Cluster § 6.10.3.1

#### Inherited from

`StateType.currentState`

#### Source

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:438](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L438)
