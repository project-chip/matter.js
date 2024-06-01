[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/media-playback/export](../../../README.md) / [MediaPlaybackInterface](../README.md) / VariableSpeed

# Interface: VariableSpeed

## Methods

### fastForward()

> **fastForward**(): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

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

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### See

MatterSpecification.v11.Cluster § 6.10.4.8

#### Source

[packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts:148](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts#L148)

***

### rewind()

> **rewind**(): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

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

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### See

MatterSpecification.v11.Cluster § 6.10.4.7

#### Source

[packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts:131](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/media-playback/MediaPlaybackInterface.ts#L131)
