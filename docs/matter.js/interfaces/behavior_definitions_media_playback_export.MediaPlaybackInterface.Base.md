[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/media-playback/export](../modules/behavior_definitions_media_playback_export.md) / [MediaPlaybackInterface](../modules/behavior_definitions_media_playback_export.MediaPlaybackInterface.md) / Base

# Interface: Base

[behavior/definitions/media-playback/export](../modules/behavior_definitions_media_playback_export.md).[MediaPlaybackInterface](../modules/behavior_definitions_media_playback_export.MediaPlaybackInterface.md).Base

## Table of contents

### Methods

- [next](behavior_definitions_media_playback_export.MediaPlaybackInterface.Base.md#next)
- [pause](behavior_definitions_media_playback_export.MediaPlaybackInterface.Base.md#pause)
- [play](behavior_definitions_media_playback_export.MediaPlaybackInterface.Base.md#play)
- [previous](behavior_definitions_media_playback_export.MediaPlaybackInterface.Base.md#previous)
- [skipBackward](behavior_definitions_media_playback_export.MediaPlaybackInterface.Base.md#skipbackward)
- [skipForward](behavior_definitions_media_playback_export.MediaPlaybackInterface.Base.md#skipforward)
- [startOver](behavior_definitions_media_playback_export.MediaPlaybackInterface.Base.md#startover)
- [stop](behavior_definitions_media_playback_export.MediaPlaybackInterface.Base.md#stop)

## Methods

### next

▸ **next**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>\>

Upon receipt, this shall cause the handler to be invoked for "Next". User experience is context- specific.
This will often Go forward to the next media playback item.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 6.10.4.6

#### Defined in

[packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts#L87)

___

### pause

▸ **pause**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>\>

Upon receipt, this shall pause playback of the media.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 6.10.4.2

#### Defined in

[packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts#L56)

___

### play

▸ **play**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>\>

Upon receipt, this shall play media. If content is currently in a FastForward or Rewind state. Play shall
return media to normal playback speed.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 6.10.4.1

#### Defined in

[packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts:49](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts#L49)

___

### previous

▸ **previous**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>\>

Upon receipt, this shall cause the handler to be invoked for "Previous". User experience is
context-specific. This will often Go back to the previous media playback item.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 6.10.4.5

#### Defined in

[packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts:79](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts#L79)

___

### skipBackward

▸ **skipBackward**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>\>

Upon receipt, this shall Skip backward in the media by the given number of milliseconds.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `deltaPositionMilliseconds`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 6.10.4.10

#### Defined in

[packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts#L101)

___

### skipForward

▸ **skipForward**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>\>

Upon receipt, this shall Skip forward in the media by the given number of milliseconds.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `deltaPositionMilliseconds`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 6.10.4.9

#### Defined in

[packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts#L94)

___

### startOver

▸ **startOver**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>\>

Upon receipt, this shall Start Over with the current media playback item.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 6.10.4.4

#### Defined in

[packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts:71](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts#L71)

___

### stop

▸ **stop**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>\>

Upon receipt, this shall stop playback of the media. User-visible outcome is context-specific. This may
navigate the user back to the location from where the media was originally launched.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 6.10.4.3

#### Defined in

[packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts:64](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts#L64)
