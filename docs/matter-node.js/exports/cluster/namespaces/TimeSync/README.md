[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / TimeSync

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

> `readonly` **trustedTimeNodeId**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/NodeId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_NodeId/README.md) \| `null`, `any`\>

The Node ID of a trusted Time Cluster. The TrustedTimeNodeId Node is used as a check on external time
sync sources and may be used as the primary time source if other time sources are unavailable. See
Section 11.16.13, “Time source prioritization”. This attribute is writeable only by an Administrator. It
SHOULD be set by the Commissioner during commissioning. If no appropriate TrustedTimeNodeId is
available, the commissioner may set this value to null.

###### See

MatterSpecification.v11.Core § 11.16.8.5

##### attributes.utcTime

> `readonly` **utcTime**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint` \| `null`, `any`\>

If the server has achieved time synchronization, this shall indicate the current time as a UTC epoch-us
(Epoch Time in Microseconds).

If the server has not achieved time synchronization, this shall be null. This attribute may be set when
a Section 11.16.9.1, “SetUtcTime Command” is received.

###### See

MatterSpecification.v11.Core § 11.16.8.1

##### commands

> `readonly` **commands**: `object`

##### commands.setUtcTime

> `readonly` **setUtcTime**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

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

> `readonly` **ntpClient**: [`BitFlag`](../../../schema/README.md#bitflag)

NtpClient

Server supports an NTP or SNTP client.

##### features.ntpServer

> `readonly` **ntpServer**: [`BitFlag`](../../../schema/README.md#bitflag)

NtpServer

Server supports an NTP server role.

##### features.timeZone

> `readonly` **timeZone**: [`BitFlag`](../../../schema/README.md#bitflag)

TimeZone

Server supports time zone.

##### id

> `readonly` **id**: `56`

##### name

> `readonly` **name**: `"TimeSync"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:471

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:1113

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

> `readonly` **trustedTimeNodeId**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/NodeId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_NodeId/README.md) \| `null`, `any`\>

The Node ID of a trusted Time Cluster. The TrustedTimeNodeId Node is used as a check on external time
sync sources and may be used as the primary time source if other time sources are unavailable. See
Section 11.16.13, “Time source prioritization”. This attribute is writeable only by an Administrator. It
SHOULD be set by the Commissioner during commissioning. If no appropriate TrustedTimeNodeId is
available, the commissioner may set this value to null.

###### See

MatterSpecification.v11.Core § 11.16.8.5

##### attributes.utcTime

> `readonly` **utcTime**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint` \| `null`, `any`\>

If the server has achieved time synchronization, this shall indicate the current time as a UTC epoch-us
(Epoch Time in Microseconds).

If the server has not achieved time synchronization, this shall be null. This attribute may be set when
a Section 11.16.9.1, “SetUtcTime Command” is received.

###### See

MatterSpecification.v11.Core § 11.16.8.1

##### commands

> `readonly` **commands**: `object`

##### commands.setUtcTime

> `readonly` **setUtcTime**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

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

> `readonly` **ntpClient**: [`BitFlag`](../../../schema/README.md#bitflag)

NtpClient

Server supports an NTP or SNTP client.

##### features.ntpServer

> `readonly` **ntpServer**: [`BitFlag`](../../../schema/README.md#bitflag)

NtpServer

Server supports an NTP server role.

##### features.timeZone

> `readonly` **timeZone**: [`BitFlag`](../../../schema/README.md#bitflag)

TimeZone

Server supports time zone.

##### id

> `readonly` **id**: `56`

##### name

> `readonly` **name**: `"TimeSync"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:785

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:1352

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

##### attributes.defaultNtp

> `readonly` **defaultNtp**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`string` \| `null`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.dstOffset

> `readonly` **dstOffset**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\> & `object`

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

##### attributes.granularity

> `readonly` **granularity**: [`Attribute`](../../interfaces/Attribute.md)\<[`Granularity`](enumerations/Granularity.md), `any`\>

##### attributes.localTime

> `readonly` **localTime**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint` \| `null`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.ntpServerPort

> `readonly` **ntpServerPort**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.timeSource

> `readonly` **timeSource**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`TimeSource`](enumerations/TimeSource.md), `any`\>

##### attributes.timeZone

> `readonly` **timeZone**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.timeZoneDatabase

> `readonly` **timeZoneDatabase**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`boolean`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.trustedTimeNodeId

> `readonly` **trustedTimeNodeId**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/NodeId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_NodeId/README.md) \| `null`, `any`\>

##### attributes.utcTime

> `readonly` **utcTime**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint` \| `null`, `any`\>

##### commands

> `readonly` **commands**: `object`

##### commands.setUtcTime

> `readonly` **setUtcTime**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

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

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### events.dstTableEmpty

> `readonly` **dstTableEmpty**: [`Event`](../../interfaces/Event.md)\<`void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### events.timeZoneStatus

> `readonly` **timeZoneStatus**: [`Event`](../../interfaces/Event.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### features

> `readonly` **features**: `object`

##### features.ntpClient

> `readonly` **ntpClient**: [`BitFlag`](../../../schema/README.md#bitflag)

NtpClient

Server supports an NTP or SNTP client.

##### features.ntpServer

> `readonly` **ntpServer**: [`BitFlag`](../../../schema/README.md#bitflag)

NtpServer

Server supports an NTP server role.

##### features.timeZone

> `readonly` **timeZone**: [`BitFlag`](../../../schema/README.md#bitflag)

TimeZone

Server supports time zone.

##### id

> `readonly` **id**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/util/Type"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_util_Type/README.md)

##### name

> `readonly` **name**: `"TimeSync"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:1119

***

### NtpClientComponent

> `const` **NtpClientComponent**: `object`

A TimeSyncCluster supports these elements if it supports feature NtpClient.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.defaultNtp

> `readonly` **defaultNtp**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`string` \| `null`, `any`\>

The default NTP server the server’s Node may use if other time sources are unavailable. This attribute
may contain a domain name or a static IPv6 address in text format as specified in RFC 5952
[https://tools.ietf.org/html/rfc5952]. See Section 11.16.13, “Time source prioritization”. This
attribute is writeable only by an Administrator. It SHOULD be set by the Commissioner during
commissioning. If no default NTP is available, the Commissioner may set this value to null.

###### See

MatterSpecification.v11.Core § 11.16.8.4

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:248

***

### NtpServerComponent

> `const` **NtpServerComponent**: `object`

A TimeSyncCluster supports these elements if it supports feature NtpServer.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.ntpServerPort

> `readonly` **ntpServerPort**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

If the server is running an NTP server, this value shall be the port number for the service. If the
server is not currently running an NTP server, this value shall be null.

This attribute shall be present if this server is capable of providing an NTP server instance. See
Section 11.16.15, “Acting as an NTP Server” for more information.

###### See

MatterSpecification.v11.Core § 11.16.8.10

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:429

***

### TimeZoneComponent

> `const` **TimeZoneComponent**: `object`

A TimeSyncCluster supports these elements if it supports feature TimeZone.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.dstOffset

> `readonly` **dstOffset**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

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

> `readonly` **localTime**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint` \| `null`, `any`\>

The computed current local time of the server as a epoch-us (Epoch Time in Microseconds). The local time
offset of the value is the sum of the currently used TimeZoneEntry’s offset and the currently used DST
offset, if any.

If the server has not achieved time synchronization, this shall be null.

###### See

MatterSpecification.v11.Core § 11.16.8.8

##### attributes.timeZone

> `readonly` **timeZone**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

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

> `readonly` **timeZoneStatus**: [`Event`](../../interfaces/Event.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

This event shall be generated when the server changes its time zone offset or name. It shall NOT be sent
for DST changes that are not accompanied by a time zone change.

This event returns a structure as follows:

###### See

MatterSpecification.v11.Core § 11.16.10.3

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:265

***

### TlvDSTOffsetStruct

> `const` **TlvDSTOffsetStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v11.Core § 11.16.6.4

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:45

***

### TlvSetUtcTimeRequest

> `const` **TlvSetUtcTimeRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the TimeSync setUtcTime command

#### See

MatterSpecification.v11.Core § 11.16.9.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:210

***

### TlvTimeZoneStatusEvent

> `const` **TlvTimeZoneStatusEvent**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Body of the TimeSync timeZoneStatus event

#### See

MatterSpecification.v11.Core § 11.16.10.3

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:78

***

### TlvTimeZoneStruct

> `const` **TlvTimeZoneStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v11.Core § 11.16.6.3

#### Source

packages/matter.js/dist/esm/cluster/definitions/TimeSyncCluster.d.ts:16
