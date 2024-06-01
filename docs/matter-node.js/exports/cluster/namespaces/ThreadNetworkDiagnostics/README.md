[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / ThreadNetworkDiagnostics

# Namespace: ThreadNetworkDiagnostics

## Index

### Enumerations

- [ConnectionStatus](enumerations/ConnectionStatus.md)
- [Feature](enumerations/Feature.md)
- [NetworkFault](enumerations/NetworkFault.md)
- [RoutingRole](enumerations/RoutingRole.md)

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [Complete](interfaces/Complete.md)
- [ConnectionStatusEvent](interfaces/ConnectionStatusEvent.md)
- [NeighborTableStruct](interfaces/NeighborTableStruct.md)
- [NetworkFaultChangeEvent](interfaces/NetworkFaultChangeEvent.md)
- [OperationalDatasetComponents](interfaces/OperationalDatasetComponents.md)
- [RouteTableStruct](interfaces/RouteTableStruct.md)
- [SecurityPolicy](interfaces/SecurityPolicy.md)

## Variables

### Base

> `const` **Base**: `object`

These elements and properties are present in all ThreadNetworkDiagnostics clusters.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.activeNetworkFaults

> `readonly` **activeNetworkFaults**: [`Attribute`](../../interfaces/Attribute.md)\<[`NetworkFault`](enumerations/NetworkFault.md)[], `any`\>

The ActiveNetworkFaults attribute shall indicate the set of faults currently detected by the Node.

When the Node detects a fault has been raised, the appropriate NetworkFaultEnum value shall be added to
this list. This list shall NOT contain more than one instance of a specific NetworkFaultEnum value. When
the Node detects that all conditions contributing to a fault has been cleared, the corresponding
NetworkFaultEnum value shall be removed from this list. An empty list shall indicate there are currently
no active faults. The order of this list SHOULD have no significance. Clients interested in monitoring
changes in active faults may subscribe to this attribute, or they may subscribe to NetworkFaultChange

###### See

MatterSpecification.v11.Core § 11.13.6.63

##### attributes.activeTimestamp

> `readonly` **activeTimestamp**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number` \| `bigint` \| `null`, `any`\>

This attribute shall be null when there is no dataset configured.

###### See

MatterSpecification.v11.Core § 11.13.6.57

##### attributes.channel

> `readonly` **channel**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

The Channel attribute shall indicate the 802.15.4 channel number configured on the Node’s Thread
interface (that is, the Active Operational Dataset’s current Channel value). A value of null shall
indicate that the Thread interface is not currently configured or operational.

###### See

MatterSpecification.v11.Core § 11.13.6.1

##### attributes.channelPage0Mask

> `readonly` **channelPage0Mask**: [`Attribute`](../../interfaces/Attribute.md)\<`Uint8Array` \| `null`, `any`\>

The ChannelPage0Mask attribute indicates the channels within channel page 0, in the 2.4GHz ISM band. The
channels are represented in most significant bit order, with bit value 1 meaning selected, bit value 0
meaning unselected. For example, the most significant bit of the left-most byte indicates channel 0. If
channel 0 and channel 10 are selected, the mask would be: 80 20 00 00. This attribute shall be null when
there is no dataset configured.

###### See

MatterSpecification.v11.Core § 11.13.6.61

##### attributes.dataVersion

> `readonly` **dataVersion**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

The DataVersion attribute shall indicate the full Network Data Version the Node currently uses. This
attribute shall be null if not attached to a Thread network.

###### See

MatterSpecification.v11.Core § 11.13.6.12

##### attributes.delay

> `readonly` **delay**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number` \| `null`, `any`\>

This attribute shall be null when there is no dataset configured.

###### See

MatterSpecification.v11.Core § 11.13.6.59

##### attributes.extendedPanId

> `readonly` **extendedPanId**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint` \| `null`, `any`\>

The ExtendedPanId attribute shall indicate the unique 64-bit identifier of the Node on the Thread
network. A value of null shall indicate that the Thread interface is not currently configured or
operational.

###### See

MatterSpecification.v11.Core § 11.13.6.5

##### attributes.leaderRouterId

> `readonly` **leaderRouterId**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

The LeaderRouterId attribute shall indicate the 8-bit LeaderRouterId the Node shall attempt to utilize
upon becoming a router or leader on the Thread network. This attribute shall be null if not attached to
a Thread network.

###### See

MatterSpecification.v11.Core § 11.13.6.14

##### attributes.meshLocalPrefix

> `readonly` **meshLocalPrefix**: [`Attribute`](../../interfaces/Attribute.md)\<`Uint8Array` \| `null`, `any`\>

The MeshLocalPrefix attribute shall indicate the mesh-local IPv6 prefix for the Thread network that the
Node has been configured to join to. A value of null shall indicate that the Thread interface is not
currently configured or operational.

###### See

MatterSpecification.v11.Core § 11.13.6.6

##### attributes.neighborTable

> `readonly` **neighborTable**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

The NeighborTable attribute shall indicate the current list of Nodes that comprise the neighbor table on
the Node.

###### See

MatterSpecification.v11.Core § 11.13.6.8

##### attributes.networkName

> `readonly` **networkName**: [`Attribute`](../../interfaces/Attribute.md)\<`string` \| `null`, `any`\>

The NetworkName attribute shall indicate a human-readable (displayable) name for the Thread network that
the Node has been configured to join to. A value of null shall indicate that the Thread interface is not
currently configured or operational.

###### See

MatterSpecification.v11.Core § 11.13.6.3

##### attributes.operationalDatasetComponents

> `readonly` **operationalDatasetComponents**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md) \| `null`, `any`\>

The OperationalDatasetComponents attribute is a collection of flags to indicate the presence of various
operationally acquired values.

###### See

MatterSpecification.v11.Core § 11.13.6.62

##### attributes.panId

> `readonly` **panId**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

The PanId attribute shall indicate the 16-bit identifier of the Node on the Thread network. A value of
null shall indicate that the Thread interface is not currently configured or operational.

###### See

MatterSpecification.v11.Core § 11.13.6.4

##### attributes.partitionId

> `readonly` **partitionId**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

The PartitionId attribute shall indicate the Thread Leader Partition Id for the Thread network to which
the Node is joined. This attribute shall be null if not attached to a Thread network.

###### See

MatterSpecification.v11.Core § 11.13.6.10

##### attributes.pendingTimestamp

> `readonly` **pendingTimestamp**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number` \| `bigint` \| `null`, `any`\>

This attribute shall be null when there is no dataset configured.

###### See

MatterSpecification.v11.Core § 11.13.6.58

##### attributes.routeTable

> `readonly` **routeTable**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

The RouteTable attribute shall indicate the current list of router capable Nodes for which routes have
been established.

###### See

MatterSpecification.v11.Core § 11.13.6.9

##### attributes.routingRole

> `readonly` **routingRole**: [`Attribute`](../../interfaces/Attribute.md)\<[`RoutingRole`](enumerations/RoutingRole.md) \| `null`, `any`\>

The RoutingRole attribute shall indicate the role that this Node has within the routing of messages
through the Thread network, as defined by RoutingRoleEnum. The potential roles are defined in the
following table. A value of null shall indicate that the Thread interface is not currently configured or
operational.

###### See

MatterSpecification.v11.Core § 11.13.6.2

##### attributes.securityPolicy

> `readonly` **securityPolicy**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md) \| `null`, `any`\>

The SecurityPolicy attribute indicates the current security policies for the Thread partition to which a
Node is connected. This attribute shall be null when there is no dataset configured.

###### See

MatterSpecification.v11.Core § 11.13.6.60

##### attributes.stableDataVersion

> `readonly` **stableDataVersion**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

The StableDataVersion attribute shall indicate the Network Data Version for the stable subset of

data the Node currently uses. This attribute shall be null if not attached to a Thread network.

###### See

MatterSpecification.v11.Core § 11.13.6.13

##### attributes.weighting

> `readonly` **weighting**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

The Weighting attribute shall indicate the Thread Leader Weight used when operating in the Leader role.
This attribute shall be null if not attached to a Thread network.

###### See

MatterSpecification.v11.Core § 11.13.6.11

##### events

> `readonly` **events**: `object`

##### events.connectionStatus

> `readonly` **connectionStatus**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

The ConnectionStatus Event shall indicate that a Node’s connection status to a Thread network has
changed.

###### See

MatterSpecification.v11.Core § 11.13.8.2

##### events.networkFaultChange

> `readonly` **networkFaultChange**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

The NetworkFaultChange Event shall indicate a change in the set of network faults currently detected by
the Node.

###### See

MatterSpecification.v11.Core § 11.13.8.1

##### extensions

> `readonly` **extensions**: readonly [`object`, `object`, `object`]

This metadata controls which ThreadNetworkDiagnosticsCluster elements matter.js activates for specific
feature combinations.

##### features

> `readonly` **features**: `object`

##### features.errorCounts

> `readonly` **errorCounts**: [`BitFlag`](../../../schema/README.md#bitflag)

ErrorCounts

Server supports the counts for the number of errors that have occurred during the reception and
transmission of packets on the Thread interface.

##### features.macCounts

> `readonly` **macCounts**: [`BitFlag`](../../../schema/README.md#bitflag)

MacCounts

Server supports the counts for various MAC layer happenings.

##### features.mleCounts

> `readonly` **mleCounts**: [`BitFlag`](../../../schema/README.md#bitflag)

MleCounts

Server supports the counts for various MLE layer happenings.

##### features.packetCounts

> `readonly` **packetCounts**: [`BitFlag`](../../../schema/README.md#bitflag)

PacketCounts

Server supports the counts for the number of received and transmitted packets on the Thread interface.

##### id

> `readonly` **id**: `53`

##### name

> `readonly` **name**: `"ThreadNetworkDiagnostics"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:833

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:2583

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.activeNetworkFaults

> `readonly` **activeNetworkFaults**: [`Attribute`](../../interfaces/Attribute.md)\<[`NetworkFault`](enumerations/NetworkFault.md)[], `any`\>

The ActiveNetworkFaults attribute shall indicate the set of faults currently detected by the Node.

When the Node detects a fault has been raised, the appropriate NetworkFaultEnum value shall be added to
this list. This list shall NOT contain more than one instance of a specific NetworkFaultEnum value. When
the Node detects that all conditions contributing to a fault has been cleared, the corresponding
NetworkFaultEnum value shall be removed from this list. An empty list shall indicate there are currently
no active faults. The order of this list SHOULD have no significance. Clients interested in monitoring
changes in active faults may subscribe to this attribute, or they may subscribe to NetworkFaultChange

###### See

MatterSpecification.v11.Core § 11.13.6.63

##### attributes.activeTimestamp

> `readonly` **activeTimestamp**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number` \| `bigint` \| `null`, `any`\>

This attribute shall be null when there is no dataset configured.

###### See

MatterSpecification.v11.Core § 11.13.6.57

##### attributes.channel

> `readonly` **channel**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

The Channel attribute shall indicate the 802.15.4 channel number configured on the Node’s Thread
interface (that is, the Active Operational Dataset’s current Channel value). A value of null shall
indicate that the Thread interface is not currently configured or operational.

###### See

MatterSpecification.v11.Core § 11.13.6.1

##### attributes.channelPage0Mask

> `readonly` **channelPage0Mask**: [`Attribute`](../../interfaces/Attribute.md)\<`Uint8Array` \| `null`, `any`\>

The ChannelPage0Mask attribute indicates the channels within channel page 0, in the 2.4GHz ISM band. The
channels are represented in most significant bit order, with bit value 1 meaning selected, bit value 0
meaning unselected. For example, the most significant bit of the left-most byte indicates channel 0. If
channel 0 and channel 10 are selected, the mask would be: 80 20 00 00. This attribute shall be null when
there is no dataset configured.

###### See

MatterSpecification.v11.Core § 11.13.6.61

##### attributes.dataVersion

> `readonly` **dataVersion**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

The DataVersion attribute shall indicate the full Network Data Version the Node currently uses. This
attribute shall be null if not attached to a Thread network.

###### See

MatterSpecification.v11.Core § 11.13.6.12

##### attributes.delay

> `readonly` **delay**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number` \| `null`, `any`\>

This attribute shall be null when there is no dataset configured.

###### See

MatterSpecification.v11.Core § 11.13.6.59

##### attributes.extendedPanId

> `readonly` **extendedPanId**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint` \| `null`, `any`\>

The ExtendedPanId attribute shall indicate the unique 64-bit identifier of the Node on the Thread
network. A value of null shall indicate that the Thread interface is not currently configured or
operational.

###### See

MatterSpecification.v11.Core § 11.13.6.5

##### attributes.leaderRouterId

> `readonly` **leaderRouterId**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

The LeaderRouterId attribute shall indicate the 8-bit LeaderRouterId the Node shall attempt to utilize
upon becoming a router or leader on the Thread network. This attribute shall be null if not attached to
a Thread network.

###### See

MatterSpecification.v11.Core § 11.13.6.14

##### attributes.meshLocalPrefix

> `readonly` **meshLocalPrefix**: [`Attribute`](../../interfaces/Attribute.md)\<`Uint8Array` \| `null`, `any`\>

The MeshLocalPrefix attribute shall indicate the mesh-local IPv6 prefix for the Thread network that the
Node has been configured to join to. A value of null shall indicate that the Thread interface is not
currently configured or operational.

###### See

MatterSpecification.v11.Core § 11.13.6.6

##### attributes.neighborTable

> `readonly` **neighborTable**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

The NeighborTable attribute shall indicate the current list of Nodes that comprise the neighbor table on
the Node.

###### See

MatterSpecification.v11.Core § 11.13.6.8

##### attributes.networkName

> `readonly` **networkName**: [`Attribute`](../../interfaces/Attribute.md)\<`string` \| `null`, `any`\>

The NetworkName attribute shall indicate a human-readable (displayable) name for the Thread network that
the Node has been configured to join to. A value of null shall indicate that the Thread interface is not
currently configured or operational.

###### See

MatterSpecification.v11.Core § 11.13.6.3

##### attributes.operationalDatasetComponents

> `readonly` **operationalDatasetComponents**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md) \| `null`, `any`\>

The OperationalDatasetComponents attribute is a collection of flags to indicate the presence of various
operationally acquired values.

###### See

MatterSpecification.v11.Core § 11.13.6.62

##### attributes.panId

> `readonly` **panId**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

The PanId attribute shall indicate the 16-bit identifier of the Node on the Thread network. A value of
null shall indicate that the Thread interface is not currently configured or operational.

###### See

MatterSpecification.v11.Core § 11.13.6.4

##### attributes.partitionId

> `readonly` **partitionId**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

The PartitionId attribute shall indicate the Thread Leader Partition Id for the Thread network to which
the Node is joined. This attribute shall be null if not attached to a Thread network.

###### See

MatterSpecification.v11.Core § 11.13.6.10

##### attributes.pendingTimestamp

> `readonly` **pendingTimestamp**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number` \| `bigint` \| `null`, `any`\>

This attribute shall be null when there is no dataset configured.

###### See

MatterSpecification.v11.Core § 11.13.6.58

##### attributes.routeTable

> `readonly` **routeTable**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

The RouteTable attribute shall indicate the current list of router capable Nodes for which routes have
been established.

###### See

MatterSpecification.v11.Core § 11.13.6.9

##### attributes.routingRole

> `readonly` **routingRole**: [`Attribute`](../../interfaces/Attribute.md)\<[`RoutingRole`](enumerations/RoutingRole.md) \| `null`, `any`\>

The RoutingRole attribute shall indicate the role that this Node has within the routing of messages
through the Thread network, as defined by RoutingRoleEnum. The potential roles are defined in the
following table. A value of null shall indicate that the Thread interface is not currently configured or
operational.

###### See

MatterSpecification.v11.Core § 11.13.6.2

##### attributes.securityPolicy

> `readonly` **securityPolicy**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md) \| `null`, `any`\>

The SecurityPolicy attribute indicates the current security policies for the Thread partition to which a
Node is connected. This attribute shall be null when there is no dataset configured.

###### See

MatterSpecification.v11.Core § 11.13.6.60

##### attributes.stableDataVersion

> `readonly` **stableDataVersion**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

The StableDataVersion attribute shall indicate the Network Data Version for the stable subset of

data the Node currently uses. This attribute shall be null if not attached to a Thread network.

###### See

MatterSpecification.v11.Core § 11.13.6.13

##### attributes.weighting

> `readonly` **weighting**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

The Weighting attribute shall indicate the Thread Leader Weight used when operating in the Leader role.
This attribute shall be null if not attached to a Thread network.

###### See

MatterSpecification.v11.Core § 11.13.6.11

##### events

> `readonly` **events**: `object`

##### events.connectionStatus

> `readonly` **connectionStatus**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

The ConnectionStatus Event shall indicate that a Node’s connection status to a Thread network has
changed.

###### See

MatterSpecification.v11.Core § 11.13.8.2

##### events.networkFaultChange

> `readonly` **networkFaultChange**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

The NetworkFaultChange Event shall indicate a change in the set of network faults currently detected by
the Node.

###### See

MatterSpecification.v11.Core § 11.13.8.1

##### extensions

> `readonly` **extensions**: readonly [`object`, `object`, `object`]

This metadata controls which ThreadNetworkDiagnosticsCluster elements matter.js activates for specific
feature combinations.

##### features

> `readonly` **features**: `object`

##### features.errorCounts

> `readonly` **errorCounts**: [`BitFlag`](../../../schema/README.md#bitflag)

ErrorCounts

Server supports the counts for the number of errors that have occurred during the reception and
transmission of packets on the Thread interface.

##### features.macCounts

> `readonly` **macCounts**: [`BitFlag`](../../../schema/README.md#bitflag)

MacCounts

Server supports the counts for various MAC layer happenings.

##### features.mleCounts

> `readonly` **mleCounts**: [`BitFlag`](../../../schema/README.md#bitflag)

MleCounts

Server supports the counts for various MLE layer happenings.

##### features.packetCounts

> `readonly` **packetCounts**: [`BitFlag`](../../../schema/README.md#bitflag)

PacketCounts

Server supports the counts for the number of received and transmitted packets on the Thread interface.

##### id

> `readonly` **id**: `53`

##### name

> `readonly` **name**: `"ThreadNetworkDiagnostics"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:1703

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:3324

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

##### attributes.activeNetworkFaults

> `readonly` **activeNetworkFaults**: [`Attribute`](../../interfaces/Attribute.md)\<[`NetworkFault`](enumerations/NetworkFault.md)[], `any`\>

##### attributes.activeTimestamp

> `readonly` **activeTimestamp**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number` \| `bigint` \| `null`, `any`\>

##### attributes.attachAttemptCount

> `readonly` **attachAttemptCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.attributeList

> `readonly` **attributeList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_AttributeId/README.md)[], `never`\>

##### attributes.betterPartitionAttachAttemptCount

> `readonly` **betterPartitionAttachAttemptCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.channel

> `readonly` **channel**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

##### attributes.channelPage0Mask

> `readonly` **channelPage0Mask**: [`Attribute`](../../interfaces/Attribute.md)\<`Uint8Array` \| `null`, `any`\>

##### attributes.childRoleCount

> `readonly` **childRoleCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.clusterRevision

> `readonly` **clusterRevision**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `never`\>

##### attributes.dataVersion

> `readonly` **dataVersion**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

##### attributes.delay

> `readonly` **delay**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number` \| `null`, `any`\>

##### attributes.detachedRoleCount

> `readonly` **detachedRoleCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.eventList

> `readonly` **eventList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/EventId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_EventId/README.md)[], `never`\>

##### attributes.extendedPanId

> `readonly` **extendedPanId**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint` \| `null`, `any`\>

##### attributes.featureMap

> `readonly` **featureMap**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `never`\>

##### attributes.generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_CommandId/README.md)[], `never`\>

##### attributes.leaderRoleCount

> `readonly` **leaderRoleCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.leaderRouterId

> `readonly` **leaderRouterId**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

##### attributes.meshLocalPrefix

> `readonly` **meshLocalPrefix**: [`Attribute`](../../interfaces/Attribute.md)\<`Uint8Array` \| `null`, `any`\>

##### attributes.neighborTable

> `readonly` **neighborTable**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

##### attributes.networkName

> `readonly` **networkName**: [`Attribute`](../../interfaces/Attribute.md)\<`string` \| `null`, `any`\>

##### attributes.operationalDatasetComponents

> `readonly` **operationalDatasetComponents**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md) \| `null`, `any`\>

##### attributes.overrunCount

> `readonly` **overrunCount**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.panId

> `readonly` **panId**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

##### attributes.parentChangeCount

> `readonly` **parentChangeCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.partitionId

> `readonly` **partitionId**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

##### attributes.partitionIdChangeCount

> `readonly` **partitionIdChangeCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.pendingTimestamp

> `readonly` **pendingTimestamp**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number` \| `bigint` \| `null`, `any`\>

##### attributes.routeTable

> `readonly` **routeTable**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

##### attributes.routerRoleCount

> `readonly` **routerRoleCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.routingRole

> `readonly` **routingRole**: [`Attribute`](../../interfaces/Attribute.md)\<[`RoutingRole`](enumerations/RoutingRole.md) \| `null`, `any`\>

##### attributes.rxAddressFilteredCount

> `readonly` **rxAddressFilteredCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.rxBeaconCount

> `readonly` **rxBeaconCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.rxBeaconRequestCount

> `readonly` **rxBeaconRequestCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.rxBroadcastCount

> `readonly` **rxBroadcastCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.rxDataCount

> `readonly` **rxDataCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.rxDataPollCount

> `readonly` **rxDataPollCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.rxDestAddrFilteredCount

> `readonly` **rxDestAddrFilteredCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.rxDuplicatedCount

> `readonly` **rxDuplicatedCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.rxErrFcsCount

> `readonly` **rxErrFcsCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.rxErrInvalidScrAddrCount

> `readonly` **rxErrInvalidScrAddrCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.rxErrNoFrameCount

> `readonly` **rxErrNoFrameCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.rxErrOtherCount

> `readonly` **rxErrOtherCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.rxErrSecCount

> `readonly` **rxErrSecCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.rxErrUnknownNeighborCount

> `readonly` **rxErrUnknownNeighborCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.rxOtherCount

> `readonly` **rxOtherCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.rxTotalCount

> `readonly` **rxTotalCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.rxUnicastCount

> `readonly` **rxUnicastCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.securityPolicy

> `readonly` **securityPolicy**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md) \| `null`, `any`\>

##### attributes.stableDataVersion

> `readonly` **stableDataVersion**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

##### attributes.txAckRequestedCount

> `readonly` **txAckRequestedCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.txAckedCount

> `readonly` **txAckedCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.txBeaconCount

> `readonly` **txBeaconCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.txBeaconRequestCount

> `readonly` **txBeaconRequestCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.txBroadcastCount

> `readonly` **txBroadcastCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.txDataCount

> `readonly` **txDataCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.txDataPollCount

> `readonly` **txDataPollCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.txDirectMaxRetryExpiryCount

> `readonly` **txDirectMaxRetryExpiryCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.txErrAbortCount

> `readonly` **txErrAbortCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.txErrBusyChannelCount

> `readonly` **txErrBusyChannelCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.txErrCcaCount

> `readonly` **txErrCcaCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.txIndirectMaxRetryExpiryCount

> `readonly` **txIndirectMaxRetryExpiryCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.txNoAckRequestedCount

> `readonly` **txNoAckRequestedCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.txOtherCount

> `readonly` **txOtherCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.txRetryCount

> `readonly` **txRetryCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.txTotalCount

> `readonly` **txTotalCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.txUnicastCount

> `readonly` **txUnicastCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.weighting

> `readonly` **weighting**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

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

##### events.connectionStatus

> `readonly` **connectionStatus**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

The ConnectionStatus Event shall indicate that a Node’s connection status to a Thread network has
changed.

###### See

MatterSpecification.v11.Core § 11.13.8.2

##### events.networkFaultChange

> `readonly` **networkFaultChange**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

The NetworkFaultChange Event shall indicate a change in the set of network faults currently detected by
the Node.

###### See

MatterSpecification.v11.Core § 11.13.8.1

##### features

> `readonly` **features**: `object`

##### features.errorCounts

> `readonly` **errorCounts**: [`BitFlag`](../../../schema/README.md#bitflag)

ErrorCounts

Server supports the counts for the number of errors that have occurred during the reception and
transmission of packets on the Thread interface.

##### features.macCounts

> `readonly` **macCounts**: [`BitFlag`](../../../schema/README.md#bitflag)

MacCounts

Server supports the counts for various MAC layer happenings.

##### features.mleCounts

> `readonly` **mleCounts**: [`BitFlag`](../../../schema/README.md#bitflag)

MleCounts

Server supports the counts for various MLE layer happenings.

##### features.packetCounts

> `readonly` **packetCounts**: [`BitFlag`](../../../schema/README.md#bitflag)

PacketCounts

Server supports the counts for the number of received and transmitted packets on the Thread interface.

##### id

> `readonly` **id**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/util/Type"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_util_Type/README.md)

##### name

> `readonly` **name**: `"ThreadNetworkDiagnostics"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:2589

***

### ErrorCountsComponent

> `const` **ErrorCountsComponent**: `object`

A ThreadNetworkDiagnosticsCluster supports these elements if it supports feature ErrorCounts.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.overrunCount

> `readonly` **overrunCount**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint`, `any`\>

The OverrunCount attribute shall indicate the number of packets dropped either at ingress or egress, due
to lack of buffer memory to retain all packets on the ethernet network interface. The OverrunCount
attribute shall be reset to 0 upon a reboot of the Node.

###### See

MatterSpecification.v11.Core § 11.13.6.7

##### commands

> `readonly` **commands**: `object`

##### commands.resetCounts

> `readonly` **resetCounts**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

Reception of this command shall reset the following attributes to 0:

  • OverrunCount

This command has no associated data. Upon completion, this command shall send a status code set to a
value of SUCCESS back to the initiator.

###### See

MatterSpecification.v11.Core § 11.13.7.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:419

***

### MacCountsComponent

> `const` **MacCountsComponent**: `object`

A ThreadNetworkDiagnosticsCluster supports these elements if it supports feature MacCounts.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.rxAddressFilteredCount

> `readonly` **rxAddressFilteredCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The RxAddressFilteredCount attribute shall indicate the total number of received unique MAC frame
requests that have been dropped as a result of MAC filtering. This value shall only be reset upon a Node
reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.48

##### attributes.rxBeaconCount

> `readonly` **rxBeaconCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The RxBeaconCount attribute shall indicate the total number of received unique MAC Beacon frames. This
value shall only be reset upon a Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.45

##### attributes.rxBeaconRequestCount

> `readonly` **rxBeaconRequestCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The RxBeaconRequestCount attribute shall indicate the total number of received unique MAC Beacon Request
frames. This value shall only be reset upon a Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.46

##### attributes.rxBroadcastCount

> `readonly` **rxBroadcastCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The RxBroadcastCount attribute shall indicate the total number of received unique broadcast MAC frames.
This value shall only be reset upon a Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.42

##### attributes.rxDataCount

> `readonly` **rxDataCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The RxDataCount attribute shall indicate the total number of received unique MAC Data frames. This value
shall only be reset upon a Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.43

##### attributes.rxDataPollCount

> `readonly` **rxDataPollCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The RxDataPollCount attribute shall indicate the total number of received unique MAC Data Poll frames.
This value shall only be reset upon a Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.44

##### attributes.rxDestAddrFilteredCount

> `readonly` **rxDestAddrFilteredCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The RxDestAddrFilteredCount attribute shall indicate the total number of received unique MAC frame
requests that have been dropped as a result of a destination address check. This value shall only be
reset upon a Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.49

##### attributes.rxDuplicatedCount

> `readonly` **rxDuplicatedCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The RxDuplicatedCount attribute shall indicate the total number of received MAC frame requests that have
been dropped as a result of being a duplicate of a previously received MAC frame request. This value
shall only be reset upon a Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.50

##### attributes.rxErrFcsCount

> `readonly` **rxErrFcsCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The RxErrFcsCount attribute shall indicate the total number of received unique MAC frame requests that
have been dropped as a result of an error with the FCS of the received frame. This value shall only be
reset upon a Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.55

##### attributes.rxErrInvalidScrAddrCount

> `readonly` **rxErrInvalidScrAddrCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The RxErrInvalidScrAddrCount attribute shall indicate the total number of received unique MAC frame
requests that have been dropped as a result of containing an invalid source address. This value shall
only be reset upon a Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.53

##### attributes.rxErrNoFrameCount

> `readonly` **rxErrNoFrameCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The RxErrNoFrameCount attribute shall indicate the total number of received unique MAC frame requests
that have been dropped as a result of missing or malformed frame contents. This value shall only be
reset upon a Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.51

##### attributes.rxErrOtherCount

> `readonly` **rxErrOtherCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The RxErrOtherCount attribute shall indicate the total number of received unique MAC frame requests that
have been dropped as a result of an error that is not counted by any other attribute. This value shall
only be reset upon a Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.56

##### attributes.rxErrSecCount

> `readonly` **rxErrSecCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The RxErrSecCount attribute shall indicate the total number of received unique MAC frame requests that
have been dropped as a result of an error with the security of the received frame. This value shall only
be reset upon a Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.54

##### attributes.rxErrUnknownNeighborCount

> `readonly` **rxErrUnknownNeighborCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The RxErrUnknownNeighborCount attribute shall indicate the total number of received unique MAC frame
requests that have been dropped as a result of originating from an unknown neighbor device. This value
shall only be reset upon a Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.52

##### attributes.rxOtherCount

> `readonly` **rxOtherCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The RxOtherCount attribute shall indicate the total number of received unique MAC frame requests that
are not counted by any other attribute. This value shall only be reset upon a Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.47

##### attributes.rxTotalCount

> `readonly` **rxTotalCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The RxTotalCount attribute shall indicate the total number of received unique MAC frames. This value
shall only be reset upon a Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.40

##### attributes.rxUnicastCount

> `readonly` **rxUnicastCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The RxUnicastCount attribute shall indicate the total number of received unique unicast MAC frames. This
value shall only be reset upon a Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.41

##### attributes.txAckRequestedCount

> `readonly` **txAckRequestedCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The TxAckRequestedCount attribute shall indicate the total number of unique MAC frame transmission
requests with requested acknowledgment. The TxAckRequestedCount attribute shall only be incremented by 1
for each MAC transmission request with requested acknowledgment regardless of the amount of CCA
failures, CSMA-CA attempts, or retransmissions. This value shall only be reset upon a Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.26

##### attributes.txAckedCount

> `readonly` **txAckedCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The TxAckedCount attribute shall indicate the total number of unique MAC frame transmission requests
that were acked. The TxAckedCount attribute shall only be incremented by 1 for each MAC transmission
request that is acked regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions.
This value shall only be reset upon a Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.27

##### attributes.txBeaconCount

> `readonly` **txBeaconCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The TxBeaconCount attribute shall indicate the total number of unique MAC Beacon frame transmission
requests. The TxBeaconCount attribute shall only be incremented by 1 for each MAC Beacon frame
transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions.

###### See

MatterSpecification.v11.Core § 11.13.6.31

##### attributes.txBeaconRequestCount

> `readonly` **txBeaconRequestCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The TxBeaconRequestCount attribute shall indicate the total number of unique MAC Beacon Request frame
transmission requests. The TxBeaconRequestCount attribute shall only be incremented by 1 for each MAC
Beacon Request frame transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or
retransmissions. This value shall only be reset upon a Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.32

##### attributes.txBroadcastCount

> `readonly` **txBroadcastCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The TxBroadcastCount attribute shall indicate the total number of unique broadcast MAC frame
transmission requests. The TxBroadcastCount attribute shall only be incremented by 1 for each broadcast
MAC transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions.
This value shall only be reset upon a Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.25

##### attributes.txDataCount

> `readonly` **txDataCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The TxDataCount attribute shall indicate the total number of unique MAC Data frame transmission
requests. The TxDataCount attribute shall only be incremented by 1 for each MAC Data frame transmission
request regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions. This value shall
only be reset upon a Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.29

##### attributes.txDataPollCount

> `readonly` **txDataPollCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The TxDataPollCount attribute shall indicate the total number of unique MAC Data Poll frame transmission
requests. The TxDataPollCount attribute shall only be incremented by 1 for each MAC Data Poll frame
transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions.
This value shall only be reset upon a Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.30

##### attributes.txDirectMaxRetryExpiryCount

> `readonly` **txDirectMaxRetryExpiryCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The TxDirectMaxRetryExpiryCount attribute shall indicate the total number of unique MAC transmission
packets that meet maximal retry limit for direct packets. The TxDirectMaxRetryExpiryCount attribute
shall only be incremented by 1 for each unique MAC transmission packets that meets the maximal retry
limit for direct packets. This value shall only be reset upon a Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.35

##### attributes.txErrAbortCount

> `readonly` **txErrAbortCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The TxErrAbortCount attribute shall indicate the total number of unique MAC transmission request
failures caused by an abort error. The TxErrAbortCount attribute shall only be incremented by 1 for each
unique MAC transmission request failure caused by an abort error.

###### See

MatterSpecification.v11.Core § 11.13.6.38

##### attributes.txErrBusyChannelCount

> `readonly` **txErrBusyChannelCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The TxErrBusyChannelCount attribute shall indicate the total number of unique MAC transmission request
failures caused by an error as the result of a busy channel (a CSMA/CA fail). The TxErrBusyChannelCount
attribute shall only be incremented by 1 for each unique MAC transmission request failure caused by a
busy channel such as a CSMA/CA failure.

###### See

MatterSpecification.v11.Core § 11.13.6.39

##### attributes.txErrCcaCount

> `readonly` **txErrCcaCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The TxErrCcaCount attribute shall indicate the total number of CCA failures. The TxErrCcaCount attribute
shall only be incremented by 1 for each instance of a CCA failure. This value shall only be reset upon a
Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.37

##### attributes.txIndirectMaxRetryExpiryCount

> `readonly` **txIndirectMaxRetryExpiryCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The TxIndirectMaxRetryExpiryCount attribute shall indicate the total number of unique MAC transmission
packets that meet maximal retry limit for indirect packets. The TxIndirectMaxRetryExpiryCount attribute
shall only be incremented by 1 for each unique MAC transmission packets that meets the maximal retry
limit for indirect packets. This value shall only be reset upon a Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.36

##### attributes.txNoAckRequestedCount

> `readonly` **txNoAckRequestedCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The TxNoAckRequestedCount attribute shall indicate the total number of unique MAC frame transmission
requests without requested acknowledgment. The TxNoAckRequestedCount attribute shall only be incremented
by 1 for each MAC transmission request that is does not request acknowledgement regardless of the amount
of CCA failures, CSMA-CA attempts, or retransmissions.

###### See

MatterSpecification.v11.Core § 11.13.6.28

##### attributes.txOtherCount

> `readonly` **txOtherCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The TxOtherCount attribute shall indicate the total number of unique MAC frame transmission requests
that are not counted by any other attribute. The TxOtherCount attribute shall only be incremented by 1
for each MAC frame transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or
retransmissions. This value shall only be reset upon a Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.33

##### attributes.txRetryCount

> `readonly` **txRetryCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The TxRetryCount attribute shall indicate the total number of MAC retransmission attempts. The
TxRetryCount attribute shall only be incremented by 1 for each retransmission attempt that may be
triggered by lack of acknowledgement, CSMA/CA failure, or other type of transmission error. This value
shall only be reset upon a Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.34

##### attributes.txTotalCount

> `readonly` **txTotalCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The TxTotalCount attribute shall indicate the total number of unique MAC frame transmission requests.
The TxTotalCount attribute shall only be incremented by 1 for each MAC transmission request regardless
of the amount of CCA failures, CSMA-CA attempts, or retransmissions. This value shall only be reset upon
a Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.23

##### attributes.txUnicastCount

> `readonly` **txUnicastCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The TxUnicastCount attribute shall indicate the total number of unique unicast MAC frame transmission
requests. The TxUnicastCount attribute shall only be incremented by 1 for each unicast MAC transmission
request regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions. This value shall
only be reset upon a Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.24

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:516

***

### MleCountsComponent

> `const` **MleCountsComponent**: `object`

A ThreadNetworkDiagnosticsCluster supports these elements if it supports feature MleCounts.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.attachAttemptCount

> `readonly` **attachAttemptCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The AttachAttemptCount attribute shall indicate the number of attempts that have been made to attach to
a Thread network while the Node was detached from all Thread networks. This value shall only be reset
upon a Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.19

##### attributes.betterPartitionAttachAttemptCount

> `readonly` **betterPartitionAttachAttemptCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The BetterPartitionAttachAttemptCount attribute shall indicate the number of times a Node has attempted
to attach to a different Thread partition that it has determined is better than the partition it is
currently attached to. This value shall only be reset upon a Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.21

##### attributes.childRoleCount

> `readonly` **childRoleCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The ChildRoleCount attribute shall indicate the number of times the Node entered the
OT_DEVICE_ROLE_CHILD role as specified within the Thread specification. This value shall only be reset
upon a Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.16

##### attributes.detachedRoleCount

> `readonly` **detachedRoleCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The DetachedRoleCount attribute shall indicate the number of times the Node entered the
OT_DEVICE_ROLE_DETACHED role as specified within the Thread specification. This value shall only be
reset upon a Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.15

##### attributes.leaderRoleCount

> `readonly` **leaderRoleCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The LeaderRoleCount attribute shall indicate the number of times the Node entered the
OT_DEVICE_ROLE_LEADER role as specified within the Thread specification. This value shall only be reset
upon a Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.18

##### attributes.parentChangeCount

> `readonly` **parentChangeCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The ParentChangeCount attribute shall indicate the number of times a Node has changed its parent. This
value shall only be reset upon a Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.22

##### attributes.partitionIdChangeCount

> `readonly` **partitionIdChangeCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The PartitionIdChangeCount attribute shall indicate the number of times that the Thread network that the
Node is connected to has changed its Partition ID. This value shall only be reset upon a Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.20

##### attributes.routerRoleCount

> `readonly` **routerRoleCount**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The RouterRoleCount attribute shall indicate the number of times the Node entered the
OT_DEVICE_ROLE_ROUTER role as specified within the Thread specification. This value shall only be reset
upon a Node reboot.

###### See

MatterSpecification.v11.Core § 11.13.6.17

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:447

***

### TlvConnectionStatusEvent

> `const` **TlvConnectionStatusEvent**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Body of the ThreadNetworkDiagnostics connectionStatus event

#### See

MatterSpecification.v11.Core § 11.13.8.2

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:378

***

### TlvNeighborTableStruct

> `const` **TlvNeighborTableStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v11.Core § 11.13.5.4

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:50

***

### TlvNetworkFaultChangeEvent

> `const` **TlvNetworkFaultChangeEvent**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Body of the ThreadNetworkDiagnostics networkFaultChange event

#### See

MatterSpecification.v11.Core § 11.13.8.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:393

***

### TlvOperationalDatasetComponents

> `const` **TlvOperationalDatasetComponents**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v11.Core § 11.13.5.7

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:258

***

### TlvRouteTableStruct

> `const` **TlvRouteTableStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v11.Core § 11.13.5.5

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:158

***

### TlvSecurityPolicy

> `const` **TlvSecurityPolicy**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v11.Core § 11.13.5.6

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:234
