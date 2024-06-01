[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / Channel

# Namespace: Channel

## Index

### Enumerations

- [Feature](enumerations/Feature.md)
- [LineupInfoType](enumerations/LineupInfoType.md)
- [Status](enumerations/Status.md)

### Interfaces

- [ChangeChannelByNumberRequest](interfaces/ChangeChannelByNumberRequest.md)
- [ChangeChannelRequest](interfaces/ChangeChannelRequest.md)
- [ChangeChannelResponse](interfaces/ChangeChannelResponse.md)
- [ChannelInfoStruct](interfaces/ChannelInfoStruct.md)
- [Cluster](interfaces/Cluster.md)
- [Complete](interfaces/Complete.md)
- [LineupInfoStruct](interfaces/LineupInfoStruct.md)
- [SkipChannelRequest](interfaces/SkipChannelRequest.md)

## Variables

### Base

> `const` **Base**: `object`

These elements and properties are present in all Channel clusters.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.currentChannel

> `readonly` **currentChannel**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This optional field contains the current channel. When supported but a channel is not currently tuned to
(if a content application is in foreground), the value of the field shall be null.

###### See

MatterSpecification.v11.Cluster § 6.6.3.3

##### commands

> `readonly` **commands**: `object`

##### commands.changeChannelByNumber

> `readonly` **changeChannelByNumber**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

Change the channel to the channel with the given Number in the ChannelList attribute.

###### See

MatterSpecification.v11.Cluster § 6.6.4.3

##### commands.skipChannel

> `readonly` **skipChannel**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command provides channel up and channel down functionality, but allows channel index jumps of size
Count.

When the value of the increase or decrease is larger than the number of channels remaining in the given
direction, then the behavior shall be to return to the beginning (or end) of the channel list and
continue. For example, if the current channel is at index 0 and count value of -1 is given, then the
current channel should change to the last channel.

###### See

MatterSpecification.v11.Cluster § 6.6.4.4

##### extensions

> `readonly` **extensions**: readonly [`object`, `object`, `object`, `object`]

This metadata controls which ChannelCluster elements matter.js activates for specific feature combinations.

##### features

> `readonly` **features**: `object`

##### features.channelList

> `readonly` **channelList**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

ChannelList

Provides list of available channels.

##### features.lineupInfo

> `readonly` **lineupInfo**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

LineupInfo

Provides lineup info, which is a reference to an external source of lineup information.

##### id

> `readonly` **id**: `1284` = `0x504`

##### name

> `readonly` **name**: `"Channel"` = `"Channel"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:317](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L317)

***

### ChannelListComponent

> `const` **ChannelListComponent**: `object`

A ChannelCluster supports these elements if it supports feature ChannelList.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.channelList

> `readonly` **channelList**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

This optional list provides the channels supported.

###### See

MatterSpecification.v11.Cluster § 6.6.3.1

#### Source

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:247](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L247)

***

### ChannelListOrLineupInfoComponent

> `const` **ChannelListOrLineupInfoComponent**: `object`

A ChannelCluster supports these elements if it supports features ChannelList or LineupInfo.

#### Type declaration

##### commands

> `readonly` **commands**: `object`

##### commands.changeChannel

> `readonly` **changeChannel**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

Change the channel to the channel case-insensitive exact matching the value passed as an argument.

The match priority order shall be: AffiliateCallSign ("KCTS"), CallSign ("PBS"), Name ("Comedy
Central"), Number ("13.1")

Upon receipt, this shall generate a ChangeChannelResponse command.

Upon success, the CurrentChannel attribute, if supported, shall be updated to reflect the change.

###### See

MatterSpecification.v11.Cluster § 6.6.4.1

#### Source

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:275](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L275)

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:395](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L395)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.currentChannel

> `readonly` **currentChannel**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This optional field contains the current channel. When supported but a channel is not currently tuned to
(if a content application is in foreground), the value of the field shall be null.

###### See

MatterSpecification.v11.Cluster § 6.6.3.3

##### commands

> `readonly` **commands**: `object`

##### commands.changeChannelByNumber

> `readonly` **changeChannelByNumber**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

Change the channel to the channel with the given Number in the ChannelList attribute.

###### See

MatterSpecification.v11.Cluster § 6.6.4.3

##### commands.skipChannel

> `readonly` **skipChannel**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command provides channel up and channel down functionality, but allows channel index jumps of size
Count.

When the value of the increase or decrease is larger than the number of channels remaining in the given
direction, then the behavior shall be to return to the beginning (or end) of the channel list and
continue. For example, if the current channel is at index 0 and count value of -1 is given, then the
current channel should change to the last channel.

###### See

MatterSpecification.v11.Cluster § 6.6.4.4

##### extensions

> `readonly` **extensions**: readonly [`object`, `object`, `object`, `object`]

This metadata controls which ChannelCluster elements matter.js activates for specific feature combinations.

##### features

> `readonly` **features**: `object`

##### features.channelList

> `readonly` **channelList**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

ChannelList

Provides list of available channels.

##### features.lineupInfo

> `readonly` **lineupInfo**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

LineupInfo

Provides lineup info, which is a reference to an external source of lineup information.

##### id

> `readonly` **id**: `1284` = `0x504`

##### name

> `readonly` **name**: `"Channel"` = `"Channel"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:384](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L384)

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:434](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L434)

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

##### attributes.channelList

> `readonly` **channelList**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.clusterRevision

> `readonly` **clusterRevision**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `never`\>

Indicates the revision of the server cluster specification supported by the cluster instance.

##### attributes.currentChannel

> `readonly` **currentChannel**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This optional field contains the current channel. When supported but a channel is not currently tuned to
(if a content application is in foreground), the value of the field shall be null.

###### See

MatterSpecification.v11.Cluster § 6.6.3.3

##### attributes.eventList

> `readonly` **eventList**: [`Attribute`](../../interfaces/Attribute.md)\<[`EventId`](../../../../datatype/export/README.md#eventid)[], `never`\>

List of the event IDs of the events supported by the cluster instance.

##### attributes.featureMap

> `readonly` **featureMap**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `never`\>

Indicates whether the server supports zero or more optional cluster features.

##### attributes.generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`CommandId`](../../../../datatype/export/README.md#commandid)[], `never`\>

List of server generated commands (server to client commands).

##### attributes.lineup

> `readonly` **lineup**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

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

##### commands.changeChannel

> `readonly` **changeChannel**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`, `object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.changeChannelByNumber

> `readonly` **changeChannelByNumber**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

Change the channel to the channel with the given Number in the ChannelList attribute.

###### See

MatterSpecification.v11.Cluster § 6.6.4.3

##### commands.skipChannel

> `readonly` **skipChannel**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command provides channel up and channel down functionality, but allows channel index jumps of size
Count.

When the value of the increase or decrease is larger than the number of channels remaining in the given
direction, then the behavior shall be to return to the beginning (or end) of the channel list and
continue. For example, if the current channel is at index 0 and count value of -1 is given, then the
current channel should change to the last channel.

###### See

MatterSpecification.v11.Cluster § 6.6.4.4

##### features

> `readonly` **features**: `object` = `Cluster.features`

##### features.channelList

> `readonly` **channelList**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

ChannelList

Provides list of available channels.

##### features.lineupInfo

> `readonly` **lineupInfo**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

LineupInfo

Provides lineup info, which is a reference to an external source of lineup information.

##### id

> `readonly` **id**: [`Branded`](../../../../util/export/README.md#brandedtb)\<`1284`, `"ClusterId"`\> = `Cluster.id`

##### name

> `readonly` **name**: `"Channel"` = `Cluster.name`

##### revision

> `readonly` **revision**: `1` = `Cluster.revision`

#### Source

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:404](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L404)

***

### LineupInfoComponent

> `const` **LineupInfoComponent**: `object`

A ChannelCluster supports these elements if it supports feature LineupInfo.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.lineup

> `readonly` **lineup**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This optional field identifies the channel lineup using external data sources.

###### See

MatterSpecification.v11.Cluster § 6.6.3.2

#### Source

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:261](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L261)

***

### TlvChangeChannelByNumberRequest

> `const` **TlvChangeChannelByNumberRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the Channel changeChannelByNumber command

#### See

MatterSpecification.v11.Cluster § 6.6.4.3

#### Type declaration

##### majorNumber

> **majorNumber**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This shall indicate the channel major number value (ATSC format) to which the channel should change.

###### See

MatterSpecification.v11.Cluster § 6.6.4.3.1

##### minorNumber

> **minorNumber**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This shall indicate the channel minor number value (ATSC format) to which the channel should change.

###### See

MatterSpecification.v11.Cluster § 6.6.4.3.2

#### Source

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:199](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L199)

***

### TlvChangeChannelRequest

> `const` **TlvChangeChannelRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the Channel changeChannel command

#### See

MatterSpecification.v11.Cluster § 6.6.4.1

#### Type declaration

##### match

> **match**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`string`\>

This shall contain a user-input string to match in order to identify the target channel.

###### See

MatterSpecification.v11.Cluster § 6.6.4.1.1

#### Source

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:130](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L130)

***

### TlvChangeChannelResponse

> `const` **TlvChangeChannelResponse**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This command shall be generated in response to a ChangeChannel command.

#### See

MatterSpecification.v11.Cluster § 6.6.4.2

#### Type declaration

##### data

> **data**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`Uint8Array`\>

This shall indicate Optional app-specific data.

###### See

MatterSpecification.v11.Cluster § 6.6.4.2.2

##### status

> **status**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`Status`](enumerations/Status.md)\>

This shall indicate the status of the command which resulted in this response.

###### See

MatterSpecification.v11.Cluster § 6.6.4.2.1

#### Source

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:171](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L171)

***

### TlvChannelInfoStruct

> `const` **TlvChannelInfoStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This indicates a channel in a channel lineup.

While the major and minor numbers in the ChannelInfoStruct support use of ATSC channel format, a lineup may use
other formats which can map into these numeric values.

#### See

MatterSpecification.v11.Cluster § 6.6.5.1

#### Type declaration

##### affiliateCallSign

> **affiliateCallSign**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`string`\>

This shall indicate the local affiliate call sign, such as "KCTS". This field is optional, but SHOULD be
provided when known.

###### See

MatterSpecification.v11.Cluster § 6.6.5.1.5

##### callSign

> **callSign**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`string`\>

This shall indicate the call sign of the channel, such as "PBS". This field is optional, but SHOULD be
provided when known.

###### See

MatterSpecification.v11.Cluster § 6.6.5.1.4

##### majorNumber

> **majorNumber**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This shall indicate the channel major number value (for example, using ATSC format). When the channel number
is expressed as a string, such as "13.1" or "256", the major number would be 13 or 256, respectively.

###### See

MatterSpecification.v11.Cluster § 6.6.5.1.1

##### minorNumber

> **minorNumber**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This shall indicate the channel minor number value (for example, using ATSC format). When the channel number
is expressed as a string, such as "13.1" or "256", the minor number would be 1 or 0, respectively.

###### See

MatterSpecification.v11.Cluster § 6.6.5.1.2

##### name

> **name**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`string`\>

This shall indicate the marketing name for the channel, such as “The CW" or "Comedy Central". This field is
optional, but SHOULD be provided when known.

###### See

MatterSpecification.v11.Cluster § 6.6.5.1.3

#### Source

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L30)

***

### TlvLineupInfoStruct

> `const` **TlvLineupInfoStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

The Lineup Info allows references to external lineup sources like Gracenote. The combination of OperatorName,
LineupName, and PostalCode MUST uniquely identify a lineup.

#### See

MatterSpecification.v11.Cluster § 6.6.5.2

#### Type declaration

##### lineupInfoType

> **lineupInfoType**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`Mso`](enumerations/LineupInfoType.md#mso)\>

This shall indicate the type of lineup. This field is optional, but SHOULD be provided when known.

###### See

MatterSpecification.v11.Cluster § 6.6.5.2.4

##### lineupName

> **lineupName**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`string`\>

##### operatorName

> **operatorName**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`string`\>

This shall indicate the name of the operator, for example “Comcast”.

###### See

MatterSpecification.v11.Cluster § 6.6.5.2.1

##### postalCode

> **postalCode**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`string`\>

#### Source

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:98](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L98)

***

### TlvSkipChannelRequest

> `const` **TlvSkipChannelRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the Channel skipChannel command

#### See

MatterSpecification.v11.Cluster § 6.6.4.4

#### Type declaration

##### count

> **count**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This shall indicate the number of steps to increase (Count is positive) or decrease (Count is negative) the
current channel.

###### See

MatterSpecification.v11.Cluster § 6.6.4.4.1

#### Source

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:227](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L227)
