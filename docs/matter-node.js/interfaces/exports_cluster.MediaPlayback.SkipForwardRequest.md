[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [MediaPlayback](../modules/exports_cluster.MediaPlayback.md) / SkipForwardRequest

# Interface: SkipForwardRequest

[exports/cluster](../modules/exports_cluster.md).[MediaPlayback](../modules/exports_cluster.MediaPlayback.md).SkipForwardRequest

Input to the MediaPlayback skipForward command

**`See`**

MatterSpecification.v11.Cluster § 6.10.4.9

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvSkipForwardRequest`](../modules/exports_cluster.MediaPlayback.md#tlvskipforwardrequest)\>

  ↳ **`SkipForwardRequest`**

## Table of contents

### Properties

- [deltaPositionMilliseconds](exports_cluster.MediaPlayback.SkipForwardRequest.md#deltapositionmilliseconds)

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

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:165
