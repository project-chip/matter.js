[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / Channel

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

> `readonly` **currentChannel**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md) \| `null`, `any`\>

This optional field contains the current channel. When supported but a channel is not currently tuned to
(if a content application is in foreground), the value of the field shall be null.

###### See

MatterSpecification.v11.Cluster § 6.6.3.3

##### commands

> `readonly` **commands**: `object`

##### commands.changeChannelByNumber

> `readonly` **changeChannelByNumber**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

Change the channel to the channel with the given Number in the ChannelList attribute.

###### See

MatterSpecification.v11.Cluster § 6.6.4.3

##### commands.skipChannel

> `readonly` **skipChannel**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

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

> `readonly` **channelList**: [`BitFlag`](../../../schema/README.md#bitflag)

ChannelList

Provides list of available channels.

##### features.lineupInfo

> `readonly` **lineupInfo**: [`BitFlag`](../../../schema/README.md#bitflag)

LineupInfo

Provides lineup info, which is a reference to an external source of lineup information.

##### id

> `readonly` **id**: `1284`

##### name

> `readonly` **name**: `"Channel"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:356

***

### ChannelListComponent

> `const` **ChannelListComponent**: `object`

A ChannelCluster supports these elements if it supports feature ChannelList.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.channelList

> `readonly` **channelList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

This optional list provides the channels supported.

###### See

MatterSpecification.v11.Cluster § 6.6.3.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:220

***

### ChannelListOrLineupInfoComponent

> `const` **ChannelListOrLineupInfoComponent**: `object`

A ChannelCluster supports these elements if it supports features ChannelList or LineupInfo.

#### Type declaration

##### commands

> `readonly` **commands**: `object`

##### commands.changeChannel

> `readonly` **changeChannel**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Change the channel to the channel case-insensitive exact matching the value passed as an argument.

The match priority order shall be: AffiliateCallSign ("KCTS"), CallSign ("PBS"), Name ("Comedy
Central"), Number ("13.1")

Upon receipt, this shall generate a ChangeChannelResponse command.

Upon success, the CurrentChannel attribute, if supported, shall be updated to reflect the change.

###### See

MatterSpecification.v11.Cluster § 6.6.4.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:297

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:908

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.currentChannel

> `readonly` **currentChannel**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md) \| `null`, `any`\>

This optional field contains the current channel. When supported but a channel is not currently tuned to
(if a content application is in foreground), the value of the field shall be null.

###### See

MatterSpecification.v11.Cluster § 6.6.3.3

##### commands

> `readonly` **commands**: `object`

##### commands.changeChannelByNumber

> `readonly` **changeChannelByNumber**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

Change the channel to the channel with the given Number in the ChannelList attribute.

###### See

MatterSpecification.v11.Cluster § 6.6.4.3

##### commands.skipChannel

> `readonly` **skipChannel**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

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

> `readonly` **channelList**: [`BitFlag`](../../../schema/README.md#bitflag)

ChannelList

Provides list of available channels.

##### features.lineupInfo

> `readonly` **lineupInfo**: [`BitFlag`](../../../schema/README.md#bitflag)

LineupInfo

Provides lineup info, which is a reference to an external source of lineup information.

##### id

> `readonly` **id**: `1284`

##### name

> `readonly` **name**: `"Channel"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:629

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:1153

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

##### attributes.channelList

> `readonly` **channelList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

The Lineup Info allows references to external lineup sources like Gracenote. The combination of OperatorName,
LineupName, and PostalCode MUST uniquely identify a lineup.

###### See

MatterSpecification.v11.Cluster § 6.6.5.2

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.clusterRevision

> `readonly` **clusterRevision**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `never`\>

##### attributes.currentChannel

> `readonly` **currentChannel**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md) \| `null`, `any`\>

##### attributes.eventList

> `readonly` **eventList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/EventId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_EventId/README.md)[], `never`\>

##### attributes.featureMap

> `readonly` **featureMap**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `never`\>

##### attributes.generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_CommandId/README.md)[], `never`\>

##### attributes.lineup

> `readonly` **lineup**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md) \| `null`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

The Lineup Info allows references to external lineup sources like Gracenote. The combination of OperatorName,
LineupName, and PostalCode MUST uniquely identify a lineup.

###### See

MatterSpecification.v11.Cluster § 6.6.5.2

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands

> `readonly` **commands**: `object`

##### commands.changeChannel

> `readonly` **changeChannel**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`, `object`]

###### optional

> `readonly` **optional**: `true`

The Lineup Info allows references to external lineup sources like Gracenote. The combination of OperatorName,
LineupName, and PostalCode MUST uniquely identify a lineup.

###### See

MatterSpecification.v11.Cluster § 6.6.5.2

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands.changeChannelByNumber

> `readonly` **changeChannelByNumber**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

Change the channel to the channel with the given Number in the ChannelList attribute.

###### See

MatterSpecification.v11.Cluster § 6.6.4.3

##### commands.skipChannel

> `readonly` **skipChannel**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

This command provides channel up and channel down functionality, but allows channel index jumps of size
Count.

When the value of the increase or decrease is larger than the number of channels remaining in the given
direction, then the behavior shall be to return to the beginning (or end) of the channel list and
continue. For example, if the current channel is at index 0 and count value of -1 is given, then the
current channel should change to the last channel.

###### See

MatterSpecification.v11.Cluster § 6.6.4.4

##### features

> `readonly` **features**: `object`

##### features.channelList

> `readonly` **channelList**: [`BitFlag`](../../../schema/README.md#bitflag)

ChannelList

Provides list of available channels.

##### features.lineupInfo

> `readonly` **lineupInfo**: [`BitFlag`](../../../schema/README.md#bitflag)

LineupInfo

Provides lineup info, which is a reference to an external source of lineup information.

##### id

> `readonly` **id**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/util/Type"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_util_Type/README.md)

##### name

> `readonly` **name**: `"Channel"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:914

***

### LineupInfoComponent

> `const` **LineupInfoComponent**: `object`

A ChannelCluster supports these elements if it supports feature LineupInfo.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.lineup

> `readonly` **lineup**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md) \| `null`, `any`\>

This optional field identifies the channel lineup using external data sources.

###### See

MatterSpecification.v11.Cluster § 6.6.3.2

#### Source

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:269

***

### TlvChangeChannelByNumberRequest

> `const` **TlvChangeChannelByNumberRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the Channel changeChannelByNumber command

#### See

MatterSpecification.v11.Cluster § 6.6.4.3

#### Source

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:175

***

### TlvChangeChannelRequest

> `const` **TlvChangeChannelRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the Channel changeChannel command

#### See

MatterSpecification.v11.Cluster § 6.6.4.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:112

***

### TlvChangeChannelResponse

> `const` **TlvChangeChannelResponse**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This command shall be generated in response to a ChangeChannel command.

#### See

MatterSpecification.v11.Cluster § 6.6.4.2

#### Source

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:149

***

### TlvChannelInfoStruct

> `const` **TlvChannelInfoStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This indicates a channel in a channel lineup.

While the major and minor numbers in the ChannelInfoStruct support use of ATSC channel format, a lineup may use
other formats which can map into these numeric values.

#### See

MatterSpecification.v11.Cluster § 6.6.5.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:21

***

### TlvLineupInfoStruct

> `const` **TlvLineupInfoStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

The Lineup Info allows references to external lineup sources like Gracenote. The combination of OperatorName,
LineupName, and PostalCode MUST uniquely identify a lineup.

#### See

MatterSpecification.v11.Cluster § 6.6.5.2

#### Source

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:83

***

### TlvSkipChannelRequest

> `const` **TlvSkipChannelRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the Channel skipChannel command

#### See

MatterSpecification.v11.Cluster § 6.6.4.4

#### Source

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:201
