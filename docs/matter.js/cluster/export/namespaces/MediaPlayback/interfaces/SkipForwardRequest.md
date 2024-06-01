[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [MediaPlayback](../README.md) / SkipForwardRequest

# Interface: SkipForwardRequest

Input to the MediaPlayback skipForward command

## See

MatterSpecification.v11.Cluster § 6.10.4.9

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvSkipForwardRequest`](../README.md#tlvskipforwardrequest)\>

## Properties

### deltaPositionMilliseconds

> **deltaPositionMilliseconds**: `number` \| `bigint`

This shall indicate the duration of the time span to skip forward in the media, in milliseconds. In case the
resulting position falls in the middle of a frame, the server shall set the position to the beginning of
that frame and set the SampledPosition attribute on the cluster accordingly. If the resultant position falls
beyond the furthest valid position in the media the client may seek forward to, the position should be set
to that furthest valid position. If the SampledPosition attribute is supported it shall be updated on the
cluster accordingly.

#### See

MatterSpecification.v11.Cluster § 6.10.4.9.1

#### Inherited from

`TypeFromSchema.deltaPositionMilliseconds`

#### Source

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:189](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L189)
