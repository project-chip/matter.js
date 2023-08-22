[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [MediaPlayback](../modules/exports_cluster.MediaPlayback.md) / Status

# Enumeration: Status

[exports/cluster](../modules/exports_cluster.md).[MediaPlayback](../modules/exports_cluster.MediaPlayback.md).Status

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.10.5.2

## Table of contents

### Enumeration Members

- [InvalidStateForCommand](exports_cluster.MediaPlayback.Status.md#invalidstateforcommand)
- [NotActive](exports_cluster.MediaPlayback.Status.md#notactive)
- [NotAllowed](exports_cluster.MediaPlayback.Status.md#notallowed)
- [SeekOutOfRange](exports_cluster.MediaPlayback.Status.md#seekoutofrange)
- [SpeedOutOfRange](exports_cluster.MediaPlayback.Status.md#speedoutofrange)
- [Success](exports_cluster.MediaPlayback.Status.md#success)

## Enumeration Members

### InvalidStateForCommand

• **InvalidStateForCommand** = ``1``

Command failed: Requested playback command is invalid in the current playback state.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/MediaPlaybackCluster.d.ts:42

___

### NotActive

• **NotActive** = ``3``

Command failed: This endpoint is not active for playback.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/MediaPlaybackCluster.d.ts:51

___

### NotAllowed

• **NotAllowed** = ``2``

Command failed: Requested playback command is not allowed in the current playback state. For example,
attempting to fast-forward during a commercial might return NotAllowed.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/MediaPlaybackCluster.d.ts:47

___

### SeekOutOfRange

• **SeekOutOfRange** = ``5``

Command failed: The Seek Command was issued with a value of position outside of the allowed seek range of
the media.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/MediaPlaybackCluster.d.ts:61

___

### SpeedOutOfRange

• **SpeedOutOfRange** = ``4``

Command failed: The FastForward or Rewind Command was issued but the media is already playing back at the
fastest speed supported by the server in the respective direction.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/MediaPlaybackCluster.d.ts:56

___

### Success

• **Success** = ``0``

Command succeeded

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/MediaPlaybackCluster.d.ts:38
