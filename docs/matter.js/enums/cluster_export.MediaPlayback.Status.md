[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [MediaPlayback](../modules/cluster_export.MediaPlayback.md) / Status

# Enumeration: Status

[cluster/export](../modules/cluster_export.md).[MediaPlayback](../modules/cluster_export.MediaPlayback.md).Status

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.10.5.2

## Table of contents

### Enumeration Members

- [InvalidStateForCommand](cluster_export.MediaPlayback.Status.md#invalidstateforcommand)
- [NotActive](cluster_export.MediaPlayback.Status.md#notactive)
- [NotAllowed](cluster_export.MediaPlayback.Status.md#notallowed)
- [SeekOutOfRange](cluster_export.MediaPlayback.Status.md#seekoutofrange)
- [SpeedOutOfRange](cluster_export.MediaPlayback.Status.md#speedoutofrange)
- [Success](cluster_export.MediaPlayback.Status.md#success)

## Enumeration Members

### InvalidStateForCommand

• **InvalidStateForCommand** = ``1``

Command failed: Requested playback command is invalid in the current playback state.

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:65](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L65)

___

### NotActive

• **NotActive** = ``3``

Command failed: This endpoint is not active for playback.

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:76](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L76)

___

### NotAllowed

• **NotAllowed** = ``2``

Command failed: Requested playback command is not allowed in the current playback state. For example,
attempting to fast-forward during a commercial might return NotAllowed.

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:71](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L71)

___

### SeekOutOfRange

• **SeekOutOfRange** = ``5``

Command failed: The Seek Command was issued with a value of position outside of the allowed seek range of
the media.

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:88](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L88)

___

### SpeedOutOfRange

• **SpeedOutOfRange** = ``4``

Command failed: The FastForward or Rewind Command was issued but the media is already playing back at the
fastest speed supported by the server in the respective direction.

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:82](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L82)

___

### Success

• **Success** = ``0``

Command succeeded

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:60](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L60)
