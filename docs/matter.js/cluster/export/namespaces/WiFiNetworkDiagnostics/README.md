[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / WiFiNetworkDiagnostics

# Namespace: WiFiNetworkDiagnostics

## Index

### Enumerations

- [AssociationFailureCause](enumerations/AssociationFailureCause.md)
- [ConnectionStatus](enumerations/ConnectionStatus.md)
- [Feature](enumerations/Feature.md)
- [SecurityType](enumerations/SecurityType.md)
- [WiFiVersion](enumerations/WiFiVersion.md)

### Interfaces

- [AssociationFailureEvent](interfaces/AssociationFailureEvent.md)
- [Cluster](interfaces/Cluster.md)
- [Complete](interfaces/Complete.md)
- [ConnectionStatusEvent](interfaces/ConnectionStatusEvent.md)
- [DisconnectionEvent](interfaces/DisconnectionEvent.md)

## Variables

### Base

> `const` **Base**: `object`

These elements and properties are present in all WiFiNetworkDiagnostics clusters.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.bssid

> `readonly` **bssid**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `Uint8Array`, `any`\>

The BSSID attribute shall indicate the BSSID for which the Wi-Fi network the Node is currently connected.

###### See

MatterSpecification.v11.Core § 11.14.6.1

##### attributes.channelNumber

> `readonly` **channelNumber**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

The ChannelNumber attribute shall indicate the channel that Wi-Fi communication is currently operating
on.

###### See

MatterSpecification.v11.Core § 11.14.6.4

##### attributes.currentMaxRate

> `readonly` **currentMaxRate**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number` \| `bigint`, `any`\>

The CurrentMaxRate attribute shall indicate the current maximum PHY rate of transfer of data in
bits-per-second.

###### See

MatterSpecification.v11.Core § 11.14.6.12

##### attributes.rssi

> `readonly` **rssi**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

The RSSI attribute shall indicate the current RSSI of the Node’s Wi-Fi radio in dBm.

###### See

MatterSpecification.v11.Core § 11.14.6.5

##### attributes.securityType

> `readonly` **securityType**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| [`SecurityType`](enumerations/SecurityType.md), `any`\>

The SecurityType attribute shall indicate the current type of Wi-Fi security used.

###### See

MatterSpecification.v11.Core § 11.14.6.2

##### attributes.wiFiVersion

> `readonly` **wiFiVersion**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| [`WiFiVersion`](enumerations/WiFiVersion.md), `any`\>

The WiFiVersion attribute shall indicate the current 802.11 standard version in use by the Node, per the
table below.

###### See

MatterSpecification.v11.Core § 11.14.6.3

##### events

> `readonly` **events**: `object`

##### events.associationFailure

> `readonly` **associationFailure**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The AssociationFailure event shall indicate that a Node has attempted to connect, or reconnect, to a
Wi-Fi access point, but is unable to successfully associate or authenticate, after exhausting all
internal retries of its supplicant.

###### See

MatterSpecification.v11.Core § 11.14.8.2

##### events.connectionStatus

> `readonly` **connectionStatus**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The ConnectionStatus Event shall indicate that a Node’s connection status to a Wi-Fi network has
changed. Connected, in this context, shall mean that a Node acting as a Wi-Fi station is successfully
associated to a Wi-Fi Access Point.

###### See

MatterSpecification.v11.Core § 11.14.8.3

##### events.disconnection

> `readonly` **disconnection**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The Disconnection Event shall indicate that a Node’s Wi-Fi connection has been disconnected as a result
of de-authenticated or dis-association and indicates the reason.

###### See

MatterSpecification.v11.Core § 11.14.8.1

##### extensions

> `readonly` **extensions**: readonly [`object`, `object`]

This metadata controls which WiFiNetworkDiagnosticsCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.errorCounts

> `readonly` **errorCounts**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

ErrorCounts

Node makes available the counts for the number of errors that have occurred during the reception and
transmission of packets on the Wi-Fi interface.

##### features.packetCounts

> `readonly` **packetCounts**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

PacketCounts

Node makes available the counts for the number of received and transmitted packets on the Wi-Fi
interface.

##### id

> `readonly` **id**: `54` = `0x36`

##### name

> `readonly` **name**: `"WiFiNetworkDiagnostics"` = `"WiFiNetworkDiagnostics"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:334](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L334)

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:463](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L463)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.bssid

> `readonly` **bssid**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `Uint8Array`, `any`\>

The BSSID attribute shall indicate the BSSID for which the Wi-Fi network the Node is currently connected.

###### See

MatterSpecification.v11.Core § 11.14.6.1

##### attributes.channelNumber

> `readonly` **channelNumber**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

The ChannelNumber attribute shall indicate the channel that Wi-Fi communication is currently operating
on.

###### See

MatterSpecification.v11.Core § 11.14.6.4

##### attributes.currentMaxRate

> `readonly` **currentMaxRate**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number` \| `bigint`, `any`\>

The CurrentMaxRate attribute shall indicate the current maximum PHY rate of transfer of data in
bits-per-second.

###### See

MatterSpecification.v11.Core § 11.14.6.12

##### attributes.rssi

> `readonly` **rssi**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

The RSSI attribute shall indicate the current RSSI of the Node’s Wi-Fi radio in dBm.

###### See

MatterSpecification.v11.Core § 11.14.6.5

##### attributes.securityType

> `readonly` **securityType**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| [`SecurityType`](enumerations/SecurityType.md), `any`\>

The SecurityType attribute shall indicate the current type of Wi-Fi security used.

###### See

MatterSpecification.v11.Core § 11.14.6.2

##### attributes.wiFiVersion

> `readonly` **wiFiVersion**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| [`WiFiVersion`](enumerations/WiFiVersion.md), `any`\>

The WiFiVersion attribute shall indicate the current 802.11 standard version in use by the Node, per the
table below.

###### See

MatterSpecification.v11.Core § 11.14.6.3

##### events

> `readonly` **events**: `object`

##### events.associationFailure

> `readonly` **associationFailure**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The AssociationFailure event shall indicate that a Node has attempted to connect, or reconnect, to a
Wi-Fi access point, but is unable to successfully associate or authenticate, after exhausting all
internal retries of its supplicant.

###### See

MatterSpecification.v11.Core § 11.14.8.2

##### events.connectionStatus

> `readonly` **connectionStatus**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The ConnectionStatus Event shall indicate that a Node’s connection status to a Wi-Fi network has
changed. Connected, in this context, shall mean that a Node acting as a Wi-Fi station is successfully
associated to a Wi-Fi Access Point.

###### See

MatterSpecification.v11.Core § 11.14.8.3

##### events.disconnection

> `readonly` **disconnection**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The Disconnection Event shall indicate that a Node’s Wi-Fi connection has been disconnected as a result
of de-authenticated or dis-association and indicates the reason.

###### See

MatterSpecification.v11.Core § 11.14.8.1

##### extensions

> `readonly` **extensions**: readonly [`object`, `object`]

This metadata controls which WiFiNetworkDiagnosticsCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.errorCounts

> `readonly` **errorCounts**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

ErrorCounts

Node makes available the counts for the number of errors that have occurred during the reception and
transmission of packets on the Wi-Fi interface.

##### features.packetCounts

> `readonly` **packetCounts**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

PacketCounts

Node makes available the counts for the number of received and transmitted packets on the Wi-Fi
interface.

##### id

> `readonly` **id**: `54` = `0x36`

##### name

> `readonly` **name**: `"WiFiNetworkDiagnostics"` = `"WiFiNetworkDiagnostics"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:449](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L449)

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:526](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L526)

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

##### attributes.beaconLostCount

> `readonly` **beaconLostCount**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.beaconRxCount

> `readonly` **beaconRxCount**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.bssid

> `readonly` **bssid**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `Uint8Array`, `any`\>

The BSSID attribute shall indicate the BSSID for which the Wi-Fi network the Node is currently connected.

###### See

MatterSpecification.v11.Core § 11.14.6.1

##### attributes.channelNumber

> `readonly` **channelNumber**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

The ChannelNumber attribute shall indicate the channel that Wi-Fi communication is currently operating
on.

###### See

MatterSpecification.v11.Core § 11.14.6.4

##### attributes.clusterRevision

> `readonly` **clusterRevision**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `never`\>

Indicates the revision of the server cluster specification supported by the cluster instance.

##### attributes.currentMaxRate

> `readonly` **currentMaxRate**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number` \| `bigint`, `any`\>

The CurrentMaxRate attribute shall indicate the current maximum PHY rate of transfer of data in
bits-per-second.

###### See

MatterSpecification.v11.Core § 11.14.6.12

##### attributes.eventList

> `readonly` **eventList**: [`Attribute`](../../interfaces/Attribute.md)\<[`EventId`](../../../../datatype/export/README.md#eventid)[], `never`\>

List of the event IDs of the events supported by the cluster instance.

##### attributes.featureMap

> `readonly` **featureMap**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `never`\>

Indicates whether the server supports zero or more optional cluster features.

##### attributes.generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`CommandId`](../../../../datatype/export/README.md#commandid)[], `never`\>

List of server generated commands (server to client commands).

##### attributes.overrunCount

> `readonly` **overrunCount**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number` \| `bigint`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.packetMulticastRxCount

> `readonly` **packetMulticastRxCount**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.packetMulticastTxCount

> `readonly` **packetMulticastTxCount**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.packetUnicastRxCount

> `readonly` **packetUnicastRxCount**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.packetUnicastTxCount

> `readonly` **packetUnicastTxCount**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.rssi

> `readonly` **rssi**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

The RSSI attribute shall indicate the current RSSI of the Node’s Wi-Fi radio in dBm.

###### See

MatterSpecification.v11.Core § 11.14.6.5

##### attributes.securityType

> `readonly` **securityType**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| [`SecurityType`](enumerations/SecurityType.md), `any`\>

The SecurityType attribute shall indicate the current type of Wi-Fi security used.

###### See

MatterSpecification.v11.Core § 11.14.6.2

##### attributes.wiFiVersion

> `readonly` **wiFiVersion**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| [`WiFiVersion`](enumerations/WiFiVersion.md), `any`\>

The WiFiVersion attribute shall indicate the current 802.11 standard version in use by the Node, per the
table below.

###### See

MatterSpecification.v11.Core § 11.14.6.3

##### commands

> `readonly` **commands**: `object`

##### commands.resetCounts

> `readonly` **resetCounts**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### events

> `readonly` **events**: `object` = `Cluster.events`

##### events.associationFailure

> `readonly` **associationFailure**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The AssociationFailure event shall indicate that a Node has attempted to connect, or reconnect, to a
Wi-Fi access point, but is unable to successfully associate or authenticate, after exhausting all
internal retries of its supplicant.

###### See

MatterSpecification.v11.Core § 11.14.8.2

##### events.connectionStatus

> `readonly` **connectionStatus**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The ConnectionStatus Event shall indicate that a Node’s connection status to a Wi-Fi network has
changed. Connected, in this context, shall mean that a Node acting as a Wi-Fi station is successfully
associated to a Wi-Fi Access Point.

###### See

MatterSpecification.v11.Core § 11.14.8.3

##### events.disconnection

> `readonly` **disconnection**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The Disconnection Event shall indicate that a Node’s Wi-Fi connection has been disconnected as a result
of de-authenticated or dis-association and indicates the reason.

###### See

MatterSpecification.v11.Core § 11.14.8.1

##### features

> `readonly` **features**: `object` = `Cluster.features`

##### features.errorCounts

> `readonly` **errorCounts**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

ErrorCounts

Node makes available the counts for the number of errors that have occurred during the reception and
transmission of packets on the Wi-Fi interface.

##### features.packetCounts

> `readonly` **packetCounts**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

PacketCounts

Node makes available the counts for the number of received and transmitted packets on the Wi-Fi
interface.

##### id

> `readonly` **id**: [`Branded`](../../../../util/export/README.md#brandedtb)\<`54`, `"ClusterId"`\> = `Cluster.id`

##### name

> `readonly` **name**: `"WiFiNetworkDiagnostics"` = `Cluster.name`

##### revision

> `readonly` **revision**: `1` = `Cluster.revision`

#### Source

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:472](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L472)

***

### ErrorCountsComponent

> `const` **ErrorCountsComponent**: `object`

A WiFiNetworkDiagnosticsCluster supports these elements if it supports feature ErrorCounts.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.beaconLostCount

> `readonly` **beaconLostCount**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

The BeaconLostCount attribute shall indicate the count of the number of missed beacons the Node has
detected. If the Node does not have an ability to count beacons expected and not received, this value
may remain set to zero.

###### See

MatterSpecification.v11.Core § 11.14.6.6

##### attributes.overrunCount

> `readonly` **overrunCount**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number` \| `bigint`, `any`\>

The OverrunCount attribute shall indicate the number of packets dropped either at ingress or egress, due
to lack of buffer memory to retain all packets on the network interface. The OverrunCount attribute
shall be reset to 0 upon a reboot of the Node.

###### See

MatterSpecification.v11.Core § 11.14.6.13

##### commands

> `readonly` **commands**: `object`

##### commands.resetCounts

> `readonly` **resetCounts**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

Reception of this command shall reset the following attributes to 0:

  • BeaconLostCount

  • BeaconRxCount

  • PacketMulticastRxCount

  • PacketMulticastTxCount

  • PacketUnicastRxCount

  • PacketUnicastTxCount

This command has no associated data.

###### See

MatterSpecification.v11.Core § 11.14.7.1

#### Source

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:216](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L216)

***

### PacketCountsComponent

> `const` **PacketCountsComponent**: `object`

A WiFiNetworkDiagnosticsCluster supports these elements if it supports feature PacketCounts.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.beaconRxCount

> `readonly` **beaconRxCount**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

The BeaconRxCount attribute shall indicate the count of the number of received beacons. The total number
of expected beacons that could have been received during the interval since association SHOULD match the
sum of BeaconRxCount and BeaconLostCount. If the Node does not have an ability to report count of
beacons received, this value may remain set to zero.

###### See

MatterSpecification.v11.Core § 11.14.6.7

##### attributes.packetMulticastRxCount

> `readonly` **packetMulticastRxCount**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

The PacketMulticastRxCount attribute shall indicate the number of multicast packets received by

the Node.

###### See

MatterSpecification.v11.Core § 11.14.6.8

##### attributes.packetMulticastTxCount

> `readonly` **packetMulticastTxCount**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

The PacketMulticastTxCount attribute shall indicate the number of multicast packets transmitted by the
Node.

###### See

MatterSpecification.v11.Core § 11.14.6.9

##### attributes.packetUnicastRxCount

> `readonly` **packetUnicastRxCount**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

The PacketUnicastRxCount attribute shall indicate the number of unicast packets received by the Node.

###### See

MatterSpecification.v11.Core § 11.14.6.10

##### attributes.packetUnicastTxCount

> `readonly` **packetUnicastTxCount**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

The PacketUnicastTxCount attribute shall indicate the number of unicast packets transmitted by the Node.

###### See

MatterSpecification.v11.Core § 11.14.6.11

#### Source

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:264](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L264)

***

### TlvAssociationFailureEvent

> `const` **TlvAssociationFailureEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the WiFiNetworkDiagnostics associationFailure event

#### See

MatterSpecification.v11.Core § 11.14.8.2

#### Type declaration

##### associationFailureCause

> **associationFailureCause**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`AssociationFailureCause`](enumerations/AssociationFailureCause.md)\>

The Status field shall be set to a value from the AssociationFailureCauseEnum.

###### See

MatterSpecification.v11.Core § 11.14.8.2.1

##### status

> **status**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

The Status field shall be set to the Status Code value that was present in the last frame related to
association where Status Code was not equal to zero and which caused the failure of a last trial attempt, if
this last failure was due to one of the following Management frames:

  • Association Response (Type 0, Subtype 1)

  • Reassociation Response (Type 0, Subtype 3)

  • Authentication (Type 0, Subtype 11)

Table 9-50 "Status codes" of IEEE 802.11-2020 contains a description of all values possible.

###### See

MatterSpecification.v11.Core § 11.14.8.2.2

#### Source

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:151](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L151)

***

### TlvConnectionStatusEvent

> `const` **TlvConnectionStatusEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the WiFiNetworkDiagnostics connectionStatus event

#### See

MatterSpecification.v11.Core § 11.14.8.3

#### Type declaration

##### connectionStatus

> **connectionStatus**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`ConnectionStatus`](enumerations/ConnectionStatus.md)\>

#### Source

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:204](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L204)

***

### TlvDisconnectionEvent

> `const` **TlvDisconnectionEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the WiFiNetworkDiagnostics disconnection event

#### See

MatterSpecification.v11.Core § 11.14.8.1

#### Type declaration

##### reasonCode

> **reasonCode**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This field shall contain the Reason Code field value for the Disassociation or Deauthentication event that
caused the disconnection and the value shall align with Table 9-49 "Reason codes" of IEEE 802.11-2020.

###### See

MatterSpecification.v11.Core § 11.14.8.1.1

#### Source

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:104](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L104)
