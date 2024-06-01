[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [MediaPlayback](../README.md) / Status

# Enumeration: Status

## See

MatterSpecification.v11.Cluster § 6.10.5.2

## Enumeration Members

### InvalidStateForCommand

> **InvalidStateForCommand**: `1`

Command failed: Requested playback command is invalid in the current playback state.

#### Source

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L94)

***

### NotActive

> **NotActive**: `3`

Command failed: This endpoint is not active for playback.

#### Source

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:105](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L105)

***

### NotAllowed

> **NotAllowed**: `2`

Command failed: Requested playback command is not allowed in the current playback state. For example,
attempting to fast-forward during a commercial might return NotAllowed.

#### Source

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:100](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L100)

***

### SeekOutOfRange

> **SeekOutOfRange**: `5`

Command failed: The Seek Command was issued with a value of position outside of the allowed seek range of
the media.

#### Source

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:117](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L117)

***

### SpeedOutOfRange

> **SpeedOutOfRange**: `4`

Command failed: The FastForward or Rewind Command was issued but the media is already playing back at the
fastest speed supported by the server in the respective direction.

#### Source

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:111](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L111)

***

### Success

> **Success**: `0`

Command succeeded

#### Source

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L89)
