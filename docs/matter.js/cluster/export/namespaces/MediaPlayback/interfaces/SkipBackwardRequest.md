[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [MediaPlayback](../README.md) / SkipBackwardRequest

# Interface: SkipBackwardRequest

Input to the MediaPlayback skipBackward command

## See

MatterSpecification.v11.Cluster § 6.10.4.10

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvSkipBackwardRequest`](../README.md#tlvskipbackwardrequest)\>

## Properties

### deltaPositionMilliseconds

> **deltaPositionMilliseconds**: `number` \| `bigint`

This shall indicate the duration of the time span to skip backward in the media, in milliseconds. In case
the resulting position falls in the middle of a frame, the server shall set the position to the beginning of
that frame and set the SampledPosition attribute on the cluster accordingly. If the resultant position falls
before the earliest valid position to which a client may seek back to, the position should be set to that
earliest valid position. If the SampledPosition attribute is supported it shall be updated on the cluster
accordingly.

#### See

MatterSpecification.v11.Cluster § 6.10.4.10.1

#### Inherited from

`TypeFromSchema.deltaPositionMilliseconds`

#### Source

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:215](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L215)
