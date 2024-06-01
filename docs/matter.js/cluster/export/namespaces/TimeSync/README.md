[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / TimeSync

# Namespace: TimeSync

## Index

### Enumerations

- [Feature](enumerations/Feature.md)
- [Granularity](enumerations/Granularity.md)
- [StatusCode](enumerations/StatusCode.md)
- [TimeSource](enumerations/TimeSource.md)

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [Complete](interfaces/Complete.md)
- [DSTOffsetStruct](interfaces/DSTOffsetStruct.md)
- [SetUtcTimeRequest](interfaces/SetUtcTimeRequest.md)
- [TimeZoneStatusEvent](interfaces/TimeZoneStatusEvent.md)
- [TimeZoneStruct](interfaces/TimeZoneStruct.md)

## Variables

### Base

> `const` **Base**: `object`

These elements and properties are present in all TimeSync clusters.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.granularity

> `readonly` **granularity**: [`Attribute`](../../interfaces/Attribute.md)\<[`Granularity`](enumerations/Granularity.md), `any`\>

The granularity of the error that the server is willing to guarantee on the time synchronization. It is
of type GranularityEnum.

###### See

MatterSpecification.v11.Core § 11.16.8.2

##### attributes.timeSource

> `readonly` **timeSource**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`TimeSource`](enumerations/TimeSource.md), `any`\>

The server’s time source. This attribute indicates what method the server is using to sync, whether the
source uses NTS or not and whether the source is internal or external to the Fabric. This attribute may
be used by a client to determine its level of trust in the UTCTime. It is of type TimeSourceEnum.

If a server is unsure if the selected NTP server is within the Fabric, it SHOULD indicate the server is
NonFabric.

###### See

MatterSpecification.v11.Core § 11.16.8.3

##### attributes.trustedTimeNodeId

> `readonly` **trustedTimeNodeId**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`null` \| [`NodeId`](../../../../datatype/export/README.md#nodeid), `any`\>

The Node ID of a trusted Time Cluster. The TrustedTimeNodeId Node is used as a check on external time
sync sources and may be used as the primary time source if other time sources are unavailable. See
Section 11.16.13, “Time source prioritization”. This attribute is writeable only by an Administrator. It
SHOULD be set by the Commissioner during commissioning. If no appropriate TrustedTimeNodeId is
available, the commissioner may set this value to null.

###### See

MatterSpecification.v11.Core § 11.16.8.5

##### attributes.utcTime

> `readonly` **utcTime**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number` \| `bigint`, `any`\>

If the server has achieved time synchronization, this shall indicate the current time as a UTC epoch-us
(Epoch Time in Microseconds).

If the server has not achieved time synchronization, this shall be null. This attribute may be set when
a Section 11.16.9.1, “SetUtcTime Command” is received.

###### See

MatterSpecification.v11.Core § 11.16.8.1

##### commands

> `readonly` **commands**: `object`

##### commands.setUtcTime

> `readonly` **setUtcTime**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command may be issued by Administrator to set the time. If the Commissioner does not have a valid
time source, it may send a Granularity of NoTimeGranularity.

Upon receipt of this command, the server may update its UTCTime attribute to match the time specified in
the command, if the stated Granularity and TimeSource are acceptable. The server shall update its
UTCTime attribute if its current Granularity is NoTimeGranularity.

If the time is updated, the server shall also update its Granularity attribute as appropriate

server does not plan to maintain time). It shall also update its TimeSource attribute to Admin. It shall
also update its last known good UTC time.

If the server updates its UTCTime attribute, it shall accept the command with a status code of SUCCESS.
If it opts to not update its time, it shall fail the command with a cluster specific Status Code of
TimeNotAccepted.

###### See

MatterSpecification.v11.Core § 11.16.9.1

##### extensions

> `readonly` **extensions**: readonly [`object`, `object`, `object`]

This metadata controls which TimeSyncCluster elements matter.js activates for specific feature combinations.

##### features

> `readonly` **features**: `object`

##### features.ntpClient

> `readonly` **ntpClient**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

NtpClient

Server supports an NTP or SNTP client.

##### features.ntpServer

> `readonly` **ntpServer**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

NtpServer

Server supports an NTP server role.

##### features.timeZone

> `readonly` **timeZone**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

TimeZone

Server supports time zone.

##### id

> `readonly` **id**: `56` = `0x38`

##### name

> `readonly` **name**: `"TimeSync"` = `"TimeSync"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:495](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L495)

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:626](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L626)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.granularity

> `readonly` **granularity**: [`Attribute`](../../interfaces/Attribute.md)\<[`Granularity`](enumerations/Granularity.md), `any`\>

The granularity of the error that the server is willing to guarantee on the time synchronization. It is
of type GranularityEnum.

###### See

MatterSpecification.v11.Core § 11.16.8.2

##### attributes.timeSource

> `readonly` **timeSource**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`TimeSource`](enumerations/TimeSource.md), `any`\>

The server’s time source. This attribute indicates what method the server is using to sync, whether the
source uses NTS or not and whether the source is internal or external to the Fabric. This attribute may
be used by a client to determine its level of trust in the UTCTime. It is of type TimeSourceEnum.

If a server is unsure if the selected NTP server is within the Fabric, it SHOULD indicate the server is
NonFabric.

###### See

MatterSpecification.v11.Core § 11.16.8.3

##### attributes.trustedTimeNodeId

> `readonly` **trustedTimeNodeId**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`null` \| [`NodeId`](../../../../datatype/export/README.md#nodeid), `any`\>

The Node ID of a trusted Time Cluster. The TrustedTimeNodeId Node is used as a check on external time
sync sources and may be used as the primary time source if other time sources are unavailable. See
Section 11.16.13, “Time source prioritization”. This attribute is writeable only by an Administrator. It
SHOULD be set by the Commissioner during commissioning. If no appropriate TrustedTimeNodeId is
available, the commissioner may set this value to null.

###### See

MatterSpecification.v11.Core § 11.16.8.5

##### attributes.utcTime

> `readonly` **utcTime**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number` \| `bigint`, `any`\>

If the server has achieved time synchronization, this shall indicate the current time as a UTC epoch-us
(Epoch Time in Microseconds).

If the server has not achieved time synchronization, this shall be null. This attribute may be set when
a Section 11.16.9.1, “SetUtcTime Command” is received.

###### See

MatterSpecification.v11.Core § 11.16.8.1

##### commands

> `readonly` **commands**: `object`

##### commands.setUtcTime

> `readonly` **setUtcTime**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command may be issued by Administrator to set the time. If the Commissioner does not have a valid
time source, it may send a Granularity of NoTimeGranularity.

Upon receipt of this command, the server may update its UTCTime attribute to match the time specified in
the command, if the stated Granularity and TimeSource are acceptable. The server shall update its
UTCTime attribute if its current Granularity is NoTimeGranularity.

If the time is updated, the server shall also update its Granularity attribute as appropriate

server does not plan to maintain time). It shall also update its TimeSource attribute to Admin. It shall
also update its last known good UTC time.

If the server updates its UTCTime attribute, it shall accept the command with a status code of SUCCESS.
If it opts to not update its time, it shall fail the command with a cluster specific Status Code of
TimeNotAccepted.

###### See

MatterSpecification.v11.Core § 11.16.9.1

##### extensions

> `readonly` **extensions**: readonly [`object`, `object`, `object`]

This metadata controls which TimeSyncCluster elements matter.js activates for specific feature combinations.

##### features

> `readonly` **features**: `object`

##### features.ntpClient

> `readonly` **ntpClient**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

NtpClient

Server supports an NTP or SNTP client.

##### features.ntpServer

> `readonly` **ntpServer**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

NtpServer

Server supports an NTP server role.

##### features.timeZone

> `readonly` **timeZone**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

TimeZone

Server supports time zone.

##### id

> `readonly` **id**: `56` = `0x38`

##### name

> `readonly` **name**: `"TimeSync"` = `"TimeSync"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:607](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L607)

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:676](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L676)

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

##### attributes.defaultNtp

> `readonly` **defaultNtp**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`null` \| `string`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.dstOffset

> `readonly` **dstOffset**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\> & `object`

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

##### attributes.granularity

> `readonly` **granularity**: [`Attribute`](../../interfaces/Attribute.md)\<[`Granularity`](enumerations/Granularity.md), `any`\>

The granularity of the error that the server is willing to guarantee on the time synchronization. It is
of type GranularityEnum.

###### See

MatterSpecification.v11.Core § 11.16.8.2

##### attributes.localTime

> `readonly` **localTime**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number` \| `bigint`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.ntpServerPort

> `readonly` **ntpServerPort**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.timeSource

> `readonly` **timeSource**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`TimeSource`](enumerations/TimeSource.md), `any`\>

The server’s time source. This attribute indicates what method the server is using to sync, whether the
source uses NTS or not and whether the source is internal or external to the Fabric. This attribute may
be used by a client to determine its level of trust in the UTCTime. It is of type TimeSourceEnum.

If a server is unsure if the selected NTP server is within the Fabric, it SHOULD indicate the server is
NonFabric.

###### See

MatterSpecification.v11.Core § 11.16.8.3

##### attributes.timeZone

> `readonly` **timeZone**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.timeZoneDatabase

> `readonly` **timeZoneDatabase**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`boolean`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.trustedTimeNodeId

> `readonly` **trustedTimeNodeId**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`null` \| [`NodeId`](../../../../datatype/export/README.md#nodeid), `any`\>

The Node ID of a trusted Time Cluster. The TrustedTimeNodeId Node is used as a check on external time
sync sources and may be used as the primary time source if other time sources are unavailable. See
Section 11.16.13, “Time source prioritization”. This attribute is writeable only by an Administrator. It
SHOULD be set by the Commissioner during commissioning. If no appropriate TrustedTimeNodeId is
available, the commissioner may set this value to null.

###### See

MatterSpecification.v11.Core § 11.16.8.5

##### attributes.utcTime

> `readonly` **utcTime**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number` \| `bigint`, `any`\>

If the server has achieved time synchronization, this shall indicate the current time as a UTC epoch-us
(Epoch Time in Microseconds).

If the server has not achieved time synchronization, this shall be null. This attribute may be set when
a Section 11.16.9.1, “SetUtcTime Command” is received.

###### See

MatterSpecification.v11.Core § 11.16.8.1

##### commands

> `readonly` **commands**: `object` = `Cluster.commands`

##### commands.setUtcTime

> `readonly` **setUtcTime**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command may be issued by Administrator to set the time. If the Commissioner does not have a valid
time source, it may send a Granularity of NoTimeGranularity.

Upon receipt of this command, the server may update its UTCTime attribute to match the time specified in
the command, if the stated Granularity and TimeSource are acceptable. The server shall update its
UTCTime attribute if its current Granularity is NoTimeGranularity.

If the time is updated, the server shall also update its Granularity attribute as appropriate

server does not plan to maintain time). It shall also update its TimeSource attribute to Admin. It shall
also update its last known good UTC time.

If the server updates its UTCTime attribute, it shall accept the command with a status code of SUCCESS.
If it opts to not update its time, it shall fail the command with a cluster specific Status Code of
TimeNotAccepted.

###### See

MatterSpecification.v11.Core § 11.16.9.1

##### events

> `readonly` **events**: `object`

##### events.dstStatus

> `readonly` **dstStatus**: [`Event`](../../interfaces/Event.md)\<`void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### events.dstTableEmpty

> `readonly` **dstTableEmpty**: [`Event`](../../interfaces/Event.md)\<`void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### events.timeZoneStatus

> `readonly` **timeZoneStatus**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### features

> `readonly` **features**: `object` = `Cluster.features`

##### features.ntpClient

> `readonly` **ntpClient**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

NtpClient

Server supports an NTP or SNTP client.

##### features.ntpServer

> `readonly` **ntpServer**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

NtpServer

Server supports an NTP server role.

##### features.timeZone

> `readonly` **timeZone**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

TimeZone

Server supports time zone.

##### id

> `readonly` **id**: [`Branded`](../../../../util/export/README.md#brandedtb)\<`56`, `"ClusterId"`\> = `Cluster.id`

##### name

> `readonly` **name**: `"TimeSync"` = `Cluster.name`

##### revision

> `readonly` **revision**: `1` = `Cluster.revision`

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:636](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L636)

***

### NtpClientComponent

> `const` **NtpClientComponent**: `object`

A TimeSyncCluster supports these elements if it supports feature NtpClient.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.defaultNtp

> `readonly` **defaultNtp**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`null` \| `string`, `any`\>

The default NTP server the server’s Node may use if other time sources are unavailable. This attribute
may contain a domain name or a static IPv6 address in text format as specified in RFC 5952
[https://tools.ietf.org/html/rfc5952]. See Section 11.16.13, “Time source prioritization”. This
attribute is writeable only by an Administrator. It SHOULD be set by the Commissioner during
commissioning. If no default NTP is available, the Commissioner may set this value to null.

###### See

MatterSpecification.v11.Core § 11.16.8.4

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:304](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L304)

***

### NtpServerComponent

> `const` **NtpServerComponent**: `object`

A TimeSyncCluster supports these elements if it supports feature NtpServer.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.ntpServerPort

> `readonly` **ntpServerPort**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

If the server is running an NTP server, this value shall be the port number for the service. If the
server is not currently running an NTP server, this value shall be null.

This attribute shall be present if this server is capable of providing an NTP server instance. See
Section 11.16.15, “Acting as an NTP Server” for more information.

###### See

MatterSpecification.v11.Core § 11.16.8.10

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:449](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L449)

***

### TimeZoneComponent

> `const` **TimeZoneComponent**: `object`

A TimeSyncCluster supports these elements if it supports feature TimeZone.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.dstOffset

> `readonly` **dstOffset**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

A list of offsets to apply for daylight savings time, and their validity period. List entries shall be
sorted by ValidStarting time.

A list entry shall NOT have a ValidStarting time that is smaller than the ValidUntil time of the
previous entry.

Upon writing this attribute, the server shall recompute its LocalTime.

This list may hold up to 20 entries. If a server does not have sufficient storage for 20 entries, it may
truncate the list by removing entries with the largest ValidStarting times. The server shall reserve
sufficient storage for at least one entry.

Over time, the server SHOULD remove any entries which are no longer active from the list.

Over time, if the server supports a TimeZoneDatabase, it may update its own list to add additional
entries.

###### See

MatterSpecification.v11.Core § 11.16.8.7

##### attributes.localTime

> `readonly` **localTime**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number` \| `bigint`, `any`\>

The computed current local time of the server as a epoch-us (Epoch Time in Microseconds). The local time
offset of the value is the sum of the currently used TimeZoneEntry’s offset and the currently used DST
offset, if any.

If the server has not achieved time synchronization, this shall be null.

###### See

MatterSpecification.v11.Core § 11.16.8.8

##### attributes.timeZone

> `readonly` **timeZone**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

A list of time zone offsets from UTC and when they shall take effect. This attribute uses a list of time
offset configurations to allow Nodes to handle scheduled regulatory time zone changes. This attribute
shall NOT be used to indicate daylight savings time changes (see Section 11.16.8.7, “DSTOffset
Attribute” for daylight savings time).

The first entry shall have a ValidAt entry of 0. If there is a second entry, it shall have a non-zero
ValidAt time.

If a server supports a TimeZoneDatabase, the server may update its own DSTOffset list (Section
11.16.8.7, “DSTOffset Attribute”) to add new DST change times as required, based on the Name fields of
the TimeZoneStruct. Administrators may add additional entries to the DSTOffset of other Nodes with the
same time zone, if required.

If a server does not support a TimeZoneDatabase, the Name field of the TimeZoneStruct is only applicable
for client-side localization. In particular:

  • If the server does not support a TimeZoneDatabase, the Name field shall NOT be used to calculate the
    local time.

  • If the server does not support a TimeZoneDatabase, the Name field shall NOT be used to calculate DST
    start or end dates.

Upon writing this attribute, the server shall recompute its LocalTime, taking into account the Offset of
the currently used TimeZoneStruct.

When time passes, the server SHOULD remove any entries which are no longer active and change the ValidAt
time for the currently used TimeZoneStruct list item to zero.

###### See

MatterSpecification.v11.Core § 11.16.8.6

##### attributes.timeZoneDatabase

> `readonly` **timeZoneDatabase**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`boolean`, `any`\>

Indicates whether the server has access to a time zone database. Nodes with a time zone database may
update their own DSTOffset attribute to add new entries and may push DSTOffset updates to other Nodes in
the same time zone as required.

###### See

MatterSpecification.v11.Core § 11.16.8.9

##### events

> `readonly` **events**: `object`

##### events.dstStatus

> `readonly` **dstStatus**: [`Event`](../../interfaces/Event.md)\<`void`, `any`\>

This event shall be generated when the server starts or stops applying a DST offset.

This event contains a boolean predicate that indicates whether the server is applying the DST offset.
When the value is "true", the current DST offset is being applied (i.e, daylight savings time is
applied, as opposed to standard time).

###### See

MatterSpecification.v11.Core § 11.16.10.2

##### events.dstTableEmpty

> `readonly` **dstTableEmpty**: [`Event`](../../interfaces/Event.md)\<`void`, `any`\>

This event shall be generated when the server stops applying the current DSTOffset and there are no
entries in the list with a larger ValidStarting time, indicating the need to possibly get new DST data.

There is no data for this event.

###### See

MatterSpecification.v11.Core § 11.16.10.1

##### events.timeZoneStatus

> `readonly` **timeZoneStatus**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This event shall be generated when the server changes its time zone offset or name. It shall NOT be sent
for DST changes that are not accompanied by a time zone change.

This event returns a structure as follows:

###### See

MatterSpecification.v11.Core § 11.16.10.3

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:326](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L326)

***

### TlvDSTOffsetStruct

> `const` **TlvDSTOffsetStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v11.Core § 11.16.6.4

#### Type declaration

##### offset

> **offset**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

The DST offset in seconds. Normally this is in the range of 0 to 3600 seconds (1 hour), but this field will
accept any values in the int32 range to accommodate potential future legislation that does not fit with
these assumptions.

###### See

MatterSpecification.v11.Core § 11.16.6.4.1

##### validStarting

> **validStarting**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number` \| `bigint`\>

The UTC time when the offset shall be applied.

###### See

MatterSpecification.v11.Core § 11.16.6.4.2

##### validUntil

> **validUntil**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number` \| `bigint`\>

The UTC time when the offset shall stop being applied. This value shall be larger than the ValidStarting
time.

###### See

MatterSpecification.v11.Core § 11.16.6.4.3

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:70](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L70)

***

### TlvSetUtcTimeRequest

> `const` **TlvSetUtcTimeRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the TimeSync setUtcTime command

#### See

MatterSpecification.v11.Core § 11.16.9.1

#### Type declaration

##### granularity

> **granularity**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`Granularity`](enumerations/Granularity.md)\>

This shall give the Client’s Granularity, as described in Section 11.16.8.2, “Granularity Attribute”.

###### See

MatterSpecification.v11.Core § 11.16.9.1.2

##### timeSource

> **timeSource**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TimeSource`](enumerations/TimeSource.md)\>

This shall give the Client’s TimeSource, as described in Section 11.16.8.3, “TimeSource Attribute”.

###### See

MatterSpecification.v11.Core § 11.16.9.1.3

##### utcTime

> **utcTime**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number` \| `bigint`\>

This shall give the Client’s UTC Time.

###### See

MatterSpecification.v11.Core § 11.16.9.1.1

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:262](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L262)

***

### TlvTimeZoneStatusEvent

> `const` **TlvTimeZoneStatusEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the TimeSync timeZoneStatus event

#### See

MatterSpecification.v11.Core § 11.16.10.3

#### Type declaration

##### name

> **name**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`string`\>

Current time zone name. This name SHOULD use the country/city format specified by the IANA time zone
database [https://www.iana.org/time-zones].

###### See

MatterSpecification.v11.Core § 11.16.10.3.2

##### offset

> **offset**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

Current time zone offset from UTC in seconds.

###### See

MatterSpecification.v11.Core § 11.16.10.3.1

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:106](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L106)

***

### TlvTimeZoneStruct

> `const` **TlvTimeZoneStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v11.Core § 11.16.6.3

#### Type declaration

##### name

> **name**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`string`\>

The time zone name SHOULD provide a human-readable time zone name and it SHOULD use the country/city format
specified by the IANA time zone database [https://www.iana.org/time-zones].

###### See

MatterSpecification.v11.Core § 11.16.6.3.3

##### offset

> **offset**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

The time zone offset from UTC in seconds.

###### See

MatterSpecification.v11.Core § 11.16.6.3.1

##### validAt

> **validAt**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number` \| `bigint`\>

The UTC time when the offset shall be applied.

###### See

MatterSpecification.v11.Core § 11.16.6.3.2

#### Source

[packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeSyncCluster.ts#L38)
