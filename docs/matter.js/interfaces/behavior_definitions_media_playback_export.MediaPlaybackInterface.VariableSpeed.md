[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/media-playback/export](../modules/behavior_definitions_media_playback_export.md) / [MediaPlaybackInterface](../modules/behavior_definitions_media_playback_export.MediaPlaybackInterface.md) / VariableSpeed

# Interface: VariableSpeed

[behavior/definitions/media-playback/export](../modules/behavior_definitions_media_playback_export.md).[MediaPlaybackInterface](../modules/behavior_definitions_media_playback_export.MediaPlaybackInterface.md).VariableSpeed

## Table of contents

### Methods

- [fastForward](behavior_definitions_media_playback_export.MediaPlaybackInterface.VariableSpeed.md#fastforward)
- [rewind](behavior_definitions_media_playback_export.MediaPlaybackInterface.VariableSpeed.md#rewind)

## Methods

### fastForward

▸ **fastForward**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>\>

Upon receipt, this shall start playback of the media in the forward direction in case the media is currently
playing in the backward direction or is not playing. If the playback is already happening in the forward
direction receipt of this command shall increase the speed of the media playback.

Different "fast-forward" speeds may be be reflected on the media playback device based upon the number of
sequential calls to this function and the capability of the device. This is to avoid needing to define every
speed (multiple fast, slow motion, etc). If the PlaybackSpeed attribute is supported it shall be updated to
reflect the new speed of playback. If the playback speed cannot be changed for the media being played(for
example, in live streaming content not supporting seek), the status of NOT_ALLOWED shall be returned. If the
playback speed has reached the maximum supported speed for media playing forward, the status of
SPEED_OUT_OF_RANGE shall be returned.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 6.10.4.8

#### Defined in

[packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts:148](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts#L148)

___

### rewind

▸ **rewind**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>\>

Upon receipt, this shall start playback of the media backward in case the media is currently playing in the
forward direction or is not playing. If the playback is already happening in the backwards direction receipt
of this command shall increase the speed of the media playback back

wards.

Different "rewind" speeds may be be reflected on the media playback device based upon the number of
sequential calls to this function and the capability of the device. This is to avoid needing to define every
speed (multiple fast, slow motion, etc). If the PlaybackSpeed attribute is supported it shall be updated to
reflect the new speed of playback. If the playback speed cannot be changed for the media being played(for
example, in live streaming content not supporting seek), the status of NOT_ALLOWED shall be returned. If the
playback speed has reached the maximum supported speed for media playing backwards, the status of
SPEED_OUT_OF_RANGE shall be returned.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.MediaPlayback.Status.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 6.10.4.7

#### Defined in

[packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts:131](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts#L131)
