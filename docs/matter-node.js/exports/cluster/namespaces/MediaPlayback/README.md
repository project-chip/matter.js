[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / MediaPlayback

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

> `readonly` **duration**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint` \| `null`, `any`\>

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

> `readonly` **sampledPosition**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md) \| `null`, `any`\>

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

> `readonly` **seekRangeEnd**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint` \| `null`, `any`\>

This shall indicate the furthest forward valid position to which a client may seek forward, in
milliseconds from the start of the media. When the media has an associated StartTime, a value of null
shall indicate that a seek forward is valid only until the current time within the media, using a
position computed from the difference between the current time offset and StartTime, in milliseconds
from start of the media, truncating fractional milliseconds towards 0. A value of Nas when StartTime is
not specified shall indicate that seeking forward is not allowed.

###### See

MatterSpecification.v11.Cluster § 6.10.3.7

##### attributes.seekRangeStart

> `readonly` **seekRangeStart**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint` \| `null`, `any`\>

This shall indicate the earliest valid position to which a client may seek back, in milliseconds from
start of the media. A value of Nas shall indicate that seeking backwards is not allowed.

###### See

MatterSpecification.v11.Cluster § 6.10.3.6

##### attributes.startTime

> `readonly` **startTime**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint` \| `null`, `any`\>

This shall indicate the start time of the media, in case the media has a fixed start time (for example,
live stream or television broadcast), or null when start time does not apply to the current

media (for example, video-on-demand). This time is a UTC time. The client needs to handle conversion to
local time, as required, taking in account time zone and possible local DST offset.

###### See

MatterSpecification.v11.Cluster § 6.10.3.2

##### commands

> `readonly` **commands**: `object`

##### commands.seek

> `readonly` **seek**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Upon receipt, this shall change the playback position in the media to the given position.

###### See

MatterSpecification.v11.Cluster § 6.10.4.11

#### Source

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:202

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

> `readonly` **next**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<`void`, [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Upon receipt, this shall cause the handler to be invoked for "Next". User experience is context-
specific. This will often Go forward to the next media playback item.

###### See

MatterSpecification.v11.Cluster § 6.10.4.6

##### commands.pause

> `readonly` **pause**: [`Command`](../../interfaces/Command.md)\<`void`, [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Upon receipt, this shall pause playback of the media.

###### See

MatterSpecification.v11.Cluster § 6.10.4.2

##### commands.play

> `readonly` **play**: [`Command`](../../interfaces/Command.md)\<`void`, [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Upon receipt, this shall play media. If content is currently in a FastForward or Rewind state. Play
shall return media to normal playback speed.

###### See

MatterSpecification.v11.Cluster § 6.10.4.1

##### commands.previous

> `readonly` **previous**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<`void`, [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Upon receipt, this shall cause the handler to be invoked for "Previous". User experience is
context-specific. This will often Go back to the previous media playback item.

###### See

MatterSpecification.v11.Cluster § 6.10.4.5

##### commands.skipBackward

> `readonly` **skipBackward**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Upon receipt, this shall Skip backward in the media by the given number of milliseconds.

###### See

MatterSpecification.v11.Cluster § 6.10.4.10

##### commands.skipForward

> `readonly` **skipForward**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Upon receipt, this shall Skip forward in the media by the given number of milliseconds.

###### See

MatterSpecification.v11.Cluster § 6.10.4.9

##### commands.startOver

> `readonly` **startOver**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<`void`, [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Upon receipt, this shall Start Over with the current media playback item.

###### See

MatterSpecification.v11.Cluster § 6.10.4.4

##### commands.stop

> `readonly` **stop**: [`Command`](../../interfaces/Command.md)\<`void`, [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

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

> `readonly` **advancedSeek**: [`BitFlag`](../../../schema/README.md#bitflag)

AdvancedSeek

Enables clients to implement more advanced media seeking behavior in their user interface, such as for
example a "seek bar". Adds support for Attributes and Commands related to advanced seek support

##### features.variableSpeed

> `readonly` **variableSpeed**: [`BitFlag`](../../../schema/README.md#bitflag)

VariableSpeed

Support for commands to support variable speed playback on media that supports it.

##### id

> `readonly` **id**: `1286`

##### name

> `readonly` **name**: `"MediaPlayback"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:441

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:1331

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

> `readonly` **next**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<`void`, [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Upon receipt, this shall cause the handler to be invoked for "Next". User experience is context-
specific. This will often Go forward to the next media playback item.

###### See

MatterSpecification.v11.Cluster § 6.10.4.6

##### commands.pause

> `readonly` **pause**: [`Command`](../../interfaces/Command.md)\<`void`, [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Upon receipt, this shall pause playback of the media.

###### See

MatterSpecification.v11.Cluster § 6.10.4.2

##### commands.play

> `readonly` **play**: [`Command`](../../interfaces/Command.md)\<`void`, [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Upon receipt, this shall play media. If content is currently in a FastForward or Rewind state. Play
shall return media to normal playback speed.

###### See

MatterSpecification.v11.Cluster § 6.10.4.1

##### commands.previous

> `readonly` **previous**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<`void`, [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Upon receipt, this shall cause the handler to be invoked for "Previous". User experience is
context-specific. This will often Go back to the previous media playback item.

###### See

MatterSpecification.v11.Cluster § 6.10.4.5

##### commands.skipBackward

> `readonly` **skipBackward**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Upon receipt, this shall Skip backward in the media by the given number of milliseconds.

###### See

MatterSpecification.v11.Cluster § 6.10.4.10

##### commands.skipForward

> `readonly` **skipForward**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Upon receipt, this shall Skip forward in the media by the given number of milliseconds.

###### See

MatterSpecification.v11.Cluster § 6.10.4.9

##### commands.startOver

> `readonly` **startOver**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<`void`, [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Upon receipt, this shall Start Over with the current media playback item.

###### See

MatterSpecification.v11.Cluster § 6.10.4.4

##### commands.stop

> `readonly` **stop**: [`Command`](../../interfaces/Command.md)\<`void`, [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

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

> `readonly` **advancedSeek**: [`BitFlag`](../../../schema/README.md#bitflag)

AdvancedSeek

Enables clients to implement more advanced media seeking behavior in their user interface, such as for
example a "seek bar". Adds support for Attributes and Commands related to advanced seek support

##### features.variableSpeed

> `readonly` **variableSpeed**: [`BitFlag`](../../../schema/README.md#bitflag)

VariableSpeed

Support for commands to support variable speed playback on media that supports it.

##### id

> `readonly` **id**: `1286`

##### name

> `readonly` **name**: `"MediaPlayback"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:882

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:1737

***

### CompleteInstance

> `const` **CompleteInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Complete](README.md#complete)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.acceptedCommandList

> `readonly` **acceptedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_CommandId/README.md)[], `never`\>

##### attributes.attributeList

> `readonly` **attributeList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_AttributeId/README.md)[], `never`\>

##### attributes.clusterRevision

> `readonly` **clusterRevision**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `never`\>

##### attributes.currentState

> `readonly` **currentState**: [`Attribute`](../../interfaces/Attribute.md)\<[`PlaybackState`](enumerations/PlaybackState.md), `any`\>

##### attributes.duration

> `readonly` **duration**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint` \| `null`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.eventList

> `readonly` **eventList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/EventId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_EventId/README.md)[], `never`\>

##### attributes.featureMap

> `readonly` **featureMap**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `never`\>

##### attributes.generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_CommandId/README.md)[], `never`\>

##### attributes.playbackSpeed

> `readonly` **playbackSpeed**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.sampledPosition

> `readonly` **sampledPosition**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md) \| `null`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.seekRangeEnd

> `readonly` **seekRangeEnd**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint` \| `null`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.seekRangeStart

> `readonly` **seekRangeStart**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint` \| `null`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.startTime

> `readonly` **startTime**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint` \| `null`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands

> `readonly` **commands**: `object`

##### commands.fastForward

> `readonly` **fastForward**: [`Command`](../../interfaces/Command.md)\<`void`, [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands.next

> `readonly` **next**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<`void`, [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Upon receipt, this shall cause the handler to be invoked for "Next". User experience is context-
specific. This will often Go forward to the next media playback item.

###### See

MatterSpecification.v11.Cluster § 6.10.4.6

##### commands.pause

> `readonly` **pause**: [`Command`](../../interfaces/Command.md)\<`void`, [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Upon receipt, this shall pause playback of the media.

###### See

MatterSpecification.v11.Cluster § 6.10.4.2

##### commands.play

> `readonly` **play**: [`Command`](../../interfaces/Command.md)\<`void`, [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Upon receipt, this shall play media. If content is currently in a FastForward or Rewind state. Play
shall return media to normal playback speed.

###### See

MatterSpecification.v11.Cluster § 6.10.4.1

##### commands.previous

> `readonly` **previous**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<`void`, [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Upon receipt, this shall cause the handler to be invoked for "Previous". User experience is
context-specific. This will often Go back to the previous media playback item.

###### See

MatterSpecification.v11.Cluster § 6.10.4.5

##### commands.rewind

> `readonly` **rewind**: [`Command`](../../interfaces/Command.md)\<`void`, [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands.seek

> `readonly` **seek**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands.skipBackward

> `readonly` **skipBackward**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Upon receipt, this shall Skip backward in the media by the given number of milliseconds.

###### See

MatterSpecification.v11.Cluster § 6.10.4.10

##### commands.skipForward

> `readonly` **skipForward**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Upon receipt, this shall Skip forward in the media by the given number of milliseconds.

###### See

MatterSpecification.v11.Cluster § 6.10.4.9

##### commands.startOver

> `readonly` **startOver**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<`void`, [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Upon receipt, this shall Start Over with the current media playback item.

###### See

MatterSpecification.v11.Cluster § 6.10.4.4

##### commands.stop

> `readonly` **stop**: [`Command`](../../interfaces/Command.md)\<`void`, [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Upon receipt, this shall stop playback of the media. User-visible outcome is context-specific. This may
navigate the user back to the location from where the media was originally launched.

###### See

MatterSpecification.v11.Cluster § 6.10.4.3

##### features

> `readonly` **features**: `object`

##### features.advancedSeek

> `readonly` **advancedSeek**: [`BitFlag`](../../../schema/README.md#bitflag)

AdvancedSeek

Enables clients to implement more advanced media seeking behavior in their user interface, such as for
example a "seek bar". Adds support for Attributes and Commands related to advanced seek support

##### features.variableSpeed

> `readonly` **variableSpeed**: [`BitFlag`](../../../schema/README.md#bitflag)

VariableSpeed

Support for commands to support variable speed playback on media that supports it.

##### id

> `readonly` **id**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/util/Type"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_util_Type/README.md)

##### name

> `readonly` **name**: `"MediaPlayback"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:1337

***

### TlvPlaybackPositionStruct

> `const` **TlvPlaybackPositionStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This structure defines a playback position within a media stream being played.

#### See

MatterSpecification.v11.Cluster § 6.10.5.3

#### Source

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:18

***

### TlvPlaybackResponse

> `const` **TlvPlaybackResponse**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This command shall be generated in response to various Playback Commands.

#### See

MatterSpecification.v11.Cluster § 6.10.4.12

#### Source

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:107

***

### TlvSeekRequest

> `const` **TlvSeekRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the MediaPlayback seek command

#### See

MatterSpecification.v11.Cluster § 6.10.4.11

#### Source

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:50

***

### TlvSkipBackwardRequest

> `const` **TlvSkipBackwardRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the MediaPlayback skipBackward command

#### See

MatterSpecification.v11.Cluster § 6.10.4.10

#### Source

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:179

***

### TlvSkipForwardRequest

> `const` **TlvSkipForwardRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the MediaPlayback skipForward command

#### See

MatterSpecification.v11.Cluster § 6.10.4.9

#### Source

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:154

***

### VariableSpeedComponent

> `const` **VariableSpeedComponent**: `object`

A MediaPlaybackCluster supports these elements if it supports feature VariableSpeed.

#### Type declaration

##### commands

> `readonly` **commands**: `object`

##### commands.fastForward

> `readonly` **fastForward**: [`Command`](../../interfaces/Command.md)\<`void`, [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

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

> `readonly` **rewind**: [`Command`](../../interfaces/Command.md)\<`void`, [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

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

packages/matter.js/dist/esm/cluster/definitions/MediaPlaybackCluster.d.ts:354
