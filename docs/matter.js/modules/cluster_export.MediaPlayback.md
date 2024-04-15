[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / MediaPlayback

# Namespace: MediaPlayback

[cluster/export](cluster_export.md).MediaPlayback

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.MediaPlayback.Feature.md)
- [PlaybackState](../enums/cluster_export.MediaPlayback.PlaybackState.md)
- [Status](../enums/cluster_export.MediaPlayback.Status.md)

### Interfaces

- [Cluster](../interfaces/cluster_export.MediaPlayback.Cluster.md)
- [Complete](../interfaces/cluster_export.MediaPlayback.Complete.md)
- [PlaybackPositionStruct](../interfaces/cluster_export.MediaPlayback.PlaybackPositionStruct.md)
- [PlaybackResponse](../interfaces/cluster_export.MediaPlayback.PlaybackResponse.md)
- [SeekRequest](../interfaces/cluster_export.MediaPlayback.SeekRequest.md)
- [SkipBackwardRequest](../interfaces/cluster_export.MediaPlayback.SkipBackwardRequest.md)
- [SkipForwardRequest](../interfaces/cluster_export.MediaPlayback.SkipForwardRequest.md)

### Variables

- [AdvancedSeekComponent](cluster_export.MediaPlayback.md#advancedseekcomponent)
- [Base](cluster_export.MediaPlayback.md#base)
- [Cluster](cluster_export.MediaPlayback.md#cluster)
- [ClusterInstance](cluster_export.MediaPlayback.md#clusterinstance)
- [Complete](cluster_export.MediaPlayback.md#complete)
- [CompleteInstance](cluster_export.MediaPlayback.md#completeinstance)
- [TlvPlaybackPositionStruct](cluster_export.MediaPlayback.md#tlvplaybackpositionstruct)
- [TlvPlaybackResponse](cluster_export.MediaPlayback.md#tlvplaybackresponse)
- [TlvSeekRequest](cluster_export.MediaPlayback.md#tlvseekrequest)
- [TlvSkipBackwardRequest](cluster_export.MediaPlayback.md#tlvskipbackwardrequest)
- [TlvSkipForwardRequest](cluster_export.MediaPlayback.md#tlvskipforwardrequest)
- [VariableSpeedComponent](cluster_export.MediaPlayback.md#variablespeedcomponent)

## Variables

### AdvancedSeekComponent

• `Const` **AdvancedSeekComponent**: `Object`

A MediaPlaybackCluster supports these elements if it supports feature AdvancedSeek.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `duration`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `playbackSpeed`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `sampledPosition`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `position`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `updatedAt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `any`\> ; `seekRangeEnd`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `seekRangeStart`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `startTime`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } |
| `attributes.duration` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> |
| `attributes.playbackSpeed` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> |
| `attributes.sampledPosition` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `position`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `updatedAt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `any`\> |
| `attributes.seekRangeEnd` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> |
| `attributes.seekRangeStart` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> |
| `attributes.startTime` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> |
| `commands` | \{ `seek`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `position`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\>  } |
| `commands.seek` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `position`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:228](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L228)

___

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all MediaPlayback clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `currentState`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`PlaybackState`](../enums/cluster_export.MediaPlayback.PlaybackState.md), `any`\>  } | - |
| `attributes.currentState` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`PlaybackState`](../enums/cluster_export.MediaPlayback.PlaybackState.md), `any`\> | This shall indicate the current playback state of media. During fast-forward, rewind, and other seek operations; this attribute shall be set to PLAYING. **`See`** MatterSpecification.v11.Cluster § 6.10.3.1 |
| `commands` | \{ `next`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `pause`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `play`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `previous`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `skipBackward`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `deltaPositionMilliseconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `skipForward`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `deltaPositionMilliseconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `startOver`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `stop`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\>  } | - |
| `commands.next` | [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> | Upon receipt, this shall cause the handler to be invoked for "Next". User experience is context- specific. This will often Go forward to the next media playback item. **`See`** MatterSpecification.v11.Cluster § 6.10.4.6 |
| `commands.pause` | [`Command`](../interfaces/cluster_export.Command.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> | Upon receipt, this shall pause playback of the media. **`See`** MatterSpecification.v11.Cluster § 6.10.4.2 |
| `commands.play` | [`Command`](../interfaces/cluster_export.Command.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> | Upon receipt, this shall play media. If content is currently in a FastForward or Rewind state. Play shall return media to normal playback speed. **`See`** MatterSpecification.v11.Cluster § 6.10.4.1 |
| `commands.previous` | [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> | Upon receipt, this shall cause the handler to be invoked for "Previous". User experience is context-specific. This will often Go back to the previous media playback item. **`See`** MatterSpecification.v11.Cluster § 6.10.4.5 |
| `commands.skipBackward` | [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `deltaPositionMilliseconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> | Upon receipt, this shall Skip backward in the media by the given number of milliseconds. **`See`** MatterSpecification.v11.Cluster § 6.10.4.10 |
| `commands.skipForward` | [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `deltaPositionMilliseconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> | Upon receipt, this shall Skip forward in the media by the given number of milliseconds. **`See`** MatterSpecification.v11.Cluster § 6.10.4.9 |
| `commands.startOver` | [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> | Upon receipt, this shall Start Over with the current media playback item. **`See`** MatterSpecification.v11.Cluster § 6.10.4.4 |
| `commands.stop` | [`Command`](../interfaces/cluster_export.Command.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> | Upon receipt, this shall stop playback of the media. User-visible outcome is context-specific. This may navigate the user back to the location from where the media was originally launched. **`See`** MatterSpecification.v11.Cluster § 6.10.4.3 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `duration`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `playbackSpeed`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `sampledPosition`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `position`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ... \| ...\> ; `updatedAt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\>  }\>, `any`\> ; `seekRangeEnd`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `seekRangeStart`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `startTime`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `seek`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `position`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\>  }  } = AdvancedSeekComponent; `flags`: \{ `advancedSeek`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `fastForward`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `rewind`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\>  }  } = VariableSpeedComponent; `flags`: \{ `variableSpeed`: ``true`` = true }  }] | This metadata controls which MediaPlaybackCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `advancedSeek`: [`BitFlag`](schema_export.md#bitflag) ; `variableSpeed`: [`BitFlag`](schema_export.md#bitflag)  } | - |
| `features.advancedSeek` | [`BitFlag`](schema_export.md#bitflag) | AdvancedSeek Enables clients to implement more advanced media seeking behavior in their user interface, such as for example a "seek bar". Adds support for Attributes and Commands related to advanced seek support |
| `features.variableSpeed` | [`BitFlag`](schema_export.md#bitflag) | VariableSpeed Support for commands to support variable speed playback on media that supports it. |
| `id` | ``1286`` | - |
| `name` | ``"MediaPlayback"`` | - |
| `revision` | ``1`` | - |

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:408](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L408)

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.MediaPlayback.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:529](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L529)

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:531](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L531)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `currentState`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`PlaybackState`](../enums/cluster_export.MediaPlayback.PlaybackState.md), `any`\>  } ; `commands`: \{ `next`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `pause`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `play`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `previous`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `skipBackward`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `deltaPositionMilliseconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `skipForward`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `deltaPositionMilliseconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `startOver`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `stop`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `duration`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `playbackSpeed`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `sampledPosition`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `position`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `updatedAt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `any`\> ; `seekRangeEnd`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `seekRangeStart`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `startTime`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `seek`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `position`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\>  }  } = AdvancedSeekComponent; `flags`: \{ `advancedSeek`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `fastForward`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `rewind`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\>  }  } = VariableSpeedComponent; `flags`: \{ `variableSpeed`: ``true`` = true }  }] ; `features`: \{ `advancedSeek`: [`BitFlag`](schema_export.md#bitflag) ; `variableSpeed`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``1286`` = 0x506; `name`: ``"MediaPlayback"`` = "MediaPlayback"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.MediaPlayback.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:516](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L516)

___

### Complete

• **Complete**: [`Complete`](../interfaces/cluster_export.MediaPlayback.Complete.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:583](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L583)

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:585](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L585)

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `never`\> ; `currentState`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`PlaybackState`](../enums/cluster_export.MediaPlayback.PlaybackState.md), `any`\> ; `duration`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `advancedSeek`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `eventList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `advancedSeek`: [`BitFlag`](schema_export.md#bitflag) ; `variableSpeed`: [`BitFlag`](schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `playbackSpeed`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `advancedSeek`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `sampledPosition`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `position`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `updatedAt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `advancedSeek`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `seekRangeEnd`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `advancedSeek`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `seekRangeStart`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `advancedSeek`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `startTime`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `advancedSeek`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `commands`: \{ `fastForward`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `variableSpeed`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `next`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `pause`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `play`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `previous`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `rewind`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `variableSpeed`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `seek`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `position`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `advancedSeek`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `skipBackward`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `deltaPositionMilliseconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `skipForward`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `deltaPositionMilliseconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `startOver`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `stop`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\>  } ; `features`: \{ `advancedSeek`: [`BitFlag`](schema_export.md#bitflag) ; `variableSpeed`: [`BitFlag`](schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](util_export.md#branded)\<``1286``, ``"ClusterId"``\> = Cluster.id; `name`: ``"MediaPlayback"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

**`See`**

[Complete](cluster_export.MediaPlayback.md#complete)

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:538](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L538)

___

### TlvPlaybackPositionStruct

• `Const` **TlvPlaybackPositionStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `position`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `updatedAt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>

This structure defines a playback position within a media stream being played.

**`See`**

MatterSpecification.v11.Cluster § 6.10.5.3

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L27)

___

### TlvPlaybackResponse

• `Const` **TlvPlaybackResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>

This command shall be generated in response to various Playback Commands.

**`See`**

MatterSpecification.v11.Cluster § 6.10.4.12

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:125](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L125)

___

### TlvSeekRequest

• `Const` **TlvSeekRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `position`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>

Input to the MediaPlayback seek command

**`See`**

MatterSpecification.v11.Cluster § 6.10.4.11

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:61](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L61)

___

### TlvSkipBackwardRequest

• `Const` **TlvSkipBackwardRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `deltaPositionMilliseconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>

Input to the MediaPlayback skipBackward command

**`See`**

MatterSpecification.v11.Cluster § 6.10.4.10

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:204](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L204)

___

### TlvSkipForwardRequest

• `Const` **TlvSkipForwardRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `deltaPositionMilliseconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>

Input to the MediaPlayback skipForward command

**`See`**

MatterSpecification.v11.Cluster § 6.10.4.9

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:178](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L178)

___

### VariableSpeedComponent

• `Const` **VariableSpeedComponent**: `Object`

A MediaPlaybackCluster supports these elements if it supports feature VariableSpeed.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commands` | \{ `fastForward`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> ; `rewind`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\>  } |
| `commands.fastForward` | [`Command`](../interfaces/cluster_export.Command.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> |
| `commands.rewind` | [`Command`](../interfaces/cluster_export.Command.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:343](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L343)
