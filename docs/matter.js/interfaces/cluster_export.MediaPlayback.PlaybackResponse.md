[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [MediaPlayback](../modules/cluster_export.MediaPlayback.md) / PlaybackResponse

# Interface: PlaybackResponse

[cluster/export](../modules/cluster_export.md).[MediaPlayback](../modules/cluster_export.MediaPlayback.md).PlaybackResponse

This command shall be generated in response to various Playback Commands.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.10.4.12

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

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.10.4.12.2

#### Inherited from

TypeFromSchema.data

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:139](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L139)

___

### status

• **status**: [`Status`](../enums/cluster_export.MediaPlayback.Status.md)

This shall indicate the status of the command which resulted in this response.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.10.4.12.1

#### Inherited from

TypeFromSchema.status

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:132](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L132)
