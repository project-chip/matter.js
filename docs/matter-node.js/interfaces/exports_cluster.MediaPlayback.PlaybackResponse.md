[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [MediaPlayback](../modules/exports_cluster.MediaPlayback.md) / PlaybackResponse

# Interface: PlaybackResponse

[exports/cluster](../modules/exports_cluster.md).[MediaPlayback](../modules/exports_cluster.MediaPlayback.md).PlaybackResponse

This command shall be generated in response to various Playback Commands.

**`See`**

MatterSpecification.v11.Cluster § 6.10.4.12

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvPlaybackResponse`](../modules/exports_cluster.MediaPlayback.md#tlvplaybackresponse)\>

  ↳ **`PlaybackResponse`**

## Table of contents

### Properties

- [data](exports_cluster.MediaPlayback.PlaybackResponse.md#data)
- [status](exports_cluster.MediaPlayback.PlaybackResponse.md#status)

## Properties

### data

• `Optional` **data**: `Uint8Array`

This shall indicate Optional app-specific data.

**`See`**

MatterSpecification.v11.Cluster § 6.10.4.12.2

#### Inherited from

TypeFromSchema.data

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:119

___

### status

• **status**: [`Status`](../enums/exports_cluster.MediaPlayback.Status.md)

This shall indicate the status of the command which resulted in this response.

**`See`**

MatterSpecification.v11.Cluster § 6.10.4.12.1

#### Inherited from

TypeFromSchema.status

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:113
