[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [MediaPlayback](../modules/cluster_export.MediaPlayback.md) / PlaybackResponse

# Interface: PlaybackResponse

[cluster/export](../modules/cluster_export.md).[MediaPlayback](../modules/cluster_export.MediaPlayback.md).PlaybackResponse

This command shall be generated in response to various Playback Commands.

**`See`**

MatterSpecification.v11.Cluster § 6.10.4.12

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvPlaybackResponse`](../modules/cluster_export.MediaPlayback.md#tlvplaybackresponse)\>

  ↳ **`PlaybackResponse`**

## Table of contents

### Properties

- [data](cluster_export.MediaPlayback.PlaybackResponse.md#data)
- [status](cluster_export.MediaPlayback.PlaybackResponse.md#status)

## Properties

### data

• `Optional` **data**: `Uint8Array`

This shall indicate Optional app-specific data.

**`See`**

MatterSpecification.v11.Cluster § 6.10.4.12.2

#### Inherited from

TypeFromSchema.data

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:138](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L138)

___

### status

• **status**: [`Status`](../enums/cluster_export.MediaPlayback.Status.md)

This shall indicate the status of the command which resulted in this response.

**`See`**

MatterSpecification.v11.Cluster § 6.10.4.12.1

#### Inherited from

TypeFromSchema.status

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:131](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L131)
