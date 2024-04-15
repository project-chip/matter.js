[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [MediaPlayback](../modules/cluster_export.MediaPlayback.md) / SkipBackwardRequest

# Interface: SkipBackwardRequest

[cluster/export](../modules/cluster_export.md).[MediaPlayback](../modules/cluster_export.MediaPlayback.md).SkipBackwardRequest

Input to the MediaPlayback skipBackward command

**`See`**

MatterSpecification.v11.Cluster § 6.10.4.10

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvSkipBackwardRequest`](../modules/cluster_export.MediaPlayback.md#tlvskipbackwardrequest)\>

  ↳ **`SkipBackwardRequest`**

## Table of contents

### Properties

- [deltaPositionMilliseconds](cluster_export.MediaPlayback.SkipBackwardRequest.md#deltapositionmilliseconds)

## Properties

### deltaPositionMilliseconds

• **deltaPositionMilliseconds**: `number` \| `bigint`

This shall indicate the duration of the time span to skip backward in the media, in milliseconds. In case
the resulting position falls in the middle of a frame, the server shall set the position to the beginning of
that frame and set the SampledPosition attribute on the cluster accordingly. If the resultant position falls
before the earliest valid position to which a client may seek back to, the position should be set to that
earliest valid position. If the SampledPosition attribute is supported it shall be updated on the cluster
accordingly.

**`See`**

MatterSpecification.v11.Cluster § 6.10.4.10.1

#### Inherited from

TypeFromSchema.deltaPositionMilliseconds

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:215](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L215)
