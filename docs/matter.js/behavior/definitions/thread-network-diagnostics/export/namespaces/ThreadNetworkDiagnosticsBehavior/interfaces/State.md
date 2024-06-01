[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/thread-network-diagnostics/export](../../../README.md) / [ThreadNetworkDiagnosticsBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### activeNetworkFaults

> **activeNetworkFaults**: [`NetworkFault`](../../../../../../../cluster/export/namespaces/ThreadNetworkDiagnostics/enumerations/NetworkFault.md)[]

The ActiveNetworkFaults attribute shall indicate the set of faults currently detected by the Node.

When the Node detects a fault has been raised, the appropriate NetworkFaultEnum value shall be added to
this list. This list shall NOT contain more than one instance of a specific NetworkFaultEnum value. When
the Node detects that all conditions contributing to a fault has been cleared, the corresponding
NetworkFaultEnum value shall be removed from this list. An empty list shall indicate there are currently
no active faults. The order of this list SHOULD have no significance. Clients interested in monitoring
changes in active faults may subscribe to this attribute, or they may subscribe to NetworkFaultChange

#### See

MatterSpecification.v11.Core § 11.13.6.63

#### Inherited from

`StateType.activeNetworkFaults`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1161](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1161)

***

### activeTimestamp?

> `optional` **activeTimestamp**: `null` \| `number` \| `bigint`

This attribute shall be null when there is no dataset configured.

#### See

MatterSpecification.v11.Core § 11.13.6.57

#### Inherited from

`StateType.activeTimestamp`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1106](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1106)

***

### channel

> **channel**: `null` \| `number`

The Channel attribute shall indicate the 802.15.4 channel number configured on the Node’s Thread
interface (that is, the Active Operational Dataset’s current Channel value). A value of null shall
indicate that the Thread interface is not currently configured or operational.

#### See

MatterSpecification.v11.Core § 11.13.6.1

#### Inherited from

`StateType.channel`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:996](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L996)

***

### channelPage0Mask

> **channelPage0Mask**: `null` \| `Uint8Array`

The ChannelPage0Mask attribute indicates the channels within channel page 0, in the 2.4GHz ISM band. The
channels are represented in most significant bit order, with bit value 1 meaning selected, bit value 0
meaning unselected. For example, the most significant bit of the left-most byte indicates channel 0. If
channel 0 and channel 10 are selected, the mask would be: 80 20 00 00. This attribute shall be null when
there is no dataset configured.

#### See

MatterSpecification.v11.Core § 11.13.6.61

#### Inherited from

`StateType.channelPage0Mask`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1139](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1139)

***

### dataVersion

> **dataVersion**: `null` \| `number`

The DataVersion attribute shall indicate the full Network Data Version the Node currently uses. This
attribute shall be null if not attached to a Thread network.

#### See

MatterSpecification.v11.Core § 11.13.6.12

#### Inherited from

`StateType.dataVersion`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1081](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1081)

***

### delay?

> `optional` **delay**: `null` \| `number`

This attribute shall be null when there is no dataset configured.

#### See

MatterSpecification.v11.Core § 11.13.6.59

#### Inherited from

`StateType.delay`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1120](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1120)

***

### extendedPanId

> **extendedPanId**: `null` \| `number` \| `bigint`

The ExtendedPanId attribute shall indicate the unique 64-bit identifier of the Node on the Thread
network. A value of null shall indicate that the Thread interface is not currently configured or
operational.

#### See

MatterSpecification.v11.Core § 11.13.6.5

#### Inherited from

`StateType.extendedPanId`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1032](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1032)

***

### leaderRouterId

> **leaderRouterId**: `null` \| `number`

The LeaderRouterId attribute shall indicate the 8-bit LeaderRouterId the Node shall attempt to utilize
upon becoming a router or leader on the Thread network. This attribute shall be null if not attached to
a Thread network.

#### See

MatterSpecification.v11.Core § 11.13.6.14

#### Inherited from

`StateType.leaderRouterId`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1099](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1099)

***

### meshLocalPrefix

> **meshLocalPrefix**: `null` \| `Uint8Array`

The MeshLocalPrefix attribute shall indicate the mesh-local IPv6 prefix for the Thread network that the
Node has been configured to join to. A value of null shall indicate that the Thread interface is not
currently configured or operational.

#### See

MatterSpecification.v11.Core § 11.13.6.6

#### Inherited from

`StateType.meshLocalPrefix`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1041](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1041)

***

### neighborTable

> **neighborTable**: [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

The NeighborTable attribute shall indicate the current list of Nodes that comprise the neighbor table on
the Node.

#### See

MatterSpecification.v11.Core § 11.13.6.8

#### Inherited from

`StateType.neighborTable`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1049](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1049)

***

### networkName

> **networkName**: `null` \| `string`

The NetworkName attribute shall indicate a human-readable (displayable) name for the Thread network that
the Node has been configured to join to. A value of null shall indicate that the Thread interface is not
currently configured or operational.

#### See

MatterSpecification.v11.Core § 11.13.6.3

#### Inherited from

`StateType.networkName`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1015](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1015)

***

### operationalDatasetComponents

> **operationalDatasetComponents**: `null` \| [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>

The OperationalDatasetComponents attribute is a collection of flags to indicate the presence of various
operationally acquired values.

#### See

MatterSpecification.v11.Core § 11.13.6.62

#### Inherited from

`StateType.operationalDatasetComponents`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1147](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1147)

***

### panId

> **panId**: `null` \| `number`

The PanId attribute shall indicate the 16-bit identifier of the Node on the Thread network. A value of
null shall indicate that the Thread interface is not currently configured or operational.

#### See

MatterSpecification.v11.Core § 11.13.6.4

#### Inherited from

`StateType.panId`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1023](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1023)

***

### partitionId

> **partitionId**: `null` \| `number`

The PartitionId attribute shall indicate the Thread Leader Partition Id for the Thread network to which
the Node is joined. This attribute shall be null if not attached to a Thread network.

#### See

MatterSpecification.v11.Core § 11.13.6.10

#### Inherited from

`StateType.partitionId`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1065](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1065)

***

### pendingTimestamp?

> `optional` **pendingTimestamp**: `null` \| `number` \| `bigint`

This attribute shall be null when there is no dataset configured.

#### See

MatterSpecification.v11.Core § 11.13.6.58

#### Inherited from

`StateType.pendingTimestamp`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1113](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1113)

***

### routeTable

> **routeTable**: [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

The RouteTable attribute shall indicate the current list of router capable Nodes for which routes have
been established.

#### See

MatterSpecification.v11.Core § 11.13.6.9

#### Inherited from

`StateType.routeTable`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1057](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1057)

***

### routingRole

> **routingRole**: `null` \| [`RoutingRole`](../../../../../../../cluster/export/namespaces/ThreadNetworkDiagnostics/enumerations/RoutingRole.md)

The RoutingRole attribute shall indicate the role that this Node has within the routing of messages
through the Thread network, as defined by RoutingRoleEnum. The potential roles are defined in the
following table. A value of null shall indicate that the Thread interface is not currently configured or
operational.

#### See

MatterSpecification.v11.Core § 11.13.6.2

#### Inherited from

`StateType.routingRole`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1006](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1006)

***

### securityPolicy

> **securityPolicy**: `null` \| [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>

The SecurityPolicy attribute indicates the current security policies for the Thread partition to which a
Node is connected. This attribute shall be null when there is no dataset configured.

#### See

MatterSpecification.v11.Core § 11.13.6.60

#### Inherited from

`StateType.securityPolicy`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1128](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1128)

***

### stableDataVersion

> **stableDataVersion**: `null` \| `number`

The StableDataVersion attribute shall indicate the Network Data Version for the stable subset of

data the Node currently uses. This attribute shall be null if not attached to a Thread network.

#### See

MatterSpecification.v11.Core § 11.13.6.13

#### Inherited from

`StateType.stableDataVersion`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1090](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1090)

***

### weighting

> **weighting**: `null` \| `number`

The Weighting attribute shall indicate the Thread Leader Weight used when operating in the Leader role.
This attribute shall be null if not attached to a Thread network.

#### See

MatterSpecification.v11.Core § 11.13.6.11

#### Inherited from

`StateType.weighting`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:1073](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L1073)
