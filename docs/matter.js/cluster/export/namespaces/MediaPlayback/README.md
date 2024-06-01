[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / MediaPlayback

# Namespace: MediaPlayback

## Index

### Enumerations

- [Feature](enumerations/Feature.md)
- [PlaybackState](enumerations/PlaybackState.md)
- [Status](enumerations/Status.md)

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [Complete](interfaces/Complete.md)
- [PlaybackPositionStruct](interfaces/PlaybackPositionStruct.md)
- [PlaybackResponse](interfaces/PlaybackResponse.md)
- [SeekRequest](interfaces/SeekRequest.md)
- [SkipBackwardRequest](interfaces/SkipBackwardRequest.md)
- [SkipForwardRequest](interfaces/SkipForwardRequest.md)

## Variables

### AdvancedSeekComponent

> `const` **AdvancedSeekComponent**: `object`

A MediaPlaybackCluster supports these elements if it supports feature AdvancedSeek.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.duration

> `readonly` **duration**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number` \| `bigint`, `any`\>

This shall indicate the duration, in milliseconds, of the current media being played back or null when
duration is not applicable (for example, in live streaming content with no known duration). This
attribute shall never be 0.

###### See

MatterSpecification.v11.Cluster § 6.10.3.3

##### attributes.playbackSpeed

> `readonly` **playbackSpeed**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

This shall indicate the speed at which the current media is being played. The new PlaybackSpeed

shall be reflected in this attribute whenever any of the following occurs:

  • Starting of playback

  • Resuming of playback

  • Fast-forwarding

  • Rewinding

The PlaybackSpeed shall reflect the ratio of time elapsed in the media to the actual time taken for the
playback assuming no changes to media playback (for example buffering events or requests to
pause/rewind/forward).

  • A value for PlaybackSpeed of 1 shall indicate normal playback where, for example, playback for 1
    second causes the media to advance by 1 second within the duration of the media.

  • A value for PlaybackSpeed which is greater than 0 shall indicate that as playback is happening the
    media is currently advancing in time within the duration of the media.

  • A value for PlaybackSpeed which is less than 0 shall indicate that as playback is happening the
    media is currently going back in time within the duration of the media.

  • A value for PlaybackSpeed of 0 shall indicate that the media is currently not playing back. When the
    CurrentState attribute has the value of PAUSED, NOT_PLAYING or BUFFERING, the Playback

Speed shall be set to 0 to reflect that the media is not playing.

Following examples illustrate the PlaybackSpeed attribute values in various conditions.

###### See

MatterSpecification.v11.Cluster § 6.10.3.5

##### attributes.sampledPosition

> `readonly` **sampledPosition**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This shall indicate the position of playback (Position field) at the time (UpdateAt field) specified in
the attribute. The client may use the SampledPosition attribute to compute the current position within
the media stream based on the PlaybackSpeed, PlaybackPositionStruct.UpdatedAt and
PlaybackPositionStruct.Position fields. To enable this, the SampledPosition attribute shall be updated
whenever a change in either the playback speed or the playback position is triggered outside the normal
playback of the media. The events which may cause this to happen include:

  • Starting or resumption of playback

  • Seeking

  • Skipping forward or backward

  • Fast-forwarding or rewinding

  • Updating of playback speed as a result of explicit request, or as a result of buffering events

###### See

MatterSpecification.v11.Cluster § 6.10.3.4

##### attributes.seekRangeEnd

> `readonly` **seekRangeEnd**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number` \| `bigint`, `any`\>

This shall indicate the furthest forward valid position to which a client may seek forward, in
milliseconds from the start of the media. When the media has an associated StartTime, a value of null
shall indicate that a seek forward is valid only until the current time within the media, using a
position computed from the difference between the current time offset and StartTime, in milliseconds
from start of the media, truncating fractional milliseconds towards 0. A value of Nas when StartTime is
not specified shall indicate that seeking forward is not allowed.

###### See

MatterSpecification.v11.Cluster § 6.10.3.7

##### attributes.seekRangeStart

> `readonly` **seekRangeStart**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number` \| `bigint`, `any`\>

This shall indicate the earliest valid position to which a client may seek back, in milliseconds from
start of the media. A value of Nas shall indicate that seeking backwards is not allowed.

###### See

MatterSpecification.v11.Cluster § 6.10.3.6

##### attributes.startTime

> `readonly` **startTime**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number` \| `bigint`, `any`\>

This shall indicate the start time of the media, in case the media has a fixed start time (for example,
live stream or television broadcast), or null when start time does not apply to the current

media (for example, video-on-demand). This time is a UTC time. The client needs to handle conversion to
local time, as required, taking in account time zone and possible local DST offset.

###### See

MatterSpecification.v11.Cluster § 6.10.3.2

##### commands

> `readonly` **commands**: `object`

##### commands.seek

> `readonly` **seek**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall change the playback position in the media to the given position.

###### See

MatterSpecification.v11.Cluster § 6.10.4.11

#### Source

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:228](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L228)

***

### Base

> `const` **Base**: `object`

These elements and properties are present in all MediaPlayback clusters.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.currentState

> `readonly` **currentState**: [`Attribute`](../../interfaces/Attribute.md)\<[`PlaybackState`](enumerations/PlaybackState.md), `any`\>

This shall indicate the current playback state of media.

During fast-forward, rewind, and other seek operations; this attribute shall be set to PLAYING.

###### See

MatterSpecification.v11.Cluster § 6.10.3.1

##### commands

> `readonly` **commands**: `object`

##### commands.next

> `readonly` **next**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<`void`, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall cause the handler to be invoked for "Next". User experience is context-
specific. This will often Go forward to the next media playback item.

###### See

MatterSpecification.v11.Cluster § 6.10.4.6

##### commands.pause

> `readonly` **pause**: [`Command`](../../interfaces/Command.md)\<`void`, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall pause playback of the media.

###### See

MatterSpecification.v11.Cluster § 6.10.4.2

##### commands.play

> `readonly` **play**: [`Command`](../../interfaces/Command.md)\<`void`, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall play media. If content is currently in a FastForward or Rewind state. Play
shall return media to normal playback speed.

###### See

MatterSpecification.v11.Cluster § 6.10.4.1

##### commands.previous

> `readonly` **previous**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<`void`, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall cause the handler to be invoked for "Previous". User experience is
context-specific. This will often Go back to the previous media playback item.

###### See

MatterSpecification.v11.Cluster § 6.10.4.5

##### commands.skipBackward

> `readonly` **skipBackward**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall Skip backward in the media by the given number of milliseconds.

###### See

MatterSpecification.v11.Cluster § 6.10.4.10

##### commands.skipForward

> `readonly` **skipForward**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall Skip forward in the media by the given number of milliseconds.

###### See

MatterSpecification.v11.Cluster § 6.10.4.9

##### commands.startOver

> `readonly` **startOver**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<`void`, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall Start Over with the current media playback item.

###### See

MatterSpecification.v11.Cluster § 6.10.4.4

##### commands.stop

> `readonly` **stop**: [`Command`](../../interfaces/Command.md)\<`void`, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall stop playback of the media. User-visible outcome is context-specific. This may
navigate the user back to the location from where the media was originally launched.

###### See

MatterSpecification.v11.Cluster § 6.10.4.3

##### extensions

> `readonly` **extensions**: readonly [`object`, `object`]

This metadata controls which MediaPlaybackCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.advancedSeek

> `readonly` **advancedSeek**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

AdvancedSeek

Enables clients to implement more advanced media seeking behavior in their user interface, such as for
example a "seek bar". Adds support for Attributes and Commands related to advanced seek support

##### features.variableSpeed

> `readonly` **variableSpeed**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

VariableSpeed

Support for commands to support variable speed playback on media that supports it.

##### id

> `readonly` **id**: `1286` = `0x506`

##### name

> `readonly` **name**: `"MediaPlayback"` = `"MediaPlayback"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:408](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L408)

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:529](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L529)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.currentState

> `readonly` **currentState**: [`Attribute`](../../interfaces/Attribute.md)\<[`PlaybackState`](enumerations/PlaybackState.md), `any`\>

This shall indicate the current playback state of media.

During fast-forward, rewind, and other seek operations; this attribute shall be set to PLAYING.

###### See

MatterSpecification.v11.Cluster § 6.10.3.1

##### commands

> `readonly` **commands**: `object`

##### commands.next

> `readonly` **next**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<`void`, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall cause the handler to be invoked for "Next". User experience is context-
specific. This will often Go forward to the next media playback item.

###### See

MatterSpecification.v11.Cluster § 6.10.4.6

##### commands.pause

> `readonly` **pause**: [`Command`](../../interfaces/Command.md)\<`void`, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall pause playback of the media.

###### See

MatterSpecification.v11.Cluster § 6.10.4.2

##### commands.play

> `readonly` **play**: [`Command`](../../interfaces/Command.md)\<`void`, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall play media. If content is currently in a FastForward or Rewind state. Play
shall return media to normal playback speed.

###### See

MatterSpecification.v11.Cluster § 6.10.4.1

##### commands.previous

> `readonly` **previous**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<`void`, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall cause the handler to be invoked for "Previous". User experience is
context-specific. This will often Go back to the previous media playback item.

###### See

MatterSpecification.v11.Cluster § 6.10.4.5

##### commands.skipBackward

> `readonly` **skipBackward**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall Skip backward in the media by the given number of milliseconds.

###### See

MatterSpecification.v11.Cluster § 6.10.4.10

##### commands.skipForward

> `readonly` **skipForward**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall Skip forward in the media by the given number of milliseconds.

###### See

MatterSpecification.v11.Cluster § 6.10.4.9

##### commands.startOver

> `readonly` **startOver**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<`void`, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall Start Over with the current media playback item.

###### See

MatterSpecification.v11.Cluster § 6.10.4.4

##### commands.stop

> `readonly` **stop**: [`Command`](../../interfaces/Command.md)\<`void`, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall stop playback of the media. User-visible outcome is context-specific. This may
navigate the user back to the location from where the media was originally launched.

###### See

MatterSpecification.v11.Cluster § 6.10.4.3

##### extensions

> `readonly` **extensions**: readonly [`object`, `object`]

This metadata controls which MediaPlaybackCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.advancedSeek

> `readonly` **advancedSeek**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

AdvancedSeek

Enables clients to implement more advanced media seeking behavior in their user interface, such as for
example a "seek bar". Adds support for Attributes and Commands related to advanced seek support

##### features.variableSpeed

> `readonly` **variableSpeed**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

VariableSpeed

Support for commands to support variable speed playback on media that supports it.

##### id

> `readonly` **id**: `1286` = `0x506`

##### name

> `readonly` **name**: `"MediaPlayback"` = `"MediaPlayback"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:516](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L516)

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:583](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L583)

***

### CompleteInstance

> `const` **CompleteInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Complete](README.md#complete)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.acceptedCommandList

> `readonly` **acceptedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`CommandId`](../../../../datatype/export/README.md#commandid)[], `never`\>

List of client generated commands which are supported by this cluster server instance.

##### attributes.attributeList

> `readonly` **attributeList**: [`Attribute`](../../interfaces/Attribute.md)\<[`AttributeId`](../../../../datatype/export/README.md#attributeid)[], `never`\>

List of the attribute IDs of the attributes supported by the cluster instance.

##### attributes.clusterRevision

> `readonly` **clusterRevision**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `never`\>

Indicates the revision of the server cluster specification supported by the cluster instance.

##### attributes.currentState

> `readonly` **currentState**: [`Attribute`](../../interfaces/Attribute.md)\<[`PlaybackState`](enumerations/PlaybackState.md), `any`\>

This shall indicate the current playback state of media.

During fast-forward, rewind, and other seek operations; this attribute shall be set to PLAYING.

###### See

MatterSpecification.v11.Cluster § 6.10.3.1

##### attributes.duration

> `readonly` **duration**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number` \| `bigint`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.eventList

> `readonly` **eventList**: [`Attribute`](../../interfaces/Attribute.md)\<[`EventId`](../../../../datatype/export/README.md#eventid)[], `never`\>

List of the event IDs of the events supported by the cluster instance.

##### attributes.featureMap

> `readonly` **featureMap**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `never`\>

Indicates whether the server supports zero or more optional cluster features.

##### attributes.generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`CommandId`](../../../../datatype/export/README.md#commandid)[], `never`\>

List of server generated commands (server to client commands).

##### attributes.playbackSpeed

> `readonly` **playbackSpeed**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.sampledPosition

> `readonly` **sampledPosition**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.seekRangeEnd

> `readonly` **seekRangeEnd**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number` \| `bigint`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.seekRangeStart

> `readonly` **seekRangeStart**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number` \| `bigint`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.startTime

> `readonly` **startTime**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number` \| `bigint`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands

> `readonly` **commands**: `object`

##### commands.fastForward

> `readonly` **fastForward**: [`Command`](../../interfaces/Command.md)\<`void`, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.next

> `readonly` **next**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<`void`, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall cause the handler to be invoked for "Next". User experience is context-
specific. This will often Go forward to the next media playback item.

###### See

MatterSpecification.v11.Cluster § 6.10.4.6

##### commands.pause

> `readonly` **pause**: [`Command`](../../interfaces/Command.md)\<`void`, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall pause playback of the media.

###### See

MatterSpecification.v11.Cluster § 6.10.4.2

##### commands.play

> `readonly` **play**: [`Command`](../../interfaces/Command.md)\<`void`, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall play media. If content is currently in a FastForward or Rewind state. Play
shall return media to normal playback speed.

###### See

MatterSpecification.v11.Cluster § 6.10.4.1

##### commands.previous

> `readonly` **previous**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<`void`, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall cause the handler to be invoked for "Previous". User experience is
context-specific. This will often Go back to the previous media playback item.

###### See

MatterSpecification.v11.Cluster § 6.10.4.5

##### commands.rewind

> `readonly` **rewind**: [`Command`](../../interfaces/Command.md)\<`void`, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.seek

> `readonly` **seek**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.skipBackward

> `readonly` **skipBackward**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall Skip backward in the media by the given number of milliseconds.

###### See

MatterSpecification.v11.Cluster § 6.10.4.10

##### commands.skipForward

> `readonly` **skipForward**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall Skip forward in the media by the given number of milliseconds.

###### See

MatterSpecification.v11.Cluster § 6.10.4.9

##### commands.startOver

> `readonly` **startOver**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<`void`, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall Start Over with the current media playback item.

###### See

MatterSpecification.v11.Cluster § 6.10.4.4

##### commands.stop

> `readonly` **stop**: [`Command`](../../interfaces/Command.md)\<`void`, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall stop playback of the media. User-visible outcome is context-specific. This may
navigate the user back to the location from where the media was originally launched.

###### See

MatterSpecification.v11.Cluster § 6.10.4.3

##### features

> `readonly` **features**: `object` = `Cluster.features`

##### features.advancedSeek

> `readonly` **advancedSeek**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

AdvancedSeek

Enables clients to implement more advanced media seeking behavior in their user interface, such as for
example a "seek bar". Adds support for Attributes and Commands related to advanced seek support

##### features.variableSpeed

> `readonly` **variableSpeed**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

VariableSpeed

Support for commands to support variable speed playback on media that supports it.

##### id

> `readonly` **id**: [`Branded`](../../../../util/export/README.md#brandedtb)\<`1286`, `"ClusterId"`\> = `Cluster.id`

##### name

> `readonly` **name**: `"MediaPlayback"` = `Cluster.name`

##### revision

> `readonly` **revision**: `1` = `Cluster.revision`

#### Source

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:538](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L538)

***

### TlvPlaybackPositionStruct

> `const` **TlvPlaybackPositionStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This structure defines a playback position within a media stream being played.

#### See

MatterSpecification.v11.Cluster § 6.10.5.3

#### Type declaration

##### position

> **position**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `number` \| `bigint`\>

This shall indicate the associated discrete position within the media stream, in milliseconds from the
beginning of the stream, being associated with the time indicated by the UpdatedAt field. The Position shall
not be greater than the duration of the media if duration is specified. The Position shall not be greater
than the time difference between current time and start time of the media when start time is specified.

A value of null shall indicate that playback position is not applicable for the current state of the media
playback (For example : Live media with no known duration and where seek is not supported).

###### See

MatterSpecification.v11.Cluster § 6.10.5.3.2

##### updatedAt

> **updatedAt**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number` \| `bigint`\>

This shall indicate the time when the position was last updated.

###### See

MatterSpecification.v11.Cluster § 6.10.5.3.1

#### Source

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L27)

***

### TlvPlaybackResponse

> `const` **TlvPlaybackResponse**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This command shall be generated in response to various Playback Commands.

#### See

MatterSpecification.v11.Cluster § 6.10.4.12

#### Type declaration

##### data

> **data**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`Uint8Array`\>

This shall indicate Optional app-specific data.

###### See

MatterSpecification.v11.Cluster § 6.10.4.12.2

##### status

> **status**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`Status`](enumerations/Status.md)\>

This shall indicate the status of the command which resulted in this response.

###### See

MatterSpecification.v11.Cluster § 6.10.4.12.1

#### Source

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:125](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L125)

***

### TlvSeekRequest

> `const` **TlvSeekRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the MediaPlayback seek command

#### See

MatterSpecification.v11.Cluster § 6.10.4.11

#### Type declaration

##### position

> **position**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number` \| `bigint`\>

This shall indicate the position (in milliseconds) in the media to seek to. In case the position falls in
the middle of a frame, the server shall set the position to the beginning of that frame and set the
SampledPosition attribute on the cluster accordingly. If the position falls before the earliest valid
position or beyond the furthest valid position to which a client may seek back or forward to respectively,
the status of SEEK_OUT_OF_RANGE shall be returned and no change shall be made to the position of the
playback.

###### See

MatterSpecification.v11.Cluster § 6.10.4.11.1

#### Source

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L61)

***

### TlvSkipBackwardRequest

> `const` **TlvSkipBackwardRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the MediaPlayback skipBackward command

#### See

MatterSpecification.v11.Cluster § 6.10.4.10

#### Type declaration

##### deltaPositionMilliseconds

> **deltaPositionMilliseconds**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number` \| `bigint`\>

This shall indicate the duration of the time span to skip backward in the media, in milliseconds. In case
the resulting position falls in the middle of a frame, the server shall set the position to the beginning of
that frame and set the SampledPosition attribute on the cluster accordingly. If the resultant position falls
before the earliest valid position to which a client may seek back to, the position should be set to that
earliest valid position. If the SampledPosition attribute is supported it shall be updated on the cluster
accordingly.

###### See

MatterSpecification.v11.Cluster § 6.10.4.10.1

#### Source

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:204](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L204)

***

### TlvSkipForwardRequest

> `const` **TlvSkipForwardRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the MediaPlayback skipForward command

#### See

MatterSpecification.v11.Cluster § 6.10.4.9

#### Type declaration

##### deltaPositionMilliseconds

> **deltaPositionMilliseconds**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number` \| `bigint`\>

This shall indicate the duration of the time span to skip forward in the media, in milliseconds. In case the
resulting position falls in the middle of a frame, the server shall set the position to the beginning of
that frame and set the SampledPosition attribute on the cluster accordingly. If the resultant position falls
beyond the furthest valid position in the media the client may seek forward to, the position should be set
to that furthest valid position. If the SampledPosition attribute is supported it shall be updated on the
cluster accordingly.

###### See

MatterSpecification.v11.Cluster § 6.10.4.9.1

#### Source

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:178](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L178)

***

### VariableSpeedComponent

> `const` **VariableSpeedComponent**: `object`

A MediaPlaybackCluster supports these elements if it supports feature VariableSpeed.

#### Type declaration

##### commands

> `readonly` **commands**: `object`

##### commands.fastForward

> `readonly` **fastForward**: [`Command`](../../interfaces/Command.md)\<`void`, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall start playback of the media in the forward direction in case the media is
currently playing in the backward direction or is not playing. If the playback is already happening in
the forward direction receipt of this command shall increase the speed of the media playback.

Different "fast-forward" speeds may be be reflected on the media playback device based upon the number
of sequential calls to this function and the capability of the device. This is to avoid needing to
define every speed (multiple fast, slow motion, etc). If the PlaybackSpeed attribute is supported it
shall be updated to reflect the new speed of playback. If the playback speed cannot be changed for the
media being played(for example, in live streaming content not supporting seek), the status of
NOT_ALLOWED shall be returned. If the playback speed has reached the maximum supported speed for media
playing forward, the status of SPEED_OUT_OF_RANGE shall be returned.

###### See

MatterSpecification.v11.Cluster § 6.10.4.8

##### commands.rewind

> `readonly` **rewind**: [`Command`](../../interfaces/Command.md)\<`void`, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall start playback of the media backward in case the media is currently playing in
the forward direction or is not playing. If the playback is already happening in the backwards direction
receipt of this command shall increase the speed of the media playback back

wards.

Different "rewind" speeds may be be reflected on the media playback device based upon the number of
sequential calls to this function and the capability of the device. This is to avoid needing to define
every speed (multiple fast, slow motion, etc). If the PlaybackSpeed attribute is supported it shall be
updated to reflect the new speed of playback. If the playback speed cannot be changed for the media
being played(for example, in live streaming content not supporting seek), the status of NOT_ALLOWED
shall be returned. If the playback speed has reached the maximum supported speed for media playing
backwards, the status of SPEED_OUT_OF_RANGE shall be returned.

###### See

MatterSpecification.v11.Cluster § 6.10.4.7

#### Source

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:343](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L343)
