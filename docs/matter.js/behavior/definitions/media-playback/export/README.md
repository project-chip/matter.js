[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / behavior/definitions/media-playback/export

# behavior/definitions/media-playback/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [MediaPlaybackBehavior](namespaces/MediaPlaybackBehavior/README.md)
- [MediaPlaybackInterface](namespaces/MediaPlaybackInterface/README.md)

### Classes

- [MediaPlaybackServer](classes/MediaPlaybackServer.md)

### Interfaces

- [MediaPlaybackBehavior](interfaces/MediaPlaybackBehavior.md)

## Type Aliases

### MediaPlaybackInterface

> **MediaPlaybackInterface**: `object`

#### Type declaration

##### components

> **components**: [`object`, `object`, `object`]

#### Source

[packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts#L41)

***

### PlaybackResponse

> **PlaybackResponse**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvPlaybackResponse`](../../../../cluster/export/namespaces/MediaPlayback/README.md#tlvplaybackresponse)\>

This command shall be generated in response to various Playback Commands.

#### See

MatterSpecification.v11.Cluster § 6.10.4.12

#### Source

[packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts#L18)

***

### SeekRequest

> **SeekRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvSeekRequest`](../../../../cluster/export/namespaces/MediaPlayback/README.md#tlvseekrequest)\>

Upon receipt, this shall change the playback position in the media to the given position.

#### See

MatterSpecification.v11.Cluster § 6.10.4.11

#### Source

[packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts#L39)

***

### SkipBackwardRequest

> **SkipBackwardRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvSkipBackwardRequest`](../../../../cluster/export/namespaces/MediaPlayback/README.md#tlvskipbackwardrequest)\>

Upon receipt, this shall Skip backward in the media by the given number of milliseconds.

#### See

MatterSpecification.v11.Cluster § 6.10.4.10

#### Source

[packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts#L32)

***

### SkipForwardRequest

> **SkipForwardRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvSkipForwardRequest`](../../../../cluster/export/namespaces/MediaPlayback/README.md#tlvskipforwardrequest)\>

Upon receipt, this shall Skip forward in the media by the given number of milliseconds.

#### See

MatterSpecification.v11.Cluster § 6.10.4.9

#### Source

[packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts#L25)

## Variables

### MediaPlaybackBehavior

> `const` **MediaPlaybackBehavior**: [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../cluster/export/namespaces/MediaPlayback/interfaces/Cluster.md), [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../cluster/export/namespaces/ClusterBehavior/README.md), [`MediaPlaybackInterface`](README.md#mediaplaybackinterface)\>, [`MediaPlaybackInterface`](README.md#mediaplaybackinterface)\>

MediaPlaybackBehavior is the base class for objects that support interaction with [MediaPlayback.Cluster](../../../../cluster/export/namespaces/MediaPlayback/README.md#cluster).

This class does not have optional features of MediaPlayback.Cluster enabled. You can enable additional features
using MediaPlaybackBehavior.with.

#### Source

[packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackBehavior.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackBehavior.ts#L19)
