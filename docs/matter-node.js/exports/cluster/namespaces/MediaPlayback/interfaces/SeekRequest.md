[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [MediaPlayback](../README.md) / SeekRequest

# Interface: SeekRequest

Input to the MediaPlayback seek command

## See

MatterSpecification.v11.Cluster § 6.10.4.11

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvSeekRequest`](../README.md#tlvseekrequest)\>

## Properties

### position

> **position**: `number` \| `bigint`

This shall indicate the position (in milliseconds) in the media to seek to. In case the position falls in
the middle of a frame, the server shall set the position to the beginning of that frame and set the
SampledPosition attribute on the cluster accordingly. If the position falls before the earliest valid
position or beyond the furthest valid position to which a client may seek back or forward to respectively,
the status of SEEK_OUT_OF_RANGE shall be returned and no change shall be made to the position of the
playback.

#### See

MatterSpecification.v11.Cluster § 6.10.4.11.1

#### Inherited from

`TypeFromSchema.position`

#### Source

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:61
