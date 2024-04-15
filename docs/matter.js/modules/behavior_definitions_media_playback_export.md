[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/media-playback/export

# Module: behavior/definitions/media-playback/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_media_playback_export._internal_.md)

### Namespaces

- [MediaPlaybackBehavior](behavior_definitions_media_playback_export.MediaPlaybackBehavior.md)
- [MediaPlaybackInterface](behavior_definitions_media_playback_export.MediaPlaybackInterface.md)

### Classes

- [MediaPlaybackServer](../classes/behavior_definitions_media_playback_export.MediaPlaybackServer.md)

### Interfaces

- [MediaPlaybackBehavior](../interfaces/behavior_definitions_media_playback_export.MediaPlaybackBehavior-1.md)

### Type Aliases

- [MediaPlaybackInterface](behavior_definitions_media_playback_export.md#mediaplaybackinterface)
- [PlaybackResponse](behavior_definitions_media_playback_export.md#playbackresponse)
- [SeekRequest](behavior_definitions_media_playback_export.md#seekrequest)
- [SkipBackwardRequest](behavior_definitions_media_playback_export.md#skipbackwardrequest)
- [SkipForwardRequest](behavior_definitions_media_playback_export.md#skipforwardrequest)

### Variables

- [MediaPlaybackBehavior](behavior_definitions_media_playback_export.md#mediaplaybackbehavior)

## Type Aliases

### MediaPlaybackInterface

Ƭ **MediaPlaybackInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: {} ; `methods`: [`Base`](../interfaces/behavior_definitions_media_playback_export.MediaPlaybackInterface.Base.md)  }, \{ `flags`: \{ `advancedSeek`: ``true``  } ; `methods`: [`AdvancedSeek`](../interfaces/behavior_definitions_media_playback_export.MediaPlaybackInterface.AdvancedSeek.md)  }, \{ `flags`: \{ `variableSpeed`: ``true``  } ; `methods`: [`VariableSpeed`](../interfaces/behavior_definitions_media_playback_export.MediaPlaybackInterface.VariableSpeed.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts#L41)

[packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts:152](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts#L152)

___

### PlaybackResponse

Ƭ **PlaybackResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvPlaybackResponse`](cluster_export.MediaPlayback.md#tlvplaybackresponse)\>

This command shall be generated in response to various Playback Commands.

**`See`**

MatterSpecification.v11.Cluster § 6.10.4.12

#### Defined in

[packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts#L18)

___

### SeekRequest

Ƭ **SeekRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvSeekRequest`](cluster_export.MediaPlayback.md#tlvseekrequest)\>

Upon receipt, this shall change the playback position in the media to the given position.

**`See`**

MatterSpecification.v11.Cluster § 6.10.4.11

#### Defined in

[packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts#L39)

___

### SkipBackwardRequest

Ƭ **SkipBackwardRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvSkipBackwardRequest`](cluster_export.MediaPlayback.md#tlvskipbackwardrequest)\>

Upon receipt, this shall Skip backward in the media by the given number of milliseconds.

**`See`**

MatterSpecification.v11.Cluster § 6.10.4.10

#### Defined in

[packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts#L32)

___

### SkipForwardRequest

Ƭ **SkipForwardRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvSkipForwardRequest`](cluster_export.MediaPlayback.md#tlvskipforwardrequest)\>

Upon receipt, this shall Skip forward in the media by the given number of milliseconds.

**`See`**

MatterSpecification.v11.Cluster § 6.10.4.9

#### Defined in

[packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts#L25)

## Variables

### MediaPlaybackBehavior

• `Const` **MediaPlaybackBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.MediaPlayback.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`MediaPlaybackInterface`](behavior_definitions_media_playback_export.md#mediaplaybackinterface)\>, [`MediaPlaybackInterface`](behavior_definitions_media_playback_export.md#mediaplaybackinterface)\>

MediaPlaybackBehavior is the base class for objects that support interaction with [MediaPlayback.Cluster](cluster_export.MediaPlayback.md#cluster).

This class does not have optional features of MediaPlayback.Cluster enabled. You can enable additional features
using MediaPlaybackBehavior.with.

#### Defined in

[packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackBehavior.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackBehavior.ts#L19)

[packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackBehavior.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackBehavior.ts#L24)

[packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackBehavior.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackBehavior.ts#L26)
