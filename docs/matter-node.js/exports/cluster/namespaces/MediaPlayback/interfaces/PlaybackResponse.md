[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [MediaPlayback](../README.md) / PlaybackResponse

# Interface: PlaybackResponse

This command shall be generated in response to various Playback Commands.

## See

MatterSpecification.v11.Cluster § 6.10.4.12

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvPlaybackResponse`](../README.md#tlvplaybackresponse)\>

## Properties

### data?

> `optional` **data**: `Uint8Array`

This shall indicate Optional app-specific data.

#### See

MatterSpecification.v11.Cluster § 6.10.4.12.2

#### Inherited from

`TypeFromSchema.data`

#### Source

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:119

***

### status

> **status**: [`Status`](../enumerations/Status.md)

This shall indicate the status of the command which resulted in this response.

#### See

MatterSpecification.v11.Cluster § 6.10.4.12.1

#### Inherited from

`TypeFromSchema.status`

#### Source

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:113
