[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [MediaPlayback](../modules/cluster_export.MediaPlayback.md) / SkipForwardRequest

# Interface: SkipForwardRequest

[cluster/export](../modules/cluster_export.md).[MediaPlayback](../modules/cluster_export.MediaPlayback.md).SkipForwardRequest

Input to the MediaPlayback skipForward command

**`See`**

MatterSpecification.v11.Cluster § 6.10.4.9

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvSkipForwardRequest`](../modules/cluster_export.MediaPlayback.md#tlvskipforwardrequest)\>

  ↳ **`SkipForwardRequest`**

## Table of contents

### Properties

- [deltaPositionMilliseconds](cluster_export.MediaPlayback.SkipForwardRequest.md#deltapositionmilliseconds)

## Properties

### deltaPositionMilliseconds

• **deltaPositionMilliseconds**: `number` \| `bigint`

This shall indicate the duration of the time span to skip forward in the media, in milliseconds. In case the
resulting position falls in the middle of a frame, the server shall set the position to the beginning of
that frame and set the SampledPosition attribute on the cluster accordingly. If the resultant position falls
beyond the furthest valid position in the media the client may seek forward to, the position should be set
to that furthest valid position. If the SampledPosition attribute is supported it shall be updated on the
cluster accordingly.

**`See`**

MatterSpecification.v11.Cluster § 6.10.4.9.1

#### Inherited from

TypeFromSchema.deltaPositionMilliseconds

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:189](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L189)
