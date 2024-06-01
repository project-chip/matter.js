[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / WiFiNetworkDiagnostics

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

> `readonly` **bssid**: [`Attribute`](../../interfaces/Attribute.md)\<`Uint8Array` \| `null`, `any`\>

The BSSID attribute shall indicate the BSSID for which the Wi-Fi network the Node is currently connected.

###### See

MatterSpecification.v11.Core § 11.14.6.1

##### attributes.channelNumber

> `readonly` **channelNumber**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

The ChannelNumber attribute shall indicate the channel that Wi-Fi communication is currently operating
on.

###### See

MatterSpecification.v11.Core § 11.14.6.4

##### attributes.currentMaxRate

> `readonly` **currentMaxRate**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number` \| `bigint` \| `null`, `any`\>

The CurrentMaxRate attribute shall indicate the current maximum PHY rate of transfer of data in
bits-per-second.

###### See

MatterSpecification.v11.Core § 11.14.6.12

##### attributes.rssi

> `readonly` **rssi**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

The RSSI attribute shall indicate the current RSSI of the Node’s Wi-Fi radio in dBm.

###### See

MatterSpecification.v11.Core § 11.14.6.5

##### attributes.securityType

> `readonly` **securityType**: [`Attribute`](../../interfaces/Attribute.md)\<[`SecurityType`](enumerations/SecurityType.md) \| `null`, `any`\>

The SecurityType attribute shall indicate the current type of Wi-Fi security used.

###### See

MatterSpecification.v11.Core § 11.14.6.2

##### attributes.wiFiVersion

> `readonly` **wiFiVersion**: [`Attribute`](../../interfaces/Attribute.md)\<[`WiFiVersion`](enumerations/WiFiVersion.md) \| `null`, `any`\>

The WiFiVersion attribute shall indicate the current 802.11 standard version in use by the Node, per the
table below.

###### See

MatterSpecification.v11.Core § 11.14.6.3

##### events

> `readonly` **events**: `object`

##### events.associationFailure

> `readonly` **associationFailure**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

The AssociationFailure event shall indicate that a Node has attempted to connect, or reconnect, to a
Wi-Fi access point, but is unable to successfully associate or authenticate, after exhausting all
internal retries of its supplicant.

###### See

MatterSpecification.v11.Core § 11.14.8.2

##### events.connectionStatus

> `readonly` **connectionStatus**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

The ConnectionStatus Event shall indicate that a Node’s connection status to a Wi-Fi network has
changed. Connected, in this context, shall mean that a Node acting as a Wi-Fi station is successfully
associated to a Wi-Fi Access Point.

###### See

MatterSpecification.v11.Core § 11.14.8.3

##### events.disconnection

> `readonly` **disconnection**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

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

> `readonly` **errorCounts**: [`BitFlag`](../../../schema/README.md#bitflag)

ErrorCounts

Node makes available the counts for the number of errors that have occurred during the reception and
transmission of packets on the Wi-Fi interface.

##### features.packetCounts

> `readonly` **packetCounts**: [`BitFlag`](../../../schema/README.md#bitflag)

PacketCounts

Node makes available the counts for the number of received and transmitted packets on the Wi-Fi
interface.

##### id

> `readonly` **id**: `54`

##### name

> `readonly` **name**: `"WiFiNetworkDiagnostics"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:288

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:733

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.bssid

> `readonly` **bssid**: [`Attribute`](../../interfaces/Attribute.md)\<`Uint8Array` \| `null`, `any`\>

The BSSID attribute shall indicate the BSSID for which the Wi-Fi network the Node is currently connected.

###### See

MatterSpecification.v11.Core § 11.14.6.1

##### attributes.channelNumber

> `readonly` **channelNumber**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

The ChannelNumber attribute shall indicate the channel that Wi-Fi communication is currently operating
on.

###### See

MatterSpecification.v11.Core § 11.14.6.4

##### attributes.currentMaxRate

> `readonly` **currentMaxRate**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number` \| `bigint` \| `null`, `any`\>

The CurrentMaxRate attribute shall indicate the current maximum PHY rate of transfer of data in
bits-per-second.

###### See

MatterSpecification.v11.Core § 11.14.6.12

##### attributes.rssi

> `readonly` **rssi**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

The RSSI attribute shall indicate the current RSSI of the Node’s Wi-Fi radio in dBm.

###### See

MatterSpecification.v11.Core § 11.14.6.5

##### attributes.securityType

> `readonly` **securityType**: [`Attribute`](../../interfaces/Attribute.md)\<[`SecurityType`](enumerations/SecurityType.md) \| `null`, `any`\>

The SecurityType attribute shall indicate the current type of Wi-Fi security used.

###### See

MatterSpecification.v11.Core § 11.14.6.2

##### attributes.wiFiVersion

> `readonly` **wiFiVersion**: [`Attribute`](../../interfaces/Attribute.md)\<[`WiFiVersion`](enumerations/WiFiVersion.md) \| `null`, `any`\>

The WiFiVersion attribute shall indicate the current 802.11 standard version in use by the Node, per the
table below.

###### See

MatterSpecification.v11.Core § 11.14.6.3

##### events

> `readonly` **events**: `object`

##### events.associationFailure

> `readonly` **associationFailure**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

The AssociationFailure event shall indicate that a Node has attempted to connect, or reconnect, to a
Wi-Fi access point, but is unable to successfully associate or authenticate, after exhausting all
internal retries of its supplicant.

###### See

MatterSpecification.v11.Core § 11.14.8.2

##### events.connectionStatus

> `readonly` **connectionStatus**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

The ConnectionStatus Event shall indicate that a Node’s connection status to a Wi-Fi network has
changed. Connected, in this context, shall mean that a Node acting as a Wi-Fi station is successfully
associated to a Wi-Fi Access Point.

###### See

MatterSpecification.v11.Core § 11.14.8.3

##### events.disconnection

> `readonly` **disconnection**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

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

> `readonly` **errorCounts**: [`BitFlag`](../../../schema/README.md#bitflag)

ErrorCounts

Node makes available the counts for the number of errors that have occurred during the reception and
transmission of packets on the Wi-Fi interface.

##### features.packetCounts

> `readonly` **packetCounts**: [`BitFlag`](../../../schema/README.md#bitflag)

PacketCounts

Node makes available the counts for the number of received and transmitted packets on the Wi-Fi
interface.

##### id

> `readonly` **id**: `54`

##### name

> `readonly` **name**: `"WiFiNetworkDiagnostics"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:506

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:919

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

##### attributes.beaconLostCount

> `readonly` **beaconLostCount**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.beaconRxCount

> `readonly` **beaconRxCount**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.bssid

> `readonly` **bssid**: [`Attribute`](../../interfaces/Attribute.md)\<`Uint8Array` \| `null`, `any`\>

##### attributes.channelNumber

> `readonly` **channelNumber**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

##### attributes.clusterRevision

> `readonly` **clusterRevision**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `never`\>

##### attributes.currentMaxRate

> `readonly` **currentMaxRate**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number` \| `bigint` \| `null`, `any`\>

##### attributes.eventList

> `readonly` **eventList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/EventId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_EventId/README.md)[], `never`\>

##### attributes.featureMap

> `readonly` **featureMap**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `never`\>

##### attributes.generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_CommandId/README.md)[], `never`\>

##### attributes.overrunCount

> `readonly` **overrunCount**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint` \| `null`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.packetMulticastRxCount

> `readonly` **packetMulticastRxCount**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.packetMulticastTxCount

> `readonly` **packetMulticastTxCount**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.packetUnicastRxCount

> `readonly` **packetUnicastRxCount**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.packetUnicastTxCount

> `readonly` **packetUnicastTxCount**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.rssi

> `readonly` **rssi**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

##### attributes.securityType

> `readonly` **securityType**: [`Attribute`](../../interfaces/Attribute.md)\<[`SecurityType`](enumerations/SecurityType.md) \| `null`, `any`\>

##### attributes.wiFiVersion

> `readonly` **wiFiVersion**: [`Attribute`](../../interfaces/Attribute.md)\<[`WiFiVersion`](enumerations/WiFiVersion.md) \| `null`, `any`\>

##### commands

> `readonly` **commands**: `object`

##### commands.resetCounts

> `readonly` **resetCounts**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### events

> `readonly` **events**: `object`

##### events.associationFailure

> `readonly` **associationFailure**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

The AssociationFailure event shall indicate that a Node has attempted to connect, or reconnect, to a
Wi-Fi access point, but is unable to successfully associate or authenticate, after exhausting all
internal retries of its supplicant.

###### See

MatterSpecification.v11.Core § 11.14.8.2

##### events.connectionStatus

> `readonly` **connectionStatus**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

The ConnectionStatus Event shall indicate that a Node’s connection status to a Wi-Fi network has
changed. Connected, in this context, shall mean that a Node acting as a Wi-Fi station is successfully
associated to a Wi-Fi Access Point.

###### See

MatterSpecification.v11.Core § 11.14.8.3

##### events.disconnection

> `readonly` **disconnection**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

The Disconnection Event shall indicate that a Node’s Wi-Fi connection has been disconnected as a result
of de-authenticated or dis-association and indicates the reason.

###### See

MatterSpecification.v11.Core § 11.14.8.1

##### features

> `readonly` **features**: `object`

##### features.errorCounts

> `readonly` **errorCounts**: [`BitFlag`](../../../schema/README.md#bitflag)

ErrorCounts

Node makes available the counts for the number of errors that have occurred during the reception and
transmission of packets on the Wi-Fi interface.

##### features.packetCounts

> `readonly` **packetCounts**: [`BitFlag`](../../../schema/README.md#bitflag)

PacketCounts

Node makes available the counts for the number of received and transmitted packets on the Wi-Fi
interface.

##### id

> `readonly` **id**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/util/Type"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_util_Type/README.md)

##### name

> `readonly` **name**: `"WiFiNetworkDiagnostics"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:739

***

### ErrorCountsComponent

> `const` **ErrorCountsComponent**: `object`

A WiFiNetworkDiagnosticsCluster supports these elements if it supports feature ErrorCounts.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.beaconLostCount

> `readonly` **beaconLostCount**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

The BeaconLostCount attribute shall indicate the count of the number of missed beacons the Node has
detected. If the Node does not have an ability to count beacons expected and not received, this value
may remain set to zero.

###### See

MatterSpecification.v11.Core § 11.14.6.6

##### attributes.overrunCount

> `readonly` **overrunCount**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint` \| `null`, `any`\>

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

packages/matter.js/dist/esm/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:180

***

### PacketCountsComponent

> `const` **PacketCountsComponent**: `object`

A WiFiNetworkDiagnosticsCluster supports these elements if it supports feature PacketCounts.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.beaconRxCount

> `readonly` **beaconRxCount**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

The BeaconRxCount attribute shall indicate the count of the number of received beacons. The total number
of expected beacons that could have been received during the interval since association SHOULD match the
sum of BeaconRxCount and BeaconLostCount. If the Node does not have an ability to report count of
beacons received, this value may remain set to zero.

###### See

MatterSpecification.v11.Core § 11.14.6.7

##### attributes.packetMulticastRxCount

> `readonly` **packetMulticastRxCount**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

The PacketMulticastRxCount attribute shall indicate the number of multicast packets received by

the Node.

###### See

MatterSpecification.v11.Core § 11.14.6.8

##### attributes.packetMulticastTxCount

> `readonly` **packetMulticastTxCount**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

The PacketMulticastTxCount attribute shall indicate the number of multicast packets transmitted by the
Node.

###### See

MatterSpecification.v11.Core § 11.14.6.9

##### attributes.packetUnicastRxCount

> `readonly` **packetUnicastRxCount**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

The PacketUnicastRxCount attribute shall indicate the number of unicast packets received by the Node.

###### See

MatterSpecification.v11.Core § 11.14.6.10

##### attributes.packetUnicastTxCount

> `readonly` **packetUnicastTxCount**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

The PacketUnicastTxCount attribute shall indicate the number of unicast packets transmitted by the Node.

###### See

MatterSpecification.v11.Core § 11.14.6.11

#### Source

packages/matter.js/dist/esm/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:225

***

### TlvAssociationFailureEvent

> `const` **TlvAssociationFailureEvent**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Body of the WiFiNetworkDiagnostics associationFailure event

#### See

MatterSpecification.v11.Core § 11.14.8.2

#### Source

packages/matter.js/dist/esm/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:118

***

### TlvConnectionStatusEvent

> `const` **TlvConnectionStatusEvent**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Body of the WiFiNetworkDiagnostics connectionStatus event

#### See

MatterSpecification.v11.Core § 11.14.8.3

#### Source

packages/matter.js/dist/esm/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:167

***

### TlvDisconnectionEvent

> `const` **TlvDisconnectionEvent**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Body of the WiFiNetworkDiagnostics disconnection event

#### See

MatterSpecification.v11.Core § 11.14.8.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:76
