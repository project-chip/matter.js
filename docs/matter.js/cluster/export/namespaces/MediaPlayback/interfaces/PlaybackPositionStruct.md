[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [MediaPlayback](../README.md) / PlaybackPositionStruct

# Interface: PlaybackPositionStruct

This structure defines a playback position within a media stream being played.

## See

MatterSpecification.v11.Cluster § 6.10.5.3

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvPlaybackPositionStruct`](../README.md#tlvplaybackpositionstruct)\>

## Properties

### position

> **position**: `null` \| `number` \| `bigint`

This shall indicate the associated discrete position within the media stream, in milliseconds from the
beginning of the stream, being associated with the time indicated by the UpdatedAt field. The Position shall
not be greater than the duration of the media if duration is specified. The Position shall not be greater
than the time difference between current time and start time of the media when start time is specified.

A value of null shall indicate that playback position is not applicable for the current state of the media
playback (For example : Live media with no known duration and where seek is not supported).

#### See

MatterSpecification.v11.Cluster § 6.10.5.3.2

#### Inherited from

`TypeFromSchema.position`

#### Source

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L46)

***

### updatedAt

> **updatedAt**: `number` \| `bigint`

This shall indicate the time when the position was last updated.

#### See

MatterSpecification.v11.Cluster § 6.10.5.3.1

#### Inherited from

`TypeFromSchema.updatedAt`

#### Source

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L33)
