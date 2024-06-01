[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [MediaPlayback](../README.md) / Status

# Enumeration: Status

## See

MatterSpecification.v11.Cluster § 6.10.5.2

## Enumeration Members

### InvalidStateForCommand

> **InvalidStateForCommand**: `1`

Command failed: Requested playback command is invalid in the current playback state.

#### Source

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:81

***

### NotActive

> **NotActive**: `3`

Command failed: This endpoint is not active for playback.

#### Source

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:90

***

### NotAllowed

> **NotAllowed**: `2`

Command failed: Requested playback command is not allowed in the current playback state. For example,
attempting to fast-forward during a commercial might return NotAllowed.

#### Source

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:86

***

### SeekOutOfRange

> **SeekOutOfRange**: `5`

Command failed: The Seek Command was issued with a value of position outside of the allowed seek range of
the media.

#### Source

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:100

***

### SpeedOutOfRange

> **SpeedOutOfRange**: `4`

Command failed: The FastForward or Rewind Command was issued but the media is already playing back at the
fastest speed supported by the server in the respective direction.

#### Source

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:95

***

### Success

> **Success**: `0`

Command succeeded

#### Source

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:77
