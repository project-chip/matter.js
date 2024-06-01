[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [MediaPlayback](../README.md) / PlaybackResponse

# Interface: PlaybackResponse

This command shall be generated in response to various Playback Commands.

## See

MatterSpecification.v11.Cluster § 6.10.4.12

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvPlaybackResponse`](../README.md#tlvplaybackresponse)\>

## Properties

### data?

> `optional` **data**: `Uint8Array`

This shall indicate Optional app-specific data.

#### See

MatterSpecification.v11.Cluster § 6.10.4.12.2

#### Inherited from

`TypeFromSchema.data`

#### Source

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:138](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L138)

***

### status

> **status**: [`Status`](../enumerations/Status.md)

This shall indicate the status of the command which resulted in this response.

#### See

MatterSpecification.v11.Cluster § 6.10.4.12.1

#### Inherited from

`TypeFromSchema.status`

#### Source

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:131](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L131)
